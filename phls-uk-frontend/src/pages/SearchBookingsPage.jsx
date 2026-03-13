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

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "24px" }}>
      <h1>Search Bookings</h1>

      <form
        onSubmit={handleSearch}
        style={{
          display: "grid",
          gap: "12px",
          marginBottom: "24px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          backgroundColor: "#f8fbff",
        }}
      >
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="text"
          placeholder="Specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div style={{ display: "flex", gap: "12px" }}>
          <button type="submit">Search</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {loading && <p>Loading available slots...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && slots.length === 0 && (
        <p>No available bookings found.</p>
      )}

      {!loading && !error && slots.map((slot) => (
        <SlotCard key={slot.slotId} slot={slot} />
      ))}
    </div>
  );
}

export default SearchBookingsPage;