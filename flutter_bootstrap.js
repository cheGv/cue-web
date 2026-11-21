(()=>{var _={blink:!0,gecko:!1,webkit:!1,unknown:!1},K=()=>navigator.vendor==="Google Inc."||navigator.userAgent.includes("Edg/")?"blink":navigator.vendor==="Apple Computer, Inc."?"webkit":navigator.vendor===""&&navigator.userAgent.includes("Firefox")?"gecko":"unknown",C=K(),R=()=>typeof ImageDecoder>"u"?!1:C==="blink",B=()=>typeof Intl.v8BreakIterator<"u"&&typeof Intl.Segmenter<"u",z=()=>{let i=[0,97,115,109,1,0,0,0,1,5,1,95,1,120,0];return WebAssembly.validate(new Uint8Array(i))},M=()=>{let i=document.createElement("canvas");return i.width=1,i.height=1,i.getContext("webgl2")!=null?2:i.getContext("webgl")!=null?1:-1},D=()=>window.chrome&&chrome.runtime&&chrome.runtime.id,w={browserEngine:C,hasImageCodecs:R(),hasChromiumBreakIterators:B(),supportsWasmGC:z(),crossOriginIsolated:window.crossOriginIsolated,webGLVersion:M(),isChromeExtension:D()};function c(...i){return new URL(I(...i),document.baseURI).toString()}function I(...i){return i.filter(e=>!!e).map((e,n)=>n===0?S(e):F(S(e))).filter(e=>e.length).join("/")}function F(i){let e=0;for(;e<i.length&&i.charAt(e)==="/";)e++;return i.substring(e)}function S(i){let e=i.length;for(;e>0&&i.charAt(e-1)==="/";)e--;return i.substring(0,e)}function E(i,e){return i.canvasKitBaseUrl?i.canvasKitBaseUrl:e.engineRevision&&!e.useLocalCanvasKit?I("https://www.gstatic.com/flutter-canvaskit",e.engineRevision):"canvaskit"}var v=class{constructor(){this._scriptLoaded=!1}setTrustedTypesPolicy(e){this._ttPolicy=e}async loadEntrypoint(e){let{entrypointUrl:n=c("main.dart.js"),onEntrypointLoaded:t,nonce:r}=e||{};return this._loadJSEntrypoint(n,t,r)}async load(e,n,t,r,a){a??=l=>{l.initializeEngine(t).then(u=>u.runApp())};let{entrypointBaseUrl:s}=t,{entryPointBaseUrl:o}=t;if(!s&&o&&(console.warn("[deprecated] `entryPointBaseUrl` is deprecated and will be removed in a future release. Use `entrypointBaseUrl` instead."),s=o),e.compileTarget==="dart2wasm")return this._loadWasmEntrypoint(e,n,s,a);{let l=e.mainJsPath??"main.dart.js",u=c(s,l);return this._loadJSEntrypoint(u,a,r)}}didCreateEngineInitializer(e){typeof this._didCreateEngineInitializerResolve=="function"&&(this._didCreateEngineInitializerResolve(e),this._didCreateEngineInitializerResolve=null,delete _flutter.loader.didCreateEngineInitializer),typeof this._onEntrypointLoaded=="function"&&this._onEntrypointLoaded(e)}_loadJSEntrypoint(e,n,t){let r=typeof n=="function";if(!this._scriptLoaded){this._scriptLoaded=!0;let a=this._createScriptTag(e,t);if(r)console.debug("Injecting <script> tag. Using callback."),this._onEntrypointLoaded=n,document.head.append(a);else return new Promise((s,o)=>{console.debug("Injecting <script> tag. Using Promises. Use the callback approach instead!"),this._didCreateEngineInitializerResolve=s,a.addEventListener("error",o),document.head.append(a)})}}async _loadWasmEntrypoint(e,n,t,r){if(!this._scriptLoaded){this._scriptLoaded=!0,this._onEntrypointLoaded=r;let{mainWasmPath:a,jsSupportRuntimePath:s}=e,o=c(t,a),l=c(t,s);this._ttPolicy!=null&&(l=this._ttPolicy.createScriptURL(l));let d=(await import(l)).compileStreaming(fetch(o)),p;e.renderer==="skwasm"?p=(async()=>{let h=await n.skwasm;return window._flutter_skwasmInstance=h,{skwasm:h.wasmExports,skwasmWrapper:h,ffi:{memory:h.wasmMemory}}})():p=Promise.resolve({}),await(await(await d).instantiate(await p,{loadDynamicModule:async(h,j)=>{let A=fetch(c(t,h)),L=c(t,j);this._ttPolicy!=null&&(L=this._ttPolicy.createScriptURL(L));let x=import(L);return[await A,await x]}})).invokeMain()}}_createScriptTag(e,n){let t=document.createElement("script");t.type="application/javascript",n&&(t.nonce=n);let r=e;return this._ttPolicy!=null&&(r=this._ttPolicy.createScriptURL(e)),t.src=r,t}};async function T(i,e,n){if(e<0)return i;let t,r=new Promise((a,s)=>{t=setTimeout(()=>{s(new Error(`${n} took more than ${e}ms to resolve. Moving on.`,{cause:T}))},e)});return Promise.race([i,r]).finally(()=>{clearTimeout(t)})}var g=class{setTrustedTypesPolicy(e){this._ttPolicy=e}loadServiceWorker(e){if(!e||!("serviceWorker"in navigator))return Promise.resolve();let n=()=>{console.warn(`Loading the service worker using Flutter bootstrap is deprecated and will stop working in a future release.
For more details, see: https://github.com/flutter/flutter/issues/156910`)},t=()=>{let{serviceWorkerVersion:r,serviceWorkerUrl:a=c(`flutter_service_worker.js?v=${r}`),timeoutMillis:s=4e3}=e,o=a;this._ttPolicy!=null&&(o=this._ttPolicy.createScriptURL(o));let l=navigator.serviceWorker.register(o).then(u=>this._getNewServiceWorker(u,r)).then(this._waitForServiceWorkerActivation);return T(l,s,"prepareServiceWorker")};return e.serviceWorkerUrl!=null?(n(),t()):navigator.serviceWorker.getRegistration().then(r=>r?t():Promise.resolve())}async _getNewServiceWorker(e,n){if(!e.active&&(e.installing||e.waiting))return console.debug("Installing/Activating first service worker."),e.installing||e.waiting;if(e.active.scriptURL.endsWith(n))return console.debug("Loading from existing service worker."),e.active;{let t=await e.update();return console.debug("Updating service worker."),t.installing||t.waiting||t.active}}async _waitForServiceWorkerActivation(e){if(!e||e.state==="activated")if(e){console.debug("Service worker already active.");return}else throw new Error("Cannot activate a null service worker!");return new Promise((n,t)=>{e.addEventListener("statechange",()=>{e.state==="activated"&&(console.debug("Activated new service worker."),n())})})}};var y=class{constructor(e,n="flutter-js"){let t=e||[/\.js$/,/\.mjs$/];window.trustedTypes&&(this.policy=trustedTypes.createPolicy(n,{createScriptURL:function(r){if(r.startsWith("blob:"))return r;let a=new URL(r,window.location),s=a.pathname.split("/").pop();if(t.some(l=>l.test(s)))return a.toString();console.error("URL rejected by TrustedTypes policy",n,":",r,"(download prevented)")}}))}};var k=i=>{let e=WebAssembly.compileStreaming(fetch(i));return(n,t)=>((async()=>{let r=await e,a=await WebAssembly.instantiate(r,n);t(a,r)})(),{})};var U=(i,e,n,t)=>(window.flutterCanvasKitLoaded=(async()=>{if(window.flutterCanvasKit)return window.flutterCanvasKit;let r=n.hasChromiumBreakIterators&&n.hasImageCodecs;if(!r&&e.canvasKitVariant=="chromium")throw"Chromium CanvasKit variant specifically requested, but unsupported in this browser";let a=r&&e.canvasKitVariant!=="full",s=t;e.canvasKitVariant=="experimentalWebParagraph"?s=c(s,"experimental_webparagraph"):a&&(s=c(s,"chromium"));let o=c(s,"canvaskit.js");i.flutterTT.policy&&(o=i.flutterTT.policy.createScriptURL(o));let l=k(c(s,"canvaskit.wasm")),u=await import(o);return window.flutterCanvasKit=await u.default({instantiateWasm:l}),window.flutterCanvasKit})(),window.flutterCanvasKitLoaded);var W=async(i,e,n,t)=>{let a=!n.hasImageCodecs||!n.hasChromiumBreakIterators?"skwasm_heavy":e.enableWimp?"wimp":"skwasm",s=c(t,`${a}.js`),o=s;i.flutterTT.policy&&(o=i.flutterTT.policy.createScriptURL(o));let l=k(c(t,`${a}.wasm`));return await(await import(o)).default({skwasmSingleThreaded:e.enableWimp||!n.crossOriginIsolated||n.isChromeExtension||e.forceSingleThreadedSkwasm,instantiateWasm:l,locateFile:(d,p)=>d.endsWith(".ww.js")?URL.createObjectURL(new Blob([`
"use strict";

let eventListener;
eventListener = (message) => {
    const pendingMessages = [];
    const data = message.data;
    data["instantiateWasm"] = (info,receiveInstance) => {
        const instance = new WebAssembly.Instance(data["wasm"], info);
        return receiveInstance(instance, data["wasm"])
    };
    import(data.js).then(async (skwasm) => {
        await skwasm.default(data);

        removeEventListener("message", eventListener);
        for (const message of pendingMessages) {
            dispatchEvent(message);
        }
    });
    removeEventListener("message", eventListener);
    eventListener = (message) => {

        pendingMessages.push(message);
    };

    addEventListener("message", eventListener);
};
addEventListener("message", eventListener);
`],{type:"application/javascript"})):c(t,d),mainScriptUrlOrBlob:s})};var P=w.supportsWasmGC,G=P&&w.webGLVersion>0,b=class{async loadEntrypoint(e){let{serviceWorker:n,...t}=e||{},r=new y,a=new g;a.setTrustedTypesPolicy(r.policy),await a.loadServiceWorker(n).catch(o=>{console.warn("Exception while loading service worker:",o)});let s=new v;return s.setTrustedTypesPolicy(r.policy),this.didCreateEngineInitializer=s.didCreateEngineInitializer.bind(s),s.loadEntrypoint(t)}async load({serviceWorkerSettings:e,onEntrypointLoaded:n,nonce:t,config:r}={}){r??={};let a=_flutter.buildConfig;if(!a)throw"FlutterLoader.load requires _flutter.buildConfig to be set";let s=r.wasmAllowList?.[w.browserEngine]??_[w.browserEngine],o=m=>{switch(m){case"skwasm":return G&&s;default:return!0}},l=m=>m.compileTarget==="dart2wasm"&&!P||r.renderer&&r.renderer!=m.renderer?!1:o(m.renderer),u=a.builds.find(l);if(!u)throw"FlutterLoader could not find a build compatible with configuration and environment.";let d={};d.flutterTT=new y,e&&(d.serviceWorkerLoader=new g,d.serviceWorkerLoader.setTrustedTypesPolicy(d.flutterTT.policy),await d.serviceWorkerLoader.loadServiceWorker(e).catch(m=>{console.warn("Exception while loading service worker:",m)}));let p=E(r,a);u.renderer==="canvaskit"?d.canvasKit=U(d,r,w,p):u.renderer==="skwasm"&&(d.skwasm=W(d,r,w,p));let f=new v;return f.setTrustedTypesPolicy(d.flutterTT.policy),this.didCreateEngineInitializer=f.didCreateEngineInitializer.bind(f),f.load(u,d,r,t,n)}};window._flutter||(window._flutter={});window._flutter.loader||(window._flutter.loader=new b);})();

