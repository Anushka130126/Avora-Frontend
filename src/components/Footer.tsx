'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from './Logo';

function useScrollTo() {
  const pathname = usePathname();
  const router = useRouter();

  return (sectionId: string) => {
    const scrollNow = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (pathname === '/home') {
      // Already on home — always force scroll (fixes repeated-click issue)
      scrollNow();
    } else {
      router.push(`/home#${sectionId}`);
      // After navigation, wait for DOM then scroll
      setTimeout(scrollNow, 400);
    }
  };
}

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    // Removed border-t
    <footer
      className="relative z-20"
      style={{ backgroundColor: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/home" className="inline-block mb-5 hover:opacity-80 transition-opacity">
              <Logo size="md" className="h-9 w-auto text-[var(--foreground)]" />
            </Link>
            <p className="text-base text-[var(--foreground-muted)] leading-relaxed max-w-xs">
              Data generation, annotation, quality auditing, and AI implementation —
              one continuous pipeline.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] mb-5">
              Services
            </h4>
            <ul className="space-y-4">
              {['Data Generation', 'Data Annotation', 'Data Auditing', 'AI Implementation'].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-[15px] text-[var(--foreground)] hover:text-[#B8860B] transition-colors duration-200 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] mb-5">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-[15px] text-[var(--foreground)] hover:text-[#B8860B] transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="text-[15px] text-[var(--foreground)] hover:text-[#B8860B] transition-colors duration-200 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] mb-5">
              Legal
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[15px] text-[var(--foreground)] hover:text-[#B8860B] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar - Removed border-t */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[var(--foreground-muted)]">
            © {new Date().getFullYear()} Avora Ventures Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-[var(--foreground-muted)] tracking-[0.18em] uppercase bg-white/60 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
