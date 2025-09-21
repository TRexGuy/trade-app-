"use client";

import WalletChart from "./WalletChart";

const data = [
  { name: "SHIB", value: 345678, percent: 25, color: "#FF1493" },
  { name: "DOGE", value: 10000, percent: 25, color: "#32CD32" },
  { name: "ETH", value: 12345, percent: 13, color: "#00CED1" },
  { name: "BTC", value: 3746897, percent: 37, color: "#FFD700" },
];

export default function WalletBalance() {
  return (
    <div className="w-full flex-col flex items-center justify-between gap-4 border-2 border-[#31313a] bg-black/30 rounded-[10px] p-4">
      {/* عنوان */}
      <div className="w-full text-start">
        <h2 className="text-[16px] text-[#DCDEE0]">دارایی :</h2>
      </div>

      {/* موجودی کل */}
      <div className="w-full flex items-center gap-6">
        <div className="flex flex-col items-start gap-1.5">
          <span className="text-[#B0B0B8] text-[12px]">برحسب ریال</span>
          <p className="text-[20px] text-[#DCDEE0]">12.345.500 ریال</p>
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <span className="text-[#B0B0B8] text-[12px]">برحسب دلار</span>
          <p className="text-[20px] text-[#DCDEE0]">$ 12.92</p>
        </div>
      </div>

      {/* نمودار + لیست ارزها */}
      <div className="flex flex-row md:flex-row items-center justify-center gap-6 my-3 w-full">
        {/* نمودار */}
        <WalletChart data={data} />

        {/* لیست ارزها */}
        <div className="space-y-2 text-sm">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex flex-row-reverse items-center gap-2"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="w-10 text-[#A6AAAD]">{item.name}</span>
              <span className="text-gray-400">{item.percent}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* دکمه‌ها */}
      <div className="w-full flex items-center gap-5 my-2">
        <button className="w-full text-white text-xs font-bold rounded-[8px] text-center py-3 border-solid border-2 bg-sky-400 border-sky-400">
          واریز
        </button>
        <button className="w-full text-white text-xs font-bold rounded-[8px] text-center py-3 border-solid border-2 border-sky-400">
          برداشت
        </button>
      </div>
      <div className="w-full flex items-center gap-2.5 px-2">
     <div className="w-[25px]"></div> {/* جای آیکون */}
    <div className="w-full flex flex-col items-start">
       <p className="text-[#A6AAAD] text-sm">نام ارز</p>
     </div>
    <div className="w-full">
     <p className="text-[#A6AAAD] text-sm">کل موجودی</p>
   </div>
   <div className="w-full"></div> {/* برای واریز / برداشت */}
     <div className="w-full"></div> {/* برای دکمه معامله */}
  </div>
    </div>

  );
}
