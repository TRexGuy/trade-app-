// import { ProgressProvider } from "@/context/ProgressContext";
// import ProgressBox from "@/components/auth/ProgressBox";

import AuthProgressBox from "../../";
import { ProgressProvider } from "@/context/AuthProgressContext";

export default function AuthLayout({ children }) {
  return (
    <ProgressProvider>
      <div className="max-w-md mx-auto mt-10">
        <AuthProgressBox />
        {children}
      </div>
    </ProgressProvider>
  );
}
