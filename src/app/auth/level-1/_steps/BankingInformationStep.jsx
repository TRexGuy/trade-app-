"use client";

import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Icon from "../../../../assets/icons/AiOutlineInfoCircle";
import { SlArrowRight } from "react-icons/sl";
export default function BankingInformationStep({ onPrev }) {
  const router = useRouter(); // ✅ برای ریدایرکت
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    cardNumber: "",
    shebaNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const handlePrevStep = () => {
    setSubStep(1);
  };
  const handleContinue = () => {
    router.push("/auth/level-2"); 
  };

  return (
    <div className="w-full max-w-[600px] flex flex-col gap-6 text-gray-300 mt-4">
      {/* --- مرحله اول: فرم ثبت اطلاعات --- */}
      {step === 1 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-blue-400">اطلاعات بانکی</h2>

          {/* متن راهنما */}
          <div className="flex flex-col gap-2 text-gray-400">
          <div className="flex sm:mt-2  gap-2">
  <div className="w-[20px]  h-[20px] flex-shrink-0 flex items-center justify-center rounded-full bg-sky-400 text-black font-bold text-sm">
    !
  </div>
  <p className="text-sm leading-relaxed">
    کاربر گرامی لطفاً جهت تکمیل فرآیند احراز هویت، کارتی به نام خودتان ثبت کنید.
  </p>
</div>


            <div className="flex items-start gap-2">
              <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-sky-400 text-black font-bold text-sm">
                !
              </div>
              <p className="text-sm leading-relaxed">
                شماره کارت و شماره شبا را بدون فاصله وارد نمایید.
              </p>
            </div>
          </div>

          {/* شماره کارت */}
          <div className="flex flex-col gap-2">
            <label className="text-sm">شماره کارت</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="لطفاً شماره کارت خود را وارد کنید"
              className="p-3 rounded-xl border-[3px] border-[#31313a] bg-[#1B1B1DA6] text-gray-200 outline-none"
            />
          </div>

          {/* شماره شبا */}
          <div className="flex flex-col gap-2">
            <label className="text-sm">شماره شبا</label>
            <input
              type="text"
              name="shebaNumber"
              value={formData.shebaNumber}
              onChange={handleChange}
              placeholder="IRxxxxxxxxxxxxxxxxxxxxxx"
              className="p-3 w-full rounded-xl border-[3px] border-[#31313a] bg-[#1B1B1DA6] text-gray-200 outline-none"
            />
          </div>

          {/* دکمه‌ها */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-bold py-3 rounded-xl hover:bg-blue-300 transition-all"
          >
            تایید و ادامه
          </button>

          <div className="w-full flex flex-row gap-1 justify-start items-center">
          <SlArrowRight />
            <button
              onClick={handlePrevStep}
              className="text-xs font-semibold text-sky-400"
            >
              مرحله قبل
            </button>
          </div>
        </form>
      )}

      {/* --- مرحله دوم: تایید اطلاعات بانکی --- */}
      {step === 2 && (
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center gap-2 text-green-500 text-lg font-bold">
            <FaCheckCircle className="text-2xl" />
            <span>اطلاعات بانکی شما تایید شد</span>
          </div>

          <div className="w-full bg-sky-400/35 text-white border-solid border-[1px] border-sky-400 rounded-[15px] text-center py-3.5 px-2 flex flex-col gap-4 text-base">
            <div className="flex justify-between">
              <span>شماره کارت:</span>
              <span className="font-semibold">{formData.cardNumber}</span>
            </div>
            <div className="flex justify-between">
              <span>شماره شبا:</span>
              <span className="font-semibold">{formData.shebaNumber}</span>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-blue-400 text-white font-bold py-3 rounded-xl hover:bg-blue-300 transition-all"
          >
            تایید و ادامه
          </button>

     
          <div className="w-full flex flex-row gap-1 justify-start items-center">
          <SlArrowRight />
            <button
              onClick={handlePrevStep}
              className="text-xs font-semibold text-sky-400"
            >
              مرحله قبل
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
