import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { RoutePath } from '../types';
import { Placeholder } from './Placeholder';

// Shared building blocks for /learn/ guides (spec §6.11 guide template).

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45 },
};

export const linkHandler = (onNavigate: (path: RoutePath) => void, path: RoutePath) => (e: React.MouseEvent) => {
  e.preventDefault();
  onNavigate(path);
};

export const GuideBreadcrumb: React.FC<{ label: string; onNavigate: (path: RoutePath) => void }> = ({ label, onNavigate }) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-10 overflow-x-auto whitespace-nowrap pb-1">
    <button type="button" onClick={() => onNavigate('/')} className="hover:text-zinc-900 transition-colors">
      Home
    </button>
    <span className="text-zinc-400" aria-hidden="true">›</span>
    <button type="button" onClick={() => onNavigate('/learn/')} className="hover:text-zinc-900 transition-colors">
      Learn
    </button>
    <span className="text-zinc-400" aria-hidden="true">›</span>
    <span className="text-[#E11D48] font-semibold" aria-current="page">
      {label}
    </span>
  </nav>
);

export const GuideHeader: React.FC<{ eyebrow: string; title: string; minutes: number }> = ({ eyebrow, title, minutes }) => (
  <header className="max-w-4xl mb-10">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#E4E4E7] bg-[#FAFAFA] text-xs font-mono text-zinc-700 mb-6 shadow-xs"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-pulse" />
      <span className="font-semibold text-zinc-900">Guide</span>
      <span className="text-zinc-400">·</span>
      <span>{eyebrow}</span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 }}
      className="text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-[#09090B] font-display text-balance leading-[1.12]"
    >
      {title}
    </motion.h1>

    {/* L01 author and dates stay as placeholders until input. */}
    <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-mono text-zinc-500 pb-6 border-b border-[#E4E4E7]">
      <span>
        By <Placeholder>[[TBI: author name, role]]</Placeholder>
      </span>
      <span className="text-zinc-400" aria-hidden="true">·</span>
      <span>
        Published <Placeholder>[[TBI]]</Placeholder>
      </span>
      <span className="text-zinc-400" aria-hidden="true">·</span>
      <span>
        Updated <Placeholder>[[TBI]]</Placeholder>
      </span>
      <span className="text-zinc-400" aria-hidden="true">·</span>
      <span>{minutes} min read</span>
    </p>
  </header>
);

export const ShortAnswer: React.FC<{ text: React.ReactNode }> = ({ text }) => (
  <motion.section
    {...fadeUp}
    aria-label="Short answer"
    className="max-w-4xl mb-20 sm:mb-24 rounded-2xl border border-[#E11D48]/25 bg-[#E11D48]/[0.04] p-6 sm:p-8"
  >
    <p className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold mb-2">Short answer</p>
    <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">{text}</p>
  </motion.section>
);

export const SectionHeading: React.FC<{ eyebrow: string; title: string; className?: string }> = ({
  eyebrow,
  title,
  className = 'max-w-2xl mb-10',
}) => (
  <motion.div {...fadeUp} className={className}>
    <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">{eyebrow}</span>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] font-display mt-1 text-balance">
      {title}
    </h2>
  </motion.div>
);

