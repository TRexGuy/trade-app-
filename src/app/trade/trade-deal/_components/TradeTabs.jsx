"use client";

export default function TradeTabs({ tab, onChange }) {
  return (
    <div className="w-full max-w-md mx-auto flex bg-[#232329] rounded-xl p-1">
      <button
        className={`flex-1 py-2 text-xs font-medium rounded-lg transition ${
          tab === "buy" ? "bg-[#16C784] text-white" : "bg-[#232329] text-gray-400"
        }`}
        onClick={() => onChange("buy")}
      >
        خرید
      </button>
      <button
        className={`flex-1 py-2 text-xs font-medium rounded-lg transition ${
          tab === "sell" ? "bg-red-500 text-white" : "bg-[#232329] text-gray-400"
        }`}
        onClick={() => onChange("sell")}
      >
        فروش
      </button>
    </div>
  );
}
