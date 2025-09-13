'use client'
import React, { useState, useMemo } from 'react'
import TopBar from './_components/TopBar'
import Tabs from './_components/Tabs'
import Filters from './_components/Filters'
import OrderRow from './_components/OrderRow'
import FillCaretDown from "../../assets/icons/FillCaretDown"
// import { GlobeBackgroundWrapper } from '../../assets/backGround/GlobeBackgroundWrapper'

const SAMPLE = Array.from({ length: 100 }).map((_, i) => ({
  id: String(i + 1),
  date: '۱۴۰۲/۰۵/۰۱',
  time: '۱۳:۲۵',
  pair: 'BTC/USDT',
  type: i % 3 === 0 ? 'buy' : 'sell',
  amount: +(Math.random() * 0.5).toFixed(3),
  status: i % 4 === 0 ? 'لغو' : 'در حال انجام',
}))

export default function Order() {
  const [tab, setTab] = useState('open')   // 👈 اینو اضافه کن
  const [query, setQuery] = useState('')

  const orders = useMemo(() => {
    let filtered = SAMPLE.filter(o => o.pair.includes(query) || o.status.includes(query))

    if (tab === 'open') {
      return filtered.filter(o => o.status === 'در حال انجام')
    }
    if (tab === 'history') {
      return filtered.filter(o => o.status !== 'در حال انجام')
    }
    if (tab === 'trades') {
      return filtered // اینجا می‌تونی فیلتر خاص ترید بزنی
    }
    return filtered
  }, [query, tab])

  return (
    <div className="h-screen bg-panel p-4 shadow-xl overflow-hidden relative flex flex-col">
      {/* Background */}
      {/* <GlobeBackgroundWrapper /> */}

      {/* محتوا */}
      <div className="relative z-10 flex flex-col flex-1">
        <TopBar title="سفارشات" />

        <div>
          <div className="flex w-full flex-col mt-6 items-center bg-black/30 border-solid border-[3px] border-[#232329] rounded-t-[30px] py-2">
            {/* 👇 اینجا باید value و onChange پاس بدی */}
            <Tabs value={tab} onChange={setTab} />

            <div className="mt-3 flex mr-3 w-full">
              <Filters query={query} setQuery={setQuery} />
            </div>
          </div>

          {/* Header row */}
          <div className="mt-4 text-xs text-muted flex items-center pb-2">
            <div className="w-20 gap-1 items-center justify-center flex flex-row">
              <span className="font-bold">تاریخ</span>
              <FillCaretDown />
            </div>
            <div className="w-20 font-bold text-left">سمت</div>
            <div className="w-24 font-bold text-left">مقدار</div>
            <div className="w-32 font-bold text-left">وضعیت</div>
            <div className="w-20" aria-hidden="true" />
          </div>

          {/* Orders list */}
          <div className="flex-1 overflow-auto h-[600px] mt-3">
            {orders.map((o, idx) => (
              <OrderRow key={o.id} order={o} isFirst={idx === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
