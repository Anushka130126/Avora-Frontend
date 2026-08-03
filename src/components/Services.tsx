'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: 'Data Annotation and Labelling',
    desc: 'Transform raw data into highly accurate, structured assets. We craft precise, context-aware datasets tailored to your complex ML requirements using a hybrid approach of cutting-edge AI and human expertise.',
    image: '/data annot.webp',
  },
  {
    title: 'Data Generation',
    desc: 'Unlock infinite possibilities with hyper-realistic, privacy-compliant synthetic data. We engineer diverse and robust artificial datasets that precisely mirror real-world complexities and rare edge cases.',
    image: '/data generation.webp',
  },
  {
    title: 'AI Implementation',
    desc: 'Accelerate digital transformation with bespoke AI architectures. From concept to deployment, we build and integrate scalable, secure, and self-monitoring solutions for immediate business impact.',
    image: '/ai.webp',
  },
  {
    title: 'Quality Testing and Analysis',
    desc: 'Fortify your AI with uncompromising quality assurance. Through automated stress tests and expert adversarial evaluations, we push your algorithms to their absolute limits to ensure precise performance.',
    image: '/dqa.png',
  },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.flip-card-container')) {
        setHoveredIndex(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo('.services-heading',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-heading', start: 'top 85%' },
      }
    );

    const flipCards = gsap.utils.toArray('.flip-card-container') as HTMLElement[];
    flipCards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 65%',
        end: 'bottom 35%',
        toggleClass: 'is-scrolled-flipped',
      });
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="pt-20 md:pt-28 relative overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)' }}>
      <div className="text-center px-4 max-w-screen-xl mx-auto mb-10">
        <h2 
          className="font-heading uppercase tracking-wide text-[#B8860B] leading-tight" 
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Our Services
        </h2>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        @media (hover: hover) {
          .flip-card-container:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
        }
        @media (hover: none) {
          .flip-card-container.is-scrolled-flipped .flip-card-inner {
            transform: rotateY(180deg);
          }
        }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}} />

      {/* Flashcards Section */}
      <div className="w-full pb-12 sm:pb-16 pt-6 sm:pt-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service, i) => (
            <div 
              key={i}
              className="flip-card-container relative w-full aspect-[4/3] sm:aspect-square max-w-[360px] sm:max-w-[400px] mx-auto cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => setHoveredIndex(hoveredIndex === i ? null : i)}
            >
              <div 
                className="flip-card-inner w-full h-full relative rounded-2xl shadow-xl"
                style={{
                  transform: hoveredIndex === i ? 'rotateY(180deg)' : undefined
                }}
              >
                {/* Front */}
                <div className="flip-card-front absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5 sm:p-6 md:p-8">
                    <h3 className="text-white font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute inset-0 w-full h-full bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="font-heading font-bold uppercase tracking-widest text-lg sm:text-xl md:text-2xl text-[#B8860B] mb-3 sm:mb-4">{service.title}</h3>
                  <p className="font-sans text-slate-700 text-[11px] sm:text-xs md:text-sm leading-relaxed md:leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="services-heading max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-20 text-center">
          <p className="font-sans text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-[1.7] mb-8">
            We engineer AI foundations from the ground up — synthetic data, precision annotation, rigorous auditing, and production deployment.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center btn-primary text-sm md:text-base px-8 py-3"
          >
            Explore Detailed Services
          </Link>
        </div>
      </div>
    </section>
  );
}
