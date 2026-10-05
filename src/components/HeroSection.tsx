import React, { useState, useEffect } from 'react';
import { CircularProfile } from './CircularProfile';
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Terminal, Award, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gentle, slow scroll pacing
  const readingThreshold = 240;
  const activeProgress = Math.max(0, Math.min((scrollY - readingThreshold) / 1000, 1));

  const leftSlideX = -activeProgress * 25;
  const rightSlideX = activeProgress * 25;
  const textOpacity = Math.max(1 - activeProgress * 0.5, 0.5);

  const bottomThreshold = 300;
  const bottomProgress = Math.max(0, Math.min((scrollY - bottomThreshold) / 900, 1));
  const bottomOpacity = Math.max(1 - bottomProgress * 0.5, 0.5);

  return (
    <section id="about" className="relative min-h-[90vh] pt-24 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Minimalist Hero Container */}
      <div className="w-full max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 lg:p-14 minimal-card border border-white/[0.08] relative">
        
        {/* Minimalist Top Tags */}
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono tracking-wider text-gray-400">
            <span>Python Complete</span>
            <span className="text-white/20">/</span>
            <span>C++ Algorithms</span>
            <span className="text-white/20">/</span>
            <span>AIML &amp; Neural Nets</span>
            <span className="text-white/20">/</span>
            <span className="text-[#d4af37]">Odoo x NMIT Hackathon</span>
          </div>
        </div>

        {/* Primary Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Identity & Social Links */}
          <div
            className="lg:col-span-4 flex flex-col space-y-5 text-center lg:text-left order-2 lg:order-1 transition-all duration-200 ease-out"
            style={{
              transform: `translateX(${leftSlideX}px)`,
              opacity: textOpacity,
            }}
          >
            <div>
              <span className="text-xs font-mono text-[#d4af37] tracking-widest uppercase block mb-1">
                B.Tech CSE (AIML)
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                SAUBHAGYA <br className="hidden sm:inline" />
                <span className="text-gold-gradient">GUPTA</span>
              </h1>
              <p className="mt-1 text-sm text-gray-400">
                Known as <span className="text-white font-medium">Yash Gupta</span> · Software &amp; AI
              </p>
            </div>

            {/* Clean Minimalist Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <a
                href="https://github.com/yashgupta015120"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#d4af37]/60 text-xs font-mono text-gray-300 hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>github.com/yashgupta015120</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>

              <a
                href="https://linkedin.com/in/saubhagya-gupta-2aa786378"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-blue-400/60 text-xs font-mono text-gray-300 hover:text-white transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>linkedin.com/in/saubhagya-gupta</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            </div>

            <div>
              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="underline decoration-dotted underline-offset-4">Open Dev CLI</span>
              </button>
            </div>
          </div>

          {/* Center Column: Profile Picture */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 my-2 sm:my-0">
            <CircularProfile size="xl" showStatusBadge={true} />
          </div>

          {/* Right Column: Mission & Hackathon */}
          <div
            className="lg:col-span-4 flex flex-col space-y-5 text-center lg:text-right order-3 transition-all duration-200 ease-out"
            style={{
              transform: `translateX(${rightSlideX}px)`,
              opacity: textOpacity,
            }}
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block mb-1">
                Philosophy
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Code that scales.
              </h2>
              <h2 className="font-display font-light text-xl sm:text-2xl text-amber-100/80 italic">
                Intelligence that adapts.
              </h2>
            </div>

            {/* Clean Hackathon Note */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left sm:text-right">
              <div className="flex items-center justify-center lg:justify-end gap-1.5 text-[#d4af37] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Odoo x NMIT Hackathon Participant</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                Engineered modular business workflow automation in high-velocity agile sprints.
              </p>
            </div>

            <div>
              <a
                href="mailto:yash.gupta.015120@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>yash.gupta.015120@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Banner Directly Below PFP — Minimalist & High Readability */}
        <div
          className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300"
          style={{ opacity: bottomOpacity }}
        >
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wider">
              AIML &amp; Software Developer
            </h3>
            <p className="text-xs text-gray-400 font-mono mt-1">
              B.Tech Undergraduate · Algorithms &amp; Neural Architectures
            </p>
          </div>

          <div className="max-w-xl text-center md:text-right">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light italic">
              &ldquo;Between foundational mathematics and real-world software lies the space where I code. Completed comprehensive Python mastery, actively advancing in C++ systems and AI model architectures. Eager for challenging internships, hackathons, and high-scope engineering frontiers.&rdquo;
            </p>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="mt-8 flex justify-center">
          <a
            href="#journey"
            className="flex flex-col items-center text-[10px] font-mono text-gray-500 hover:text-[#d4af37] transition-colors"
            aria-label="Scroll down"
          >
            <span className="mb-0.5">Scroll to explore</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#d4af37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
