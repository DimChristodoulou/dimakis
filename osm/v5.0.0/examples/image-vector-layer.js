(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{342:function(e,n,t){"use strict";t.r(n);var o=t(5),r=t(4),c=t(44),a=t(36),i=t(22),w=t(2);const s=new w.g({fill:new w.c({color:"rgba(255, 255, 255, 0.6)"}),stroke:new w.f({color:"#319FD3",width:1}),text:new w.h}),u=new o.a({layers:[new a.a({renderMode:"image",source:new i.b({url:"data/geojson/countries.geojson",format:new c.a}),style:function(e){return s.getText().setText(e.get("name")),s}})],target:"map",view:new r.a({center:[0,0],zoom:1})}),g=new a.a({source:new i.b,map:u,style:new w.g({stroke:new w.f({color:"#f00",width:1}),fill:new w.c({color:"rgba(255,0,0,0.1)"})})});let l;const f=function(e){const n=u.forEachFeatureAtPixel(e,function(e){return e}),t=document.getElementById("info");t.innerHTML=n?n.getId()+": "+n.get("name"):"&nbsp;",n!==l&&(l&&g.getSource().removeFeature(l),n&&g.getSource().addFeature(n),l=n)};u.on("pointermove",function(e){if(e.dragging)return;const n=u.getEventPixel(e.originalEvent);f(n)}),u.on("click",function(e){f(e.pixel)})}},[[342,0]]]);
//# sourceMappingURL=image-vector-layer.js.map