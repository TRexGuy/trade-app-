import Frame from "../../../../assets/image/Frame.png";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { IoCheckmarkCircle } from "react-icons/io5";
export default function IdCardVerified({ onNext }) {
  const handlePrevStep = () => {
    setSubStep(1);
  };
    return (
      <div className="w-full max-w-sm flex flex-col gap-6 items-center">
        <div className="flex flex-row">
        <IoCheckmarkCircle size={25} className="text-[#16C784]" />
        <h2 className="text-center text-lg font-semibold text-green-400">
          کارت شناسایی با موفقیت ثبت گردید 
        </h2>
        </div>
       
  
        <div className="w-full bg-sky-400/30 text-white border border-sky-400  text-center py-10 mb-4 rounded-xl  flex flex-col items-center gap-3">
        <Image src={Frame} alt="Frame" width={100} height={100} />
     

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
  