// src/pages/SettingsPage.jsx
import ThemeToggle from "../components/ThemeToggle";
import { useLanguage } from "../context/LanguageContext";
import LanguageDropdown from "../components/LanguageDropdown";
import { useLocationCtx } from "../context/LocationContext";

const SettingsPage = () => {
  const { from, to, setFrom, setTo } = useLanguage();
  const { stateName, setStateName } = useLocationCtx();

  return (
    <div className="container" style={{ paddingTop: "1.5rem" }}>
      <div
        className="settings-card"
        style={{
          padding: "1.5rem",
          borderRadius: "18px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 6px 24px rgba(0,0,0,0.10)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "0.75rem",
            fontSize: "1.4rem",
            fontWeight: 700,
          }}
        >
          ⚙️ Settings
        </h2>

        {/* THEME SECTION */}
        <section
          style={{
            marginTop: "1.4rem",
            paddingBottom: "1.2rem",
            borderBottom: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <h4
            style={{
              margin: "0 0 0.5rem 0",
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            
          </h4>

          <ThemeToggle />
        </section>

        {/* LANGUAGES SECTION */}
        <section
          style={{
            marginTop: "1.4rem",
            paddingBottom: "1.2rem",
            borderBottom: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <h4
            style={{
              margin: "0 0 0.5rem 0",
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            🌐 Default Languages
          </h4>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "0.75rem",
            }}
          >
            <LanguageDropdown
              label="Default From"
              value={from}
              onChange={setFrom}
            />

            <LanguageDropdown
              label="Default To"
              value={to}
              onChange={setTo}
            />
          </div>
        </section>

        {/* LOCATION SECTION */}
        <section style={{ marginTop: "1.4rem" }}>
          <h4
            style={{
              margin: "0 0 0.5rem 0",
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            📍 Location
          </h4>

          <p
            style={{
              fontSize: "0.85rem",
              opacity: 0.8,
              marginBottom: "0.5rem",
            }}
          >
            We use your state to show smart local suggestions.
          </p>

          <input
            type="text"
            placeholder="e.g. Karnataka, Maharashtra…"
            value={stateName || ""}
            onChange={(e) => {
              setStateName(e.target.value);
              localStorage.setItem("userStateName", e.target.value);
            }}
            style={{
              marginTop: "0.3rem",
              width: "100%",
              padding: "0.65rem 1rem",
              fontSize: "0.95rem",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "inherit",
              outline: "none",
              transition: "0.25s ease",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow =
                "0 0 0 3px rgba(99,102,241,0.4)")
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </section>
      </div>

      {/* HOVER ANIMATION */}
      <style>
        {`
          .settings-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          }
        `}
      </style>
    </div>
  );
};

export default SettingsPage;
