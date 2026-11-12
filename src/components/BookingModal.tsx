import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('AI Innovation & Development');

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-violet-400/30 bg-[#12091f] p-8 shadow-[0_24px_90px_rgba(124,58,237,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/20 text-violet-300">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3
              id="booking-modal-title"
              className="mt-5 font-display text-2xl font-semibold text-white"
            >
              Discovery Call Requested
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Thanks, <span className="text-white">{name || 'there'}</span>. Our
              team will send a calendar invite to{' '}
              <span className="text-violet-300">{email || 'your inbox'}</span>{' '}
              within 24 hours.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-7 cursor-pointer rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0a0612] transition-colors hover:bg-violet-100"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200">
              <Calendar className="h-3.5 w-3.5" />
              15-Minute Strategy Call
            </div>
            <h3
              id="booking-modal-title"
              className="mt-4 font-display text-2xl font-semibold text-white"
            >
              Start Building with CODEXX PLUS
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Share your goals and we&apos;ll pair you with our solution
              architects.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ashley Cole"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-violet-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-300">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-violet-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-300">
                  Area of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[#190e2b] px-4 py-3 text-sm text-white focus:border-violet-400 focus:outline-none"
                >
                  <option>AI Innovation &amp; Development</option>
                  <option>Graphics Design &amp; Branding</option>
                  <option>Video Editing &amp; Motion</option>
                  <option>Social Media Marketing</option>
                  <option>SEO / GEO Growth</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-[#0a0612] shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all hover:bg-violet-100"
              >
                <span>Confirm 15-Min Call</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

