//stores the cache storage
let cacheName = "lessonApp-v3" //name of the cache storage


//the files that will become part of the cache storage and automatically loaded with the cache

let cacheFiles = [
    "index.html", 
    "subjectPic/english.png",
    "subjectPic/biology.png",
    "subjectPic/chemistry.png",
    "subjectPic/literature.png",
    "subjectPic/english1.png",
    "subjectPic/biology1.png",
    "subjectPic/chemistry1.png",
    "subjectPic/literature1.png"
]


//saves the cache files into the cache storage

self.addEventListener("install", function(e) {
    console.log("[Service Worker] Install");
    e.waitUntil(
    caches.open(cacheName).then(function(cache) {
    console.log("[Service Worker] Caching files");
    return cache.addAll(cacheFiles);
    })
    );
    });

//intercept all the fetch requests coming from the front-end
self.addEventListener('fetch', function (e) {
    e.respondWith(
    // check if the cache has the file
    caches.match(e.request).then(function (r) { //the service worker to check first of all, in relation to the resource that is asked in the request, if it is in the in, the in the cache
    console.log('[Service Worker] Fetching resource: ‘ + e.request.url');
    // 'r' is the matching file if it exists in the cache
    return r
    })
    );
    });
    