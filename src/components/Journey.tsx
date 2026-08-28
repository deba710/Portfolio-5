import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { CheckCircle2, Radio, Compass, ArrowRight } from 'lucide-react';

export const Journey: React.FC = () => {
  const { journey } = portfolioData;

  return (
    <section id="journey" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden">
      
      {/* Section Header */}
      <div className="space-y-3 mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{journey.sectionLabel}</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] whitespace-pre-line">
          {journey.heading}
        </h2>
      </div>

      {/* Structured Technical Timeline */}
      <div className="relative">
        
        {/* Continuous vertical timeline connector line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-[1px] bg-gradient-to-b from-cyan-500/40 via-sky-500/20 to-white/10 hidden sm:block" />

        <div className="space-y-6 sm:space-y-8">
          {journey.stages.map((stage, index) => {
            const isCompleted = stage.status === 'completed';
            const isCurrent = stage.status === 'current';
            const isFuture = stage.status === 'future';

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-2xl border transition-all duration-300 p-6 sm:p-8 sm:pl-20 ${
                  isCurrent
                    ? 'bg-gradient-to-r from-cyan-950/20 via-[#0a0f1c] to-[#070a12] border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.08)]'
                    : isCompleted
                    ? 'bg-[#080c14]/70 border-white/[0.08] hover:border-white/20'
                    : 'bg-[#060910]/40 border-dashed border-white/[0.08]'
                }`}
              >
                {/* Timeline Node on the vertical track (Desktop) */}
                <div className="absolute top-8 left-6 -translate-x-1/2 hidden sm:flex items-center justify-center">
                  {isCompleted ? (
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                  ) : isCurrent ? (
                    <div className="relative flex h-6 w-6 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-neutral-900 border border-white/20" />
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-cyan-400">
                      {stage.stepNumber}
                    </span>
                    <span className="text-neutral-500 font-mono text-xs">/</span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {stage.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-white/[0.04] text-neutral-400 border border-white/[0.06]">
                      {stage.tag}
                    </span>
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
                        ACTIVE PHASE
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-base text-neutral-300 max-w-3xl leading-relaxed">
                  {stage.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
