"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Search, Globe } from "lucide-react";

export default function About() {
  const skills = [
    "Penetration Testing",
    "Vulnerability Assessment", 
    "Network Security",
    "Laravel",
    "PHP",
    "Spatie Authentication",
    "Full Stack Development",
    "Risk Assessment",
    "Security Auditing",
    "Python",
    "Linux",
    "Kali Linux",
    "Metasploit",
    "Burp Suite",
    "Nmap",
    "Wireshark"
  ];

  const expertise = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Aspiring network security specialist focused on identifying vulnerabilities and learning penetration testing methodologies."
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experienced in building secure web applications using Laravel framework with Spatie packages for authentication and authorization."
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description: "Learning security assessment techniques and tools to identify potential security risks in systems and applications."
    },
    {
      icon: Globe,
      title: "Web Security",
      description: "Focused on securing web applications and implementing best practices for authentication, authorization, and data protection."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm an aspiring cybersecurity student with a passion for network security and web development. 
            As a full-stack developer, I specialize in Laravel with Spatie packages for secure authentication and authorization systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertise.map((item, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-gray-300 border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-colors duration-300 px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
