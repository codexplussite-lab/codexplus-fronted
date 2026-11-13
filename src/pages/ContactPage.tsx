import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onOpenModal: () => void;
  onNavigateHome: () => void;
}

const SERVICE_OPTIONS = [
  'Full-Stack Platform',
  'AI & Autonomous Systems',
  'Dark Luxury UI/UX',
  'Motion & 3D WebGL',
  'SEO / GEO Engine',
];

const BUDGET_TIERS = [
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Monthly Retainer',
];

const GLOBAL_HUBS = [
  {
    city: 'San Francisco',
    address: '500 Howard St, Financial District',
    hours: 'Mon – Fri: 09:00 – 18:00 PST',
    phone: '+1 (415) 890-3321',
  },
  {
    city: 'Zurich',
    address: 'Bahnhofstrasse 45, Tech Core',
    hours: 'Mon – Fri: 08:30 – 17:30 CET',
    phone: '+41 44 211 4890',
  },
  {
    city: 'London',
    address: '10 Berkeley Square, Mayfair',
    hours: 'Mon – Fri: 09:00 – 18:00 GMT',
    phone: '+44 20 7946 0912',
  },
  {
    city: 'Dubai',
    address: 'DIFC Gate Tower, Level 14',
    hours: 'Sun – Thu: 09:00 – 18:00 GST',
    phone: '+971 4 362 7700',
  },
];

const FAQS = [
  {
    q: 'What is the typical turnaround timeline for a flagship engagement?',
    a: 'Comprehensive web platforms and brand design sprints typically run 4 to 8 weeks. Enterprise AI integrations and multi-agent systems are delivered in iterative two-week deployment milestones with continuous staging visibility.',
  },
  {
    q: 'Do you execute mutual NDAs prior to discovery?',
    a: 'Yes. Every project discussion can be covered by our standard enterprise mutual non-disclosure agreement or your organization’s proprietary legal framework before any architecture is shared.',
  },
  {
    q: 'How does CODEXX PLUS collaborate with in-house engineering teams?',
    a: 'We operate either as an autonomous end-to-end delivery team or as an embedded specialized sprint squad alongside your CTO and product leads via direct Slack/GitHub workflows.',
  },
  {
    q: 'What are your ongoing support and maintenance commitments?',
    a: 'We provide dedicated SLA-backed infrastructure monitoring, security patching, and proactive performance tuning to guarantee 99.98%+ system availability around the clock.',
  },
];

