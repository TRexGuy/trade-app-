"use client";

import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Icon from "../../../../assets/icons/AiOutlineInfoCircle";

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

  const handleContinue = () => {
    router.push("/auth/level-2"); // ✅ انتقال به مرحله بعد
  };

  return (
    <div className="w-full max-w-[600px] flex flex-col gap-6 text-gray-300 mt-4">
      {/* --- مرحله اول: فرم ثبت اطلاعات --- */}
      {step === 1 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-blue-400">اطلاعات بانکی</h2>

          {/* متن راهنما */}
          <div className="flex flex-col gap-2 text-gray-400">
            <div className="flex items-start gap-2">
              <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-sky-400 text-black font-bold text-sm">
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
            className="w-full bg-blue-400 text-black font-bold py-3 rounded-xl hover:bg-blue-300 transition-all"
          >
            تایید و ادامه
          </button>

          <div
            onClick={onPrev}
            className="text-blue-400 text-sm text-center cursor-pointer"
          >
            مرحله قبل ←
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

          <div className="bg-[#2C2B25] border-2 border-blue-400 rounded-2xl p-6 text-gray-200 flex flex-col gap-4 text-base">
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
            className="w-full bg-blue-400 text-black font-bold py-3 rounded-xl hover:bg-blue-300 transition-all"
          >
            تایید و ادامه
          </button>

          <div
            onClick={() => setStep(1)}
            className="text-blue-400 text-sm text-center cursor-pointer"
          >
            مرحله قبل ←
          </div>
        </div>
      )}
    </div>
  );
}
