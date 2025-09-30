// import { ProgressProvider } from "@/context/ProgressContext";
// import ProgressBox from "@/components/auth/ProgressBox";

import AuthProgressBox from "../../components/partials/AuthProgressBox";
import { ProgressProvider } from "../../";

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
