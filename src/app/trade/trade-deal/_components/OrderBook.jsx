'use client';
const mockOrders = [
    { price: 2912734, amount: 0.0048, type: "sell" },
    { price: 2912734, amount: 0.0048, type: "sell" },
    { price: 2912734, amount: 0.0048, type: "sell" },
    { price: 2912734, amount: 0.0048, type: "buy" },
    { price: 2912734, amount: 0.0048, type: "buy" },
    { price: 2912734, amount: 0.0048, type: "buy" },
  ];
  
  export default function OrderBook() {
    return (
      <div className="w-full max-w-md mx-auto  ps-6  ">
        {/* هدر قیمت و مقدار */}
        <div className="flex justify-between text-gray-500 text-xs pb-1 mb-2">
          <span>قیمت</span>
          <span>مقدار</span>
        </div>
  
        {/* سفارش‌های خرید */}
        <div className="space-y-2">
          {mockOrders
            .filter((o) => o.type === "buy")
            .map((order, index) => (
              <div
                key={`buy-${index}`}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-green-500">
                  {order.price.toLocaleString("fa-IR")}
                </span>
                <span className="text-gray-300">{order.amount.toFixed(4)}</span>
              </div>
            ))}
        </div>
  
        {/* قیمت وسط */}
        <div className="my-3 w-full">
          <div className="bg-[#1B1B1DA6] border-solid border-[3px] border-[#31313a]  py-1 rounded-lg  text-center">
            <p className="text-white text-bas  ">0.35472</p>
            <p className="text-gray-400 text-xs ">50.52345$ ≈</p>
          </div>
        </div>
  
        {/* سفارش‌های فروش */}
        <div className="space-y-2">
          {mockOrders
            .filter((o) => o.type === "sell")
            .map((order, index) => (
              <div
                key={`sell-${index}`}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-red-500">
                  {order.price.toLocaleString("fa-IR")}
                </span>
                <span className="text-gray-300">{order.amount.toFixed(4)}</span>
              </div>
            ))}
        </div>
      </div>
    );
  }
  