"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "AI Pair Programming with GitHub Copilot",
      issuer: "LinkedIn",
      issueDate: "Jul 2025",
      expiryDate: null,
      credentialUrl: "https://lnkd.in/d7__EyyA",
      skills: ["JavaScript", "Laravel", "Cascading Style Sheets (CSS)", "GitHub Copilot", "Backend in Python", "JavaScript", "PHP", "REST APIs"],
      description: "Demonstrated proficiency in AI-assisted software development by completing the 'AI Pair Programming with GitHub Copilot' course. Gained hands-on experience in...",
      logo: "/placeholder-logo.png",
      showCredential: true,
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      title: "Introduction to Critical Infrastructure Protection (ICIP)",
      issuer: "OPSWAT Academy",
      issueDate: "Jun 2025",
      expiryDate: "Jun 2026",
      credentialUrl: "https://learn.opswatacademy.com/certificate/Bzyb5JwR6g",
      skills: ["Security Standards & Compliance", "Incident Response Basics", "Risk Assessment", "Threat Identification", "Infrastructure Security Awareness"],
      description: "Introduction to CIP | From IT to OT, learn the latest technologies | OPSWAT Academy Safeguarded Essential Systems by mastering the fundamentals of Critical Infrastructure Protection, risk assessment, and security best practices.",
      logo: "/placeholder-logo.png",
      showCredential: true,
      bgColor: "from-purple-600 to-purple-800"
    },
    {
      title: "SmallTalk English Speaking Level Test",
      issuer: "SmallTalk2Me",
      issueDate: "Jun 2025",
      expiryDate: null,
      credentialUrl: "https://app.smalltalk2.me/cert/10994652",
      skills: ["Public Speaking", "Business Communication", "Cross-Cultural Communication Skills"],
      description: "Achieved upper-intermediate (B2+) English proficiency, demonstrating strong speaking skills and effective communication in diverse settings.",
      logo: "/placeholder-logo.png",
      showCredential: true,
      bgColor: "from-green-600 to-green-800"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Licenses & <span className="text-blue-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and achievements that validate my skills and knowledge in technology and cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
              {/* Header with gradient background */}
              <div className={`bg-gradient-to-r ${cert.bgColor} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 text-white/90" />
                  {cert.showCredential && cert.credentialUrl && (
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-white/20 hover:bg-white/30 text-white border-0"
                      onClick={() => window.open(cert.credentialUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify
                    </Button>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 leading-tight">{cert.title}</h3>
                <div className="flex items-center gap-2 text-white/80">
                  <Building className="w-4 h-4" />
                  <span className="font-medium">{cert.issuer}</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Date Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Issued {cert.issueDate}</span>
                    {cert.expiryDate && (
                      <span>• Expires {cert.expiryDate}</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-slate-800 text-gray-300 hover:bg-slate-700 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 4 && (
                      <Badge 
                        variant="outline" 
                        className="text-blue-400 border-blue-400 text-xs"
                      >
                        +{cert.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-400">{certifications.length}</h3>
              <p className="text-gray-400">Active Certifications</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-green-400">3</h3>
              <p className="text-gray-400">Professional Areas</p>
            </div>
            <div className="space-y-2 md:col-span-1 col-span-2">
              <h3 className="text-3xl font-bold text-purple-400">2025</h3>
              <p className="text-gray-400">Latest Achievement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
