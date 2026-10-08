import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RoutePath } from '../types';
import { SITE_METADATA } from '../data/siteData';
import { SplatEmbed } from '../components/SplatEmbed';
import { Placeholder } from '../components/Placeholder';

interface PlatformPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenPlanner: () => void;
}

const STEPS = [
  { number: '01', title: 'We capture', line: 'Our team scans your space and processes the data.' },
  {
    number: '02',
    title: 'We craft and publish',
    line: 'We prepare the experience and set it live on our platform, ready for your audience.',
  },
  { number: '03', title: 'Your audience explores', line: 'They open the link on any device and move through your space.' },
];

interface Feature {
  title: string;
  line: string;
}

const AVAILABLE_NOW: Feature[] = [
  {
    title: 'Photorealistic 3D in the browser',
    line: 'Your space looks like a photograph people can walk into. No app, no download.',
  },
  { title: 'One shareable link', line: 'Send it in messages, emails and posts, or put it behind a QR code.' },
  { title: 'Hosting handled for you', line: 'We host, maintain and manage your experience.' },
];

// P02: keep only confirmed features; move each to AVAILABLE_NOW once live.
const BUILT_TO_CONVERT: Feature[] = [
  { title: 'Embed on your website', line: 'Place the experience directly on your home, rooms or admissions page.' },
  { title: 'Your branding', line: 'Your logo and colours on the experience.' },
  { title: 'Hotspots and information points', line: 'Tell the story of each space with text, images, video or audio.' },
  { title: 'Action buttons', line: '"Book now", "Apply", "WhatsApp us" or "Enquire" inside the experience.' },
  { title: 'Guided paths', line: 'Lead visitors through the spaces in the order that matters.' },
  { title: 'VR mode', line: 'Open the same experience in a VR headset.' },
  { title: 'Engagement analytics', line: 'See how many people explored, for how long and what they clicked.' },
];

const AUDIENCES = [
  { who: 'Hotels and resorts', how: 'Guests explore rooms and spaces before they book.' },
  { who: 'Schools and colleges', how: 'Families walk the campus before they apply.' },
  { who: 'Property developers and agents', how: 'Buyers tour show flats and units from anywhere.' },
  { who: 'Heritage sites and museums', how: 'People everywhere experience places they may never visit.' },
  { who: 'Galleries, venues and showrooms', how: 'Visitors see the space and layout before they come.' },
];

const SPACE_TYPES = [
  'Hotel or resort',
  'School, college or university',
  'Property',
  'Heritage site or museum',
  'Venue or showroom',
  'Other',
];

const SPACE_COUNTS = ['1', '2–5', '6+'];

interface PlatformFaq {
  question: string;
  answer: React.ReactNode;
}

// Only the first two answers are resolved; the rest stay as register placeholders.
const PLATFORM_FAQS: PlatformFaq[] = [
  {
    question: 'Do visitors need an app or special software?',
    answer:
      'No. The experience opens in any modern web browser on a phone, tablet or computer. A VR headset is only needed for VR.',
  },
  {
    question: 'Can I manage my own experiences on the platform?',
    answer:
      'Not yet. Today we publish and manage your experience for you. Subscriptions that let businesses manage their own experiences are coming soon. Join early access to hear first.',
  },
  {
    question: 'Can I put the experience on my own website?',
    answer: (
      <Placeholder>
        [[TBC: "Yes. We provide an embed code for your website, and the same link works everywhere else."]]
      </Placeholder>
    ),
  },
  {
    question: 'Will it slow down my website?',
    answer: <Placeholder>[[TBC: "No. The experience only loads when a visitor chooses to open it."]]</Placeholder>,
  },
  {
    question: 'How long is my experience hosted, and what happens if hosting ends?',
    answer: <Placeholder>[[TBI: hosting period, renewal and what the client keeps]]</Placeholder>,
  },
  {
    question: 'Can I see how many people explored it?',
    answer: (
      <Placeholder>
        [[TBC: "Yes. We share engagement figures such as views and time spent." — keep only if analytics are available]]
      </Placeholder>
    ),
  },
];

