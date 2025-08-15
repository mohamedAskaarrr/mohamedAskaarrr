"use client"

import { useEffect, useState } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
}

export function useInView(options: UseInViewOptions = {}) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      }
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, options.threshold, options.rootMargin])

  return [setRef, inView] as const
}
