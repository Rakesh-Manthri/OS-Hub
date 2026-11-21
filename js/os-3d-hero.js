/* OS-Hub 3D hero — procedural models only, palette: white/blue/green */
(function () {
  'use strict';

  // ---- Palette (do not change) ----
  var PRIMARY     = 0x2563EB;
  var BLUE500     = 0x3B82F6;
  var BLUE700     = 0x1D4ED8;
  var INK         = 0x0A2540;
  var INK2        = 0x081A30;
  var GREEN       = 0x16A34A;
  var GREEN_DARK  = 0x15803D;
  var GREEN_BRIGHT= 0x22C55E;
  var EMERALD     = 0x059669;
  var TINT_BLUE   = 0xDBEAFE;
  var TINT_GREEN  = 0xD1FAE5;

  function webglAvailable() {
    try {
      var c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext &&
        (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  function init(canvasId) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return false;

    var fallback = document.getElementById('hero-3d-fallback');

    if (!webglAvailable()) {
      canvas.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
      return false;
    }

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'low-power'
      });
    } catch (e) {
      canvas.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
      return false;
    }

    renderer.setClearColor(0xFFFFFF, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    var container = canvas.parentElement || document.body;

    var camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 2.2, 12);
    camera.lookAt(0, 0.4, 0);

    var scene = new THREE.Scene();
    // No fog, no shadows, no post-processing.

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    var dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(4, 8, 6);
    scene.add(dir);

    // ---- Model helpers ----
    function mat(color, rough, metal) {
      return new THREE.MeshStandardMaterial({ color: color, roughness: rough, metalness: metal });
    }
    var mInk   = mat(INK, 0.45, 0.35);
    var mBlue  = mat(PRIMARY, 0.5, 0.2);
    var mB500  = mat(BLUE500, 0.5, 0.25);
    var mTint  = mat(TINT_BLUE, 0.6, 0.1);
    var mGreen = mat(GREEN, 0.45, 0.25);
    var mGBr   = mat(GREEN_BRIGHT, 0.45, 0.2);

    var group = new THREE.Group();
    scene.add(group);

    // ---- 1. CPU chip (center-left) ----
    var cpu = new THREE.Group();
    var cpuBody = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.35, 2.0), mInk);
    cpuBody.position.y = 0.175;
    cpu.add(cpuBody);
    var cpuTop = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 1.1), mBlue);
    cpuTop.position.y = 0.39;
    cpu.add(cpuTop);
    var pinGeo = new THREE.BoxGeometry(0.16, 0.12, 0.16);
    var mPins = mat(BLUE500, 0.4, 0.5);
    var side;
    for (side = 0; side < 9; side++) {
      var pin = new THREE.Mesh(pinGeo, mPins);
      pin.position.set(-0.85 + side * 0.212, 0.06, 1.06);
      cpu.add(pin);
      var pin2 = new THREE.Mesh(pinGeo, mPins);
      pin2.position.set(-0.85 + side * 0.212, 0.06, -1.06);
      cpu.add(pin2);
      var pin3 = new THREE.Mesh(pinGeo, mPins);
      pin3.position.set(1.06, 0.06, -0.85 + side * 0.212);
      cpu.add(pin3);
      var pin4 = new THREE.Mesh(pinGeo, mPins);
      pin4.position.set(-1.06, 0.06, -0.85 + side * 0.212);
      cpu.add(pin4);
    }
    cpu.position.set(-4.2, -0.2, 0);
    group.add(cpu);

    // ---- 2. Disk platter (center) ----
    var platter = new THREE.Group();
    var disk = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.08, 48), mTint);
    platter.add(disk);
    var hub = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.2, 32), mBlue);
    hub.position.y = 0.05;
    platter.add(hub);
    var ring = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.02, 8, 64), mB500);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.045;
    platter.add(ring);
    // Read/write arm
    var arm = new THREE.Group();
    var armBar = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.07, 0.14), mat(GREEN, 0.4, 0.3));
    armBar.position.x = -0.8;
    arm.add(armBar);
    var armHead = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.3), mat(GREEN_DARK, 0.4, 0.3));
    armHead.position.set(-1.6, 0, 0);
    arm.add(armHead);
    var pivot = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.2, 16), mInk);
    arm.add(pivot);
    arm.position.set(1.35, 0.2, -0.6);
    arm.rotation.y = Math.PI / 2.4;
    platter.add(arm);
    var base = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.25, 3.4), mat(TINT_GREEN, 0.7, 0.05));
    base.position.y = -0.22;
    platter.add(base);
    platter.position.set(0, 0.05, 0);
    group.add(platter);
    var spinning = new THREE.Group(); // holds disk + hub + ring (arm stays fixed)
    platter.add(spinning);
    platter.remove(disk); platter.remove(hub); platter.remove(ring);
    spinning.add(disk); spinning.add(hub); spinning.add(ring);
    // reposition spinning parts to same place
    disk.position.set(0, 0, 0);
    hub.position.set(0, 0.05, 0);
    ring.position.set(0, 0.045, 0);

    // ---- 3. Memory modules (right) ----
    var memory = new THREE.Group();
    function memModule(color, x) {
      var g = new THREE.Group();
      var stick = new THREE.Mesh(new THREE.BoxGeometry(0.6, 2.2, 0.18), mat(color, 0.45, 0.25));
      stick.position.y = 1.1;
      g.add(stick);
      // notch details in ink
      var notchGeo = new THREE.BoxGeometry(0.18, 0.18, 0.2);
      var mN = mInk;
      for (var i = 0; i < 6; i++) {
        var notch = new THREE.Mesh(notchGeo, mN);
        notch.position.set(0, 0.4 + i * 0.32, 0.1);
        g.add(notch);
      }
      g.position.set(x, 0, 0);
      g.rotation.y = -0.25;
      return g;
    }
    memory.add(memModule(GREEN, -0.45));
    memory.add(memModule(GREEN_BRIGHT, 0.45));
    memory.position.set(4.2, -0.1, 0);
    group.add(memory);

    // ---- 4. Process cubes (six, floating) ----
    var cubeColors = [PRIMARY, GREEN, BLUE500, GREEN_BRIGHT, BLUE700, EMERALD];
    var cubes = [];
    var cubeGeo = new THREE.BoxGeometry(0.45, 0.45, 0.45);
    for (var ci = 0; ci < 6; ci++) {
      var cube = new THREE.Mesh(cubeGeo, mat(cubeColors[ci], 0.45, 0.15));
      cube.position.set(-2.2 + ci * 0.88, 2.0 + Math.sin(ci * 1.7) * 0.5, (ci % 2 === 0) ? 1.1 : -1.0);
      cube.rotation.set(ci * 0.4, ci * 0.6, 0);
      group.add(cube);
      cubes.push(cube);
    }

    // store base Y values once, right after the cubes are created, so
    // tick() can never run before baseY exists
    for (var bi = 0; bi < cubes.length; bi++) {
      cubes[bi].userData.baseY = cubes[bi].position.y;
    }

    // ---- Motion state ----
    var reduceMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var coarsePointer = window.matchMedia &&
      window.matchMedia('(pointer: coarse)').matches;

    var targetTiltX = 0, targetTiltY = 0, curTiltX = 0, curTiltY = 0;
    var PARALLAX_MAX = 0.08;

    var onPointerMove = null;
    if (!coarsePointer) {
      onPointerMove = function (e) {
        // Map pointer to -1..1, target tilt max 0.08 rad. No per-move allocations.
        targetTiltY = ((e.clientX / window.innerWidth) * 2 - 1) * PARALLAX_MAX;
        targetTiltX = ((e.clientY / window.innerHeight) * 2 - 1) * PARALLAX_MAX;
      };
      window.addEventListener('mousemove', onPointerMove, { passive: true });
    }

    // ---- Resize (also keeps the whole group framed on narrow screens) ----
    function resize() {
      var h = parseFloat(canvas.getAttribute('data-h')) ||
              (window.innerWidth <= 640 ? 260 : 420);
      // Set the display size first, then measure the laid-out canvas:
      // container.clientWidth can be 0 before layout.
      canvas.style.width = '100%';
      canvas.style.height = h + 'px';
      var w = canvas.clientWidth || container.clientWidth || window.innerWidth;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Group spans about +/-5.5 in x; pull the camera back on narrow
      // screens so the CPU (left) and memory (right) stay in frame.
      camera.position.z = Math.max(12, 15.1 / camera.aspect);
      camera.updateProjectionMatrix();
    }
    resize();
    var onResize = function () { resize(); render(); };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    // ---- Render loop ----
    var rafId = null;
    var running = false;
    var t = 0;
    var spin = 0;

    function render() {
      renderer.render(scene, camera);
    }

    function tick() {
      rafId = null;
      t += 0.016;

      // slow whole-group rotation (spin kept separate so the pointer
      // tilt below does not fight it or accumulate drift)
      spin += 0.0016;

      // platter spin
      spinning.rotation.y += 0.02;

      // cube bob + spin (no allocations)
      for (var i = 0; i < 6; i++) {
        var c = cubes[i];
        c.position.y = c.userData.baseY + Math.sin(t * 1.2 + i * 1.1) * 0.28;
        c.rotation.x += 0.004;
        c.rotation.y += 0.006;
      }

      // mouse parallax, lerped
      curTiltX += (targetTiltX - curTiltX) * 0.06;
      curTiltY += (targetTiltY - curTiltY) * 0.06;
      group.rotation.x = curTiltX;
      group.rotation.y = spin + curTiltY;

      render();
      if (running) rafId = requestAnimationFrame(tick);
    }

    // ---- IntersectionObserver: pause loop offscreen ----
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        var visible = entries[0] && entries[0].isIntersecting;
        if (visible && !running && !reduceMotion) {
          running = true;
          rafId = requestAnimationFrame(tick);
        } else if (!visible && running) {
          running = false;
          if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
        }
      }, { threshold: 0.05 });
      io.observe(canvas);
    } else if (!reduceMotion) {
      running = true;
      rafId = requestAnimationFrame(tick);
    }

    if (reduceMotion) {
      // One static frame, no loop, no parallax.
      group.rotation.set(0, 0.35, 0);
      for (var si = 0; si < cubes.length; si++) {
        var sc = cubes[si];
        sc.position.y = sc.userData.baseY;
      }
      render();
    }

    // ---- Destroy ----
    function disposeGroup(obj) {
      obj.traverse(function (node) {
        if (node.geometry) node.geometry.dispose();
        if (node.material) {
          if (Array.isArray(node.material)) {
            node.material.forEach(function (m) { m.dispose(); });
          } else {
            node.material.dispose();
          }
        }
      });
    }

    function destroy() {
      running = false;
      if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (onPointerMove) window.removeEventListener('mousemove', onPointerMove);
      disposeGroup(group);
      if (renderer.forceContextLoss) renderer.forceContextLoss();
      renderer.dispose();
      canvas.width = canvas.height = 0;
    }

    return { destroy: destroy };
  }

  window.OSHub3D = { init: init };
})();
