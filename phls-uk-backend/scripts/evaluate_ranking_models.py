import math
import statistics
from dataclasses import dataclass
from datetime import date
from typing import Any, Dict, List, Optional

import requests


API_BASE_URL = "http://localhost:8080/api/ranking/slots"


@dataclass
class TestQuery:
    specialty: Optional[str] = None
    max_price: Optional[float] = None
    min_rating: Optional[float] = None
    preferred_date: Optional[str] = None   # YYYY-MM-DD
    preferred_time_bucket: Optional[str] = None   # MORNING / AFTERNOON / EVENING
    user_latitude: Optional[float] = None
    user_longitude: Optional[float] = None
    radius_miles: Optional[float] = None
    limit: int = 10


def build_request_params(query: TestQuery, ranking_model: str) -> Dict[str, Any]:
    params: Dict[str, Any] = {
        "rankingModel": ranking_model,
        "limit": query.limit,
        "evaluationMode": "true",
    }

    if query.specialty:
        params["specialty"] = query.specialty
    if query.max_price is not None:
        params["maxPrice"] = query.max_price
    if query.min_rating is not None:
        params["minRating"] = query.min_rating
    if query.preferred_date:
        params["preferredDate"] = query.preferred_date
    if query.preferred_time_bucket:
        params["preferredTimeBucket"] = query.preferred_time_bucket
    if query.user_latitude is not None:
        params["userLatitude"] = query.user_latitude
    if query.user_longitude is not None:
        params["userLongitude"] = query.user_longitude
    if query.radius_miles is not None:
        params["radiusMiles"] = query.radius_miles

    return params


def call_ranking_api(query: TestQuery, ranking_model: str) -> List[Dict[str, Any]]:
    params = build_request_params(query, ranking_model)
    response = requests.get(API_BASE_URL, params=params, timeout=20)
    response.raise_for_status()
    return response.json()


def get_time_bucket_from_datetime_string(dt: str) -> str:
    hour = int(dt[11:13])
    if hour < 12:
        return "MORNING"
    if hour < 17:
        return "AFTERNOON"
    return "EVENING"


def day_difference(date_a: str, date_b: str) -> int:
    ay, am, ad = map(int, date_a.split("-"))
    by, bm, bd = map(int, date_b.split("-"))
    a = date(ay, am, ad)
    b = date(by, bm, bd)
    return abs((a - b).days)


def date_score_for_relevance(query_date: Optional[str], slot_start_time: str) -> float:
    if not query_date:
        return 0.4

    slot_date = slot_start_time[:10]
    if slot_date == query_date:
        return 1.0

    diff = day_difference(query_date, slot_date)

    if diff <= 1:
        return 0.8
    if diff <= 3:
        return 0.5
    if diff <= 7:
        return 0.2
    return 0.0


def distance_miles(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    earth_radius_miles = 3958.8

    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)

    a = (
        math.sin(dlat / 2) ** 2
        + math.cos(math.radians(lat1))
        * math.cos(math.radians(lat2))
        * math.sin(dlon / 2) ** 2
    )
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return earth_radius_miles * c


def distance_score_for_relevance(query: TestQuery, slot: Dict[str, Any]) -> float:
    if (
        query.user_latitude is None
        or query.user_longitude is None
        or query.radius_miles is None
    ):
        return 0.4

    slot_lat = slot.get("clinicLatitude")
    slot_lon = slot.get("clinicLongitude")

    if slot_lat is None or slot_lon is None:
        return 0.4

    d = distance_miles(
        query.user_latitude,
        query.user_longitude,
        float(slot_lat),
        float(slot_lon),
    )

    if d <= query.radius_miles * 0.50:
        return 1.0
    if d <= query.radius_miles:
        return 0.7
    if d <= query.radius_miles * 1.25:
        return 0.3
    return 0.0


