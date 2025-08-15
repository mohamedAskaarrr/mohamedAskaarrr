"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedCounter } from "@/components/animated-counter"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"

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
        { name: "Laravel 11+", level: 85, color: "bg-red-500" },
        { name: "PHP 8.3+", level: 80, color: "bg-blue-500" },
        { name: "JavaScript", level: 75, color: "bg-yellow-500" },
        { name: "MySQL", level: 70, color: "bg-orange-500" },
        { name: "HTML/CSS", level: 90, color: "bg-green-500" },
      ],
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Network Security", level: 70, color: "bg-purple-500" },
        { name: "Penetration Testing", level: 65, color: "bg-red-600" },
        { name: "Vulnerability Assessment", level: 75, color: "bg-orange-600" },
        { name: "Incident Response", level: 60, color: "bg-blue-600" },
        { name: "Security Auditing", level: 68, color: "bg-green-600" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Linux Administration", level: 75, color: "bg-gray-600" },
        { name: "Docker", level: 65, color: "bg-blue-400" },
        { name: "Git/GitHub", level: 85, color: "bg-gray-800" },
        { name: "Wireshark", level: 70, color: "bg-blue-700" },
        { name: "Metasploit", level: 60, color: "bg-red-700" },
      ],
    },
  ]

  const certifications = [
    "CompTIA Security+ (In Progress)",
    "Ethical Hacking Fundamentals",
    "Laravel Certified Developer (Planned)",
    "Network+ (Studying)",
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
            { label: "Projects Completed", value: 15, suffix: "+" },
            { label: "Technologies Mastered", value: 20, suffix: "+" },
            { label: "Hours of Learning", value: 500, suffix: "+" },
            { label: "Certifications Earned", value: 3, suffix: "" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {animationTriggered ? (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-fit transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {animationTriggered ? (
                          <AnimatedCounter end={skill.level} suffix="%" duration={1500 + skillIndex * 200} />
                        ) : (
                          "0%"
                        )}
                      </span>
                    </div>
                    <Progress 
                      value={animationTriggered ? skill.level : 0} 
                      className="h-2 transition-all duration-1000 ease-out" 
                      style={{ transitionDelay: `${skillIndex * 100}ms` }}
                    />
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
