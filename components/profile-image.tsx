"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function ProfileImage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('profile-container')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        })
      }
    }

    const container = document.getElementById('profile-container')
    container?.addEventListener('mousemove', handleMouseMove)
    return () => container?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      id="profile-container"
      className="relative group cursor-none"
    >
      {/* Animated Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-80 h-80 rounded-full border-2 border-primary/20 animate-spin [animation-duration:20s]" />
        <div className="absolute w-72 h-72 rounded-full border border-accent/30 animate-spin [animation-duration:15s] [animation-direction:reverse]" />
        <div className="absolute w-64 h-64 rounded-full border border-secondary/20 animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-float opacity-60"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Profile Image Container */}
      <div 
        className="relative w-72 h-72 mx-auto group-hover:scale-105 transition-all duration-700"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
        }}
      >
        {/* Glassmorphism Frame */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 shadow-2xl" />
        
        {/* Gradient Border Animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-1 animate-spin [animation-duration:8s]">
          <div className="w-full h-full rounded-full bg-background" />
        </div>

        {/* Profile Image */}
        <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/profile-photo.jpg"
            alt="Mohamed Askar - Full-stack Laravel Developer"
            width={280}
            height={280}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            } group-hover:scale-110`}
            onLoad={() => setIsLoaded(true)}
            priority
          />
          
          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { icon: "⚡", position: "top-4 right-8", delay: "0s" },
            { icon: "🚀", position: "bottom-8 left-4", delay: "1s" },
            { icon: "💻", position: "top-8 left-8", delay: "2s" },
            { icon: "🔒", position: "bottom-4 right-8", delay: "3s" }
          ].map((item, i) => (
            <div
              key={i}
              className={`absolute ${item.position} text-2xl animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              style={{ animationDelay: item.delay }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Name Badge */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20 shadow-lg">
          <div className="text-center">
            <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mohamed Askar
            </div>
            <div className="text-sm text-muted-foreground">Laravel Expert</div>
          </div>
        </div>
      </div>

      {/* Interactive Glow Effect */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
        }}
      />
    </div>
  )
}
