/**
 * ==========================================================================
 * WINDOWS TERMINAL CONFIGURATION & INTERACTIVE NOTEBOOK ENGINE
 * ==========================================================================
 * 
 * You can easily edit your About text, sentences, headings, and word colors 
 * right here in this configuration object!
 * 
 * COLOR TAG SYNTAX:
 * Wrap any word or phrase in color tags to style it:
 *   {green}your text{/green}   -> Neon Green
 *   {cyan}your text{/cyan}     -> Tech Cyan
 *   {orange}your text{/orange} -> Vibrant Amber / Orange
 *   {pink}your text{/pink}     -> Manga Coral / Pink
 *   {purple}your text{/purple} -> Electric Violet
 *   {yellow}your text{/yellow} -> Spec Yellow
 *   {accent}your text{/accent} -> Kaizen Accent Color
 *   {white}your text{/white}   -> Bright High-Contrast White
 *   {muted}your text{/muted}   -> Subtle Monospace Gray
 */

window.TERMINAL_ABOUT_CONFIG = {
  // Terminal Version Header
  version: "PowerShell 7.6.3",

  // Left ASCII Art (Customizable character / manga artwork)
  asciiArt: `
               ·+·                   :-
        _     +**+·.                =##-
       .##    +*********+          +#####+
     ·+****- -+***********-     ·+********#:
    .********=-###=·.·-***·=- *** -=-:·=****
     =###*: ··· **. :*###+ -··++= -####*:
    :      ·+####:  *+. :--. ·+·+####-
   **:     **#+  =+           ·*#::+###. ·=**#-
 .###***=: +#=-·.+.     -*    ·-==  -=·-+#***#=
  ·#####+***=·..=###   +####  .**:  -***=·:
   +####=·-+*#=-.####··+####*: ***  -·-#####*.
    =########*:.####=-+######==#######-:=***#:
      :·=#####=· *** ·+######=·+·++::*****=
        .·+####= .·=#########:+.  -####-
          ·-####=·:=-··+-*. -####=-+####-
           -**********· .:-+:-·=############+
          .·+*********=· -######=-.##:
            =##########=- -###=====**#
                         .·+###
                            :
  `,

  // Main Greeting Heading (use color tags to change colors on certain words!)
  greeting: "Hey, {white}Alexander Vance{/white} {green}// Software Architect{/green}",

  // About Me & Bio Sections (Sentence-driven instead of hardware metrics)
  sections: [
    {
      title: "── About Me // 自己紹介 ────────────────────────────────────────",
      titleColor: "cyan",
      content: "I design and build {accent}resilient cloud architectures{/accent}, real-time distributed backends, and {orange}editorial high-fps web interfaces{/orange}. Focused on precision engineering with relentless attention to detail."
    },
    {
      title: "── Core Philosophy // 信条 ────────────────────────────────────",
      titleColor: "green",
      content: "Practicing {pink}Kaizen (改善){/pink} — continuous 1% daily refinement. Code should be as {cyan}clean as physical architecture{/cyan}, as resilient as iron, and as responsive as thought."
    },
    {
      title: "── Engineering Profile // 概要 ─────────────────────────────────",
      titleColor: "yellow",
      rows: [
        { label: "ROLE", labelColor: "green", val: "Full-Stack Architect & Systems Technologist" },
        { label: "STACK", labelColor: "green", val: "TypeScript, Next.js 15, React 19, Go, Node.js, PostgreSQL" },
        { label: "LOCATION", labelColor: "green", val: "San Francisco, CA {cyan}[Remote Worldwide Available]{/cyan}" },
        { label: "STATUS", labelColor: "green", val: "{green}● ONLINE{/green} // Accepting Contract Builds & Leadership" }
      ]
    },
    {
      title: "── Session Telemetry // 接続 ───────────────────────────────────",
      titleColor: "purple",
      rows: [
        { label: "SESSION", labelColor: "yellow", val: "Alexander // Kaizen V2.4 Active" },
        { label: "UPTIME", labelColor: "yellow", val: "99.99% // Continuous Refinement Loop" }
      ]
    }
  ],

  // Bottom Quote & Terminal Color Dots
  quote: "Bonsoir! Elliot. // Ready for next deployment.",
  paletteDots: ['#f8fafc', '#38bdf8', '#3b82f6', '#c084fc', '#facc15', '#4ade80', '#f43f5e'],

  // Prompt Line Path
  promptUser: "PS C:\\Users\\Alexander>"
};

