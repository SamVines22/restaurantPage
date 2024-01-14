(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),d=t(645),i=t.n(d)()(o());i.push([e.id,"body, html {\n    height: 100%;\n}\n\n#content {\n    height: 40%;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr;\n    justify-items: center;\n    align-items: center;\n    font-size: 4rem;\n    padding-left: 10%;\n    padding-right: 10%;\n}\n\n#liz {\n    max-width: 200px;\n    max-height: 200px;\n    border-radius: 100px;\n}\n\n.middle {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    padding-top: 5%;\n    padding-left: 10%;\n    padding-right: 10%;\n    height: 80%;\n}\n\n.address {\n    padding-top: 5%;\n    text-align: center;\n    font-size: 2rem;\n    padding-left: 10%;\n    padding-right: 10%;\n}\n\n.left {\n    font-size: 1.5rem;\n    padding: 2%;\n}\n\n.right {\n    padding: 2%;\n}\n\n.day {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr;\n    margin-bottom: 1%;\n    font-size: 1.5rem;\n}\n\n.d {\n    padding-left: 15%;\n}\n\n#links {\n    text-align: center;\n}\n\n.nav {\n    width: 12%;\n    padding-top: 0.5%;\n    padding-bottom: 0.5%;\n    font-size: 1rem;\n    margin: 1%;\n}\n\n.leftM, .rightM {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: repeat(1fr, 5);\n    font-size: 1.5rem;\n\n}\n\n#head {\n    justify-self: center;\n    font-size: 1.8rem;\n    margin: 1%;\n \n\n}\n",""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,d){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var d={},i=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],s=d[l]||0,u="".concat(l," ").concat(s);d[l]=s+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,r);r.byIndex=a,n.splice(a,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var d=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<d.length;i++){var a=t(d[i]);n[a].references--}for(var c=r(e,o),l=0;l<d.length;l++){var s=t(d[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}d=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var d=n[r]={id:r,exports:{}};return e[r](d,d.exports,t),d.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),d=t(569),i=t.n(d),a=t(565),c=t.n(a),l=t(216),s=t.n(l),u=t(589),m=t.n(u),p=t(426),f={};function h(){console.log("GIMP");const e=document.getElementById("content"),n=document.createElement("div");n.className="middle";const t=document.createElement("div");t.className="left",t.innerText="A traditional English pub with good food, fine ales and a warm welcome",n.appendChild(t);const r=document.createElement("div");r.className="right";for(let e=0;e<7;e++){let n=document.createElement("div");n.className="day",n.id=`day${e}`;let t=document.createElement("div");t.className="d";let o=document.createElement("div");o.className="time",0==e&&(t.innerText="Monday"),1==e&&(t.innerText="Tuesday"),2==e&&(t.innerText="Wednesday"),3==e&&(t.innerText="Thursday"),4==e&&(t.innerText="Friday"),5==e&&(t.innerText="Saturday"),6==e&&(t.innerText="Sunday"),o.innerText="12:30pm - 11:00pm",n.appendChild(t),n.appendChild(o),r.appendChild(n)}n.appendChild(r),e.appendChild(n);const o=document.createElement("div");return o.className="address",o.innerText="92 Coal Street, London.",e.appendChild(o),e}f.styleTagTransform=m(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const g=t.p+"2f1566e95fbb6e87af7a.png";function y(){const e=document.createElement("div");e.id="content";const n=document.createElement("div");n.className="header",n.innerText="The Queen Liz!";const t=new Image;return t.src=g,t.id="liz",n.appendChild(t),e.appendChild(n),e}document.querySelector("body").appendChild(function(){const e=document.getElementById("links");for(let n=0;n<3;n++){let t=document.createElement("button");t.id=`btn${n}`,t.className="nav",0==n&&(t.innerText="Home"),1==n&&(t.innerText="Menu"),2==n&&(t.innerText="Contact Us"),e.appendChild(t)}return e}()),document.querySelector("body").appendChild(y()),document.querySelector("body").appendChild(h()),document.getElementById("btn0").onclick=function(){for(let e=0;e<3;e++){document.getElementById(`btn${e}`).style.backgroundColor=0==e?"yellow":"#f0f0f0"}let e=document.getElementById("content");document.querySelector("body").removeChild(e),document.querySelector("body").appendChild(y()),document.querySelector("body").appendChild(h())},document.getElementById("btn1").onclick=function(){for(let e=0;e<3;e++){document.getElementById(`btn${e}`).style.backgroundColor=1==e?"yellow":"#f0f0f0"}let e=document.getElementById("content");document.querySelector("body").removeChild(e),document.querySelector("body").appendChild(y()),document.querySelector("body").appendChild(function(){console.log("menu");const e=document.getElementById("content"),n=document.createElement("div");n.className="middle";const t=document.createElement("div");t.className="leftM";for(let e=0;e<5;e++){let n=document.createElement("div");n.className="item";let r=document.createElement("div");r.className="price",t.appendChild(n),t.appendChild(r),0==e&&(n.innerText="Food Menu",n.id="head",r.id="head"),1==e&&(n.innerText="Steak and Ale Pie",r.innerText="$ 14.00"),2==e&&(n.innerText="Bangers and Mash",r.innerText="$ 12.00"),3==e&&(n.innerText="Roast Chicken and Chips",r.innerText="$ 13.50"),4==e&&(n.innerText="Toad in the Hole",r.innerText="$ 14.00")}n.appendChild(t);const r=document.createElement("div");r.className="rightM";for(let e=0;e<5;e++){let n=document.createElement("div");n.className="item";let t=document.createElement("div");t.className="price",0==e&&(n.innerText="Drinks",n.id="head",t.id="head"),1==e&&(n.innerText="Spitfire",t.innerText="$ 4.00"),2==e&&(n.innerText="Bass",t.innerText="$ 4.00"),3==e&&(n.innerText="Carling",t.innerText="$ 4.00"),4==e&&(n.innerText="Lemonade",t.innerText="$ 2.50"),r.appendChild(n),r.appendChild(t)}n.appendChild(r),e.appendChild(n);const o=document.createElement("div");return o.className="address",o.innerText="92 Coal Street, London.",e.appendChild(o),e}())},document.getElementById("btn2").onclick=function(){for(let e=0;e<3;e++){document.getElementById(`btn${e}`).style.backgroundColor=2==e?"yellow":"#f0f0f0"}let e=document.getElementById("content");document.querySelector("body").removeChild(e),document.querySelector("body").appendChild(y()),document.querySelector("body").appendChild(function(){const e=document.getElementById("content"),n=document.createElement("div");n.className="middle",n.innerText="Contact our friendly team on 01535-58923423",e.appendChild(n);const t=document.createElement("div");return t.className="address",t.innerText="92 Coal Street, London.",e.appendChild(t),e}())}})()})();