import { ArrowLeftRight, Star } from "lucide-react";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="w-full bg-black/30  border-solid border-[3px] border-[#232329] shadow-md">
      <div className="container mx-auto max-w-md h-12 mt-2 flex items-center justify-between px-3 text-white">
        
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#232329] text-[#73777A]">
            <FaRegUser className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2C2C33] transition">
            <Star className="w-5 h-5 text-[#73777A]" />
          </button>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-white">اتریوم</span>
        </div>

        {/* Right Section */}
        <div className="flex gap-1 items-center">
          <span className="text-sm text-[#73777A] font-normal">ETH/USDT</span>
          <span className="rounded-full bg-[#232329] p-1.5 hover:bg-[#2C2C33] transition">
            <ArrowLeftRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
}
