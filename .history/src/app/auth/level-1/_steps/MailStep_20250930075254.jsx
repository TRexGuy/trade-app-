"use client";

import React, { useState } from 'react'

export default function MailStep() {

      const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [subStep, setSubStep] = useState(1); 
  // 1 = وارد کردن ایمیل, 2 = کد تایید, 3 = خلاصه

  const handleEmailSubmit = () => {
    if (email.trim() === "") return;
    // اینجا می‌تونی درخواست API بفرستی برای ارسال کد
    setSubStep(2);
  };

  const handleCodeSubmit = () => {
    if (code.trim() === "") return;
    // اینجا می‌تونی کد رو چک کنی
    setSubStep(3);
  };

  return (
    <div className="w-full flex flex-col items-center">
        {subStep === 1 && (
            <div className="w-full flex flex-col items-center">
                <label className="">
                    <input type="email" placeholder='' className='' />
                </label>
            </div>
        )}
        {subStep === 2 && (<div></div>)}
        {subStep === 3 && (<div></div>)}
    </div>
  )
}
