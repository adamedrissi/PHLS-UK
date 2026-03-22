function ManageProfilePage() {
  const role = localStorage.getItem("phlsRole") || "GUEST";
  const userId = localStorage.getItem("phlsUserId");

  return (
    <div className="page">
      <div className="page-container">
        <section className="page-hero">
          <h1 className="page-title">Manage Profile</h1>
          <p className="page-subtitle">
            View and manage your account information and personal details.
          </p>
        </section>

        <section
          className="card"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "2rem",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "1rem",
            }}
          >
            <div>
              <h2 style={{ marginBottom: "0.5rem" }}>Account overview</h2>
              <p style={{ color: "var(--text-soft)", marginBottom: 0 }}>
                This page can be used for editing profile details later.
              </p>
            </div>

            <div className="card" style={{ padding: "1.25rem", boxShadow: "none" }}>
              <p><strong>Role:</strong> {role}</p>
              <p><strong>User ID:</strong> {userId || "Not available"}</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.75rem" }}>Planned profile fields</h3>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--text-soft)" }}>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Password update</li>
                <li>Role-specific information</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManageProfilePage;