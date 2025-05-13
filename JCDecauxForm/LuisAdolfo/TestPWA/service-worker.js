self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('mi-tarjeta').then(cache => {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        '/style.css',
        '/main.js',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});