(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{384:function(e,t,n){"use strict";n.r(t);var o=n(5),a=n(4),r=n(24),c=n(11),i=n(20),s=n(19);const b=new a.a({center:[0,0],zoom:2});new o.a({layers:[new c.a({source:new s.b})],target:"map",controls:Object(r.h)({attributionOptions:{collapsible:!1}}),view:b});function w(e){return document.getElementById(e)}const u=new GyroNorm;u.init().then(function(){u.start(function(e){const t=b.getCenter(),n=b.getResolution(),o=Object(i.j)(e.do.beta),a=Object(i.j)(e.do.beta),r=Object(i.j)(e.do.gamma);w("alpha").innerText=o+" [rad]",w("beta").innerText=a+" [rad]",w("gamma").innerText=r+" [rad]",t[0]-=n*r*25,t[1]+=n*a*25,b.setCenter(b.constrainCenter(t))})})}},[[384,0]]]);
//# sourceMappingURL=device-orientation.js.map