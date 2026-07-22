'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teaserPosts = [
  {
    category: 'Data Generation',
    title: 'How did we solve the AI cold-start problem?',
    href: '/blog',
  },
  {
    category: 'Data Annotation',
    title: 'Why is precision labeling the backbone of model accuracy?',
    href: '/blog',
  },
  {
    category: 'AI Implementation',
    title: 'What does a lean MVP to production deployment look like?',
    href: '/blog',
  },
];

export default function Blog() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.fromTo('.home-blog-header > *',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.home-blog-header', start: 'top 85%' }
      }
    );

    // List item animation
    gsap.fromTo('.home-blog-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.home-blog-list', start: 'top 85%' }
      }
    );
  }, { scope: container });

  return (
    <section
      id="blog"
      ref={container}
      className="py-20 md:py-28 relative overflow-hidden border-t border-slate-200/70 bg-white"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Header row - Centered as requested */}
        <div className="home-blog-header max-w-2xl mx-auto text-center mb-16">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B8860B] mb-4 block">
            Insights & Research
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide text-slate-900 leading-tight mb-5">
            From the Pipeline
          </h2>
          <p className="font-sans text-slate-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
            Educational resources on data generation, annotation workflows, auditing standards, and AI deployment — straight from the team that runs the pipeline.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 hover:text-[#B8860B] transition-colors group"
          >
            View all articles
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Article list - Cleaned up and asking questions */}
        <div className="home-blog-list max-w-3xl mx-auto flex flex-col gap-4">
          {teaserPosts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="home-blog-item group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm rounded-sm transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1 min-w-0">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 whitespace-nowrap shrink-0">
                  {post.category}
                </span>
                {/* Changed to sans-serif for readability as a question, rather than huge uppercase heading */}
                <h3 className="font-sans font-medium text-lg text-slate-800 group-hover:text-[#B8860B] transition-colors leading-tight">
                  {post.title}
                </h3>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#B8860B] group-hover:text-[#B8860B] transition-colors shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
