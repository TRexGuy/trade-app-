"use client";
import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export function AuthProgressContext({ children }) {
  const [step, setStep] = useState(0);
  const totalSteps = 3;
  const percent = ((step + 1) / totalSteps) * 100;

  return (
    <ProgressContext.Provider value={{ step, setStep, percent }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
