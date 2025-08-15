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
      icon: Code,
      title: "Laravel Development",
      description: "Advanced Laravel 11+ features, Eloquent ORM, and API development",
    },
    {
      icon: Database,
      title: "Database Architecture", 
      description: "MySQL optimization, migrations, and scalable database design",
    },
    { icon: Server, title: "Backend Systems", description: "RESTful APIs, microservices, and server-side architecture" },
    {
      icon: Shield,
      title: "Web Security",
      description: "OWASP guidelines, secure coding practices, and authentication systems",
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "Vue.js, React integration with Laravel backends",
    },
    {
      icon: Lock,
      title: "Security Learning",
      description: "Exploring penetration testing and vulnerability assessment basics",
    },
  ]

  return (
    <section id="about" className="py-20 px-4" ref={aboutRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Laravel Expert & Security Explorer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a passionate <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">Full-stack Laravel Developer</span>, 
            I specialize in building robust, scalable web applications using modern PHP practices. 
            Currently expanding my knowledge into <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded">cybersecurity fundamentals</span> 
            to create more secure and resilient applications.
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 hover:shadow-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:scale-110 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
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
