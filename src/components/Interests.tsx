import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Code2, Cpu, Terminal, BookOpen, Layers } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Cpu: <Cpu className="w-5 h-5 text-sky-400" />,
  Terminal: <Terminal className="w-5 h-5 text-amber-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-emerald-400" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
};

export const Interests: React.FC = () => {
  const { interests } = portfolioData;

  return (
    <section id="interests" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{interests.sectionLabel}</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
          {interests.heading}
        </h2>
      </div>

      {/* Grid of Interests / Drivers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="rounded-2xl bg-[#080c15]/80 border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
          >
            <div>
              {/* Header with Number and Icon */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  {iconMap[item.iconName] || <Code2 className="w-5 h-5 text-cyan-400" />}
                </div>
                <span className="font-mono text-sm font-bold text-neutral-500 group-hover:text-cyan-400 transition-colors">
                  {item.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white tracking-wide mt-5 mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.04] text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center justify-between">
              <span>CORE MOTIVATOR</span>
              <span className="text-cyan-400/60">→ ACTIVE</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
