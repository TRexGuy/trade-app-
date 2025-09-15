"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TradeForm() {
  const [activeTab, setActiveTab] = useState("buy");
  const [amount, setAmount] = useState("");
  const [receive, setReceive] = useState("");

  return (
    <form className="flex flex-col gap-6 px-4 mt-6">
      {/* تب خرید / فروش */}
      <div className="flex bg-zinc-900 rounded-2xl p-1">
        <button
          type="button"
          onClick={() => setActiveTab("buy")}
          className={`flex-1 py-2 rounded-xl font-medium transition-colors ${
            activeTab === "buy"
              ? "bg-green-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          خرید
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("sell")}
          className={`flex-1 py-2 rounded-xl font-medium transition-colors ${
            activeTab === "sell"
              ? "bg-red-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          فروش
        </button>
      </div>

      {/* پرداخت می‌کنم */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
        <label className="text-gray-400 text-sm">پرداخت می‌کنم</label>
        <span className="">۱۳۲۴۵۰ <span className="text-[#00CFFF]">همه موجودی</span></span>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            className="flex-1 border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6]  focus:ring-2 focus:ring-[#00CFFF] rounded-2xl px-4 py-3 outline-none text-right text-white text-lg placeholder-gray-500"
          />
       
       <span className="text-sm bg-zinc-800 px-3 py-1 rounded-xl">
            تومان
          </span>
        </div>
     
      </div>

      {/* دریافت می‌کنم */}
      <div className="flex flex-row gap-2">
        <label className="text-gray-400 text-sm">دریافت می‌کنم</label>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={receive}
            onChange={(e) => setReceive(e.target.value)}
            placeholder="0"
            className="flex-1 border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6]  focus:ring-2 focus:ring-[#00CFFF] rounded-2xl px-4 py-3 outline-none text-right text-white text-lg placeholder-gray-500"
          />
        <button
            type="button"
            className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-xl text-sm"
          >
            BTC <ChevronDown size={14} />
          </button>
        </div>
    
      </div>

      {/* دکمه خرید / فروش */}
      <button
        type="submit"
        className={`rounded-2xl py-3 text-center font-bold text-white mt-2 transition-colors ${
          activeTab === "buy"
            ? "bg-green-500 hover:bg-green-600"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {activeTab === "buy" ? "خرید" : "فروش"}
      </button>
    </form>
  );
}


