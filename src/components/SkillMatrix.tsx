import React, { useState } from 'react';
import { CheckCircle2, Flame, Brain, Cpu, Code2, Layers, BookOpen, Sparkles } from 'lucide-react';

export const SkillMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'python' | 'cpp' | 'aiml'>('all');

  const technicalPillars = [
    {
      id: 'python',
      title: 'Python Core & Data Science',
      badge: 'Completed & Certified',
      status: 'Mastered Foundations',
      statusColor: 'text-emerald-400',
      icon: Code2,
      summary:
        'Thoroughly completed foundational and advanced Python, building automated workflows, data wrangling pipelines, and scientific algorithms.',
      highlights: [
        'Advanced Object-Oriented & Functional Python (Decorators, Generators, Context Managers)',
        'NumPy & Pandas for matrix operations and high-throughput dataframe transformations',
        'Scikit-Learn implementation of classification, regression, and clustering algorithms',
        'Automation scripts, Web Scraping (BeautifulSoup/Selenium), and API integration',
        'Clean code conventions, PEP 8 compliance, and modular package architecture',
      ],
      progress: 100,
    },
    {
      id: 'cpp',
      title: 'C++ Systems & Algorithmic Problem Solving',
      badge: 'Currently Practicing',
      status: 'Daily Problem Solving',
      statusColor: 'text-amber-400',
      icon: Cpu,
      summary:
        'Rigorous daily practice in modern C++ (C++17/20), sharpening memory management, data structures, and competitive problem-solving speed.',
      highlights: [
        'Memory management: Raw pointers, references, smart pointers (unique/shared/weak)',
        'Standard Template Library (STL): Vectors, maps, sets, priority queues, iterators',
        'Data Structures: Balanced Trees, Disjoint Set Union (DSU), Graphs, Heaps',
        'Algorithm paradigms: Divide & Conquer, Two Pointers, Dynamic Programming, Greedy',
        'Time & Space complexity optimization (O(N log N) to O(1) space tricks)',
      ],
      progress: 75,
    },
    {
      id: 'aiml',
      title: 'AI, Machine Learning & Neural Networks',
      badge: 'Academic Specialization',
      status: 'Core B.Tech Focus',
      statusColor: 'text-purple-400',
      icon: Brain,
      summary:
        'Deep study and practical implementation of computational intelligence, training neural models, and exploring deep learning architectures.',
      highlights: [
        'Mathematical foundations: Linear Algebra, Multivariate Calculus, Probability & Bayes Theorem',
        'Supervised & Unsupervised Learning pipelines (Loss functions, Gradient Descent, Overfitting mitigation)',
        'Neural Network fundamentals: Perceptrons, Multi-Layer Perceptrons (MLP), Backprop calculus',
        'Computer Vision fundamentals with OpenCV and Convolutional filters',
        'Exploration of PyTorch tensors, autograd engines, and transformer attention mechanisms',
      ],
      progress: 68,
    },
  ];

  const filteredPillars =
    activeTab === 'all'
      ? technicalPillars
      : technicalPillars.filter((p) => p.id === activeTab);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. Technical Proficiency</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Curated Skill Architecture
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            From complete proficiency in Python to high-octane practice in C++ algorithms and specialized research in Artificial Intelligence.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="mt-6 md:mt-0 flex items-center p-1 bg-[#13141c] border border-white/10 rounded-xl">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All Disciplines
          </button>
          <button
            onClick={() => setActiveTab('python')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'python'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Python (Complete)
          </button>
          <button
            onClick={() => setActiveTab('cpp')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'cpp'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            C++ (Practicing)
          </button>
          <button
            onClick={() => setActiveTab('aiml')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'aiml'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            AIML
          </button>
        </div>
      </div>

      {/* Grid of Skill Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredPillars.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="luxury-card rounded-2xl p-6 border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Unboxed Metadata Header (Zero-Pill Rule Compliant) */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-[#d4af37]" />
                    <span className="font-semibold text-gray-300">{pillar.badge}</span>
                  </div>
                  <span className={`font-mono text-xs ${pillar.statusColor}`}>
                    {pillar.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                  {pillar.summary}
                </p>

                {/* Progress Bar with Tabular Numeral */}
                <div className="mt-5 mb-6">
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-gray-400">Mastery Arc</span>
                    <span className="text-[#d4af37] tabular-nums font-semibold">
                      {pillar.progress}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-[#d4af37] to-[#f5deb3] rounded-full transition-all duration-700"
                      style={{ width: `${pillar.progress}%` }}
                    />
                  </div>
                </div>

                {/* Checklist with clean typographic bullet */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                    Key Competencies
                  </span>
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <span className="text-[#d4af37] mt-0.5 select-none font-bold">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Metric or Reflection */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified hands-on code
                </span>
                <span className="font-mono text-amber-200/80">Active</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Development Milestones Timeline Bar */}
      <div className="mt-12 p-6 rounded-2xl bg-[#12131a] border border-[#d4af37]/20">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-[#d4af37]" />
          <h4 className="font-display font-semibold text-sm text-white">
            Current Learning Sprints & Engineering Roadmap
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20">
            <span className="text-emerald-400 font-mono font-medium block mb-1">
              Phase 1 · Complete
            </span>
            <p className="text-gray-300 font-medium">Python Foundations & Automation</p>
            <p className="text-gray-400 text-[11px] mt-1">
              Comprehensive syntax, data structures, scripting, OOP, and data pipelines built and deployed.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20">
            <span className="text-amber-400 font-mono font-medium block mb-1">
              Phase 2 · Active Focus
            </span>
            <p className="text-gray-300 font-medium">C++ Algorithms & LeetCode Practice</p>
            <p className="text-gray-400 text-[11px] mt-1">
              Daily practice with pointers, tree traversals, memory constraints, and high-performance algorithms.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20">
            <span className="text-purple-400 font-mono font-medium block mb-1">
              Phase 3 · AIML Deep Dive
            </span>
            <p className="text-gray-300 font-medium">Neural Networks & Real-world AI</p>
            <p className="text-gray-400 text-[11px] mt-1">
              Building vision and NLP models, participating in AI hackathons, and preparing for research/internships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
