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

function SlotCard({ slot }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        backgroundColor: "#ffffff",
        color: "#111111",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{slot.providerName}</h3>

      <p><strong>Clinic:</strong> {slot.clinicName}</p>
      <p><strong>City:</strong> {slot.city}</p>
      <p><strong>Postcode:</strong> {slot.postcode}</p>
      <p><strong>Price:</strong> £{slot.price}</p>
      <p><strong>Rating:</strong> {slot.clinicRatingAverage ?? "N/A"}</p>
      <p>
        <strong>Specialties:</strong>{" "}
        {slot.specialties?.length ? slot.specialties.join(", ") : "Not listed"}
      </p>
      <p>
        <strong>Date:</strong> {formatDate(slot.startTime)}
      </p>
      <p>
        <strong>Time:</strong> {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
      </p>

      <button>Book</button>
    </div>
  );
}

export default SlotCard;