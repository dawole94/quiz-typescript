"use client"

import React, { createContext, useState, useContext, ReactNode } from "react";

type VisibilityContextType = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const VisibilityContext = createContext<VisibilityContextType | undefined>(
  undefined
);

export const VisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibilityContext = () => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error(
      "useVisibilityContext must be used within a VisibilityProvider"
    );
  }
  return context;
};