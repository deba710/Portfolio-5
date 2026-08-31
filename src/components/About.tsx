import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Sparkles, Code2, BookOpen, Target, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { about, personal } = portfolioData;
  const [isChakraHovered, setIsChakraHovered] = useState(false);

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column (7 cols): Heading, Bio & Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Section Indicator */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <span className="font-mono text-xs text-amber-300 font-semibold tracking-widest uppercase">
              {about.sectionLabel}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-tight">
            {about.heading}
          </h2>

          {/* Truthful Student Bio */}
          <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed font-light">
            {about.bio}
          </p>

          <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed border-l-2 border-amber-400/40 pl-4 py-1 italic">
            "{about.focusStatement}"
          </p>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/30 transition-colors">
              <BookOpen className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-xs font-bold text-white tracking-wider uppercase">01 / CONCEPT</h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans">Understanding core principles before writing code.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/30 transition-colors">
              <Code2 className="w-5 h-5 text-cyan-400 mb-2" />
              <h4 className="text-xs font-bold text-white tracking-wider uppercase">02 / PRACTICE</h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans">Writing real programs, fixing bugs, and testing edge cases.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/30 transition-colors">
              <Target className="w-5 h-5 text-amber-300 mb-2" />
              <h4 className="text-xs font-bold text-white tracking-wider uppercase">03 / CONSISTENCY</h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans">Showing up every day to build long-term momentum.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column (5 cols): Circular Chakra Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex items-center justify-center"
          onMouseEnter={() => setIsChakraHovered(true)}
          onMouseLeave={() => setIsChakraHovered(false)}
        >
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
            
            {/* Center Interactive Chakra */}
            <div className="relative my-4">
              <SudarshanChakra
                size={280}
                spinSpeed="slow"
                isHovered={isChakraHovered}
                glowIntensity="high"
              />
            </div>

            {/* Inscription below */}
            <div className="mt-4 text-center font-mono space-y-1">
              <span className="text-[10px] text-amber-400 tracking-widest uppercase font-semibold block">
                SUDARSHAN CHAKRA MOTIF
              </span>
              <p className="text-xs text-neutral-400">
                Continuous rotation represents perpetual learning & focus.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
