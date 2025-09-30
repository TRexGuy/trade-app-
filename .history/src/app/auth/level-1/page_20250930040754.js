import AuthStepper from '../../../components/';
import React from 'react'

export default function page() {
  // const steps = [EmailStep, IdentityStep, BankStep];
  const steps = ["EmailStep", "IdentityStep", "BankStep"];

  return <AuthStepper steps={steps} />;
}
