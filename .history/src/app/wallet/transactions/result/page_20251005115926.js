"use client";

import { useSearchParams } from "next/navigation";
import TransactionResult from "../result/_components/TransactionResult";
import ResultHeader from "../result/_components/ResultHeader"
export default function ResultPage() {
  const searchParams = useSearchParams();

  return (
    <div className="w-full h-screen gap-16 overflow-y-auto flex flex-col items-center  p-4 pb-28">
      <ResultHeader />
      <TransactionResult
        status={searchParams.get("status") ?? "failed"}
        amount={searchParams.get("amount") ?? "0"}
        currency={searchParams.get("currency") ?? "تومان"}
        date={searchParams.get("date") ?? "1402/07/08"}
        time={searchParams.get("time") ?? "11:45:20"}
        cardOrIban={searchParams.get("cardOrIban") ?? "----"}
      />
    </div>
  );
}
