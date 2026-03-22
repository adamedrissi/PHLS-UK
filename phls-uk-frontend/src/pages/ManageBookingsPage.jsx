import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  cancelBooking,
  cancelBookingAsProvider,
  getMyBookings,
  getProviderBookings,
} from "../services/bookingService";
import {
  getProviderSlots,
  createProviderSlot,
  deleteProviderSlot,
} from "../services/providerSlotService";

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

function formatDateTimeLocal(date) {
  const pad = (value) => String(value).padStart(2, "0");
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function ManageBookingsPage() {
  const { t } = useTranslation();

  const userId = localStorage.getItem("phlsUserId");
  const role = localStorage.getItem("phlsRole");

  const [bookings, setBookings] = useState([]);
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [startTime, setStartTime] = useState(formatDateTimeLocal(new Date()));
  const [endTime, setEndTime] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    loadData();
  }, [userId, role]);

  async function loadData() {
    try {
      setLoading(true);
      setError("");

      if (!userId || !role) return;

      if (role === "PATIENT") {
        const patientBookings = await getMyBookings(userId);
        setBookings(patientBookings);
        setSlots([]);
      } else if (role === "PROVIDER") {
        const [providerBookings, providerSlots] = await Promise.all([
          getProviderBookings(userId),
          getProviderSlots(userId),
        ]);
        setBookings(providerBookings);
        setSlots(providerSlots);
      }
    } catch (err) {
      setError(err.message || t("manageBookings.failedToLoadData"));
    } finally {
      setLoading(false);
    }
  }

  async function handleCancelBooking(bookingId) {
    try {
      const result =
        role === "PROVIDER"
          ? await cancelBookingAsProvider(bookingId, userId)
          : await cancelBooking(bookingId, userId);

      alert(result.message || t("manageBookings.bookingCancelled"));
      await loadData();
    } catch (err) {
      alert(err.message || t("manageBookings.failedToCancelBooking"));
    }
  }

  async function handleCreateSlot(e) {
    e.preventDefault();

    try {
      const result = await createProviderSlot({
        userId: Number(userId),
        startTime,
        endTime,
        price: Number(price),
      });

      alert(
        `${t("manageBookings.slotCreatedFor")} ${formatDate(result.startTime)} ${formatTime(
          result.startTime
        )}`
      );
      setEndTime("");
      setPrice("");
      await loadData();
    } catch (err) {
      alert(err.message || t("manageBookings.failedToCreateSlot"));
    }
  }

  async function handleDeleteSlot(slotId) {
    try {
      const result = await deleteProviderSlot(slotId, userId);
      alert(result.message || t("manageBookings.slotDeleted"));
      await loadData();
    } catch (err) {
      alert(err.message || t("manageBookings.failedToDeleteSlot"));
    }
  }

  if (role !== "PATIENT" && role !== "PROVIDER") {
    return (
      <div className="page">
        <div className="page-container">
          <section className="card" style={{ padding: "2rem", textAlign: "center" }}>
            <h2 style={{ marginBottom: "0.75rem" }}>{t("manageBookings.accessRestricted")}</h2>
            <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
              {t("manageBookings.onlyPatientsProviders")}
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
          <h1 className="page-title">
            {role === "PROVIDER"
              ? t("manageBookings.providerTitle")
              : t("manageBookings.patientTitle")}
          </h1>
          <p className="page-subtitle">
            {role === "PROVIDER"
              ? t("manageBookings.providerSubtitle")
              : t("manageBookings.patientSubtitle")}
          </p>
        </section>

        {error && (
          <div className="error-box" style={{ maxWidth: "900px", margin: "0 auto 1.5rem" }}>
            {error}
          </div>
        )}

        {loading ? (
          <section className="card" style={{ padding: "2rem", textAlign: "center" }}>
            <p style={{ marginBottom: 0 }}>{t("manageBookings.loading")}</p>
          </section>
        ) : (
          <>
            <section style={{ maxWidth: "1000px", margin: "0 auto 2rem" }}>
              <h2 style={{ marginBottom: "1rem" }}>
                {role === "PROVIDER"
                  ? t("manageBookings.appointmentBookings")
                  : t("manageBookings.yourBookings")}
              </h2>

              {bookings.length === 0 ? (
                <section className="card" style={{ padding: "2rem", textAlign: "center" }}>
                  <p style={{ marginBottom: 0 }}>{t("manageBookings.noBookingsFound")}</p>
                </section>
              ) : (
                <section style={{ display: "grid", gap: "1rem" }}>
                  {bookings.map((booking) => (
                    <div
                      key={booking.bookingId}
                      className="card"
                      style={{ padding: "1.5rem", textAlign: "left" }}
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

                        <span className="status-pill">{booking.bookingStatus}</span>
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
                          <strong style={{ color: "var(--text)" }}>
                            {t("manageBookings.date")}:
                          </strong>{" "}
                          {formatDate(booking.startTime)}
                        </p>
                        <p>
                          <strong style={{ color: "var(--text)" }}>
                            {t("manageBookings.time")}:
                          </strong>{" "}
                          {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
                        </p>
                      </div>

                      {booking.bookingStatus !== "CANCELLED" && (
                        <button
                          className="danger-btn"
                          onClick={() => handleCancelBooking(booking.bookingId)}
                        >
                          {role === "PROVIDER"
                            ? t("manageBookings.cancelBookingAsProvider")
                            : t("manageBookings.cancelBooking")}
                        </button>
                      )}
                    </div>
                  ))}
                </section>
              )}
            </section>

            {role === "PROVIDER" && (
              <section style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <h2 style={{ marginBottom: "1rem" }}>{t("manageBookings.manageAvailableSlots")}</h2>

                <section className="card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
                  <form onSubmit={handleCreateSlot} className="form-grid">
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1rem",
                      }}
                    >
                      <div>
                        <label className="form-label">{t("manageBookings.startTime")}</label>
                        <input
                          type="datetime-local"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <label className="form-label">{t("manageBookings.endTime")}</label>
                        <input
                          type="datetime-local"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <label className="form-label">{t("manageBookings.price")}</label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: "0.75rem" }}>
                      <button type="submit" className="primary-btn">
                        {t("manageBookings.addSlot")}
                      </button>
                    </div>
                  </form>
                </section>

                {slots.length === 0 ? (
                  <section className="card" style={{ padding: "2rem", textAlign: "center" }}>
                    <p style={{ marginBottom: 0 }}>{t("manageBookings.noSlotsFound")}</p>
                  </section>
                ) : (
                  <section style={{ display: "grid", gap: "1rem" }}>
                    {slots.map((slot) => (
                      <div
                        key={slot.slotId}
                        className="card"
                        style={{ padding: "1.5rem", textAlign: "left" }}
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
                            <h3 style={{ marginBottom: "0.35rem" }}>{slot.clinicName}</h3>
                            <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
                              £{slot.price}
                            </p>
                          </div>

                          <span className="status-pill">{slot.status}</span>
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
                            <strong style={{ color: "var(--text)" }}>
                              {t("manageBookings.date")}:
                            </strong>{" "}
                            {formatDate(slot.startTime)}
                          </p>
                          <p>
                            <strong style={{ color: "var(--text)" }}>
                              {t("manageBookings.time")}:
                            </strong>{" "}
                            {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                          </p>
                        </div>

                        {slot.status !== "BOOKED" && (
                          <button
                            className="danger-btn"
                            onClick={() => handleDeleteSlot(slot.slotId)}
                          >
                            {t("manageBookings.removeSlot")}
                          </button>
                        )}
                      </div>
                    ))}
                  </section>
                )}
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ManageBookingsPage;