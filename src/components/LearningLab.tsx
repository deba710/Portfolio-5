import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Terminal, Clock, Lock, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

export const LearningLab: React.FC = () => {
  const { learningLab } = portfolioData;

  return (
    <section
      id="lab"
      className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="font-mono text-xs text-cyan-300 font-semibold tracking-widest uppercase">
              {learningLab.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-tight">
            {learningLab.heading}
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          {learningLab.description}
        </p>
      </div>

      {/* Lab Slots Grid (3 placeholders) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {learningLab.items.map((slot, idx) => (
          <motion.div
            key={slot.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative rounded-2xl p-7 bg-gradient-to-b from-white/[0.03] to-[#04060a] border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <span className="font-mono text-xs font-bold text-amber-300 tracking-wider">
                  {slot.slotNumber}
                </span>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-[10px] font-mono text-amber-300">
                  <Clock className="w-3 h-3 animate-spin text-amber-400" />
                  <span>{slot.statusText}</span>
                </div>
              </div>

              {/* Center Chakra Blueprint Motif */}
              <div className="h-36 rounded-xl bg-black/40 border border-white/[0.04] flex flex-col items-center justify-center p-4 relative overflow-hidden mb-6">
                {/* Background Rotating Chakra */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none group-hover:opacity-35 transition-opacity">
                  <SudarshanChakra size={130} spinSpeed="slow" glowIntensity="subtle" />
                </div>

                <Terminal className="w-8 h-8 text-cyan-400/70 mb-2 relative z-10" />
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider relative z-10 text-center">
                  {slot.focusArea}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold font-display tracking-wider text-white uppercase mb-2">
                {slot.title}
              </h3>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {slot.description}
              </p>
            </div>

            {/* Tags at Bottom */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
              {slot.tags.map((tag, tidx) => (
                <span
                  key={tidx}
                  className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.05] text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note Below Lab */}
      <div className="mt-12 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center font-mono text-xs text-neutral-400">
        ⚡ Projects will be uploaded and documented here as they are developed and verified in Java.
      </div>
    </section>
  );
};
