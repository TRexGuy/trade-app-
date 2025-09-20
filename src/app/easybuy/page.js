import React from 'react'
import Header from "./ـcomponents/Header"
import ChartPack from "./ـcomponents/ChartPack"
import TradeForm from "./ـcomponents/TradeForm"

export default function EasyBuy() {
  return (
<div className="min-h-screen bg-panel p-4 shadow-xl relative flex flex-col pb-24">
  <Header />
  <ChartPack />
  <TradeForm />
</div>


  )
}
