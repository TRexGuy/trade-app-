"use client";

import React, { useState } from 'react'
import DepositHeader from './_components/DepositHeader'
import DepositTabs from './_components/DepositTabs'
import DepositCoinTab from './_components/DepositCoinTab';
import DepositFiatTab from './_components/DepositFiatTab';

export default function Page() {
    const [tab, setTab] = useState("coin");

    return (
        <div className="w-full h-screen overflow-y-auto flex flex-col items-center gap-5 p-4 pb-28">
            <DepositHeader />
            <DepositTabs tab={tab} setTab={setTab} />
            {tab === "coin" && (<DepositCoinTab />)}
            {tab === "fiat" && (<DepositFiatTab />)}
        </div>
    )
}
