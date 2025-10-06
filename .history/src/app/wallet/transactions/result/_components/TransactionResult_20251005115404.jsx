import

const cryptoIcons = {
  BTC: "₿",
  USDT: "₮",
  ETH: "Ξ",
};

export default function TransactionResult({
  status,
  amount,
  currency,
  date,
  time,
  cardOrIban,
  walletAddress,
  txId,
  trackingCode,
}) {
  const isSuccess = status === "success";
  const isCrypto = currency !== "تومان";

  return (
    <div className="flex flex-col items-center text-center p-6 text-white">
      {/* دایره وضعیت */}
      <div
        className={`w-24 h-24 flex-col flex items-center justify-center rounded-full text-4xl font-bold ${
          isSuccess ? "bg-[#16C784]" : "bg-[#EA3943]"
        }`}
      >
       
        <h2 className="mt-4 text-lg font-bold">{isSuccess ? "موفق" : "ناموفق"}</h2>
        <span className="text-black">{isSuccess ? "✓" : "✕"}</span>
      </div>

      {/* ارز دیجیتال */}
      {isCrypto && (
        <div className="flex items-center gap-2 mt-2 text-gray-300">
          <span>{currency}</span>
          <span className="text-yellow-400 text-lg">{cryptoIcons[currency] || "₿"}</span>
        </div>
      )}

      {/* جزئیات تراکنش */}
      <div className="mt-6 space-y-2 text-sm text-gray-300 w-full max-w-md">
        <p>
          {date} {time}
        </p>

        <p>
          {amount} {currency}
        </p>

        {/* تومان */}
        {!isCrypto && cardOrIban && (
          <p className="flex flex-col">
            <span className="text-gray-400">شماره کارت:</span> {cardOrIban}
            <span className="text-gray-400">شماره شبا:</span> {cardOrIban}
          </p>
        )}

        {!isCrypto && trackingCode && (
          <p>
            <span className="text-gray-400">شماره پیگیری:</span> {trackingCode}
          </p>
        )}

        {/* ارز دیجیتال */}
        {isCrypto && (
          <>
            {walletAddress && (
              <p className="truncate">
                <span className="text-gray-400">آدرس:</span> {walletAddress}
              </p>
            )}
            {txId && (
              <p>
                <span className="text-gray-400">TXID:</span> {txId}
              </p>
            )}
          </>
        )}
      </div>

      {/* دکمه‌ها فقط برای ارز دیجیتال */}
      {isCrypto && (
        <div className="flex gap-3 mt-6">
          <button className="px-4 py-2 rounded-md border border-yellow-400 text-yellow-400 text-sm hover:bg-yellow-500 hover:text-black transition">
            مشاهده تراکنش
          </button>
          <button className="px-4 py-2 rounded-md border border-yellow-400 text-yellow-400 text-sm hover:bg-yellow-500 hover:text-black transition">
            کپی لینک تراکنش
          </button>
        </div>
      )}
    </div>
  );
}
