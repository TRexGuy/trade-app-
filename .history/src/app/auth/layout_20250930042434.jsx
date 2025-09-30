import React from 'react'
import LevelsBar from './_components/LevelsBar'

export default function layout() {
  return (
    <div className="w-full flex flex-col items-center">
        <LevelsBar />
        <div className="">{children}</div>
    </div>
  )
}
