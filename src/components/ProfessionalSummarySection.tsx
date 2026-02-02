import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, Code, BookOpen, X, ExternalLink, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';
// import crabIcon from '@/assets/images/crab.svg';
import hackathon from '@/assets/images/TableImages/hackathon.jpeg';
import seminar from '@/assets/images/TableImages/seminar.jpeg';
import teamMembers from '@/assets/images/TableImages/team.jpeg';
import reviewteam from '@/assets/images/TableImages/reviewteam.jpeg';
import projectreview from '@/assets/images/TableImages/projectreview.jpeg';

const experience = [
  {
    title: 'Graduate Research Assistant – UAPB',
    organization: 'Driving data-driven shrimp health and nutrition research using advanced laboratory and AI techniques.',
    period: 'August 2024 - Present',
    description: 'Conduct shrimp nutrition and disease-challenge trials focusing on larval development, immune responses, and survival outcomes.Lead Artemia life-stage optimization studies for Litopenaeus vannamei , resulting in improved post-larval performance.',

    details: [
      'Conduct shrimp nutrition and disease-challenge trials.',
      'Conduct histology (H&E), microbial culture, antimicrobial assays, DNA/RNA extraction, PCR/qPCR, gel electrophoresis, 16S rRNA gut microbiome analysis, water quality monitoring, biological sampling, growth performance analysis, and post-larval health assessments.',
      'Analyze datasets in R and SAS; develop Python CNN/YOLO workflows.',
      'Present research findings at scientific conferences, seminars, and departmental symposia.',
      'Contribute to manuscript preparation, data interpretation, and publication in peer-reviewed journals.'

    ],
    skills: [
      'Shrimp Nutrition & Disease Trials	98%',
      'Histology	90%',
      'Microbiology & Molecular Diagnostics	82%',
      'AI-driven computer-vision pipelines	65%',
      'Statistical Analysis  (R, SAS 9.4, and Excel)	60%',
      'Professional competency – No changes needed'
    ]
  },
  // {
  //   title: 'Postdoctoral Researcher',
  //   organization: 'Marine Sciences Laboratory',
  //   period: '2023-2025',
  //   description: 'Conducted research on probiotic interventions and antimicrobial peptide efficacy in aquaculture.',
  //   details: [
  //     'Evaluated the efficacy of novel probiotic strains in enhancing shrimp immune response and growth performance.',
  //     'Characterized antimicrobial peptides (AMPs) from marine bacteria and assessed their pathogen-inhibitory potential.',
  //     'Managed large-scale aquaculture trials, overseeing water quality parameters and statistical data analysis.',
  //     'Mentored junior researchers and graduate students in laboratory techniques and experimental design.'
  //   ]
  // },
  // {
  //   title: 'Ph.D. Candidate',
  //   organization: 'University of Aquatic Sciences',
  //   period: '2022 - 2023',
  //   description: 'Dissertation on molecular mechanisms of AHPND infection in Pacific white shrimp.',
  //   details: [
  //     'Conducted in-depth research on the virulence factors of Vibrio parahaemolyticus causing AHPND.',
  //     'Utilized transcriptomics to identify key host immune pathways activated during infection.',
  //     'Presented research findings at 3 major international conferences on aquatic animal health.',
  //     'Published 4 peer-reviewed papers in high-impact aquaculture journals.'
  //   ]
  // },
];

// const technicalSkills = [
//   { category: 'Molecular Biology', skills: ['PCR/qPCR', 'Gene Cloning', 'CRISPR', 'Sequencing'] },
//   // { category: 'Microbiology', skills: ['Bacterial Culture', 'Antimicrobial Testing', 'Biofilm Analysis'] },
//   // { category: 'Bioinformatics', skills: ['Python', 'R', 'Metagenomics', 'Phylogenetic Analysis'] },
//   // { category: 'AI/ML', skills: ['TensorFlow', 'Image Classification', 'Predictive Modeling'] },
// ];

interface Publication {
  title: string;
  impact: string;
  publicLink: string;
  doiLink: string;
  image: string;
  type: 'research' | 'review';
}

const publications: Publication[] = [
  {
    title: 'Novel endolysin candidates for AHPND prevention in Penaeus vannamei',
    impact: 'High',
    publicLink: '#',
    doiLink: '#',
    image: hackathon,
    type: 'research',
  },
  {
    title: 'AI-based early detection of white spot syndrome in shrimp farms',
    impact: 'Medium',
    publicLink: '#',
    doiLink: '#',
    image: seminar,
    type: 'research',
  },
  {
    title: 'Microbiome dynamics during AHPND infection progression',
    impact: 'High',
    publicLink: '#',
    doiLink: '#',
    image: teamMembers,
    type: 'research',
  },
  {
    title: 'A comprehensive review of probiotics in shrimp aquaculture',
    impact: 'Very High',
    publicLink: '#',
    doiLink: '#',
    image: reviewteam,
    type: 'review',
  },
  {
    title: 'Antimicrobial peptides in aquaculture: Current status and future perspectives',
    impact: 'High',
    publicLink: '#home',
    doiLink: '#',
    image: projectreview,
    type: 'review',
  },
];

