(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{269:function(e,n,o){"use strict";o.r(n);var t=o(5),a=o(88),s=o(4),c=o(11),i=o(63),r=o(212);const u="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiRk1kMWZaSSJ9.E5BkluenyWQMsBLsuByrmg",m=new c.a({source:new i.a({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+u})}),p=new r.a({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+u}),g=new c.a({source:p}),l=new s.a({center:[0,0],zoom:1}),d=document.getElementById("map"),y=new t.a({layers:[m,g],target:d,view:l}),w=document.getElementById("country-info"),f=document.getElementById("country-flag"),v=document.getElementById("country-name"),k=new a.a({element:w,offset:[15,15],stopEvent:!1});y.addOverlay(k);const E=function(e){const n=l.getResolution();p.forDataAtCoordinateAndResolution(e,n,function(n){d.style.cursor=n?"pointer":"",n&&(f.src="data:image/png;base64,"+n.flag_png,v.innerHTML=n.admin),k.setPosition(n?e:void 0)})};y.on("pointermove",function(e){if(e.dragging)return;const n=y.getEventCoordinate(e.originalEvent);E(n)}),y.on("click",function(e){E(e.coordinate)})}},[[269,0]]]);
//# sourceMappingURL=utfgrid.js.map