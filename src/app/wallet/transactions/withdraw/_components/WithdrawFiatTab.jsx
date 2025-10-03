"use client";
import React from "react";
import { GiBank } from "react-icons/gi";
import CardNumIcon from "../../../../../components/elements/CardNumIcon";
import CashIcon from "../../../../../components/elements/CashIcon";
import DropDownIcon from "../../../../../components/elements/DropDownIcon";
import FiatCurrencyIcon from "../../../../../components/elements/FiatCurrencyIcon";
import TomanIcon from "../../../../../components/elements/TomanIcon";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useRouter } from "next/navigation"; 

export default function WithdrawFiatTab() {
  const router = useRouter();

  const handlePay = () => {
    // انتخاب تصادفی موفق یا ناموفق
    const status = Math.random() > 0.5 ? "success" : "failed";

    // ❌ دیگه آبجکت نده، فقط string
    router.push(
      `/wallet/transactions/result?status=${status}&amount=300000&currency=تومان&date=1402/07/08&time=11:45:20&cardOrIban=1234-5678-9012-3456`
    );
    
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex flex-col items-center gap-6 bg-black/50 border-solid border-2 border-[#232329] rounded-lg p-2.5">
        {/* انتخاب ارز */}
        <label className="w-full flex flex-col items-start gap-2.5 relative">
          <div className="flex items-center gap-1.5">
            <FiatCurrencyIcon />
            <span className="text-sm text-[#DCDEE0]">انتخاب ارز فیات</span>
          </div>
          <div className="relative flex items-center w-full gap-2 bg-[#1B1B1D] p-3 border-solid border-[3px] border-[#232329] rounded-xl">
            <TomanIcon />
            <select className="w-full outline-0 text-[#DCDEE0] bg-[#1B1B1D] p-0.5 appearance-none">
              <option value="toman">تومان</option>
              <option value="other">همچی</option>
            </select>
            <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <DropDownIcon />
            </span>
          </div>
        </label>

        {/* انتخاب شماره شبا */}
        <label className="w-full flex flex-col items-start gap-2.5 relative">
          <div className="flex items-center gap-1.5">
            <CardNumIcon />
            <span className="text-sm text-[#DCDEE0]">شماره شبا</span>
          </div>
          <div className="relative flex items-center w-full gap-2 bg-[#1B1B1D] p-3 border-solid border-[3px] border-[#232329] rounded-xl">
            <GiBank size={27} className="text-[#DCDEE0]" />
            <select className="w-full outline-0 text-[#DCDEE0] bg-[#1B1B1D] p-0.5 appearance-none">
              <option value="iban1">۱۲۳۴ - ۱۲۳۴ - ۱۲۳۴ - ۱۲۳۴</option>
              <option value="iban2">۴۳۲۱ - ۴۳۲۱ - ۴۳۲۱ - ۴۳۲۱</option>
            </select>
            <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <DropDownIcon />
            </span>
          </div>
        </label>

        {/* مبلغ برداشت */}
        <div className="w-full flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center justify-start gap-1.5">
              <CashIcon />
              <span className="text-sm text-[#DCDEE0]">مبلغ برداشت</span>
            </div>
            <div className="w-full flex items-center gap-2.5">
              <span className="text-xs text-[#DCDEE0] text-nowrap">
                135200000 تومان
              </span>
              <span className="text-blue-400 text-xs text-nowrap">
                موجودی کل
              </span>
            </div>
          </div>
          <div className="w-full flex items-center bg-[#1B1B1D] p-2.5 border-solid border-[3px] gap-1.5 border-[#232329] rounded-xl">
            <input
              type="number"
              defaultValue={"300000"}
              className="outline-0 w-full bg-transparent text-white"
            />
            <span className="text-sm text-[#8C9094]">تومان</span>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5">
            <IoInformationCircleSharp size={20} className="text-[#FEB019]" />
            <span className="text-xs text-[#B7BDC6]">
              کارمزد انتقال xxxx است.
            </span>
          </div>
        </div>
      </div>

      {/* دکمه پرداخت */}
      <button
        onClick={handlePay}
        className="text-[16px] w-full font-extrabold text-[#2A2C2E] bg-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400 p-3 rounded-xl"
      >
        پرداخت
      </button>
    </div>
  );
}
