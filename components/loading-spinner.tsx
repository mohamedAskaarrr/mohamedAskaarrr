"use client"

import { useEffect, useState } from "react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: string
}

export function LoadingSpinner({ size = "md", color = "currentColor" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-primary`}
        style={{ borderTopColor: color }}
      />
    </div>
  )
}

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-muted-foreground">Loading portfolio...</p>
      </div>
    </div>
  )
}
