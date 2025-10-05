"use client";

import React from "react";
import TransactionResult from "./TransactionDetails";

import Backicon from "../../../../../components/elements/Backicon";
export default function TransactionModal({ open, onClose, data }) {
  if (!open || !data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose} 
    >
      <div
        className="bg-white dark:bg-zinc-900 border border-sky-400 rounded-2xl shadow-xl p-6 w-[90%] max-w-md flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="w-full flex items-center mb-3 rounded-[10px] justify-between p-1">
      <div className="w-16" />
      <h2 className="text-lg text-[#A6AAAD] text-center">جزئیات</h2>
      <div
        className="gap-3 flex-row text-[#A6AAAD] flex cursor-pointer"
        onClick={onClose}
      >
        <span>بازگشت</span>
        <Backicon />
      </div>
    </div>
      
        <TransactionResult {...data} />
      </div>
    </div>
  );
}

