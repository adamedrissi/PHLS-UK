import { useState } from "react";
import { createBooking } from "../services/bookingService";

function formatDate(dateTimeString) {
  return new Date(dateTimeString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(dateTimeString) {
  return new Date(dateTimeString).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function SlotCard({ slot, onBooked }) {
  const role = localStorage.getItem("phlsRole") || "GUEST";
  const userId = localStorage.getItem("phlsUserId");
  const showBookButton = role === "PATIENT";
  const [loading, setLoading] = useState(false);

  async function handleBook() {
    try {
      setLoading(true);
      const result = await createBooking({
        userId: Number(userId),
        slotId: slot.slotId,
        notes: "",
      });

      alert(result.message || "Booking confirmed");
      if (onBooked) {
        onBooked(slot.slotId);
      }
    } catch (err) {
      alert(err.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="card"
      style={{
        padding: "1.25rem",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          alignItems: "start",
          marginBottom: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "0.35rem" }}>{slot.providerName}</h3>
          <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
            {slot.clinicName}
          </p>
        </div>

        <span className="status-pill">£{slot.price}</span>
      </div>

      <div
        style={{
          display: "grid",
          gap: "0.6rem",
          marginBottom: "1.2rem",
          color: "var(--text-soft)",
        }}
      >
        <p><strong style={{ color: "var(--text)" }}>City:</strong> {slot.city}</p>
        <p><strong style={{ color: "var(--text)" }}>Postcode:</strong> {slot.postcode}</p>
        <p><strong style={{ color: "var(--text)" }}>Rating:</strong> {slot.clinicRatingAverage ?? "N/A"}</p>
        <p>
          <strong style={{ color: "var(--text)" }}>Specialties:</strong>{" "}
          {slot.specialties?.length ? slot.specialties.join(", ") : "Not listed"}
        </p>
        <p><strong style={{ color: "var(--text)" }}>Date:</strong> {formatDate(slot.startTime)}</p>
        <p>
          <strong style={{ color: "var(--text)" }}>Time:</strong>{" "}
          {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
        </p>
      </div>

      {showBookButton ? (
        <button className="primary-btn" onClick={handleBook} disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      ) : (
        <p style={{ fontStyle: "italic", color: "var(--text-soft)", marginBottom: 0 }}>
          Log in as a patient to book this appointment.
        </p>
      )}
    </div>
  );
}

export default SlotCard;