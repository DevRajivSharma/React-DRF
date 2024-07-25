let cacheData = 'demo-v-1.0';
this.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/src/components/loader.gif',
                '/index.html',
                '/',
                '/manifest.json',
            ]);
        })
    );
});

this.addEventListener('fetch', (e) => {
    if(!navigator.onLine){
        e.respondWith(
            caches.match(e.request).then((result) => {
                return result || 'Error';
            })
        );
    }
});
