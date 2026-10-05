import React from 'react';
import { BookOpen, Code2, Cpu, Trophy, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const milestones = [
    {
      step: '01',
      title: 'Foundations & Python Mastery',
      tagline: 'From First Principles to Scalable Systems',
      description:
        'Commenced B.Tech studies with an intensive immersion in Python. Completed advanced OOP, asynchronous execution, and data science libraries (NumPy, Pandas, Scikit-Learn). Built automation scripts, scrapers, and data pipelines to turn theoretical mathematics into working code.',
      icon: Code2,
      status: 'Completed & Applied',
      statusColor: 'text-emerald-400',
    },
    {
      step: '02',
      title: 'Algorithmic Rigor in C++',
      tagline: 'Pointer Arithmetic, Memory & Computational Complexity',
      description:
        'Transitioned into disciplined daily practice in modern C++. Mastering the Standard Template Library (STL), memory management, binary search, tree traversals, dynamic programming, and competitive problem-solving patterns.',
      icon: Cpu,
      status: 'Active Daily Practice',
      statusColor: 'text-amber-400',
    },
    {
      step: '03',
      title: 'The Odoo x NMIT Hackathon Sprint',
      tagline: 'High-Pressure Innovation & Team Execution',
      description:
        'Selected to compete in the prestigious Odoo x NMIT Hackathon. Collaborated in an intense multi-hour coding marathon to conceptualize, design, and deliver modular business automation workflows, earning invaluable industry-level experience.',
      icon: Trophy,
      status: 'Delivered & Recognized',
      statusColor: 'text-purple-400',
    },
    {
      step: '04',
      title: 'Expanding Future Horizons',
      tagline: 'Open for High-Impact Scope & Internships',
      description:
        'Actively preparing for industry internships, open-source AI initiatives, and research endeavors in machine learning and systems engineering. Seeking ambitious engineering teams to build software that scales.',
      icon: Compass,
      status: 'Horizon Target',
      statusColor: 'text-[#d4af37]',
    },
  ];

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-widest uppercase mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>The Engineering Odyssey</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Every Engineer Has a Story
        </h2>
        <p className="mt-2 text-sm text-gray-400 max-w-xl">
          A progression from curiosity-driven code to structured algorithm design, hackathon crucible, and future technological frontiers.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="luxury-card rounded-2xl p-6 border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header metadata */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pb-2 border-b border-white/5">
                  <span className="font-mono text-lg font-extrabold text-[#d4af37]">
                    {item.step}
                  </span>
                  <span className={`font-mono text-[11px] ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 group-hover:text-[#d4af37] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-amber-100/70 font-medium mt-1">
                  {item.tagline}
                </p>

                <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Verified Milestones</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
