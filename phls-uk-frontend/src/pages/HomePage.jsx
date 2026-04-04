import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const token = localStorage.getItem("phlsToken");
  const role = localStorage.getItem("phlsRole") || "GUEST";
  const language = localStorage.getItem("phlsLanguage") || "en";
  const theme = localStorage.getItem("phlsTheme") || "light";

  const languageLabel = t(`languages.${language}`);

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">{t("home.title")}</h1>
          <p className="page-subtitle">{t("home.subtitle")}</p>
        </section>

        {/*<section
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
              {t("home.role")}: {role}
            </div>
            <div className="status-pill" style={{ justifyContent: "center", padding: "1rem" }}>
              {t("home.authenticated")}: {token ? t("common.yes") : t("common.no")}
            </div>
            <div className="status-pill" style={{ justifyContent: "center", padding: "1rem" }}>
              {t("home.language")}: {languageLabel}
            </div>
            <div className="status-pill" style={{ justifyContent: "center", padding: "1rem" }}>
              {t("home.theme")}: {theme}
            </div>
          </div>
        </section>*/}

        <section
          className="card"
          style={{
            padding: "2rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2 className="text-center" style={{ marginBottom: "1.5rem" }}>
            {t("common.quickActions")}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {(role === "PATIENT" || role === "GUEST") && (
              <button className="primary-btn" onClick={() => navigate("/searchbookings")}>
                {t("common.searchBookings")}
              </button>
            )}

            {(role === "PATIENT" || role === "PROVIDER") && (
              <button className="secondary-btn" onClick={() => navigate("/managebookings")}>
                {t("common.manageBookings")}
              </button>
            )}

            {(role === "PATIENT" || role === "GUEST") && (
              <button className="secondary-btn" onClick={() => navigate("/searchinsurance")}>
                {t("common.searchInsurance")}
              </button>
            )}

            {(role === "PATIENT" || role === "PROVIDER") && (
              <button className="secondary-btn" onClick={() => navigate("/manageprofile")}>
                {t("common.manageProfile")}
              </button>
            )}

            <button className="secondary-btn" onClick={() => navigate("/settings")}>
              {t("common.settings")}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;