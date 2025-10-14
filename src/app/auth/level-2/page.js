"use client";

import { useState } from "react";

// 🔹 Step 0 - Landline
import LandlinePhone from "./_components/Landlinephone";
import VerifyCode from "./_components/VerifiedCode";
import Verified from "./_components/Verified";

// 🔹 Step 1 - ID Card
import UploadIdCard from "./_components/IdCart";
import IdCardVerified from "./_components/IdCardVerified";
import WaitingApproval from "./_components/WaitingApproval";

// 🔹 Step 2 - Authentication
import Authentication from "./_components/Authentication";
import AuthenticationVerified from "./_components/AuthenticationVerified";
import WaitingApprovalSelfile from "./_components/WaitingApprovalSelfile";

// 🔹 RoadMap
import RoadMapBar from "./_components/RoadMapBar";

export default function Page() {
  const [step, setStep] = useState(0);
  const [subStep, setSubStep] = useState(0);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 p-4 text-white">
      {/* 🔹 RoadMap */}
      <RoadMapBar currentStep={step} />

      <div className="w-full flex flex-col items-center p-3 gap-4 border-2 border-[#31313a] rounded-b-[10px] bg-black/30">
        {/* 🔹 Step 0: Landline */}
        {step === 0 && subStep === 0 && <LandlinePhone onNext={() => setSubStep(1)} />}
        {step === 0 && subStep === 1 && <VerifyCode onNext={() => setSubStep(2)} />}
        {step === 0 && subStep === 2 && (
          <Verified
            onNext={() => {
              setStep(1);
              setSubStep(0);
            }}
          />
        )}

        {/* 🔹 Step 1: ID Card */}
        {step === 1 && subStep === 0 && <UploadIdCard onNext={() => setSubStep(1)} />}
        {step === 1 && subStep === 1 && <IdCardVerified onNext={() => setSubStep(2)} />}
        {step === 1 && subStep === 2 && (
          <WaitingApproval
            onNext={() => {
              setStep(2);
              setSubStep(0);
            }}
          />
        )}

        {/* 🔹 Step 2: Authentication */}
        {step === 2 && subStep === 0 && <Authentication onNext={() => setSubStep(1)} />}
        {step === 2 && subStep === 1 && (
          <AuthenticationVerified onNext={() => setSubStep(2)} />
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
