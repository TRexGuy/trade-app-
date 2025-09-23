import React from "react";

export default function WithdrawTabs({ tab, setTab }) {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="w-full px-16">
        <div className="w-full flex flex-row items-center justify-between bg-black/50 border-solid border-2 border-[#232329] rounded-lg p-2.5">
          <button
            onClick={() => setTab("fiat")}
            className={`px-7 py-2 rounded-lg ${
              tab === "fiat"
                ? "bg-blue-400 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            فیات
          </button>
          <button
            onClick={() => setTab("coin")}
            className={`px-7 py-2 rounded-lg ${
              tab === "coin"
                ? "bg-blue-400 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            کوین
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2 bg-black/50 border-solid border-2 border-[#232329] rounded-lg p-2.5">
        <div className="w-full flex flex-row items-center justify-between">
          <span className="text-[14px] text-[#DCDEE0]">
            کل موجودی قابل برداشت :
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#DCDEE0]">134500000</span>
            <span className="text-[13px] text-[#DCDEE0]">تومان</span>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <span className="text-[14px] text-[#DCDEE0]">
            حداقل مقدار قابل برداشت :
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#DCDEE0]">12500000</span>
            <span className="text-[13px] text-[#DCDEE0]">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
