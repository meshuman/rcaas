import React from 'react';
import { RoutePath } from '../types';
import { SITE_METADATA } from '../data/siteData';

interface LegalPagesProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: RoutePath) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <span className="text-zinc-700">{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</span>
        </nav>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#09090B] font-display mb-4">
          {isPrivacy ? 'Privacy & Spatial Data Policy' : 'Terms of Service & Hosting Agreement'}
        </h1>
        <div className="text-xs font-mono text-zinc-500 mb-10 pb-4 border-b border-[#E4E4E7]">
          Last Updated: 7 October 2026 · {SITE_METADATA.legalName}
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#52525B] leading-relaxed">
          {isPrivacy ? (
            <>
              <section>
                <h2 className="text-sm font-bold text-[#09090B] font-display mb-2 uppercase tracking-wide">1. Overview &amp; Commitment</h2>
                <p>
                  At RCAAS Technology Pvt. Ltd. ("RCAAS"), we take privacy seriously when capturing physical spaces in Nepal. This policy outlines how we capture, process, host, and protect visual and spatial data.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-bold text-[#09090B] font-display mb-2 uppercase tracking-wide">2. People and Faces in Reality Captures</h2>
                <p>
                  We coordinate all field laser scanning and aerial drone flights with facility owners to capture spaces during closed or non-peak hours. If any members of the public, guests, or staff are unavoidably present during scanning, their faces and vehicle license plates are obscured or blurred prior to public web publication.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-bold text-[#09090B] font-display mb-2 uppercase tracking-wide">3. Proprietary Business Information</h2>
                <p>
                  Our team avoids scanning private filing documents, secure financial rooms, or proprietary machinery unless explicitly requested and authorized in writing by the client.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-bold text-[#09090B] font-display mb-2 uppercase tracking-wide">4. Website Inquiries &amp; Analytics</h2>
                <p>
                  Contact information submitted through our proposal planner (name, email, phone, organisation) is used exclusively for responding to your inquiries. We do not sell or distribute personal client data to third parties.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-sm font-bold text-[#09090B] font-display mb-2 uppercase tracking-wide">1. Service Scope &amp; Methodology</h2>
                <p>
                  RCAAS Technology provides reality capture services including SLAM LiDAR laser scanning, aerial drone photogrammetry, Gaussian splat radiance field reconstruction, and 3D web hosting services across Nepal.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-bold text-[#09090B] font-display mb-2 uppercase tracking-wide">2. Client Data Ownership</h2>
                <p>
                  Clients retain complete, unencumbered ownership of all raw spatial point cloud archives, 3D meshes, 4K film masters, and photographic assets upon settlement of agreed project fees.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-bold text-[#09090B] font-display mb-2 uppercase tracking-wide">3. Site Access &amp; Drone Flight Clearances</h2>
                <p>
                  The client is responsible for granting physical site access during scheduled scanning windows. RCAAS complies with all Civil Aviation Authority of Nepal (CAAN) regulations for permitted drone flights.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-bold text-[#09090B] font-display mb-2 uppercase tracking-wide">4. Cloud Hosting &amp; Uptime</h2>
                <p>
                  Our 3D platform guarantees 99.9% uptime for hosted Gaussian splat tours, delivered via globally distributed edge content delivery networks.
                </p>
              </section>
            </>
          )}
        </div>

        <div className="mt-12 pt-6 border-t border-[#E4E4E7]">
          <button
            onClick={() => onNavigate('/')}
            className="text-xs font-mono text-[#E11D48] hover:underline flex items-center gap-1"
          >
            &larr; Return to Homepage
          </button>
        </div>

      </div>
    </div>
  );
};
