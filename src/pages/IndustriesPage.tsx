import React from 'react';
import { motion } from 'motion/react';
import { RoutePath } from '../types';
import { INDUSTRIES, CASE_STUDIES } from '../data/siteData';
import { SpotlightCard } from '../components/SpotlightCard';

interface IndustriesPageProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ currentPath, onNavigate, onOpenPlanner }) => {
  const currentIndustry = INDUSTRIES.find((i) => currentPath === i.link) || null;

  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/industries/')} className="hover:text-zinc-900">Industries</button>
          {currentIndustry && (
            <>
              <span>/</span>
              <span className="text-[#E11D48] font-semibold">{currentIndustry.title}</span>
            </>
          )}
        </nav>

        {currentIndustry ? (
          /* Single Industry Detail View */
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mb-14"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">
                Industry Solution · {currentIndustry.badge}
              </span>
              <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
                {currentIndustry.goalHeadline}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
                {currentIndustry.summary}
              </p>
            </motion.div>

            {/* Special Flagship Heritage Band */}
            {currentIndustry.id === 'heritage-culture' && (
              <div className="mb-16 rounded-lg overflow-hidden border border-rose-200 bg-rose-50/50 p-8 sm:p-12 relative shadow-sm">
                <div className="max-w-2xl relative z-10">
                  <span className="text-xs font-mono text-[#BE123C] uppercase tracking-wider font-semibold">
                    Flagship Mission · Cultural Preservation
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#09090B] font-display">
                    Preserving Nepal's sacred monuments in sub-centimetre 3D
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    Centuries of wood carvings, stone stupas, and Newari shrines face degradation from climatic changes and seismic vulnerability. RCAAS documents these heritage treasures in mm-accurate SLAM LiDAR and Gaussian splats for archival restoration, educational research, and global appreciation.
                  </p>
                </div>
              </div>
            )}

            {/* Sector Deep Dive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <SpotlightCard className="p-6">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">01 · Desired Action</span>
                <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Target Visitor Goal</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Every asset we create is tailored directly toward moving your prospective visitor, student, or investor to act without hesitation.
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-6">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">02 · Measurement Standard</span>
                <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Precision Engineering</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  SLAM LiDAR laser scanning captures geometry with ±5mm tolerances, giving facility managers and architects reliable as-built data.
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-6">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">03 · Verified Proof</span>
                <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Case Proof</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  {currentIndustry.proof}
                </p>
              </SpotlightCard>
            </div>

            <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-8 text-center shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] font-display">
                Ready to transform your {currentIndustry.title.toLowerCase()} space?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#52525B] max-w-lg mx-auto">
                Schedule a consultation with our Kathmandu engineering team to discuss site scanning schedules and deliverables.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={onOpenPlanner}
                  className="loro-btn-primary px-6 py-2.5 text-xs uppercase tracking-wider"
                >
                  Plan proposal &rarr;
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* All Industries Hub View */
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mb-16"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">
                Strategic Sectors
              </span>
              <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
                Built around your business goal
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
                Tell us what you want people to do after they've seen your place. We design the virtual capture and interactive narrative around that single action.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {INDUSTRIES.map((ind) => (
                <SpotlightCard
                  key={ind.id}
                  onClick={() => onNavigate(ind.link as RoutePath)}
                  className="cursor-pointer p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#09090B] font-semibold">{ind.title}</span>
                      <span className="text-zinc-500 text-[11px] bg-zinc-100 px-2 py-0.5 rounded">{ind.badge}</span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-[#09090B] font-display hover:text-[#E11D48] transition-colors">
                      {ind.goalHeadline}
                    </h2>

                    <p className="mt-3 text-xs text-[#52525B] leading-relaxed">
                      {ind.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E4E4E7] flex items-center justify-between text-xs font-medium text-zinc-700">
                    <span className="text-[11px] font-mono text-zinc-500">Proof: {ind.proof.split(',')[0]}</span>
                    <span className="text-[#E11D48] font-semibold">&rarr;</span>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
