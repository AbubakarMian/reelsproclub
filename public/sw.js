let cacheData = 'appV1';

this.addEventListener('install',event=>{
    event.waitUntil(
        caches.open(cacheData).then(cache=>{
            cache.addAll([
                "static/js/bundle.js",
                "static/js/main.chunk.js",
                "static/js/0.chunck.js",
                "index.html",
                "/",
            ])
        })
    )
})

this.addEventListener("fetch",event=>{
    event.respondWith(
        caches.match(event.request).then(result=>{
            if(result){
                return result;
            }
        })
    )
})