import { NotepadText } from "lucide-react";

export default function OrdersList() {
  return (
    <div className="w-full max-w-md mx-auto p-4 pb-20">
      {/* هدر سفارشات */}
      <div className="flex justify-between items-center pb-2 mb-3 border-b border-[#31313a]">
        <h3 className="text-sm text-white font-medium">سفارشات باز</h3>
        <NotepadText className="text-white w-4 h-4" />
      </div>

      {/* لیست سفارشات */}
      <ul className="space-y-2 text-xs">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <li
            key={i}
            className="flex justify-between items-center border-b border-[#31313a] pb-1 last:border-0"
          >
            <span className="text-red-400">48</span>
            <span className="text-white">0.005</span>
            <span className="text-green-400">2,912,734</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
