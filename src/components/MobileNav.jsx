// src/components/MobileNav.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // CLOSE MENU ON OUTSIDE CLICK
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* HAMBURGER BUTTON */}
      <button
        className="btn btn-icon btn-outline"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* DROPDOWN MENU */}
      {open && (
        <div
          ref={menuRef}
          className="mobile-menu"
          style={{
            position: "absolute",
            right: 0,
            top: "52px",

            // CARD STYLE
            background: "var(--bg-card)",
            borderRadius: "14px",
            padding: "0.85rem 1rem",
            minWidth: "180px",

            border: "1px solid var(--border)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.16)",

            // ANIMATION
            opacity: 1,
            animation: "slideDown 0.18s ease-out",

            zIndex: 999,
          }}
        >
          <style>{`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .mobile-link {
              font-size: 0.95rem;
              padding: 0.45rem 0;
              text-decoration: none;
              color: var(--text);
              display: flex;
              align-items: center;
              gap: 0.4rem;
              border-radius: 6px;
              transition: 0.2s;
            }

            .mobile-link:hover {
              background: var(--accent-soft);
              color: var(--accent);
              padding-left: 6px;
            }
          `}</style>

          {/* LINKS */}
          <Link to="/translate" className="mobile-link" onClick={() => setOpen(false)}>
            ⚡ Translate
          </Link>
          <Link to="/emergency" className="mobile-link" onClick={() => setOpen(false)}>
            🚨 Emergency
          </Link>
          <Link to="/saved" className="mobile-link" onClick={() => setOpen(false)}>
            💾 Saved
          </Link>
          <Link to="/settings" className="mobile-link" onClick={() => setOpen(false)}>
            ⚙️ Settings
          </Link>

          {/* THEME TOGGLE */}
          <div style={{ marginTop: "0.7rem", textAlign: "center" }}>
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
