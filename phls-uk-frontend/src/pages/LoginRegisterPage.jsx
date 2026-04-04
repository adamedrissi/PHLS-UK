import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  loginUser,
  registerPatient,
  registerProvider,
} from "../services/authService";
import { getClinics } from "../services/clinicService";
import { getSpecialties } from "../services/specialtyService";
import logo from "../assets/logo.png";
import panelBg from "../assets/logoBackground.png";
import LanguageSelector from "../components/LanguageSelector";

function LoginRegisterPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [mode, setMode] = useState("login");
  const [userType, setUserType] = useState("PATIENT");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [clinics, setClinics] = useState([]);
  const [clinicsLoading, setClinicsLoading] = useState(false);

  const [specialties, setSpecialties] = useState([]);
  const [specialtiesLoading, setSpecialtiesLoading] = useState(false);

  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    clinicId: "",
    specialtyIds: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [theme, setTheme] = useState(localStorage.getItem("phlsTheme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("phlsLanguage") || "en");

  useEffect(() => {
    localStorage.setItem("phlsTheme", theme);
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("phlsLanguage", language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  useEffect(() => {
    const token = localStorage.getItem("phlsToken");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  useEffect(() => {
    async function loadClinics() {
      setClinicsLoading(true);

      try {
        const data = await getClinics();
        setClinics(data);
      } catch (err) {
        console.error("Failed to load clinics:", err);
      } finally {
        setClinicsLoading(false);
      }
    }

    loadClinics();
  }, []);

  useEffect(() => {
    async function loadSpecialties() {
      setSpecialtiesLoading(true);

      try {
        const data = await getSpecialties();
        setSpecialties(data);
      } catch (err) {
        console.error("Failed to load specialties:", err);
      } finally {
        setSpecialtiesLoading(false);
      }
    }

    loadSpecialties();
  }, []);

  useEffect(() => {
    setError("");
  }, [mode, userType]);

  useEffect(() => {
    if (userType === "PATIENT") {
      setRegisterForm((prev) => ({
        ...prev,
        clinicId: "",
        specialtyIds: [],
      }));
    }
  }, [userType]);

  function handleGuestEntry() {
    localStorage.removeItem("phlsToken");
    localStorage.removeItem("phlsUserId");
    localStorage.removeItem("phlsFullName");
    localStorage.removeItem("phlsEmail");
    localStorage.setItem("phlsRole", "GUEST");
    localStorage.setItem("phlsLoggedIn", "false");
    navigate("/home");
  }

  function handleSpecialtyChange(specialtyId) {
    setRegisterForm((prev) => {
      const current = prev.specialtyIds;

      if (current.includes(specialtyId)) {
        setError("");
        return {
          ...prev,
          specialtyIds: current.filter((id) => id !== specialtyId),
        };
      }

      if (current.length >= 3) {
        setError(t("loginPage.maxThreeSpecialties"));
        return prev;
      }

      setError("");
      return {
        ...prev,
        specialtyIds: [...current, specialtyId],
      };
    });
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
      localStorage.setItem("phlsFullName", data.fullName || "");
      localStorage.setItem("phlsEmail", data.email || "");
      localStorage.setItem("phlsLoggedIn", "true");

      navigate("/home");
    } catch (err) {
      setError(err.message || t("loginPage.loginFailed"));
    } finally {
      setLoading(false);
    }
  }

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    setError("");

    if (registerForm.password !== registerForm.confirmPassword) {
      setError(t("loginPage.passwordsDoNotMatch"));
      return;
    }

    if (userType === "PROVIDER") {
      if (!registerForm.clinicId) {
        setError(t("loginPage.selectClinic"));
        return;
      }

      if (registerForm.specialtyIds.length < 1) {
        setError(t("loginPage.selectAtLeastOneSpecialty"));
        return;
      }

      if (registerForm.specialtyIds.length > 3) {
        setError(t("loginPage.maxThreeSpecialties"));
        return;
      }
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
          specialtyIds: registerForm.specialtyIds,
        });
      }

      const loginData = await loginUser({
        email: registerForm.email,
        password: registerForm.password,
      });

      localStorage.setItem("phlsToken", loginData.token);
      localStorage.setItem("phlsRole", loginData.role);
      localStorage.setItem("phlsUserId", String(loginData.userId));
      localStorage.setItem("phlsFullName", loginData.fullName || "");
      localStorage.setItem("phlsEmail", loginData.email || "");
      localStorage.setItem("phlsLoggedIn", "true");

      navigate("/home");
    } catch (err) {
      setError(err.message || t("loginPage.registrationFailed"));
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
          overflow: "visible",
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
          <div
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
            {t("loginPage.heroTitle")}
          </h1>

          <p style={{ fontSize: "1.05rem", maxWidth: "540px", opacity: 0.96 }}>
            {t("loginPage.heroSubtitle")}
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
                position: "relative",
                zIndex: 20,
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
                {t("common.language")}
              </label>

              <LanguageSelector
                value={language}
                onChange={setLanguage}
              />
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
                {t("common.theme")}
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
                  {t("common.light")}
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
                  {t("common.dark")}
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
                {t("common.patientFaqs")}
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
                {t("common.providerFaqs")}
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
              {mode === "login" ? t("loginPage.welcomeBack") : t("loginPage.createAccount")}
            </h2>
            <p style={{ color: "var(--text-soft)", marginBottom: 0 }}>
              {t("loginPage.accessText")}
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
              {t("common.login")}
            </button>
            <button
              className={mode === "register" ? "primary-btn" : "secondary-btn"}
              onClick={() => setMode("register")}
              type="button"
            >
              {t("common.register")}
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
              {t("common.patient")}
            </button>
            <button
              className={userType === "PROVIDER" ? "primary-btn" : "secondary-btn"}
              onClick={() => setUserType("PROVIDER")}
              type="button"
            >
              {t("common.provider")}
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
                <label className="form-label">{t("loginPage.email")}</label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                  placeholder={t("loginPage.enterEmail")}
                  required
                />
              </div>

              <div>
                <label className="form-label">{t("loginPage.password")}</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  placeholder={t("loginPage.enterPassword")}
                  required
                />
              </div>

              <button type="submit" className="primary-btn" disabled={loading}>
                {loading ? t("loginPage.loggingIn") : t("common.login")}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="form-grid">
              <div>
                <label className="form-label">{t("loginPage.fullName")}</label>
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
                <label className="form-label">{t("loginPage.email")}</label>
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
                  <label className="form-label">{t("loginPage.phoneNumber")}</label>
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
                  <label className="form-label">{t("loginPage.clinic")}</label>
                  <select
                    value={registerForm.clinicId}
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        clinicId: e.target.value,
                      })
                    }
                    required
                    disabled={clinicsLoading}
                  >
                    <option value="">
                      {clinicsLoading
                        ? t("loginPage.loadingClinics")
                        : t("loginPage.selectClinic")}
                    </option>

                    {clinics.map((clinic) => (
                      <option key={clinic.id} value={clinic.id}>
                        {clinic.clinicName} ({clinic.city}) - ID {clinic.id}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {userType === "PROVIDER" && (
                <div>
                  <label className="form-label">{t("loginPage.specialties")}</label>

                  <div className="specialty-picker">
                    {specialtiesLoading ? (
                      <p style={{ color: "var(--text-soft)", margin: 0 }}>
                        {t("loginPage.loadingSpecialties")}
                      </p>
                    ) : (
                      specialties.map((specialty) => {
                        const checked = registerForm.specialtyIds.includes(specialty.id);

                        return (
                          <label key={specialty.id} className="specialty-option">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleSpecialtyChange(specialty.id)}
                            />
                            <span>{specialty.name}</span>
                          </label>
                        );
                      })
                    )}
                  </div>

                  <p style={{ marginTop: "0.5rem", color: "var(--text-soft)", fontSize: "0.92rem" }}>
                    {t("loginPage.specialtyHelp")} ({registerForm.specialtyIds.length}/3)
                  </p>
                </div>
              )}

              <div>
                <label className="form-label">{t("loginPage.password")}</label>
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
                <label className="form-label">{t("loginPage.confirmPassword")}</label>
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
                {loading ? t("loginPage.registering") : t("common.register")}
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
              {t("loginPage.enterAsGuest")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterPage;