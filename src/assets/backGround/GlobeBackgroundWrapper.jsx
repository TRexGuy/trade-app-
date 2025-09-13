"use client";

import dynamic from "next/dynamic"

const GlobeBackground = dynamic(() => import("./GlobeBackground"), {
  ssr: false,
})

export function GlobeBackgroundWrapper() {
  return <GlobeBackground />
}
