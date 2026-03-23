import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="page-container">
        <section
          className="card"
          style={{
            maxWidth: "760px",
            margin: "4rem auto",
            padding: "3rem 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-soft)",
              marginBottom: "0.75rem",
            }}
          >
            {t("notFound.errorCode")}
          </p>

          <h1
            className="page-title"
            style={{
              marginBottom: "1rem",
            }}
          >
            {t("notFound.title")}
          </h1>

          <p
            className="page-subtitle"
            style={{
              marginBottom: "2rem",
            }}
          >
            {t("notFound.subtitle")}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/"
              className="primary-btn button-link"
              style={{ textDecoration: "none" }}
            >
              {t("notFound.goToLogin")}
            </Link>

            <Link
              to="/home"
              className="secondary-btn button-link"
              style={{ textDecoration: "none" }}
            >
              {t("notFound.goToHome")}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NotFoundPage;