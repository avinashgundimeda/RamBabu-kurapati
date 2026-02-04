import { Mail, Linkedin, BookOpen, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border/30 relative overflow-hidden bg-secondary/5">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold neon-text font-orbitron tracking-wider">
              Ram Kurapti
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Aquaculture Research Scientist
            </p>
          </div>

          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="mailto:kurapatirambabu5@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ram-kurapati-uapb/" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://scholar.google.com/citations?hl=en&user=mIDd0AoAAAAJ" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Google Scholar"
              >
                <BookOpen size={18} />
              </a>
            </div>

            <div className="h-4 w-px bg-border/50 hidden sm:block" />

            {/* Copyright */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© {currentYear} All Rights Reserved</span>
            </div>
            
            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 transition-colors ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Decorative Glow Line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </footer>
  );
}
