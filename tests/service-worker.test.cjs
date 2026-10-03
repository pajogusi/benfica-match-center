const assert = require('node:assert/strict');
const {test} = require('node:test');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');
function worker(fetch, cache, keys=[]) {
  const handlers = {};
  const removed = [];
  const context = vm.createContext({
    self: {
      location:{origin:'https://example.test'},
      addEventListener:(type, handler) => handlers[type] = handler,
      clients:{claim:async()=>{}}, skipWaiting:async()=>{}
    },
    caches:{open:async()=>cache, keys:async()=>keys, delete:async key=>removed.push(key)},
    fetch, URL, Response
  });
  vm.runInContext(source, context);
  return {handlers, removed};
}
test('external API calls bypass the HTML offline fallback', () => {
  const {handlers} = worker();
  let intercepted = false;
  handlers.fetch({
    request:{method:'GET', url:'https://www.thesportsdb.com/api/v1/json/123/eventsnext.php'},
    respondWith:()=>{intercepted=true;}
  });
  assert.equal(intercepted, false);
});
test('activation preserves caches belonging to other applications', async () => {
  const {handlers, removed} = worker(null, null, ['pajo-home-v1','benfica-match-center-v27-portugal-time','benfica-match-center-v28-refresh-reliable','benfica-match-center-v30-online-ready']);
  let pending;
  handlers.activate({waitUntil:promise=>{pending=promise;}});
  await pending;
  assert.deepEqual(removed, ['benfica-match-center-v27-portugal-time','benfica-match-center-v28-refresh-reliable']);
});
test('offline PWA navigation opens benfica.html rather than the maintenance page', async () => {
  const page = new Response('application');
  const cache = {match:async key=>key === './benfica.html' ? page : undefined};
  const {handlers} = worker(async()=>{throw Error('offline');}, cache);
  let pending;
  handlers.fetch({
    request:{method:'GET',url:'https://example.test/benfica-match-center/benfica.html?utm_source=test',mode:'navigate'},
    respondWith:promise=>{pending=promise;}
  });
  assert.equal(await (await pending).text(), 'application');
});
test('HTTP failures cannot poison an existing cached asset', async () => {
  let writes = 0;
  const cache = {match:async()=>new Response('previous'), put:async()=>{writes++;}};
  const {handlers} = worker(async()=>new Response('error',{status:503}), cache);
  let pending;
  handlers.fetch({
    request:{method:'GET',url:'https://example.test/app.js'},
    respondWith:promise=>{pending=promise;}
  });
  assert.equal(await (await pending).text(), 'previous');
  assert.equal(writes, 0);
});
