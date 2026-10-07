import React from 'react';
import { RoutePath } from '../types';
import { TOOLKIT } from '../data/siteData';
import { SpotlightCard } from '../components/SpotlightCard';

interface HowWeWorkPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onNavigate, onOpenPlanner }) => {
  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <span className="text-zinc-700">How we work</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
            Methodology &amp; Standards
          </span>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
            How we turn a place into an experience
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            We unite geomatics engineering rigor with high-end game-development artistry. What your audience sees is both mathematically accurate to the physical site and effortless to explore.
          </p>
        </div>

        {/* Two Disciplines One Team */}
        <div id="team-approach" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <SpotlightCard className="p-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#F4F4F5] text-[#09090B] font-mono text-xs font-bold mb-4 border border-[#E4E4E7]">
              01
            </div>
            <h2 className="text-xl font-bold text-[#09090B] font-display">
              Engineering Precision
            </h2>
            <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
              Our geomatics and reality capture engineers manage sensor calibrations, GNSS control stations, SLAM trajectory corrections, and point cloud registration. We verify sub-centimetre geometric tolerances so your digital twin can be trusted for planning, restoration, and architectural design.
            </p>
            <div className="mt-4 text-xs font-mono text-[#BE123C]">
              • LiDAR tolerances within ±5mm · RTK Geodetic coordinates
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#F4F4F5] text-[#09090B] font-mono text-xs font-bold mb-4 border border-[#E4E4E7]">
              02
            </div>
            <h2 className="text-xl font-bold text-[#09090B] font-display">
              Game-Development Craft
            </h2>
            <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
              Accurate data alone doesn't inspire action. Our interactive engine team crafts lighting dynamics, intuitive touch controls, spatial audio transitions, and responsive cameras. The result is fluid, 60fps walkthroughs that make visitors feel genuinely present inside the space.
            </p>
            <div className="mt-4 text-xs font-mono text-[#BE123C]">
              • 60 FPS WebGL / WebGPU · Sub-second progressive streaming
            </div>
          </SpotlightCard>
        </div>

        {/* Five Step Detailed Value Chain */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Execution Process
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#09090B] font-display">
              The 5-Step Value Chain
            </h2>
            <p className="mt-3 text-sm text-[#52525B]">
              From the initial site reconnaissance to post-launch visitor telemetry.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: 'Step 01',
                title: 'Discover & Scope',
                summary: 'We identify your core visitor goal: direct room reservations, student applications, investor funding, or conservation documentation. We map every room, courtyard, and corridor.',
                timeline: 'Day 1–2',
              },
              {
                step: 'Step 02',
                title: 'Field Capture (Air & Ground)',
                summary: 'Our Kathmandu survey team deploys on-site with handheld SLAM LiDAR scanners and aerial RTK drones. Scanning is completely non-invasive and takes only 2–6 hours.',
                timeline: 'Day 3–5',
              },
              {
                step: 'Step 03',
                title: 'Process & 3D Engineering',
                summary: 'We register raw point clouds, align geodetic coordinates, reconstruct Gaussian radiance fields, calibrate HDR color profiles, and program interactive waypoint hotspots.',
                timeline: 'Day 6–10',
              },
              {
                step: 'Step 04',
                title: 'Publish & Multi-Channel Deployment',
                summary: 'We deploy your 3D experience onto our global CDN and configure your custom domain, responsive website iframes, social media links, and on-site QR display cards.',
                timeline: 'Day 11–12',
              },
              {
                step: 'Step 05',
                title: 'Measure & Refine',
                summary: 'We monitor viewer engagement: average walk duration, hotspot interaction rates, and booking conversion clicks. We optimize waypoints and update seasonal details.',
                timeline: 'Continuous',
              },
            ].map((st, i) => (
              <div
                key={st.step}
                className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#E11D48] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      {st.step}
                    </span>
                    <h3 className="text-lg font-bold text-[#09090B] font-display">
                      {st.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    {st.summary}
                  </p>
                </div>
                <div className="shrink-0 font-mono text-xs text-zinc-500 bg-white border border-[#E4E4E7] px-3 py-1 rounded">
                  {st.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Action */}
        <div className="rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] p-8 sm:p-12 text-center shadow-md">
          <h2 className="text-2xl font-bold text-[#09090B] font-display">
            Ready to schedule a site scan?
          </h2>
          <p className="mt-2 text-sm text-[#52525B] max-w-md mx-auto">
            Our surveyors and visual technologists are based in Kathmandu and operate throughout Nepal.
          </p>
          <div className="mt-6 flex justify-center gap-3">
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
              Contact our team
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
