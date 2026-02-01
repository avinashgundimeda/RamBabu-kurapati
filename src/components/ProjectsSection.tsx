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
    title: 'Tracking AHPND Infection Progression in Shrimp',
    tools: ['qPCR', 'Histopathology', 'Metagenomics'],
    description:
      'Comprehensive study of Acute Hepatopancreatic Necrosis Disease (AHPND) progression using multi-modal molecular and histological approaches.',
    impact:
      'Identified key biomarkers for early-stage detection, enabling intervention 48 hours earlier than conventional methods.',
    methodology:
      'Time-series sampling of experimentally infected shrimp at 6-hour intervals over 72 hours. Samples analyzed via RT-qPCR for toxin gene expression, H&E staining for histopathological changes, and 16S rRNA sequencing for microbiome shifts.',
    results:
      'Established a 5-biomarker panel with 96% sensitivity for detecting infection within 12 hours of exposure. Microbiome dysbiosis precedes clinical symptoms by 18-24 hours.',
    publications: '2 peer-reviewed papers published; 1 patent pending for diagnostic assay.',
    duration: '2021 - Present',
    funding: 'National Research Foundation Grant ($250,000)',
  },
  {
    icon: TestTube,
    title: 'Artemia Life-Stage Optimization',
    tools: ['Live Feed Culture', 'Nutritional Analysis', 'Growth Modeling'],
    description:
      'Optimization of Artemia enrichment protocols and feeding schedules for improved larval shrimp nutrition and survival.',
    impact:
      'Achieved 23% improvement in post-larval survival rates across multiple commercial hatcheries.',
    methodology:
      'Systematic evaluation of 15 enrichment formulations across 3 Artemia strains. Fatty acid profiles analyzed via GC-MS. Feeding trials conducted in 500L larval rearing tanks with standardized conditions.',
    results:
      'Developed optimized enrichment protocol with ideal DHA:EPA ratio of 2:1. Feeding schedule reduces Artemia consumption by 15% while improving larval growth rates.',
    publications: '1 peer-reviewed paper; industry adoption by 3 major hatcheries.',
    duration: '2020 - 2022',
    funding: 'Industry Partnership with AquaFeed Corp ($75,000)',
  },
  {
    icon: Dna,
    title: 'Endolysin Antimicrobial Testing',
    tools: ['Recombinant Protein Expression', 'MIC Assays', 'In vivo Trials'],
    description:
      'Development and testing of bacteriophage-derived endolysins as novel antimicrobials against Vibrio parahaemolyticus.',
    impact:
      'Discovered three endolysin candidates with MIC values below 10 μg/mL against AHPND-causing strains.',
    methodology:
      'Phage isolation from coastal sediments, genome sequencing, and endolysin gene identification. Recombinant expression in E. coli followed by purification and activity assays against Vibrio panel.',
    results:
      'Lead candidate LysVp3 shows broad-spectrum activity against 12/15 tested Vibrio strains. Stable at pond temperatures (28-32°C) for >6 hours. No cytotoxicity to shrimp hepatopancreas cells.',
    publications: '1 peer-reviewed paper; provisional patent filed.',
    duration: '2022 - Present',
    funding: 'Antimicrobial Research Initiative ($180,000)',
  },
  {
    icon: Bot,
    title: 'AI-Based Shrimp Health Detection',
    tools: ['TensorFlow', 'Computer Vision', 'Edge Computing'],
    description:
      'Deep learning system for real-time visual detection of disease symptoms and behavioral anomalies in shrimp populations.',
    impact:
      'Model achieves 94% accuracy in detecting early signs of white spot syndrome from pond camera footage.',
    methodology:
      'Training dataset of 50,000+ annotated images from commercial farms. YOLOv5 architecture optimized for edge deployment on Raspberry Pi 4 units with coral TPU accelerators.',
    results:
      'System processes 30 fps video streams, detecting abnormal swimming patterns, color changes, and mortality events. Alert system reduces response time from hours to minutes.',
    publications: '2 peer-reviewed papers; open-source code repository with 200+ stars.',
    duration: '2021 - Present',
    funding: 'AI for Agriculture Grant ($200,000)',
  },
  {
    icon: Microscope,
    title: 'Microbiome Profiling',
    tools: ['16S rRNA Sequencing', 'Shotgun Metagenomics', 'Bioinformatics'],
    description:
      'Characterization of gut and environmental microbiome signatures associated with healthy vs. diseased shrimp.',
    impact:
      'Established microbiome-based health index now used by three research institutions for monitoring.',
    methodology:
      'Longitudinal sampling of gut, water, and sediment microbiomes across 6 farms over 12 months. 16S rRNA for community profiling; shotgun metagenomics for functional analysis.',
    results:
      'Identified 23 bacterial genera significantly associated with disease resistance. Developed Microbiome Health Index (MHI) with 89% predictive accuracy for disease outbreaks 7 days in advance.',
    publications:
      '3 peer-reviewed papers; publicly available database of 1,200+ microbiome samples.',
    duration: '2019 - 2022',
    funding: 'Microbiome Research Consortium ($300,000)',
  },
  {
    icon: Leaf,
    title: 'Feed Functionalization Trials',
    tools: ['Probiotics', 'Immunostimulants', 'Growth Performance Trials'],
    description:
      'Evaluation of functional feed additives including probiotics and plant-derived immunostimulants for disease prevention.',
    impact:
      'Validated probiotic blend reducing AHPND mortality by 35% in controlled challenge trials.',
    methodology:
      'Randomized controlled trials with 12 treatment groups across 3 replicate tanks each. 60-day grow-out trials followed by controlled disease challenge. Growth, survival, and immune parameters measured.',
    results:
      'Optimal probiotic dose of 10^8 CFU/kg feed. Synergistic effect observed when combined with β-glucan at 0.1%. Feed conversion ratio improved by 8% in probiotic groups.',
    publications: '2 peer-reviewed papers; commercial licensing agreement signed.',
    duration: '2020 - 2023',
    funding: 'Functional Feed Innovation Grant ($150,000)',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`project-card glass-card p-6 flex flex-col h-full transition-all duration-1000 cursor-pointer group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 neon-border">
                <project.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="text-sm line-clamp-2">
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
