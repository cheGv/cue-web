// The app shell, kept for a start with no connection (the room, Phase 1).
// Network first: online, every file comes fresh from the server and the copy
// here is only refreshed. The app's own files are asked with no-cache, so the
// browser checks with the server every time instead of using its ten-minute
// copy (GitHub Pages sends max-age=600): a new deploy is what opens next.
// Offline, the last copy opens the app so captures waiting on the device can
// be seen and go up later. Only the app's own files (and the CanvasKit and
// font files it loads) are kept: never the database, the proxy, or anything
// about a client.

const CACHE = 'cue-shell-v2';

function keep(url) {
  return url.origin === self.location.origin ||
    url.hostname.endsWith('gstatic.com') ||
    url.hostname.endsWith('googleapis.com');
}

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name !== CACHE) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (!keep(url)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      // Same origin: revalidate (an unchanged file costs a 304). CanvasKit
      // and fonts on gstatic are versioned by their URLs; their caching stays.
      const own = url.origin === self.location.origin;
      const res = own ? await fetch(req, { cache: 'no-cache' }) : await fetch(req);
      if (res.ok) await cache.put(req, res.clone());
      return res;
    } catch (e) {
      const hit = await cache.match(req, { ignoreSearch: true });
      if (hit) return hit;
      // A path URL opened offline (/clients/x): the app itself.
      if (req.mode === 'navigate') {
        const shell = await cache.match('/', { ignoreSearch: true }) || await cache.match('/index.html');
        if (shell) return shell;
      }
      throw e;
    }
  })());
});
