const CACHE = 'benfica-match-center-v9-tv-aggregate';
const ASSETS = ["./", "./index.html", "./benfica.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icons/benfica-crest.svg", "./icons/clubs/academico-de-viseu.svg", "./icons/clubs/agf-aarhus.svg", "./icons/clubs/alverca.svg", "./icons/clubs/arouca.svg", "./icons/clubs/casa-pia.svg", "./icons/clubs/estoril.svg", "./icons/clubs/estrela-amadora.svg", "./icons/clubs/famalicao.svg", "./icons/clubs/fc-porto.svg", "./icons/clubs/gil-vicente.svg", "./icons/clubs/heart-of-midlothian.svg", "./icons/clubs/maritimo.svg", "./icons/clubs/moreirense.svg", "./icons/clubs/nacional.svg", "./icons/clubs/rio-ave.svg", "./icons/clubs/santa-clara.svg", "./icons/clubs/sc-braga.svg", "./icons/clubs/sl-benfica.svg", "./icons/clubs/sporting-cp.svg", "./icons/clubs/st-gallen.svg", "./icons/clubs/vitoria-sc.svg", "./icons/competitions/liga-portugal.svg", "./icons/competitions/taca-portugal.svg", "./icons/competitions/taca-liga.png", "./icons/competitions/europa-league.svg", "./icons/competitions/champions-league.svg", "./icons/competitions/conference-league.svg", "./icons/competitions/supertaca-portugal.svg", "./icons/competitions/uefa-supercup.svg"];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match(event.request).then(r => r || caches.match('./index.html'))));
});
