import React from 'react'
import { PiCurrencyEthBold } from "react-icons/pi";

export default function CurrencyBoard() {
  return (
    <div className="w-full flex items-center justify-between gap-2.5  border-2 border-[#31313a] bg-black/30 rounded-[10px] p-2.5">

        <div className="flex flex-col items-start gap-3.5">
            <div className="w-full flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#D9D9D9] flex items-center justify-center p-0.5">
                    <PiCurrencyEthBold className='w-full h-full text-[#2F3030]' />
                </div>
                <span className="text-[16px] text-[#DCDEE0] font-medium">تون کوین</span>
            </div>
            <span className="text-sm font-bold text-[#16C784]">۲۵,۴۵۶,۲۶۰ ﷼</span>
            <span className="text-xs font-medium text-[#C1C4C7]">۳.۰۳۳.۷۵۹ USDT =</span>
        </div>

        <div className="flex flex-col items-start gap-3 border-solid border-r-[3px] border-[#232329] pr-4">
            <div className="w-full flex flex-col items-start gap-0.5">
                <span className="text-[8px] font-normal text-[#8C9094]">بیشترین قیمت</span>
                <span className="text-[10px] font-normal text-[#DCDEE0]">۳٬۶۹۳٬۱۶۷</span>
            </div>
            <div className="w-full flex flex-col items-start gap-0.5">
                <span className="text-[8px] font-normal text-[#8C9094]">حجم معاملات</span>
                <span className="text-[10px] font-normal text-[#DCDEE0]">۲۷۳,۲۵۵,۴۵۶,۲۶۰ ﷼</span>
            </div>
        </div>

        <div className="flex flex-col items-start gap-3">
            <div className="w-full flex flex-col items-start gap-0.5">
                <span className="text-[8px] font-normal text-[#8C9094]">کمترین قیمت</span>
                <span className="text-[10px] font-normal text-[#DCDEE0]">۳٬۰۸۰٬۲۶۰</span>
            </div>
            <div className="w-full flex flex-col items-start gap-0.5">
                <span className="text-[8px] font-normal text-[#8C9094]">تغییر 24h</span>
                <span className="text-[10px] font-normal text-[#16C784]">+۰.۴۴ ٪</span>
            </div>
        </div>

    </div>
  )
}
