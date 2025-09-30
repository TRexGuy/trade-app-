import React from "react";
import MailIcon from "../../../../components/elements/MailIcon";
import IdentityInformationIcon from "../../../../components/elements/IdentityInformationIcon";
import BankingInformationIcon from "../../../../components/elements/BankingInformationIcon";

export default function RoadMapBar() {
  return (
    <div className="w-full flex flex-row items-center justify-between p-3 gap-4 border-2 border-[#31313a] rounded-t-[10px] bg-black/30">
      <div className="flex flex-col items-center gap-2 p-3">
        <MailIcon isActive={"#8C9094"} />
        <span className="text-xs font-medium text-[#8C9094]">تایید ایمیل</span>
      </div>

      <div className="flex flex-col items-center gap-2 p-3">
        <IdentityInformationIcon isActive={"#8C9094"} />
        <span className="text-xs font-medium text-[#8c9094]">اطلاعات </span>
      </div>

      <div className="flex flex-col items-center gap-2 p-3">
        <BankingInformationIcon isActive={"#8C9094"} />
        <span className="text-xs font-medium text-[#8C9094]"></span>
      </div>
    </div>
  );
}
