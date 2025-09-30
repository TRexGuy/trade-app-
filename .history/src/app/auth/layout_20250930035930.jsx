import { ProgressProvider } from "@/context/ProgressContext";
import ProgressBox from "@/components/auth/ProgressBox";

export default function AuthLayout({ children }) {
  return (
    <ProgressProvider>
      <div className="max-w-md mx-auto mt-10">
        <ProgressBox />
        {children}
      </div>
    </ProgressProvider>
  );
}
