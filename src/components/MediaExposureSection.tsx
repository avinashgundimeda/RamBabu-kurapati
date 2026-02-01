import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileImage, ExternalLink, X, Newspaper } from 'lucide-react';
import hackathon from '@/assets/images/TableImages/hackathon.jpeg';
import seminar from '@/assets/images/TableImages/seminar.jpeg';
import teamMembers from '@/assets/images/TableImages/team.jpeg';
import reviewteam from '@/assets/images/TableImages/reviewteam.jpeg';
import projectreview from '@/assets/images/TableImages/projectreview.jpeg';


const mediaExposure = [
  {
    title: 'Breakthrough in Shrimp Diagnostics',
    link: '#',
    photo: hackathon,
    details: 'Featured in Global Aquaculture Advocate',
    description: 'An in-depth interview discussing the recent breakthrough in rapid diagnostic tools for shrimp aquaculture. This article highlights the potential impact on reducing disease outbreaks and improving yield stability for farmers across Southeast Asia.',
    date: 'June 12, 2024'
  },
  {
    title: 'Interview: The Future of AI in Farming',
    link: '#',
    photo: seminar,
    details: 'Podcast episode with AquaTech Weekly',
    description: 'A 45-minute podcast conversation exploring the role of Artificial Intelligence in modern aquaculture. Topics include predictive analytics for water quality, automated feeding systems, and the future of autonomous farming operations.',
    date: 'April 05, 2024'
  },
  {
    title: 'Top 30 Under 30 in Marine Science',
    link: '#',
    photo: teamMembers,
    details: 'Recognized for impactful contributions',
    description: 'Selected as one of the "Top 30 Under 30" in the field of Marine Science. This recognition celebrates young researchers who have made significant contributions to sustainability and innovation in the blue economy.',
    date: 'January 20, 2024'
  },
  {
    title: 'Top 30 Under 30 in Marine Science',
    link: '#',
    photo: reviewteam,
    details: 'Recognized for impactful contributions',
    description: 'Selected as one of the "Top 30 Under 30" in the field of Marine Science. This recognition celebrates young researchers who have made significant contributions to sustainability and innovation in the blue economy.',
    date: 'January 20, 2024'
  },
  {
    title: 'Breakthrough in Shrimp Diagnostics',
    link: '#',
    photo: projectreview,
    details: 'Featured in Global Aquaculture Advocate',
    description: 'An in-depth interview discussing the recent breakthrough in rapid diagnostic tools for shrimp aquaculture. This article highlights the potential impact on reducing disease outbreaks and improving yield stability for farmers across Southeast Asia.',
    date: 'June 12, 2024'
  },
];

interface MediaItem {
  title: string;
  link: string;
  photo: string;
  details: string;
  description: string;
  date: string;
}

export function MediaExposureSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <section id="media" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Media Exposure</h2>
        </div>

        <div className={`mt-12 glass-card overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-secondary/10">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Link</th>
                  <th className="px-4 py-3">Photo</th>
                  <th className="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody>
                {mediaExposure.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-primary/10 hover:bg-primary/5 transition-colors group cursor-pointer"
                    onClick={() => setSelectedMedia(item)}
                  >
                    <td className="px-4 py-4 font-medium text-foreground">
                       {item.title}
                       <span className="block text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                          Click for more details
                       </span>
                    </td>
                    <td className="px-4 py-4">
                      <a 
                        href={item.link} 
                        className="text-primary hover:text-accent transition-colors flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </td>
                    <td className="px-4 py-4">
                       <div className="w-12 h-12 rounded overflow-hidden bg-secondary/30 shadow-sm group-hover:shadow-md transition-all">
                          <img src={item.photo} alt="Media" className="w-full h-full object-cover" />
                       </div>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Media Overlay */}
      {selectedMedia && (
        <MediaOverlay item={selectedMedia} onClose={() => setSelectedMedia(null)} />
      )}
    </section>
  );
}

function MediaOverlay({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="glass-card max-w-4xl w-full p-6 sm:p-8 relative neon-border animate-in zoom-in-95 duration-300 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 z-10 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-8">
           {/* Detailed Large Image */}
           <div className="w-full md:w-1/2 flex-shrink-0">
             <div className="aspect-video w-full rounded-lg overflow-hidden bg-secondary/20 border border-primary/20 shadow-lg relative group">
                <img src={item.photo} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                   <p className="text-white/80 text-sm font-light italic">{item.date}</p>
                </div>
             </div>
           </div>

           {/* Content Details */}
           <div className="w-full md:w-1/2 flex flex-col">
              <div className="mb-6">
                 <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight flex items-start gap-3">
                    <Newspaper className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    {item.title}
                 </h3>
                 <p className="text-primary font-medium">{item.details}</p>
              </div>

              <div className="space-y-4 flex-grow">
                 <div>
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Description</h4>
                    <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                       {item.description}
                    </p>
                 </div>
              </div>

              <div className="pt-8 mt-auto">
                 <a 
                   href={item.link}
                   target="_blank"
                   rel="noreferrer" 
                   className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-full transition-all group w-full sm:w-auto justify-center"
                 >
                    <span>Read Full Article</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
