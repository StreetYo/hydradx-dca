'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e698dc9c67e5dc511750b3814d570037",
"assets/AssetManifest.bin.json": "cd5fa5abe742d8115581a18871dd7b76",
"assets/AssetManifest.json": "ff532c60e8f4f2d502377aa7ef55513f",
"assets/assets/crypto_assets/0.png": "b9bdd0ec376c9d8da46dce3bed3d600e",
"assets/assets/crypto_assets/1.png": "87d7ba6f0f77db798f7ecabaea9d27e3",
"assets/assets/crypto_assets/10.png": "1ce65d1e5d52609fdc3b8fcb7662526f",
"assets/assets/crypto_assets/100.png": "a9ba4607a9a8d60ded7c04ea273914a8",
"assets/assets/crypto_assets/101.png": "e8cc96ca2c7532482f665f1cb7c2f37b",
"assets/assets/crypto_assets/102.png": "4bb005b9a35eadbfa986ea80b555d6d4",
"assets/assets/crypto_assets/11.png": "cbc5d80debc8502f6329619c184d37f5",
"assets/assets/crypto_assets/12.png": "26a88c89abe7c670f4634357339877ab",
"assets/assets/crypto_assets/13.png": "eafa2a67266ec101fd44f4fb41b8536a",
"assets/assets/crypto_assets/14.png": "eb12680d17371ca53a937de0e87db4c8",
"assets/assets/crypto_assets/15.png": "bb3c36331cf2443707f477faba002aba",
"assets/assets/crypto_assets/16.png": "8eb2481080200b1d7e18342f7d137acb",
"assets/assets/crypto_assets/17.png": "f14d677c3d20b59fd46a0009aca8329d",
"assets/assets/crypto_assets/18.png": "41f31a61998df8938635f82d1b39f984",
"assets/assets/crypto_assets/19.png": "599e7884efd2d09f4002801f2868fbfb",
"assets/assets/crypto_assets/2.png": "41f31a61998df8938635f82d1b39f984",
"assets/assets/crypto_assets/20.png": "f3c1f9dd94fec1e1268b3ed7cacfc1d5",
"assets/assets/crypto_assets/21.png": "9dcb5cc517889e641fc4ad0dedc02d7d",
"assets/assets/crypto_assets/22.png": "9dcb5cc517889e641fc4ad0dedc02d7d",
"assets/assets/crypto_assets/23.png": "1ce65d1e5d52609fdc3b8fcb7662526f",
"assets/assets/crypto_assets/24.png": "da1c2a2ae03695e3318293ea848eff47",
"assets/assets/crypto_assets/3.png": "599e7884efd2d09f4002801f2868fbfb",
"assets/assets/crypto_assets/4.png": "f3c1f9dd94fec1e1268b3ed7cacfc1d5",
"assets/assets/crypto_assets/5.png": "546d3f08b9e4cac04623df8b2bc01b8d",
"assets/assets/crypto_assets/7.png": "9dcb5cc517889e641fc4ad0dedc02d7d",
"assets/assets/crypto_assets/8.png": "c781988325d6850ccd7bcf753fb044a6",
"assets/assets/crypto_assets/9.png": "a55630fbf9aa2332f1f399f97c690795",
"assets/assets/crypto_assets/placeholder.png": "25f49050af217b2fe0aab01996869422",
"assets/assets/HydraDX-Logo.svg": "10d51de83b8890c0424456578983c0d8",
"assets/assets/money.gif": "4801a31221373b43abd232b225e25da2",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/fonts/MaterialIcons-Regular.otf": "a7ef25b5143135ad5f1581bfe43fee2e",
"assets/NOTICES": "8ee8b46a442259f2db9b46fc66aefe82",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8ee70c3c13a4f5b80bb04e203dc82aa9",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fdf89d3bf8aed55aecf94e1d7b325eb9",
"/": "fdf89d3bf8aed55aecf94e1d7b325eb9",
"main.dart.js": "d8d4651b1e930fa87dcc1a5c3aec79e5",
"manifest.json": "8682123b3ce69abd3ace92ec57f07045",
"version.json": "c8619a8ce5a486520765f77962fa39ce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
