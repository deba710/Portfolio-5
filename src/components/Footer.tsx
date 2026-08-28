import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { footer, personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] pt-16 pb-12 overflow-hidden">
      {/* 40px Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Monogram Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-cyan-400/50 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 bg-cyan-400/5">
                D
              </div>
              <span className="font-mono text-base font-bold tracking-widest text-white uppercase">
                {footer.monogram}
              </span>
            </div>

            <div className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em]">
              {footer.roleTitle}
            </div>

            <p className="font-display font-bold text-xl sm:text-2xl text-white/90 tracking-tight pt-1">
              {footer.tagline}
            </p>
          </div>

          {/* Back to top button */}
          <button
            id="back-to-top-button"
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 px-6 py-3.5 border border-white/20 hover:border-white text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer active:scale-95 bg-white/5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Immersive UI 3-Column Meta Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.35em] text-white/40">
          <div>&copy; {new Date().getFullYear()} {personal.name.toUpperCase()} / DIGITAL IDENTITY</div>
          <div className="text-center text-cyan-400/70">BUILD STRONG FUNDAMENTALS</div>
          <div className="flex items-center gap-2">
            <span>WB, INDIA</span>
            <span>•</span>
            <span className="text-white/60">JAVA_SE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
