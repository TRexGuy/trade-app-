"use client";
import { useEffect, useState } from "react";

export default function ClientWrapper({ children }) {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(true);

  useEffect(() => {
    const checkWidth = () => setIsTabletOrMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isTabletOrMobile)
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-6 bg-gray-100 text-gray-700">
        <h1 className="text-2xl font-semibold mb-2">
          💻 این اپ فقط برای موبایل و تبلت طراحی شده
        </h1>
        <p>با گوشی یا تبلت وارد شو رفیق 📱</p>
      </div>
    );

  return children;
}
