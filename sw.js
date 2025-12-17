// Service Worker Mínimo
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Apenas repassa as requisições, não faz cache complexo
    e.respondWith(fetch(e.request));
});