export function ContactPage({ onOpenModal, onNavigateHome }: ContactPageProps) {
  const [selectedService, setSelectedService] = useState('Full-Stack Platform');
  const [selectedBudget, setSelectedBudget] = useState('$50k – $100k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-12 left-1/3 h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-violet-700/15 blur-[160px]" />
      <div className="pointer-events-none absolute top-[700px] right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-700/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-gray-400">
          <button
            type="button"
            onClick={onNavigateHome}
            className="cursor-pointer text-gray-400 transition-colors hover:text-white"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-violet-300">Contact</span>
        </div>

        {/* Hero Header */}
        <div className="mt-8 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold tracking-[0.2em] text-violet-300 uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            Studio Open &amp; Accepting Q1/Q2 Engagements
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Let&apos;s engineer your next digital breakthrough.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Whether you need a flagship web platform, scalable enterprise AI pipelines, or an
            unforgettable dark luxury brand identity, our principals are ready to scope your roadmap.
          </p>
        </div>

        {/* Main Grid: Form (Left) & Hubs (Right) */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#140a25]/90 via-[#10071e]/90 to-[#0b0515]/95 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:p-12">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/20 text-violet-300">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-300">
                    Thank you, <span className="font-semibold text-white">{name || 'partner'}</span>.
                    Our principal engineering team will review your brief and return an NDA-protected
                    scoping summary to <span className="text-violet-300">{email}</span> within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                      setMessage('');
                    }}
                    className="mt-8 cursor-pointer rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a0612] transition-colors hover:bg-violet-100"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Project Inquiry</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Fill out the brief below and a lead architect will connect directly.
                    </p>
                  </div>

                  {/* Name, Email & Company */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold tracking-wider text-gray-300 uppercase">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ashley Cole"
                        className="mt-2.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-violet-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-400/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold tracking-wider text-gray-300 uppercase">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ashley@company.com"
                        className="mt-2.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-violet-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold tracking-wider text-gray-300 uppercase">
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Stanford / Morheme Tech"
                      className="mt-2.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-violet-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-400/20"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <span className="block text-xs font-semibold tracking-wider text-gray-300 uppercase">
                      Required Scope / Discipline
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {SERVICE_OPTIONS.map((svc) => {
                        const active = selectedService === svc;
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => setSelectedService(svc)}
                            className={`cursor-pointer rounded-full px-4 py-2 text-xs font-medium transition-all ${
                              active
                                ? 'border border-violet-400 bg-violet-500/25 text-white shadow-[0_0_16px_rgba(168,85,247,0.35)]'
                                : 'border border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <span className="block text-xs font-semibold tracking-wider text-gray-300 uppercase">
                      Estimated Investment Tier
                    </span>
                    <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {BUDGET_TIERS.map((tier) => {
                        const active = selectedBudget === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setSelectedBudget(tier)}
                            className={`cursor-pointer rounded-xl py-2.5 px-3 text-center text-xs font-medium transition-all ${
                              active
                                ? 'border border-violet-400 bg-violet-500/25 text-white shadow-[0_0_14px_rgba(168,85,247,0.35)]'
                                : 'border border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message / Details */}
                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-semibold tracking-wider text-gray-300 uppercase">
                      Project Goals &amp; Timeline
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your timeline, current stack, and core objectives..."
                      className="mt-2.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-violet-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-400/20"
                    />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0612] shadow-[0_0_24px_rgba(168,85,247,0.35)] transition-all hover:bg-violet-100 hover:shadow-[0_0_36px_rgba(168,85,247,0.55)]"
                    >
                      <span>Transmit Project Brief</span>
                      <Send className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <ShieldCheck className="h-4 w-4 text-violet-400" />
                      <span>Protected by Enterprise NDA</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Global Hubs & Direct Channels */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
            {/* Direct Channels Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#140a25]/90 to-[#0e071a]/90 p-8 shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
              <span className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
                Fast-Track Channels
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">Direct Access</h3>

              <div className="mt-6 space-y-5 border-t border-white/10 pt-6">
                <div>
                  <span className="text-xs text-gray-400 uppercase">General Inquiries</span>
                  <a
                    href="mailto:Info@codexplus.site"
                    className="mt-1 flex items-center gap-2 font-display text-base font-semibold text-white transition-colors hover:text-violet-300 sm:text-lg"
                  >
                    <Mail className="h-4 w-4 text-violet-400" />
                    Info@codexplus.site
                  </a>
                </div>

                <div>
                  <span className="text-xs text-gray-400 uppercase">Enterprise Hotline</span>
                  <a
                    href="tel:+15558392041"
                    className="mt-1 flex items-center gap-2 font-display text-base font-semibold text-white transition-colors hover:text-violet-300 sm:text-lg"
                  >
                    <Phone className="h-4 w-4 text-violet-400" />
                    +1 (555) 839-2041
                  </a>
                </div>

                <div>
                  <span className="text-xs text-gray-400 uppercase">Immediate Discovery Call</span>
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={onOpenModal}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/15 px-4 py-2.5 text-xs font-semibold text-violet-200 transition-colors hover:bg-violet-500/25"
                    >
                      <Clock className="h-3.5 w-3.5" />
                      Book 30-Min Discovery Call
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Studio Hubs */}
            <div className="rounded-3xl border border-white/10 bg-[#12091f]/70 p-8 backdrop-blur-xl">
              <span className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
                Worldwide Physical Presence
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Global Studio Hubs</h3>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {GLOBAL_HUBS.map((hub) => (
                  <div
                    key={hub.city}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-violet-400/30"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <MapPin className="h-3.5 w-3.5 text-violet-400" />
                      {hub.city}
                    </div>
                    <p className="mt-1.5 text-xs text-gray-400">{hub.address}</p>
                    <p className="mt-1 text-[11px] text-gray-500">{hub.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Engagement &amp; Partnership FAQ
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-white sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-violet-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/5 px-6 pb-6 pt-2 text-sm leading-relaxed text-gray-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

