import { useEffect, useState } from "react";
import { searchRankedSlots, getAllSpecialties, searchLocation } from "../services/slotService";
import SlotCard from "../components/SlotCard";

function SearchBookingsPage() {
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
      setError(err.message || "Something went wrong");
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
      setError(err.message || "Search failed");
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
      setError(err.message || "Location search failed");
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
      setError(err.message || "Reset failed");
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
          <h1 className="page-title">Search Bookings</h1>
          <p className="page-subtitle">
            Find and rank available appointments by city, specialty, date, time, and budget.
          </p>
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
                <label className="form-label">Location</label>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <input
                    type="text"
                    placeholder="Enter UK town, city, postcode, or address"
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
                    Find location
                  </button>
                </div>

                {selectedLocation && (
                  <p style={{ marginTop: "0.5rem", color: "var(--text-soft)" }}>
                    Selected: {selectedLocation.displayName}
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
                <label className="form-label">Radius</label>
                <select
                  value={radiusMiles}
                  onChange={(e) => setRadiusMiles(e.target.value)}
                >
                  <option value="5">5 miles</option>
                  <option value="10">10 miles</option>
                  <option value="25">25 miles</option>
                  <option value="50">50 miles</option>
                </select>
              </div>

              <div>
                <label className="form-label">Specialty</label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                >
                  <option value="">All specialties</option>
                  {specialties.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Maximum price (£)</label>
                <input
                  type="number"
                  placeholder="Enter budget"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Minimum rating</label>
                <select
                  value={minRating}
                  onChange={(e) => setMinRating(e.target.value)}
                >
                  <option value="">Any rating</option>
                  <option value="3.5">3.5+</option>
                  <option value="4.0">4.0+</option>
                  <option value="4.5">4.5+</option>
                </select>
              </div>

              <div>
                <label className="form-label">Preferred date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Preferred time</label>
                <select
                  value={preferredTimeBucket}
                  onChange={(e) => setPreferredTimeBucket(e.target.value)}
                >
                  <option value="">Any time</option>
                  <option value="MORNING">Morning</option>
                  <option value="AFTERNOON">Afternoon</option>
                  <option value="EVENING">Evening</option>
                </select>
              </div>

              <div>
                <label className="form-label">Ranking model</label>
                <select
                  value={rankingModel}
                  onChange={(e) => setRankingModel(e.target.value)}
                >
                  <option value="BASELINE">Baseline weighted</option>
                  <option value="CONTENT">Content-based similarity</option>
                </select>
              </div>

              <div>
                <label className="form-label">Results limit</label>
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
                Search
              </button>
              <button type="button" className="secondary-btn" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </section>

        {!loading && !error && slots.length > 0 && (
          <div className="text-center" style={{ marginBottom: "1rem" }}>
            <p>
              Showing {slots.length} ranked result{slots.length !== 1 ? "s" : ""} using{" "}
              <strong>
                {rankingModel === "BASELINE"
                  ? "Baseline weighted ranking"
                  : "Content-based similarity"}
              </strong>
            </p>
          </div>
        )}

        {loading && (
          <div className="text-center">
            <p>Loading ranked slots...</p>
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
            <p>No available bookings found.</p>
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