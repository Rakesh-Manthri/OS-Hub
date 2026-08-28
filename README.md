# ⚡ CPU-Scheduler — Visual CPU Scheduling Simulation Platform

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Theme](https://img.shields.io/badge/Theme-Light%20Glassmorphism-38bdf8?style=flat-square)](#-design--glassmorphism-theme)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](#license)

**CPU-Scheduler** is a modern, mobile-responsive, single-file CPU scheduling simulator and interactive educational platform designed for Operating Systems (OS) students, educators, and engineers.

Explore scheduling algorithms visually with **real-time Ready Queue tracking**, an **interactive Gantt chart**, **step-by-step timeline playback**, **multi-algorithm performance benchmarking**, **comprehensive theory guides**, and **production-ready C source code implementations**.

---

## 🌟 Key Features

### 1. 🎛️ Interactive Simulation Engine
- **Algorithms Supported**:
  - **FCFS** (First-Come, First-Served)
  - **SJF** (Shortest Job First — Non-Preemptive)
  - **SRTF** (Shortest Remaining Time First — Preemptive SJF)
  - **Priority Scheduling** (Non-Preemptive & Preemptive, with customizable priority rules)
  - **Round Robin (RR)** (with dynamic Time Quantum $TQ$ input & FIFO ready queue)
- **Dynamic Process Configuration**:
  - Add, edit, or remove processes with custom Arrival Time ($AT$), Burst Time ($BT$), and Priority values.
  - 🎲 **Randomizer**: Generate balanced random workloads with one click.
  - ⚡ **6 Predefined Benchmark Presets**:
    - Standard Textbook Case (4 processes)
    - Convoy Effect Demo (Long initial burst showing FCFS flaw)
    - Priority Hierarchy Case
    - Round Robin Slicing Case ($TQ = 2$)
    - SRTF Preemption Case
    - CPU Idle Gaps Case
  - 💾 **Export to CSV**: Download computed metrics directly as `.csv`.

---

### 2. 🖥️ Live Ready Queue & CPU Execution Visualizer
- **Active CPU Core**: Shows the running process with an animated pulsing glow, time slice duration ($t_{\text{start}} \rightarrow t_{\text{end}}$), and elapsed runtime.
- **Dynamic Ready Queue Pipeline**: Visual conveyor belt showing the ordered list of waiting processes with PID, arrival time, remaining burst, and priority rank.
- **Unarrived vs. Terminated Tracking**: Badges indicating future arrivals ($AT > t$) and completed jobs ($CT \le t$).
- **Interactive Time Scrubber & Stepper**: Play, pause, step forward/backward, reset, or scrub the timeline slider from $t = 0$ to total makespan.

---

### 3. 📊 Color-Coded Gantt Chart & KPI Metrics
- Visual execution timeline with process badges, duration indicators, and dedicated striped **CPU Idle** states.
- Computed metrics table:
  - **Completion Time ($CT$)**
  - **Turnaround Time ($TAT = CT - AT$)**
  - **Waiting Time ($WT = TAT - BT$)**
  - **Response Time ($RT = \text{First Run} - AT$)**
- High-level KPI summary cards:
  - **Average Waiting Time ($AWT = \frac{\sum WT}{n}$)**
  - **Average Turnaround Time ($ATAT = \frac{\sum TAT}{n}$)**
  - **CPU Utilization ($\frac{\text{Busy Time}}{\text{Total Time}} \times 100\%$)**
  - **Total Makespan** & **Throughput**

---

### 4. 📈 Multi-Algorithm Benchmark & Comparison
- Evaluates **FCFS**, **SJF**, **SRTF**, **Priority**, and **Round Robin** simultaneously on the exact same dataset.
- Highlights the **Best Average Waiting Time** and **Best Turnaround Time**.
- Generates comparative visual bar charts for quick analysis.

---

### 5. 📚 OS Theory & Mathematical Guide
- In-depth theoretical breakdown of all 5 algorithms:
  - Scheduling criteria & preemption rules
  - Step-by-step logic & mathematical formulas rendered with **KaTeX**
  - Advantages, disadvantages, and phenomena (e.g. *Convoy Effect*, *Starvation*, *Aging*)
  - Full comparison matrix across time complexity, overhead, and starvation risk.

---

### 6. 💻 Complete C Source Code Repository
- Full, runnable ANSI C implementations for all 5 algorithms:
  1. `fcfs_scheduler.c`
  2. `sjf_non_preemptive.c`
  3. `srtf_preemptive.c`
  4. `priority_scheduler.c`
  5. `round_robin_scheduler.c`
- Features **Prism.js** syntax highlighting, one-click **Copy to Clipboard**, and direct **Download .c File** buttons.

---

## 🎨 Design & Glassmorphism Theme

The UI is styled using a **Light Glassmorphism** design language:
- **Palette**:
  - 🔵 **Vibrant Blue (`#2563eb`)**: Primary controls, turnaround time metrics, and execution timelines.
  - 🌸 **Rose Pink (`#ec4899`)**: Waiting time metrics, interactive highlights, and performance indicators.
  - 🌿 **Emerald Green (`#10b981`)**: CPU utilization, throughput, completion times, and status badges.
- **Glass Surfaces**: Frosted glass panels (`backdrop-filter: blur(16px)`), subtle translucent white surfaces (`rgba(255, 255, 255, 0.8)`), and multi-stop ambient light orbs.
- **Mobile Responsive**: Fully responsive layout optimized for mobile phones, tablets, laptops, and desktop screens.

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

$$\text{Turnaround Time } (TAT) = CT - AT$$

$$\text{Waiting Time } (WT) = TAT - BT$$

$$\text{Response Time } (RT) = \text{First Scheduled Time} - AT$$

$$\text{Average Turnaround Time } (ATAT) = \frac{\sum_{i=1}^{n} TAT_i}{n}$$

$$\text{Average Waiting Time } (AWT) = \frac{\sum_{i=1}^{n} WT_i}{n}$$

$$\text{CPU Utilization} = \left( \frac{\text{Total Time} - \text{Total Idle Time}}{\text{Total Time}} \right) \times 100\%$$

$$\text{Throughput} = \frac{n}{\text{Total Time}}$$

---

## 📁 Project Structure

```
CPU-Scheduler/
│
├── index.html       # Complete single-file application (HTML, CSS, JS, KaTeX, Prism)
└── README.md        # Comprehensive documentation & reference guide
```

---

## 🛠️ Built With

- **HTML5 & CSS3** (Custom Glassmorphic Styling & CSS Grid/Flexbox)
- **[Bootstrap 5.3](https://getbootstrap.com/)** (Responsive UI components & icons)
- **[Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** (Scheduling logic, ready queue state manager, Gantt engine)
- **[KaTeX](https://katex.org/)** (Fast mathematical LaTeX typesetting)
- **[Prism.js](https://prismjs.com/)** (C code syntax highlighting)
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** (Vector icons)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use it for academic coursework, teaching, or software projects.
