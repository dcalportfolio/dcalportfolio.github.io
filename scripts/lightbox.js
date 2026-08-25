const PROJECTS = {
  archviz_Overpass: {
    titleEn: "Overpass Renders",
    titleEs: "Overpass Renders",
    subtitle:
      "Overpass for cyclists and pedestrians linking Sueca and Fortaleny towns (Valencia, Spain).",
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
      "Renovation of the main street. Conversion to one-way traffic, continuous roadway and pavement, addition of bollards and tactile tiles, and a new loading zone. Alborache (Valencia, Spain).",
    images: [
      {
        beforeAfter: true,
        before: "images/dcal_alborache_bus_before.webp",
        after: "images/dcal_alborache_bus_after.webp",
        cap: "Bus stop area · Before & After",
      },
            {
        beforeAfter: true,
        before: "images/dcal_alborache_church_before.webp",
        after: "images/dcal_alborache_church_after.webp",
        cap: "Church Square · Before & After",
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
    subtitle: "Different cargo ships models for Harbour simulators",
    images: [
      { src: "images/dcal_cargo_8.webp", cap: "Ocean Wind · Side" },
      { src: "images/dcal_cargo_3.webp", cap: "Overview" },
      { src: "images/dcal_cargo_5.webp", cap: "Open hold" },
      { src: "images/dcal_cargo_7_SHIP.webp", cap: "Early model" },

    ],
  },
  motorsport_F2: {
    titleEn: "Formula 2 2020",
    titleEs: "Formula 2 2020",
    subtitle:
      "39k triangles including chassis, cockpit, wheels and steering wheel.",
    images: [

      {
        beforeAfter: true,
        before: "images/dcal_formula2_front_wire.webp",
        after: "images/dcal_formula2_front.webp",
        cap: "Front · Wireframe",
      },
      {
        beforeAfter: true,
        before: "images/dcal_formula2_rear_crop_wire.webp",
        after: "images/dcal_formula2_rear_crop.webp",
        cap: "Rear · Wireframe",
      },
      { src: "images/dcal_formula2_cockpit.webp", cap: "Cockpit" },
      { src: "images/dcal_formula2_wire.webp", cap: "Wireframe" },
      { src: "images/dcal_formula2_UV.webp", cap: "UV map" },
    ],
  },
  simulation_HeavyMachinery: {
    titleEn: "Heavy Machinery",
    titleEs: "Maquinaria Pesada",
    subtitle: "",
    images: [
      { src: "images/CAT_16m_01.webp", cap: "CAT 16m · Front" },
      { src: "images/CAT_16m_02.webp", cap: "CAT 16m · Back" },
      { src: "images/dcal_liebherr984.webp", cap: "Liebherr 984C" },
      { src: "images/dcal_cat980k.webp", cap: "CAT 994D" },
      { src: "images/dcal_sem669c.webp", cap: "SEM 669C" },
      { src: "images/CAT980k02y.webp", cap: "CAT 980K" },
    ],
  },

  simulation_HeavyMachineryHarbour: {
    titleEn: "Heavy Machinery - Harbour",
    titleEs: "Maquinaria Pesada - Puerto",
    subtitle: "",
    images: [
      { src: "images/dcal_gottwald8.webp", cap: "Gottwald 8 back and Cabin" },
      { src: "images/CRANE_straddle11500tris.webp", cap: "Straddle Carrier" },
      { src: "images/dcal_liebherr-transtainer.webp", cap: "Liebherr Transtainer" },
      { src: "images/reach_stacker00.webp", cap: "Reachstacker" },
      { src: "images/dcal_terberg_283.webp", cap: "Terberg 283 Tractor" },
      { src: "images/dcal_jungheinrich_425_01.webp", cap: "Jungheinrich 425" },
      { src: "images/dcal_jungheinrich_425_02.webp", cap: "Jungheinrich 425 EFG" },
      { src: "images/dcal_d38b5c22905663-5631a356c33af.webp", cap: "Iveco Stralis Truck" },            
    ],
  },  

  simulation_Car: {
    titleEn: "Car Driving Simulator",
    titleEs: "Simulador de conducción",
    subtitle: "",
    images: [
      { src: "images/opel_corsa_d_front.webp", cap: "Opel Corsa" },
      { src: "images/opel_corsa_wireframe.webp", cap: "Opel Corsa wireframe and interior" },
      { src: "images/bmw_x5_front_back.webp", cap: "BMW X5" },
      { src: "images/volkswagen_polo_9n.webp", cap: "Volkswagen Polo 9n" },
      { src: "images/renault_r28_wire.webp", cap: "Renault r28 Formula 1 wireframe" },
      { src: "images/renault_r28_front_and_back.webp", cap: "Renault r28 Formula 1" },
      { src: "images/bugatti_veyron_wire.webp", cap: "Bugatti Veyron wireframe" },           
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
      {
        beforeAfter: true,
        before: "images/dcal_nismo_wire_04.webp",
        after: "images/dcal_nismo_04.webp",
        cap: "Motul Autech Team · Top · Wire",
      }, 
      {
        turntable: true,
        framesDir: "images/nismo_turntable/nismo_tt_",  // ← ajusta esta ruta
        frameCount: 24,
        thumb: "images/360_turntable_icon.webp",  // ← imagen de miniatura, distinta a los frames
        cap: "360° view",
      },      
       
      {
        beforeAfter: true,
        before: "images/dcal_nismo_cockpit_wire.webp",
        after: "images/dcal_nismo_cockpit.webp",
        cap: "Cockpit view · Wire",
      },         

      { src: "images/dcal_nismo_realize_01.webp", cap: "Rear · Realize Team" },
      { src: "images/dcal_nismo_cs_01.webp", cap: "CS Craft Sports Team" },
      { src: "images/dcal_nismo_calsonic_01.webp", cap: "Calsonic Team" },

      { src: "images/dcal_nismo_wire-02.webp", cap: "Wireframe rear" },

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
      {
        beforeAfter: true,
        before: "images/dcal_stc2000--wire-01.webp",
        after: "images/dcal_stc2000-render-front-left-02.webp",
        cap: "Front left · YPF Infinia" },
      {
        beforeAfter: true,
        before: "images/dcal_stc2000--wire-02.webp",
        after: "images/dcal_stc2000-render-rear-left.webp",
        cap: "Rear left · YPF Infinia" },
      { src: "images/dcal_stc2000-render-cockpit-01.webp", cap: "Cockpit" },

      { src: "images/dcal_stc2000_UV.webp", cap: "UV map" },
    ],
  },
  motorsport_SF: {
    titleEn: "Super Formula 2019",
    titleEs: "Super Formula 2019",
    subtitle:
      "34k triangles including cockpit, wheels and steering wheel.",
    images: [
      { src: "images/dcal_superformula_front_4548.webp", cap: "Top side view" },
      { src: "images/dcal_superformula_top_9999.webp", cap: "Top view" },
      { src: "images/dcal_superformula_jmcs_rear_4545.webp", cap: "Rear view" },

      { src: "images/dcal_superformula_wire_01.webp", cap: "Front Wireframe" },
      { src: "images/dcal_superformula_wire_02.webp", cap: "Rear Wireframe" },
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
      
      { src: "images/dcal_nascar_rear.webp", cap: "Rear" },
      { src: "images/dcal_nascar_cockpit.webp", cap: "Cockpit" },
      { src: "images/dcal_nascar_UV.webp", cap: "UV map" },
    ],
  },
  motorsport_FE: {
    titleEn: "Formula E Gen2",
    titleEs: "Formula E Gen2",
    subtitle: "Formula E model launched in 2019.",
    images: [

      { src: "images/dcal_Formula_E_gen2_Audi-logos_top_side.webp", cap: "Top side view" },
      { src: "images/dcal_Formula_E_gen2_Audi-logos_back_black.webp", cap: "Top Back view" },
      { src: "images/dcal_Formula_E_gen2_Audi-logos_back_side.webp", cap: "Side back view" },
      { src: "images/dcal_formula_e_gen2_wire.webp", cap: "Wireframe" },
      { src: "images/dcal_formula_e_gen2_sw.webp", cap: "Steering wheel" },    ],
  },

  motorsport_indycar: {
    titleEn: "Indycar 2019",
    titleEs: "Indycar 2019",
    subtitle:
      "34k triangles including cockpit, wheels and steering wheel.",
    images: [
      { src: "images/dcal_indycar_street_01.webp", cap: "Street Race setup · Front view" },
      { src: "images/dcal_indycar_street_03.webp", cap: "Oval setup · Rear view" },


      { src: "images/dcal_indycar-2-8-render-wire-01.webp", cap: "Wireframe rear" },
      { src: "images/dcal_indycar-sw.webp", cap: "Indycar Steering Wheel" },

    ],
  },

  motorsport_SuperGT: {
    titleEn: "SuperGT GT500",
    titleEs: "SuperGT GT500",
    subtitle:
      "34k triangles including cockpit, wheels and steering wheel.",
    images: [
      { src: "images/dcal_lexus_side.webp", cap: "Top side view" },
      {
        beforeAfter: true,
        before: "images/dcal_lexus_top-wire.webp",
        after: "images/dcal_lexus_top.webp",
        cap: "Top · Wireframe",
      },      

      {
        beforeAfter: true,
        before: "images/dcal_lexus_int-wire.webp",
        after: "images/dcal_lexus_int.webp",
        cap: "Cockpit · Wireframe",
      },   
      { src: "images/dcal_lexus_UV.webp", cap: "UV map" },
    ],
  },

  
  motorsport_StockCar: {
  titleEn: "StockCar Brasil 2018",
  titleEs: "StockCar Brasil 2018",
  subtitle:
    "34k triangles including cockpit, wheels and steering wheel.",
  images: [
    { src: "images/dcal_stock_car_render_01.webp", cap: "Elevated view" },
    { src: "images/dcal_stock_car_render_04.webp", cap: "Side view" },
    { src: "images/dcal_stock_car_render_02.webp", cap: "Rear view" },

    { src: "images/dcal_stock_car_render_03.webp", cap: "Cockpit" },
    { src: "images/dcal_stock_car_wire.webp", cap: "Wireframe" },
    { src: "images/dcal_stock_car_UV.webp", cap: "UV map" },
  ],
},
  other_Sculpt: {
    titleEn: "Sculpt",
    titleEs: "Sculpt",
    subtitle: "",
    images: [
      { src: "images/dcal_sculpt_shrek.webp", cap: "Shrek" },
      { src: "images/dcal_sculpt_swimmer.webp", cap: "Swimmer" },
      { src: "images/dcal_sculpt_body.webp", cap: "Body" },
    ],
  },
  other_Gunnimals: {
    titleEn: "Gunnimals - Mobile Game",
    titleEs: "Gunnimals - Mobile Game",
    subtitle: "",
    images: [
      { src: "images/dcal_gunnimals_01.webp", cap: "Gunnimals 01" },
      { src: "images/dcal_gunnimals_02.webp", cap: "Gunnimals 02" },
      { src: "images/dcal_gunnimals_03.webp", cap: "Gunnimals 03" },
      { src: "images/dcal_gunnimals_04.webp", cap: "Gunnimals 04" },
      { src: "images/dcal_gunnimals_05.webp", cap: "Gunnimals 05" },
      { src: "images/dcal_gunnimals_06.webp", cap: "Gunnimals 06" },
      { src: "images/dcal_gunnimals_07.webp", cap: "Gunnimals 07" },
    ],
  },
  simulation_RoadBike: {
    titleEn: "Road bike",
    titleEs: "Road bike",
    subtitle: "Made-up bike model for Road Bike simulator",
    images: [
      {
        beforeAfter: true,
        before: "images/dcal_road_bike_01_wire.webp",
        after: "images/dcal_road_bike_01.webp",
        cap: "Road bike · Wireframe",
      },
      {
        beforeAfter: true,
        before: "images/dcal_road_bike_02_wire.webp",
        after: "images/dcal_road_bike_02.webp",
        cap: "Road bike · Wireframe",
      },
    ],
  },
};

let lbProject = null;
let lbCategory = null;
let lbIndex = 0;
let baToken = 0; // guards the before/after auto-wiggle hint against stale renders
let lbFadeTimer = null;
let lbLoadToken = 0;   // guards against out-of-order image loads when navigating fast
let lbFrontIsA = true; // which of #lb-img / #lb-img-b is currently the visible layer
// lang variable already declared above

function openLightbox(projectId) {
  lbProject = PROJECTS[projectId];
  lbCategory = projectId.split('_')[0];
  lbIndex = 0;
  lbLoadToken++;
  lbFrontIsA = true;
  const lbImg = document.getElementById("lb-img");
  const lbImgB = document.getElementById("lb-img-b");
  if (lbImg) lbImg.style.opacity = 0;
  if (lbImgB) lbImgB.style.opacity = 0;
  document.getElementById("lightbox").style.display = "flex";
  document.body.style.overflow = "hidden";
  renderLightbox();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "";
  clearTimeout(lbFadeTimer);
}

function closeLightboxIfBg(e) {
  if (e.target === document.getElementById("lightbox")) closeLightbox();
}

function renderLightbox() {
  const p = lbProject;
  const img = p.images[lbIndex];

  const lbImg = document.getElementById("lb-img");
  const lbImgB = document.getElementById("lb-img-b");
  let sliderEl = document.getElementById("lb-bas-slider");

  // ── TURNTABLE ──────────────────────────────────────────────────────────
  let ttEl = document.getElementById("lb-turntable");

  if (img.turntable) {
    lbImg.style.display = "none";
    lbImgB.style.display = "none";
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
      max-height:100%;aspect-ratio:4/3;
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
        max-width:100%;max-height:100%;
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
  lbImgB.style.display = "none";
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
    lbImgB.style.display = "none";

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
      max-height: 100%;
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
      max-width: 100vw;
      max-height: 100dvh;
      width: auto;
      height: auto;
      object-fit: contain;
      pointer-events: none;
    `;

    const beforeImg = document.createElement("img");
    beforeImg.src = img.before;
    beforeImg.style.cssText = `
      display: block;
      max-width: 100vw;
      max-height: 100dvh;
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
      width: 42px; height: 42px;
      background: #fff;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.35);
    `;

    // Bigger invisible touch target around the handle. Only touches that
    // start here can drag the slider on mobile — this keeps a pinch-zoom
    // gesture started anywhere else on the image completely untouched.
    const handleHit = document.createElement("div");
    handleHit.style.cssText = `
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 64px; height: 64px;
      display: flex; align-items: center; justify-content: center;
      touch-action: none;
      pointer-events: auto;
    `;
    handleHit.appendChild(handle);
    divider.appendChild(handleHit);

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

    const isTechCat = lbCategory === "motorsport" || lbCategory === "simulation";
    const leftLabel = isTechCat ? "Wireframe" : (lang === "en" ? "Before" : "Antes");
    const rightLabel = isTechCat ? "Render" : (lang === "en" ? "After" : "Después");

    // "Drag me" hint: a fading text pill plus a couple of gentle auto-slides
    // of the handle, so first-time visitors immediately recognize this is
    // an interactive slider and not just a static before/after collage.
    const baHint = document.createElement("div");
    baHint.textContent = lang === "en" ? "\u2190 drag to compare \u2192" : "\u2190 desliza para comparar \u2192";
    baHint.style.cssText = `
      position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%);
      background: rgba(0,0,0,0.55); color: #fff;
      font-size: 12px; font-family: sans-serif; font-weight: 500;
      padding: 4px 13px; border-radius: 20px; pointer-events: none;
      opacity: 0; transition: opacity .5s; white-space: nowrap;
    `;

    sliderEl.appendChild(afterImg);
    sliderEl.appendChild(beforeImg);
    sliderEl.appendChild(divider);
    sliderEl.appendChild(mkLabel(leftLabel, "left"));
    sliderEl.appendChild(mkLabel(rightLabel, "right"));
    sliderEl.appendChild(baHint);

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

    // Auto-wiggle: nudge the handle left then right then back to center
    // using an eased animation, purely as a visual demo of the gesture.
    // Cancels the moment the visitor actually touches the slider, or if a
    // newer render (navigating to another image) has taken over.
    const myBaToken = ++baToken;
    let baUserInteracted = false;
    let baRaf = null;

    const animatePos = (from, to, duration, onDone) => {
      const start = performance.now();
      const step = (now) => {
        if (myBaToken !== baToken || baUserInteracted) return;
        const t = Math.min(1, (now - start) / duration);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        setPos(from + (to - from) * eased);
        if (t < 1) baRaf = requestAnimationFrame(step);
        else if (onDone) onDone();
      };
      baRaf = requestAnimationFrame(step);
    };

    const stopHint = () => {
      baUserInteracted = true;
      if (baRaf) cancelAnimationFrame(baRaf);
      baHint.style.opacity = "0";
    };

    setPos(50);
    setTimeout(() => {
      if (myBaToken !== baToken || baUserInteracted) return;
      baHint.style.opacity = "1";
      animatePos(50, 30, 550, () => {
        animatePos(30, 70, 750, () => {
          animatePos(70, 50, 500);
        });
      });
      setTimeout(() => { if (myBaToken === baToken) baHint.style.opacity = "0"; }, 3400);
    }, 500);

    // Desktop: dragging from anywhere on the image, as before.
    sliderEl.addEventListener("mousedown",  (e) => { stopHint(); dragging = true; setPos(getPct(e)); });
    window.addEventListener("mousemove",    (e) => { if (dragging) setPos(getPct(e)); });
    window.addEventListener("mouseup",      ()  => { dragging = false; });

    // Mobile: only a touch that starts on the handle can drag the slider,
    // and dragging is cancelled the instant a second finger appears —
    // that hand-off lets the browser's native pinch-to-zoom take over
    // cleanly instead of the divider chasing one of the two fingers.
    handleHit.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      stopHint();
      dragging = true;
      setPos(getPct(e));
    }, { passive: true });
    window.addEventListener("touchmove", (e) => {
      if (!dragging) return;
      if (e.touches.length !== 1) { dragging = false; return; }
      setPos(getPct(e));
    }, { passive: true });
    window.addEventListener("touchend", (e) => {
      if (e.touches.length === 0) dragging = false;
    });

  } else {
    // Normal image — cross-fade between two stacked <img> layers instead of
    // mutating .src on the currently-visible one. Some mobile browsers (iOS
    // Safari in particular) can fail to repaint a visible <img> after its
    // .src changes while opacity is mid-transition, leaving the previous
    // photo visibly "stuck" behind the new one. Loading the incoming image
    // into the hidden layer and only revealing it once ready avoids that.
    if (sliderEl) sliderEl.style.display = "none";
    lbImg.style.display = "block";
    lbImgB.style.display = "block";

    const front = lbFrontIsA ? lbImg : lbImgB;
    const back  = lbFrontIsA ? lbImgB : lbImg;

    const myToken = ++lbLoadToken;
    const reveal = () => {
      if (myToken !== lbLoadToken) return; // superseded by a newer navigation
      back.style.opacity = 1;
      front.style.opacity = 0;
      lbFrontIsA = !lbFrontIsA;
    };

    back.onload = reveal;
    back.src = img.src;
    if (back.complete) reveal(); // already cached — onload may not refire
  }

  const title = lang === "es" ? p.titleEs : p.titleEn;
  document.getElementById("lb-title").textContent =
    title + "  " + (lbIndex + 1) + " / " + p.images.length;

  // ── SUBTITLE + CAPTION OVERLAYS (inside the image, fade 3s after change) ──
  const subOverlay = document.getElementById("lb-subtitle-overlay");
  const subText = document.getElementById("lb-subtitle-text");
  const capOverlay = document.getElementById("lb-cap-overlay");
  const capText = document.getElementById("lb-cap-text");

  clearTimeout(lbFadeTimer);

  subText.textContent = p.subtitle || "";
  subOverlay.style.display = p.subtitle ? "block" : "none";

  capText.textContent = img.cap || "";
  capOverlay.style.display = img.cap ? "block" : "none";

  // Show instantly (no transition), then force a reflow so the fade-out
  // transition applies cleanly to the next opacity change.
  [subOverlay, capOverlay].forEach((el) => {
    el.style.transition = "none";
    el.style.opacity = "1";
  });
  void capOverlay.offsetWidth;
  [subOverlay, capOverlay].forEach((el) => {
    el.style.transition = "opacity 0.8s ease";
  });

  lbFadeTimer = setTimeout(() => {
    subOverlay.style.opacity = "0";
    capOverlay.style.opacity = "0";
  }, 3000);

  // Arrows visibility
  document.getElementById("lb-prev").style.opacity = lbIndex > 0 ? "1" : "0.2";
  document.getElementById("lb-next").style.opacity =
    lbIndex < p.images.length - 1 ? "1" : "0.2";

  // Thumbnails
  const thumbsEl = document.getElementById("lb-thumbs");
  thumbsEl.innerHTML = "";
  p.images.forEach((im, i) => {
    const t = document.createElement("img");
    t.src = im.thumb || (im.beforeAfter ? im.after : im.src);
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
  "images/dcal_Formula_E_gen2_Audi-logos_top_side.webp",

  "images/dcal_liebherr984.webp",
  "images/dcal_alborache_bus_after.webp",
  "images/dcal_formula2_front.webp",


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
