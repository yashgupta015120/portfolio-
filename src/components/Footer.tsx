import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#090a0d] py-12 px-4 sm:px-6 lg:px-8 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display font-bold text-sm text-white tracking-wider">
            SAUBHAGYA (YASH) GUPTA
          </span>
          <p className="text-gray-400 text-[11px] mt-1">
            B.Tech Computer Science (AIML) · Python &amp; C++ Developer · Odoo x NMIT Hackathon Participant
          </p>
        </div>

        {/* Clean Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yashgupta015120"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/saubhagya-gupta-2aa786378"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:yash.gupta.015120@gmail.com"
            className="hover:text-amber-200 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors ml-2"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
