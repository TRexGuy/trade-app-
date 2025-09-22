"use client";

import { Wallet, Send, ArrowDownToLine, Bitcoin } from "lucide-react";
export default function WalletTabs() {
  

  return (
    <div className="w-full relative">

        <div className="flex flex-col items-center gap-1 mb-10 mt-1.5border-2 border-[#31313a] bg-black/30 rounded-[10px] w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-2 border-[#31313a] bg-black/30 rounded-[10px] w-full py-1.5 px-1.5">
            <div className="w-full flex items-center gap-2">
              <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full bg-blue-400 ">
                <Bitcoin className="text-white" />
              </div>
              <div className="w-full flex flex-col items-start gap-2">
                <p className="font-medium text-[#DCDEE0]">بیت کوین</p>
                <p className="text-sm text-[#A6AAAD]">BTC/IRR</p>
              </div>
              <div className="w-full">
                <p className="font-bold text-[#DCDEE0]">12,34 ریال</p>
                <p className="text-[#A6AAAD] text-sm">+37$</p>
              </div>
              <div className="w-full flex flex-col items-center gap-1.5">
                <button className="w-full text-[#424547] border-solid border-2 border-blue-400  bg-blue-400 rounded-[8px]">واریز</button>

                <button className="w-full text-white border-solid border-2 border-blue-400  rounded-[8px]">برداشت</button>
              </div>
              <button className="w-full py-[19px] text-white  border-2 border-[#31313a] bg-black/30 rounded-[10px] text-center">معامله</button>
            </div>
          </div>
        ))}
      </div>
     



    </div>
  );
}
