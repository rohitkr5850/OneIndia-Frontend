// src/components/SuggestionBox.jsx
import { useLocationCtx } from "../context/LocationContext";

const SuggestionBox = ({ onSelect }) => {
  const { stateName, suggestions, loading } = useLocationCtx();

  if (!stateName && !loading) return null;

  return (
    <div
      style={{
        marginTop: "1.5rem",
        padding: "1rem",
        borderRadius: "16px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Heading */}
      <div
        style={{
          fontSize: "0.95rem",
          fontWeight: 600,
          opacity: 0.85,
          marginBottom: "0.6rem",
        }}
      >
        {stateName
          ? `🌍 Smart phrases for ${stateName}`
          : "📍 Detecting your location…"}
      </div>

      {/* Loading Shimmer */}
      {loading && (
        <div style={{ opacity: 0.7, fontSize: "0.85rem" }}>
          Loading phrases…
        </div>
      )}

      {/* Chips */}
      {!loading && suggestions?.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.55rem",
            marginTop: "0.4rem",
          }}
        >
          {suggestions.map((s, idx) => (
            <button
              key={idx}
              onClick={() => onSelect && onSelect(s)}
              className="suggestion-chip"
              style={{
                padding: "0.45rem 0.75rem",
                fontSize: "0.85rem",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                cursor: "pointer",
                transition: "0.25s ease",
                color: "inherit",
                maxWidth: "200px",
                textAlign: "left",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <style>
        {`
          .suggestion-chip:hover {
            background: rgba(255,255,255,0.25);
            border-color: var(--accent);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(99,102,241,0.25);
          }
        `}
      </style>
    </div>
  );
};

export default SuggestionBox;
