import React from 'react';
import { motion } from 'motion/react';
import { RoutePath } from '../types';
import { SITE_METADATA, TOOLKIT } from '../data/siteData';
import { SpotlightCard } from '../components/SpotlightCard';
import { ValueChainGraphic } from '../components/ValueChainGraphic';

interface ServicesPageProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

interface PillarDetail {
  id: string;
  slug: string;
  title: string;
  promise: string;
  body: string;
  helpsYou: string;
  includes: Array<{ label: string; href: string; isRoute: boolean }>;
  exploreLink: RoutePath;
  exploreLabel: string;
}

const PILLARS_COPY: PillarDetail[] = [
  {
    id: 'immersive-experiences',
    slug: 'immersive-experiences',
    title: 'Immersive Experiences',
    promise: 'Let people step inside.',
    body: 'Photorealistic 3D tours that open from a link, VR that puts visitors on site, and interactive experiences built with game-engine tools.',
    helpsYou: 'Win bookings, applications, sales enquiries and visits.',
    includes: [
      {
        label: '3D virtual tours',
        href: '/services/immersive-experiences/3d-virtual-tours/',
        isRoute: true,
      },
      {
        label: 'VR experiences',
        href: '#vr',
        isRoute: false,
      },
      {
        label: 'AR experiences',
        href: '#ar',
        isRoute: false,
      },
      {
        label: 'Interactive experiences',
        href: '#interactive',
        isRoute: false,
      },
    ],
    exploreLink: '/services/immersive-experiences/',
    exploreLabel: 'Explore immersive experiences',
  },
  {
    id: 'visual-storytelling',
    slug: 'visual-storytelling',
    title: 'Visual Storytelling',
    promise: 'Turn your place into a story.',
    body: 'Guided tours, cinematic fly-through films and social content made from your 3D capture, shaped around what you want your audience to feel and do.',
    helpsYou: 'Run campaigns, raise awareness, attract funding and engage the public.',
    includes: [
      {
        label: 'Guided and narrated tours',
        href: '#guided-tours',
        isRoute: false,
      },
      {
        label: 'Fly-through films and renders',
        href: '#films',
        isRoute: false,
      },
      {
        label: 'Social content',
        href: '#social',
        isRoute: false,
      },
      {
        label: 'Exhibition and event content',
        href: '#exhibitions',
        isRoute: false,
      },
    ],
    exploreLink: '/services/visual-storytelling/',
    exploreLabel: 'Explore visual storytelling',
  },
  {
    id: 'digital-twins',
    slug: 'digital-twins',
    title: 'Digital Twins & Survey',
    promise: 'Measure, design and plan from reality.',
    body: 'Accurate 3D records of buildings, sites and landscapes, captured with advanced laser and aerial scanning, ready for design, planning and preservation.',
    helpsYou: 'Design with confidence, cut repeat site visits, plan better and preserve what matters.',
    includes: [
      {
        label: '3D laser scanning',
        href: '/services/digital-twins/3d-laser-scanning/',
        isRoute: true,
      },
      {
        label: 'Drone mapping and aerial survey',
        href: '/services/digital-twins/drone-mapping/',
        isRoute: true,
      },
      {
        label: 'As-built drawings and CAD/BIM-ready data',
        href: '#as-built',
        isRoute: false,
      },
      {
        label: 'Survey and GIS',
        href: '#survey-gis',
        isRoute: false,
      },
    ],
    exploreLink: '/services/digital-twins/',
    exploreLabel: 'Explore digital twins',
  },
];

interface GoalMatch {
  goal: string;
  bestFit: string;
  example: string;
}

const GOALS_MATRIX: GoalMatch[] = [
  {
    goal: 'More bookings or visits',
    bestFit: 'Immersive Experiences',
    example: 'A 3D tour on your website and booking page',
  },
  {
    goal: 'More applications or enrolments',
    bestFit: 'Immersive Experiences + Visual Storytelling',
    example: 'A campus tour and a short film for admissions campaigns',
  },
  {
    goal: 'Sell or lease property',
    bestFit: 'Immersive Experiences + Visual Storytelling',
    example: 'A 3D walkthrough of a show flat and fly-through clips for ads',
  },
  {
    goal: 'Design, renovate or fit out',
    bestFit: 'Digital Twins & Survey',
    example: 'A measured 3D scan and drawings for your design software',
  },
  {
    goal: 'Preserve heritage',
    bestFit: 'Digital Twins & Survey + Immersive Experiences',
    example: 'A measured record for conservators and a public 3D experience',
  },
  {
    goal: 'Plan or engage the public',
    bestFit: 'Digital Twins & Survey + Visual Storytelling',
    example: '3D base data for planning and visuals residents understand',
  },
];

interface StarterPackage {
  name: string;
  forWho: string;
  includes: string;
  from: string;
}

