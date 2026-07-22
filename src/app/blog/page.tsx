'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }

const posts = [
  {
    href: 'https://news.mit.edu/2023/synthetic-data-ai-training-0327',
    title: 'Synthetic Data Accelerates AI Training',
    excerpt:
      'MIT researchers demonstrate how physics-informed synthetic datasets can replace scarce real-world data — solving the cold-start problem that blocks most AI pipelines from getting off the ground.',
    source: 'MIT News',
    date: 'March 2023',
    category: 'Data Generation',
    readTime: '6 min',
    featured: true,
  },
  {
    href: 'https://research.google/blog/scaling-data-annotation-with-human-ai-collaboration/',
    title: 'Scaling Annotation with Human-AI Collaboration',
    excerpt:
      'Google Research on combining model-assisted pre-labeling with human expert review to deliver annotation quality at enterprise scale — exactly the approach behind our precision labeling workflows.',
    source: 'Google Research',
    date: 'Jan 2024',
    category: 'Data Annotation',
    readTime: '8 min',
    featured: false,
  },
  {
    href: 'https://towardsdatascience.com/inter-annotator-agreement-2f46c6d37bf3',
    title: 'Inter-Annotator Agreement: Cohen\'s Kappa Explained',
    excerpt:
      'A definitive guide to measuring human labeling consistency. Understanding Kappa scoring is the first step toward building dataset quality gates that actually work — the standard we apply on every project.',
    source: 'Towards Data Science',
    date: 'Apr 2023',
    category: 'Data Auditing',
    readTime: '7 min',
    featured: false,
  },
  {
    href: 'https://hbr.org/2023/11/how-to-build-ai-products-that-actually-work',
    title: 'How to Build AI Products That Actually Work',
    excerpt:
      'Harvard Business Review on why most AI deployments fail — and the lean, hypothesis-driven approach that separates MVPs that scale from ones that stall. This mirrors how we architect every AI implementation.',
    source: 'Harvard Business Review',
    date: 'Nov 2023',
    category: 'AI Implementation',
    readTime: '9 min',
    featured: false,
  },
  {
    href: 'https://www.nature.com/articles/s41597-023-02627-9',
    title: 'Data Quality in Machine Learning: A Systematic Review',
    excerpt:
      'Nature Scientific Data peer-reviewed analysis of how dataset quality directly governs model performance — making the case that investing in data auditing yields higher ROI than architecture tuning.',
    source: 'Nature Scientific Data',
    date: 'Oct 2023',
    category: 'Data Auditing',
    readTime: '10 min',
    featured: false,
  },
  {
    href: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    title: 'The State of AI in 2024',
    excerpt:
      'McKinsey\'s annual global survey on enterprise AI adoption: where companies are seeing ROI, what\'s blocking deployment, and why data infrastructure — not model architecture — is now the primary bottleneck.',
    source: 'McKinsey & Company',
    date: 'May 2024',
    category: 'AI Implementation',
    readTime: '12 min',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Data Generation': 'bg-amber-50 text-amber-700 border-amber-200',
  'Data Annotation': 'bg-blue-50 text-blue-700 border-blue-200',
  'Data Auditing': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'AI Implementation': 'bg-purple-50 text-purple-700 border-purple-200',
};

export default function BlogPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.blog-header > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
    );
    gsap.fromTo('.blog-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.blog-grid', start: 'top 85%' }
      }
    );
  }, { scope: container });

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main ref={container} className="min-h-screen" style={{ backgroundColor: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(16px)' }}>

      {/* Page Header */}
      <div className="border-b border-slate-200 pt-32 pb-14 md:pb-20">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="blog-header flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B8860B] mb-3 block">
                Insights & Research
              </span>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-none text-slate-900 tracking-wide uppercase">
                From the<br />Pipeline
              </h1>
            </div>
            <p className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed md:pb-2 font-sans">
              Curated articles from trusted sources — MIT, Google Research, Nature, Harvard Business Review and more — on the data and AI technologies we build with.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-14 md:py-20">

        {/* Featured Article */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-card group block mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200/80 bg-white/90 hover:shadow-lg transition-all duration-400 overflow-hidden rounded-sm">
            {/* Image side */}
            <div className="lg:col-span-5 min-h-[240px] lg:min-h-0 relative overflow-hidden bg-slate-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/Gold_Flow_Light.jpg.jpeg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
              <div className="absolute top-5 left-5">
                <span className={`inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.18em] border px-2.5 py-1 rounded-sm ${categoryColors[featured.category] || ''}`}>
                  {featured.category}
                </span>
              </div>
            </div>
            {/* Text side */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {featured.source}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.15em]">{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.15em]">{featured.readTime} read</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-900 group-hover:text-[#B8860B] transition-colors leading-tight mb-5">
                  {featured.title}
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-sans">
                  {featured.excerpt}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 group-hover:text-[#B8860B] transition-colors">
                  Read Article
                </span>
                <div className="w-10 h-10 border border-slate-200 flex items-center justify-center group-hover:border-[#B8860B] group-hover:text-[#B8860B] transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* Grid of remaining articles */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((post, i) => (
            <a
              key={i}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card group flex flex-col border border-slate-200/80 bg-white/90 hover:shadow-md hover:border-slate-300 transition-all duration-300 rounded-sm overflow-hidden"
            >
              {/* Category stripe */}
              <div className="px-6 pt-6 pb-0">
                <span className={`inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.18em] border px-2.5 py-1 rounded-sm mb-4 ${categoryColors[post.category] || ''}`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {post.source}
                  </span>
                  <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-[0.12em]">{post.date}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide text-slate-900 group-hover:text-[#B8860B] transition-colors leading-tight mb-3 flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.15em]">
                    {post.readTime} read
                  </span>
                  <div className="w-8 h-8 border border-slate-200 flex items-center justify-center group-hover:border-[#B8860B] group-hover:text-[#B8860B] transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 font-mono text-[10px] text-slate-400 tracking-[0.15em] uppercase text-center">
          Articles sourced from MIT News, Google Research, Nature, Harvard Business Review, Towards Data Science and McKinsey & Company for educational purposes.
        </p>
      </div>
    </main>
  );
}
