// src/hooks/useLocationDetect.js
import { useEffect, useState } from "react";
import { api } from "../utils/api";

/**
 * Detect user state (very simple) + fetch suggestions from backend
 */
export const useLocationDetect = (lang = "hi") => {
  const [stateName, setStateName] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Guess state once
  useEffect(() => {
    const stored = localStorage.getItem("userStateName");
    if (stored) {
      setStateName(stored);
      return;
    }

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      () => {
        // In real app you'd reverse-geocode coordinates.
        // For now just pick Karnataka as demo.
        const guessed = "Karnataka";
        setStateName(guessed);
        localStorage.setItem("userStateName", guessed);
      },
      () => {
        // If user denies location, we just do nothing.
      }
    );
  }, []);

  // Fetch suggestions from backend when state is known
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!stateName) return;

      try {
        setLoading(true);
        const res = await api.get("/location/suggestions", {
          params: { state: stateName, lang },
        });
        setSuggestions(res.data.suggestions || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [stateName, lang]);

  return { stateName, setStateName, suggestions, loading };
};
