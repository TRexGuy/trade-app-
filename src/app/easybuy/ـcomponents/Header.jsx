import CurrencyBoard from "./CurrencyBoard";

export default function Header() {
  return (
    <header className="  pt-6">
      {/* بخش بالایی */}
      <div className="w-full text-center flex items-center justify-center p-1 border-2 border-[#31313a] rounded-[10px] bg-black/30 ">
        <h1 className="text-lg text-gray-300 font-semibold">خرید / فروش آسان</h1>
     
      </div>

      {/* بخش CurrencyBoard */}
      <CurrencyBoard />
    </header>
  );
}
