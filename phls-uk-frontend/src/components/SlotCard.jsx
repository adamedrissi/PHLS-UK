import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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

      alert(result.message || t("slotCard.bookingConfirmed"));
      if (onBooked) {
        onBooked(slot.slotId);
      }
    } catch (err) {
      alert(err.message || t("slotCard.bookingFailed"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card" style={{ padding: "1.25rem", textAlign: "left" }}>
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

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <span className="status-pill">£{slot.price}</span>
          {slot.rankingModel && (
            <span className="status-pill">
              {slot.rankingModel === "BASELINE"
                ? t("slotCard.baseline")
                : t("slotCard.content")}
            </span>
          )}
          {slot.rankingScore !== undefined && slot.rankingScore !== null && (
            <span className="status-pill">
              {t("slotCard.score")}: {Number(slot.rankingScore).toFixed(3)}
            </span>
          )}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "0.6rem",
          marginBottom: "1.2rem",
          color: "var(--text-soft)",
        }}
      >
        <p>
          <strong style={{ color: "var(--text)" }}>{t("slotCard.city")}:</strong> {slot.city}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>{t("slotCard.postcode")}:</strong> {slot.postcode}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>{t("slotCard.rating")}:</strong>{" "}
          {slot.clinicRatingAverage ?? t("slotCard.notAvailable")}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>{t("slotCard.specialties")}:</strong>{" "}
          {slot.specialties?.length ? slot.specialties.join(", ") : t("slotCard.notListed")}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>{t("manageBookings.date")}:</strong>{" "}
          {formatDate(slot.startTime)}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>{t("manageBookings.time")}:</strong>{" "}
          {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
        </p>
      </div>

      {showBookButton ? (
        <button className="primary-btn" onClick={handleBook} disabled={loading}>
          {loading ? t("slotCard.bookingInProgress") : t("slotCard.bookAppointment")}
        </button>
      ) : (
        <p style={{ fontStyle: "italic", color: "var(--text-soft)", marginBottom: 0 }}>
          {t("slotCard.loginAsPatient")}
        </p>
      )}
    </div>
  );
}

export default SlotCard;