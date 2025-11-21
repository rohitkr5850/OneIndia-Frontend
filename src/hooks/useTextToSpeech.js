// src/hooks/useTextToSpeech.js
import { useState } from "react";

/**
 * SpeechSynthesis API hook (text → voice)
 */
export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text, langCode = "hi") => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const langMap = {
      hi: "hi-IN",
      kn: "kn-IN",
      ta: "ta-IN",
      te: "te-IN",
      mr: "mr-IN",
    };

    utterance.lang = langMap[langCode] || "en-IN";

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return { isSpeaking, speak, stop };
};
