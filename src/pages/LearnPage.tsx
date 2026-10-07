import React from 'react';
import { RoutePath } from '../types';
import { SpotlightCard } from '../components/SpotlightCard';

interface LearnPageProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const LearnPage: React.FC<LearnPageProps> = ({ currentPath, onNavigate, onOpenPlanner }) => {
  const isComparison = currentPath.includes('3d-virtual-tour-vs-360-tour-vs-video');
  const isGaussian = currentPath.includes('what-is-gaussian-splatting');
  const isCost = currentPath.includes('planning-a-3d-experience-cost-and-timeline');

  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/learn/')} className="hover:text-zinc-900">Learn</button>
          {isComparison && (
            <>
              <span>/</span>
              <span className="text-[#E11D48] font-semibold">3D Tour vs 360 vs Video</span>
            </>
          )}
          {isGaussian && (
            <>
              <span>/</span>
              <span className="text-[#E11D48] font-semibold">What is Gaussian Splatting</span>
            </>
          )}
          {isCost && (
            <>
              <span>/</span>
              <span className="text-[#E11D48] font-semibold">Cost &amp; Timeline</span>
            </>
          )}
        </nav>

        {isComparison ? (
          /* Guide 1: 3D Tour vs 360 Tour vs Video */
          <article className="max-w-4xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Buyer Guide · Decision Framework
            </span>
            <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-[#09090B] font-display">
              3D Virtual Tour vs 360° Tour vs Video: Which Should You Choose?
            </h1>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-zinc-500 border-b border-[#E4E4E7] pb-6">
              <span>By RCAAS Engineering Team</span>
              <span>·</span>
              <span>Updated October 2026</span>
              <span>·</span>
              <span>6 min read</span>
            </div>

            <div className="mt-8 space-y-6 text-sm text-[#52525B] leading-relaxed">
              <p className="text-base font-medium text-zinc-800">
                When deciding how to showcase a physical property in Nepal, stakeholders often debate between three mediums: conventional 2D promotional video, 360° panoramic photos, and modern interactive 3D virtual tours. Here is our direct, objective engineering breakdown.
              </p>

              <h2 className="text-xl font-bold text-[#09090B] font-display pt-4">
                Comparison Matrix
              </h2>
              
              <div className="overflow-x-auto rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-4 shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E4E4E7] text-zinc-600 font-mono">
                      <th className="pb-2 font-medium">Dimension</th>
                      <th className="pb-2 font-medium">Conventional Video</th>
                      <th className="pb-2 font-medium">360° Bubble Photos</th>
                      <th className="pb-2 font-medium text-[#BE123C]">RCAAS 3D Tour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 font-mono text-[11px]">
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-zinc-900">Viewer Autonomy</td>
                      <td className="py-2.5 text-zinc-600">Zero (Passive watching)</td>
                      <td className="py-2.5 text-zinc-600">Fixed node hop-only</td>
                      <td className="py-2.5 font-bold text-[#BE123C]">100% Free continuous walk</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-zinc-900">Spatial Depth Understanding</td>
                      <td className="py-2.5 text-zinc-600">Low (Curated angles)</td>
                      <td className="py-2.5 text-zinc-600">Distorted fisheye spheres</td>
                      <td className="py-2.5 font-bold text-[#BE123C]">Photorealistic 3D Depth</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-zinc-900">Engineering Measurement</td>
                      <td className="py-2.5 text-zinc-600">None</td>
                      <td className="py-2.5 text-zinc-600">Unreliable approximations</td>
                      <td className="py-2.5 font-bold text-[#BE123C]">±5mm SLAM LiDAR precision</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-zinc-900">Average Engagement Duration</td>
                      <td className="py-2.5 text-zinc-600">30–45 seconds</td>
                      <td className="py-2.5 text-zinc-600">1–2 minutes</td>
                      <td className="py-2.5 font-bold text-[#BE123C]">4.5+ minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold text-[#09090B] font-display pt-4">
                The Verdict for Different Goals
              </h2>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <strong className="text-zinc-900">Choose Promotional Video</strong> for fast-paced Instagram and TikTok broadcast ads where immediate emotional music and pacing drive awareness.
                </li>
                <li>
                  <strong className="text-zinc-900">Choose 3D Virtual Tours</strong> when your viewer is at the evaluation stage (booking a high-value hotel suite, choosing an engineering college, or buying a home) and wants to inspect the space thoroughly.
                </li>
              </ul>
            </div>
          </article>
        ) : isGaussian ? (
          /* Guide 2: What is Gaussian Splatting */
          <article className="max-w-4xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Technology Deep Dive
            </span>
            <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-[#09090B] font-display">
              What is 3D Gaussian Splatting and Why Does It Matter for Real Places?
            </h1>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-zinc-500 border-b border-[#E4E4E7] pb-6">
              <span>By Geomatics &amp; 3D Graphics Lab</span>
              <span>·</span>
              <span>Updated October 2026</span>
              <span>·</span>
              <span>5 min read</span>
            </div>

            <div className="mt-8 space-y-6 text-sm text-[#52525B] leading-relaxed">
              <p className="text-base font-medium text-zinc-800">
                3D Gaussian Splatting (3DGS) represents the biggest breakthrough in neural reality capture since photogrammetry. Unlike mesh models that simplify intricate details, Gaussian Splats preserve specular reflections, brass glints, fine Newari stone carvings, and delicate greenery.
              </p>

              <h2 className="text-xl font-bold text-[#09090B] font-display pt-4">
                How It Works in Practice
              </h2>
              <p>
                Instead of forcing surfaces into flat geometric triangles with stretched textures, 3DGS optimizes millions of semi-transparent, anisotropic 3D Gaussians (ellipsoids) in space. Each splat carries position, covariance (orientation and shape), color, and opacity.
              </p>

              <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#09090B] font-display mb-2">
                  The RCAAS Hybrid Approach
                </h3>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  We combine SLAM LiDAR laser scanning with drone photogrammetry and Gaussian Splatting. The LiDAR provides an unshakeable millimeter-accurate geometric skeleton (±5mm), ensuring scale integrity, while the Gaussian radiance fields render lifelike materials, ambient bounce lighting, and true-to-life atmosphere.
                </p>
              </div>
            </div>
          </article>
        ) : (
          /* Knowledge Hub List View */
          <div>
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
                Knowledge &amp; Frameworks
              </span>
              <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
                Guides to 3D Tours, VR &amp; Digital Twins
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
                Objective buyer frameworks, technology deep dives, and practical execution guides for hospitality, education, and heritage leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              <SpotlightCard
                onClick={() => onNavigate('/learn/3d-virtual-tour-vs-360-tour-vs-video/')}
                className="p-7 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase">Framework · 6 min</span>
                  <h2 className="mt-2 text-xl font-bold text-[#09090B] font-display hover:text-[#E11D48] transition-colors">
                    3D Virtual Tour vs 360° Tour vs Video
                  </h2>
                  <p className="mt-3 text-xs text-[#52525B] leading-relaxed">
                    Which medium drives actual bookings, applications, and engagement? A side-by-side comparison.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E4E4E7] text-xs font-semibold text-[#09090B]">
                  Read framework &rarr;
                </div>
              </SpotlightCard>

              <SpotlightCard
                onClick={() => onNavigate('/learn/what-is-gaussian-splatting/')}
                className="p-7 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase">Technology · 5 min</span>
                  <h2 className="mt-2 text-xl font-bold text-[#09090B] font-display hover:text-[#E11D48] transition-colors">
                    What is 3D Gaussian Splatting?
                  </h2>
                  <p className="mt-3 text-xs text-[#52525B] leading-relaxed">
                    Why neural radiance fields deliver unmatched photorealism for historical monuments and luxury interiors.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E4E4E7] text-xs font-semibold text-[#09090B]">
                  Read deep dive &rarr;
                </div>
              </SpotlightCard>

              <SpotlightCard
                onClick={() => onNavigate('/learn/planning-a-3d-experience-cost-and-timeline/')}
                className="p-7 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase">Planning · 4 min</span>
                  <h2 className="mt-2 text-xl font-bold text-[#09090B] font-display hover:text-[#E11D48] transition-colors">
                    Planning a 3D Project: Cost &amp; Timeline
                  </h2>
                  <p className="mt-3 text-xs text-[#52525B] leading-relaxed">
                    How scanning square metres, multi-floor layouts, and deliverables influence overall project turnaround.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E4E4E7] text-xs font-semibold text-[#09090B]">
                  Read guide &rarr;
                </div>
              </SpotlightCard>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