export interface ComparisonColumn {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface ComparisonRow {
  label: string;
  values: Record<string, string>;
}

// Responsive comparison: a table with a column highlighter on desktop, stacked by column on mobile.
// All columns are styled equally until the viewer picks one.
export const ComparisonTable: React.FC<{
  eyebrow: string;
  title: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}> = ({ eyebrow, title, columns, rows }) => {
  const [highlight, setHighlight] = useState<string | null>(null);

  const columnClass = (id: string) =>
    highlight === id ? 'bg-[#E11D48]/[0.05] text-zinc-900' : highlight ? 'text-zinc-400' : 'text-zinc-700';

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <SectionHeading eyebrow={eyebrow} title={title} className="" />

        <div className="hidden md:flex items-center gap-2 shrink-0" role="group" aria-label="Highlight a column">
          <span className="text-xs font-mono text-zinc-500 mr-1">Highlight:</span>
          {columns.map((column) => (
            <button
              key={column.id}
              type="button"
              aria-pressed={highlight === column.id}
              onClick={() => setHighlight(highlight === column.id ? null : column.id)}
              className={`px-3 py-1.5 rounded-md border text-xs font-mono transition-colors ${
                highlight === column.id
                  ? 'border-[#E11D48] bg-[#E11D48] text-white'
                  : 'border-[#E4E4E7] bg-white text-zinc-700 hover:border-zinc-300'
              }`}
            >
              {column.name}
            </button>
          ))}
        </div>
      </div>

      <motion.div {...fadeUp} className="hidden md:block rounded-xl border border-[#E4E4E7] overflow-hidden shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#FAFAFA] border-b border-[#E4E4E7]">
            <tr>
              <td className="px-5 py-4 w-[22%]" />
              {columns.map((column) => {
                const Icon = column.icon;
                return (
                  <th
                    key={column.id}
                    scope="col"
                    onMouseEnter={() => setHighlight(column.id)}
                    onMouseLeave={() => setHighlight(null)}
                    className={`px-5 py-4 text-sm font-bold font-display transition-colors cursor-default ${columnClass(column.id)}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#E11D48]" aria-hidden="true" />
                      {column.name}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E4E4E7] bg-white">
            {rows.map((row) => (
              <tr key={row.label} className="align-top">
                <th scope="row" className="px-5 py-4 text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  {row.label}
                </th>
                {columns.map((column) => (
                  <td key={column.id} className={`px-5 py-4 text-sm leading-relaxed transition-colors ${columnClass(column.id)}`}>
                    {row.values[column.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <div className="md:hidden space-y-4">
        {columns.map((column) => {
          const Icon = column.icon;
          return (
            <div key={column.id} className="rounded-xl border border-[#E4E4E7] bg-white overflow-hidden shadow-xs">
              <h3 className="flex items-center gap-2 px-5 py-3.5 bg-[#FAFAFA] border-b border-[#E4E4E7] text-base font-bold text-zinc-900 font-display">
                <Icon className="w-4 h-4 text-[#E11D48]" aria-hidden="true" />
                {column.name}
              </h3>
              <dl className="divide-y divide-[#E4E4E7]">
                {rows.map((row) => (
                  <div key={row.label} className="px-5 py-3">
                    <dt className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">{row.label}</dt>
                    <dd className="mt-0.5 text-sm text-zinc-700">{row.values[column.id]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </div>
    </>
  );
};

// L02: required before a guide is published.
export const FromOurProjects: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <section id="from-our-projects" className="mb-20 sm:mb-28 scroll-mt-20">
    <SectionHeading eyebrow="From our projects" title={title} className="max-w-2xl mb-8" />
    <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/50 p-6 sm:p-8">
      <p className="mb-4">
        <Placeholder>[[TBI — required before publishing. Use real observations from RCAAS projects, for example:]]</Placeholder>
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-amber-900">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-amber-200 bg-white px-3.5 py-2.5">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export interface GuideFaqItem {
  question: string;
  answer: React.ReactNode;
  extra?: React.ReactNode;
}

// Site-wide FAQ accordion. Answers stay in the DOM (<details>), so the text is in the page HTML
// (CLAUDE.md), and opening needs no height animation.
export const FaqList: React.FC<{ items: GuideFaqItem[]; className?: string; firstOpen?: boolean }> = ({
  items,
  className = '',
  firstOpen = true,
}) => (
  <div className={`space-y-3 ${className}`}>
    {items.map((faq, idx) => (
      <details
        key={faq.question}
        open={firstOpen && idx === 0}
        className="group rounded-xl border border-[#E4E4E7] bg-white overflow-hidden shadow-xs"
      >
        <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer p-5 flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors">
          <h3 className="text-sm sm:text-base font-semibold text-zinc-900 font-display">{faq.question}</h3>
          <span className="w-6 h-6 rounded bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center text-zinc-500 shrink-0 transition-transform group-open:rotate-180 group-open:text-[#E11D48]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </summary>
        <div className="p-5 pt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-[#E4E4E7]">
          {faq.answer}
          {faq.extra}
        </div>
      </details>
    ))}
  </div>
);

export const GuideFaq: React.FC<{ faqs: GuideFaqItem[]; title?: string }> = ({ faqs, title = 'Common questions' }) => (
  <section className="mb-20 sm:mb-28">
    <SectionHeading eyebrow="Answers" title={title} className="max-w-3xl mx-auto mb-10 text-center" />
    <FaqList items={faqs} className="max-w-3xl mx-auto" />
  </section>
);

export const GuideSources: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="max-w-3xl mx-auto mb-20 sm:mb-28 pt-6 border-t border-[#E4E4E7]">
    <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-3">Sources</h2>
    <div className="space-y-2 text-xs text-zinc-600 leading-relaxed">{children}</div>
  </section>
);

export const GuideCta: React.FC<{
  title: string;
  body: string;
  icons: LucideIcon[];
  children: React.ReactNode;
}> = ({ title, body, icons, children }) => (
  <section className="rounded-2xl border border-[#E4E4E7] bg-[#FAFAFA] p-8 sm:p-12 text-center relative overflow-hidden">
    <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
      {icons.map((Icon, i) => (
        <span key={i} className="w-10 h-10 rounded-lg border border-[#E4E4E7] bg-white flex items-center justify-center shadow-xs">
          <Icon className="w-4.5 h-4.5 text-[#E11D48]" />
        </span>
      ))}
    </div>
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09090B] font-display mb-4 text-balance">{title}</h2>
      <p className="text-sm sm:text-base text-zinc-600 mb-8 leading-relaxed">{body}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">{children}</div>
    </div>
  </section>
);

export const primaryButtonClass =
  'w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#E11D48] text-white font-medium text-sm hover:bg-[#BE123C] transition-colors shadow-sm active:scale-[0.98]';

export const secondaryButtonClass =
  'w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#E4E4E7] bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-xs active:scale-[0.98]';

export const pageShellClass =
  "py-14 sm:py-20 md:py-24 bg-[#FFFFFF] text-[#09090B] relative font-['Comfortaa',ui-sans-serif,system-ui,sans-serif]";
