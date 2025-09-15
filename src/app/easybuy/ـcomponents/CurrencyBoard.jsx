import { ChevronDown } from "lucide-react";

export default function CurrencyBoard() {
  return (
    <div className="w-full mt-4 gap-2.5  border-2 border-[#31313a] bg-black/30 rounded-[10px] p-2.5 flex items-center justify-between">
      {/* نام ارز + موجودی */}
      <div className="flex flex-row">
        <span className="text-sm text-gray-400">اتریوم</span>
      
      </div>
      <div className="text-green-400 font-bold text-lg">
     <span>   ۲۵,۴۵۶,۲۶۰ ریال</span>  
        </div >
      {/* دکمه انتخاب ارز */}
  <div className="flex flex-col" >
   <p>تغییر۲۴ ساعته</p>

  <span className="text-green-400  flex flex-row-reverse font-bold text-lg"> ۴۴٪.0+</span>
  </div>
    </div>
  );
}
