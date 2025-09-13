
import { GoChevronLeft } from "react-icons/go";

export default function TopBar({ title }) {
    return (
      <div className="bg-black/30  border-solid border-[3px] border-[#232329] w-full flex flex-row-reverse items-center justify-between p-1">
       
          {/* back icon */}
          <GoChevronLeft className="text-3xl text-[#A6AAAD]" />
     
        <h1 className=" text-sm text-[#A6AAAD] font-medium">{title}</h1>
        <div className="w-8" /> {/* placeholder for symmetry */}
      </div>
    )
  }
  