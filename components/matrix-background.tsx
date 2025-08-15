"use client"

import { useEffect, useRef } from "react"

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("")
    const font_size = 12
    const columns = canvas.width / font_size
    const drops: number[] = []
    const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"]

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function draw() {
      if (!ctx || !canvas) return

      // Create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        // Random color selection
        const colorIndex = Math.floor(Math.random() * colors.length)
        ctx.fillStyle = colors[colorIndex]
        
        // Add some transparency variation
        const alpha = Math.random() * 0.8 + 0.2
        ctx.globalAlpha = alpha
        
        ctx.font = font_size + "px 'Fira Code', 'Courier New', monospace"
        
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * font_size, drops[i] * font_size)

        // Reset drops randomly
        if (drops[i] * font_size > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i]++
      }
      
      ctx.globalAlpha = 1
    }

    const interval = setInterval(draw, 40)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Recalculate columns
      const newColumns = canvas.width / font_size
      drops.length = newColumns
      for (let x = 0; x < newColumns; x++) {
        if (drops[x] === undefined) {
          drops[x] = Math.floor(Math.random() * canvas.height / font_size)
        }
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="matrix-bg fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      style={{ opacity: 0.08 }}
    />
  )
}
