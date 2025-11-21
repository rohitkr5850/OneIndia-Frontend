// src/pages/EmergencyPage.jsx
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { api } from "../utils/api";
import LanguageDropdown from "../components/LanguageDropdown";
import EmergencyList from "../components/EmergencyList";

const EmergencyPage = () => {
  const { to, setTo } = useLanguage();
  const [phrases, setPhrases] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPhrases = async (langCode) => {
    setLoading(true);
    try {
      const res = await api.get(`/emergency/${langCode}`);
      setPhrases(res.data.phrases || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhrases(to);
  }, [to]);

  const handleSavePhrase = async (p) => {
    try {
      await api.post("/saved", {
        text: p.english,
        translated: p.native,
        hinglish: p.hinglish,
        from: "hi",
        to,
        tag: "emergency",
      });
      alert("Emergency phrase saved!");
    } catch (err) {
      console.error(err);
      alert("Failed to save phrase");
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ marginTop: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "0.75rem",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ marginTop: 0, marginBottom: 4 }}>Emergency phrases</h2>
            <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.8 }}>
              Quickly show or speak critical phrases in the local language.
            </p>
          </div>
          <div style={{ minWidth: 150 }}>
            <LanguageDropdown
              value={to}
              onChange={(code) => setTo(code)}
              label="Language"
            />
          </div>
        </div>

        {loading ? (
          <div>Loading emergency phrases…</div>
        ) : (
          <EmergencyList phrases={phrases} onSave={handleSavePhrase} />
        )}
      </div>
    </div>
  );
};

export default EmergencyPage;
