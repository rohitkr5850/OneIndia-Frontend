// src/components/Navbar.jsx
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const location = useLocation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const active = document.querySelector(".nav-item.active-link");
    const slider = sliderRef.current;

    if (active && slider) {
      const rect = active.getBoundingClientRect();
      slider.style.width = rect.width + "px";
      slider.style.left = rect.left + "px";
    }
  }, [location]);

  return (
    <nav
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.22)",
        boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "78px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.25rem",
        }}
      >
        {/* Left Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.25rem",
              boxShadow:
                "0 4px 14px rgba(0,0,0,0.25), inset 0 0 10px rgba(255,255,255,0.4)",
            }}
          >
            🛡️
          </div>

          <div>
  {/* JOINDIA Brand */}
  <div
    style={{
      fontWeight: 900,
      fontSize: "1.25rem",
      letterSpacing: "-0.5px",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    }}
  >
    {/* JOIN (normal text) */}
    <span style={{ color: "var(--text)" }}>ONE</span>

    {/* INDIA with gradient flag color */}
    <span
      style={{
        background: "linear-gradient(to right, #FF9933, #FFFFFF, #138808)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: 900,
      }}
    >
      INDIA
    </span>
  </div>

  {/* Subtitle */}
  <div
    style={{
      fontSize: "0.72rem",
      opacity: 0.75,
      marginTop: "-3px",
    }}
  >
    Travel safe. Speak local.
  </div>
</div>

        </Link>

        {/* Mobile Only */}
        <div className="mobile-nav">
          <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.5rem",
            position: "relative",
          }}
        >
          {/* Sliding underline */}
          <div
            ref={sliderRef}
            style={{
              height: "3px",
              background:
                "linear-gradient(to right,#3b82f6,#8b5cf6,#ec4899)",
              borderRadius: "6px",
              position: "absolute",
              bottom: "-6px",
              left: 0,
              width: "0px",
              transition: "0.3s",
              boxShadow:
                "0 0 10px rgba(99,102,241,0.55), 0 0 6px rgba(236,72,153,0.45)",
            }}
          ></div>

          {["translate", "emergency", "saved", "settings"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className="nav-item"
              style={({ isActive }) => ({
                padding: "0.6rem 0.25rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                color: isActive ? "var(--accent)" : "inherit",
                position: "relative",
              })}
            >
              {({ isActive }) => (
                <span className={isActive ? "active-link" : ""}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              )}
            </NavLink>
          ))}

          <ThemeToggle />
        </div>
      </div>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (min-width: 768px) {
            .desktop-nav {
              display: flex !important;
            }
            .mobile-nav {
              display: none !important;
            }
          }

          .nav-item:hover span {
            color: var(--accent);
            text-shadow: 0 0 14px rgba(99,102,241,0.6);
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
