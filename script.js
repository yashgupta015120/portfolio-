// ==========================================================================
// Saubhagya Gupta Portfolio Interactivity
// Vanilla JavaScript (TypeScript compatible)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Particle Constellation Canvas
  initBackgroundCanvas();

  // 2. Typewriter Effect
  initTypewriter();

  // 3. Stats Counter on Scroll
  initScrollCounters();

  // 4. Interactive 3D Card Tilt on Hero Portrait
  initCardTilt();

  // 5. Interactive VS Code Terminal Simulator
  initTerminal();

  // 6. Dayflow Architecture Modal Controls
  initModal();

  // 7. One-click Email Copy & Toast Notification
  initEmailCopy();

  // 8. Contact Form Simulation
  initContactForm();
});

// --- 1. Background Particle System ---
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 1
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(render);
  }
  render();
}

// --- 2. Typewriter Effect ---
function initTypewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const phrases = [
    "Python Developer",
    "C++ & DSA Learner",
    "Odoo x NMIT Hackathon Finalist",
    "Creator of Dayflow HRMS",
    "VS Code Power User"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeCycle() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(typeCycle, delay);
  }
  typeCycle();
}

// --- 3. Scroll Animated Counters & Skill Bars ---
function initScrollCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  const skillBars = document.querySelectorAll('.bar-fill');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate stat counters
        if (entry.target.classList.contains('stat-number')) {
          const target = +entry.target.getAttribute('data-count');
          let current = 0;
          const step = Math.ceil(target / 15) || 1;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              entry.target.textContent = target;
              clearInterval(timer);
            } else {
              entry.target.textContent = current;
            }
          }, 60);
          obs.unobserve(entry.target);
        }

        // Animate skill bars
        if (entry.target.classList.contains('bar-fill')) {
          entry.target.style.width = entry.target.style.getPropertyValue('--percent');
          obs.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => observer.observe(el));
  skillBars.forEach(el => observer.observe(el));
}

// --- 4. 3D Card Tilt for Portrait ---
function initCardTilt() {
  const card = document.getElementById('tilt-card');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / rect.height) * 12;
    const rotY = (x / rect.width) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
}

// --- 6. Terminal Interactive Simulation ---
function initTerminal() {
  const input = document.getElementById('terminal-cmd');
  const output = document.getElementById('term-output');
  const quickBtns = document.querySelectorAll('.quick-cmd-btn');

  const commandResponses = {
    help: "Available commands: 'about', 'python', 'cpp', 'vscode', 'dayflow', 'clear'",
    about: "Saubhagya Gupta | Software Developer | KIET Deemed to be University CS Department",
    python: "[Python 3.12] Executing backend script... Output: Automation workflow verified.",
    cpp: "[g++ -O3 solution.cpp] Compilation complete (0 warnings). Optimized DSA complexity: O(N log N).",
    vscode: "Extensions: Python, C/C++, GitLens, Live Server. Environment: Ready.",
    dayflow: "[Dayflow HRMS v1.0] Odoo x NMIT Hackathon Build. Modules: Employee Directory, Leave Request Engine.",
    clear: "CLEAR"
  };

  function executeCmd(cmdText) {
    const raw = cmdText.trim().toLowerCase();
    if (!raw) return;

    if (raw === 'clear') {
      output.innerHTML = '';
      return;
    }

    const lineCmd = document.createElement('div');
    lineCmd.className = 'term-line cmd-echo';
    lineCmd.textContent = `$ ${raw}`;
    output.appendChild(lineCmd);

    const lineOut = document.createElement('div');
    lineOut.className = 'term-line output';
    lineOut.textContent = commandResponses[raw] || `command not found: ${raw}. Type 'help' for commands.`;
    output.appendChild(lineOut);

    output.scrollTop = output.scrollHeight;
  }

  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCmd(input.value);
        input.value = '';
      }
    });
  }

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-run');
      if (cmd) executeCmd(cmd);
    });
  });
}

// --- 7. Modal Handlers ---
function initModal() {
  const openBtn = document.getElementById('open-demo-modal');
  const modal = document.getElementById('modal-container');
  const closeBtn = document.getElementById('modal-close');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.remove('hide'));
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hide'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hide');
    });
  }
}

// --- 8. Email Copy ---
function initEmailCopy() {
  const btn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const email = 'yashgupta015120@gmail.com';

  if (btn) {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        triggerToast('Email copied to clipboard!');
      } catch (err) {
        triggerToast('Email: ' + email);
      }
    });
  }

  function triggerToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('hide');
    setTimeout(() => toast.classList.add('hide'), 2400);
  }
}

// --- 9. Contact Form Simulation ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const recipientEmail = 'yash.gupta.015120@gmail.com';

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-msg').value.trim();

      const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      form.reset();

      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      if (toast) {
        toast.textContent = `Thanks ${name || 'there'}! Your email app is opening with the message.`;
        toast.classList.remove('hide');
        setTimeout(() => toast.classList.add('hide'), 3000);
      }
    });
  }
}
