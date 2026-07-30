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
    desc: 'We carefully label your data so that AI models can easily understand it. Our mix of smart tools and human experts ensures high accuracy at any scale.',
    detail: 'We use AI to speed up the first pass of labeling, and then our expert team double-checks everything to guarantee top-tier quality.',
    image: '/data annot.webp',
    imageRight: false,
    shortDesc: 'Accurate and fast data labeling powered by smart tools and human experts.',
    posClasses: 'top-[12%] left-[2%] md:top-[15%] md:left-[5%] lg:top-[12%] lg:left-[10%]',
  },
  {
    title: 'Data Generation',
    desc: 'We create highly realistic artificial data for training AI when real-world data is hard to find, too expensive, or restricted by privacy rules.',
    detail: 'Every generated dataset is rigorously tested to ensure it matches real-world scenarios, including rare edge cases that your AI needs to learn.',
    image: '/data generation.webp',
    imageRight: true,
    shortDesc: 'Creating realistic artificial data when real-world data is hard to get.',
    posClasses: 'top-[12%] right-[2%] md:top-[15%] md:right-[5%] lg:top-[12%] lg:right-[10%]',
  },
  {
    title: 'AI Implementation',
    desc: 'We quickly build and launch custom AI solutions tailored to your business, helping you test your ideas in the real world before scaling up.',
    detail: 'Once proven, we turn your prototype into a secure, scalable, and easy-to-understand system that continuously monitors its own performance.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&fit=crop&auto=format',
    imageRight: false,
    shortDesc: 'Rapidly building and launching custom AI solutions tailored to your needs.',
    posClasses: 'bottom-[12%] left-[2%] md:bottom-[15%] md:left-[5%] lg:bottom-[12%] lg:left-[10%]',
  },
  {
    title: 'Quality Testing and Analysis',
    desc: 'We thoroughly test your datasets and AI models to make sure everything works perfectly. We treat data quality with the same strict standards as software code.',
    detail: 'Through automated checks and expert reviews, we push your systems to their limits. If something falls short, we fix it before it ever reaches you.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&fit=crop&auto=format',
    imageRight: true,
    shortDesc: 'Thorough testing to guarantee your data and models work perfectly.',
    posClasses: 'bottom-[12%] right-[2%] md:bottom-[15%] md:right-[5%] lg:bottom-[12%] lg:right-[10%]',
  },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const touchActive = useRef(false);

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

    const slides = gsap.utils.toArray('.service-slide') as HTMLElement[];
    slides.forEach((slide) => {
      const textEl = slide.querySelector('.slide-text');
      const imageEl = slide.querySelector('.slide-image');
      if (textEl) {
        gsap.fromTo(textEl, { opacity: 0, x: -30 }, {
          opacity: 1, x: 0, duration: 1.0, ease: 'power4.out',
          scrollTrigger: { trigger: slide, start: 'top 78%' },
        });
      }
      if (imageEl) {
        gsap.fromTo(imageEl, { opacity: 0, scale: 0.97 }, {
          opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: slide, start: 'top 78%' },
        });
      }
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
                  <p className="font-sans text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">{service.desc}</p>
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
