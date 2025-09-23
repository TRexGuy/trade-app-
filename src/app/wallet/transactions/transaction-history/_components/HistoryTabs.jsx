import React from "react";

export default function HistoryTabs({
  tab,
  setTab,
  transactions,
  setTransactions,
}) {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="w-full flex flex-row items-center justify-between bg-black/50 border-solid border-2 border-[#232329] rounded-lg p-2">
        <button
          onClick={() => setTab("fiat")}
          className={`px-4 py-2 rounded-lg ${
            tab === "fiat"
              ? "bg-blue-400 text-white"
              : "bg-transparent text-gray-400"
          }`}
        >
          فیات
        </button>
        <button
          onClick={() => setTab("coin")}
          className={`px-4 py-2 rounded-lg ${
            tab === "coin"
              ? "bg-blue-400 text-white"
              : "bg-transparent text-gray-400"
          }`}
        >
          کوین
        </button>
      </div>
      <div className="w-full flex flex-row items-center justify-between bg-black/50 border-solid border-2 border-[#232329] rounded-lg p-2">
        <button
          onClick={() => setTransactions("deposit")}
          className={`px-4 py-2 rounded-lg ${
            transactions === "deposit"
              ? "bg-blue-400 text-white"
              : "bg-transparent text-gray-400"
          }`}
        >
          واریز
        </button>
        <button
          onClick={() => setTransactions("withdraw")}
          className={`px-4 py-2 rounded-lg ${
            transactions === "withdraw"
              ? "bg-blue-400 text-white"
              : "bg-transparent text-gray-400"
          }`}
        >
          برداشت
        </button>
      </div>
    </div>
  );
}
