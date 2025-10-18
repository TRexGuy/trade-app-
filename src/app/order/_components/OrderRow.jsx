export default function OrderRow({ order, isFirst }) {
  return (
    <div
      className={`flex flex-col text-gray-300 p-2 border-r-2 border-l-2 border-[#31313a] bg-black/30  items-center w-full text-xs
        ${isFirst ? 'border-t-2  rounded-t-[30px] ' : ''}`}
    >
      <div className="flex px-2  items-center gap-10 py-1 w-full">
        <div className="w-20 text-right">
          <div>{order.date}</div>
          <div className="text-[8px] text-muted mt-1">{order.time}</div>
        </div>
        <div className="w-20 text-left  text-[8px]">
          <span className={`${order.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
            {order.type === 'buy' ? 'خرید' : 'فروش'}
          </span>
        </div>
        <div className="w-28 text-[8px] text-left">{order.amount}</div>
        <div className="w-40 text-left text-[8px]">
          <span className={order.status === 'در حال انجام' ? 'text-white' : 'text-[#00CFFF]'}>
            {order.status}
          </span>
        </div>
        <div className="w-16 text-left">
          <span className="text-[11px] text-[#00CFFF] cursor-pointer">جزئیات</span>
        </div>
      </div>

      {/* خط نیمه پایین */}
      <div className="w-3/4 border-b-2 border-[#31313a]" />
    </div>
  )
}
