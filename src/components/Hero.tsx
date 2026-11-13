import { ArrowDownRight, ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import MoltenMetal from './MoltenMetal';
import BlurText from './BlurText';

interface HeroProps {
  onOpenModal?: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28 pb-10"
    >
      {/* Hero Background: MoltenMetal WebGL Shader + Dark Luxury Vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0a0612]">
        {/* Base purple radial aura behind shader */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_40%,rgba(44,21,140,0.38),rgba(18,9,31,0.8)_60%,#0a0612_100%)]" />

        {/* MoltenMetal Interactive Canvas */}
        <div className="absolute inset-0 h-full w-full">
          <MoltenMetal
            colors={['#2c158c', '#a99fff']}
            coreColor="#94b8da"
            speed={0.2}
            scale={6.3}
            detail={4.3}
            glow={1.3}
            thickness={1.21}
            haze={0.36}
            mouseInteraction
            flareOnClick
            swirl={0.7}
            turbulence={0.27}
            rotation={-71}
            offsetX={0.07}
            opacity={0.63}
            mouseStrength={0.58}
            lightMode
          />
        </div>

        {/* Soft edge readability & seamless bottom transition */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_35%,rgba(10,6,18,0.68)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0a0612] via-[#0a0612]/60 to-transparent" />
      </div>

      {/* Main Hero Copy */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-200 uppercase backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]">
          <Sparkles className="h-3.5 w-3.5 text-violet-300" />
          Next-Gen Enterprise Intelligence &amp; Craft
        </div>

        <BlurText
          as="h1"
          text="Empower Your Business with Next-Generation AI Innovation"
          effect="blur"
          animateBy="letters"
          direction="top"
          staggerFrom="start"
          trigger="load"
          delay={22}
          stepDuration={0.3}
          blur={7}
          distance={65}
          focusOnHover
          color="#ffffff"
          fromColor="#a99fff"
          className="max-w-5xl justify-center font-display text-4xl font-semibold tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)] sm:text-6xl lg:text-[76px] lg:leading-[1.05]"
        />

        <BlurText
          text="Harness powerful artificial intelligence to streamline workflows, unlock actionable insights, and drive sustainable growth with a secure, enterprise-ready platform built for the future."
          effect="blur"
          animateBy="words"
          direction="top"
          staggerFrom="start"
          trigger="load"
          delay={45}
          stepDuration={0.3}
          blur={7}
          distance={40}
          focusOnHover
          color="#e5e7eb"
          fromColor="#a99fff"
          className="mt-7 max-w-2xl justify-center text-base leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] sm:text-lg"
        />

        {/* Hero Interactive Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenModal}
            className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0a0612] shadow-[0_0_36px_rgba(168,85,247,0.45)] transition-all duration-300 hover:bg-violet-100 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]"
          >
            <span>Schedule Discovery</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-white/[0.08]"
          >
            <span>Explore Capabilities</span>
            <ArrowDownRight className="h-4 w-4 text-violet-300" />
          </a>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 flex items-center gap-2 text-xs font-medium tracking-wide text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          <span>Trusted by 500+ enterprises worldwide · 99.98% platform reliability</span>
        </div>
      </div>

      {/* Bottom Hero Bar */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-8">
        <div className="grid grid-cols-1 items-center gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
          {/* Bottom Left */}
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
            <span className="text-sm font-medium tracking-wide text-gray-300">
              Driven By Smart Innovation &amp; Deep Craft
            </span>
          </div>

          {/* Bottom Center: Scroll Down Indicator */}
          <div className="flex justify-center">
            <a
              href="#about"
              aria-label="Scroll down to company overview"
              className="group flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-white"
            >
              <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 bg-white/[0.03] p-1.5 backdrop-blur-sm transition-colors group-hover:border-violet-400/60">
                <span className="h-2 w-1 animate-bounce rounded-full bg-violet-300" />
              </div>
              <ArrowDown className="h-3.5 w-3.5 text-violet-300/80 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Bottom Right: Discover More */}
          <div className="flex justify-center sm:justify-end">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] py-2 pr-2.5 pl-5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
            >
              <span>Explore Services</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a0612] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                <ArrowDownRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
