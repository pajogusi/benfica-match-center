const CACHE_PREFIX = 'benfica-match-center-';
const CACHE = CACHE_PREFIX + 'v32-europa-table';
const ASSETS = ['./', './index.html', './benfica.html', './styles.css?v=32-europa-table', './app.js?v=32-europa-table', './manifest.webmanifest', './icons/pjcorelabs.png', './icons/benfica-crest.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => event.waitUntil(
  caches.keys()
    .then(keys => Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE).map(key => caches.delete(key))))
    .then(() => self.clients.claim())
));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  // External APIs manage their own errors; never answer JSON requests with HTML.
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(event.request, {cache: 'no-store'});
      if (response.ok) {
        try { await cache.put(event.request, response.clone()); } catch {}
        return response;
      }
      return (await cache.match(event.request)) || response;
    } catch {
      const exact = await cache.match(event.request);
      if (exact) return exact;
      if (event.request.mode === 'navigate') {
        const page = url.pathname.endsWith('/benfica.html') ? './benfica.html' : './index.html';
        const offlinePage = await cache.match(page);
        if (offlinePage) return offlinePage;
      }
      return Response.error();
    }
  })());
});
