import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills & Tech', href: '#skills' },
    { name: 'Hackathon', href: '#hackathon' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c10]/65 backdrop-blur-xl border-b border-[#d4af37]/15 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display font-bold text-lg sm:text-xl tracking-wider text-white hover:text-[#d4af37] transition-colors whitespace-nowrap"
        >
          SAUBHAGYA GUPTA
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#f5deb3] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-amber-200 border border-[#d4af37]/40 rounded-lg hover:bg-[#d4af37]/10 transition-colors whitespace-nowrap"
          >
            <span>Resume / CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="mailto:yash.gupta.015120@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-black bg-gradient-to-r from-[#f5deb3] via-[#d4af37] to-[#c59e30] rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gray-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111218] border-b border-amber-900/30 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-200 hover:text-[#d4af37] py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="text-xs text-amber-200 font-semibold"
            >
              View Resume Summary
            </button>
            <a
              href="mailto:yash.gupta.015120@gmail.com"
              className="text-xs text-[#d4af37] font-semibold"
            >
              yash.gupta.015120@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
