import { useMemo, useState } from "react";

function SearchInsurancePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const insuranceProviders = [
    {
      id: 1,
      name: "WPA Health Insurance",
      priceFrom: "£33/month",
      description:
        "Flexible healthcare plans with varying levels of outpatient and inpatient coverage.",
      quoteLink: "https://my-i.wpa.org.uk/get-quote",
    },
    {
      id: 2,
      name: "Vitality Health and Life Insurance",
      priceFrom: "£35/month",
      description:
        "Includes video GP appointments, private treatment access, mental health support, cancer cover and physiotherapy.",
      quoteLink: "https://www.vitality.co.uk/health-insurance/online-quote/your-name/",
    },
    {
      id: 3,
      name: "AVIVA Health Insurance",
      priceFrom: "£36/month",
      description:
        "Looks to cut down waiting times, includes wellbeing benefits and rewards, extensive cancer care and mental health cover.",
      quoteLink: "https://www.direct.aviva.co.uk/health/eligibility/existing-cover",
    },
    {
      id: 4,
      name: "Bupa Health Cover",
      priceFrom: "£38/month",
      description:
        "Private healthcare coverage with specialist access, diagnostics, therapies and selected private hospital options.",
      quoteLink: "https://www.bupa.co.uk/health/health-insurance/quote",
    },
    {
      id: 5,
      name: "AXA Health Insurance",
      priceFrom: "£40/month",
      description:
        "Includes full hospital fees, specialist consultations, diagnostics, CT and MRI scans, and private treatment support.",
      quoteLink: "https://quote.axahealth.co.uk/",
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
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">Medical Insurance Search</h1>
          <p className="page-subtitle">
            Browse and compare private medical insurance providers in a cleaner, simpler layout.
          </p>
        </section>

        <section
          className="card"
          style={{
            maxWidth: "980px",
            margin: "0 auto 2rem",
            padding: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <label className="form-label">Search insurance providers</label>
            <input
              type="text"
              placeholder="Type provider name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            display: "grid",
            gap: "1rem",
          }}
        >
          {filteredProviders.length === 0 ? (
            <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
              <p style={{ marginBottom: 0 }}>No insurance providers found.</p>
            </div>
          ) : (
            filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="card"
                style={{
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) auto",
                    gap: "1.25rem",
                    alignItems: "center",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <h3 style={{ marginBottom: "0.5rem" }}>{provider.name}</h3>
                    <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
                      {provider.description}
                    </p>
                  </div>

                  <div
                    style={{
                      minWidth: "180px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        marginBottom: "0.9rem",
                      }}
                    >
                      From {provider.priceFrom}
                    </p>
                    <a
                      href={provider.quoteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn"
                      style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "160px",
                        textDecoration: "none",
                        borderRadius: "12px",
                        padding: "0.85rem 1.2rem",
                      }}
                    >
                      Get a Quote ↗
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default SearchInsurancePage;