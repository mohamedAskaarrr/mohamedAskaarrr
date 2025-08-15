import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Shield, Code, Database, Lock } from "lucide-react"

export function Projects() {
  // Sample projects - replace with actual GitHub projects
  const projects = [
    {
      title: "SecureAuth Laravel",
      description:
        "A robust authentication system built with Laravel 11+ featuring multi-factor authentication, rate limiting, and advanced security measures.",
      image: "/secure-authentication-dashboard.png",
      tags: ["Laravel 11+", "PHP", "Security", "Authentication"],
      github: "https://github.com/username/secure-auth-laravel",
      demo: "https://demo.example.com",
      icon: Shield,
      featured: true,
    },
    {
      title: "Network Monitor Dashboard",
      description:
        "Real-time network monitoring tool with threat detection capabilities and automated alerting system.",
      image: "/placeholder-ocurq.png",
      tags: ["Python", "Network Security", "Monitoring", "Dashboard"],
      github: "https://github.com/username/network-monitor",
      demo: "https://demo.example.com",
      icon: Lock,
      featured: true,
    },
    {
      title: "Vulnerability Scanner API",
      description:
        "RESTful API for automated vulnerability scanning with detailed reporting and integration capabilities.",
      image: "/cybersecurity-vulnerability-scanner.png",
      tags: ["Laravel", "API", "Security", "Scanning"],
      github: "https://github.com/username/vuln-scanner-api",
      demo: null,
      icon: Code,
      featured: false,
    },
    {
      title: "Encrypted File Manager",
      description: "Secure file management system with end-to-end encryption, access controls, and audit logging.",
      image: "/secure-file-manager.png",
      tags: ["Laravel", "Encryption", "File Management", "Security"],
      github: "https://github.com/username/encrypted-file-manager",
      demo: "https://demo.example.com",
      icon: Database,
      featured: false,
    },
    {
      title: "Penetration Testing Toolkit",
      description:
        "Collection of custom penetration testing tools and scripts for ethical hacking and security assessments.",
      image: "/penetration-testing-terminal.png",
      tags: ["Python", "Bash", "Penetration Testing", "Security"],
      github: "https://github.com/username/pentest-toolkit",
      demo: null,
      icon: Shield,
      featured: false,
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted chat application built with Laravel and WebSockets for secure communications.",
      image: "/secure-chat-interface.png",
      tags: ["Laravel", "WebSockets", "Encryption", "Real-time"],
      github: "https://github.com/username/secure-chat",
      demo: "https://demo.example.com",
      icon: Lock,
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in cybersecurity and web development, demonstrating secure coding practices and
            innovative security solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg">
                    <project.icon className="h-5 w-5 text-accent" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge variant="secondary">Featured</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <project.icon className="h-5 w-5 text-accent mr-2" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
