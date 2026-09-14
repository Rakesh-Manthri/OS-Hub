# ⚡ OS EduHub — Interactive Operating Systems Learning Platform & Simulators

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Theme](https://img.shields.io/badge/Theme-Light%20Glassmorphism-38bdf8?style=flat-square)](#-design--glassmorphism-theme)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](#license)

**OS EduHub** is a modern, mobile-responsive, interactive educational platform and simulator suite designed for Operating Systems (OS) students, educators, and software engineers. 

It provides an intuitive Single Page Application (SPA) hub along with two full-featured visual simulation platforms for **CPU Scheduling** and **Page Replacement Algorithms**.

---

## 🌟 Modules & Core Features

### 1. 🌐 OS EduHub Portal (`index.html`)
- **Single Page Application (SPA)**: Smooth JavaScript tab routing between the **Home** section and **Learning Hub**.
- **Educational Home Section**: Interactive glassmorphism cards detailing "Why Operating Systems Matter", covering:
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
  - Real-time CPU dispatch socket displaying active execution state (`RUNNING` / `IDLE`).
  - Dynamic Ready Queue conveyor belt showing waiting processes ordered for dispatch.
- **Interactive Gantt Chart**: Timeline execution chart with time ticks and idle state stripes.
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
  - Real-time frame grid displaying allocated page numbers, HIT / FAULT status badges, and evicted pages.
  - Timeline stepper and playback controls (Play, Pause, Step Next/Prev, Reset).
- **Execution Trace Matrix**: Complete step-by-step matrix table highlighting hits in soft green and faults in soft red.
- **Multi-Algorithm Benchmark**: Comparative bar charts measuring total page faults and hit ratios.
- **Presets & Theory**: Standard textbook cases, Belady's Anomaly demo (3 vs 4 frames), locality patterns, and C code snippets.

---

## 🎨 Design & Glassmorphism Theme

The entire platform is styled using a unified **Light Glassmorphism** design language:
- **Palette**:
  - 🔵 **Vibrant Blue (`#2563eb`)**: Primary controls, navbar branding, and execution timelines.
  - 🌸 **Rose Pink (`#ec4899`)**: Metrics highlights and interactive accents.
  - 🌿 **Emerald Green (`#10b981`)**: CPU utilization, page hit badges, and status indicators.
  - 🟣 **Purple & Amber (`#8b5cf6`, `#f59e0b`)**: Frame slots and algorithm badges.
- **Glass Surfaces**: Frosted glass panels (`backdrop-filter: blur(16px)`), translucent white layers, and ambient light orbs.
- **Unified Navigation Bar**: Identical glassmorphism navbars across all pages with responsive mobile menus and bi-directional linking.

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
├── index.html              # OS EduHub main SPA portal & module hub
├── cpu_schedule.html       # Visual CPU Scheduling Simulator & C Code
├── page_replacement.html   # Page Replacement Algorithms Simulator & C Code
└── README.md               # Comprehensive platform documentation
```

---

## 🛠️ Built With

- **HTML5 & CSS3** (Custom Glassmorphic Styling & CSS Grid/Flexbox)
- **[Bootstrap 5.3](https://getbootstrap.com/)** (Responsive UI components & icons)
- **[Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** (Simulation engines, ready queue state manager, frame visualizers)
- **[KaTeX](https://katex.org/)** (Fast mathematical LaTeX typesetting)
- **[Prism.js](https://prismjs.com/)** (C code syntax highlighting)
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** (Vector icons)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use it for academic coursework, teaching, or software projects.
