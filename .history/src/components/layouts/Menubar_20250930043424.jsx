"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import WalletIcon from "../../assets/icons/WalletIcon";
import TradeIcon from "../../assets/icons/TradeIcon";
import OrdersIcon from "../../assets/icons/OrdersIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import EasybuyIcon from "../../assets/icons/EasybuyIcon";

const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

const hideMenuOn = ["/trade"];

if (
  mounted &&
  (hideMenuOn.includes(pathname) || pathname.startsWith("/auth"))
) {
  return null;
}

  return (
    <footer className="w-full fixed bottom-[-1px] left-0 right-0 z-50 flex items-center justify-between px-7 py-5 bg-[#232329B5] backdrop-blur-[5.3px]">
      <Link href="/order" className="flex flex-col items-center gap-3">
        <OrdersIcon active={pathname === "/order"} />
        <span className="text-[9.5px] text-[#F9FAFB]">سفارشات</span>
      </Link>
      <Link href="/trade" className="flex flex-col items-center gap-3">
        <TradeIcon
          active={["/trade", "/trade/trade-deal"].includes(pathname)}
        />
        <span className="text-[9.5px] text-[#F9FAFB]">ترید</span>
      </Link>
      <Link href="/" className="flex flex-col items-center gap-3">
        <HomeIcon active={pathname === "/"} />
        <span className="text-[9.5px] text-[#F9FAFB]">خانه</span>
      </Link>
      <Link href="/easybuy" className="flex flex-col items-center gap-3">
        <EasybuyIcon active={pathname === "/easybuy"} />
        <span className="text-[9.5px] text-[#F9FAFB]">خرید/فروش آسان</span>
      </Link>
      <Link href="/wallet" className="flex flex-col items-center gap-3">
        <WalletIcon active={pathname.startsWith("/wallet")} />
        <span className="text-[9.5px] text-[#F9FAFB]">کیف پول</span>
      </Link>
    </footer>
  );
};

export default Footer;
