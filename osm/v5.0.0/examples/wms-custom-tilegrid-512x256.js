(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{256:function(e,t,r){"use strict";r.r(t);var n=r(5),o=r(4),s=r(3),a=r(11),w=r(7),c=r(19),p=r(74),i=r(109);const l=Object(w.h)("EPSG:3857").getExtent(),u=Object(s.E)(l)/256,h=new Array(22);for(let e=0,t=h.length;e<t;++e)h[e]=u/Math.pow(2,e);const v=new i.a({extent:[-13884991,2870341,-7455066,6338219],resolutions:h,tileSize:[512,256]}),b=[new a.a({source:new c.b}),new a.a({source:new p.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},serverType:"geoserver",tileGrid:v})})];new n.a({layers:b,target:"map",view:new o.a({center:[-10997148,4569099],zoom:4})})}},[[256,0]]]);
//# sourceMappingURL=wms-custom-tilegrid-512x256.js.map