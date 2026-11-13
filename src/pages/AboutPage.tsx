import { Sparkles, Shield, Cpu, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenModal: () => void;
  onNavigateContact: () => void;
  onNavigateHome: () => void;
}

const PILLARS = [
  {
    step: '01',
    title: 'Architectural Precision',
    description:
      'We treat code as digital architecture. Every component, WebGL shader, and cloud transaction is benchmarked for sub-millisecond execution, flawless accessibility, and fluid responsiveness.',
    icon: Compass,
    highlights: ['Micro-interaction choreography', 'WebGL & GPU-accelerated rendering', 'Zero-layout-shift architecture'],
  },
  {
    step: '02',
    title: 'Autonomous Intelligence',
    description:
      'Beyond simple chatbots, we engineer deterministic multi-agent workflows, fine-tuned retrieval engines, and real-time inference pipelines that eliminate operational friction at scale.',
    icon: Cpu,
    highlights: ['Enterprise LLM orchestration', 'Autonomous data automation', 'Deterministic security boundaries'],
  },
  {
    step: '03',
    title: 'Dark Luxury Aesthetic',
    description:
      'Enterprise software does not have to feel sterile. We fuse deep obsidian palettes, subtle specular rims, and commanding typography to instill immediate prestige and investor confidence.',
    icon: Shield,
    highlights: ['Bespoke design systems', 'Luxury dark visual identity', 'High-conversion editorial typography'],
  },
];

const MILESTONES = [
  {
    year: '2022',
    badge: 'Genesis',
    title: 'The Elite Architecture Lab',
    desc: 'Founded as a boutique engineering studio specializing in high-throughput reactive interfaces and custom design tokens.',
  },
  {
    year: '2023',
    badge: 'Scale',
    title: 'Global Enterprise Rollouts',
    desc: 'Expanded into Silicon Valley and European financial hubs, completing 45+ flagship product launches and brand redesigns.',
  },
  {
    year: '2024',
    badge: 'Intelligence',
    title: 'The Autonomous Agent Era',
    desc: 'Pioneered custom multi-agent architectures and enterprise automation pipelines for Tier-1 technology companies.',
  },
  {
    year: '2025–2026',
    badge: 'Frontier',
    title: 'Next-Gen Global Footprint',
    desc: 'Deploying real-time WebGL experiences, generative UI systems, and hybrid creative hubs across Zurich, London, and San Francisco.',
  },
];

const STATS = [
  { value: '120+', label: 'Flagship Projects Shipped', sub: 'Across 18 Global Verticals' },
  { value: '99.98%', label: 'Infrastructure Reliability', sub: 'Zero-Downtime Architecture' },
  { value: '500+', label: 'Enterprise Partners', sub: 'Trusting Our Digital Craft' },
  { value: '4.9 / 5', label: 'Average Client Rating', sub: 'Based on Verified Engagements' },
];

export function AboutPage({ onOpenModal, onNavigateContact, onNavigateHome }: AboutPageProps) {
  return (
    <div className="relative min-h-screen pt-28 pb-20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-12 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet-700/15 blur-[160px]" />
      <div className="pointer-events-none absolute top-[900px] right-0 h-[480px] w-[500px] rounded-full bg-fuchsia-700/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">
        {/* Breadcrumb & Top Eyebrow */}
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-gray-400">
          <button
            type="button"
            onClick={onNavigateHome}
            className="cursor-pointer text-gray-400 transition-colors hover:text-white"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-violet-300">About Us</span>
        </div>

        {/* Hero Section */}
        <div className="mt-8 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold tracking-[0.2em] text-violet-300 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            The CODEXX PLUS Studio
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Architecting the intersection of high craft &amp; intelligent compute.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            CODEXX PLUS was founded on a singular conviction: that modern enterprise software should
            possess the visual allure of a luxury timepiece and the bulletproof resilience of an aerospace
            operating system. We build digital assets that stand as definitive category leaders.
          </p>
        </div>

        {/* Feature Image & Studio Atmosphere */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#12091f]/80 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <img
              src="/images/office-interior.jpg"
              alt="CODEXX PLUS Executive Studio"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0612]/90 via-[#0a0612]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold tracking-widest text-violet-300 uppercase">
                  Global Design &amp; Technology Lab
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                  Built for Focused Innovation &amp; Uncompromising Polish
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-medium text-gray-200 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  24/7 Global Team Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
              Engineered for Category Leaders
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Our Core Architectural Pillars
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.step}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#140a25]/90 to-[#0e071a]/90 p-8 shadow-[0_16px_48px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(139,92,246,0.22)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold tracking-wider text-violet-400">
                        {pillar.step}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-500/10 text-violet-300">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <ul className="space-y-2.5">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones / Timeline Section */}
        <div className="mt-28 rounded-3xl border border-white/10 bg-gradient-to-b from-[#10071f]/80 via-[#0d0619]/90 to-[#08040f] p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
              Chronicles of Growth
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From Niche Lab to Global Enterprise Partner
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
              Over the last four years, we evolved from an experimental shaders and interface lab into a
              trusted engineering arm for funded scale-ups and global market leaders.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((item) => (
              <div
                key={item.year}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-white">{item.year}</span>
                    <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-300 uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-y border-white/10 py-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-violet-300">{stat.label}</span>
              <span className="mt-0.5 text-xs text-gray-400">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-24 flex flex-col items-center justify-between gap-8 rounded-3xl border border-violet-400/25 bg-gradient-to-r from-violet-900/30 via-[#180d2c] to-fuchsia-900/20 p-8 sm:p-12 lg:flex-row lg:p-14">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to engineer your next strategic advantage?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
              Let&apos;s evaluate your current architecture and outline a bespoke roadmap for your brand
              and technology stack.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0a0612] shadow-[0_0_24px_rgba(168,85,247,0.35)] transition-all hover:bg-violet-100 hover:shadow-[0_0_36px_rgba(168,85,247,0.55)]"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onNavigateContact}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-violet-300 hover:bg-white/10"
            >
              Contact Our Studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

