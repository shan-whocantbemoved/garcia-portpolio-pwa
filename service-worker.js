const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/manifest.json",
    "/images/icon-192.png",
    "/images/icon-512.png"
];

// Install Service Worker and cache assets
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch Cached Files for offline use
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});