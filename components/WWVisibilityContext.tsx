"use client"

import React, { createContext, useState, useContext, ReactNode } from "react";

type WWVisibilityContextType = {
  isWWVisible: boolean;
  setIsWWVisible: (visible: boolean) => void;
};

const WWVisibilityContext = createContext<WWVisibilityContextType | undefined>(
  undefined
);

export const WWVisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isWWVisible, setIsWWVisible] = useState(true);

  return (
    <WWVisibilityContext.Provider value={{ isWWVisible, setIsWWVisible }}>
      {children}
    </WWVisibilityContext.Provider>
  );
};

export const useWWVisibilityContext = () => {
  const context = useContext(WWVisibilityContext);
  if (!context) {
    throw new Error(
      "useWWVisibilityContext must be used within a WWVisibilityProvider"
    );
  }
  return context;
};