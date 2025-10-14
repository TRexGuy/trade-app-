import { SlArrowRight } from "react-icons/sl";
export default function IdCardVerified({ onNext }) {
  const handlePrevStep = () => {
    setSubStep(1);
  };
    return (
      <div className="w-full max-w-sm   flex flex-col items-center">
        <h2 className="text-center text-lg font-semibold text-green-400">
          کارت شناسایی با موفقیت ثبت گردید ✅
        </h2>
  
        <div className="w-full  rounded-xl p-4 flex flex-col items-center gap-3">

          <span className="text-sm text-gray-300">کارت شناسایی شما</span>
        </div>
  
        <button
          onClick={onNext}
          className="bg-blue-400 text-white rounded-xl py-3 font-semibold mt-2 w-full"
        >
          تأیید و ادامه
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
  