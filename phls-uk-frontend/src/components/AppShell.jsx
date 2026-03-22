import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logotype.png";
import headerBg from "../assets/logoBackground2.png";
import headerBg2 from "../assets/logoBackground3.png";
import footerImage from "../assets/logo.png";

function AppShell() {
  const navigate = useNavigate();

  const role = localStorage.getItem("phlsRole") || "GUEST";
  const token = localStorage.getItem("phlsToken");
  const theme = localStorage.getItem("phlsTheme") || "light";

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  function handleLogout() {
    localStorage.removeItem("phlsToken");
    localStorage.removeItem("phlsRole");
    localStorage.removeItem("phlsUserId");
    localStorage.removeItem("phlsLoggedIn");
    navigate("/");
  }

  function scrollToFooter() {
    const footer = document.getElementById("app-footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="shell">
      <header
        id="app-header"
        className="shell-header shell-header-image"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="shell-header-inner shell-header-centered">
          <div className="shell-header-left">
            <button
              type="button"
              className="shell-scroll-btn"
              onClick={scrollToFooter}
              aria-label="Scroll to footer"
              title="Scroll to footer"
            >
              ↓ Scroll to Bottom
            </button>
          </div>

          <div className="shell-logo-wrap">
            <img src={logo} alt="PHLS-UK" className="shell-banner-image" />
          </div>

          <div className="shell-header-actions">
            <button className="danger-btn" onClick={handleLogout}>
              {token ? "Log Out" : "Exit Guest"}
            </button>
          </div>
        </div>
      </header>

      <div className="shell-body">
        <aside className="shell-sidebar card">
          <nav className="shell-nav">
            <NavItem to="/home" label="Home" />

            {role === "GUEST" && (
              <>
                <NavItem to="/searchbookings" label="Search Bookings" />
                <NavItem to="/searchinsurance" label="Search Insurance" />
                <NavItem to="/settings" label="Settings" />
              </>
            )}

            {role === "PATIENT" && (
              <>
                <NavItem to="/searchbookings" label="Search Bookings" />
                <NavItem to="/managebookings" label="Manage Bookings" />
                <NavItem to="/searchinsurance" label="Search Insurance" />
                <NavItem to="/manageprofile" label="Manage Profile" />
                <NavItem to="/settings" label="Settings" />
              </>
            )}

            {role === "PROVIDER" && (
              <>
                <NavItem to="/managebookings" label="Manage Bookings" />
                <NavItem to="/manageprofile" label="Manage Profile" />
                <NavItem to="/settings" label="Settings" />
              </>
            )}
          </nav>
        </aside>

        <main className="shell-main">
          <Outlet />
        </main>
      </div>

  <footer
    id="app-footer"
    className="shell-footer shell-footer-image"
    style={{ backgroundImage: `url(${headerBg2})` }}
  >
    <div className="shell-footer-inner">
      <div className="shell-footer-top-action">
        <button
          type="button"
          className="shell-scroll-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          ↑ Back to top
        </button>
      </div>

      <div className="shell-footer-links">
        <Link to="/faq-patient" className="shell-footer-link">
          Patient FAQs
        </Link>
        <Link to="/faq-provider" className="shell-footer-link">
          Provider FAQs
        </Link>
      </div>

      <div className="shell-footer-text-wrap">
        <p className="shell-footer-pill">
          © 2026 PHLS-UK. Private Healthcare Lookup Service.
        </p>
        <p className="shell-footer-pill">
          Contact us at: contact.phlsuk@gmail.com
        </p>
      </div>

      <div className="shell-footer-image-wrap">
        <img
          src={footerImage}
          alt="PHLS-UK footer emblem"
          className="shell-footer-logo"
        />
      </div>
    </div>
  </footer>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "shell-nav-link active" : "shell-nav-link"
      }
    >
      {label}
    </NavLink>
  );
}

export default AppShell;