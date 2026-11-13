import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesProps {
  onOpenModal: () => void;
}

export function Services({ onOpenModal }: ServicesProps) {
  const [activeId, setActiveId] = useState<string>('video-editing');

  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Ambient right glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] translate-x-1/3 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[150px]" />

      <div className="mx-auto max-w-[1600px] px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
              Our Capabilities
            </span>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              What We Offer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              End-to-end digital solutions designed to elevate your brand, scale
              your business, and drive real results.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="group inline-flex cursor-pointer items-center gap-2.5 self-start rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/20 hover:shadow-[0_0_28px_rgba(139,92,246,0.3)] md:self-auto"
          >
            <span>Explore More</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bento Grid: 1 large vertical card on the left + 4 cards in 2x2 on the right */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {SERVICES.map((service, idx) => {
            const isActive = activeId === service.id;
            const isLarge = Boolean(service.isLarge);

            return (
              <article
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                className={`specular-card group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${
                  isLarge ? 'min-h-[340px] lg:row-span-2 lg:min-h-[460px]' : 'min-h-[220px]'
                } ${
                  isActive
                    ? 'border-violet-400/80 bg-gradient-to-br from-[#1f1037] via-[#140a24] to-[#0d0618] shadow-[0_12px_45px_rgba(139,92,246,0.3)]'
                    : 'border-white/10 bg-[#10081c]/90 hover:border-violet-400/40 hover:bg-[#150b26]'
                }`}
              >
                {/* Ambient glow inside active card */}
                <div
                  className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full blur-[70px] transition-opacity duration-500 ${
                    isActive
                      ? 'bg-violet-500/30 opacity-100'
                      : 'bg-violet-600/15 opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Top row: Number/Tag + Circular Arrow */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold tracking-wider text-violet-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`rounded-full border px-3.5 py-1 text-xs font-medium tracking-wide transition-colors ${
                        isActive
                          ? 'border-violet-400/40 bg-violet-500/20 text-violet-200 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                          : 'border-white/10 bg-white/[0.04] text-gray-400'
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-violet-300 bg-white text-[#0a0612] shadow-[0_0_20px_rgba(196,181,253,0.45)]'
                        : 'border-white/15 bg-white/[0.04] text-white group-hover:border-violet-400/50 group-hover:bg-violet-500/20'
                    }`}
                  >
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                {/* Bottom content */}
                <div className={`relative z-10 ${isLarge ? 'mt-auto pt-16' : 'mt-10'}`}>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-[28px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {service.description}
                  </p>

                  {isLarge && (
                    <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                      {['AI Agents', 'Next.js & React', 'Cloud APIs', 'Automation'].map(
                        (pill) => (
                          <span
                            key={pill}
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
                          >
                            {pill}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

