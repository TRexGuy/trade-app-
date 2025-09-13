import React from 'react'

export default function WalletIcon({ active }) {
  return (
    <svg width="25" height="25" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.615 13.8368H18.0634C16.406 13.8368 15.062 12.4928 15.062 10.8343C15.062 9.17697 16.406 7.83301 18.0634 7.83301H22.5793" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.5755 10.7657H18.2275" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.729 6.1875H11.4836" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 11C1 3.49944 3.72251 1 11.8923 1C20.0609 1 22.7834 3.49944 22.7834 11C22.7834 18.4994 20.0609 21 11.8923 21C3.72251 21 1 18.4994 1 11Z" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
