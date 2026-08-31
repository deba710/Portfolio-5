import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Github, ArrowUpRight, Terminal, GitBranch, Sparkles } from 'lucide-react';

export const GitHubHighlight: React.FC = () => {
  const { githubSection } = portfolioData;

  return (
    <section
      id="github-section"
      className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/[0.04] to-[#040711] border border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        {/* Left Info */}
        <div className="space-y-4 max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 font-mono text-xs tracking-wider">
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            <span>{githubSection.sectionLabel}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white uppercase">
            {githubSection.heading}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed font-light">
            {githubSection.description}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 font-mono text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>github.com/{githubSection.username}</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-cyan-300">OPEN SOURCE LEARNING</span>
          </div>
        </div>

        {/* Right CTA Button & Mini Rotating Chakra Accent */}
        <div className="flex flex-col items-center gap-4 flex-shrink-0">
          <a
            id="github-highlight-btn"
            href={githubSection.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-sm font-bold tracking-wider uppercase shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_45px_rgba(6,182,212,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Github className="w-4 h-4" />
            <span>VIEW GITHUB →</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
            OPENS IN A NEW TAB
          </span>
        </div>
      </motion.div>
    </section>
  );
};
