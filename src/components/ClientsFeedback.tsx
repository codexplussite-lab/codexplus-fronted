import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export function ClientsFeedback() {
  return (
    <section id="clients" className="relative py-24 lg:py-32">
      {/* Subtle dark-luxury violet ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/12 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">
        {/* Section Title */}
        <div className="mb-14 text-center lg:mb-16">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[54px]">
            Client FeedBack
          </h2>
        </div>

        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#170c29] via-[#110820] to-[#0b0614] text-center shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-violet-400/50 hover:shadow-[0_24px_60px_rgba(124,58,237,0.28)]"
            >
              {/* Top of Card: Client Name & Designation */}
              <div className="w-full px-6 pt-6 pb-4">
                <h3 className="font-display text-lg font-bold tracking-tight text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-400">
                  {item.role}
                </p>
              </div>

              {/* Center: Full-Bleed Frame-Edge Portrait Photo */}
              <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-[#0d0718]">
                <img
                  src={item.avatar}
                  alt={`${item.name} — ${item.role}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#140a24] to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0d0618] to-transparent" />
              </div>

              {/* Bottom of Card: 5-Star Rating & Centered Quote */}
              <div className="flex flex-col items-center px-6 pt-4 pb-6">
                <div
                  className="flex items-center justify-center gap-1"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]"
                    />
                  ))}
                </div>

                <p className="mt-3.5 text-center text-sm leading-relaxed text-gray-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
