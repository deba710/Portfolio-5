import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types/portfolio';
import { Terminal, Github, ExternalLink, Code2, Layers, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isCompleted = project.status === 'Completed';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-3xl bg-[#080c15]/90 border border-white/[0.1] hover:border-cyan-500/30 p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
    >
      {/* Background glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
        
        {/* Project Number & Category */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
            {project.number}
          </span>
          <div className="h-6 w-[1px] bg-white/10" />
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            CASE STUDY // 0{index + 1}
          </span>
        </div>

        {/* Status Badge */}
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border ${
          isCompleted 
            ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400' 
            : 'bg-amber-950/40 border-amber-500/30 text-amber-300'
        }`}>
          {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5 animate-spin" />}
          <span>{project.status}</span>
        </div>

      </div>

      {/* Main Content Layout: Story Breakdown + Visual Preview */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
        
        {/* Left Side: Technical Case Study Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400/80 mt-1 uppercase tracking-wider">
              {project.tagline}
            </p>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* The Problem */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/90 font-semibold block">
                PROBLEM SOLVED
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* What was Built */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                WHAT I BUILT
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {project.whatIBuilt}
              </p>
            </div>

          </div>

          {/* Key Highlights */}
          <div className="pt-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
              KEY ARCHITECTURAL HIGHLIGHTS:
            </span>
            <ul className="space-y-1.5 font-mono text-xs text-neutral-300">
              {project.keyHighlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-center gap-2">
                  <span className="text-cyan-400">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges & Links */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            
            {/* Tech stack tags */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mr-1">
                TECH:
              </span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  id={`project-github-btn-${project.id}`}
                  href={project.githubUrl.startsWith('http') ? project.githubUrl : 'https://github.com/deba710'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-white border border-white/[0.12] text-xs font-mono transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub Code</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  id={`project-demo-btn-${project.id}`}
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500 text-neutral-950 text-xs font-mono font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

        </div>

        {/* Right Side: Visual Preview / Terminal Window (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl bg-[#04060a] border border-white/[0.12] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
            
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-[#0a0f18] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
                {project.id}.java — Preview
              </span>
              <div className="w-4" />
            </div>

            {/* Terminal Code / Execution Mock Area */}
            <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-neutral-300 space-y-2 select-none overflow-x-auto min-h-[220px]">
              
              {project.previewVariant === 'terminal' && (
                <>
                  <div className="text-neutral-500">// Compiled with OpenJDK 21</div>
                  <div className="text-cyan-400">$ java MainConsoleApp</div>
                  <div className="text-neutral-400">=== DEBANGAN CONSOLE MANAGEMENT SYSTEM ===</div>
                  <div className="text-emerald-400">[OK] Initializing memory store...</div>
                  <div className="text-neutral-300">&gt; 1. Add Record  2. Query State  3. Validate Data</div>
                  <div className="text-amber-300">&gt; Enter Option: <span className="text-white animate-pulse">2_</span></div>
                  <div className="text-neutral-500 text-[10px] pt-2">// Dynamic class methods active</div>
                </>
              )}

              {project.previewVariant === 'logic' && (
                <>
                  <div className="text-neutral-500">// Pattern & Matrix Engine</div>
                  <div className="text-cyan-400">public class PatternEngine &#123;</div>
                  <div className="pl-3 text-sky-300">public static void computeMatrix(int n) &#123;</div>
                  <div className="pl-6 text-neutral-400">for (int r = 1; r &lt;= n; r++) &#123;</div>
                  <div className="pl-9 text-emerald-400">System.out.printf("[%02d,%02d] ", r, n-r);</div>
                  <div className="pl-6 text-neutral-400">&#125;</div>
                  <div className="pl-3 text-sky-300">&#125;</div>
                  <div className="text-cyan-400">&#125;</div>
                </>
              )}

              {project.previewVariant === 'blueprint' && (
                <>
                  <div className="text-neutral-500">// Active Architecture Blueprint</div>
                  <div className="text-amber-400">[PHASE: RECORD SERIALIZATION]</div>
                  <div className="text-neutral-300">├── RecordBuffer.java (Input streams)</div>
                  <div className="text-neutral-300">├── DataValidator.java (Boundary rules)</div>
                  <div className="text-neutral-300">└── FilePersistence.java (Disk I/O)</div>
                  <div className="text-cyan-400 mt-2">&gt; Status: In Development... <span className="animate-pulse">●</span></div>
                </>
              )}

            </div>

            {/* Terminal Footer */}
            <div className="px-4 py-2 bg-[#080d16] border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>STATUS: {project.status.toUpperCase()}</span>
              <span className="text-cyan-400">JAVA SE</span>
            </div>

          </div>
        </div>

      </div>

    </motion.article>
  );
};
