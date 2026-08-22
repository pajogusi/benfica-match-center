const BENFICA = 'SL Benfica';
const BASELINE_UPDATED = '2026-08-22T15:45:00Z';

const competitions = [
  { id: 'liga', name: 'Liga Portugal', short: 'Liga Portugal', icon: '🇵🇹', status: 'Em curso', detail: 'Liga Betclic 2026/27 · 34 jornadas' },
  { id: 'europa', name: 'Liga Europa UEFA', short: 'Liga Europa', icon: '🇪🇺', status: 'Play-off de qualificação', detail: 'Vantagem de 3–1 antes da 2.ª mão com o AGF Aarhus' },
  { id: 'taca-liga', name: 'Taça da Liga', short: 'Taça da Liga', icon: '🏆', status: 'Por iniciar', detail: 'Calendário ainda sem jogos na base local' },
  { id: 'taca-portugal', name: 'Taça de Portugal', short: 'Taça de Portugal', icon: '🏆', status: 'Por iniciar', detail: 'Calendário ainda sem jogos na base local' }
];

const baselineMatches = [
  { id:'uel-20260723', competition:'europa', round:'2.ª pré-eliminatória · 1.ª mão', date:'2026-07-23', time:'19:00', home:'FC St. Gallen 1879', away:BENFICA, hs:2, as:1, status:'FT', venue:'Estádio Sitter', source:'official' },
  { id:'uel-20260730', competition:'europa', round:'2.ª pré-eliminatória · 2.ª mão', date:'2026-07-30', time:'20:00', home:BENFICA, away:'FC St. Gallen 1879', hs:5, as:0, status:'FT', venue:'Estádio da Luz', source:'official' },
  { id:'uel-20260806', competition:'europa', round:'3.ª pré-eliminatória · 1.ª mão', date:'2026-08-06', time:'20:00', home:BENFICA, away:'Heart of Midlothian', hs:6, as:1, status:'FT', venue:'Estádio da Luz', source:'official' },
  { id:'liga-20260809', competition:'liga', round:'Jornada 1', date:'2026-08-09', time:'20:30', home:BENFICA, away:'Académico de Viseu', hs:2, as:2, status:'FT', venue:'Estádio da Luz', source:'official' },
  { id:'uel-20260813', competition:'europa', round:'3.ª pré-eliminatória · 2.ª mão', date:'2026-08-13', time:'19:45', home:'Heart of Midlothian', away:BENFICA, hs:1, as:1, status:'FT', venue:'Tynecastle Park', source:'official' },
  { id:'liga-20260817', competition:'liga', round:'Jornada 2', date:'2026-08-17', time:'20:15', home:'Casa Pia AC', away:BENFICA, hs:0, as:7, status:'FT', venue:'Estádio Municipal de Rio Maior', source:'official' },
  { id:'uel-20260820', competition:'europa', round:'Play-off · 1.ª mão', date:'2026-08-20', time:'20:00', home:BENFICA, away:'AGF Aarhus', hs:3, as:1, status:'FT', venue:'Estádio da Luz', source:'official' },
  { id:'uel-20260827', competition:'europa', round:'Play-off · 2.ª mão', date:'2026-08-27', time:'19:00', home:'AGF Aarhus', away:BENFICA, hs:null, as:null, status:'NS', venue:'Cepheus Park Randers', source:'official' },
  { id:'liga-r3', competition:'liga', round:'Jornada 3', date:null, time:null, home:'Moreirense FC', away:BENFICA, hs:null, as:null, status:'NS', venue:'Parque Joaquim de Almeida Freitas', source:'draw' },
  { id:'liga-20260831', competition:'liga', round:'Jornada 4', date:'2026-08-31', time:null, home:BENFICA, away:'Estoril Praia', hs:null, as:null, status:'NS', venue:'Estádio da Luz', source:'official' },
  { id:'liga-r5', competition:'liga', round:'Jornada 5', date:null, time:null, home:'Marítimo', away:BENFICA, hs:null, as:null, status:'NS', venue:null, source:'draw' },
  { id:'liga-20260913', competition:'liga', round:'Jornada 6', date:'2026-09-13', time:null, home:BENFICA, away:'Gil Vicente FC', hs:null, as:null, status:'NS', venue:'Estádio da Luz', source:'official-date' },
  { id:'liga-r7', competition:'liga', round:'Jornada 7', date:null, time:null, home:'FC Porto', away:BENFICA, hs:null, as:null, status:'NS', venue:'Estádio do Dragão', source:'draw' },
  { id:'liga-20261011', competition:'liga', round:'Jornada 8', date:'2026-10-11', time:null, home:BENFICA, away:'Vitória SC', hs:null, as:null, status:'NS', venue:'Estádio da Luz', source:'official-date' },
  { id:'liga-r9', competition:'liga', round:'Jornada 9', date:null, time:null, home:'Santa Clara', away:BENFICA, hs:null, as:null, status:'NS', venue:null, source:'draw' },
  { id:'liga-r10', competition:'liga', round:'Jornada 10', date:null, time:null, home:BENFICA, away:'FC Alverca', hs:null, as:null, status:'NS', venue:'Estádio da Luz', source:'draw' },
  { id:'liga-20261108', competition:'liga', round:'Jornada 11', date:'2026-11-08', time:null, home:'CF Estrela Amadora', away:BENFICA, hs:null, as:null, status:'NS', venue:'Estádio José Gomes', source:'official-date' },
  { id:'liga-20261129', competition:'liga', round:'Jornada 12', date:'2026-11-29', time:null, home:BENFICA, away:'FC Famalicão', hs:null, as:null, status:'NS', venue:'Estádio da Luz', source:'official-date' },
  { id:'liga-20261206', competition:'liga', round:'Jornada 13', date:'2026-12-06', time:null, home:'CD Nacional', away:BENFICA, hs:null, as:null, status:'NS', venue:'Estádio da Madeira', source:'official-date' },
  { id:'liga-r14', competition:'liga', round:'Jornada 14', date:null, time:null, home:BENFICA, away:'SC Braga', hs:null, as:null, status:'NS', venue:'Estádio da Luz', source:'draw' },
  { id:'liga-r15', competition:'liga', round:'Jornada 15', date:null, time:null, home:'Rio Ave FC', away:BENFICA, hs:null, as:null, status:'NS', venue:null, source:'draw' },
  { id:'liga-20261227', competition:'liga', round:'Jornada 16', date:'2026-12-27', time:null, home:BENFICA, away:'Sporting CP', hs:null, as:null, status:'NS', venue:'Estádio da Luz', source:'official-date' },
  { id:'liga-20270110', competition:'liga', round:'Jornada 17', date:'2027-01-10', time:null, home:'FC Arouca', away:BENFICA, hs:null, as:null, status:'NS', venue:'Estádio Municipal de Arouca', source:'official-date' }
];

