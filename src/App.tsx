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
import { ImmersiveExperiencesPage } from './pages/ImmersiveExperiencesPage';
import { VirtualToursPage } from './pages/VirtualToursPage';
import { VisualStorytellingPage } from './pages/VisualStorytellingPage';
import { DigitalTwinsPage } from './pages/DigitalTwinsPage';
import { LaserScanningPage } from './pages/LaserScanningPage';
import { DroneMappingPage } from './pages/DroneMappingPage';
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

    if (currentPath.startsWith('/services/immersive-experiences/3d-virtual-tours')) {
      title = '3D Virtual Tours in Nepal: Beyond 360° Photos | RCAAS';
      metaDesc = 'Photorealistic 3D virtual tours that people explore freely from a link. For hotels, schools, colleges, property and heritage sites across Nepal.';
    } else if (currentPath.startsWith('/services/visual-storytelling')) {
      title = 'Fly-Through Films & Visual Storytelling in Nepal | RCAAS';
      metaDesc = 'Guided 3D tours, cinematic fly-through films and social content made from real places, shaped around what you want your audience to feel and do.';
    } else if (currentPath.startsWith('/services/digital-twins/3d-laser-scanning')) {
      title = '3D Laser Scanning in Nepal (SLAM LiDAR) | RCAAS';
      metaDesc = 'Handheld 3D laser scanning in Kathmandu and across Nepal. Accurate point clouds, as-built drawings and 3D models of any building, captured in hours, not days.';
    } else if (currentPath.startsWith('/services/digital-twins/drone-mapping')) {
      title = 'Drone Mapping & Aerial Survey in Nepal | RCAAS';
      metaDesc = 'Drone mapping and aerial survey across Nepal: true-scale maps, terrain models and 3D site models of land, buildings and heritage sites, ready for planning.';
    } else if (currentPath.startsWith('/services/digital-twins')) {
      title = 'Digital Twins, 3D Scanning & Survey in Nepal | RCAAS';
      metaDesc = 'Accurate, measurable 3D copies of buildings, sites and landscapes in Nepal. Point clouds, drawings, maps and models for design, planning and preservation.';
    } else if (currentPath.startsWith('/services/immersive-experiences')) {
      title = 'Immersive 3D, VR & AR Experiences in Nepal | RCAAS';
      metaDesc = 'Photorealistic 3D tours, VR, AR and interactive experiences built from real places in Nepal, designed to help hotels, schools, developers and heritage sites.';
    } else if (currentPath.startsWith('/services')) {
      title = 'Immersive Experiences, Storytelling & Digital Twins | RCAAS';
    } else if (currentPath.startsWith('/industries/heritage-culture')) {
      title = 'Digital Heritage: 3D Documentation & Experiences | RCAAS';
      metaDesc = 'Sub-centimetre SLAM laser scanning and photorealistic Gaussian splats for heritage preservation in Nepal.';
    } else if (currentPath.startsWith('/industries')) {
      title = 'Immersive Experiences by Industry | RCAAS';
      metaDesc = 'How RCAAS helps hotels, schools, property developers, heritage sites and municipalities in Nepal turn real places into experiences that drive action.';
    } else if (currentPath.startsWith('/work')) {
      title = 'Our Work: 3D Experiences & Digital Heritage Projects | RCAAS';
      metaDesc = 'Explore 3D experiences RCAAS has built for heritage sites, schools, colleges and hotels in Nepal, and the stories behind each project.';
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

    if (currentPath.startsWith('/services/immersive-experiences/3d-virtual-tours')) {
      graphItems.push({
        '@type': 'Service',
        '@id': 'https://rcaas.tech/services/immersive-experiences/3d-virtual-tours/#service',
        url: 'https://rcaas.tech/services/immersive-experiences/3d-virtual-tours/',
        name: '3D Virtual Tours in Nepal: Beyond 360° Photos | RCAAS',
        description: 'Photorealistic 3D virtual tours that people explore freely from a link. For hotels, schools, colleges, property and heritage sites across Nepal.',
        provider: { '@id': 'https://rcaas.tech/#organization' },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: '3D Virtual Tours',
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Immersive Experiences',
            item: 'https://rcaas.tech/services/immersive-experiences/',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: '3D Virtual Tours',
            item: 'https://rcaas.tech/services/immersive-experiences/3d-virtual-tours/',
          },
        ],
      });
    } else if (currentPath.startsWith('/services/visual-storytelling')) {
      graphItems.push({
        '@type': 'Service',
        '@id': 'https://rcaas.tech/services/visual-storytelling/#service',
        url: 'https://rcaas.tech/services/visual-storytelling/',
        name: 'Fly-Through Films & Visual Storytelling in Nepal | RCAAS',
        description: 'Guided 3D tours, cinematic fly-through films and social content made from real places, shaped around what you want your audience to feel and do.',
        provider: { '@id': 'https://rcaas.tech/#organization' },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: 'Visual Storytelling & Fly-Through Films',
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Visual Storytelling',
            item: 'https://rcaas.tech/services/visual-storytelling/',
          },
        ],
      });
    } else if (currentPath.startsWith('/services/digital-twins/3d-laser-scanning')) {
      graphItems.push({
        '@type': 'Service',
        '@id': 'https://rcaas.tech/services/digital-twins/3d-laser-scanning/#service',
        url: 'https://rcaas.tech/services/digital-twins/3d-laser-scanning/',
        name: '3D Laser Scanning in Nepal (SLAM LiDAR) | RCAAS',
        description: 'Handheld 3D laser scanning in Kathmandu and across Nepal. Accurate point clouds, as-built drawings and 3D models of any building, captured in hours, not days.',
        provider: { '@id': 'https://rcaas.tech/#organization' },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: '3D Laser Scanning (SLAM LiDAR)',
        isRelatedTo: { '@id': 'https://rcaas.tech/services/digital-twins/#service' },
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Digital Twins & Survey',
            item: 'https://rcaas.tech/services/digital-twins/',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: '3D Laser Scanning',
            item: 'https://rcaas.tech/services/digital-twins/3d-laser-scanning/',
          },
        ],
      });
    } else if (currentPath.startsWith('/services/digital-twins/drone-mapping')) {
      graphItems.push({
        '@type': 'Service',
        '@id': 'https://rcaas.tech/services/digital-twins/drone-mapping/#service',
        url: 'https://rcaas.tech/services/digital-twins/drone-mapping/',
        name: 'Drone Mapping & Aerial Survey in Nepal | RCAAS',
        description: 'Drone mapping and aerial survey across Nepal: true-scale maps, terrain models and 3D site models of land, buildings and heritage sites, ready for planning.',
        provider: { '@id': 'https://rcaas.tech/#organization' },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: 'Drone Mapping & Aerial Survey',
        isRelatedTo: { '@id': 'https://rcaas.tech/services/digital-twins/#service' },
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Digital Twins & Survey',
            item: 'https://rcaas.tech/services/digital-twins/',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Drone Mapping',
            item: 'https://rcaas.tech/services/digital-twins/drone-mapping/',
          },
        ],
      });
    } else if (currentPath.startsWith('/services/digital-twins')) {
      graphItems.push({
        '@type': 'Service',
        '@id': 'https://rcaas.tech/services/digital-twins/#service',
        url: 'https://rcaas.tech/services/digital-twins/',
        name: 'Digital Twins, 3D Scanning & Survey in Nepal | RCAAS',
        description: 'Accurate, measurable 3D copies of buildings, sites and landscapes in Nepal. Point clouds, drawings, maps and models for design, planning and preservation.',
        provider: { '@id': 'https://rcaas.tech/#organization' },
        areaServed: { '@type': 'Country', name: 'Nepal' },
        serviceType: '3D Laser Scanning, Drone Mapping, Survey and Digital Twins',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Twins & Survey Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '3D Laser Scanning',
                url: 'https://rcaas.tech/services/digital-twins/3d-laser-scanning/',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Drone Mapping & Aerial Survey',
                url: 'https://rcaas.tech/services/digital-twins/drone-mapping/',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Survey, Positioning & GIS',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Heritage Records & Digital Archives',
              },
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Digital Twins & Survey',
            item: 'https://rcaas.tech/services/digital-twins/',
          },
        ],
      });
    } else if (currentPath.startsWith('/services/immersive-experiences')) {
      graphItems.push({
        '@type': 'Service',
        '@id': 'https://rcaas.tech/services/immersive-experiences/#service',
        url: 'https://rcaas.tech/services/immersive-experiences/',
        name: 'Immersive 3D, VR & AR Experiences in Nepal | RCAAS',
        description: 'Photorealistic 3D tours, VR, AR and interactive experiences built from real places in Nepal, designed to help hotels, schools, developers and heritage sites.',
        provider: { '@id': 'https://rcaas.tech/#organization' },
        areaServed: { '@type': 'Country', name: 'Nepal' },
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Immersive Experiences',
            item: 'https://rcaas.tech/services/immersive-experiences/',
          },
        ],
      });
    } else if (currentPath.startsWith('/services')) {
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
    } else if (currentPath.startsWith('/industries')) {
      graphItems.push({
        '@type': 'CollectionPage',
        '@id': 'https://rcaas.tech/industries/#page',
        url: 'https://rcaas.tech/industries/',
        name: 'Immersive Experiences by Industry | RCAAS',
        description: 'How RCAAS helps hotels, schools, property developers, heritage sites and municipalities in Nepal turn real places into experiences that drive action.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Hospitality & Tourism',
              url: 'https://rcaas.tech/industries/hospitality-tourism/',
              description: 'Fill rooms and inspire visits. Let guests and travellers explore before they book or travel.',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Education',
              url: 'https://rcaas.tech/industries/education/',
              description: 'Let students walk your campus before they apply. Show classrooms, labs and grounds to families near and far.',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Real Estate & Architecture',
              url: 'https://rcaas.tech/industries/real-estate-architecture/',
              description: 'Sell, design and renovate from reality. Give buyers a true sense of space and designers accurate measurements.',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Heritage & Culture',
              url: 'https://rcaas.tech/industries/heritage-culture/',
              description: 'Preserve heritage and share it with the world. Create a lasting record people everywhere can explore.',
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Government & Municipalities',
              url: 'https://rcaas.tech/industries/government-municipalities/',
              description: 'Plan better and bring citizens along. Reliable 3D data for planning, and public experiences people understand.',
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
            name: 'Industries',
            item: 'https://rcaas.tech/industries/',
          },
        ],
      });
    } else if (currentPath.startsWith('/work')) {
      graphItems.push({
        '@type': 'CollectionPage',
        '@id': 'https://rcaas.tech/work/#page',
        url: 'https://rcaas.tech/work/',
        name: 'Our Work: 3D Experiences & Digital Heritage Projects | RCAAS',
        description: 'Explore 3D experiences RCAAS has built for heritage sites, schools, colleges and hotels in Nepal, and the stories behind each project.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Chilancho Stupa Digital Heritage',
              url: 'https://rcaas.tech/work/chilancho-stupa-digital-heritage/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Nepathya School and College 3D Campus Tour',
              url: 'https://rcaas.tech/work/nepathya-school-college-3d-campus-tour/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Madan Ashrit Polytechnic 3D Campus Tour',
              url: 'https://rcaas.tech/work/madan-ashrit-polytechnic-3d-campus-tour/',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Basera Boutique Hotel 3D Experience',
              url: 'https://rcaas.tech/work/basera-boutique-hotel-3d-experience/',
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
            name: 'Our Work',
            item: 'https://rcaas.tech/work/',
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
    if (currentPath.startsWith('/services/immersive-experiences/3d-virtual-tours')) {
      return (
        <VirtualToursPage
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/services/visual-storytelling')) {
      return (
        <VisualStorytellingPage
          onNavigate={navigateTo}
        />
      );
    }
    if (currentPath.startsWith('/services/immersive-experiences')) {
      return (
        <ImmersiveExperiencesPage
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/services/digital-twins/3d-laser-scanning')) {
      return (
        <LaserScanningPage
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/services/digital-twins/drone-mapping')) {
      return (
        <DroneMappingPage
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/services/digital-twins')) {
      return (
        <DigitalTwinsPage
          onNavigate={navigateTo}
          onOpenPlanner={() => setPlannerOpen(true)}
        />
      );
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
