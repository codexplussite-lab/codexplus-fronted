import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export type AppPage = 'home' | 'about' | 'contact';

interface NavbarProps {
  onOpenModal: () => void;
  currentPage: AppPage;
  onNavigate: (page: AppPage, targetHash?: string) => void;
}

interface NavItem {
  label: string;
  page: AppPage;
  hash?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: 'home', hash: '#home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'home', hash: '#services' },
  { label: 'Clients', page: 'home', hash: '#clients' },
  { label: 'Team', page: 'home', hash: '#team' },
  { label: 'Contact', page: 'contact' },
];

export function CodexxLogo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex cursor-pointer items-center gap-3 focus:outline-none"
      aria-label="CODEXX PLUS Home"
    >
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-600/30 via-[#1a0d30] to-fuchsia-600/20 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-105">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M12 2L20 6.5V17.5L12 22L4 17.5V6.5L12 2Z"
            stroke="url(#codexx-grad)"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12H15.5M12 8.5V15.5"
            stroke="#FFFFFF"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="codexx-grad"
              x1="4"
              y1="2"
              x2="20"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E9D5FF" />
              <stop offset="0.5" stopColor="#A855F7" />
              <stop offset="1" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="font-display text-sm font-bold tracking-[0.18em] text-white sm:text-base">
        CODEXX <span className="text-violet-300">PLUS</span>
      </span>
    </button>
  );
}

export function Navbar({ onOpenModal, currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (item: NavItem) => {
    setMobileOpen(false);
    onNavigate(item.page, item.hash);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0a0612]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6">
        <CodexxLogo onClick={() => onNavigate('home', '#home')} />

        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 backdrop-blur-md lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.page === currentPage &&
              (currentPage !== 'home' || !item.hash || item.hash === '#home');

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleLinkClick(item)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'border border-violet-400/40 bg-violet-500/20 text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                    : 'text-gray-300 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenModal}
            className="hidden cursor-pointer rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0a0612] shadow-[0_0_24px_rgba(168,85,247,0.35)] transition-all duration-200 hover:bg-violet-100 hover:shadow-[0_0_32px_rgba(168,85,247,0.6)] sm:inline-flex"
          >
            Get Started
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-b border-white/10 bg-[#0d0718]/95 px-6 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = item.page === currentPage;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleLinkClick(item)}
                  className={`cursor-pointer rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                    isActive
                      ? 'border border-violet-400/40 bg-violet-500/20 text-white'
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenModal();
              }}
              className="mt-2 w-full cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0612]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
