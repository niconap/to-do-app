!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=(e,t,n,r,l)=>({project:e,title:t,description:n,due:r,priority:l});var l=function(e,t){let n=document.getElementById("content");e.forEach(e=>{let t=document.createElement("div");t.setAttribute("id",e),n.appendChild(t),t=document.getElementById(e);let r=document.createElement("h1");r.innerHTML=e,t.appendChild(r)}),t.forEach(e=>{let t=e.project,n=document.getElementById(t),r=e.title,l=e.description,o=e.due,i=e.priority,u=document.createElement("p");u.setAttribute("class","tasktitle"),u.innerHTML=r,n.appendChild(u);let c=document.createElement("p");c.setAttribute("class","taskelement"),c.innerHTML=l,n.appendChild(c);let d=document.createElement("p");d.setAttribute("class","taskelement"),d.innerHTML=o,n.appendChild(d);let a=document.createElement("p");a.setAttribute("class","taskelement"),a.innerHTML=i,n.appendChild(a)})};let o=[],i=[];o.push("default"),i.push(r("default","default task","none","01-01-2020","high")),l(o,i)}]);