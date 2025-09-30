import React from 'react'

export default function page() {
  const steps = [EmailStep, IdentityStep, BankStep];

  return <Stepper steps={steps} />;
}
