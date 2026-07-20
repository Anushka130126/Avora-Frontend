'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Calendar, User, ExternalLink } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }

const posts = [
  {
    slug: 'https://en.wikipedia.org/wiki/Synthetic_data',
    title: 'Synthetic Data in Machine Learning',
    excerpt:
      'Understanding how physics-informed and probabilistically generated data can solve the cold-start problem in AI models.',
    date: 'July 10, 2026',
    author: 'Data Engineering',
    category: 'Data Generation',
    readTime: '6 min',
  },
  {
    slug: 'https://en.wikipedia.org/wiki/Data_annotation',
    title: 'The Fundamentals of Data Annotation',
    excerpt:
      'Why human-in-the-loop oversight and modality-specific ontologies are critical for building reliable AI models.',
    date: 'June 28, 2026',
    author: 'ML Operations',
    category: 'Annotation',
    readTime: '8 min',
  },
  {
    slug: 'https://towardsdatascience.com/inter-annotator-agreement-2f46c6d37bf3',
    title: 'Measuring Inter-Annotator Agreement',
    excerpt:
      'A deep dive into Cohen’s Kappa and why measuring human consistency is the first step toward high-fidelity datasets.',
    date: 'June 15, 2026',
    author: 'Quality Assurance',
    category: 'Auditing',
    readTime: '5 min',
  },
  {
    slug: 'https://en.wikipedia.org/wiki/Domain_adaptation',
    title: 'Domain Adaptation for Edge Cases',
    excerpt:
      'Strategies for training models on synthetic data and fine-tuning them to operate safely in unpredictable, real-world edge cases.',
    date: 'May 30, 2026',
    author: 'AI Implementation',
    category: 'Machine Learning',
    readTime: '7 min',
  },
];

export default function BlogPage() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.fromTo('.blog-header > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
    );
    gsap.fromTo('.blog-post',
      { opacity: 0, y: 40 },
      { 
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.blog-post', start: 'top 85%' }
      }
    );
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen" style={{ backgroundColor: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)' }}>
      {/* Page header */}
      <div className="border-b border-slate-200 pt-36 pb-16 md:pb-24">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="blog-header flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl leading-none text-slate-900 tracking-wide uppercase">
                Insights &<br/>Research
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-900 max-w-xl leading-relaxed md:pb-4 font-sans font-medium">
              Educational resources, methodology notes, and operational insights on data generation, annotation, and model infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Featured post — first entry, large */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <Link href={posts[0].slug} target="_blank" rel="noopener noreferrer" className="blog-post group block border border-slate-200/80 bg-white/95 hover:bg-white rounded-sm p-8 md:p-12 mb-12 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-6 items-end hover:bg-white/30">
          <div className="xl:col-span-2 mb-4 xl:mb-0">
            <span className="font-mono font-semibold text-xs tracking-[0.15em] uppercase text-[#B8860B] border border-[#B8860B]/30 px-3 py-1.5 whitespace-nowrap inline-block">
              {posts[0].category}
            </span>
          </div>
          <div className="xl:col-span-7">
            <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-wide text-slate-900 mb-6 leading-tight group-hover:text-[#B8860B] transition-colors">
              {posts[0].title}
            </h2>
            <p className="font-sans font-medium text-xl md:text-2xl text-slate-900 leading-relaxed max-w-3xl">
              {posts[0].excerpt}
            </p>
          </div>
          <div className="xl:col-span-3 xl:text-right mt-6 xl:mt-0">
            <div className="font-mono text-base text-slate-700 tracking-[0.15em] uppercase space-y-2 mb-8">
              <p>{posts[0].date}</p>
              <p>{posts[0].readTime} read</p>
              <p>{posts[0].author}</p>
            </div>
            <div className="inline-flex items-center justify-end w-full gap-2 font-mono font-semibold text-sm tracking-[0.15em] uppercase text-slate-900 group-hover:text-[#B8860B] transition-colors">
              Read Article <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Rest of posts — table rows */}
        {posts.slice(1).map((post, i) => (
          <Link key={i} href={post.slug} target="_blank" rel="noopener noreferrer" className="blog-post group block border border-slate-200/80 bg-white/95 hover:bg-white rounded-sm p-6 md:p-8 mb-6 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 xl:grid-cols-12 gap-6 items-center hover:bg-white/30">
            <div className="xl:col-span-2 mb-4 xl:mb-0">
              <span className="font-mono font-semibold text-xs tracking-[0.15em] uppercase text-[#B8860B] border border-[#B8860B]/30 px-3 py-1.5 whitespace-nowrap inline-block">
                {post.category}
              </span>
            </div>
            <div className="xl:col-span-7">
              <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-slate-900 leading-tight group-hover:text-[#B8860B] transition-colors">
                {post.title}
              </h3>
              <p className="font-sans font-medium text-lg md:text-xl text-slate-900 mt-3 leading-relaxed hidden xl:block">{post.excerpt}</p>
            </div>
            <div className="xl:col-span-2 mb-4 xl:mb-0 font-mono font-semibold text-sm text-slate-700 tracking-[0.12em] uppercase space-y-1">
              <p className="flex items-center gap-2"><Calendar className="w-3 h-3 text-[#B8860B]" />{post.date}</p>
              <p className="flex items-center gap-2"><User className="w-3 h-3 text-[#B8860B]" />{post.author}</p>
            </div>
            <div className="xl:col-span-1 xl:text-right mt-4 xl:mt-0 flex justify-end">
              <div className="w-10 h-10 border border-slate-200 flex items-center justify-center group-hover:border-[#B8860B] group-hover:text-[#B8860B] transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}

        <p className="py-10 font-mono text-[11px] text-slate-700 tracking-[0.15em] uppercase">
          External articles are provided for educational purposes.
        </p>
      </div>
    </main>
  );
}
