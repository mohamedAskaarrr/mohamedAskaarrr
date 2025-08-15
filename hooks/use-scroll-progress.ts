"use client"

import { useEffect, useState } from "react"

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScroll / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", updateScrollProgress)
    updateScrollProgress() // Initial call

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return scrollProgress
}
