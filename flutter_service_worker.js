'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "17940a3febf652e4ff13c926ac5d06e4",
".git/config": "4358fe30db287f866368cdba927cfc1b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd4cc6f10200eb33ad1e8fddf78f44da",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "99aeb1dfcf83ed867dec236481ac6c04",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c59bb78497b674c09f4e4da417ec98ce",
".git/logs/refs/heads/main": "c59bb78497b674c09f4e4da417ec98ce",
".git/logs/refs/remotes/origin/main": "80f79be05151c6aceade78b6e046e7a4",
".git/objects/03/2261edbbe135d10388fde85e332d2b7adda106": "5555d969975959ef0746bb9a938cb41d",
".git/objects/18/b881788829f8bca890ed9a9cda874753caee02": "04aa641271c5dea47b8a361f8d941814",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/2c/ba95969be6b8c6d3120746b5bbb85f020e21aa": "4b0a4e30dbd2dc73ca3caf36e57f4fe3",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/46/2ee9d8ba88b9c4f3a2cd19bdd2e537bba06c5d": "01f8729f5b39db17ab23fa77dede01f9",
".git/objects/4b/366b451cb603fd5b27d01654941e17cb639049": "ffb5a04d85c8f125bf22c6996b859805",
".git/objects/4b/991867239f386c2424e3c0a6340150bb78bc55": "ec2472e8a04e60a068e17564d0b23c40",
".git/objects/4c/e982a642d85e9fdcb1bdc93d98eb42d9d07ec0": "a161eb94fd6c206a3d89eb5d3b30e7fe",
".git/objects/72/cfda0ed112d0abeb5a97782f2bd8342b162799": "4bc5792f9039f550a898aefe3cad55de",
".git/objects/85/aa83b081ae5afdfda501a18f580fc06a3e7ad2": "d1990a88f37ac3de1097c94997cfc487",
".git/objects/8b/8b7ac1ce0b0951e6916f938145a598d2917e58": "9af9290b5619a52d72fd45243337b518",
".git/objects/8c/3bdcb6a5e747c798e8b8798af929dd11170dea": "ee4e53199e03a9d8737f1b7ff0174379",
".git/objects/8f/13f73d3e98cfc3bdc43a1bfba5b7329dbe3f17": "77cfcb1b02a699bed6d3e51613b19012",
".git/objects/94/729c39f17ce0321c45603b04b1ef43d9a09a05": "08f93cd659b816c8fdaa31b436cde080",
".git/objects/96/cb6271cc7d0fe1f29152898d420b32d64f6395": "4883b162c54d6192d7bbb0e239b2d585",
".git/objects/b2/3641bc086811f766add79b752c65486d34bccb": "163699c6462e5d3eba3a60e12981b4bc",
".git/objects/b3/d24612d09cff5f891ff404dc6e2d4ef8414f37": "6d3f9ecfd4aa9e846aca28092b4fee8c",
".git/objects/be/60ec0c931863789cfdebf1c8789052aa866cbd": "ff23394f52f114a8e767b31a569b4a13",
".git/objects/bf/acb87843f1eee5faf92f6242c15ca4b96d691b": "600885f577ab1af866fae66d953962d9",
".git/objects/c4/5a89e6a1fe82a0c90472f4076a2adf16081a79": "3597132c989a9e87d89fa48130e70b4e",
".git/objects/d3/9c131e599afa9633d30ff8981173ca6f416af6": "58323db00d62c5b559ddc6357effa373",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fc/42b96051d06e91638cb72e18d6e5b74abdee52": "e8688fd40349977102b7effb8e20abff",
".git/objects/fc/d7942d4272e3bd4d90d82f5c6a6c362e58aa7d": "525dd8823a87d5ab20781bd3c6598276",
".git/objects/pack/pack-71fb125dcf4d92e9795b603e1a020f9de0b813ed.idx": "f953f1c98a2f66ff99db07bada372e4e",
".git/objects/pack/pack-71fb125dcf4d92e9795b603e1a020f9de0b813ed.pack": "69a6ca5c8eb37304adedc5a7add2c46c",
".git/ORIG_HEAD": "932c3cb738e55bae0e66c343e08c6759",
".git/refs/heads/main": "34227d880f5e3f28f843a334c4638b4f",
".git/refs/remotes/origin/main": "34227d880f5e3f28f843a334c4638b4f",
".idea/misc.xml": "14db292a93630cba788377b79d1f7e97",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "746e256f816f235a51a3ad866a8e5029",
"assets/AssetManifest.bin": "e698dc9c67e5dc511750b3814d570037",
"assets/AssetManifest.bin.json": "cd5fa5abe742d8115581a18871dd7b76",
"assets/AssetManifest.json": "ff532c60e8f4f2d502377aa7ef55513f",
"assets/assets/crypto_assets/0.png": "37ad151e6b413ecc51917d1a51294264",
"assets/assets/crypto_assets/1.png": "4e0bf9b741c42fd4b17724a6e6f811ec",
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
"assets/assets/HydraDX-Logo.svg": "5a8c250359757bcd0065ad88702c4406",
"assets/assets/money.gif": "aaff20baa2b6afeb7d81b2a29c46c38c",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/fonts/MaterialIcons-Regular.otf": "a7ef25b5143135ad5f1581bfe43fee2e",
"assets/NOTICES": "3bb09a3eef7e6d73a9a6dd6302d6fd48",
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
"index.html": "b6fd3a3151e05394d1de4515a2ce3a57",
"/": "b6fd3a3151e05394d1de4515a2ce3a57",
"main.dart.js": "36e7dce078d3edaf71d46f2d3ce18452",
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
