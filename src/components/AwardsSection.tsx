import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, Medal, Star, Award, X } from 'lucide-react';
import hackathon from '@/assets/images/TableImages/hackathon.jpeg';
import seminar from '@/assets/images/TableImages/seminar.jpeg';
import teamMembers from '@/assets/images/TableImages/team.jpeg';
import reviewteam from '@/assets/images/TableImages/reviewteam.jpeg';
import projectreview from '@/assets/images/TableImages/projectreview.jpeg';
import firstAward from '@/assets/images/TableImages/firstAward.jpeg';
import secondAward from '@/assets/images/TableImages/secondAward.jpg';


interface AwardItem {
  icon: typeof Trophy;
  title: string;
  organization: string;
  year: string;
  description: string;
  fullDetails: string;
  criteria: string;
  prize: string;
  image: string;
}

const awards: AwardItem[] = [
  {
    icon: Trophy,
    title: '3rd Place – Arkansas AI in Agriculture Hackathon, 2025',
    organization: 'University of Arkansas, Fayetteville',
    year: 'September 13–14, 2025',
    description: 'Awarded for developing a Python-based data extraction and analysis pipeline for corn breeding lines, enabling efficient integration and interpretation of genetic line datasets.',
    fullDetails: 'Secured 3rd place at the Arkansas AI in Agriculture Hackathon 2025 for designing and implementing a Python-based automated data extraction and analysis pipeline for large-scale corn breeding line datasets.The solution focused on collecting heterogeneous genetic and phenotypic data from multiple sources, cleaning and standardizing records, and building a structured pipeline to enable fast integration, filtering and comparative analysis of breeding lines. The workflow significantly reduced manual data handling and improved the reliability of downstream analysis for plant breeding research.',
    criteria: 'Selected from over 200 oral presentations based on scientific merit, presentation quality, and potential industry impact.',
    prize: 'Cash award of $2,000 and invitation to keynote at next year\'s regional conference.',
    image: firstAward,
  },
  {
    icon: Medal,
    title: '2nd Place – Professional Agriculture Workers conference, 2025',
    organization: '83rd Annual Professional Agricultural Workers Conference (PAWC), Tuskegee University - Renaissance Montgomery Hotel & Spa, Montgomery, Alabama, USA ',
    year: 'November 16–18, 2025',
    description: 'Received 2nd place in the GSD Student Graduate Oral Presentation Competition for presenting my research titled “Optimizing Artemia Life Stage Utilization for Improved Performance of Litopenaeus vannamei Post-Larvae.',
    fullDetails: 'Received 2nd Place in the GSD Student Graduate Oral Presentation Competition at the Professional Agriculture Workers Conference 2025 for presenting my research titled “Optimizing Artemia Life Stage Utilization for Improved Performance of Litopenaeus vannamei Post-Larvae.”The presentation focused on evaluating the effectiveness of different Artemia life stages as live feed and their impact on the growth, survival and overall performance of Litopenaeus vannamei post-larvae. The study emphasized optimizing feeding strategies to improve nutrient utilization, larval quality and hatchery production efficiency.The research demonstrated how appropriate selection and timing of Artemia life stage usage can enhance early shrimp development, reduce feed-related losses and support more consistent post-larval performance in commercial aquaculture systems.',
    criteria: 'Clarity of presentation, Data interpretation and Q&A performance',
    prize: '🥈 Second-place certificate and official recognition at the conference.',
    image: secondAward,
  },
];

export function AwardsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  return (
    <section id="awards" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Awards & Honors</h2>
        </div>

        <div className={`mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-4 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-secondary/10">
                  <tr>
                    <th className="px-4 py-3">S.No</th>
                    <th className="px-4 py-3">Award Title</th>
                    <th className="px-4 py-3">Organization</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {awards.map((award, idx) => (
                    <tr 
                      key={idx} 
                      className="border-b border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer group"
                      onClick={() => setSelectedAward(award)}
                    >
                      <td className="px-4 py-4">{idx + 1}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <award.icon className="w-5 h-5 text-accent flex-shrink-0" />
                          <div>
                             <span className="font-medium text-foreground group-hover:text-primary transition-colors">{award.title}</span>
                             <span className="block text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                               Click for more details
                             </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">{award.organization}</td>
                      <td className="px-4 py-4 text-primary font-medium">{award.year}</td>
                      <td className="px-4 py-4">
                         {/* Reduced image size as requested */}
                         <div className="w-12 h-12 rounded-md overflow-hidden bg-secondary/30 shadow-sm group-hover:shadow-md transition-all">
                            <img src={award.image} alt="Award" className="w-full h-full object-cover" />
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Award Detail Overlay */}
      {selectedAward && (
        <AwardOverlay item={selectedAward} onClose={() => setSelectedAward(null)} />
      )}
    </section>
  );
}

function AwardOverlay({ item, onClose }: { item: AwardItem; onClose: () => void }) {
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
             <div className="aspect-video md:aspect-[4/3] w-full rounded-lg overflow-hidden bg-secondary/20 border border-primary/20 shadow-lg relative group">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                   <div className="flex items-center gap-2 text-white">
                      <item.icon className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">{item.organization}</span>
                   </div>
                </div>
             </div>
           </div>

           {/* Content Details */}
           <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent">
                   {item.year}
                 </span>
                 <span className="text-sm text-muted-foreground">Certified & Recognized</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                {item.title}
              </h3>

              <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                   <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Detailed Impact</h4>
                   <p className="text-muted-foreground leading-relaxed text-sm">
                     {item.fullDetails}
                   </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/5 border border-primary/10">
                     <h5 className="font-semibold text-foreground mb-1">Criteria</h5>
                     <p className="text-xs text-muted-foreground">{item.criteria}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/5 border border-primary/10">
                     <h5 className="font-semibold text-foreground mb-1">Prize</h5>
                     <p className="text-xs text-muted-foreground">{item.prize}</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
