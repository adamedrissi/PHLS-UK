import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loginUser,
  registerPatient,
  registerProvider,
} from "../services/authService";
import logo from "../assets/logo.png";
import panelBg from "../assets/logoBackground.png";
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

  const [theme, setTheme] = useState(localStorage.getItem("phlsTheme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("phlsLanguage") || "English");

  useEffect(() => {
    localStorage.setItem("phlsTheme", theme);
    localStorage.setItem("phlsLanguage", language);
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme, language]);

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
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "linear-gradient(135deg, var(--bg) 0%, var(--surface-soft) 100%)",
      }}
    >
      <div
        className="card login-layout-card"
        style={{
          width: "100%",
          maxWidth: "1120px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#ffffff",
            backgroundImage: `linear-gradient(rgba(8, 22, 55, 0.60), rgba(8, 22, 55, 0.60)), url(${panelBg})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        >
          <div style={{
              marginBottom: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}>
            <img
              src={logo}
              alt="PHLS-UK"
              style={{
                maxWidth: "260px",
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", marginBottom: "1rem" }}>
            Search and book private healthcare with confidence
          </h1>

          <p style={{ fontSize: "1.05rem", maxWidth: "540px", opacity: 0.96 }}>
            Compare services, discover providers, and manage appointments through
            a cleaner and more accessible healthcare platform.
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gap: "1rem",
              maxWidth: "420px",
            }}
          >
            <div
              style={{
                padding: "1rem",
                borderRadius: "18px",
                background: "rgba(0, 0, 0, 0.35)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.92)",
                  color: "#111827",
                  border: "1px solid rgba(255,255,255,0.25)",
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

            <div
              style={{
                padding: "1rem",
                borderRadius: "18px",
                background: "rgba(0, 0, 0, 0.35)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)",
              }}
            >
              <p
                style={{
                  marginBottom: "0.65rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Theme
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  style={{
                    background: theme === "light" ? "#ffffff" : "rgba(255,255,255,0.18)",
                    color: theme === "light" ? "#111827" : "#ffffff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  Light
                </button>

                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  style={{
                    background: theme === "dark" ? "#111827" : "rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  Dark
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/faq-patient"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "999px",
                  background: "rgba(0, 0, 0, 0.35)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#ffffff",
                  fontWeight: 600,
                  minWidth: "140px",
                }}
              >
                Patient FAQs
              </Link>

              <Link
                to="/faq-provider"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "999px",
                  background: "rgba(0, 0, 0, 0.35)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#ffffff",
                  fontWeight: 600,
                  minWidth: "140px",
                }}
              >
                Provider FAQs
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "2.25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p style={{ color: "var(--text-soft)", marginBottom: 0 }}>
              Access PHLS-UK as a patient or provider
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <button
              className={mode === "login" ? "primary-btn" : "secondary-btn"}
              onClick={() => setMode("login")}
              type="button"
            >
              Login
            </button>
            <button
              className={mode === "register" ? "primary-btn" : "secondary-btn"}
              onClick={() => setMode("register")}
              type="button"
            >
              Register
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <button
              className={userType === "PATIENT" ? "primary-btn" : "secondary-btn"}
              onClick={() => setUserType("PATIENT")}
              type="button"
            >
              Patient
            </button>
            <button
              className={userType === "PROVIDER" ? "primary-btn" : "secondary-btn"}
              onClick={() => setUserType("PROVIDER")}
              type="button"
            >
              Provider
            </button>
          </div>

          {error && (
            <div className="error-box" style={{ marginBottom: "1rem" }}>
              {error}
            </div>
          )}

          {mode === "login" ? (
            <form onSubmit={handleLoginSubmit} className="form-grid">
              <div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="primary-btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="form-grid">
              <div>
                <label className="form-label">Full name</label>
                <input
                  type="text"
                  value={registerForm.fullName}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, fullName: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={registerForm.email}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, email: e.target.value })
                  }
                  required
                />
              </div>

              {userType === "PATIENT" && (
                <div>
                  <label className="form-label">Phone number</label>
                  <input
                    type="text"
                    value={registerForm.phoneNumber}
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        phoneNumber: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              )}

              {userType === "PROVIDER" && (
                <div>
                  <label className="form-label">Clinic ID</label>
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
                    required
                  />
                </div>
              )}

              <div>
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={registerForm.password}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, password: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="form-label">Confirm password</label>
                <input
                  type="password"
                  value={registerForm.confirmPassword}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <button type="submit" className="primary-btn" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          )}

          <div style={{ marginTop: "1rem" }}>
            <button
              onClick={handleGuestEntry}
              className="secondary-btn"
              style={{ width: "100%" }}
              type="button"
            >
              Enter as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterPage;