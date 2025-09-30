"use client";

import { useEffect, useState } from "react";

export default function LinearProgress({ percent = 0 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const timeout = setTimeout(() => {
      setProgress(percent);
    }, 50);
    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div className="w-full h-1.5 bg-white rounded-full overflow-hidden flex items-end justify-end">
      <div
        className="bg-[#A6C2FF] h-full rounded-full p transition-all duration-1000 ease-out flex items-center justify-start"
        style={{ width: `${progress}%` }}
      >
        <span className="z-30 text-[8px] text-black">{progress}%</span>
      </div>
    </div>
  );
}
