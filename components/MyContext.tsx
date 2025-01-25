"use client"

import React, { createContext, useState, useContext, ReactNode } from "react";

// Typ dla wartości kontekstu
type MyContextType = {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
};

// Utwórz kontekst
const MyContext = createContext<MyContextType | undefined>(undefined);

// Provider do udostępniania wartości kontekstu
export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState<number>(0); // useState

  return (
    <MyContext.Provider value={{points, setPoints }}>
      {children}
    </MyContext.Provider>
  );
};

// Hook do używania kontekstu
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};