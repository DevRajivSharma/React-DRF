let cacheData = 'demo-v-1.0';
this.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/media/loading.3fa77db2c7dca375d5ff.gif',
                '/index.html',
                '/static/css/main.ff02f4b5.css',
                '/static/js/main.630c2b33.js',
                '/',
                '/manifest.json',
                'logo.png'
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
