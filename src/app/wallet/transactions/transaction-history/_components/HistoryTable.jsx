import React from "react";

export default function HistoryTable({ onShowDetails }) {

  const fakeRows = Array.from({ length: 15 }).map((_, index) => ({
    date: "۱۴۰۱.۳.۹",
    time: "۱۱:۲۵:۴۳",
    status: "موفق",
    amount: "۱,۳۶۵,۰۰۰",
    currency: "تومان",
    trackingCode: "۹۷۶۵۳۴۲۰۰۱۸۲۷۶",
    cardOrIban: "IR123456789012345678901234",
  }));

  return (
    <table className="w-full flex flex-col items-center gap-1">
      <thead className="w-full flex items-center justify-start bg-black/50 border-solid border-2 border-[#232329] rounded-t-lg py-2 px-5">
        <tr className="text-[10px] font-bold text-[#8C9094] w-full flex items-center gap-8">
          <th>تاریخ</th>
          <th>وضعیت</th>
          <th>مقدار</th>
          <th>کد پیگیری</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="w-full flex flex-col items-center gap-2 bg-black/50 border-solid border-2 border-[#232329] rounded-b-lg p-2">
        {fakeRows.map((row, index) => {
          const isLast = index === fakeRows.length - 1;
          return (
            <tr
              key={index}
              className={`text-[10px] font-bold text-[#8C9094] w-full flex items-center justify-between p-2 ${
                !isLast ? "border-b border-sky-400" : ""
              }`}
            >
              <td className="flex flex-col items-center gap-0.5">
                <span>{row.date}</span>
                <span>{row.time}</span>
              </td>
              <td className="text-green-600">{row.status}</td>
              <td className="flex flex-col items-center gap-0.5">
                <span>{row.amount}</span>
                <span>{row.currency}</span>
              </td>
              <td>{row.trackingCode}</td>
              <td>
                <button
                  className="bg-sky-400 text-white rounded-md py-2 px-3"
                  onClick={() => onShowDetails(row)} 
                >
                  جزئیات
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
