(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{395:function(e,t,o){"use strict";o.r(t);var a=o(5),r=o(4),n=o(44),l=o(48),d=o(36),i=o(7),c=o(22),w=o(2);const s=document.createElement("canvas"),p=s.getContext("2d"),g=l.b,u=function(){const e=p.createLinearGradient(0,0,512*g,0);return e.addColorStop(0,"red"),e.addColorStop(1/6,"orange"),e.addColorStop(2/6,"yellow"),e.addColorStop(.5,"green"),e.addColorStop(4/6,"aqua"),e.addColorStop(5/6,"blue"),e.addColorStop(1,"purple"),e}(),h=(s.width=8*g,s.height=8*g,p.fillStyle="white",p.fillRect(0,0,s.width,s.height),p.fillStyle="rgba(102, 0, 102, 0.5)",p.beginPath(),p.arc(4*g,4*g,3*g,0,2*Math.PI),p.fill(),p.fillStyle="rgb(55, 0, 170)",p.beginPath(),p.arc(4*g,4*g,1.5*g,0,2*Math.PI),p.fill(),p.createPattern(s,"repeat")),f=new w.c,b=new w.g({fill:f,stroke:new w.f({color:"#333",width:2})}),S=new d.a({source:new c.b({url:"data/geojson/countries.geojson",format:new n.a}),style:function(e){const t=e.getId();return f.setColor(t>"J"?u:h),b}});new a.a({layers:[S],target:"map",view:new r.a({center:Object(i.g)([16,48]),zoom:3})})}},[[395,0]]]);
//# sourceMappingURL=canvas-gradient-pattern.js.map