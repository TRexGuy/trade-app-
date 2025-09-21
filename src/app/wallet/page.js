// WalletPage.jsx
"use client";

import WalletHeader from "./_components/WalletHeader";
import WalletBalance from "./_components/WalletBalance";
import WalletTabs from "./_components/WalletTabs";

export default function WalletPage() {
  return (
    <div className="w-full h-screen relative bg-[#0B0B0B]">
      {/* Scrollable content */}
      <div className="h-full overflow-y-auto flex flex-col p-4 gap-4 pb-32">
        <WalletHeader />
        <WalletBalance />
        <WalletTabs />
      </div>
    </div>
  );
}
