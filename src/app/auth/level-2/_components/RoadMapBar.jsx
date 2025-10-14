import React from "react";
import IdCart from "../../../../components/elements/IdCart";
import Landlinephoneicon from "../../../../components/elements/Landlinephoneicon";
import Authentication from "../../../../components/elements/Authentication";
import ArrowIcon from "../../../../components/elements/ArrowIcon";

export default function RoadMapBar({ currentStep }) {


  return (
    <div className="w-full flex flex-row items-center justify-center p-3 border-2 border-[#31313a] rounded-t-[10px] bg-black/30">
      <div className="flex flex-col items-center gap-2.5 p-1">
        <Landlinephoneicon  isActive={currentStep >= 0}  />
        <span
          className={`text-xs font-medium text-nowrap ${
            currentStep >= 0 ? "text-[#00e2fb]" : "text-[#8C9094]"
          }`}
        >
       تلفن ثابت
        </span>
      </div>
      <ArrowIcon />
      <div className="flex flex-col items-center gap-2.5 p-1">
        <IdCart
         isActive={currentStep >= 1} 
        />
        <span
          className={`text-xs font-medium text-nowrap ${
            currentStep >= 1 ? "text-[#00e2fb]" : "text-[#8C9094]"
          }`}
        >
    کارت شناسایی
        </span>
      </div>
      <ArrowIcon />
      <div className="flex flex-col items-center gap-2.5 p-1">
        <Authentication
isActive={currentStep >= 2}
        />
        <span
          className={`text-xs font-medium text-nowrap ${
            currentStep >= 2 ? "text-[#00e2fb]" : "text-[#8C9094]"
          }`}
        >
 احراز هویت
        </span>
      </div>
    </div>
  );
}
