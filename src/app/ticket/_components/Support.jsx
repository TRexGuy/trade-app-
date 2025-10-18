"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
// import Header from "./Header";

export default function SupportPage() {
  return (
    <div className="flex min-h-screen items-center justify-center  text-white">
      <div className="w-[390px] h-[844px]  flex flex-col">
        
  
     {/* <Header/>  */}

        {/* Menu items */}
        <h1 className="border-b border-b-gray-600 pb-2 mb-2">پشتیبانی</h1>

        <div className="flex flex-col ">
          <Link
            href="/new-ticket"
            className="flex items-center justify-between px-4 py-5 hover:bg-[#232329] transition"
          >
            <span>ارسال تیکت</span>
            <ArrowRight className="rotate-180" size={18} />
          </Link>

          <Link
            href="ticket/ticketslist"
            className="flex items-center justify-between px-4 py-5 hover:bg-[#232329] transition"
          >
            <span>لیست تیکت‌ها</span>
            <ArrowRight className="rotate-180" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
} 