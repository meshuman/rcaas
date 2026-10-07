import React from 'react';
import { RoutePath } from '../types';
import { SITE_METADATA } from '../data/siteData';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRegister }) => {
  return (
    <footer className="border-t border-[#E4E4E7] bg-[#FAFAFA] text-[#52525B]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#09090B] font-display text-left"
            >
              <span>RCAAS</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E11D48]"></span>
            </button>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-zinc-600">
              {SITE_METADATA.boilerplate}
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span>{SITE_METADATA.location}</span>
              <span>·</span>
              <span>{SITE_METADATA.phone}</span>
            </div>
            <div className="mt-1.5 text-xs font-mono">
              <a href={`mailto:${SITE_METADATA.email}`} className="text-zinc-700 hover:text-[#E11D48] transition-colors">
                {SITE_METADATA.email}
              </a>
            </div>
          </div>

          {/* What we create */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#09090B] font-mono">
              What we create
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/services/immersive-experiences/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Immersive Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/immersive-experiences/3d-virtual-tours/')}
                  className="text-zinc-500 hover:text-[#09090B] text-left transition-colors pl-2 border-l border-[#E4E4E7]"
                >
                  3D Virtual Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/visual-storytelling/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Visual Storytelling
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/digital-twins/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Digital Twins &amp; Survey
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/digital-twins/3d-laser-scanning/')}
                  className="text-zinc-500 hover:text-[#09090B] text-left transition-colors pl-2 border-l border-[#E4E4E7]"
                >
                  3D Laser Scanning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/digital-twins/drone-mapping/')}
                  className="text-zinc-500 hover:text-[#09090B] text-left transition-colors pl-2 border-l border-[#E4E4E7]"
                >
                  Drone Mapping
                </button>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#09090B] font-mono">
              Industries
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/industries/hospitality-tourism/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Hotels &amp; Tourism
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/industries/education/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Education &amp; Campuses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/industries/real-estate-architecture/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Real Estate &amp; Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/industries/heritage-culture/')}
                  className="text-[#E11D48] font-medium hover:underline text-left transition-colors"
                >
                  Heritage &amp; Culture (Flagship)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/industries/government-municipalities/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Government &amp; Municipalities
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Knowledge */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#09090B] font-mono">
              Company &amp; Know-how
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/about/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  About RCAAS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/how-we-work/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  How We Work (5 Steps)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/work/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Case Studies &amp; Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/platform/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Cloud 3D Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/learn/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  Guides &amp; Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/faq/')}
                  className="hover:text-[#09090B] text-left transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact/')}
                  className="text-[#E11D48] font-medium hover:underline text-left transition-colors"
                >
                  Contact &amp; Enquiry
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Legal Bar & Auditor Trigger */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E4E4E7] pt-8 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {SITE_METADATA.legalName}. All rights reserved. Registered in Kathmandu, Nepal.
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('/privacy/')}
              className="hover:text-[#09090B] transition-colors"
            >
              Privacy
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('/terms/')}
              className="hover:text-[#09090B] transition-colors"
            >
              Terms
            </button>
            <span>·</span>
            {/* Developer / Auditor Mode Button for §13 Register */}
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 rounded border border-[#E4E4E7] bg-white px-2 py-1 text-[11px] text-zinc-600 hover:border-zinc-400 hover:text-zinc-950 transition-colors"
              title="Inspect Section 13 Placeholder & Simulation Register"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]"></span>
              <span>Audit Register (§13)</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