def assign_relevance(query: TestQuery, slot: Dict[str, Any]) -> int:
    """
    Synthetic relevance labels:
    3 = highly relevant
    2 = relevant
    1 = partially relevant
    0 = poor fit

    Deliberately related to, but not identical to, the baseline formula.
    """
    score = 0.0

    specialties = [s.lower() for s in slot.get("specialties", [])]

    # Specialty
    if query.specialty:
        if query.specialty.lower() in specialties:
            score += 2.0
        else:
            score += 0.0
    else:
        score += 0.4

    # Price
    slot_price = slot.get("price")
    if query.max_price is not None and slot_price is not None:
        slot_price = float(slot_price)
        if slot_price <= query.max_price:
            score += 1.0
        elif slot_price <= query.max_price * 1.10:
            score += 0.4
        else:
            score += 0.0
    else:
        score += 0.4

    # Rating
    slot_rating = slot.get("clinicRatingAverage")
    if query.min_rating is not None and slot_rating is not None:
        slot_rating = float(slot_rating)
        if slot_rating >= query.min_rating:
            score += 1.0
        elif slot_rating >= query.min_rating - 0.2:
            score += 0.4
        else:
            score += 0.0
    else:
        score += 0.4

    # Date
    start_time = slot.get("startTime")
    if start_time:
        score += date_score_for_relevance(query.preferred_date, start_time)

        # Time bucket
        if query.preferred_time_bucket:
            slot_bucket = get_time_bucket_from_datetime_string(start_time)
            if slot_bucket == query.preferred_time_bucket:
                score += 0.8
            else:
                score += 0.0
        else:
            score += 0.3

    # Distance
    score += distance_score_for_relevance(query, slot)

    if score >= 5.0:
        return 3
    if score >= 3.5:
        return 2
    if score >= 2.0:
        return 1
    return 0


def dcg(relevances: List[int], k: int) -> float:
    total = 0.0
    for i, rel in enumerate(relevances[:k], start=1):
        total += (2**rel - 1) / math.log2(i + 1)
    return total


def ndcg(relevances: List[int], k: int) -> float:
    if not relevances:
        return 0.0

    actual = dcg(relevances, k)
    ideal = dcg(sorted(relevances, reverse=True), k)
    return actual / ideal if ideal > 0 else 0.0


def precision_at_k(relevances: List[int], k: int, threshold: int = 2) -> float:
    top_k = relevances[:k]
    if not top_k:
        return 0.0
    relevant = sum(1 for r in top_k if r >= threshold)
    return relevant / len(top_k)


def evaluate_query(query: TestQuery) -> Optional[Dict[str, Dict[str, float]]]:
    baseline_results = call_ranking_api(query, "BASELINE")
    content_results = call_ranking_api(query, "CONTENT")

    print("Baseline returned:", len(baseline_results))
    print("Content returned:", len(content_results))
    print("Baseline first result:", baseline_results[:1])
    print("Content first result:", content_results[:1])

    if not baseline_results and not content_results:
        print("Skipping query: both models returned no results.")
        return None

    # Shared candidate pool: union of returned slots from both models
    pooled_slots_by_id: Dict[Any, Dict[str, Any]] = {}

    for slot in baseline_results:
        pooled_slots_by_id[slot["slotId"]] = slot

    for slot in content_results:
        pooled_slots_by_id[slot["slotId"]] = slot

    relevance_by_slot_id = {
        slot_id: assign_relevance(query, slot_data)
        for slot_id, slot_data in pooled_slots_by_id.items()
    }

    baseline_rels = [relevance_by_slot_id[slot["slotId"]] for slot in baseline_results]
    content_rels = [relevance_by_slot_id[slot["slotId"]] for slot in content_results]

    print("Baseline relevances:", baseline_rels)
    print("Content relevances:", content_rels)

    return {
        "BASELINE": {
            "NDCG@5": ndcg(baseline_rels, 5),
            "NDCG@10": ndcg(baseline_rels, 10),
            "P@5": precision_at_k(baseline_rels, 5),
        },
        "CONTENT": {
            "NDCG@5": ndcg(content_rels, 5),
            "NDCG@10": ndcg(content_rels, 10),
            "P@5": precision_at_k(content_rels, 5),
        },
    }


