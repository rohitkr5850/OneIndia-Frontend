// src/hooks/useSpeechToText.js
import { useEffect, useRef, useState } from "react";

/**
 * Web Speech API hook (voice → text)
 * Works on Chrome / Edge mainly.
 */
export const useSpeechToText = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    setIsSupported(true);
  }, []);

  const startListening = (onResult, langCode = "hi") => {
    const rec = recognitionRef.current;
    if (!rec) return;

    const map = {
      hi: "hi-IN",
      kn: "kn-IN",
      ta: "ta-IN",
      te: "te-IN",
      mr: "mr-IN",
    };

    rec.lang = map[langCode] || "en-IN";

    rec.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    rec.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  return {
    isSupported,
    isListening,
    startListening,
    stopListening,
  };
};
