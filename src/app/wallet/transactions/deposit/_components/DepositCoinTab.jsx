import React from "react";
import { FaRegCopy } from "react-icons/fa";
import NetworkIcon from "../../../../../components/elements/NetworkIcon";
import CoinIcon from "../../../../../components/elements/CoinIcon";
import QRCodeIcon from "../../../../../components/elements/QRCodeIcon";
import DropDownIcon from "../../../../../components/elements/DropDownIcon";
import BTCicon from "../../../../../components/elements/BTCicon";

export default function DepositCoinTab() {
  return (
    <div className="w-full flex flex-col items-center gap-6 bg-black/50 border-solid border-2 border-[#232329] rounded-lg p-2.5">
      <label className="w-full flex flex-col items-start gap-2.5 relative">
        <div className="flex items-center gap-1.5">
          <CoinIcon />
          <span className="text-sm text-[#DCDEE0]">انتخاب کوین</span>
        </div>
        <div className="relative flex items-center w-full gap-2 bg-[#1B1B1D] p-3 border-solid border-[3px] border-[#232329] rounded-xl">
          <BTCicon />
          <select className="w-full outline-0 text-[#DCDEE0] bg-[#1B1B1D] p-0.5 appearance-none">
            <option value="btc1">بیت کوین BTC</option>
            <option value="ctb2">همچی کوین</option>
          </select>
          <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <DropDownIcon />
          </span>
        </div>
      </label>

      <label className="w-full flex flex-col items-start gap-2.5 relative">
        <div className="flex items-center gap-1.5">
          <NetworkIcon />
          <span className="text-sm text-[#DCDEE0]">نوع شبکه</span>
        </div>
        <div className="relative w-full">
          <select className="w-full outline-0 text-[#DCDEE0] bg-[#1B1B1D] border-solid border-[3px] border-[#232329] rounded-xl p-3 appearance-none">
            <option value="btc1">بیت کوین BTC</option>
            <option value="ctb2">همچی کوین</option>
          </select>
          <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <DropDownIcon />
          </span>
        </div>
      </label>

      <div className="w-full flex flex-col items-center gap-3">
        <span className="text-sm text-[#DCDEE0] text-right w-full">
          آدرس شما در شبکه BITCOIN
        </span>
        <span className="w-full text-xs text-[#C1C4C7] bg-[#1B1B1D] border-solid border-[3px] border-[#232329] rounded-xl p-3">
          bnb13eqrynp3rls3m6dsw58d3y5l7z6zfdw5zj3ssddy
        </span>
        <div className="w-full flex flex-row items-center justify-between">
          <button className="flex items-center gap-2 text-xs text-[#C1C4C7] bg-[#1B1B1D] rounded-lg py-3 px-4 border-solid border-2 border-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400">
            <FaRegCopy />
            <span>کپی آدرس</span>
          </button>
          <button className="flex items-center gap-2 text-xs text-[#C1C4C7] bg-[#1B1B1D] rounded-lg py-3 px-4 border-solid border-2 border-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400">
            <QRCodeIcon />
            <span>کد QR</span>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-3">
        <span className="text-sm text-[#DCDEE0] text-right w-full">
          آدرس تگ BITCOIN
        </span>
        <span className="w-full text-xs text-[#C1C4C7] bg-[#1B1B1D] border-solid border-[3px] border-[#232329] rounded-xl p-3">
          bnb13eqrynp3rls3m6dsw58d3y5l7z6zfdw5zj3ssddy
        </span>
        <div className="w-full flex flex-row items-center justify-between">
          <button className="flex items-center gap-2 text-xs text-[#C1C4C7] bg-[#1B1B1D] rounded-lg py-3 px-4 border-solid border-2 border-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400">
            <FaRegCopy />
            <span>کپی آدرس</span>
          </button>
          <button className="flex items-center gap-2 text-xs text-[#C1C4C7] bg-[#1B1B1D] rounded-lg py-3 px-4 border-solid border-2 border-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400">
            <QRCodeIcon />
            <span>کد QR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
