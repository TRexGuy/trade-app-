import React from "react";
import MailIcon from "../../../../components/elements/MailIcon";
import IdentityInformationIcon from "../../../../components/elements/IdentityInformationIcon";
import BankingInformationIcon from "../../../../components/elements/BankingInformationIcon";
import ArrowIcon from "../../../../components/elements/ArrowIcon";

export default function RoadMapBar({ currentStep }) {
  const activeColor = "#00e2fb";
  const inactiveColor = "#8C9094";

  return (
    <div className="w-full flex flex-row items-center justify-center p-3 border-2 border-[#31313a] rounded-t-[10px] bg-black/30">
      <div className="flex flex-col items-center gap-2.5 p-1">
        <MailIcon isActive={currentStep >= 0 ? activeColor : inactiveColor} />
        <span
          className={`text-xs font-medium text-nowrap ${
            currentStep >= 0 ? "text-[#00e2fb]" : "text-[#8C9094]"
          }`}
        >
          تایید ایمیل
        </span>
      </div>
      <ArrowIcon />
      <div className="flex flex-col items-center gap-2.5 p-1">
        <IdentityInformationIcon
          isActive={currentStep >= 1 ? activeColor : inactiveColor}
        />
        <span
          className={`text-xs font-medium text-nowrap ${
            currentStep >= 1 ? "text-[#00e2fb]" : "text-[#8C9094]"
          }`}
        >
          اطلاعات هویتی
        </span>
      </div>
      <ArrowIcon />
      <div className="flex flex-col items-center gap-2.5 p-1">
        <BankingInformationIcon
          isActive={currentStep >= 2 ? activeColor : inactiveColor}
        />
        <span
          className={`text-xs font-medium text-nowrap ${
            currentStep >= 2 ? "text-[#00e2fb]" : "text-[#8C9094]"
          }`}
        >
          اطلاعات بانکی
        </span>
      </div>
    </div>
  );
}
