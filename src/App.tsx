import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { SITE_METADATA } from './data/siteData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectPlannerModal } from './components/ProjectPlannerModal';
import { PlaceholderRegisterModal } from './components/PlaceholderRegisterModal';
import { CaptureLidarCursor } from './components/CaptureLidarCursor';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { WorkPage } from './pages/WorkPage';
import { PlatformPage } from './pages/PlatformPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { LearnPage } from './pages/LearnPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPages } from './pages/LegalPages';

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    const path = window.location.pathname;
    return (path.endsWith('/') ? path : `${path}/`) as RoutePath;
  });

  const [plannerOpen, setPlannerOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Sync browser history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath((path.endsWith('/') ? path : `${path}/`) as RoutePath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: RoutePath) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Page Title & SEO Schema.org Graph
  useEffect(() => {
    let title = '3D Tours, VR & Immersive Experiences in Nepal | RCAAS';
    let metaDesc = SITE_METADATA.boilerplate;

    if (currentPath.startsWith('/services')) {
      title = 'Immersive Experiences, Storytelling & Digital Twins | RCAAS';
    } else if (currentPath.startsWith('/industries/heritage-culture')) {
      title = 'Digital Heritage: 3D Documentation & Experiences | RCAAS';
    } else if (currentPath.startsWith('/industries')) {
      title = 'Immersive Experiences by Industry | RCAAS';
    } else if (currentPath.startsWith('/work')) {
      title = 'Our Work: 3D Experiences & Digital Heritage Projects | RCAAS';
    } else if (currentPath.startsWith('/platform')) {
      title = 'Host, Share & Measure Your 3D Experience | RCAAS';
    } else if (currentPath.startsWith('/how-we-work')) {
      title = 'How We Work: From Real Place to Experience | RCAAS';
    } else if (currentPath.startsWith('/learn')) {
      title = 'Guides to 3D Tours, VR & Digital Twins | RCAAS';
    } else if (currentPath.startsWith('/about')) {
      title = 'About RCAAS Technology: Engineers & Game Developers | RCAAS';
    } else if (currentPath.startsWith('/faq')) {
      title = 'FAQ: 3D Tours, VR, AR & Digital Twins | RCAAS';
    } else if (currentPath.startsWith('/contact')) {
      title = 'Plan Your 3D Experience | Contact RCAAS Technology';
    } else if (currentPath.startsWith('/privacy')) {
      title = 'Privacy Policy | RCAAS Technology';
    } else if (currentPath.startsWith('/terms')) {
      title = 'Terms of Service | RCAAS Technology';
    }

    document.title = title;

    // Inject or update Schema.org JSON-LD
    let scriptTag = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const baseOrg = {
      '@type': 'ProfessionalService',
      '@id': 'https://rcaas.tech/#organization',
      name: SITE_METADATA.displayName,
      legalName: SITE_METADATA.legalName,
      alternateName: ['RCAAS', SITE_METADATA.nameMeaning],
      url: 'https://rcaas.tech/',
      description: SITE_METADATA.boilerplate,
      slogan: SITE_METADATA.tagline,
      foundingDate: SITE_METADATA.foundingYear,
      email: SITE_METADATA.email,
      telephone: SITE_METADATA.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Thapathali',
        addressLocality: 'Kathmandu',
        addressRegion: 'Bagmati',
        postalCode: '44600',
        addressCountry: 'NP',
      },
      areaServed: { '@type': 'Country', name: 'Nepal' },
      knowsAbout: [
        '3D virtual tours',
        'Virtual reality',
        'Augmented reality',
        'Gaussian splatting',
        'SLAM LiDAR laser scanning',
        'Drone mapping',
        'Digital twins',
        'Heritage documentation',
      ],
      sameAs: [
        'https://linkedin.com/company/rcaas-technology',
      ],
    };

    const graphItems: any[] = [baseOrg];

    // Schema notes for /services/: CollectionPage with mainEntity -> ItemList of 3 pillars and BreadcrumbList
    if (currentPath.startsWith('/services')) {
      graphItems.push({
        '@type': 'CollectionPage',
        '@id': 'https://rcaas.tech/services/#page',
        url: 'https://rcaas.tech/services/',
        name: 'Immersive Experiences, Storytelling & Digital Twins | RCAAS',
        description: 'What RCAAS creates from real places: immersive 3D tours, VR and AR, visual stories and films, and accurate digital twins for design and planning in Nepal.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Immersive Experiences',
              url: 'https://rcaas.tech/services/immersive-experiences/',
              description: 'Photorealistic 3D tours that open from a link, VR that puts visitors on site, and interactive experiences built with game-engine tools.',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Visual Storytelling',
              url: 'https://rcaas.tech/services/visual-storytelling/',
              description: 'Guided tours, cinematic fly-through films and social content made from your 3D capture, shaped around what you want your audience to feel and do.',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Digital Twins & Survey',
              url: 'https://rcaas.tech/services/digital-twins/',
              description: 'Accurate 3D records of buildings, sites and landscapes, captured with advanced laser and aerial scanning, ready for design, planning and preservation.',
            },
          ],
        },
      });

      graphItems.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://rcaas.tech/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'What we create',
            item: 'https://rcaas.tech/services/',
          },
        ],
      });
    }

    const schemaGraph = {
      '@context': 'https://schema.org',
      '@graph': graphItems,
    };

    scriptTag.textContent = JSON.stringify(schemaGraph);
  }, [currentPath]);

  // Route selector
  const renderCurrentPage = () => {
    if (currentPath === '/') {
      return <HomePage onNavigate={navigateTo} onOpenPlanner={() => setPlannerOpen(true)} />;
    }
    if (currentPath.startsWith('/services')) {
      return (
        <ServicesPage
          currentPath={currentPath}
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/industries')) {
      return (
        <IndustriesPage
          currentPath={currentPath}
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/work')) {
      return (
        <WorkPage
          currentPath={currentPath}
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/platform')) {
      return <PlatformPage onNavigate={navigateTo} onOpenPlanner={() => setPlannerOpen(true)} />;
    }
    if (currentPath.startsWith('/how-we-work')) {
      return <HowWeWorkPage onNavigate={navigateTo} onOpenPlanner={() => setPlannerOpen(true)} />;
    }
    if (currentPath.startsWith('/learn')) {
      return (
        <LearnPage
          currentPath={currentPath}
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/about')) {
      return <AboutPage onNavigate={navigateTo} onOpenPlanner={() => setPlannerOpen(true)} />;
    }
    if (currentPath.startsWith('/faq')) {
      return <FaqPage onNavigate={navigateTo} onOpenPlanner={() => setPlannerOpen(true)} />;
    }
    if (currentPath.startsWith('/contact')) {
      return <ContactPage onNavigate={navigateTo} />;
    }
    if (currentPath.startsWith('/privacy')) {
      return <LegalPages type="privacy" onNavigate={navigateTo} />;
    }
    if (currentPath.startsWith('/terms')) {
      return <LegalPages type="terms" onNavigate={navigateTo} />;
    }

    // Default fallback
    return <HomePage onNavigate={navigateTo} onOpenPlanner={() => setPlannerOpen(true)} />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950">
      
      {/* 3D LiDAR & Capture Mark Cursor */}
      <CaptureLidarCursor />

      {/* Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenPlanner={() => setPlannerOpen(true)}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenRegister={() => setRegisterOpen(true)}
      />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-between border-t border-[#E4E4E7] bg-white/95 px-4 py-2.5 backdrop-blur-lg sm:hidden text-zinc-900 shadow-sm">
        <button
          onClick={() => setPlannerOpen(true)}
          className="loro-btn-primary px-4 py-2 text-xs font-semibold"
        >
          Plan your experience
        </button>
        <a
          href={SITE_METADATA.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="loro-btn-secondary px-3 py-2 text-xs font-medium flex items-center gap-1.5"
        >
          <span>WhatsApp</span>
          <span>↗</span>
        </a>
      </div>

      {/* Modals */}
      <ProjectPlannerModal
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
      />

      <PlaceholderRegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />

    </div>
  );
}
