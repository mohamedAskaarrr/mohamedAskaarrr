"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Database, Server, Lock, Globe, Users, GitBranch } from "lucide-react"
import { useGitHubUser } from "@/hooks/use-github-user"
import { AnimatedCounter } from "@/components/animated-counter"
import { useInView } from "@/hooks/use-in-view"

export function About() {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 })
  const { user, loading } = useGitHubUser("mohamedAskaarrr")

  const interests = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Firewall configuration, intrusion detection, and network monitoring",
    },
    {
      icon: Lock,
      title: "Cyber Defense", 
      description: "Threat analysis, vulnerability assessment, and incident response",
    },
    { icon: Code, title: "Web Development", description: "Laravel 11+, PHP, JavaScript, and modern web frameworks" },
    {
      icon: Database,
      title: "Database Security",
      description: "SQL injection prevention, data encryption, and access control",
    },
    {
      icon: Server,
      title: "System Administration",
      description: "Linux servers, containerization, and infrastructure security",
    },
    {
      icon: Globe,
      title: "Web Security",
      description: "OWASP Top 10, secure coding practices, and penetration testing",
    },
  ]

  return (
    <section id="about" className="py-20 px-4" ref={aboutRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridging Security & Development</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As an aspiring Network and Cyber Security professional, I'm passionate about understanding how systems
            work—and how they can be protected. Currently diving deep into Laravel 11+ development while building a
            strong foundation in cybersecurity principles.
          </p>
        </div>

        {/* GitHub Stats */}
        {user && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Public Repositories", value: user.public_repos, icon: GitBranch },
              { label: "Followers", value: user.followers, icon: Users },
              { label: "Following", value: user.following, icon: Users },
              { label: "Years on GitHub", value: new Date().getFullYear() - new Date(user.created_at).getFullYear(), icon: Code }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {aboutInView ? (
                      <AnimatedCounter end={stat.value} duration={2000} />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-accent/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                    <interest.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{interest.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                While pursuing my studies in Network and Cyber Security, I'm actively developing my skills in Laravel
                11+ to build secure, scalable web applications. I believe that understanding both offensive and
                defensive security principles makes me a better developer, and vice versa.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">Laravel 11+</Badge>
                <Badge variant="secondary">PHP 8.3+</Badge>
                <Badge variant="secondary">Network Security</Badge>
                <Badge variant="secondary">Penetration Testing</Badge>
                <Badge variant="secondary">Secure Coding</Badge>
                <Badge variant="secondary">Linux Administration</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
