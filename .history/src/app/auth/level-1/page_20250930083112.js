"use client";

import React, { useState } from 'react'
import RoadMapBar from './_components/RoadMapBar'
import MailStep from './_steps/MailStep'
import IdentityInformationStep from './_steps/IdentityInformationStep'
import BankingInformationStep from './_steps/BankingInformationStep'

export default function Page() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="w-full flex flex-col items-center gap-1.5">
      <RoadMapBar />
      <div className="w-full flex flex-col items-center p-3 gap-4 border-2 border-[#31313a] rounded-b-[10px] bg-black/30">
        {step === 0 && <MailStep onNext={nextStep} />}
        {step === 1 && <IdentityInformationStep onNext={nextStep} />}
        {step === 2 && <BankingInformationStep onNext={nextStep} />}
      </div>
    </div>
  )
}
