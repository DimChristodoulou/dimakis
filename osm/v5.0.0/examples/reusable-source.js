(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{296:function(e,t,a){"use strict";a.r(t);var o=a(5),n=a(4),p=a(11);const l=["https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jan/{z}/{x}/{y}.png","https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jan/{z}/{x}/{y}.png","https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul/{z}/{x}/{y}.png","https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jul/{z}/{x}/{y}.png"],s=new(a(54).a);new o.a({target:"map",layers:[new p.a({source:s})],view:new n.a({center:[0,0],zoom:2})});function b(e){s.setUrl(l[e])}const c=document.getElementsByClassName("switcher");for(let e=0,t=c.length;e<t;++e){const t=c[e];t.addEventListener("click",b.bind(null,Number(t.value)))}b(0)}},[[296,0]]]);
//# sourceMappingURL=reusable-source.js.map