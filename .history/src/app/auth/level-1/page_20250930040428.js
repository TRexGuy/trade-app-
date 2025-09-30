import AuthStepper from '@/components/partials/AuthStepper';
import React from 'react'

export default function page() {
  // const steps = [EmailStep, IdentityStep, BankStep];
  const steps = [ "" , IdentityStep, BankStep];

  return <AuthStepper steps={steps} />;
}
