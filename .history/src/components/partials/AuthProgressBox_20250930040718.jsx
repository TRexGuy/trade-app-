"use client";

import { useProgress } from "../../context/AuthProgressContext";

export default function AuthProgressBox() {
  const { currentLevel, progressPercent, totalLevels } = useProgress();
  const levels = Array.from({ length: totalLevels }, (_, i) => i + 1);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl mb-6">
      <div className="flex justify-between items-center mb-2">
        {levels.map((lvl) => (
          <div key={lvl} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                lvl < currentLevel
                  ? "bg-green-500"
                  : lvl === currentLevel
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-600"
              }`}
            >
              {lvl}
            </div>
            <span className="text-sm mt-1">سطح {lvl}</span>
          </div>
        ))}
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="text-right text-xs mt-1">{progressPercent}%</p>
    </div>
  );
}
