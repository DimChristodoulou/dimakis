(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{266:function(e,t,o){"use strict";o.r(t);var n=o(5),r=o(4),w=o(3),c=o(44),l=o(36),s=o(22),a=o(2);const i=new n.a({target:"map",view:new r.a({center:[0,0],zoom:1})}),f=new a.g({geometry:function(e){let t=e.getGeometry();if("MultiPolygon"==t.getType()){const e=t.getPolygons();let o=0;for(let n=0,r=e.length;n<r;++n){const r=e[n],c=Object(w.E)(r.getExtent());c>o&&(o=c,t=r)}}return t},text:new a.h({font:"12px Calibri,sans-serif",overflow:!0,fill:new a.c({color:"#000"}),stroke:new a.f({color:"#fff",width:3})})}),g=[new a.g({fill:new a.c({color:"rgba(255, 255, 255, 0.6)"}),stroke:new a.f({color:"#319FD3",width:1})}),f],u=new l.a({source:new s.b({url:"data/geojson/countries.geojson",format:new c.a}),style:function(e){return f.getText().setText(e.get("name")),g},declutter:!0});i.addLayer(u)}},[[266,0]]]);
//# sourceMappingURL=vector-label-decluttering.js.map