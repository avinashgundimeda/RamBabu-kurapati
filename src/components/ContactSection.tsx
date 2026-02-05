import { useScrollReveal } from '@/hooks/useScrollReveal';
import { User, FileText, MapPin, Send } from 'lucide-react';
import { LinkedInLogo, GmailLogo, OrcidLogo } from '@/components/Logos';

import resume from '@/assets/images/pdf/Ram_Kurapati_Resume.docx?url';
import googleScholar from '@/assets/images/PublicationsImages/google.png';
import gmail from '@/assets/contactSlider/gmail.png';
import orcid from '@/assets/contactSlider/orcid.png';
import download from '@/assets/contactSlider/download.png';

const contactLinks = [
  {
    icon:   gmail,
    label: 'Email',
    value: 'kurapatirambabu5@gmail.com',
    href: 'mailto:researcher@university.edu',
  },
  {
    icon: LinkedInLogo,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ram-kurapati-uapb',
    href: 'https://www.linkedin.com/in/ram-kurapati-uapb/',
  },
  {
    icon: googleScholar,
    label: 'Google Scholar',
    value: 'View Publications',
    href: 'https://scholar.google.com/citations?hl=en&user=mIDd0AoAAAAJ',
  },
  {
    icon: orcid,
    label: 'ORCID',
    value: '0009-0000-7979-6563',
    href: 'https://orcid.org/0009-0000-7979-6563',
  },
  {
    icon: download,
    label: 'Download CV',
    value: 'Curriculum Vitae (DOCX)',
    href: resume,
    download: true,
  },
];

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in discussing research collaborations, consulting 
                opportunities, or speaking engagements. Feel free to reach out through 
                any of the channels below.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    download={link.download}
                    className="contact-link"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="contact-link-icon">
                      {typeof link.icon === 'string' ? (
                        <img src={link.icon} alt={link.label} className="w-5 h-5 object-contain" />
                      ) : (
                        <link.icon className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="text-foreground font-medium">University of Arkansas at Pine Bluff, USA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass-card p-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="neon-button w-full flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
