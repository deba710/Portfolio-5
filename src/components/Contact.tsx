import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Sparkles, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const contactCards = [
    {
      id: 'github',
      label: 'GITHUB PROFILE',
      value: contact.githubHandle,
      subtext: 'Repository logs & future Java code',
      href: contact.github,
      icon: <Github className="w-5 h-5 text-cyan-400" />,
      actionText: 'VISIT GITHUB →',
      isLink: true,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN NETWORK',
      value: contact.linkedinName,
      subtext: 'Professional networking & developer connections',
      href: contact.linkedin,
      icon: <Linkedin className="w-5 h-5 text-amber-400" />,
      actionText: 'CONNECT →',
      isLink: true,
    },
    {
      id: 'email',
      label: 'EMAIL INQUIRY',
      value: contact.email,
      subtext: 'Direct communication & learning discussions',
      href: `mailto:${contact.email}`,
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      actionText: 'SEND EMAIL →',
      isLink: true,
      canCopy: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <span className="font-mono text-xs text-amber-300 font-semibold tracking-widest uppercase">
              {contact.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-tight">
            {contact.heading}
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          {contact.description}
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative rounded-2xl p-7 bg-gradient-to-b from-white/[0.03] to-[#04060a] border border-white/[0.08] hover:border-amber-400/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                  {card.icon}
                </div>
                <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              <span className="font-mono text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                {card.label}
              </span>

              <h3 className="text-lg font-bold text-white font-mono mt-1 break-all">
                {card.value}
              </h3>

              <p className="text-xs text-neutral-400 font-sans mt-2">
                {card.subtext}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
              <a
                id={`contact-link-${card.id}`}
                href={card.href}
                target={card.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300 hover:text-white group-hover:translate-x-0.5 transition-all"
              >
                <span>{card.actionText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {card.canCopy && (
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white font-mono text-[10px] border border-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-300">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
