const PROJECTS = {
  archviz_Overpass: {
    titleEn: "Overpass Renders",
    titleEs: "Overpass Renders",
    subtitle:
      "Overpass for cyclists and pedestrians linking Sueca and Fortaleny (Valencia, Spain).",
    images: [
      {
        src: "images/daniel_cal_fortaleny-11-c.jpg",
        cap: "Aerial view day",
      },
      { src: "images/daniel_cal_pont-de-ferro-02.jpg", cap: "Night aerial" },
      { src: "images/daniel_cal_n-autovia-00.jpg", cap: "Highway night" },
      { src: "images/daniel_cal_hwy-11.jpg", cap: "Highway day" },
      { src: "images/daniel_cal_3rd-person-02.jpg", cap: "Bridge walkthrough" },
      { src: "images/daniel_cal_aerial-12.jpg", cap: "Roundabout" },
    ],
  },
  archviz_MainStr: {
    titleEn: "Main Street Renovation",
    titleEs: "Renovación Calle Mayor",
    subtitle:
      "Main street renovation previsualization. Location: Alborache (Valencia, Spain).",
    images: [{ src: "images/hero_34.jpg", cap: "Bus stop" }],
  },
  simulation_Cargo: {
    titleEn: "Cargo Ships",
    titleEs: "Cargo Ships",
    subtitle: "",
    images: [
      { src: "images/hero_7.jpg", cap: "Ocean Wind · Side" },
      { src: "images/hero_8.jpg", cap: "Overview" },
      { src: "images/hero_9.jpg", cap: "Open hold" },
      { src: "images/hero_10.jpg", cap: "Early model" },
      { src: "images/hero_11.jpg", cap: "Bridge detail" },
      { src: "images/hero_12.jpg", cap: "Deck detail" },
    ],
  },
  motorsport_F2: {
    titleEn: "Formula 2",
    titleEs: "Formula 2",
    subtitle:
      "Formula 2 2020. 39k triangles including chassis, cockpit, wheels and steering wheel.",
    images: [
      { src: "images/daniel_cal_f2-front-30-002.jpg", cap: "Front view" },
      { src: "images/daniel_cal_f2-rear-45-002.jpg", cap: "Rear view" },
      { src: "images/daniel_cal_f2-cockpit-001.jpg", cap: "Cockpit" },
      { src: "images/daniel_cal_wire.jpg", cap: "Wireframe" },
      { src: "images/daniel_cal_captura-de-pantalla-2024-05-27-130854.jpg", cap: "UV map" },
    ],
  },
  motorsport_GTR: {
    titleEn: "Nismo GTR GT500 2018",
    titleEs: "Nismo GTR GT500 2018",
    subtitle:
      "Nismo GT-R GT500. 47k triangles including cockpit, wheels and steering wheel.",
    images: [
      { src: "images/daniel_cal_09.jpg", cap: "Motul Autech · Top" },
      { src: "images/daniel_cal_10.jpg", cap: "Front · Motul" },
      { src: "images/daniel_cal_07.jpg", cap: "Rear · Realize" },
      { src: "images/daniel_cal_untitled4.jpg", cap: "CS Craft Sports" },
      { src: "images/daniel_cal_untitled.jpg", cap: "Calsonic rear" },
      { src: "images/daniel_cal_11.jpg", cap: "Cockpit render" },
      { src: "images/daniel_cal_wire-03.jpg", cap: "Interior wireframe" },
      { src: "images/daniel_cal_wire-02.jpg", cap: "Wireframe rear" },
      { src: "images/daniel_cal_wire-01.jpg", cap: "Wireframe front" },
      { src: "images/daniel_cal_captura-de-pantalla-2024-05-27-132342.jpg", cap: "UV map" },
    ],
  },
  motorsport_STC: {
    titleEn: "STC 2000 2019",
    titleEs: "STC 2000 2019",
    subtitle:
      "STC 2000 Toyota 2019 model. 32k triangles including cockpit, wheels and steering wheel.",
    images: [
      { src: "images/hero_28.jpg", cap: "Front left · YPF Infinia" },
      { src: "images/hero_29.jpg", cap: "Rear left · YPF Infinia" },
      { src: "images/hero_30.jpg", cap: "Cockpit" },
      { src: "images/hero_31.jpg", cap: "Wireframe front" },
      { src: "images/hero_32.jpg", cap: "Wireframe rear" },
      { src: "images/hero_33.jpg", cap: "UV map" },
    ],
  },
  motorsport_SF: {
    titleEn: "Super Formula 2019",
    titleEs: "Super Formula 2019",
    subtitle:
      "Super Formula 2019 model. 34k triangles including cockpit, wheels and steering wheel.",
    images: [
      { src: "images/hero_34.jpg", cap: "Front view" },
      { src: "images/hero_35.jpg", cap: "Top view" },
      { src: "images/hero_36.jpg", cap: "Rear view" },
      { src: "images/hero_37.jpg", cap: "Wireframe rear" },
      { src: "images/hero_38.jpg", cap: "Wireframe front" },
      { src: "images/hero_39.jpg", cap: "UV map" },
    ],
  },
  motorsport_NSC: {
    titleEn: "NASCAR 2019",
    titleEs: "NASCAR 2019",
    subtitle: "Chevrolet Camaro ZL1 2018 from NASCAR.",
    images: [
      { src: "images/hero_40.jpg", cap: "Front left · Fastlap" },
      { src: "images/hero_41.jpg", cap: "Rear · Fastlap" },
      { src: "images/hero_42.jpg", cap: "Cockpit" },
      { src: "images/hero_43.jpg", cap: "Wireframe" },
      { src: "images/hero_44.jpg", cap: "UV map" },
    ],
  },
  motorsport_FE: {
    titleEn: "Formula E Gen2",
    titleEs: "Formula E Gen2",
    subtitle: "Formula E model launched in 2019.",
    images: [
      { src: "images/hero_45.jpg", cap: "Top view" },
      { src: "images/hero_46.jpg", cap: "Front view" },
      { src: "images/hero_47.jpg", cap: "Wireframe" },
      { src: "images/hero_48.jpg", cap: "Steering wheel" },
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
  lbImg.style.opacity = 0;
  lbImg.src = img.src;
  lbImg.onload = () => {
    lbImg.style.opacity = 1;
  };
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
    t.src = im.src;
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
  "images/daniel_cal_pont-de-ferro-02.jpg",
  "images/daniel_cal_f2-front-30-002.jpg",
  "images/daniel_cal_liebherr984.jpg",
  "images/daniel_cal_bus-04.jpg",
  "images/daniel_cal_nascar-render-01.jpg",
  "images/daniel_cal_superformula-render-wire-01.jpg",
  "images/hero_54.jpg",
  "images/daniel_cal_n-autovia-00.jpg",
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
