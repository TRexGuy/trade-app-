"use client";
import { useState } from "react";
import { TicketTable } from "./_components/TicketTable";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

const tabs = [
  { id: "all", label: "همه پیام‌ها" },
  { id: "read", label: "پیام‌های خوانده‌شده" },
  { id: "waiting", label: "در انتظار پاسخ" },
  { id: "closed", label: "بسته‌شده" },
];

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 pt-8">
      <div className="w-full bg-black/30  border-solid border-[3px] border-[#232329] shadow-md rounded-[10px]">
        {/* Header */}
        <div className="flex items-center justify-between  mt-[2rem] mb-4">
   
          <p className="text-center flex-1  text-lg font-medium text-gray-200">
            لیست تیکت‌ها
          </p>
          <ArrowLeft className="text-gray-400 w-5 h-5" />
          <div className="w-5" />
        </div>

        {/* New ticket */}
        <div className="flex justify-end px-6 gap-2 mb-4">
        <button className="bg-blu-400 text-black p-1.5 rounded-full hover:bg-blue-400 transition">
            <Plus size={14} />
          </button>
          <span className="text-gray-300 text-sm">ارسال تیکت جدید</span>
     
        </div>

        {/* Tabs */}
        <div className="flex px-4 rounded-xl overflow-hidden text-xs ">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`flex-1   rounded-xl transition-all  ${
        activeTab === tab.id
          ? "bg-blue-400  font-medium"
          : "text-gray-300 hover:bg-[#1F1F21]"
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>


        {/* Table */}
        <TicketTable filter={activeTab} />
      </div>
    </main>
  );
}
