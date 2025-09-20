"use client";
import { useEffect, useState } from "react";

export default function UserTwoPage() {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("stores")) || [];
    setStores(data);
  }, []);

  const handleStatusChange = (id, status) => {
    const updated = stores.map((s) =>
      s.id === id ? { ...s, status } : s
    );
    setStores(updated);
    localStorage.setItem("stores", JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-xl font-bold mb-4">لیست فروشگاه‌ها</h1>

      {/* لیست کد فروشگاه‌ها */}
      <div className="flex gap-3 flex-wrap mb-6">
        {stores.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedStore(s)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            کد: {s.storeCode}
          </button>
        ))}
      </div>

      {/* نمایش جزئیات */}
      {selectedStore && (
        <div className="border p-4 rounded-lg w-80 text-center shadow">
          <p>کد فروشگاه: {selectedStore.storeCode}</p>
          <p>پالت رنگی: {selectedStore.palette}</p>
          <p>آدرس: {selectedStore.address}</p>
          <p className="mt-2">
            وضعیت:{" "}
            <span
              className={
                selectedStore.status === "sent"
                  ? "text-green-600"
                  : selectedStore.status === "not-sent"
                  ? "text-red-600"
                  : "text-gray-600"
              }
            >
              {selectedStore.status === "pending"
                ? "در انتظار"
                : selectedStore.status === "sent"
                ? "ارسال شد"
                : "ارسال نشد"}
            </span>
          </p>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => handleStatusChange(selectedStore.id, "sent")}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              ارسال شد
            </button>
            <button
              onClick={() => handleStatusChange(selectedStore.id, "not-sent")}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              ارسال نشد
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
