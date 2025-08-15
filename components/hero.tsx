"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, Shield, Code, Lock } from "lucide-react"
import { useEffect, useState } from "react"
import { useGitHubUser } from "@/hooks/use-github-user"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Aspiring Network & Cyber Security Student"
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
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Currently Focused on Laravel 11+ Development
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about securing digital infrastructures while crafting robust web applications. Exploring the
            intersection of <span className="text-accent font-semibold">cybersecurity</span> and
            <span className="text-primary font-semibold"> modern web development</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <Lock className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Network Security</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Laravel 11+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Cyber Defense</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="glow-effect" asChild>
              <a href="#projects">
                View My Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
              <a href={`https://github.com/${user?.login || "mohamedAskaarrr"}`} target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
              <a href={`mailto:${user?.email || "contact@example.com"}`}>
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
