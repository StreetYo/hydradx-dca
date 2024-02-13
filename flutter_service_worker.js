'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8f8148ad122e3679143d0ffb6e39dc8d",
".git/config": "03b1545e6708670ed1d02db229a5e524",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "375f39532969f7fa49387a21075d62d7",
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
".git/index": "4587fac3ae563d878f8903e6288b04b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "688c10b6a29911f1e5fed28c848289e4",
".git/logs/refs/heads/main": "8e2ba4f5ea786b917f279ce6a641fe1b",
".git/logs/refs/remotes/origin/main": "264eed59f589943ed959f8562285e802",
".git/objects/03/8e1dea1f3fc2c5af71ee4dfd7816c59e1932ff": "85645c885261e8bd0d73f401bc1b24b2",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/d95b2f5ccb672661dcb3e1c838e131adc96ef1": "4ac6cf0546f391296b7431dc17db8bf7",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/17/31d4e47c947d9ace026c8881b1ce0e294e044e": "a7df407e80c143d0111b1263f42e5ff6",
".git/objects/1a/d8bae12c0fe186752ee2c7f4f1dd0aa89e7f60": "40e5a99fc4e880740b8afead3f0248ce",
".git/objects/1d/d954f079db4fd623fc0a0d873798696b3c64b1": "2f042d4960f97d2c013e61a695b62e15",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/dd00bad62e8d7264e13642ed831e905f47e2dc": "b274d17c987b2fd64c959ac6d08ca88c",
".git/objects/28/1f405a1e9314e1c01d90d8cf8f6c3ad9401176": "abb93691063b29c7a561b9bab025c557",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/f912f0c309d78f66b96fc4ee9440db491f6a44": "59bd61965433fffa17f39eeae07f503d",
".git/objects/31/f3342249be58b4a35511ddee73dfdcc35839bf": "42738d3b528f4e3ab64a9869a36aaabb",
".git/objects/33/546ee8c14dd71b71a0716a33b28eebe2451f86": "0191df225b77958decef7852b401609e",
".git/objects/38/16452eaabecbac2dba82f5ff242517626f582c": "a1c680184e7da53b1ca04bf99d34a6ea",
".git/objects/39/eb167250f6119f9a4777d3e33c7da9263a9330": "5177f8f7916d507032601fed199dce92",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/7ed91e7d6a64b6265f03c9202b23c9a60fd9e6": "5658577e286f3b4a4ef0f578400499cb",
".git/objects/40/8e5dc6baf2ef34edcc3aebbd22714c37aca90d": "462497cf3d42231e895c32d02030db5b",
".git/objects/42/61fd1d30657d0c96f87e9fa99fbcea10c691ca": "328ff16bffaf42df4efeb909f84a467e",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/45/8ad32fdf8cec0ce60b9c54a0b421635160969a": "1632ab124eec151acee85ecf70f3de29",
".git/objects/46/2665f9f9722bfe1f60e993f77d1ac6d646802e": "c6555b0a066c68cb14272d15a24c528d",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/59d2e49cf89637c5fe3675402cab2ffb2c639d": "9b0321051b47376378623e52d3d08c90",
".git/objects/48/61e20f690d07cf24fb3dbfc10a3e176bd2d266": "11d43bc310f9ef4722d71b22dda931f7",
".git/objects/48/f57b0d0b49bec3f0da881918708a8f2b68c6a8": "85bdd83254fcef0b95ee5b52beee2792",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/2f201de411de2060d9b40ce4895e24dbeca51f": "e3aa78066d231f5fd0cedfddd0617445",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5c/dbb8083be07db86f90762ca52dfc6043ac6d66": "bc960c06f18b8de4acfd3e4cc1f68ef5",
".git/objects/5f/2c5b99b4f344898d50646b5a1a58d5740ea87c": "0bf5b7ece57fc743cd1ea41e2f2412eb",
".git/objects/64/afe631c4bfb337c0b534cdd462c6a08b5931b5": "aa7813cd7a17a794e52ac7c318cfa957",
".git/objects/69/b5e25e8f978306cf6d8cdbe31f9d10c4c129ee": "12a44f1b9b7890212a079960650fe119",
".git/objects/6f/b6f2221e26e5c73349b2063f0a7e1c768ce877": "565f1e9fb98fa84337b0537175008306",
".git/objects/70/d410e13dfa961ea274677d6d29af291b41b9f3": "3e06d8e6be3be9599fd849eccac4a553",
".git/objects/72/0373108f548ef31ce8f31190309f36cf4c634a": "a04bd979a064fc952633d603fdad3386",
".git/objects/73/c1bbe7356f41e1e784e31e6c11a04d0c60be35": "fdf894091eb443ad8c772d92e33d8630",
".git/objects/74/55fffab5b5480a9f921187204086d66d28c06b": "dd785a2703aeb71430041e5db35644ee",
".git/objects/85/0438c57f682d615f9b33c9564a42aab1e61a41": "a4f72337ac8a6efcf20e77e70cfe4f12",
".git/objects/86/0017b23c9e4908de1b821b044a6568d6013787": "8179bf174a0b67d1c597d8a4e9cda7b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/27a9ab5d8adb0abc42030fd6108dd099d7f058": "f93c5f17d86258a827dc4c8e049bae79",
".git/objects/9a/7518e39a088695718bdfff3c5e8406a7e41e96": "7efd09ecda6ad8bafe9c5900392469a0",
".git/objects/9e/9a71fc7290bd8d3f6fd098d527703376082c9e": "0bf251a3963b498cff49e0895bf5689c",
".git/objects/a7/87349663cb7c77eb449bff075a469b95581815": "6429cd2e52fbad663c86a59088e01575",
".git/objects/a9/c58075b70bb2075a3e3300d536167eb1874219": "7223aa89c4852dbec7f441596f669db9",
".git/objects/ab/35a0d7e942412c50df2eccc10880a73dd70edd": "d824603373c8b213f94ca487608f42a1",
".git/objects/ae/dd5a896aa7c018dc419eb80cda4bf21c879a47": "0989f03dfa5f0ad9cfb9a2ae6a8b369a",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/661a290fc8e0319e828d503d4f46d733a1b672": "8d46fe0ad69d599cb68c08ab8dd34fce",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/bd/24f41d1b9980e58fd8f83b5667448012a941cc": "f6d3e169ade82751210a160e97e7b9ba",
".git/objects/c0/5f09f819cca49f74adc20fc99cf812ef3e9d57": "2ff95cd83a9b48e40d693bdac84caa16",
".git/objects/cd/cfa35564a04271b6d19acad734a4ce438ff0c3": "ffbacced8132935d30d19b0e0fa35e40",
".git/objects/d1/052026f7f769168b812d6bfe6f010ffed29141": "e34cbba52f16bc4227bddf8c1d6166ca",
".git/objects/d5/bd004a686a5fd4251a2b73d624eedbbaf016fa": "ec66e981aac21064db02124f359fb9bf",
".git/objects/d6/31eb3c31f4d45b294f51a866ce95dfed099691": "3f924fb4383aa38368e76e1dfa445b00",
".git/objects/d6/6fe9e4fa877405feed6f2464ca50bfff088a80": "b86ffa503c4c7d16a600e4410dcae56d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f9657113e89cff49de1a301c2c88488e90faa8": "69ca0b8935d39167678d58378c5f7b8d",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e1/434e7466739f029376c4c1662bf484af5b2f57": "75147fe56aaee4d16b73cb140eafe7fe",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/5652cf210e855a14a07d1776471b85d018fca2": "431e97a3e873699391735a1f0e3c7f0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/c8a7afbd5793abadf7ed72c8374741ba6ff263": "08cf29f09e8dce6366234aa22e8bf132",
".git/objects/f2/b14bc42f5663aeb5b2844ca30bd478c1db871b": "f02a988485966c1de217caaf9ee68614",
".git/objects/f7/fcdc64bca6f9003182a4453f79411b605f9c5c": "79bc60ecd75c6410fc2584ea802f3d8d",
".git/ORIG_HEAD": "1d1804400d92f2b1c8f39d90c55d492a",
".git/refs/heads/main": "2ef6aaf30e018fe23fbc78c114bf3a42",
".git/refs/remotes/origin/main": "2ef6aaf30e018fe23fbc78c114bf3a42",
"assets/AssetManifest.bin": "e698dc9c67e5dc511750b3814d570037",
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
"index.html": "cf60a23f63ce7d69ed78910d1d8aa9a8",
"/": "cf60a23f63ce7d69ed78910d1d8aa9a8",
"main.dart.js": "26f2f8c0f270b3f45c6b922c1ee17344",
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
