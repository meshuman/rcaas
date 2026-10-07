import React, { useState } from 'react';
import { RoutePath } from '../types';
import { SplatEmbed } from '../components/SplatEmbed';
import { SpotlightCard } from '../components/SpotlightCard';

interface PlatformPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [email, setEmail] = useState('');
  const [earlyAccessSuccess, setEarlyAccessSuccess] = useState(false);

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEarlyAccessSuccess(true);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <span className="text-zinc-700">Platform</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
            RCAAS 3D Viewer &amp; Cloud Hosting
          </span>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
            One link. Your space, explorable anywhere.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Photorealistic 3D in any browser on phones, tablets, and laptops. Zero apps, zero downloads, and built to turn viewers into booked visitors.
          </p>
        </div>

        {/* Live Viewer Showcase */}
        <div className="mb-20">
          <div className="mb-3 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span className="text-zinc-900 font-semibold">Active Viewer Engine</span>
            <span>Gaussian Splat WebGL Runtime</span>
          </div>
          <SplatEmbed initialDemo="basera" autoStart={true} />
        </div>

        {/* Features built to convert */}
        <div className="mb-20">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Conversion Features
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#09090B] font-display">
              Engineered to move people to act
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard className="p-7">
              <span className="font-mono text-xs text-[#BE123C] font-semibold uppercase">01 · Zero Barrier</span>
              <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Instant Web Access</h3>
              <p className="mt-3 text-xs leading-relaxed text-[#52525B]">
                Streams compressed radiance fields progressively in 2–4 seconds on typical mobile 4G/Wi-Fi connections. No native App Store barrier.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-7">
              <span className="font-mono text-xs text-[#BE123C] font-semibold uppercase">02 · Conversion Hotspots</span>
              <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Booking &amp; Contact Sync</h3>
              <p className="mt-3 text-xs leading-relaxed text-[#52525B]">
                Interactive point-of-interest markers connect directly to your reservation engine, WhatsApp helpline, or admission forms.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-7">
              <span className="font-mono text-xs text-[#BE123C] font-semibold uppercase">03 · Universal Embed</span>
              <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">Website &amp; Social Ready</h3>
              <p className="mt-3 text-xs leading-relaxed text-[#52525B]">
                Drop into any existing WordPress, Webflow, Squarespace, or custom code via a simple responsive iframe embed or QR code card.
              </p>
            </SpotlightCard>
          </div>
        </div>

        {/* Early Access / Hosting Plan Sign Up */}
        <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-8 sm:p-12 max-w-3xl mx-auto text-center shadow-sm">
          <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">
            Dedicated Cloud Hosting
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#09090B] font-display">
            Host your 3D assets on our Kathmandu edge CDN
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#52525B] max-w-lg mx-auto">
            Get lightning-fast asset streaming with 99.9% uptime, global CDN delivery, visitor heatmaps, and zero storage hassle.
          </p>

          {!earlyAccessSuccess ? (
            <form onSubmit={handleEarlyAccess} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2.5 text-xs text-[#09090B] placeholder-zinc-400 focus:border-[#E11D48] focus:outline-none"
              />
              <button
                type="submit"
                className="loro-btn-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
              >
                Request Hosting Info
              </button>
            </form>
          ) : (
            <div className="mt-6 p-4 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800">
              ✓ Thank you! Our platform team will contact {email} with technical hosting specifications and bandwidth plans.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
