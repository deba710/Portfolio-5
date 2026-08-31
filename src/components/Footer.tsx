import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { ArrowUp, Github, Linkedin, Terminal, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { footer, contact, personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#020204] py-16 relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Monogram, Role & Tagline with Rotating Chakra */}
          <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center">
              <SudarshanChakra size={38} spinSpeed="normal" glowIntensity="subtle" />
            </div>

            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="font-mono text-sm sm:text-base font-bold text-white tracking-widest uppercase">
                  {footer.monogram}
                </span>
                <span className="text-[10px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-400/20">
                  {footer.roleTitle}
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-300/80 mt-1 tracking-wider">
                {footer.tagline}
              </p>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="footer-github-link"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400 text-neutral-300 hover:text-cyan-300 font-mono text-xs font-semibold tracking-wider uppercase transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              id="footer-linkedin-link"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-amber-400 text-neutral-300 hover:text-amber-300 font-mono text-xs font-semibold tracking-wider uppercase transition-all"
            >
              <Linkedin className="w-4 h-4 text-amber-400" />
              <span>LinkedIn</span>
            </a>

            <button
              id="back-to-top-button"
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer active:scale-95"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center font-mono text-[11px] text-neutral-400">
          <span>DEBANGAN BERA • SUDARSHAN CHAKRA DEVELOPER PORTFOLIO</span>
          <span>BUILT WITH HONESTY & INTENTION • {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
