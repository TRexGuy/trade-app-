import React from 'react'
import Header from './_components/Header'
import CurrencyBoard from './_components/CurrencyBoard'
import ChartPack from './_components/ChartPack'
import CurrencyList from './_components/CurrencyList'
import DealButtons from './_components/DealButtons'
// import { GlobeBackgroundWrapper } from '../../assets/backGround/GlobeBackgroundWrapper'

export default function TradePage() {
  return (
    <div className="w-full flex justify-center items-center p-1.5 relative overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <GlobeBackgroundWrapper />
      </div> */}
      <div className="rounded-t-[30px] w-full flex flex-col items-center gap-3.5 relative z-10">
        <div className="w-full flex flex-col items-center gap-3.5  pt-4">
          <Header />
          <CurrencyBoard />
        </div>
        <ChartPack />
        <CurrencyList />
        <DealButtons />
      </div>
    </div>
  )
}