const firstHalf = [
  [BENFICA,'Académico de Viseu'], ['Casa Pia AC',BENFICA], ['Moreirense FC',BENFICA], [BENFICA,'Estoril Praia'],
  ['Marítimo',BENFICA], [BENFICA,'Gil Vicente FC'], ['FC Porto',BENFICA], [BENFICA,'Vitória SC'],
  ['Santa Clara',BENFICA], [BENFICA,'FC Alverca'], ['CF Estrela Amadora',BENFICA], [BENFICA,'FC Famalicão'],
  ['CD Nacional',BENFICA], [BENFICA,'SC Braga'], ['Rio Ave FC',BENFICA], [BENFICA,'Sporting CP'], ['FC Arouca',BENFICA]
];
const leagueRounds = [
  ...firstHalf.map((teams, i) => ({round:i+1, home:teams[0], away:teams[1]})),
  ...firstHalf.map((teams, i) => ({round:i+18, home:teams[1], away:teams[0]}))
];

let state = {
  view: 'overview',
  competition: 'all',
  search: '',
  matches: loadSavedMatches() || structuredClone(baselineMatches),
  dataLabel: loadSavedMatches() ? 'Dados guardados no browser' : 'Dados verificados · 22/08/2026'
};

const $ = sel => document.querySelector(sel);
const viewRoot = $('#viewRoot');
const competitionFilter = $('#competitionFilter');
const searchInput = $('#searchInput');

