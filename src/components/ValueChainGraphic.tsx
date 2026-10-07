import React from 'react';
import { motion } from 'motion/react';

interface ValueChainStep {
  number: string;
  phase: string;
  title: string;
  detail: string;
  tools: string;
  badge: string;
}

const STEPS: ValueChainStep[] = [
  {
    number: '01',
    phase: 'Capture',
    title: 'Single Site Capture',
    detail: 'Terrestrial SLAM LiDAR (±5mm) and high-resolution aerial photogrammetry flown once with precision geodetic RTK coordinates.',
    tools: 'SLAM LiDAR · RTK Drones · 360° HDR',
    badge: 'Reality Intake',
  },
  {
    number: '02',
    phase: 'Create',
    title: 'Digital Reconstruction',
    detail: 'Dense point cloud registration, clean CAD/BIM floor plans, 3D mesh building, and real-time Gaussian radiance fields.',
    tools: 'Millimetre Registration · Radiance Fields',
    badge: 'Geometry & Light',
  },
  {
    number: '03',
    phase: 'Tell',
    title: 'Spatial Storycraft',
    detail: 'Interactive waypoints, curated 4K fly-through cameras, audio narratives, and custom visitor journey paths designed to convert.',
    tools: 'Game-Engine · Direction · Scripting',
    badge: 'Narrative Layer',
  },
  {
    number: '04',
    phase: 'Deliver',
    title: 'Multi-Format Delivery',
    detail: 'Instant browser tours via link, VR headsets for exhibitions, vertical social cuts for ads, and raw CAD/BIM data for architects.',
    tools: 'Web (No apps) · VR · Social 4K · DWG/IFC',
    badge: 'Omni-channel',
  },
  {
    number: '05',
    phase: 'Measure',
    title: 'Outcome & Impact',
    detail: 'Visitor engagement metrics, dwell time, direct bookings, admissions enquiries, and verified site dimensions.',
    tools: 'Telemetry · Lead Flow · As-Built Accuracy',
    badge: 'Results',
  },
];

export const ValueChainGraphic: React.FC = () => {
  return (
    <div className="w-full">
      {/* Desktop / Tablet Process Chain */}
      <div className="relative">
        {/* Connector Line behind steps (hidden on mobile) */}
        <div 
          className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-zinc-200 via-[#E11D48]/30 to-zinc-200 z-0" 
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] p-5 shadow-sm transition-all duration-200 hover:border-[#BE123C] hover:shadow-md"
            >
              <div>
                {/* Header with step number and phase pill */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E4E4E7] bg-[#FAFAFA] font-mono text-xs font-bold text-[#09090B] group-hover:border-[#E11D48] group-hover:text-[#E11D48] transition-colors">
                    {step.number}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 group-hover:bg-rose-50 group-hover:text-[#E11D48] transition-colors">
                    {step.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#09090B] font-display">
                  {step.title}
                </h3>

                {/* Detail */}
                <p className="mt-2 text-xs leading-relaxed text-[#52525B]">
                  {step.detail}
                </p>
              </div>

              {/* Tools footer */}
              <div className="mt-4 pt-3 border-t border-zinc-100">
                <div className="font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  {step.tools}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
