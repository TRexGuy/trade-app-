import Link from 'next/link'
import React from 'react'

export default function DealButtons() {
  return (
    <div className="w-full  border-2 border-[#31313a] bg-black/30  fixed bottom-0 right-0 left-0 flex items-center justify-between rounded-b-[30px] gap-7 py-3.5 px-7">
      <Link 
        href={{ pathname: "/trade/trade-deal", query: { tab: "buy" } }}
        className="w-full bg-[#16C784] text-white rounded-[10px] text-center py-3 font-bold text-sm"
      >
        خرید
      </Link>
      <Link 
        href={{ pathname: "/trade/trade-deal", query: { tab: "sell" } }}
        className="w-full bg-[#EA3943] text-white rounded-[10px] text-center py-3 font-bold text-sm"
      >
        فروش
      </Link>
    </div>
  )
}
