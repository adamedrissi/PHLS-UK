function ProviderCard({ provider }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        backgroundColor: "#ffffff",
        color: "#111111"
      }}
    >
      <h3 style={{ color: "#111111", marginTop: 0 }}>{provider.providerName}</h3>

      <p style={{ color: "#111111" }}>
        <strong>Clinic:</strong> {provider.clinicName}
      </p>

      <p style={{ color: "#111111" }}>
        <strong>City:</strong> {provider.city}
      </p>

      <p style={{ color: "#111111" }}>
        <strong>Postcode:</strong> {provider.postcode}
      </p>

      <p style={{ color: "#111111" }}>
        <strong>Price from:</strong> £{provider.consultationPriceFrom}
      </p>

      <p style={{ color: "#111111" }}>
        <strong>Rating:</strong> {provider.clinicRatingAverage}
      </p>

      <p style={{ color: "#111111" }}>
        <strong>Specialties:</strong>{" "}
        {provider.specialties && provider.specialties.length > 0
          ? provider.specialties.join(", ")
          : "Not listed"}
      </p>
    </div>
  );
}

export default ProviderCard;