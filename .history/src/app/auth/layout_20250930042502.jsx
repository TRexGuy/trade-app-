import React from 'react'
import LevelsBar from './_components/LevelsBar'

export default function layout({children}) {
  return (
    <div className="w-full flex flex-col items-center">
        <LevelsBar />
        <div className="w-full flex flex-col items-center">{children}</div>
    </div>
  )
}
