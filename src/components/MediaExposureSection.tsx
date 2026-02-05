import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileImage, ExternalLink, X, Newspaper } from 'lucide-react';
import hackathon from '@/assets/images/TableImages/hackathon.jpeg';
import seminar from '@/assets/images/TableImages/seminar.jpeg';
import teamMembers from '@/assets/images/TableImages/team.jpeg';
import reviewteam from '@/assets/images/TableImages/reviewteam.jpeg';
import projectreview from '@/assets/images/TableImages/projectreview.jpeg';
import first from '@/assets/images/MediaImages/1st.jpeg';
import second from '@/assets/images/MediaImages/2nd.jpeg';
import third from '@/assets/images/MediaImages/3rd.jpeg';
import fourth from '@/assets/images/MediaImages/4th.jpeg';
import fifth from '@/assets/images/MediaImages/5th.jpeg';



const mediaExposure = [
  {
    title: 'UAPB Studying Sustainable Aqua-based Live Food Strategies for the Poultry Industry',
    link: 'https://uapbnews.wordpress.com/2025/03/26/uapb-studying-sustainable-aqua-based-live-food-strategies-for-poultry-industry/',
    photo: first,
    details: 'Cultivating Artemia for sustainable poultry diets',
    description: 'The University of Arkansas at Pine Bluff (UAPB) is conducting research into using Artemia franciscana (brine shrimp) as a sustainable, high-protein live ingredient for both aquaculture and poultry feeds. Traditionally essential in aquaculture as a digestible live feed rich in protein, essential amino acids and fatty acids, brine shrimp are being evaluated for broader application in poultry nutrition to support growth and egg production while promoting sustainability. As part of this initiative led by Dr. Yathish Ramena and his team at the School of Agriculture, Fisheries and Human Sciences, UAPB is establishing Artemia biomass culture systems to ensure continuous supply and exploring their integration into poultry diets. The project aligns with UAPB’s goals of advancing agricultural feed strategies, offering cost-effective and innovative nutrition solutions, and providing hands-on research opportunities for students',
    date: 'March 26th 2025'
  },
  {
    title: 'UAPB Partners with Infini-SEA to Advance Research in Shrimp, Marine Species',
    link: 'https://uapbnews.wordpress.com/2025/07/16/uapb-partners-with-infini-sea-to-advance-research-in-shrimp-marine-species/',
    photo: second,
    details: 'UAPB and Infini-SEA collaborate on sustainable shrimp research',
    description: 'The University of Arkansas at Pine Bluff (UAPB) has entered a research partnership with Infini-SEA LLC, a U.S. shrimp breeding company, to advance studies in shrimp and other marine species. The collaboration focuses on exploring bioactive compounds, alternative feed ingredients, genetic research and artificial intelligence (AI) integration to promote sustainability and productivity in shrimp aquaculture. Infini-SEA brings expertise in producing specific pathogen-free (Penaeus vannamei) broodstock and applying advanced genomic selection techniques to improve growth, disease resistance and performance. Through this initiative, UAPB researchers and students will gain hands-on experience with selective breeding program management, phenotypic data analysis and AI-enabled monitoring, aiming to support more efficient, resilient and sustainable shrimp production methods with potential global industry impact.',
    date: 'July 16th 2025'
  },
  {
    title: 'Arkansans Gain New Insights at Agriculture Farm Field Day in Lonoke.',
    link: 'https://uapbnews.wordpress.com/2025/10/01/arkansans-gain-new-insights-at-agriculture-farm-field-day-in-lonoke/',
    photo: third,
    details: 'UAPB student excels in AI agriculture innovation.',
    description: 'A graduate student from the University of Arkansas at Pine Bluff (UAPB) was recognized as one of the top winners at the AI in Agriculture Hackathon, highlighting the university’s strength in combining agricultural science with cutting-edge technology. The competition challenged participants to create innovative solutions using artificial intelligence to solve real-world agricultural problems, such as data analysis, predictive modeling and automation. The UAPB student’s project demonstrated strong technical skill and practical application, earning distinction among peers from other institutions. This achievement underscores UAPB’s commitment to hands-on student research, AI integration in agriculture, and preparing graduates for emerging careers at the intersection of technology and farming. In addition, the hackathon experience provided the student with hands-on exposure to real agricultural datasets, collaborative problem-solving with multidisciplinary teams and mentorship from industry and academic experts. The project emphasized scalable AI pipelines, data preprocessing, and model evaluation techniques suitable for real farm and research environments. This recognition also strengthens UAPB’s visibility in national-level AI-driven agriculture initiatives and encourages more students to engage in applied, technology-focused agricultural research.',
    date: 'October 1st 2025'
  },
  {
    title: 'UAPB Graduate Student Among Top Winners at AI in Agriculture Hackathon',
    link: 'https://uapbnews.wordpress.com/2025/10/22/uapb-graduate-student-among-top-winners-at-ai-in-agriculture-hackathon/',
    photo: fourth,
    details: 'UAPB student excels in agricultural AI competition.',
    description: 'A graduate student from the University of Arkansas at Pine Bluff (UAPB) was named among the top winners at the AI in Agriculture Hackathon 2025, showcasing UAPB’s commitment to integrating artificial intelligence with agricultural research and innovation. The student’s project focused on developing AI-driven analytical tools to address real-world agricultural challenges such as predictive modeling, data interpretation and decision support systems. Through intensive collaboration with peers, the student demonstrated strong technical proficiency in Python programming, machine learning techniques and scalable data processing workflows applicable to farm-level problems and research datasets. The achievement highlights the university’s efforts to prepare students for emerging careers at the intersection of AI and agriculture while strengthening UAPB’s presence in national technology-driven agricultural initiatives. Attendees and judges commended the project for its practical impact, interdisciplinary approach and potential for future field applications, reinforcing the role of AI as a transformative force in modern agriculture.',
    date: 'October 22, 2025'
  },
  {
    title: 'UA team places 3rd in AI Ag Hackathon',
    link: 'https://pressreader.com/article/282054808269576',
    photo: fifth,
    details: 'UA team excels in agricultural AI hackathon.',
    description: 'The University of Arkansas (UA) team earned 3rd place in the AI in Agriculture Hackathon 2025, a competitive event where student teams developed artificial intelligence-based solutions to real problems in the agriculture sector. Participants were tasked with using machine learning, data analysis and innovative coding to create tools that could improve efficiency, productivity or sustainability for farmers and agribusinesses. The UA team’s project demonstrated strong technical ability, creative problem solving and practical application of AI to farm-related datasets, earning recognition from judges and peers alike. This achievement highlights UA’s emphasis on technology-driven agricultural education, preparing students for careers that bridge computing and agriscience and strengthening the university’s presence in national innovation challenges.',
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
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Link</th>
                  <th className="px-4 py-3">Photo</th>
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
                          Click for more info
                       </span>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground text-sm whitespace-nowrap">
                       {item.date}
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
