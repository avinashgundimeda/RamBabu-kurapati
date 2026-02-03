import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ram from '@/assets/images/ram.png';
import fishIcon from '@/assets/images/fish.svg';
import virusIcon from '@/assets/images/virus.svg';
import crabIcon from '@/assets/images/crab.svg';

import resume from '@/assets/images/pdf/Ram_Kurapati_Resume.docx?url';

const roles = [
  'M.S. Aquaculture',
  'Graduate Research Assistant',
  'UAPB',
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      timeout = setInterval(() => {
        if (charIndex <= role.length) {
          setDisplayText(role.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(timeout);
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 80);
    } else {
      timeout = setInterval(() => {
        if (charIndex >= 0) {
          setDisplayText(role.slice(0, charIndex));
          charIndex--;
        } else {
          clearInterval(timeout);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }, 40);
    }

    return () => clearInterval(timeout);
  }, [currentRole, isTyping]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase animate-fade-in-up">
              Welcome to my portfolio
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Hi, I'm{' '}
              <span className="neon-text">Ram Kurapati</span>
            </h1>

            <div className="h-16 sm:h-20 flex items-center justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                {displayText}
                <span className="inline-block w-0.5 h-8 ml-1 bg-primary animate-pulse" />
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              A translational aquatic disease scientist combining histopathology, microbiology, molecular diagnostics, and AI-driven analytics in nutrition and pathogen-challenge models.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button
        onClick={scrollToProjects}
                className="neon-button"
              >
                Explore My Work
              </button>
              <a
                href={resume}
                download="Ram_Kurapati_Resume.docx"
                className="px-8 py-3 rounded-lg border border-muted-foreground/30 text-foreground font-semibold
                  hover:border-primary hover:text-primary transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative animate-float">
              <div className="profile-glow w-64 h-64 sm:w-80 sm:h-80">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  {/* Profile placeholder - replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img src={ram} alt="ram" />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -right-4 w-20 h-20 flex items-center justify-center animate-pulse-glow">
                <img src={crabIcon} alt="Crab" className="w-12 h-12 object-contain" />
              </div>
              <div className="absolute top-1/2 -left-12 w-16 h-16  flex items-center justify-center animate-pulse-glow" style={{ animationDelay: '2s' }}>
                 <img src={virusIcon} alt="Virus" className="w-10 h-10 object-contain" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 flex items-center justify-center animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🦐</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
