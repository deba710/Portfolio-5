import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Sparkles, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactRows = [
    {
      id: 'email-row',
      label: 'EMAIL',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail className="w-5 h-5 text-cyan-400" />,
      subtext: 'Direct communication & collaboration',
      canCopy: true,
    },
    {
      id: 'github-row',
      label: 'GITHUB',
      value: contact.github,
      href: contact.github.startsWith('http') ? contact.github : '#contact',
      icon: <Github className="w-5 h-5 text-sky-400" />,
      subtext: 'Source code repositories & learning commits',
      canCopy: false,
    },
    {
      id: 'linkedin-row',
      label: 'LINKEDIN',
      value: contact.linkedin,
      href: contact.linkedin.startsWith('http') ? contact.linkedin : '#contact',
      icon: <Linkedin className="w-5 h-5 text-indigo-400" />,
      subtext: 'Professional network & student updates',
      canCopy: false,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{contact.sectionLabel}</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] whitespace-pre-line">
          {contact.heading}
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg max-w-2xl font-normal pt-2">
          {contact.description}
        </p>
      </div>

      {/* Large Interactive Link Rows */}
      <div className="space-y-4">
        {contactRows.map((row, idx) => (
          <motion.div
            key={row.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative group rounded-2xl bg-[#080c15] border border-white/[0.08] hover:border-cyan-500/50 hover:bg-[#0b101e] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Subtle glow background on row hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <a
              id={`contact-link-${row.id}`}
              href={row.href}
              target={row.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 gap-4"
            >
              {/* Left Side: Icon, Label, and Value */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-cyan-500/40 transition-colors">
                  {row.icon}
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-bold">
                      {row.label}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 hidden md:inline">
                      • {row.subtext}
                    </span>
                  </div>

                  <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors mt-1">
                    {row.value}
                  </div>
                </div>
              </div>

              {/* Right Side: Copy Button or Animated Arrow */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                {row.canCopy && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-cyan-500/20 text-neutral-300 hover:text-cyan-300 border border-white/[0.1] text-xs font-mono transition-all cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                )}

                <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-cyan-500/40 flex items-center justify-center text-neutral-400 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

            </a>
          </motion.div>
        ))}
      </div>

      {/* Location Badge */}
      <div className="mt-8 flex items-center gap-2 text-xs font-mono text-neutral-400">
        <MapPin className="w-4 h-4 text-cyan-400" />
        <span>Base of operations: <strong className="text-neutral-200">{contact.location}</strong></span>
      </div>

    </section>
  );
};
