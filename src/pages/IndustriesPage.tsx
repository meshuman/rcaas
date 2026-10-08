import React from 'react';
import { motion } from 'motion/react';
import { RoutePath } from '../types';
import { INDUSTRIES, CASE_STUDIES, SITE_METADATA } from '../data/siteData';
import { SpotlightCard } from '../components/SpotlightCard';

interface IndustriesPageProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ currentPath, onNavigate, onOpenPlanner }) => {
  const currentIndustry = INDUSTRIES.find((i) => currentPath === i.link) || null;

  // Find relevant case studies for the current industry
  const relatedCaseStudies = currentIndustry
    ? CASE_STUDIES.filter((cs) => {
        if (currentIndustry.id === 'hospitality-tourism') return cs.id === 'basera-hotel';
        if (currentIndustry.id === 'education') return cs.id === 'nepathya-college' || cs.id === 'madan-ashrit';
        if (currentIndustry.id === 'heritage-culture') return cs.id === 'chilancho-stupa';
        return false;
      })
    : [];

  return (
    <div className="py-16 md:py-24 bg-white text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8 sm:mb-12">
          <button 
            onClick={() => onNavigate('/')} 
            className="hover:text-zinc-900 transition-colors"
          >
            Home
          </button>
          <span className="text-zinc-400">›</span>
          <button 
            onClick={() => onNavigate('/industries/')} 
            className={`transition-colors ${!currentIndustry ? 'text-zinc-900 font-semibold' : 'hover:text-zinc-900'}`}
          >
            Industries
          </button>
          {currentIndustry && (
            <>
              <span className="text-zinc-400">›</span>
              <span className="text-[#E11D48] font-semibold">{currentIndustry.title}</span>
            </>
          )}
        </nav>

        {currentIndustry ? (
          /* ==============================================================
             SINGLE INDUSTRY DETAIL VIEW
             ============================================================== */
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 border border-zinc-200/80 text-xs font-mono text-zinc-700 uppercase tracking-wider mb-4">
                <span>Industry Solution</span>
                <span className="text-zinc-300">·</span>
                <span className="text-[#E11D48] font-semibold">{currentIndustry.title}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#09090B] font-display">
                {currentIndustry.goalHeadline}
              </h1>
              <p className="mt-4 text-base sm:text-xl text-[#52525B] leading-relaxed">
                {currentIndustry.summary}
              </p>
              {currentIndustry.whoItsFor && (
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-600">
                  <span className="font-mono text-zinc-400">Who it's for:</span>
                  <span className="font-medium text-zinc-800">{currentIndustry.whoItsFor}</span>
                </div>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('/contact/')}
                  className="loro-btn-primary px-6 py-3 text-xs tracking-wider uppercase"
                >
                  Plan your experience →
                </button>
                <a
                  href={SITE_METADATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs tracking-wider uppercase font-mono font-medium rounded border border-zinc-300 text-zinc-800 hover:border-zinc-900 hover:bg-zinc-50 transition-colors inline-flex items-center gap-2"
                >
                  Message on WhatsApp →
                </a>
              </div>
            </motion.div>

            {/* Flagship Cultural Highlight for Heritage */}
            {currentIndustry.id === 'heritage-culture' && (
              <div className="mb-14 rounded-lg overflow-hidden border border-rose-200 bg-rose-50/50 p-8 sm:p-10 relative shadow-xs">
                <div className="max-w-3xl relative z-10">
                  <span className="text-xs font-mono text-[#BE123C] uppercase tracking-wider font-semibold">
                    Flagship Preservation · Cultural Heritage
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#09090B] font-display">
                    Preserving Nepal's sacred monuments in sub-centimetre 3D
                  </h2>
                  <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                    Centuries of wood carvings, stone stupas, and Newari shrines face degradation from climatic changes and seismic vulnerability. RCAAS documents these heritage treasures in mm-accurate SLAM LiDAR and Gaussian splats for archival restoration, educational research, and global exploration.
                  </p>
                </div>
              </div>
            )}

            {/* Strategic Pillars Grid */}
            <div className="mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-[#09090B] font-display mb-6">
                How we deliver results for {currentIndustry.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SpotlightCard className="p-6">
                  <span className="text-xs font-mono text-[#E11D48] uppercase tracking-wider font-semibold">01 · Outcome First</span>
                  <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Target Visitor Goal</h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    Every asset is shaped around what you need people to do after they see your space—whether booking a suite, submitting an admission form, or approving restoration plans.
                  </p>
                </SpotlightCard>

                <SpotlightCard className="p-6">
                  <span className="text-xs font-mono text-[#E11D48] uppercase tracking-wider font-semibold">02 · Spatial Precision</span>
                  <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Engineering Accuracy</h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    High-accuracy SLAM LiDAR and aerial photogrammetry capture authentic architectural scale and geometry, cutting repeat site visits and planning friction.
                  </p>
                </SpotlightCard>

                <SpotlightCard className="p-6">
                  <span className="text-xs font-mono text-[#E11D48] uppercase tracking-wider font-semibold">03 · Verified Proof</span>
                  <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Proof in Field</h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    {currentIndustry.proof ? (
                      <span>Demonstrated in live captures: <strong className="text-zinc-900 font-semibold">{currentIndustry.proof}</strong>.</span>
                    ) : (
                      <span>Engineered to strict professional survey standards for developers and regional bodies across Nepal.</span>
                    )}
                  </p>
                </SpotlightCard>
              </div>
            </div>

            {/* Related Case Studies */}
            {relatedCaseStudies.length > 0 && (
              <div className="mb-16 pt-8 border-t border-zinc-200">
                <h2 className="text-xl sm:text-2xl font-bold text-[#09090B] font-display mb-6">
                  Featured Case Proof
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedCaseStudies.map((cs) => (
                    <SpotlightCard key={cs.id} className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                          <span className="text-[#E11D48] font-semibold">{cs.tag}</span>
                          <span>{cs.location}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#09090B] font-display">{cs.title}</h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#52525B] leading-relaxed">{cs.line}</p>
                        {cs.resultMetric && (
                          <div className="mt-4 p-3 bg-zinc-50 rounded border border-zinc-200 text-xs font-mono text-zinc-800">
                            {cs.resultMetric}
                          </div>
                        )}
                      </div>
                      <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-xs font-mono text-zinc-500">{cs.deliverables.slice(0, 2).join(' · ')}</span>
                        <button
                          onClick={() => onNavigate('/work/')}
                          className="text-xs font-mono text-[#E11D48] font-semibold hover:underline"
                        >
                          View work →
                        </button>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </div>
            )}

            {/* Back to all industries and consultation CTA */}
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/70 p-8 text-center shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] font-display">
                Ready to transform your {currentIndustry.title.toLowerCase()} space?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#52525B] max-w-lg mx-auto">
                Tell us what you want people to do after they see your place. We'll recommend the right mix of tour, film and data.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => onNavigate('/contact/')}
                  className="loro-btn-primary px-6 py-2.5 text-xs uppercase tracking-wider"
                >
                  Plan your experience →
                </button>
                <button
                  onClick={() => onNavigate('/industries/')}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-mono font-medium rounded border border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:bg-white transition-colors"
                >
                  All industries
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ==============================================================
             INDUSTRIES HUB VIEW (/industries/) - SPEC §6.5
             ============================================================== */
          <div>
            {/* 1. INTRO */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mb-14 sm:mb-16"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold block mb-2">
                Industries Hub
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#09090B] font-display">
                Built for your goal
              </h1>
              <p className="mt-5 text-base sm:text-xl text-[#52525B] leading-relaxed">
                A hotel wants bookings. A college wants applications. A conservator wants a record that lasts. We start with what you need people to do, then choose the experience, the story and the data that will help them do it.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => onNavigate('/contact/')}
                  className="loro-btn-primary px-6 py-3 text-xs tracking-wider uppercase"
                >
                  Plan your experience →
                </button>
              </div>
            </motion.div>

            {/* 2. INDUSTRY CARDS */}
            <section aria-label="Industries" className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INDUSTRIES.map((ind) => (
                  <SpotlightCard
                    key={ind.id}
                    onClick={() => onNavigate(ind.link as RoutePath)}
                    className="cursor-pointer p-7 flex flex-col justify-between group hover:border-zinc-400 transition-colors"
                  >
                    <div>
                      {/* Card Header: Sector & Who it's for */}
                      <div className="flex items-start justify-between gap-3 text-xs font-mono">
                        <span className="text-[#09090B] font-semibold tracking-tight">{ind.title}</span>
                        <span className="text-zinc-500 text-[10px] bg-zinc-100 border border-zinc-200/60 px-2 py-0.5 rounded shrink-0">
                          {ind.badge}
                        </span>
                      </div>

                      {/* Who it's for */}
                      {ind.whoItsFor && (
                        <p className="mt-2 text-[11px] font-mono text-zinc-500">
                          {ind.whoItsFor}
                        </p>
                      )}

                      {/* Goal Headline */}
                      <h2 className="mt-4 text-xl font-bold text-[#09090B] font-display group-hover:text-[#E11D48] transition-colors leading-snug">
                        {ind.goalHeadline}
                      </h2>

                      {/* Line */}
                      <p className="mt-3 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                        {ind.summary}
                      </p>
                    </div>

                    {/* Footer: Proof (if available) + Link */}
                    <div className="mt-6 pt-4 border-t border-zinc-200/80 flex items-center justify-between text-xs">
                      {ind.proof ? (
                        <span className="text-[11px] font-mono text-zinc-600 truncate max-w-[200px]" title={ind.proof}>
                          Proof: {ind.proof}
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-zinc-400">
                          Explore solutions
                        </span>
                      )}
                      <span className="text-[#E11D48] font-semibold group-hover:translate-x-0.5 transition-transform">
                        &rarr;
                      </span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </section>

            {/* 3. CLOSING CTA BAND */}
            <section className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-8 sm:p-12 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold block mb-2">
                  Tailored Recommendation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#09090B] font-display tracking-tight">
                  Not sure which experience fits your goal?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#52525B] leading-relaxed">
                  Tell us what you want people to do after they see your place. We'll recommend the right mix of tour, film and data.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('/contact/')}
                    className="loro-btn-primary px-6 py-3 text-xs uppercase tracking-wider"
                  >
                    Talk with us →
                  </button>
                  <a
                    href={SITE_METADATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-xs uppercase tracking-wider font-mono font-medium rounded border border-zinc-300 text-zinc-800 hover:border-zinc-900 hover:bg-white transition-colors inline-flex items-center gap-2"
                  >
                    Message on WhatsApp →
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  );
};
