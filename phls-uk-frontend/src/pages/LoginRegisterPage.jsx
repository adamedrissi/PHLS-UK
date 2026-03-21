import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerPatient,
  registerProvider,
} from "../services/authService";
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
    password: "",
  });

  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    clinicId: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("phlsToken");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  function handleGuestEntry() {
    localStorage.removeItem("phlsToken");
    localStorage.removeItem("phlsUserId");
    localStorage.setItem("phlsRole", "GUEST");
    localStorage.setItem("phlsLoggedIn", "false");
    navigate("/home");
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser({
        email: loginForm.email,
        password: loginForm.password,
      });

      localStorage.setItem("phlsToken", data.token);
      localStorage.setItem("phlsRole", data.role);
      localStorage.setItem("phlsUserId", String(data.userId));
      localStorage.setItem("phlsLoggedIn", "true");

      navigate("/home");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    setError("");

    if (registerForm.password !== registerForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      if (userType === "PATIENT") {
        await registerPatient({
          email: registerForm.email,
          password: registerForm.password,
          fullName: registerForm.fullName,
          phoneNumber: registerForm.phoneNumber,
        });
      } else {
        await registerProvider({
          email: registerForm.email,
          password: registerForm.password,
          fullName: registerForm.fullName,
          clinicId: Number(registerForm.clinicId),
        });
      }

      const loginData = await loginUser({
        email: registerForm.email,
        password: registerForm.password,
      });

      localStorage.setItem("phlsToken", loginData.token);
      localStorage.setItem("phlsRole", loginData.role);
      localStorage.setItem("phlsUserId", String(loginData.userId));
      localStorage.setItem("phlsLoggedIn", "true");

      navigate("/home");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#cfe8f3",
        padding: "32px",
        color: "#0b2c6b",
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
            cursor: "pointer",
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
            cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
          border: "1px solid #999",
        }}
      >
        {error && (
          <p style={{ color: "red", marginTop: 0, marginBottom: "16px" }}>
            {error}
          </p>
        )}

        {mode === "login" ? (
          <form onSubmit={handleLoginSubmit}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Email
            </label>
            <input
              type="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              placeholder="Enter Email Address..."
              style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
              required
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
              required
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: "#0b2c6b",
                color: "white",
                border: "none",
                padding: "12px 20px",
                cursor: "pointer",
              }}
            >
              {loading ? "Logging in..." : "Login"}
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
              required
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
              required
            />

            {userType === "PATIENT" && (
              <>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  Phone Number
                </label>
                <input
                  type="text"
                  value={registerForm.phoneNumber}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      phoneNumber: e.target.value,
                    })
                  }
                  style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
                  required
                />
              </>
            )}

            {userType === "PROVIDER" && (
              <>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  Clinic ID
                </label>
                <input
                  type="number"
                  value={registerForm.clinicId}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      clinicId: e.target.value,
                    })
                  }
                  placeholder="Enter existing clinic ID"
                  style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
                  required
                />
              </>
            )}

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
              required
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
                  confirmPassword: e.target.value,
                })
              }
              style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
              required
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: "#0b2c6b",
                color: "white",
                border: "none",
                padding: "12px 20px",
                cursor: "pointer",
              }}
            >
              {loading ? "Registering..." : "Register"}
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
            cursor: "pointer",
          }}
        >
          ENTER AS GUEST
        </button>
      </div>
    </div>
  );
}

export default LoginRegisterPage;