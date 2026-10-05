import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subjectCategory, setSubjectCategory] = useState('Internship Opportunity');
  const [message, setMessage] = useState('');

  const email = 'yash.gupta.015120@gmail.com';
  const githubUrl = 'https://github.com/yashgupta015120';
  const linkedinUrl = 'https://linkedin.com/in/saubhagya-gupta-2aa786378';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(`[${subjectCategory}] from ${senderName || 'Portfolio Visitor'}`);
    const encodedBody = encodeURIComponent(
      `Hello Saubhagya,\n\n${message || 'I came across your portfolio and would like to connect.'}\n\nBest regards,\n${senderName || 'A Collaborator'}`
    );
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-widest uppercase mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>05. Communication Channel</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Initiate Contact & Connect
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Whether for software internships, AI research collaborations, or hackathon teams — feel free to reach out directly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="luxury-card rounded-2xl p-6 border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase text-gray-400">Primary Email</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${email}`}
              className="text-base sm:text-lg font-mono font-medium text-white hover:text-[#d4af37] transition-colors break-all"
            >
              {email}
            </a>
            <p className="text-xs text-gray-400 mt-2">
              Typically responds within 24 hours for internship and project inquiries.
            </p>
          </div>

          {/* GitHub Card */}
          <div className="luxury-card rounded-2xl p-6 border border-white/10 hover:border-[#d4af37]/40 transition-all flex items-center justify-between group">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#d4af37] transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 block">GitHub Profile</span>
                <span className="text-sm font-semibold text-white">yashgupta015120</span>
              </div>
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Open GitHub"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="luxury-card rounded-2xl p-6 border border-white/10 hover:border-blue-400/40 transition-all flex items-center justify-between group">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-950/40 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 block">LinkedIn Profile</span>
                <span className="text-sm font-semibold text-white">Saubhagya Gupta</span>
              </div>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Open LinkedIn"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Composer */}
        <div className="lg:col-span-7 luxury-card rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
            <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            <h3 className="font-display font-semibold text-base text-white">
              Compose Direct Message
            </h3>
          </div>

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-gray-300 block mb-1.5">
                Your Name / Organization
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Alex Sharma / Tech Recruiter / Founder"
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
                required
              />
            </div>

            <div>
              <label className="text-xs font-mono text-gray-300 block mb-1.5">
                Inquiry Topic
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'Internship Opportunity',
                  'Hackathon Collab',
                  'Research / AI',
                  'General Connect',
                ].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSubjectCategory(cat)}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all truncate ${
                      subjectCategory === cat
                        ? 'bg-[#d4af37]/20 border-[#d4af37] text-white font-semibold'
                        : 'bg-black/30 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-gray-300 block mb-1.5">
                Your Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share project details, timelines, internship terms, or questions..."
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] resize-none"
                required
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-gray-400 text-center sm:text-left">
                Launches your default mail application pre-configured with Yash&apos;s email address.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
