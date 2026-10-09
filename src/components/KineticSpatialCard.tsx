import React, { useState, useRef, useEffect } from 'react';
import { startCanvasLoop } from '../lib/canvasLoop';

interface KineticSpatialCardProps {
  imageSrc: string;
  title: string;
  location: string;
  tag: string;
  line: string;
  onClick: () => void;
  className?: string;
  badge?: string;
}

export const KineticSpatialCard: React.FC<KineticSpatialCardProps> = ({
  imageSrc,
  title,
  location,
  tag,
  line,
  onClick,
  className = '',
  badge,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [scanActive, setScanActive] = useState(true);

  // Handle subtle 3D card tilt & parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  // Canvas LiDAR Scan Overlay & Point Stream
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 360);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 240);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Pre-generate point swarm
    interface ScanPoint {
      x: number;
      y: number;
      depth: number;
      color: string;
      size: number;
    }

    const points: ScanPoint[] = [];
    for (let i = 0; i < 180; i++) {
      const depth = Math.random();
      const hue = 180 + Math.random() * 60; // Cyan to Emerald elevation
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        depth,
        color: `hsla(${hue}, 80%, 65%, ${0.3 + depth * 0.5})`,
        size: 1.5 + depth * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Moving Scanline Wipe (calibrated 2x slower for elegant, cinematic scanning)
      const scanPhase = (Math.sin(time * 0.7) + 1) * 0.5;
      const scanY = scanPhase * height;

      // Draw faint technical LiDAR points near the scan plane
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        // Move points slightly with drift
        const dx = p.x + Math.sin(time + p.depth * 5) * 6;
        const dy = p.y + Math.cos(time + p.depth * 4) * 4;

        // Proximity to active laser scan plane
        const distToScan = Math.abs(dy - scanY);
        if (distToScan < 45 || isHovered) {
          const proximityAlpha = Math.max(0, 1 - distToScan / 45);
          ctx.fillStyle = isHovered ? p.color : `rgba(225, 29, 72, ${proximityAlpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(dx, dy, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Connect nearby scan points with faint triangulation
          if (i % 4 === 0 && proximityAlpha > 0.4) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${proximityAlpha * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(dx, dy);
            ctx.lineTo(dx + 25, dy - 15);
            ctx.stroke();
          }
        }
      }

      // Draw Sweeping Laser Line
      ctx.strokeStyle = 'rgba(225, 29, 72, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      // Laser fringe glow
      const grad = ctx.createLinearGradient(0, scanY - 18, 0, scanY + 18);
      grad.addColorStop(0, 'rgba(225, 29, 72, 0)');
      grad.addColorStop(0.5, 'rgba(225, 29, 72, 0.22)');
      grad.addColorStop(1, 'rgba(225, 29, 72, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 18, width, 36);

    };

    const stopLoop = startCanvasLoop(canvas, render);

    return () => {
      stopLoop();
      window.removeEventListener('resize', handleResize);
    };
  }, [isHovered]);

  // Subtle 3D perspective transform
  const rotateX = isHovered ? (mousePos.y - 0.5) * -8 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 8 : 0;
  const parallaxX = (mousePos.x - 0.5) * -12;
  const parallaxY = (mousePos.y - 0.5) * -12;

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`group relative overflow-hidden rounded-xl border border-line bg-white shadow-sm hover:shadow-xl transition-shadow cursor-pointer ${className}`}
    >
      {/* 1. Kinetic Motion Visual Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
        
        {/* Animated Dolly Image (Smooth continuous zoom & drift) */}
        <div
          style={{
            transform: `scale(${isHovered ? 1.08 : 1.03}) translate(${parallaxX}px, ${parallaxY}px)`,
            transition: 'transform 0.4s ease-out',
          }}
          className="h-full w-full will-change-transform"
        >
          <img
            src={imageSrc}
            alt={`3D spatial view of ${title}`}
            className="h-full w-full object-cover filter contrast-[1.05]"
            loading="lazy"
          />
        </div>

        {/* 2. Interactive LiDAR Point Cloud & Laser Scan Canvas */}
        <div className="absolute inset-0 pointer-events-none">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>

        {/* Technical Corner Brackets */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t border-l border-white/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t border-r border-white/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/60" />

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="rounded px-2.5 py-1 text-[11px] font-mono font-medium bg-white/90 text-zinc-900 shadow-sm border border-white/40">
            {tag}
          </span>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 border border-white/20 text-[10px] font-mono text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>3D FLYTHROUGH</span>
          </div>
        </div>

        {/* Bottom Floating Telemetry Indicator on Image */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="text-accent-soft font-semibold">{location}</span>
          </div>
          <div className="text-[10px] text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
            POS: {(mousePos.x * 20).toFixed(1)}m, {(mousePos.y * 10).toFixed(1)}m
          </div>
        </div>
      </div>

      {/* 2. Editorial Text Content */}
      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
          <span>{badge || 'CASE STUDY'}</span>
          <span className="group-hover:text-accent transition-colors">EXPLORE 3D &rarr;</span>
        </div>

        <h3 className="text-xl font-bold text-zinc-950 font-display group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-zinc-600">
          {line}
        </p>

        {/* Bottom Interactive CTA Strip */}
        <div className="mt-5 flex items-center justify-between pt-4 border-t border-line text-xs font-semibold text-zinc-900">
          <span className="flex items-center gap-1.5 text-zinc-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Step inside experience</span>
          </span>
          <span className="group-hover:translate-x-1.5 transition-transform text-accent font-mono">
            Enter Tour &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};
