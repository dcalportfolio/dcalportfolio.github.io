const PROJECTS = {
  archviz_Overpass: {
    titleEn: "Overpass Renders",
    titleEs: "Overpass Renders",
    subtitle:
      "Overpass for cyclists and pedestrians linking Sueca and Fortaleny (Valencia, Spain).",
    images: [
      {
        src: "images/dcal_rotonda_fortaleny.webp", cap: "Aerial view day",},
      { video: "https://youtu.be/SZetOqiG_l0", cap: "Vídeo" },  

      { src: "images/dcal_rotonda_night_bridge.webp", cap: "Night aerial" },
      { src: "images/dcal_rotonda_night_hwy.webp", cap: "Highway night" },
      { src: "images/dcal_rotonda_hwy.webp", cap: "Highway day" },
      { src: "images/dcal_rotonda_3rd_person.webp", cap: "Bridge walkthrough" },
      { src: "images/dcal_rotonda_aerial.webp", cap: "Roundabout" },
    ],
  },
  archviz_MainStr: {
    titleEn: "Main Street Renovation",
    titleEs: "Renovación Calle Mayor",
    subtitle:
      "Alborache (Valencia, Spain).",
    images: [
      {
        beforeAfter: true,
        before: "images/dcal_alborache_bus_before.webp",
        after: "images/dcal_alborache_bus_after.webp",
        cap: "Bus stop · Before & After",
      },
            {
        beforeAfter: true,
        before: "images/dcal_alborache_church_before.webp",
        after: "images/dcal_alborache_church_after.webp",
        cap: "Church · Before & After",
      },      {
        beforeAfter: true,
        before: "images/dcal_alborache_street_before.webp",
        after: "images/dcal_alborache_street_after.webp",
        cap: "Main street · Before & After",
      },      {
        beforeAfter: true,
        before: "images/dcal_alborache_loadzone_before.webp",
        after: "images/dcal_alborache_loadzone_after.webp",
        cap: "Load zone · Before & After",
      },
    ],
  },
  simulation_Cargo: {
    titleEn: "Cargo Ships",
    titleEs: "Cargo Ships",
    subtitle: "",
    images: [
      { src: "images/dcal_cargo_8.webp", cap: "Ocean Wind · Side" },
      { src: "images/dcal_cargo_3.webp", cap: "Overview" },
      { src: "images/dcal_cargo_5.webp", cap: "Open hold" },
      { src: "images/dcal_cargo_7_SHIP.webp", cap: "Early model" },
      { src: "images/hero_11.webp", cap: "Bridge detail" },
      { src: "images/hero_12.webp", cap: "Deck detail" },
    ],
  },
  motorsport_F2: {
    titleEn: "Formula 2 2020",
    titleEs: "Formula 2 2020",
    subtitle:
      "39k triangles including chassis, cockpit, wheels and steering wheel.",
    images: [

      { src: "images/dcal_formula2_front.webp", cap: "Front view" },
      {
        beforeAfter: true,
        before: "images/dcal_formula2_wire.webp",
        after: "images/dcal_formula2_front.webp",
        cap: "Front · Wireframe",
      },
      { src: "images/dcal_formula2_rear.webp", cap: "Rear view" },
      { src: "images/dcal_formula2_cockpit.webp", cap: "Cockpit" },
      { src: "images/dcal_formula2_wire.webp", cap: "Wireframe" },
      { src: "images/dcal_formula2_UV.webp", cap: "UV map" },
    ],
  },
  simulation_Scenarios: {
    titleEn: "Simulator scenarios",
    titleEs: "Escenarios de simulación",
    subtitle: "",
    images: [
      { src: "images/dcal_scenarios_1.webp", cap: "Wire of Av.Francia area, Valencia · Car driving practice simulator" },
      { src: "images/dcal_scenarios_7.webp", cap: "Av.Francia area, Valencia · Car driving practice simulator" },
      { src: "images/dcal_scenarios_8.webp", cap: "Av.Francia area, Valencia · Car driving practice simulator" },
      { src: "images/dcal_scenarios_graneles01.webp", cap: "Grapling dock in Valencia's Port" },
      { src: "images/dcal_scenarios_graneles02.webp", cap: "Grapling dock in Valencia's Port" },
      { src: "images/hero_11.webp", cap: "Bridge detail" },
      { src: "images/hero_12.webp", cap: "Deck detail" },
    ],
  },  
    archviz_TwnSqr: {
    titleEn: "Town Square Renovation",
    titleEs: "Renovación Plaza del pueblo",
    subtitle:
      "Otos (Valencia, Spain).",
    images: [
      {
        beforeAfter: true,
        before: "images/dcal_otos-actual-01.webp",
        after: "images/dcal_otos-actuacion-01.webp",
        cap: "First Option · Before & After",
      },
            {
        beforeAfter: true,
        before: "images/dcal_otos-actual-01.webp",
        after: "images/dcal_otos-actuacion-08.webp",
        cap: "Second Option · Before & After",
      },
    ],
  },
  motorsport_GTR: {
    titleEn: "Nismo GTR GT500 2018",
    titleEs: "Nismo GTR GT500 2018",
    subtitle:
      "47k triangles (including cockpit, wheels and steering wheel).",
    images: [
      { src: "images/dcal_nismo_09.webp", cap: "Motul Autech · Top" },
      {
        turntable: true,
        framesDir: "images/nismo_turntable/nismo_tt_",  // ← ajusta esta ruta
        frameCount: 24,
        cap: "360° view",
      },      
      {
        beforeAfter: true,
        before: "images/dcal_nismo_wire_front.webp",
        after: "images/dcal_nismo_00.webp",
        cap: "Motul Autech · Top · Wire",
      },        
      {
        beforeAfter: true,
        before: "images/dcal_nismo_cockpit_wire.webp",
        after: "images/dcal_nismo_cockpit.webp",
        cap: "Cockpit view · Wire",
      },         
      { src: "images/dcal_nismo_10.webp", cap: "Front · Motul" },
      { src: "images/dcal_nismo_07.webp", cap: "Rear · Realize" },
      { src: "images/dcal_nismo_untitled4.webp", cap: "CS Craft Sports" },
      { src: "images/dcal_nismo_untitled.webp", cap: "Calsonic rear" },

      { src: "images/dcal_nismo_wire-02.webp", cap: "Wireframe rear" },
      { src: "images/dcal_nismo_wire-01.webp", cap: "Wireframe front" },
      { src: "images/dcal_nismo_UV.webp", cap: "UV map" },
    ],
  },

    archviz_MainRd: {
    titleEn: "Main Road Renovation",
    titleEs: "Renovación Carretera principal",
    subtitle:
      "Location: Villar del Arzobispo (Valencia, Spain).",
    images: [
      {
        beforeAfter: true,
        before: "images/dcal_VdA-before.webp",
        after: "images/dcal_VdA-after.webp",
        cap: "Main Road Renovation · Before & After",
      },
    ],
  },
  motorsport_STC: {
    titleEn: "STC 2000 2019",
    titleEs: "STC 2000 2019",
    subtitle:
      "STC 2000 Toyota 2019 model. 32k triangles including cockpit, wheels and steering wheel.",
    images: [
      { src: "images/hero_28.webp", cap: "Front left · YPF Infinia" },
      { src: "images/hero_29.webp", cap: "Rear left · YPF Infinia" },
      { src: "images/hero_30.webp", cap: "Cockpit" },
      { src: "images/hero_31.webp", cap: "Wireframe front" },
      { src: "images/hero_32.webp", cap: "Wireframe rear" },
      { src: "images/hero_33.webp", cap: "UV map" },
    ],
  },
  motorsport_SF: {
    titleEn: "Super Formula 2019",
    titleEs: "Super Formula 2019",
    subtitle:
      "34k triangles including cockpit, wheels and steering wheel.",
    images: [
      { src: "images/dcal_superformula_front_4545.webp", cap: "Front view" },
      { src: "images/dcal_superformula_top_9999.webp", cap: "Top view" },
      { src: "images/dcal_superformula_rear_4545.webp", cap: "Rear view" },

      { src: "images/dcal_superformula_wire_01.webp", cap: "Wireframe rear" },
      { src: "images/dcal_superformula_wire_02.webp", cap: "Wireframe front" },
      { src: "images/dcal_superformula_UV.webp", cap: "UV map" },
    ],
  },
  motorsport_NSC: {
    titleEn: "NASCAR 2019",
    titleEs: "NASCAR 2019",
    subtitle: "Chevrolet Camaro ZL1 2018 from NASCAR.",
    images: [
      {
        beforeAfter: true,
        before: "images/dcal_nascar_front_wire.webp",
        after: "images/dcal_nascar_front.webp",
        cap: "Front · Wire",
      },
      { src: "images/dcal_nascar_rear.webp", cap: "Rear · Fastlap" },
      { src: "images/dcal_nascar_cockpit.webp", cap: "Cockpit" },
      { src: "images/dcal_nascar_UV.webp", cap: "UV map" },
    ],
  },
  motorsport_FE: {
    titleEn: "Formula E Gen2",
    titleEs: "Formula E Gen2",
    subtitle: "Formula E model launched in 2019.",
    images: [
      { src: "images/hero_45.webp", cap: "Top view" },
      { src: "images/hero_46.webp", cap: "Front view" },
      { src: "images/hero_47.webp", cap: "Wireframe" },
      { src: "images/hero_48.webp", cap: "Steering wheel" },
    ],
  },
};

