import { useState } from "react";
import { useNavigate } from "react-router-dom";
import en from '../assets/en.png';
import cy from '../assets/cy.png';
import es from '../assets/es.png';
import pa from '../assets/pa.png';
import pl from '../assets/pl.png';
import pt from '../assets/pt.png';
import ro from '../assets/ro.png';
import ur from '../assets/ur.png';
//import AddressAutocomplete from '../components/AddressAutocomplete';

function LoginRegisterPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [userType, setUserType] = useState("PATIENT");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleGuestEntry() {
    localStorage.setItem("phlsRole", "GUEST");
    navigate("/home");
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    console.log("Login form:", { ...loginForm, userType });

    localStorage.setItem("phlsRole", userType);
    localStorage.setItem("phlsLoggedIn", "true");

    navigate("/home");
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register form:", { ...registerForm, userType });

    localStorage.setItem("phlsRole", userType);
    localStorage.setItem("phlsLoggedIn", "true");

    navigate("/home");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#cfe8f3",
        padding: "32px",
        color: "#0b2c6b"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "24px", color: "#000" }}>
        USER REGISTRATION & AUTHENTICATION
      </h1>

      <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
        <button
          onClick={() => setMode("login")}
          style={{
            backgroundColor: mode === "login" ? "#16a34a" : "#0b2c6b",
            color: "white",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer"
          }}
        >
          LOGIN
        </button>

        <button
          onClick={() => setMode("register")}
          style={{
            backgroundColor: mode === "register" ? "#dc2626" : "#0b2c6b",
            color: "white",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer"
          }}
        >
          REGISTER
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#0b2c6b" }}>PHLS-UK</h2>
        <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
          <button
            onClick={() => setUserType("PATIENT")}
            style={{
              backgroundColor: userType === "PATIENT" ? "#16a34a" : "#ccc",
              color: userType === "PATIENT" ? "white" : "black",
              border: "none",
              padding: "10px 18px",
              cursor: "pointer"
            }}
          >
            PATIENT
          </button>

          <button
            onClick={() => setUserType("PROVIDER")}
            style={{
              backgroundColor: userType === "PROVIDER" ? "#dc2626" : "#ccc",
              color: userType === "PROVIDER" ? "white" : "black",
              border: "none",
              padding: "10px 18px",
              cursor: "pointer"
            }}
          >
            PROVIDER
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: "420px",
          backgroundColor: "#d9e5f0",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #999"
        }}
      >
        {mode === "login" ? (
          <form onSubmit={handleLoginSubmit}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Username / Email
            </label>
            <input
              type="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              placeholder="Enter Email Address..."
              style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
            />

            <label style={{ display: "block", marginBottom: "8px" }}>
              Password
            </label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              placeholder="Enter Password..."
              style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#0b2c6b",
                color: "white",
                border: "none",
                padding: "12px 20px",
                cursor: "pointer"
              }}
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Full Name
            </label>
            <input
              type="text"
              value={registerForm.fullName}
              onChange={(e) =>
                setRegisterForm({ ...registerForm, fullName: e.target.value })
              }
              style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
            />

            <label style={{ display: "block", marginBottom: "8px" }}>
              Email
            </label>
            <input
              type="email"
              value={registerForm.email}
              onChange={(e) =>
                setRegisterForm({ ...registerForm, email: e.target.value })
              }
              style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
            />

            <label style={{ display: "block", marginBottom: "8px" }}>
              Password
            </label>
            <input
              type="password"
              value={registerForm.password}
              onChange={(e) =>
                setRegisterForm({ ...registerForm, password: e.target.value })
              }
              style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
            />

            <label style={{ display: "block", marginBottom: "8px" }}>
              Confirm Password
            </label>
            <input
              type="password"
              value={registerForm.confirmPassword}
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  confirmPassword: e.target.value
                })
              }
              style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#0b2c6b",
                color: "white",
                border: "none",
                padding: "12px 20px",
                cursor: "pointer"
              }}
            >
              Register
            </button>
          </form>
        )}
      </div>

      <div style={{ marginTop: "24px" }}>
        <button
          onClick={handleGuestEntry}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer"
          }}
        >
          ENTER AS GUEST
        </button>
      </div>
    </div>
  );
}

export default LoginRegisterPage;