import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RoutePath } from '../types';
import { CASE_STUDIES } from '../data/siteData';
import { SplatEmbed } from '../components/SplatEmbed';
import { SpotlightCard } from '../components/SpotlightCard';
import { KineticSpatialCard } from '../components/KineticSpatialCard';

interface WorkPageProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ currentPath, onNavigate, onOpenPlanner }) => {
  const [filterTag, setFilterTag] = useState<string>('All');

  // Check if viewing a specific project
  const currentProject = CASE_STUDIES.find((c) => currentPath.includes(c.slug)) || null;

  const filteredProjects = filterTag === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.tag === filterTag);

  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/work/')} className="hover:text-zinc-900">Our Work</button>
          {currentProject && (
            <>
              <span>/</span>
              <span className="text-[#E11D48] font-semibold">{currentProject.title}</span>
            </>
          )}
        </nav>

        {currentProject ? (
          /* Single Project Case Study View */
          <div>
            {/* Hero Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mb-12"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#E11D48] uppercase tracking-wider font-semibold">
                <span>{currentProject.tag}</span>
                <span>·</span>
                <span>{currentProject.location}</span>
              </div>
              <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
                {currentProject.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
                {currentProject.line}
              </p>
            </motion.div>

            {/* Interactive 3D Viewer for the Project */}
            <div className="mb-14">
              <div className="mb-2 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Interactive 3D Walkthrough Model</span>
                <span className="text-[#E11D48]">Gaussian Splats · Zero App</span>
              </div>
              <SplatEmbed initialDemo={currentProject.embedDemoId} />
            </div>

            {/* Project Deep Dive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 shadow-sm">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">The Goal &amp; Scope</span>
                <h3 className="mt-1 text-base font-bold text-[#09090B] font-display">Client Objective</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#52525B]">
                  {currentProject.clientGoal}
                </p>
                {currentProject.resultMetric && (
                  <div className="mt-4 pt-3 border-t border-[#E4E4E7] text-xs font-mono text-[#BE123C] font-semibold">
                    {currentProject.resultMetric}
                  </div>
                )}
              </div>

              <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 shadow-sm">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Engineering Toolkit</span>
                <h3 className="mt-1 text-base font-bold text-[#09090B] font-display">Technology Deployed</h3>
                <div className="mt-3 space-y-1.5 text-xs text-[#52525B] font-mono">
                  {currentProject.techUsed.map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 shadow-sm">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Deliverables</span>
                <h3 className="mt-1 text-base font-bold text-[#09090B] font-display">Packaged Assets</h3>
                <div className="mt-3 space-y-1.5 text-xs text-[#52525B]">
                  {currentProject.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Project Nav */}
            <div className="flex items-center justify-between border-t border-[#E4E4E7] pt-8">
              <button
                onClick={() => onNavigate('/work/')}
                className="text-xs font-mono text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
              >
                <span>&larr;</span>
                <span>Back to all case studies</span>
              </button>

              <button
                onClick={onOpenPlanner}
                className="loro-btn-primary px-5 py-2.5 text-xs uppercase tracking-wider"
              >
                Plan your experience &rarr;
              </button>
            </div>

          </div>
        ) : (
          /* Portfolio Overview Grid */
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mb-12"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">
                Captured Spaces
              </span>
              <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
                Real places, real stories, real results
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
                Explore our portfolio of captured heritage sites, boutique luxury hotels, academic institutions, and technical campuses across Nepal.
              </p>
            </motion.div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E4E4E7]">
              {['All', 'Cultural Heritage', 'Hospitality', 'Education', 'Vocational Campus'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilterTag(tag)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                    filterTag === tag
                      ? 'bg-[#E11D48] text-white font-medium'
                      : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {filteredProjects.map((study) => (
                <KineticSpatialCard
                  key={study.id}
                  imageSrc={study.heroImage}
                  title={study.title}
                  location={study.location}
                  tag={study.tag}
                  line={study.line}
                  onClick={() => onNavigate(`/work/${study.slug}/` as RoutePath)}
                />
              ))}
            </div>

            {/* Bottom proposal callout */}
            <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-8 sm:p-12 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#09090B] font-display">
                Have a place in mind?
              </h2>
              <p className="mt-2 text-sm text-[#52525B] max-w-md mx-auto">
                We'll visit your site in Kathmandu Valley or across Nepal, survey the parameters, and propose a customized capture plan.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={onOpenPlanner}
                  className="loro-btn-primary px-6 py-2.5 text-xs uppercase tracking-wider"
                >
                  Plan your experience &rarr;
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
