// src/components/ThemeToggle.jsx
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => {
        toggleTheme();
        setIsDark(!isDark);
      }}
      style={{
        width: "55px",
        height: "28px",
        borderRadius: "50px",
        position: "relative",
        border: "none",
        cursor: "pointer",
        background: isDark
          ? "linear-gradient(135deg, #1e293b, #0f172a)"
          : "linear-gradient(135deg, #fefce8, #fde047)",
        boxShadow: isDark
          ? "0 0 14px rgba(59,130,246,0.4)"
          : "0 0 12px rgba(250,204,21,0.45)",
        transition: "0.35s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: isDark ? "flex-end" : "flex-start",
        padding: "4px",
      }}
    >
      {/* Circle */}
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, #60a5fa, #2563eb)"
            : "radial-gradient(circle, #fde047, #facc15)",
          boxShadow: isDark
            ? "0 0 10px rgba(96,165,250,0.8)"
            : "0 0 10px rgba(250,204,21,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.35s ease",
          fontSize: "14px",
        }}
      >
        {isDark ? "🌙" : "🌞"}
      </div>
    </button>
  );
};

export default ThemeToggle;
