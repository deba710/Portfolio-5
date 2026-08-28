import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { ShieldCheck, Flag, Sparkles, Milestone as MilestoneIcon } from 'lucide-react';

export const Milestones: React.FC = () => {
  const { milestones } = portfolioData;

  return (
    <section id="milestones" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{milestones.sectionLabel}</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] whitespace-pre-line">
          {milestones.heading}
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl font-mono pt-2">
          {milestones.description}
        </p>
      </div>

      {/* Milestones Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {milestones.items.map((milestone, idx) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="relative rounded-2xl bg-[#090d16]/80 border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            {/* Top Tag & Number */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <span className="font-mono text-3xl font-extrabold text-neutral-500 group-hover:text-cyan-400 transition-colors">
                  {milestone.number}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-cyan-400/90 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded">
                  {milestone.stageBadge}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide mt-6 mb-3">
                {milestone.title}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {milestone.description}
              </p>
            </div>

            {/* Bottom Indicator */}
            <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center gap-2 text-[11px] font-mono text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
              <span>HONEST TRAJECTORY</span>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};
