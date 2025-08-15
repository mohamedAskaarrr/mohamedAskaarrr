"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, Shield, Code, Lock } from "lucide-react"
import { useEffect, useState } from "react"
import { useGitHubUser } from "@/hooks/use-github-user"
import { ProfileImage } from "@/components/profile-image"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-stack Web Developer in Laravel"
  const { user } = useGitHubUser("mohamedAskaarrr")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Profile Image Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-12">
            
            {/* Left Side - Profile Image */}
            <div className="flex-shrink-0 order-2 lg:order-1">
              <ProfileImage />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 order-1 lg:order-2 text-left lg:text-left">
              <div className="flex justify-start mb-6">
                <Badge variant="secondary" className="px-6 py-3 text-sm font-medium backdrop-blur-md bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                  <Code className="w-4 h-4 mr-2" />
                  Laravel Expert • Modern PHP Development
                </Badge>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                {text}
                <span className="animate-pulse text-accent">|</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                Crafting <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded">robust web applications</span> with 
                Laravel 11+, building scalable architectures, and exploring 
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded ml-1">cybersecurity fundamentals</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-start mb-12">
                <Button size="lg" className="glow-effect bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg" asChild>
                  <a href="#projects">
                    🚀 Explore My Work
                    <ArrowDown className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm" asChild>
                  <a href="#contact">
                    💬 Let's Connect
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="flex justify-start space-x-8">
                <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-110 transition-all duration-300 p-4 rounded-full border border-primary/20 hover:border-accent hover:bg-accent/10 backdrop-blur-sm" asChild>
                  <a href={`https://github.com/${user?.login || "mohamedAskaarrr"}`} target="_blank" rel="noopener noreferrer">
                    <Github className="h-7 w-7" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-110 transition-all duration-300 p-4 rounded-full border border-primary/20 hover:border-accent hover:bg-accent/10 backdrop-blur-sm" asChild>
                  <a href="https://www.linkedin.com/in/mohamed-askar-02777b283/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-7 w-7" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-110 transition-all duration-300 p-4 rounded-full border border-primary/20 hover:border-accent hover:bg-accent/10 backdrop-blur-sm" asChild>
                  <a href={`mailto:${user?.email || "contact@example.com"}`}>
                    <Mail className="h-7 w-7" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Tech Stack */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Code className="w-6 h-6 text-primary" />
              <span className="font-medium">Laravel 11+ Expert</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl border border-accent/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-medium">Security Enthusiast</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Lock className="w-6 h-6 text-secondary" />
              <span className="font-medium">Modern PHP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
