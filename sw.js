self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('dev-jewellers').then(function(cache) {
     return cache.addAll([
       'https://devjewellers.github.io',
       'index.html',
       'script.js',
       'loader.css',
       'devjewellers512.png',
'devjewellers.webmanifest',
      'save.js',
      'whatsapp.png',
      'favicon1.ico',
      'favicon.ico',
      'devjewellers.jpg',
      'click.mp3',
      'android-chrome-512x512.ico',
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
