const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {test} = require('node:test');

const source = readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const core = source.slice(0, source.indexOf("document.addEventListener('click'"));
function harness(fetch, espn=false) {
  const nodes = new Map();
  const node = id => {
    if (!nodes.has(id)) nodes.set(id, {
      textContent: '', innerHTML: '', dataset: {}, disabled: false,
      classList: {add(){}, remove(){}}, addEventListener(){}
    });
    return nodes.get(id);
  };
  const storage = new Map();
  const context = vm.createContext({
    document: {querySelector: node, getElementById: node, querySelectorAll: () => [], addEventListener(){}},
    localStorage: {getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value)},
    location: {hash:'', pathname:'/', search:''},
    history: {pushState(){}, replaceState(){}}, window: {scrollTo(){}, addEventListener(){}},
    Date, Intl, console, AbortController, setTimeout, clearTimeout, fetch: (url, options) => !espn && (url.includes('espn.com') || url.includes('official-calendar.json')) ? Promise.reject(Error('ESPN unavailable')) : fetch(url, options)
  });
  vm.runInContext(core, context);
  return {context, node, storage, run: code => vm.runInContext(code, context)};
}
function event(overrides={}) {
  return {
    idEvent:'1234', strSeason:'2026-2027', strLeague:'Portuguese Primeira Liga',
    dateEvent:'2026-10-10', strHomeTeam:'Benfica', strAwayTeam:'Estoril',
    intRound:'4', strStatus:'Not Started', strTimestamp:'2026-10-10T19:00:00Z',
    ...overrides
  };
}
function table() {
  return Array.from({length:18}, (_, i) => ({
    strTeam: i === 0 ? 'Benfica' : 'Team ' + i,
    strSeason:'2026-2027', intRank:String(i + 1), intPlayed:'3', intWin:'2',
    intDraw:'1', intLoss:'0', intGoalsFor:'6', intGoalsAgainst:'2', intPoints:'7'
  }));
}
const response = value => ({ok:true, json:async () => value});

test('all failed requests are an error, never verified online', async () => {
  const h = harness(async () => {throw Error('network');});
  await h.run('refreshOnlineData()');
  assert.equal(h.node('dataStatus').dataset.onlineMode, 'error');
  assert.match(h.node('dataStatus').textContent, /Sem novos dados/);
  assert.equal(h.node('refreshDataButton').disabled, false);
});

test('HTTP 200 with null or malformed data is not an update', async () => {
  for (const payload of [{events:null}, {events:{}}, null]) {
    const h = harness(async () => response(payload));
    await h.run('refreshOnlineData()');
    assert.equal(h.node('dataStatus').dataset.onlineMode, 'error');
  }
});

test('one useful endpoint reports partial coverage and preserves standings', async () => {
  let calls = 0;
  const h = harness(async () => ++calls === 2 ? response({events:[event()]}) : Promise.reject(Error('offline')));
  await h.run('refreshOnlineData()');
  assert.equal(h.node('dataStatus').dataset.onlineMode, 'partial');
  assert.match(h.node('dataCoverage').textContent, /tabela anterior preservada/);
  assert.equal(h.run('leagueTable[0][0]'), 'Arouca');
});

test('simultaneous refreshes share one request batch', async () => {
  let calls = 0;
  const h = harness(async () => {calls++; return response({events:[]});});
  await Promise.all([h.run('refreshOnlineData()'), h.run('refreshOnlineData()')]);
  assert.equal(calls, 3);
});

test('old seasons and finished events with missing scores are rejected', () => {
  const h = harness();
  h.context.input = event({strSeason:'2025-2026'});
  assert.equal(h.run('sportsDbEventToMatch(input)'), null);
  h.context.input = event({strStatus:'FT', intHomeScore:null, intAwayScore:'0'});
  assert.equal(h.run('sportsDbEventToMatch(input)'), null);
  h.context.input = event({strStatus:'FT', intHomeScore:'0', intAwayScore:'0'});
  assert.equal(h.run('sportsDbEventToMatch(input).hs'), 0);
});

test('a rescheduled league fixture updates the locked kickoff without duplicating it', () => {
  const h = harness();
  h.context.input = event();
  h.run('mergeOnlineMatches([sportsDbEventToMatch(input)])');
  assert.equal(h.run("matches.filter(m => m.competition === 'liga' && m.away === 'Estoril').length"), 1);
  assert.equal(h.run("matches.find(m => m.competition === 'liga' && m.away === 'Estoril').kickoffUtc"), '2026-10-10T19:00:00.000Z');
});

