(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{303:function(e,t,n){"use strict";n.r(t);var o=n(5),a=n(4),c=n(10),i=n(7),r=n(46),s=n(156);function l(e){const t=e[0],n=e[1];return[[t+1,n],[t-1,n],[t,n+1],[t,n-1]]}const u=new c.d({source:new r.a({key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5",imagerySet:"Aerial"})}),d=new s.a({sources:[u.getSource()],operationType:"image",operation:function(e,t){const n=e[0];let o=t.pixel;const a=parseInt(t.delta);if(!o)return n;o=o.map(Math.round);const c=n.width,i=n.height,r=n.data,s=new Uint8ClampedArray(r),u=4*(o[1]*c+o[0]),d=r[u],h=r[u+1],p=r[u+2];let g=[o];for(;g.length;){const e=[];for(let t=0,n=g.length;t<n;t++){const n=l(g[t]);for(let t=0,o=n.length;t<o;t++){const o=n[t][0],l=n[t][1];if(o>=0&&o<c&&l>=0&&l<i){const t=4*(l*c+o),n=r[t],i=r[t+1],u=r[t+2];if(0===r[t+3])continue;Math.abs(d-n)<a&&Math.abs(h-i)<a&&Math.abs(p-u)<a&&(s[t]=255,s[t+1]=0,s[t+2]=0,s[t+3]=255,e.push([o,l])),r[t+3]=0}}}g=e}return{data:s,width:c,height:i}},lib:{next4Edges:l}}),h=new c.c({opacity:.7,source:d}),p=new o.a({layers:[u,h],target:"map",view:new a.a({center:Object(i.g)([-119.07,47.65]),zoom:11})});let g;p.on("click",function(e){g=e.coordinate,d.changed()});const w=document.getElementById("threshold");function f(){document.getElementById("threshold-value").innerText=w.value}d.on("beforeoperations",function(e){const t=e.data;t.delta=w.value,g&&(t.pixel=p.getPixelFromCoordinate(g))}),f(),w.addEventListener("input",function(){f(),d.changed()})}},[[303,0]]]);
//# sourceMappingURL=region-growing.js.map