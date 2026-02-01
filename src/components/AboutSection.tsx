import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Microscope, Award, Globe } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Ph.D. in Aquaculture',
    description: 'Specialized in shrimp disease management and molecular diagnostics',
  },
  {
    icon: Microscope,
    title: 'Research Focus',
    description: 'AHPND, probiotics, antimicrobial peptides, and microbiome analysis',
  },
  {
    icon: Award,
    title: 'Publications',
    description: 'Multiple peer-reviewed papers and conference presentations',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Contributing to sustainable aquaculture practices worldwide',
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left - Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated aquaculture research scientist with a passion for solving 
                critical challenges in shrimp disease management. My research integrates 
                molecular biology, microbiology, and emerging AI technologies to develop 
                innovative solutions for the aquaculture industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                With expertise in AHPND pathogenesis, probiotic development, and 
                antimicrobial testing, I work at the intersection of fundamental research 
                and practical applications. My goal is to contribute to sustainable 
                aquaculture practices that benefit both producers and the environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Beyond the laboratory, I am committed to knowledge sharing through 
                publications, conference presentations, and collaborative research 
                initiatives across multiple countries.
              </p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover:neon-border transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