(function () {
  'use strict';

  // Helper to parse {color}word{/color} tags into HTML spans
  function parseColorTags(text) {
    if (!text) return '';
    return text
      .replace(/\{green\}(.*?)\{\/green\}/g, '<span class="term-c-green">$1</span>')
      .replace(/\{cyan\}(.*?)\{\/cyan\}/g, '<span class="term-c-cyan">$1</span>')
      .replace(/\{orange\}(.*?)\{\/orange\}/g, '<span class="term-c-orange">$1</span>')
      .replace(/\{pink\}(.*?)\{\/pink\}/g, '<span class="term-c-pink">$1</span>')
      .replace(/\{purple\}(.*?)\{\/purple\}/g, '<span class="term-c-purple">$1</span>')
      .replace(/\{yellow\}(.*?)\{\/yellow\}/g, '<span class="term-c-yellow">$1</span>')
      .replace(/\{accent\}(.*?)\{\/accent\}/g, '<span class="term-c-accent">$1</span>')
      .replace(/\{white\}(.*?)\{\/white\}/g, '<span class="term-c-white">$1</span>')
      .replace(/\{muted\}(.*?)\{\/muted\}/g, '<span class="term-c-muted">$1</span>');
  }

  // Render Dynamic Read-Only Tab 1 View from Configuration
  function renderMainTerminalTab() {
    const container = document.getElementById('tab-pwsh-main');
    if (!container) return;

    const cfg = window.TERMINAL_ABOUT_CONFIG;

    let sectionsHtml = '';
    if (cfg.sections && Array.isArray(cfg.sections)) {
      cfg.sections.forEach((sec) => {
        let secBody = '';
        if (sec.content) {
          secBody = `<div class="term-bio-sentence font-mono">${parseColorTags(sec.content)}</div>`;
        } else if (sec.rows && Array.isArray(sec.rows)) {
          secBody = sec.rows.map((r) => `
            <div class="spec-row-term">
              <span class="term-lbl-${r.labelColor || 'green'}">${r.label}</span>
              <span class="term-val-white">${parseColorTags(r.val)}</span>
            </div>
          `).join('');
        }

        sectionsHtml += `
          <div class="term-boxed-spec">
            <div class="box-title-tag title-${sec.titleColor || 'cyan'} font-mono">${sec.title}</div>
            ${secBody}
            <div class="box-bottom-line">─────────────────────────────────────────────────────</div>
          </div>
        `;
      });
    }

    const dotsHtml = (cfg.paletteDots || []).map((dotColor) => `
      <span class="p-dot" style="background-color: ${dotColor};"></span>
    `).join('');

    container.innerHTML = `
      <div class="term-version-banner font-mono">${cfg.version}</div>

      <div class="term-split-grid">
        
        <!-- Left: ASCII Art Graphic -->
        <div class="term-ascii-col">
          <pre class="term-ascii-art font-mono">${cfg.asciiArt}</pre>
        </div>

        <!-- Right: Bio & Profile Sentences -->
        <div class="term-info-col font-mono">
          
          <div class="term-greeting">
            <span>${parseColorTags(cfg.greeting)}</span>
          </div>

          ${sectionsHtml}

          <!-- Quote & Palette Dots -->
          <div class="term-quote font-mono">
            <span class="quote-text">${parseColorTags(cfg.quote)}</span>
            <div class="palette-dots">
              ${dotsHtml}
            </div>
          </div>

        </div>

      </div>

      <!-- Terminal Command Prompt Line -->
      <div class="term-bottom-prompt font-mono">
        <span class="prompt-user">${cfg.promptUser}</span>
        <span class="term-cursor-blink">_</span>
      </div>
    `;
  }

  function initTerminalEngine() {
    renderMainTerminalTab();

    const tabsContainer = document.getElementById('terminalTabs');
    const newTabBtn = document.getElementById('terminalNewTabBtn');

    let tabCounter = 1;

    // Available commands for interactive notebook
    const COMMANDS = {
      help: `AVAILABLE COMMANDS:
  help      - Display this help manual
  whoami    - Show current active engineer profile
  about     - Overview of system architecture & philosophy
  skills    - List core backend, frontend & devops competencies
  projects  - List featured chronicles & case studies
  contact   - Dispatch channels & direct contact routes
  clear     - Clear terminal buffer
  date      - Print current system date & time
  neofetch  - Re-render system profile display
  notes     - Read / write quick developer notes`,

      whoami: `Alexander Vance // Full-Stack Architect & Creative Technologist
Location: San Francisco, CA (Remote Worldwide Available)
Status: Online // Available for contract builds & leadership roles`,

      about: `PHILOSOPHY: Kaizen (改善) — Continuous 1% daily refinement.
Specialized in building resilient cloud architectures, real-time distributed
services, sub-second telemetry engines, and hardware-accelerated user interfaces.`,

      skills: `CORE TECH ARSENAL:
  [ Frontend ]  Next.js 15, React 19, TypeScript, Tailwind CSS, WebGL/Shaders
  [ Backend  ]  Node.js, Go, Python, GraphQL, WebSockets, REST
  [ Data     ]  PostgreSQL, Redis, Kafka, Vector Databases (RAG)
  [ DevOps   ]  Docker, Kubernetes, AWS, Terraform, CI/CD`,

      projects: `SELECTED CHRONICLES:
  01. LANDAGER CLOUD   - Enterprise multi-tenant SaaS & property valuation engine
  02. XINE TELEMETRY   - Real-time WebSocket cookieless event stream engine
  03. SAHARA COMMERCE  - Headless Shopify & GraphQL high-speed storefront
  04. KINETIC UI       - 60fps accessible hardware-accelerated motion system`,

      contact: `DIRECT DISPATCH:
  Email: hello@domain.io
  GitHub: github.com
  LinkedIn: linkedin.com
  Response Time: Within 24 Hours`,

      date: () => `Current System Timestamp: ${new Date().toISOString()}`,

      neofetch: () => {
        renderMainTerminalTab();
        return `[OK] Neofetch profile reloaded.`;
      },

      notes: `--- KAIZEN NOTEBOOK [LIVE SCRATCHPAD] ---
1. Optimize distributed core queue latency to < 1.2ms
2. Finalize terminal interactive UI patterns
3. Ship vector embedding indexing pipeline
(Type anything to append notes to this session buffer)`
    };

    // Tab Switching
    function switchTab(targetTabId) {
      document.querySelectorAll('.term-tab').forEach((t) => {
        t.classList.toggle('active', t.getAttribute('data-tab') === targetTabId);
      });

      document.querySelectorAll('.terminal-tab-content').forEach((c) => {
        const isActive = c.getAttribute('id') === targetTabId;
        c.classList.toggle('active', isActive);
        if (isActive && targetTabId !== 'tab-pwsh-main') {
          focusCliInput();
        }
      });
    }

    // New Tab Creation
    function createNewNotebookTab() {
      tabCounter++;
      const newTabId = `tab-notebook-${tabCounter}`;

      // Create Tab Header
      const tabEl = document.createElement('div');
      tabEl.className = 'term-tab active';
      tabEl.setAttribute('data-tab', newTabId);
      tabEl.innerHTML = `
        <span class="tab-icon font-mono">PS</span>
        <span class="tab-title font-mono">notebook-${tabCounter}.ps1</span>
        <button class="tab-close-btn" aria-label="Close Tab">×</button>
      `;

      // Create Tab Content View
      const contentEl = document.createElement('div');
      contentEl.className = 'terminal-tab-content active';
      contentEl.id = newTabId;
      contentEl.innerHTML = `
        <div class="interactive-cli-view">
          <div class="cli-banner font-mono">
            <span class="text-accent">Windows PowerShell [Notebook Session #${tabCounter}]</span><br>
            <span>Type <span class="term-highlight">'help'</span> for commands, or write freely as a scratchpad notebook.</span>
          </div>
          <div class="cli-output font-mono"></div>
          <div class="cli-prompt-row font-mono">
            <span class="cli-prompt-path">PS C:\\Users\\Alexander\\notebooks></span>
            <input type="text" class="dynamic-cli-input" spellcheck="false" autocomplete="off" autofocus>
          </div>
        </div>
      `;

      // Deactivate other tabs
      document.querySelectorAll('.term-tab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.terminal-tab-content').forEach((c) => c.classList.remove('active'));

      // Append
      tabsContainer.insertBefore(tabEl, newTabBtn);
      document.querySelector('.terminal-window-body').appendChild(contentEl);

      // Wire Tab Click
      tabEl.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tab-close-btn')) {
          switchTab(newTabId);
        }
      });

      // Wire Tab Close
      tabEl.querySelector('.tab-close-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        tabEl.remove();
        contentEl.remove();
        switchTab('tab-pwsh-main');
      });

      // Wire Interactive Input on dynamic tab
      const dynamicInput = contentEl.querySelector('.dynamic-cli-input');
      const dynamicOutput = contentEl.querySelector('.cli-output');

      if (dynamicInput) {
        dynamicInput.focus();
        dynamicInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const rawVal = dynamicInput.value.trim();
            const cmd = rawVal.toLowerCase();

            if (rawVal) {
              const cmdLine = document.createElement('div');
              cmdLine.className = 'cli-echo-line font-mono';
              cmdLine.innerHTML = `<span class="cli-prompt-path">PS C:\\Users\\Alexander\\notebooks></span> ${rawVal}`;
              dynamicOutput.appendChild(cmdLine);

              if (cmd === 'clear') {
                dynamicOutput.innerHTML = '';
              } else if (COMMANDS[cmd]) {
                const response = typeof COMMANDS[cmd] === 'function' ? COMMANDS[cmd]() : COMMANDS[cmd];
                const resLine = document.createElement('pre');
                resLine.className = 'cli-res-block font-mono';
                resLine.textContent = response;
                dynamicOutput.appendChild(resLine);
              } else {
                const noteLine = document.createElement('div');
                noteLine.className = 'cli-note-saved font-mono';
                noteLine.innerHTML = `<span class="text-accent">[NOTE SAVED]</span> ${rawVal}`;
                dynamicOutput.appendChild(noteLine);
              }

              dynamicInput.value = '';
              const winBody = document.querySelector('.terminal-window-body');
              if (winBody) {
                winBody.scrollTop = winBody.scrollHeight;
              }
            }
          }
        });
      }
    }

    const mainTab = document.querySelector('.term-tab[data-tab="tab-pwsh-main"]');
    if (mainTab) {
      mainTab.addEventListener('click', () => switchTab('tab-pwsh-main'));
    }

    if (newTabBtn) {
      newTabBtn.addEventListener('click', createNewNotebookTab);
    }

    function focusCliInput() {
      const activeInput = document.querySelector('.terminal-tab-content.active input');
      if (activeInput) {
        activeInput.focus();
      }
    }

    const terminalWindow = document.getElementById('terminalWindow');
    if (terminalWindow) {
      terminalWindow.addEventListener('click', () => {
        focusCliInput();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initTerminalEngine);
})();
