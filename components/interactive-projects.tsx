"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Shield, Code, Database, Lock, Filter } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function InteractiveProjects() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 })

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS featuring interactive animations and cybersecurity theme.",
      image: "/placeholder.jpg",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      category: "Web Development",
      github: "https://github.com/mohamedAskaarrr/mohamedAskaarrr",
      demo: null,
      icon: Code,
      featured: true,
    },
    
    {
      title: "Secure Laravel Applications",
      description:
        "Full-stack web applications built with Laravel framework featuring Spatie authentication and authorization packages for secure user management and role-based access control.",
      image: "/secure-authentication-dashboard.png",
      tags: ["Laravel", "PHP", "Spatie", "Authentication", "Authorization"],
      category: "Web Development",
      github: "https://github.com/mohamedAskaarrr",
      demo: null,
      icon: Lock,
      featured: true,
    },
    
    {
      title: "Network Security Lab",
      description:
        "Learning environment for network security concepts, penetration testing tools, and vulnerability assessment techniques using various cybersecurity tools.",
      image: "/penetration-testing-terminal.png",
      tags: ["Network Security", "Penetration Testing", "Kali Linux", "Security Tools"],
      category: "Cybersecurity",
      github: "https://github.com/mohamedAskaarrr",
      demo: null,
      icon: Shield,
      featured: false,
    },
  ]

  const categories = ["All", "Web Development", "Cybersecurity"]
  
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  return (
    <section id="projects" className="py-20 px-4" ref={projectsRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects & Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in cybersecurity and web development, featuring modern applications,
            security tools, and innovative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(category)}
              className="transition-all duration-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card 
                key={project.title} 
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                } ${projectsInView ? "animate-in slide-in-from-bottom-4" : "opacity-0"}`}
                style={{ 
                  animationDelay: projectsInView ? `${index * 150}ms` : "0ms",
                  animationFillMode: "forwards"
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <IconComponent className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
