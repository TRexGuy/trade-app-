import React from "react";

export default function SmartInput({
  label,
  type = "",
  placeholder = "",
  className = "",
}) {
  return (
    <label className="w-full flex flex-col items-start gap-2.5">
      <span className="text-sm font-bold text-[#DCDEE0]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={`${className} w-full outline-0 bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-4`}
      />
    </label>
  );
}
