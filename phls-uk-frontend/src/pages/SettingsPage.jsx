import { useEffect, useState } from "react";

function SettingsPage() {
  const [theme, setTheme] = useState(localStorage.getItem("phlsTheme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("phlsLanguage") || "English");
  const [notificationPreference, setNotificationPreference] = useState(
    localStorage.getItem("phlsNotificationPreference") || "BOTH"
  );

  useEffect(() => {
    localStorage.setItem("phlsTheme", theme);
    localStorage.setItem("phlsLanguage", language);
    localStorage.setItem("phlsNotificationPreference", notificationPreference);
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme, language, notificationPreference]);

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">
            Personalise your PHLS-UK experience with theme, language, and notification preferences.
          </p>
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
              <h2 style={{ marginBottom: "0.75rem" }}>Theme</h2>
              <p style={{ color: "var(--text-soft)", marginBottom: "1rem" }}>
                Choose how the platform looks across the main pages.
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
                  Light Mode
                </button>

                <button
                  type="button"
                  className={theme === "dark" ? "primary-btn" : "secondary-btn"}
                  onClick={() => setTheme("dark")}
                >
                  Dark Mode
                </button>
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: "0.75rem" }}>Language</h2>
              <p style={{ color: "var(--text-soft)", marginBottom: "1rem" }}>
                Select your preferred language for the interface.
              </p>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>English</option>
                <option>Welsh/Cymru</option>
                <option>Spanish</option>
                <option>Panjabi</option>
                <option>Polish</option>
                <option>Portuguese</option>
                <option>Romanian</option>
                <option>Urdu</option>
              </select>
            </div>

            <div>
              <h2 style={{ marginBottom: "0.75rem" }}>Notifications</h2>
              <p style={{ color: "var(--text-soft)", marginBottom: "1rem" }}>
                Choose how you would like to receive booking and platform notifications.
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
                    None
                  </button>

                  <button
                    type="button"
                    className={
                      notificationPreference === "EMAIL" ? "primary-btn" : "secondary-btn"
                    }
                    onClick={() => setNotificationPreference("EMAIL")}
                  >
                    Email
                  </button>

                  <button
                    type="button"
                    className={
                      notificationPreference === "PHONE" ? "primary-btn" : "secondary-btn"
                    }
                    onClick={() => setNotificationPreference("PHONE")}
                  >
                    Phone
                  </button>

                  <button
                    type="button"
                    className={
                      notificationPreference === "BOTH" ? "primary-btn" : "secondary-btn"
                    }
                    onClick={() => setNotificationPreference("BOTH")}
                  >
                    Both
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
              <h3 style={{ marginBottom: "0.75rem" }}>Current preferences</h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <span className="status-pill">Theme: {theme}</span>
                <span className="status-pill">Language: {language}</span>
                <span className="status-pill">
                  Notifications: {notificationPreference}
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