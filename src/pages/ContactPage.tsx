import React, { useState } from 'react';
import { RoutePath } from '../types';
import { SITE_METADATA } from '../data/siteData';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [goal, setGoal] = useState('More bookings / visits (Hotels & Tourism)');
  const [location, setLocation] = useState('Kathmandu Valley');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 bg-[#FFFFFF] text-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <button onClick={() => onNavigate('/')} className="hover:text-zinc-900">Home</button>
          <span>/</span>
          <span className="text-zinc-700">Contact</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#E11D48] font-semibold">
            Start a Conversation
          </span>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] font-display">
            Tell us about your place and your goal
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Whether you manage a boutique heritage hotel, a university campus, or a cultural landmark, our engineering team will outline the ideal capture methodology and deliver a proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-7 sm:p-9 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-[#09090B] font-display mb-1">
                    Project Proposal Enquiry
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Fields marked with an asterisk (*) are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anish Thapa"
                      className="w-full rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2 text-xs text-[#09090B] focus:border-[#E11D48] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. anish@example.com"
                      className="w-full rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2 text-xs text-[#09090B] focus:border-[#E11D48] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-700 mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+977 98XXXXXXXX"
                      className="w-full rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2 text-xs text-[#09090B] focus:border-[#E11D48] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-700 mb-1">
                      Organization / Property Name
                    </label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="e.g. Nepal Heritage Trust"
                      className="w-full rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2 text-xs text-[#09090B] focus:border-[#E11D48] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-700 mb-1">
                    Primary Business Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2 text-xs text-[#09090B] focus:border-[#E11D48] focus:outline-none"
                  >
                    <option value="More bookings / visits (Hotels & Tourism)">More bookings / visits (Hotels &amp; Tourism)</option>
                    <option value="More student applications (Education)">More student applications (Education)</option>
                    <option value="High-intent investor / buyer tours (Real Estate)">High-intent investor / buyer tours (Real Estate)</option>
                    <option value="Cultural preservation & public access (Heritage)">Cultural preservation &amp; public access (Heritage)</option>
                    <option value="As-built CAD/BIM scan data (Engineering)">As-built CAD/BIM scan data (Engineering)</option>
                    <option value="Municipal digital twin / Smart City (Government)">Municipal digital twin / Smart City (Government)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-700 mb-1">
                    Site Location in Nepal
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Patan, Lalitpur or Pokhara Lakeside"
                    className="w-full rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2 text-xs text-[#09090B] focus:border-[#E11D48] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-700 mb-1">
                    Brief Description of the Place &amp; Timeline
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the rooms, courtyards, approximate square metres, and your target completion date..."
                    className="w-full rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-2 text-xs text-[#09090B] focus:border-[#E11D48] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="loro-btn-primary w-full py-3 text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Project Brief &rarr;
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#09090B] font-display">
                  Enquiry Received
                </h3>
                <p className="mt-2 text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, {name}. Our engineering and visual production leads in Kathmandu will review your requirements for {location} and reply within one business day.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="loro-btn-secondary px-5 py-2 text-xs"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 shadow-sm">
              <span className="text-xs font-mono text-[#E11D48] uppercase tracking-wider font-semibold">
                Instant Chat
              </span>
              <h3 className="mt-2 text-lg font-bold text-[#09090B] font-display">
                WhatsApp Direct Link
              </h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                Need rapid advice on camera clearances, flight permits, or scanning timelines? Message our team directly.
              </p>
              <div className="mt-4">
                <a
                  href={SITE_METADATA.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="loro-btn-secondary inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold"
                >
                  <span>Open WhatsApp</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 shadow-sm space-y-4">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Kathmandu Headquarters
              </span>
              
              <div>
                <div className="text-xs font-semibold text-[#09090B]">{SITE_METADATA.legalName}</div>
                <div className="text-xs text-zinc-600">{SITE_METADATA.location}</div>
                <div className="text-xs text-zinc-500 font-mono mt-0.5">Bagmati Province, Nepal</div>
              </div>

              <div className="border-t border-[#E4E4E7] pt-3">
                <div className="text-xs text-zinc-500 font-mono">Telephone</div>
                <div className="text-xs font-semibold text-zinc-900 font-mono mt-0.5">{SITE_METADATA.phone}</div>
              </div>

              <div className="border-t border-[#E4E4E7] pt-3">
                <div className="text-xs text-zinc-500 font-mono">Official Email</div>
                <div className="text-xs font-mono mt-0.5">
                  <a href={`mailto:${SITE_METADATA.email}`} className="text-[#E11D48] hover:underline font-semibold">
                    {SITE_METADATA.email}
                  </a>
                </div>
              </div>

              <div className="border-t border-[#E4E4E7] pt-3">
                <div className="text-xs text-zinc-500 font-mono">Field Availability</div>
                <div className="text-xs text-zinc-700 mt-0.5">
                  Monday – Friday: 9:00 AM – 6:00 PM NPT<br />
                  Emergency weekend scans upon pre-approval
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
