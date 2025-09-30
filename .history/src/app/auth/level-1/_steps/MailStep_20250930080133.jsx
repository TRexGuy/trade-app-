"use client";

import React, { useState } from "react";
import { IoMailUnreadOutline } from "react-icons/io5";

export default function MailStep() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [subStep, setSubStep] = useState(1);
  // 1 = وارد کردن ایمیل, 2 = کد تایید, 3 = خلاصه

  const handleEmailSubmit = () => {
    if (email.trim() === "") return;
    // اینجا می‌تونی درخواست API بفرستی برای ارسال کد
    setSubStep(2);
  };

  const handleCodeSubmit = () => {
    if (code.trim() === "") return;
    // اینجا می‌تونی کد رو چک کنی
    setSubStep(3);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {subStep === 1 && (
        <div className="w-full flex flex-col items-center gap-10">
          <label className="w-full">
            <div className="w-full flex items-center justify-start gap-2">
              <IoMailUnreadOutline size={25} />
              <span className="">تایید ایمیل</span>
            </div>
            <input
              type="email"
              placeholder="لطفا ایمیل خود را وارد کنید"
              className="outline-0"
            />
          </label>
          <button
            onClick={handleEmailSubmit}
            className="w-full text-[16px] font-extrabold text-[#2A2C2E] bg-sky-400 rounded-[10px] text-center py-2.5"
          >
            تایید
          </button>
        </div>
      )}
      {subStep === 2 && <div></div>}
      {subStep === 3 && <div></div>}
    </div>
  );
}