function loadSavedMatches(){
  try {
    const raw = localStorage.getItem('benfica-live-matches-v1');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.length) return null;
    return mergeMatches(structuredClone(baselineMatches), parsed);
  } catch { return null; }
}

function comp(id){ return competitions.find(c => c.id === id) || {name:id,short:id,icon:'⚽'}; }
function normalize(s=''){ return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }
function parseDate(match){
  if (!match.date) return null;
  const iso = `${match.date}T${match.time || '12:00'}:00`;
  return new Date(iso);
}
function dateLabel(match, long=false){
  if (!match.date) return 'Data por confirmar';
  const d = parseDate(match);
  const opt = long ? {weekday:'long', day:'numeric', month:'long', year:'numeric'} : {day:'2-digit', month:'short', year:'numeric'};
  const text = new Intl.DateTimeFormat('pt-PT', opt).format(d);
  return match.time ? `${text} · ${match.time}` : `${text} · hora por confirmar`;
}
function resultLetter(m){
  if (m.status !== 'FT') return null;
  const benficaHome = m.home === BENFICA;
  const gf = benficaHome ? m.hs : m.as;
  const ga = benficaHome ? m.as : m.hs;
  return gf > ga ? 'W' : gf < ga ? 'L' : 'D';
}
function resultLabel(letter){ return letter === 'W' ? 'Vitória' : letter === 'L' ? 'Derrota' : 'Empate'; }
function scoreText(m){ return m.status === 'FT' ? `${m.hs} – ${m.as}` : 'vs'; }
function filtered(matches = state.matches){
  const q = normalize(state.search);
  return matches.filter(m => (state.competition === 'all' || m.competition === state.competition) && (!q || normalize(`${m.home} ${m.away}`).includes(q)));
}
function knownUpcoming(){
  const now = new Date();
  return state.matches.filter(m => m.status !== 'FT' && m.date).sort((a,b) => parseDate(a) - parseDate(b)).filter(m => parseDate(m) >= new Date(now.getTime()-6*60*60*1000));
}

function renderHero(){
  const m = knownUpcoming()[0];
  const hero = $('#nextMatchHero');
  if (!m) {
    hero.innerHTML = `<span class="hero-kicker">Próximo jogo</span><div class="hero-main"><div class="hero-team"><strong>A aguardar calendário</strong></div></div>`;
    return;
  }
  hero.innerHTML = `
    <span class="hero-kicker">Próximo jogo · ${escapeHtml(comp(m.competition).short)}</span>
    <div class="hero-main">
      <div class="hero-team"><span>Casa</span><strong>${escapeHtml(m.home)}</strong></div>
      <div class="hero-vs">VS</div>
      <div class="hero-team away"><span>Fora</span><strong>${escapeHtml(m.away)}</strong></div>
    </div>
    <div class="hero-info">
      <span class="hero-pill">📅 ${escapeHtml(dateLabel(m, true))}</span>
      <span class="hero-pill">🏟️ ${escapeHtml(m.venue || 'Local por confirmar')}</span>
      <span class="hero-pill">🏆 ${escapeHtml(m.round)}</span>
      <span class="hero-pill" id="countdown">⏱️ ${countdownText(m)}</span>
    </div>
    <div class="hero-actions">
      <button class="btn btn-primary" type="button" data-calendar-id="${m.id}">Adicionar ao calendário</button>
      <a class="btn btn-ghost" href="https://www.slbenfica.pt/pt-pt/futebol/calendario" target="_blank" rel="noreferrer" style="text-decoration:none">Fonte oficial</a>
    </div>`;
}

