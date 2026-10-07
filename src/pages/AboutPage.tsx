import React from 'react';
import { RoutePath } from '../types';
import { SITE_METADATA, TEAM } from '../data/siteData';
import { SpotlightCard } from '../components/SpotlightCard';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenPlanner }) => {
  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <span className="text-zinc-700">About us</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
            Entity &amp; Team
          </span>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
            We turn real places into experiences that last
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            {SITE_METADATA.boilerplate}
          </p>
          <div className="mt-4 text-xs font-mono text-zinc-500">
            {SITE_METADATA.legalName} · Founded {SITE_METADATA.foundingYear} · {SITE_METADATA.location}
          </div>
        </div>

        {/* Story & Disciplines */}
        <div id="story" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <SpotlightCard className="p-8">
            <h2 className="text-xl font-bold text-[#09090B] font-display mb-4">
              Our Story &amp; Origins
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#52525B] leading-relaxed">
              <p>
                RCAAS stands for <strong className="text-zinc-900">Reality Capture as a Service</strong>. Founded in Kathmandu by geomatics engineers and 3D visual technologists, the company was born out of a shared frustration: why should valuable spatial documentation remain locked away in specialized CAD software that only surveyors understand?
              </p>
              <p>
                From historic Newari temples vulnerable to seismic shifts to world-class boutique hotels and expanding university campuses, Nepal possesses spaces rich in heritage and character. We set out to make these spaces measurable for experts and instantly walkable for anyone in the world.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8">
            <h2 className="text-xl font-bold text-[#09090B] font-display mb-4">
              Mission &amp; Vision
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#52525B] leading-relaxed">
              <div className="p-4 rounded-md border border-[#E4E4E7] bg-[#FAFAFA]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#BE123C] font-semibold">Our Mission</span>
                <p className="mt-1 text-xs text-zinc-800 font-medium">
                  Capture physical spaces with verifiable engineering accuracy and turn them into intuitive digital experiences that drive bookings, enrolments, conservation, and investment.
                </p>
              </div>
              <div className="p-4 rounded-md border border-[#E4E4E7] bg-[#FAFAFA]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#BE123C] font-semibold">Our Long-Term Vision</span>
                <p className="mt-1 text-xs text-zinc-800 font-medium">
                  Build the permanent high-fidelity 3D spatial archive of Nepal's cultural, architectural, and educational heritage.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Leadership & Engineering Team */}
        <div id="team" className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              The Team
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#09090B] font-display">
              Engineers &amp; Game Developers
            </h2>
            <p className="mt-2 text-sm text-[#52525B]">
              Every project unites survey precision with interactive visual craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <SpotlightCard key={member.name} className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                    <span className="text-[#BE123C] font-semibold">{member.discipline}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#09090B] font-display">
                    {member.name}
                  </h3>
                  <div className="text-xs text-zinc-600 font-medium mt-0.5">
                    {member.role}
                  </div>
                  <p className="mt-3 text-xs text-[#52525B] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E4E4E7] text-[11px] font-mono text-zinc-500">
                  Kathmandu, Nepal
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Location & Trust */}
        <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-8 sm:p-12 text-center shadow-sm">
          <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">
            Based in Kathmandu · Operating Countrywide
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#09090B] font-display">
            Let's discuss your space
          </h2>
          <p className="mt-3 text-sm text-[#52525B] max-w-lg mx-auto">
            Our team travels nationwide with portable SLAM scanners and aerial drones to document projects across Bagmati, Gandaki, Lumbini, and beyond.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={onOpenPlanner}
              className="loro-btn-primary px-6 py-2.5 text-xs uppercase tracking-wider"
            >
              Plan your experience &rarr;
            </button>
            <button
              onClick={() => onNavigate('/contact/')}
              className="loro-btn-secondary px-6 py-2.5 text-xs font-medium"
            >
              Get in touch
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
