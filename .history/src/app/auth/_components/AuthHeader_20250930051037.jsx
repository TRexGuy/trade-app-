"use client";

import React from "react";
import { FaRegUser } from "react-icons/fa";

export default function AuthHeader() {
  return (
    <div className="w-full flex items-center justify-between p-1 border-2 border-[#31313a] rounded-[10px] bg-black/30">
      <div className="w-full text-center">
        <h2 className="text-lg text-[#A6AAAD]">کیف پول</h2>
      </div>
      <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#232329] text-white">
        <FaRegUser className="w-full bg-black/30" />
      </div>
    </div>
  );
}