const STARTER_PACKAGES: StarterPackage[] = [
  {
    name: 'Tour',
    forWho: 'Showing one place online',
    includes: 'Capture, photorealistic 3D tour, hosting, shareable link',
    from: 'Custom quote',
  },
  {
    name: 'Tour + Story',
    forWho: 'Campaigns and launches',
    includes: 'Everything in Tour, plus a fly-through film and social clips',
    from: 'Custom quote',
  },
  {
    name: 'Immersive',
    forWho: 'Events, exhibitions and flagship projects',
    includes: 'Tour + Story, plus VR or an interactive experience',
    from: 'Custom quote',
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ currentPath, onNavigate, onOpenPlanner }) => {
  const isImmersive = currentPath.includes('/immersive-experiences');
  const is3DTours = currentPath.includes('/3d-virtual-tours');
  const isStorytelling = currentPath.includes('/visual-storytelling');
  const isDigitalTwins = currentPath.includes('/digital-twins');
  const isLaserScanning = currentPath.includes('/3d-laser-scanning');
  const isDroneMapping = currentPath.includes('/drone-mapping');

  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb: Home › What we create */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-10">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900 transition-colors">
            Home
          </button>
          <span className="text-zinc-400">›</span>
          <button
            onClick={() => onNavigate('/services/')}
            className={`transition-colors ${
              currentPath === '/services/' ? 'text-[#09090B] font-semibold' : 'hover:text-zinc-900'
            }`}
          >
            What we create
          </button>
          {isImmersive && (
            <>
              <span className="text-zinc-400">›</span>
              <span className="text-[#E11D48] font-semibold">
                {is3DTours ? '3D Virtual Tours' : 'Immersive Experiences'}
              </span>
            </>
          )}
          {isStorytelling && (
            <>
              <span className="text-zinc-400">›</span>
              <span className="text-[#E11D48] font-semibold">Visual Storytelling</span>
            </>
          )}
          {isDigitalTwins && (
            <>
              <span className="text-zinc-400">›</span>
              <span className="text-[#E11D48] font-semibold">
                {isLaserScanning
                  ? '3D Laser Scanning'
                  : isDroneMapping
                  ? 'Drone Mapping'
                  : 'Digital Twins & Survey'}
              </span>
            </>
          )}
        </nav>

        {/* 1. Hero + intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#E4E4E7] bg-[#FAFAFA] text-xs font-mono text-zinc-700 mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-pulse"></span>
            <span>Services Hub · Reality Capture as a Service</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
            What we create
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#52525B] leading-relaxed max-w-3xl">
            Every project starts with a real place and a clear goal: more bookings, more applications, a better design, a lasting record. From one visit to your site, we can create three kinds of work. Most clients combine them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('/contact/')}
              className="loro-btn-primary px-7 py-3 text-xs font-semibold uppercase tracking-wider"
            >
              Plan your experience &rarr;
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('choose');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="loro-btn-secondary px-6 py-3 text-xs font-medium"
            >
              Which is right for you? &darr;
            </button>
          </div>
        </motion.div>

        {/* 2. The three pillars */}
        <section id="pillars" className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
                Core Capabilities
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#09090B] font-display">
                The three pillars
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
              01 · 02 · 03
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PILLARS_COPY.map((pillar) => (
              <SpotlightCard
                key={pillar.id}
                className="p-7 sm:p-8 flex flex-col justify-between border-[#E4E4E7]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#BE123C] uppercase tracking-wider font-semibold">
                      {pillar.promise}
                    </span>
                  </div>

                  <h2 className="mt-2 text-2xl font-bold text-[#09090B] font-display">
                    {pillar.title}
                  </h2>

                  <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
                    {pillar.body}
                  </p>

                  {/* Helps you callout */}
                  <div className="mt-5 rounded-md bg-zinc-50 border border-zinc-200/80 p-3.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-1">
                      Helps you
                    </div>
                    <p className="text-xs text-[#09090B] font-medium leading-relaxed">
                      {pillar.helpsYou}
                    </p>
                  </div>

                  {/* Includes list with capability links */}
                  <div className="mt-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
                      Includes:
                    </div>
                    <ul className="space-y-2 text-xs">
                      {pillar.includes.map((inc) => (
                        <li key={inc.label} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
                          {inc.isRoute ? (
                            <button
                              onClick={() => onNavigate(inc.href as RoutePath)}
                              className="text-zinc-700 hover:text-[#E11D48] hover:underline font-mono transition-colors text-left"
                            >
                              {inc.label} &rarr;
                            </button>
                          ) : (
                            <span className="text-zinc-700 font-mono">
                              {inc.label}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer CTA link */}
                <div className="mt-8 pt-5 border-t border-[#E4E4E7]">
                  <button
                    onClick={() => onNavigate(pillar.exploreLink)}
                    className="flex items-center justify-between w-full text-xs font-semibold text-[#09090B] hover:text-[#E11D48] transition-colors group"
                  >
                    <span>{pillar.exploreLabel}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* 3. One visit, many uses #one-capture */}
        <section id="one-capture" className="mb-24 rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              The Reality Advantage
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#09090B] font-display">
              One capture, many uses
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
              We capture your place once, carefully and accurately. From that single capture we can build a 3D tour for your website, a VR version for events, a film for social media and measured data for your architect. You get more from one visit, and everything stays consistent.
            </p>
          </div>

          {/* Visual: ValueChain graphic: Capture → Create → Tell → Deliver → Measure */}
          <div className="mt-6">
            <ValueChainGraphic />
          </div>
        </section>

        {/* 4. Which is right for you? #choose */}
        <section id="choose" className="mb-24">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Decision Guide
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#09090B] font-display">
              Which is right for you?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#52525B]">
              Start with your goal. We'll recommend the mix.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E4E4E7] bg-zinc-50/80 text-zinc-600 font-mono text-xs">
                    <th className="py-3.5 px-5 font-semibold">Your goal</th>
                    <th className="py-3.5 px-5 font-semibold">Best fit</th>
                    <th className="py-3.5 px-5 font-semibold">Example of what you get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E4E7]">
                  {GOALS_MATRIX.map((item, idx) => (
                    <tr
                      key={item.goal}
                      className="hover:bg-zinc-50/60 transition-colors"
                    >
                      <td className="py-4 px-5 font-semibold text-[#09090B]">
                        {item.goal}
                      </td>
                      <td className="py-4 px-5">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#BE123C] bg-rose-50/60 px-2.5 py-1 rounded border border-rose-200/60">
                          <span className="h-1 w-1 rounded-full bg-[#E11D48]" />
                          {item.bestFit}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-zinc-600 leading-relaxed">
                        {item.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. Ways to start #ways-to-start */}
        <section id="ways-to-start" className="mb-24">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Project Starters
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#09090B] font-display">
              Ways to start
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 font-mono">
              Starter packages tailored to your project scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {STARTER_PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.name}
                className="flex flex-col justify-between rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 sm:p-7 shadow-sm hover:border-[#BE123C] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                      Package 0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700">
                      {pkg.from}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#09090B] font-display">
                    {pkg.name}
                  </h3>

                  <div className="mt-2 text-xs font-mono text-[#BE123C] font-medium">
                    For: {pkg.forWho}
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#E4E4E7]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                      Includes
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {pkg.includes}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4E4E7]">
                  <button
                    onClick={() => onNavigate('/contact/')}
                    className="w-full text-center text-xs font-semibold py-2.5 px-3 rounded border border-zinc-300 bg-white hover:border-[#E11D48] hover:text-[#E11D48] transition-colors"
                  >
                    Ask for a quote &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-md bg-zinc-50 border border-zinc-200 p-4 text-xs text-[#52525B] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p>
              <strong className="text-zinc-900 font-semibold">Note:</strong> Every project is quoted to its size and goal. Prices shown are starting points.
            </p>
            <button
              onClick={() => onNavigate('/contact/')}
              className="text-xs font-semibold text-[#E11D48] hover:underline whitespace-nowrap"
            >
              Ask for a quote &rarr;
            </button>
          </div>
        </section>

        {/* Toolkit reference (§12 Verification) */}
        <div id="toolkit" className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-8 mb-24 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">
              Rigor &amp; Tooling
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#09090B] font-display">
              Field &amp; Studio Toolkit
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52525B]">
              Every tool in our kit serves a distinct phase in the reality-capture value chain.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#E4E4E7] text-zinc-500 font-mono">
                  <th className="pb-3 font-medium">Domain / Phase</th>
                  <th className="pb-3 font-medium">What It Does For You</th>
                  <th className="pb-3 font-medium">Representative Tools &amp; Hardware</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 font-mono text-[11px]">
                {TOOLKIT.map((t) => (
                  <tr key={t.category} className="hover:bg-zinc-100 transition-colors">
                    <td className="py-3 font-bold text-[#09090B]">{t.category}</td>
                    <td className="py-3 text-zinc-600 font-sans">{t.whatItDoesForYou}</td>
                    <td className="py-3 text-[#BE123C]">{t.examples.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Proof */}
        <section id="proof" className="mb-24 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Delivered Work
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#09090B] font-display">
              See it in action
            </h2>
            <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
              Explore projects we've delivered for heritage sites, schools, colleges and hotels.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/work/')}
            className="loro-btn-secondary px-6 py-3.5 text-xs font-semibold whitespace-nowrap self-start md:self-center"
          >
            See our work &rarr;
          </button>
        </section>

        {/* 7. CTA band */}
        <section id="cta-band" className="rounded-xl border border-[#E4E4E7] bg-gradient-to-b from-[#FAFAFA] to-[#FFFFFF] p-8 sm:p-14 text-center shadow-md">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-600 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
              <span>Free consultation &amp; custom proposal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#09090B] font-display">
              Not sure where to start?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
              Tell us about your place and what you want people to do. We'll suggest the right mix and send a clear proposal.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('/contact/')}
                className="loro-btn-primary w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                Plan your experience &rarr;
              </button>

              <a
                href={SITE_METADATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="loro-btn-secondary w-full sm:w-auto px-7 py-3.5 text-xs font-medium flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
                <span className="text-emerald-600 font-bold">↗</span>
              </a>
            </div>

            <div className="mt-6 text-xs text-zinc-400 font-mono">
              Direct response within 24 hours · Kathmandu, Nepal
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
