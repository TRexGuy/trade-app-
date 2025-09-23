// page.tsx
import { Suspense } from "react";
import OrdersList from "./_components/OrdersList";
import OrderBook from "./_components/OrderBook";
import Navbar from "./_components/navabr";
import TradeForm from "./_components/TradeForm";

export default function TradeDealPage() {
  return (
    <div className="w-full flex justify-center items-center p-1.5 relative overflow-hidden">
      <div className="rounded-t-[30px] w-full flex flex-col items-center gap-3.5 relative z-10">
        <Navbar />
        <div className="w-full max-w-md mx-auto p-4 space-y-6">
          <div className="flex space-y-4">
            <OrderBook />
            <div className="flex flex-col space-y-3">
              <Suspense fallback={<div>Loading...</div>}>
                <TradeForm />
              </Suspense>
            </div>
          </div>
          {/* <OrdersList /> */}
        </div>
      </div>
    </div>
  );
}
