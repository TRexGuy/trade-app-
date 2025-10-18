export default function Tabs({ value, onChange }) {
  const tabs = [
    { key: "open", label: "سفارش‌های باز" },
    { key: "history", label: "تاریخچه سفارش" },
    { key: "trades", label: "تاریخچه ترید" },
  ]

  return (
    <div className="w-full mt-6 gap-6 justify-around flex text-white">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`text-xs cursor-pointer text-gray-300 p-2 rounded-md transition-colors duration-200
            ${value === tab.key ? "bg-[#31dfeb]" : "text-white hover:bg-[#01e4f8]"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
