"use client";

import React, { useState } from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function MailStep({ onNext }) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [subStep, setSubStep] = useState(1);

  const handleEmailSubmit = () => {
    setSubStep(2);
  };
  const handleCodeSubmit = () => {
    setSubStep(3);
  };
  const handlePrevStep = () => {
    setSubStep(subStep - 1);
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
          <div className="w-full flex flex-col items-start gap-3">
            <span className="text-sm font-bold text-[#DCDEE0]">
              تایید ایمیل
            </span>
            <p className="text-xs font-medium text-[#a8acb0]">
              لطفاً کد تأیید 6 رقمی را که به example@yahoo.com ارسال شده است را
              وارد کنید.مدت اعتبار این کد 30 دقیقه میباشد.
            </p>
            <button onClick={handlePrevStep} className="text-xs text-sky-400">
              ویرایش ایمیل
            </button>
          </div>
          <div className="w-full flex flex-col items-start gap-3">
            <span className="text-sm font-bold text-[#DCDEE0]">کد تایید</span>
            <div className="w-full grid grid-cols-6 gap-3">
              <input
                type="number"
                placeholder="_"
                className="w-full outline-0 text-center bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-1"
              />
              <input
                type="number"
                placeholder="_"
                className="w-full outline-0 text-center bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-1"
              />
              <input
                type="number"
                placeholder="_"
                className="w-full outline-0 text-center bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-1"
              />
              <input
                type="number"
                placeholder="_"
                className="w-full outline-0 text-center bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-1"
              />
              <input
                type="number"
                placeholder="_"
                className="w-full outline-0 text-center bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-1"
              />
              <input
                type="number"
                placeholder="_"
                className="w-full outline-0 text-center bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-1"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <button
              onClick={handleCodeSubmit}
              className="w-full text-[16px] font-extrabold text-[#2A2C2E] bg-sky-400 rounded-[10px] text-center py-2.5"
            >
              تایید
            </button>
            <span className="w-full text-start text-xs text-sky-400">
              کد را دریافت نکردید؟
            </span>
          </div>
        </div>
      )}
      {subStep === 3 && (
        <div className="w-full flex flex-col items-center gap-10">
            <div className="w-full flex flex-col items-start gap-4">
            <div className="w-full flex items-center justify-start gap-2">
              <IoCheckmarkCircle size={25} className="text-[#16C784]" />
              <span className="text-sm font-bold text-[#DCDEE0]">
                ایمیل با موفقیت تایید شده
              </span>
            </div>
            <div className="w-full flex flex-col items-center">
                
            </div>
            </div>
          <button
            onClick={onNext}
            className="w-full text-[16px] font-extrabold text-[#2A2C2E] bg-sky-400 rounded-[10px] text-center py-2.5"
          >
            ادامه
          </button>
        </div>
      )}
    </div>
  );
}
