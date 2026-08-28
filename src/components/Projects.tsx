import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { Code, Terminal, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{projects.sectionLabel}</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] whitespace-pre-line">
          {projects.heading}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg max-w-2xl font-normal pt-2">
          {projects.description}
        </p>
      </div>

      {/* Case Studies Stack (Generous whitespace, custom individual presentation) */}
      <div className="space-y-10 sm:space-y-14">
        {projects.items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-12 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>PROJECT WORKBENCH • ACCURACY GUARANTEED</span>
        </div>
        <span className="text-neutral-500">
          Showing {projects.items.length} verified project slots
        </span>
      </div>

    </section>
  );
};
