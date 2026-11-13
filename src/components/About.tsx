export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute top-1/3 left-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-700/12 blur-[140px]" />

      <div className="mx-auto max-w-[1600px] px-6">
        {/* Top Statement */}
        <div className="max-w-5xl">
          <p className="font-display text-2xl leading-[1.35] font-medium tracking-tight text-white sm:text-4xl lg:text-[42px]">
            — We architect next-generation digital products, high-throughput AI pipelines,
            and bespoke luxury interfaces for industry leaders redefining the modern web.
          </p>
        </div>

        {/* Two-Column Overview */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Left Description & Stats */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                With unwavering dedication, we&apos;ve completed over a hundred
                remarkable projects across digital platforms, enterprise AI
                ecosystems, and luxury architectural spaces—blending timeless
                precision with intelligent engineering.
              </p>
              <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                Every solution is crafted around measurable performance, refined
                human experience, and future-proof scalability—empowering modern
                enterprises and forward-thinking brands to operate effortlessly.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <div className="text-gradient-luxury font-display text-2xl font-bold sm:text-3xl">
                  120+
                </div>
                <div className="mt-1 text-xs tracking-wide text-gray-400 uppercase">
                  Projects Shipped
                </div>
              </div>
              <div>
                <div className="text-gradient-violet font-display text-2xl font-bold sm:text-3xl">
                  98%
                </div>
                <div className="mt-1 text-xs tracking-wide text-gray-400 uppercase">
                  Client Retention
                </div>
              </div>
              <div>
                <div className="text-gradient-luxury font-display text-2xl font-bold sm:text-3xl">
                  24/7
                </div>
                <div className="mt-1 text-xs tracking-wide text-gray-400 uppercase">
                  Global Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Office Interior Card */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#12091f] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.65)] transition-all duration-500 hover:border-violet-400/35">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/office-interior.jpg"
                  alt="High-end modern corporate office interior with luxury dark architectural lighting"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0612]/80 via-transparent to-violet-950/20" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div className="rounded-2xl border border-white/15 bg-[#0a0612]/70 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs font-medium tracking-wider text-violet-300 uppercase">
                      Studio &amp; Headquarters
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      Designed for Deep Focus &amp; Architectural Precision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