let lbProject = null;
let lbIndex = 0;
// lang variable already declared above

function openLightbox(projectId) {
  lbProject = PROJECTS[projectId];
  lbIndex = 0;
  document.getElementById("lightbox").style.display = "flex";
  document.body.style.overflow = "hidden";
  renderLightbox();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "";
}

function closeLightboxIfBg(e) {
  if (e.target === document.getElementById("lightbox")) closeLightbox();
}

function renderLightbox() {
  const p = lbProject;
  const img = p.images[lbIndex];

  const lbImg = document.getElementById("lb-img");
  let sliderEl = document.getElementById("lb-bas-slider");

  // ── TURNTABLE ──────────────────────────────────────────────────────────
  let ttEl = document.getElementById("lb-turntable");

  if (img.turntable) {
    lbImg.style.display = "none";
    if (sliderEl) sliderEl.style.display = "none";

    if (!ttEl) {
      ttEl = document.createElement("div");
      ttEl.id = "lb-turntable";
      lbImg.parentNode.insertBefore(ttEl, lbImg);
    }

    ttEl._cleanup && ttEl._cleanup();
    ttEl.style.cssText = `
      display:flex;align-items:center;justify-content:center;
      position:relative;max-width:100%;
      max-height:calc(100vh - 160px);aspect-ratio:4/3;
      width:min(700px,90vw);cursor:grab;
      user-select:none;-webkit-user-select:none;touch-action:none;
    `;
    ttEl.innerHTML = `
      <div id="tt-progress" style="position:absolute;inset:0;display:flex;
        flex-direction:column;align-items:center;justify-content:center;gap:10px;
        background:#111;border-radius:8px;z-index:2;">
        <div style="width:140px;height:2px;background:#333;border-radius:2px;overflow:hidden;">
          <div id="tt-fill" style="height:100%;width:0%;background:#fff;transition:width .1s;"></div>
        </div>
        <span style="font-size:11px;letter-spacing:.08em;color:#666;font-family:sans-serif;">cargando frames…</span>
      </div>
      <img id="tt-frame" draggable="false" alt="Vista 360°" style="
        max-width:100%;max-height:calc(100vh - 160px);
        object-fit:contain;display:block;pointer-events:none;border-radius:8px;"/>
      <div id="tt-hint" style="position:absolute;bottom:12px;left:50%;
        transform:translateX(-50%);background:rgba(0,0,0,.55);color:#fff;
        font-size:11px;font-family:sans-serif;padding:4px 13px;border-radius:20px;
        pointer-events:none;opacity:0;transition:opacity .5s;white-space:nowrap;">
        ← arrastra para girar →</div>
    `;

    const FRAMES     = img.frameCount || 24;
    const PREFIX     = img.framesDir;
    const AUTO_SPD   = 90;
    const DRAG_SENS  = 12;
    const frameEl    = ttEl.querySelector("#tt-frame");
    const fillEl     = ttEl.querySelector("#tt-fill");
    const progressEl = ttEl.querySelector("#tt-progress");
    const hintEl     = ttEl.querySelector("#tt-hint");

    const ttImgs = [];
    let loaded = 0, ttFrame = 0, ttAuto = null;
    let ttDragging = false, ttLastX = 0, ttFrameAtStart = 0;
    let ttUserInteracted = false;

    const pad = n => String(n + 1).padStart(3, "0");
    const showTTFrame = i => { ttFrame = ((i % FRAMES) + FRAMES) % FRAMES; frameEl.src = ttImgs[ttFrame].src; };
    const startTTAuto = () => { clearInterval(ttAuto); ttAuto = setInterval(() => { if (!ttDragging) showTTFrame(ttFrame + 1); }, AUTO_SPD); };
    const stopTTAuto  = () => clearInterval(ttAuto);

    for (let i = 0; i < FRAMES; i++) {
      const im = new Image();
      im.src = PREFIX + pad(i) + ".webp";
      im.onload = im.onerror = () => {
        loaded++;
        fillEl.style.width = (loaded / FRAMES * 100) + "%";
        if (loaded === FRAMES) {
          progressEl.style.display = "none";
          showTTFrame(0);
          hintEl.style.opacity = "1";
          setTimeout(() => hintEl.style.opacity = "0", 2800);
          startTTAuto();
        }
      };
      ttImgs.push(im);
    }

    const onDown = e => { ttDragging = true; ttLastX = e.clientX; ttFrameAtStart = ttFrame; ttEl.style.cursor = "grabbing"; ttEl.setPointerCapture(e.pointerId); ttUserInteracted = true; stopTTAuto(); };
    const onMove = e => { if (!ttDragging) return; showTTFrame(ttFrameAtStart - Math.round((e.clientX - ttLastX) / DRAG_SENS)); };
    const onUp   = () => { ttDragging = false; ttEl.style.cursor = "grab"; if (!ttUserInteracted) startTTAuto(); };

    ttEl.addEventListener("pointerdown",   onDown);
    ttEl.addEventListener("pointermove",   onMove);
    ttEl.addEventListener("pointerup",     onUp);
    ttEl.addEventListener("pointercancel", onUp);

    ttEl._cleanup = () => {
      stopTTAuto();
      ttEl.removeEventListener("pointerdown",   onDown);
      ttEl.removeEventListener("pointermove",   onMove);
      ttEl.removeEventListener("pointerup",     onUp);
      ttEl.removeEventListener("pointercancel", onUp);
    };

  } else {
    if (ttEl) { ttEl._cleanup && ttEl._cleanup(); ttEl.style.display = "none"; }
  }
  // ── FIN TURNTABLE ──────────────────────────────────────────────────────

  let vimeoEl = document.getElementById("lb-vimeo");
if (img.video) {
  lbImg.style.display = "none";
  if (sliderEl) sliderEl.style.display = "none";
  if (!vimeoEl) {
    vimeoEl = document.createElement("div");
    vimeoEl.id = "lb-vimeo";
    lbImg.parentNode.insertBefore(vimeoEl, lbImg);
  }
  vimeoEl.style.cssText = `
    display:block;width:min(700px,90vw);
    aspect-ratio:16/9;border-radius:8px;overflow:hidden;
  `;
  vimeoEl.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/SZetOqiG_l0?autoplay=1"
    style="width:100%;height:100%;border:none;" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
} else {
  if (vimeoEl) vimeoEl.style.display = "none";
}
  if (img.beforeAfter) {
    // Hide normal image, show before-after slider
    lbImg.style.display = "none";

    if (!sliderEl) {
      sliderEl = document.createElement("div");
      sliderEl.id = "lb-bas-slider";
      lbImg.parentNode.insertBefore(sliderEl, lbImg);
    }

    sliderEl.style.cssText = `
      position: relative;
      cursor: ew-resize;
      user-select: none;
      -webkit-user-select: none;
      max-width: 100%;
      max-height: calc(100vh - 160px);
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    sliderEl.innerHTML = "";

    // Both images occupy the same space; "before" is clipped from the right
    // using clip-path so both images are always the same size and perfectly aligned.

    const afterImg = document.createElement("img");
    afterImg.src = img.after;
    afterImg.style.cssText = `
      display: block;
      max-width: 100%;
      max-height: calc(100vh - 160px);
      object-fit: contain;
      pointer-events: none;
    `;

    const beforeImg = document.createElement("img");
    beforeImg.src = img.before;
    beforeImg.style.cssText = `
      display: block;
      max-width: 100%;
      max-height: calc(100vh - 160px);
      object-fit: contain;
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      clip-path: inset(0 50% 0 0);
    `;

    // Divider line
    const divider = document.createElement("div");
    divider.style.cssText = `
      position: absolute;
      top: 0; bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      background: #fff;
      pointer-events: none;
    `;

    // Handle
    const handle = document.createElement("div");
    handle.innerHTML = `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 5L2 10L7 15M13 5L18 10L13 15" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    handle.style.cssText = `
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 42px; height: 42px;
      background: #fff;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.35);
    `;
    divider.appendChild(handle);

    // Labels
    const mkLabel = (text, side) => {
      const el = document.createElement("div");
      el.textContent = text;
      el.style.cssText = `
        position: absolute; top: 12px; ${side}: 12px;
        background: rgba(0,0,0,0.5); color: #fff;
        font-size: 12px; font-family: sans-serif;
        padding: 3px 10px; border-radius: 20px; pointer-events: none;
      `;
      return el;
    };

    sliderEl.appendChild(afterImg);
    sliderEl.appendChild(beforeImg);
    sliderEl.appendChild(divider);
    sliderEl.appendChild(mkLabel("Antes", "left"));
    sliderEl.appendChild(mkLabel("Después", "right"));

    // Once the after image loads, size the before image to match exactly
    const syncSize = () => {
      beforeImg.style.width  = afterImg.offsetWidth  + "px";
      beforeImg.style.height = afterImg.offsetHeight + "px";
    };
    afterImg.addEventListener("load", syncSize);
    if (afterImg.complete) syncSize();
    window.addEventListener("resize", syncSize);

    const setPos = (pct) => {
      pct = Math.max(0, Math.min(100, pct));
      // clip right side: inset(top right bottom left)
      beforeImg.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      divider.style.left = pct + "%";
    };

    const getPct = (e) => {
      const rect = sliderEl.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      return (x / rect.width) * 100;
    };

    let dragging = false;
    sliderEl.addEventListener("mousedown",  (e) => { dragging = true; setPos(getPct(e)); });
    window.addEventListener("mousemove",    (e) => { if (dragging) setPos(getPct(e)); });
    window.addEventListener("mouseup",      ()  => { dragging = false; });
    sliderEl.addEventListener("touchstart", (e) => { dragging = true; setPos(getPct(e)); }, { passive: true });
    window.addEventListener("touchmove",    (e) => { if (dragging) setPos(getPct(e)); }, { passive: true });
    window.addEventListener("touchend",     ()  => { dragging = false; });

    setPos(50);

  } else {
    // Normal image
    if (sliderEl) sliderEl.style.display = "none";
    lbImg.style.display = "block";
    lbImg.style.opacity = 0;
    lbImg.src = img.src;
    lbImg.onload = () => { lbImg.style.opacity = 1; };
  }

  document.getElementById("lb-cap").textContent = img.cap;
  const title = lang === "es" ? p.titleEs : p.titleEn;
  const sub = p.subtitle ? " — " + p.subtitle : "";
  document.getElementById("lb-title").textContent =
    title + sub + "  " + (lbIndex + 1) + " / " + p.images.length;

  // Arrows visibility
  document.getElementById("lb-prev").style.opacity = lbIndex > 0 ? "1" : "0.2";
  document.getElementById("lb-next").style.opacity =
    lbIndex < p.images.length - 1 ? "1" : "0.2";

  // Thumbnails
  const thumbsEl = document.getElementById("lb-thumbs");
  thumbsEl.innerHTML = "";
  p.images.forEach((im, i) => {
    const t = document.createElement("img");
    t.src = im.beforeAfter ? im.after : im.src;
    t.alt = im.cap;
    t.style.cssText = `height:56px;width:80px;object-fit:cover;cursor:pointer;border:2px solid ${i === lbIndex ? "#C4793A" : "transparent"};opacity:${i === lbIndex ? "1" : "0.55"};transition:all .2s;flex-shrink:0`;
    t.onclick = (e) => {
      e.stopPropagation();
      lbIndex = i;
      renderLightbox();
    };
    t.onmouseover = () => {
      if (i !== lbIndex) t.style.opacity = "0.85";
    };
    t.onmouseout = () => {
      if (i !== lbIndex) t.style.opacity = "0.55";
    };
    thumbsEl.appendChild(t);
  });

  // Scroll active thumb into view
  const activeTh = thumbsEl.children[lbIndex];
  if (activeTh)
    activeTh.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
}

function lbNav(dir) {
  if (!lbProject) return;
  const next = lbIndex + dir;
  if (next < 0 || next >= lbProject.images.length) return;
  lbIndex = next;
  renderLightbox();
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").style.display === "none") return;
  if (e.key === "ArrowLeft") lbNav(-1);
  if (e.key === "ArrowRight") lbNav(1);
  if (e.key === "Escape") closeLightbox();
});

const HERO_IMGS = [
  "images/dcal_rotonda_night_bridge.webp",
  "images/dcal_formula2_front.webp",
  "images/dcal_liebherr984.webp",
  "images/dcal_alborache_bus_after.webp",
  "images/dcal_nascar_front.webp",

  "images/dcal_otos-actuacion-01.webp",
  "images/dcal_rotonda_nit_hwy.webp",
];

// HERO CAROUSEL
(function () {
  const container = document.getElementById("hero-carousel");
  const dotsEl = document.getElementById("hero-dots");
  let current = 0;
  let timer = null;

  const ANIMATIONS = ["kenburns-ltr", "kenburns-rtl"];

  // Build images
  const imgs = HERO_IMGS.map((src, i) => {
    const el = document.createElement("img");
    el.src = src;
    el.className = "hero-carousel-img" + (i === 0 ? " active" : "");
    el.alt = "Portfolio image " + (i + 1);
    el.style.animationName = ANIMATIONS[i % ANIMATIONS.length]; // ← only change here
    container.appendChild(el);
    return el;
  });

  // Build dots
  const dots = HERO_IMGS.map((_, i) => {
    const d = document.createElement("div");
    d.className = "hero-dot" + (i === 0 ? " active" : "");
    d.onclick = () => goTo(i);
    dotsEl.appendChild(d);
    return d;
  });

  function goTo(n) {
    imgs[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (n + HERO_IMGS.length) % HERO_IMGS.length;
    imgs[current].classList.add("active");
    dots[current].classList.add("active");
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  timer = setInterval(() => goTo(current + 1), 5000);
})();
