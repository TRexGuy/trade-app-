import React from "react";
import DropDownIcon from "../elements/DropDownIcon";

export default function SmartSelect({
  label,
  options,
  labelIcon = "",
  className = "",
}) {
  return (
    <label className="w-full flex flex-col items-start gap-2.5 relative">
      <div className="flex items-center gap-1.5">
        {labelIcon}
        <span className="text-sm text-[#DCDEE0]">{label}</span>
      </div>
      <div className="relative w-full">
        <select
          className={`${className} w-full outline-0 bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-4 appearance-none`}
        >
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
          <DropDownIcon />
        </span>
      </div>
    </label>
  );
}
