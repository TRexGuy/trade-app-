import React from "react";

export default function HistoryTable() {
  const fakeRows = Array.from({ length: 15 });

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
        {fakeRows.map((_, index) => {
          const isLast = index === fakeRows.length - 1;
          return (
            <tr
              key={index}
              className={`text-[10px] font-bold text-[#8C9094] w-full flex items-center justify-between p-2 ${
                !isLast ? "border-b border-sky-400" : ""
              }`}
            >
              <td className="flex flex-col items-center gap-0.5">
                <span>۱۴۰۱.۳.۹</span>
                <span>۱۱:۲۵:۴۳</span>
              </td>
              <td className="text-green-600">موفق</td>
              <td className="flex flex-col items-center gap-0.5">
                <span>۱,۳۶۵,۰۰۰</span>
                <span>تومان</span>
              </td>
              <td>۹۷۶۵۳۴۲۰۰۱۸۲۷۶</td>
              <td>
                <button className="bg-sky-400 text-white rounded-md py-2 px-3">
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
