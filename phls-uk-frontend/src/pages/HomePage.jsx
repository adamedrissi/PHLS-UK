import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const token = localStorage.getItem("phlsToken");
  const role = localStorage.getItem("phlsRole") || "GUEST";
  const language = localStorage.getItem("phlsLanguage") || "English";
  const theme = localStorage.getItem("phlsTheme") || "light";

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">Welcome to PHLS-UK</h1>
          <p className="page-subtitle">
            Search, compare and access private healthcare services in one place.
            Designed to make booking and provider discovery simpler, faster and clearer.
          </p>
        </section>

        <section
          className="card"
          style={{
            padding: "2rem",
            maxWidth: "900px",
            margin: "0 auto 2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            <div className="status-pill" style={{ justifyContent: "center", padding: "1rem" }}>
              Role: {role}
            </div>
            <div className="status-pill" style={{ justifyContent: "center", padding: "1rem" }}>
              Authenticated: {token ? "Yes" : "No"}
            </div>
            <div className="status-pill" style={{ justifyContent: "center", padding: "1rem" }}>
              Language: {language}
            </div>
            <div className="status-pill" style={{ justifyContent: "center", padding: "1rem" }}>
              Theme: {theme}
            </div>
          </div>
        </section>

        <section
          className="card"
          style={{
            padding: "2rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2 className="text-center" style={{ marginBottom: "1.5rem" }}>
            Quick actions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >

            {role === "PATIENT" || role === "GUEST" && (
              <button className="primary-btn" onClick={() => navigate("/searchbookings")}>
                Search Bookings
              </button>
            )}

            {role === "PATIENT" || role === "PROVIDER" && (
              <button className="secondary-btn" onClick={() => navigate("/managebookings")}>
                Manage Bookings
              </button>
            )}
            
            {role === "PATIENT" || role === "GUEST" && (
              <button className="secondary-btn" onClick={() => navigate("/searchinsurance")}>
                Search Insurance
              </button>
            )}

            {role === "PATIENT" || role === "PROVIDER" && (
              <button className="secondary-btn" onClick={() => navigate("/manageprofile")}>
                Manage Profile
              </button>
            )}

            <button className="secondary-btn" onClick={() => navigate("/settings")}>
              Settings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;