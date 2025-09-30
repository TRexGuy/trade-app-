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
    <div className="w-full h-4 bg-white rounded-full overflow-hidden flex items-end justify-end">
      <div
        className="bg-sky-400 h-full rounded-full py-2 px-1.5 transition-all duration-1000 ease-out flex items-center justify-start"
        style={{ width: `${progress}%` }}
      >
        <span className="z-30 text-[9px] text-white font-semibold">{progress}%</span>
      </div>
    </div>
  );
}
