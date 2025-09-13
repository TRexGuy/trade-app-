import React from 'react'

export default function HomeIcon({ active }) {
  return (
    <svg width="25" height="25" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 16.4955C0 8.5653 0.864698 9.11877 5.51914 4.80232C7.55555 3.16305 10.7242 0 13.4606 0C16.1955 0 19.4275 3.14756 21.4823 4.80232C26.1367 9.11877 27 8.5653 27 16.4955C27 28.1661 24.2411 28.1661 13.5 28.1661C2.75887 28.1661 0 28.1661 0 16.4955Z" fill={active ? "#01e4f8" : "#73777A"}/>
        <path d="M9.40576 19.907H17.595" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
