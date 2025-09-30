import LinearProgress from "@/components/elements/LinearProgress";
import React from "react";

export default function LevelsBar() {
  return (
    <div className="w-full flex flex-col items-center p-1 border-2 border-[#31313a] rounded-[10px] bg-black/30">
      <span className="text-sm font-medium text-[#DCDEE0] w-full text-start">
        سطح شما 1 از سطح فلان
      </span>
      <div className="w-full flex flex-row items-center justify-between">
        <LinearProgress percent={35} />
        <span className="">درصد پی</span>
      </div>
      <div className=""></div>
    </div>
  );
}
