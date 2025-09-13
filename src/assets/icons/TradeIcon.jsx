import React from 'react'

export default function TradeIcon({ active }) {
  return (
    <svg width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_3862)">
            <path d="M17.1024 23.5826H9.00049" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.186 23.5837C22.186 26.1464 23.0383 26.9999 25.593 26.9999C28.1477 26.9999 29 26.1464 29 23.5837C29 21.021 28.1477 20.1675 25.593 20.1675C23.0383 20.1675 22.186 21.021 22.186 23.5837Z" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.8987 10.4178H28.9995" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.8151 10.4162C15.8151 7.85462 14.9628 7 12.4081 7C9.8523 7 9 7.85462 9 10.4162C9 12.979 9.8523 13.8325 12.4081 13.8325C14.9628 13.8325 15.8151 12.979 15.8151 10.4162Z" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <filter id="filter0_d_1_3862" x="0.25" y="0.25" width="37.5" height="37.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.835294 0 0 0 0 0.207843 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3862"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3862" result="shape"/>
            </filter>
        </defs>
    </svg>
  )
}
