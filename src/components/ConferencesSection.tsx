import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mic, FileImage, ExternalLink } from 'lucide-react';

const conferences = [
  {
    title: 'Novel Endolysin Candidates for Vibrio Control in Shrimp Aquaculture',
    event: 'World Aquaculture Society Annual Meeting',
    location: 'Singapore',
    date: 'May 2024',
    type: 'Oral',
  },
  {
    title: 'AI-Powered Early Warning Systems for Shrimp Disease Outbreaks',
    event: 'International Conference on Aquatic Animal Health',
    location: 'Busan, South Korea',
    date: 'October 2023',
    type: 'Oral',
  },
  {
    title: 'Microbiome Signatures as Biomarkers for AHPND Susceptibility',
    event: 'Asian-Pacific Aquaculture Conference',
    location: 'Bangkok, Thailand',
    date: 'July 2023',
    type: 'Poster',
  },
  {
    title: 'Probiotic Interventions for Sustainable Shrimp Production',
    event: 'European Aquaculture Society Conference',
    location: 'Berlin, Germany',
    date: 'March 2023',
    type: 'Oral',
  },
  {
    title: 'Histopathological Progression of AHPND: A Time-Course Study',
    event: 'International Symposium on Aquatic Animal Health',
    location: 'Vancouver, Canada',
    date: 'September 2022',
    type: 'Poster',
  },
  {
    title: 'Machine Learning Approaches for Disease Phenotyping in Aquaculture',
    event: 'Computational Biology in Aquaculture Workshop',
    location: 'Oslo, Norway',
    date: 'June 2022',
    type: 'Oral',
  },
  {
    title: 'Antimicrobial Peptides from Marine Sources: Potential for Vibrio Control',
    event: 'Marine Biotechnology Conference',
    location: 'Okinawa, Japan',
    date: 'November 2021',
    type: 'Poster',
  },
  {
    title: 'Functional Feeds for Disease Prevention in Intensive Shrimp Culture',
    event: 'World Aquaculture Society Latin American Chapter',
    location: 'Guayaquil, Ecuador',
    date: 'April 2021',
    type: 'Oral',
  },
];

export function ConferencesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="conferences" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Conference Presentations</h2>
        </div>

        <div className={`mt-12 glass-card overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-x-auto">
            <table className="neon-table w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="text-left">Title</th>
                  <th className="text-left">Event</th>
                  <th className="text-left">Location</th>
                  <th className="text-left">Date</th>
                  <th className="text-center">Type</th>
                </tr>
              </thead>
              <tbody>
                {conferences.map((conf, index) => (
                  <tr
                    key={index}
                    className={`transition-all duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    <td className="text-foreground font-medium max-w-xs">
                      {conf.title}
                    </td>
                    <td className="text-muted-foreground">{conf.event}</td>
                    <td className="text-muted-foreground">{conf.location}</td>
                    <td className="text-muted-foreground whitespace-nowrap">{conf.date}</td>
                    <td className="text-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                        conf.type === 'Oral'
                          ? 'bg-primary/20 text-primary border border-primary/30'
                          : 'bg-secondary/20 text-secondary border border-secondary/30'
                      }`}>
                        {conf.type === 'Oral' ? <Mic className="w-3 h-3" /> : <FileImage className="w-3 h-3" />}
                        {conf.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
