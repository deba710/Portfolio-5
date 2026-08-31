import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Sparkles, Check, ArrowRight, Compass, Flag } from 'lucide-react';

export const Journey: React.FC = () => {
  const { journey } = portfolioData;
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  return (
    <section
      id="journey"
      className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="font-mono text-xs text-cyan-300 font-semibold tracking-widest uppercase">
              {journey.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-tight">
            {journey.heading}
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-xs">
          A sequential progression from initial curiosity to disciplined capability.
        </p>
      </div>

      {/* Circular Timeline Grid */}
      <div className="relative">
        
        {/* Connecting Timeline Energy Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-amber-500/20 via-cyan-400/40 to-indigo-500/20 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {journey.stages.map((stage, idx) => {
            const isHovered = hoveredStage === stage.id;
            const isCurrent = stage.status === 'current';
            const isCompleted = stage.status === 'completed';

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredStage(stage.id)}
                onMouseLeave={() => setHoveredStage(null)}
                className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-b from-amber-500/10 via-[#090d16] to-[#030305] border-2 border-amber-400/40 shadow-[0_0_30px_rgba(245,158,11,0.15)]'
                    : isCompleted
                    ? 'bg-white/[0.02] border border-cyan-400/20 hover:border-cyan-400/50'
                    : 'bg-white/[0.01] border border-white/[0.06] hover:border-white/20 opacity-80'
                }`}
              >
                {/* Stage Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Concentric Node Circle */}
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono text-xs font-bold transition-all ${
                          isCurrent
                            ? 'border-amber-400 text-amber-300 bg-amber-500/20 shadow-[0_0_15px_#f59e0b]'
                            : isCompleted
                            ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                            : 'border-white/20 text-white/50 bg-white/5'
                        }`}
                      >
                        {stage.stepNumber}
                      </div>

                      {isCurrent && (
                        <div className="absolute -inset-1 rounded-full border border-amber-400/40 animate-ping pointer-events-none" />
                      )}
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                          : isCompleted
                          ? 'bg-cyan-400/10 text-cyan-300'
                          : 'bg-white/5 text-white/40'
                      }`}
                    >
                      {stage.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-display tracking-wider text-white uppercase mb-2">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Status Indicator at bottom */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 font-mono text-[10px]">
                  {isCompleted ? (
                    <span className="text-cyan-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> MILESTONE ACHIEVED
                    </span>
                  ) : isCurrent ? (
                    <span className="text-amber-400 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> CURRENT FOCUS
                    </span>
                  ) : (
                    <span className="text-white/40">NEXT HORIZON</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
