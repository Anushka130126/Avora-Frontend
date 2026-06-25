'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Ventures', id: 'ventures' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'h-16 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
          : 'h-20 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex-shrink-0 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/10 rounded-lg"
            aria-label="Avora Ventures Home"
          >
            <Image
              src="/logo.png"
              alt="Avora Ventures Logo"
              width={140}
              height={40}
              className="w-auto h-8 md:h-10 object-contain"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/10 rounded px-2 py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-600"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none rounded-lg"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-x-0 top-[calc(100%-1px)] bg-white shadow-lg border-b border-slate-200 transition-all duration-300 md:hidden overflow-hidden',
          mobileMenuOpen ? 'max-h-screen border-t border-slate-100' : 'max-h-0 border-transparent border-t-0'
        )}
      >
        <nav className="flex flex-col px-4 py-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-4 py-3 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-100 px-4">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white text-base font-medium px-6 py-4 rounded-lg shadow-md transition-colors"
            >
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
