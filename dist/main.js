!function(e){var t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(l,i,function(t){return e[t]}.bind(null,i));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=(e,t,n,l,i)=>({project:e,title:t,description:n,due:l,priority:i});const i=function(e,t){let n=0,l=document.getElementById("content");if(l.innerHTML="",0!=e.length&&""!=e[0]){e.forEach(e=>{let t=document.createElement("div");t.setAttribute("id",e),t.setAttribute("class","project"),l.appendChild(t),t=document.getElementById(e);let n=document.createElement("h1");n.innerHTML=e,t.appendChild(n)});for(let n=0;n<e.length;n++){let l=document.getElementById(e[n]),r=document.createElement("button");r.setAttribute("id","deletetask"),r.addEventListener("click",(function(){let l=e[n];e.splice(n,1);let r=0;t.forEach(e=>{e.project==l&&(t.splice(r,1),r+=1)}),i(e,t)})),r.innerHTML="x",l.appendChild(r)}}0!=t.length&&t.forEach(e=>{let t=e.project,l=document.getElementById(t),i=document.createElement("div");i.setAttribute("id",n),l.appendChild(i);let r=e.title,d=e.description,u=e.due,c=e.priority,o=document.createElement("p");o.setAttribute("class","tasktitle"),o.innerHTML=r,i.appendChild(o);let a=document.createElement("p");a.setAttribute("class","taskelement"),a.innerHTML=d,i.appendChild(a);let p=document.createElement("p");p.setAttribute("class","taskelement"),p.innerHTML="Due date: "+u,i.appendChild(p);let s=document.createElement("p");s.setAttribute("class","taskelement"),s.innerHTML=c+" priority",i.appendChild(s);let m=document.createElement("input");m.setAttribute("type","checkbox"),m.setAttribute("id","check"+n),i.appendChild(m);let h=document.createElement("label");h.setAttribute("for","checkbox"+n),h.innerHTML="Done",i.appendChild(h),n+=1});for(let n=0;n<t.length;n++){let l=document.getElementById(n),r=document.createElement("button");r.setAttribute("id","deleteproject"),r.addEventListener("click",(function(){t.splice(n,1),i(e,t)})),r.innerHTML="x",l.appendChild(r)}localStorage.setItem("projects",e),localStorage.setItem("tasks",JSON.stringify(t))};var r=i;var d=function(e){let t=document.getElementById("menu");t.innerHTML="";let n=document.createElement("h1");n.innerHTML="Create new Task",n.setAttribute("id","menutitle"),t.appendChild(n);let l=document.createElement("button");l.innerHTML="x",l.setAttribute("id","quit"),l.addEventListener("click",(function(){t.innerHTML=""})),t.appendChild(l);let i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("placeholder","Title"),i.setAttribute("id","tasktitle"),t.appendChild(i);let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","Description"),r.setAttribute("id","taskdescription"),t.appendChild(r);let d=document.createElement("input");d.setAttribute("type","date"),d.setAttribute("id","taskdate"),t.appendChild(d);let u=document.createElement("select");u.setAttribute("id","taskpriority"),t.appendChild(u);let c=document.createElement("option");c.setAttribute("value","High"),c.innerHTML="High",u.appendChild(c);let o=document.createElement("option");o.setAttribute("value","Medium"),o.innerHTML="Medium",u.appendChild(o);let a=document.createElement("option");a.setAttribute("value","Low"),a.innerHTML="Low",u.appendChild(a);let p=document.createElement("select");p.setAttribute("id","projectselect"),t.appendChild(p),e.forEach(e=>{let t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e,p.appendChild(t)})};var u=function(){let e=document.getElementById("menu");e.innerHTML="";let t=document.createElement("h1");t.innerHTML="Create new Project",t.setAttribute("id","menutitle"),e.appendChild(t);let n=document.createElement("button");n.innerHTML="x",n.setAttribute("id","quit"),n.addEventListener("click",(function(){e.innerHTML=""})),e.appendChild(n);let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder","Title"),l.setAttribute("id","projecttitle"),e.appendChild(l)};var c=function(){let e=[];return e.push(document.getElementById("projectselect").value),e.push(document.getElementById("tasktitle").value),e.push(document.getElementById("taskdescription").value),e.push(document.getElementById("taskdate").value),e.push(document.getElementById("taskpriority").value),e};var o=function(){return document.getElementById("projecttitle").value};let a=[],p=[];if(0!=localStorage.length){let e=localStorage.getItem("projects").split(",");a=e,""==a[0]&&a.splice(0,1);let t=JSON.parse(localStorage.getItem("tasks"));p=t}let s=document.getElementById("menu"),m=!1;document.getElementById("plustask").addEventListener("click",(function(){d(a),m=!1;let e=document.createElement("button");e.innerHTML="Complete",e.setAttribute("id","complete"),e.addEventListener("click",(function(){let e=c();if(""==e[1]||""==e[2]||""==e[3]){if(0==m){let e=document.createElement("p");e.setAttribute("id","alert"),e.innerHTML="Please enter something in all inputs!",s.appendChild(e),m=!0}}else s.innerHTML="",m=!1,p.push(l(e[0],e[1],e[2],e[3],e[4])),r(a,p)})),s.appendChild(e)})),document.getElementById("plusproject").addEventListener("click",(function(){u(),m=!1;let e=document.createElement("button");e.innerHTML="Complete",e.setAttribute("id","complete"),e.addEventListener("click",(function(){let e=o();if(""==e){if(0==m){let e=document.createElement("p");e.setAttribute("id","alert"),e.innerHTML="Please enter something in all inputs!",s.appendChild(e),m=!0}}else s.innerHTML="",m=!1,a.push(e),r(a,p)})),s.appendChild(e)})),0==localStorage.length&&a.push("Default"),0==localStorage.length&&p.push(l("Default","Default task","None","01-01-2020","High")),r(a,p)}]);