self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('burn-permit-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './service-worker.js',
        './ccfr-icon-192.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});