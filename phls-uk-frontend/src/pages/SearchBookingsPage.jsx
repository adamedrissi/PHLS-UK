import { useEffect, useState } from "react";
import { searchAvailableSlots } from "../services/slotService";
import SlotCard from "../components/SlotCard";

function SearchBookingsPage() {
  const [slots, setSlots] = useState([]);
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [date, setDate] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadSlots();
  }, []);

  async function loadSlots() {
    try {
      setLoading(true);
      setError("");
      const data = await searchAvailableSlots({});
      setSlots(data);
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

      const data = await searchAvailableSlots({
        city,
        specialty,
        maxPrice,
        date,
      });

      setSlots(data);
    } catch (err) {
      setError(err.message || "Search failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleReset() {
    setCity("");
    setSpecialty("");
    setMaxPrice("");
    setDate("");
    await loadSlots();
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
            Find available appointments by city, specialty, date, and budget.
          </p>
        </section>

        <section
          className="card"
          style={{
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <form
            onSubmit={handleSearch}
            className="form-grid"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <label className="form-label">City</label>
                <input
                  type="text"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Specialty</label>
                <input
                  type="text"
                  placeholder="Enter specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Maximum price</label>
                <input
                  type="number"
                  placeholder="e.g. 200"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Preferred date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
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

        {loading && (
          <div className="text-center">
            <p>Loading available slots...</p>
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
              <SlotCard
                key={slot.slotId}
                slot={slot}
                onBooked={handleBooked}
              />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default SearchBookingsPage;