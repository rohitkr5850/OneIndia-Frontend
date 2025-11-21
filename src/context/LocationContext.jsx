// src/context/LocationContext.jsx
import { createContext, useContext } from "react";
import { useLocationDetect } from "../hooks/useLocationDetect";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  // default lang hi – just for suggestions
  const loc = useLocationDetect("hi");
  return (
    <LocationContext.Provider value={loc}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationCtx = () => useContext(LocationContext);
