"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork, Eye, Calendar, Filter } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useGitHubRepos } from "@/hooks/use-github-repos"
import { LoadingSpinner } from "@/components/loading-spinner"

const GITHUB_USERNAME = "mohamedAskaarrr" // Your GitHub username

export function GitHubProjects() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 })
  const { repos, loading, error } = useGitHubRepos(GITHUB_USERNAME, 6)

  // Get unique languages for filtering
  const languages = ["All", ...new Set(repos.map(repo => repo.language).filter(Boolean) as string[])]
  
  const filteredRepos = selectedFilter === "All" 
    ? repos 
    : repos.filter(repo => repo.language === selectedFilter)

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500", 
      Python: "bg-green-500",
      Java: "bg-orange-500",
      PHP: "bg-purple-500",
      "C++": "bg-blue-600",
      HTML: "bg-orange-400",
      CSS: "bg-blue-400",
      Vue: "bg-green-400",
      React: "bg-cyan-500"
    }
    return colors[language] || "bg-gray-500"
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4" ref={projectsRef}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Live Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">GitHub Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time data from my GitHub repositories showcasing my latest work and contributions.
            </p>
          </div>
          <div className="flex justify-center">
            <LoadingSpinner size="lg" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-4" ref={projectsRef}>
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">GitHub Portfolio</h2>
            <p className="text-red-500">Error loading repositories: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-4" ref={projectsRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Live Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">GitHub Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-time data from my GitHub repositories showcasing my latest work and contributions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {languages.map((language) => (
            <Button
              key={language}
              variant={selectedFilter === language ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(language)}
              className="transition-all duration-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              {language}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.map((repo, index) => (
            <Card 
              key={repo.id} 
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                projectsInView ? "animate-in slide-in-from-bottom-4" : "opacity-0"
              }`}
              style={{ 
                animationDelay: projectsInView ? `${index * 150}ms` : "0ms",
                animationFillMode: "forwards"
              }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg">
                    {repo.name}
                  </CardTitle>
                  {repo.language && (
                    <Badge className={`${getLanguageColor(repo.language)} text-white text-xs`}>
                      {repo.language}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(repo.updated_at)}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[3rem]">
                  {repo.description || "No description available"}
                </p>

                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {repo.topics.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{repo.topics.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}

                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {repo.homepage && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No repositories found for the selected language.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
