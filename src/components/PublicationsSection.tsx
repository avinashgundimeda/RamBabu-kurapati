import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BookOpen, X, ExternalLink, Link as LinkIcon } from 'lucide-react';

import ResearchImage from '@/assets/images/PublicationsImages/Research.png';
import ReviewImage1 from '@/assets/images/PublicationsImages/Review1.png';
import ReviewImage2 from '@/assets/images/PublicationsImages/Review2.png';




interface Publication { 
  title: string;
  impact: string;
  publicLink: string;
  doiLink: string;
  image: string;
  description: string;
  type: 'research' | 'review';
}

const publications: Publication[] = [
  {
    title: 'Effect of Artemia–Microparticle Co-Feeding on Litopenaeus vannamei Rearing',
    impact: '0.5',
    publicLink: 'https://doi.org/10.33552/GJNFS.2025.05.000618',
    doiLink: 'https://doi.org/10.33552/GJNFS.2025.05.000618',
    image: ResearchImage,
    description: 'This study evaluates the effect of increasing dietary levels of Artemia franciscana co-fed with formulated microparticle diets on the growth, survival and overall performance of Litopenaeus vannamei during early rearing. The aim is to identify an efficient feeding strategy that improves larval nutrition while reducing dependence on live feed alone.',
    type: 'research',

  },
  {
    title : 'Artemia Enrichment and Fatty Acid Improvement in Aquaculture',
    impact : '11.3',
    publicLink : 'https://doi.org/10.1111/raq.70080',
    doiLink : 'https://doi.org/10.1111/raq.70080',
    image : ReviewImage1,
    description: 'This review critically examines modern Artemia enrichment strategies with a strong focus on improving fatty acid profiles, especially essential fatty acids (EPA, DHA and ARA), for aquaculture species. It highlights how enriched Artemia franciscana, when co-fed with formulated microparticle diets, enhances nutrient delivery, feed efficiency and larval performance in Litopenaeus vannamei. The study also discusses enrichment media, feeding protocols and their influence on growth, survival, stress resistance and larval quality. Overall, the review provides practical guidelines for hatchery managers to optimize live-feed enrichment and reduce nutritional limitations in early-stage shrimp and fish culture.',
    type : 'review',
  },
  {
    title : 'Viral Disease Histopathology in Finfish Aquaculture',
    impact : '11.3',
    publicLink : 'https://doi.org/10.1111/raq.70080',
    doiLink : 'https://doi.org/10.1111/raq.70080',
    image : ReviewImage2,  
    description: 'This review summarizes organ-specific histopathological changes caused by major viral diseases in cultured finfish, focusing on lesions observed in the gills, liver, kidney, spleen and nervous tissues. It explains how characteristic cellular and tissue-level alterations support early and accurate diagnosis of viral infections in aquaculture systems. The study aligns diagnostic interpretation and reporting practices with guidelines provided by the World Organisation for Animal Health, strengthening disease surveillance, confirmation procedures and biosecurity decision-making in hatcheries and grow-out farms. The review also highlights the role of histopathology as a complementary tool to molecular diagnostics for improving outbreak management and reducing economic losses in finfish aquaculture.',
    type : 'review',
  },
];

export function PublicationsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  const researchPubs = publications.filter(p => p.type === 'research');
  const reviewPubs = publications.filter(p => p.type === 'review');

  const PublicationTable = ({ title, items }: { title: string, items: Publication[] }) => (
    <div className="glass-card p-4 overflow-hidden flex flex-col h-full mx-20">
      <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5" /> {title}
      </h4>
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-secondary/10">
            <tr>
              <th className="px-4 py-3 w-[5%]">S.No</th>
              <th className="px-4 py-3 w-[40%]">Title</th>
              <th className="px-4 py-3 w-[15%]">Impact Factor</th>
              <th className="px-4 py-3 w-[10%]">Link</th>
              <th className="px-4 py-3 w-[10%]">DOI</th>
              <th className="px-4 py-3 w-[20%]">Image</th>
            </tr>
          </thead>
          <tbody>
            {items.map((pub, idx) => (
              <tr 
                key={idx} 
                className="border-b border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer group"
                onClick={() => setSelectedPub(pub)}
              >
                <td className="px-4 py-4">{idx + 1}</td>
                <td className="px-4 py-4 font-medium text-foreground">
                  {pub.title}
                  <span className="block text-xs text-primary opacity-100 mt-1 ml-1">
                    More Info
                  </span>
                </td>
                <td className="px-4 py-4">{pub.impact}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center text-primary hover:text-accent transition-colors" role="button">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center text-primary hover:text-accent transition-colors" role="button">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                </td>
                <td className="px-4 py-4">
                   <div className="w-12 h-12 rounded-md overflow-hidden bg-secondary/30 shadow-sm group-hover:shadow-md transition-all">
                      <img src={pub.image} alt="Pub" className="w-full h-full object-cover" />
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section id="publications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <h2 className="section-title neon-text text-center mb-16 mx-auto ml-20">Publications</h2>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <div className="grid grid-cols-1 gap-8">
             <PublicationTable title="Research Articles" items={researchPubs} />
             <PublicationTable title="Review Articles" items={reviewPubs} />
           </div>
        </div>
      </div>
      
      {selectedPub && (
        <PublicationOverlay item={selectedPub} 
        
        onClose={() => setSelectedPub(null)} />
      )}
    </section>
  );
}

function PublicationOverlay({ item, onClose }: { item: Publication; onClose: () => void }) {
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
           <div className="w-full md:w-1/2 flex-shrink-0">
             <div className="aspect-video md:aspect-[4/3] w-full rounded-lg overflow-hidden bg-secondary/20 border border-primary/20 shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
             </div>
           </div>

           <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="space-y-1 mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-primary/20 text-primary capitalize inline-block">
                  {item.type}
                </span>
                <span className="ml-2 text-sm text-muted-foreground font-medium">
                  Impact Factor: <span className="text-foreground">{item.impact}</span>
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                {item.title}
              </h3>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                   {item.description}
                </p>
                
                <div className="flex flex-wrap gap-4 ">
                  <a 
                    href={item.publicLink} 
                    className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    <ExternalLink size={18} />
                    View Article
                  </a>
                  <a 
                    href={item.doiLink} 
                    className="flex items-center gap-2 px-6 py-3 rounded-md bg-secondary/10 hover:bg-secondary/20 text-foreground border border-secondary/20 hover:border-secondary/40 font-semibold transition-all"
                  >
                    <LinkIcon size={18} />
                    DOI Link
                  </a>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
