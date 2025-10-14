"use client";
import { useState } from "react";
import LandlinePhone from "./_seteps/Landlinephone";
import VerifyCode from "./_components/VerifyCode";
import Verified from "./_components/Verified";
import UploadIdCard from "./_seteps/IdCart";
import IdCardVerified from "./_components/IdCardVerified";
import WaitingApproval from "./_components/WaitingApproval";
import Authentication from "./_seteps/Authentication"; // مرحله جدید
import RoadMapBar from './_components/RoadMapBar';
import WaitingApprovalSelfile from "./_components/WaitingApprovalSelfile";
import AuthenticationVerified from "./_components/AuthenticationVerified";
export default function Page() {
  const [step, setStep] = useState(0);
  const [subStep, setSubStep] = useState(0);

  return (
    <div className="w-full  flex flex-col items-center justify-center gap-6 p-4  text-white">
      <RoadMapBar currentStep={step} />

      {/* 🔹 مرحله تلفن ثابت */}
      <div className="w-full flex flex-col items-center p-3 gap-4 border-2 border-[#31313a] rounded-b-[10px] bg-black/30">
      {step === 0 && subStep === 0 && (
        <LandlinePhone onNext={() => setSubStep(1)} />
      )}
      {step === 0 && subStep === 1 && (
        <VerifyCode onNext={() => setSubStep(2)} />
      )}
      {step === 0 && subStep === 2 && (
        <Verified
          onNext={() => {
            setStep(1);
            setSubStep(0);
          }}
        />
      )}

      {/* 🔹 مرحله کارت شناسایی */}
      {step === 1 && subStep === 0 && (
        <UploadIdCard onNext={() => setSubStep(1)} />
      )}
      {step === 1 && subStep === 1 && (
        <IdCardVerified onNext={() => setSubStep(2)} />
      )}
      {step === 1 && subStep === 2 && (
        <WaitingApproval
          onNext={() => {
            setStep(2);
            setSubStep(0);
          }}
        />
      )}
{/* 🔹 مرحله Authentication */}
{step === 2 && subStep === 0 && (
  <Authentication onNext={() => setSubStep(1)} />
)}

{step === 2 && subStep === 1 && (
  <div className="flex flex-col gap-4">
    <AuthenticationVerified
      onNext={() => setSubStep(2)}
    />
  </div>
)}

{step === 2 && subStep === 2 && (
  <WaitingApprovalSelfile
    onNext={() => {
      setStep(3);
      setSubStep(0);
    }}
  />
)}

</div>
    </div>
  );
}
