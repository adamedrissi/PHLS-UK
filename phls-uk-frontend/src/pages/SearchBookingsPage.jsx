import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  searchRankedSlots,
  getAllSpecialties,
  searchLocation,
} from "../services/slotService";
import SlotCard from "../components/SlotCard";

function SearchBookingsPage() {
  const { t } = useTranslation();

  const [slots, setSlots] = useState([]);
  const [specialty, setSpecialty] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [date, setDate] = useState("");
  const [preferredTimeBucket, setPreferredTimeBucket] = useState("");
  const [rankingModel, setRankingModel] = useState("BASELINE");
  const [limit, setLimit] = useState(10);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationResults, setLocationResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [radiusMiles, setRadiusMiles] = useState("10");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadInitialData();
  }, []);

  async function loadInitialData() {
    try {
      setLoading(true);
      setError("");

      const [specialtyData, slotData] = await Promise.all([
        getAllSpecialties(),
        searchRankedSlots({
          rankingModel: "BASELINE",
          limit: 10,
        }),
      ]);

      setSpecialties(specialtyData);
      setSlots(slotData);
    } catch (err) {
      setError(err.message || t("bookings.somethingWentWrong"));
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const data = await searchRankedSlots({
        specialty,
        maxPrice,
        minRating,
        preferredDate: date,
        preferredTimeBucket,
        rankingModel,
        limit,
        userLatitude: selectedLocation?.latitude,
        userLongitude: selectedLocation?.longitude,
        radiusMiles: selectedLocation ? radiusMiles : "",
      });

      setSlots(data);
    } catch (err) {
      setError(err.message || t("bookings.searchFailed"));
    } finally {
      setLoading(false);
    }
  }

  async function handleLocationLookup() {
    try {
      setError("");

      if (!locationQuery.trim()) {
        setLocationResults([]);
        return;
      }

      const results = await searchLocation(locationQuery.trim());
      setLocationResults(results);
    } catch (err) {
      setError(err.message || t("bookings.locationSearchFailed"));
    }
  }

  function handleSelectLocation(location) {
    setSelectedLocation(location);
    setLocationQuery(location.displayName);
    setLocationResults([]);
  }

  async function handleReset() {
    setSpecialty("");
    setMaxPrice("");
    setMinRating("");
    setDate("");
    setPreferredTimeBucket("");
    setRankingModel("BASELINE");
    setLimit(10);
    setLocationQuery("");
    setLocationResults([]);
    setSelectedLocation(null);
    setRadiusMiles("10");

    try {
      setLoading(true);
      setError("");

      const [specialtyData, slotData] = await Promise.all([
        getAllSpecialties(),
        searchRankedSlots({
          rankingModel: "BASELINE",
          limit: 10,
        }),
      ]);

      setSpecialties(specialtyData);
      setSlots(slotData);
    } catch (err) {
      setError(err.message || t("bookings.resetFailed"));
    } finally {
      setLoading(false);
    }
  }

  function handleBooked(slotId) {
    setSlots((prev) => prev.filter((slot) => slot.slotId !== slotId));
  }

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">{t("bookings.title")}</h1>
          <p className="page-subtitle">{t("bookings.subtitle")}</p>
        </section>

        <section className="card" style={{ padding: "2rem", marginBottom: "2rem" }}>
          <form
            onSubmit={handleSearch}
            className="form-grid"
            style={{ maxWidth: "1000px", margin: "0 auto" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <label className="form-label">{t("bookings.location")}</label>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <input
                    type="text"
                    placeholder={t("bookings.locationPlaceholder")}
                    value={locationQuery}
                    onChange={(e) => {
                      setLocationQuery(e.target.value);
                      setSelectedLocation(null);
                    }}
                  />
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={handleLocationLookup}
                  >
                    {t("bookings.findLocation")}
                  </button>
                </div>

                {selectedLocation && (
                  <p style={{ marginTop: "0.5rem", color: "var(--text-soft)" }}>
                    {t("bookings.selected")}: {selectedLocation.displayName}
                  </p>
                )}

                {locationResults.length > 0 && (
                  <div
                    className="card"
                    style={{
                      marginTop: "0.75rem",
                      padding: "0.75rem",
                      maxHeight: "220px",
                      overflowY: "auto",
                    }}
                  >
                    {locationResults.map((location, index) => (
                      <button
                        key={`${location.displayName}-${index}`}
                        type="button"
                        className="secondary-btn"
                        onClick={() => handleSelectLocation(location)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {location.displayName}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="form-label">{t("bookings.radius")}</label>
                <select
                  value={radiusMiles}
                  onChange={(e) => setRadiusMiles(e.target.value)}
                >
                  <option value="5">{t("bookings.radius5")}</option>
                  <option value="10">{t("bookings.radius10")}</option>
                  <option value="25">{t("bookings.radius25")}</option>
                  <option value="50">{t("bookings.radius50")}</option>
                </select>
              </div>

              <div>
                <label className="form-label">{t("bookings.specialty")}</label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                >
                  <option value="">{t("bookings.allSpecialties")}</option>
                  {specialties.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">{t("bookings.maximumPrice")}</label>
                <input
                  type="number"
                  placeholder={t("bookings.enterBudget")}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">{t("bookings.minimumRating")}</label>
                <select
                  value={minRating}
                  onChange={(e) => setMinRating(e.target.value)}
                >
                  <option value="">{t("bookings.anyRating")}</option>
                  <option value="3.5">{t("bookings.rating35")}</option>
                  <option value="4.0">{t("bookings.rating40")}</option>
                  <option value="4.5">{t("bookings.rating45")}</option>
                </select>
              </div>

              <div>
                <label className="form-label">{t("bookings.preferredDate")}</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">{t("bookings.preferredTime")}</label>
                <select
                  value={preferredTimeBucket}
                  onChange={(e) => setPreferredTimeBucket(e.target.value)}
                >
                  <option value="">{t("bookings.anyTime")}</option>
                  <option value="MORNING">{t("bookings.morning")}</option>
                  <option value="AFTERNOON">{t("bookings.afternoon")}</option>
                  <option value="EVENING">{t("bookings.evening")}</option>
                </select>
              </div>

              <div>
                <label className="form-label">{t("bookings.rankingModel")}</label>
                <select
                  value={rankingModel}
                  onChange={(e) => setRankingModel(e.target.value)}
                >
                  <option value="BASELINE">{t("bookings.baselineWeighted")}</option>
                  <option value="CONTENT">{t("bookings.contentBasedSimilarity")}</option>
                </select>
              </div>

              <div>
                <label className="form-label">{t("bookings.resultsLimit")}</label>
                <select
                  value={limit}
                  onChange={(e) => setLimit(Number(e.target.value))}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "0.5rem",
              }}
            >
              <button type="submit" className="primary-btn">
                {t("bookings.search")}
              </button>
              <button type="button" className="secondary-btn" onClick={handleReset}>
                {t("bookings.reset")}
              </button>
            </div>
          </form>
        </section>

        {!loading && !error && slots.length > 0 && (
          <div className="text-center" style={{ marginBottom: "1rem" }}>
            <p>
              {t("bookings.showing")} {slots.length} {slots.length !== 1 ? t("bookings.resultsPlural") : t("bookings.resultSingular")} {t("bookings.using")}{" "}
              <strong>
                {rankingModel === "BASELINE"
                  ? t("bookings.baselineWeightedRanking")
                  : t("bookings.contentBasedSimilarity")}
              </strong>
            </p>
          </div>
        )}

        {loading && (
          <div className="text-center">
            <p>{t("bookings.loadingRankedSlots")}</p>
          </div>
        )}

        {error && (
          <div
            className="error-box"
            style={{ maxWidth: "900px", margin: "0 auto 1.5rem" }}
          >
            {error}
          </div>
        )}

        {!loading && !error && slots.length === 0 && (
          <div className="text-center">
            <p>{t("bookings.noAvailableBookings")}</p>
          </div>
        )}

        {!loading && !error && slots.length > 0 && (
          <section
            style={{
              display: "grid",
              gap: "1rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {slots.map((slot) => (
              <SlotCard key={slot.slotId} slot={slot} onBooked={handleBooked} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default SearchBookingsPage;