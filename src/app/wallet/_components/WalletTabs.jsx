"use client";
import { useState } from "react";
import WalletTabContent from "./WalletTabContent";

export default function WalletTabs() {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <div className="w-full relative">
      {/* محتوای تب‌ها */}
      <div className="pb-24"> {/* padding-bottom برای جای منو */}
        <WalletTabContent activeTab={activeTab} />
      </div>

      {/* منوی پایین ثابت */}
      <div className="fixed bottom-4 left-0 w-full flex justify-center px-4 z-50">
        <div className="flex w-full max-w-md border-2 border-[#31313a] bg-[#1B1B1DA6] rounded-xl overflow-hidden">
          <button
            type="button"
            onClick={() => setActiveTab("deposit")}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === "deposit"
                ? "bg-blue-400 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            تاریخچه واریز و برداشت
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === "history"
                ? "bg-red-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            مشاهده
          </button>
        </div>
      </div>
    </div>
  );
}

