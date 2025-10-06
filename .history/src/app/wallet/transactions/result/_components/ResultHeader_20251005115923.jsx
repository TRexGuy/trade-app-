"use client";
import { useRouter } from "next/navigation";
import Backicon from "../../../../../components/elements/Backicon";

export default function WalletHeader() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/wallet/transactions/withdraw");
  };

  return (
    <div className="w-full flex items-center justify-between p-1 bg-black/30">
      <div className="w-full text-center">
        <h2 className="text-lg text-[#A6AAAD]">جزییات</h2>
      </div>
      <div
        className="gap-3 flex-row text-[#A6AAAD] flex cursor-pointer"
        onClick={handleBack}
      >
        <span>بازگشت</span>
        <Backicon />
      </div>
    </div>
  );
}
