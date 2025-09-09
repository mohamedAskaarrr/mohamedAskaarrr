"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Aspiring Network & Cybersecurity Student";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
          {/* Profile Photo with Animated Background */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-700 animate-spin-slow"></div>
              
              {/* Profile Photo */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105 shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Mohamed Askar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute top-1/4 right-0 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
                <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Mohamed <span className="text-blue-400">Askar</span>
          </h1>
          
          {/* Typing Animation */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              Network Security
            </Badge>
            <Badge variant="outline" className="text-green-400 border-green-400">
              Penetration Testing
            </Badge>
            <Badge variant="outline" className="text-purple-400 border-purple-400">
              Full Stack Developer
            </Badge>
            <Badge variant="outline" className="text-orange-400 border-orange-400">
              Laravel & Spatie
            </Badge>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Aspiring cybersecurity student passionate about network security and penetration testing. 
            Full-stack developer with expertise in Laravel and Spatie for secure authentication and authorization systems.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Mohamed_Askar_ATS_CV_Aligned.pdf';
                link.download = 'Mohamed_Askar_CV.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/mohamedAskaarrr', '_blank')}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Github className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/in/mohamed-askar-02777b283/', '_blank')}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
