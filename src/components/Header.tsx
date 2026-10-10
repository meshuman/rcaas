import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight } from 'lucide-react';
import { RoutePath } from '../types';
import { SITE_METADATA, PILLARS, INDUSTRIES, IMAGES } from '../data/siteData';
import { PILLAR_ICONS, industryIcon } from '../data/icons';

// Menu content comes from the site data, so labels match the pages they link to.

// Sub-pages that sit under a pillar (only pages that exist).
const PILLAR_SUBPAGES: Record<string, { label: string; path: RoutePath }[]> = {
  'immersive-experiences': [{ label: '3D virtual tours', path: '/services/immersive-experiences/3d-virtual-tours/' }],
  'digital-twins': [
    { label: '3D laser scanning', path: '/services/digital-twins/3d-laser-scanning/' },
    { label: 'Drone mapping', path: '/services/digital-twins/drone-mapping/' },
  ],
};

// About ▾ (spec §4.1), grouped. Blog is shown before launch at the owner's request (spec: hidden while draft).
const ABOUT_GROUPS: { heading: string; items: { label: string; line: string; path: RoutePath }[] }[] = [
  {
    heading: 'Company',
    items: [
      { label: 'About us', line: 'Who we are and why we started', path: '/about/' },
      { label: 'How we work', line: 'From first call to launch', path: '/how-we-work/' },
      { label: 'Partner with us', line: 'Work alongside our team', path: '/about/#partner' as RoutePath },
      { label: 'Contact', line: 'Tell us about your place', path: '/contact/' },
    ],
  },
  {
    heading: 'Learn',
    items: [
      { label: 'Learn hub', line: 'Guides to 3D, VR and capture', path: '/learn/' },
      { label: 'Blog', line: 'Stories from the field', path: '/blog/' },
      { label: 'FAQ', line: 'Quick answers', path: '/faq/' },
    ],
  },
];

const ABOUT_SECTIONS = ['/about', '/how-we-work', '/learn', '/blog', '/faq', '/contact'];

type MenuId = 'services' | 'industries' | 'about';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

// A top-level trigger. The label goes to the section hub; the chevron (or hover, or focus) opens the panel.
const NavTrigger: React.FC<{
  id: MenuId;
  label: string;
  hubPath: RoutePath;
  active: boolean;
  open: boolean;
  onOpen: (id: MenuId) => void;
  onToggle: (id: MenuId) => void;
  onNavigate: (path: RoutePath) => void;
}> = ({ id, label, hubPath, active, open, onOpen, onToggle, onNavigate }) => (
  <div
    className={`flex h-16 items-center gap-0.5 transition-colors ${active || open ? 'text-ink' : 'hover:text-ink'} ${active ? 'font-semibold' : ''}`}
    onMouseEnter={() => onOpen(id)}
  >
    <button type="button" onClick={() => onNavigate(hubPath)} aria-current={active ? 'page' : undefined}>
      {label}
    </button>
    <button
      type="button"
      aria-label={`Show ${label} menu`}
      aria-haspopup="true"
      aria-expanded={open}
      aria-controls={`mega-${id}`}
      onClick={() => onToggle(id)}
      onFocus={() => onOpen(id)}
      className="rounded p-0.5 text-zinc-400 hover:text-ink"
    >
      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180 text-accent' : ''}`} aria-hidden="true" />
    </button>
  </div>
);

const ColumnHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-3 text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-zinc-400">{children}</p>
);

// Featured card on the right of each panel: masked photo, a line, and one action.
const FeatureCard: React.FC<{ image: string; eyebrow: string; title: string; action: string; onClick: () => void }> = ({
  image,
  eyebrow,
  title,
  action,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="group relative flex h-full min-h-[15rem] w-full overflow-hidden rounded-2xl bg-ink text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
  >
    <img
      src={image}
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover saturate-50 transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] group-hover:saturate-100"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" aria-hidden="true" />
    <div className="relative mt-auto p-5">
      <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-accent-soft">{eyebrow}</span>
      <span className="mt-2 block font-display text-lg font-bold leading-snug text-white">{title}</span>
      <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white">
        {action}
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </span>
    </div>
  </button>
);

const HubLink: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group inline-flex items-center gap-1 text-xs font-mono font-semibold text-accent transition-colors hover:text-accent-strong"
  >
    {label}
    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
  </button>
);

const MenuItem: React.FC<{ title: string; line?: string; onClick: () => void }> = ({ title, line, onClick }) => (
  <button type="button" onClick={onClick} className="w-full rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 focus-visible:bg-zinc-100">
    <span className="block text-sm font-semibold text-ink">{title}</span>
    {line && <span className="block text-xs text-zinc-500 leading-snug">{line}</span>}
  </button>
);

const MenuHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="px-3 pt-1 pb-1 text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-zinc-400">{children}</p>
);

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenPlanner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close menus when the page changes.
  useEffect(() => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Escape closes the mega menu from anywhere.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openMenu]);

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  // A short grace period so moving the pointer from the bar into the panel does not close it.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  };
  const openNow = (id: MenuId) => {
    cancelClose();
    setOpenMenu(id);
  };

  const handleNav = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setOpenMenu(null);
  };

  const openPlanner = () => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
    onOpenPlanner();
  };

  const handleScrollToLive = () => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => document.getElementById('live-experience')?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById('live-experience')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (prefix: string) => currentPath.startsWith(prefix);
  const aboutActive = ABOUT_SECTIONS.some((prefix) => currentPath.startsWith(prefix));

  const triggerProps = {
    onOpen: openNow,
    onToggle: (id: MenuId) => (openMenu === id ? setOpenMenu(null) : openNow(id)),
    onNavigate: handleNav,
  };

  return (
    <>
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-line bg-white/90 backdrop-blur-md"
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
      onBlur={(e) => {
        // Keyboard focus leaving the header (bar and panel) closes the menu.
        if (!headerRef.current?.contains(e.relatedTarget as Node | null)) setOpenMenu(null);
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Wordmark */}
        <button
          onClick={() => handleNav('/')}
          className="flex min-h-11 items-center pr-2 transition-opacity hover:opacity-90"
          aria-label="RCAAS Technology, home"
        >
          <img src="/logo.png" alt="" width="522" height="106" className="h-7 w-auto sm:h-8" />
        </button>

        {/* Desktop navigation */}
        <nav
          aria-label="Main"
          className="hidden lg:flex items-center gap-7 text-xs font-medium text-muted"
        >
          <NavTrigger id="services" label="What we create" hubPath="/services/" active={isActive('/services')} open={openMenu === 'services'} {...triggerProps} />
          <NavTrigger id="industries" label="Industries" hubPath="/industries/" active={isActive('/industries')} open={openMenu === 'industries'} {...triggerProps} />

          <button
            onClick={() => handleNav('/work/')}
            onMouseEnter={scheduleClose}
            aria-current={isActive('/work') ? 'page' : undefined}
            className={`py-2 transition-colors ${isActive('/work') ? 'text-ink font-semibold' : 'hover:text-ink'}`}
          >
            Our work
          </button>

          <button
            onClick={() => handleNav('/platform/')}
            onMouseEnter={scheduleClose}
            aria-current={isActive('/platform') ? 'page' : undefined}
            className={`py-2 transition-colors ${isActive('/platform') ? 'text-ink font-semibold' : 'hover:text-ink'}`}
          >
            Platform
          </button>

          <NavTrigger id="about" label="About" hubPath="/about/" active={aboutActive} open={openMenu === 'about'} {...triggerProps} />
        </nav>

        {/* Calls to action (home.md: header primary and secondary buttons) */}
        <div className="flex items-center gap-2 sm:gap-3" onMouseEnter={scheduleClose}>
          <button
            onClick={handleScrollToLive}
            className="hidden xl:inline-flex text-xs font-medium text-zinc-600 hover:text-ink transition-colors"
          >
            Explore a live tour
          </button>
          <button onClick={openPlanner} className="loro-btn-primary min-h-10 px-4 py-2 text-xs font-semibold">
            <span className="sm:hidden">Plan</span>
            <span className="hidden sm:inline">Plan your experience</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop mega menu: one full-width panel under the bar */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key="mega"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_30px_60px_-30px_rgba(9,9,11,0.35)] lg:block"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={openMenu}
                id={`mega-${openMenu}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease: EASE }}
                className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-8 py-8"
              >
                {openMenu === 'services' && (
                  <>
                    <div className="col-span-8">
                      <ColumnHeading>What we create</ColumnHeading>
                      <div className="grid grid-cols-2 gap-2">
                        {PILLARS.map((pillar) => {
                          const Icon = PILLAR_ICONS[pillar.iconName] ?? ArrowRight;
                          const subpages = PILLAR_SUBPAGES[pillar.id] ?? [];
                          return (
                            <div key={pillar.id} className="group/p rounded-xl p-3 transition-colors hover:bg-surface">
                              <button type="button" onClick={() => handleNav(pillar.link as RoutePath)} className="flex w-full items-start gap-3 text-left">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover/p:bg-accent group-hover/p:text-white">
                                  <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                                </span>
                                <span>
                                  <span className="block font-display text-base font-bold text-ink">{pillar.title}</span>
                                  <span className="mt-0.5 block text-xs leading-relaxed text-zinc-500">{pillar.promise}</span>
                                </span>
                              </button>
                              {subpages.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-1.5 pl-[3.25rem]">
                                  {subpages.map((sub) => (
                                    <button
                                      key={sub.path}
                                      type="button"
                                      onClick={() => handleNav(sub.path)}
                                      className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors hover:border-accent/40 hover:text-accent"
                                    >
                                      {sub.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-5 border-t border-line pt-4 pl-3">
                        <HubLink label="See everything we create" onClick={() => handleNav('/services/')} />
                      </div>
                    </div>
                    <div className="col-span-4">
                      <FeatureCard
                        image={IMAGES.chilanchoStupa}
                        eyebrow="Step inside"
                        title="Walk through a real place in 3D, right in your browser."
                        action="Explore a live tour"
                        onClick={handleScrollToLive}
                      />
                    </div>
                  </>
                )}

                {openMenu === 'industries' && (
                  <>
                    <div className="col-span-8">
                      <ColumnHeading>Industries</ColumnHeading>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                        {INDUSTRIES.map((industry) => {
                          const Icon = industryIcon(industry.id);
                          return (
                            <button
                              key={industry.id}
                              type="button"
                              onClick={() => handleNav(industry.link as RoutePath)}
                              className="group/i flex items-start gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-surface"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover/i:bg-accent group-hover/i:text-white">
                                <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-ink">{industry.title}</span>
                                <span className="block truncate text-xs text-zinc-500">{industry.goalHeadline}</span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      <div className="mt-4 border-t border-line pt-4 pl-2.5">
                        <HubLink label="All industries" onClick={() => handleNav('/industries/')} />
                      </div>
                    </div>
                    <div className="col-span-4">
                      <FeatureCard
                        image={IMAGES.baseraHotel}
                        eyebrow="Not sure where you fit?"
                        title="Tell us what you want people to do. We'll design around it."
                        action="Plan your experience"
                        onClick={openPlanner}
                      />
                    </div>
                  </>
                )}

                {openMenu === 'about' && (
                  <>
                    {ABOUT_GROUPS.map((group) => (
                      <div key={group.heading} className="col-span-4">
                        <ColumnHeading>{group.heading}</ColumnHeading>
                        <div className="-mx-3">
                          {group.items.map((item) => (
                            <MenuItem key={item.label} title={item.label} line={item.line} onClick={() => handleNav(item.path)} />
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="col-span-4">
                      <FeatureCard
                        image={IMAGES.droneSurveyField}
                        eyebrow="Guide"
                        title="Planning a 3D experience: cost and timeline"
                        action="Read the guide"
                        onClick={() => handleNav('/learn/planning-a-3d-experience-cost-and-timeline/')}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile and tablet menu: same sections as the desktop bar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="border-b border-line bg-white px-4 sm:px-6 py-6 lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <MenuHeading>What we create</MenuHeading>
                {PILLARS.map((pillar) => (
                  <MenuItem key={pillar.id} title={pillar.title} line={pillar.promise} onClick={() => handleNav(pillar.link as RoutePath)} />
                ))}
                {Object.values(PILLAR_SUBPAGES).flat().map((item) => (
                  <MenuItem key={item.path} title={item.label} onClick={() => handleNav(item.path)} />
                ))}
              </div>

              <div>
                <MenuHeading>Industries</MenuHeading>
                {INDUSTRIES.map((industry) => (
                  <MenuItem key={industry.id} title={industry.title} onClick={() => handleNav(industry.link as RoutePath)} />
                ))}
              </div>

              <div>
                <MenuHeading>Explore</MenuHeading>
                <MenuItem title="Our work" onClick={() => handleNav('/work/')} />
                <MenuItem title="Platform" onClick={() => handleNav('/platform/')} />
                <MenuItem title="Explore a live tour" onClick={handleScrollToLive} />
              </div>

              <div>
                <MenuHeading>About</MenuHeading>
                {ABOUT_GROUPS.flatMap((group) => group.items).map((item) => (
                  <MenuItem key={item.label} title={item.label} onClick={() => handleNav(item.path)} />
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-line flex flex-col sm:flex-row gap-2">
              <button onClick={openPlanner} className="loro-btn-primary flex-1 py-2.5 text-xs font-semibold">
                Plan your experience
              </button>
              {SITE_METADATA.contactConfirmed && (
                <a
                  href={SITE_METADATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loro-btn-secondary flex-1 py-2.5 text-xs text-center font-medium"
                >
                  Chat on WhatsApp
                </a>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
      {/* Page dimmer while the mega menu is open (visual only). Outside the header: its backdrop blur would trap a fixed child. */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none fixed inset-x-0 top-16 bottom-0 z-40 hidden bg-ink/20 lg:block"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

    </>
  );
};
