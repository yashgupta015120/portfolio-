import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Github, Linkedin, Award, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0f1016] border border-[#d4af37]/40 rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#14151e]">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Curriculum Vitae / Resume Summary
            </h3>
            <p className="text-xs text-gray-400">
              Saubhagya (Yash) Gupta · B.Tech AIML Candidate
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-300 text-xs sm:text-sm font-sans">
          
          {/* Header block */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                SAUBHAGYA (YASH) GUPTA
              </h1>
              <p className="text-amber-200 font-medium text-xs mt-1">
                B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)
              </p>
            </div>

            <div className="text-xs space-y-1 font-mono text-gray-400">
              <div>Email: yash.gupta.015120@gmail.com</div>
              <div>GitHub: github.com/yashgupta015120</div>
              <div>LinkedIn: linkedin.com/in/saubhagya-gupta-2aa786378</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              Professional Summary
            </h2>
            <p className="leading-relaxed text-gray-300">
              Ambitious B.Tech AIML undergraduate with demonstrated foundations in algorithmic software development. Completed end-to-end Python curriculum with practical data wrangling and automation expertise. Actively training in C++ algorithmic problem-solving, memory structures, and modern neural network engineering. Participant in the Odoo x NMIT Hackathon, seeking high-scope software engineering and AI internships.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              Education
            </h2>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-semibold text-white">Bachelor of Technology (B.Tech)</h3>
                <p className="text-xs text-gray-400">
                  Computer Science & Engineering — Artificial Intelligence & Machine Learning (AIML)
                </p>
              </div>
              <span className="font-mono text-xs text-amber-200">2023 – 2027 (Expected)</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                <span className="text-emerald-400 font-semibold block mb-1">
                  Python (Complete & Certified)
                </span>
                <p className="text-gray-400">
                  OOP, Functional Programming, NumPy, Pandas, Scikit-Learn, Asyncio, Scraping, REST APIs.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                <span className="text-amber-400 font-semibold block mb-1">
                  C++ (Actively Practicing)
                </span>
                <p className="text-gray-400">
                  STL, Pointers, Memory Models, Graphs, Trees, Dynamic Programming, Time Complexity Optimization.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                <span className="text-purple-400 font-semibold block mb-1">
                  Artificial Intelligence & ML
                </span>
                <p className="text-gray-400">
                  Neural Networks, PyTorch, OpenCV, Loss Functions, Gradient Descent, Computer Vision, NLP.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                <span className="text-blue-400 font-semibold block mb-1">
                  Tools & Environments
                </span>
                <p className="text-gray-400">
                  Git, GitHub, Linux, VS Code, Three.js, React, Tailwind CSS, Docker fundamentals.
                </p>
              </div>
            </div>
          </div>

          {/* Hackathons & Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              Hackathons & Experience
            </h2>
            <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-semibold text-white">Participant & Innovator — Odoo x NMIT Hackathon</h3>
                <span className="font-mono text-xs text-gray-400">Collaborative Sprint</span>
              </div>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Collaborated within a rapid agile sprint to architect and present an enterprise-grade automated workflow module. Delivered modular Python backend integration with real-time state synchronization within an intense 24+ hour hackathon environment.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-[#14151e] flex items-center justify-between">
          <a
            href="mailto:yash.gupta.015120@gmail.com?subject=Interview%20/%20Internship%20Inquiry%20for%20Saubhagya%20(Yash)%20Gupta"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold text-xs hover:brightness-110 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email for Official PDF / Interview</span>
          </a>

          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
