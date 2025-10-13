"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LinearProgress from "../../../components/elements/LinearProgress";
import Level1Icon from "../../../components/elements/Level1Icon";
import Level2Icon from "../../../components/elements/Level2Icon";
import Level3Icon from "../../../components/elements/Level3Icon";

export default function LevelsBar() {
  const pathname = usePathname();

  // تعیین سطح فعلی بر اساس مسیر
  const getActiveLevel = () => {
    if (pathname.includes("level-3")) return 3;
    if (pathname.includes("level-2")) return 2;
    return 1; // پیش‌فرض سطح 1
  };

  const activeLevel = getActiveLevel();

  const levels = [
    { id: 1, icon: <Level1Icon />, label: "سطح 1" },
    { id: 2, icon: <Level2Icon />, label: "سطح 2" },
    { id: 3, icon: <Level3Icon />, label: "سطح 3" },
  ];

  return (
    <div className="w-full flex flex-col items-center p-3 gap-4 border-2 border-[#31313a] rounded-[10px] bg-black/30">
      <span className="text-sm font-medium text-[#DCDEE0] w-full text-start">
        سطح شما {activeLevel} از 3
      </span>

      <div className="w-full flex flex-row-reverse items-center justify-between gap-6">
        <LinearProgress percent={(activeLevel / 3) * 100} />
        <span className="text-[8px] font-extrabold text-nowrap text-sky-400">
          درصد پیشرفت
        </span>
      </div>

      <div className="w-full flex flex-row items-center justify-evenly">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`flex flex-col items-center gap-2 rounded-[8px] p-3 transition-all duration-200 ${
              activeLevel === level.id
                ? "bg-sky-400 text-black"
                : "bg-transparent text-[#73777A]"
            }`}
          >
            <div
              className={`transition-all duration-200 ${
                activeLevel === level.id ? "text-black" : "text-[#73777A]"
              }`}
            >
              {level.icon}
            </div>
            <span className="text-xs font-medium">{level.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
