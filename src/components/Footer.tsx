import { ArrowUpRight, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Case Study', href: '#services' },
  { label: 'Blogs', href: '#clients' },
];

const FOOTER_SERVICES = [
  { label: 'UI/UX Design', href: '#services' },
  { label: 'Logo & Branding', href: '#services' },
  { label: 'No-Code Dev', href: '#services' },
  { label: 'SaaS Design', href: '#services' },
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.21 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.17 2.1 15.94 2 14.64 2C11.93 2 10 3.66 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
];

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08040f] pt-24 pb-8">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[380px] w-[820px] -translate-x-1/2 rounded-full bg-violet-700/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">
        {/* Top Collaboration Banner */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium tracking-wider text-violet-300 uppercase sm:text-base">
              Let&apos;s collaborate! Say hi
            </p>
            <a
              href="mailto:Info@codexplus.site"
              className="mt-3 inline-block font-display text-3xl font-semibold tracking-tight text-white transition-colors hover:text-violet-300 sm:text-5xl lg:text-6xl"
            >
              Info@codexplus.site
            </a>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="group inline-flex cursor-pointer items-center gap-3 self-start rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0a0612] shadow-[0_0_32px_rgba(168,85,247,0.35)] transition-all duration-300 hover:bg-violet-100 hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] lg:self-auto"
          >
            <span>Book a 15-min call</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand Description */}
          <div className="lg:col-span-4">
            <div className="font-display text-2xl font-bold tracking-tight text-white">
              visualjoy
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              We explore every idea with curiosity and care, crafting purposeful
              AI-powered digital products, distinctive brands, and immersive web
              experiences built to endure.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-violet-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                <div className="space-y-1">
                  <a
                    href="tel:+8801712345678"
                    className="block transition-colors hover:text-white"
                  >
                    +880 1712-345678
                  </a>
                  <a
                    href="tel:+8801819876543"
                    className="block transition-colors hover:text-white"
                  >
                    +880 1819-876543
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                <div className="space-y-2.5 text-gray-400">
                  <p>
                    <span className="font-medium text-gray-200">
                      Banani Studio:
                    </span>{' '}
                    House 42, Road 11, Block F, Banani, Dhaka 1213
                  </p>
                  <p>
                    <span className="font-medium text-gray-200">
                      Gulshan Hub:
                    </span>{' '}
                    Level 8, Concord Tower, Gulshan 2, Dhaka 1212
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-400 sm:flex-row">
          <p>All rights reserved©visualjoy</p>
          <div className="flex items-center gap-6">
            <a
              href="#payment-policy"
              onClick={(e) => {
                e.preventDefault();
                onOpenModal();
              }}
              className="transition-colors hover:text-white"
            >
              Payment Policy
            </a>
            <a
              href="#privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onOpenModal();
              }}
              className="transition-colors hover:text-white"
            >
              T&amp;C and Privacy Policies
            </a>
          </div>
        </div>

        {/* Massive Glowing Outline Wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-10 select-none overflow-hidden text-center"
        >
          <span className="codexplus-outline-text block font-display text-[15vw] leading-[0.85] font-extrabold tracking-[0.04em] uppercase xl:text-[215px]">
            CODEXPLUS
          </span>
        </div>
      </div>
    </footer>
  );
}

