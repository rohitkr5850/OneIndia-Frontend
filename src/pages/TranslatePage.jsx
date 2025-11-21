// src/pages/TranslatePage.jsx
import { useState } from "react";
import { api } from "../utils/api";
import { useLanguage } from "../context/LanguageContext";
import LanguageDropdown from "../components/LanguageDropdown";
import InputBox from "../components/InputBox";
import OutputBox from "../components/OutputBox";
import ShareButton from "../components/ShareButton";
import SuggestionBox from "../components/SuggestionBox";
import { useSpeechToText } from "../hooks/useSpeechToText";

const TranslatePage = () => {
  const { from, to, setFrom, setTo, swap } = useLanguage();
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [hinglish, setHinglish] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const speechHook = useSpeechToText();

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setError(null);
    setLoading(true);

    try {
      // Only one API call now
      const res = await api.post("/translate", { text, from, to });

      setTranslated(res.data.translated);
      setHinglish(res.data.hinglish);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Translation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionSelect = (s) => {
    setText((prev) => (prev ? prev + " " + s : s));
  };

  const handleSave = async () => {
    if (!translated || !hinglish) return;

    try {
      await api.post("/saved", {
        text,
        translated,
        hinglish,
        from,
        to,
        tag: "manual",
      });

      alert("Saved phrase!");
    } catch (err) {
      console.error(err);
      alert("Failed to save phrase");
    }
  };

  return (
    <div
      className="translate-page"
      style={{
        padding: "2rem 1rem",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
          }}
        >
          <div
            className="card"
            style={{
              padding: "1.5rem",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 6px 20px rgba(0,0,0,0.08), inset 0 0 0.5px rgba(255,255,255,0.2)",
            }}
          >
            {/* Language Row */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "1rem",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1, minWidth: "150px" }}>
                <LanguageDropdown
                  label="From"
                  value={from}
                  onChange={setFrom}
                />
              </div>

              <button
                type="button"
                className="btn btn-icon btn-outline"
                onClick={swap}
                style={{
                  padding: "0.65rem",
                  borderRadius: "10px",
                }}
              >
                ⇄
              </button>

              <div style={{ flex: 1, minWidth: "150px" }}>
                <LanguageDropdown label="To" value={to} onChange={setTo} />
              </div>
            </div>

            {/* Input Box */}
            <InputBox
              label="Your Text"
              value={text}
              onChange={setText}
              onMicResult={(t) => setText(t)}
              speechHook={speechHook}
              langCode={from}
            />

            {/* Error */}
            {error && (
              <div
                style={{
                  color: "#ef4444",
                  fontSize: "0.85rem",
                  marginTop: "0.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                {error}
              </div>
            )}

            {/* Translate Button */}
            <button
              type="button"
              className="btn"
              onClick={handleTranslate}
              disabled={loading}
              style={{
                marginTop: "1rem",
                width: "100%",
                padding: "0.85rem",
                borderRadius: "12px",
              }}
            >
              {loading ? "Translating…" : "Translate"}
            </button>

            {/* Suggestions */}
            <div style={{ marginTop: "1.2rem" }}>
              <SuggestionBox onSelect={handleSuggestionSelect} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 6px 20px rgba(0,0,0,0.08), inset 0 0 0.5px rgba(255,255,255,0.2)",
            }}
          >
            <OutputBox
              translated={translated}
              hinglish={hinglish}
              langCode={to}
            />

            {/* Buttons */}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <ShareButton
                text={
                  translated
                    ? `${text} → ${translated} (${hinglish})`
                    : "India Language Safety Translator"
                }
              />

              <button
                type="button"
                className="btn btn-outline"
                onClick={handleSave}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                }}
              >
                💾 Save Phrase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslatePage;
