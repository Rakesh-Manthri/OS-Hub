# ⚡ OS EduHub — Interactive Operating Systems Learning Platform & Simulators

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Theme](https://img.shields.io/badge/Theme-Tactile%20Claymorphism-6366f1?style=flat-square)](#-design--claymorphism-theme)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](#license)

**OS EduHub** is a modern, mobile-responsive, interactive educational platform and simulator suite designed for Operating Systems (OS) students, educators, and software engineers. 

Styled with a **Tactile Claymorphism** design language, the interface delivers plush rounded surfaces, soft matte pastel color palettes, inflated shadows, and playful depth.

---

## 🌟 Modules & Core Features

### 1. 🌐 OS EduHub Portal (`index.html`)
- **Single Page Application (SPA)**: Smooth JavaScript tab routing between the **Home** section and **Learning Hub**.
- **Educational Home Section**: Interactive plush clay cards detailing "Why Operating Systems Matter", covering:
  - Resource Allocation & Scheduling
  - Hardware Abstraction
  - Security & Isolation
  - File & Data Management
- **Learning Hub Module Grid**: Direct launch cards for visual simulators.

---

### 2. ⚡ Visual CPU Scheduler Simulator (`cpu_schedule.html`)
- **Algorithms Supported**:
  - **FCFS** (First-Come, First-Served)
  - **SJF** (Shortest Job First — Non-Preemptive)
  - **SRTF** (Shortest Remaining Time First — Preemptive SJF)
  - **Priority Scheduling** (Non-Preemptive & Preemptive)
  - **Round Robin (RR)** (with dynamic Time Quantum $TQ$)
- **Live CPU Core & Ready Queue Visualizer**:
  - Real-time CPU dispatch socket displaying active execution state (`RUNNING` / `IDLE`) with a tactile 3D chip module.
  - Dynamic Ready Queue conveyor belt showing waiting processes ordered for dispatch.
- **Interactive Gantt Chart**: Timeline execution chart with time ticks and idle state stripes styled as tactile clay blocks.
- **Complete Metrics & Performance Benchmarks**:
  - Detailed solution table ($CT$, $TAT$, $WT$, $RT$) with CSV export.
  - Multi-algorithm side-by-side benchmark cards and visual bar charts.
- **Theory & C Source Code Generator**: Comprehensive theory breakdown and production-ready C implementations.

---

### 3. 💾 Page Replacement Algorithms Simulator (`page_replacement.html`)
- **Algorithms Supported**:
  - **FIFO** (First-In, First-Out)
  - **LRU** (Least Recently Used)
  - **MRU** (Most Recently Used)
  - **Optimal** (Belady's MIN Algorithm)
  - **LFU** (Least Frequently Used)
- **Step-by-Step Memory Frame Visualizer**:
  - Real-time frame grid displaying allocated page numbers, HIT / FAULT status badges, and evicted pages with plush 3D frame baskets.
  - Timeline stepper and playback controls (Play, Pause, Step Next/Prev, Reset).
- **Execution Trace Matrix**: Complete step-by-step matrix table highlighting hits in soft pastel green and faults in soft pastel rose.
- **Multi-Algorithm Benchmark**: Comparative bar charts measuring total page faults and hit ratios.
- **Presets & Theory**: Standard textbook cases, Belady's Anomaly demo (3 vs 4 frames), locality patterns, and C code snippets.

---

### 4. 📖 OS Curriculum & Syllabus (`syllabus.html`)
- **Full Course Specification**: Complete academic breakdown for **Operating Systems (Course Code: U24PC540IT)**, 3 Credits, 3:0:0 Hrs/week.
- **5 Core Syllabus Units**:
  - **Unit I**: Introduction & Process Management (Types, System Calls, Process Concept, Threads, Uniprocessor & Multiprocessor/RT Scheduling).
  - **Unit II**: Memory Management & Virtual Memory (Swapping, Paging, Segmentation, Demand Paging, Page Replacement, Thrashing).
  - **Unit III**: Process Synchronization & Deadlocks (IPC, Peterson's Solution, Bakery Algorithm, Semaphores, Monitors, Banker's Algorithm).
  - **Unit IV**: Storage & I/O Management (File Systems, Directory Structures, Disk Scheduling, RAID, Protection Access Matrix).
  - **Unit V**: Case Studies (Windows 10, The Linux System Kernel & IPC, Android OS Architecture & Activity Life Cycle).
- **Course Outcomes & Objectives**: Mapped CO1–CO5 outcomes with interactive status badges.
- **Evaluation Scheme**: Full breakdown of CIE (Internal Tests, Assignments, Quizzes = 40 Marks) and SEE (60 Marks, 3 Hours).
- **Textbooks & Web References**: 10 recommended academic books (Silberschatz 10th Ed, Tanenbaum, Stallings, Dhamdhere, Gary Nutt, Godbole, Bach) and official web resources.

---

### 5. 🎓 Pure PDF Slide Deck & Interactive Scribbler (`lecture_notes.html`)
- **Authentic PDF Page-by-Page Presentation Engine**: Directly renders the authentic 35-page lecture deck (`lecture/1.1.0-Introduction.pdf`) by Dr. S Arun Kumar (Vasavi College of Engineering) with high-DPI retina sharpness.
- **Single Page Step-by-Step Navigation**: Smooth slide transitions with floating tactile arrows, keyboard arrows (`←`/`→`, `Space`, `PageUp`/`PageDown`, `Home`/`End`), slide counter pill (`1 / 35`), and progress bar.
- **🎨 Live Chalkboard & Scribble Overlay**:
  - Full-screen drawing layer directly overlaid on the PDF page with Pen, Highlighter, and Eraser.
  - Multi-color palette swatches (Blue, Rose, Mint, Amber, Dark Ink, White Chalk) and 3 stroke sizes.
  - Per-slide stroke persistence saved automatically in `localStorage` (`os_pdf_scribble_p{N}`).
  - Instant annotated slide download as PNG merging the PDF page and scribbles.
  - Keyboard shortcut (`C`).
- **📝 Student Study Notes Drawer**:
  - Persistent slide-by-slide notes and deck-wide summary notes.
  - Automatic `localStorage` saving with tag insert chips (`#KeyPoint`, `#ExamTip`, `#Question`, bullet points).
  - Export notes as Markdown (`.md`) or Plain Text (`.txt`).
  - Keyboard shortcut (`N`).
- **📑 Visual Slide Outline & Thumbnail Drawer**: Background rendering of miniature visual thumbnails for all 35 pages with instant slide jumping and search filter (`M` key).
- **📂 Custom PDF Upload & Drag-and-Drop**: Easily upload or drag-and-drop any external `.pdf` file to annotate and study in the same engine.
- **🔍 Interactive Zoom & Panning Engine**:
  - Smooth Zoom In (`+`), Zoom Out (`-`), and Reset to Fit (`Fit` / `0` key).
  - Multi-touch pinch-to-zoom on mobile and `Ctrl + Mouse Wheel` zooming.
  - Smooth pan/drag around zoomed slides via touch drag or mouse grab.
  - Coordinate-precise drawing support: Scribble canvas automatically scales and maps 1:1 with zoomed coordinates.
- **📱 Full Mobile Responsiveness (Horizontal & Vertical)**:
  - **Portrait (Vertical)**: Optimized single-handed navigation, responsive bottom toolbar, compact side arrows, and natural touch swipe gestures (Swipe Left: Next, Swipe Right: Prev).
  - **Landscape (Horizontal)**: 100% full-screen presentation stage with zero top obstruction, compact action bar, and responsive height adaptation.
- **Minimalist Full-Stage Layout**: Top OSHub banner removed to maximize presentation viewport, with subtle floating corner pills for Home navigation and PDF uploads.
- **Offline & File-Protocol Ready**: Pre-compiled with `lecture/pdfData.js` for zero-CORS instant loading when opening directly via `file:///`.

---

## 🎨 Design & Claymorphism Theme

The entire platform is styled using a unified **Tactile Claymorphism** design language:
- **Plush Rounded Surfaces**: Generous border radii (`20px` to `28px`) and pill-shaped elements give the interface a friendly, soft, and inviting feel.
- **Matte Pastel Palette**:
  - 🔵 **Pastel Cornflower Blue (`#436cf5` / `#edf3fe`)**: Primary actions, nav branding, and timeline blocks.
  - 🌸 **Pastel Rose (`#f75583` / `#fef0f4`)**: Page fault states, waiting metrics, and accent pills.
  - 🌿 **Pastel Mint (`#2ec491` / `#edfbf5`)**: Page hits, CPU throughput, and success badges.
  - 🟣 **Pastel Purple & Amber (`#8b5cf6`, `#f59e0b`)**: Frame slots, algorithm tags, and category highlights.
- **Inflated Shadows & Depth**:
  - Dual inner highlights and cast shadows simulate light hitting puffy, inflated clay surfaces.
  - Sunken tactile input wells (`inset` shadows) for input fields, search, and slider tracks.
  - Interactive "pressed" micro-interactions on buttons (`transform: scale(0.97)` with deepened inner shadows).
- **Unified Clay Navbar**: Floating, pillowy island navbar consistent across all pages with responsive mobile toggle menus.

---

## 🚀 Quick Start / How to Run

No build tools, package managers, or web servers are required!

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/CPU-Scheduler.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CPU-Scheduler
   ```
3. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari):
   - Double-click [`index.html`](file:///c:/Projects/CPU-Scheduler/index.html), or
   - Right-click $\rightarrow$ **Open With** $\rightarrow$ **Google Chrome / Microsoft Edge**.

---

## 📐 Formulas Reference

### CPU Scheduling
$$\text{Turnaround Time } (TAT) = CT - AT$$
$$\text{Waiting Time } (WT) = TAT - BT$$
$$\text{Response Time } (RT) = \text{First Scheduled Time} - AT$$
$$\text{CPU Utilization} = \left( \frac{\text{Total Time} - \text{Total Idle Time}}{\text{Total Time}} \right) \times 100\%$$

### Page Replacement
$$\text{Hit Ratio } (\%) = \left( \frac{\text{Total Page Hits}}{\text{Total Page References}} \right) \times 100\%$$
$$\text{Fault Ratio } (\%) = \left( \frac{\text{Total Page Faults}}{\text{Total Page References}} \right) \times 100\%$$

---

## 📁 Project Structure

```
CPU-Scheduler/
│
├── index.html              # OS EduHub main SPA portal & academic course hub
├── lectures.html           # Unit-wise Lecture Decks Catalog (View Slides & Download PDF)
├── lecture_notes.html      # High-DPI Interactive Slide Reader, Zoom & Scribble Canvas
├── cpu_schedule.html       # Visual CPU Scheduling Simulator & C Code
├── page_replacement.html   # Page Replacement Algorithms Simulator & C Code
├── syllabus.html           # Full Operating Systems Syllabus (U24PC540IT)
├── lecture/                # PDF lecture courseware (Unit-1 slide decks & data)
└── README.md               # Comprehensive platform documentation
```

---

## 🛠️ Built With

- **HTML5 & CSS3** (Tactile Claymorphism Styling & CSS Grid/Flexbox)
- **[Bootstrap 5.3](https://getbootstrap.com/)** (Responsive layout components & UI utilities)
- **[Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** (Simulation engines, canvas chalkboard, state management)
- **[Reveal.js 4.6.1](https://revealjs.com/)** (Interactive HTML presentation framework with Quarto styling)
- **[PDF.js 3.11](https://mozilla.github.io/pdf.js/)** (Client-side PDF rendering engine for custom lecture decks)
- **[KaTeX](https://katex.org/)** (Fast mathematical LaTeX typesetting)
- **[Prism.js](https://prismjs.com/)** (C code syntax highlighting)
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** (Modern vector icon set)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use it for academic coursework, teaching, or software projects.