test('same clubs in different competitions are never merged', () => {
  const h = harness();
  assert.equal(h.run("sameFixture({home:'SL Benfica',away:'Estoril',competition:'liga',date:'2026-10-10'}, {home:'SL Benfica',away:'Estoril',competition:'taca-portugal',date:'2026-10-10'})"), false);
});

test('complete ranked standings update Benfica text and preserve provider order', () => {
  const h = harness();
  const rows = table().reverse();
  h.context.rows = rows;
  assert.equal(h.run('applyOnlineLeagueTable(rows)'), true);
  assert.equal(h.run('leagueTable[0][0]'), 'SL Benfica');
  assert.match(h.run("comp('liga').shortDetail"), /7 pontos em 3 jogos/);
});

test('partial, duplicate, inconsistent and wrong-season standings are rejected', () => {
  const h = harness();
  const bad = [table().slice(0,5), table().map(row => ({...row, intRank:'1'})),
    table().map(row => ({...row,intPlayed:'99'})),
    table().map(row => ({...row,strSeason:'2025-2026'})),
    table().map(row => ({...row,intGoalsFor:null}))];
  for (const rows of bad) {
    h.context.rows = rows;
    assert.equal(h.run('applyOnlineLeagueTable(rows)'), false);
  }
  assert.equal(h.run('leagueTable[0][0]'), 'Arouca');
});

test('cache survives refresh and accumulates fixture history', () => {
  const h = harness();
  h.context.input = event();
  h.run('saveOnlineCache([sportsDbEventToMatch(input)], [])');
  h.context.input = event({idEvent:'5678', intRound:'5', strAwayTeam:'Casa Pia'});
  h.run('saveOnlineCache([sportsDbEventToMatch(input)], [])');
  assert.equal(h.run('onlineSnapshot.events.length'), 2);
  assert.equal(h.storage.size, 1);
});

test('expired cache does not replace the local baseline', () => {
  const h = harness();
  h.context.rows = table();
  h.run("localStorage.setItem(ONLINE_CACHE_KEY, JSON.stringify({season:SPORTSDB_SEASON, tableRows:rows, tableUpdatedAt:Date.now()-25*3600000}))");
  h.run('applyOnlineCache()');
  assert.equal(h.run('leagueTable[0][0]'), 'Arouca');
});

test('elapsed kickoff is not evidence of a live match', () => {
  const h = harness();
  assert.match(h.run("countdown({kickoffUtc:'2020-01-01T20:00:00Z',status:'NS'})"), /aguardar confirmação/);
});

test('HTTP errors are rejected', async () => {
  const h = harness(async () => ({ok:false,status:429}));
  await assert.rejects(h.run("fetchJsonSafe('https://example.test')"), /HTTP 429/);
});

test('stalled requests are aborted by the timeout', async () => {
  const h = harness((url, {signal}) => new Promise((resolve, reject) => {
    signal.addEventListener('abort', () => reject(Error('aborted')));
  }));
  h.context.setTimeout = callback => setTimeout(callback, 1);
  await assert.rejects(h.run("fetchJsonSafe('https://example.test')"), /aborted/);
});

test('full application startup renders and schedules data refresh', async () => {
  const h = harness(async () => response({events:[]}));
  const intervals = [];
  h.context.setInterval = (callback, delay) => intervals.push(delay);
  h.context.navigator = {};
  vm.runInContext(source.slice(source.indexOf("document.addEventListener('click'")), h.context);
  await h.run('onlineRefreshPromise');
  assert.ok(intervals.includes(300000));
  assert.match(h.node('#competitionGrid').innerHTML, /Liga Portugal/);
});

