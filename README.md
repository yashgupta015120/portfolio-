

# ✨ Saubhagya Gupta Portfolio

<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&pause=1000&color=F7D774&center=true&vCenter=true&width=700&lines=AI+%7C+Software+Developer;React+%7C+TypeScript+%7C+Three.js;Portfolio+showcasing+work%2C+skills%2C+and+vision" alt="Typing SVG" />

  <br/>

  <img alt="Portfolio Preview" src="https://img.shields.io/badge/Portfolio-Modern-dark?style=for-the-badge&logo=vercel&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-4.x-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" />

</div>

```text
╔══════════════════════════════════════════════════════════════╗
║   SAUBHAGYA GUPTA                                            ║
║   AI / ML • SOFTWARE DEVELOPMENT • FUTURE-READY ENGINEER     ║
╚══════════════════════════════════════════════════════════════╝
```

This portfolio is a premium single-page personal website built to present my journey, skills, projects, hackathon experiences, and technical personality in a polished and modern way. The design combines luxury dark aesthetics, glassmorphism panels, and immersive motion/3D visuals to feel futuristic and high-end.

---

## 🚀 Tech Stack Used

### Core Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- HTML5 + CSS3

### Visual / Motion / 3D
- Three.js
- canvas-confetti
- lucide-react icons
- custom CSS gradients, blur, and glow effects
- scroll-driven motion and animated UI

### Overall Architecture
- Component-based React structure
- Single-page portfolio layout
- Responsive modern design
- Interactive sections and modal-based experiences

---

## 🧩 How the Website Is Built

The whole app is organized around a clean component architecture in `src/`:

```text
src/
├── App.tsx                  # main page shell and section composition
├── index.css                # global styling, gradients, blur, theme tokens
├── main.tsx                 # app entry point
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── JourneySection.tsx
│   ├── SkillMatrix.tsx
│   ├── CodePlayground.tsx
│   ├── HackathonShowcase.tsx
│   ├── ProjectsSection.tsx
│   ├── FutureScope.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── ResumeModal.tsx
│   ├── InteractiveTerminal.tsx
│   ├── ThreeCanvas.tsx
│   ├── ScrollProgressBar.tsx
│   ├── ProgressiveBlur.tsx
│   └── CircularProfile.tsx
└── types/
    └── index.ts
```

### Main composition flow

`App.tsx` acts as the main orchestrator and renders all major sections in one flowing experience:

- Navbar
- Hero section
- Journey
- Skill matrix
- Code playground
- Hackathon showcase
- Projects
- Future scope
- Contact
- Footer
- Resume modal
- Terminal modal

This makes the portfolio modular, easy to edit, and scalable for future additions.

---

## 🎨 What Makes It Look Cool

### 1. Luxury dark theme
- black / charcoal background
- gold accent branding
- premium editorial-like layout

### 2. Glassmorphism cards
- translucent panels
- soft blur
- soft borders and highlight layers

### 3. 3D animated background
`ThreeCanvas.tsx` creates a futuristic geometric background using Three.js with:
- wireframe icosahedron shapes
- glowing particles
- orbital ring motion
- interactive mouse-based movement

### 4. Motion and scroll effects
- smooth scroll progress bar
- fade/slide transitions
- layered visual depth
- subtle animation for a premium UX

### 5. Interactive UI elements
- terminal-style modal
- resume pop-up
- contact buttons and social links
- confetti celebration effect in hackathon section

---

## 🧠 Component Breakdown

### `src/App.tsx`
Top-level component controlling the full page flow and modal states.

### `src/components/HeroSection.tsx`
Introductory landing area with:
- profile branding
- name and tagline
- social links
- experience highlights
- scroll-based transitions

### `src/components/ThreeCanvas.tsx`
3D visual layer that gives the experience a futuristic AI look.

### `src/components/SkillMatrix.tsx`
Displays technical strengths and subject areas like AI, Python, C++, and software development.

### `src/components/CodePlayground.tsx`
Adds a more technical and hands-on interactive feel to the portfolio.

### `src/components/HackathonShowcase.tsx`
Celebrates achievements and hackathon participation with a lively, energetic design.

### `src/components/ProjectsSection.tsx`
Presents featured work and technical outcomes.

### `src/components/FutureScope.tsx`
Outlines ambitions, future goals, and direction in AI/software engineering.

### `src/components/ContactSection.tsx`
Provides contact and networking access.

### `src/components/ResumeModal.tsx`
Opens a resume-focused modal for profile summary and career details.

### `src/components/InteractiveTerminal.tsx`
Adds a developer-console style theme to make the site more personal and technical.

---

## 💎 Styling System

Global design is handled mainly in `src/index.css` using Tailwind and custom CSS utilities:

- custom font definitions
- gold gradient text
- layered card surfaces
- blur overlays
- elegant scrollbars
- cinematic background effects

This gives the site a consistent premium design without creating an overly heavy design system.

---

## ▶️ Run Locally

### Prerequisites
- Node.js
- npm

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Start the app
```bash
npm run dev
```

### Step 3: Open in browser
Visit:
- http://localhost:3000

### Optional: Build for production
```bash
npm run build
```

### Optional: Type check
```bash
npm run lint
```

> The app is configured to run on port 3000 for local preview.

---

## 🌐 AI Studio Link

Open the live app here:

https://saubhagya-gupta-ai-ml-software-engineer-portfolio.ai.studio

---

## 🌟 Summary

This project is a modern portfolio website built with:

- React for the component structure
- TypeScript for safer development
- Vite for a fast dev workflow
- Tailwind CSS for styling
- Three.js for 3D animation
- custom CSS for premium visual polish


