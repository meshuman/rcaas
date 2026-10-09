import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { RoutePath } from '../types';
import { SITE_METADATA, PILLARS, INDUSTRIES } from '../data/siteData';

// Menu content comes from the site data, so labels match the pages they link to.

// What we create ▾: the three pillars (title + promise) and the most-asked-for capabilities.
const CAPABILITIES: { label: string; path: RoutePath }[] = [
  { label: '3D virtual tours', path: '/services/immersive-experiences/3d-virtual-tours/' },
  { label: '3D laser scanning', path: '/services/digital-twins/3d-laser-scanning/' },
  { label: 'Drone mapping', path: '/services/digital-twins/drone-mapping/' },
];

// About ▾ (spec §4.1). Blog is shown before launch at the owner's request (spec: hidden while draft).
const ABOUT_MENU: { label: string; path: RoutePath }[] = [
  { label: 'About us', path: '/about/' },
  { label: 'How we work', path: '/how-we-work/' },
  { label: 'Learn', path: '/learn/' },
  { label: 'Blog', path: '/blog/' },
  { label: 'FAQ', path: '/faq/' },
  { label: 'Partner with us', path: '/about/#partner' as RoutePath },
  { label: 'Contact', path: '/contact/' },
];

const ABOUT_SECTIONS = ['/about', '/how-we-work', '/learn', '/blog', '/faq', '/contact'];

type MenuId = 'services' | 'industries' | 'about';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

// A top-level item with a dropdown. Opens on hover, keyboard focus or click; Escape closes it.
// Clicking the label itself goes to the section's hub page.
const NavDropdown: React.FC<{
  id: MenuId;
  label: string;
  hubPath: RoutePath;
  active: boolean;
  open: boolean;
  setOpen: (id: MenuId | null) => void;
  onNavigate: (path: RoutePath) => void;
  align?: 'left' | 'right';
  panelClassName?: string;
  children: React.ReactNode;
}> = ({ id, label, hubPath, active, open, setOpen, onNavigate, align = 'left', panelClassName = '', children }) => {
  const panelId = `nav-${id}`;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(id)}
      onMouseLeave={() => setOpen(null)}
      onFocus={() => setOpen(id)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(null);
          (e.currentTarget.querySelector('button') as HTMLButtonElement | null)?.focus();
        }
      }}
    >
      <div className={`flex items-center gap-0.5 py-2 transition-colors ${active ? 'text-ink font-semibold' : 'hover:text-ink'}`}>
        <button type="button" onClick={() => onNavigate(hubPath)} aria-current={active ? 'page' : undefined}>
          {label}
        </button>
        <button
          type="button"
          aria-label={`Show ${label} menu`}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(open ? null : id)}
          className="p-0.5 rounded text-zinc-400 hover:text-ink"
        >
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-full ${align === 'right' ? 'right-0' : 'left-0'} rounded-xl border border-line bg-white p-2 shadow-xl ${panelClassName}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuItem: React.FC<{ title: string; line?: string; onClick: () => void }> = ({ title, line, onClick }) => (
  <button type="button" onClick={onClick} className="w-full rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 focus-visible:bg-zinc-100">
    <span className="block text-xs font-semibold text-ink">{title}</span>
    {line && <span className="block text-[11px] text-zinc-500 leading-snug">{line}</span>}
  </button>
);

const MenuFooterLink: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="mt-1 flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent-tint"
  >
    {label}
    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
  </button>
);

const MenuHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="px-3 pt-1 pb-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400">{children}</p>
);

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenPlanner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);

  // Close menus when the page changes.
  useEffect(() => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  }, [currentPath]);

  const handleNav = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setOpenMenu(null);
  };

  const openPlanner = () => {
    setMobileMenuOpen(false);
    onOpenPlanner();
  };

  const handleScrollToLive = () => {
    setMobileMenuOpen(false);
    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => document.getElementById('live-experience')?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById('live-experience')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (prefix: string) => currentPath.startsWith(prefix);
  const aboutActive = ABOUT_SECTIONS.some((prefix) => currentPath.startsWith(prefix));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Wordmark */}
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-ink transition-opacity hover:opacity-90 font-display"
          aria-label="RCAAS Technology, home"
        >
          <span>RCAAS</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(225,29,72,0.6)] animate-pulse" aria-hidden="true" />
        </button>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-7 text-xs font-medium text-muted">
          <NavDropdown
            id="services"
            label="What we create"
            hubPath="/services/"
            active={isActive('/services')}
            open={openMenu === 'services'}
            setOpen={setOpenMenu}
            onNavigate={handleNav}
            panelClassName="w-80"
          >
            {PILLARS.map((pillar) => (
              <MenuItem key={pillar.id} title={pillar.title} line={pillar.promise} onClick={() => handleNav(pillar.link as RoutePath)} />
            ))}
            <div className="my-1.5 border-t border-line" />
            <MenuHeading>Popular</MenuHeading>
            {CAPABILITIES.map((item) => (
              <MenuItem key={item.path} title={item.label} onClick={() => handleNav(item.path)} />
            ))}
            <MenuFooterLink label="All services" onClick={() => handleNav('/services/')} />
          </NavDropdown>

          <NavDropdown
            id="industries"
            label="Industries"
            hubPath="/industries/"
            active={isActive('/industries')}
            open={openMenu === 'industries'}
            setOpen={setOpenMenu}
            onNavigate={handleNav}
            panelClassName="w-[34rem]"
          >
            <div className="grid grid-cols-2 gap-0.5">
              {INDUSTRIES.map((industry) => (
                <MenuItem
                  key={industry.id}
                  title={industry.title}
                  line={industry.goalHeadline}
                  onClick={() => handleNav(industry.link as RoutePath)}
                />
              ))}
            </div>
            <MenuFooterLink label="All industries" onClick={() => handleNav('/industries/')} />
          </NavDropdown>

          <button
            onClick={() => handleNav('/work/')}
            aria-current={isActive('/work') ? 'page' : undefined}
            className={`py-2 transition-colors ${isActive('/work') ? 'text-ink font-semibold' : 'hover:text-ink'}`}
          >
            Our work
          </button>

          <button
            onClick={() => handleNav('/platform/')}
            aria-current={isActive('/platform') ? 'page' : undefined}
            className={`py-2 transition-colors ${isActive('/platform') ? 'text-ink font-semibold' : 'hover:text-ink'}`}
          >
            Platform
          </button>

          <NavDropdown
            id="about"
            label="About"
            hubPath="/about/"
            active={aboutActive}
            open={openMenu === 'about'}
            setOpen={setOpenMenu}
            onNavigate={handleNav}
            align="right"
            panelClassName="w-52"
          >
            {ABOUT_MENU.map((item) => (
              <MenuItem key={item.label} title={item.label} onClick={() => handleNav(item.path)} />
            ))}
          </NavDropdown>
        </nav>

        {/* Calls to action (home.md: header primary and secondary buttons) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleScrollToLive}
            className="hidden xl:inline-flex text-xs font-medium text-zinc-600 hover:text-ink transition-colors"
          >
            Explore a live tour
          </button>
          <button onClick={openPlanner} className="loro-btn-primary px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold">
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

      {/* Mobile and tablet menu: same sections as the desktop bar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-line bg-white px-4 sm:px-6 py-6 lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <MenuHeading>What we create</MenuHeading>
                {PILLARS.map((pillar) => (
                  <MenuItem key={pillar.id} title={pillar.title} line={pillar.promise} onClick={() => handleNav(pillar.link as RoutePath)} />
                ))}
                {CAPABILITIES.map((item) => (
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
                {ABOUT_MENU.map((item) => (
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
  );
};
