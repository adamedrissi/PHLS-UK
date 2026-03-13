import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInsurancePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const insuranceProviders = [
    {
      id: 1,
      name: "Vitality Health and Life Insurance",
      priceFrom: "£35/month",
      description:
        "Includes video GP appointments, private treatment access, mental health support, cancer cover and physiotherapy.",
    },
    {
      id: 2,
      name: "AXA Health Insurance",
      priceFrom: "£40/month",
      description:
        "Includes full hospital fees, specialist consultations, diagnostics, CT and MRI scans, and private treatment support.",
    },
    {
      id: 3,
      name: "Bupa Health Cover",
      priceFrom: "£38/month",
      description:
        "Private healthcare coverage with specialist access, diagnostics, therapies and selected private hospital options.",
    },
    {
      id: 4,
      name: "WPA Health Insurance",
      priceFrom: "£33/month",
      description:
        "Flexible healthcare plans with varying levels of outpatient and inpatient coverage.",
    },
  ];

  const filteredProviders = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return insuranceProviders;

    return insuranceProviders.filter((provider) =>
      provider.name.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#cfe8f3",
        padding: "32px",
      }}
    >
      <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/settings")}>Settings</button>
      </div>

      <h1 style={{ color: "#0b2c6b", marginBottom: "24px" }}>
        Medical Insurance Search
      </h1>

      <div
        style={{
          maxWidth: "900px",
          backgroundColor: "#d9e5f0",
          border: "1px solid #8aa0b8",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "24px",
        }}
      >
        <input
          type="text"
          placeholder="Search insurance providers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #999",
            marginBottom: "8px",
          }}
        />
      </div>

      <div style={{ maxWidth: "900px" }}>
        {filteredProviders.length === 0 ? (
          <p style={{ color: "#111" }}>No insurance providers found.</p>
        ) : (
          filteredProviders.map((provider) => (
            <div
              key={provider.id}
              style={{
                backgroundColor: "#ffffff",
                color: "#111111",
                border: "1px solid #8aa0b8",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ marginTop: 0, marginBottom: "8px" }}>
                  {provider.name}
                </h3>
                <p style={{ margin: 0 }}>{provider.description}</p>
              </div>

              <div style={{ minWidth: "180px", textAlign: "right" }}>
                <p style={{ fontWeight: "bold", marginBottom: "12px" }}>
                  From {provider.priceFrom}
                </p>
                <button>Get a quote</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchInsurancePage;