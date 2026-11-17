// Sniper City: a pass-through service worker. It exists so phones offer "Install app"; it caches nothing,
// so a new deploy is always what you get.
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(){});
