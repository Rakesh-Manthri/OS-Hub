# ⚡ OS EduHub — Interactive Operating Systems Learning Platform & Simulators

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Theme](https://img.shields.io/badge/Theme-Tactile%20Claymorphism-6366f1?style=flat-square)](#-design--claymorphism-theme)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](#license)

**OS EduHub** is a modern, mobile-responsive, interactive educational platform and simulator suite designed for Operating Systems (OS) students, educators, and software engineers.

🌐 **Live demo:** https://rakesh-manthri.github.io/OS-Hub/

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

### 4. 🧠 Contiguous Memory Allocation Simulator (`memory_allocation.html`)
- **Algorithms Supported**:
  - **First Fit** (first adequate block from the lowest address)
  - **Best Fit** (smallest adequate block)
  - **Worst Fit** (largest free block)
- **Partition Modes**:
  - **Fixed partitions** reserve the whole block, demonstrating internal fragmentation.
  - **Dynamic partitions** split the chosen block, leaving free holes and demonstrating external fragmentation.
- **Interactive Memory Map**:
  - Address-ordered clay memory strip with proportional process blocks, hatched free holes, and per-block address ranges.
  - Step-by-step playback with play, pause, previous, next, reset, and scrubber controls.
  - Process-by-process decision banner explaining exactly why a block was chosen or why a request failed.
- **Metrics & Benchmarks**:
  - Live KPIs for total memory, processes placed, memory occupied, and internal/external fragmentation.
  - Allocation results table with partition addresses, leftover holes, wasted capacity, and failure reasons.
  - Multi-algorithm comparison cards, mini memory maps, and bar charts for allocation count, useful memory load, and fragmentation.
- **Theory & C Source Code**: Algorithm trade-offs, fragmentation definitions, formula pills, and downloadable C implementations for all three algorithms.

---

### 5. 🛡️ Banker's Algorithm Simulator (`bankers_algorithm.html`)
- **Deadlock Avoidance Workflow**:
  - Editable **Allocation** and **Max** matrices for up to 8 processes and 4 resource types, with **Need = Max − Allocation** calculated automatically.
  - Editable **Available** vector and live resource summary showing allocated, available and total units.
- **Safety Check Playback**:
  - Step-by-step safety scan with Play, Pause, Prev, Next, Reset and a scrubber.
  - Live Work vector, finished-process count, safe-sequence build-up and a decision banner for every process test.
  - Classic safe, unsafe, mini and request-demo presets, including the standard sequence **P1 → P3 → P4 → P0 → P2**.
- **Resource-Request Tester**:
  - Verifies **Request ≤ Need** and **Request ≤ Available**, then pretends to allocate and re-runs the safety algorithm.
  - Explains granted/denied outcomes, previews the hypothetical safe sequence, and can apply a granted request back to the state matrices.
- **Theory & C Source Code**: Safety-state definitions, request-check conditions, formula pills, and downloadable C implementations for both the safety algorithm and the resource-request check.

---

### 6. 💽 Disk Scheduling Simulator (`disk_scheduling.html`)
- **Algorithms Supported**:
  - **FCFS** (First Come, First Served)
  - **SSTF** (Shortest Seek Time First)
  - **SCAN** (Elevator Algorithm)
  - **C-SCAN** (Circular SCAN)
  - **LOOK** (Look-Ahead SCAN)
  - **C-LOOK** (Circular LOOK)
- **Disk Head Visualization**:
  - Proportional disk-track lane with pending, served and current request dots plus a live head marker.
  - SVG seek-path chart showing the service order, disk-edge visits and circular jumps.
  - Scrollable service-sequence strip and a detailed movement log with per-move distance, cumulative seek and movement type.
- **Playback & Controls**:
  - Play, Pause, Prev, Next, Reset and step scrubber.
  - Initial head, cylinder count, request queue, direction control for the SCAN family, random request generation and textbook presets.
- **Metrics & Six-Algorithm Benchmark**:
  - Live total head movement, average seek per request, requests served and head-direction KPIs.
  - Side-by-side comparison cards and bar charts for total movement and average seek, with the lowest-movement algorithm highlighted.
- **Theory & C Source Code**: Trade-offs for all six algorithms, seek formulas, edge/jump accounting notes, and downloadable C implementations.

---

### 7. 🍽️ Dining Philosophers Simulator (`dining_philosophers.html`)
- **Fork Strategies**:
  - **Naive** — left fork then right fork, exposing the classic circular-wait deadlock.
  - **Ordered** — lowest-numbered fork first, removing circular wait through a resource hierarchy.
  - **Waiter** — at most **N − 1** philosophers seated, guaranteeing at least one free fork.
- **Live Round Table**:
  - SVG table with philosophers, fork ownership, solid held-fork links, dashed wait-for links, eating pulses and deadlock markers.
  - Philosopher status table with state chips, held forks, waiting fork, meals and wait history; fork-ownership chips below.
- **Playback & Detection**:
  - Play, Pause, Prev, Next, Reset and scrubber; configurable philosopher count (3–7), meal target, eating duration and thinking duration.
  - Deterministic deadlock detection through the wait-for graph with a circular-wait callout and cycle path.
  - Event log for arrivals, fork pickups, blocked waits, meals and deadlock detection.
- **Strategy Benchmark & C Code**: Meals, ticks, longest wait and throughput comparison cards/charts, presets, theory, and downloadable pthread implementations for all three strategies.

---

### 8. 📚 Readers–Writers Simulator (`readers_writers.html`)
- **Access Policies**:
  - **Readers preference** — readers keep entering while a writer waits; may starve writers.
  - **Writers preference** — a waiting writer blocks new readers; may starve readers.
  - **Fair / FIFO** — arrival-order admission with bounded waiting.
- **Configurable Workload**:
  - Reader/writer counts, read/write durations, arrival gap and reader-heavy, balanced or writer-heavy arrival mixes.
  - Presets for reader flood, writer flood, balanced FIFO and high-contention mixed arrivals.
- **Live Visualization**:
  - Shared-resource stage with concurrent reader chips, exclusive writer slot and read/write/idle modes.
  - Waiting queue with per-process wait ticks and starvation flags.
  - SVG access timeline showing arrivals, waiting spans and reading/writing blocks, plus a detailed process table with service windows and overtaking status.
- **Starvation & Fairness Analysis**:
  - A process is flagged as starved when a later arrival completes first; the event log, callouts, fairness KPI and benchmark cards report it explicitly.
  - Playback controls, policy comparison cards/charts for longest wait and throughput, theory, and downloadable pthread implementations for all three policies.

---

### 9. 📖 OS Curriculum & Syllabus (`syllabus.html`)
- **Full Course Specification**: Complete academic breakdown for **Operating Systems (Course Code: U24PC540IT)**, 3 Credits, 3:0:0 Hrs/week.
- **5 Core Syllabus Units**:
  - **Unit I**: Introduction & Process Management (Types, System Calls, Process Concept, Threads, Uniprocessor & Multiprocessor/RT Scheduling).
  - **Unit II**: Memory Management & Virtual Memory (Swapping, Paging, Segmentation, Demand Paging, Page Replacement, Thrashing).
  - **Unit III**: Process Synchronization & Deadlocks (IPC, Peterson's Solution, Bakery Algorithm, Semaphores, Monitors, Dining Philosophers, Readers–Writers, Banker's Algorithm).
  - **Unit IV**: Storage & I/O Management (File Systems, Directory Structures, Disk Scheduling, RAID, Protection Access Matrix).
  - **Unit V**: Case Studies (Windows 10, The Linux System Kernel & IPC, Android OS Architecture & Activity Life Cycle).
- **Course Outcomes & Objectives**: Mapped CO1–CO5 outcomes with interactive status badges.
- **Evaluation Scheme**: Full breakdown of CIE (Internal Tests, Assignments, Quizzes = 40 Marks) and SEE (60 Marks, 3 Hours).
- **Textbooks & Web References**: 10 recommended academic books (Silberschatz 10th Ed, Tanenbaum, Stallings, Dhamdhere, Gary Nutt, Godbole, Bach) and official web resources.

---

### 10. 🎓 Pure PDF Slide Deck & Interactive Scribbler (`lecture_notes.html`)
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
- **Offline-Ready**: Core libraries (Bootstrap, PDF.js, Prism, KaTeX) are vendored in `vendor/`, so the simulators and slide reader work offline on any static host. Opening `lecture_notes.html` directly via `file:///` needs the Upload / drag-and-drop option, since browsers block local file fetches.

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
   git clone https://github.com/Rakesh-Manthri/OS-Hub.git
   ```
2. Navigate to the project directory:
   ```bash
   cd OS-Hub
   ```
3. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari):
   - Double-click `index.html`, or
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

### Contiguous Memory Allocation
$$\text{Internal Fragmentation} = \text{Partition Size} - \text{Process Size}$$
$$\text{External Fragmentation} = \text{Total Free Memory} - \text{Largest Free Hole}$$
$$\text{Memory Utilisation } (\%) = \left( \frac{\text{Occupied Memory}}{\text{Total Memory}} \right) \times 100\%$$

### Banker's Algorithm
$$\text{Need}[i][j] = \text{Max}[i][j] - \text{Allocation}[i][j]$$
$$\text{Work}_{\text{new}} = \text{Work}_{\text{old}} + \text{Allocation}_{P_i} \quad \text{when } \text{Need}_{P_i} \le \text{Work}_{\text{old}}$$
$$\text{Safe State} \iff \text{a complete finish sequence exists for all processes}$$
$$\text{Grant Request} \iff \text{Request} \le \text{Need} \;\land\; \text{Request} \le \text{Available} \;\land\; \text{resulting state is safe}$$

### Disk Scheduling
$$\text{Seek Distance} = |\text{current cylinder} - \text{next cylinder}|$$
$$\text{Total Head Movement} = \sum \text{Seek Distances}$$
$$\text{Average Seek} = \frac{\text{Total Head Movement}}{\text{Requests Served}}$$

### Dining Philosophers
$$\text{Meal Throughput} = \frac{\text{Meals Served}}{\text{Simulation Ticks}}$$
$$\text{Longest Wait} = \max_{P_i} \left( \text{ticks between hungry and eating} \right)$$
$$\text{Deadlock} \iff \text{the wait-for graph contains a cycle}$$

### Readers–Writers
$$\text{Wait} = \text{Grant Tick} - \text{Arrival Tick}$$
$$\text{Throughput} = \frac{\text{Completed Processes}}{\text{Simulation Ticks}}$$
$$\text{Reader Concurrency} = |\text{active readers}|$$
$$\text{Starvation} \iff \text{a later arrival completes before an earlier waiting process}$$

---

## 📁 Project Structure

```
OS-Hub/
│
├── index.html              # OS EduHub main SPA portal & academic course hub
├── lectures.html           # Unit-wise Lecture Decks Catalog (View Slides & Download PDF)
├── lecture_notes.html      # High-DPI Interactive Slide Reader, Zoom & Scribble Canvas
├── cpu_schedule.html       # Visual CPU Scheduling Simulator & C Code
├── page_replacement.html   # Page Replacement Algorithms Simulator & C Code
├── memory_allocation.html  # Contiguous Memory Allocation (First/Best/Worst Fit) & C Code
├── bankers_algorithm.html  # Banker's Algorithm Safety Check & Resource Request Simulator
├── disk_scheduling.html    # Disk Scheduling (FCFS/SSTF/SCAN/C-SCAN/LOOK/C-LOOK) Simulator
├── dining_philosophers.html # Dining Philosophers (Naive/Ordered/Waiter) Simulator & C Code
├── readers_writers.html     # Readers–Writers (Readers/Writers/FIFO) Simulator & C Code
├── simulator-theme.css      # Shared claymorphism theme for the simulator pages
├── syllabus.html           # Full Operating Systems Syllabus (U24PC540IT)
├── lecture/                # PDF lecture decks for Units 1–4 (plain PDF files)
├── vendor/                 # Local copies of Bootstrap, PDF.js, Prism, KaTeX (offline use)
└── README.md               # Comprehensive platform documentation
```

---

## 🛠️ Built With

- **HTML5 & CSS3** (Tactile Claymorphism Styling & CSS Grid/Flexbox)
- **[Bootstrap 5.3](https://getbootstrap.com/)** (Responsive layout components & UI utilities)
- **[Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** (Simulation engines, canvas chalkboard, state management)
- **[PDF.js 3.11](https://mozilla.github.io/pdf.js/)** (Client-side PDF rendering engine for custom lecture decks)
- **[KaTeX](https://katex.org/)** (Fast mathematical LaTeX typesetting)
- **[Prism.js](https://prismjs.com/)** (C code syntax highlighting)
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** (Modern vector icon set)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use it for academic coursework, teaching, or software projects.
