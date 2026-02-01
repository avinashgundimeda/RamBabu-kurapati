import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProfessionalSummarySection } from '@/components/ProfessionalSummarySection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AwardsSection } from '@/components/AwardsSection';
import { ConferencesSection } from '@/components/ConferencesSection';
import { MediaExposureSection } from '@/components/MediaExposureSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

import { ScrollProvider } from '@/components/ScrollProvider';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <ScrollProvider>
        <main>
          <HeroSection />
          <ProfessionalSummarySection />
          <AwardsSection />
          <ConferencesSection />
          <MediaExposureSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </ScrollProvider>
    </div>
  );
};

export default Index;
