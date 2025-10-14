export default function VerifyPhone({ onNext }) {
    return (
      <div className="w-full  ">
        <h2 className=" text-lg font-semibold mb-6">تأیید تلفن ثابت</h2>
        <input
          type="text"
          placeholder="لطفاً تلفن ثابت خود را وارد کنید"
          className="w-full mb-2 outline-0 bg-black/65 text-xs text-[#73777A] placeholder:text-[#73777A] border-solid border-[3px] border-[#232329] rounded-xl p-4"
        />
  
        {/* اینجا تابع onNext رو به دکمه وصل کن */}
        <button
          onClick={onNext}
          className="w-full mt-10 bg-blue-400 hover:bg-blue-400 text-white font-semibold text-lg py-3 rounded-xl shadow-lg transition"
        >
          ادامه
        </button>
      </div>
    );
  }
  