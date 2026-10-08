import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Box,
  CalendarCheck,
  Clapperboard,
  Compass,
  Drone,
  Glasses,
  GraduationCap,
  Handshake,
  Hotel,
  Landmark,
  MessageCircleQuestion,
  MonitorPlay,
  Ruler,
  ScanLine,
  Search,
  ShieldCheck,
  Smartphone,
  Wallet,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { RoutePath } from '../types';
import { SITE_METADATA } from '../data/siteData';
import { FAQ_GROUPS, FAQ_TOPICS, FAQ_UPDATED } from '../content/faq';
import type { FaqItem } from '../content/faq';
import { Placeholder, WithPlaceholders } from '../components/Placeholder';
import { SpotlightCard } from '../components/SpotlightCard';
import {
  SectionHeading,
  fadeUp,
  linkHandler,
  pageShellClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '../components/GuideParts';

interface FaqPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

const GROUP_ICONS: Record<string, LucideIcon> = {
  'getting-started': Compass,
  'cost-and-timeline': Wallet,
  audience: Smartphone,
  ownership: ShieldCheck,
  'working-together': Handshake,
};

const TOPIC_ICONS: LucideIcon[] = [Ruler, ScanLine, Drone, Box, Glasses, Clapperboard, Landmark, Hotel, GraduationCap, MonitorPlay];

const updatedLabel = new Date(`${FAQ_UPDATED}T00:00:00`).toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const matches = (item: FaqItem, query: string) => {
  if (!query) return true;
  const haystack = `${item.question} ${item.answer}`.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
};

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState(FAQ_GROUPS[0].id);
  const goToLink = (path: RoutePath) => linkHandler(onNavigate, path);
  const trimmed = query.trim();

  const visibleCounts = useMemo(
    () => Object.fromEntries(FAQ_GROUPS.map((g) => [g.id, g.items.filter((item) => matches(item, trimmed)).length])),
    [trimmed]
  );
  const totalVisible = Object.values(visibleCounts).reduce((a, b) => a + b, 0);
  const totalQuestions = FAQ_GROUPS.reduce((n, g) => n + g.items.length, 0);

  // Highlight the group currently in view in the side navigation.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveGroup(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    [...FAQ_GROUPS.map((g) => g.id), 'by-topic'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const jumpLinks = [...FAQ_GROUPS.map((g) => ({ id: g.id, title: g.title })), { id: 'by-topic', title: 'More answers by topic' }];

  return (
    <div className={pageShellClass}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* BREADCRUMB NAVIGATION */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-10 overflow-x-auto whitespace-nowrap pb-1">
          <button type="button" onClick={() => onNavigate('/')} className="hover:text-zinc-900 transition-colors">
            Home
          </button>
          <span className="text-zinc-400" aria-hidden="true">›</span>
          <button type="button" onClick={() => onNavigate('/about/')} className="hover:text-zinc-900 transition-colors">
            About
          </button>
          <span className="text-zinc-400" aria-hidden="true">›</span>
          <span className="text-[#E11D48] font-semibold" aria-current="page">
            FAQ
          </span>
        </nav>

        {/* INTRO + SEARCH */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#E4E4E7] bg-[#FAFAFA] text-xs font-mono text-zinc-700 mb-6 shadow-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-pulse" />
              <span className="font-semibold text-zinc-900">{totalQuestions} answers</span>
              <span className="text-zinc-400">·</span>
              <span>{FAQ_GROUPS.length} topics</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#09090B] font-display text-balance mb-6 leading-[1.12]"
            >
              Frequently asked <span className="text-[#E11D48]">questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl"
            >
              Quick answers to what people ask us most. Can't find yours?{' '}
              <a
                href="/contact/?type=question"
                onClick={goToLink('/contact/?type=question' as RoutePath)}
                className="text-[#E11D48] hover:text-[#BE123C] underline underline-offset-4"
              >
                Ask us directly.
              </a>
            </motion.p>

            <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500">
              <CalendarCheck className="w-3.5 h-3.5 text-[#E11D48]" aria-hidden="true" />
              Last updated <time dateTime={FAQ_UPDATED}>{updatedLabel}</time>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 rounded-2xl border border-[#E4E4E7] bg-[#FAFAFA] p-5 sm:p-6 shadow-sm"
          >
            <label htmlFor="faq-search" className="block text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2">
              Search the answers
            </label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. mobile, hosting, VR"
                className="w-full rounded-lg border border-[#E4E4E7] bg-white pl-10 pr-10 py-3 text-sm text-[#09090B] placeholder-zinc-400 focus:border-[#E11D48] focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-md flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <p className="mt-2 text-[11px] font-mono text-zinc-500" aria-live="polite">
              {trimmed ? `${totalVisible} of ${totalQuestions} answers match` : 'Type to filter every answer on this page.'}
            </p>

            {/* Jump links */}
            <div className="mt-4 pt-4 border-t border-[#E4E4E7] flex flex-wrap gap-2">
              {jumpLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={jumpTo(link.id)}
                  className="rounded-md border border-[#E4E4E7] bg-white px-2.5 py-1 text-xs text-zinc-700 hover:border-[#E11D48] hover:text-[#E11D48] transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* GROUPS with sticky side navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 sm:mb-28">
          <aside className="hidden lg:block lg:col-span-3">
            <nav aria-label="FAQ topics" className="sticky top-28 space-y-1">
              {jumpLinks.map((link) => {
                const Icon = GROUP_ICONS[link.id] ?? MessageCircleQuestion;
                const isActive = activeGroup === link.id;
                const count = visibleCounts[link.id];
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={jumpTo(link.id)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive ? 'bg-[#E11D48]/[0.06] text-zinc-900 font-semibold' : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                    } ${count === 0 ? 'opacity-40' : ''}`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#E11D48]' : 'text-zinc-400'}`} aria-hidden="true" />
                    <span className="flex-1">{link.title}</span>
                    {count !== undefined && <span className="font-mono text-[11px] text-zinc-400">{count}</span>}
                  </a>
                );
              })}
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-14">
            {FAQ_GROUPS.map((group) => {
              const Icon = GROUP_ICONS[group.id] ?? MessageCircleQuestion;
              const hasMatches = visibleCounts[group.id] > 0;
              return (
                <section key={group.id} id={group.id} className={`scroll-mt-24 ${hasMatches ? '' : 'hidden'}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-lg bg-[#E11D48] flex items-center justify-center shadow-sm">
                      <Icon className="w-4.5 h-4.5 text-white" aria-hidden="true" />
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#09090B] font-display">{group.title}</h2>
                    <span className="ml-auto font-mono text-xs text-zinc-400">
                      {visibleCounts[group.id]}/{group.items.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {group.items.map((item, idx) => {
                      const isMatch = matches(item, trimmed);
                      return (
                        <details
                          // Re-mount when searching so matches open automatically.
                          key={`${item.question}-${trimmed ? 'search' : 'browse'}`}
                          open={trimmed ? true : idx === 0 && group.id === FAQ_GROUPS[0].id}
                          className={`group rounded-xl border border-[#E4E4E7] bg-white overflow-hidden shadow-xs hover:border-zinc-300 transition-colors ${
                            isMatch ? '' : 'hidden'
                          }`}
                        >
                          <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer p-5 flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors">
                            <h3 className="text-sm sm:text-base font-semibold text-zinc-900 font-display">{item.question}</h3>
                            <span className="w-6 h-6 rounded bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center text-zinc-500 shrink-0 transition-transform group-open:rotate-180 group-open:text-[#E11D48]">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-5 pb-5 pt-4 text-sm text-zinc-600 leading-relaxed border-t border-[#E4E4E7]">
                            <WithPlaceholders text={item.answer} />
                            {item.link && (
                              <a
                                href={item.link.path}
                                onClick={goToLink(item.link.path)}
                                className="mt-3 flex w-fit items-center gap-1 text-xs font-mono font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors"
                              >
                                {item.link.label}
                                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                              </a>
                            )}
                          </div>
                        </details>
                      );
                    })}
                  </div>
                </section>
              );
            })}

            {trimmed && totalVisible === 0 && (
              <div className="rounded-2xl border border-dashed border-[#E4E4E7] bg-[#FAFAFA] p-8 text-center">
                <MessageCircleQuestion className="w-8 h-8 text-[#E11D48] mx-auto mb-3" aria-hidden="true" />
                <p className="text-base font-bold text-zinc-900 font-display">No answers match "{trimmed}"</p>
                <p className="mt-1 text-sm text-zinc-600">Try another word, or ask us directly.</p>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact/?type=question' as RoutePath)}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#E11D48] hover:text-[#BE123C]"
                >
                  Ask a question <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* MORE ANSWERS BY TOPIC (#by-topic) */}
        <section id="by-topic" className="mb-20 sm:mb-28 scroll-mt-24">
          <SectionHeading eyebrow="By topic" title="More answers by topic" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FAQ_TOPICS.map((topic, i) => {
              const Icon = TOPIC_ICONS[i] ?? MessageCircleQuestion;
              return (
                <motion.div key={topic.path} {...fadeUp} transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}>
                  <a href={topic.path} onClick={goToLink(topic.path)} className="block h-full group">
                    <SpotlightCard className="h-full" contentClassName="h-full p-5 flex flex-col">
                      <span className="w-10 h-10 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#E11D48] group-hover:border-[#E11D48]">
                        <Icon className="w-4.5 h-4.5 text-[#E11D48] transition-colors group-hover:text-white" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-bold text-zinc-900 font-display group-hover:text-[#E11D48] transition-colors">
                        {topic.topic}
                      </span>
                      <span className="mt-auto pt-4 inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 group-hover:text-[#E11D48] transition-colors">
                        Read answers
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </SpotlightCard>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA BAND */}
        <section className="rounded-2xl border border-[#E4E4E7] bg-[#FAFAFA] p-8 sm:p-12 text-center relative overflow-hidden">
          <span className="mx-auto mb-6 w-12 h-12 rounded-xl bg-[#E11D48] flex items-center justify-center shadow-sm">
            <MessageCircleQuestion className="w-5 h-5 text-white" aria-hidden="true" />
          </span>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09090B] font-display mb-4 text-balance">
              Still have a question?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mb-8 leading-relaxed">
              Ask us. We usually reply within <Placeholder>[[TBI: response time]]</Placeholder>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/contact/?type=question' as RoutePath)}
                className={primaryButtonClass}
              >
                <span>Ask a question</span>
                <span className="ml-2 font-mono" aria-hidden="true">→</span>
              </button>
              <a href={SITE_METADATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className={secondaryButtonClass}>
                <span>Chat on WhatsApp</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
