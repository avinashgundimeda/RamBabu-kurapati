import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mic, FileImage, ExternalLink, Calendar, MapPin, Trophy } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import one from '@/assets/images/ConferencesImages/one.jpeg';
import two from '@/assets/images/ConferencesImages/two.jpeg';
import three from '@/assets/images/ConferencesImages/three.jpeg';
import four from '@/assets/images/ConferencesImages/four.jpeg';
import five from '@/assets/images/ConferencesImages/five.jpeg';

const conferences = [
  {
    title: 'Application of Artificial Intelligence in Health Evaluation',
    event: 'Thesis proposal defenses',
    location: 'UAPB, S. J. Parker 1890 Extension Complex Auditorium, Pine Bluff',
    date: 'January 7, 2025',
    type: 'Oral Presentation',
    image: one,
  },
  {
    title: 'U.S. region-specific high-yielding corn lines prediction',
    event: 'AI in Ag Hackathon',
    location: 'University of Arkansas, Fayetteville',
    date: 'September 13–14, 2025',
    type: 'Oral Presentation',
    image: two,
  },
  {
    title: 'Optimizing Artemia life stage utilization',
    event: '83rd Annual Professional Agricultural Workers Conference (PAWC)',
    location: 'Renaissance Montgomery Hotel & Spa, Montgomery, Alabama, USA',
    date: 'November 16, 2025',
    type: 'Oral Presentation',
    image: three,
  },
  {
    title: 'AI in Aquaculture at UAPB',
    event: 'Demonstrating Facilities in UAPB to industry professionals',
    location: 'UAPB, S. J. Parker 1890 Extension Complex Auditorium, Pine Bluff',
    date: 'November 25, 2025',
    type: 'Oral Presentation',
    image: four,
  },
  {
    title: 'Optimizing Artemia feeding strategies for white shrimp',
    event:
      'Aquaculture America 2026 organized by the World Aquaculture Society in partnership with other aquaculture organizations',
    location: 'Paris Las Vegas Hotel & Convention Center',
    date: 'February 17, 2026',
    type: 'Oral Presentation',
    image: five,
  },
];




export function ConferencesSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedConference, setSelectedConference] = useState<typeof conferences[0] | null>(null);

  return (
    <section id="conferences" className="py-24 relative overflow-hidden ">
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
                  <th className="text-left py-4 px-4">Title</th>
                  <th className="text-left py-4 px-4">Event</th>
                  <th className="text-left">Location</th>
                  <th className="text-left">Date</th>
                  <th className="text-center">Type</th>
                  <th className="text-center py-4 px-4 w-24">Gallery</th>
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
                    <td className="text-foreground font-medium max-w-xs py-4 px-4">
                      <div>
                        {conf.title}
                        <button 
                          onClick={() => setSelectedConference(conf)}
                          className="block mt-1 text-xs text-primary/80 hover:text-primary transition-colors hover:underline text-left"
                        >
                          View Details &rarr;
                        </button>
                      </div>
                    </td>
                    <td className="text-muted-foreground py-4 px-4">{conf.event}</td>
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
                    <td className="py-4 px-4 text-center">
                      {conf.image ? (
                        <div 
                          className="w-16 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0 mx-auto opacity-90"
                        >
                          <img 
                            src={conf.image} 
                            alt={conf.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-12 rounded-lg bg-secondary/10 flex items-center justify-center border border-white/10 shrink-0 mx-auto opacity-50">
                          <FileImage className="w-5 h-5 text-secondary/50" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>

      <Dialog open={!!selectedConference} onOpenChange={() => setSelectedConference(null)}>
        <DialogContent className="glass-card border-primary/30 w-[95vw] max-w-6xl max-h-[95vh] overflow-y-auto outline-none p-0 overflow-hidden fixed left-[85rem] top-[35rem] -translate-x-1/2 -translate-y-1/2 z-50">
          {selectedConference && (
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-video relative bg-black/50">
                {selectedConference.image ? (
                  <img 
                    src={selectedConference.image} 
                    alt={selectedConference.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/10 ">
                    <FileImage className="w-16 h-16 text-secondary/30" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                   <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                      selectedConference.type === 'Oral'
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'bg-secondary/20 text-secondary border border-secondary/30'
                    }`}>
                      {selectedConference.type === 'Oral' ? <Mic className="w-3 h-3" /> : <FileImage className="w-3 h-3" />}
                      {selectedConference.type}
                    </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-2xl font-bold text-foreground leading-tight mb-4 ">
                    {selectedConference.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 flex-1 ">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Event</h4>
                      <p className="text-muted-foreground text-sm">{selectedConference.event}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-1">Location</h4>
                      <p className="text-muted-foreground text-sm">{selectedConference.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                      <Calendar className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-500 mb-1">Date</h4>
                      <p className="text-muted-foreground text-sm">{selectedConference.date}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-xs text-muted-foreground italic">
                    Presentation type: {selectedConference.type}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
