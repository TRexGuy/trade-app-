
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";
export default function WaitingApproval({ onNext }) {
  const handlePrevStep = () => {
    setSubStep(1);
  };
  const router = useRouter(); 
  const handleContinue = () => {
  
    router.push("/auth/level-3"); 
  };
    return (
      <div className="w-full max-w-sm rounded-2xl p-5 shadow-lg flex flex-col items-center justify-center gap-4 text-center  text-white">
        
        
        <p className="text-blue-400 text-base">
          عکس شما در انتظار تأیید می‌باشد
        </p>
  
        <button
        onClick={handleContinue}
          className="mt-4 w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl shadow-md transition"
        >
          ادامه
        </button>

        <div className="w-full flex flex-row gap-1 justify-start items-center">
          <SlArrowRight />
            <button
              onClick={handlePrevStep}
              className="text-xs font-semibold text-sky-400"
            >
              مرحله قبل
            </button>
          </div>
      </div>
    );
  }
  