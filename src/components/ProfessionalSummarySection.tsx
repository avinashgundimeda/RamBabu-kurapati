import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const experience = [
  {
    title: 'Graduate Research Assistant – UAPB',
    organization: 'Driving data-driven shrimp health and nutrition research using advanced laboratory and AI techniques.',
    period: 'August 2024 - Present',
    heading : 'Key responsibilities :',
    description: 'Conduct shrimp nutrition and disease-challenge trials focusing on larval development, immune responses, and survival outcomes.Lead Artemia life-stage optimization studies for Litopenaeus vannamei , resulting in improved post-larval performance.',

    details: [
      'Conduct shrimp nutrition and disease-challenge trials.',
      'Conduct histology (H&E), microbial culture, antimicrobial assays, DNA/RNA extraction, PCR/qPCR, gel electrophoresis, 16S rRNA gut microbiome analysis, water quality monitoring, biological sampling, growth performance analysis, and post-larval health assessments.',
      'Analyze datasets in R and SAS; develop Python CNN/YOLO workflows.',
      'Present research findings at scientific conferences, seminars, and departmental symposia.',
      'Contribute to manuscript preparation, data interpretation, and publication in peer-reviewed journals.',


    ],
    skills: [
      'Shrimp Nutrition & Disease Trials	98%',
      'Histology	90%',
      'Microbiology & Molecular Diagnostics	82%',
      'AI-driven computer-vision pipelines	65%',
      'Statistical Analysis  (R, SAS 9.4, and Excel)	60%',
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



export function ProfessionalSummarySection() {
  const { ref, isVisible } = useScrollReveal();


  return (
    <section id="summary" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-4 md:mx-20 mb-12">Professional Summary</h2>
        </div>

        <div className="space-y-16 mt-12">
          {/* Professional Experience */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 relative overflow-hidden group hover:neon-border transition-all duration-300 mx-4 md:mx-20"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
                  <div>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                      <span className="text-lg text-primary font-medium">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-3 text-[18px]">{item.organization}</p>
                    <p className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-4">{item.heading}</p>
                    
                    <ul className="space-y-2">
                      {item.details?.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[16px] text-muted-foreground/90">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
