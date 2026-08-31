import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Compass, Target, ArrowRight, Flag, Sparkles, Layers } from 'lucide-react';

export const RoadAhead: React.FC = () => {
  const { roadAhead } = portfolioData;

  return (
    <section
      id="road-ahead"
      className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <span className="font-mono text-xs text-amber-300 font-semibold tracking-widest uppercase">
              {roadAhead.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-tight">
            {roadAhead.heading}
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          {roadAhead.text}
        </p>
      </div>

      {/* Circular Horizon Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {roadAhead.milestones.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative rounded-2xl p-7 bg-gradient-to-b from-white/[0.03] to-[#04060a] border border-white/[0.08] hover:border-amber-400/30 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Phase Badge & Circular Index */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <span className="font-mono text-xs font-bold text-amber-300 tracking-wider">
                  {item.phase}
                </span>
                <div className="w-8 h-8 rounded-full border border-amber-400/20 bg-amber-500/10 flex items-center justify-center font-mono text-xs text-amber-300">
                  0{idx + 1}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-display tracking-wider text-white uppercase mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom Trajectory Indicator */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 font-mono text-[10px] text-cyan-300">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>TRAJECTORY MILESTONE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
