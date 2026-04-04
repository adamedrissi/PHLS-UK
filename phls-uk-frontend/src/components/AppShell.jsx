import { Link, NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logotype.png";
import headerBg from "../assets/logoBackground2.png";
import headerBg2 from "../assets/logoBackground3.png";
import footerImage from "../assets/logo.png";
import trustpilotBadge from "../assets/trustpilot.png";

function AppShell() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    localStorage.removeItem("phlsFullName");
    localStorage.removeItem("phlsEmail");
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

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  function closeMobileNav() {
    setMobileNavOpen(false);
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
              className="shell-mobile-menu-btn"
              onClick={() => setMobileNavOpen(true)}
              aria-label={t("common.openNavigationMenu")}
            >
              ☰
            </button>

            <button
              type="button"
              className="shell-scroll-btn shell-desktop-only"
              onClick={scrollToFooter}
              aria-label="Scroll to footer"
              title="Scroll to footer"
            >
              {t("common.scrollToBottom")}
            </button>
          </div>

          <div className="shell-logo-wrap">
            <img src={logo} alt="PHLS-UK" className="shell-banner-image" />
          </div>

          <div className="shell-header-actions">
            <button className="danger-btn" onClick={handleLogout}>
              {token ? t("common.logout") : t("common.exitGuest")}
            </button>
          </div>
        </div>
      </header>

      {mobileNavOpen && (
        <div className="shell-mobile-nav-overlay" onClick={closeMobileNav}>
          <aside
            className="shell-mobile-nav"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="shell-mobile-nav-top">
              <h3 style={{ margin: 0 }}>{t("common.menu")}</h3>
              <button
                type="button"
                className="shell-mobile-close-btn"
                onClick={closeMobileNav}
                aria-label={t("common.closeNavigationMenu")}
              >
                ✕
              </button>
            </div>

            <nav className="shell-mobile-nav-links">
              <MobileNavItem to="/home" label={t("common.home")} onNavigate={closeMobileNav} />

              {role === "GUEST" && (
                <>
                  <MobileNavItem to="/searchbookings" label={t("common.searchBookings")} onNavigate={closeMobileNav} />
                  <MobileNavItem to="/searchinsurance" label={t("common.searchInsurance")} onNavigate={closeMobileNav} />
                  <MobileNavItem to="/settings" label={t("common.settings")} onNavigate={closeMobileNav} />
                </>
              )}

              {role === "PATIENT" && (
                <>
                  <MobileNavItem to="/searchbookings" label={t("common.searchBookings")} onNavigate={closeMobileNav} />
                  <MobileNavItem to="/managebookings" label={t("common.manageBookings")} onNavigate={closeMobileNav} />
                  <MobileNavItem to="/searchinsurance" label={t("common.searchInsurance")} onNavigate={closeMobileNav} />
                  <MobileNavItem to="/manageprofile" label={t("common.manageProfile")} onNavigate={closeMobileNav} />
                  <MobileNavItem to="/settings" label={t("common.settings")} onNavigate={closeMobileNav} />
                </>
              )}

              {role === "PROVIDER" && (
                <>
                  <MobileNavItem to="/managebookings" label={t("common.manageBookings")} onNavigate={closeMobileNav} />
                  <MobileNavItem to="/manageprofile" label={t("common.manageProfile")} onNavigate={closeMobileNav} />
                  <MobileNavItem to="/settings" label={t("common.settings")} onNavigate={closeMobileNav} />
                </>
              )}
            </nav>
          </aside>
        </div>
      )}

      <div className="shell-body">
        <aside className="shell-sidebar card">
          <nav className="shell-nav">
            <NavItem to="/home" label={t("common.home")} />

            {role === "GUEST" && (
              <>
                <NavItem to="/searchbookings" label={t("common.searchBookings")} />
                <NavItem to="/searchinsurance" label={t("common.searchInsurance")} />
                <NavItem to="/settings" label={t("common.settings")} />
              </>
            )}

            {role === "PATIENT" && (
              <>
                <NavItem to="/searchbookings" label={t("common.searchBookings")} />
                <NavItem to="/managebookings" label={t("common.manageBookings")} />
                <NavItem to="/searchinsurance" label={t("common.searchInsurance")} />
                <NavItem to="/manageprofile" label={t("common.manageProfile")} />
                <NavItem to="/settings" label={t("common.settings")} />
              </>
            )}

            {role === "PROVIDER" && (
              <>
                <NavItem to="/managebookings" label={t("common.manageBookings")} />
                <NavItem to="/manageprofile" label={t("common.manageProfile")} />
                <NavItem to="/settings" label={t("common.settings")} />
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
              aria-label={t("common.backToTop")}
              title={t("common.backToTop")}
            >
              {t("common.backToTop")}
            </button>
          </div>

          <div className="shell-footer-links">
            <Link to="/faq-patient" className="shell-footer-link">
              {t("common.patientFaqs")}
            </Link>
            <Link to="/faq-provider" className="shell-footer-link">
              {t("common.providerFaqs")}
            </Link>
          </div>

          <div className="shell-footer-text-wrap">
            <p className="shell-footer-pill">{t("footer.copyright")}</p>
            <a className="shell-footer-link" href="mailto:contact.phlsuk@gmail.com">{t("footer.contact")}</a>
          </div>

          <div className="shell-footer-image-wrap">
            <img
              src={footerImage}
              alt="PHLS-UK footer emblem"
              className="shell-footer-logo"
            />
          </div>
          
          <div className="shell-footer-trustpilot-wrap">
            <a
              href="https://uk.trustpilot.com/review/phlsuk.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="shell-footer-trustpilot-link"
              aria-label="Rate us on Trustpilot"
              title="Rate us on Trustpilot"
            >
            <img
              src={trustpilotBadge}
              alt="Trustpilot"
              className="shell-footer-trustpilot-image"
            />
            </a>
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

function MobileNavItem({ to, label, onNavigate }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "shell-mobile-nav-link active" : "shell-mobile-nav-link"
      }
      onClick={onNavigate}
    >
      {label}
    </NavLink>
  );
}

export default AppShell;