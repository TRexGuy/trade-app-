"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function TradeFields({ type, formData, setFormData }) {
  const { orderType, price, amount } = formData[type];

  // هندل تغییر فیلدها
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [type]: { ...prev[type], [name]: value },
    }));
  };

  // محاسبه قیمت کل
  const total = (Number(price) || 0) * (Number(amount) || 0);

  // درصدهای سریع
  const handlePercentClick = (percent) => {
    const value = ((Number(price) || 0) * percent).toFixed(2);
    setFormData((prev) => ({
      ...prev,
      [type]: { ...prev[type], amount: value },
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 rounded-2xl shadow-lg">
      {/* نوع سفارش */}
      <div>
        <label className="block text-xs text-gray-400 mb-1">نوع سفارش</label>
        <select
          name="orderType"
          value={orderType}
          onChange={handleChange}
          className="w-full  text-gray-300 p-2 text-sm border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-lg  outline-none focus:ring-2 focus:ring-[#00CFFF]"
        >
          <option value="limit">محدود</option>
          <option value="market">بازار</option>
        </select>
      </div>

      {/* قیمت */}
      <div>
        <label className="block text-xs text-gray-400 mb-1">قیمت</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
          className="w-full text-gray-300 p-2 text-sm border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-lg  outline-none focus:ring-2 focus:ring-[#00CFFF]"
          placeholder="قیمت (ریال)"
        />
        <p className="text-[#73777A] text-xs mt-1">
          {type === "buy" ? "بالاترین پیشنهاد خرید" : "پایین‌ترین قیمت فروش"}
        </p>
      </div>

      {/* مقدار */}
      <div>
        <label className="block text-xs text-gray-400 mb-1">مقدار</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
          className="w-full text-gray-300  p-2 text-sm border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-lg  outline-none focus:ring-2 focus:ring-[#00CFFF]"
          placeholder="مقدار (ETH)"
        />
      </div>

      {/* درصدهای سریع */}
      <div className="flex  text-gray-300 text-xs justify-between gap-2">
        {[
          { label: "۲۵%", value: 0.25 },
          { label: "۵۰%", value: 0.5 },
          { label: "۷۵%", value: 0.75 },
          { label: "۱۰۰%", value: 1 },
        ].map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => handlePercentClick(p.value)}
            className="flex-1 py-3 px-2 text-xs bg-[#1B1B1DA6] rounded-lg hover:bg-gray-700 transition"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* قیمت کل */}
      <div className="text-xs text-gray-400">
        <p>قیمت کل: {total || 0}</p>
      </div>

      {/* دکمه ارسال */}
      <button
        className={`w-full py-3 rounded-lg font-bold text-sm ${
          type === "buy"
            ? "bg-[#16C784] hover:bg-[#1DD495]"
            : "bg-red-500 hover:bg-red-600"
        } transition`}
      >
        {type === "buy" ? "خرید" : "فروش"}
      </button>
    </div>
  );
}

export default function TradeForm() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "buy";

  const [tab, setTab] = useState(initialTab);

  const [formData, setFormData] = useState({
    buy: { orderType: "limit", price: "", amount: "" },
    sell: { orderType: "limit", price: "", amount: "" },
  });

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      {/* تب‌ها */}
      <div className="w-full text-gray-300 max-w-md mx-auto flex bg-[#1B1B1DA6] rounded-xl p-1">
        <button
          onClick={() => setTab("buy")}
          className={`flex-1 py-2 rounded-lg ${
            tab === "buy" ? "bg-[#16C784]" : "bg-[#1B1B1DA6"
          }`}
        >
          خرید
        </button>
        <button
          onClick={() => setTab("sell")}
          className={`flex-1 py-2 rounded-lg ${
            tab === "sell" ? "bg-red-500" : "bg-[#1B1B1DA6"
          }`}
        >
          فروش
        </button>
      </div>

      <TradeFields type={tab} formData={formData} setFormData={setFormData} />
    </div>
  );
}
