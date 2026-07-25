'use client';

import React, { useRef } from 'react';
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
    image: '/data annotation.webp',
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
    <section id="services" ref={container} className="bg-white pt-20 md:pt-28">
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
      <div className="w-full bg-white pb-16 pt-8 px-4">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, i) => (
            <div 
              key={i}
              className="flip-card-container relative w-full aspect-square max-w-[400px] mx-auto cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
                    <h3 className="text-white font-heading text-xl md:text-2xl font-bold drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute inset-0 w-full h-full bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-[#B8860B] mb-4">{service.title}</h3>
                  <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-16 md:pt-24">
        <div className="services-heading max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-20 text-center mb-12 md:mb-20">
          <p className="font-sans text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-[1.7]">
            We engineer AI foundations from the ground up — synthetic data, precision annotation, rigorous auditing, and production deployment.
          </p>
        </div>

        {services.map((service, i) => (
          <div
            key={i}
            className={`service-slide ${i === 0 ? 'pb-16 md:pb-24 pt-6 md:pt-10' : 'py-16 md:py-24'} ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[400px] gap-10 lg:gap-16`}>

                <div className={`slide-text flex flex-col justify-center ${
                  !service.imageRight ? 'lg:order-2' : ''
                }`}>
                  <h3
                    className="font-heading uppercase tracking-wide text-[#B8860B] leading-[1.05] mb-5"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                  >
                    {service.title}
                  </h3>

                  <p className="font-sans text-slate-700 text-base md:text-lg leading-[1.85] mb-5">
                    {service.desc}
                  </p>
                  <p className="font-sans text-slate-500 text-sm md:text-base leading-[1.85]">
                    {service.detail}
                  </p>
                </div>

                <div className={`slide-image relative overflow-hidden rounded-xl min-h-[320px] h-full w-full bg-white shadow-sm ${
                  !service.imageRight ? 'lg:order-1' : ''
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className={`absolute inset-0 pointer-events-none ${
                    service.imageRight
                      ? 'bg-gradient-to-r from-slate-50/20 via-transparent to-transparent'
                      : 'bg-gradient-to-l from-white/20 via-transparent to-transparent'
                  }`} />
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
