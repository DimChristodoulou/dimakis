(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{247:function(e,t,a){"use strict";a.r(t);var n=a(5),o=a(4),i=a(137),w=a(48),s=a(11),r=a(98);const c=w.b>1,p=c?"bmaphidpi":"geolandbasemap",b=c?2:1,l=new n.a({target:"map",view:new o.a({center:[1823849,6143760],zoom:11})});fetch("https://www.basemap.at/wmts/1.0.0/WMTSCapabilities.xml").then(function(e){return e.text()}).then(function(e){const t=(new i.a).read(e),a=Object(r.b)(t,{layer:p,matrixSet:"google3857",style:"normal"});a.tilePixelRatio=b,l.addLayer(new s.a({source:new r.a(a)}))})}},[[247,0]]]);
//# sourceMappingURL=wmts-hidpi.js.map