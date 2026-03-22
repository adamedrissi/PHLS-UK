import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";

function SettingsPage() {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState(localStorage.getItem("phlsTheme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("phlsLanguage") || "en");
  const [notificationPreference, setNotificationPreference] = useState(
    localStorage.getItem("phlsNotificationPreference") || "BOTH"
  );

  useEffect(() => {
    localStorage.setItem("phlsTheme", theme);
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("phlsLanguage", language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  useEffect(() => {
    localStorage.setItem("phlsNotificationPreference", notificationPreference);
  }, [notificationPreference]);

  const notificationLabel =
    notificationPreference === "NONE"
      ? t("settings.notifications.none")
      : notificationPreference === "EMAIL"
      ? t("settings.notifications.email")
      : notificationPreference === "PHONE"
      ? t("settings.notifications.phone")
      : t("settings.notifications.both");

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">{t("settings.title")}</h1>
          <p className="page-subtitle">{t("settings.subtitle")}</p>
        </section>

        <section
          className="card"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "2rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "2rem",
            }}
          >
            <div>
              <h2 style={{ marginBottom: "0.75rem" }}>{t("common.theme")}</h2>
              <p style={{ color: "var(--text-soft)", marginBottom: "1rem" }}>
                {t("settings.themeDescription")}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "1rem",
                }}
              >
                <button
                  type="button"
                  className={theme === "light" ? "primary-btn" : "secondary-btn"}
                  onClick={() => setTheme("light")}
                >
                  {t("settings.lightMode")}
                </button>

                <button
                  type="button"
                  className={theme === "dark" ? "primary-btn" : "secondary-btn"}
                  onClick={() => setTheme("dark")}
                >
                  {t("settings.darkMode")}
                </button>
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: "0.75rem" }}>{t("common.language")}</h2>
              <p style={{ color: "var(--text-soft)", marginBottom: "1rem" }}>
                {t("settings.languageDescription")}
              </p>

              <LanguageSelector
                value={language}
                onChange={setLanguage}
              />
            </div>

            <div>
              <h2 style={{ marginBottom: "0.75rem" }}>{t("settings.notifications.title")}</h2>
              <p style={{ color: "var(--text-soft)", marginBottom: "1rem" }}>
                {t("settings.notifications.description")}
              </p>

              <div
                className="card"
                style={{
                  padding: "1rem",
                  background: "var(--surface-soft)",
                  boxShadow: "none",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "0.75rem",
                  }}
                >
                  <button
                    type="button"
                    className={
                      notificationPreference === "NONE" ? "primary-btn" : "secondary-btn"
                    }
                    onClick={() => setNotificationPreference("NONE")}
                  >
                    {t("settings.notifications.none")}
                  </button>

                  <button
                    type="button"
                    className={
                      notificationPreference === "EMAIL" ? "primary-btn" : "secondary-btn"
                    }
                    onClick={() => setNotificationPreference("EMAIL")}
                  >
                    {t("settings.notifications.email")}
                  </button>

                  <button
                    type="button"
                    className={
                      notificationPreference === "PHONE" ? "primary-btn" : "secondary-btn"
                    }
                    onClick={() => setNotificationPreference("PHONE")}
                  >
                    {t("settings.notifications.phone")}
                  </button>

                  <button
                    type="button"
                    className={
                      notificationPreference === "BOTH" ? "primary-btn" : "secondary-btn"
                    }
                    onClick={() => setNotificationPreference("BOTH")}
                  >
                    {t("settings.notifications.both")}
                  </button>
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: "1.25rem",
                background: "var(--surface-soft)",
                borderRadius: "16px",
                boxShadow: "none",
              }}
            >
              <h3 style={{ marginBottom: "0.75rem" }}>{t("settings.currentPreferences")}</h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <span className="status-pill">
                  {t("common.theme")}: {theme === "dark" ? t("common.dark") : t("common.light")}
                </span>
                <span className="status-pill">
                  {t("common.language")}: {t(`languages.${language}`)}
                </span>
                <span className="status-pill">
                  {t("settings.notifications.title")}: {notificationLabel}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SettingsPage;