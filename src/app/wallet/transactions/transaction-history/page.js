"use client";

import React, { useState } from "react";
import HistoryHeader from "./_components/HistoryHeader";
import HistoryTabs from "./_components/HistoryTabs";
import HistoryTable from "./_components/HistoryTable";
import TransactionModal from "./_components/TransactionModal";


export default function Page() {
  const [tab, setTab] = useState("coin");
  const [transactions, setTransactions] = useState("deposit");

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col items-center gap-4 p-4 pb-28">


      <HistoryHeader />
      <HistoryTabs
        tab={tab}
        setTab={setTab}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <HistoryTable onShowDetails={handleShowDetails} />

      {/* مودال */}
      <TransactionModal
        open={isModalOpen}
        onClose={handleCloseModal}
        data={selectedTransaction}
      />
    </div>
  );
}
