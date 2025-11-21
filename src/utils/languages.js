// src/utils/languages.js

export const LANGUAGES = [
  { code: "hi", label: "Hindi" },
  { code: "kn", label: "Kannada" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "mr", label: "Marathi" },
];

export const getLanguageLabel = (code) =>
  LANGUAGES.find((l) => l.code === code)?.label || code;
