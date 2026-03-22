function ProviderCard({ provider }) {
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
          Rating: {provider.clinicRatingAverage ?? "N/A"}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gap: "0.65rem",
          color: "var(--text-soft)",
        }}
      >
        <p><strong style={{ color: "var(--text)" }}>City:</strong> {provider.city}</p>
        <p><strong style={{ color: "var(--text)" }}>Postcode:</strong> {provider.postcode}</p>
        <p>
          <strong style={{ color: "var(--text)" }}>Price from:</strong> £
          {provider.consultationPriceFrom}
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>Specialties:</strong>{" "}
          {provider.specialties?.length ? provider.specialties.join(", ") : "Not listed"}
        </p>
      </div>
    </div>
  );
}

export default ProviderCard;