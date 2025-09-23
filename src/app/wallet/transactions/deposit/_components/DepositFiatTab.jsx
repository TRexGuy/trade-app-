import React from "react";
import DropDownIcon from "../../../../../components/elements/DropDownIcon";
import FiatCurrencyIcon from "../../../../../components/elements/FiatCurrencyIcon";
import CardNumIcon from "../../../../../components/elements/CardNumIcon";
import CashIcon from "../../../../../components/elements/CashIcon";
import { GiBank } from "react-icons/gi";
import TomanIcon from "../../../../../components/elements/TomanIcon";

export default function DepositFiatTab() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex flex-col items-center gap-6 bg-black/50 border-solid border-2 border-[#232329] rounded-lg p-2.5">
        <label className="w-full flex flex-col items-start gap-2.5 relative">
          <div className="flex items-center gap-1.5">
            <FiatCurrencyIcon />
            <span className="text-sm text-[#DCDEE0]">انتخاب ارز فیات</span>
          </div>
          <div className="relative flex items-center w-full gap-2 bg-[#1B1B1D] p-3 border-solid border-[3px] border-[#232329] rounded-xl">
            <TomanIcon />
            <select className="w-full outline-0 text-[#DCDEE0] bg-[#1B1B1D] p-0.5 appearance-none">
              <option value="btc1">تومان</option>
              <option value="ctb2">همچی</option>
            </select>
            <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <DropDownIcon />
            </span>
          </div>
        </label>

        <label className="w-full flex flex-col items-start gap-2.5 relative">
          <div className="flex items-center gap-1.5">
            <CardNumIcon />
            <span className="text-sm text-[#DCDEE0]">شماره کارت</span>
          </div>
          <div className="relative flex items-center w-full gap-2 bg-[#1B1B1D] p-3 border-solid border-[3px] border-[#232329] rounded-xl">
            <GiBank size={27} className="text-[#DCDEE0]" />
            <select className="w-full outline-0 text-[#DCDEE0] bg-[#1B1B1D] p-0.5 appearance-none">
              <option value="btc11">۱۲۳۴ - ۱۲۳۴ - ۱۲۳۴ - ۱۲۳۴</option>
              <option value="ctb22">۱۲۳۴ - ۱۲۳۴ - ۱۲۳۴ - ۱۲۳۴</option>
            </select>
            <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <DropDownIcon />
            </span>
          </div>
        </label>

        <div className="w-full flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-start gap-1.5">
            <CashIcon />
            <span className="text-sm text-[#DCDEE0]">مبلغ واریزی</span>
          </div>
          <div className="w-full flex items-center bg-[#1B1B1D] p-2.5 border-solid border-[3px] gap-1.5 border-[#232329] rounded-xl">
            <input
              type="number"
              defaultValue={"300000"}
              className="outline-0 w-full"
            />
            <span className="text-sm text-[#8C9094]">تومان</span>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <button className="flex items-center gap-2 text-xs text-[#C1C4C7] bg-[#1B1B1D] rounded-lg py-3 px-2 border-solid border-2 border-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400">
              <span className="">200000</span>
              <span className="">تومان</span>
            </button>
            <button className="flex items-center gap-2 text-xs text-[#C1C4C7] bg-[#1B1B1D] rounded-lg py-3 px-2 border-solid border-2 border-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400">
              <span className="">150000</span>
              <span className="">تومان</span>
            </button>
            <button className="flex items-center gap-2 text-xs text-[#C1C4C7] bg-[#1B1B1D] rounded-lg py-3 px-2 border-solid border-2 border-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400">
              <span className="">100000</span>
              <span className="">تومان</span>
            </button>
          </div>
        </div>
      </div>
      <button className="text-[16px] w-full font-extrabold text-[#2A2C2E] bg-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400 p-3 rounded-xl">
        پرداخت
      </button>
    </div>
  );
}
