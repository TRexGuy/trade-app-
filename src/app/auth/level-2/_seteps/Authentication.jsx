import selfie from "../../../../assets/image/selfie.png";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
export default function Authentication ({ onNext }) {
    const handlePrevStep = () => {
        setSubStep(1);
      };
    return (
      <div className="w-full max-w-sm   p-5  flex flex-col gap-6 ">
        <h2 className=" text-lg font-semibold">ثبت فیلم سلفی</h2>
  
        <div className="w-full   rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
          <Image src={selfie} alt="Frame" width={300} height={200} />
            <span className="text-sm text-gray-400">GUID TEXT</span>
          </div>
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
  