import { useMemo, useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import en from "../assets/en.png";
import cy from "../assets/cy.png";
import es from "../assets/es.png";
import pa from "../assets/pa.png";
import pl from "../assets/pl.png";
import pt from "../assets/pt.png";
import ro from "../assets/ro.png";
import ur from "../assets/ur.png";

function LanguageSelector({
  value,
  onChange,
  dark = false,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const languages = useMemo(
    () => [
      { code: "en", label: t("languages.en"), icon: en },
      { code: "cy", label: t("languages.cy"), icon: cy },
      { code: "es", label: t("languages.es"), icon: es },
      { code: "pa", label: t("languages.pa"), icon: pa },
      { code: "pl", label: t("languages.pl"), icon: pl },
      { code: "pt", label: t("languages.pt"), icon: pt },
      { code: "ro", label: t("languages.ro"), icon: ro },
      { code: "ur", label: t("languages.ur"), icon: ur },
    ],
    [t]
  );

  const selectedLanguage =
    languages.find((item) => item.code === value) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const triggerStyle = dark
    ? {
        background: "rgba(255,255,255,0.92)",
        color: "#111827",
        border: "1px solid rgba(255,255,255,0.25)",
      }
    : {
        background: "var(--surface)",
        color: "var(--text)",
        border: "1px solid var(--border)",
      };

  const menuStyle = dark
    ? {
        background: "#ffffff",
        color: "#111827",
        border: "1px solid rgba(255,255,255,0.25)",
      }
    : {
        background: "var(--surface)",
        color: "var(--text)",
        border: "1px solid var(--border)",
      };

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("common.language")}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: "100%",
          minHeight: "50px",
          borderRadius: "12px",
          padding: "0.9rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          cursor: "pointer",
          ...triggerStyle,
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            minWidth: 0,
          }}
        >
          <img
            src={selectedLanguage.icon}
            alt={selectedLanguage.label}
            style={{
              width: "22px",
              height: "22px",
              objectFit: "cover",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {selectedLanguage.label}
          </span>
        </span>

        <span aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t("common.language")}
          style={{
            position: "absolute",
            top: "calc(100% + 0.4rem)",
            left: 0,
            right: 0,
            zIndex: 50,
            borderRadius: "14px",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
            overflow: "hidden",
            ...menuStyle,
          }}
        >
          {languages.map((item) => {
            const isSelected = item.code === value;

            return (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(item.code);
                  setOpen(false);
                }}
                style={{
                  width: "100%",
                  border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  background: isSelected ? "rgba(15, 61, 145, 0.08)" : "transparent",
                  color: "inherit",
                  borderRadius: 0,
                  padding: "0.9rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  textAlign: "left",
                  fontWeight: isSelected ? 700 : 500,
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: "22px",
                    height: "22px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;