function countdownText(m){
  const dt = parseDate(m); if (!dt) return 'Data por confirmar';
  const diff = dt - new Date(); if (diff <= 0) return 'Hoje / em curso';
  const days = Math.floor(diff/86400000); const hours = Math.floor((diff%86400000)/3600000); const mins = Math.floor((diff%3600000)/60000);
  if (days) return `Faltam ${days}d ${hours}h`;
  return `Faltam ${hours}h ${mins}m`;
}

function renderSummary(){
  const finished = state.matches.filter(m => m.status === 'FT');
  $('#officialCount').textContent = finished.length;
  $('#winsCount').textContent = finished.filter(m => resultLetter(m) === 'W').length;
  const goals = finished.reduce((sum,m) => sum + (m.home === BENFICA ? m.hs : m.as), 0);
  $('#goalsCount').textContent = goals;
  $('#dataStatus').textContent = state.dataLabel;
}

function matchCard(m){
  const letter = resultLetter(m);
  const action = m.status === 'FT' ? `<span>${escapeHtml(m.venue || '')}</span>` : `<button type="button" data-calendar-id="${m.id}">+ Calendário</button>`;
  return `<article class="match-card">
    <div class="match-meta">
      <span class="competition-badge"><span class="competition-dot"></span>${escapeHtml(comp(m.competition).short)} · ${escapeHtml(m.round)}</span>
      <span>${escapeHtml(dateLabel(m))}</span>
    </div>
    <div class="match-teams">
      <div class="team ${m.home===BENFICA?'benfica':''}">${escapeHtml(m.home)}</div>
      <div class="score ${m.status!=='FT'?'pending':''}">${escapeHtml(scoreText(m))}</div>
      <div class="team right ${m.away===BENFICA?'benfica':''}">${escapeHtml(m.away)}</div>
    </div>
    <div class="match-footer">
      ${letter ? `<span class="result-pill result-${letter}">${resultLabel(letter)}</span>` : `<span>${escapeHtml(m.venue || 'Local por confirmar')}</span>`}
      ${action}
    </div>
  </article>`;
}

function renderOverview(){
  const items = filtered();
  const upcoming = items.filter(m=>m.status!=='FT').sort(sortMatches).slice(0,5);
  const results = items.filter(m=>m.status==='FT').sort((a,b)=>parseDate(b)-parseDate(a)).slice(0,5);
  viewRoot.innerHTML = `
    ${section('Próximos jogos','Os jogos com data confirmada aparecem primeiro.', upcoming)}
    ${section('Últimos resultados','Resultados oficiais da época 2026/27.', results)}
  `;
}

function section(title, subtitle, matches){
  return `<div class="section-head"><div><h2>${title}</h2><p>${subtitle}</p></div><span class="count">${matches.length}</span></div>
  <div class="match-list">${matches.length ? matches.map(matchCard).join('') : '<div class="empty">Sem jogos para mostrar com estes filtros.</div>'}</div>`;
}

function sortMatches(a,b){
  if (a.date && b.date) return parseDate(a)-parseDate(b);
  if (a.date) return -1; if (b.date) return 1;
  const ra = Number((a.round.match(/\d+/)||['999'])[0]); const rb = Number((b.round.match(/\d+/)||['999'])[0]);
  return ra-rb;
}

function renderCalendar(){
  const future = filtered().filter(m=>m.status!=='FT').sort(sortMatches);
  let html = section('Próximos jogos','Datas e horas podem mudar; as que ainda não são oficiais aparecem como “por confirmar”.', future);
  const leagueVisible = state.competition === 'all' || state.competition === 'liga';
  if (leagueVisible && !state.search) {
    html += `<div class="section-head"><div><h2>Calendário completo da Liga</h2><p>Emparelhamentos das 34 jornadas; várias datas ainda não estão fechadas.</p></div></div>
      <div class="notice">A ordem dos adversários é oficial. Quando a data/hora ainda não está confirmada, a app não inventa um horário.</div>
      <div class="rounds">${leagueRounds.map(r => roundRow(r)).join('')}</div>`;
  }
  viewRoot.innerHTML = html;
}

