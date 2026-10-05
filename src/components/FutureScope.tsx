import React from 'react';
import { Compass, Sparkles, Send, CheckCircle2, Briefcase, GraduationCap, Globe, Clock } from 'lucide-react';

export const FutureScope: React.FC = () => {
  const currentYear = 2026;

  const opportunityTracks = [
    {
      role: 'AI / Machine Learning Intern',
      focus: 'Model training pipelines, data preprocessing, PyTorch, computer vision & NLP experiments.',
      status: 'High Priority',
    },
    {
      role: 'Software Development Engineering (SDE) Intern',
      focus: 'C++ algorithmic optimization, Python backend services, API architecture, high reliability.',
      status: 'Open',
    },
    {
      role: 'Hackathon Squads & Open-Source Projects',
      focus: 'Collaborative sprints, open-source repositories, developer tooling, and enterprise automation.',
      status: 'Active',
    },
  ];

  return (
    <section id="scope" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container Frame */}
      <div className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-widest uppercase mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>04. Horizons & Ambition</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Looking for More Scope in Future
            </h2>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed max-w-2xl">
              As a dedicated B.Tech AIML student who has completed comprehensive Python mastery and is vigorously practicing C++ algorithms and neural architectures, I am actively seeking high-impact opportunities to expand my technical horizons.
            </p>

            {/* Opportunity Radar Grid */}
            <div className="mt-8 space-y-3">
              {opportunityTracks.map((track, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-[#d4af37]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h3 className="font-display font-semibold text-sm text-white flex items-center gap-2">
                      <span className="text-[#d4af37]">0{idx + 1}.</span>
                      {track.role}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{track.focus}</p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-medium whitespace-nowrap">
                    ● {track.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Status Board & Direct Connect */}
          <div className="lg:col-span-5 bg-[#0e0f14] p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase text-[#d4af37] tracking-wider">
                  Candidate Telemetry
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available
                </span>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-gray-500" />
                    Degree Program
                  </span>
                  <span className="text-white font-medium">B.Tech in CSE (AIML)</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-gray-500" />
                    Target Timeline
                  </span>
                  <span className="text-amber-200 font-mono">Summer & Winter {currentYear}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-gray-500" />
                    Work Modality
                  </span>
                  <span className="text-white">Remote / Hybrid / On-site</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    Primary Timezone
                  </span>
                  <span className="text-gray-300 font-mono">IST (UTC +5:30)</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-tr from-black via-[#161720] to-[#232014] border border-[#d4af37]/30">
              <p className="text-xs text-amber-100 font-medium mb-3">
                Have an internship, project, or technical opportunity?
              </p>
              <a
                href="mailto:yash.gupta.015120@gmail.com?subject=Exciting%20Opportunity%20for%20Saubhagya%20(Yash)%20Gupta&body=Hi%20Saubhagya,%0A%0AWe%20saw%20your%20portfolio%20and%20are%20interested%20in%20discussing%20an%20opportunity%20with%20you.%0A%0A"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss an Opportunity</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
