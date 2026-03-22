import { useMemo, useState } from "react";

function ManageProfilePage() {
  const role = localStorage.getItem("phlsRole") || "GUEST";
  const userId = localStorage.getItem("phlsUserId") || "Not available";
  const fullName = localStorage.getItem("phlsFullName") || "Not available";
  const email = localStorage.getItem("phlsEmail") || "Not available";

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isAuthenticated = role === "PATIENT" || role === "PROVIDER";

  const roleLabel = useMemo(() => {
    if (role === "PATIENT") return "Patient";
    if (role === "PROVIDER") return "Provider";
    return "Guest";
  }, [role]);

  function handlePasswordChange(e) {
    e.preventDefault();
    setPasswordError("");
    setPasswordMessage("");

    if (
      !passwordForm.currentPassword ||
      !passwordForm.newPassword ||
      !passwordForm.confirmNewPassword
    ) {
      setPasswordError("Please complete all password fields.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long.");
      return;
    }

    setPasswordMessage("Password change is ready to connect to the backend.");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
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
              Manage Profile
            </h1>
            <p className="page-subtitle">
              You need to be logged in as a patient or provider to view profile details.
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
          <h1 className="page-title">Manage Profile</h1>
          <p className="page-subtitle">
            Review your account details and manage your password securely.
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
            <h2 style={{ marginBottom: "1rem" }}>Account details</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              <div className="card" style={{ padding: "1rem", boxShadow: "none" }}>
                <p style={{ marginBottom: "0.35rem", color: "var(--text-soft)" }}>User ID</p>
                <p style={{ margin: 0, fontWeight: 700 }}>{userId}</p>
              </div>

              <div className="card" style={{ padding: "1rem", boxShadow: "none" }}>
                <p style={{ marginBottom: "0.35rem", color: "var(--text-soft)" }}>Role</p>
                <p style={{ margin: 0, fontWeight: 700 }}>{roleLabel}</p>
              </div>

              <div className="card" style={{ padding: "1rem", boxShadow: "none" }}>
                <p style={{ marginBottom: "0.35rem", color: "var(--text-soft)" }}>Full name</p>
                <p style={{ margin: 0, fontWeight: 700 }}>{fullName}</p>
              </div>

              <div className="card" style={{ padding: "1rem", boxShadow: "none" }}>
                <p style={{ marginBottom: "0.35rem", color: "var(--text-soft)" }}>Email address</p>
                <p style={{ margin: 0, fontWeight: 700 }}>{email}</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: "2rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>Change password</h2>

            <p style={{ color: "var(--text-soft)", marginBottom: "1rem" }}>
              Update your password to keep your account secure.
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
                <label className="form-label">Current password</label>
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
                <label className="form-label">New password</label>
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
                <label className="form-label">Confirm new password</label>
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
                  Update Password
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