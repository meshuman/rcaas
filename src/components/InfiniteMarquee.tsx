import React from 'react';

interface InfiniteMarqueeProps {
  items?: string[];
  className?: string;
}

const DEFAULT_MARQUEE_ITEMS = [
  'REALITY CAPTURE AS A SERVICE',
  '3D GAUSSIAN SPLATTING',
  'SLAM LIDAR (±5mm)',
  'KATHMANDU VALLEY',
  'AERIAL DRONE RTK SURVEY',
  'ZERO-INSTALL WEB TOURS',
  'DIGITAL TWINS & BIM',
  'CULTURAL HERITAGE ARCHIVES',
  '60 FPS BROWSER ENGINE',
  'UNREAL ENGINE & WEBRTC',
  '100% DATA OWNERSHIP',
];

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items = DEFAULT_MARQUEE_ITEMS,
  className = '',
}) => {
  return (
    <div className={`relative w-full overflow-hidden border-y border-[#E4E4E7] bg-[#FAFAFA] py-3.5 ${className}`}>
      
      {/* Side Vignettes */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

      {/* Infinite Scrolling Track */}
      <div className="animate-loro-marquee flex items-center">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-5 px-5 shrink-0">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#52525B] hover:text-[#09090B] transition-colors">
              {text}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
          </div>
        ))}
      </div>
    </div>
  );
};
