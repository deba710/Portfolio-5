import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Sparkles, Compass, Target, ArrowUpRight } from 'lucide-react';

export const NorthStar: React.FC = () => {
  const { northStar } = portfolioData;

  return (
    <section className="py-24 sm:py-36 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      
      {/* Huge Ambient Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>{northStar.sectionLabel}</span>
        </div>

        {/* Cinematic Heading */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] whitespace-pre-line">
          {northStar.heading}
        </h2>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          {northStar.supportingText}
        </p>

        {/* Principles Pills */}
        <div className="pt-4 flex flex-wrap justify-center gap-3">
          {northStar.corePrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-300 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{principle}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
