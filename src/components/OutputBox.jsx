// src/components/OutputBox.jsx

const OutputBox = ({ translated, hinglish }) => {
  return (
    <div
      className="output-card"
      style={{
        padding: "1.2rem 1.4rem",
        borderRadius: "16px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 6px 22px rgba(0,0,0,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        marginBottom: "1.2rem",
        transition: "0.25s ease",
      }}
    >
      {/* Translated Text */}
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            fontWeight: 600,
            fontSize: "0.95rem",
            opacity: 0.9,
            display: "block",
            marginBottom: "0.4rem",
          }}
        >
          Translated text
        </label>

        <div
          style={{
            minHeight: "70px",
            padding: "0.75rem",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            fontSize: "1.05rem",
            fontWeight: 500,
            lineHeight: 1.45,
            color: translated ? "inherit" : "rgba(255,255,255,0.6)",
          }}
        >
          {translated || "Translation will appear here…"}
        </div>
      </div>

      {/* Hinglish Area */}
      <div>
        <label
          style={{
            fontWeight: 600,
            fontSize: "0.95rem",
            opacity: 0.9,
            display: "block",
            marginBottom: "0.4rem",
          }}
        >
          Hinglish / Latin
        </label>

        <div
          style={{
            minHeight: "60px",
            padding: "0.75rem",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            fontSize: "0.95rem",
            lineHeight: 1.45,
            color: hinglish ? "inherit" : "rgba(255,255,255,0.6)",
          }}
        >
          {hinglish || "Hinglish transliteration will appear here…"}
        </div>
      </div>

      {/* Hover lift effect */}
      <style>
        {`
          .output-card:hover {
            box-shadow: 0 10px 28px rgba(0,0,0,0.14);
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default OutputBox;
