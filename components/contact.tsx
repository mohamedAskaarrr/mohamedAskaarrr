"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Download } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating on security projects, discussing Laravel development, or exploring opportunities
            in cybersecurity? Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Send me an email</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:mohamed.askar@example.com">
                    Contact via Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Check out my projects</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://github.com/mohamedAskaarrr" target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Let's connect professionally</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.linkedin.com/in/mohamed-askar-02777b283/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Resume Download Section */}
          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Resume / CV</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download my latest resume to learn more about my experience and qualifications
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a href="/Mohamed_Askar_ATS_CV_Aligned.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
