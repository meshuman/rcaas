import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RoutePath } from '../types';
import { SITE_METADATA, PILLARS, INDUSTRIES, CASE_STUDIES, IMAGES } from '../data/siteData';
import { HOME_FAQS } from '../content/faq';
import { SplatEmbed } from '../components/SplatEmbed';
import { SpotlightCard } from '../components/SpotlightCard';
import { InfiniteMarquee } from '../components/InfiniteMarquee';
import { KineticSpatialCard } from '../components/KineticSpatialCard';
import { SpatialBackgroundScan } from '../components/SpatialBackgroundScan';
import { HeritageMotionBackdrop } from '../components/HeritageMotionBackdrop';
import { TypewriterHeroPhrase } from '../components/TypewriterHeroPhrase';
import { FaqList } from '../components/GuideParts';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenPlanner }) => {


  const scrollToLive = () => {
    const el = document.getElementById('live-experience');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-[#FFFFFF] text-[#09090B]">
      {/* Ambient Spatial Scanning Grid */}
      <SpatialBackgroundScan />
      
      {/* 1. Hero Section #hero */}
      <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            
            {/* Loro Technical Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#E4E4E7] bg-[#FAFAFA] text-xs font-mono text-zinc-700 mb-6 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-pulse"></span>
              <span>Reality Capture as a Service · Kathmandu, Nepal</span>
            </div>

            {/* H1 Tagline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[#09090B] sm:text-6xl lg:text-7xl font-display leading-[1.12] sm:leading-[1.08] text-balance">
              {/* Full sentence for Google, AI assistants, and screen readers */}
              <span className="sr-only">
                Turn real places into experiences that move people to act.
              </span>

              {/* Animated visual layer with laser-square typewriter effect */}
              <span aria-hidden="true">
                <span>Turn real places into experiences that </span>
                <TypewriterHeroPhrase />
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#52525B] text-balance max-w-3xl mx-auto">
              We capture your hotel, campus, property or heritage site in photorealistic 3D, then turn it into tours, VR, AR and stories that help people decide to book, enrol, invest or visit.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenPlanner}
                className="loro-btn-primary w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                Plan your experience &rarr;
              </button>
              
              <button
                onClick={scrollToLive}
                className="loro-btn-secondary w-full sm:w-auto px-7 py-3.5 text-xs font-medium"
              >
                <span>Explore a live tour</span>
                <span className="text-zinc-400 ml-1.5">&darr;</span>
              </button>
            </div>

            {/* Trust Line */}
            <div className="mt-7 text-xs text-zinc-500 font-mono flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]"></span>
              <span>Engineers and game developers, based in Kathmandu.</span>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Infinite Momentum Marquee Band */}
      <InfiniteMarquee />

      {/* 2. Live experience #live-experience */}
      <section id="live-experience" className="py-24 border-t border-[#E4E4E7] bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Step inside
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#09090B] sm:text-5xl font-display">
              Don't just look at photos. Walk through the place.
            </h2>
            <p className="mt-4 text-base text-[#52525B] leading-relaxed">
              This is Chilancho Stupa, captured by our team and published on our 3D platform. Move around it on your phone or laptop. No app, no download.
            </p>
          </div>

          {/* Interactive SplatEmbed */}
          <SplatEmbed initialDemo="chilancho" />

          {/* Static HTML description for crawlers and accessibility */}
          <div className="mt-6 rounded-md border border-[#E4E4E7] bg-[#FFFFFF] p-4 text-xs text-zinc-600 font-mono shadow-sm">
            <p>
              <strong className="text-zinc-900">Accessibility &amp; Model Overview:</strong> An interactive, photorealistic 3D model of Chilancho Stupa in Kirtipur, Kathmandu Valley, created by RCAAS Technology. Visitors can move freely through the sacred courtyard, stone chaityas, and historic Newari architecture. Built to help conservators, researchers, and visitors experience the historic complex before visiting.
            </p>
          </div>

        </div>
      </section>

      {/* 3. What we create #what-we-create */}
      <section id="what-we-create" className="py-24 border-t border-[#E4E4E7] bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Three Pillars
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#09090B] sm:text-5xl font-display">
              What we create
            </h2>
            <p className="mt-4 text-base text-[#52525B] leading-relaxed">
              Every project starts with a real place and ends with something people can experience, share and act on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <SpotlightCard
                key={pillar.id}
                className="flex flex-col justify-between p-7"
              >
                <div>
                  <div className="text-[11px] font-mono text-[#BE123C] uppercase tracking-wider font-semibold">
                    {pillar.promise}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-[#09090B] font-display">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#52525B]">
                    {pillar.body}
                  </p>
                  
                  {/* Clean unboxed chips with typographic separator */}
                  <div className="mt-6 flex flex-wrap items-center gap-y-1 text-xs text-zinc-500 font-mono">
                    {pillar.chips.map((chip, i) => (
                      <React.Fragment key={chip}>
                        <span className="text-zinc-700">{chip}</span>
                        {i < pillar.chips.length - 1 && <span className="mx-2 text-zinc-400">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E4E4E7]">
                  <button
                    onClick={() => onNavigate(pillar.link as RoutePath)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#09090B] hover:text-[#E11D48] transition-colors"
                  >
                    <span>Explore {pillar.title.toLowerCase()}</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Built for your goal #industries */}
      <section id="industries" className="py-24 border-t border-[#E4E4E7] bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              Industry Solutions
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#09090B] sm:text-5xl font-display">
              Built around your goal
            </h2>
            <p className="mt-4 text-base text-[#52525B] leading-relaxed">
              Tell us what you want people to do. We will design the experience around it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => (
              <SpotlightCard
                key={ind.id}
                onClick={() => onNavigate(ind.link as RoutePath)}
                className="cursor-pointer p-6"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#09090B] font-semibold">{ind.title}</span>
                  <span className="text-zinc-500 text-[11px] bg-zinc-100 px-2 py-0.5 rounded">{ind.badge}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-[#09090B] font-display hover:text-[#E11D48] transition-colors">
                  {ind.goalHeadline}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#52525B]">
                  {ind.summary}
                </p>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#E4E4E7] text-xs">
                  <span className="text-zinc-500 font-mono text-[11px]">
                    {ind.proof ? `Proof: ${ind.proof.split(',')[0]}` : 'Explore solutions'}
                  </span>
                  <span className="font-semibold text-zinc-700">&rarr;</span>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Stories we've told #work */}
      <section id="work" className="py-24 border-t border-[#E4E4E7] bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
                Case Studies
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#09090B] sm:text-5xl font-display">
                Stories we've told
              </h2>
              <p className="mt-3 text-base text-[#52525B]">
                Real places, real clients, each with a clear goal.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('/work/')}
                className="loro-btn-secondary px-4 py-2 text-xs font-semibold"
              >
                <span>See all our work</span>
                <span className="ml-1.5">&rarr;</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((study) => (
              <KineticSpatialCard
                key={study.id}
                imageSrc={study.heroImage}
                title={study.title}
                location={study.location}
                tag={study.tag}
                line={study.line}
                onClick={() => onNavigate(`/work/${study.slug}/` as RoutePath)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. How it works #how-it-works */}
      <section id="how-it-works" className="py-24 border-t border-[#E4E4E7] bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
                Five-Step Value Chain
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#09090B] sm:text-5xl font-display">
                From real place to finished experience
              </h2>
            </div>
            <div>
              <button
                onClick={() => onNavigate('/how-we-work/')}
                className="text-xs font-mono font-semibold text-[#E11D48] hover:underline flex items-center gap-1.5"
              >
                <span>See how we work</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'We start with your goal, your audience and what you want them to do.',
              },
              {
                step: '02',
                title: 'Capture',
                desc: 'Our team scans the place on the ground and from the air, quickly and without touching anything.',
              },
              {
                step: '03',
                title: 'Create',
                desc: 'Engineers build an accurate 3D model. Game developers shape it into an experience. Together we design the story.',
              },
              {
                step: '04',
                title: 'Launch',
                desc: 'We publish it and help you place it where your audience is: your website, social media, events and QR codes.',
              },
              {
                step: '05',
                title: 'Measure',
                desc: 'We look at how people engage and refine the experience over time.',
              },
            ].map((s) => (
              <SpotlightCard
                key={s.step}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-[#E11D48]">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-[#09090B] font-display">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#52525B] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Why RCAAS #why-rcaas */}
      <section id="why-rcaas" className="py-24 border-t border-[#E4E4E7] bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              The RCAAS Advantage
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#09090B] sm:text-5xl font-display">
              Why RCAAS
            </h2>
            <p className="mt-4 text-base text-[#52525B] leading-relaxed">
              {SITE_METADATA.boilerplate}{' '}
              <span className="text-[#09090B] font-semibold">RCAAS stands for Reality Capture as a Service.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Precise, because we're engineers.",
                desc: 'Every experience is built on accurate measurement, so what people see is true to the place.',
              },
              {
                title: "Engaging, because we're game developers.",
                desc: 'We bring the craft of interactive design, so people stay, explore and remember.',
              },
              {
                title: 'Story-first, built to act on.',
                desc: 'Each experience is designed around one goal: the action you want your audience to take.',
              },
              {
                title: 'Here for the long term.',
                desc: "A Kathmandu team that knows Nepal's places, conditions and people, and stays with you after launch.",
              },
            ].map((point, idx) => (
              <SpotlightCard
                key={idx}
                className="p-7 flex items-start gap-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#F4F4F5] border border-[#E4E4E7] text-[#09090B] font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#09090B] font-display">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#52525B]">
                    {point.desc}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Heritage Band #heritage */}
      <section id="heritage" className="relative py-28 border-t border-[#E4E4E7] bg-[#FAFAFA] overflow-hidden">
        {/* Active Heritage Aerial Point Cloud & Radar Motion Backdrop */}
        <HeritageMotionBackdrop />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#BE123C] font-semibold">
              Lasting impact
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#09090B] sm:text-5xl font-display">
              Nepal's heritage, recorded for the next generation.
            </h2>
            <p className="mt-4 text-base text-[#52525B] leading-relaxed">
              Temples, stupas and historic towns change with weather, earthquakes and time. We document them in 3D, measurable for conservators and explorable for everyone, so they can be studied, cared for and shared long after today.
            </p>
            <div className="mt-8">
              <button
                onClick={() => onNavigate('/industries/heritage-culture/')}
                className="loro-btn-primary px-6 py-3 text-xs"
              >
                Discover digital heritage &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Proof Strip #proof */}
      <section id="proof" className="py-14 border-t border-[#E4E4E7] bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-md border border-[#E4E4E7] bg-[#FAFAFA]">
              <div className="text-3xl font-bold text-[#09090B] font-mono">±5mm</div>
              <div className="mt-1 text-[11px] text-zinc-500 font-mono">SLAM LiDAR Precision</div>
            </div>
            <div className="p-5 rounded-md border border-[#E4E4E7] bg-[#FAFAFA]">
              <div className="text-3xl font-bold text-[#09090B] font-mono">1.4M+</div>
              <div className="mt-1 text-[11px] text-zinc-500 font-mono">Splats / Experience</div>
            </div>
            <div className="p-5 rounded-md border border-[#E4E4E7] bg-[#FAFAFA]">
              <div className="text-3xl font-bold text-[#09090B] font-mono">0 Apps</div>
              <div className="mt-1 text-[11px] text-zinc-500 font-mono">Zero Download Web</div>
            </div>
            <div className="p-5 rounded-md border border-[#E4E4E7] bg-[#FAFAFA]">
              <div className="text-3xl font-bold text-[#09090B] font-mono">100%</div>
              <div className="mt-1 text-[11px] text-zinc-500 font-mono">Data Ownership Retained</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Short FAQ #faq */}
      <section id="faq" className="py-24 border-t border-[#E4E4E7] bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
              FAQ
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#09090B] sm:text-5xl font-display">
              Questions people ask first
            </h2>
          </div>

          <FaqList items={HOME_FAQS} firstOpen={false} />

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/faq/')}
              className="text-xs font-mono font-semibold text-[#09090B] hover:text-[#E11D48] transition-colors"
            >
              More questions &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* 11. Closing CTA #cta */}
      <section id="cta" className="py-24 border-t border-[#E4E4E7] bg-[#FFFFFF]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl font-extrabold tracking-tight text-[#09090B] sm:text-5xl font-display">
            Have a place with a story to tell?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#52525B] leading-relaxed">
            Tell us about your place and what you want people to do after they've seen it. We'll suggest the right experience and send a clear proposal.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenPlanner}
              className="loro-btn-primary w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider"
            >
              Plan your experience &rarr;
            </button>
            <a
              href={SITE_METADATA.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="loro-btn-secondary w-full sm:w-auto px-7 py-3.5 text-xs font-medium"
            >
              <span>Chat on WhatsApp</span>
              <span className="ml-1 text-zinc-400">↗</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
