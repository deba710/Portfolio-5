import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Sparkles, Quote } from 'lucide-react';

export const Mindset: React.FC = () => {
  const { mindset } = portfolioData;

  return (
    <section
      id="mindset"
      className="py-28 sm:py-40 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden flex items-center justify-center text-center"
    >
      {/* Background Rotating Ambient Chakra Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 sm:opacity-30 z-0">
        <SudarshanChakra
          size={window.innerWidth < 640 ? 450 : 700}
          spinSpeed="ultra-slow"
          glowIntensity="high"
        />
      </div>

      {/* Atmospheric Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-r from-amber-500/15 via-cyan-500/10 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        {/* Section Label */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 font-mono text-xs tracking-wider">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="uppercase font-semibold">{mindset.sectionLabel}</span>
        </div>

        {/* Big Bold Cinematic Statement */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          <span className="block text-white/80">I DON'T NEED TO KNOW</span>
          <span className="block text-white/80">EVERYTHING YET.</span>
          <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.4)] mt-2">
            I JUST NEED TO KEEP LEARNING.
          </span>
        </h2>

        {/* Supporting Reflection */}
        <p className="text-base sm:text-xl text-neutral-300 font-sans leading-relaxed max-w-2xl mx-auto font-light">
          {mindset.supportingText}
        </p>

        {/* Subtle Decorative Line with Center Amber Diamond */}
        <div className="flex items-center justify-center gap-4 pt-4 opacity-60">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />
          <div className="w-2 h-2 rotate-45 bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
          <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-amber-400" />
        </div>
      </motion.div>
    </section>
  );
};
