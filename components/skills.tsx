"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedCounter } from "@/components/animated-counter"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"
import { Code, Trophy, Zap, Target } from "lucide-react"

export function Skills() {
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 })
  const [animationTriggered, setAnimationTriggered] = useState(false)

  useEffect(() => {
    if (skillsInView && !animationTriggered) {
      setAnimationTriggered(true)
    }
  }, [skillsInView, animationTriggered])
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "Laravel 11+", level: 95, color: "bg-red-500" },
        { name: "PHP 8.3+", level: 92, color: "bg-blue-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "MySQL", level: 85, color: "bg-orange-500" },
        { name: "HTML/CSS", level: 95, color: "bg-green-500" },
        { name: "Vue.js", level: 80, color: "bg-emerald-500" },
        { name: "React", level: 75, color: "bg-cyan-500" },
      ],
    },
    {
      title: "Backend & Architecture",
      skills: [
        { name: "RESTful APIs", level: 92, color: "bg-indigo-500" },
        { name: "Database Design", level: 88, color: "bg-purple-500" },
        { name: "MVC Architecture", level: 95, color: "bg-pink-500" },
        { name: "Authentication", level: 90, color: "bg-rose-500" },
        { name: "Caching Strategies", level: 82, color: "bg-violet-500" },
      ],
    },
    {
      title: "Cybersecurity (Learning)",
      skills: [
        { name: "Network Security", level: 45, color: "bg-purple-500" },
        { name: "Web Security", level: 65, color: "bg-red-600" },
        { name: "Vulnerability Assessment", level: 40, color: "bg-orange-600" },
        { name: "Security Auditing", level: 38, color: "bg-green-600" },
        { name: "Penetration Testing", level: 35, color: "bg-blue-600" },
      ],
    },
  ]

  const certifications = [
    "Laravel Certified Developer (Advanced)",
    "PHP Zend Certified Engineer (Pursuing)",
    "CompTIA Security+ (Studying)",
    "Ethical Hacking Fundamentals (In Progress)",
  ]

  return (
    <section id="skills" className="py-20 px-4" ref={skillsRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Proficiency</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, ranging from web development with Laravel to cybersecurity
            practices and tools.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Laravel Projects", value: 25, suffix: "+", icon: Code },
            { label: "Years Experience", value: 3, suffix: "+", icon: Trophy },
            { label: "Hours Coding", value: 2000, suffix: "+", icon: Zap },
            { label: "Technologies Mastered", value: 15, suffix: "+", icon: Target }
          ].map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {animationTriggered ? (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-fit transform transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3 group">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-bold px-2 py-1 rounded-lg bg-primary/5">
                        {animationTriggered ? (
                          <AnimatedCounter end={skill.level} suffix="%" duration={1500 + skillIndex * 200} />
                        ) : (
                          "0%"
                        )}
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={animationTriggered ? skill.level : 0} 
                        className="h-3 bg-muted/50 transition-all duration-1000 ease-out rounded-full overflow-hidden" 
                        style={{ transitionDelay: `${skillIndex * 100}ms` }}
                      />
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary to-accent opacity-80 transition-all duration-1000 ease-out"
                        style={{ 
                          width: animationTriggered ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Certifications & Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Learning Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Short Term (3-6 months)</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Laravel 11 Advanced Features</Badge>
                    <Badge variant="secondary">CompTIA Security+</Badge>
                    <Badge variant="secondary">Docker & Kubernetes</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Long Term (6-12 months)</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">CISSP Preparation</Badge>
                    <Badge variant="outline">Advanced Penetration Testing</Badge>
                    <Badge variant="outline">Cloud Security (AWS/Azure)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
