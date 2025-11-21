// src/components/EmergencyList.jsx
import ShareButton from "./ShareButton";

const EmergencyList = ({ phrases, onSave }) => {
  if (!phrases?.length) {
    return (
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
          opacity: 0.7,
          fontSize: "0.95rem",
        }}
      >
        No emergency phrases found for this language.
      </div>
    );
  }

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: 0,
        margin: 0,
        listStyle: "none",
      }}
    >
      {phrases.map((p) => (
        <li
          key={p.key}
          style={{
            padding: "1.2rem 1.4rem",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            transition: "0.25s ease",
          }}
          className="emergency-item"
        >
          {/* Phrase text */}
          <div style={{ marginBottom: "0.4rem" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: "0.2rem",
              }}
            >
              {p.native}
            </div>

            <div
              style={{
                fontSize: "0.9rem",
                opacity: 0.9,
                marginBottom: "0.15rem",
              }}
            >
              {p.english}
            </div>

            <div style={{ fontSize: "0.8rem", opacity: 0.75 }}>
              ({p.hinglish})
            </div>
          </div>

          {/* Action buttons */}
          <div
            style={{
              marginTop: "0.75rem",
              display: "flex",
              gap: "0.6rem",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn btn-outline"
              type="button"
              onClick={() => onSave && onSave(p)}
              style={{
                padding: "0.55rem 0.9rem",
                borderRadius: "10px",
              }}
            >
              💾 Save
            </button>

            <ShareButton
              text={`${p.native} (${p.hinglish})`}
              styleOverride={{
                padding: "0.55rem 0.9rem",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Hover effect */}
          <style>
            {`
              .emergency-item:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 24px rgba(0,0,0,0.16);
              }
            `}
          </style>
        </li>
      ))}
    </ul>
  );
};

export default EmergencyList;
