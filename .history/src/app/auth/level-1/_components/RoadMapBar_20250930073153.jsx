import React from "react";
import MailIcon from "../../../../components/elements/MailIcon";
import IdentityInformationIcon from "../../../../components/elements/IdentityInformationIcon";
import BankingInformationIcon from "../../../../components/elements/BankingInformationIcon";
import ArrowIcon from "../../../../components/elements/ArrowIcon";

export default function RoadMapBar() {
  return (
    <div className="w-full flex flex-row items-center justify-center p-3 border-2 border-[#31313a] rounded-t-[10px] bg-black/30">
      <div className="flex flex-col items-center gap-2 p-3">
        <MailIcon isActive={"#8C9094"} />
        <span className="text-xs font-medium text-[#00e2fb] text-nowrap">
          تایید ایمیل
        </span>
      </div>
      <ArrowIcon />
      <div className="flex flex-col items-center gap-2 p-3">
        <IdentityInformationIcon isActive={"#8C9094"} />
        <span className="text-xs font-medium text-[#8c9094] text-nowrap">
          اطلاعات هویتی
        </span>
      </div>
      <ArrowIcon />
      <div className="flex flex-col items-center gap-2 p-3">
        <BankingInformationIcon isActive={"#8C9094"} />
        <span className="text-xs font-medium text-[#8C9094] text-nowrap">
          اطلاعات بانکی
        </span>
      </div>
    </div>
  );
}
