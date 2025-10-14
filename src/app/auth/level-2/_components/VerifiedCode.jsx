"use client";
import { useState } from "react";

export default function VerifyCode({ onNext }) {
  const [code, setCode] = useState(["", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // رفتن خودکار به بعدی
      if (value && index < 4) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  return (
    <div className="w-full max-w-md p-6 ">
      <h2 className="text-lg font-semibold mb-3 text-white">تأیید تلفن ثابت</h2>
      <p className="text-sm text-gray-400 mb-6 leading-6">
        با شماره <span className="text-blue-400 font-semibold">۰۷۱۳۱۳۳۴۵۶۷۹</span>{" "}
        تماس گرفته خواهد شد، کد خوانده‌شده را وارد کنید.
      </p>

      <h6 className="text-gray-300 text-sm mb-3">کد تأیید</h6>

      <div className="flex justify-between mb-6">
        {code.map((val, i) => (
          <input
            key={i}
            id={`code-${i}`}
            type="text"
            value={val}
                placeholder="_"
            onChange={(e) => handleChange(e.target.value, i)}
            maxLength={1}
            className="w-12 h-12 bg-[#0f0f12] text-center text-white text-lg font-semibold border-2 border-[#232329] rounded-xl outline-none focus:border-blue-400 transition"
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base py-2.5 rounded-xl shadow-md transition"
      >
        تأیید
      </button>

      <p className="text-sm text-gray-400 mt-4">
        کد را دریافت نکردید؟{" "}
        <button className="text-blue-400 hover:underline">ارسال مجدد</button>
      </p>
    </div>
  );
}