function roundRow(r){
  const known = state.matches.find(m => m.competition==='liga' && Number((m.round.match(/\d+/)||[0])[0]) === r.round);
  const date = known ? dateLabel(known) : 'Data por confirmar';
  return `<div class="round"><span class="round-number">J${r.round}</span><span class="round-fixture">${escapeHtml(r.home)} <span style="color:#666">—</span> ${escapeHtml(r.away)}</span><span class="round-date">${escapeHtml(date)}</span></div>`;
}

function renderResults(){
  const results = filtered().filter(m=>m.status==='FT').sort((a,b)=>parseDate(b)-parseDate(a));
  viewRoot.innerHTML = section('Resultados','Resultados oficiais registados na app.', results);
}

function renderCompetitions(){
  const cards = competitions.filter(c=>state.competition==='all'||c.id===state.competition).filter(c=>!state.search || normalize(c.name).includes(normalize(state.search))).map(c=>{
    const ms = state.matches.filter(m=>m.competition===c.id && m.status==='FT');
    const wins=ms.filter(m=>resultLetter(m)==='W').length, draws=ms.filter(m=>resultLetter(m)==='D').length, losses=ms.filter(m=>resultLetter(m)==='L').length;
    return `<article class="competition-card">
      <div class="competition-card-top"><div><h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.detail)}</p></div><div class="comp-icon">${c.icon}</div></div>
      <div class="comp-stats"><div class="comp-stat"><span>Jogos</span><strong>${ms.length}</strong></div><div class="comp-stat"><span>V-E-D</span><strong>${wins}-${draws}-${losses}</strong></div><div class="comp-stat"><span>Golos</span><strong>${ms.reduce((s,m)=>s+(m.home===BENFICA?m.hs:m.as),0)}</strong></div></div>
      <span class="comp-status">${escapeHtml(c.status)}</span>
    </article>`;
  }).join('');
  viewRoot.innerHTML = `<div class="section-head"><div><h2>Competições 2026/27</h2><p>Estado atual das provas da equipa principal.</p></div></div><div class="competition-grid">${cards || '<div class="empty">Sem competições para mostrar.</div>'}</div>`;
}

function render(){
  renderHero(); renderSummary();
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active', b.dataset.view===state.view));
  if (state.view==='overview') renderOverview();
  if (state.view==='calendar') renderCalendar();
  if (state.view==='results') renderResults();
  if (state.view==='competitions') renderCompetitions();
}

function escapeHtml(value){ return String(value ?? '').replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c])); }

