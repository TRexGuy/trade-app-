"use client";

import React, { useState } from 'react'
import HistoryHeader from './_components/HistoryHeader'
import HistoryTabs from './_components/HistoryTabs'
import HistoryTable from './_components/HistoryTable';

export default function Page() {
  const [tab, setTab] = useState("coin");
  const [transactions, setTransactions] = useState("deposit");

  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col items-center gap-4 p-4 pb-28">
      <HistoryHeader />
      <HistoryTabs tab={tab} setTab={setTab} transactions={transactions} setTransactions={setTransactions} />
      <HistoryTable />
    </div>
  )
}