export function ProfessionalSummarySection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedExp, setSelectedExp] = useState<typeof experience[0] | null>(null);
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  const researchPubs = publications.filter(p => p.type === 'research');
  const reviewPubs = publications.filter(p => p.type === 'review');

  const PublicationTable = ({ title, items }: { title: string, items: Publication[] }) => (
    <div className="glass-card p-4 overflow-hidden flex flex-col h-full">
      <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5" /> {title}
      </h4>
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-secondary/10">
            <tr>
              <th className="px-3 py-2">S.No</th>
              <th className="px-3 py-2">Title</th>
              <th className="px-3 py-2">Impact</th>
              <th className="px-3 py-2">Link</th>
              <th className="px-3 py-2">DOI</th>
              <th className="px-3 py-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {items.map((pub, idx) => (
              <tr 
                key={idx} 
                className="border-b border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer group"
                onClick={() => setSelectedPub(pub)}
              >
                <td className="px-3 py-4">{idx + 1}</td>
                <td className="px-3 py-4 font-medium text-foreground group-hover:text-primary transition-colors">
                  {pub.title}
                  <span className="block text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                    Click for more details
                  </span>
                </td>
                <td className="px-3 py-4">{pub.impact}</td>
                <td className="px-3 py-4">
                  <div className="flex items-center text-primary hover:text-accent transition-colors" role="button">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </td>
                <td className="px-3 py-4">
                  <div className="flex items-center text-primary hover:text-accent transition-colors" role="button">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                </td>
                <td className="px-3 py-4">
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
    <section id="summary" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Professional Summary</h2>
        </div>

        <div className="space-y-16 mt-12">
          {/* Professional Experience */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedExp(item)}
                  className="glass-card p-6 relative overflow-hidden group hover:neon-border transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
                  <div className="pl-4">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                      <span className="text-lg text-primary font-medium">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-2">{item.organization}</p>
                      {/* <p className="text-sm text-muted-foreground ">{item.description}</p> */}
                      <p className="text-sm text-muted-foreground ">{item.description}</p>
                        {/* <p className='text-sm text-muted-foreground '>{item.skills.join(', ')}</p> */}
                    <div className="mt-3 flex items-center text-xs text-primary group-hover:opacity-100 transition-opacity transform translate-y-2">
                      <span>Click for details</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications Split Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Publications & Manuscripts</h3>
             <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
               <PublicationTable title="Research Articles" items={researchPubs} />
               <PublicationTable title="Review Articles" items={reviewPubs} />
             </div>
          </div>
        </div>
      </div>
      
      {/* Experience Overlay */}
      {selectedExp && (
        <ExperienceOverlay item={selectedExp} onClose={() => setSelectedExp(null)} />
      )}

      {/* Publication Overlay */}
      {selectedPub && (
        <PublicationOverlay item={selectedPub} onClose={() => setSelectedPub(null)} />
      )}
    </section>
  );
}

function ExperienceOverlay({ item, onClose }: { item: typeof experience[0]; onClose: () => void }) {
  if (!item) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="glass-card max-w-2xl w-full p-8 relative neon-border animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm mb-4">
            <span className="text-primary font-semibold">{item.organization}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{item.period}</span>
          </div>
          <p className="text-base text-muted-foreground/90 leading-relaxed italic border-l-2 border-primary/50 pl-4">
            {item.description}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
            <Briefcase size={18} />
            Key Responsibilities & Achievements
          </h4>
          <ul className="space-y-3">
            {item.details?.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {item.skills && (
          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
              <Code size={18} />
              Technical Skills & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
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
           {/* Detailed Large Image */}
           <div className="w-full md:w-1/2 flex-shrink-0">
             <div className="aspect-video md:aspect-[4/3] w-full rounded-lg overflow-hidden bg-secondary/20 border border-primary/20 shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
             </div>
           </div>

           {/* Content Details */}
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
                   {/* Placeholder for description since it wasn't in original data, 
                       mocking it based on title for better UI visualization */}
                   This research provides significant insights into {item.title.toLowerCase()}. 
                   Published in a high-impact journal, it explores critical methodologies and offers 
                   novel perspectives that contribute to the broader field of aquaculture and marine biology.
                </p>
                
                <div className="flex flex-wrap gap-4">
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
