import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const role = localStorage.getItem("phlsRole") || "GUEST";
  const language = localStorage.getItem("phlsLanguage") || "English";
  const theme = localStorage.getItem("phlsTheme") || "light";

  function handleLogout() {
    localStorage.removeItem("phlsRole");
    localStorage.removeItem("phlsLoggedIn");
    navigate("/");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "32px",
        backgroundColor: theme === "dark" ? "#0d2a45" : "#cfe8f3",
        color: theme === "dark" ? "#ffffff" : "#0b2c6b",
      }}
    >
      <h1>PHLS-UK Home</h1>
      <p style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}>
        Current role: {role}
      </p>
      <p style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}>
        Language: {language}
      </p>
      <p style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}>
        Theme: {theme}
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
        <button onClick={() => navigate("/searchbookings")}>Search Bookings</button>
        <button onClick={() => navigate("/searchinsurance")}>Search Insurance</button>
        <button onClick={() => navigate("/settings")}>Settings</button>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default HomePage;