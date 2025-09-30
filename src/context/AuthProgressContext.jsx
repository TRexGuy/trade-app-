"use client";

import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);

  const totalLevels = 3;
  const stepsPerLevel = 3; // هر سطح ۳ مرحله داره

  const progressPercent = Math.round(
    ((currentStep + (currentLevel - 1) * stepsPerLevel) / (totalLevels * stepsPerLevel)) * 100
  );

  const goNextStep = () => {
    if (currentStep < stepsPerLevel - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      if (currentLevel < totalLevels) {
        setCurrentLevel((prev) => prev + 1);
        setCurrentStep(0);
      }
    }
  };

  return (
    <ProgressContext.Provider
      value={{
        currentLevel,
        currentStep,
        progressPercent,
        goNextStep,
        setCurrentStep,
        setCurrentLevel,
        stepsPerLevel,
        totalLevels,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
