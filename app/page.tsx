import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { GitHubProjects } from "@/components/github-projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MatrixBackground } from "@/components/matrix-background"
import ErrorBoundary from "@/components/error-boundary"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <MatrixBackground />
      <Header />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <GitHubProjects />
      </ErrorBoundary>
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