const realEspn = name => JSON.parse(readFileSync(path.join(__dirname, 'fixtures', 'espn-' + name + '.json'), 'utf8'));
test('actual ESPN responses cover 34 league fixtures, Europe and the full table without duplicates', async () => {
  const h = harness(async url => response(realEspn(url.includes('standings') ? 'standings' : url.includes('fixture=true') ? 'fixtures' : 'results')), true);
  await h.run('refreshOnlineData()');
  assert.equal(h.run("matches.filter(m => m.competition === 'liga').length"), 34);
  assert.equal(h.run("matches.filter(m => m.competition === 'liga' && m.source === 'ESPN').length"), 34);
  assert.equal(h.run("matches.filter(m => m.competition === 'europa').length"), 14);
  assert.equal(h.run("matches.filter(m => m.competition === 'europa' && m.source === 'ESPN').length"), 14);
  assert.equal(h.run('leagueTable.length'), 18);
  assert.equal(h.run('leagueTableSource'), 'ESPN');
  assert.equal(h.node('dataStatus').dataset.onlineMode, 'updated');
  assert.match(h.run("comp('liga').shortDetail"), /7 jogos/);
  assert.equal(h.run("matches.find(m => m.competition === 'liga' && m.home === 'FC Porto').hs"), 3);
  assert.equal(h.run("matches.find(m => m.competition === 'liga' && m.home === 'FC Porto').as"), 1);
});
test('ESPN tentative kickoff clears an obsolete confirmed time', () => {
  const h = harness();
  const event = realEspn('fixtures').events.find(e => e.timeValid === false);
  h.context.event = event;
  const game = h.run('espnEventToMatch(event)');
  assert.equal(game.kickoffUtc, null);
  h.context.game = game;
  h.run("mergeOnlineMatches([{...game,kickoffUtc:'2026-12-06T20:00:00Z'}]); mergeOnlineMatches([game])");
  assert.equal(h.run('matches.find(m => m.id === game.id).kickoffUtc'), undefined);
  assert.equal(h.run('matches.find(m => m.id === game.id).time'), null);
});
test('ESPN rejects old seasons, foreign teams, unsupported leagues and missing final scores', () => {
  const h = harness();
  const event = realEspn('results').events[0];
  for (const mutate of [e => e.season.year=2025, e => e.league.slug='friendly',
    e => e.competitions[0].competitors[1].team.id='999', e => e.competitions[0].competitors[0].score=null]) {
    const copy = structuredClone(event); mutate(copy); h.context.event=copy;
    assert.equal(h.run('espnEventToMatch(event)'), null);
  }
});
test('ESPN only marks a live game when the provider explicitly reports it', () => {
  const h = harness();
  const event=realEspn('results').events[0];
  event.competitions[0].status.type={completed:false,state:'in',name:'STATUS_IN_PROGRESS'};
  h.context.event=event;
  assert.equal(h.run('espnEventToMatch(event).status'), 'LIVE');
  event.competitions[0].status.type={completed:false,state:'pre',name:'STATUS_SCHEDULED'};
  assert.equal(h.run('espnEventToMatch(event).status'), 'NS');
});
test('cached live evidence is not replayed as a live match on restart', () => {
  const h=harness(); const event=realEspn('results').events[0];
  event.competitions[0].status.type={completed:false,state:'in',name:'STATUS_IN_PROGRESS'};
  h.context.event=event;
  h.run('saveOnlineCache([espnEventToMatch(event)],[]); applyOnlineCache()');
  assert.equal(h.run("matches.some(m => m.status === 'LIVE')"), false);
});
test('an old-season ESPN table is rejected', () => {
 const h=harness(); const data=realEspn('standings'); data.season.year=2025; h.context.data=data;
 assert.equal(h.run('espnStandingsRows(data).length'), 0);
});

test('official cup calendar corrects the old date without duplicating the quarter-final', () => {
  const h=harness();
  h.context.data={season:'2026-2027',fetchedAt:new Date().toISOString(),matches:[{
    id:'liga-portugal-1/3',competition:'taca-liga',round:'Quartos de final',date:'2026-10-29',
    kickoffUtc:'2026-10-29T20:45:00Z',home:'SL Benfica',away:'Gil Vicente FC',status:'NS',
    source:'Liga Portugal',sourceUrl:'https://www.ligaportugal.pt/match/20262027/allianzcup/1/3',sourceOnline:true
  }]};
  h.run('mergeOnlineMatches(officialCalendarMatches(data))');
  assert.equal(h.run("matches.filter(m => m.competition === 'taca-liga').length"),1);
  assert.equal(h.run("matches.find(m => m.competition === 'taca-liga').date"),'2026-10-29');
  assert.equal(h.run("matches.find(m => m.competition === 'taca-liga').kickoffUtc"),'2026-10-29T20:45:00Z');
  h.context.data.fetchedAt=new Date(Date.now()-25*3600000).toISOString();
  assert.equal(h.run('officialCalendarMatches(data).length'),0);
});
