import React from 'react'
import { CiStar } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between p-1  border-2  border-[#31313a] bg-black/30 ">
      <CiStar className='text-[#8C9094] text-[28px]' />
      <span className="text-[#A6AAAD] text-[16px] font-medium">ETH/IRR</span>
      <IoIosArrowBack className='text-[#8C9094] text-[28px]' />
    </div>
  )
}
