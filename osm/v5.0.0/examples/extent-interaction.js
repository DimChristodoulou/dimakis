(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{369:function(e,n,o){"use strict";o.r(n);var t=o(5),w=o(4),i=o(35),a=o(44),s=o(215),c=o(10),d=o(16);const r=new d.n({url:"data/geojson/countries.geojson",format:new a.a}),u=new t.a({layers:[new c.d({source:new d.f}),new c.e({source:r})],target:"map",view:new w.a({center:[0,0],zoom:2})}),p=new s.a({condition:i.j});u.addInteraction(p),p.setActive(!1),window.addEventListener("keydown",function(e){16==e.keyCode&&p.setActive(!0)}),window.addEventListener("keyup",function(e){16==e.keyCode&&p.setActive(!1)})}},[[369,0]]]);
//# sourceMappingURL=extent-interaction.js.map