"use client";
import { useState } from "react";


export default function TradeForm() {
  const [activeTab, setActiveTab] = useState("buy");
  const [amount, setAmount] = useState("");
  const [receive, setReceive] = useState("");

  return (
    <form className="flex  justify-center flex-col gap-6  mt-6">
      {/* تب خرید / فروش */}
      <div className="flex justify-center items-center">
      <div className="flex  w-[12rem] py-2.5 px-3.5 border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-md ">
        <button
          type="button"
          onClick={() => setActiveTab("buy")}
          className={`flex-1 py-2 rounded-xl font-medium transition-colors ${
            activeTab === "buy"
              ? "bg-green-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          خرید
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("sell")}
          className={`flex-1 py-2 rounded-xl font-medium transition-colors ${
            activeTab === "sell"
              ? "bg-red-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          فروش
        </button>
      </div>
      </div>
   

      {/* پرداخت می‌کنم */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row  gap-10">
        <label className="text-gray-400 text-sm">پرداخت می‌کنم</label>
        <span className="">۱۳۲۴۵۰ <span className="text-[#00CFFF]">همه موجودی</span></span>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="مقدار را وارد کنید"
            className="flex-1 border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6]  focus:ring-2 focus:ring-[#00CFFF] rounded-2xl px-4 py-3 outline-none text-right text-white text-lg placeholder-gray-500"
          />
       
       <button className="flex items-center gap-1 bg-[#1B1B1DA6] px-3 py-3 rounded-xl text-sm">
       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2913)">
<path d="M0 0H12V12H0V0Z" fill="#F7931A"/>
<path d="M8.24194 4.4159H6.43394V9.3999H5.56194V4.4159H3.76994V3.7119H8.24194V4.4159Z" fill="#F5F5F5"/>
</g>
<defs>
<clipPath id="clip0_1_2913">
<rect width="12" height="12" rx="6" fill="white"/>
</clipPath>
</defs>
</svg>
            تومان

<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.246 7.17529C3.20733 7.13655 3.042 6.99025 2.906 6.85398C2.05067 6.05503 0.650667 3.97084 0.223333 2.87997C0.154667 2.71431 0.00933313 2.29546 0 2.07168C0 1.85725 0.0479999 1.65284 0.145333 1.45778C0.281333 1.21462 0.495333 1.01956 0.748 0.912679C0.923333 0.843874 1.448 0.736992 1.45733 0.736992C2.03133 0.63011 2.964 0.571325 3.99467 0.571325C4.97667 0.571325 5.87133 0.63011 6.454 0.717619C6.46333 0.72764 7.11533 0.834522 7.33867 0.951424C7.74667 1.16586 8 1.5847 8 2.03294V2.07168C7.99 2.3636 7.73667 2.9775 7.72733 2.9775C7.29933 4.00958 5.968 6.04568 5.08333 6.864C5.08333 6.864 4.856 7.09446 4.714 7.19466C4.51 7.35098 4.25733 7.42847 4.00467 7.42847C3.72267 7.42847 3.46 7.34096 3.246 7.17529Z" fill="#8C9094"/>
</svg>

          </button>
        </div>
     
      </div>

      {/* دریافت می‌کنم */}
      <div className="flex  flex-col gap-2">
        <label className="text-gray-400 text-sm">دریافت می‌کنم</label>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={receive}
            onChange={(e) => setReceive(e.target.value)}
            placeholder="مقدار را وارد کنید"
            className="flex-1 border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6]  focus:ring-2 focus:ring-[#00CFFF] rounded-2xl px-4 py-3 outline-none text-right text-white text-lg placeholder-gray-500"
          />
          
        <button
            type="button"
            className="flex items-center gap-1 bg-[#1B1B1DA6] px-3 py-3 rounded-xl text-sm"
          >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2927)">
<path d="M0 0H12V12H0V0Z" fill="#F7931A"/>
<path d="M8.55734 5.29324C8.66801 4.54457 8.10134 4.1459 7.32067 3.87457L7.57401 2.8659L6.95667 2.71257L6.71067 3.69657L6.21867 3.57857L6.46867 2.5879L5.85201 2.43457L5.59867 3.44657L5.20667 3.3539V3.35057L4.35467 3.13724L4.19067 3.7959C4.19067 3.7959 4.64667 3.90257 4.64001 3.90657C4.88934 3.97057 4.93201 4.13457 4.92467 4.26324L4.64001 5.41857L4.70401 5.4399L4.63601 5.42524L4.23334 7.04057C4.20467 7.11524 4.12667 7.22924 3.95134 7.18324C3.95867 7.1939 3.50601 7.07657 3.50601 7.07657L3.19934 7.77857L4.00134 7.97857L4.44001 8.0919L4.18334 9.11524L4.80001 9.26857L5.04934 8.2559L5.54534 8.38457L5.29201 9.39324L5.90867 9.54657L6.16201 8.52324C7.21334 8.72324 8.00534 8.64457 8.33667 7.69257C8.60401 6.9259 8.32267 6.4879 7.77001 6.19524C8.17267 6.10657 8.47601 5.83924 8.55401 5.29324H8.55734ZM7.14934 7.26857C6.96067 8.03524 5.67001 7.6179 5.25267 7.5179L5.59134 6.1599C6.00867 6.26657 7.34934 6.4699 7.14934 7.26524V7.26857ZM7.33867 5.28257C7.16734 5.9779 6.09067 5.62524 5.74534 5.53924L6.05201 4.3099C6.40067 4.39524 7.52001 4.55924 7.33867 5.28324V5.28257Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_2927">
<rect width="12" height="12" rx="6" fill="white"/>
</clipPath>
</defs>
</svg>
            BTC 

<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.246 7.17529C3.20733 7.13655 3.042 6.99025 2.906 6.85398C2.05067 6.05503 0.650667 3.97084 0.223333 2.87997C0.154667 2.71431 0.00933313 2.29546 0 2.07168C0 1.85725 0.0479999 1.65284 0.145333 1.45778C0.281333 1.21462 0.495333 1.01956 0.748 0.912679C0.923333 0.843874 1.448 0.736992 1.45733 0.736992C2.03133 0.63011 2.964 0.571325 3.99467 0.571325C4.97667 0.571325 5.87133 0.63011 6.454 0.717619C6.46333 0.72764 7.11533 0.834522 7.33867 0.951424C7.74667 1.16586 8 1.5847 8 2.03294V2.07168C7.99 2.3636 7.73667 2.9775 7.72733 2.9775C7.29933 4.00958 5.968 6.04568 5.08333 6.864C5.08333 6.864 4.856 7.09446 4.714 7.19466C4.51 7.35098 4.25733 7.42847 4.00467 7.42847C3.72267 7.42847 3.46 7.34096 3.246 7.17529Z" fill="#8C9094"/>
</svg>
          </button>
        </div>
    
      </div>

      {/* دکمه خرید / فروش */}
      <button
        type="submit"
        className={`rounded-2xl mb-4 py-3 text-center font-bold text-white mt-2 transition-colors ${
          activeTab === "buy"
            ? "bg-green-500 hover:bg-green-600"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {activeTab === "buy" ? "خرید" : "فروش"}
      </button>
    </form>
  );
}


