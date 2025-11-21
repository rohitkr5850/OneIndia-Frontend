// src/components/SavedPhraseCard.jsx
import { getLanguageLabel } from "../utils/languages";
import ShareButton from "./ShareButton";

const SavedPhraseCard = ({ phrase, onDelete }) => {
  return (
    <div
      className="saved-card"
      style={{
        padding: "1.1rem 1.3rem",
        borderRadius: "16px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 6px 22px rgba(0,0,0,0.08)",
        transition: "0.25s ease",
        marginBottom: "1rem",
      }}
    >
      {/* Language + Tag Row */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            padding: "0.25rem 0.6rem",
            fontSize: "0.75rem",
            borderRadius: "8px",
            background: "rgba(99,102,241,0.2)",
            border: "1px solid rgba(99,102,241,0.35)",
            color: "var(--accent)",
            fontWeight: 600,
          }}
        >
          {getLanguageLabel(phrase.from)} → {getLanguageLabel(phrase.to)}
        </span>

        {phrase.tag && (
          <span
            style={{
              padding: "0.25rem 0.6rem",
              fontSize: "0.75rem",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              opacity: 0.85,
              fontWeight: 500,
            }}
          >
            {phrase.tag}
          </span>
        )}
      </div>

      {/* Original Text */}
      <div
        style={{
          fontWeight: 700,
          fontSize: "1rem",
          marginBottom: "0.3rem",
          lineHeight: 1.4,
        }}
      >
        {phrase.text}
      </div>

      {/* Translated */}
      <div
        style={{
          fontSize: "0.95rem",
          opacity: 0.95,
          marginBottom: "0.25rem",
        }}
      >
        {phrase.translated}
      </div>

      {/* Hinglish */}
      <div
        style={{
          fontSize: "0.85rem",
          opacity: 0.8,
          marginBottom: "0.5rem",
        }}
      >
        ({phrase.hinglish})
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "0.6rem",
          flexWrap: "wrap",
          marginTop: "0.4rem",
        }}
      >
        <ShareButton
          text={`${phrase.text} → ${phrase.translated} (${phrase.hinglish})`}
          styleOverride={{
            padding: "0.55rem 0.9rem",
            borderRadius: "10px",
          }}
        />

        <button
          type="button"
          className="btn btn-outline"
          onClick={() => onDelete && onDelete(phrase._id)}
          style={{
            padding: "0.55rem 0.9rem",
            borderRadius: "10px",
            fontSize: "0.9rem",
          }}
        >
          🗑️ Delete
        </button>
      </div>

      {/* Hover animation */}
      <style>
        {`
          .saved-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 28px rgba(0,0,0,0.14);
          }
        `}
      </style>
    </div>
  );
};

export default SavedPhraseCard;
