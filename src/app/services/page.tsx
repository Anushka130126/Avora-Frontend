import React from 'react';
import { SpotlightNav } from '@/components/ui/SpotlightNav';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Data Annotation and Labelling',
    desc: 'We carefully label your data so that AI models can easily understand it. Our mix of smart tools and human experts ensures high accuracy at any scale.',
    detail: 'We use AI to speed up the first pass of labeling, and then our expert team double-checks everything to guarantee top-tier quality.',
    image: '/data annot.webp',
    imageRight: false,
  },
  {
    title: 'Data Generation',
    desc: 'We create highly realistic artificial data for training AI when real-world data is hard to find, too expensive, or restricted by privacy rules.',
    detail: 'Every generated dataset is rigorously tested to ensure it matches real-world scenarios, including rare edge cases that your AI needs to learn.',
    image: '/data generation.webp',
    imageRight: true,
  },
  {
    title: 'AI Implementation',
    desc: 'We quickly build and launch custom AI solutions tailored to your business, helping you test your ideas in the real world before scaling up.',
    detail: 'Once proven, we turn your prototype into a secure, scalable, and easy-to-understand system that continuously monitors its own performance.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&fit=crop&auto=format',
    imageRight: false,
  },
  {
    title: 'Quality Testing and Analysis',
    desc: 'We thoroughly test your datasets and AI models to make sure everything works perfectly. We treat data quality with the same strict standards as software code.',
    detail: 'Through automated checks and expert reviews, we push your systems to their limits. If something falls short, we fix it before it ever reaches you.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&fit=crop&auto=format',
    imageRight: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-24">
      <SpotlightNav />
      
      <main className="flex-1 w-full">
        <div className="text-center px-4 max-w-screen-xl mx-auto mt-10 mb-16">
          <h1 
            className="font-heading uppercase tracking-wide text-[#B8860B] leading-tight" 
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Detailed Services
          </h1>
          <p className="font-sans text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
            We engineer AI foundations from the ground up — synthetic data, precision annotation, rigorous auditing, and production deployment.
          </p>
        </div>

        {services.map((service, i) => (
          <div
            key={i}
            className={`w-full min-h-[85vh] flex items-center justify-center py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-screen-2xl w-full mx-auto px-8 sm:px-12 lg:px-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>
                
                <div className={`flex flex-col justify-center ${
                  !service.imageRight ? 'lg:order-2' : ''
                }`}>
                  <h2
                    className="font-heading uppercase tracking-wide text-[#B8860B] leading-[1.1] mb-8"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                  >
                    {service.title}
                  </h2>
                  <p className="font-sans text-slate-700 text-xl md:text-2xl leading-[1.8] mb-6">
                    {service.desc}
                  </p>
                  <p className="font-sans text-slate-500 text-lg md:text-xl leading-[1.8]">
                    {service.detail}
                  </p>
                </div>

                <div className={`relative overflow-hidden rounded-2xl shadow-xl aspect-video lg:aspect-square w-full bg-white ${
                  !service.imageRight ? 'lg:order-1' : ''
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
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
      </main>

      <Footer />
    </div>
  );
}