if (!window._flutter) {
  window._flutter = {};
}
_flutter.buildConfig = {"engineRevision":"425cfb54d01a9472b3e81d9e76fd63a4a44cfbcb","builds":[{"compileTarget":"dart2js","renderer":"canvaskit","mainJsPath":"main.dart.js"},{}]};


// A new deploy reaches every phone without a cache clear (finish run item 1).
//
// deploy.yml replaces 5a708038b1f849be14616ef73a25612b8a7d292e below with the commit it built and puts
// the same id in version.json. Before Flutter starts, this asks version.json
// (never from a cache) which build is live. If it is a different one, the
// files this page came with are old: refresh the browser's copies of the
// files that change with a build, drop Cue's offline copies, and load again.
// Once per build per tab, so a page that still comes back old (a proxy, a
// browser that ignores the asks) opens anyway and the app's banner offers
// Refresh instead of reloading forever. Local builds keep the placeholder and
// never check.
(function () {
  var RUNNING = '5a708038b1f849be14616ef73a25612b8a7d292e';
  var KEY = 'cue-reloaded-for-build';

  function refreshCopies() {
    var files = ['/', '/index.html', '/flutter_bootstrap.js', '/main.dart.js',
      '/flutter.js', '/assets/AssetManifest.bin.json', '/assets/FontManifest.json'];
    var asks = files.map(function (f) {
      return fetch(f, { cache: 'reload' }).catch(function () {});
    });
    if (window.caches) {
      asks.push(caches.keys().then(function (names) {
        return Promise.all(names.map(function (n) { return caches.delete(n); }));
      }).catch(function () {}));
    }
    if (navigator.serviceWorker) {
      asks.push(navigator.serviceWorker.getRegistration().then(function (r) {
        return r && r.update();
      }).catch(function () {}));
    }
    return Promise.all(asks);
  }

  // Loads the deployed build. False when this tab has already reloaded for
  // that build once (the app then shows Refresh rather than looping).
  window.cueLoadLatest = function (deployed) {
    try {
      if (sessionStorage.getItem(KEY) === deployed) return false;
      sessionStorage.setItem(KEY, deployed);
    } catch (e) {}
    refreshCopies().then(function () { window.location.reload(); });
    return true;
  };

  function deployedBuild() {
    var ask = fetch('/version.json?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (v) { return v && typeof v.build_id === 'string' ? v.build_id : null; })
      .catch(function () { return null; });
    // Offline or slow: start what is here rather than wait.
    var wait = new Promise(function (resolve) { setTimeout(function () { resolve(null); }, 4000); });
    return Promise.race([ask, wait]);
  }

  function start() {
    if ('serviceWorker' in navigator) {
      // Flutter's own service worker only unregisters itself, so it is not
      // loaded. Cue's (cue_offline_sw.js) keeps the app shell for a start
      // with no connection; see web/cue_offline_sw.js.
      navigator.serviceWorker.register('/cue_offline_sw.js', { updateViaCache: 'none' }).catch(function () {});
    }
    _flutter.loader.load();
  }

  // A page brought back from the browser's back-forward cache runs none of
  // the above again; ask then too.
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted || RUNNING.indexOf('__') === 0) return;
    deployedBuild().then(function (deployed) {
      if (deployed && deployed !== RUNNING) window.cueLoadLatest(deployed);
    });
  });

  if (RUNNING.indexOf('__') === 0) { start(); return; }
  deployedBuild().then(function (deployed) {
    if (deployed && deployed !== RUNNING && window.cueLoadLatest(deployed)) return;
    start();
  });
})();
