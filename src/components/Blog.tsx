'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useInView';
import { ArrowUpRight } from 'lucide-react';

const teaserPosts = [
  {
    category: 'Data Generation',
    title: 'How Synthetic Data Solves the AI Cold-Start Problem',
    href: '/blog',
  },
  {
    category: 'Data Annotation',
    title: 'Why Precision Labeling Is the Backbone of Model Accuracy',
    href: '/blog',
  },
  {
    category: 'AI Implementation',
    title: 'From MVP to Production: A Lean AI Deployment Playbook',
    href: '/blog',
  },
];

export default function Blog() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="blog"
      className="py-20 md:py-28 relative overflow-hidden border-t border-slate-200/70"
      style={{ backgroundColor: 'rgba(248,250,252,0.75)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Header row */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B8860B] mb-3 block">
              Insights
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-slate-900 leading-none">
              From the<br />Pipeline
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mb-5">
              Educational resources on data generation, annotation workflows, auditing standards, and AI deployment — straight from the team that runs the pipeline.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 hover:text-[#B8860B] transition-colors group"
            >
              View all articles
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Article list */}
        <div className="flex flex-col divide-y divide-slate-200/80">
          {teaserPosts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 hover:bg-white/40 px-4 -mx-4 rounded-sm transition-all duration-200"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${0.1 + index * 0.1}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${0.1 + index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-5 flex-1 min-w-0">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B8860B] border border-[#B8860B]/30 px-2.5 py-1 whitespace-nowrap shrink-0">
                  {post.category}
                </span>
                <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide text-slate-900 group-hover:text-[#B8860B] transition-colors leading-tight truncate">
                  {post.title}
                </h3>
              </div>
              <div className="shrink-0 w-9 h-9 border border-slate-200 flex items-center justify-center group-hover:border-[#B8860B] group-hover:text-[#B8860B] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
