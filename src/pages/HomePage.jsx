// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import SuggestionBox from "../components/SuggestionBox";

const HomePage = () => {
  return (
    <div
      className="homepage-hero"
      style={{
        width: "100%",
        minHeight: "90vh",
        padding: "2rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top, rgba(116, 149, 255, 0.25), transparent 60%), radial-gradient(circle at bottom, rgba(255, 140, 235, 0.20), transparent 70%)",
      }}
    >
      <div
        className="hero-inner"
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          gap: "2.5rem",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SECTION */}
        <div style={{ flex: 1, minWidth: "320px" }}>
          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: 800,
              lineHeight: 1.25,
              background: "linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            Travel safer.<br /> Speak local with confidence.
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.85,
              maxWidth: "500px",
              marginBottom: "1.5rem",
              lineHeight: 1.55,
            }}
          >
            Instantly translate essential phrases between{" "}
            <strong>Hindi, Kannada, Tamil, Telugu & Marathi</strong>.
            Hinglish output, speech input, audio playback & real-time location
            safety tips — all in one place.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/translate"
              className="btn"
              style={{
                padding: "0.9rem 1.4rem",
                fontSize: "1rem",
                borderRadius: "12px",
              }}
            >
              ⚡ Start Translating
            </Link>

            <Link
              to="/emergency"
              className="btn btn-outline"
              style={{
                padding: "0.9rem 1.4rem",
                fontSize: "1rem",
                borderRadius: "12px",
              }}
            >
              🚨 Emergency Help
            </Link>
          </div>

          <div style={{ marginTop: "2.2rem" }}>
            <h3
              style={{
                margin: 0,
                fontSize: "1.2rem",
                opacity: 0.9,
                marginBottom: "0.6rem",
              }}
            >
              👇 Smart Travel Phrases
            </h3>
            <SuggestionBox onSelect={() => {}} />
          </div>
        </div>

        {/* RIGHT SIDE ILLUSTRATION */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png


"
            alt="travel language"
            style={{
              width: "80%",
              maxWidth: "380px",
              opacity: 0.95,
              filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.20))",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
