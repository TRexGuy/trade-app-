"use client";

import { useProgress } from "@/context/ProgressContext";

export default function AuthStepper({ steps }) {
  const { currentStep, goNextStep, currentLevel } = useProgress();
  const isLastStep = currentStep === steps.length - 1;
  const CurrentStepComponent = steps[currentStep];

  return (
    <div>
      <div className="p-6 bg-gray-800 rounded-xl text-white">
        <CurrentStepComponent />
        <button
          onClick={goNextStep}
          className="mt-6 bg-yellow-400 px-4 py-2 rounded text-black"
        >
          {isLastStep ? "رفتن به سطح بعدی" : "مرحله بعد"}
        </button>
      </div>
    </div>
  );
}
