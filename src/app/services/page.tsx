import React from 'react';
import { SpotlightNav } from '@/components/ui/SpotlightNav';

const services = [
  {
    title: 'Data Annotation and Labelling',
    desc: 'Transform raw, unstructured data into highly accurate, structured assets that power the next generation of AI. We don\'t just label data; we craft precise, context-aware datasets tailored specifically to your complex machine learning requirements. Our hybrid approach merges cutting-edge automation with rigorous human-in-the-loop expertise, delivering unparalleled quality at massive scale.',
    detail: 'By utilizing advanced AI models to accelerate the initial annotation pass, we drastically reduce turnaround times. Subsequently, our domain-expert validation teams meticulously audit every data point to eliminate bias and ensure flawless, production-ready accuracy.',
    image: '/data annot.webp',
    imageRight: false,
  },
  {
    title: 'Data Generation',
    desc: 'Unlock infinite possibilities with hyper-realistic, privacy-compliant synthetic data. When real-world data is scarce, expensive to acquire, or restricted by strict compliance regulations, we engineer diverse and robust artificial datasets that precisely mirror real-world complexities.',
    detail: 'Our synthetic data generation engine is rigorously pressure-tested against authentic scenarios. We purposefully inject rare edge cases and diverse variables, ensuring your AI models are trained to handle unexpected challenges with extreme resilience and confidence.',
    image: '/data generation.webp',
    imageRight: true,
  },
  {
    title: 'AI Implementation',
    desc: 'Accelerate your digital transformation with bespoke AI architectures designed for immediate impact. From initial concept to seamless deployment, we architect, build, and integrate intelligent solutions that solve your most pressing business challenges and drive measurable ROI.',
    detail: 'We transition your visionary prototypes into robust, enterprise-grade systems. Our solutions feature scalable cloud infrastructure, secure data pipelines, and continuous self-monitoring capabilities, ensuring sustained performance and adaptability as your business evolves.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&fit=crop&auto=format',
    imageRight: false,
  },
  {
    title: 'Quality Testing and Analysis',
    desc: 'Fortify your AI ecosystem with uncompromising quality assurance and rigorous model auditing. We treat data integrity and model reliability with the exacting standards of mission-critical software engineering, identifying vulnerabilities before they impact your operations.',
    detail: 'Through a combination of automated stress tests, adversarial evaluations, and deep expert analysis, we push your algorithms to their absolute limits. We pinpoint inaccuracies, mitigate biases, and optimize performance, ensuring your AI remains trustworthy and precise.',
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
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Services
          </h1>
          <p className="font-sans text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            We engineer AI foundations from the ground up — synthetic data, precision annotation, rigorous auditing, and production deployment.
          </p>
        </div>

        {services.map((service, i) => (
          <div
            key={i}
            className={`w-full min-h-[75vh] flex items-center justify-center py-16 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-screen-xl w-full mx-auto px-8 sm:px-12 lg:px-16">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                
                <div className={`flex flex-col justify-center ${
                  !service.imageRight ? 'lg:order-2' : ''
                }`}>
                  <h2
                    className="font-heading uppercase tracking-wide text-[#B8860B] leading-[1.1] mb-6"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
                  >
                    {service.title}
                  </h2>
                  <p className="font-sans text-slate-700 text-lg md:text-xl leading-[1.7] mb-5">
                    {service.desc}
                  </p>
                  <p className="font-sans text-slate-500 text-base md:text-lg leading-[1.7]">
                    {service.detail}
                  </p>
                </div>

                <div className={`relative overflow-hidden rounded-2xl shadow-xl w-full max-w-lg mx-auto aspect-[4/3] bg-white ${
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
    </div>
  );
}