function downloadICS(match){
  if (!match.date) return toast('Este jogo ainda não tem data confirmada.');
  const start = toICSDate(match.date, match.time || '12:00');
  const endDate = new Date(`${match.date}T${match.time || '12:00'}:00`); endDate.setHours(endDate.getHours()+2);
  const end = toICSDateObj(endDate);
  const title = `${match.home} vs ${match.away}`;
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Benfica Match Center//PT','BEGIN:VEVENT',`UID:${match.id}@benfica-match-center`,`DTSTAMP:${toICSDateObj(new Date())}`,`DTSTART:${start}`,`DTEND:${end}`,`SUMMARY:${icsEscape(title)}`,`LOCATION:${icsEscape(match.venue||'')}`,`DESCRIPTION:${icsEscape(comp(match.competition).name+' · '+match.round)}`,'END:VEVENT','END:VCALENDAR'];
  const blob = new Blob([lines.join('\r\n')], {type:'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`${match.date}-${slug(title)}.ics`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),500);
}
function toICSDate(date,time){ return `${date.replaceAll('-','')}T${time.replace(':','')}00`; }
function toICSDateObj(d){ return d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,''); }
function icsEscape(s){ return String(s).replace(/\\/g,'\\\\').replace(/,/g,'\\,').replace(/;/g,'\\;').replace(/\n/g,'\\n'); }
function slug(s){ return normalize(s).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
function toast(msg){ const el=document.createElement('div'); el.className='toast'; el.textContent=msg; document.body.appendChild(el); setTimeout(()=>el.remove(),2600); }

function mergeMatches(base, live){
  const map = new Map(base.map(m=>[`${m.date}|${normalize(m.home)}|${normalize(m.away)}`,m]));
  for (const m of live) {
    const key=`${m.date}|${normalize(m.home)}|${normalize(m.away)}`;
    if (map.has(key)) Object.assign(map.get(key),m,{source:'live'}); else if(m.date) base.push({...m,source:'live'});
  }
  return base;
}

async function refreshLive(){
  const btn=$('#refreshBtn'); btn.classList.add('loading');
  $('#dataStatus').textContent='A tentar atualizar…';
  try {
    // Fonte pública opcional. Se estiver indisponível, a app mantém os dados oficiais locais.
    const teamRes = await fetch('https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Benfica', {cache:'no-store'});
    if (!teamRes.ok) throw new Error('team');
    const teamData = await teamRes.json();
    const team = (teamData.teams||[]).find(t=>normalize(t.strTeam)==='benfica' || normalize(t.strTeam).includes('benfica'));
    if (!team?.idTeam) throw new Error('id');
    const [lastRes,nextRes] = await Promise.all([
      fetch(`https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${team.idTeam}`,{cache:'no-store'}),
      fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=${team.idTeam}`,{cache:'no-store'})
    ]);
    const events=[...((await lastRes.json()).results||[]),...((await nextRes.json()).events||[])];
    if (!events.length) throw new Error('events');
    const live=events.map(fromSportsDb).filter(Boolean);
    state.matches=mergeMatches(structuredClone(baselineMatches),live);
    localStorage.setItem('benfica-live-matches-v1',JSON.stringify(live));
    state.dataLabel=`Atualizado online · ${new Intl.DateTimeFormat('pt-PT',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date())}`;
    toast('Dados online atualizados.');
  } catch(e) {
    state.dataLabel='Fonte online indisponível · a usar dados verificados';
    toast('Não foi possível atualizar online. Mantive os dados verificados.');
  } finally { btn.classList.remove('loading'); render(); }
}

function fromSportsDb(e){
  let home=e.strHomeTeam, away=e.strAwayTeam; if(!home||!away||!e.dateEvent) return null;
  if(!normalize(home+' '+away).includes('benfica')) return null;
  if (normalize(home).includes('benfica')) home = BENFICA;
  if (normalize(away).includes('benfica')) away = BENFICA;
  const cname=normalize(e.strLeague||'');
  const competition = cname.includes('europa') ? 'europa' : cname.includes('primeira')||cname.includes('liga portugal') ? 'liga' : cname.includes('taca da liga') ? 'taca-liga' : cname.includes('taca')||cname.includes('cup') ? 'taca-portugal' : 'liga';
  const finished = e.intHomeScore !== null && e.intHomeScore !== '' && e.intAwayScore !== null && e.intAwayScore !== '';
  return {
    id:`sportsdb-${e.idEvent||Math.random().toString(36).slice(2)}`,
    competition,
    round:e.intRound ? `Jornada ${e.intRound}` : (e.strEventAlternate||e.strLeague||'Jogo'),
    date:e.dateEvent,
    time:(e.strTime||'').slice(0,5)||null,
    home, away,
    hs:finished?Number(e.intHomeScore):null,
    as:finished?Number(e.intAwayScore):null,
    status:finished?'FT':'NS',
    venue:e.strVenue||null
  };
}

competitionFilter.innerHTML += competitions.map(c=>`<option value="${c.id}">${c.name}</option>`).join('');
competitionFilter.addEventListener('change',e=>{state.competition=e.target.value;render();});
searchInput.addEventListener('input',e=>{state.search=e.target.value;render();});
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{state.view=btn.dataset.view;render();}));
document.addEventListener('click',e=>{ const id=e.target?.dataset?.calendarId; if(id){ const m=state.matches.find(x=>x.id===id); if(m) downloadICS(m); }});
$('#refreshBtn').addEventListener('click',refreshLive);
setInterval(()=>{ const c=$('#countdown'); const m=knownUpcoming()[0]; if(c&&m) c.textContent=`⏱️ ${countdownText(m)}`; },60000);

if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./sw.js').catch(()=>{});
render();
