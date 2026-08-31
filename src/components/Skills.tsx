import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Code2, Cpu, Brain, Flame, CheckCircle2, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'LEARNING':
        return 'bg-amber-400/10 text-amber-300 border border-amber-400/30';
      case 'BUILDING FOUNDATIONS':
        return 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/30';
      case 'PRACTICING':
        return 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/30';
      default:
        return 'bg-indigo-400/10 text-indigo-300 border border-indigo-400/30';
    }
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <span className="font-mono text-xs text-amber-300 font-semibold tracking-widest uppercase">
              {skills.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-tight">
            {skills.heading}
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          {skills.description}
        </p>
      </div>

      {/* Skills Grid: 4 Elegant Chakra-Inspired Circular Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.items.map((skill, idx) => {
          const isHovered = hoveredSkill === skill.id;

          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`relative rounded-2xl p-7 sm:p-8 transition-all duration-300 bg-gradient-to-b from-white/[0.03] to-white/[0.01] border backdrop-blur-sm ${
                skill.isCurrentFocus
                  ? 'border-amber-400/30 hover:border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.08)]'
                  : 'border-white/[0.08] hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                
                {/* Left Info */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded ${getStatusBadgeClass(skill.status)}`}>
                      {skill.status}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display tracking-wider text-white uppercase">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                    {skill.summary}
                  </p>

                  {/* Focus Topic Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {skill.focusTopics.map((topic, tidx) => (
                      <span
                        key={tidx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-neutral-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Circular Chakra Progress Indicator */}
                <div className="relative flex-shrink-0 flex items-center justify-center p-3 rounded-full bg-white/[0.02] border border-white/[0.06]">
                  <SudarshanChakra
                    size={90}
                    spinSpeed={isHovered ? 'fast' : 'slow'}
                    isHovered={isHovered}
                    glowIntensity={skill.isCurrentFocus ? 'high' : 'subtle'}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[9px] font-mono font-bold text-amber-300/80 uppercase">
                      {skill.isCurrentFocus ? 'CORE' : 'STUDY'}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
