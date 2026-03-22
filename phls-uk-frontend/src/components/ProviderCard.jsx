import { useTranslation } from "react-i18next";

function ProviderCard({ provider }) {
  const { t } = useTranslation();

  return (
    <div
      className="card"
      style={{
        padding: "1.25rem",
        textAlign: "left",
        height: "100%",
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
          <h3 style={{ marginBottom: "0.35rem" }}>{provider.providerName}</h3>
          <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
            {provider.clinicName}
          </p>
        </div>

        <span className="status-pill">
          {t("providerCard.rating")}: {provider.clinicRatingAverage ?? t("slotCard.notAvailable")}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gap: "0.65rem",
          color: "var(--text-soft)",
        }}
      >
        <p>
          <strong style={{ color: "var(--text)" }}>{t("slotCard.city")}:</strong> {provider.city}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>{t("slotCard.postcode")}:</strong> {provider.postcode}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>{t("providerCard.priceFrom")}:</strong> £
          {provider.consultationPriceFrom}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>{t("slotCard.specialties")}:</strong>{" "}
          {provider.specialties?.length ? provider.specialties.join(", ") : t("slotCard.notListed")}
        </p>
      </div>
    </div>
  );
}

export default ProviderCard;