/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ProgressiveBlur } from './components/ProgressiveBlur';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { JourneySection } from './components/JourneySection';
import { SkillMatrix } from './components/SkillMatrix';
import { CodePlayground } from './components/CodePlayground';
import { HackathonShowcase } from './components/HackathonShowcase';
import { ProjectsSection } from './components/ProjectsSection';
import { FutureScope } from './components/FutureScope';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0b0c10] text-[#e6e6ea] font-sans overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-white">
      {/* Elegant Gold Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Viewport Progressive Optical Blur System (Top & Bottom) */}
      <ProgressiveBlur position="both" />

      {/* 3D WebGL Spatial Background */}
      <ThreeCanvas />

      {/* Primary Top Bar Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10 space-y-12">
        {/* Editorial Luxury Hero Section with Circular Avatar and Scroll Fade Effects */}
        <HeroSection onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* The Engineering Odyssey / Journey */}
        <JourneySection />

        {/* Skill Matrix (Python Complete, C++ Practicing, AIML) */}
        <SkillMatrix />

        {/* Interactive Neural Perceptron & C++ Binary Search Sandbox */}
        <CodePlayground />

        {/* Odoo x NMIT Hackathon Spotlight */}
        <HackathonShowcase />

        {/* Projects Showcase */}
        <ProjectsSection />

        {/* Future Scope & Opportunity Radar */}
        <FutureScope />

        {/* Contact Channel & Connect */}
        <ContactSection />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
