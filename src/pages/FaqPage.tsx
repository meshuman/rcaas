import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RoutePath } from '../types';

interface FaqPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

interface FaqSection {
  category: string;
  items: { q: string; a: string }[];
}

const EXTENDED_FAQS: FaqSection[] = [
  {
    category: 'Getting started',
    items: [
      {
        q: 'What does RCAAS Technology do?',
        a: 'We capture physical buildings, campuses, hotels, and heritage sites using advanced SLAM LiDAR laser scanning and RTK aerial drones, and turn them into photorealistic 3D virtual tours, VR walkthroughs, and measured digital twins.',
      },
      {
        q: 'Where do you operate?',
        a: 'We are based in Kathmandu, Nepal and operate nationwide across all provinces (including Pokhara, Chitwan, Lumbini, and mountain regions), as well as on select international heritage projects.',
      },
      {
        q: 'What kind of places can be captured?',
        a: 'Any built environment or open landmark: boutique hotels, resorts, schools, universities, technical workshops, historic temples, archaeological excavations, residential developments, and municipal streets.',
      },
    ],
  },
  {
    category: 'The Audience Experience',
    items: [
      {
        q: 'Do people need an app or headset to explore?',
        a: 'No. Our 3D tours open instantly from a standard web link in Safari, Chrome, Edge, or Firefox on any smartphone, tablet, or laptop. No downloads or plugins are required. A VR headset is only needed if you wish to experience the immersive 6DoF VR mode.',
      },
      {
        q: 'How much mobile data does a tour use?',
        a: 'A typical Gaussian splatting experience streams approximately 6 to 9 MB of compressed radiance field data, similar to loading a high-resolution photo gallery or a short social video clip.',
      },
      {
        q: 'Can the tour be embedded on our website?',
        a: 'Yes. We provide a simple responsive iframe embed code that integrates into any website or CMS (WordPress, Webflow, Squarespace, Shopify, custom React).',
      },
    ],
  },
  {
    category: 'Cost, Timeline & Turnaround',
    items: [
      {
        q: 'How much does a 3D experience cost?',
        a: 'Pricing depends on the total square metres, number of rooms or storeys, location, and desired deliverable package (e.g. 3D Web Tour only vs. Tour + 4K Fly-through Video + SLAM Point Cloud Archive). We provide fixed-price, transparent proposals for every project.',
      },
      {
        q: 'How long does on-site field capture take?',
        a: 'Because our handheld SLAM LiDAR scanners operate while walking, interior scanning of an average hotel or school wing takes between 2 and 4 hours. Field scanning is completely contactless and creates virtually zero disruption.',
      },
      {
        q: 'How quickly is the 3D tour delivered after scanning?',
        a: 'Standard delivery is within 5 to 7 business days from field scan completion. Expedited 72-hour turnaround is available for urgent marketing campaigns or event openings.',
      },
    ],
  },
  {
    category: 'Technology & Engineering Rigor',
    items: [
      {
        q: 'What is the geometric accuracy of your digital twins?',
        a: 'Our SLAM LiDAR scanners capture point clouds with ±5mm relative precision. For campus aerial photogrammetry, we use geodetic RTK GNSS receivers to achieve sub-2cm absolute spatial positioning.',
      },
      {
        q: 'Who owns the raw spatial data and 3D models?',
        a: 'You do. RCAAS guarantees 100% data ownership for our clients. You receive the raw point cloud files (.e57, .laz), 3D textured meshes (.obj, .glb), Gaussian splat files (.ply), and all rendered videos.',
      },
      {
        q: 'How are sensitive rooms or private faces handled?',
        a: 'We coordinate scans during off-peak or closed hours. Any unavoidable faces or vehicle license plates are blurred during post-processing. Private administrative rooms can be cordoned off or omitted entirely.',
      },
    ],
  },
];

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggle = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <span className="text-zinc-700">FAQ</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
            Common Questions
          </span>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Everything you need to know about our reality capture process, LiDAR accuracy, mobile streaming, and project delivery.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {EXTENDED_FAQS.map((sec) => (
            <div key={sec.category} className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#E11D48] font-mono border-b border-[#E4E4E7] pb-2">
                {sec.category}
              </h2>

              <div className="space-y-3">
                {sec.items.map((item, idx) => {
                  const key = `${sec.category}-${idx}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div
                      key={idx}
                      className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] overflow-hidden transition-colors hover:border-zinc-400 shadow-sm"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="text-sm font-semibold text-[#09090B] font-display">
                          {item.q}
                        </span>
                        <span className="ml-4 font-mono text-zinc-500 text-sm">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#52525B] leading-relaxed border-t border-[#E4E4E7]">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-[#09090B] font-display">
            Have a specific question not covered here?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#52525B] max-w-md mx-auto">
            Contact our engineering specialists or start a direct conversation via WhatsApp.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => onNavigate('/contact/')}
              className="loro-btn-primary px-5 py-2 text-xs"
            >
              Contact Us
            </button>
            <button
              onClick={onOpenPlanner}
              className="loro-btn-secondary px-5 py-2 text-xs"
            >
              Plan Experience
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
