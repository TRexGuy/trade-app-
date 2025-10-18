"use client";

import Link from "next/link";
import Header from "../_components/Header";

export default function TicketsListPage() {
  const tickets = [
    {
      id: 1,
      title: "مشکل در پرداخت",
      status: "باز",
      date: "۱۴۰۳/۰۷/۱۰",
    },
    {
      id: 2,
      title: "کد تخفیف اعمال نشد",
      status: "بسته",
      date: "۱۴۰۳/۰۷/۰۸",
    },
    {
      id: 3,
      title: "خطا در ورود به حساب کاربری",
      status: "باز",
      date: "۱۴۰۳/۰۷/۰۷",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-black/30  border-solid border-[3px] border-[#232329] shadow-md rounded-[10px] text-white">
      <div className="w-[390px] h-[844px] flex flex-col">
        {/* Header */}
        <Header title="لیست تیکت‌ها" />

        {/* محتوا */}
        <div className="flex-1 overflow-y-auto p-4">
          {tickets.map((ticket) => (
            <Link
              key={ticket.id}
              href={`/ticket/${ticket.id}`}
              className="block bg-[#232329] rounded-2xl px-4 py-3 mb-3 hover:bg-[#2e2e32] transition"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-base font-medium">{ticket.title}</span>
                <span className="text-xs text-gray-400">{ticket.date}</span>
              </div>
              <div className="text-sm text-gray-400">
                وضعیت:{" "}
                <span
                  className={
                    ticket.status === "باز" ? "text-blue-400" : "text-gray-400"
                  }
                >
                  {ticket.status}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* دکمه افزودن تیکت جدید */}
        <div className="px-4 pb-5">
          <Link
            href="/new-ticket"
            className="block w-full text-center bg-blue-400 text-black py-3 rounded-2xl font-semibold hover:opacity-90 transition"
          >
            تیکت جدید
          </Link>
        </div>
      </div>
    </div>
  );
}