def summarize_results(results: List[Dict[str, Dict[str, float]]], skipped_queries: int) -> None:
    print("\n====================")
    print("Evaluation summary")
    print("====================")
    print(f"Evaluated queries: {len(results)}")
    print(f"Skipped queries  : {skipped_queries}")

    if not results:
        print("No successful evaluations were completed.")
        return

    for model in ["BASELINE", "CONTENT"]:
        ndcg5 = [r[model]["NDCG@5"] for r in results]
        ndcg10 = [r[model]["NDCG@10"] for r in results]
        p5 = [r[model]["P@5"] for r in results]

        print(f"\n=== {model} ===")
        print(f"Mean NDCG@5 : {statistics.mean(ndcg5):.4f}")
        print(f"Mean NDCG@10: {statistics.mean(ndcg10):.4f}")
        print(f"Mean P@5    : {statistics.mean(p5):.4f}")


def main() -> None:
    test_queries = [
        TestQuery(
            specialty="Physiotherapy",
            max_price=60,
            min_rating=4.0,
            preferred_date="2026-04-01",
            preferred_time_bucket="MORNING",
            user_latitude=51.5074,
            user_longitude=-0.1278,
            radius_miles=10,
            limit=10,
        ),
        TestQuery(
            specialty="Physiotherapy",
            max_price=80,
            min_rating=3.5,
            preferred_date="2026-04-03",
            preferred_time_bucket="AFTERNOON",
            user_latitude=53.4808,
            user_longitude=-2.2426,
            radius_miles=15,
            limit=10,
        ),
        TestQuery(
            specialty="Physiotherapy",
            max_price=50,
            preferred_date="2026-04-06",
            preferred_time_bucket="EVENING",
            user_latitude=53.4084,
            user_longitude=-2.9916,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Physiotherapy",
            min_rating=4.5,
            preferred_date="2026-04-22",
            user_latitude=51.4816,
            user_longitude=-3.1791,
            radius_miles=25,
            limit=10,
        ),
        TestQuery(
            specialty="Physiotherapy",
            max_price=70,
            min_rating=4.0,
            preferred_time_bucket="MORNING",
            limit=10,
        ),
        TestQuery(
            specialty="Dermatology",
            max_price=80,
            min_rating=4.0,
            preferred_date="2026-04-04",
            preferred_time_bucket="MORNING",
            user_latitude=52.4862,
            user_longitude=-1.8904,
            radius_miles=15,
            limit=10,
        ),
        TestQuery(
            specialty="Dermatology",
            max_price=90,
            min_rating=4.5,
            preferred_date="2026-04-22",
            preferred_time_bucket="AFTERNOON",
            user_latitude=51.5074,
            user_longitude=-0.1278,
            radius_miles=25,
            limit=10,
        ),
        TestQuery(
            specialty="Dermatology",
            max_price=60,
            preferred_date="2026-04-03",
            preferred_time_bucket="MORNING",
            user_latitude=53.8008,
            user_longitude=-1.5491,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Dermatology",
            min_rating=4.0,
            preferred_time_bucket="EVENING",
            user_latitude=55.8642,
            user_longitude=-4.2518,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Dermatology",
            max_price=75,
            min_rating=3.5,
            preferred_date="2026-04-06",
            limit=10,
        ),
        TestQuery(
            specialty="Cardiology",
            max_price=100,
            min_rating=4.0,
            preferred_date="2026-04-03",
            preferred_time_bucket="MORNING",
            user_latitude=55.9533,
            user_longitude=-3.1883,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Cardiology",
            max_price=90,
            min_rating=4.0,
            preferred_date="2026-04-04",
            preferred_time_bucket="AFTERNOON",
            user_latitude=53.4808,
            user_longitude=-2.2426,
            radius_miles=15,
            limit=10,
        ),
        TestQuery(
            specialty="Cardiology",
            max_price=80,
            preferred_date="2026-04-06",
            preferred_time_bucket="EVENING",
            user_latitude=52.4862,
            user_longitude=-1.8904,
            radius_miles=25,
            limit=10,
        ),
        TestQuery(
            specialty="Cardiology",
            min_rating=4.5,
            preferred_date="2026-04-22",
            user_latitude=51.4545,
            user_longitude=-2.5879,
            radius_miles=30,
            limit=10,
        ),
        TestQuery(
            specialty="Cardiology",
            max_price=110,
            min_rating=3.5,
            preferred_time_bucket="MORNING",
            limit=10,
        ),
        TestQuery(
            specialty="Mental Health",
            max_price=85,
            min_rating=4.0,
            preferred_date="2026-04-03",
            preferred_time_bucket="AFTERNOON",
            user_latitude=51.5074,
            user_longitude=-0.1278,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Mental Health",
            max_price=70,
            preferred_date="2026-04-06",
            preferred_time_bucket="EVENING",
            user_latitude=51.4816,
            user_longitude=-3.1791,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Mental Health",
            min_rating=4.0,
            preferred_time_bucket="MORNING",
            user_latitude=53.4808,
            user_longitude=-2.2426,
            radius_miles=25,
            limit=10,
        ),
        TestQuery(
            specialty="Mental Health",
            max_price=90,
            min_rating=3.5,
            preferred_date="2026-04-22",
            limit=10,
        ),
        TestQuery(
            specialty="Mental Health",
            preferred_date="2026-04-04",
            preferred_time_bucket="AFTERNOON",
            limit=10,
        ),
        TestQuery(
            specialty="Psychiatry",
            max_price=95,
            min_rating=4.0,
            preferred_date="2026-04-04",
            preferred_time_bucket="AFTERNOON",
            user_latitude=52.4862,
            user_longitude=-1.8904,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Psychiatry",
            max_price=100,
            preferred_date="2026-04-22",
            preferred_time_bucket="AFTERNOON",
            user_latitude=51.5074,
            user_longitude=-0.1278,
            radius_miles=25,
            limit=10,
        ),
        TestQuery(
            specialty="Psychiatry",
            min_rating=4.0,
            preferred_time_bucket="EVENING",
            user_latitude=55.8642,
            user_longitude=-4.2518,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Psychiatry",
            max_price=80,
            min_rating=3.5,
            preferred_date="2026-04-06",
            limit=10,
        ),
        TestQuery(
            specialty="Psychiatry",
            preferred_date="2026-04-03",
            limit=10,
        ),
        TestQuery(
            specialty="Osteopathy",
            max_price=75,
            min_rating=4.0,
            preferred_date="2026-04-03",
            preferred_time_bucket="MORNING",
            user_latitude=55.8642,
            user_longitude=-4.2518,
            radius_miles=20,
            limit=10,
        ),
        TestQuery(
            specialty="Osteopathy",
            max_price=85,
            preferred_date="2026-04-04",
            preferred_time_bucket="AFTERNOON",
            user_latitude=53.4808,
            user_longitude=-2.2426,
            radius_miles=25,
            limit=10,
        ),
        TestQuery(
            specialty="Osteopathy",
            min_rating=4.0,
            preferred_time_bucket="EVENING",
            user_latitude=51.4545,
            user_longitude=-2.5879,
            radius_miles=25,
            limit=10,
        ),
        TestQuery(
            specialty="Osteopathy",
            max_price=70,
            min_rating=3.5,
            preferred_date="2026-04-22",
            limit=10,
        ),
        TestQuery(
            specialty="Osteopathy",
            preferred_date="2026-04-06",
            limit=10,
        ),
    ]

    all_results: List[Dict[str, Dict[str, float]]] = []
    skipped_queries = 0

    for i, query in enumerate(test_queries, start=1):
        try:
            result = evaluate_query(query)

            if result is None:
                skipped_queries += 1
                print(f"\nQuery {i} skipped (no results from either model).")
                continue

            all_results.append(result)

            print(f"\nQuery {i}")
            print("BASELINE:", result["BASELINE"])
            print("CONTENT :", result["CONTENT"])

        except Exception as exc:
            print(f"\nQuery {i} failed: {exc}")

    summarize_results(all_results, skipped_queries)


if __name__ == "__main__":
    main()