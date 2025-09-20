"use client";
import { useState } from "react";

export default function UserOnePage() {
  const [storeCode, setStoreCode] = useState("");
  const [palette, setPalette] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    if (!storeCode || !palette || !address) {
      alert("لطفاً همه فیلدها رو پر کن!");
      return;
    }

    // گرفتن دیتاهای قدیمی از localStorage
    const oldData = JSON.parse(localStorage.getItem("stores")) || [];

    // اضافه کردن فروشگاه جدید
    const newStore = {
      id: Date.now(),
      storeCode,
      palette,
      address,
      status: "pending",
    };

    localStorage.setItem("stores", JSON.stringify([...oldData, newStore]));

    // ریست کردن فرم
    setStoreCode("");
    setPalette("");
    setAddress("");

    alert("اطلاعات ذخیره شد ✅");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-xl font-bold">ثبت اطلاعات فروشگاه</h1>
      <input
        type="text"
        placeholder="کد فروشگاه"
        value={storeCode}
        onChange={(e) => setStoreCode(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      <input
        type="text"
        placeholder="پالت رنگی"
        value={palette}
        onChange={(e) => setPalette(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      <input
        type="text"
        placeholder="آدرس فروشگاه"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      <button
        onClick={handleSave}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl"
      >
        ذخیره
      </button>
    </div>
  );
}
