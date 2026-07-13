'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import InsightsTeaser from '@/components/InsightsTeaser';
import Process from '@/components/Process';
import Blog from '@/components/Blog';
import Ventures from '@/components/Ventures';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

function HashScrollHandler() {
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return null;
}

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Hero />
      <Services />
      <InsightsTeaser />
      <Process />
      <Blog />
      <Ventures />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
