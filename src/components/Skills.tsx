import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SkillStatus } from '../types/portfolio';
import { Terminal, Cpu, Lightbulb, Compass, CheckCircle, Sparkles } from 'lucide-react';

const statusConfig: Record<SkillStatus, { label: string; badgeClass: string; dotClass: string }> = {
  LEARNING: {
    label: 'LEARNING',
    badgeClass: 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]',
    dotClass: 'bg-cyan-400',
  },
  PRACTICING: {
    label: 'PRACTICING',
    badgeClass: 'bg-amber-950/50 border-amber-500/30 text-amber-300',
    dotClass: 'bg-amber-400',
  },
  EXPLORING: {
    label: 'EXPLORING',
    badgeClass: 'bg-indigo-950/50 border-indigo-500/30 text-indigo-300',
    dotClass: 'bg-indigo-400',
  },
};

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{skills.sectionLabel}</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] whitespace-pre-line">
          {skills.heading}
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl font-mono pt-2">
          {skills.description}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.items.map((skill, idx) => {
          const config = statusConfig[skill.status];

          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                skill.isCurrentFocus
                  ? 'bg-gradient-to-br from-cyan-950/25 via-[#090d16] to-[#06080e] border-cyan-500/40 shadow-[0_10px_35px_rgba(34,211,238,0.1)]'
                  : 'bg-[#080c14]/80 border-white/[0.08] hover:border-white/20'
              }`}
            >
              {/* Active Current Focus Highlight Banner */}
              {skill.isCurrentFocus && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-cyan-500 text-neutral-950 text-[10px] font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 animate-ping" />
                  <span>PRIMARY ACTIVE FOCUS</span>
                </div>
              )}

              {/* Skill Top Meta */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                    {skill.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                    {skill.name}
                  </h3>
                </div>

                {/* Status Badge */}
                <div className={`px-3 py-1 rounded-full border text-[11px] font-mono font-semibold tracking-wider uppercase flex items-center gap-2 ${config.badgeClass}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass} animate-pulse`} />
                  <span>{config.label}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {skill.summary}
              </p>

              {/* Sub-Topics / Focus Tags */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-2.5">
                  CORE TOPICS & APPLICATION:
                </span>
                <div className="flex flex-wrap gap-2">
                  {skill.focusTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-neutral-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Note on Honesty */}
      <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono text-neutral-400">
        <span>// ZERO ARTIFICIAL METRICS</span>
        <span className="text-cyan-400/80">AUTHENTIC REPERTOIRE ONLY</span>
      </div>

    </section>
  );
};
