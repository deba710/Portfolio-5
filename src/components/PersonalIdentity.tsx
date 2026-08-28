import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Quote, Sparkles, Compass } from 'lucide-react';

export const PersonalIdentity: React.FC = () => {
  const { identity } = portfolioData;

  return (
    <section id="identity" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{identity.sectionLabel}</span>
        </div>
      </div>

      {/* Heroic Statement Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0b101d] via-[#080c14] to-[#04070d] border border-cyan-500/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        
        {/* Subtle background glow & grid inside banner */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-8">
          
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Quote className="w-6 h-6" />
          </div>

          {/* Strong Personal Statement */}
          <blockquote className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            “{identity.quote}”
          </blockquote>

          {/* Supporting Reflection */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal">
            {identity.reflection}
          </p>

          {/* Pillars List */}
          <div className="pt-6 border-t border-white/[0.08]">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-4">
              GUIDING PRINCIPLES:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {identity.pillars.map((pillar) => (
                <div
                  key={pillar.name}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
                >
                  <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider">
                    {pillar.name}
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-1 leading-snug">
                    {pillar.meaning}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
