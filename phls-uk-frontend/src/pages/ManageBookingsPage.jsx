import { useEffect, useState } from "react";
import { cancelBooking, getMyBookings } from "../services/bookingService";

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

function ManageBookingsPage() {
  const userId = localStorage.getItem("phlsUserId");
  const role = localStorage.getItem("phlsRole");
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getMyBookings(userId);
        setBookings(data);
      } catch (err) {
        setError(err.message || "Failed to load bookings");
      }
    }

    if (role === "PATIENT" && userId) {
      load();
    }
  }, [userId, role]);

  async function handleCancel(bookingId) {
    try {
      const result = await cancelBooking(bookingId, userId);
      alert(result.message || "Booking cancelled");
      const updated = await getMyBookings(userId);
      setBookings(updated);
    } catch (err) {
      alert(err.message || "Failed to cancel booking");
    }
  }

  if (role !== "PATIENT" && role !== "PROVIDER") {
  return (
    <div className="page">
      <div className="page-container">
        <section className="card" style={{ padding: "2rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "0.75rem" }}>Access restricted</h2>
          <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
            Only patients and providers can manage bookings.
          </p>
        </section>
      </div>
    </div>
  );
}

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">Manage Bookings</h1>
          <p className="page-subtitle">
            View and manage booking records from your account.
          </p>
        </section>

        {error && (
          <div
            className="error-box"
            style={{ maxWidth: "900px", margin: "0 auto 1.5rem" }}
          >
            {error}
          </div>
        )}

        {bookings.length === 0 ? (
          <section
            className="card"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <p style={{ marginBottom: 0 }}>No bookings found.</p>
          </section>
        ) : (
          <section
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gap: "1rem",
            }}
          >
            {bookings.map((booking) => (
              <div
                key={booking.bookingId}
                className="card"
                style={{
                  padding: "1.5rem",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <h3 style={{ marginBottom: "0.35rem" }}>{booking.providerName}</h3>
                    <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
                      {booking.clinicName}
                    </p>
                  </div>

                  <span className="status-pill">
                    {booking.bookingStatus}
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: "0.65rem",
                    color: "var(--text-soft)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <p>
                    <strong style={{ color: "var(--text)" }}>Date:</strong>{" "}
                    {formatDate(booking.startTime)}
                  </p>
                  <p>
                    <strong style={{ color: "var(--text)" }}>Time:</strong>{" "}
                    {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
                  </p>
                </div>

                {booking.bookingStatus !== "CANCELLED" && (
                  <button
                    className="danger-btn"
                    onClick={() => handleCancel(booking.bookingId)}
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default ManageBookingsPage;