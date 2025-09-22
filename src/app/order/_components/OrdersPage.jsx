'use client'
import { useState, useMemo } from 'react'
import TopBar from './TopBar'
import Tabs from './Tabs'
import Filters from './Filters'
import OrderRow from './OrderRow'

const SAMPLE = Array.from({ length: 100 }).map((_, i) => ({
  id: String(i + 1),
  date: `۱۴۰۲/۰۵/${String((i % 30) + 1).padStart(2, '0')}`,
  time: `${String((i % 24)).padStart(2,'0')}:00`,
  pair: i % 2 === 0 ? 'BTC/USDT' : 'ETH/USDT',
  type: i % 2 === 0 ? 'buy' : 'sell',
  amount: (Math.random() * 5).toFixed(3),
  status: i % 3 === 0 ? 'لغو' : 'در حال انجام',
}))

export default function OrdersPage() {
  const [tab, setTab] = useState('open')
  const [query, setQuery] = useState('')

  const orders = useMemo(() => {
    let filtered = SAMPLE.filter(
      o => o.pair.includes(query) || o.status.includes(query)
    )

    if (tab === 'open') {
      return filtered.filter(o => o.status === 'در حال انجام')
    }
    if (tab === 'history') {
      return filtered.filter(o => o.status !== 'در حال انجام')
    }
    if (tab === 'trades') {
      return filtered.filter(o => o.type === 'buy' || o.type === 'sell')
    }
    return filtered
  }, [query, tab])

  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <div className="w-[390px] h-screen overflow-hidden text-[#8C9094] flex flex-col">
        <TopBar title="سفارشات" />

        <div className="p-4 flex flex-col flex-1 h-full">
        <Tabs value={tab} onChange={setTab} />

          <div className="mt-3">
            <Filters query={query} setQuery={setQuery} />
          </div>

          {/* هدر ستون‌ها */}
          <div className="mt-4 text-xs flex items-center border-b border-[#232329] pb-2 text-gray-400">
            <div className="w-20">تاریخ</div>
            <div className="w-20 text-center">سمت</div>
            <div className="flex-1 text-center">مقدار</div>
            <div className="w-28 text-center">وضعیت</div>
            <div className="w-20 text-center"></div>
          </div>

          {/* لیست سفارش‌ها */}
          <div className="mt-3 flex-1 flex flex-col overflow-auto border-r-2 border-l-2 border-[#31313a] bg-black/30">
            {orders.map(o => (
              <OrderRow key={o.id} order={o} />
            ))}
            <div className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  )
}
