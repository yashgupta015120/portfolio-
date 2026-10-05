import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState<Array<{ cmd: string; res: string | string[] }>>([
    {
      cmd: 'init',
      res: [
        'Welcome to Saubhagya (Yash) Gupta — Developer Console v2.0',
        'Type "help" to view available commands, or explore Python, C++, AIML, and Hackathon stats.',
      ],
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    if (!rawCmd) return;

    const cmdLower = rawCmd.toLowerCase();
    let res: string | string[] = '';

    switch (cmdLower) {
      case 'help':
        res = [
          'Available commands:',
          '  about       - Background, education, and credentials',
          '  python      - Python mastery, projects, and certifications',
          '  cpp         - C++ practice status and data structures focus',
          '  aiml        - Machine learning & neural networks research',
          '  hackathon   - Odoo x NMIT Hackathon details and sprint learnings',
          '  scope       - Future aspirations and internship availability',
          '  github      - Yash Gupta’s GitHub repository profile',
          '  linkedin    - Saubhagya Gupta’s professional LinkedIn',
          '  email       - Direct contact email',
          '  clear       - Clear terminal window',
          '  exit        - Close terminal interface',
        ];
        break;

      case 'about':
        res = [
          'NAME: Saubhagya (Yash) Gupta',
          'EDUCATION: B.Tech Computer Science & Engineering (AIML)',
          'FOCUS: Computational Systems, Algorithmic Optimization, Deep Learning',
          'LOCATION: India (IST UTC+5:30)',
          'MISSION: Building scalable systems and intelligent software with high rigor.',
        ];
        break;

      case 'python':
        res = [
          '[STATUS: 100% COMPLETE & VERIFIED]',
          '- Object-Oriented, Functional & Async Python programming',
          '- Data Analysis: Pandas, NumPy, Scikit-learn',
          '- Scripting, Web Scraping, REST APIs, Automation',
          '- Multiple deployed projects and end-to-end pipelines.',
        ];
        break;

      case 'cpp':
        res = [
          '[STATUS: ACTIVE DAILY PRACTICE]',
          '- Modern C++ (C++17/20), pointer arithmetic, memory layouts',
          '- Standard Template Library (STL): vector, map, set, priority_queue',
          '- Graphs, Trees, Dynamic Programming, Two Pointers',
          '- Optimization for O(N log N) time and minimal memory overhead.',
        ];
        break;

      case 'aiml':
        res = [
          '[STATUS: ACADEMIC & RESEARCH FOCUS]',
          '- Neural Networks, Perceptrons, Backpropagation',
          '- PyTorch tensors, autograd, and vision/NLP architectures',
          '- Supervised/unsupervised training pipelines, loss optimization',
          '- Applied AI modules for real-world enterprise applications.',
        ];
        break;

      case 'hackathon':
        res = [
          'EVENT: Odoo x NMIT Hackathon',
          'ROLE: Developer & Solution Architect',
          'DELIVERABLE: Modular enterprise workflow automation module',
          'HIGHLIGHT: Rapid agile prototyping and collaborative Git under 24h sprint.',
        ];
        break;

      case 'scope':
        res = [
          'STATUS: Actively looking for more scope in future!',
          'AVAILABLE FOR:',
          '  - Software Engineering Internships (Summer/Winter)',
          '  - AI/ML Research & Engineering Internships',
          '  - Open Source contributions and collaborative hackathons.',
        ];
        break;

      case 'github':
        res = 'Opening GitHub: https://github.com/yashgupta015120';
        window.open('https://github.com/yashgupta015120', '_blank');
        break;

      case 'linkedin':
        res = 'Opening LinkedIn: https://linkedin.com/in/saubhagya-gupta-2aa786378';
        window.open('https://linkedin.com/in/saubhagya-gupta-2aa786378', '_blank');
        break;

      case 'email':
        res = 'Direct Email: yash.gupta.015120@gmail.com';
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        res = `Command not recognized: "${rawCmd}". Type "help" for a list of available commands.`;
        break;
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, res }]);
    setInputVal('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className={`bg-[#0a0b0e] border border-[#d4af37]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[560px]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#121319] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#d4af37]" />
            <span className="font-mono text-xs text-gray-300 font-semibold">
              saubhagya@yash-terminal: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10"
              aria-label="Toggle size"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-red-500/20"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Command Output Feed */}
        <div
          className="flex-1 p-4 overflow-y-auto font-mono text-xs text-gray-300 space-y-3 cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#d4af37]">
                <span>➜</span>
                <span className="text-gray-400">~/yash-portfolio $</span>
                <span className="text-white font-semibold">{item.cmd}</span>
              </div>
              <div className="pl-5 text-gray-300 leading-relaxed whitespace-pre-wrap">
                {Array.isArray(item.res) ? (
                  item.res.map((line, lIdx) => (
                    <div key={lIdx} className={line.startsWith('[') ? 'text-amber-300 font-semibold' : ''}>
                      {line}
                    </div>
                  ))
                ) : (
                  <div>{item.res}</div>
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Line */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 bg-[#101117] border-t border-white/10"
        >
          <span className="text-[#d4af37] font-mono text-xs select-none">➜</span>
          <span className="text-gray-500 font-mono text-xs select-none">~/yash-portfolio $</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' and press Enter..."
            className="flex-1 bg-transparent text-white font-mono text-xs outline-none border-none placeholder-gray-600"
            autoFocus
          />
          <button
            type="submit"
            className="p-1 text-gray-400 hover:text-[#d4af37]"
            title="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
