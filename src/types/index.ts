export interface Project {
  id: string;
  title: string;
  category: 'aiml' | 'python' | 'cpp' | 'hackathon';
  tagline: string;
  description: string;
  techStack: string[];
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  status: 'Completed' | 'Practicing' | 'Exploring';
  progress: number;
  highlight: string;
  skills: { name: string; level: number; note: string }[];
}

export interface TerminalCommand {
  command: string;
  output: string | string[];
}
