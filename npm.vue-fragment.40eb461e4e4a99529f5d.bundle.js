(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Pwj2:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}n.r(t),n.d(t,"Fragment",(function(){return s})),n.d(t,"SSR",(function(){return u})),n.d(t,"Plugin",(function(){return p}));var o=function(e,t,n){Object.defineProperty(e,t,{configurable:!0,get:function(){return n},set:function(e){console.warn("tried to set frozen property ".concat(t," with ").concat(e))}})},a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n})},l={abstract:!0,name:"Fragment",props:{name:{type:String,default:function(){return Math.floor(Date.now()*Math.random()).toString(16)}},html:{type:String,default:null}},mounted:function(){var e=this.$el,t=e.parentNode;e.__isFragment=!0,e.__isMounted=!1;var n=document.createComment("fragment#".concat(this.name,"#head")),i=document.createComment("fragment#".concat(this.name,"#tail"));e.__head=n,e.__tail=i;var r=document.createDocumentFragment();if(r.appendChild(n),Array.from(e.childNodes).forEach((function(t){var n=!t.hasOwnProperty("__isFragmentChild__");r.appendChild(t),n&&(o(t,"parentNode",e),o(t,"__isFragmentChild__",!0))})),r.appendChild(i),this.html){var a=document.createElement("template");a.innerHTML=this.html,Array.from(a.content.childNodes).forEach((function(e){r.appendChild(e)}))}var l=e.nextSibling;t.insertBefore(r,e,!0),t.removeChild(e),o(e,"parentNode",t),o(e,"nextSibling",l),l&&o(l,"previousSibling",e),e.__isMounted=!0},render:function(e){var t=this,n=this.$slots.default;return n&&n.length&&n.forEach((function(e){return e.data=r({},e.data,{attrs:r({fragment:t.name},(e.data||{}).attrs)})})),e("div",{attrs:{fragment:this.name}},n)}};function d(e,t){}var s=l,u=d,p={install:function(e){var t=window.Node.prototype.removeChild;window.Node.prototype.removeChild=function(e){if(!this.__isFragment){if(e.__isFragment&&e.__isMounted){for(;e.__head.nextSibling!==e.__tail;)t.call(this,e.__head.nextSibling);t.call(this,e.__head),t.call(this,e.__tail);var n=e.__head.previousSibling,i=e.__tail.nextSibling;return n&&o(n,"nextSibling",i),i&&o(i,"previousSibling",n),a(e,"parentNode"),e}var r=e.previousSibling,l=e.nextSibling,d=t.call(this,e);return r&&o(r,"nextSibling",l),l&&o(l,"previousSibling",r),d}if(this.parentNode){var s=this.parentNode.removeChild(e);return a(e,"parentNode"),s}};var n=window.Node.prototype.insertBefore;window.Node.prototype.insertBefore=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t&&t.__isFragment&&t.__isMounted?t.__head:t;if(this.__isFragment){var a=!e.hasOwnProperty("__isFragmentChild__"),l=!i||a;a&&o(e,"__isFragmentChild__",!0);var d=this.parentNode?this.parentNode.insertBefore(e,t):n.call(this,e,r);return l&&o(e,"parentNode",this),d}if(e.__isFragment&&e.__isMounted){if(e===t)return void console.error("something must be wrong");o(e,"parentNode",this),e.previousSibling&&o(e.previousSibling,"nextSibling",e.nextSibling),e.nextSibling&&o(e.nextSibling,"previousSibling",e.previousSibling),o(e,"nextSibling",t),o(e,"previousSibling",t.previousSibling),t.previousSibling&&o(t.previousSibling,"nextSibling",e),o(t,"previousSibling",e);for(var s=document.createDocumentFragment(),u=e.__head;u!==e.__tail;)s.appendChild(u),u=u.nextSibling;return s.appendChild(e.__tail),n.call(this,s,r),e}return n.call(this,e,r)};var i=window.Node.prototype.appendChild;window.Node.prototype.appendChild=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.__isFragment)return i.call(this,e);if(this.parentNode){var n=!e.hasOwnProperty("__isFragmentChild__"),r=!t||n;n&&o(e,"__isFragmentChild__",!0);var a=this.parentNode.insertBefore(e,this.__tail,t);return r&&o(e,"parentNode",this),a}},e.component("Fragment",l)}},c={Fragment:l,Plugin:p,SSR:d};t.default=c}}]);