!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=279)}({279:function(e,t,r){"use strict";e.exports=window.onload=function(){function e(){a.classList.toggle("close-tag"),s.classList.toggle("ps-left-zero")}function t(e){var t=s.querySelector("[aria-current=page]"),r=e.target;if(t!==r){t.removeAttribute("aria-current"),r.setAttribute("aria-current","page");var n=document.querySelector("#listofrecipes");n&&n.focus()}o.innerWidth<=c&&(a.classList.toggle("close-tag"),s.classList.toggle("ps-left-zero"))}function r(e,t,r){function o(e){e.forEach(function(e){s=parseInt(e.style.zIndex),e.style.zIndex=s?s+i:-i*(u-1)})}function c(e,t){e.forEach(function(e){return e.classList.remove("active")}),e[t].classList.add("active")}var s,a=Array.from(n.querySelectorAll("."+e+">li")),l=Array.from(n.querySelectorAll("."+t+">li")),u=a.length;return{start:function(){return setInterval(function(){o(a);var e=a.findIndex(function(e){return"0"===e.style.zIndex});c(l,e)},r)}}}var n=document,o=window,c=760,i=2,s=n.querySelector(".navbar"),a=n.querySelector(".nv-toggle");a.addEventListener("click",e),s.addEventListener("click",t),new r("slides","slider-pages",5e3).start()}()}});