import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("phlsTheme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("phlsLanguage") || "English");

  useEffect(() => {
    localStorage.setItem("phlsTheme", theme);
    localStorage.setItem("phlsLanguage", language);
  }, [theme, language]);

  const isDark = theme === "dark";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#0d2a45" : "#cfe8f3",
        color: isDark ? "#ffffff" : "#0b2c6b",
        padding: "32px",
      }}
    >
      <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/searchbookings")}>Search Bookings</button>
        <button onClick={() => navigate("/searchinsurance")}>Search Insurance</button>
      </div>

      <h1 style={{ marginBottom: "24px" }}>Settings</h1>

      <div
        style={{
          maxWidth: "420px",
          backgroundColor: isDark ? "#12385a" : "#d9e5f0",
          border: "1px solid #8aa0b8",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ marginBottom: "12px" }}>Theme</h3>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => setTheme("light")}
              style={{
                backgroundColor: theme === "light" ? "#16a34a" : "#cccccc",
                color: theme === "light" ? "#ffffff" : "#111111",
                border: "none",
                padding: "10px 16px",
                cursor: "pointer",
              }}
            >
              Light
            </button>

            <button
              onClick={() => setTheme("dark")}
              style={{
                backgroundColor: theme === "dark" ? "#dc2626" : "#cccccc",
                color: theme === "dark" ? "#ffffff" : "#111111",
                border: "none",
                padding: "10px 16px",
                cursor: "pointer",
              }}
            >
              Dark
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "12px" }}>Language</h3>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #999",
            }}
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
      </div>
    </div>
  );
}

export default SettingsPage;