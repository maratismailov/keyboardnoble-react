"use strict";var precacheConfig=[["/keyboardnoble/index.html","6e36d627dbdf8f3e3a6b60d85c89846e"],["/keyboardnoble/static/css/main.8f4c3434.css","8088d396e3b4c364888669250a6e3f4d"],["/keyboardnoble/static/js/main.66c7a29c.js","5af381eedc8a9b4e62a5e509a97991c0"],["/keyboardnoble/static/media/contemp_fiction_top100.19b5688a.txt","19b5688ad6a0b5cd7487e022b43af8eb"],["/keyboardnoble/static/media/contemp_fiction_top1000.2ddc8548.txt","2ddc85481ac0c8171305f845f51c5e6b"],["/keyboardnoble/static/media/contemp_fiction_top200.5333928d.txt","5333928df664af093bace2c01ff5983d"],["/keyboardnoble/static/media/contemp_fiction_top2000.91eca914.txt","91eca91463bd74b61c948a256d63f0d1"],["/keyboardnoble/static/media/contemp_fiction_top300.2260c0a4.txt","2260c0a46360649f4cac1b8d5ef00147"],["/keyboardnoble/static/media/contemp_fiction_top500.0212bddf.txt","0212bddf6bb1d84fae50361134856b96"],["/keyboardnoble/static/media/project_gutenberg_top100.dec57250.txt","dec5725056b42d902259cfca3e7754f2"],["/keyboardnoble/static/media/project_gutenberg_top1000.60cfc68b.txt","60cfc68bcbce9d089be56588a851da56"],["/keyboardnoble/static/media/project_gutenberg_top10000.7c98c010.txt","7c98c01082d52125c1dd8f760b4843eb"],["/keyboardnoble/static/media/project_gutenberg_top2000.36edfe6a.txt","36edfe6a5ddb4c1453eaa7274fce3887"],["/keyboardnoble/static/media/project_gutenberg_top5000.e9220d3d.txt","e9220d3dc9d06e886e5973abae7837fa"],["/keyboardnoble/static/media/rlnc_top100.8f4273c4.txt","8f4273c433fba83ff54e075dbe4e6c23"],["/keyboardnoble/static/media/rlnc_top1000.a910d3e3.txt","a910d3e3783067e3926ea76b2310fd45"],["/keyboardnoble/static/media/rlnc_top10000.6d703601.txt","6d70360166d279b22691777ece7eff08"],["/keyboardnoble/static/media/rlnc_top200.9c6f0857.txt","9c6f0857c634699b5ddd00557b7daf11"],["/keyboardnoble/static/media/rlnc_top2000.9733f6e2.txt","9733f6e29fe8303a753627f2d908238b"],["/keyboardnoble/static/media/rlnc_top500.d72347fc.txt","d72347fc2fe266f0aeba170f3089a10d"],["/keyboardnoble/static/media/rlnc_top5000.cdafa62f.txt","cdafa62fb47c0f0fe052fd382517c17d"],["/keyboardnoble/static/media/rui_top100.e2f786f1.txt","e2f786f10a76dab729870e5172670f25"],["/keyboardnoble/static/media/rui_top1000.71be8655.txt","71be8655f134b28682a4fc9c549754b8"],["/keyboardnoble/static/media/rui_top200.deba4f2c.txt","deba4f2cf82369100e8d87730324442d"],["/keyboardnoble/static/media/rui_top2000.b6b4d545.txt","b6b4d545cdd1c28d10e047a1c7ae865a"],["/keyboardnoble/static/media/rui_top500.cbb76091.txt","cbb760914cfcfbdb80647b20f738b399"],["/keyboardnoble/static/media/rui_top5000.01d60678.txt","01d606787129440f48c44447e7fb6a21"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/keyboardnoble/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});