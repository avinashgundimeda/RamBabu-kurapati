import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FlaskConical, Dna, Bot, Microscope, Leaf, TestTube } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
  icon: FlaskConical,
  title: 'Optimizing Artemia Life-Stage Utilization and AI-Driven Phenotyping to Improve Performance and Health of Litopenaeus vannamei Post-Larvae',
  tools: ['Precision Nutrition', 'Disease Resilience', 'AI Monitoring'],
  description:
    'Integrated live-feed optimization, histopathology, microbiome profiling and computer-vision analytics to identify Artemia feeding strategies that enhance shrimp growth, survival and stress resilience.',
  impact:
    'Evidence-based Artemia feeding strategies combined with AI monitoring tools to improve hatchery-stage productivity and disease preparedness in Litopenaeus vannamei post-larvae.',
  methodology:
    'Controlled feeding trials comparing live and decapsulated Artemia were coupled with histology, qPCR-based stress-gene profiling and 16S rRNA microbiome sequencing. YOLO/CNN pipelines automated growth measurements and survival tracking alongside GLM-based statistical modeling.',
  results:
    'Live Artemia maximized growth and survival, while mixed diets optimized gut microbiome diversity and minimized stress-gene expression.',
  publications:
    'One peer-reviewed review article published in Reviews in Aquaculture (IF ≈ 11.3). One primary research article is currently under development.',
  duration: 'August 2024 – December 2026',
  funding: 'Industry-funded – Great Salt Lake Artemia (GSLA)',
  },
  {
    icon: Bot,
    title: 'Organ-to-Organ Progression of Acute Hepatopancreatic Necrosis Disease (AHPND) in Litopenaeus vannamei Using Time-Resolved Molecular Diagnostics',
    tools: ['Pathogenesis Mapping', 'qPCR Surveillance', 'Disease Dynamics'],
    description:
      'Tracked the spatiotemporal progression of Vibrio parahaemolyticus infection across shrimp organs using daily molecular diagnostics to define the sequence of tissue invasion during AHPND.',
    impact:'Generated mechanistic insight into how AHPND spreads within shrimp, supporting earlier detection strategies and targeted intervention development for commercial farms.',
    methodology:'•	Shrimp were reared for 90 days, experimentally challenged with Vibrio parahaemolyticus, and sampled daily to quantify pathogen loads in major organs by qPCR. Histopathology and longitudinal statistical modeling were integrated to reconstruct organ-specific infection trajectories.',
    results:'•	Daily qPCR revealed an ordered progression of bacterial colonization across tissues, identifying early-invaded organs predictive of downstream systemic infection.',
    publications: 'One primary research manuscript in preparation based on this study is under development.',
    duration: 'August 2024 – December 2026',
    funding: 'Institutional and research-grant supported (UAPB Aquaculture Program)',
  },
 {
  icon: Leaf,
  title: 'Sustainable Feeding Strategies for Juvenile Largemouth Bass: Effects of Spirulina, Yeast, and Probiotics on Growth and Intestinal Health',
  tools: ['Functional Feeds', 'Gut Health', 'Sustainable Aquaculture'],
  description:
    'Evaluated Spirulina-, yeast- and probiotic-supplemented diets in juvenile Micropterus salmoides to improve feed acceptance, growth performance, intestinal morphology, microbial abundance and survival while reducing reliance on fishmeal-based feeds.',
  impact:
    'Identified functional feed additives that enhance early-stage largemouth bass performance and intestinal health, supporting more sustainable U.S. aquaculture production systems.',
  methodology:
    'Juvenile bass were fed low-density diets supplemented with Spirulina, yeast or probiotics and assessed for growth, survival, intestinal histomorphology and gut microbial abundance. Comparative statistical analyses quantified treatment effects on dietary transition efficiency and intestinal health indicators.',
  results:
    'Probiotic-supplemented diets produced the highest gut microbial abundance, improved intestinal structure and significantly increased survival, with yeast also showing strong sustainability potential.',
  publications:
    'One primary research manuscript as a co-author.',
  duration: 'August 2024 – December 2026',
  funding:
    'Institutional and competitive research-grant supported (UAPB Aquaculture Program)',
},

{
  icon: Dna,
  title: 'Engineered Endolysins as Enzybiotics: Synergistic Antibiofilm and Bactericidal Activity Against Methicillin-Resistant Staphylococcus aureus',
  tools: ['Enzybiotics', 'Biofilm Eradication', 'Antimicrobial Resistance'],
  description:
    'Engineered multi-domain bacteriophage-derived endolysins and evaluated their bactericidal and antibiofilm activity against clinical MRSA isolates to develop next-generation enzyme-based therapeutics.',
  impact:
    'Identified synergistic enzyme combinations with potent activity against drug-resistant and biofilm-associated Staphylococcus aureus, supporting translational antimicrobial development.',
  methodology:
    'Recombinant endolysins were cloned, expressed in E. coli and purified using Ni-NTA chromatography. Antimicrobial activity against clinical isolates was evaluated using MIC assays, turbidity-reduction and biofilm-inhibition assays, while zymography, plate-lysis assays and synergistic combination testing quantified muralytic and antibiofilm performance.',
  results:
    'Lysn1 and Lysn3 demonstrated broad MRSA killing, up to ~80% biofilm disruption and a four-fold MIC reduction when applied in combination.',
  publications:
    'Manuscript prepared for Scientific Reports (Nature Portfolio).',
  duration: 'August 2024 – December 2026',
  funding:
    'Institutional and collaborative biomedical research funding.',
},
];

interface ProjectType {
  icon: typeof FlaskConical;
  title: string;
  tools: string[];
  description: string;
  impact: string;
  methodology: string;
  results: string;
  publications: string;
  duration: string;
  funding: string;
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title neon-text text-center mx-auto">
            Research Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`project-card glass-card p-8 flex flex-col transition-all duration-1000 cursor-pointer group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 neon-border">
                <project.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-base mb-6 flex-1">
                {project.description}
              </p>

              <div className="mt-auto pt-6 border-t border-border/50">
                <p className="text-base">
                  <span className="text-primary font-semibold">Impact: </span>
                  <span className="text-muted-foreground">
                    {project.impact}
                  </span>
                </p>
              </div>

              <p className="text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Click for details →
              </p>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent
          className="
            glass-card border-primary/30
            w-[95vw] max-w-3xl
            max-h-[70vh] overflow-y-auto
            outline-none
            p-4 sm:p-6
            fixed left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            ml-90 mt-70
          "
        >
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center neon-border flex-shrink-0">
                    <selectedProject.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl text-foreground mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="glass-card p-4 bg-primary/5">
                  <h4 className="text-sm font-semibold text-primary mb-1">
                    Duration
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {selectedProject.duration}
                  </p>
                </div>
                <div className="glass-card p-4 bg-primary/5">
                  <h4 className="text-sm font-semibold text-primary mb-1">
                    Funding
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {selectedProject.funding}
                  </p>
                </div>
              </div>

              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Methodology
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.methodology}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Key Results
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.results}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Impact
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.impact}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Publications & Outputs
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.publications}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
