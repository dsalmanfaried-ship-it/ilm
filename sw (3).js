const C='deen-single-v5';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./images.js'].map(u=>c.add(u).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const o=new URL(e.request.url).origin===location.origin;if(!o)return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html'))))});
