"use client";

import React, { useState } from "react";
import SmartSelect from "../../../../components/partials/SmartSelect";
import SmartInput from "../../../../components/partials/SmartInput";
import { IoCheckmarkCircle } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
export default function IdentityInformationStep({ onNext }) {
  const [subStep, setSubStep] = useState(1);

  const handleFormSubmit = () => {
    setSubStep(2);
  };
  const handlePrevStep = () => {
    setSubStep(1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {subStep === 1 && (
        <div className="w-full flex flex-col items-center gap-4">
          <SmartInput
            type={"text"}
            label={"نام"}
            placeholder={"لطفا نام خود را وارد کنید"}
          />
          <SmartInput
            type={"text"}
            label={"نام خانوادگی"}
            placeholder={"لطفا نام خانوادگی خود را وارد کنید"}
          />
          <label className="w-full flex flex-col items-start gap-2.5">
            <span className="text-sm font-bold text-[#DCDEE0]">تاریخ تولد</span>
            <div className="w-full grid grid-cols-3 gap-9">
              <input
                type="number"
                placeholder="روز"
                className="w-full outline-0 bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-4"
              />
              <input
                type="number"
                placeholder="ماه"
                className="w-full outline-0 bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-4"
              />
              <input
                type="number"
                placeholder="سال"
                className="w-full outline-0 bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-4"
              />
            </div>
          </label>
          <div className="w-full flex flex-row items-center gap-5">
            <SmartSelect label={"جنسیت"} options={["موئنث", "غیر موئنث"]} />
            <SmartSelect label={"کشور"} options={["ایران", "خارج"]} />
          </div>
          <SmartInput
            type={"number"}
            label={"کد ملی"}
            placeholder={"لطفا کد ملی خود را وارد کنید"}
          />
          <button
            onClick={handleFormSubmit}
            className="w-full text-center py-3.5 bg-sky-400 rounded-xl text-[16px] font-extrabold text-white"
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
      {subStep === 2 && (
        <div className="w-full flex flex-col items-center gap-10">
          
          <div className="w-full flex flex-col items-start gap-4">
            <div className="w-full flex items-center justify-start gap-2">
              <IoCheckmarkCircle size={25} className="text-[#16C784]" />
              <span className="text-sm font-bold text-[#DCDEE0]">
                اطلاعات هویتی شما تایید شده
              </span>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-full grid grid-cols-2 gap-4 bg-sky-400/30 text-white border-solid border-[1px] border-sky-400 rounded-[15px] p-3.5">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs font-medium text-[#8C9094]">
                    نام :
                  </span>
                  <span className="text-sm font-bold text-[#C1C4C7]">حسین</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs font-medium text-[#8C9094]">
                    نام خانوادگی :
                  </span>
                  <span className="text-sm font-bold text-[#C1C4C7]">
                    دهقان
                  </span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs font-medium text-[#8C9094]">
                    تاریخ تولد :
                  </span>
                  <span className="text-sm font-bold text-[#C1C4C7]">1300</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs font-medium text-[#8C9094]">
                    جنسیت :
                  </span>
                  <span className="text-sm font-bold text-[#C1C4C7]">
                    غیر موئنث
                  </span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs font-medium text-[#8C9094]">
                    کشور :
                  </span>
                  <span className="text-sm font-bold text-[#C1C4C7]">
                    ایران
                  </span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs font-medium text-[#8C9094]">
                    کد ملی :
                  </span>
                  <span className="text-sm font-bold text-[#C1C4C7]">
                    ******
                  </span>
                </div>
              </div>
              <span
                onClick={handlePrevStep}
                className="w-full text-start text-xs text-sky-400"
              >
                ویرایش
              </span>
            </div>
          </div>
          <button
            onClick={onNext}
            className="w-full text-[16px] font-extrabold text-white bg-sky-400 rounded-[10px] text-center py-2.5"
          >
            ادامه
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
