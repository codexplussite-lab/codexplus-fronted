import { useState } from 'react';
import { ElasticReel } from './ElasticReel';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 'ashley-cole',
    name: 'Ashley Cole',
    role: 'Educator & Researcher',
    company: 'Stanford',
    rating: 5,
    quote: '“Super easy to use and actually works! I’ve already recommended it to a few friends.”',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'VP of Product',
    company: 'FinScale',
    rating: 5,
    quote: '“Their AI automation pipeline cut our onboarding turnaround by more than half in weeks.”',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Studio K',
    rating: 5,
    quote: '“Every pixel feels intentional. Our conversion rate jumped noticeably right after launch.”',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Founder & CEO',
    company: 'Lumina Labs',
    rating: 5,
    quote: '“Rare blend of engineering rigor and luxury visual craft. Truly a dependable partner.”',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'nadia-al-mansoor',
    name: 'Nadia Al-Mansoor',
    role: 'Head of Growth',
    company: 'VelaPay',
    rating: 5,
    quote: '“Fast delivery, zero fluff, and an interface our enterprise clients immediately loved.”',
    image:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'julian-mercer',
    name: 'Julian Mercer',
    role: 'Chief Technology Officer',
    company: 'Northstar Cloud',
    rating: 5,
    quote: '“Clean architecture and smooth interactions across desktop and mobile out of the box.”',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sophia-lindqvist',
    name: 'Sophia Lindqvist',
    role: 'Director of Operations',
    company: 'Nordic Systems',
    rating: 5,
    quote: '“From kickoff to deployment, the precision and communication exceeded every expectation.”',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'omar-farooq',
    name: 'Omar Farooq',
    role: 'Managing Partner',
    company: 'Apex Ventures',
    rating: 5,
    quote: '“A standout digital presence that instantly elevated how enterprise clients perceive us.”',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
  },
];

export function ClientFeedbackSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="clients"
      aria-label="Client Feedback"
      className="relative w-full overflow-hidden bg-[#0E0B12] px-6 py-20 md:px-12 lg:py-24"
    >
      {/* Subtle ambient violet glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[680px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Editorial Section Header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-violet-300 uppercase">
              Client Stories
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white/95 md:text-5xl">
              Client Feedback
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="text-[#FACC15]" aria-hidden="true">
              ★★★★★
            </span>
            <span>
              <strong className="font-semibold text-white">4.9 / 5.0</strong> average rating across
              500+ partners
            </span>
          </div>
        </div>

        {/* Elastic Reel Showcase */}
        <ElasticReel
          items={testimonials}
          getKey={(item) => item.id}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
          renderItem={(item, { isActive, index }) => (
            <article
              className="relative h-full w-full overflow-hidden rounded-2xl"
              style={{
                background: 'radial-gradient(circle at 50% 35%, #1A1E1C 0%, #121514 100%)',
              }}
            >
              {/* Subtle top specular hairline on active card */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Center Portrait */}
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className={`h-full w-full object-cover object-top transition-all duration-500 ease-out ${
                  isActive
                    ? 'scale-[1.03] brightness-100 saturate-100'
                    : 'scale-100 brightness-[0.62] saturate-[0.75]'
                }`}
              />

              {/* Top & Bottom Vignettes */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#09060e]/85 via-[#09060e]/35 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09060e]/95 via-[#09060e]/45 to-transparent" />

              {/* Collapsed Slice Index */}
              <span
                className={`pointer-events-none absolute inset-x-0 bottom-5 text-center font-mono text-[11px] font-medium tracking-widest text-white/55 transition-opacity duration-200 ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Top Overlay (Centered) */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 z-10 px-5 pt-6 text-center transition-all duration-300 ${
                  isActive ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
              >
                <h3 className="text-base font-semibold tracking-tight text-white md:text-xl">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-300/85 md:text-sm">
                  {item.role} <span className="text-violet-300/80">&middot; {item.company}</span>
                </p>
              </div>

              {/* Bottom Overlay (Centered) */}
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 px-5 pb-7 text-center transition-all duration-300 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                <div
                  className="mb-2.5 text-sm tracking-[0.22em] text-[#FACC15] drop-shadow-[0_2px_10px_rgba(250,204,21,0.35)]"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {'★'.repeat(item.rating)}
                </div>
                <p className="mx-auto max-w-[85%] text-xs leading-relaxed text-white/95 md:text-[15px]">
                  {item.quote}
                </p>
              </div>
            </article>
          )}
        />

        {/* Minimal Selector Pills */}
        <div className="mt-6 flex items-center justify-center gap-2" aria-label="Testimonial selector">
          {testimonials.map((item, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial from ${item.name}`}
                aria-current={active ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active
                    ? 'w-7 bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.65)]'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
