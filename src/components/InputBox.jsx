// src/components/InputBox.jsx

const InputBox = ({
  label = "Your phrase",
  value,
  onChange,
  onMicResult,
  speechHook,
  langCode,
}) => {
  const { isSupported, isListening, startListening, stopListening } =
    speechHook || {};

  const handleMicClick = () => {
    if (!speechHook || !isSupported) return;
    if (isListening) stopListening();
    else startListening(onMicResult, langCode);
  };

  return (
    <div
      className="inputbox-card"
      style={{
        padding: "1.2rem 1.4rem",
        borderRadius: "16px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 6px 22px rgba(0,0,0,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        marginBottom: "1.2rem",
        transition: "0.25s ease",
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.6rem",
          alignItems: "center",
        }}
      >
        <label
          style={{
            fontWeight: 600,
            fontSize: "0.95rem",
            opacity: 0.9,
          }}
        >
          {label}
        </label>

        {speechHook && isSupported && (
          <button
            type="button"
            onClick={handleMicClick}
            style={{
              padding: "0.45rem 0.8rem",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.4)",
              background: isListening
                ? "rgba(239,68,68,0.25)"
                : "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              color: isListening ? "#ef4444" : "inherit",
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            {isListening ? "🛑 Stop" : "🎤 Speak"}
          </button>
        )}
      </div>

      {/* Textarea */}
      <textarea
        placeholder={
          isListening
            ? "Listening… speak now!"
            : "Type your phrase or use the microphone…"
        }
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          minHeight: "120px",
          padding: "0.9rem",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.25)",
          outline: "none",
          resize: "vertical",
          color: "inherit",
          fontSize: "0.95rem",
          lineHeight: 1.45,
          transition: "0.25s ease",
        }}
        className="inputbox-textarea"
      />

      {/* Glow animation when listening */}
      <style>
        {`
        .inputbox-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
        }

        .inputbox-textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(99,102,241,0.4);
        }

        /* Listening glow */
        ${
          isListening
            ? `
          .inputbox-card {
            animation: micGlow 1.5s ease-in-out infinite;
          }

          @keyframes micGlow {
            0% { box-shadow: 0 0 0px rgba(236,72,153,0.35); }
            50% { box-shadow: 0 0 22px rgba(236,72,153,0.55); }
            100% { box-shadow: 0 0 0px rgba(236,72,153,0.35); }
          }
        `
            : ""
        }
      `}
      </style>
    </div>
  );
};

export default InputBox;
