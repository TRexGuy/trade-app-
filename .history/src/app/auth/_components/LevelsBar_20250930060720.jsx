import LinearProgress from "../../../components/elements/LinearProgress";
import React from "react";
import Level1Icon from "../../../components/elements/Level1Icon";
import Level2Icon from "../../../components/elements/Level2Icon";
import Level3Icon from "../../../components/elements/Level3Icon";

export default function LevelsBar() {
  return (
    <div className="w-full flex flex-col items-center p-2 gap-3.5 border-2 border-[#31313a] rounded-[10px] bg-black/30">
      <span className="text-sm font-medium text-[#DCDEE0] w-full text-start">
        سطح شما 1 از سطح فلان
      </span>
      <div className="w-full flex flex-row-reverse items-center justify-between gap-6">
        <LinearProgress percent={35} />
        <span className="text-[8px] font-extrabold text-nowrap text-sky-400">
          درصد پیشرفت
        </span>
      </div>
      <div className="w-full grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center gap-2 rounded-[8px] p-3 bg-sky-400">
          <Level1Icon />
          <span className="text-xs text-[#73777A] font-medium">سطح 1</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-[8px] p-3">
          <Level2Icon />
          <span className="text-xs text-[#73777A] font-medium">سطح 2</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-[8px] p-3">
          <Level3Icon />
          <span className="text-xs text-[#73777A] font-medium">سطح 3</span>
        </div>
      </div>
    </div>
  );
}
