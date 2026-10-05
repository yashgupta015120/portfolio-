import React, { useState } from 'react';
import { Award, Zap, Users, Code, Trophy, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HackathonShowcase: React.FC = () => {
  const [celebrated, setCelebrated] = useState(false);

  const handleCelebrate = () => {
    setCelebrated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#f5deb3', '#60a5fa', '#34d399'],
    });
    setTimeout(() => setCelebrated(false), 3000);
  };

  return (
    <section id="hackathon" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-widest uppercase mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>02. Hackathon & Innovation</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Odoo x NMIT Hackathon
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Selected participant in the collaborative hackathon organized by Odoo and NMIT, solving real-world enterprise engineering bottlenecks.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <button
            onClick={handleCelebrate}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#aa842a] to-[#80601d] text-black font-semibold text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{celebrated ? 'Cheers to Innovation!' : 'Celebrate Achievement'}</span>
          </button>
        </div>
      </div>

      {/* Main Hackathon Showcase Bento Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Big Feature Card */}
        <div className="lg:col-span-7 luxury-card rounded-3xl p-8 border border-amber-500/30 flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle golden grid pattern in background */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Zero-Pill Unboxed Metadata */}
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
              <span className="text-[#d4af37] font-semibold">Odoo Enterprise + NMIT</span>
              <span aria-hidden="true">·</span>
              <span>Competitive Hackathon</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-mono">Participated & Presented</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
              Rapid Engineering Under Pressure: Modular Systems & Enterprise Workflows
            </h3>

            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Teamed up with fellow engineers at NMIT to address complex workflow logic inspired by Odoo&apos;s modular ERP ecosystem. Leveraged Python scripting, algorithmic data pipelining, and rapid prototype iteration during high-intensity hackathon hours.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xs font-mono text-gray-400 block mb-1">Duration</span>
                <span className="font-display font-bold text-lg text-white">24+ Hours</span>
                <p className="text-[11px] text-gray-400 mt-1">Non-stop sprint delivery</p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xs font-mono text-gray-400 block mb-1">Core Tech</span>
                <span className="font-display font-bold text-lg text-[#d4af37]">Python / ORM</span>
                <p className="text-[11px] text-gray-400 mt-1">Modular logic & APIs</p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xs font-mono text-gray-400 block mb-1">Focus</span>
                <span className="font-display font-bold text-lg text-white">Enterprise AI</span>
                <p className="text-[11px] text-gray-400 mt-1">Process automation</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-amber-200/90 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Demonstrated teamwork, code agility & high-pressure execution</span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Takeaways & Methodology */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="luxury-card rounded-2xl p-6 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-display font-semibold text-base text-white">
                Agile Rapid Prototyping
              </h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Transitioned from whiteboard problem decomposition to working code, validating data schemas and boundary conditions within tight sprint intervals.
            </p>
          </div>

          <div className="luxury-card rounded-2xl p-6 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-display font-semibold text-base text-white">
                Collaborative Git & Sync
              </h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Coordinated branch management, modular function contracts, and merge reviews with teammates under time-sensitive constraints.
            </p>
          </div>

          <div className="luxury-card rounded-2xl p-6 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="font-display font-semibold text-base text-white">
                Enterprise Architecture Insights
              </h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Gained practical exposure to how modern ERP platforms like Odoo organize data models, views, and relational business controllers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
