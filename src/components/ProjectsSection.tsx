import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Code2, Layers, Sparkles, X, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'hackathon-odoo',
      title: 'Enterprise Workflow & Business Automation Module',
      category: 'hackathon',
      tagline: 'Odoo x NMIT Hackathon Innovation Sprint',
      description:
        'A modular Python automation system engineered during the Odoo x NMIT Hackathon. Built custom models to synchronize multi-department inventory flow and generate predictive restock signals using linear forecasting.',
      techStack: ['Python', 'PostgreSQL', 'RESTful APIs', 'Data Modeling', 'Git'],
      metrics: 'Designed & delivered in <24h sprint with complete schema normalization',
      githubUrl: 'https://github.com/yashgupta015120',
      featured: true,
    },
    {
      id: 'cpp-graph-engine',
      title: 'C++ Algorithmic Pathfinding & Graph Engine',
      category: 'cpp',
      tagline: 'High-performance memory-optimized route calculation',
      description:
        'Engineered an optimized C++ implementation of Dijkstra and A* pathfinding on large-scale adjacency lists. Implemented custom Min-Heap and disjoint-set structures with cache-friendly contiguous arrays.',
      techStack: ['C++20', 'STL', 'Algorithm Design', 'Memory Management', 'Benchmarking'],
      metrics: 'Processes 100k vertex traversals in sub-millisecond execution time',
      githubUrl: 'https://github.com/yashgupta015120',
      featured: true,
    },
    {
      id: 'neural-vision-classifier',
      title: 'Deep Learning Vision Classifier & Feature Analyzer',
      category: 'aiml',
      tagline: 'Convolutional neural network for image recognition & saliency mapping',
      description:
        'Designed and trained an image recognition neural pipeline using PyTorch. Incorporated batch normalization, dropout regularization, and visual activation heatmaps to inspect learned spatial representations.',
      techStack: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Matplotlib'],
      metrics: '94.2% test validation accuracy across multi-class benchmark dataset',
      githubUrl: 'https://github.com/yashgupta015120',
      featured: true,
    },
    {
      id: 'python-data-pipeline',
      title: 'Automated High-Throughput Web & ETL Pipeline',
      category: 'python',
      tagline: 'Robust multi-threaded scraping and analytical dataset generation',
      description:
        'End-to-end Python pipeline extracting, parsing, and normalizing unstructured web data into analytical parquet stores. Includes automated error retry, rate-limiting, and validation schemas.',
      techStack: ['Python', 'Pandas', 'BeautifulSoup', 'Asyncio', 'Regex'],
      metrics: 'Processed and cleaned over 50,000 tabular records with zero downtime',
      githubUrl: 'https://github.com/yashgupta015120',
    },
    {
      id: '3d-portfolio-engine',
      title: 'Interactive 3D Engineering Portfolio Dashboard',
      category: 'aiml',
      tagline: 'Spatial WebGL canvas and dynamic scroll typography system',
      description:
        'A high-performance modern web dashboard built with Three.js WebGL particle simulations, dynamic scroll-linked typography transforms, and responsive mobile architecture.',
      techStack: ['TypeScript', 'Three.js', 'React', 'Tailwind CSS', 'Motion'],
      metrics: '60 FPS silky smooth 3D rendering with WCAG AA accessibility',
      githubUrl: 'https://github.com/yashgupta015120',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-widest uppercase mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>03. Engineering Portfolio</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Featured Projects & Implementations
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Selected works demonstrating production-ready Python coding, C++ optimization, and AI model implementations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-6 md:mt-0 flex flex-wrap items-center p-1 bg-[#13141c] border border-white/10 rounded-xl">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'hackathon', label: 'Hackathon' },
            { id: 'python', label: 'Python' },
            { id: 'cpp', label: 'C++' },
            { id: 'aiml', label: 'AIML' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="luxury-card rounded-2xl p-6 border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div>
              {/* Unboxed Metadata Header (Zero-Pill Compliant) */}
              <div className="flex items-center justify-between text-xs text-gray-400 mb-3 pb-2 border-b border-white/5">
                <span className="text-[#d4af37] uppercase font-mono tracking-wider font-semibold">
                  {project.category}
                </span>
                <span className="text-gray-400 font-mono text-[11px]">Details &gt;</span>
              </div>

              <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-200 transition-colors">
                {project.title}
              </h3>
              
              <p className="mt-1 text-xs text-amber-100/70 font-medium">
                {project.tagline}
              </p>

              <p className="mt-3 text-xs text-gray-300 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              {/* Unboxed tech stack tags separated by dots */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-gray-400 mb-3 font-mono">
                {project.techStack.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="text-gray-300">{tech}</span>
                    {idx < project.techStack.length - 1 && (
                      <span className="text-gray-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-[#d4af37] hover:underline font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#13141c] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                  {selectedProject.category}
                </span>
                <span className="text-gray-500">·</span>
                <span className="text-xs text-gray-400">Engineering Deep Dive</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-1 text-sm text-amber-200/90 font-medium">
                  {selectedProject.tagline}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Architecture & Implementation
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.metrics && (
                <div className="p-4 rounded-xl bg-black/50 border border-amber-500/20">
                  <span className="text-xs font-mono text-[#d4af37] block mb-1">
                    Quantified Outcome / Impact
                  </span>
                  <p className="text-sm text-white font-medium">
                    {selectedProject.metrics}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Technologies Leveraged
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold text-xs hover:brightness-110 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Open Repository on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
