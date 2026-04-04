import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { changePassword } from "../services/authService";

function ManageProfilePage() {
  const { t } = useTranslation();

  const role = localStorage.getItem("phlsRole") || "GUEST";
  const userId = localStorage.getItem("phlsUserId") || t("profile.notAvailable");
  const fullName = localStorage.getItem("phlsFullName") || t("profile.notAvailable");
  const email = localStorage.getItem("phlsEmail") || t("profile.notAvailable");

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isAuthenticated = role === "PATIENT" || role === "PROVIDER";

  const roleLabel = useMemo(() => {
    if (role === "PATIENT") return t("common.patient");
    if (role === "PROVIDER") return t("common.provider");
    return t("profile.guest");
  }, [role, t]);

  async function handlePasswordChange(e) {
    e.preventDefault();
    setPasswordError("");
    setPasswordMessage("");

    if (
      !passwordForm.currentPassword ||
      !passwordForm.newPassword ||
      !passwordForm.confirmNewPassword
    ) {
      setPasswordError(t("profile.completeAllPasswordFields"));
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      setPasswordError(t("profile.newPasswordsDoNotMatch"));
      return;
    }

    try {
      await changePassword({
        email,
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
        confirmNewPassword: passwordForm.confirmNewPassword,
      });

      setPasswordMessage(t("profile.passwordUpdatedSuccessfully"));
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (err) {
      setPasswordError(err.message || t("profile.passwordChangeFailed"));
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="page">
        <div className="page-container">
          <section
            className="card"
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h1 className="page-title" style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              {t("profile.title")}
            </h1>
            <p className="page-subtitle">
              {t("profile.mustBeLoggedIn")}
            </p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">{t("profile.title")}</h1>
          <p className="page-subtitle">
            {t("profile.subtitle")}
          </p>
        </section>

        <section
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            display: "grid",
            gap: "1.5rem",
          }}
        >
          <div className="card" style={{ padding: "2rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>{t("profile.accountDetails")}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              <div className="card" style={{ padding: "1rem", boxShadow: "none" }}>
                <p style={{ marginBottom: "0.35rem", color: "var(--text-soft)" }}>
                  {t("profile.userId")}
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>{userId}</p>
              </div>

              <div className="card" style={{ padding: "1rem", boxShadow: "none" }}>
                <p style={{ marginBottom: "0.35rem", color: "var(--text-soft)" }}>
                  {t("profile.role")}
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>{roleLabel}</p>
              </div>

              <div className="card" style={{ padding: "1rem", boxShadow: "none" }}>
                <p style={{ marginBottom: "0.35rem", color: "var(--text-soft)" }}>
                  {t("profile.fullName")}
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>{fullName}</p>
              </div>

              <div className="card" style={{ padding: "1rem", boxShadow: "none" }}>
                <p style={{ marginBottom: "0.35rem", color: "var(--text-soft)" }}>
                  {t("profile.emailAddress")}
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>{email}</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: "2rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>{t("profile.changePassword")}</h2>

            <p style={{ color: "var(--text-soft)", marginBottom: "1rem" }}>
              {t("profile.changePasswordDescription")}
            </p>

            {passwordError && (
              <div className="error-box" style={{ marginBottom: "1rem" }}>
                {passwordError}
              </div>
            )}

            {passwordMessage && (
              <div className="status-pill" style={{ marginBottom: "1rem" }}>
                {passwordMessage}
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="form-grid">
              <div>
                <label className="form-label">{t("profile.currentPassword")}</label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm((prev) => ({
                      ...prev,
                      currentPassword: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div>
                <label className="form-label">{t("profile.newPassword")}</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm((prev) => ({
                      ...prev,
                      newPassword: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div>
                <label className="form-label">{t("profile.confirmNewPassword")}</label>
                <input
                  type="password"
                  value={passwordForm.confirmNewPassword}
                  onChange={(e) =>
                    setPasswordForm((prev) => ({
                      ...prev,
                      confirmNewPassword: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div>
                <button type="submit" className="secondary-btn">
                  {t("profile.updatePassword")}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManageProfilePage;