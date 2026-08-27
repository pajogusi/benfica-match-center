const BENFICA = 'SL Benfica';
const DATA_DATE = '27/08/2026';
const DISPLAY_TIME_ZONE = 'Europe/London';

const CLUB_CRESTS = {
  "SL Benfica": "icons/benfica-crest.svg",
  "Arouca": "icons/clubs/arouca.svg",
  "FC Porto": "icons/clubs/fc-porto.svg",
  "Marítimo": "icons/clubs/maritimo.svg",
  "Nacional": "icons/clubs/nacional.svg",
  "Sporting CP": "icons/clubs/sporting-cp.svg",
  "Santa Clara": "icons/clubs/santa-clara.svg",
  "Gil Vicente": "icons/clubs/gil-vicente.svg",
  "Estrela Amadora": "icons/clubs/estrela-amadora.svg",
  "SC Braga": "icons/clubs/sc-braga.svg",
  "Académico de Viseu": "icons/clubs/academico-de-viseu.svg",
  "Famalicão": "icons/clubs/famalicao.svg",
  "Alverca": "icons/clubs/alverca.svg",
  "Estoril": "icons/clubs/estoril.svg",
  "Moreirense": "icons/clubs/moreirense.svg",
  "Vitória SC": "icons/clubs/vitoria-sc.svg",
  "Rio Ave": "icons/clubs/rio-ave.svg",
  "Casa Pia": "icons/clubs/casa-pia.svg",
  "St. Gallen": "icons/clubs/st-gallen.svg",
  "Heart of Midlothian": "icons/clubs/heart-of-midlothian.svg",
  "AGF Aarhus": "icons/clubs/agf-aarhus.svg"
};

const competitionData = [
  {
    id: 'liga',
    name: 'Liga Portugal',
    subtitle: 'Liga Portugal Betclic 2026/27',
    icon: '🇵🇹',
    status: 'Em curso',
    tone: 'active',
    shortDetail: '4 pontos após 2 jornadas · 34 jornadas',
    statusTitle: 'Campeonato em curso',
    statusText: 'O Benfica soma 4 pontos após as duas primeiras jornadas: empate 2–2 com o Académico de Viseu e vitória 7–0 frente ao Casa Pia.',
    tableType: 'league',
    sourceLabel: 'Liga Portugal',
    sourceUrl: 'https://www.ligaportugal.pt/team/278/sl-benfica/20262027'
  },
  {
    id: 'taca-portugal',
    name: 'Taça de Portugal',
    subtitle: 'Taça de Portugal 2026/27',
    icon: '🏆',
    status: 'Qualificado',
    tone: 'qualified',
    shortDetail: 'Entrada prevista na 4.ª eliminatória · 21/22 Nov',
    statusTitle: 'Entrada na 4.ª eliminatória',
    statusText: 'Por disputar competições europeias, o Benfica entra mais tarde na prova. O adversário ainda não está definido.',
    tableType: 'knockout',
    stages: [
      { label: '1.ª–3.ª eliminatórias', value: 'Isento / entrada tardia' },
      { label: '4.ª eliminatória', value: 'Qualificado · adversário por sortear' },
      { label: 'Estado', value: 'Em prova' }
    ],
    sourceLabel: 'FPF / calendário 2026/27',
    sourceUrl: 'https://www.fpf.pt/'
  },
  {
    id: 'taca-liga',
    name: 'Taça da Liga',
    subtitle: 'Allianz CUP 2026/27',
    icon: '🥇',
    status: 'Qualificado',
    tone: 'qualified',
    shortDetail: 'Quartos de final · Benfica × Gil Vicente',
    statusTitle: 'Apurado para os quartos de final',
    statusText: 'O Benfica integra os oito participantes da Allianz CUP 2026/27 e defronta o Gil Vicente nos quartos de final.',
    tableType: 'knockout',
    stages: [
      { label: 'Qualificação', value: 'Apurado pelo campeonato 2025/26' },
      { label: 'Quartos de final', value: 'Benfica × Gil Vicente' },
      { label: 'Final Four', value: 'Por apurar' }
    ],
    sourceLabel: 'Liga Portugal',
    sourceUrl: 'https://www.ligaportugal.pt/noticias?tags=allianz-cup'
  },
  {
    id: 'europa',
    name: 'Liga Europa',
    subtitle: 'UEFA Europa League 2026/27',
    icon: '🇪🇺',
    status: 'Qualificado',
    tone: 'qualified',
    shortDetail: 'Fase de liga · apurado com 6–2 no agregado',
    statusTitle: 'Qualificado para a fase de liga',
    statusText: 'O Benfica venceu o Aarhus por 3–1 na Dinamarca e fechou a eliminatória com 6–2 no agregado, garantindo a presença na fase de liga da Liga Europa.',
    tableType: 'knockout',
    stages: [
      { label: '2.ª pré-eliminatória', value: 'Apurado · 6–2 agg. vs St. Gallen' },
      { label: '3.ª pré-eliminatória', value: 'Apurado · 7–2 agg. vs Hearts' },
      { label: 'Play-off', value: 'Apurado · 6–2 agg. vs Aarhus' },
      { label: 'Fase de liga', value: 'Qualificado' }
    ],
    sourceLabel: 'UEFA',
    sourceUrl: 'https://www.uefa.com/uefaeuropaleague/clubs/50147/matches/'
  },
  {
    id: 'champions',
    name: 'Liga dos Campeões',
    subtitle: 'UEFA Champions League 2026/27',
    icon: '⭐',
    status: 'Não qualificado',
    tone: 'out',
    shortDetail: 'O Benfica não participa nesta edição',
    statusTitle: 'Não qualificado',
    statusText: 'A UEFA confirma que o Benfica não participa na Liga dos Campeões 2026/27. A campanha europeia desta época começou na Liga Europa.',
    tableType: 'inactive',
    sourceLabel: 'UEFA',
    sourceUrl: 'https://www.uefa.com/uefachampionsleague/clubs/50147/'
  },
  {
    id: 'conference',
    name: 'Liga Conferência',
    subtitle: 'UEFA Conference League 2026/27',
    icon: '🌍',
    status: 'Acesso condicionado',
    tone: 'pending',
    shortDetail: 'Só entra se for eliminado no play-off da Liga Europa',
    statusTitle: 'Participação ainda condicionada',
    statusText: 'O Benfica não está atualmente a disputar a Liga Conferência. Pelas regras UEFA, uma derrota no play-off da Liga Europa coloca o clube na fase de liga da Conference League.',
    tableType: 'inactive',
    sourceLabel: 'UEFA',
    sourceUrl: 'https://www.uefa.com/uefaeuropaleague/accesslist/'
  },
  {
    id: 'supertaca',
    name: 'Supertaça de Portugal',
    subtitle: 'Supertaça Cândido de Oliveira 2026',
    icon: '🏅',
    status: 'Não qualificado',
    tone: 'out',
    shortDetail: 'Prova já disputada sem o Benfica',
    statusTitle: 'Não qualificado para a edição de 2026',
    statusText: 'A Supertaça de 2026 foi disputada por FC Porto e SCU Torreense. O Benfica não participou nesta edição.',
    tableType: 'inactive',
    sourceLabel: 'FPF / Liga Portugal',
    sourceUrl: 'https://www.fpf.pt/'
  },
  {
    id: 'uefa-supercup',
    name: 'Supertaça UEFA',
    subtitle: 'UEFA Super Cup 2026',
    icon: '🏟️',
    status: 'Não qualificado',
    tone: 'out',
    shortDetail: 'Sem qualificação para esta prova',
    statusTitle: 'Não qualificado',
    statusText: 'A Supertaça UEFA é reservada aos vencedores das principais provas europeias da época anterior. O Benfica não se qualificou para a edição de 2026.',
    tableType: 'inactive',
    sourceLabel: 'UEFA',
    sourceUrl: 'https://www.uefa.com/uefasupercup/'
  }
];

const competitionLogos = {
  'liga': 'icons/competitions/liga-portugal.svg',
  'taca-portugal': 'icons/competitions/taca-portugal.svg',
  'taca-liga': 'icons/competitions/taca-liga.png',
  'europa': 'icons/competitions/europa-league.svg',
  'champions': 'icons/competitions/champions-league.svg',
  'conference': 'icons/competitions/conference-league.svg',
  'supertaca': 'icons/competitions/supertaca-portugal.svg',
  'uefa-supercup': 'icons/competitions/uefa-supercup.svg'
};

const FINAL_RESULT_BANNER = {
  result: 'AGF Aarhus 1–3 SL Benfica',
  aggregate: 'Benfica 6–2 no agregado',
  scorers: "Prestianni 19' e 61' · Rafa 56' · AGF: Carstensen 60'"
};

function renderFinalResultBanner() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  let banner = document.getElementById('finalResultBanner');
  if (!banner) {
    banner = document.createElement('section');
    banner.id = 'finalResultBanner';
    banner.className = 'result-ticker';
    banner.setAttribute('aria-label', 'Resultado final do último jogo');
    topbar.insertAdjacentElement('afterend', banner);
  }

  const text = `FINAL · ${FINAL_RESULT_BANNER.result} · ${FINAL_RESULT_BANNER.aggregate} · Marcadores: ${FINAL_RESULT_BANNER.scorers}`;
  banner.innerHTML = `
    <div class="result-ticker-track">
      <span class="result-ticker-item">${escapeHtml(text)}</span>
      <span class="result-ticker-item" aria-hidden="true">${escapeHtml(text)}</span>
    </div>`;
}

function competitionMark(c, className='competition-logo') {
  const src = competitionLogos[c.id];
  return src
    ? `<img class="${className}" src="${src}" alt="Logo ${escapeHtml(c.name)}" loading="lazy" />`
    : `<span aria-hidden="true">${c.icon || '🏆'}</span>`;
}

const leagueTable = [
  ['Arouca',2,2,0,0,5,0,6],
  ['FC Porto',2,2,0,0,4,0,6],
  ['Marítimo',2,2,0,0,3,1,6],
  ['SL Benfica',2,1,1,0,9,2,4],
  ['Nacional',2,1,1,0,4,2,4],
  ['Sporting CP',2,1,1,0,5,4,4],
  ['Santa Clara',2,1,1,0,3,2,4],
  ['Gil Vicente',1,1,0,0,1,0,3],
  ['Estrela Amadora',2,0,2,0,4,4,2],
  ['SC Braga',1,0,1,0,2,2,1],
  ['Académico de Viseu',2,0,1,1,2,3,1],
  ['Famalicão',2,0,1,1,2,3,1],
  ['Alverca',2,0,1,1,2,4,1],
  ['Estoril',2,0,1,1,1,3,1],
  ['Moreirense',2,0,1,1,2,6,1],
  ['Vitória SC',2,0,0,2,2,4,0],
  ['Rio Ave',2,0,0,2,0,3,0],
  ['Casa Pia',2,0,0,2,0,8,0]
];

const firstHalf = [
  [BENFICA,'Académico de Viseu'], ['Casa Pia',BENFICA], ['Moreirense',BENFICA], [BENFICA,'Estoril'],
  ['Marítimo',BENFICA], [BENFICA,'Gil Vicente'], ['FC Porto',BENFICA], [BENFICA,'Vitória SC'],
  ['Santa Clara',BENFICA], [BENFICA,'Alverca'], ['Estrela Amadora',BENFICA], [BENFICA,'Famalicão'],
  ['Nacional',BENFICA], [BENFICA,'SC Braga'], ['Rio Ave',BENFICA], [BENFICA,'Sporting CP'], ['Arouca',BENFICA]
];

const leagueCalendar = [
  ...firstHalf.map((t,i)=>({competition:'liga', round:`Jornada ${i+1}`, order:i+1, home:t[0], away:t[1], status:'NS'})),
  ...firstHalf.map((t,i)=>({competition:'liga', round:`Jornada ${i+18}`, order:i+18, home:t[1], away:t[0], status:'NS'}))
];

Object.assign(leagueCalendar[0], {date:'2026-08-09', time:'20:30', hs:2, as:2, status:'FT', venue:'Estádio da Luz'});
Object.assign(leagueCalendar[1], {date:'2026-08-17', time:'20:15', hs:0, as:7, status:'FT', venue:'Estádio Municipal de Rio Maior'});
Object.assign(leagueCalendar[2], {date:'2026-09-09', time:'20:15', venue:'Parque Joaquim de Almeida Freitas'});
Object.assign(leagueCalendar[3], {date:'2026-08-31', time:'20:15', kickoffUtc:'2026-08-31T19:15:00Z', kickoffLocked:true, venue:'Estádio da Luz', tv:'BTV'});

const matches = [
  ...leagueCalendar,
  {id:'uel-2307',competition:'europa',round:'2.ª pré-eliminatória · 1.ª mão',date:'2026-07-23',time:null,home:'St. Gallen',away:BENFICA,hs:2,as:1,status:'FT',venue:'Estádio Sitter'},
  {id:'uel-3007',competition:'europa',round:'2.ª pré-eliminatória · 2.ª mão',date:'2026-07-30',time:null,home:BENFICA,away:'St. Gallen',hs:5,as:0,status:'FT',venue:'Estádio da Luz'},
  {id:'uel-0608',competition:'europa',round:'3.ª pré-eliminatória · 1.ª mão',date:'2026-08-06',time:'20:00',home:BENFICA,away:'Heart of Midlothian',hs:6,as:1,status:'FT',venue:'Estádio da Luz'},
  {id:'uel-1308',competition:'europa',round:'3.ª pré-eliminatória · 2.ª mão',date:'2026-08-13',time:'19:45',home:'Heart of Midlothian',away:BENFICA,hs:1,as:1,status:'FT',venue:'Tynecastle Park'},
  {id:'uel-2008',competition:'europa',round:'Play-off · 1.ª mão',date:'2026-08-20',time:'20:00',home:BENFICA,away:'AGF Aarhus',hs:3,as:1,status:'FT',venue:'Estádio da Luz'},
  {id:'uel-2708',competition:'europa',round:'Play-off · 2.ª mão',date:'2026-08-27',time:'19:00',kickoffUtc:'2026-08-27T18:00:00Z',kickoffLocked:true,home:'AGF Aarhus',away:BENFICA,hs:1,as:3,status:'FT',venue:'Cepheus Park Randers',tv:'SPORT TV 5',goals:[{team:BENFICA,player:'Prestianni',minute:"19'"},{team:BENFICA,player:'Rafa',minute:"56'"},{team:'AGF Aarhus',player:'Carstensen',minute:"60'"},{team:BENFICA,player:'Prestianni',minute:"61'"}]},
  {id:'allianz-qf',competition:'taca-liga',round:'Quartos de final',date:'2026-10-27',time:null,home:BENFICA,away:'Gil Vicente',status:'NS',venue:'Estádio da Luz'},
  {id:'tp-r4',competition:'taca-portugal',round:'4.ª eliminatória',date:null,time:null,home:BENFICA,away:'Adversário por sortear',status:'NS',venue:null,note:'Janela prevista: 21/22 novembro 2026'}
];

let currentCompetition = null;
let currentDetail = 'status';

const $ = (s) => document.querySelector(s);
const homeView = $('#homeView');
const competitionView = $('#competitionView');
const detailRoot = $('#competitionDetailRoot');

function escapeHtml(v='') {
  return String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function comp(id) { return competitionData.find(c => c.id === id); }

function clubCrestImg(team, cls='mini-team-crest') {
  const src = CLUB_CRESTS[team];
  if (!src) return '';
  return `<img class="${cls}" src="${src}" alt="Emblema de ${escapeHtml(team)}" loading="lazy" />`;
}


function parseDate(m) {
  if (m?.kickoffUtc) return new Date(m.kickoffUtc);
  if (!m?.date) return null;
  return new Date(`${m.date}T${m.time || '12:00'}:00`);
}

function kickoffTimeText(m) {
  if (!m) return null;
  if (m.kickoffUtc) {
    const d = parseDate(m);
    if (d) {
      return new Intl.DateTimeFormat('pt-PT', {
        timeZone: DISPLAY_TIME_ZONE,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(d);
    }
  }
  return m.time || null;
}

function dateText(m, long=false) {
  if (!m.date) return m.note || 'Data por confirmar';
  const d = parseDate(m);
  const opts = long
    ? {timeZone:DISPLAY_TIME_ZONE,weekday:'long',day:'numeric',month:'long',year:'numeric'}
    : {timeZone:DISPLAY_TIME_ZONE,day:'2-digit',month:'short',year:'numeric'};
  const base = new Intl.DateTimeFormat('pt-PT', opts).format(d);
  const kickoff = kickoffTimeText(m);
  return kickoff ? `${base} · ${kickoff}` : `${base} · hora por confirmar`;
}

function scoreText(m) { return ['FT','LIVE'].includes(m.status) ? `${m.hs} – ${m.as}` : 'vs'; }

function benficaResult(m) {
  if (m.status !== 'FT') return null;
  const gf = m.home === BENFICA ? m.hs : m.as;
  const ga = m.home === BENFICA ? m.as : m.hs;
  return gf > ga ? 'W' : gf < ga ? 'L' : 'D';
}

function resultLabel(r) { return r === 'W' ? 'Vitória' : r === 'L' ? 'Derrota' : 'Empate'; }

function upcomingMatches() {
  const now = new Date();
  return matches.filter(m => m.status !== 'FT' && m.date && parseDate(m) > new Date(now.getTime() - 4*3600000)).sort((a,b)=>parseDate(a)-parseDate(b));
}

function tvChannel(m) {
  return m.tv || 'Por confirmar';
}

function aggregateText(m) {
  const round = String(m.round || '');
  const isSecondLeg = /2\.ª\s*mão/i.test(round);
  const isFirstLeg = /1\.ª\s*mão/i.test(round);

  if (!isSecondLeg && !isFirstLeg) return 'Não aplicável';

  const opponent = m.home === BENFICA ? m.away : m.home;
  if (!opponent || opponent === 'Adversário por sortear') return 'Por confirmar';

  const stage = round
    .replace(/\s*·\s*[12]\.ª\s*mão/gi, '')
    .trim();

  const relevant = matches.filter(x => {
    if (x.competition !== m.competition || !['FT','LIVE'].includes(x.status)) return false;
    const xStage = String(x.round || '')
      .replace(/\s*·\s*[12]\.ª\s*mão/gi, '')
      .trim();
    if (xStage !== stage) return false;
    const teams = [x.home, x.away];
    return teams.includes(BENFICA) && teams.includes(opponent);
  });

  if (!relevant.length) return isFirstLeg ? '0–0' : 'Por confirmar';

  let benficaGoals = 0;
  let opponentGoals = 0;
  for (const x of relevant) {
    if (x.home === BENFICA) {
      benficaGoals += Number(x.hs || 0);
      opponentGoals += Number(x.as || 0);
    } else {
      benficaGoals += Number(x.as || 0);
      opponentGoals += Number(x.hs || 0);
    }
  }

  return `Benfica ${benficaGoals}–${opponentGoals}`;
}

function countdown(m) {
  const dt = parseDate(m);
  if (!dt) return 'Data por confirmar';
  if (!m.time && !m.kickoffUtc) return 'Hora por confirmar';

  const diffMs = dt.getTime() - Date.now();
  if (m.status === 'LIVE') return m.livePhase || 'Jogo em curso';
  if (diffMs <= 0) return 'Jogo em curso';

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = n => String(n).padStart(2, '0');

  if (days > 0) return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  if (hours > 0) return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  return `${pad(minutes)}m ${pad(seconds)}s`;
}

function renderHero() {
  const m = upcomingMatches()[0];
  const root = $('#nextMatchHero');

  if (!m) {
    root.innerHTML = `
      <div class="hero-empty-professional">
        <span class="hero-kicker">Próximo jogo</span>
        <h2>A aguardar confirmação do próximo encontro</h2>
        <p>O painel será atualizado quando existir um novo jogo confirmado.</p>
      </div>`;
    return;
  }

  const c = comp(m.competition);

  const clubSlug = (team='') => String(team)
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-|-$/g,'');

  const crest = (team, cls='next-club-crest') => {
    if (!team || team === 'Adversário por sortear') return '';
    const src = `icons/clubs/${clubSlug(team)}.svg`;
    return `<img class="${cls}" src="${src}" alt="Emblema ${escapeHtml(team)}" onerror="this.style.display='none'" />`;
  };

  const competitionLogoMap = {
    liga: 'icons/competitions/liga-portugal.svg',
    'taca-portugal': 'icons/competitions/taca-portugal.svg',
    'taca-liga': 'icons/competitions/taca-liga.png',
    europa: 'icons/competitions/europa-league.svg',
    champions: 'icons/competitions/champions-league.svg',
    conference: 'icons/competitions/conference-league.svg',
    supertaca: 'icons/competitions/supertaca-portugal.svg',
    'uefa-supercup': 'icons/competitions/uefa-supercup.svg'
  };

  const competitionLogo = competitionLogoMap[c.id]
    ? `<img class="next-competition-logo" src="${competitionLogoMap[c.id]}" alt="Logo ${escapeHtml(c.name)}" onerror="this.style.display='none'" />`
    : '';

  const dt = parseDate(m);
  const dateOnly = dt
    ? new Intl.DateTimeFormat('pt-PT', {
        weekday: 'short', day: '2-digit', month: 'long', year: 'numeric',
        timeZone: DISPLAY_TIME_ZONE
      }).format(dt)
    : 'Data por confirmar';

  const kickoff = kickoffTimeText(m) || 'Hora por confirmar';
  const venue = m.venue || 'Local por confirmar';
  const note = m.status === 'LIVE'
    ? `<span class="next-match-note">${escapeHtml(m.livePhase || 'Em direto')}</span>`
    : (m.note ? `<span class="next-match-note">${escapeHtml(m.note)}</span>` : '');
  const centreScore = m.status === 'LIVE' ? `${m.hs} – ${m.as}` : 'VS';

  root.innerHTML = `
    <div class="hero-topline next-topline">
      <div>
        <span class="hero-kicker">Próximo jogo</span>
        <span class="next-season-label">Época 2026/27</span>
      </div>
      <button class="hero-comp-link next-comp-link" type="button" data-open-comp="${c.id}">
        ${competitionLogo}
        <span>${escapeHtml(c.name)}</span>
        <b aria-hidden="true">→</b>
      </button>
    </div>

    <div class="next-match-board">
      <section class="next-team next-team-home">
        <span class="next-team-role">Casa</span>
        <div class="next-crest-shell">${crest(m.home)}</div>
        <strong>${escapeHtml(m.home)}</strong>
      </section>

      <section class="next-center">
        <div class="next-center-competition">
          ${competitionLogo}
          <span>${escapeHtml(c.subtitle || c.name)}</span>
        </div>
        <time class="next-match-date" datetime="${escapeHtml(m.date || '')}">${escapeHtml(dateOnly)}</time>
        <div class="next-kickoff">${escapeHtml(kickoff)}</div>
        ${note}
        <div class="next-vs">${escapeHtml(centreScore)}</div>
        <span class="next-round">${escapeHtml(m.round)}</span>
      </section>

      <section class="next-team next-team-away">
        <span class="next-team-role">Fora</span>
        <div class="next-crest-shell">${crest(m.away)}</div>
        <strong>${escapeHtml(m.away)}</strong>
      </section>
    </div>

    <div class="next-match-meta">
      <div class="next-meta-item"><span>Estádio</span><strong>${escapeHtml(venue)}</strong></div>
      <div class="next-meta-item next-meta-tv"><span>Canal TV</span><strong>${escapeHtml(tvChannel(m))}</strong></div>
      <div class="next-meta-item next-meta-aggregate"><span>Agregado</span><strong>${escapeHtml(aggregateText(m))}</strong></div>
      <div class="next-meta-item next-meta-countdown"><span>Contagem</span><strong id="nextMatchCountdown">${escapeHtml(countdown(m))}</strong></div>
    </div>
  `;
}


function updateLiveCountdown() {
  const el = document.getElementById('nextMatchCountdown');
  if (!el) return;
  const m = upcomingMatches()[0];
  if (!m) return;
  el.textContent = countdown(m);
}

function renderCompetitionCards() {
  $('#competitionGrid').innerHTML = competitionData.map(c => `
    <button class="competition-card ${c.tone}" type="button" data-open-comp="${c.id}">
      <div class="competition-card-top">
        <span class="comp-icon">${competitionMark(c,'competition-logo')}</span>
        <span class="status-badge ${c.tone}">${escapeHtml(c.status)}</span>
      </div>
      <div class="competition-card-copy">
        <span class="comp-subtitle">${escapeHtml(c.subtitle)}</span>
        <h3>${escapeHtml(c.name)}</h3>
        <p>${escapeHtml(c.shortDetail)}</p>
      </div>
      <span class="card-link">Ver classificação, calendário e resultados <b>→</b></span>
    </button>
  `).join('');
}

function openCompetition(id, detail='status', updateHash=true) {
  const c = comp(id);
  if (!c) return showHome();
  currentCompetition = id;
  currentDetail = detail;
  homeView.classList.add('hidden');
  competitionView.classList.remove('hidden');
  $('#competitionHeader').innerHTML = `
    <div class="detail-icon">${competitionMark(c,'detail-competition-logo')}</div>
    <div class="detail-title-copy">
      <span>${escapeHtml(c.subtitle)}</span>
      <h1>${escapeHtml(c.name)}</h1>
      <div class="detail-status-line">
        <span class="status-badge ${c.tone}">${escapeHtml(c.status)}</span>
        <span>${escapeHtml(c.shortDetail)}</span>
      </div>
    </div>
    <a class="source-button" href="${c.sourceUrl}" target="_blank" rel="noreferrer">Fonte: ${escapeHtml(c.sourceLabel)} ↗</a>
  `;
  document.querySelectorAll('.detail-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.detail === detail));
  renderDetail();
  if (updateHash) history.pushState(null,'',`#competicao/${id}/${detail}`);
  window.scrollTo({top:0,behavior:'smooth'});
}

function showHome(updateHash=true) {
  currentCompetition = null;
  homeView.classList.remove('hidden');
  competitionView.classList.add('hidden');
  if (updateHash) history.pushState(null,'',location.pathname + location.search);
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderDetail() {
  const c = comp(currentCompetition);
  if (!c) return;
  detailRoot.innerHTML = currentDetail === 'status' ? renderStatus(c) : renderCalendar(c);
}

function renderStatus(c) {
  const intro = `
    <article class="status-panel ${c.tone}">
      <div>
        <span class="panel-kicker">Estado atual</span>
        <h2>${escapeHtml(c.statusTitle)}</h2>
        <p>${escapeHtml(c.statusText)}</p>
      </div>
    </article>`;

  if (c.tableType === 'league') return intro + renderLeagueTable();
  if (c.tableType === 'knockout') {
    return intro + `
      <div class="section-head"><div><h2>Percurso / classificação na prova</h2><p>Nesta fase a prova é a eliminar, por isso não existe tabela por pontos.</p></div></div>
      <div class="stage-list">
        ${(c.stages || []).map((s,i)=>`<div class="stage-row"><span class="stage-index">${i+1}</span><div><strong>${escapeHtml(s.label)}</strong><span>${escapeHtml(s.value)}</span></div></div>`).join('')}
      </div>`;
  }
  return intro + `<div class="empty-state"><strong>Sem classificação do Benfica nesta competição.</strong><span>O clube não está atualmente a disputar esta prova.</span></div>`;
}

function renderLeagueTable() {
  return `
    <div class="section-head"><div><h2>Classificação da Liga</h2><p>Snapshot após a 2.ª jornada completa. Dados verificados em 18/08/2026.</p></div></div>
    <div class="table-wrap">
      <table class="standings-table">
        <thead><tr><th>#</th><th>Equipa</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GM</th><th>GS</th><th>DG</th><th>Pts</th></tr></thead>
        <tbody>${leagueTable.map((r,i)=>{
          const [team,j,v,e,d,gm,gs,pts]=r; const gd=gm-gs;
          return `<tr class="${team===BENFICA?'benfica-row':''}"><td>${i+1}</td><td><span class="table-team">${clubCrestImg(team,'mini-team-crest')}<span>${escapeHtml(team)}</span></span></td><td>${j}</td><td>${v}</td><td>${e}</td><td>${d}</td><td>${gm}</td><td>${gs}</td><td>${gd>0?'+':''}${gd}</td><td><strong>${pts}</strong></td></tr>`;
        }).join('')}</tbody>
      </table>
    </div>`;
}

function renderCalendar(c) {
  const compMatches = matches.filter(m => m.competition === c.id);
  const results = compMatches.filter(m => m.status === 'FT').sort((a,b)=>(parseDate(b)||0)-(parseDate(a)||0));
  const upcoming = compMatches.filter(m => m.status !== 'FT').sort((a,b)=>{
    if (a.date && b.date) return parseDate(a)-parseDate(b);
    if (a.date) return -1;
    if (b.date) return 1;
    return (a.order || 999) - (b.order || 999);
  });

  if (!compMatches.length) {
    return `<div class="empty-state large"><strong>O Benfica não tem jogos nesta competição em 2026/27.</strong><span>Estado: ${escapeHtml(c.status)}.</span></div>`;
  }

  return `
    ${results.length ? `<div class="section-head"><div><h2>Últimos resultados</h2><p>Jogos já realizados nesta competição.</p></div></div><div class="match-list">${results.map(matchCard).join('')}</div>` : ''}
    <div class="section-head"><div><h2>Calendário</h2><p>Próximos jogos e jornadas. Datas não confirmadas são assinaladas.</p></div></div>
    <div class="match-list">${upcoming.length ? upcoming.map(matchCard).join('') : '<div class="empty-state"><strong>Sem próximos jogos confirmados.</strong><span>O calendário será atualizado quando existirem novos jogos.</span></div>'}</div>
  `;
}

function matchCard(m) {
  const r = benficaResult(m);
  return `<article class="match-card ${m.status==='FT'?'finished':'upcoming'}">
    <div class="match-meta">
      <span>${escapeHtml(m.round)}</span>
      <span>${escapeHtml(dateText(m))}</span>
    </div>
    <div class="match-teams">
      <strong class="team-cell ${m.home===BENFICA?'benfica-team':''}">
        ${clubCrestImg(m.home,'mini-team-crest')}
        <span>${escapeHtml(m.home)}</span>
      </strong>
      <span class="score ${m.status!=='FT'?'pending':''}">${escapeHtml(scoreText(m))}</span>
      <strong class="team-cell right ${m.away===BENFICA?'benfica-team':''}">
        ${clubCrestImg(m.away,'mini-team-crest')}
        <span>${escapeHtml(m.away)}</span>
      </strong>
    </div>
    <div class="match-bottom">
      <span>${escapeHtml(m.note || m.venue || 'Local por confirmar')}</span>
      ${r ? `<span class="result-badge ${r}">${resultLabel(r)}</span>` : '<span class="future-badge">Agendado</span>'}
    </div>
  </article>`;
}


/* AUTO ONLINE REFRESH V1 */
const SPORTSDB_TEAM_ID = '134108';
const SPORTSDB_LEAGUE_ID = '4344';
const SPORTSDB_SEASON = '2026-2027';
const SPORTSDB_BASE = 'https://www.thesportsdb.com/api/v1/json/123';
const ONLINE_CACHE_KEY = 'benfica-match-center-online-v1';
const ONLINE_TABLE_CACHE_KEY = 'benfica-match-center-table-v1';

function onlineNormalize(value='') {
  return String(value)
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g,' ')
    .trim();
}

function canonicalTeamName(name='') {
  const n = onlineNormalize(name);
  const aliases = new Map([
    ['benfica', BENFICA],
    ['sl benfica', BENFICA],
    ['sport lisboa e benfica', BENFICA],
    ['academico de viseu', 'Académico de Viseu'],
    ['casa pia', 'Casa Pia'],
    ['casa pia ac', 'Casa Pia'],
    ['moreirense', 'Moreirense'],
    ['moreirense fc', 'Moreirense'],
    ['estoril', 'Estoril'],
    ['estoril praia', 'Estoril'],
    ['gd estoril praia', 'Estoril'],
    ['maritimo', 'Marítimo'],
    ['cs maritimo', 'Marítimo'],
    ['gil vicente', 'Gil Vicente'],
    ['gil vicente fc', 'Gil Vicente'],
    ['fc porto', 'FC Porto'],
    ['porto', 'FC Porto'],
    ['vitoria sc', 'Vitória SC'],
    ['vitoria de guimaraes', 'Vitória SC'],
    ['santa clara', 'Santa Clara'],
    ['cd santa clara', 'Santa Clara'],
    ['alverca', 'Alverca'],
    ['fc alverca', 'Alverca'],
    ['estrela amadora', 'Estrela Amadora'],
    ['estrela da amadora', 'Estrela Amadora'],
    ['cf estrela amadora', 'Estrela Amadora'],
    ['famalicao', 'Famalicão'],
    ['fc famalicao', 'Famalicão'],
    ['nacional', 'Nacional'],
    ['cd nacional', 'Nacional'],
    ['nacional da madeira', 'Nacional'],
    ['sc braga', 'SC Braga'],
    ['braga', 'SC Braga'],
    ['rio ave', 'Rio Ave'],
    ['rio ave fc', 'Rio Ave'],
    ['sporting cp', 'Sporting CP'],
    ['sporting', 'Sporting CP'],
    ['arouca', 'Arouca'],
    ['fc arouca', 'Arouca'],
    ['st gallen', 'St. Gallen'],
    ['heart of midlothian', 'Heart of Midlothian'],
    ['hearts', 'Heart of Midlothian'],
    ['agf aarhus', 'AGF Aarhus'],
    ['agf', 'AGF Aarhus']
  ]);
  return aliases.get(n) || name;
}

function sportsDbCompetition(event) {
  const league = onlineNormalize(event.strLeague || '');
  if (league.includes('europa league')) return 'europa';
  if (league.includes('conference league')) return 'conference';
  if (league.includes('champions league')) return 'champions';
  if (league.includes('taca da liga') || league.includes('allianz cup') || league.includes('league cup')) return 'taca-liga';
  if (league.includes('taca de portugal') || league.includes('portuguese cup')) return 'taca-portugal';
  if (league.includes('primeira liga') || league.includes('liga portugal')) return 'liga';
  return null;
}

function sportsDbEventToMatch(event) {
  if (!event?.dateEvent || !event?.strHomeTeam || !event?.strAwayTeam) return null;

  const home = canonicalTeamName(event.strHomeTeam);
  const away = canonicalTeamName(event.strAwayTeam);
  if (home !== BENFICA && away !== BENFICA) return null;

  const competition = sportsDbCompetition(event);
  if (!competition) return null;

  const onlineStatus = onlineNormalize(event.strStatus || '');
  const finished = ['ft', 'match finished', 'finished', 'aet', 'pen'].includes(onlineStatus);

  const rawTime = event.strTimeLocal || event.strTime || '';
  const time = /^\d{2}:\d{2}/.test(rawTime) ? rawTime.slice(0,5) : null;

  let kickoffUtc = null;
  if (event.strTimestamp) {
    const ts = new Date(event.strTimestamp);
    if (!Number.isNaN(ts.getTime())) kickoffUtc = ts.toISOString();
  }

  return {
    id: `sportsdb-${event.idEvent || `${event.dateEvent}-${home}-${away}`}`,
    competition,
    round: event.intRound ? `Jornada ${event.intRound}` : (event.strGroup || 'Jogo'),
    date: event.dateEvent,
    time,
    kickoffUtc,
    home,
    away,
    hs: finished ? Number(event.intHomeScore) : undefined,
    as: finished ? Number(event.intAwayScore) : undefined,
    status: finished ? 'FT' : 'NS',
    venue: event.strVenue || null,
    sourceOnline: true
  };
}

function sameFixture(a, b) {
  if (!a || !b) return false;
  const sameTeams = a.home === b.home && a.away === b.away;
  if (!sameTeams) return false;
  if (a.date && b.date && a.date === b.date) return true;

  const ad = parseDate(a);
  const bd = parseDate(b);
  if (!ad || !bd) return false;
  return Math.abs(ad.getTime() - bd.getTime()) <= 36 * 3600000;
}

function mergeOnlineMatches(incoming=[]) {
  let changed = false;

  for (const fresh of incoming) {
    const current = matches.find(m => sameFixture(m, fresh));

    if (current) {
      const before = JSON.stringify(current);

      if (fresh.date && !current.kickoffLocked) current.date = fresh.date;
      if (fresh.time && !current.kickoffLocked) current.time = fresh.time;
      if (fresh.kickoffUtc && !current.kickoffLocked) current.kickoffUtc = fresh.kickoffUtc;
      if (fresh.venue) current.venue = fresh.venue;

      if (fresh.status === 'FT') {
        current.status = 'FT';
        current.hs = fresh.hs;
        current.as = fresh.as;
      }

      if (JSON.stringify(current) !== before) changed = true;
    } else {
      matches.push(fresh);
      changed = true;
    }
  }

  return changed;
}

function tableNumber(row, ...keys) {
  for (const key of keys) {
    const v = row?.[key];
    if (v !== undefined && v !== null && v !== '') {
      const n = Number(v);
      if (Number.isFinite(n)) return n;
    }
  }
  return 0;
}

function applyOnlineLeagueTable(rows) {
  if (!Array.isArray(rows) || rows.length < 10) return false;

  const mapped = rows.map(row => {
    const team = canonicalTeamName(row.strTeam || row.name || row.team || '');
    if (!team) return null;

    return [
      team,
      tableNumber(row, 'intPlayed', 'played', 'gamesPlayed'),
      tableNumber(row, 'intWin', 'win', 'wins'),
      tableNumber(row, 'intDraw', 'draw', 'draws'),
      tableNumber(row, 'intLoss', 'loss', 'losses'),
      tableNumber(row, 'intGoalsFor', 'goalsfor', 'goalsFor'),
      tableNumber(row, 'intGoalsAgainst', 'goalsagainst', 'goalsAgainst'),
      tableNumber(row, 'intPoints', 'points')
    ];
  }).filter(Boolean);

  if (!mapped.some(r => r[0] === BENFICA)) return false;

  mapped.sort((a,b) => {
    if (b[7] !== a[7]) return b[7] - a[7];
    const gdA = a[5] - a[6];
    const gdB = b[5] - b[6];
    if (gdB !== gdA) return gdB - gdA;
    return b[5] - a[5];
  });

  leagueTable.splice(0, leagueTable.length, ...mapped);
  return true;
}

function saveOnlineCache(events, tableRows) {
  try {
    if (events?.length) {
      localStorage.setItem(ONLINE_CACHE_KEY, JSON.stringify(events));
    }
    if (tableRows?.length) {
      localStorage.setItem(ONLINE_TABLE_CACHE_KEY, JSON.stringify(tableRows));
    }
  } catch {}
}

function applyOnlineCache() {
  try {
    const events = JSON.parse(localStorage.getItem(ONLINE_CACHE_KEY) || '[]');
    const tableRows = JSON.parse(localStorage.getItem(ONLINE_TABLE_CACHE_KEY) || '[]');

    if (Array.isArray(events) && events.length) {
      mergeOnlineMatches(events);
    }
    if (Array.isArray(tableRows) && tableRows.length) {
      applyOnlineLeagueTable(tableRows);
    }
  } catch {}
}

function setOnlineStatus(text, mode='') {
  const el = document.getElementById('dataStatus');
  if (!el) return;
  el.textContent = text;
  el.dataset.onlineMode = mode;
}

async function fetchJsonSafe(url) {
  const response = await fetch(url, {
    cache: 'no-store',
    headers: { 'Accept': 'application/json' }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function refreshOnlineData() {
  setOnlineStatus('A atualizar…', 'loading');

  try {
    const [lastData, nextData, tableData] = await Promise.allSettled([
      fetchJsonSafe(`${SPORTSDB_BASE}/eventslast.php?id=${SPORTSDB_TEAM_ID}`),
      fetchJsonSafe(`${SPORTSDB_BASE}/eventsnext.php?id=${SPORTSDB_TEAM_ID}`),
      fetchJsonSafe(`${SPORTSDB_BASE}/lookuptable.php?l=${SPORTSDB_LEAGUE_ID}&s=${SPORTSDB_SEASON}`)
    ]);

    const rawEvents = [];

    if (lastData.status === 'fulfilled') {
      rawEvents.push(...(lastData.value.results || lastData.value.events || []));
    }
    if (nextData.status === 'fulfilled') {
      rawEvents.push(...(nextData.value.events || nextData.value.results || []));
    }

    const onlineMatches = rawEvents
      .map(sportsDbEventToMatch)
      .filter(Boolean);

    const changedMatches = mergeOnlineMatches(onlineMatches);

    let tableRows = [];
    let changedTable = false;
    if (tableData.status === 'fulfilled') {
      tableRows = tableData.value.table || tableData.value.tables || [];
      changedTable = applyOnlineLeagueTable(tableRows);
    }

    saveOnlineCache(onlineMatches, tableRows);

    if (changedMatches || changedTable) {
      renderHero();
      renderCompetitionCards();
      if (currentCompetition) renderDetail();
    }

    const stamp = new Intl.DateTimeFormat('pt-PT', {
      timeZone: DISPLAY_TIME_ZONE,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date());

    if (onlineMatches.length || changedTable) {
      setOnlineStatus(`Atualizado online · ${stamp}`, 'ok');
    } else {
      setOnlineStatus(`Verificado online · ${stamp}`, 'ok');
    }
  } catch (err) {
    setOnlineStatus('Dados locais · online indisponível', 'error');
    console.warn('Benfica Match Center: atualização online falhou', err);
  }
}

function routeFromHash() {
  const m = location.hash.match(/^#competicao\/([^/]+)(?:\/(status|calendar))?$/);
  if (m) openCompetition(m[1], m[2] || 'status', false);
  else showHome(false);
}

document.addEventListener('click', (e) => {
  const open = e.target.closest('[data-open-comp]');
  if (open) return openCompetition(open.dataset.openComp);
});

$('#backButton').addEventListener('click', () => showHome());
$('#homeButton').addEventListener('click', () => showHome());

document.querySelectorAll('.detail-tab').forEach(btn => btn.addEventListener('click', () => {
  currentDetail = btn.dataset.detail;
  document.querySelectorAll('.detail-tab').forEach(b => b.classList.toggle('active', b === btn));
  renderDetail();
  if (currentCompetition) history.replaceState(null,'',`#competicao/${currentCompetition}/${currentDetail}`);
}));

window.addEventListener('popstate', routeFromHash);
applyOnlineCache();

renderFinalResultBanner();
renderHero();
renderCompetitionCards();
routeFromHash();
refreshOnlineData();
setInterval(updateLiveCountdown, 1000);
setInterval(renderHero, 60000);

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
