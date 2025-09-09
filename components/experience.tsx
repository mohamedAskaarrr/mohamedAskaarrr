"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Call Center Representative",
      company: "IBT: No. 1 BPO Company in Middle East",
      type: "Full-time",
      duration: "Aug 2025 - Present",
      period: "2 mos",
      location: "Cairo, Egypt",
      locationType: "Hybrid",
      description: "helped me get this job",
      skills: [],
      logo: "/placeholder-logo.png"
    },
    {
      title: "Document Controller Assistant",
      company: "SQUARE Engineering Firm",
      type: "Full-time", 
      duration: "Jul 2025 - Present",
      period: "3 mos",
      location: "New Cairo, Cairo, Egypt",
      locationType: "On-site",
      description: "• Assisted the Document Controller Supervisor in managing and organizing critical documents and files.\n• Utilized advanced Excel and Word skills to streamline documentation processes and improve filing efficiency.",
      skills: ["Document Management", "Document Research"],
      logo: "/placeholder-logo.png"
    },
    {
      title: "SAP Specialist",
      company: "PETROJET",
      type: "Internship",
      duration: "Aug 2024 - Sep 2024",
      period: "2 mos", 
      location: "Cairo, Egypt",
      locationType: "On-site",
      description: "I've Learned a lot about SAP and project Management",
      skills: ["Soft Skills", "SAP Implementation", "+3 skills"],
      logo: "/placeholder-logo.png"
    },
    {
      title: "Network Engineer",
      company: "Mideast Communication Systems-MCS",
      type: "Internship",
      duration: "Jul 2024 - Aug 2024", 
      period: "2 mos",
      location: "Cairo, Egypt",
      locationType: "On-site",
      description: "I've Learned a lot from this internship like Building Network infrastructure, intro to Cloud, real tutorials in Cybersecurity Attack and great communication skills and I gained new powerful connections there",
      skills: ["Teamwork", "Cyber Threat Hunting (CTH)", "+4 skills"],
      logo: "/placeholder-logo.png"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My journey through various roles in technology, cybersecurity, and business operations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-blue-400 text-lg font-semibold mb-1">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                          <Badge variant="outline" className="text-green-400 border-green-400">
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration} • {exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location} • {exp.locationType}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </p>
                    </div>

                    {/* Skills */}
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="bg-slate-800 text-gray-300 hover:bg-slate-700"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
