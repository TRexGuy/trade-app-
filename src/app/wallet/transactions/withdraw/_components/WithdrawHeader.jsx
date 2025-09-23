import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";

export default function WithdrawHeader() {
  return (
    <div className="w-full flex items-center justify-between p-2 border-2 border-[#31313a] rounded-[10px] bg-black/30">
      <LuNotepadText size={28} />
      <h2 className="text-lg text-[#A6AAAD]">برداشت</h2>
      <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#232329] text-white">
        <FaRegUser className="w-full bg-black/30" />
      </div>
    </div>
  );
}
