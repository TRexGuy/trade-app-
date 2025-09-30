import AuthStepper from '../../../components/partials/';
import React from 'react'

export default function page() {
  // const steps = [EmailStep, IdentityStep, BankStep];
  const steps = ["EmailStep", "IdentityStep", "BankStep"];

  return <AuthStepper steps={steps} />;
}
