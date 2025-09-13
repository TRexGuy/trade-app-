import React from 'react'

export default function EasybuyIcon({ active }) {
  return (
    <svg width="25" height="25" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00146 16.489H14.9556" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.53414 21C5.53414 21 1 18.6013 1 16.4902C1 14.3801 5.53414 11.9804 5.53414 11.9804" stroke={active ? " #01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.3975 5.51099L3.44336 5.51099" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.8645 1.00002C12.8645 1.00002 17.3986 3.3998 17.3986 5.50984C17.3986 7.61987 12.8645 10.0197 12.8645 10.0197" stroke={active ? "#01e4f8" : "#73777A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
