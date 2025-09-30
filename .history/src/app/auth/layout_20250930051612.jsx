import React from "react";
import LevelsBar from "./_components/LevelsBar";
import AuthHeader from "./_components/AuthHeader";

export default function layout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 o">
        <AuthHeader />
      <LevelsBar />
      <div className="w-full flex flex-col items-center">{children}</div>
    </div>
  );
}
