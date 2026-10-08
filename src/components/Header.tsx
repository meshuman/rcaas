import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RoutePath } from '../types';
import { SITE_METADATA } from '../data/siteData';
import { BLOG_LAUNCHED } from '../content/blog';

// About ▾ (spec §4.1). Blog stays hidden until the blog launches.
const ABOUT_MENU: { label: string; path: RoutePath }[] = [
  { label: 'About us', path: '/about/' },
  { label: 'How we work', path: '/how-we-work/' },
  { label: 'Learn', path: '/learn/' },
  ...(BLOG_LAUNCHED ? [{ label: 'Blog', path: '/blog/' as RoutePath }] : []),
  { label: 'FAQ', path: '/faq/' },
  { label: 'Partner with us', path: '/about/#partner' as RoutePath },
  { label: 'Contact', path: '/contact/' },
];

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenPlanner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const handleNav = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  const handleScrollToLive = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById('live-experience');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('live-experience');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text wordmark with Loro Editorial Red live dot */}
        <div className="flex items-center">
          <button
            onClick={() => handleNav('/')}
            className="group flex items-center gap-1.5 text-left text-xl font-bold tracking-tight text-ink transition-opacity hover:opacity-90 font-display"
          >
            <span>RCAAS</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(225,29,72,0.6)] animate-pulse"></span>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-muted">
          
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('/services/')}
              className={`flex items-center gap-1 py-2 transition-colors hover:text-ink ${
                currentPath.startsWith('/services') ? 'text-ink font-semibold' : ''
              }`}
            >
              <span>What we create</span>
              <svg className="h-3 w-3 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full w-72 rounded-lg border border-line bg-white p-2 shadow-xl backdrop-blur-xl"
                >
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400 px-3 py-1">
                    Core Pillars
                  </div>
                  <button
                    onClick={() => handleNav('/services/immersive-experiences/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Immersive Experiences</div>
                    <div className="text-zinc-500 text-[11px]">3D virtual tours, VR &amp; interactive web</div>
                  </button>
                  <button
                    onClick={() => handleNav('/services/visual-storytelling/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Visual Storytelling</div>
                    <div className="text-zinc-500 text-[11px]">Cinematic 4K fly-throughs &amp; spatial films</div>
                  </button>
                  <button
                    onClick={() => handleNav('/services/digital-twins/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Digital Twins &amp; Survey</div>
                    <div className="text-zinc-500 text-[11px]">SLAM LiDAR (±5mm), aerial drone RTK</div>
                  </button>
                  
                  <div className="my-1.5 border-t border-line" />
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400 px-3 py-1">
                    Deep Dive
                  </div>
                  <button
                    onClick={() => handleNav('/services/immersive-experiences/3d-virtual-tours/')}
                    className="w-full rounded-md px-3 py-1.5 text-left text-xs text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    3D Virtual Tours Specification &rarr;
                  </button>
                  <button
                    onClick={() => handleNav('/services/digital-twins/3d-laser-scanning/')}
                    className="w-full rounded-md px-3 py-1.5 text-left text-xs text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    3D Laser Scanning Precision &rarr;
                  </button>
                  <button
                    onClick={() => handleNav('/services/digital-twins/drone-mapping/')}
                    className="w-full rounded-md px-3 py-1.5 text-left text-xs text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    Drone Mapping &amp; Orthomosaics &rarr;
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesDropdownOpen(true)}
            onMouseLeave={() => setIndustriesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('/industries/')}
              className={`flex items-center gap-1 py-2 transition-colors hover:text-ink ${
                currentPath.startsWith('/industries') ? 'text-ink font-semibold' : ''
              }`}
            >
              <span>Industries</span>
              <svg className="h-3 w-3 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            <AnimatePresence>
              {industriesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full w-80 rounded-lg border border-line bg-white p-2 shadow-xl backdrop-blur-xl"
                >
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400 px-3 py-1">
                    Sector Solutions
                  </div>
                  <button
                    onClick={() => handleNav('/industries/hospitality-tourism/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Hotels &amp; Tourism</div>
                    <div className="text-zinc-500 text-[11px]">Fill rooms and inspire bookings</div>
                  </button>
                  <button
                    onClick={() => handleNav('/industries/education/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Education</div>
                    <div className="text-zinc-500 text-[11px]">Walk the campus before applying</div>
                  </button>
                  <button
                    onClick={() => handleNav('/industries/real-estate-architecture/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Real Estate &amp; Architecture</div>
                    <div className="text-zinc-500 text-[11px]">Sell and design from reality</div>
                  </button>
                  <button
                    onClick={() => handleNav('/industries/factories/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Factories</div>
                    <div className="text-zinc-500 text-[11px]">Plan and maintain your plant from reality</div>
                  </button>
                  <button
                    onClick={() => handleNav('/industries/heritage-culture/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-rose-50/60"
                  >
                    <div className="font-semibold text-accent">Heritage &amp; Culture (Flagship)</div>
                    <div className="text-zinc-500 text-[11px]">Preserve heritage and share with the world</div>
                  </button>
                  <button
                    onClick={() => handleNav('/industries/government-municipalities/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Government &amp; Municipalities</div>
                    <div className="text-zinc-500 text-[11px]">City 3D data and public engagement</div>
                  </button>
                  <button
                    onClick={() => handleNav('/industries/non-life-insurance/')}
                    className="w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-100"
                  >
                    <div className="font-semibold text-ink">Non-life Insurance</div>
                    <div className="text-zinc-500 text-[11px]">Measured records for risk and claims</div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleNav('/work/')}
            className={`py-2 transition-colors hover:text-ink ${
              currentPath.startsWith('/work') ? 'text-ink font-semibold' : ''
            }`}
          >
            Our Work
          </button>

          <button
            onClick={() => handleNav('/platform/')}
            className={`py-2 transition-colors hover:text-ink ${
              currentPath === '/platform/' ? 'text-ink font-semibold' : ''
            }`}
          >
            Platform
          </button>

          <button
            onClick={() => handleNav('/how-we-work/')}
            className={`py-2 transition-colors hover:text-ink ${
              currentPath === '/how-we-work/' ? 'text-ink font-semibold' : ''
            }`}
          >
            How we work
          </button>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('/about/')}
              className={`flex items-center gap-1 py-2 transition-colors hover:text-ink ${
                currentPath.startsWith('/about') ? 'text-ink font-semibold' : ''
              }`}
            >
              <span>About</span>
              <svg className="h-3 w-3 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-full w-52 rounded-lg border border-line bg-white p-2 shadow-xl backdrop-blur-xl"
                >
                  {ABOUT_MENU.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNav(item.path)}
                      className="w-full rounded-md px-3 py-1.5 text-left text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleNav('/contact/')}
            className={`py-2 transition-colors hover:text-ink ${
              currentPath === '/contact/' ? 'text-ink font-semibold' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleScrollToLive}
            className="text-xs font-mono text-zinc-600 hover:text-zinc-900 transition-colors hidden xl:inline-block"
          >
            Live Demo &darr;
          </button>

          <button
            onClick={onOpenPlanner}
            className="loro-btn-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider"
          >
            Plan your experience
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenPlanner}
            className="loro-btn-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider"
          >
            Plan
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-line bg-white px-4 py-6 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleNav('/')}
                className="text-left font-semibold text-zinc-900 py-1.5 hover:text-accent"
              >
                Home
              </button>
              <button
                onClick={() => handleNav('/services/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                What we create (Services)
              </button>
              <button
                onClick={() => handleNav('/industries/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                Industries &amp; Solutions
              </button>
              <button
                onClick={() => handleNav('/work/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                Our Work (Case Studies)
              </button>
              <button
                onClick={() => handleNav('/platform/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                Platform
              </button>
              <button
                onClick={() => handleNav('/how-we-work/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                How we work
              </button>
              <button
                onClick={() => handleNav('/learn/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                Learn Guides
              </button>
              {BLOG_LAUNCHED && (
                <button
                  onClick={() => handleNav('/blog/')}
                  className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
                >
                  Blog
                </button>
              )}
              <button
                onClick={() => handleNav('/about/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                About &amp; Team
              </button>
              <button
                onClick={() => handleNav('/faq/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNav('/contact/')}
                className="text-left font-medium text-zinc-700 py-1.5 hover:text-accent"
              >
                Contact
              </button>
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={onOpenPlanner}
                  className="w-full loro-btn-primary py-2.5 text-xs text-center font-semibold"
                >
                  Plan your experience
                </button>
                <a
                  href={SITE_METADATA.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full loro-btn-secondary py-2.5 text-xs text-center font-medium"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
