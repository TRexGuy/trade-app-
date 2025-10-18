"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TicketHeader({ title }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-b-gray-700 bg-[#1B1B1D]">
      {/* آیکن برگشت */}
      <button
        onClick={() => router.back()}
        className="p-2 rounded-full hover:bg-[#232329] transition"
      >
        <ArrowRight size={20} className="text-white" />
      </button>

      {/* عنوان */}
      <h1 className="text-lg font-semibold text-white">{title}</h1>

      {/* جای خالی برای تراز وسط */}
      <div className="w-[36px]" />
    </div>
  );
}
