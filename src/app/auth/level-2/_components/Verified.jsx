import { IoCheckmarkCircle } from "react-icons/io5";

export default function Verified({ onNext }) {
  return (
    <div className="w-full max-w-md p-6 mx-auto ">
      <div className="flex  gap-2 mb-4">
        <IoCheckmarkCircle size={25} className="text-[#16C784]" />
        <span className="text-sm font-bold text-[#DCDEE0]">
          تلفن ثابت با موفقیت تأیید شده
        </span>
      </div>

      <div className="w-full bg-sky-400/30 text-white border border-sky-400 rounded-xl text-center py-2.5 mb-4">
        ۰۷۱۳۱۳۳۴۵۶۷۸
      </div>

      <button className="text-blue-400 text-sm mb-4">ویرایش تلفن</button>

      <button
        onClick={onNext} // اینجا Step Page رو به 1 می‌فرسته
        className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold text-base py-2.5 rounded-xl shadow-md transition"
      >
        ادامه
      </button>
    </div>
  );
}
