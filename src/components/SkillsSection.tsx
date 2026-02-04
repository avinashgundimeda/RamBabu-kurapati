import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Dna,
  Code,
  Microscope,
  FileText,
  Users,
  Lightbulb,
  Layers,
  BarChart3,
} from 'lucide-react';
import ai from '@/assets/images/SkillsImages/ai.png';
import shrimp from '@/assets/images/SkillsImages/shrimp.png'




const technicalSkills = [
  { name: 'Shrimp Nutrition & Disease Trials', percentage: 98, icon: shrimp },
  { name: 'Histology', percentage: 90, icon: Microscope },
  { name: 'Microbiology & Molecular Diagnostics', percentage: 82, icon: Dna },
  { name: 'AI-driven computer-vision pipelines', percentage: 65, icon: ai },
  { name: 'Statistical Analysis (R, SAS 9.4, Excel)', percentage: 60, icon: BarChart3 },
];

const professionalSkills = [
  { name: 'Research & Analysis', percentage: 95, icon: Lightbulb },
  { name: 'Scientific Writing', percentage: 90, icon: FileText },
  { name: 'Project Management', percentage: 85, icon: Layers },
  { name: 'Team Collaboration', percentage: 92, icon: Users },
];

/* ---------------- RIGHT – circular meter card ---------------- */

function CircleSkill({ skill, index, isVisible }: any) {
  const Icon = skill.icon;
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (skill.percentage / 100) * c;

  return (
    <div
      className={`glass-card p-6 flex flex-col items-center justify-center transition-all duration-700
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative w-[120px] h-[120px] mb-4">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={r}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-secondary/20"
          />
          <circle
            cx="60"
            cy="60"
            r={r}
            stroke="url(#skillGrad)"
            strokeWidth="6"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={isVisible ? offset : c}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="skillGrad">
              <stop offset="0%" stopColor="rgb(0,255,255)" />
              <stop offset="100%" stopColor="rgb(124,58,237)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-primary">
          <Icon size={22} />
        </div>
      </div>

      <p className="text-sm font-semibold text-center leading-snug">
        {skill.name}
      </p>

      <span className="text-xs mt-2 neon-text">
        {skill.percentage}%
      </span>
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">

      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title neon-text text-center mb-16">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT – logo under name (no bars) */}
          <div>
            <h3 className="text-2xl font-bold mb-8 lg:mb-10 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Code size={16} />
              </span>
              Technical Proficiency
            </h3>

            <div
              className={`glass-card p-6 sm:p-8 transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8">
                {technicalSkills.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center text-center transition-all duration-700
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                      `}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <p className="text-sm font-semibold mb-3 min-h-[40px] flex items-center justify-center">
                        {skill.name}
                      </p>

                      {/* animated logo */}
                      <div className="relative">
                        <div
                          className="
                            p-4 rounded-xl
                            bg-primary/10 text-primary
                            animate-[float_3.5s_ease-in-out_infinite]
                            shadow-[0_0_18px_rgba(0,255,255,0.25)]
                          "
                        >
                          {typeof Icon === 'string' ? (
                            <img 
                              src={Icon} 
                              alt={skill.name} 
                              className="w-7 h-7 object-contain" 
                            />
                          ) : (
                            <Icon size={28} />
                          )}
                        </div>

                        {/* glow ring */}
                        <div className="absolute inset-0 rounded-xl blur-md bg-primary/20 -z-10" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT – professional circular meters */}
          <div>
            <h3 className="text-2xl font-bold mb-8 lg:mb-10 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Users size={16} />
              </span>
              Professional Competencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {professionalSkills.map((skill, i) => (
                <CircleSkill
                  key={skill.name}
                  skill={skill}
                  index={i}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* local animation (Tailwind arbitrary animation helper) */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
