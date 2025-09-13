import React from 'react'

export default function CurrencyList() {
  return (
    <div className="w-full flex flex-col items-center p-1 gap-1">
        <div className="w-full flex flex-col items-center  border-2 border-[#31313a] bg-black/30 rounded-t-[30px] py-2">
            <div className="w-full flex items-center justify-center gap-24">
                <span className="text-white text-xs font-medium px-5 py-1.5">تاریخچه</span>
                <span className="text-white text-xs font-medium bg-sky-400 px-5 py-1.5 rounded-[8px]">سفارشات</span>
            </div>
            <div className="w-full flex items-center justify-center gap-7">
                <span className="text-xs font-normal text-[#8C9094]">خرید</span>
                <span className="text-xs font-normal text-[#8C9094]">فروش</span>
            </div>
        </div>
        <div className="w-full h-[250px] border-2 border-[#31313a] bg-black/30 overflow-y-scroll pb-10">
            {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="w-full flex items-center justify-between px-7 py-1">
                    <span className="text-[#DCDEE0] text-xs font-normal">۰.۰۰۰۳</span>
                    <div className="flex items-center justify-center gap-7">
                        <span className="text-[#16C784] text-xs font-normal">۹۳٬۱۶۷</span>
                        <span className="text-[#EA3943] text-xs font-normal">۹۳٬۱۶۷</span>
                    </div>
                    <span className="text-[#DCDEE0] text-xs font-normal">۰.۰۰۰۳</span>
                </div>
            ))}
        </div>
    </div>
  )
}
