// src/pages/SavedPage.jsx
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import SavedPhraseCard from "../components/SavedPhraseCard";

const SavedPage = () => {
  const [phrases, setPhrases] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get("/saved");
      setPhrases(res.data.phrases || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this phrase?")) return;
    try {
      await api.delete(`/saved/${id}`);
      setPhrases((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ marginTop: "1rem" }}>
        <h2 style={{ marginTop: 0 }}>Saved phrases</h2>
        <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
          Your frequently used or emergency phrases stored for quick access.
        </p>

        {loading && <div>Loading saved phrases…</div>}

        {!loading && !phrases.length && (
          <div style={{ marginTop: "0.75rem" }}>
            No saved phrases yet. Save from Translate or Emergency pages.
          </div>
        )}

        {!loading &&
          phrases.map((p) => (
            <SavedPhraseCard key={p._id} phrase={p} onDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
};

export default SavedPage;
