import React from 'react'

export default function OrdersIcon({ active }) {
  return (
    <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.32324 9.17615V16.0507" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 5.88599V16.0514" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.5999 12.809V16.0511" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 11C1 3.50054 3.50054 1 11 1C18.4995 1 21 3.50054 21 11C21 18.4995 18.4995 21 11 21C3.50054 21 1 18.4995 1 11Z" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
