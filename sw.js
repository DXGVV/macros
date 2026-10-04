/* Service worker : met l'app en cache pour qu'elle marche sans réseau.
   Change VERSION à chaque mise à jour des fichiers. */
const VERSION = "macros-v2.0.0";
const ASSETS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./vendor/zxing.min.js",
  "./fonts/Poppins-Regular.ttf", "./fonts/Poppins-Medium.ttf", "./fonts/Poppins-Bold.ttf",
  "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png", "./icons/favicon-32.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // API Gemini / Open Food Facts : toujours en direct
  e.respondWith(
    caches.open(VERSION).then(async cache => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => null);
      return cached || (await network) || (req.mode === "navigate" ? cache.match("./index.html") : Response.error());
    })
  );
});
