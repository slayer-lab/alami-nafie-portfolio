/* =========================================================
   Nafie Alami — Portfolio « Suivi d'expédition NA-2027 »
   ========================================================= */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = 'fr';

  /* ---------------- Traductions (EN) ---------------- */
  const EN = {
    'nav.route': 'Route', 'nav.kpi': 'Results', 'nav.skills': 'Warehouse', 'nav.projects': 'Delivered', 'nav.more': 'File', 'nav.contact': 'Place an order',
    'hero.eyebrow': 'Shipment tracking — live',
    'hero.t1': 'Your next', 'hero.t2': 'supply chain engineer', 'hero.t3': 'is on the way.',
    'hero.sub': "I'm <strong>Nafie Alami</strong>, an Industrial &amp; Logistics Engineer, now in the OPSyL Master's (M2) at Université de Lorraine. I'm looking for a <strong>6&#8209;month internship starting January 2027</strong> in supply chain, continuous improvement or operations performance.",
    'hero.cta1': 'Receive this profile', 'hero.cta2': 'Delivery note (CV)', 'hero.stamp': 'QUALITY<br>CHECKED',
    'lbl.from': 'Sender', 'lbl.to': 'Recipient', 'lbl.toVal': 'Your company', 'lbl.content': 'Contents', 'lbl.contentVal': '1 Industrial &amp; Logistics Engineer',
    'lbl.eta': 'Expected delivery', 'lbl.etaVal': 'January 2027', 'lbl.mode': 'Format', 'lbl.modeVal': 'Internship · 6 months',
    'trk.1': 'Trained', 'trk.2': 'Field-tested', 'trk.2d': '3 internships', 'trk.3': 'In transit', 'trk.4': 'Delivered to you', 'trk.4d': 'Jan 2027',
    'route.tag': 'Milk Run route', 'route.title': 'The journey, stop by stop',
    'route.lead': 'I designed a real Milk Run at Tuyauto (4 carts, 19 stops, 24-min cycle). This one is mine. Scroll and the train moves.',
    's1.t': 'Baccalaureate, with honours', 's1.o': 'Mathematical Sciences A, French option · Lycée Prince Moulay Rachid',
    's2.t': 'Preparatory classes, Maths &amp; Physics', 's2.o': 'CPGE · Centre IBN GHAZI. Two years of rigour and complex problem solving.',
    's3.t': 'Engineering degree, Industrial &amp; Logistics Engineering', 's3.o': 'ENSET Mohammedia · production, maintenance, supply chain, quality, information systems.',
    's4.t': 'Logistics assistant', 's4.d': 'Supply chain operations analysis and transport flow monitoring.',
    'k.delay': 'delivery lead time', 'k.cost': 'transport costs', 'k.payback': '1.6-year payback',
    's5.t': 'WMS functional consultant', 's5.d': 'Designed and built a WMS app in Flask (Python, SQLite3) for flow traceability, with slotting optimised by a MILP model.',
    's6.t': 'Methods engineer (final-year internship)',
    's6.d': 'DMAIC project at a Renault and Stellantis supplier: diagnosis of the Stamping and Cutting workshops (VSM, SIPOC, Pareto, Ishikawa, 5 Whys), then design of a Milk Run / Mizusumashi system. I also ran a benchmark of 4 suppliers, wrote the specifications, built sizing tools (Excel VBA, Python) and the business case.',
    's7.t': "M2 OPSyL, Logistics Systems Organisation and Management", 's7.o': 'Université de Lorraine, UFR MIM · modelling, simulation and optimisation of logistics systems.',
    's8.m': 'January 2027 · Final destination', 's8.t': 'Your company?', 's8.d': '6-month internship. Supply chain, continuous improvement, methods or operations consulting.', 's8.cta': 'Book this slot',
    'kpi.tag': 'Dashboard', 'kpi.title': 'Results you can measure', 'kpi.lead': 'One key figure per experience, from my internships and projects.',
    'kpi.n1': 'saved per year', 'kpi.n2': 'delivery lead time', 'kpi.app': '&nbsp;WMS', 'kpi.n3': 'built from scratch', 'kpi.n4': 'budget target (DMAIC)',
    'wh.tag': 'Skills warehouse', 'wh.title': 'Every skill in its slot',
    'wh.lead': "Smart slotting, just like the WMS I built. Click a bin to see where the skill was used.",
    'wh.pickTitle': 'Select a bin', 'wh.pickHint': 'Each bin holds one skill. Locations are coded by aisle, level and position, like in a warehouse.',
    'pr.tag': 'Delivered parcels', 'pr.title': 'Projects', 'pr.lead': 'Every project was carried through and delivered.', 'pr.delivered': 'DELIVERED ✓', 'pr.role': 'Project lead',
    'p1.t': 'Inter-operation Milk Run', 'p1.d': 'I led the project end to end: transport of semi-finished parts, small bins fitted to workstations and the bin purchase. I also built the sizing calculators, the direct labour calculation, the containerisation plan and the time-study sheets.',
    'p2.t': 'Lean Six Sigma project', 'p2.d': 'Team DMAIC with a −25% budget target: 5W2H, Pareto, 5 Whys, action plan and a standardised follow-up sheet in Excel VBA.',
    'p3.t': 'WMS app + MILP slotting', 'p3.d': 'A complete WMS app in Flask to trace warehouse flows, with a MILP model that optimises where items are stored.',
    'p4.t': 'Real-time AI detection (YOLOv8)', 'p4.d': 'A Python AI model (YOLOv8) wired to dynamic signalling (LEDs, buzzer, Raspberry Pi) that reacts in real time to critical situations.',
    'p5.t': 'Assembly workshop on ERP', 'p5.d': 'Data set-up and launch of an electrical-box assembly workshop in Odoo, with a Power BI dashboard and Excel VBA automation.',
    'p6.t': 'Aerospace simulation &amp; FMEA', 'p6.d': 'Modelling and simulation of an aerospace production system in Arena, with a performance dashboard. FMEA of a cement plant rotary kiln.',
    'dc.tag': 'Accompanying documents', 'dc.title': 'Compliance file', 'dc.cert': 'Certifications', 'dc.lang': 'Languages',
    'dc.fr': 'French', 'dc.en': 'English', 'dc.ar': 'Arabic', 'dc.b2': 'B2 · advanced', 'dc.native': 'native',
    'dc.soft': 'Soft skills', 'sk.1': 'On the shop floor', 'sk.2': 'Analysis and synthesis', 'sk.3': 'Loves a challenge', 'sk.4': 'Autonomy', 'sk.5': 'Teamwork', 'sk.6': 'Client relations',
    'dc.life': 'Volunteering &amp; sport', 'dc.gil': 'orientation and induction events, 2023–2026', 'dc.jlm': 'Young Moroccan Leaders', 'dc.jlmD': 'volunteering, addiction-awareness day',
    'dc.sport': 'Club football · Weight training', 'dc.sportD': 'team spirit and consistency',
    'or.tag': 'Purchase order', 'or.title': 'Place your order', 'or.lead': "An internship offer, a question, a chat? Fill in the purchase order and I'll get back to you quickly.",
    'or.phone': 'PHONE', 'or.loc': 'BASE', 'or.locVal': 'Metz, France · Driving licence · mobile', 'or.cv': 'Download CV (PDF)',
    'or.po': 'PURCHASE ORDER', 'or.company': 'Company', 'or.name': 'Contact name', 'or.email': 'Email', 'or.item': 'Item ordered',
    'or.i1': '6-month internship · Jan 2027', 'or.i2': 'Call / interview', 'or.i3': 'Other', 'or.msg': 'Delivery instructions',
    'or.send': 'Confirm order', 'or.foot': 'Your email app opens with the order pre-filled.',
    'ft.end': 'End of manifest', 'snd.title': 'Order ready. Send with:', 'snd.mail': 'Mail app'
  };
  const FR = {};
  const ERR = {
    fr: 'Merci de remplir tous les champs avec un email valide.',
    en: 'Please fill in every field with a valid email.'
  };

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    $$('[data-i18n],[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18n || el.dataset.i18nHtml;
      if (!(key in FR)) FR[key] = el.innerHTML;
      const val = l === 'en' ? (EN[key] ?? FR[key]) : FR[key];
      el.innerHTML = val;
    });
    const spans = $$('#langBtn span');
    spans[0].classList.toggle('on', l === 'fr');
    spans[1].classList.toggle('on', l === 'en');
    buildRacks();
    $$('.count.done').forEach(el => { el.textContent = fmt(+el.dataset.to, el); });
    setDate();
    try { localStorage.setItem('na-lang', l); } catch (e) { /* stockage indisponible */ }
    requestAnimationFrame(layoutRoute);
  }
  $('#langBtn').addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr'));

  /* ---------------- Code-barres ---------------- */
  (function barcode() {
    const svg = $('#barcode');
    const code = 'NA2027FRSUPPLYCHAIN';
    let x = 0, bars = '';
    const pattern = [];
    for (const ch of code) {
      const c = ch.charCodeAt(0);
      pattern.push(1 + (c % 3), 1 + ((c >> 2) % 2), 1 + ((c >> 1) % 3), 1);
    }
    pattern.forEach((w, i) => {
      if (i % 2 === 0) bars += `<rect x="${x}" y="0" width="${w}" height="54"/>`;
      x += w;
    });
    svg.setAttribute('viewBox', `0 0 ${x} 54`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.innerHTML = bars;
  })();

  /* ---------------- Navigation ---------------- */
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  $$('.nav a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false');
  }));

  const sections = $$('main section[id]');
  const navLinks = $$('.nav a');
  function onScrollNav() {
    const y = window.scrollY + 120;
    let cur = '';
    sections.forEach(s => { if (s.offsetTop <= y) cur = s.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
    const max = document.documentElement.scrollHeight - innerHeight;
    $('#scrollProgress').style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }

  /* ---------------- Tournée Milk Run ---------------- */
  const wrap = $('#routeWrap'), svg = $('#routeSvg'), base = $('#routeBase'), done = $('#routeDone'), train = $('#train');
  const stops = $$('.stop');
  let pathLen = 0, pinYs = [];

  function layoutRoute() {
    const wr = wrap.getBoundingClientRect();
    const pts = stops.map(s => {
      const r = $('.stop-pin', s).getBoundingClientRect();
      return { x: r.left - wr.left + r.width / 2, y: r.top - wr.top + r.height / 2 };
    });
    pinYs = pts.map(p => p.y);
    const mobile = innerWidth <= 900;
    const off = mobile ? 0 : Math.min(140, wr.width * 0.12);
    let d = `M ${pts[0].x} ${pts[0].y - 40}`;
    d += ` L ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], dy = b.y - a.y, s = i % 2 ? -1 : 1;
      d += ` C ${a.x + off * s} ${a.y + dy * 0.35}, ${b.x + off * s} ${b.y - dy * 0.35}, ${b.x} ${b.y}`;
    }
    svg.setAttribute('viewBox', `0 0 ${wr.width} ${wr.height}`);
    base.setAttribute('d', d);
    done.setAttribute('d', d);
    pathLen = base.getTotalLength();
    done.style.strokeDasharray = `${pathLen}`;
    updateTrain();
  }

  function lengthAtY(targetY) {
    let lo = 0, hi = pathLen;
    for (let k = 0; k < 22; k++) {
      const mid = (lo + hi) / 2;
      if (base.getPointAtLength(mid).y < targetY) lo = mid; else hi = mid;
    }
    return lo;
  }

  function updateTrain() {
    if (!pathLen) return;
    const wr = wrap.getBoundingClientRect();
    const targetY = innerHeight * 0.55 - wr.top;
    const L = Math.max(0, Math.min(pathLen, lengthAtY(targetY)));
    const p = base.getPointAtLength(L);
    const p2 = base.getPointAtLength(Math.min(pathLen, L + 2));
    const p1 = base.getPointAtLength(Math.max(0, L - 2));
    const ang = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    const sc = innerWidth <= 640 ? 0.6 : 0.85;
    // le tracteur est à droite du SVG : on aligne l'avant du train sur le point
    train.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${ang}deg) scale(${sc}) translate(-108px, -20px)`;
    train.style.transformOrigin = '0 0';
    done.style.strokeDashoffset = `${pathLen - L}`;
    stops.forEach((s, i) => s.classList.toggle('reached', pinYs[i] <= p.y + 4));
  }

  /* ---------------- Apparitions ---------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
  $$('.stop, .parcel').forEach(el => io.observe(el));
  $$('.sec-head, .doc, .po, .order-copy').forEach(el => { el.classList.add('reveal'); io.observe(el); });

  /* ---------------- Compteurs KPI ---------------- */
  function fmt(v, el) {
    const dec = +(el.dataset.dec || 0);
    return v.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  function countUp(el) {
    const to = +el.dataset.to;
    if (reduceMotion) { el.textContent = fmt(to, el); el.classList.add('done'); return; }
    const t0 = performance.now(), dur = 1600;
    const step = now => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(to * e, el);
      if (k < 1) requestAnimationFrame(step); else el.classList.add('done');
    };
    requestAnimationFrame(step);
  }
  const dash = $('.dash');
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      dash.classList.add('on');
      $$('.count', dash).forEach(countUp);
      obs.disconnect();
    });
  }, { threshold: 0.3 }).observe(dash);

  /* ---------------- Entrepôt ---------------- */
  const RACKS = [
    { aisle: 'A', fr: 'Lean & amélioration continue', en: 'Lean & continuous improvement', levels: [
      [['DMAIC', 'Démarche structurée de résolution de problème.', 'Structured problem-solving method.', 'Tuyauto · projet LSS Lorraine'],
       ['VSM', 'Cartographie de la chaîne de valeur pour voir les gaspillages.', 'Value stream mapping to expose waste.', 'Tuyauto'],
       ['SIPOC', 'Cadrage du processus : fournisseurs, entrées, sorties, clients.', 'Process scoping: suppliers, inputs, outputs, customers.', 'Tuyauto'],
       ['PDCA', 'Boucle d\'amélioration continue.', 'Continuous improvement loop.', 'Projets ENSET']],
      [['Pareto', 'Prioriser les causes qui pèsent le plus.', 'Prioritise the causes that matter most.', 'Tuyauto · LSS'],
       ['Ishikawa', 'Analyse causes-effet (5M).', 'Cause-and-effect analysis (5M).', 'Tuyauto'],
       ['5 Pourquoi', 'Remonter à la cause racine.', 'Get to the root cause.', 'Tuyauto · LSS'],
       ['QQOQCP', 'Poser le problème sans angle mort.', 'Frame the problem with no blind spot (5W2H).', 'Tuyauto · LSS'],
       ['AMDEC', 'Analyse des modes de défaillance et de leur criticité.', 'Failure mode and criticality analysis (FMEA).', 'Four rotatif · ENSET']]
    ]},
    { aisle: 'B', fr: 'Opérations & supply chain', en: 'Operations & supply chain', levels: [
      [['Milk Run', 'Tournées d\'approvisionnement cadencées des lignes.', 'Timed supply routes feeding the lines.', 'Tuyauto · 19 arrêts, 24 min'],
       ['Gestion de prod.', 'Ordonnancement, capacité, flux.', 'Scheduling, capacity, flow.', 'ENSET'],
       ['MRP II / JAT', 'Planification des besoins et juste-à-temps.', 'Requirements planning and just-in-time.', 'ENSET · M2 OPSyL'],
       ['Stocks', 'Politiques de réapprovisionnement et suivi.', 'Replenishment policies and tracking.', 'GEODIS · WMS']],
      [['Chrono & MOD', 'Chronométrage des postes et calcul de la main-d\'œuvre directe.', 'Time studies and direct labour calculation.', 'Tuyauto'],
       ['Business case', 'Chiffrer un projet : gains, ROI, retour.', 'Pricing a project: savings, ROI, payback.', 'Tuyauto · ROI 62,8 %'],
       ['Benchmark fourn.', 'Comparer et sélectionner les fournisseurs.', 'Compare and select suppliers.', 'Tuyauto · 4 fournisseurs'],
       ['Gestion de projet', 'Planning, jalons, suivi.', 'Planning, milestones, tracking.', 'MS Project · Tuyauto']]
    ]},
    { aisle: 'C', fr: 'Data & digital', en: 'Data & digital', levels: [
      [['Excel VBA', 'Outils de dimensionnement et fiches de suivi automatisées.', 'Sizing tools and automated tracking sheets.', 'Tuyauto · LSS · ENSET'],
       ['Power BI', 'Tableaux de bord de pilotage de la performance.', 'Performance management dashboards.', 'ENSET · atelier Odoo'],
       ['Python', 'Scripts, applications et modèles.', 'Scripts, apps and models.', 'WMS · YOLOv8 · Tuyauto']],
      [['SQL', 'Bases de données et requêtes.', 'Databases and queries.', 'WMS (SQLite3)'],
       ['MILP', 'Programmation linéaire en nombres entiers pour optimiser.', 'Mixed-integer linear programming for optimisation.', 'Slotting WMS'],
       ['MATLAB', 'Calcul scientifique.', 'Scientific computing.', 'CPGE · ENSET'],
       ['Flask', 'Développement d\'applications web métier.', 'Business web app development.', 'Pragmatic Consulting']]
    ]},
    { aisle: 'D', fr: 'ERP & simulation', en: 'ERP & simulation', levels: [
      [['SAP S/4HANA', 'Processus achats et approvisionnement (certifié).', 'Sourcing and procurement processes (certified).', 'Certification SAP'],
       ['Odoo', 'Paramétrage et lancement d\'un atelier.', 'Set-up and launch of a workshop.', 'ENSET']],
      [['Arena', 'Simulation de flux de production.', 'Production flow simulation.', 'Projet aéronautique ENSET'],
       ['MS Office', 'Excel, Word, PowerPoint, MS Project.', 'Excel, Word, PowerPoint, MS Project.', 'Partout'],
       ['WMS', 'Systèmes de gestion d\'entrepôt.', 'Warehouse management systems.', 'Pragmatic Consulting']]
    ]}
  ];
  let selectedLoc = null;
  function buildRacks() {
    const box = $('#racks');
    box.innerHTML = RACKS.map(r => `
      <div class="rack">
        <div class="rack-head"><span class="rack-aisle">${r.aisle}</span><span class="rack-name">${r[lang]}</span></div>
        ${r.levels.map((lv, li) => `
          <div class="shelf" data-level="N${li + 1}">
            ${lv.map((b, bi) => {
              const loc = `${r.aisle}-0${li + 1}-0${bi + 1}`;
              return `<button class="bin${loc === selectedLoc ? ' sel' : ''}" data-loc="${loc}" data-a="${RACKS.indexOf(r)}" data-l="${li}" data-b="${bi}">${b[0]}<small>${loc}</small></button>`;
            }).join('')}
          </div>`).join('')}
        <div class="rack-foot"></div>
      </div>`).join('');
    $$('.bin', box).forEach(btn => btn.addEventListener('click', () => pick(btn)));
    if (selectedLoc) { const b = $(`.bin[data-loc="${selectedLoc}"]`); if (b) pick(b, true); }
  }
  function pick(btn, silent) {
    $$('.bin').forEach(b => b.classList.remove('sel'));
    btn.classList.add('sel');
    selectedLoc = btn.dataset.loc;
    const item = RACKS[btn.dataset.a].levels[btn.dataset.l][btn.dataset.b];
    $('#pickLoc').textContent = (lang === 'fr' ? 'EMPLACEMENT ' : 'LOCATION ') + btn.dataset.loc;
    $('#pickName').textContent = item[0];
    $('#pickDesc').textContent = lang === 'fr' ? item[1] : item[2];
    $('#pickUsed').textContent = (lang === 'fr' ? '↳ Utilisé : ' : '↳ Used at: ') + item[3];
    if (!silent) {
      const pk = $('#picker');
      pk.classList.remove('flash'); void pk.offsetWidth; pk.classList.add('flash');
    }
  }

  /* ---------------- Bon de commande ---------------- */
  function setDate() {
    const d = new Date();
    $('#poDate').textContent = d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    $('#poNumber').textContent = `PO-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  }
  const form = $('#orderForm'), overlay = $('#sendOverlay');
  let urls = null;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(form);
    const company = (f.get('company') || '').trim(), name = (f.get('name') || '').trim(),
      email = (f.get('email') || '').trim(), item = f.get('item'), msg = (f.get('message') || '').trim();
    if (!company || !name || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $('#poError').textContent = ERR[lang];
      return;
    }
    $('#poError').textContent = '';
    const to = 'nafieddhy@gmail.com';
    const subject = `[${$('#poNumber').textContent}] ${item} — ${company}`;
    const body = `${msg}\n\n—\n${name}\n${company}\n${email}`;
    const enc = encodeURIComponent;
    urls = {
      mail: `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`,
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${enc(subject)}&body=${enc(body)}`
    };
    overlay.classList.add('show');
    $('#sendGmail').focus();
  });
  $('#sendGmail').addEventListener('click', () => { window.open(urls.gmail, '_blank', 'noopener,noreferrer'); overlay.classList.remove('show'); });
  $('#sendMail').addEventListener('click', () => { window.location.href = urls.mail; overlay.classList.remove('show'); });
  $('#sendClose').addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('show'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.classList.remove('show'); });

  /* ---------------- Démarrage ---------------- */
  let saved = 'fr';
  try { saved = localStorage.getItem('na-lang') || ((navigator.language || 'fr').startsWith('fr') ? 'fr' : 'en'); } catch (e) { saved = 'fr'; }
  applyLang(saved);

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScrollNav(); updateTrain(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', () => requestAnimationFrame(layoutRoute));
  window.addEventListener('load', layoutRoute);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutRoute);
  if ('ResizeObserver' in window) new ResizeObserver(() => layoutRoute()).observe(wrap);
  onScrollNav();
})();
