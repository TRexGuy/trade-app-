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
          <label className="w-full flex flex-col items-start gap-4">
            <div className="w-full flex items-center justify-start gap-2">
              <IoMailUnreadOutline size={25} />
              <span className="text-sm font-bold text-[#DCDEE0]">
                تایید ایمیل
              </span>
            </div>
            <input
              type="email"
              placeholder="لطفا ایمیل خود را وارد کنید"
              className="w-full outline-0 bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-4"
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
      {subStep === 2 && (
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full flex flex-col items-start">
            <span className="text-sm font-bold text-[#DCDEE0]">
              تایید ایمیل
            </span>
            <p className="text-xs font-medium text-[#8C9094]">
              لطفاً کد تأیید 6 رقمی را که به example@yahoo.com ارسال شده است را
              وارد کنید.مدت اعتبار این کد 30 دقیقه میباشد.
            </p>
            <button className="text-xs text-sky-400">ویرایش ایمیل</button>
          </div>
          <div className="w-full flex flex-col items-start gap-3">
            <span className=""></span>
            <div className="w-full grid grid-cols-6 gap"></div>
          </div>
          <button
            onClick={handleCodeSubmit}
            className="w-full text-[16px] font-extrabold text-[#2A2C2E] bg-sky-400 rounded-[10px] text-center py-2.5"
          >
            تایید
          </button>
        </div>
      )}
      {subStep === 3 && <div></div>}
    </div>
  );
}
