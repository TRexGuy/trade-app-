"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegCopy } from "react-icons/fa";
import BTCicon from "../../../../../components/elements/BTCicon";
import CoinIcon from "../../../../../components/elements/CoinIcon";
import DropDownIcon from "../../../../../components/elements/DropDownIcon";
import NetworkIcon from "../../../../../components/elements/NetworkIcon";
import CashIcon from "../../../../../components/elements/CashIcon";

export default function WithdrawCoinTab() {
  const router = useRouter();

  const [coin, setCoin] = useState("BTC");
  const [network, setNetwork] = useState("BTC");
  const [amount, setAmount] = useState(300000);
  const [walletAddress, setWalletAddress] = useState("bnb13eqrynp3rls3m6dsw58d3y5l7z6zfdw5zj3ssddy");

  const handleWithdraw = () => {
    const status = Math.random() > 0.5 ? "success" : "failed";
    const currency = coin;

    router.push(
      `/wallet/transactions/result?status=${status}&amount=${amount}&currency=${currency}&walletAddress=${walletAddress}&txId=TX123456789`
    );
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* فرم انتخاب کوین */}
      <div className="w-full flex flex-col items-center gap-6 bg-black/50 border-solid border-2 border-[#232329] rounded-lg p-2.5">
        <label className="w-full flex flex-col items-start gap-2.5 relative">
          <div className="flex items-center gap-1.5">
            <CoinIcon />
            <span className="text-sm text-[#DCDEE0]">انتخاب کوین</span>
          </div>
          <div className="relative flex items-center w-full gap-2 bg-[#1B1B1D] p-3 border-solid border-[3px] border-[#232329] rounded-xl">
            <BTCicon />
            <select
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              className="w-full outline-0 text-[#DCDEE0] bg-[#1B1B1D] p-0.5 appearance-none"
            >
              <option value="BTC">بیت کوین BTC</option>
              <option value="ETH">اتریوم ETH</option>
            </select>
            <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <DropDownIcon />
            </span>
          </div>
        </label>

        {/* انتخاب شبکه */}
        <label className="w-full flex flex-col items-start gap-2.5 relative">
          <div className="flex items-center gap-1.5">
            <NetworkIcon />
            <span className="text-sm text-[#DCDEE0]">نوع شبکه</span>
          </div>
          <div className="relative w-full">
            <select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="w-full outline-0 text-[#DCDEE0] bg-[#1B1B1D] border-solid border-[3px] border-[#232329] rounded-xl p-3 appearance-none"
            >
              <option value="BTC">بیت کوین BTC</option>
              <option value="ETH">اتریوم ETH</option>
            </select>
            <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <DropDownIcon />
            </span>
          </div>
        </label>

        {/* آدرس مقصد */}
        <div className="w-full flex flex-col items-center gap-3">
          <span className="text-sm text-[#DCDEE0] text-right w-full">آدرس مقصد</span>
          <span className="w-full text-xs text-[#C1C4C7] bg-[#1B1B1D] border-solid border-[3px] border-[#232329] rounded-xl p-3">
            {walletAddress}
          </span>
          <div className="w-full flex items-start">
            <button
              className="flex items-center gap-2 text-xs text-[#C1C4C7] bg-[#1B1B1D] rounded-lg py-3 px-4 border-solid border-2 border-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400"
              onClick={() => navigator.clipboard.writeText(walletAddress)}
            >
              <FaRegCopy />
              <span>کپی آدرس</span>
            </button>
          </div>
        </div>

        {/* مبلغ برداشت */}
        <div className="w-full flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center justify-start gap-1.5">
              <CashIcon />
              <span className="text-sm text-[#DCDEE0]">مبلغ برداشت</span>
            </div>
            <div className="w-full flex items-center gap-2.5">
              <span className="text-xs text-[#DCDEE0] text-nowrap">{amount} {coin}</span>
            </div>
          </div>
          <div className="w-full flex items-center bg-[#1B1B1D] p-2.5 border-solid border-[3px] gap-1.5 border-[#232329] rounded-xl">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="outline-0 w-full"
            />
            <span className="text-sm text-[#8C9094]">{coin}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleWithdraw}
        className="text-[16px] w-full font-extrabold text-[#2A2C2E] bg-sky-400 shadow-[0_0px_30px_-18px_rgba(0,0,0,0.3)] shadow-sky-400 p-3 rounded-xl"
      >
        برداشت
      </button>
    </div>
  );
}
