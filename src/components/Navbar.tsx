'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id.startsWith('/')) {
      window.location.href = id;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
            : 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-transparent dark:border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn('flex justify-between items-center transition-all duration-300', isScrolled ? 'h-16' : 'h-20')}>
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold font-heading text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {siteConfig.shortName}
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href.replace('/#', '').replace('#', ''))}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white relative group transition-colors px-1 py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-900 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-primary px-6 py-2.5 rounded-lg text-sm"
              >
                Start a Conversation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Open navigation menu"
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div 
        className={cn(
          'fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={cn(
            'absolute top-0 right-0 w-[280px] h-full bg-white dark:bg-slate-950 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xl font-heading font-bold text-slate-900 dark:text-white">{siteConfig.shortName}</span>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                aria-label="Close navigation menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-6 gap-6">
            {siteConfig.nav.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href.replace('/#', '').replace('#', ''))}
                className="text-lg font-medium text-slate-600 dark:text-slate-300 text-left hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn btn-primary w-full mt-4 py-3 rounded-lg"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
