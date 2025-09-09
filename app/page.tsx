import { Header } from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { InteractiveProjects } from "@/components/interactive-projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

import { MatrixBackground } from "@/components/matrix-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <MatrixBackground />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <InteractiveProjects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
