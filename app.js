/* =========================================================
   Nafie Alami — « Le rapport » (Data · SAP · Power BI)
   ========================================================= */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = 'fr';
  const t = (fr, en) => (lang === 'fr' ? fr : en);

  /* ---------------- Données ---------------- */
  const TOOLS = ['Power BI', 'SAP S/4HANA', 'Odoo', 'Excel VBA', 'Python', 'SQL', 'MILP', 'Arena'];

  const ITEMS = [
    { type: 'job', date: '02/2026 – 06/2026', org: 'Tuyauto New Mobility · Ain Johra',
      fr: ['Ingénieur méthode (stage de fin d\'études)', 'Analyse des processus de production chez un équipementier de Renault et Stellantis (VSM, SIPOC, Pareto). J\'ai consolidé les nomenclatures d\'emballage de plusieurs projets, construit les outils de dimensionnement et le business case d\'un système Milk Run.'],
      en: ['Methods engineer (final-year internship)', 'Production process analysis at a Renault and Stellantis supplier (VSM, SIPOC, Pareto). I consolidated packaging bills of materials across projects and built the sizing tools and the business case for a Milk Run system.'],
      kpi: ['ROI 62,8 % · retour en 1,6 an', 'ROI 62.8% · 1.6-year payback'], tools: ['Excel VBA', 'Python', 'SQL'] },
    { type: 'job', date: '06/2025 – 08/2025', org: 'Pragmatic Consulting · Casablanca',
      fr: ['Consultant fonctionnel', 'Conception et développement d\'une application WMS sous Flask (Python, SQLite3) pour tracer les flux logistiques, avec un modèle MILP qui optimise le slotting.'],
      en: ['Functional consultant', 'Designed and built a WMS app in Flask (Python, SQLite3) to trace logistics flows, with a MILP model that optimises slotting.'],
      kpi: ['1 application WMS livrée', '1 WMS app delivered'], tools: ['Python', 'SQL', 'MILP'] },
    { type: 'job', date: '07/2024 – 08/2024', org: 'GEODIS CL · Casablanca',
      fr: ['Assistant logistique', 'Analyse des opérations supply chain et suivi des flux de transport.'],
      en: ['Logistics assistant', 'Supply chain operations analysis and transport flow monitoring.'],
      kpi: ['−10 % délais · −5 % coûts de transport', '−10% lead time · −5% transport costs'], tools: ['Analyse de flux'] },
    { type: 'proj', date: 'ENSET', org: 'ENSET Mohammedia',
      fr: ['Mise en œuvre d\'un ERP', 'Implantation des données (articles, nomenclatures) et lancement d\'un atelier d\'assemblage de boîtiers électriques sous Odoo, avec des tableaux de bord Power BI et des automatisations Excel VBA.'],
      en: ['ERP implementation', 'Master data set-up (items, bills of materials) and launch of an electrical-box assembly workshop in Odoo, with Power BI dashboards and Excel VBA automation.'],
      tools: ['Odoo', 'Power BI', 'Excel VBA'] },
    { type: 'proj', date: 'ENSET', org: 'ENSET Mohammedia',
      fr: ['Simulation d\'un système aéronautique', 'Modélisation et simulation d\'un système de production sous Arena, avec un tableau de bord de suivi de la performance.'],
      en: ['Aerospace system simulation', 'Modelling and simulation of a production system in Arena, with a performance tracking dashboard.'],
      tools: ['Arena', 'Power BI'] },
    { type: 'proj', date: '2026 – 2027', org: 'Université de Lorraine · Sarreguemines',
      fr: ['Projet Lean Six Sigma', 'Démarche DMAIC en équipe sur un objectif de −25 % de budget, avec une fiche de suivi standardisée sous Excel VBA.'],
      en: ['Lean Six Sigma project', 'Team DMAIC with a −25% budget target, with a standardised tracking sheet in Excel VBA.'],
      tools: ['Excel VBA'] },
    { type: 'proj', date: 'ENSET', org: 'ENSET Mohammedia',
      fr: ['Détection IA temps réel', 'Modèle d\'intelligence artificielle en Python (YOLOv8) relié à une signalisation dynamique (LEDs, buzzer, Raspberry Pi).'],
      en: ['Real-time AI detection', 'Python AI model (YOLOv8) wired to dynamic signalling (LEDs, buzzer, Raspberry Pi).'],
      tools: ['Python'] },
    { type: 'cert', date: 'SAP', org: 'SAP',
      fr: ['Certification SAP S/4HANA', 'Business Processes in SAP S/4HANA Sourcing and Procurement : processus achats et approvisionnement de bout en bout.'],
      en: ['SAP S/4HANA certification', 'Business Processes in SAP S/4HANA Sourcing and Procurement: end-to-end purchasing and procurement processes.'],
      tools: ['SAP S/4HANA'] }
  ];

  const GANTT = [
    { s: 2020.7, e: 2021.5, k: 'edu', fr: ['Baccalauréat', 'Chefchaouen · mention Bien'], en: ['Baccalaureate', 'Chefchaouen · with honours'] },
    { s: 2021.7, e: 2023.5, k: 'edu', fr: ['CPGE Maths-Physique', 'Rabat · Bac+2'], en: ['Preparatory classes', 'Rabat · Maths & Physics'] },
    { s: 2023.7, e: 2026.5, k: 'edu', fr: ['Cycle ingénieur', 'ENSET Mohammedia'], en: ['Engineering degree', 'ENSET Mohammedia'] },
    { s: 2024.5, e: 2024.67, k: 'job', fr: ['GEODIS CL', 'Assistant logistique'], en: ['GEODIS CL', 'Logistics assistant'] },
    { s: 2025.42, e: 2025.67, k: 'job', fr: ['Pragmatic Consulting', 'Consultant fonctionnel WMS'], en: ['Pragmatic Consulting', 'WMS functional consultant'] },
    { s: 2026.08, e: 2026.5, k: 'job', fr: ['Tuyauto', 'Ingénieur méthode'], en: ['Tuyauto', 'Methods engineer'] },
    { s: 2026.7, e: 2027.5, k: 'edu', fr: ['M2 OPSyL', 'Université de Lorraine'], en: ['M2 OPSyL', 'Université de Lorraine'] },
    { s: 2027.0, e: 2027.5, k: 'next', fr: ['Votre stage ?', '6 mois · janvier 2027'], en: ['Your internship?', '6 months · January 2027'] }
  ];
  const Y0 = 2020, YN = 8;

  const CTX = [['GEODIS', 'GEODIS'], ['Pragmatic', 'Pragmatic'], ['Tuyauto', 'Tuyauto'], ['Projets ENSET', 'ENSET projects'], ['M2 Lorraine', 'M2 Lorraine'], ['Certification', 'Certification']];
  const MATRIX = [
    ['Power BI', [0, 0, 0, 2, 0, 0]],
    ['SAP S/4HANA', [0, 0, 0, 0, 0, 3]],
    ['Odoo', [0, 0, 0, 2, 0, 0]],
    ['Excel VBA', [0, 0, 2, 1, 2, 0]],
    ['Python', [0, 2, 1, 2, 0, 0]],
    ['SQL', [0, 2, 1, 0, 0, 0]],
    ['MILP', [0, 2, 0, 0, 0, 0]],
    ['Arena', [0, 0, 0, 2, 0, 0]],
    ['Lean / DMAIC', [1, 0, 2, 0, 2, 3]]
  ];

  /* ---------------- Traductions ---------------- */
  const EN = {
    'boot.title': 'System access — candidate profile', 'boot.tx': 'Transaction', 'boot.skip': 'Skip ↵',
    'top.cv': 'Export CV', 'nav.h': 'Pages', 'nav.1': 'Home', 'nav.2': 'Explore', 'nav.3': 'Timeline', 'nav.4': 'Skills', 'nav.5': 'Model', 'nav.6': 'Query',
    'ov.title': 'Overview', 'ov.refresh': 'Last refresh',
    'ov.role': 'Industrial & Logistics Engineer · Data & ERP profile',
    'ov.txt': "Master's student (M2 OPSyL) at Université de Lorraine. I turn operations data into decisions: <b>Power BI</b> dashboards, <b>SAP S/4HANA</b> and <b>Odoo</b> processes, tools in <b>Python</b>, <b>SQL</b> and <b>Excel VBA</b>.",
    'ov.status': '<b>Available</b> · 6-month internship · January 2027',
    'ov.k1': 'company internships', 'ov.k2': 'projects delivered', 'ov.k3': 'ERPs used (SAP, Odoo)', 'ov.k4': 'WMS built (Flask + SQL)', 'ov.dax': 'DAX measure',
    'ex.title': 'Explore: experience & projects', 'ex.sub': 'Click a tool: the report filters itself and shows where I used it.', 'ex.slicer': 'Slicer · Tool',
    'ga.title': 'Timeline · Gantt chart', 'ga.sub': '2020 → 2027. Hover a bar for details.',
    'mx.title': 'Skills · tool × context matrix', 'mx.sub': 'Each filled cell is a real use. Click a row to filter the Explore page.',
    'mx.l2': 'main use', 'mx.l1': 'occasional use', 'mx.l3': 'certified', 'mx.lang': 'Languages', 'mx.fr': 'French', 'mx.ar': 'Arabic', 'mx.en': 'English', 'mx.native': 'Native', 'mx.cert': 'Certifications',
    'md.title': 'Data model', 'md.sub': 'A star schema: one fact table in the middle, four dimensions around it.',
    'sq.title': 'Query: contact me', 'sq.sub': 'Run the query to get my contact details.', 'sq.run': 'Run', 'sq.mail': 'Send an email',
    'ft.loc': 'Metz, France · Driving licence'
  };
  const FR = {};

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    $$('[data-i18n],[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18n || el.dataset.i18nHtml;
      if (!(key in FR)) FR[key] = el.innerHTML;
      el.innerHTML = l === 'en' ? (EN[key] ?? FR[key]) : FR[key];
    });
    const sp = $$('#langBtn span');
    sp[0].classList.toggle('on', l === 'fr'); sp[1].classList.toggle('on', l === 'en');
    $('#refreshDate').textContent = new Date().toLocaleDateString(l === 'fr' ? 'fr-FR' : 'en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    renderItems(); renderGantt(); renderMatrix(); renderModel(); updateResMeta();
    try { localStorage.setItem('nar-lang', l); } catch (e) { /* indisponible */ }
  }
  $('#langBtn').addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr'));

  /* ---------------- Segment + éléments ---------------- */
  let filter = null;
  function renderSlicer() {
    const box = $('#slicer');
    const all = [null, ...TOOLS];
    box.innerHTML = all.map(tl => `<button type="button" data-tool="${tl ?? ''}" aria-pressed="${filter === tl}"><span class="sq"></span>${tl ?? t('Tous', 'All')}</button>`).join('');
    $$('button', box).forEach(b => b.addEventListener('click', () => {
      const v = b.dataset.tool || null;
      setFilter(filter === v ? null : v);
    }));
  }
  function setFilter(v) {
    const sl = $('#slicer');
    const before = sl.getBoundingClientRect().top;
    filter = v;
    renderSlicer();
    renderItems(true);
    const after = sl.getBoundingClientRect().top;
    if (Math.abs(after - before) > 1) scrollBy(0, after - before);
  }
  function renderItems(animate) {
    const typeLbl = { job: t('Expérience', 'Experience'), proj: t('Projet', 'Project'), cert: 'Certification' };
    const box = $('#items');
    box.innerHTML = ITEMS.map(it => {
      const [title, desc] = it[lang];
      const show = !filter || it.tools.includes(filter);
      const kpi = it.kpi ? `<p class="item-kpi">▲ ${it.kpi[lang === 'fr' ? 0 : 1]}</p>` : '';
      return `<article class="visual item${show ? '' : ' out'}${animate && show ? ' pop' : ''}">
        <div class="item-top"><span class="type ${it.type === 'job' ? 'job' : 'proj'}">${typeLbl[it.type]}</span><span class="item-date">${it.date}</span></div>
        <h3>${title}</h3><p class="item-org">${it.org}</p><p class="item-desc">${desc}</p>${kpi}
        <ul class="tools">${it.tools.map(x => `<li class="${x === filter ? 'hit' : ''}">${x === 'Analyse de flux' ? t('Analyse de flux', 'Flow analysis') : x}</li>`).join('')}</ul>
      </article>`;
    }).join('');
    const n = ITEMS.filter(it => !filter || it.tools.includes(filter)).length;
    $('#slicerCount').textContent = filter ? `${n} ${t(n > 1 ? 'résultats' : 'résultat', n > 1 ? 'results' : 'result')}` : `${ITEMS.length} ${t('éléments', 'items')}`;
    if (!$('#slicer').children.length || animate === undefined) renderSlicer();
  }

  /* ---------------- Gantt ---------------- */
  const tip = $('#tip');
  function showTip(e, html) { tip.innerHTML = html; tip.classList.add('show'); moveTip(e); }
  function moveTip(e) {
    const x = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 8);
    tip.style.left = x + 'px'; tip.style.top = (e.clientY + 14) + 'px';
  }
  function hideTip() { tip.classList.remove('show'); }
  function fmtYM(v) {
    const y = Math.floor(v), m = Math.round((v - y) * 12) + 1;
    return `${String(Math.min(m, 12)).padStart(2, '0')}/${y}`;
  }
  function renderGantt() {
    const g = $('#gantt');
    const wasIn = g.classList.contains('in');
    let html = `<div></div><div class="g-axis" style="grid-template-columns:repeat(${YN},1fr)">${Array.from({ length: YN }, (_, i) => `<span>${Y0 + i}</span>`).join('')}</div>`;
    GANTT.forEach(r => {
      const [a, b] = r[lang];
      const s = ((r.s - Y0) / YN) * 100, w = Math.max(((r.e - r.s) / YN) * 100, 1.6);
      html += `<div class="g-label"><b>${a}</b><small>${b}</small></div>
        <div class="g-track" style="background-size:calc(100%/${YN}) 100%"><span class="g-bar ${r.k}" style="--s:${s}%;--w:${w}%" data-tip="${a} · ${b}<br>${fmtYM(r.s)} → ${fmtYM(r.e)}"></span></div>`;
    });
    html += `<div class="g-legend"><span><i style="background:var(--blue)"></i>${t('Formation', 'Education')}</span><span><i style="background:var(--yellow)"></i>${t('Expérience', 'Experience')}</span><span><i style="background:repeating-linear-gradient(-45deg,var(--yellow) 0 4px,#fff3b0 4px 8px)"></i>${t('Prévu', 'Planned')}</span></div>`;
    g.innerHTML = html;
    if (wasIn) g.classList.add('in');
    $$('.g-bar', g).forEach(b => {
      b.addEventListener('mouseenter', e => showTip(e, b.dataset.tip));
      b.addEventListener('mousemove', moveTip);
      b.addEventListener('mouseleave', hideTip);
    });
  }

  /* ---------------- Matrice ---------------- */
  function renderMatrix() {
    const m = $('#matrix');
    const wasIn = m.classList.contains('in');
    const lv = ['', t('ponctuel', 'occasional'), t('principal', 'main'), t('certifié', 'certified')];
    m.innerHTML = `<thead><tr><th></th>${CTX.map(c => `<th>${c[lang === 'fr' ? 0 : 1]}</th>`).join('')}</tr></thead>
      <tbody>${MATRIX.map(([tool, row], ri) => `<tr data-tool="${tool}"><th class="row">${tool}</th>${row.map((v, ci) => `<td class="cell ${v ? 'l' + v : ''}" style="transition-delay:${(ri * 6 + ci) * 18}ms" ${v ? `data-tip="${tool} · ${CTX[ci][lang === 'fr' ? 0 : 1]} : ${lv[v]}"` : ''}></td>`).join('')}</tr>`).join('')}</tbody>`;
    if (wasIn) m.classList.add('in');
    $$('tbody tr', m).forEach(tr => tr.addEventListener('click', () => {
      const tool = tr.dataset.tool;
      if (TOOLS.includes(tool)) { setFilter(tool); $('#explorer').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }
    }));
    $$('td[data-tip]', m).forEach(td => {
      td.addEventListener('mouseenter', e => showTip(e, td.dataset.tip));
      td.addEventListener('mousemove', moveTip);
      td.addEventListener('mouseleave', hideTip);
    });
  }

  /* ---------------- Modèle de données ---------------- */
  function renderModel() {
    const svg = $('#model');
    const wasIn = svg.classList.contains('in');
    const mobile = innerWidth < 640;
    const W = 180, RH = 22, HH = 30;
    const T = {
      fact: { name: 'Fait_Profil', fact: true, rows: ['id_experience', 'id_competence', 'id_projet', 'id_formation', t('resultat', 'result'), 'date'], key: [0, 1, 2, 3] },
      exp: { name: 'Dim_Experience', rows: ['id_experience', 'GEODIS', 'Pragmatic', 'Tuyauto'], key: [0] },
      comp: { name: 'Dim_Competence', rows: ['id_competence', 'Power BI', 'SAP S/4HANA', 'Python · SQL', 'Excel VBA'], key: [0] },
      proj: { name: 'Dim_Projet', rows: ['id_projet', 'WMS Flask', 'ERP Odoo', 'Simulation', 'YOLOv8'], key: [0] },
      form: { name: 'Dim_Formation', rows: ['id_formation', 'CPGE', 'ENSET', 'M2 OPSyL'], key: [0] }
    };
    const pos = mobile
      ? { vb: [400, 820], exp: [10, 10], comp: [210, 10], fact: [110, 300], proj: [10, 590], form: [210, 590] }
      : { vb: [900, 520], exp: [30, 20], comp: [690, 20], fact: [360, 160], proj: [30, 330], form: [690, 330] };
    svg.setAttribute('viewBox', `0 0 ${pos.vb[0]} ${pos.vb[1]}`);
    const h = k => HH + T[k].rows.length * RH + 6;
    const box = k => ({ x: pos[k][0], y: pos[k][1], w: W, h: h(k) });
    const center = b => [b.x + b.w / 2, b.y + b.h / 2];
    let out = '';
    const fb = box('fact');
    ['exp', 'comp', 'proj', 'form'].forEach(k => {
      const b = box(k);
      const [cx, cy] = center(b), [fx, fy] = center(fb);
      // point d'attache sur les bords
      const ax = mobile ? cx : (cx < fx ? b.x + b.w : b.x), ay = mobile ? (cy < fy ? b.y + b.h : b.y) : cy;
      const fxp = mobile ? fx + (cx < fx ? -40 : 40) : (cx < fx ? fb.x : fb.x + fb.w);
      const fyp = mobile ? (cy < fy ? fb.y : fb.y + fb.h) : fy + (cy < fy ? -40 : 40);
      const d = mobile
        ? `M${ax},${ay} C${ax},${(ay + fyp) / 2} ${fxp},${(ay + fyp) / 2} ${fxp},${fyp}`
        : `M${ax},${ay} C${(ax + fxp) / 2},${ay} ${(ax + fxp) / 2},${fyp} ${fxp},${fyp}`;
      out += `<path class="rel" d="${d}"/>`;
      out += `<text class="card" x="${ax + (mobile ? 6 : (cx < fx ? 6 : -14))}" y="${ay + (mobile ? (cy < fy ? 16 : -6) : -6)}">1</text>`;
      out += `<text class="card" x="${fxp + (mobile ? 6 : (cx < fx ? -14 : 6))}" y="${fyp + (mobile ? (cy < fy ? -6 : 16) : -6)}">*</text>`;
    });
    Object.keys(T).forEach(k => {
      const b = box(k), tb = T[k];
      out += `<g class="tbl${tb.fact ? ' fact' : ''}">
        <rect class="body" x="${b.x}" y="${b.y}" width="${W}" height="${b.h}" rx="4"/>
        <rect class="head" x="${b.x}" y="${b.y}" width="${W}" height="${HH}" rx="4"/>
        <rect class="head" x="${b.x}" y="${b.y + HH - 6}" width="${W}" height="6"/>
        <text class="h" x="${b.x + 12}" y="${b.y + 20}">${tb.name}</text>
        ${tb.rows.map((r, i) => `<text class="${tb.key.includes(i) ? 'k' : ''}" x="${b.x + 12}" y="${b.y + HH + 18 + i * RH}">${tb.key.includes(i) ? (tb.fact ? 'FK ' : 'PK ') : '   '}${r}</text>`).join('')}
      </g>`;
    });
    svg.innerHTML = out;
    if (wasIn) svg.classList.add('in');
  }

  /* ---------------- Console SQL ---------------- */
  let ran = false;
  function updateResMeta() {
    if (ran) $('#resMeta').textContent = t('✓ 1 ligne renvoyée · 0,042 s', '✓ 1 row returned · 0.042 s');
  }
  function runSql() {
    ran = true;
    $('#result').hidden = false;
    updateResMeta();
  }
  $('#runSql').addEventListener('click', runSql);

  /* ---------------- Transactions (barre de commande) ---------------- */
  const TX = {
    OVERVIEW: 'overview', ACCUEIL: 'overview', HOME: 'overview', ZNAFIE: 'overview', ZNAFIE_PROFIL: 'overview', PROFIL: 'overview',
    EXPLORER: 'explorer', EXPLORE: 'explorer', PROJETS: 'explorer', PROJECTS: 'explorer', EXPERIENCES: 'explorer',
    PARCOURS: 'parcours', GANTT: 'parcours', TIMELINE: 'parcours',
    COMPETENCES: 'matrice', SKILLS: 'matrice', MATRICE: 'matrice', MATRIX: 'matrice',
    MODELE: 'modele', MODEL: 'modele', CONTACT: 'contact', REQUETE: 'contact', QUERY: 'contact'
  };
  const TOOLX = { POWERBI: 'Power BI', PBI: 'Power BI', SAP: 'SAP S/4HANA', S4: 'SAP S/4HANA', S4HANA: 'SAP S/4HANA', ODOO: 'Odoo', VBA: 'Excel VBA', EXCEL: 'Excel VBA', PYTHON: 'Python', SQL: 'SQL', MILP: 'MILP', ARENA: 'Arena' };
  const msg = $('#tcodeMsg');
  let msgT;
  function say(text, ok) {
    msg.textContent = text; msg.className = 'tc-msg mono show ' + (ok ? 'ok' : 'err');
    clearTimeout(msgT); msgT = setTimeout(() => msg.classList.remove('show'), 3200);
  }
  $('#tcode').addEventListener('submit', e => {
    e.preventDefault();
    const raw = $('#tcodeInput').value.trim().toUpperCase().replace(/^\/[NO]\s*/, '').replace(/[\s'É]/g, m => (m === 'É' ? 'E' : ''));
    if (!raw) return;
    if (raw === 'CV') { window.open('CV_Nafie_ALAMI.pdf', '_blank', 'noopener'); say(t('CV ouvert dans un nouvel onglet.', 'CV opened in a new tab.'), true); }
    else if (TOOLX[raw]) { setFilter(TOOLX[raw]); go('explorer'); say(t(`Filtre appliqué : ${TOOLX[raw]}`, `Filter applied: ${TOOLX[raw]}`), true); }
    else if (TX[raw]) { go(TX[raw]); if (TX[raw] === 'contact') runSql(); say(t(`Transaction ${raw} exécutée.`, `Transaction ${raw} executed.`), true); }
    else { say(t(`Transaction ${raw} inconnue. Essayez PROJETS, SAP, POWERBI, GANTT, CONTACT ou CV.`, `Unknown transaction ${raw}. Try PROJECTS, SAP, POWERBI, GANTT, CONTACT or CV.`), false); return; }
    $('#tcodeInput').value = '';
  });
  function go(id) { $('#' + id).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }

  /* ---------------- Navigation active ---------------- */
  const navLinks = $$('.pages a');
  const pages = $$('.page');
  function onScroll() {
    const y = scrollY + innerHeight * 0.35;
    let cur = pages[0].id;
    pages.forEach(p => { if (p.offsetTop <= y) cur = p.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }
  addEventListener('scroll', onScroll, { passive: true });

  /* ---------------- Apparitions & compteurs ---------------- */
  function countUp(el) {
    const to = +el.dataset.to;
    if (reduce) { el.textContent = to; return; }
    const t0 = performance.now(), dur = 1100;
    const step = now => { const k = Math.min(1, (now - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    if (el.classList.contains('card-kpi')) $$('.count', el).forEach(countUp);
    if (el.classList.contains('console') && !ran) setTimeout(runSql, 700);
    io.unobserve(el);
  }), { threshold: 0.25 });

  /* ---------------- Ouverture ---------------- */
  function boot() {
    const el = $('#boot');
    let seen = false;
    try { seen = sessionStorage.getItem('nar-boot') === '1'; } catch (e) { /* indisponible */ }
    if (reduce || seen) { el.remove(); return; }
    const txt = '/n ZNAFIE_PROFIL';
    const out = $('#bootType'), st = $('#bootStatus'), bar = $('#bootBar');
    let i = 0, done = false;
    const finish = () => {
      if (done) return; done = true;
      el.classList.add('hide');
      try { sessionStorage.setItem('nar-boot', '1'); } catch (e) { /* indisponible */ }
      setTimeout(() => el.remove(), 500);
    };
    $('#bootSkip').addEventListener('click', finish);
    el.addEventListener('click', finish);
    addEventListener('keydown', function k(e) { if (e.key === 'Enter' || e.key === 'Escape') { finish(); removeEventListener('keydown', k); } });
    const type = () => {
      if (i <= txt.length) { out.textContent = txt.slice(0, i++); setTimeout(type, 55); return; }
      const steps = [[t('Connexion au système…', 'Connecting…'), 35], [t('Chargement du modèle de données…', 'Loading data model…'), 75], [t('Rapport prêt ✓', 'Report ready ✓'), 100]];
      steps.forEach(([s, p], j) => setTimeout(() => { st.textContent = s; bar.style.width = p + '%'; if (j === steps.length - 1) setTimeout(finish, 450); }, 250 + j * 420));
    };
    setTimeout(type, 300);
  }

  /* ---------------- Démarrage ---------------- */
  let saved = 'fr';
  try { saved = localStorage.getItem('nar-lang') || ((navigator.language || 'fr').startsWith('fr') ? 'fr' : 'en'); } catch (e) { saved = 'fr'; }
  applyLang(saved);
  boot();
  $$('.visual, .gantt, .matrix, .model').forEach(el => { if (el.classList.contains('visual')) el.classList.add('reveal'); io.observe(el); });
  addEventListener('resize', (() => { let w = innerWidth; return () => { if ((w < 640) !== (innerWidth < 640)) renderModel(); w = innerWidth; }; })());
  onScroll();
})();
