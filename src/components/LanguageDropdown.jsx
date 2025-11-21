// src/components/LanguageDropdown.jsx
import { LANGUAGES } from "../utils/languages";

const LanguageDropdown = ({ value, onChange, label }) => {
  return (
    <div style={{ width: "100%" }}>
      {label && (
        <label
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            opacity: 0.9,
            marginBottom: "4px",
            display: "block",
          }}
        >
          {label}
        </label>
      )}

      <div
        style={{
          position: "relative",
        }}
      >
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100%",
            padding: "0.65rem 1rem",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            fontSize: "0.95rem",
            color: "inherit",
            cursor: "pointer",
            appearance: "none",
            transition: "0.25s ease",
          }}
          className="lang-select"
        >
          {LANGUAGES.map((lang) => (
            <option
              key={lang.code}
              value={lang.code}
              style={{
                background: "var(--bg)",
                color: "var(--text)",
              }}
            >
              {lang.icon} {lang.label}
            </option>
          ))}
        </select>

        {/* Dropdown arrow */}
        <span
          style={{
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            fontSize: "0.9rem",
            opacity: 0.6,
          }}
        >
          ▼
        </span>
      </div>

      {/* Focus glow effect */}
      <style>
        {`
          .lang-select:focus {
            outline: none;
            border: 1px solid var(--accent);
            box-shadow: 0 0 0 3px rgba(99,102,241,0.35);
          }

          option {
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default LanguageDropdown;
