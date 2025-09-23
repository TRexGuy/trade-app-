"use client";
import { useState } from "react";
import WalletTabContent from "./WalletTabContent";
import Link from "next/link";
export default function WalletTabs() {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <div className="w-full flex flex-col items-center">
      {/* محتوای تب‌ها */}
      <WalletTabContent activeTab={activeTab} />
      {/* منوی پایین ثابت */}
      <div className="w-full flex items-center justify-between px-4 py-2 border-2 border-[#31313a] bg-[#1B1B1DA6] rounded-[10px]">
        <span className="text-sm font-medium text-[#B0B0B8]">
          تاریخچه واریز و برداشت
        </span>
        <Link
          href={"/wallet/transactions/transaction-history"}
          className="py-2 px-10 bg-sky-400 rounded-[10px]"
        >
          مشاهده
        </Link>
      </div>
    </div>
  );
}
