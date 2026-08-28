import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { FileText, Download, Eye, CheckCircle2, ArrowUpRight, Terminal, User } from 'lucide-react';

export const Resume: React.FC = () => {
  const { resume, personal, skills, journey, projects } = portfolioData;
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Generates or downloads a neat printable summary or alert regarding future custom PDF
    window.print();
  };

  return (
    <section id="resume" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{resume.sectionLabel}</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
          {resume.heading}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg max-w-2xl font-normal pt-2">
          {resume.description}
        </p>
      </div>

      {/* Resume Presentation Card */}
      <div className="rounded-3xl bg-[#080c15] border border-white/[0.1] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Summary overview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>AUTHENTIC CANDIDATE DOCUMENTATION</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {personal.name} — Student Profile
          </h3>

          <div className="space-y-3 text-neutral-300 text-sm leading-relaxed">
            <p>
              This resume highlights verified learning progress in <span className="text-cyan-300 font-semibold">Java</span> and computer science fundamentals, structured project development, and academic learning trajectory.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300">
                Core Java & OOP
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300">
                Logic & Algorithms
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300">
                West Bengal, India
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              id="view-resume-button"
              type="button"
              onClick={() => setShowPreviewModal(true)}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW RESUME</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              id="download-resume-button"
              type="button"
              onClick={handleDownload}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-white border border-white/[0.12] hover:border-cyan-500/40 font-mono text-xs font-semibold tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>DOWNLOAD RESUME</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-neutral-500 pt-1">
            // Ready to replace with your direct PDF link in <code className="text-cyan-400">src/data/portfolio.ts</code>
          </div>
        </div>

        {/* Right Side: Visual Document Mockup Preview */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onClick={() => setShowPreviewModal(true)}
            className="w-full max-w-sm rounded-2xl bg-[#0c121e] border border-white/[0.12] p-6 shadow-2xl hover:border-cyan-500/40 transition-all cursor-pointer group space-y-4 relative overflow-hidden"
          >
            {/* Header snippet */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">RESUME.PDF</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 group-hover:underline">CLICK TO PREVIEW</span>
            </div>

            {/* Document Lines Simulation */}
            <div className="space-y-2.5">
              <div className="h-4 bg-white/15 rounded w-3/4" />
              <div className="h-2.5 bg-cyan-400/30 rounded w-1/2" />
              
              <div className="pt-3 space-y-1.5">
                <div className="h-2 bg-white/10 rounded w-full" />
                <div className="h-2 bg-white/10 rounded w-5/6" />
                <div className="h-2 bg-white/10 rounded w-4/6" />
              </div>

              <div className="pt-3 space-y-1.5">
                <div className="h-2.5 bg-amber-400/20 rounded w-2/5" />
                <div className="h-2 bg-white/10 rounded w-full" />
                <div className="h-2 bg-white/10 rounded w-3/4" />
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>FORMAT: PRINTABLE</span>
              <span className="text-cyan-400">STATUS: READY</span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Modal Preview */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#090d16] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-6 my-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 font-mono text-sm text-cyan-400 font-bold">
                <FileText className="w-4 h-4" />
                <span>RESUME OVERVIEW // {personal.name.toUpperCase()}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="p-1.5 rounded-lg bg-white/[0.05] text-neutral-400 hover:text-white hover:bg-white/10 font-mono text-xs"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Resume Content Sheet */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-5 font-mono text-xs">
              <div>
                <h4 className="text-xl font-display font-bold text-white">{personal.name}</h4>
                <p className="text-cyan-300 text-xs mt-0.5">{personal.role} • {personal.location}</p>
                <p className="text-neutral-400 text-xs mt-1">Contact: {portfolioData.contact.email}</p>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-1">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] font-bold">SUMMARY</span>
                <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                  {personal.aboutBio}
                </p>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-1">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] font-bold">TECHNICAL FOCUS</span>
                <p className="text-neutral-200">Language: Java (Core OOP, Console Development, Algorithms)</p>
                <p className="text-neutral-400">Fundamentals: Data structures basics, control flows, defensive exception handling</p>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-2">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] font-bold">PRACTICAL PROJECTS</span>
                {projects.items.map((proj) => (
                  <div key={proj.id} className="text-neutral-300">
                    <span className="text-white font-semibold">• {proj.title}</span> ({proj.status})
                    <p className="text-neutral-400 font-sans text-[11px] mt-0.5">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-neutral-500">
                To attach custom PDF, update URL in portfolio.ts
              </span>
              <button
                type="button"
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-neutral-950 font-mono text-xs font-bold hover:bg-cyan-400 transition-colors"
              >
                PRINT / SAVE PDF
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
