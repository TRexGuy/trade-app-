"use client";

import React, { useState } from 'react'
import WithdrawHeader from './_components/WithdrawHeader';
import WithdrawCoinTab from './_components/WithdrawCoinTab';
import WithdrawFiatTab from './_components/WithdrawFiatTab';
import WithdrawTabs from './_components/WithdrawTabs';

export default function Page() {
  const [tab, setTab] = useState("coin");

  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col items-center gap-5 p-4 pb-28">
      <WithdrawHeader />
      <WithdrawTabs tab={tab} setTab={setTab} />
      {tab === "coin" && (<WithdrawCoinTab />)}
      {tab === "fiat" && (<WithdrawFiatTab />)}
    </div>
  )
}