// P04: replace with the real form handler / mailing list once chosen.
const submitEarlyAccess = async (data: Record<string, string>) => {
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer?.push({ event: 'early_access_submit', space_type: data.spaceType });
};

const inputClass =
  'w-full rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2.5 text-xs text-[#09090B] placeholder-zinc-400 focus:border-[#E11D48] focus:outline-none';

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    spaceType: '',
    spaceCount: '',
    useCase: '',
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const updateField = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitEarlyAccess(form);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const scrollToAnchor = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-14 sm:py-20 md:py-24 bg-[#FFFFFF] text-[#09090B] relative font-['Comfortaa',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* BREADCRUMB NAVIGATION */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-10 overflow-x-auto whitespace-nowrap pb-1">
          <button type="button" onClick={() => onNavigate('/')} className="hover:text-zinc-900 transition-colors">
            Home
          </button>
          <span className="text-zinc-400" aria-hidden="true">›</span>
          <span className="text-[#E11D48] font-semibold" aria-current="page">
            Platform
          </span>
        </nav>

        {/* 1. HERO + ANSWER SUMMARY */}
        <section className="max-w-4xl mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#E4E4E7] bg-[#FAFAFA] text-xs font-mono text-zinc-700 mb-6 shadow-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-pulse" />
            <span>[[TBI: platform name, e.g. "RCAAS 3D Platform"]]</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#09090B] font-display text-balance mb-6 leading-[1.12]"
          >
            One link. <span className="text-[#E11D48]">Your space, explorable anywhere.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mb-8"
          >
            The RCAAS 3D platform is our own web platform for presenting photorealistic 3D experiences built with
            Gaussian splatting. We capture your space, publish it on the platform, and your audience explores it from a
            single link on any phone, tablet or computer, with nothing to install.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToAnchor('early-access')}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#E11D48] text-white font-medium text-sm hover:bg-[#BE123C] transition-colors shadow-sm active:scale-[0.98]"
            >
              <span>Join early access</span>
              <span className="ml-2 font-mono" aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('demo')}
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg border border-[#E4E4E7] bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-xs active:scale-[0.98]"
            >
              <svg className="w-4 h-4 text-[#E11D48] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Try the live demo</span>
            </button>
          </motion.div>
        </section>

        {/* 2. LIVE DEMO (#demo) */}
        <section id="demo" className="mb-20 sm:mb-28 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">Live demo</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] font-display mt-1">Try it now</h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md">
              Drag to look around. Move through the space. It runs in your browser.
            </p>
          </div>

          <SplatEmbed initialDemo="basera" />

          <p className="mt-4 text-xs font-mono text-zinc-500">
            <Placeholder>[[TBI: project]]</Placeholder> · hosted on our platform.
          </p>
          <p className="mt-2 text-[11px] font-mono text-zinc-400">
            <Placeholder>[[TBI: demo project, embed URL, full-screen URL, poster, file size]]</Placeholder>
          </p>
        </section>

        {/* 3. HOW IT WORKS TODAY (#how-it-works) */}
        <section id="how-it-works" className="mb-20 sm:mb-28 scroll-mt-20">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">Three steps</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] font-display mt-1">
              How it works today
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step) => (
              <li
                key={step.number}
                className="p-6 rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] hover:border-zinc-300 transition-colors"
              >
                <span className="font-mono text-xs text-[#BE123C] font-semibold">{step.number}</span>
                <h3 className="text-base font-bold text-zinc-900 font-display mt-1 mb-2">{step.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{step.line}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 flex items-start gap-2 text-xs sm:text-sm text-zinc-600">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            <span>Today the platform comes as part of our service, so you don't have to manage anything yourself.</span>
          </p>
        </section>

        {/* 4. BUILT TO SHARE (#features) */}
        <section id="features" className="mb-20 sm:mb-28 scroll-mt-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">Built to share</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] font-display mt-1 text-balance">
              Everything your audience needs, nothing they have to install
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#E4E4E7] bg-white overflow-hidden shadow-xs">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E4E4E7] bg-[#FAFAFA]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-900 font-semibold">Available now</h3>
              </div>
              <dl className="divide-y divide-[#E4E4E7]">
                {AVAILABLE_NOW.map((feature) => (
                  <div key={feature.title} className="p-5">
                    <dt className="text-sm font-bold text-zinc-900 font-display">{feature.title}</dt>
                    <dd className="mt-1 text-xs text-zinc-600 leading-relaxed">{feature.line}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-dashed border-[#D4D4D8] bg-white overflow-hidden">
              <div className="flex flex-wrap items-center gap-2 px-5 py-3.5 border-b border-dashed border-[#D4D4D8] bg-[#FAFAFA]">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" aria-hidden="true" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-900 font-semibold">Built to convert</h3>
                <Placeholder>[[TBC: keep only confirmed features; move each to "Available now" once live]]</Placeholder>
              </div>
              <dl className="divide-y divide-[#E4E4E7]">
                {BUILT_TO_CONVERT.map((feature) => (
                  <div key={feature.title} className="p-5">
                    <dt className="text-sm font-bold text-zinc-900 font-display">{feature.title}</dt>
                    <dd className="mt-1 text-xs text-zinc-600 leading-relaxed">{feature.line}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 5. WHO IT'S FOR */}
        <section className="mb-20 sm:mb-28">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">Who it's for</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] font-display mt-1">
              Made for places people want to see first
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {AUDIENCES.map((audience) => (
              <div
                key={audience.who}
                className="p-6 rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] hover:border-zinc-300 transition-colors"
              >
                <h3 className="text-sm font-bold text-zinc-900 font-display mb-2">{audience.who}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{audience.how}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. COMING SOON: SUBSCRIPTIONS (#subscriptions) + 7. EARLY ACCESS (#early-access) */}
        <section className="mb-20 sm:mb-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div id="subscriptions" className="lg:col-span-5 scroll-mt-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#E4E4E7] bg-[#FAFAFA] text-xs font-mono text-zinc-700 mb-4 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-pulse" />
              <span>Coming soon</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] font-display text-balance">
              Coming soon: manage your own 3D experiences
            </h2>
            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
              Right now we provide the platform as part of our service: we capture your space and publish it for you. As
              the platform matures, businesses will be able to subscribe and manage their own 3D experiences, adding new
              spaces and updates over time.
            </p>
            <p className="mt-3">
              <Placeholder>[[TBC: expected timing, only if you want to state one]]</Placeholder>
            </p>
          </div>

          <div
            id="early-access"
            className="lg:col-span-7 rounded-2xl border border-[#E4E4E7] bg-[#FAFAFA] p-7 sm:p-9 shadow-sm scroll-mt-20"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">Early access</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] font-display mt-1">Be among the first</h2>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
              Leave your details and we'll tell you as soon as subscriptions open. Early access members{' '}
              <Placeholder>
                [[TBC: benefit, e.g. "get a guided setup" or "get first access to new features" — or remove this sentence]]
              </Placeholder>
              .
            </p>

            {status === 'success' ? (
              <div role="status" className="mt-8 p-4 rounded-md bg-emerald-50 border border-emerald-300 text-sm text-emerald-800">
                Thank you. You're on the list. We'll be in touch when subscriptions open.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <p className="text-xs text-zinc-500">Fields marked with an asterisk (*) are required.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="ea-name" className="block text-xs font-mono text-zinc-700 mb-1">
                      Name *
                    </label>
                    <input id="ea-name" type="text" required autoComplete="name" value={form.name} onChange={updateField('name')} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="ea-email" className="block text-xs font-mono text-zinc-700 mb-1">
                      Email *
                    </label>
                    <input id="ea-email" type="email" required autoComplete="email" value={form.email} onChange={updateField('email')} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="ea-organisation" className="block text-xs font-mono text-zinc-700 mb-1">
                    Organisation
                  </label>
                  <input
                    id="ea-organisation"
                    type="text"
                    autoComplete="organization"
                    value={form.organisation}
                    onChange={updateField('organisation')}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="ea-space-type" className="block text-xs font-mono text-zinc-700 mb-1">
                      Type of space *
                    </label>
                    <select id="ea-space-type" required value={form.spaceType} onChange={updateField('spaceType')} className={inputClass}>
                      <option value="" disabled>
                        Select one
                      </option>
                      {SPACE_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ea-space-count" className="block text-xs font-mono text-zinc-700 mb-1">
                      How many spaces?
                    </label>
                    <select id="ea-space-count" value={form.spaceCount} onChange={updateField('spaceCount')} className={inputClass}>
                      <option value="">Select one</option>
                      {SPACE_COUNTS.map((count) => (
                        <option key={count} value={count}>
                          {count}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="ea-use-case" className="block text-xs font-mono text-zinc-700 mb-1">
                    What would you use it for?
                  </label>
                  <textarea
                    id="ea-use-case"
                    rows={4}
                    value={form.useCase}
                    onChange={updateField('useCase')}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    id="ea-consent"
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#E4E4E7] accent-[#E11D48]"
                  />
                  <label htmlFor="ea-consent" className="text-xs text-zinc-600 leading-relaxed">
                    I agree to be contacted about the RCAAS platform. See our{' '}
                    <a
                      href="/privacy/"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/privacy/');
                      }}
                      className="text-[#E11D48] hover:text-[#BE123C] underline underline-offset-2"
                    >
                      Privacy Policy
                    </a>
                    . *
                  </label>
                </div>

                {status === 'error' && (
                  <div role="alert" className="p-4 rounded-md bg-rose-50 border border-rose-300 text-sm text-rose-800">
                    Something went wrong. Please try again or email us at{' '}
                    <a href={`mailto:${SITE_METADATA.email}`} className="underline underline-offset-2">
                      {SITE_METADATA.email}
                    </a>
                    .
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#E11D48] text-white font-medium text-sm hover:bg-[#BE123C] transition-colors shadow-sm active:scale-[0.98] disabled:opacity-60"
                >
                  <span>Join early access</span>
                  <span className="ml-2 font-mono" aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* 8. FAQ (#faq) */}
        <section id="faq" className="mb-20 sm:mb-28 scroll-mt-20">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-semibold">Answers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] font-display mt-1">
              Questions about the platform
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {PLATFORM_FAQS.map((faq, idx) => (
              <details
                key={faq.question}
                open={idx === 0}
                className="group rounded-xl border border-[#E4E4E7] bg-white overflow-hidden shadow-xs"
              >
                <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer p-5 flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors">
                  <span className="text-sm sm:text-base font-semibold text-zinc-900 font-display">{faq.question}</span>
                  <span className="w-6 h-6 rounded bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center text-zinc-500 shrink-0 transition-transform group-open:rotate-180 group-open:text-[#E11D48]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-5 pt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-[#E4E4E7]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 9. CALL TO ACTION BAND */}
        <section className="rounded-2xl border border-[#E4E4E7] bg-[#FAFAFA] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09090B] font-display mb-4 text-balance">
              Want your space on the platform now?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mb-8 leading-relaxed">
              We can capture and publish your space today, as part of a project. Tell us about your place.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/contact/?type=platform' as RoutePath)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#E11D48] text-white font-medium text-sm hover:bg-[#BE123C] transition-colors shadow-sm active:scale-[0.98]"
              >
                <span>Plan your experience</span>
                <span className="ml-2 font-mono" aria-hidden="true">→</span>
              </button>

              <a
                href={SITE_METADATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#E4E4E7] bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-xs active:scale-[0.98]"
              >
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
