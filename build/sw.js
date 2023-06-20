let cacheData = 'appV1';

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {
            cache.addAll([
                "static/js/bundle.js",
                "static/js/main.chunk.js",
                "static/js/0.chunck.js",
                "index.html",
                "/",
                "users",
            ])
        })
    )
})

this.addEventListener("fetch", event => {
    if (!navigator.onLine) {
        console.log('here 111111');

        event.respondWith(
            caches.match(event.request).then(result => {
                console.log('here 2');
                if (result) {
                    return result;
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl);
            })
        )
    }
})