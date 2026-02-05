import { Phone, Cloud } from 'lucide-react';
import { LinkedInLogo } from '@/components/Logos';
import googleScholar from '@/assets/images/PublicationsImages/google.png';
import gmail from '@/assets/contactSlider/gmail.png';
import orcid from '@/assets/contactSlider/orcid.png';
import researchgate from '@/assets/contactSlider/researchgate.png';

interface ContactItem {
  icon: string | React.ElementType;
  label: string;
  value: string;
  href: string;
  color: string;
}

const contactItems: ContactItem[] = [
  {
    icon: LinkedInLogo,
    label: 'LinkedIn',
    value: 'Ram Kurapati',
    href: 'https://www.linkedin.com/in/ram-kurapati-uapb/',
    color: '', // Original colors are in the SVG
  },
   {
    icon: googleScholar,
    label: 'Google Scholar',
    value: 'Ram Kurapati',
    href: 'https://scholar.google.com/citations?hl=en&user=mIDd0AoAAAAJ',
    color: '', // Original colors are in the SVG
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (870) 555-0123',
    href: 'tel:+18705550123',
    color: 'text-green-500',
  },
  {
    icon: gmail,
    label: 'Gmail',
    value: 'kurapatirambabu5@gmail.com',
    href: 'mailto:kurapatirambabu5@gmail.com',
    color: '', // Original colors are in the SVG
  },
  {
    icon: Cloud,
    label: 'iCloud',
    value: 'ram.kurapati@icloud.com',
    href: 'mailto:ram.kurapati@icloud.com',
    color: 'text-blue-400',
  },
  {
    icon: orcid,
    label: 'ORCID',
    value: '0009-0000-7979-6563',
    href: 'https://orcid.org/my-orcid?orcid=0009-0000-7979-6563',
    color: 'text-green-600',
  },
  {
    icon: researchgate,
    label: 'ResearchGate',
    value: 'Ram Kurapati',
    href: 'https://www.researchgate.net/profile/Ram-Kurapati',
    color: 'text-white',
  },
];

export function ContactSlider() {
  return (
    <section className="py-12 relative overflow-hidden bg-black/20 border-t border-white/5">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap py-4">
          {contactItems.map((item, index) => {
            const { icon: Icon } = item;
            return (
              <a
                key={`a-${index}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-10 py-4 mx-4 glass-card border-primary/20 hover:border-primary/50 transition-all group/item min-w-[250px]"
              >
                <div className={`p-3 rounded-full bg-white/5 ${item.color} group-hover/item:bg-white/10 transition-colors`}>
                  {typeof Icon === 'string' ? (
                    <img src={Icon} alt={item.label} className="w-10 h-10 object-contain" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{item.label}</span>
                  <span className="text-sm font-medium text-foreground/90">{item.value}</span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap py-4">
          {contactItems.map((item, index) => {
            const { icon: Icon } = item;
            return (
              <a
                key={`b-${index}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-10 py-4 mx-4 glass-card border-primary/20 hover:border-primary/50 transition-all group/item min-w-[250px]"
              >
                <div className={`p-3 rounded-full bg-white/5 ${item.color} group-hover/item:bg-white/10 transition-colors`}>
                  {typeof Icon === 'string' ? (
                    <img src={Icon} alt={item.label} className="w-10 h-10 object-contain" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{item.label}</span>
                  <span className="text-sm font-medium text-foreground/90">{item.value}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
