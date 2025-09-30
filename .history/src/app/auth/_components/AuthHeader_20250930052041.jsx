"use client";

import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function AuthHeader() {
  return (
    <div className="w-full flex items-center justify-between p-1 border-2 border-[#31313a] rounded-[10px] bg-black/30">
      <div className="w-full text-center">
        <h2 className="text-lg text-[#A6AAAD]">احراز هویت</h2>
      </div>
      <button className="text-[#A6AAAD]]">
      <IoIosArrowBack size={28} className="text-[#A6AAAD]" />

      </button>
    </div>
  );
}
