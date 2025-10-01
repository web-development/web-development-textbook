// vis-network@10.0.2 downloaded from https://ga.jspm.io/npm:vis-network@10.0.2/peer/esm/vis-network.mjs

import{isDataViewLike as t,DataSet as e}from"vis-data/peer/esm/vis-data.js";
/**
 * vis-network
 * https://visjs.github.io/vis-network/
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 10.0.2
 * @date    2025-09-15T17:48:13.838Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */var i=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var o={};var n;var s;function a(){if(s)return n;s=1;var t=function(t){return t&&t.Math===Math&&t};n=t(typeof globalThis=="object"&&globalThis)||t(typeof window=="object"&&window)||t(typeof self=="object"&&self)||t(typeof i=="object"&&i)||t(typeof n=="object"&&n)||function(){return this}()||Function("return this")();return n}var h;var d;function l(){if(d)return h;d=1;h=function(t){try{return!!t()}catch(t){return true}};return h}var c;var u;function v(){if(u)return c;u=1;var t=l();c=!t((function(){var t=function(){}.bind();return typeof t!="function"||t.hasOwnProperty("prototype")}));return c}var f;var p;function g(){if(p)return f;p=1;var t=v();var e=Function.prototype;var i=e.apply;var r=e.call;f=typeof Reflect=="object"&&Reflect.apply||(t?r.bind(i):function(){return r.apply(i,arguments)});return f}var m;var y;function b(){if(y)return m;y=1;var t=v();var e=Function.prototype;var i=e.call;var r=t&&e.bind.bind(i,i);m=t?r:function(t){return function(){return i.apply(t,arguments)}};return m}var w;var _;function x(){if(_)return w;_=1;var t=b();var e=t({}.toString);var i=t("".slice);w=function(t){return i(e(t),8,-1)};return w}var E;var O;function C(){if(O)return E;O=1;var t=x();var e=b();E=function(i){if(t(i)==="Function")return e(i)};return E}var k;var S;function T(){if(S)return k;S=1;var t=typeof document=="object"&&document.all;k=typeof t=="undefined"&&t!==void 0?function(e){return typeof e=="function"||e===t}:function(t){return typeof t=="function"};return k}var M={};var D;var I;function P(){if(I)return D;I=1;var t=l();D=!t((function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}));return D}var B;var N;function z(){if(N)return B;N=1;var t=v();var e=Function.prototype.call;B=t?e.bind(e):function(){return e.apply(e,arguments)};return B}var F={};var A;function R(){if(A)return F;A=1;var t={}.propertyIsEnumerable;var e=Object.getOwnPropertyDescriptor;var i=e&&!t.call({1:2},1);F.f=i?function(t){var i=e(this,t);return!!i&&i.enumerable}:t;return F}var j;var L;function H(){if(L)return j;L=1;j=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}};return j}var W;var V;function U(){if(V)return W;V=1;var t=b();var e=l();var i=x();var r=Object;var o=t("".split);W=e((function(){return!r("z").propertyIsEnumerable(0)}))?function(t){return i(t)==="String"?o(t,""):r(t)}:r;return W}var q;var Y;function X(){if(Y)return q;Y=1;q=function(t){return t===null||t===void 0};return q}var G;var K;function Z(){if(K)return G;K=1;var t=X();var e=TypeError;G=function(i){if(t(i))throw new e("Can't call method on "+i);return i};return G}var Q;var $;function J(){if($)return Q;$=1;var t=U();var e=Z();Q=function(i){return t(e(i))};return Q}var tt;var et;function it(){if(et)return tt;et=1;var t=T();tt=function(e){return typeof e=="object"?e!==null:t(e)};return tt}var rt;var ot;function nt(){if(ot)return rt;ot=1;rt={};return rt}var st;var at;function ht(){if(at)return st;at=1;var t=nt();var e=a();var i=T();var r=function(t){return i(t)?t:void 0};st=function(i,o){return arguments.length<2?r(t[i])||r(e[i]):t[i]&&t[i][o]||e[i]&&e[i][o]};return st}var dt;var lt;function ct(){if(lt)return dt;lt=1;var t=b();dt=t({}.isPrototypeOf);return dt}var ut;var vt;function ft(){if(vt)return ut;vt=1;var t=a();var e=t.navigator;var i=e&&e.userAgent;ut=i?String(i):"";return ut}var pt;var gt;function mt(){if(gt)return pt;gt=1;var t=a();var e=ft();var i=t.process;var r=t.Deno;var o=i&&i.versions||r&&r.version;var n=o&&o.v8;var s,h;if(n){s=n.split(".");h=s[0]>0&&s[0]<4?1:+(s[0]+s[1])}if(!h&&e){s=e.match(/Edge\/(\d+)/);if(!s||s[1]>=74){s=e.match(/Chrome\/(\d+)/);s&&(h=+s[1])}}pt=h;return pt}var yt;var bt;function wt(){if(bt)return yt;bt=1;var t=mt();var e=l();var i=a();var r=i.String;yt=!!Object.getOwnPropertySymbols&&!e((function(){var e=Symbol("symbol detection");return!r(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&t&&t<41}));return yt}var _t;var xt;function Et(){if(xt)return _t;xt=1;var t=wt();_t=t&&!Symbol.sham&&typeof Symbol.iterator=="symbol";return _t}var Ot;var Ct;function kt(){if(Ct)return Ot;Ct=1;var t=ht();var e=T();var i=ct();var r=Et();var o=Object;Ot=r?function(t){return typeof t=="symbol"}:function(r){var n=t("Symbol");return e(n)&&i(n.prototype,o(r))};return Ot}var St;var Tt;function Mt(){if(Tt)return St;Tt=1;var t=String;St=function(e){try{return t(e)}catch(t){return"Object"}};return St}var Dt;var It;function Pt(){if(It)return Dt;It=1;var t=T();var e=Mt();var i=TypeError;Dt=function(r){if(t(r))return r;throw new i(e(r)+" is not a function")};return Dt}var Bt;var Nt;function zt(){if(Nt)return Bt;Nt=1;var t=Pt();var e=X();Bt=function(i,r){var o=i[r];return e(o)?void 0:t(o)};return Bt}var Ft;var At;function Rt(){if(At)return Ft;At=1;var t=z();var e=T();var i=it();var r=TypeError;Ft=function(o,n){var s,a;if(n==="string"&&e(s=o.toString)&&!i(a=t(s,o)))return a;if(e(s=o.valueOf)&&!i(a=t(s,o)))return a;if(n!=="string"&&e(s=o.toString)&&!i(a=t(s,o)))return a;throw new r("Can't convert object to primitive value")};return Ft}var jt={exports:{}};var Lt;var Ht;function Wt(){if(Ht)return Lt;Ht=1;Lt=true;return Lt}var Vt;var Ut;function qt(){if(Ut)return Vt;Ut=1;var t=a();var e=Object.defineProperty;Vt=function(i,r){try{e(t,i,{value:r,configurable:true,writable:true})}catch(e){t[i]=r}return r};return Vt}var Yt;function Xt(){if(Yt)return jt.exports;Yt=1;var t=Wt();var e=a();var i=qt();var r="__core-js_shared__";var o=jt.exports=e[r]||i(r,{});(o.versions||(o.versions=[])).push({version:"3.44.0",mode:t?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",source:"https://github.com/zloirock/core-js"});return jt.exports}var Gt;var Kt;function Zt(){if(Kt)return Gt;Kt=1;var t=Xt();Gt=function(e,i){return t[e]||(t[e]=i||{})};return Gt}var Qt;var $t;function Jt(){if($t)return Qt;$t=1;var t=Z();var e=Object;Qt=function(i){return e(t(i))};return Qt}var te;var ee;function ie(){if(ee)return te;ee=1;var t=b();var e=Jt();var i=t({}.hasOwnProperty);te=Object.hasOwn||function(t,r){return i(e(t),r)};return te}var re;var oe;function ne(){if(oe)return re;oe=1;var t=b();var e=0;var i=Math.random();var r=t(1.1.toString);re=function(t){return"Symbol("+(t===void 0?"":t)+")_"+r(++e+i,36)};return re}var se;var ae;function he(){if(ae)return se;ae=1;var t=a();var e=Zt();var i=ie();var r=ne();var o=wt();var n=Et();var s=t.Symbol;var h=e("wks");var d=n?s.for||s:s&&s.withoutSetter||r;se=function(t){i(h,t)||(h[t]=o&&i(s,t)?s[t]:d("Symbol."+t));return h[t]};return se}var de;var le;function ce(){if(le)return de;le=1;var t=z();var e=it();var i=kt();var r=zt();var o=Rt();var n=he();var s=TypeError;var a=n("toPrimitive");de=function(n,h){if(!e(n)||i(n))return n;var d=r(n,a);var l;if(d){h===void 0&&(h="default");l=t(d,n,h);if(!e(l)||i(l))return l;throw new s("Can't convert object to primitive value")}h===void 0&&(h="number");return o(n,h)};return de}var ue;var ve;function fe(){if(ve)return ue;ve=1;var t=ce();var e=kt();ue=function(i){var r=t(i,"string");return e(r)?r:r+""};return ue}var pe;var ge;function me(){if(ge)return pe;ge=1;var t=a();var e=it();var i=t.document;var r=e(i)&&e(i.createElement);pe=function(t){return r?i.createElement(t):{}};return pe}var ye;var be;function we(){if(be)return ye;be=1;var t=P();var e=l();var i=me();ye=!t&&!e((function(){return Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a!==7}));return ye}var _e;function xe(){if(_e)return M;_e=1;var t=P();var e=z();var i=R();var r=H();var o=J();var n=fe();var s=ie();var a=we();var h=Object.getOwnPropertyDescriptor;M.f=t?h:function(t,d){t=o(t);d=n(d);if(a)try{return h(t,d)}catch(t){}if(s(t,d))return r(!e(i.f,t,d),t[d])};return M}var Ee;var Oe;function Ce(){if(Oe)return Ee;Oe=1;var t=l();var e=T();var i=/#|\.prototype\./;var r=function(i,r){var h=n[o(i)];return h===a||h!==s&&(e(r)?t(r):!!r)};var o=r.normalize=function(t){return String(t).replace(i,".").toLowerCase()};var n=r.data={};var s=r.NATIVE="N";var a=r.POLYFILL="P";Ee=r;return Ee}var ke;var Se;function Te(){if(Se)return ke;Se=1;var t=C();var e=Pt();var i=v();var r=t(t.bind);ke=function(t,o){e(t);return o===void 0?t:i?r(t,o):function(){return t.apply(o,arguments)}};return ke}var Me={};var De;var Ie;function Pe(){if(Ie)return De;Ie=1;var t=P();var e=l();De=t&&e((function(){return Object.defineProperty((function(){}),"prototype",{value:42,writable:false}).prototype!==42}));return De}var Be;var Ne;function ze(){if(Ne)return Be;Ne=1;var t=it();var e=String;var i=TypeError;Be=function(r){if(t(r))return r;throw new i(e(r)+" is not an object")};return Be}var Fe;function Ae(){if(Fe)return Me;Fe=1;var t=P();var e=we();var i=Pe();var r=ze();var o=fe();var n=TypeError;var s=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var h="enumerable";var d="configurable";var l="writable";Me.f=t?i?function(t,e,i){r(t);e=o(e);r(i);if(typeof t==="function"&&e==="prototype"&&"value"in i&&l in i&&!i[l]){var n=a(t,e);if(n&&n[l]){t[e]=i.value;i={configurable:d in i?i[d]:n[d],enumerable:h in i?i[h]:n[h],writable:false}}}return s(t,e,i)}:s:function(t,i,a){r(t);i=o(i);r(a);if(e)try{return s(t,i,a)}catch(t){}if("get"in a||"set"in a)throw new n("Accessors not supported");"value"in a&&(t[i]=a.value);return t};return Me}var Re;var je;function Le(){if(je)return Re;je=1;var t=P();var e=Ae();var i=H();Re=t?function(t,r,o){return e.f(t,r,i(1,o))}:function(t,e,i){t[e]=i;return t};return Re}var He;var We;function Ve(){if(We)return He;We=1;var t=a();var e=g();var i=C();var r=T();var o=xe().f;var n=Ce();var s=nt();var h=Te();var d=Le();var l=ie();var c=function(t){var i=function(r,o,n){if(this instanceof i){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,o)}return new t(r,o,n)}return e(t,this,arguments)};i.prototype=t.prototype;return i};He=function(e,a){var u=e.target;var v=e.global;var f=e.stat;var p=e.proto;var g=v?t:f?t[u]:t[u]&&t[u].prototype;var m=v?s:s[u]||d(s,u,{})[u];var y=m.prototype;var b,w,_;var x,E,O,C,k,S;for(x in a){b=n(v?x:u+(f?".":"#")+x,e.forced);w=!b&&g&&l(g,x);O=m[x];if(w)if(e.dontCallGetSet){S=o(g,x);C=S&&S.value}else C=g[x];E=w&&C?C:a[x];if(b||p||typeof O!=typeof E){k=e.bind&&w?h(E,t):e.wrap&&w?c(E):p&&r(E)?i(E):E;(e.sham||E&&E.sham||O&&O.sham)&&d(k,"sham",true);d(m,x,k);if(p){_=u+"Prototype";l(s,_)||d(s,_,{});d(s[_],x,E);e.real&&y&&(b||!y[x])&&d(y,x,E)}}}};return He}var Ue;var qe;function Ye(){if(qe)return Ue;qe=1;var t=Math.ceil;var e=Math.floor;Ue=Math.trunc||function(i){var r=+i;return(r>0?e:t)(r)};return Ue}var Xe;var Ge;function Ke(){if(Ge)return Xe;Ge=1;var t=Ye();Xe=function(e){var i=+e;return i!==i||i===0?0:t(i)};return Xe}var Ze;var Qe;function $e(){if(Qe)return Ze;Qe=1;var t=Ke();var e=Math.max;var i=Math.min;Ze=function(r,o){var n=t(r);return n<0?e(n+o,0):i(n,o)};return Ze}var Je;var ti;function ei(){if(ti)return Je;ti=1;var t=Ke();var e=Math.min;Je=function(i){var r=t(i);return r>0?e(r,9007199254740991):0};return Je}var ii;var ri;function oi(){if(ri)return ii;ri=1;var t=ei();ii=function(e){return t(e.length)};return ii}var ni;var si;function ai(){if(si)return ni;si=1;var t=J();var e=$e();var i=oi();var r=function(r){return function(o,n,s){var a=t(o);var h=i(a);if(h===0)return!r&&-1;var d=e(s,h);var l;if(r&&n!==n)while(h>d){l=a[d++];if(l!==l)return true}else for(;h>d;d++)if((r||d in a)&&a[d]===n)return r||d||0;return!r&&-1}};ni={includes:r(true),indexOf:r(false)};return ni}var hi;var di;function li(){if(di)return hi;di=1;hi={};return hi}var ci;var ui;function vi(){if(ui)return ci;ui=1;var t=b();var e=ie();var i=J();var r=ai().indexOf;var o=li();var n=t([].push);ci=function(t,s){var a=i(t);var h=0;var d=[];var l;for(l in a)!e(o,l)&&e(a,l)&&n(d,l);while(s.length>h)e(a,l=s[h++])&&(~r(d,l)||n(d,l));return d};return ci}var fi;var pi;function gi(){if(pi)return fi;pi=1;fi=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];return fi}var mi;var yi;function bi(){if(yi)return mi;yi=1;var t=vi();var e=gi();mi=Object.keys||function(i){return t(i,e)};return mi}var wi={};var _i;function xi(){if(_i)return wi;_i=1;wi.f=Object.getOwnPropertySymbols;return wi}var Ei;var Oi;function Ci(){if(Oi)return Ei;Oi=1;var t=P();var e=b();var i=z();var r=l();var o=bi();var n=xi();var s=R();var a=Jt();var h=U();var d=Object.assign;var c=Object.defineProperty;var u=e([].concat);Ei=!d||r((function(){if(t&&d({b:1},d(c({},"a",{enumerable:true,get:function(){c(this,"b",{value:3,enumerable:false})}}),{b:2})).b!==1)return true;var e={};var i={};var r=Symbol("assign detection");var n="abcdefghijklmnopqrst";e[r]=7;n.split("").forEach((function(t){i[t]=t}));return d({},e)[r]!==7||o(d({},i)).join("")!==n}))?function(e,r){var d=a(e);var l=arguments.length;var c=1;var v=n.f;var f=s.f;while(l>c){var p=h(arguments[c++]);var g=v?u(o(p),v(p)):o(p);var m=g.length;var y=0;var b;while(m>y){b=g[y++];t&&!i(f,p,b)||(d[b]=p[b])}}return d}:d;return Ei}var ki;function Si(){if(ki)return o;ki=1;var t=Ve();var e=Ci();t({target:"Object",stat:true,arity:2,forced:Object.assign!==e},{assign:e});return o}var Ti;var Mi;function Di(){if(Mi)return Ti;Mi=1;Si();var t=nt();Ti=t.Object.assign;return Ti}var Ii;var Pi;function Bi(){if(Pi)return Ii;Pi=1;var t=Di();Ii=t;return Ii}var Ni;var zi;function Fi(){if(zi)return Ni;zi=1;Ni=Bi();return Ni}var Ai=Fi();var Ri=r(Ai);var ji={};var Li;var Hi;function Wi(){if(Hi)return Li;Hi=1;var t=b();Li=t([].slice);return Li}var Vi;var Ui;function qi(){if(Ui)return Vi;Ui=1;var t=b();var e=Pt();var i=it();var r=ie();var o=Wi();var n=v();var s=Function;var a=t([].concat);var h=t([].join);var d={};var l=function(t,e,i){if(!r(d,e)){var o=[];var n=0;for(;n<e;n++)o[n]="a["+n+"]";d[e]=s("C,a","return new C("+h(o,",")+")")}return d[e](t,i)};Vi=n?s.bind:function(t){var r=e(this);var n=r.prototype;var s=o(arguments,1);var h=function(){var e=a(s,o(arguments));return this instanceof h?l(r,e.length,e):r.apply(t,e)};i(n)&&(h.prototype=n);return h};return Vi}var Yi;function Xi(){if(Yi)return ji;Yi=1;var t=Ve();var e=qi();t({target:"Function",proto:true,forced:Function.bind!==e},{bind:e});return ji}var Gi;var Ki;function Zi(){if(Ki)return Gi;Ki=1;var t=a();var e=nt();Gi=function(i,r){var o=e[i+"Prototype"];var n=o&&o[r];if(n)return n;var s=t[i];var a=s&&s.prototype;return a&&a[r]};return Gi}var Qi;var $i;function Ji(){if($i)return Qi;$i=1;Xi();var t=Zi();Qi=t("Function","bind");return Qi}var tr;var er;function ir(){if(er)return tr;er=1;var t=ct();var e=Ji();var i=Function.prototype;tr=function(r){var o=r.bind;return r===i||t(i,r)&&o===i.bind?e:o};return tr}var rr;var or;function nr(){if(or)return rr;or=1;var t=ir();rr=t;return rr}var sr;var ar;function hr(){if(ar)return sr;ar=1;sr=nr();return sr}var dr=hr();var lr=r(dr);
/**
 * Draw a circle.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param r - The radius of the circle.
 */function cr(t,e,i,r){t.beginPath();t.arc(e,i,r,0,2*Math.PI,false);t.closePath()}
/**
 * Draw a square.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param r - Half of the width and height of the square.
 */function ur(t,e,i,r){t.beginPath();t.rect(e-r,i-r,r*2,r*2);t.closePath()}
/**
 * Draw an equilateral triangle standing on a side.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param r - Half of the length of the sides.
 * @remarks
 * http://en.wikipedia.org/wiki/Equilateral_triangle
 */function vr(t,e,i,r){t.beginPath();r*=1.15;i+=.275*r;const o=r*2;const n=o/2;const s=Math.sqrt(3)/6*o;const a=Math.sqrt(o*o-n*n);t.moveTo(e,i-(a-s));t.lineTo(e+n,i+s);t.lineTo(e-n,i+s);t.lineTo(e,i-(a-s));t.closePath()}
/**
 * Draw an equilateral triangle standing on a vertex.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param r - Half of the length of the sides.
 * @remarks
 * http://en.wikipedia.org/wiki/Equilateral_triangle
 */function fr(t,e,i,r){t.beginPath();r*=1.15;i-=.275*r;const o=r*2;const n=o/2;const s=Math.sqrt(3)/6*o;const a=Math.sqrt(o*o-n*n);t.moveTo(e,i+(a-s));t.lineTo(e+n,i-s);t.lineTo(e-n,i-s);t.lineTo(e,i+(a-s));t.closePath()}
/**
 * Draw a star.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param r - The outer radius of the star.
 */function pr(t,e,i,r){t.beginPath();r*=.82;i+=.1*r;for(let o=0;o<10;o++){const n=o%2===0?r*1.3:r*.5;t.lineTo(e+n*Math.sin(o*2*Math.PI/10),i-n*Math.cos(o*2*Math.PI/10))}t.closePath()}
/**
 * Draw a diamond.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param r - Half of the width and height of the diamond.
 * @remarks
 * http://www.html5canvastutorials.com/labs/html5-canvas-star-spinner/
 */function gr(t,e,i,r){t.beginPath();t.lineTo(e,i+r);t.lineTo(e+r,i);t.lineTo(e,i-r);t.lineTo(e-r,i);t.closePath()}
/**
 * Draw a rectangle with rounded corners.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param w - The width of the rectangle.
 * @param h - The height of the rectangle.
 * @param r - The radius of the corners.
 * @remarks
 * http://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas
 */function mr(t,e,i,r,o,n){const s=Math.PI/180;r-2*n<0&&(n=r/2);o-2*n<0&&(n=o/2);t.beginPath();t.moveTo(e+n,i);t.lineTo(e+r-n,i);t.arc(e+r-n,i+n,n,s*270,s*360,false);t.lineTo(e+r,i+o-n);t.arc(e+r-n,i+o-n,n,0,s*90,false);t.lineTo(e+n,i+o);t.arc(e+n,i+o-n,n,s*90,s*180,false);t.lineTo(e,i+n);t.arc(e+n,i+n,n,s*180,s*270,false);t.closePath()}
/**
 * Draw an ellipse.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param w - The width of the ellipse.
 * @param h - The height of the ellipse.
 * @remarks
 * http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
 *
 * Postfix '_vis' added to discern it from standard method ellipse().
 */function yr(t,e,i,r,o){const n=.5522848,s=r/2*n,a=o/2*n,h=e+r,d=i+o,l=e+r/2,c=i+o/2;t.beginPath();t.moveTo(e,c);t.bezierCurveTo(e,c-a,l-s,i,l,i);t.bezierCurveTo(l+s,i,h,c-a,h,c);t.bezierCurveTo(h,c+a,l+s,d,l,d);t.bezierCurveTo(l-s,d,e,c+a,e,c);t.closePath()}
/**
 * Draw an isometric cylinder.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param w - The width of the database.
 * @param h - The height of the database.
 * @remarks
 * http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
 */function br(t,e,i,r,o){const n=1/3;const s=r;const a=o*n;const h=.5522848,d=s/2*h,l=a/2*h,c=e+s,u=i+a,v=e+s/2,f=i+a/2,p=i+(o-a/2),g=i+o;t.beginPath();t.moveTo(c,f);t.bezierCurveTo(c,f+l,v+d,u,v,u);t.bezierCurveTo(v-d,u,e,f+l,e,f);t.bezierCurveTo(e,f-l,v-d,i,v,i);t.bezierCurveTo(v+d,i,c,f-l,c,f);t.lineTo(c,p);t.bezierCurveTo(c,p+l,v+d,g,v,g);t.bezierCurveTo(v-d,g,e,p+l,e,p);t.lineTo(e,f)}
/**
 * Draw a dashed line.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The start position on the x axis.
 * @param y - The start position on the y axis.
 * @param x2 - The end position on the x axis.
 * @param y2 - The end position on the y axis.
 * @param pattern - List of lengths starting with line and then alternating between space and line.
 * @author David Jordan
 * @remarks
 * date 2012-08-08
 * http://stackoverflow.com/questions/4576724/dotted-stroke-in-canvas
 */function wr(t,e,i,r,o,n){t.beginPath();t.moveTo(e,i);const s=n.length;const a=r-e;const h=o-i;const d=h/a;let l=Math.sqrt(a*a+h*h);let c=0;let u=true;let v=0;let f=+n[0];while(l>=.1){f=+n[c++%s];f>l&&(f=l);v=Math.sqrt(f*f/(1+d*d));v=a<0?-v:v;e+=v;i+=d*v;u===true?t.lineTo(e,i):t.moveTo(e,i);l-=f;u=!u}}
/**
 * Draw a hexagon.
 * @param ctx - The context this shape will be rendered to.
 * @param x - The position of the center on the x axis.
 * @param y - The position of the center on the y axis.
 * @param r - The radius of the hexagon.
 */function _r(t,e,i,r){t.beginPath();const o=6;const n=Math.PI*2/o;t.moveTo(e+r,i);for(let s=1;s<o;s++)t.lineTo(e+r*Math.cos(n*s),i+r*Math.sin(n*s));t.closePath()}const xr={circle:cr,dashedLine:wr,database:br,diamond:gr,ellipse:yr,ellipse_vis:yr,hexagon:_r,roundRect:mr,square:ur,star:pr,triangle:vr,triangleDown:fr};
/**
 * Returns either custom or native drawing function base on supplied name.
 * @param name - The name of the function. Either the name of a
 * CanvasRenderingContext2D property or an export from shapes.ts without the
 * draw prefix.
 * @returns The function that can be used for rendering. In case of native
 * CanvasRenderingContext2D function the API is normalized to
 * `(ctx: CanvasRenderingContext2D, ...originalArgs) => void`.
 */function Er(t){return Object.prototype.hasOwnProperty.call(xr,t)?xr[t]:function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];CanvasRenderingContext2D.prototype[t].call(e,r)}}var Or={exports:{}};var Cr;function kr(){if(Cr)return Or.exports;Cr=1;(function(t){t.exports=e;function e(t){if(t)return i(t)}
/**
		 * Mixin the emitter properties.
		 *
		 * @param {Object} obj
		 * @return {Object}
		 * @api private
		 */function i(t){for(var i in e.prototype)t[i]=e.prototype[i];return t}
/**
		 * Listen on the given `event` with `fn`.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 * @return {Emitter}
		 * @api public
		 */e.prototype.on=e.prototype.addEventListener=function(t,e){this._callbacks=this._callbacks||{};(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e);return this};
/**
		 * Adds an `event` listener that will be invoked a single
		 * time then automatically removed.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 * @return {Emitter}
		 * @api public
		 */e.prototype.once=function(t,e){function i(){this.off(t,i);e.apply(this,arguments)}i.fn=e;this.on(t,i);return this};
/**
		 * Remove the given callback for `event` or all
		 * registered callbacks.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 * @return {Emitter}
		 * @api public
		 */e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,e){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length){delete this._callbacks["$"+t];return this}var r;for(var o=0;o<i.length;o++){r=i[o];if(r===e||r.fn===e){i.splice(o,1);break}}i.length===0&&delete this._callbacks["$"+t];return this};
/**
		 * Emit `event` with the given args.
		 *
		 * @param {String} event
		 * @param {Mixed} ...
		 * @return {Emitter}
		 */e.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=new Array(arguments.length-1),i=this._callbacks["$"+t];for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(i){i=i.slice(0);r=0;for(var o=i.length;r<o;++r)i[r].apply(this,e)}return this};
/**
		 * Return array of callbacks for `event`.
		 *
		 * @param {String} event
		 * @return {Array}
		 * @api public
		 */e.prototype.listeners=function(t){this._callbacks=this._callbacks||{};return this._callbacks["$"+t]||[]};
/**
		 * Check if this emitter has `event` handlers.
		 *
		 * @param {String} event
		 * @return {Boolean}
		 * @api public
		 */e.prototype.hasListeners=function(t){return!!this.listeners(t).length}})(Or);return Or.exports}var Sr=kr();var Tr=r(Sr);var Mr={};var Dr;var Ir;function Pr(){if(Ir)return Dr;Ir=1;var t=x();Dr=Array.isArray||function(e){return t(e)==="Array"};return Dr}var Br;var Nr;function zr(){if(Nr)return Br;Nr=1;var t=TypeError;var e=9007199254740991;Br=function(i){if(i>e)throw t("Maximum allowed index exceeded");return i};return Br}var Fr;var Ar;function Rr(){if(Ar)return Fr;Ar=1;var t=P();var e=Ae();var i=H();Fr=function(r,o,n){t?e.f(r,o,i(0,n)):r[o]=n};return Fr}var jr;var Lr;function Hr(){if(Lr)return jr;Lr=1;var t=he();var e=t("toStringTag");var i={};i[e]="z";jr=String(i)==="[object z]";return jr}var Wr;var Vr;function Ur(){if(Vr)return Wr;Vr=1;var t=Hr();var e=T();var i=x();var r=he();var o=r("toStringTag");var n=Object;var s=i(function(){return arguments}())==="Arguments";var a=function(t,e){try{return t[e]}catch(t){}};Wr=t?i:function(t){var r,h,d;return t===void 0?"Undefined":t===null?"Null":typeof(h=a(r=n(t),o))=="string"?h:s?i(r):(d=i(r))==="Object"&&e(r.callee)?"Arguments":d};return Wr}var qr;var Yr;function Xr(){if(Yr)return qr;Yr=1;var t=b();var e=T();var i=Xt();var r=t(Function.toString);e(i.inspectSource)||(i.inspectSource=function(t){return r(t)});qr=i.inspectSource;return qr}var Gr;var Kr;function Zr(){if(Kr)return Gr;Kr=1;var t=b();var e=l();var i=T();var r=Ur();var o=ht();var n=Xr();var s=function(){};var a=o("Reflect","construct");var h=/^\s*(?:class|function)\b/;var d=t(h.exec);var c=!h.test(s);var u=function(t){if(!i(t))return false;try{a(s,[],t);return true}catch(t){return false}};var v=function(t){if(!i(t))return false;switch(r(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return false}try{return c||!!d(h,n(t))}catch(t){return true}};v.sham=true;Gr=!a||e((function(){var t;return u(u.call)||!u(Object)||!u((function(){t=true}))||t}))?v:u;return Gr}var Qr;var $r;function Jr(){if($r)return Qr;$r=1;var t=Pr();var e=Zr();var i=it();var r=he();var o=r("species");var n=Array;Qr=function(r){var s;if(t(r)){s=r.constructor;if(e(s)&&(s===n||t(s.prototype)))s=void 0;else if(i(s)){s=s[o];s===null&&(s=void 0)}}return s===void 0?n:s};return Qr}var to;var eo;function io(){if(eo)return to;eo=1;var t=Jr();to=function(e,i){return new(t(e))(i===0?0:i)};return to}var ro;var oo;function no(){if(oo)return ro;oo=1;var t=l();var e=he();var i=mt();var r=e("species");ro=function(e){return i>=51||!t((function(){var t=[];var i=t.constructor={};i[r]=function(){return{foo:1}};return t[e](Boolean).foo!==1}))};return ro}var so;function ao(){if(so)return Mr;so=1;var t=Ve();var e=l();var i=Pr();var r=it();var o=Jt();var n=oi();var s=zr();var a=Rr();var h=io();var d=no();var c=he();var u=mt();var v=c("isConcatSpreadable");var f=u>=51||!e((function(){var t=[];t[v]=false;return t.concat()[0]!==t}));var p=function(t){if(!r(t))return false;var e=t[v];return e!==void 0?!!e:i(t)};var g=!f||!d("concat");t({target:"Array",proto:true,arity:1,forced:g},{concat:function(t){var e=o(this);var i=h(e,0);var r=0;var d,l,c,u,v;for(d=-1,c=arguments.length;d<c;d++){v=d===-1?e:arguments[d];if(p(v)){u=n(v);s(r+u);for(l=0;l<u;l++,r++)l in v&&a(i,r,v[l])}else{s(r+1);a(i,r++,v)}}i.length=r;return i}});return Mr}var ho={};var lo={};var co;var uo;function vo(){if(uo)return co;uo=1;var t=Ur();var e=String;co=function(i){if(t(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return e(i)};return co}var fo={};var po;function go(){if(po)return fo;po=1;var t=P();var e=Pe();var i=Ae();var r=ze();var o=J();var n=bi();fo.f=t&&!e?Object.defineProperties:function(t,e){r(t);var s=o(e);var a=n(e);var h=a.length;var d=0;var l;while(h>d)i.f(t,l=a[d++],s[l]);return t};return fo}var mo;var yo;function bo(){if(yo)return mo;yo=1;var t=ht();mo=t("document","documentElement");return mo}var wo;var _o;function xo(){if(_o)return wo;_o=1;var t=Zt();var e=ne();var i=t("keys");wo=function(t){return i[t]||(i[t]=e(t))};return wo}var Eo;var Oo;function Co(){if(Oo)return Eo;Oo=1;var t=ze();var e=go();var i=gi();var r=li();var o=bo();var n=me();var s=xo();var a=">";var h="<";var d="prototype";var l="script";var c=s("IE_PROTO");var u=function(){};var v=function(t){return h+l+a+t+h+"/"+l+a};var f=function(t){t.write(v(""));t.close();var e=t.parentWindow.Object;t=null;return e};var p=function(){var t=n("iframe");var e="java"+l+":";var i;t.style.display="none";o.appendChild(t);t.src=String(e);i=t.contentWindow.document;i.open();i.write(v("document.F=Object"));i.close();return i.F};var g;var m=function(){try{g=new ActiveXObject("htmlfile")}catch(t){}m=typeof document!="undefined"?document.domain&&g?f(g):p():f(g);var t=i.length;while(t--)delete m[d][i[t]];return m()};r[c]=true;Eo=Object.create||function(i,r){var o;if(i!==null){u[d]=t(i);o=new u;u[d]=null;o[c]=i}else o=m();return r===void 0?o:e.f(o,r)};return Eo}var ko={};var So;function To(){if(So)return ko;So=1;var t=vi();var e=gi();var i=e.concat("length","prototype");ko.f=Object.getOwnPropertyNames||function(e){return t(e,i)};return ko}var Mo={};var Do;function Io(){if(Do)return Mo;Do=1;var t=x();var e=J();var i=To().f;var r=Wi();var o=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var n=function(t){try{return i(t)}catch(t){return r(o)}};Mo.f=function(r){return o&&t(r)==="Window"?n(r):i(e(r))};return Mo}var Po;var Bo;function No(){if(Bo)return Po;Bo=1;var t=Le();Po=function(e,i,r,o){o&&o.enumerable?e[i]=r:t(e,i,r);return e};return Po}var zo;var Fo;function Ao(){if(Fo)return zo;Fo=1;var t=Ae();zo=function(e,i,r){return t.f(e,i,r)};return zo}var Ro={};var jo;function Lo(){if(jo)return Ro;jo=1;var t=he();Ro.f=t;return Ro}var Ho;var Wo;function Vo(){if(Wo)return Ho;Wo=1;var t=nt();var e=ie();var i=Lo();var r=Ae().f;Ho=function(o){var n=t.Symbol||(t.Symbol={});e(n,o)||r(n,o,{value:i.f(o)})};return Ho}var Uo;var qo;function Yo(){if(qo)return Uo;qo=1;var t=z();var e=ht();var i=he();var r=No();Uo=function(){var o=e("Symbol");var n=o&&o.prototype;var s=n&&n.valueOf;var a=i("toPrimitive");n&&!n[a]&&r(n,a,(function(e){return t(s,this)}),{arity:1})};return Uo}var Xo;var Go;function Ko(){if(Go)return Xo;Go=1;var t=Hr();var e=Ur();Xo=t?{}.toString:function(){return"[object "+e(this)+"]"};return Xo}var Zo;var Qo;function $o(){if(Qo)return Zo;Qo=1;var t=Hr();var e=Ae().f;var i=Le();var r=ie();var o=Ko();var n=he();var s=n("toStringTag");Zo=function(n,a,h,d){var l=h?n:n&&n.prototype;if(l){r(l,s)||e(l,s,{configurable:true,value:a});d&&!t&&i(l,"toString",o)}};return Zo}var Jo;var tn;function en(){if(tn)return Jo;tn=1;var t=a();var e=T();var i=t.WeakMap;Jo=e(i)&&/native code/.test(String(i));return Jo}var rn;var on;function nn(){if(on)return rn;on=1;var t=en();var e=a();var i=it();var r=Le();var o=ie();var n=Xt();var s=xo();var h=li();var d="Object already initialized";var l=e.TypeError;var c=e.WeakMap;var u,v,f;var p=function(t){return f(t)?v(t):u(t,{})};var g=function(t){return function(e){var r;if(!i(e)||(r=v(e)).type!==t)throw new l("Incompatible receiver, "+t+" required");return r}};if(t||n.state){var m=n.state||(n.state=new c);m.get=m.get;m.has=m.has;m.set=m.set;u=function(t,e){if(m.has(t))throw new l(d);e.facade=t;m.set(t,e);return e};v=function(t){return m.get(t)||{}};f=function(t){return m.has(t)}}else{var y=s("state");h[y]=true;u=function(t,e){if(o(t,y))throw new l(d);e.facade=t;r(t,y,e);return e};v=function(t){return o(t,y)?t[y]:{}};f=function(t){return o(t,y)}}rn={set:u,get:v,has:f,enforce:p,getterFor:g};return rn}var sn;var an;function hn(){if(an)return sn;an=1;var t=Te();var e=b();var i=U();var r=Jt();var o=oi();var n=io();var s=e([].push);var a=function(e){var a=e===1;var h=e===2;var d=e===3;var l=e===4;var c=e===6;var u=e===7;var v=e===5||c;return function(f,p,g,m){var y=r(f);var b=i(y);var w=o(b);var _=t(p,g);var x=0;var E=m||n;var O=a?E(f,w):h||u?E(f,0):void 0;var C,k;for(;w>x;x++)if(v||x in b){C=b[x];k=_(C,x,y);if(e)if(a)O[x]=k;else if(k)switch(e){case 3:return true;case 5:return C;case 6:return x;case 2:s(O,C)}else switch(e){case 4:return false;case 7:s(O,C)}}return c?-1:d||l?l:O}};sn={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6),filterReject:a(7)};return sn}var dn;function ln(){if(dn)return lo;dn=1;var t=Ve();var e=a();var i=z();var r=b();var o=Wt();var n=P();var s=wt();var h=l();var d=ie();var c=ct();var u=ze();var v=J();var f=fe();var p=vo();var g=H();var m=Co();var y=bi();var w=To();var _=Io();var x=xi();var E=xe();var O=Ae();var C=go();var k=R();var S=No();var T=Ao();var M=Zt();var D=xo();var I=li();var B=ne();var N=he();var F=Lo();var A=Vo();var j=Yo();var L=$o();var W=nn();var V=hn().forEach;var U=D("hidden");var q="Symbol";var Y="prototype";var X=W.set;var G=W.getterFor(q);var K=Object[Y];var Z=e.Symbol;var Q=Z&&Z[Y];var $=e.RangeError;var tt=e.TypeError;var et=e.QObject;var it=E.f;var rt=O.f;var ot=_.f;var nt=k.f;var st=r([].push);var at=M("symbols");var ht=M("op-symbols");var dt=M("wks");var lt=!et||!et[Y]||!et[Y].findChild;var ut=function(t,e,i){var r=it(K,e);r&&delete K[e];rt(t,e,i);r&&t!==K&&rt(K,e,r)};var vt=n&&h((function(){return m(rt({},"a",{get:function(){return rt(this,"a",{value:7}).a}})).a!==7}))?ut:rt;var ft=function(t,e){var i=at[t]=m(Q);X(i,{type:q,tag:t,description:e});n||(i.description=e);return i};var pt=function(t,e,i){t===K&&pt(ht,e,i);u(t);var r=f(e);u(i);if(d(at,r)){if(i.enumerable){d(t,U)&&t[U][r]&&(t[U][r]=false);i=m(i,{enumerable:g(0,false)})}else{d(t,U)||rt(t,U,g(1,m(null)));t[U][r]=true}return vt(t,r,i)}return rt(t,r,i)};var gt=function(t,e){u(t);var r=v(e);var o=y(r).concat(xt(r));V(o,(function(e){n&&!i(yt,r,e)||pt(t,e,r[e])}));return t};var mt=function(t,e){return e===void 0?m(t):gt(m(t),e)};var yt=function(t){var e=f(t);var r=i(nt,this,e);return!(this===K&&d(at,e)&&!d(ht,e))&&(!(r||!d(this,e)||!d(at,e)||d(this,U)&&this[U][e])||r)};var bt=function(t,e){var i=v(t);var r=f(e);if(i!==K||!d(at,r)||d(ht,r)){var o=it(i,r);!o||!d(at,r)||d(i,U)&&i[U][r]||(o.enumerable=true);return o}};var _t=function(t){var e=ot(v(t));var i=[];V(e,(function(t){d(at,t)||d(I,t)||st(i,t)}));return i};var xt=function(t){var e=t===K;var i=ot(e?ht:v(t));var r=[];V(i,(function(t){!d(at,t)||e&&!d(K,t)||st(r,at[t])}));return r};if(!s){Z=function(){if(c(Q,this))throw new tt("Symbol is not a constructor");var t=arguments.length&&arguments[0]!==void 0?p(arguments[0]):void 0;var r=B(t);var o=function(t){var n=this===void 0?e:this;n===K&&i(o,ht,t);d(n,U)&&d(n[U],r)&&(n[U][r]=false);var s=g(1,t);try{vt(n,r,s)}catch(t){if(!(t instanceof $))throw t;ut(n,r,s)}};n&&lt&&vt(K,r,{configurable:true,set:o});return ft(r,t)};Q=Z[Y];S(Q,"toString",(function(){return G(this).tag}));S(Z,"withoutSetter",(function(t){return ft(B(t),t)}));k.f=yt;O.f=pt;C.f=gt;E.f=bt;w.f=_.f=_t;x.f=xt;F.f=function(t){return ft(N(t),t)};if(n){T(Q,"description",{configurable:true,get:function(){return G(this).description}});o||S(K,"propertyIsEnumerable",yt,{unsafe:true})}}t({global:true,constructor:true,wrap:true,forced:!s,sham:!s},{Symbol:Z});V(y(dt),(function(t){A(t)}));t({target:q,stat:true,forced:!s},{useSetter:function(){lt=true},useSimple:function(){lt=false}});t({target:"Object",stat:true,forced:!s,sham:!n},{create:mt,defineProperty:pt,defineProperties:gt,getOwnPropertyDescriptor:bt});t({target:"Object",stat:true,forced:!s},{getOwnPropertyNames:_t});j();L(Z,q);I[U]=true;return lo}var cn={};var un;var vn;function fn(){if(vn)return un;vn=1;var t=wt();un=t&&!!Symbol.for&&!!Symbol.keyFor;return un}var pn;function gn(){if(pn)return cn;pn=1;var t=Ve();var e=ht();var i=ie();var r=vo();var o=Zt();var n=fn();var s=o("string-to-symbol-registry");var a=o("symbol-to-string-registry");t({target:"Symbol",stat:true,forced:!n},{for:function(t){var o=r(t);if(i(s,o))return s[o];var n=e("Symbol")(o);s[o]=n;a[n]=o;return n}});return cn}var mn={};var yn;function bn(){if(yn)return mn;yn=1;var t=Ve();var e=ie();var i=kt();var r=Mt();var o=Zt();var n=fn();var s=o("symbol-to-string-registry");t({target:"Symbol",stat:true,forced:!n},{keyFor:function(t){if(!i(t))throw new TypeError(r(t)+" is not a symbol");if(e(s,t))return s[t]}});return mn}var wn={};var _n;var xn;function En(){if(xn)return _n;xn=1;var t=b();var e=Pr();var i=T();var r=x();var o=vo();var n=t([].push);_n=function(t){if(i(t))return t;if(e(t)){var s=t.length;var a=[];for(var h=0;h<s;h++){var d=t[h];typeof d=="string"?n(a,d):typeof d!="number"&&r(d)!=="Number"&&r(d)!=="String"||n(a,o(d))}var l=a.length;var c=true;return function(t,i){if(c){c=false;return i}if(e(this))return i;for(var r=0;r<l;r++)if(a[r]===t)return i}}};return _n}var On;function Cn(){if(On)return wn;On=1;var t=Ve();var e=ht();var i=g();var r=z();var o=b();var n=l();var s=T();var a=kt();var h=Wi();var d=En();var c=wt();var u=String;var v=e("JSON","stringify");var f=o(/./.exec);var p=o("".charAt);var m=o("".charCodeAt);var y=o("".replace);var w=o(1.1.toString);var _=/[\uD800-\uDFFF]/g;var x=/^[\uD800-\uDBFF]$/;var E=/^[\uDC00-\uDFFF]$/;var O=!c||n((function(){var t=e("Symbol")("stringify detection");return v([t])!=="[null]"||v({a:t})!=="{}"||v(Object(t))!=="{}"}));var C=n((function(){return v("\udf06\ud834")!=='"\\udf06\\ud834"'||v("\udead")!=='"\\udead"'}));var k=function(t,e){var o=h(arguments);var n=d(e);if(s(n)||t!==void 0&&!a(t)){o[1]=function(t,e){s(n)&&(e=r(n,this,u(t),e));if(!a(e))return e};return i(v,null,o)}};var S=function(t,e,i){var r=p(i,e-1);var o=p(i,e+1);return f(x,t)&&!f(E,o)||f(E,t)&&!f(x,r)?"\\u"+w(m(t,0),16):t};v&&t({target:"JSON",stat:true,arity:3,forced:O||C},{stringify:function(t,e,r){var o=h(arguments);var n=i(O?k:v,null,o);return C&&typeof n=="string"?y(n,_,S):n}});return wn}var kn={};var Sn;function Tn(){if(Sn)return kn;Sn=1;var t=Ve();var e=wt();var i=l();var r=xi();var o=Jt();var n=!e||i((function(){r.f(1)}));t({target:"Object",stat:true,forced:n},{getOwnPropertySymbols:function(t){var e=r.f;return e?e(o(t)):[]}});return kn}var Mn;function Dn(){if(Mn)return ho;Mn=1;ln();gn();bn();Cn();Tn();return ho}var In={};var Pn;function Bn(){if(Pn)return In;Pn=1;var t=Vo();t("asyncDispose");return In}var Nn={};var zn;function Fn(){if(zn)return Nn;zn=1;var t=Vo();t("asyncIterator");return Nn}var An={};var Rn;function jn(){if(Rn)return An;Rn=1;var t=Vo();t("dispose");return An}var Ln={};var Hn;function Wn(){if(Hn)return Ln;Hn=1;var t=Vo();t("hasInstance");return Ln}var Vn={};var Un;function qn(){if(Un)return Vn;Un=1;var t=Vo();t("isConcatSpreadable");return Vn}var Yn={};var Xn;function Gn(){if(Xn)return Yn;Xn=1;var t=Vo();t("iterator");return Yn}var Kn={};var Zn;function Qn(){if(Zn)return Kn;Zn=1;var t=Vo();t("match");return Kn}var $n={};var Jn;function ts(){if(Jn)return $n;Jn=1;var t=Vo();t("matchAll");return $n}var es={};var is;function rs(){if(is)return es;is=1;var t=Vo();t("replace");return es}var os={};var ns;function ss(){if(ns)return os;ns=1;var t=Vo();t("search");return os}var as={};var hs;function ds(){if(hs)return as;hs=1;var t=Vo();t("species");return as}var ls={};var cs;function us(){if(cs)return ls;cs=1;var t=Vo();t("split");return ls}var vs={};var fs;function ps(){if(fs)return vs;fs=1;var t=Vo();var e=Yo();t("toPrimitive");e();return vs}var gs={};var ms;function ys(){if(ms)return gs;ms=1;var t=ht();var e=Vo();var i=$o();e("toStringTag");i(t("Symbol"),"Symbol");return gs}var bs={};var ws;function _s(){if(ws)return bs;ws=1;var t=Vo();t("unscopables");return bs}var xs={};var Es;function Os(){if(Es)return xs;Es=1;var t=a();var e=$o();e(t.JSON,"JSON",true);return xs}var Cs;var ks;function Ss(){if(ks)return Cs;ks=1;ao();Dn();Bn();Fn();jn();Wn();qn();Gn();Qn();ts();rs();ss();ds();us();ps();ys();_s();Os();var t=nt();Cs=t.Symbol;return Cs}var Ts={};var Ms;var Ds;function Is(){if(Ds)return Ms;Ds=1;Ms=function(){};return Ms}var Ps;var Bs;function Ns(){if(Bs)return Ps;Bs=1;Ps={};return Ps}var zs;var Fs;function As(){if(Fs)return zs;Fs=1;var t=P();var e=ie();var i=Function.prototype;var r=t&&Object.getOwnPropertyDescriptor;var o=e(i,"name");var n=o&&function(){}.name==="something";var s=o&&(!t||t&&r(i,"name").configurable);zs={EXISTS:o,PROPER:n,CONFIGURABLE:s};return zs}var Rs;var js;function Ls(){if(js)return Rs;js=1;var t=l();Rs=!t((function(){function t(){}t.prototype.constructor=null;return Object.getPrototypeOf(new t)!==t.prototype}));return Rs}var Hs;var Ws;function Vs(){if(Ws)return Hs;Ws=1;var t=ie();var e=T();var i=Jt();var r=xo();var o=Ls();var n=r("IE_PROTO");var s=Object;var a=s.prototype;Hs=o?s.getPrototypeOf:function(r){var o=i(r);if(t(o,n))return o[n];var h=o.constructor;return e(h)&&o instanceof h?h.prototype:o instanceof s?a:null};return Hs}var Us;var qs;function Ys(){if(qs)return Us;qs=1;var t=l();var e=T();var i=it();var r=Co();var o=Vs();var n=No();var s=he();var a=Wt();var h=s("iterator");var d=false;var c,u,v;if([].keys){v=[].keys();if("next"in v){u=o(o(v));u!==Object.prototype&&(c=u)}else d=true}var f=!i(c)||t((function(){var t={};return c[h].call(t)!==t}));f?c={}:a&&(c=r(c));e(c[h])||n(c,h,(function(){return this}));Us={IteratorPrototype:c,BUGGY_SAFARI_ITERATORS:d};return Us}var Xs;var Gs;function Ks(){if(Gs)return Xs;Gs=1;var t=Ys().IteratorPrototype;var e=Co();var i=H();var r=$o();var o=Ns();var n=function(){return this};Xs=function(s,a,h,d){var l=a+" Iterator";s.prototype=e(t,{next:i(+!d,h)});r(s,l,false,true);o[l]=n;return s};return Xs}var Zs;var Qs;function $s(){if(Qs)return Zs;Qs=1;var t=b();var e=Pt();Zs=function(i,r,o){try{return t(e(Object.getOwnPropertyDescriptor(i,r)[o]))}catch(t){}};return Zs}var Js;var ta;function ea(){if(ta)return Js;ta=1;var t=it();Js=function(e){return t(e)||e===null};return Js}var ia;var ra;function oa(){if(ra)return ia;ra=1;var t=ea();var e=String;var i=TypeError;ia=function(r){if(t(r))return r;throw new i("Can't set "+e(r)+" as a prototype")};return ia}var na;var sa;function aa(){if(sa)return na;sa=1;var t=$s();var e=it();var i=Z();var r=oa();na=Object.setPrototypeOf||("__proto__"in{}?function(){var o=false;var n={};var s;try{s=t(Object.prototype,"__proto__","set");s(n,[]);o=n instanceof Array}catch(t){}return function(t,n){i(t);r(n);if(!e(t))return t;o?s(t,n):t.__proto__=n;return t}}():void 0);return na}var ha;var da;function la(){if(da)return ha;da=1;var t=Ve();var e=z();var i=Wt();var r=As();var o=T();var n=Ks();var s=Vs();var a=aa();var h=$o();var d=Le();var l=No();var c=he();var u=Ns();var v=Ys();var f=r.PROPER;var p=r.CONFIGURABLE;var g=v.IteratorPrototype;var m=v.BUGGY_SAFARI_ITERATORS;var y=c("iterator");var b="keys";var w="values";var _="entries";var x=function(){return this};ha=function(r,c,v,E,O,C,k){n(v,c,E);var S=function(t){if(t===O&&P)return P;if(!m&&t&&t in D)return D[t];switch(t){case b:return function(){return new v(this,t)};case w:return function(){return new v(this,t)};case _:return function(){return new v(this,t)}}return function(){return new v(this)}};var T=c+" Iterator";var M=false;var D=r.prototype;var I=D[y]||D["@@iterator"]||O&&D[O];var P=!m&&I||S(O);var B=c==="Array"&&D.entries||I;var N,z,F;if(B){N=s(B.call(new r));if(N!==Object.prototype&&N.next){i||s(N)===g||(a?a(N,g):o(N[y])||l(N,y,x));h(N,T,true,true);i&&(u[T]=x)}}if(f&&O===w&&I&&I.name!==w)if(!i&&p)d(D,"name",w);else{M=true;P=function(){return e(I,this)}}if(O){z={values:S(w),keys:C?P:S(b),entries:S(_)};if(k)for(F in z)(m||M||!(F in D))&&l(D,F,z[F]);else t({target:c,proto:true,forced:m||M},z)}i&&!k||D[y]===P||l(D,y,P,{name:O});u[c]=P;return z};return ha}var ca;var ua;function va(){if(ua)return ca;ua=1;ca=function(t,e){return{value:t,done:e}};return ca}var fa;var pa;function ga(){if(pa)return fa;pa=1;var t=J();var e=Is();var i=Ns();var r=nn();var o=Ae().f;var n=la();var s=va();var a=Wt();var h=P();var d="Array Iterator";var l=r.set;var c=r.getterFor(d);fa=n(Array,"Array",(function(e,i){l(this,{type:d,target:t(e),index:0,kind:i})}),(function(){var t=c(this);var e=t.target;var i=t.index++;if(!e||i>=e.length){t.target=null;return s(void 0,true)}switch(t.kind){case"keys":return s(i,false);case"values":return s(e[i],false)}return s([i,e[i]],false)}),"values");var u=i.Arguments=i.Array;e("keys");e("values");e("entries");if(!a&&h&&u.name!=="values")try{o(u,"name",{value:"values"})}catch(t){}return fa}var ma;var ya;function ba(){if(ya)return ma;ya=1;ma={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};return ma}var wa;function _a(){if(wa)return Ts;wa=1;ga();var t=ba();var e=a();var i=$o();var r=Ns();for(var o in t){i(e[o],o);r[o]=r.Array}return Ts}var xa;var Ea;function Oa(){if(Ea)return xa;Ea=1;var t=Ss();_a();xa=t;return xa}var Ca;var ka;function Sa(){if(ka)return Ca;ka=1;Ca=Oa();return Ca}var Ta=Sa();var Ma=r(Ta);var Da={};var Ia;function Pa(){if(Ia)return Da;Ia=1;var t=Ve();var e=Pr();var i=Zr();var r=it();var o=$e();var n=oi();var s=J();var a=Rr();var h=he();var d=no();var l=Wi();var c=d("slice");var u=h("species");var v=Array;var f=Math.max;t({target:"Array",proto:true,forced:!c},{slice:function(t,h){var d=s(this);var c=n(d);var p=o(t,c);var g=o(h===void 0?c:h,c);var m,y,b;if(e(d)){m=d.constructor;if(i(m)&&(m===v||e(m.prototype)))m=void 0;else if(r(m)){m=m[u];m===null&&(m=void 0)}if(m===v||m===void 0)return l(d,p,g)}y=new(m===void 0?v:m)(f(g-p,0));for(b=0;p<g;p++,b++)p in d&&a(y,b,d[p]);y.length=b;return y}});return Da}var Ba;var Na;function za(){if(Na)return Ba;Na=1;Pa();var t=Zi();Ba=t("Array","slice");return Ba}var Fa;var Aa;function Ra(){if(Aa)return Fa;Aa=1;var t=ct();var e=za();var i=Array.prototype;Fa=function(r){var o=r.slice;return r===i||t(i,r)&&o===i.slice?e:o};return Fa}var ja;var La;function Ha(){if(La)return ja;La=1;var t=Ra();ja=t;return ja}var Wa;var Va;function Ua(){if(Va)return Wa;Va=1;Wa=Ha();return Wa}var qa=Ua();var Ya=r(qa);var Xa;var Ga;function Ka(){if(Ga)return Xa;Ga=1;var t=ht();var e=b();var i=To();var r=xi();var o=ze();var n=e([].concat);Xa=t("Reflect","ownKeys")||function(t){var e=i.f(o(t));var s=r.f;return s?n(e,s(t)):e};return Xa}var Za={};var Qa;function $a(){if(Qa)return Za;Qa=1;var t=Ve();var e=Pr();t({target:"Array",stat:true},{isArray:e});return Za}var Ja;var th;function eh(){if(th)return Ja;th=1;$a();var t=nt();Ja=t.Array.isArray;return Ja}var ih;var rh;function oh(){if(rh)return ih;rh=1;var t=eh();ih=t;return ih}var nh;var sh;function ah(){if(sh)return nh;sh=1;nh=oh();return nh}var hh=ah();var dh=r(hh);var lh={};var ch;function uh(){if(ch)return lh;ch=1;var t=Ve();var e=hn().map;var i=no();var r=i("map");t({target:"Array",proto:true,forced:!r},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}});return lh}var vh;var fh;function ph(){if(fh)return vh;fh=1;uh();var t=Zi();vh=t("Array","map");return vh}var gh;var mh;function yh(){if(mh)return gh;mh=1;var t=ct();var e=ph();var i=Array.prototype;gh=function(r){var o=r.map;return r===i||t(i,r)&&o===i.map?e:o};return gh}var bh;var wh;function _h(){if(wh)return bh;wh=1;var t=yh();bh=t;return bh}var xh;var Eh;function Oh(){if(Eh)return xh;Eh=1;xh=_h();return xh}var Ch=Oh();var kh=r(Ch);var Sh={};var Th;function Mh(){if(Th)return Sh;Th=1;var t=Ve();var e=Jt();var i=bi();var r=l();var o=r((function(){i(1)}));t({target:"Object",stat:true,forced:o},{keys:function(t){return i(e(t))}});return Sh}var Dh;var Ih;function Ph(){if(Ih)return Dh;Ih=1;Mh();var t=nt();Dh=t.Object.keys;return Dh}var Bh;var Nh;function zh(){if(Nh)return Bh;Nh=1;var t=Ph();Bh=t;return Bh}var Fh;var Ah;function Rh(){if(Ah)return Fh;Ah=1;Fh=zh();return Fh}var jh=Rh();var Lh=r(jh);var Hh={};var Wh;function Vh(){if(Wh)return Hh;Wh=1;var t=Ve();var e=b();var i=Date;var r=e(i.prototype.getTime);t({target:"Date",stat:true},{now:function(){return r(new i)}});return Hh}var Uh;var qh;function Yh(){if(qh)return Uh;qh=1;Vh();var t=nt();Uh=t.Date.now;return Uh}var Xh;var Gh;function Kh(){if(Gh)return Xh;Gh=1;var t=Yh();Xh=t;return Xh}var Zh;var Qh;function $h(){if(Qh)return Zh;Qh=1;Zh=Kh();return Zh}var Jh=$h();var td=r(Jh);var ed={};var id;var rd;function od(){if(rd)return id;rd=1;var t=l();id=function(e,i){var r=[][e];return!!r&&t((function(){r.call(null,i||function(){return 1},1)}))};return id}var nd;var sd;function ad(){if(sd)return nd;sd=1;var t=hn().forEach;var e=od();var i=e("forEach");nd=i?[].forEach:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)};return nd}var hd;function dd(){if(hd)return ed;hd=1;var t=Ve();var e=ad();t({target:"Array",proto:true,forced:[].forEach!==e},{forEach:e});return ed}var ld;var cd;function ud(){if(cd)return ld;cd=1;dd();var t=Zi();ld=t("Array","forEach");return ld}var vd;var fd;function pd(){if(fd)return vd;fd=1;var t=ud();vd=t;return vd}var gd;var md;function yd(){if(md)return gd;md=1;var t=Ur();var e=ie();var i=ct();var r=pd();var o=Array.prototype;var n={DOMTokenList:true,NodeList:true};gd=function(s){var a=s.forEach;return s===o||i(o,s)&&a===o.forEach||e(n,t(s))?r:a};return gd}var bd;var wd;function _d(){if(wd)return bd;wd=1;bd=yd();return bd}var xd=_d();var Ed=r(xd);var Od={};var Cd;function kd(){if(Cd)return Od;Cd=1;var t=Ve();var e=b();var i=Pr();var r=e([].reverse);var o=[1,2];t({target:"Array",proto:true,forced:String(o)===String(o.reverse())},{reverse:function(){i(this)&&(this.length=this.length);return r(this)}});return Od}var Sd;var Td;function Md(){if(Td)return Sd;Td=1;kd();var t=Zi();Sd=t("Array","reverse");return Sd}var Dd;var Id;function Pd(){if(Id)return Dd;Id=1;var t=ct();var e=Md();var i=Array.prototype;Dd=function(r){var o=r.reverse;return r===i||t(i,r)&&o===i.reverse?e:o};return Dd}var Bd;var Nd;function zd(){if(Nd)return Bd;Nd=1;var t=Pd();Bd=t;return Bd}var Fd;var Ad;function Rd(){if(Ad)return Fd;Ad=1;Fd=zd();return Fd}var jd=Rd();var Ld=r(jd);var Hd={};var Wd;var Vd;function Ud(){if(Vd)return Wd;Vd=1;var t=P();var e=Pr();var i=TypeError;var r=Object.getOwnPropertyDescriptor;var o=t&&!function(){if(this!==void 0)return true;try{Object.defineProperty([],"length",{writable:false}).length=1}catch(t){return t instanceof TypeError}}();Wd=o?function(t,o){if(e(t)&&!r(t,"length").writable)throw new i("Cannot set read only .length");return t.length=o}:function(t,e){return t.length=e};return Wd}var qd;var Yd;function Xd(){if(Yd)return qd;Yd=1;var t=Mt();var e=TypeError;qd=function(i,r){if(!delete i[r])throw new e("Cannot delete property "+t(r)+" of "+t(i))};return qd}var Gd;function Kd(){if(Gd)return Hd;Gd=1;var t=Ve();var e=Jt();var i=$e();var r=Ke();var o=oi();var n=Ud();var s=zr();var a=io();var h=Rr();var d=Xd();var l=no();var c=l("splice");var u=Math.max;var v=Math.min;t({target:"Array",proto:true,forced:!c},{splice:function(t,l){var c=e(this);var f=o(c);var p=i(t,f);var g=arguments.length;var m,y,b,w,_,x;if(g===0)m=y=0;else if(g===1){m=0;y=f-p}else{m=g-2;y=v(u(r(l),0),f-p)}s(f+m-y);b=a(c,y);for(w=0;w<y;w++){_=p+w;_ in c&&h(b,w,c[_])}b.length=y;if(m<y){for(w=p;w<f-y;w++){_=w+y;x=w+m;_ in c?c[x]=c[_]:d(c,x)}for(w=f;w>f-y+m;w--)d(c,w-1)}else if(m>y)for(w=f-y;w>p;w--){_=w+y-1;x=w+m-1;_ in c?c[x]=c[_]:d(c,x)}for(w=0;w<m;w++)c[w+p]=arguments[w+2];n(c,f-y+m);return b}});return Hd}var Zd;var Qd;function $d(){if(Qd)return Zd;Qd=1;Kd();var t=Zi();Zd=t("Array","splice");return Zd}var Jd;var tl;function el(){if(tl)return Jd;tl=1;var t=ct();var e=$d();var i=Array.prototype;Jd=function(r){var o=r.splice;return r===i||t(i,r)&&o===i.splice?e:o};return Jd}var il;var rl;function ol(){if(rl)return il;rl=1;var t=el();il=t;return il}var nl;var sl;function al(){if(sl)return nl;sl=1;nl=ol();return nl}var hl=al();var dl=r(hl);var ll={};var cl;function ul(){if(cl)return ll;cl=1;var t=Ve();var e=ai().includes;var i=l();var r=Is();var o=i((function(){return!Array(1).includes()}));t({target:"Array",proto:true,forced:o},{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}});r("includes");return ll}var vl;var fl;function pl(){if(fl)return vl;fl=1;ul();var t=Zi();vl=t("Array","includes");return vl}var gl={};var ml;var yl;function bl(){if(yl)return ml;yl=1;var t=it();var e=x();var i=he();var r=i("match");ml=function(i){var o;return t(i)&&((o=i[r])!==void 0?!!o:e(i)==="RegExp")};return ml}var wl;var _l;function xl(){if(_l)return wl;_l=1;var t=bl();var e=TypeError;wl=function(i){if(t(i))throw new e("The method doesn't accept regular expressions");return i};return wl}var El;var Ol;function Cl(){if(Ol)return El;Ol=1;var t=he();var e=t("match");El=function(t){var i=/./;try{"/./"[t](i)}catch(r){try{i[e]=false;return"/./"[t](i)}catch(t){}}return false};return El}var kl;function Sl(){if(kl)return gl;kl=1;var t=Ve();var e=b();var i=xl();var r=Z();var o=vo();var n=Cl();var s=e("".indexOf);t({target:"String",proto:true,forced:!n("includes")},{includes:function(t){return!!~s(o(r(this)),o(i(t)),arguments.length>1?arguments[1]:void 0)}});return gl}var Tl;var Ml;function Dl(){if(Ml)return Tl;Ml=1;Sl();var t=Zi();Tl=t("String","includes");return Tl}var Il;var Pl;function Bl(){if(Pl)return Il;Pl=1;var t=ct();var e=pl();var i=Dl();var r=Array.prototype;var o=String.prototype;Il=function(n){var s=n.includes;return n===r||t(r,n)&&s===r.includes?e:typeof n=="string"||n===o||t(o,n)&&s===o.includes?i:s};return Il}var Nl;var zl;function Fl(){if(zl)return Nl;zl=1;var t=Bl();Nl=t;return Nl}var Al;var Rl;function jl(){if(Rl)return Al;Rl=1;Al=Fl();return Al}var Ll=jl();var Hl=r(Ll);var Wl={};var Vl;function Ul(){if(Vl)return Wl;Vl=1;var t=Ve();var e=l();var i=Jt();var r=Vs();var o=Ls();var n=e((function(){r(1)}));t({target:"Object",stat:true,forced:n,sham:!o},{getPrototypeOf:function(t){return r(i(t))}});return Wl}var ql;var Yl;function Xl(){if(Yl)return ql;Yl=1;Ul();var t=nt();ql=t.Object.getPrototypeOf;return ql}var Gl;var Kl;function Zl(){if(Kl)return Gl;Kl=1;var t=Xl();Gl=t;return Gl}var Ql;var $l;function Jl(){if($l)return Ql;$l=1;Ql=Zl();return Ql}var tc=Jl();var ec=r(tc);var ic;var rc;function oc(){if(rc)return ic;rc=1;ao();var t=Zi();ic=t("Array","concat");return ic}var nc;var sc;function ac(){if(sc)return nc;sc=1;var t=ct();var e=oc();var i=Array.prototype;nc=function(r){var o=r.concat;return r===i||t(i,r)&&o===i.concat?e:o};return nc}var hc;var dc;function lc(){if(dc)return hc;dc=1;var t=ac();hc=t;return hc}var cc;var uc;function vc(){if(uc)return cc;uc=1;cc=lc();return cc}var fc=vc();var pc=r(fc);var gc={};var mc;function yc(){if(mc)return gc;mc=1;var t=Ve();var e=hn().filter;var i=no();var r=i("filter");t({target:"Array",proto:true,forced:!r},{filter:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}});return gc}var bc;var wc;function _c(){if(wc)return bc;wc=1;yc();var t=Zi();bc=t("Array","filter");return bc}var xc;var Ec;function Oc(){if(Ec)return xc;Ec=1;var t=ct();var e=_c();var i=Array.prototype;xc=function(r){var o=r.filter;return r===i||t(i,r)&&o===i.filter?e:o};return xc}var Cc;var kc;function Sc(){if(kc)return Cc;kc=1;var t=Oc();Cc=t;return Cc}var Tc;var Mc;function Dc(){if(Mc)return Tc;Mc=1;Tc=Sc();return Tc}var Ic=Dc();var Pc=r(Ic);var Bc={};var Nc;var zc;function Fc(){if(zc)return Nc;zc=1;var t=P();var e=l();var i=b();var r=Vs();var o=bi();var n=J();var s=R().f;var a=i(s);var h=i([].push);var d=t&&e((function(){var t=Object.create(null);t[2]=2;return!a(t,2)}));var c=function(e){return function(i){var s=n(i);var l=o(s);var c=d&&r(s)===null;var u=l.length;var v=0;var f=[];var p;while(u>v){p=l[v++];t&&!(c?p in s:a(s,p))||h(f,e?[p,s[p]]:s[p])}return f}};Nc={entries:c(true),values:c(false)};return Nc}var Ac;function Rc(){if(Ac)return Bc;Ac=1;var t=Ve();var e=Fc().values;t({target:"Object",stat:true},{values:function(t){return e(t)}});return Bc}var jc;var Lc;function Hc(){if(Lc)return jc;Lc=1;Rc();var t=nt();jc=t.Object.values;return jc}var Wc;var Vc;function Uc(){if(Vc)return Wc;Vc=1;var t=Hc();Wc=t;return Wc}var qc;var Yc;function Xc(){if(Yc)return qc;Yc=1;qc=Uc();return qc}var Gc=Xc();var Kc=r(Gc);var Zc={};var Qc;var $c;function Jc(){if($c)return Qc;$c=1;Qc="\t\n\v\f\r                　\u2028\u2029\ufeff";return Qc}var tu;var eu;function iu(){if(eu)return tu;eu=1;var t=b();var e=Z();var i=vo();var r=Jc();var o=t("".replace);var n=RegExp("^["+r+"]+");var s=RegExp("(^|[^"+r+"])["+r+"]+$");var a=function(t){return function(r){var a=i(e(r));t&1&&(a=o(a,n,""));t&2&&(a=o(a,s,"$1"));return a}};tu={start:a(1),end:a(2),trim:a(3)};return tu}var ru;var ou;function nu(){if(ou)return ru;ou=1;var t=a();var e=l();var i=b();var r=vo();var o=iu().trim;var n=Jc();var s=t.parseInt;var h=t.Symbol;var d=h&&h.iterator;var c=/^[+-]?0x/i;var u=i(c.exec);var v=s(n+"08")!==8||s(n+"0x16")!==22||d&&!e((function(){s(Object(d))}));ru=v?function(t,e){var i=o(r(t));return s(i,e>>>0||(u(c,i)?16:10))}:s;return ru}var su;function au(){if(su)return Zc;su=1;var t=Ve();var e=nu();t({global:true,forced:parseInt!==e},{parseInt:e});return Zc}var hu;var du;function lu(){if(du)return hu;du=1;au();var t=nt();hu=t.parseInt;return hu}var cu;var uu;function vu(){if(uu)return cu;uu=1;var t=lu();cu=t;return cu}var fu;var pu;function gu(){if(pu)return fu;pu=1;fu=vu();return fu}var mu=gu();var yu=r(mu);var bu={};var wu;function _u(){if(wu)return bu;wu=1;var t=Ve();var e=C();var i=ai().indexOf;var r=od();var o=e([].indexOf);var n=!!o&&1/o([1],1,-0)<0;var s=n||!r("indexOf");t({target:"Array",proto:true,forced:s},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return n?o(this,t,e)||0:i(this,t,e)}});return bu}var xu;var Eu;function Ou(){if(Eu)return xu;Eu=1;_u();var t=Zi();xu=t("Array","indexOf");return xu}var Cu;var ku;function Su(){if(ku)return Cu;ku=1;var t=ct();var e=Ou();var i=Array.prototype;Cu=function(r){var o=r.indexOf;return r===i||t(i,r)&&o===i.indexOf?e:o};return Cu}var Tu;var Mu;function Du(){if(Mu)return Tu;Mu=1;var t=Su();Tu=t;return Tu}var Iu;var Pu;function Bu(){if(Pu)return Iu;Pu=1;Iu=Du();return Iu}var Nu=Bu();var zu=r(Nu);var Fu={};var Au;function Ru(){if(Au)return Fu;Au=1;var t=Ve();var e=P();var i=Co();t({target:"Object",stat:true,sham:!e},{create:i});return Fu}var ju;var Lu;function Hu(){if(Lu)return ju;Lu=1;Ru();var t=nt();var e=t.Object;ju=function(t,i){return e.create(t,i)};return ju}var Wu;var Vu;function Uu(){if(Vu)return Wu;Vu=1;var t=Hu();Wu=t;return Wu}var qu;var Yu;function Xu(){if(Yu)return qu;Yu=1;qu=Uu();return qu}var Gu=Xu();var Ku=r(Gu);var Zu={};var Qu;var $u;function Ju(){if($u)return Qu;$u=1;var t=Ke();var e=vo();var i=Z();var r=RangeError;Qu=function(o){var n=e(i(this));var s="";var a=t(o);if(a<0||a===Infinity)throw new r("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(n+=n))a&1&&(s+=n);return s};return Qu}var tv;var ev;function iv(){if(ev)return tv;ev=1;var t=b();var e=ei();var i=vo();var r=Ju();var o=Z();var n=t(r);var s=t("".slice);var a=Math.ceil;var h=function(t){return function(r,h,d){var l=i(o(r));var c=e(h);var u=l.length;var v=d===void 0?" ":i(d);var f,p;if(c<=u||v==="")return l;f=c-u;p=n(v,a(f/v.length));p.length>f&&(p=s(p,0,f));return t?l+p:p+l}};tv={start:h(false),end:h(true)};return tv}var rv;var ov;function nv(){if(ov)return rv;ov=1;var t=b();var e=l();var i=iv().start;var r=RangeError;var o=isFinite;var n=Math.abs;var s=Date.prototype;var a=s.toISOString;var h=t(s.getTime);var d=t(s.getUTCDate);var c=t(s.getUTCFullYear);var u=t(s.getUTCHours);var v=t(s.getUTCMilliseconds);var f=t(s.getUTCMinutes);var p=t(s.getUTCMonth);var g=t(s.getUTCSeconds);rv=e((function(){return a.call(new Date(-50000000000001))!=="0385-07-25T07:06:39.999Z"}))||!e((function(){a.call(new Date(NaN))}))?function(){if(!o(h(this)))throw new r("Invalid time value");var t=this;var e=c(t);var s=v(t);var a=e<0?"-":e>9999?"+":"";return a+i(n(e),a?6:4,0)+"-"+i(p(t)+1,2,0)+"-"+i(d(t),2,0)+"T"+i(u(t),2,0)+":"+i(f(t),2,0)+":"+i(g(t),2,0)+"."+i(s,3,0)+"Z"}:a;return rv}var sv;function av(){if(sv)return Zu;sv=1;var t=Ve();var e=z();var i=Jt();var r=ce();var o=nv();var n=x();var s=l();var a=s((function(){return new Date(NaN).toJSON()!==null||e(Date.prototype.toJSON,{toISOString:function(){return 1}})!==1}));t({target:"Date",proto:true,forced:a},{toJSON:function(t){var s=i(this);var a=r(s,"number");return typeof a!="number"||isFinite(a)?"toISOString"in s||n(s)!=="Date"?s.toISOString():e(o,s):null}});return Zu}var hv;var dv;function lv(){if(dv)return hv;dv=1;av();Cn();var t=nt();var e=g();t.JSON||(t.JSON={stringify:JSON.stringify});hv=function(i,r,o){return e(t.JSON.stringify,null,arguments)};return hv}var cv;var uv;function vv(){if(uv)return cv;uv=1;var t=lv();cv=t;return cv}var fv;var pv;function gv(){if(pv)return fv;pv=1;fv=vv();return fv}var mv=gv();var yv=r(mv);var bv={};var wv={};var _v;var xv;function Ev(){if(xv)return _v;xv=1;var t=a();var e=ft();var i=x();var r=function(t){return e.slice(0,t.length)===t};_v=function(){return r("Bun/")?"BUN":r("Cloudflare-Workers")?"CLOUDFLARE":r("Deno/")?"DENO":r("Node.js/")?"NODE":t.Bun&&typeof Bun.version=="string"?"BUN":t.Deno&&typeof Deno.version=="object"?"DENO":i(t.process)==="process"?"NODE":t.window&&t.document?"BROWSER":"REST"}();return _v}var Ov;var Cv;function kv(){if(Cv)return Ov;Cv=1;var t=TypeError;Ov=function(e,i){if(e<i)throw new t("Not enough arguments");return e};return Ov}var Sv;var Tv;function Mv(){if(Tv)return Sv;Tv=1;var t=a();var e=g();var i=T();var r=Ev();var o=ft();var n=Wi();var s=kv();var h=t.Function;var d=/MSIE .\./.test(o)||r==="BUN"&&function(){var e=t.Bun.version.split(".");return e.length<3||e[0]==="0"&&(e[1]<3||e[1]==="3"&&e[2]==="0")}();Sv=function(t,r){var o=r?2:1;return d?function(a,d){var l=s(arguments.length,1)>o;var c=i(a)?a:h(a);var u=l?n(arguments,o):[];var v=l?function(){e(c,this,u)}:c;return r?t(v,d):t(v)}:t};return Sv}var Dv;function Iv(){if(Dv)return wv;Dv=1;var t=Ve();var e=a();var i=Mv();var r=i(e.setInterval,true);t({global:true,bind:true,forced:e.setInterval!==r},{setInterval:r});return wv}var Pv={};var Bv;function Nv(){if(Bv)return Pv;Bv=1;var t=Ve();var e=a();var i=Mv();var r=i(e.setTimeout,true);t({global:true,bind:true,forced:e.setTimeout!==r},{setTimeout:r});return Pv}var zv;function Fv(){if(zv)return bv;zv=1;Iv();Nv();return bv}var Av;var Rv;function jv(){if(Rv)return Av;Rv=1;Fv();var t=nt();Av=t.setTimeout;return Av}var Lv;var Hv;function Wv(){if(Hv)return Lv;Hv=1;Lv=jv();return Lv}var Vv=Wv();var Uv=r(Vv);var qv={};var Yv;var Xv;function Gv(){if(Xv)return Yv;Xv=1;var t=Jt();var e=$e();var i=oi();Yv=function(r){var o=t(this);var n=i(o);var s=arguments.length;var a=e(s>1?arguments[1]:void 0,n);var h=s>2?arguments[2]:void 0;var d=h===void 0?n:e(h,n);while(d>a)o[a++]=r;return o};return Yv}var Kv;function Zv(){if(Kv)return qv;Kv=1;var t=Ve();var e=Gv();var i=Is();t({target:"Array",proto:true},{fill:e});i("fill");return qv}var Qv;var $v;function Jv(){if($v)return Qv;$v=1;Zv();var t=Zi();Qv=t("Array","fill");return Qv}var tf;var ef;function rf(){if(ef)return tf;ef=1;var t=ct();var e=Jv();var i=Array.prototype;tf=function(r){var o=r.fill;return r===i||t(i,r)&&o===i.fill?e:o};return tf}var of;var nf;function sf(){if(nf)return of;nf=1;var t=rf();of=t;return of}var af;var hf;function df(){if(hf)return af;hf=1;af=sf();return af}var lf=df();var cf=r(lf);function uf(){uf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};return uf.apply(this,arguments)}function vf(t,e){t.prototype=Object.create(e.prototype);t.prototype.constructor=t;t.__proto__=e}function ff(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}
/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */var pf;pf=typeof Object.assign!=="function"?function(t){if(t===void 0||t===null)throw new TypeError("Cannot convert undefined or null to object");var e=Object(t);for(var i=1;i<arguments.length;i++){var r=arguments[i];if(r!==void 0&&r!==null)for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])}return e}:Object.assign;var gf=pf;var mf=["","webkit","Moz","MS","ms","o"];var yf=typeof document==="undefined"?{style:{}}:document.createElement("div");var bf="function";var wf=Math.round,_f=Math.abs;var xf=Date.now;
/**
 * @private
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */function Ef(t,e){var i;var r;var o=e[0].toUpperCase()+e.slice(1);var n=0;while(n<mf.length){i=mf[n];r=i?i+o:e;if(r in t)return r;n++}}var Of;Of=typeof window==="undefined"?{}:window;var Cf=Ef(yf.style,"touchAction");var kf=Cf!==void 0;function Sf(){if(!kf)return false;var t={};var e=Of.CSS&&Of.CSS.supports;["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return t[i]=!e||Of.CSS.supports("touch-action",i)}));return t}var Tf="compute";var Mf="auto";var Df="manipulation";var If="none";var Pf="pan-x";var Bf="pan-y";var Nf=Sf();var zf=/mobile|tablet|ip(ad|hone|od)|android/i;var Ff="ontouchstart"in Of;var Af=Ef(Of,"PointerEvent")!==void 0;var Rf=Ff&&zf.test(navigator.userAgent);var jf="touch";var Lf="pen";var Hf="mouse";var Wf="kinect";var Vf=25;var Uf=1;var qf=2;var Yf=4;var Xf=8;var Gf=1;var Kf=2;var Zf=4;var Qf=8;var $f=16;var Jf=Kf|Zf;var tp=Qf|$f;var ep=Jf|tp;var ip=["x","y"];var rp=["clientX","clientY"];
/**
 * @private
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */function op(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==void 0){r=0;while(r<t.length){e.call(i,t[r],r,t);r++}}else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}
/**
 * @private
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */function np(t,e){return typeof t===bf?t.apply(e&&e[0]||void 0,e):t}
/**
 * @private
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */function sp(t,e){return t.indexOf(e)>-1}
/**
 * @private
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */function ap(t){if(sp(t,If))return If;var e=sp(t,Pf);var i=sp(t,Bf);return e&&i?If:e||i?e?Pf:Bf:sp(t,Df)?Df:Mf}
/**
 * @private
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */var hp=function(){function t(t,e){this.manager=t;this.set(e)}
/**
   * @private
   * set the touchAction value on the element or enable the polyfill
   * @param {String} value
   */var e=t.prototype;e.set=function(t){t===Tf&&(t=this.compute());kf&&this.manager.element.style&&Nf[t]&&(this.manager.element.style[Cf]=t);this.actions=t.toLowerCase().trim()};e.update=function(){this.set(this.manager.options.touchAction)};
/**
   * @private
   * compute the value for the touchAction property based on the recognizer's settings
   * @returns {String} value
   */e.compute=function(){var t=[];op(this.manager.recognizers,(function(e){np(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}));return ap(t.join(" "))};
/**
   * @private
   * this method is called on each input cycle and provides the preventing of the browser behavior
   * @param {Object} input
   */e.preventDefaults=function(t){var e=t.srcEvent;var i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var r=this.actions;var o=sp(r,If)&&!Nf[If];var n=sp(r,Bf)&&!Nf[Bf];var s=sp(r,Pf)&&!Nf[Pf];if(o){var a=t.pointers.length===1;var h=t.distance<2;var d=t.deltaTime<250;if(a&&h&&d)return}if(!s||!n)return o||n&&i&Jf||s&&i&tp?this.preventSrc(e):void 0}};
/**
   * @private
   * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
   * @param {Object} srcEvent
   */e.preventSrc=function(t){this.manager.session.prevented=true;t.preventDefault()};return t}();
/**
 * @private
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */function dp(t,e){while(t){if(t===e)return true;t=t.parentNode}return false}
/**
 * @private
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */function lp(t){var e=t.length;if(e===1)return{x:wf(t[0].clientX),y:wf(t[0].clientY)};var i=0;var r=0;var o=0;while(o<e){i+=t[o].clientX;r+=t[o].clientY;o++}return{x:wf(i/e),y:wf(r/e)}}
/**
 * @private
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */function cp(t){var e=[];var i=0;while(i<t.pointers.length){e[i]={clientX:wf(t.pointers[i].clientX),clientY:wf(t.pointers[i].clientY)};i++}return{timeStamp:xf(),pointers:e,center:lp(e),deltaX:t.deltaX,deltaY:t.deltaY}}
/**
 * @private
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */function up(t,e,i){i||(i=ip);var r=e[i[0]]-t[i[0]];var o=e[i[1]]-t[i[1]];return Math.sqrt(r*r+o*o)}
/**
 * @private
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */function vp(t,e,i){i||(i=ip);var r=e[i[0]]-t[i[0]];var o=e[i[1]]-t[i[1]];return Math.atan2(o,r)*180/Math.PI}
/**
 * @private
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */function fp(t,e){return t===e?Gf:_f(t)>=_f(e)?t<0?Kf:Zf:e<0?Qf:$f}function pp(t,e){var i=e.center;var r=t.offsetDelta||{};var o=t.prevDelta||{};var n=t.prevInput||{};if(e.eventType===Uf||n.eventType===Yf){o=t.prevDelta={x:n.deltaX||0,y:n.deltaY||0};r=t.offsetDelta={x:i.x,y:i.y}}e.deltaX=o.x+(i.x-r.x);e.deltaY=o.y+(i.y-r.y)}
/**
 * @private
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */function gp(t,e,i){return{x:e/t||0,y:i/t||0}}
/**
 * @private
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */function mp(t,e){return up(e[0],e[1],rp)/up(t[0],t[1],rp)}
/**
 * @private
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */function yp(t,e){return vp(e[1],e[0],rp)+vp(t[1],t[0],rp)}
/**
 * @private
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */function bp(t,e){var i=t.lastInterval||e;var r=e.timeStamp-i.timeStamp;var o;var n;var s;var a;if(e.eventType!==Xf&&(r>Vf||i.velocity===void 0)){var h=e.deltaX-i.deltaX;var d=e.deltaY-i.deltaY;var l=gp(r,h,d);n=l.x;s=l.y;o=_f(l.x)>_f(l.y)?l.x:l.y;a=fp(h,d);t.lastInterval=e}else{o=i.velocity;n=i.velocityX;s=i.velocityY;a=i.direction}e.velocity=o;e.velocityX=n;e.velocityY=s;e.direction=a}
/**
* @private
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */function wp(t,e){var i=t.session;var r=e.pointers;var o=r.length;i.firstInput||(i.firstInput=cp(e));o>1&&!i.firstMultiple?i.firstMultiple=cp(e):o===1&&(i.firstMultiple=false);var n=i.firstInput,s=i.firstMultiple;var a=s?s.center:n.center;var h=e.center=lp(r);e.timeStamp=xf();e.deltaTime=e.timeStamp-n.timeStamp;e.angle=vp(a,h);e.distance=up(a,h);pp(i,e);e.offsetDirection=fp(e.deltaX,e.deltaY);var d=gp(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=d.x;e.overallVelocityY=d.y;e.overallVelocity=_f(d.x)>_f(d.y)?d.x:d.y;e.scale=s?mp(s.pointers,r):1;e.rotation=s?yp(s.pointers,r):0;e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length;bp(i,e);var l=t.element;var c=e.srcEvent;var u;u=c.composedPath?c.composedPath()[0]:c.path?c.path[0]:c.target;dp(u,l)&&(l=u);e.target=l}
/**
 * @private
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */function _p(t,e,i){var r=i.pointers.length;var o=i.changedPointers.length;var n=e&Uf&&r-o===0;var s=e&(Yf|Xf)&&r-o===0;i.isFirst=!!n;i.isFinal=!!s;n&&(t.session={});i.eventType=e;wp(t,i);t.emit("hammer.input",i);t.recognize(i);t.session.prevInput=i}
/**
 * @private
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */function xp(t){return t.trim().split(/\s+/g)}
/**
 * @private
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */function Ep(t,e,i){op(xp(e),(function(e){t.addEventListener(e,i,false)}))}
/**
 * @private
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */function Op(t,e,i){op(xp(e),(function(e){t.removeEventListener(e,i,false)}))}
/**
 * @private
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */function Cp(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}
/**
 * @private
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */var kp=function(){function t(t,e){var i=this;this.manager=t;this.callback=e;this.element=t.element;this.target=t.options.inputTarget;this.domHandler=function(e){np(t.options.enable,[t])&&i.handler(e)};this.init()}var e=t.prototype;e.handler=function(){};e.init=function(){this.evEl&&Ep(this.element,this.evEl,this.domHandler);this.evTarget&&Ep(this.target,this.evTarget,this.domHandler);this.evWin&&Ep(Cp(this.element),this.evWin,this.domHandler)};e.destroy=function(){this.evEl&&Op(this.element,this.evEl,this.domHandler);this.evTarget&&Op(this.target,this.evTarget,this.domHandler);this.evWin&&Op(Cp(this.element),this.evWin,this.domHandler)};return t}();
/**
 * @private
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */function Sp(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);var r=0;while(r<t.length){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}var Tp={pointerdown:Uf,pointermove:qf,pointerup:Yf,pointercancel:Xf,pointerout:Xf};var Mp={2:jf,3:Lf,4:Hf,5:Wf};var Dp="pointerdown";var Ip="pointermove pointerup pointercancel";if(Of.MSPointerEvent&&!Of.PointerEvent){Dp="MSPointerDown";Ip="MSPointerMove MSPointerUp MSPointerCancel"}var Pp=function(t){vf(e,t);function e(){var i;var r=e.prototype;r.evEl=Dp;r.evWin=Ip;i=t.apply(this,arguments)||this;i.store=i.manager.session.pointerEvents=[];return i}
/**
   * @private
   * handle mouse events
   * @param {Object} ev
   */var i=e.prototype;i.handler=function(t){var e=this.store;var i=false;var r=t.type.toLowerCase().replace("ms","");var o=Tp[r];var n=Mp[t.pointerType]||t.pointerType;var s=n===jf;var a=Sp(e,t.pointerId,"pointerId");if(o&Uf&&(t.button===0||s)){if(a<0){e.push(t);a=e.length-1}}else o&(Yf|Xf)&&(i=true);if(!(a<0)){e[a]=t;this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:n,srcEvent:t});i&&e.splice(a,1)}};return e}(kp);
/**
 * @private
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */function Bp(t){return Array.prototype.slice.call(t,0)}
/**
 * @private
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */function Np(t,e,i){var r=[];var o=[];var n=0;while(n<t.length){var s=e?t[n][e]:t[n];Sp(o,s)<0&&r.push(t[n]);o[n]=s;n++}i&&(r=e?r.sort((function(t,i){return t[e]>i[e]})):r.sort());return r}var zp={touchstart:Uf,touchmove:qf,touchend:Yf,touchcancel:Xf};var Fp="touchstart touchmove touchend touchcancel";var Ap=function(t){vf(e,t);function e(){var i;e.prototype.evTarget=Fp;i=t.apply(this,arguments)||this;i.targetIds={};return i}var i=e.prototype;i.handler=function(t){var e=zp[t.type];var i=Rp.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:jf,srcEvent:t})};return e}(kp);function Rp(t,e){var i=Bp(t.touches);var r=this.targetIds;if(e&(Uf|qf)&&i.length===1){r[i[0].identifier]=true;return[i,i]}var o;var n;var s=Bp(t.changedTouches);var a=[];var h=this.target;n=i.filter((function(t){return dp(t.target,h)}));if(e===Uf){o=0;while(o<n.length){r[n[o].identifier]=true;o++}}o=0;while(o<s.length){r[s[o].identifier]&&a.push(s[o]);e&(Yf|Xf)&&delete r[s[o].identifier];o++}if(a.length)return[Np(n.concat(a),"identifier",true),a]}var jp={mousedown:Uf,mousemove:qf,mouseup:Yf};var Lp="mousedown";var Hp="mousemove mouseup";var Wp=function(t){vf(e,t);function e(){var i;var r=e.prototype;r.evEl=Lp;r.evWin=Hp;i=t.apply(this,arguments)||this;i.pressed=false;return i}
/**
   * @private
   * handle mouse events
   * @param {Object} ev
   */var i=e.prototype;i.handler=function(t){var e=jp[t.type];e&Uf&&t.button===0&&(this.pressed=true);e&qf&&t.which!==1&&(e=Yf);if(this.pressed){e&Yf&&(this.pressed=false);this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Hf,srcEvent:t})}};return e}(kp);var Vp=2500;var Up=25;function qp(t){var e=t.changedPointers,i=e[0];if(i.identifier===this.primaryTouch){var r={x:i.clientX,y:i.clientY};var o=this.lastTouches;this.lastTouches.push(r);var n=function(){var t=o.indexOf(r);t>-1&&o.splice(t,1)};setTimeout(n,Vp)}}function Yp(t,e){if(t&Uf){this.primaryTouch=e.changedPointers[0].identifier;qp.call(this,e)}else t&(Yf|Xf)&&qp.call(this,e)}function Xp(t){var e=t.srcEvent.clientX;var i=t.srcEvent.clientY;for(var r=0;r<this.lastTouches.length;r++){var o=this.lastTouches[r];var n=Math.abs(e-o.x);var s=Math.abs(i-o.y);if(n<=Up&&s<=Up)return true}return false}var Gp=function(){var t=function(t){vf(e,t);function e(e,i){var r;r=t.call(this,e,i)||this;r.handler=function(t,e,i){var o=i.pointerType===jf;var n=i.pointerType===Hf;if(!(n&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(o)Yp.call(ff(ff(r)),e,i);else if(n&&Xp.call(ff(ff(r)),i))return;r.callback(t,e,i)}};r.touch=new Ap(r.manager,r.handler);r.mouse=new Wp(r.manager,r.handler);r.primaryTouch=null;r.lastTouches=[];return r}
/**
     * @private
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */var i=e.prototype;i.destroy=function(){this.touch.destroy();this.mouse.destroy()};return e}(kp);return t}();
/**
 * @private
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */function Kp(t){var e;var i=t.options.inputClass;e=i||(Af?Pp:Rf?Ap:Ff?Gp:Wp);return new e(t,_p)}
/**
 * @private
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */function Zp(t,e,i){if(Array.isArray(t)){op(t,i[e],i);return true}return false}var Qp=1;var $p=2;var Jp=4;var tg=8;var eg=tg;var ig=16;var rg=32;
/**
 * @private
 * get a unique id
 * @returns {number} uniqueId
 */var og=1;function ng(){return og++}
/**
 * @private
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */function sg(t,e){var i=e.manager;return i?i.get(t):t}
/**
 * @private
 * get a usable string, used as event postfix
 * @param {constant} state
 * @returns {String} state
 */function ag(t){return t&ig?"cancel":t&tg?"end":t&Jp?"move":t&$p?"start":""}
/**
 * @private
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */var hg=function(){function t(t){t===void 0&&(t={});this.options=uf({enable:true},t);this.id=ng();this.manager=null;this.state=Qp;this.simultaneous={};this.requireFail=[]}
/**
   * @private
   * set options
   * @param {Object} options
   * @return {Recognizer}
   */var e=t.prototype;e.set=function(t){gf(this.options,t);this.manager&&this.manager.touchAction.update();return this};
/**
   * @private
   * recognize simultaneous with an other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */e.recognizeWith=function(t){if(Zp(t,"recognizeWith",this))return this;var e=this.simultaneous;t=sg(t,this);if(!e[t.id]){e[t.id]=t;t.recognizeWith(this)}return this};
/**
   * @private
   * drop the simultaneous link. it doesnt remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */e.dropRecognizeWith=function(t){if(Zp(t,"dropRecognizeWith",this))return this;t=sg(t,this);delete this.simultaneous[t.id];return this};
/**
   * @private
   * recognizer can only run when an other is failing
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */e.requireFailure=function(t){if(Zp(t,"requireFailure",this))return this;var e=this.requireFail;t=sg(t,this);if(Sp(e,t)===-1){e.push(t);t.requireFailure(this)}return this};
/**
   * @private
   * drop the requireFailure link. it does not remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */e.dropRequireFailure=function(t){if(Zp(t,"dropRequireFailure",this))return this;t=sg(t,this);var e=Sp(this.requireFail,t);e>-1&&this.requireFail.splice(e,1);return this};
/**
   * @private
   * has require failures boolean
   * @returns {boolean}
   */e.hasRequireFailures=function(){return this.requireFail.length>0};
/**
   * @private
   * if the recognizer can recognize simultaneous with an other recognizer
   * @param {Recognizer} otherRecognizer
   * @returns {Boolean}
   */e.canRecognizeWith=function(t){return!!this.simultaneous[t.id]};
/**
   * @private
   * You should use `tryEmit` instead of `emit` directly to check
   * that all the needed recognizers has failed before emitting.
   * @param {Object} input
   */e.emit=function(t){var e=this;var i=this.state;function r(i){e.manager.emit(i,t)}i<tg&&r(e.options.event+ag(i));r(e.options.event);t.additionalEvent&&r(t.additionalEvent);i>=tg&&r(e.options.event+ag(i))};
/**
   * @private
   * Check that all the require failure recognizers has failed,
   * if true, it emits a gesture event,
   * otherwise, setup the state to FAILED.
   * @param {Object} input
   */e.tryEmit=function(t){if(this.canEmit())return this.emit(t);this.state=rg};
/**
   * @private
   * can we emit?
   * @returns {boolean}
   */e.canEmit=function(){var t=0;while(t<this.requireFail.length){if(!(this.requireFail[t].state&(rg|Qp)))return false;t++}return true};
/**
   * @private
   * update the recognizer
   * @param {Object} inputData
   */e.recognize=function(t){var e=gf({},t);if(np(this.options.enable,[this,e])){this.state&(eg|ig|rg)&&(this.state=Qp);this.state=this.process(e);this.state&($p|Jp|tg|ig)&&this.tryEmit(e)}else{this.reset();this.state=rg}};
/**
   * @private
   * return the state of the recognizer
   * the actual recognizing happens in this method
   * @virtual
   * @param {Object} inputData
   * @returns {constant} STATE
   */e.process=function(t){};
/**
   * @private
   * return the preferred touch-action
   * @virtual
   * @returns {Array}
   */e.getTouchAction=function(){};e.reset=function(){};return t}();var dg=function(t){vf(e,t);function e(e){var i;e===void 0&&(e={});i=t.call(this,uf({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},e))||this;i.pTime=false;i.pCenter=false;i._timer=null;i._input=null;i.count=0;return i}var i=e.prototype;i.getTouchAction=function(){return[Df]};i.process=function(t){var e=this;var i=this.options;var r=t.pointers.length===i.pointers;var o=t.distance<i.threshold;var n=t.deltaTime<i.time;this.reset();if(t.eventType&Uf&&this.count===0)return this.failTimeout();if(o&&n&&r){if(t.eventType!==Yf)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<i.interval;var a=!this.pCenter||up(this.pCenter,t.center)<i.posThreshold;this.pTime=t.timeStamp;this.pCenter=t.center;a&&s?this.count+=1:this.count=1;this._input=t;var h=this.count%i.taps;if(h===0){if(this.hasRequireFailures()){this._timer=setTimeout((function(){e.state=eg;e.tryEmit()}),i.interval);return $p}return eg}}return rg};i.failTimeout=function(){var t=this;this._timer=setTimeout((function(){t.state=rg}),this.options.interval);return rg};i.reset=function(){clearTimeout(this._timer)};i.emit=function(){if(this.state===eg){this._input.tapCount=this.count;this.manager.emit(this.options.event,this._input)}};return e}(hg);var lg=function(t){vf(e,t);function e(e){e===void 0&&(e={});return t.call(this,uf({pointers:1},e))||this}
/**
   * @private
   * Used to check if it the recognizer receives valid input, like input.distance > 10.
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {Boolean} recognized
   */var i=e.prototype;i.attrTest=function(t){var e=this.options.pointers;return e===0||t.pointers.length===e};
/**
   * @private
   * Process the input and return the state for the recognizer
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {*} State
   */i.process=function(t){var e=this.state;var i=t.eventType;var r=e&($p|Jp);var o=this.attrTest(t);return r&&(i&Xf||!o)?e|ig:r||o?i&Yf?e|tg:e&$p?e|Jp:$p:rg};return e}(hg);
/**
 * @private
 * direction cons to string
 * @param {constant} direction
 * @returns {String}
 */function cg(t){return t===$f?"down":t===Qf?"up":t===Kf?"left":t===Zf?"right":""}var ug=function(t){vf(e,t);function e(e){var i;e===void 0&&(e={});i=t.call(this,uf({event:"pan",threshold:10,pointers:1,direction:ep},e))||this;i.pX=null;i.pY=null;return i}var i=e.prototype;i.getTouchAction=function(){var t=this.options.direction;var e=[];t&Jf&&e.push(Bf);t&tp&&e.push(Pf);return e};i.directionTest=function(t){var e=this.options;var i=true;var r=t.distance;var o=t.direction;var n=t.deltaX;var s=t.deltaY;if(!(o&e.direction))if(e.direction&Jf){o=n===0?Gf:n<0?Kf:Zf;i=n!==this.pX;r=Math.abs(t.deltaX)}else{o=s===0?Gf:s<0?Qf:$f;i=s!==this.pY;r=Math.abs(t.deltaY)}t.direction=o;return i&&r>e.threshold&&o&e.direction};i.attrTest=function(t){return lg.prototype.attrTest.call(this,t)&&(this.state&$p||!(this.state&$p)&&this.directionTest(t))};i.emit=function(e){this.pX=e.deltaX;this.pY=e.deltaY;var i=cg(e.direction);i&&(e.additionalEvent=this.options.event+i);t.prototype.emit.call(this,e)};return e}(lg);var vg=function(t){vf(e,t);function e(e){e===void 0&&(e={});return t.call(this,uf({event:"swipe",threshold:10,velocity:.3,direction:Jf|tp,pointers:1},e))||this}var i=e.prototype;i.getTouchAction=function(){return ug.prototype.getTouchAction.call(this)};i.attrTest=function(e){var i=this.options.direction;var r;i&(Jf|tp)?r=e.overallVelocity:i&Jf?r=e.overallVelocityX:i&tp&&(r=e.overallVelocityY);return t.prototype.attrTest.call(this,e)&&i&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&_f(r)>this.options.velocity&&e.eventType&Yf};i.emit=function(t){var e=cg(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t);this.manager.emit(this.options.event,t)};return e}(lg);var fg=function(t){vf(e,t);function e(e){e===void 0&&(e={});return t.call(this,uf({event:"pinch",threshold:0,pointers:2},e))||this}var i=e.prototype;i.getTouchAction=function(){return[If]};i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||this.state&$p)};i.emit=function(e){if(e.scale!==1){var i=e.scale<1?"in":"out";e.additionalEvent=this.options.event+i}t.prototype.emit.call(this,e)};return e}(lg);var pg=function(t){vf(e,t);function e(e){e===void 0&&(e={});return t.call(this,uf({event:"rotate",threshold:0,pointers:2},e))||this}var i=e.prototype;i.getTouchAction=function(){return[If]};i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||this.state&$p)};return e}(lg);var gg=function(t){vf(e,t);function e(e){var i;e===void 0&&(e={});i=t.call(this,uf({event:"press",pointers:1,time:251,threshold:9},e))||this;i._timer=null;i._input=null;return i}var i=e.prototype;i.getTouchAction=function(){return[Mf]};i.process=function(t){var e=this;var i=this.options;var r=t.pointers.length===i.pointers;var o=t.distance<i.threshold;var n=t.deltaTime>i.time;this._input=t;if(!o||!r||t.eventType&(Yf|Xf)&&!n)this.reset();else if(t.eventType&Uf){this.reset();this._timer=setTimeout((function(){e.state=eg;e.tryEmit()}),i.time)}else if(t.eventType&Yf)return eg;return rg};i.reset=function(){clearTimeout(this._timer)};i.emit=function(t){if(this.state===eg)if(t&&t.eventType&Yf)this.manager.emit(this.options.event+"up",t);else{this._input.timeStamp=xf();this.manager.emit(this.options.event,this._input)}};return e}(hg);var mg={
/**
   * @private
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @type {Boolean}
   * @default false
   */
domEvents:false,
/**
   * @private
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @type {String}
   * @default compute
   */
touchAction:Tf,
/**
   * @private
   * @type {Boolean}
   * @default true
   */
enable:true,
/**
   * @private
   * EXPERIMENTAL FEATURE -- can be removed/changed
   * Change the parent input target element.
   * If Null, then it is being set the to main element.
   * @type {Null|EventTarget}
   * @default null
   */
inputTarget:null,
/**
   * @private
   * force an input class
   * @type {Null|Function}
   * @default null
   */
inputClass:null,cssProps:{
/**
     * @private
     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
userSelect:"none",
/**
     * @private
     * Disable the Windows Phone grippers when pressing an element.
     * @type {String}
     * @default 'none'
     */
touchSelect:"none",
/**
     * @private
     * Disables the default callout shown when you touch and hold a touch target.
     * On iOS, when you touch and hold a touch target such as a link, Safari displays
     * a callout containing information about the link. This property allows you to disable that callout.
     * @type {String}
     * @default 'none'
     */
touchCallout:"none",
/**
     * @private
     * Specifies whether zooming is enabled. Used by IE10>
     * @type {String}
     * @default 'none'
     */
contentZooming:"none",
/**
     * @private
     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
userDrag:"none",
/**
     * @private
     * Overrides the highlight color shown when the user taps a link or a JavaScript
     * clickable element in iOS. This property obeys the alpha value, if specified.
     * @type {String}
     * @default 'rgba(0,0,0,0)'
     */
tapHighlightColor:"rgba(0,0,0,0)"}};
/**
 * @private
 * Default recognizer setup when calling `Hammer()`
 * When creating a new Manager these will be skipped.
 * This is separated with other defaults because of tree-shaking.
 * @type {Array}
 */var yg=[[pg,{enable:false}],[fg,{enable:false},["rotate"]],[vg,{direction:Jf}],[ug,{direction:Jf},["swipe"]],[dg],[dg,{event:"doubletap",taps:2},["tap"]],[gg]];var bg=1;var wg=2;
/**
 * @private
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */function _g(t,e){var i=t.element;if(i.style){var r;op(t.options.cssProps,(function(o,n){r=Ef(i.style,n);if(e){t.oldCssProps[r]=i.style[r];i.style[r]=o}else i.style[r]=t.oldCssProps[r]||""}));e||(t.oldCssProps={})}}
/**
 * @private
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */function xg(t,e){var i=document.createEvent("Event");i.initEvent(t,true,true);i.gesture=e;e.target.dispatchEvent(i)}
/**
* @private
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */var Eg=function(){function t(t,e){var i=this;this.options=gf({},mg,e||{});this.options.inputTarget=this.options.inputTarget||t;this.handlers={};this.session={};this.recognizers=[];this.oldCssProps={};this.element=t;this.input=Kp(this);this.touchAction=new hp(this,this.options.touchAction);_g(this,true);op(this.options.recognizers,(function(t){var e=i.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]);t[3]&&e.requireFailure(t[3])}),this)}
/**
   * @private
   * set options
   * @param {Object} options
   * @returns {Manager}
   */var e=t.prototype;e.set=function(t){gf(this.options,t);t.touchAction&&this.touchAction.update();if(t.inputTarget){this.input.destroy();this.input.target=t.inputTarget;this.input.init()}return this};
/**
   * @private
   * stop recognizing for this session.
   * This session will be discarded, when a new [input]start event is fired.
   * When forced, the recognizer cycle is stopped immediately.
   * @param {Boolean} [force]
   */e.stop=function(t){this.session.stopped=t?wg:bg};
/**
   * @private
   * run the recognizers!
   * called by the inputHandler function on every movement of the pointers (touches)
   * it walks through all the recognizers and tries to detect the gesture that is being made
   * @param {Object} inputData
   */e.recognize=function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i;var r=this.recognizers;var o=e.curRecognizer;if(!o||o&&o.state&eg){e.curRecognizer=null;o=null}var n=0;while(n<r.length){i=r[n];e.stopped===wg||o&&i!==o&&!i.canRecognizeWith(o)?i.reset():i.recognize(t);if(!o&&i.state&($p|Jp|tg)){e.curRecognizer=i;o=i}n++}}};
/**
   * @private
   * get a recognizer by its event name.
   * @param {Recognizer|String} recognizer
   * @returns {Recognizer|Null}
   */e.get=function(t){if(t instanceof hg)return t;var e=this.recognizers;for(var i=0;i<e.length;i++)if(e[i].options.event===t)return e[i];return null};
/**
   * @private add a recognizer to the manager
   * existing recognizers with the same event name will be removed
   * @param {Recognizer} recognizer
   * @returns {Recognizer|Manager}
   */e.add=function(t){if(Zp(t,"add",this))return this;var e=this.get(t.options.event);e&&this.remove(e);this.recognizers.push(t);t.manager=this;this.touchAction.update();return t};
/**
   * @private
   * remove a recognizer by name or instance
   * @param {Recognizer|String} recognizer
   * @returns {Manager}
   */e.remove=function(t){if(Zp(t,"remove",this))return this;var e=this.get(t);if(t){var i=this.recognizers;var r=Sp(i,e);if(r!==-1){i.splice(r,1);this.touchAction.update()}}return this};
/**
   * @private
   * bind event
   * @param {String} events
   * @param {Function} handler
   * @returns {EventEmitter} this
   */e.on=function(t,e){if(t===void 0||e===void 0)return this;var i=this.handlers;op(xp(t),(function(t){i[t]=i[t]||[];i[t].push(e)}));return this};
/**
   * @private unbind event, leave emit blank to remove all handlers
   * @param {String} events
   * @param {Function} [handler]
   * @returns {EventEmitter} this
   */e.off=function(t,e){if(t===void 0)return this;var i=this.handlers;op(xp(t),(function(t){e?i[t]&&i[t].splice(Sp(i[t],e),1):delete i[t]}));return this};
/**
   * @private emit event to the listeners
   * @param {String} event
   * @param {Object} data
   */e.emit=function(t,e){this.options.domEvents&&xg(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t;e.preventDefault=function(){e.srcEvent.preventDefault()};var r=0;while(r<i.length){i[r](e);r++}}};e.destroy=function(){this.element&&_g(this,false);this.handlers={};this.session={};this.input.destroy();this.element=null};return t}();var Og={touchstart:Uf,touchmove:qf,touchend:Yf,touchcancel:Xf};var Cg="touchstart";var kg="touchstart touchmove touchend touchcancel";var Sg=function(t){vf(e,t);function e(){var i;var r=e.prototype;r.evTarget=Cg;r.evWin=kg;i=t.apply(this,arguments)||this;i.started=false;return i}var i=e.prototype;i.handler=function(t){var e=Og[t.type];e===Uf&&(this.started=true);if(this.started){var i=Tg.call(this,t,e);e&(Yf|Xf)&&i[0].length-i[1].length===0&&(this.started=false);this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:jf,srcEvent:t})}};return e}(kp);function Tg(t,e){var i=Bp(t.touches);var r=Bp(t.changedTouches);e&(Yf|Xf)&&(i=Np(i.concat(r),"identifier",true));return[i,r]}
/**
 * @private
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */function Mg(t,e,i){var r="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace");var i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace";var o=window.console&&(window.console.warn||window.console.log);o&&o.call(window.console,r,i);return t.apply(this,arguments)}}
/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */var Dg=Mg((function(t,e,i){var r=Object.keys(e);var o=0;while(o<r.length){(!i||i&&t[r[o]]===void 0)&&(t[r[o]]=e[r[o]]);o++}return t}),"extend","Use `assign`.");
/**
 * @private
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */var Ig=Mg((function(t,e){return Dg(t,e,true)}),"merge","Use `assign`.");
/**
 * @private
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */function Pg(t,e,i){var r=e.prototype;var o;o=t.prototype=Object.create(r);o.constructor=t;o._super=r;i&&gf(o,i)}
/**
 * @private
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */function Bg(t,e){return function(){return t.apply(e,arguments)}}
/**
 * @private
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */var Ng=function(){var t=function(t,e){e===void 0&&(e={});return new Eg(t,uf({recognizers:yg.concat()},e))};t.VERSION="2.0.17-rc";t.DIRECTION_ALL=ep;t.DIRECTION_DOWN=$f;t.DIRECTION_LEFT=Kf;t.DIRECTION_RIGHT=Zf;t.DIRECTION_UP=Qf;t.DIRECTION_HORIZONTAL=Jf;t.DIRECTION_VERTICAL=tp;t.DIRECTION_NONE=Gf;t.DIRECTION_DOWN=$f;t.INPUT_START=Uf;t.INPUT_MOVE=qf;t.INPUT_END=Yf;t.INPUT_CANCEL=Xf;t.STATE_POSSIBLE=Qp;t.STATE_BEGAN=$p;t.STATE_CHANGED=Jp;t.STATE_ENDED=tg;t.STATE_RECOGNIZED=eg;t.STATE_CANCELLED=ig;t.STATE_FAILED=rg;t.Manager=Eg;t.Input=kp;t.TouchAction=hp;t.TouchInput=Ap;t.MouseInput=Wp;t.PointerEventInput=Pp;t.TouchMouseInput=Gp;t.SingleTouchInput=Sg;t.Recognizer=hg;t.AttrRecognizer=lg;t.Tap=dg;t.Pan=ug;t.Swipe=vg;t.Pinch=fg;t.Rotate=pg;t.Press=gg;t.on=Ep;t.off=Op;t.each=op;t.merge=Ig;t.extend=Dg;t.bindFn=Bg;t.assign=gf;t.inherit=Pg;t.bindFn=Bg;t.prefixed=Ef;t.toArray=Bp;t.inArray=Sp;t.uniqueArray=Np;t.splitStr=xp;t.boolOrFn=np;t.hasParent=dp;t.addEventListeners=Ep;t.removeEventListeners=Op;t.defaults=gf({},mg,{preset:yg});return t}();Ng.defaults;Ma("DELETE");
/**
 * Create a seeded pseudo random generator based on Alea by Johannes Baagøe.
 * @param seed - All supplied arguments will be used as a seed. In case nothing
 * is supplied the current time will be used to seed the generator.
 * @returns A ready to use seeded generator.
 */function zg(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return Fg(e.length?e:[td()])}
/**
 * An implementation of [[Alea]] without user input validation.
 * @param seed - The data that will be used to seed the generator.
 * @returns A ready to use seeded generator.
 */function Fg(t){let[e,i,r]=Ag(t);let o=1;const n=()=>{const t=2091639*e+o*2.3283064365386963e-10;e=i;i=r;return r=t-(o=t|0)};n.uint32=()=>n()*4294967296;n.fract53=()=>n()+11102230246251565e-32*(n()*2097152|0);n.algorithm="Alea";n.seed=t;n.version="0.9";return n}
/**
 * Turn arbitrary data into values [[AleaImplementation]] can use to generate
 * random numbers.
 * @param seed - Arbitrary data that will be used as the seed.
 * @returns Three numbers to use as initial values for [[AleaImplementation]].
 */function Ag(){const t=Rg();let e=t(" ");let i=t(" ");let r=t(" ");for(let o=0;o<arguments.length;o++){e-=t(o<0||arguments.length<=o?void 0:arguments[o]);e<0&&(e+=1);i-=t(o<0||arguments.length<=o?void 0:arguments[o]);i<0&&(i+=1);r-=t(o<0||arguments.length<=o?void 0:arguments[o]);r<0&&(r+=1)}return[e,i,r]}
/**
 * Create a new mash function.
 * @returns A nonpure function that takes arbitrary [[Mashable]] data and turns
 * them into numbers.
 */function Rg(){let t=4022871197;return function(e){const i=e.toString();for(let e=0;e<i.length;e++){t+=i.charCodeAt(e);let r=.02519603282416938*t;t=r>>>0;r-=t;r*=t;t=r>>>0;r-=t;t+=r*4294967296}return 2.3283064365386963e-10*(t>>>0)}}
/**
 * Setup a mock hammer.js object, for unit testing.
 *
 * Inspiration: https://github.com/uber/deck.gl/pull/658
 * @returns {{on: noop, off: noop, destroy: noop, emit: noop, get: get}}
 */function jg(){const t=()=>{};return{on:t,off:t,destroy:t,emit:t,get(){return{set:t}}}}const Lg=typeof window!=="undefined"?window.Hammer||Ng:function(){return jg()};
/**
 * Turn an element into an clickToUse element.
 * When not active, the element has a transparent overlay. When the overlay is
 * clicked, the mode is changed to active.
 * When active, the element is displayed with a blue border around it, and
 * the interactive contents of the element can be used. When clicked outside
 * the element, the elements mode is changed to inactive.
 * @param {Element} container
 * @class Activator
 */function Hg(t){var e;this._cleanupQueue=[];this.active=false;this._dom={container:t,overlay:document.createElement("div")};this._dom.overlay.classList.add("vis-overlay");this._dom.container.appendChild(this._dom.overlay);this._cleanupQueue.push((()=>{this._dom.overlay.parentNode.removeChild(this._dom.overlay)}));const i=Lg(this._dom.overlay);i.on("tap",lr(e=this._onTapOverlay).call(e,this));this._cleanupQueue.push((()=>{i.destroy()}));const r=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"];Ed(r).call(r,(t=>{i.on(t,(t=>{t.srcEvent.stopPropagation()}))}));if(document&&document.body){this._onClick=e=>{Wg(e.target,t)||this.deactivate()};document.body.addEventListener("click",this._onClick);this._cleanupQueue.push((()=>{document.body.removeEventListener("click",this._onClick)}))}this._escListener=t=>{("key"in t?t.key==="Escape":t.keyCode===27)&&this.deactivate()}}Tr(Hg.prototype);Hg.current=null;Hg.prototype.destroy=function(){this.deactivate();for(const i of Ld(t=dl(e=this._cleanupQueue).call(e,0)).call(t)){var t,e;i()}};Hg.prototype.activate=function(){Hg.current&&Hg.current.deactivate();Hg.current=this;this.active=true;this._dom.overlay.style.display="none";this._dom.container.classList.add("vis-active");this.emit("change");this.emit("activate");document.body.addEventListener("keydown",this._escListener)};Hg.prototype.deactivate=function(){this.active=false;this._dom.overlay.style.display="block";this._dom.container.classList.remove("vis-active");document.body.removeEventListener("keydown",this._escListener);this.emit("change");this.emit("deactivate")};
/**
 * Handle a tap event: activate the container
 * @param {Event}  event   The event
 * @private
 */Hg.prototype._onTapOverlay=function(t){this.activate();t.srcEvent.stopPropagation()};
/**
 * Test whether the element has the requested parent element somewhere in
 * its chain of parent nodes.
 * @param {HTMLElement} element
 * @param {HTMLElement} parent
 * @returns {boolean} Returns true when the parent is found somewhere in the
 *                    chain of parent nodes.
 * @private
 */function Wg(t,e){while(t){if(t===e)return true;t=t.parentNode}return false}const Vg=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;const Ug=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;const qg=/^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i;const Yg=/^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;
/**
 * Remove everything in the DOM object.
 * @param DOMobject - Node whose child nodes will be recursively deleted.
 */function Xg(t){if(t)while(t.hasChildNodes()===true){const e=t.firstChild;if(e){Xg(e);t.removeChild(e)}}}
/**
 * Test whether given object is a string.
 * @param value - Input value of unknown type.
 * @returns True if string, false otherwise.
 */function Gg(t){return t instanceof String||typeof t==="string"}
/**
 * Test whether given object is a object (not primitive or null).
 * @param value - Input value of unknown type.
 * @returns True if not null object, false otherwise.
 */function Kg(t){return typeof t==="object"&&t!==null}
/**
 * Copy property from b to a if property present in a.
 * If property in b explicitly set to null, delete it if `allowDeletion` set.
 *
 * Internal helper routine, should not be exported. Not added to `exports` for that reason.
 * @param a - Target object.
 * @param b - Source object.
 * @param prop - Name of property to copy from b to a.
 * @param allowDeletion - If true, delete property in a if explicitly set to null in b.
 */function Zg(t,e,i,r){let o=false;r===true&&(o=e[i]===null&&t[i]!==void 0);o?delete t[i]:t[i]=e[i]}
/**
 * Fill an object with a possibly partially defined other object.
 *
 * Only copies values for the properties already present in a.
 * That means an object is not created on a property if only the b object has it.
 * @param a - The object that will have it's properties updated.
 * @param b - The object with property updates.
 * @param allowDeletion - If true, delete properties in a that are explicitly set to null in b.
 */function Qg(t,e){let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];for(const r in t)if(e[r]!==void 0)if(e[r]===null||typeof e[r]!=="object")Zg(t,e,r,i);else{const o=t[r];const n=e[r];Kg(o)&&Kg(n)&&Qg(o,n,i)}}
/**
 * Extend object a with selected properties of object b.
 * Only properties with defined values are copied.
 * @remarks
 * Previous version of this routine implied that multiple source objects could
 * be used; however, the implementation was **wrong**. Since multiple (\>1)
 * sources weren't used anywhere in the `vis.js` code, this has been removed
 * @param props - Names of first-level properties to copy over.
 * @param a - Target object.
 * @param b - Source object.
 * @param allowDeletion - If true, delete property in a if explicitly set to null in b.
 * @returns Argument a.
 */function $g(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(dh(i))throw new TypeError("Arrays are not supported by deepExtend");for(let o=0;o<t.length;o++){const n=t[o];if(Object.prototype.hasOwnProperty.call(i,n))if(i[n]&&i[n].constructor===Object){e[n]===void 0&&(e[n]={});e[n].constructor===Object?tm(e[n],i[n],false,r):Zg(e,i,n,r)}else{if(dh(i[n]))throw new TypeError("Arrays are not supported by deepExtend");Zg(e,i,n,r)}}return e}
/**
 * Extend object `a` with properties of object `b`, ignoring properties which
 * are explicitly specified to be excluded.
 * @remarks
 * The properties of `b` are considered for copying. Properties which are
 * themselves objects are are also extended. Only properties with defined
 * values are copied.
 * @param propsToExclude - Names of properties which should *not* be copied.
 * @param a - Object to extend.
 * @param b - Object to take properties from for extension.
 * @param allowDeletion - If true, delete properties in a that are explicitly
 * set to null in b.
 * @returns Argument a.
 */function Jg(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(dh(i))throw new TypeError("Arrays are not supported by deepExtend");for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)&&!Hl(t).call(t,o))if(i[o]&&i[o].constructor===Object){e[o]===void 0&&(e[o]={});e[o].constructor===Object?tm(e[o],i[o]):Zg(e,i,o,r)}else if(dh(i[o])){e[o]=[];for(let t=0;t<i[o].length;t++)e[o].push(i[o][t])}else Zg(e,i,o,r);return e}
/**
 * Deep extend an object a with the properties of object b.
 * @param a - Target object.
 * @param b - Source object.
 * @param protoExtend - If true, the prototype values will also be extended.
 * (That is the options objects that inherit from others will also get the
 * inherited options).
 * @param allowDeletion - If true, the values of fields that are null will be deleted.
 * @returns Argument a.
 */function tm(t,e){let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];let r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)||i===true)if(typeof e[n]==="object"&&e[n]!==null&&ec(e[n])===Object.prototype)t[n]===void 0?t[n]=tm({},e[n],i):typeof t[n]==="object"&&t[n]!==null&&ec(t[n])===Object.prototype?tm(t[n],e[n],i):Zg(t,e,n,r);else if(dh(e[n])){var o;t[n]=Ya(o=e[n]).call(o)}else Zg(t,e,n,r);return t}
/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 * @param arr - First part.
 * @param newValue - The value to be aadded into the array.
 * @returns A new array with all items from arr and newValue (which is last).
 */function em(t,e){return[...t,e]}
/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 * @param arr - The array to be copied.
 * @returns Shallow copy of arr.
 */function im(t){return Ya(t).call(t)}
/**
 * Retrieve the absolute left value of a DOM element.
 * @param elem - A dom element, for example a div.
 * @returns The absolute left position of this element in the browser page.
 */function rm(t){return t.getBoundingClientRect().left}
/**
 * Retrieve the absolute top value of a DOM element.
 * @param elem - A dom element, for example a div.
 * @returns The absolute top position of this element in the browser page.
 */function om(t){return t.getBoundingClientRect().top}
/**
 * For each method for both arrays and objects.
 * In case of an array, the built-in Array.forEach() is applied (**No, it's not!**).
 * In case of an Object, the method loops over all properties of the object.
 * @param object - An Object or Array to be iterated over.
 * @param callback - Array.forEach-like callback.
 */function nm(t,e){if(dh(t)){const i=t.length;for(let r=0;r<i;r++)e(t[r],r,t)}else for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e(t[i],i,t)}
/**
 * Convert hex color string into RGB color object.
 * @remarks
 * {@link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb}
 * @param hex - Hex color string (3 or 6 digits, with or without #).
 * @returns RGB color object.
 */function sm(t){let e;switch(t.length){case 3:case 4:e=Ug.exec(t);return e?{r:yu(e[1]+e[1],16),g:yu(e[2]+e[2],16),b:yu(e[3]+e[3],16)}:null;case 6:case 7:e=Vg.exec(t);return e?{r:yu(e[1],16),g:yu(e[2],16),b:yu(e[3],16)}:null;default:return null}}
/**
 * This function takes string color in hex or RGB format and adds the opacity, RGBA is passed through unchanged.
 * @param color - The color string (hex, RGB, RGBA).
 * @param opacity - The new opacity.
 * @returns RGBA string, for example 'rgba(255, 0, 127, 0.3)'.
 */function am(t,e){if(Hl(t).call(t,"rgba"))return t;if(Hl(t).call(t,"rgb")){const i=t.substr(zu(t).call(t,"(")+1).replace(")","").split(",");return"rgba("+i[0]+","+i[1]+","+i[2]+","+e+")"}{const i=sm(t);return i==null?t:"rgba("+i.r+","+i.g+","+i.b+","+e+")"}}
/**
 * Convert RGB \<0, 255\> into hex color string.
 * @param red - Red channel.
 * @param green - Green channel.
 * @param blue - Blue channel.
 * @returns Hex color string (for example: '#0acdc0').
 */function hm(t,e,i){var r;return"#"+Ya(r=((1<<24)+(t<<16)+(e<<8)+i).toString(16)).call(r,1)}
/**
 * Parse a color property into an object with border, background, and highlight colors.
 * @param inputColor - Shorthand color string or input color object.
 * @param defaultColor - Full color object to fill in missing values in inputColor.
 * @returns Color object.
 */function dm(t,e){if(Gg(t)){let e=t;if(pm(e)){var i;const t=kh(i=e.substr(4).substr(0,e.length-5).split(",")).call(i,(function(t){return yu(t)}));e=hm(t[0],t[1],t[2])}if(fm(e)===true){const t=vm(e);const i={h:t.h,s:t.s*.8,v:Math.min(1,t.v*1.02)};const r={h:t.h,s:Math.min(1,t.s*1.25),v:t.v*.8};const o=um(r.h,r.s,r.v);const n=um(i.h,i.s,i.v);return{background:e,border:o,highlight:{background:n,border:o},hover:{background:n,border:o}}}return{background:e,border:e,highlight:{background:e,border:e},hover:{background:e,border:e}}}{const e={background:t.background||void 0,border:t.border||void 0,highlight:Gg(t.highlight)?{border:t.highlight,background:t.highlight}:{background:t.highlight&&t.highlight.background||void 0,border:t.highlight&&t.highlight.border||void 0},hover:Gg(t.hover)?{border:t.hover,background:t.hover}:{border:t.hover&&t.hover.border||void 0,background:t.hover&&t.hover.background||void 0}};return e}}
/**
 * Convert RGB \<0, 255\> into HSV object.
 * @remarks
 * {@link http://www.javascripter.net/faq/rgb2hsv.htm}
 * @param red - Red channel.
 * @param green - Green channel.
 * @param blue - Blue channel.
 * @returns HSV color object.
 */function lm(t,e,i){t/=255;e/=255;i/=255;const r=Math.min(t,Math.min(e,i));const o=Math.max(t,Math.max(e,i));if(r===o)return{h:0,s:0,v:r};const n=t===r?e-i:i===r?t-e:i-t;const s=t===r?3:i===r?1:5;const a=60*(s-n/(o-r))/360;const h=(o-r)/o;const d=o;return{h:a,s:h,v:d}}
/**
 * Convert HSV \<0, 1\> into RGB color object.
 * @remarks
 * {@link https://gist.github.com/mjijackson/5311256}
 * @param h - Hue.
 * @param s - Saturation.
 * @param v - Value.
 * @returns RGB color object.
 */function cm(t,e,i){let r;let o;let n;const s=Math.floor(t*6);const a=t*6-s;const h=i*(1-e);const d=i*(1-a*e);const l=i*(1-(1-a)*e);switch(s%6){case 0:r=i,o=l,n=h;break;case 1:r=d,o=i,n=h;break;case 2:r=h,o=i,n=l;break;case 3:r=h,o=d,n=i;break;case 4:r=l,o=h,n=i;break;case 5:r=i,o=h,n=d;break}return{r:Math.floor(r*255),g:Math.floor(o*255),b:Math.floor(n*255)}}
/**
 * Convert HSV \<0, 1\> into hex color string.
 * @param h - Hue.
 * @param s - Saturation.
 * @param v - Value.
 * @returns Hex color string.
 */function um(t,e,i){const r=cm(t,e,i);return hm(r.r,r.g,r.b)}
/**
 * Convert hex color string into HSV \<0, 1\>.
 * @param hex - Hex color string.
 * @returns HSV color object.
 */function vm(t){const e=sm(t);if(!e)throw new TypeError("'".concat(t,"' is not a valid color."));return lm(e.r,e.g,e.b)}
/**
 * Validate hex color string.
 * @param hex - Unknown string that may contain a color.
 * @returns True if the string is valid, false otherwise.
 */function fm(t){const e=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);return e}
/**
 * Validate RGB color string.
 * @param rgb - Unknown string that may contain a color.
 * @returns True if the string is valid, false otherwise.
 */function pm(t){return qg.test(t)}
/**
 * Validate RGBA color string.
 * @param rgba - Unknown string that may contain a color.
 * @returns True if the string is valid, false otherwise.
 */function gm(t){return Yg.test(t)}
/**
 * This recursively redirects the prototype of JSON objects to the referenceObject.
 * This is used for default options.
 * @param referenceObject - The original object.
 * @returns The Element if the referenceObject is an Element, or a new object inheriting from the referenceObject.
 */function mm(t){if(t===null||typeof t!=="object")return null;if(t instanceof Element)return t;const e=Ku(t);for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&typeof t[i]=="object"&&(e[i]=mm(t[i]));return e}
/**
 * This is used to set the options of subobjects in the options object.
 *
 * A requirement of these subobjects is that they have an 'enabled' element
 * which is optional for the user but mandatory for the program.
 *
 * The added value here of the merge is that option 'enabled' is set as required.
 * @param mergeTarget - Either this.options or the options used for the groups.
 * @param options - Options.
 * @param option - Option key in the options argument.
 * @param globalOptions - Global options, passed in to determine value of option 'enabled'.
 */function ym(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=function(t){return t!==null&&t!==void 0};const n=function(t){return t!==null&&typeof t==="object"};const s=function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return false;return true};if(!n(t))throw new Error("Parameter mergeTarget must be an object");if(!n(e))throw new Error("Parameter options must be an object");if(!o(i))throw new Error("Parameter option must have a value");if(!n(r))throw new Error("Parameter globalOptions must be an object");const a=function(t,e,i){n(t[i])||(t[i]={});const r=e[i];const o=t[i];for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&(o[t]=r[t])};const h=e[i];const d=n(r)&&!s(r);const l=d?r[i]:void 0;const c=l?l.enabled:void 0;if(h===void 0)return;if(typeof h==="boolean"){n(t[i])||(t[i]={});t[i].enabled=h;return}if(h===null&&!n(t[i])){if(!o(l))return;t[i]=Ku(l)}if(!n(h))return;let u=true;h.enabled!==void 0?u=h.enabled:c!==void 0&&(u=l.enabled);a(t,e,i);t[i].enabled=u}const bm={
/**
   * Provides no easing and no acceleration.
   * @param t - Time.
   * @returns Value at time t.
   */
linear(t){return t},
/**
   * Accelerate from zero velocity.
   * @param t - Time.
   * @returns Value at time t.
   */
easeInQuad(t){return t*t},
/**
   * Decelerate to zero velocity.
   * @param t - Time.
   * @returns Value at time t.
   */
easeOutQuad(t){return t*(2-t)},
/**
   * Accelerate until halfway, then decelerate.
   * @param t - Time.
   * @returns Value at time t.
   */
easeInOutQuad(t){return t<.5?2*t*t:(4-2*t)*t-1},
/**
   * Accelerate from zero velocity.
   * @param t - Time.
   * @returns Value at time t.
   */
easeInCubic(t){return t*t*t},
/**
   * Decelerate to zero velocity.
   * @param t - Time.
   * @returns Value at time t.
   */
easeOutCubic(t){return--t*t*t+1},
/**
   * Accelerate until halfway, then decelerate.
   * @param t - Time.
   * @returns Value at time t.
   */
easeInOutCubic(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},
/**
   * Accelerate from zero velocity.
   * @param t - Time.
   * @returns Value at time t.
   */
easeInQuart(t){return t*t*t*t},
/**
   * Decelerate to zero velocity.
   * @param t - Time.
   * @returns Value at time t.
   */
easeOutQuart(t){return 1- --t*t*t*t},
/**
   * Accelerate until halfway, then decelerate.
   * @param t - Time.
   * @returns Value at time t.
   */
easeInOutQuart(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},
/**
   * Accelerate from zero velocity.
   * @param t - Time.
   * @returns Value at time t.
   */
easeInQuint(t){return t*t*t*t*t},
/**
   * Decelerate to zero velocity.
   * @param t - Time.
   * @returns Value at time t.
   */
easeOutQuint(t){return 1+--t*t*t*t*t},
/**
   * Accelerate until halfway, then decelerate.
   * @param t - Time.
   * @returns Value at time t.
   */
easeInOutQuint(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};
/**
 * Get the top most property value from a pile of objects.
 * @param pile - Array of objects, no required format.
 * @param accessors - Array of property names.
 * For example `object['foo']['bar']` → `['foo', 'bar']`.
 * @returns Value of the property with given accessors path from the first pile item where it's not undefined.
 */function wm(t,e){let i;dh(e)||(e=[e]);for(const r of t)if(r){i=r[e[0]];for(let t=1;t<e.length;t++)i&&(i=i[e[t]]);if(typeof i!=="undefined")break}return i}const _m={black:"#000000",navy:"#000080",darkblue:"#00008B",mediumblue:"#0000CD",blue:"#0000FF",darkgreen:"#006400",green:"#008000",teal:"#008080",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",lime:"#00FF00",springgreen:"#00FF7F",aqua:"#00FFFF",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",mediumaquamarine:"#66CDAA",dimgray:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",lightslategray:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",maroon:"#800000",purple:"#800080",olive:"#808000",gray:"#808080",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370D8",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",silver:"#C0C0C0",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgrey:"#D3D3D3",palevioletred:"#D87093",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",yellow:"#FFFF00",lightyellow:"#FFFFE0",ivory:"#FFFFF0",white:"#FFFFFF"};
/**
 * @param {number} [pixelRatio=1]
 */let xm=class ColorPicker{
/**
   * @param {number} [pixelRatio]
   */
constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;this.pixelRatio=t;this.generated=false;this.centerCoordinates={x:144.5,y:144.5};this.r=289*.49;this.color={r:255,g:255,b:255,a:1};this.hueCircle=void 0;this.initialColor={r:255,g:255,b:255,a:1};this.previousColor=void 0;this.applied=false;this.updateCallback=()=>{};this.closeCallback=()=>{};this._create()}
/**
   * this inserts the colorPicker into a div from the DOM
   * @param {Element} container
   */insertTo(t){if(this.hammer!==void 0){this.hammer.destroy();this.hammer=void 0}this.container=t;this.container.appendChild(this.frame);this._bindHammer();this._setSize()}
/**
   * the callback is executed on apply and save. Bind it to the application
   * @param {Function} callback
   */setUpdateCallback(t){if(typeof t!=="function")throw new Error("Function attempted to set as colorPicker update callback is not a function.");this.updateCallback=t}
/**
   * the callback is executed on apply and save. Bind it to the application
   * @param {Function} callback
   */setCloseCallback(t){if(typeof t!=="function")throw new Error("Function attempted to set as colorPicker closing callback is not a function.");this.closeCallback=t}
/**
   *
   * @param {string} color
   * @returns {string}
   * @private
   */_isColorString(t){if(typeof t==="string")return _m[t]}
/**
   * Set the color of the colorPicker
   * Supported formats:
   * 'red'                   --> HTML color string
   * '#ffffff'               --> hex string
   * 'rgb(255,255,255)'      --> rgb string
   * 'rgba(255,255,255,1.0)' --> rgba string
   * {r:255,g:255,b:255}     --> rgb object
   * {r:255,g:255,b:255,a:1.0} --> rgba object
   * @param {string | object} color
   * @param {boolean} [setInitial]
   */setColor(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];if(t==="none")return;let i;const r=this._isColorString(t);r!==void 0&&(t=r);if(Gg(t)===true){if(pm(t)===true){const e=t.substr(4).substr(0,t.length-5).split(",");i={r:e[0],g:e[1],b:e[2],a:1}}else if(gm(t)===true){const e=t.substr(5).substr(0,t.length-6).split(",");i={r:e[0],g:e[1],b:e[2],a:e[3]}}else if(fm(t)===true){const e=sm(t);i={r:e.r,g:e.g,b:e.b,a:1}}}else if(t instanceof Object&&t.r!==void 0&&t.g!==void 0&&t.b!==void 0){const e=t.a!==void 0?t.a:"1.0";i={r:t.r,g:t.g,b:t.b,a:e}}if(i===void 0)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+yv(t));this._setColor(i,e)}show(){if(this.closeCallback!==void 0){this.closeCallback();this.closeCallback=void 0}this.applied=false;this.frame.style.display="block";this._generateHueCircle()}
/**
   * Hide the picker. Is called by the cancel button.
   * Optional boolean to store the previous color for easy access later on.
   * @param {boolean} [storePrevious]
   * @private
   */
_hide(){let t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];t===true&&(this.previousColor=Ri({},this.color));this.applied===true&&this.updateCallback(this.initialColor);this.frame.style.display="none";Uv((()=>{if(this.closeCallback!==void 0){this.closeCallback();this.closeCallback=void 0}}),0)}_save(){this.updateCallback(this.color);this.applied=false;this._hide()}_apply(){this.applied=true;this.updateCallback(this.color);this._updatePicker(this.color)}_loadLast(){this.previousColor!==void 0?this.setColor(this.previousColor,false):alert("There is no last color to load...")}
/**
   * set the color, place the picker
   * @param {object} rgba
   * @param {boolean} [setInitial]
   * @private
   */_setColor(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];e===true&&(this.initialColor=Ri({},t));this.color=t;const i=lm(t.r,t.g,t.b);const r=2*Math.PI;const o=this.r*i.s;const n=this.centerCoordinates.x+o*Math.sin(r*i.h);const s=this.centerCoordinates.y+o*Math.cos(r*i.h);this.colorPickerSelector.style.left=n-.5*this.colorPickerSelector.clientWidth+"px";this.colorPickerSelector.style.top=s-.5*this.colorPickerSelector.clientHeight+"px";this._updatePicker(t)}
/**
   * bound to opacity control
   * @param {number} value
   * @private
   */_setOpacity(t){this.color.a=t/100;this._updatePicker(this.color)}
/**
   * bound to brightness control
   * @param {number} value
   * @private
   */_setBrightness(t){const e=lm(this.color.r,this.color.g,this.color.b);e.v=t/100;const i=cm(e.h,e.s,e.v);i.a=this.color.a;this.color=i;this._updatePicker()}
/**
   * update the color picker. A black circle overlays the hue circle to mimic the brightness decreasing.
   * @param {object} rgba
   * @private
   */_updatePicker(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.color;const e=lm(t.r,t.g,t.b);const i=this.colorPickerCanvas.getContext("2d");this.pixelRation===void 0&&(this.pixelRatio=(window.devicePixelRatio||1)/(i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1));i.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);const r=this.colorPickerCanvas.clientWidth;const o=this.colorPickerCanvas.clientHeight;i.clearRect(0,0,r,o);i.putImageData(this.hueCircle,0,0);i.fillStyle="rgba(0,0,0,"+(1-e.v)+")";i.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r);cf(i).call(i);this.brightnessRange.value=100*e.v;this.opacityRange.value=100*t.a;this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")";this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}_setSize(){this.colorPickerCanvas.style.width="100%";this.colorPickerCanvas.style.height="100%";this.colorPickerCanvas.width=289*this.pixelRatio;this.colorPickerCanvas.height=289*this.pixelRatio}_create(){var t,e,i,r;this.frame=document.createElement("div");this.frame.className="vis-color-picker";this.colorPickerDiv=document.createElement("div");this.colorPickerSelector=document.createElement("div");this.colorPickerSelector.className="vis-selector";this.colorPickerDiv.appendChild(this.colorPickerSelector);this.colorPickerCanvas=document.createElement("canvas");this.colorPickerDiv.appendChild(this.colorPickerCanvas);if(this.colorPickerCanvas.getContext){const t=this.colorPickerCanvas.getContext("2d");this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1);this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{const t=document.createElement("DIV");t.style.color="red";t.style.fontWeight="bold";t.style.padding="10px";t.innerText="Error: your browser does not support HTML canvas";this.colorPickerCanvas.appendChild(t)}this.colorPickerDiv.className="vis-color";this.opacityDiv=document.createElement("div");this.opacityDiv.className="vis-opacity";this.brightnessDiv=document.createElement("div");this.brightnessDiv.className="vis-brightness";this.arrowDiv=document.createElement("div");this.arrowDiv.className="vis-arrow";this.opacityRange=document.createElement("input");try{this.opacityRange.type="range";this.opacityRange.min="0";this.opacityRange.max="100"}catch(t){}this.opacityRange.value="100";this.opacityRange.className="vis-range";this.brightnessRange=document.createElement("input");try{this.brightnessRange.type="range";this.brightnessRange.min="0";this.brightnessRange.max="100"}catch(t){}this.brightnessRange.value="100";this.brightnessRange.className="vis-range";this.opacityDiv.appendChild(this.opacityRange);this.brightnessDiv.appendChild(this.brightnessRange);const o=this;this.opacityRange.onchange=function(){o._setOpacity(this.value)};this.opacityRange.oninput=function(){o._setOpacity(this.value)};this.brightnessRange.onchange=function(){o._setBrightness(this.value)};this.brightnessRange.oninput=function(){o._setBrightness(this.value)};this.brightnessLabel=document.createElement("div");this.brightnessLabel.className="vis-label vis-brightness";this.brightnessLabel.innerText="brightness:";this.opacityLabel=document.createElement("div");this.opacityLabel.className="vis-label vis-opacity";this.opacityLabel.innerText="opacity:";this.newColorDiv=document.createElement("div");this.newColorDiv.className="vis-new-color";this.newColorDiv.innerText="new";this.initialColorDiv=document.createElement("div");this.initialColorDiv.className="vis-initial-color";this.initialColorDiv.innerText="initial";this.cancelButton=document.createElement("div");this.cancelButton.className="vis-button vis-cancel";this.cancelButton.innerText="cancel";this.cancelButton.onclick=lr(t=this._hide).call(t,this,false);this.applyButton=document.createElement("div");this.applyButton.className="vis-button vis-apply";this.applyButton.innerText="apply";this.applyButton.onclick=lr(e=this._apply).call(e,this);this.saveButton=document.createElement("div");this.saveButton.className="vis-button vis-save";this.saveButton.innerText="save";this.saveButton.onclick=lr(i=this._save).call(i,this);this.loadButton=document.createElement("div");this.loadButton.className="vis-button vis-load";this.loadButton.innerText="load last";this.loadButton.onclick=lr(r=this._loadLast).call(r,this);this.frame.appendChild(this.colorPickerDiv);this.frame.appendChild(this.arrowDiv);this.frame.appendChild(this.brightnessLabel);this.frame.appendChild(this.brightnessDiv);this.frame.appendChild(this.opacityLabel);this.frame.appendChild(this.opacityDiv);this.frame.appendChild(this.newColorDiv);this.frame.appendChild(this.initialColorDiv);this.frame.appendChild(this.cancelButton);this.frame.appendChild(this.applyButton);this.frame.appendChild(this.saveButton);this.frame.appendChild(this.loadButton)}_bindHammer(){this.drag={};this.pinch={};this.hammer=new Lg(this.colorPickerCanvas);this.hammer.get("pinch").set({enable:true});this.hammer.on("hammer.input",(t=>{t.isFirst&&this._moveSelector(t)}));this.hammer.on("tap",(t=>{this._moveSelector(t)}));this.hammer.on("panstart",(t=>{this._moveSelector(t)}));this.hammer.on("panmove",(t=>{this._moveSelector(t)}));this.hammer.on("panend",(t=>{this._moveSelector(t)}))}_generateHueCircle(){if(this.generated===false){const t=this.colorPickerCanvas.getContext("2d");this.pixelRation===void 0&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1));t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);const e=this.colorPickerCanvas.clientWidth;const i=this.colorPickerCanvas.clientHeight;t.clearRect(0,0,e,i);let r,o,n,s;this.centerCoordinates={x:e*.5,y:i*.5};this.r=.49*e;const a=2*Math.PI/360;const h=1/360;const d=1/this.r;let l;for(n=0;n<360;n++)for(s=0;s<this.r;s++){r=this.centerCoordinates.x+s*Math.sin(a*n);o=this.centerCoordinates.y+s*Math.cos(a*n);l=cm(n*h,s*d,1);t.fillStyle="rgb("+l.r+","+l.g+","+l.b+")";t.fillRect(r-.5,o-.5,2,2)}t.strokeStyle="rgba(0,0,0,1)";t.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r);t.stroke();this.hueCircle=t.getImageData(0,0,e,i)}this.generated=true}
/**
   * move the selector. This is called by hammer functions.
   * @param {Event}  event   The event
   * @private
   */_moveSelector(t){const e=this.colorPickerDiv.getBoundingClientRect();const i=t.center.x-e.left;const r=t.center.y-e.top;const o=.5*this.colorPickerDiv.clientHeight;const n=.5*this.colorPickerDiv.clientWidth;const s=i-n;const a=r-o;const h=Math.atan2(s,a);const d=.98*Math.min(Math.sqrt(s*s+a*a),n);const l=Math.cos(h)*d+o;const c=Math.sin(h)*d+n;this.colorPickerSelector.style.top=l-.5*this.colorPickerSelector.clientHeight+"px";this.colorPickerSelector.style.left=c-.5*this.colorPickerSelector.clientWidth+"px";let u=h/(2*Math.PI);u=u<0?u+1:u;const v=d/this.r;const f=lm(this.color.r,this.color.g,this.color.b);f.h=u;f.s=v;const p=cm(f.h,f.s,f.v);p.a=this.color.a;this.color=p;this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")";this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}};
/**
 * Wrap given text (last argument) in HTML elements (all preceding arguments).
 * @param {...any} rest - List of tag names followed by inner text.
 * @returns An element or a text node.
 */function Em(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];if(e.length<1)throw new TypeError("Invalid arguments.");if(e.length===1)return document.createTextNode(e[0]);{const t=document.createElement(e[0]);t.appendChild(Em(...Ya(e).call(e,1)));return t}}let Om=class Configurator{
/**
   * @param {object} parentModule        | the location where parentModule.setOptions() can be called
   * @param {object} defaultContainer    | the default container of the module
   * @param {object} configureOptions    | the fully configured and predefined options set found in allOptions.js
   * @param {number} pixelRatio          | canvas pixel ratio
   * @param {Function} hideOption        | custom logic to dynamically hide options
   */
constructor(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:()=>false;this.parent=t;this.changedOptions=[];this.container=e;this.allowCreation=false;this.hideOption=o;this.options={};this.initialized=false;this.popupCounter=0;this.defaultOptions={enabled:false,filter:true,container:void 0,showButton:true};Ri(this.options,this.defaultOptions);this.configureOptions=i;this.moduleOptions={};this.domElements=[];this.popupDiv={};this.popupLimit=5;this.popupHistory={};this.colorPicker=new xm(r);this.wrapper=void 0}
/**
   * refresh all options.
   * Because all modules parse their options by themselves, we just use their options. We copy them here.
   * @param {object} options
   */setOptions(t){if(t!==void 0){this.popupHistory={};this._removePopup();let e=true;if(typeof t==="string")this.options.filter=t;else if(dh(t))this.options.filter=t.join();else if(typeof t==="object"){if(t==null)throw new TypeError("options cannot be null");t.container!==void 0&&(this.options.container=t.container);Pc(t)!==void 0&&(this.options.filter=Pc(t));t.showButton!==void 0&&(this.options.showButton=t.showButton);t.enabled!==void 0&&(e=t.enabled)}else if(typeof t==="boolean"){this.options.filter=true;e=t}else if(typeof t==="function"){this.options.filter=t;e=true}Pc(this.options)===false&&(e=false);this.options.enabled=e}this._clean()}
/**
   *
   * @param {object} moduleOptions
   */setModuleOptions(t){this.moduleOptions=t;if(this.options.enabled===true){this._clean();this.options.container!==void 0&&(this.container=this.options.container);this._create()}}_create(){this._clean();this.changedOptions=[];const t=Pc(this.options);let e=0;let i=false;for(const r in this.configureOptions)if(Object.prototype.hasOwnProperty.call(this.configureOptions,r)){this.allowCreation=false;i=false;if(typeof t==="function"){i=t(r,[]);i=i||this._handleObject(this.configureOptions[r],[r],true)}else t!==true&&zu(t).call(t,r)===-1||(i=true);if(i!==false){this.allowCreation=true;e>0&&this._makeItem([]);this._makeHeader(r);this._handleObject(this.configureOptions[r],[r])}e++}this._makeButton();this._push()}_push(){this.wrapper=document.createElement("div");this.wrapper.className="vis-configuration-wrapper";this.container.appendChild(this.wrapper);for(let t=0;t<this.domElements.length;t++)this.wrapper.appendChild(this.domElements[t]);this._showPopupIfNeeded()}_clean(){for(let t=0;t<this.domElements.length;t++)this.wrapper.removeChild(this.domElements[t]);if(this.wrapper!==void 0){this.container.removeChild(this.wrapper);this.wrapper=void 0}this.domElements=[];this._removePopup()}
/**
   * get the value from the actualOptions if it exists
   * @param {Array} path    | where to look for the actual option
   * @returns {*}
   * @private
   */_getValue(t){let e=this.moduleOptions;for(let i=0;i<t.length;i++){if(e[t[i]]===void 0){e=void 0;break}e=e[t[i]]}return e}
/**
   * all option elements are wrapped in an item
   * @param {Array} path    | where to look for the actual option
   * @param {Array.<Element>} domElements
   * @returns {number}
   * @private
   */_makeItem(t){if(this.allowCreation===true){const o=document.createElement("div");o.className="vis-configuration vis-config-item vis-config-s"+t.length;for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];Ed(i).call(i,(t=>{o.appendChild(t)}));this.domElements.push(o);return this.domElements.length}return 0}
/**
   * header for major subjects
   * @param {string} name
   * @private
   */_makeHeader(t){const e=document.createElement("div");e.className="vis-configuration vis-config-header";e.innerText=t;this._makeItem([],e)}
/**
   * make a label, if it is an object label, it gets different styling.
   * @param {string} name
   * @param {Array} path    | where to look for the actual option
   * @param {string} objectLabel
   * @returns {HTMLElement}
   * @private
   */_makeLabel(t,e){let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];const r=document.createElement("div");r.className="vis-configuration vis-config-label vis-config-s"+e.length;if(i===true){while(r.firstChild)r.removeChild(r.firstChild);r.appendChild(Em("i","b",t))}else r.innerText=t+":";return r}
/**
   * make a dropdown list for multiple possible string optoins
   * @param {Array.<number>} arr
   * @param {number} value
   * @param {Array} path    | where to look for the actual option
   * @private
   */_makeDropdown(t,e,i){const r=document.createElement("select");r.className="vis-configuration vis-config-select";let o=0;e!==void 0&&zu(t).call(t,e)!==-1&&(o=zu(t).call(t,e));for(let e=0;e<t.length;e++){const i=document.createElement("option");i.value=t[e];e===o&&(i.selected="selected");i.innerText=t[e];r.appendChild(i)}const n=this;r.onchange=function(){n._update(this.value,i)};const s=this._makeLabel(i[i.length-1],i);this._makeItem(i,s,r)}
/**
   * make a range object for numeric options
   * @param {Array.<number>} arr
   * @param {number} value
   * @param {Array} path    | where to look for the actual option
   * @private
   */_makeRange(t,e,i){const r=t[0];const o=t[1];const n=t[2];const s=t[3];const a=document.createElement("input");a.className="vis-configuration vis-config-range";try{a.type="range";a.min=o;a.max=n}catch(t){}a.step=s;let h="";let d=0;if(e!==void 0){const t=1.2;if(e<0&&e*t<o){a.min=Math.ceil(e*t);d=a.min;h="range increased"}else if(e/t<o){a.min=Math.ceil(e/t);d=a.min;h="range increased"}if(e*t>n&&n!==1){a.max=Math.ceil(e*t);d=a.max;h="range increased"}a.value=e}else a.value=r;const l=document.createElement("input");l.className="vis-configuration vis-config-rangeinput";l.value=a.value;const c=this;a.onchange=function(){l.value=this.value;c._update(Number(this.value),i)};a.oninput=function(){l.value=this.value};const u=this._makeLabel(i[i.length-1],i);const v=this._makeItem(i,u,a,l);if(h!==""&&this.popupHistory[v]!==d){this.popupHistory[v]=d;this._setupPopup(h,v)}}_makeButton(){if(this.options.showButton===true){const t=document.createElement("div");t.className="vis-configuration vis-config-button";t.innerText="generate options";t.onclick=()=>{this._printOptions()};t.onmouseover=()=>{t.className="vis-configuration vis-config-button hover"};t.onmouseout=()=>{t.className="vis-configuration vis-config-button"};this.optionsContainer=document.createElement("div");this.optionsContainer.className="vis-configuration vis-config-option-container";this.domElements.push(this.optionsContainer);this.domElements.push(t)}}
/**
   * prepare the popup
   * @param {string} string
   * @param {number} index
   * @private
   */_setupPopup(t,e){if(this.initialized===true&&this.allowCreation===true&&this.popupCounter<this.popupLimit){const i=document.createElement("div");i.id="vis-configuration-popup";i.className="vis-configuration-popup";i.innerText=t;i.onclick=()=>{this._removePopup()};this.popupCounter+=1;this.popupDiv={html:i,index:e}}}_removePopup(){if(this.popupDiv.html!==void 0){this.popupDiv.html.parentNode.removeChild(this.popupDiv.html);clearTimeout(this.popupDiv.hideTimeout);clearTimeout(this.popupDiv.deleteTimeout);this.popupDiv={}}}_showPopupIfNeeded(){if(this.popupDiv.html!==void 0){const t=this.domElements[this.popupDiv.index];const e=t.getBoundingClientRect();this.popupDiv.html.style.left=e.left+"px";this.popupDiv.html.style.top=e.top-30+"px";document.body.appendChild(this.popupDiv.html);this.popupDiv.hideTimeout=Uv((()=>{this.popupDiv.html.style.opacity=0}),1500);this.popupDiv.deleteTimeout=Uv((()=>{this._removePopup()}),1800)}}
/**
   * make a checkbox for boolean options.
   * @param {number} defaultValue
   * @param {number} value
   * @param {Array} path    | where to look for the actual option
   * @private
   */_makeCheckbox(t,e,i){const r=document.createElement("input");r.type="checkbox";r.className="vis-configuration vis-config-checkbox";r.checked=t;if(e!==void 0){r.checked=e;e!==t&&(typeof t==="object"?e!==t.enabled&&this.changedOptions.push({path:i,value:e}):this.changedOptions.push({path:i,value:e}))}const o=this;r.onchange=function(){o._update(this.checked,i)};const n=this._makeLabel(i[i.length-1],i);this._makeItem(i,n,r)}
/**
   * make a text input field for string options.
   * @param {number} defaultValue
   * @param {number} value
   * @param {Array} path    | where to look for the actual option
   * @private
   */_makeTextInput(t,e,i){const r=document.createElement("input");r.type="text";r.className="vis-configuration vis-config-text";r.value=e;e!==t&&this.changedOptions.push({path:i,value:e});const o=this;r.onchange=function(){o._update(this.value,i)};const n=this._makeLabel(i[i.length-1],i);this._makeItem(i,n,r)}
/**
   * make a color field with a color picker for color fields
   * @param {Array.<number>} arr
   * @param {number} value
   * @param {Array} path    | where to look for the actual option
   * @private
   */_makeColorField(t,e,i){const r=t[1];const o=document.createElement("div");e=e===void 0?r:e;if(e!=="none"){o.className="vis-configuration vis-config-colorBlock";o.style.backgroundColor=e}else o.className="vis-configuration vis-config-colorBlock none";e=e===void 0?r:e;o.onclick=()=>{this._showColorPicker(e,o,i)};const n=this._makeLabel(i[i.length-1],i);this._makeItem(i,n,o)}
/**
   * used by the color buttons to call the color picker.
   * @param {number} value
   * @param {HTMLElement} div
   * @param {Array} path    | where to look for the actual option
   * @private
   */_showColorPicker(t,e,i){e.onclick=function(){};this.colorPicker.insertTo(e);this.colorPicker.show();this.colorPicker.setColor(t);this.colorPicker.setUpdateCallback((t=>{const r="rgba("+t.r+","+t.g+","+t.b+","+t.a+")";e.style.backgroundColor=r;this._update(r,i)}));this.colorPicker.setCloseCallback((()=>{e.onclick=()=>{this._showColorPicker(t,e,i)}}))}
/**
   * parse an object and draw the correct items
   * @param {object} obj
   * @param {Array} [path]    | where to look for the actual option
   * @param {boolean} [checkOnly]
   * @returns {boolean}
   * @private
   */_handleObject(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];let r=false;const o=Pc(this.options);let n=false;for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){r=true;const a=t[s];const h=em(e,s);if(typeof o==="function"){r=o(s,e);if(r===false&&!dh(a)&&typeof a!=="string"&&typeof a!=="boolean"&&a instanceof Object){this.allowCreation=false;r=this._handleObject(a,h,true);this.allowCreation=i===false}}if(r!==false){n=true;const t=this._getValue(h);if(dh(a))this._handleArray(a,t,h);else if(typeof a==="string")this._makeTextInput(a,t,h);else if(typeof a==="boolean")this._makeCheckbox(a,t,h);else if(a instanceof Object){if(!this.hideOption(e,s,this.moduleOptions))if(a.enabled!==void 0){const t=em(h,"enabled");const e=this._getValue(t);if(e===true){const t=this._makeLabel(s,h,true);this._makeItem(h,t);n=this._handleObject(a,h)||n}else this._makeCheckbox(a,e,h)}else{const t=this._makeLabel(s,h,true);this._makeItem(h,t);n=this._handleObject(a,h)||n}}else console.error("dont know how to handle",a,s,h)}}return n}
/**
   * handle the array type of option
   * @param {Array.<number>} arr
   * @param {number} value
   * @param {Array} path    | where to look for the actual option
   * @private
   */_handleArray(t,e,i){if(typeof t[0]==="string"&&t[0]==="color"){this._makeColorField(t,e,i);t[1]!==e&&this.changedOptions.push({path:i,value:e})}else if(typeof t[0]==="string"){this._makeDropdown(t,e,i);t[0]!==e&&this.changedOptions.push({path:i,value:e})}else if(typeof t[0]==="number"){this._makeRange(t,e,i);t[0]!==e&&this.changedOptions.push({path:i,value:Number(e)})}}
/**
   * called to update the network with the new settings.
   * @param {number} value
   * @param {Array} path    | where to look for the actual option
   * @private
   */_update(t,e){const i=this._constructOptions(t,e);this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",i);this.initialized=true;this.parent.setOptions(i)}
/**
   *
   * @param {string | boolean} value
   * @param {Array.<string>} path
   * @param {{}} optionsObj
   * @returns {{}}
   * @private
   */_constructOptions(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};let r=i;t=t==="true"||t;t=t!=="false"&&t;for(let i=0;i<e.length;i++)if(e[i]!=="global"){r[e[i]]===void 0&&(r[e[i]]={});i!==e.length-1?r=r[e[i]]:r[e[i]]=t}return i}_printOptions(){const t=this.getOptions();while(this.optionsContainer.firstChild)this.optionsContainer.removeChild(this.optionsContainer.firstChild);this.optionsContainer.appendChild(Em("pre","const options = "+yv(t,null,2)))}
/**
   *
   * @returns {{}} options
   */getOptions(){const t={};for(let e=0;e<this.changedOptions.length;e++)this._constructOptions(this.changedOptions[e].value,this.changedOptions[e].path,t);return t}};let Cm=class Popup{
/**
   * @param {Element} container       The container object.
   * @param {string}  overflowMethod  How the popup should act to overflowing ('flip' or 'cap')
   */
constructor(t,e){this.container=t;this.overflowMethod=e||"cap";this.x=0;this.y=0;this.padding=5;this.hidden=false;this.frame=document.createElement("div");this.frame.className="vis-tooltip";this.container.appendChild(this.frame)}
/**
   * @param {number} x   Horizontal position of the popup window
   * @param {number} y   Vertical position of the popup window
   */setPosition(t,e){this.x=yu(t);this.y=yu(e)}
/**
   * Set the content for the popup window. This can be HTML code or text.
   * @param {string | Element} content
   */setText(t){if(t instanceof Element){while(this.frame.firstChild)this.frame.removeChild(this.frame.firstChild);this.frame.appendChild(t)}else this.frame.innerText=t}
/**
   * Show the popup window
   * @param {boolean} [doShow]    Show or hide the window
   */show(t){t===void 0&&(t=true);if(t===true){const t=this.frame.clientHeight;const e=this.frame.clientWidth;const i=this.frame.parentNode.clientHeight;const r=this.frame.parentNode.clientWidth;let o=0,n=0;if(this.overflowMethod=="flip"){let i=false,s=true;this.y-t<this.padding&&(s=false);this.x+e>r-this.padding&&(i=true);o=i?this.x-e:this.x;n=s?this.y-t:this.y}else{n=this.y-t;n+t+this.padding>i&&(n=i-t-this.padding);n<this.padding&&(n=this.padding);o=this.x;o+e+this.padding>r&&(o=r-e-this.padding);o<this.padding&&(o=this.padding)}this.frame.style.left=o+"px";this.frame.style.top=n+"px";this.frame.style.visibility="visible";this.hidden=false}else this.hide()}hide(){this.hidden=true;this.frame.style.left="0";this.frame.style.top="0";this.frame.style.visibility="hidden"}destroy(){this.frame.parentNode.removeChild(this.frame)}};let km=false;let Sm;const Tm="background: #FFeeee; color: #dd0000";let Mm=class Validator{
/**
   * Main function to be called
   * @param {object} options
   * @param {object} referenceOptions
   * @param {object} subObject
   * @returns {boolean}
   * @static
   */
static validate(t,e,i){km=false;Sm=e;let r=e;i!==void 0&&(r=e[i]);Validator.parse(t,r,[]);return km}
/**
   * Will traverse an object recursively and check every value
   * @param {object} options
   * @param {object} referenceOptions
   * @param {Array} path    | where to look for the actual option
   * @static
   */static parse(t,e,i){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&Validator.check(r,t,e,i)}
/**
   * Check every value. If the value is an object, call the parse function on that object.
   * @param {string} option
   * @param {object} options
   * @param {object} referenceOptions
   * @param {Array} path    | where to look for the actual option
   * @static
   */static check(t,e,i,r){if(i[t]===void 0&&i.__any__===void 0){Validator.getSuggestion(t,i,r);return}let o=t;let n=true;if(i[t]===void 0&&i.__any__!==void 0){o="__any__";n=Validator.getType(e[t])==="object"}let s=i[o];n&&s.__type__!==void 0&&(s=s.__type__);Validator.checkFields(t,e,i,o,s,r)}
/**
   *
   * @param {string}  option           | the option property
   * @param {object}  options          | The supplied options object
   * @param {object}  referenceOptions | The reference options containing all options and their allowed formats
   * @param {string}  referenceOption  | Usually this is the same as option, except when handling an __any__ tag.
   * @param {string}  refOptionObj     | This is the type object from the reference options
   * @param {Array}   path             | where in the object is the option
   * @static
   */static checkFields(t,e,i,r,o,n){const s=function(e){console.error("%c"+e+Validator.printLocation(n,t),Tm)};const a=Validator.getType(e[t]);const h=o[a];if(h!==void 0){if(Validator.getType(h)==="array"&&zu(h).call(h,e[t])===-1){s('Invalid option detected in "'+t+'". Allowed values are:'+Validator.print(h)+' not "'+e[t]+'". ');km=true}else if(a==="object"&&r!=="__any__"){n=em(n,t);Validator.parse(e[t],i[r],n)}}else if(o.any===void 0){s('Invalid type received for "'+t+'". Expected: '+Validator.print(Lh(o))+". Received ["+a+'] "'+e[t]+'"');km=true}}
/**
   *
   * @param {object | boolean | number | string | Array.<number> | Date | Node | Moment | undefined | null} object
   * @returns {string}
   * @static
   */static getType(t){const e=typeof t;return e==="object"?t===null?"null":t instanceof Boolean?"boolean":t instanceof Number?"number":t instanceof String?"string":dh(t)?"array":t instanceof Date?"date":t.nodeType!==void 0?"dom":t._isAMomentObject===true?"moment":"object":e==="number"?"number":e==="boolean"?"boolean":e==="string"?"string":e===void 0?"undefined":e}
/**
   * @param {string} option
   * @param {object} options
   * @param {Array.<string>} path
   * @static
   */static getSuggestion(t,e,i){const r=Validator.findInOptions(t,e,i,false);const o=Validator.findInOptions(t,Sm,[],true);const n=8;const s=4;let a;a=r.indexMatch!==void 0?" in "+Validator.printLocation(r.path,t,"")+'Perhaps it was incomplete? Did you mean: "'+r.indexMatch+'"?\n\n':o.distance<=s&&r.distance>o.distance?" in "+Validator.printLocation(r.path,t,"")+"Perhaps it was misplaced? Matching option found at: "+Validator.printLocation(o.path,o.closestMatch,""):r.distance<=n?'. Did you mean "'+r.closestMatch+'"?'+Validator.printLocation(r.path,t):". Did you mean one of these: "+Validator.print(Lh(e))+Validator.printLocation(i,t);console.error('%cUnknown option detected: "'+t+'"'+a,Tm);km=true}
/**
   * traverse the options in search for a match.
   * @param {string} option
   * @param {object} options
   * @param {Array} path    | where to look for the actual option
   * @param {boolean} [recursive]
   * @returns {{closestMatch: string, path: Array, distance: number}}
   * @static
   */static findInOptions(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];let o=1e9;let n="";let s=[];const a=t.toLowerCase();let h;for(const l in e){let c;if(e[l].__type__!==void 0&&r===true){const r=Validator.findInOptions(t,e[l],em(i,l));if(o>r.distance){n=r.closestMatch;s=r.path;o=r.distance;h=r.indexMatch}}else{var d;zu(d=l.toLowerCase()).call(d,a)!==-1&&(h=l);c=Validator.levenshteinDistance(t,l);if(o>c){n=l;s=im(i);o=c}}}return{closestMatch:n,path:s,distance:o,indexMatch:h}}
/**
   * @param {Array.<string>} path
   * @param {object} option
   * @param {string} prefix
   * @returns {string}
   * @static
   */static printLocation(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"Problem value found at: \n";let r="\n\n"+i+"options = {\n";for(let e=0;e<t.length;e++){for(let t=0;t<e+1;t++)r+="  ";r+=t[e]+": {\n"}for(let e=0;e<t.length+1;e++)r+="  ";r+=e+"\n";for(let e=0;e<t.length+1;e++){for(let i=0;i<t.length-e;i++)r+="  ";r+="}\n"}return r+"\n\n"}
/**
   * @param {object} options
   * @returns {string}
   * @static
   */static print(t){return yv(t).replace(/(")|(\[)|(\])|(,"__type__")/g,"").replace(/(,)/g,", ")}
/**
   *  Compute the edit distance between the two given strings
   *  http://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
   *
   *  Copyright (c) 2011 Andrei Mackenzie
   *
   *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
   *
   *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
   *
   *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * @param {string} a
   * @param {string} b
   * @returns {Array.<Array.<number>>}}
   * @static
   */static levenshteinDistance(t,e){if(t.length===0)return e.length;if(e.length===0)return t.length;const i=[];let r;for(r=0;r<=e.length;r++)i[r]=[r];let o;for(o=0;o<=t.length;o++)i[0][o]=o;for(r=1;r<=e.length;r++)for(o=1;o<=t.length;o++)e.charAt(r-1)==t.charAt(o-1)?i[r][o]=i[r-1][o-1]:i[r][o]=Math.min(i[r-1][o-1]+1,Math.min(i[r][o-1]+1,i[r-1][o]+1));return i[e.length][t.length]}};const Dm=Hg;const Im=Om;const Pm=Lg;const Bm=Cm;const Nm=Tm;const zm=Mm;
/**
 * Parse a text source containing data in DOT language into a JSON object.
 * The object contains two lists: one with nodes and one with edges.
 *
 * DOT language reference: http://www.graphviz.org/doc/info/lang.html
 *
 * DOT language attributes: http://graphviz.org/content/attrs
 * @param {string} data     Text containing a graph in DOT-notation
 * @returns {object} graph   An object containing two parameters:
 *                          {Object[]} nodes
 *                          {Object[]} edges
 *
 * -------------------------------------------
 * TODO
 * ====
 *
 * For label handling, this is an incomplete implementation. From docs (quote #3015):
 *
 * > the escape sequences "\n", "\l" and "\r" divide the label into lines, centered,
 * > left-justified, and right-justified, respectively.
 *
 * Source: http://www.graphviz.org/content/attrs#kescString
 *
 * > As another aid for readability, dot allows double-quoted strings to span multiple physical
 * > lines using the standard C convention of a backslash immediately preceding a newline
 * > character
 * > In addition, double-quoted strings can be concatenated using a '+' operator.
 * > As HTML strings can contain newline characters, which are used solely for formatting,
 * > the language does not allow escaped newlines or concatenation operators to be used
 * > within them.
 *
 * - Currently, only '\\n' is handled
 * - Note that text explicitly says 'labels'; the dot parser currently handles escape
 *   sequences in **all** strings.
 */function Fm(t){Hm=t;return iy()}var Am={fontsize:"font.size",fontcolor:"font.color",labelfontcolor:"font.color",fontname:"font.face",color:["color.border","color.background"],fillcolor:"color.background",tooltip:"title",labeltooltip:"title"};var Rm=Ku(Am);Rm.color="color.color";Rm.style="dashes";var jm={NULL:0,DELIMITER:1,IDENTIFIER:2,UNKNOWN:3};var Lm={"{":true,"}":true,"[":true,"]":true,";":true,"=":true,",":true,"->":true,"--":true};var Hm="";var Wm=0;var Vm="";var Um="";var qm=jm.NULL;function Ym(){Wm=0;Vm=Hm.charAt(0)}function Xm(){Wm++;Vm=Hm.charAt(Wm)}
/**
 * Preview the next character from the dot file.
 * @returns {string} cNext
 */function Gm(){return Hm.charAt(Wm+1)}
/**
 * Test whether given character is alphabetic or numeric ( a-zA-Z_0-9.:# )
 * @param {string} c
 * @returns {boolean} isAlphaNumeric
 */function Km(t){var e=t.charCodeAt(0);return e<47?e===35||e===46:e<59?e>47:e<91?e>64:e<96?e===95:e<123&&e>96}
/**
 * Merge all options of object b into object b
 * @param {object} a
 * @param {object} b
 * @returns {object} a
 */function Zm(t,e){t||(t={});if(e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}
/**
 * Set a value in an object, where the provided parameter name can be a
 * path with nested parameters. For example:
 *
 * var obj = {a: 2};
 * setValue(obj, 'b.c', 3);     // obj = {a: 2, b: {c: 3}}
 * @param {object} obj
 * @param {string} path  A parameter name or dot-separated parameter path,
 *                      like "color.highlight.border".
 * @param {*} value
 */function Qm(t,e,i){var r=e.split(".");var o=t;while(r.length){var n=r.shift();if(r.length){o[n]||(o[n]={});o=o[n]}else o[n]=i}}
/**
 * Add a node to a graph object. If there is already a node with
 * the same id, their attributes will be merged.
 * @param {object} graph
 * @param {object} node
 */function $m(t,e){var i,r;var o=null;var n=[t];var s=t;while(s.parent){n.push(s.parent);s=s.parent}if(s.nodes)for(i=0,r=s.nodes.length;i<r;i++)if(e.id===s.nodes[i].id){o=s.nodes[i];break}if(!o){o={id:e.id};t.node&&(o.attr=Zm(o.attr,t.node))}for(i=n.length-1;i>=0;i--){var a;var h=n[i];h.nodes||(h.nodes=[]);zu(a=h.nodes).call(a,o)===-1&&h.nodes.push(o)}e.attr&&(o.attr=Zm(o.attr,e.attr))}
/**
 * Add an edge to a graph object
 * @param {object} graph
 * @param {object} edge
 */function Jm(t,e){t.edges||(t.edges=[]);t.edges.push(e);if(t.edge){var i=Zm({},t.edge);e.attr=Zm(i,e.attr)}}
/**
 * Create an edge to a graph object
 * @param {object} graph
 * @param {string | number | object} from
 * @param {string | number | object} to
 * @param {string} type
 * @param {object | null} attr
 * @returns {object} edge
 */function ty(t,e,i,r,o){var n={from:e,to:i,type:r};t.edge&&(n.attr=Zm({},t.edge));n.attr=Zm(n.attr||{},o);if(o!=null&&o.hasOwnProperty("arrows")&&o.arrows!=null){n.arrows={to:{enabled:true,type:o.arrows.type}};o.arrows=null}return n}function ey(){qm=jm.NULL;Um="";while(Vm===" "||Vm==="\t"||Vm==="\n"||Vm==="\r")Xm();do{var t=false;if(Vm==="#"){var e=Wm-1;while(Hm.charAt(e)===" "||Hm.charAt(e)==="\t")e--;if(Hm.charAt(e)==="\n"||Hm.charAt(e)===""){while(Vm!=""&&Vm!="\n")Xm();t=true}}if(Vm==="/"&&Gm()==="/"){while(Vm!=""&&Vm!="\n")Xm();t=true}if(Vm==="/"&&Gm()==="*"){while(Vm!=""){if(Vm==="*"&&Gm()==="/"){Xm();Xm();break}Xm()}t=true}while(Vm===" "||Vm==="\t"||Vm==="\n"||Vm==="\r")Xm()}while(t);if(Vm!==""){var i=Vm+Gm();if(Lm[i]){qm=jm.DELIMITER;Um=i;Xm();Xm()}else if(Lm[Vm]){qm=jm.DELIMITER;Um=Vm;Xm()}else if(Km(Vm)||Vm==="-"){Um+=Vm;Xm();while(Km(Vm)){Um+=Vm;Xm()}Um==="false"?Um=false:Um==="true"?Um=true:isNaN(Number(Um))||(Um=Number(Um));qm=jm.IDENTIFIER}else{if(Vm!=='"'){qm=jm.UNKNOWN;while(Vm!=""){Um+=Vm;Xm()}throw new SyntaxError('Syntax error in part "'+cy(Um,30)+'"')}Xm();while(Vm!=""&&(Vm!='"'||Vm==='"'&&Gm()==='"')){if(Vm==='"'){Um+=Vm;Xm()}else if(Vm==="\\"&&Gm()==="n"){Um+="\n";Xm()}else Um+=Vm;Xm()}if(Vm!='"')throw ly('End of string " expected');Xm();qm=jm.IDENTIFIER}}else qm=jm.DELIMITER}
/**
 * Parse a graph.
 * @returns {object} graph
 */function iy(){var t={};Ym();ey();if(Um==="strict"){t.strict=true;ey()}if(Um==="graph"||Um==="digraph"){t.type=Um;ey()}if(qm===jm.IDENTIFIER){t.id=Um;ey()}if(Um!="{")throw ly("Angle bracket { expected");ey();ry(t);if(Um!="}")throw ly("Angle bracket } expected");ey();if(Um!=="")throw ly("End of file expected");ey();delete t.node;delete t.edge;delete t.graph;return t}
/**
 * Parse a list with statements.
 * @param {object} graph
 */function ry(t){while(Um!==""&&Um!="}"){oy(t);Um===";"&&ey()}}
/**
 * Parse a single statement. Can be a an attribute statement, node
 * statement, a series of node statements and edge statements, or a
 * parameter.
 * @param {object} graph
 */function oy(t){var e=ny(t);if(e)hy(t,e);else{var i=sy(t);if(!i){if(qm!=jm.IDENTIFIER)throw ly("Identifier expected");var r=Um;ey();if(Um==="="){ey();if(qm!=jm.IDENTIFIER)throw ly("Identifier expected");t[r]=Um;ey()}else ay(t,r)}}}
/**
 * Parse a subgraph
 * @param {object} graph    parent graph object
 * @returns {object | null} subgraph
 */function ny(t){var e=null;if(Um==="subgraph"){e={};e.type="subgraph";ey();if(qm===jm.IDENTIFIER){e.id=Um;ey()}}if(Um==="{"){ey();e||(e={});e.parent=t;e.node=t.node;e.edge=t.edge;e.graph=t.graph;ry(e);if(Um!="}")throw ly("Angle bracket } expected");ey();delete e.node;delete e.edge;delete e.graph;delete e.parent;t.subgraphs||(t.subgraphs=[]);t.subgraphs.push(e)}return e}
/**
 * parse an attribute statement like "node [shape=circle fontSize=16]".
 * Available keywords are 'node', 'edge', 'graph'.
 * The previous list with default attributes will be replaced
 * @param {object} graph
 * @returns {string | null} keyword Returns the name of the parsed attribute
 *                                  (node, edge, graph), or null if nothing
 *                                  is parsed.
 */function sy(t){if(Um==="node"){ey();t.node=dy();return"node"}if(Um==="edge"){ey();t.edge=dy();return"edge"}if(Um==="graph"){ey();t.graph=dy();return"graph"}return null}
/**
 * parse a node statement
 * @param {object} graph
 * @param {string | number} id
 */function ay(t,e){var i={id:e};var r=dy();r&&(i.attr=r);$m(t,i);hy(t,e)}
/**
 * Parse an edge or a series of edges
 * @param {object} graph
 * @param {string | number} from        Id of the from node
 */function hy(t,e){while(Um==="->"||Um==="--"){var i;var r=Um;ey();var o=ny(t);if(o)i=o;else{if(qm!=jm.IDENTIFIER)throw ly("Identifier or subgraph expected");i=Um;$m(t,{id:i});ey()}var n=dy();var s=ty(t,e,i,r,n);Jm(t,s);e=i}}
/**
 * Parse a set with attributes,
 * for example [label="1.000", shape=solid]
 * @returns {object | null} attr
 */function dy(){var t;var e=null;var i={dashed:true,solid:false,dotted:[1,5]};var r={dot:"circle",box:"box",crow:"crow",curve:"curve",icurve:"inv_curve",normal:"triangle",inv:"inv_triangle",diamond:"diamond",tee:"bar",vee:"vee"};var o=new Array;var n=new Array;while(Um==="["){ey();e={};while(Um!==""&&Um!="]"){if(qm!=jm.IDENTIFIER)throw ly("Attribute name expected");var s=Um;ey();if(Um!="=")throw ly("Equal sign = expected");ey();if(qm!=jm.IDENTIFIER)throw ly("Attribute value expected");var a=Um;s==="style"&&(a=i[a]);var h;if(s==="arrowhead"){h=r[a];s="arrows";a={to:{enabled:true,type:h}}}if(s==="arrowtail"){h=r[a];s="arrows";a={from:{enabled:true,type:h}}}o.push({attr:e,name:s,value:a});n.push(s);ey();Um==","&&ey()}if(Um!="]")throw ly("Bracket ] expected");ey()}if(Hl(n).call(n,"dir")){var d={};d.arrows={};for(t=0;t<o.length;t++)if(o[t].name==="arrows")if(o[t].value.to!=null)d.arrows.to=t;else{if(o[t].value.from==null)throw ly("Invalid value of arrows");d.arrows.from=t}else o[t].name==="dir"&&(d.dir=t);var l=o[d.dir].value;if(!Hl(n).call(n,"arrows"))if(l==="both"){o.push({attr:o[d.dir].attr,name:"arrows",value:{to:{enabled:true}}});d.arrows.to=o.length-1;o.push({attr:o[d.dir].attr,name:"arrows",value:{from:{enabled:true}}});d.arrows.from=o.length-1}else if(l==="forward"){o.push({attr:o[d.dir].attr,name:"arrows",value:{to:{enabled:true}}});d.arrows.to=o.length-1}else if(l==="back"){o.push({attr:o[d.dir].attr,name:"arrows",value:{from:{enabled:true}}});d.arrows.from=o.length-1}else{if(l!=="none")throw ly('Invalid dir type "'+l+'"');o.push({attr:o[d.dir].attr,name:"arrows",value:""});d.arrows.to=o.length-1}var c;var u;if(l==="both"){if(d.arrows.to&&d.arrows.from){u=o[d.arrows.to].value.to.type;c=o[d.arrows.from].value.from.type;o[d.arrows.to]={attr:o[d.arrows.to].attr,name:o[d.arrows.to].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}};dl(o).call(o,d.arrows.from,1)}else if(d.arrows.to){u=o[d.arrows.to].value.to.type;c="arrow";o[d.arrows.to]={attr:o[d.arrows.to].attr,name:o[d.arrows.to].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}}}else if(d.arrows.from){u="arrow";c=o[d.arrows.from].value.from.type;o[d.arrows.from]={attr:o[d.arrows.from].attr,name:o[d.arrows.from].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}}}}else if(l==="back"){if(d.arrows.to&&d.arrows.from){u="";c=o[d.arrows.from].value.from.type;o[d.arrows.from]={attr:o[d.arrows.from].attr,name:o[d.arrows.from].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}}}else if(d.arrows.to){u="";c="arrow";d.arrows.from=d.arrows.to;o[d.arrows.from]={attr:o[d.arrows.from].attr,name:o[d.arrows.from].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}}}else if(d.arrows.from){u="";c=o[d.arrows.from].value.from.type;o[d.arrows.to]={attr:o[d.arrows.from].attr,name:o[d.arrows.from].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}}}o[d.arrows.from]={attr:o[d.arrows.from].attr,name:o[d.arrows.from].name,value:{from:{enabled:true,type:o[d.arrows.from].value.from.type}}}}else if(l==="none"){var v;v=d.arrows.to?d.arrows.to:d.arrows.from;o[v]={attr:o[v].attr,name:o[v].name,value:""}}else{if(l!=="forward")throw ly('Invalid dir type "'+l+'"');if(d.arrows.to&&d.arrows.from){u=o[d.arrows.to].value.to.type;c="";o[d.arrows.to]={attr:o[d.arrows.to].attr,name:o[d.arrows.to].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}}}else if(d.arrows.to){u=o[d.arrows.to].value.to.type;c="";o[d.arrows.to]={attr:o[d.arrows.to].attr,name:o[d.arrows.to].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}}}else if(d.arrows.from){u="arrow";c="";d.arrows.to=d.arrows.from;o[d.arrows.to]={attr:o[d.arrows.to].attr,name:o[d.arrows.to].name,value:{to:{enabled:true,type:u},from:{enabled:true,type:c}}}}o[d.arrows.to]={attr:o[d.arrows.to].attr,name:o[d.arrows.to].name,value:{to:{enabled:true,type:o[d.arrows.to].value.to.type}}}}dl(o).call(o,d.dir,1)}var f;if(Hl(n).call(n,"penwidth")){var p=[];f=o.length;for(t=0;t<f;t++)if(o[t].name!=="width"){o[t].name==="penwidth"&&(o[t].name="width");p.push(o[t])}o=p}f=o.length;for(t=0;t<f;t++)Qm(o[t].attr,o[t].name,o[t].value);return e}
/**
 * Create a syntax error with extra information on current token and index.
 * @param {string} message
 * @returns {SyntaxError} err
 */function ly(t){return new SyntaxError(t+', got "'+cy(Um,30)+'" (char '+Wm+")")}
/**
 * Chop off text after a maximum length
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */function cy(t,e){return t.length<=e?t:t.substr(0,27)+"..."}
/**
 * Execute a function fn for each pair of elements in two arrays
 * @param {Array | *} array1
 * @param {Array | *} array2
 * @param {Function} fn
 */function uy(t,e,i){dh(t)?Ed(t).call(t,(function(t){dh(e)?Ed(e).call(e,(function(e){i(t,e)})):i(t,e)})):dh(e)?Ed(e).call(e,(function(e){i(t,e)})):i(t,e)}
/**
 * Set a nested property on an object
 * When nested objects are missing, they will be created.
 * For example setProp({}, 'font.color', 'red') will return {font: {color: 'red'}}
 * @param {object} object
 * @param {string} path   A dot separated string like 'font.color'
 * @param {*} value       Value for the property
 * @returns {object} Returns the original object, allows for chaining.
 */function vy(t,e,i){var r=e.split(".");var o=r.pop();var n=t;for(var s=0;s<r.length;s++){var a=r[s];a in n||(n[a]={});n=n[a]}n[o]=i;return t}
/**
 * Convert an object with DOT attributes to their vis.js equivalents.
 * @param {object} attr     Object with DOT attributes
 * @param {object} mapping
 * @returns {object}         Returns an object with vis.js attributes
 */function fy(t,e){var i={};for(var r in t)if(t.hasOwnProperty(r)){var o=e[r];dh(o)?Ed(o).call(o,(function(e){vy(i,e,t[r])})):vy(i,typeof o==="string"?o:r,t[r])}return i}
/**
 * Convert a string containing a graph in DOT language into a map containing
 * with nodes and edges in the format of graph.
 * @param {string} data         Text containing a graph in DOT-notation
 * @returns {object} graphData
 */function py(t){var e=Fm(t);var i={nodes:[],edges:[],options:{}};if(e.nodes){var r;Ed(r=e.nodes).call(r,(function(t){var e={id:t.id,label:String(t.label||t.id)};Zm(e,fy(t.attr,Am));e.image&&(e.shape="image");i.nodes.push(e)}))}if(e.edges){var o;
/**
     * Convert an edge in DOT format to an edge with VisGraph format
     * @param {object} dotEdge
     * @returns {object} graphEdge
     */var n=function(t){var e={from:t.from,to:t.to};Zm(e,fy(t.attr,Rm));e.arrows==null&&t.type==="->"&&(e.arrows="to");return e};Ed(o=e.edges).call(o,(function(t){var e,r;e=t.from instanceof Object?t.from.nodes:{id:t.from};r=t.to instanceof Object?t.to.nodes:{id:t.to};if(t.from instanceof Object&&t.from.edges){var o;Ed(o=t.from.edges).call(o,(function(t){var e=n(t);i.edges.push(e)}))}uy(e,r,(function(e,r){var o=ty(i,e.id,r.id,t.type,t.attr);var s=n(o);i.edges.push(s)}));if(t.to instanceof Object&&t.to.edges){var s;Ed(s=t.to.edges).call(s,(function(t){var e=n(t);i.edges.push(e)}))}}))}e.attr&&(i.options=e.attr);return i}var gy=Object.freeze({__proto__:null,DOTToGraph:py,parseDOT:Fm});
/**
 * Convert Gephi to Vis.
 * @param gephiJSON - The parsed JSON data in Gephi format.
 * @param optionsObj - Additional options.
 * @returns The converted data ready to be used in Vis.
 */function my(t,e){var i;const r={edges:{inheritColor:false},nodes:{fixed:false,parseColor:false}};if(e!=null){e.fixed!=null&&(r.nodes.fixed=e.fixed);e.parseColor!=null&&(r.nodes.parseColor=e.parseColor);e.inheritColor!=null&&(r.edges.inheritColor=e.inheritColor)}const o=t.edges;const n=kh(o).call(o,(t=>{const e={from:t.source,id:t.id,to:t.target};t.attributes!=null&&(e.attributes=t.attributes);t.label!=null&&(e.label=t.label);t.attributes!=null&&t.attributes.title!=null&&(e.title=t.attributes.title);t.type==="Directed"&&(e.arrows="to");t.color&&r.edges.inheritColor===false&&(e.color=t.color);return e}));const s=kh(i=t.nodes).call(i,(t=>{const e={id:t.id,fixed:r.nodes.fixed&&t.x!=null&&t.y!=null};t.attributes!=null&&(e.attributes=t.attributes);t.label!=null&&(e.label=t.label);t.size!=null&&(e.size=t.size);t.attributes!=null&&t.attributes.title!=null&&(e.title=t.attributes.title);t.title!=null&&(e.title=t.title);t.x!=null&&(e.x=t.x);t.y!=null&&(e.y=t.y);t.color!=null&&(r.nodes.parseColor===true?e.color=t.color:e.color={background:t.color,border:t.color,highlight:{background:t.color,border:t.color},hover:{background:t.color,border:t.color}});return e}));return{nodes:s,edges:n}}var yy=Object.freeze({__proto__:null,parseGephi:my});const by={addDescription:"Click in an empty space to place a new node.",addEdge:"Add Edge",addNode:"Add Node",back:"Back",close:"Close",createEdgeError:"Cannot link edges to a cluster.",del:"Delete selected",deleteClusterError:"Clusters cannot be deleted.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",edit:"Edit",editClusterError:"Clusters cannot be edited.",editEdge:"Edit Edge",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",editNode:"Edit Node"};const wy={addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",addEdge:"Kante hinzufügen",addNode:"Knoten hinzufügen",back:"Zurück",close:"Schließen",createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",del:"Lösche Auswahl",deleteClusterError:"Cluster können nicht gelöscht werden.",edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",edit:"Editieren",editClusterError:"Cluster können nicht editiert werden.",editEdge:"Kante editieren",editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",editNode:"Knoten editieren"};const _y={addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",addEdge:"Añadir arista",addNode:"Añadir nodo",back:"Atrás",close:"Cerrar",createEdgeError:"No se puede conectar una arista a un grupo.",del:"Eliminar selección",deleteClusterError:"No es posible eliminar grupos.",edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",edit:"Editar",editClusterError:"No es posible editar grupos.",editEdge:"Editar arista",editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",editNode:"Editar nodo"};const xy={addDescription:"Clicca per aggiungere un nuovo nodo",addEdge:"Aggiungi un vertice",addNode:"Aggiungi un nodo",back:"Indietro",close:"Chiudere",createEdgeError:"Non si possono collegare vertici ad un cluster",del:"Cancella la selezione",deleteClusterError:"I cluster non possono essere cancellati",edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",edit:"Modifica",editClusterError:"I clusters non possono essere modificati.",editEdge:"Modifica il vertice",editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",editNode:"Modifica il nodo"};const Ey={addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",addEdge:"Link toevoegen",addNode:"Node toevoegen",back:"Terug",close:"Sluiten",createEdgeError:"Kan geen link maken naar een cluster.",del:"Selectie verwijderen",deleteClusterError:"Clusters kunnen niet worden verwijderd.",edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",edit:"Wijzigen",editClusterError:"Clusters kunnen niet worden aangepast.",editEdge:"Link wijzigen",editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",editNode:"Node wijzigen"};const Oy={addDescription:"Clique em um espaço em branco para adicionar um novo nó",addEdge:"Adicionar aresta",addNode:"Adicionar nó",back:"Voltar",close:"Fechar",createEdgeError:"Não foi possível linkar arestas a um cluster.",del:"Remover selecionado",deleteClusterError:"Clusters não puderam ser removidos.",edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",edit:"Editar",editClusterError:"Clusters não puderam ser editados.",editEdge:"Editar aresta",editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",editNode:"Editar nó"};const Cy={addDescription:"Кликните в свободное место, чтобы добавить новый узел.",addEdge:"Добавить ребро",addNode:"Добавить узел",back:"Назад",close:"Закрывать",createEdgeError:"Невозможно соединить ребра в кластер.",del:"Удалить выбранное",deleteClusterError:"Кластеры не могут быть удалены",edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",edit:"Редактировать",editClusterError:"Кластеры недоступны для редактирования.",editEdge:"Редактировать ребро",editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",editNode:"Редактировать узел"};const ky={addDescription:"单击空白处放置新节点。",addEdge:"添加连接线",addNode:"添加节点",back:"返回",close:"關閉",createEdgeError:"无法将连接线连接到群集。",del:"删除选定",deleteClusterError:"无法删除群集。",edgeDescription:"单击某个节点并将该连接线拖动到另一个节点以连接它们。",edit:"编辑",editClusterError:"无法编辑群集。",editEdge:"编辑连接线",editEdgeDescription:"单击控制节点并将它们拖到节点上连接。",editNode:"编辑节点"};const Sy={addDescription:"Kлікніть на вільне місце, щоб додати новий вузол.",addEdge:"Додати край",addNode:"Додати вузол",back:"Назад",close:"Закрити",createEdgeError:"Не можливо об'єднати краї в групу.",del:"Видалити обране",deleteClusterError:"Групи не можуть бути видалені.",edgeDescription:"Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",edit:"Редагувати",editClusterError:"Групи недоступні для редагування.",editEdge:"Редагувати край",editEdgeDescription:"Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",editNode:"Редагувати вузол"};const Ty={addDescription:"Cliquez dans un endroit vide pour placer un nœud.",addEdge:"Ajouter un lien",addNode:"Ajouter un nœud",back:"Retour",close:"Fermer",createEdgeError:"Impossible de créer un lien vers un cluster.",del:"Effacer la sélection",deleteClusterError:"Les clusters ne peuvent pas être effacés.",edgeDescription:"Cliquez sur un nœud et glissez le lien vers un autre nœud pour les connecter.",edit:"Éditer",editClusterError:"Les clusters ne peuvent pas être édités.",editEdge:"Éditer le lien",editEdgeDescription:"Cliquez sur les points de contrôle et glissez-les pour connecter un nœud.",editNode:"Éditer le nœud"};const My={addDescription:"Kluknutím do prázdného prostoru můžete přidat nový vrchol.",addEdge:"Přidat hranu",addNode:"Přidat vrchol",back:"Zpět",close:"Zavřít",createEdgeError:"Nelze připojit hranu ke shluku.",del:"Smazat výběr",deleteClusterError:"Nelze mazat shluky.",edgeDescription:"Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",edit:"Upravit",editClusterError:"Nelze upravovat shluky.",editEdge:"Upravit hranu",editEdgeDescription:"Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",editNode:"Upravit vrchol"};var Dy=Object.freeze({__proto__:null,cn:ky,cs:My,de:wy,en:by,es:_y,fr:Ty,it:xy,nl:Ey,pt:Oy,ru:Cy,uk:Sy});
/**
 * Normalizes language code into the format used internally.
 * @param locales - All the available locales.
 * @param rawCode - The original code as supplied by the user.
 * @returns Language code in the format language-COUNTRY or language, eventually
 * fallbacks to en.
 */function Iy(t,e){try{const[r,o]=e.split(/[-_ /]/,2);const n=r!=null?r.toLowerCase():null;const s=o!=null?o.toUpperCase():null;if(n&&s){const e=n+"-"+s;if(Object.prototype.hasOwnProperty.call(t,e))return e;var i;console.warn(pc(i="Unknown variant ".concat(s," of language ")).call(i,n,"."))}if(n){const e=n;if(Object.prototype.hasOwnProperty.call(t,e))return e;console.warn("Unknown language ".concat(n))}console.warn("Unknown locale ".concat(e,", falling back to English."));return"en"}catch(t){console.error(t);console.warn("Unexpected error while normalizing locale ".concat(e,", falling back to English."));return"en"}}
/**
 * Associates a canvas to a given image, containing a number of renderings
 * of the image at various sizes.
 *
 * This technique is known as 'mipmapping'.
 *
 * NOTE: Images can also be of type 'data:svg+xml`. This code also works
 * for svg, but the mipmapping may not be necessary.
 * @param {Image} image
 */class CachedImage{constructor(){this.NUM_ITERATIONS=4;this.image=new Image;this.canvas=document.createElement("canvas")}init(){if(this.initialized())return;this.src=this.image.src;const t=this.image.width;const e=this.image.height;this.width=t;this.height=e;const i=Math.floor(e/2);const r=Math.floor(e/4);const o=Math.floor(e/8);const n=Math.floor(e/16);const s=Math.floor(t/2);const a=Math.floor(t/4);const h=Math.floor(t/8);const d=Math.floor(t/16);this.canvas.width=3*a;this.canvas.height=i;this.coordinates=[[0,0,s,i],[s,0,a,r],[s,r,h,o],[5*h,r,d,n]];this._fillMipMap()}
/**
   * @returns {boolean} true if init() has been called, false otherwise.
   */initialized(){return this.coordinates!==void 0}_fillMipMap(){const t=this.canvas.getContext("2d");const e=this.coordinates[0];t.drawImage(this.image,e[0],e[1],e[2],e[3]);for(let e=1;e<this.NUM_ITERATIONS;e++){const i=this.coordinates[e-1];const r=this.coordinates[e];t.drawImage(this.canvas,i[0],i[1],i[2],i[3],r[0],r[1],r[2],r[3])}}
/**
   * Draw the image, using the mipmap if necessary.
   *
   * MipMap is only used if param factor > 2; otherwise, original bitmap
   * is resized. This is also used to skip mipmap usage, e.g. by setting factor = 1
   *
   * Credits to 'Alex de Mulder' for original implementation.
   * @param {CanvasRenderingContext2D} ctx  context on which to draw zoomed image
   * @param {Float} factor scale factor at which to draw
   * @param {number} left
   * @param {number} top
   * @param {number} width
   * @param {number} height
   */drawImageAtPosition(t,e,i,r,o,n){if(this.initialized())if(e>2){e*=.5;let s=0;while(e>2&&s<this.NUM_ITERATIONS){e*=.5;s+=1}s>=this.NUM_ITERATIONS&&(s=this.NUM_ITERATIONS-1);const a=this.coordinates[s];t.drawImage(this.canvas,a[0],a[1],a[2],a[3],i,r,o,n)}else t.drawImage(this.image,i,r,o,n)}}
/**
 * This callback is a callback that accepts an Image.
 * @callback ImageCallback
 * @param {Image} image
 */
/**
 * This class loads images and keeps them stored.
 * @param {ImageCallback} callback
 */class Images{
/**
   * @param {ImageCallback} callback
   */
constructor(t){this.images={};this.imageBroken={};this.callback=t}
/**
   * @param {string} url                      The original Url that failed to load, if the broken image is successfully loaded it will be added to the cache using this Url as the key so that subsequent requests for this Url will return the broken image
   * @param {string} brokenUrl                Url the broken image to try and load
   * @param {Image} imageToLoadBrokenUrlOn   The image object
   */_tryloadBrokenUrl(t,e,i){if(t!==void 0&&i!==void 0)if(e!==void 0){i.image.onerror=()=>{console.error("Could not load brokenImage:",e)};i.image.src=e}else console.warn("No broken url image defined")}
/**
   *
   * @param {vis.Image} imageToRedrawWith
   * @private
   */_redrawWithImage(t){this.callback&&this.callback(t)}
/**
   * @param {string} url          Url of the image
   * @param {string} brokenUrl    Url of an image to use if the url image is not found
   * @returns {Image} img          The image object
   */load(t,e){const i=this.images[t];if(i)return i;const r=new CachedImage;this.images[t]=r;r.image.onload=()=>{this._fixImageCoordinates(r.image);r.init();this._redrawWithImage(r)};r.image.onerror=()=>{console.error("Could not load image:",t);this._tryloadBrokenUrl(t,e,r)};r.image.src=t;return r}
/**
   * IE11 fix -- thanks dponch!
   *
   * Local helper function
   * @param {vis.Image} imageToCache
   * @private
   */_fixImageCoordinates(t){if(t.width===0){document.body.appendChild(t);t.width=t.offsetWidth;t.height=t.offsetHeight;document.body.removeChild(t)}}}var Py={};var By={};var Ny={exports:{}};var zy;var Fy;function Ay(){if(Fy)return zy;Fy=1;var t=l();zy=t((function(){if(typeof ArrayBuffer=="function"){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}));return zy}var Ry;var jy;function Ly(){if(jy)return Ry;jy=1;var t=l();var e=it();var i=x();var r=Ay();var o=Object.isExtensible;var n=t((function(){}));Ry=n||r?function(t){return!!e(t)&&((!r||i(t)!=="ArrayBuffer")&&(!o||o(t)))}:o;return Ry}var Hy;var Wy;function Vy(){if(Wy)return Hy;Wy=1;var t=l();Hy=!t((function(){return Object.isExtensible(Object.preventExtensions({}))}));return Hy}var Uy;function qy(){if(Uy)return Ny.exports;Uy=1;var t=Ve();var e=b();var i=li();var r=it();var o=ie();var n=Ae().f;var s=To();var a=Io();var h=Ly();var d=ne();var l=Vy();var c=false;var u=d("meta");var v=0;var f=function(t){n(t,u,{value:{objectID:"O"+v++,weakData:{}}})};var p=function(t,e){if(!r(t))return typeof t=="symbol"?t:(typeof t=="string"?"S":"P")+t;if(!o(t,u)){if(!h(t))return"F";if(!e)return"E";f(t)}return t[u].objectID};var g=function(t,e){if(!o(t,u)){if(!h(t))return true;if(!e)return false;f(t)}return t[u].weakData};var m=function(t){l&&c&&h(t)&&!o(t,u)&&f(t);return t};var y=function(){w.enable=function(){};c=true;var i=s.f;var r=e([].splice);var o={};o[u]=1;if(i(o).length){s.f=function(t){var e=i(t);for(var o=0,n=e.length;o<n;o++)if(e[o]===u){r(e,o,1);break}return e};t({target:"Object",stat:true,forced:true},{getOwnPropertyNames:a.f})}};var w=Ny.exports={enable:y,fastKey:p,getWeakData:g,onFreeze:m};i[u]=true;return Ny.exports}var Yy;var Xy;function Gy(){if(Xy)return Yy;Xy=1;var t=he();var e=Ns();var i=t("iterator");var r=Array.prototype;Yy=function(t){return t!==void 0&&(e.Array===t||r[i]===t)};return Yy}var Ky;var Zy;function Qy(){if(Zy)return Ky;Zy=1;var t=Ur();var e=zt();var i=X();var r=Ns();var o=he();var n=o("iterator");Ky=function(o){if(!i(o))return e(o,n)||e(o,"@@iterator")||r[t(o)]};return Ky}var $y;var Jy;function tb(){if(Jy)return $y;Jy=1;var t=z();var e=Pt();var i=ze();var r=Mt();var o=Qy();var n=TypeError;$y=function(s,a){var h=arguments.length<2?o(s):a;if(e(h))return i(t(h,s));throw new n(r(s)+" is not iterable")};return $y}var eb;var ib;function rb(){if(ib)return eb;ib=1;var t=z();var e=ze();var i=zt();eb=function(r,o,n){var s,a;e(r);try{s=i(r,"return");if(!s){if(o==="throw")throw n;return n}s=t(s,r)}catch(t){a=true;s=t}if(o==="throw")throw n;if(a)throw s;e(s);return n};return eb}var ob;var nb;function sb(){if(nb)return ob;nb=1;var t=Te();var e=z();var i=ze();var r=Mt();var o=Gy();var n=oi();var s=ct();var a=tb();var h=Qy();var d=rb();var l=TypeError;var c=function(t,e){this.stopped=t;this.result=e};var u=c.prototype;ob=function(v,f,p){var g=p&&p.that;var m=!!(p&&p.AS_ENTRIES);var y=!!(p&&p.IS_RECORD);var b=!!(p&&p.IS_ITERATOR);var w=!!(p&&p.INTERRUPTED);var _=t(f,g);var x,E,O,C,k,S,T;var M=function(t){x&&d(x,"normal");return new c(true,t)};var D=function(t){if(m){i(t);return w?_(t[0],t[1],M):_(t[0],t[1])}return w?_(t,M):_(t)};if(y)x=v.iterator;else if(b)x=v;else{E=h(v);if(!E)throw new l(r(v)+" is not iterable");if(o(E)){for(O=0,C=n(v);C>O;O++){k=D(v[O]);if(k&&s(u,k))return k}return new c(false)}x=a(v,E)}S=y?v.next:x.next;while(!(T=e(S,x)).done){try{k=D(T.value)}catch(t){d(x,"throw",t)}if(typeof k=="object"&&k&&s(u,k))return k}return new c(false)};return ob}var ab;var hb;function db(){if(hb)return ab;hb=1;var t=ct();var e=TypeError;ab=function(i,r){if(t(r,i))return i;throw new e("Incorrect invocation")};return ab}var lb;var cb;function ub(){if(cb)return lb;cb=1;var t=Ve();var e=a();var i=qy();var r=l();var o=Le();var n=sb();var s=db();var h=T();var d=it();var c=X();var u=$o();var v=Ae().f;var f=hn().forEach;var p=P();var g=nn();var m=g.set;var y=g.getterFor;lb=function(a,l,g){var b=a.indexOf("Map")!==-1;var w=a.indexOf("Weak")!==-1;var _=b?"set":"add";var x=e[a];var E=x&&x.prototype;var O={};var C;if(p&&h(x)&&(w||E.forEach&&!r((function(){(new x).entries().next()})))){C=l((function(t,e){m(s(t,k),{type:a,collection:new x});c(e)||n(e,t[_],{that:t,AS_ENTRIES:b})}));var k=C.prototype;var S=y(a);f(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(t){var e=t==="add"||t==="set";!(t in E)||w&&t==="clear"||o(k,t,(function(i,r){var o=S(this).collection;if(!e&&w&&!d(i))return t==="get"&&void 0;var n=o[t](i===0?0:i,r);return e?this:n}))}));w||v(k,"size",{configurable:true,get:function(){return S(this).collection.size}})}else{C=g.getConstructor(l,a,b,_);i.enable()}u(C,a,false,true);O[a]=C;t({global:true,forced:true},O);w||g.setStrong(C,a,b);return C};return lb}var vb;var fb;function pb(){if(fb)return vb;fb=1;var t=No();vb=function(e,i,r){for(var o in i)r&&r.unsafe&&e[o]?e[o]=i[o]:t(e,o,i[o],r);return e};return vb}var gb;var mb;function yb(){if(mb)return gb;mb=1;var t=ht();var e=Ao();var i=he();var r=P();var o=i("species");gb=function(i){var n=t(i);r&&n&&!n[o]&&e(n,o,{configurable:true,get:function(){return this}})};return gb}var bb;var wb;function _b(){if(wb)return bb;wb=1;var t=Co();var e=Ao();var i=pb();var r=Te();var o=db();var n=X();var s=sb();var a=la();var h=va();var d=yb();var l=P();var c=qy().fastKey;var u=nn();var v=u.set;var f=u.getterFor;bb={getConstructor:function(a,h,d,u){var p=a((function(e,i){o(e,g);v(e,{type:h,index:t(null),first:null,last:null,size:0});l||(e.size=0);n(i)||s(i,e[u],{that:e,AS_ENTRIES:d})}));var g=p.prototype;var m=f(h);var y=function(t,e,i){var r=m(t);var o=b(t,e);var n,s;if(o)o.value=i;else{r.last=o={index:s=c(e,true),key:e,value:i,previous:n=r.last,next:null,removed:false};r.first||(r.first=o);n&&(n.next=o);l?r.size++:t.size++;s!=="F"&&(r.index[s]=o)}return t};var b=function(t,e){var i=m(t);var r=c(e);var o;if(r!=="F")return i.index[r];for(o=i.first;o;o=o.next)if(o.key===e)return o};i(g,{clear:function(){var e=this;var i=m(e);var r=i.first;while(r){r.removed=true;r.previous&&(r.previous=r.previous.next=null);r=r.next}i.first=i.last=null;i.index=t(null);l?i.size=0:e.size=0},delete:function(t){var e=this;var i=m(e);var r=b(e,t);if(r){var o=r.next;var n=r.previous;delete i.index[r.index];r.removed=true;n&&(n.next=o);o&&(o.previous=n);i.first===r&&(i.first=o);i.last===r&&(i.last=n);l?i.size--:e.size--}return!!r},forEach:function(t){var e=m(this);var i=r(t,arguments.length>1?arguments[1]:void 0);var o;while(o=o?o.next:e.first){i(o.value,o.key,this);while(o&&o.removed)o=o.previous}},has:function(t){return!!b(this,t)}});i(g,d?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return y(this,t===0?0:t,e)}}:{add:function(t){return y(this,t=t===0?0:t,t)}});l&&e(g,"size",{configurable:true,get:function(){return m(this).size}});return p},setStrong:function(t,e,i){var r=e+" Iterator";var o=f(e);var n=f(r);a(t,e,(function(t,e){v(this,{type:r,target:t,state:o(t),kind:e,last:null})}),(function(){var t=n(this);var e=t.kind;var i=t.last;while(i&&i.removed)i=i.previous;if(!t.target||!(t.last=i=i?i.next:t.state.first)){t.target=null;return h(void 0,true)}return h(e==="keys"?i.key:e==="values"?i.value:[i.key,i.value],false)}),i?"entries":"values",!i,true);d(e)}};return bb}var xb;function Eb(){if(xb)return By;xb=1;var t=ub();var e=_b();t("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),e);return By}var Ob;function Cb(){if(Ob)return Py;Ob=1;Eb();return Py}var kb={};var Sb;var Tb;function Mb(){if(Tb)return Sb;Tb=1;Sb=function(t,e){return e===1?function(e,i){return e[t](i)}:function(e,i,r){return e[t](i,r)}};return Sb}var Db;var Ib;function Pb(){if(Ib)return Db;Ib=1;var t=ht();var e=Mb();var i=t("Map");Db={Map:i,set:e("set",2),get:e("get",1),has:e("has",1),remove:e("delete",1),proto:i.prototype};return Db}var Bb;function Nb(){if(Bb)return kb;Bb=1;var t=Ve();var e=b();var i=Pt();var r=Z();var o=sb();var n=Pb();var s=Wt();var a=l();var h=n.Map;var d=n.has;var c=n.get;var u=n.set;var v=e([].push);var f=s||a((function(){return h.groupBy("ab",(function(t){return t})).get("a").length!==1}));t({target:"Map",stat:true,forced:s||f},{groupBy:function(t,e){r(t);i(e);var n=new h;var s=0;o(t,(function(t){var i=e(t,s++);d(n,i)?v(c(n,i),t):u(n,i,[t])}));return n}});return kb}var zb={};var Fb;var Ab;function Rb(){if(Ab)return Fb;Ab=1;var t=b();var e=Ke();var i=vo();var r=Z();var o=t("".charAt);var n=t("".charCodeAt);var s=t("".slice);var a=function(t){return function(a,h){var d=i(r(a));var l=e(h);var c=d.length;var u,v;if(l<0||l>=c)return t?"":void 0;u=n(d,l);return u<55296||u>56319||l+1===c||(v=n(d,l+1))<56320||v>57343?t?o(d,l):u:t?s(d,l,l+2):v-56320+(u-55296<<10)+65536}};Fb={codeAt:a(false),charAt:a(true)};return Fb}var jb;function Lb(){if(jb)return zb;jb=1;var t=Rb().charAt;var e=vo();var i=nn();var r=la();var o=va();var n="String Iterator";var s=i.set;var a=i.getterFor(n);r(String,"String",(function(t){s(this,{type:n,string:e(t),index:0})}),(function(){var e=a(this);var i=e.string;var r=e.index;var n;if(r>=i.length)return o(void 0,true);n=t(i,r);e.index+=n.length;return o(n,false)}));return zb}var Hb;var Wb;function Vb(){if(Wb)return Hb;Wb=1;ga();Cb();Nb();Lb();var t=nt();Hb=t.Map;return Hb}var Ub;var qb;function Yb(){if(qb)return Ub;qb=1;var t=Vb();_a();Ub=t;return Ub}var Xb;var Gb;function Kb(){if(Gb)return Xb;Gb=1;Xb=Yb();return Xb}var Zb=Kb();var Qb=r(Zb);class Groups{constructor(){this.clear();this._defaultIndex=0;this._groupIndex=0;this._defaultGroups=[{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},{border:"#FFA500",background:"#FFFF00",highlight:{border:"#FFA500",background:"#FFFFA3"},hover:{border:"#FFA500",background:"#FFFFA3"}},{border:"#FA0A10",background:"#FB7E81",highlight:{border:"#FA0A10",background:"#FFAFB1"},hover:{border:"#FA0A10",background:"#FFAFB1"}},{border:"#41A906",background:"#7BE141",highlight:{border:"#41A906",background:"#A1EC76"},hover:{border:"#41A906",background:"#A1EC76"}},{border:"#E129F0",background:"#EB7DF4",highlight:{border:"#E129F0",background:"#F0B3F5"},hover:{border:"#E129F0",background:"#F0B3F5"}},{border:"#7C29F0",background:"#AD85E4",highlight:{border:"#7C29F0",background:"#D3BDF0"},hover:{border:"#7C29F0",background:"#D3BDF0"}},{border:"#C37F00",background:"#FFA807",highlight:{border:"#C37F00",background:"#FFCA66"},hover:{border:"#C37F00",background:"#FFCA66"}},{border:"#4220FB",background:"#6E6EFD",highlight:{border:"#4220FB",background:"#9B9BFD"},hover:{border:"#4220FB",background:"#9B9BFD"}},{border:"#FD5A77",background:"#FFC0CB",highlight:{border:"#FD5A77",background:"#FFD1D9"},hover:{border:"#FD5A77",background:"#FFD1D9"}},{border:"#4AD63A",background:"#C2FABC",highlight:{border:"#4AD63A",background:"#E6FFE3"},hover:{border:"#4AD63A",background:"#E6FFE3"}},{border:"#990000",background:"#EE0000",highlight:{border:"#BB0000",background:"#FF3333"},hover:{border:"#BB0000",background:"#FF3333"}},{border:"#FF6000",background:"#FF6000",highlight:{border:"#FF6000",background:"#FF6000"},hover:{border:"#FF6000",background:"#FF6000"}},{border:"#97C2FC",background:"#2B7CE9",highlight:{border:"#D2E5FF",background:"#2B7CE9"},hover:{border:"#D2E5FF",background:"#2B7CE9"}},{border:"#399605",background:"#255C03",highlight:{border:"#399605",background:"#255C03"},hover:{border:"#399605",background:"#255C03"}},{border:"#B70054",background:"#FF007E",highlight:{border:"#B70054",background:"#FF007E"},hover:{border:"#B70054",background:"#FF007E"}},{border:"#AD85E4",background:"#7C29F0",highlight:{border:"#D3BDF0",background:"#7C29F0"},hover:{border:"#D3BDF0",background:"#7C29F0"}},{border:"#4557FA",background:"#000EA1",highlight:{border:"#6E6EFD",background:"#000EA1"},hover:{border:"#6E6EFD",background:"#000EA1"}},{border:"#FFC0CB",background:"#FD5A77",highlight:{border:"#FFD1D9",background:"#FD5A77"},hover:{border:"#FFD1D9",background:"#FD5A77"}},{border:"#C2FABC",background:"#74D66A",highlight:{border:"#E6FFE3",background:"#74D66A"},hover:{border:"#E6FFE3",background:"#74D66A"}},{border:"#EE0000",background:"#990000",highlight:{border:"#FF3333",background:"#BB0000"},hover:{border:"#FF3333",background:"#BB0000"}}];this.options={};this.defaultOptions={useDefaultGroups:true};Ri(this.options,this.defaultOptions)}
/**
   *
   * @param {object} options
   */setOptions(t){const e=["useDefaultGroups"];if(t!==void 0)for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&zu(e).call(e,i)===-1){const e=t[i];this.add(i,e)}}clear(){this._groups=new Qb;this._groupNames=[]}
/**
   * Get group options of a groupname.
   * If groupname is not found, a new group may be created.
   * @param {*}       groupname     Can be a number, string, Date, etc.
   * @param {boolean} [shouldCreate] If true, create a new group
   * @returns {object} The found or created group
   */get(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];let i=this._groups.get(t);if(i===void 0&&e)if(this.options.useDefaultGroups===false&&this._groupNames.length>0){const e=this._groupIndex%this._groupNames.length;++this._groupIndex;i={};i.color=this._groups.get(this._groupNames[e]);this._groups.set(t,i)}else{const e=this._defaultIndex%this._defaultGroups.length;this._defaultIndex++;i={};i.color=this._defaultGroups[e];this._groups.set(t,i)}return i}
/**
   * Add custom group style.
   * @param {string} groupName - The name of the group, a new group will be
   * created if a group with the same name doesn't exist, otherwise the old
   * groups style will be overwritten.
   * @param {object} style - An object containing borderColor, backgroundColor,
   * etc.
   * @returns {object} The created group object.
   */add(t,e){this._groups.has(t)||this._groupNames.push(t);this._groups.set(t,e);return e}}var $b={};var Jb;function tw(){if(Jb)return $b;Jb=1;var t=Ve();t({target:"Number",stat:true},{isNaN:function(t){return t!==t}});return $b}var ew;var iw;function rw(){if(iw)return ew;iw=1;tw();var t=nt();ew=t.Number.isNaN;return ew}var ow;var nw;function sw(){if(nw)return ow;nw=1;var t=rw();ow=t;return ow}var aw;var hw;function dw(){if(hw)return aw;hw=1;aw=sw();return aw}var lw=dw();var cw=r(lw);var uw={};var vw;var fw;function pw(){if(fw)return vw;fw=1;var t=a();var e=t.isFinite;vw=Number.isFinite||function(t){return typeof t=="number"&&e(t)};return vw}var gw;function mw(){if(gw)return uw;gw=1;var t=Ve();var e=pw();t({target:"Number",stat:true},{isFinite:e});return uw}var yw;var bw;function ww(){if(bw)return yw;bw=1;mw();var t=nt();yw=t.Number.isFinite;return yw}var _w;var xw;function Ew(){if(xw)return _w;xw=1;var t=ww();_w=t;return _w}var Ow;var Cw;function kw(){if(Cw)return Ow;Cw=1;Ow=Ew();return Ow}var Sw=kw();var Tw=r(Sw);var Mw={};var Dw;function Iw(){if(Dw)return Mw;Dw=1;var t=Ve();var e=hn().some;var i=od();var r=i("some");t({target:"Array",proto:true,forced:!r},{some:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}});return Mw}var Pw;var Bw;function Nw(){if(Bw)return Pw;Bw=1;Iw();var t=Zi();Pw=t("Array","some");return Pw}var zw;var Fw;function Aw(){if(Fw)return zw;Fw=1;var t=ct();var e=Nw();var i=Array.prototype;zw=function(r){var o=r.some;return r===i||t(i,r)&&o===i.some?e:o};return zw}var Rw;var jw;function Lw(){if(jw)return Rw;jw=1;var t=Aw();Rw=t;return Rw}var Hw;var Ww;function Vw(){if(Ww)return Hw;Ww=1;Hw=Lw();return Hw}var Uw=Vw();var qw=r(Uw);var Yw={exports:{}};var Xw={};var Gw;function Kw(){if(Gw)return Xw;Gw=1;var t=Ve();var e=P();var i=Ae().f;t({target:"Object",stat:true,forced:Object.defineProperty!==i,sham:!e},{defineProperty:i});return Xw}var Zw;function Qw(){if(Zw)return Yw.exports;Zw=1;Kw();var t=nt();var e=t.Object;var i=Yw.exports=function(t,i,r){return e.defineProperty(t,i,r)};e.defineProperty.sham&&(i.sham=true);return Yw.exports}var $w;var Jw;function t_(){if(Jw)return $w;Jw=1;var t=Qw();$w=t;return $w}var e_;var i_;function r_(){if(i_)return e_;i_=1;var t=t_();e_=t;return e_}var o_;var n_;function s_(){if(n_)return o_;n_=1;var t=r_();o_=t;return o_}var a_;var h_;function d_(){if(h_)return a_;h_=1;a_=s_();return a_}var l_=d_();var c_=r(l_);var u_={};var v_;function f_(){if(v_)return u_;v_=1;var t=he();var e=Ae().f;var i=t("metadata");var r=Function.prototype;r[i]===void 0&&e(r,i,{value:null});return u_}var p_={};var g_;function m_(){if(g_)return p_;g_=1;Bn();return p_}var y_={};var b_;function w_(){if(b_)return y_;b_=1;jn();return y_}var __={};var x_;function E_(){if(x_)return __;x_=1;var t=Vo();t("metadata");return __}var O_;var C_;function k_(){if(C_)return O_;C_=1;var t=Oa();f_();m_();w_();E_();O_=t;return O_}var S_={};var T_;var M_;function D_(){if(M_)return T_;M_=1;var t=ht();var e=b();var i=t("Symbol");var r=i.keyFor;var o=e(i.prototype.valueOf);T_=i.isRegisteredSymbol||function(t){try{return r(o(t))!==void 0}catch(t){return false}};return T_}var I_;function P_(){if(I_)return S_;I_=1;var t=Ve();var e=D_();t({target:"Symbol",stat:true},{isRegisteredSymbol:e});return S_}var B_={};var N_;var z_;function F_(){if(z_)return N_;z_=1;var t=Zt();var e=ht();var i=b();var r=kt();var o=he();var n=e("Symbol");var s=n.isWellKnownSymbol;var a=e("Object","getOwnPropertyNames");var h=i(n.prototype.valueOf);var d=t("wks");for(var l=0,c=a(n),u=c.length;l<u;l++)try{var v=c[l];r(n[v])&&o(v)}catch(t){}N_=function(t){if(s&&s(t))return true;try{var e=h(t);for(var i=0,r=a(d),o=r.length;i<o;i++)if(d[r[i]]==e)return true}catch(t){}return false};return N_}var A_;function R_(){if(A_)return B_;A_=1;var t=Ve();var e=F_();t({target:"Symbol",stat:true,forced:true},{isWellKnownSymbol:e});return B_}var j_={};var L_;function H_(){if(L_)return j_;L_=1;var t=Vo();t("customMatcher");return j_}var W_={};var V_;function U_(){if(V_)return W_;V_=1;var t=Vo();t("observable");return W_}var q_={};var Y_;function X_(){if(Y_)return q_;Y_=1;var t=Ve();var e=D_();t({target:"Symbol",stat:true,name:"isRegisteredSymbol"},{isRegistered:e});return q_}var G_={};var K_;function Z_(){if(K_)return G_;K_=1;var t=Ve();var e=F_();t({target:"Symbol",stat:true,name:"isWellKnownSymbol",forced:true},{isWellKnown:e});return G_}var Q_={};var $_;function J_(){if($_)return Q_;$_=1;var t=Vo();t("matcher");return Q_}var tx={};var ex;function ix(){if(ex)return tx;ex=1;var t=Vo();t("metadataKey");return tx}var rx={};var ox;function nx(){if(ox)return rx;ox=1;var t=Vo();t("patternMatch");return rx}var sx={};var ax;function hx(){if(ax)return sx;ax=1;var t=Vo();t("replaceAll");return sx}var dx;var lx;function cx(){if(lx)return dx;lx=1;var t=k_();P_();R_();H_();U_();X_();Z_();J_();ix();nx();hx();dx=t;return dx}var ux;var vx;function fx(){if(vx)return ux;vx=1;ux=cx();return ux}var px=fx();var gx=r(px);var mx;var yx;function bx(){if(yx)return mx;yx=1;ga();Lb();Gn();var t=Lo();mx=t.f("iterator");return mx}var wx;var _x;function xx(){if(_x)return wx;_x=1;var t=bx();_a();wx=t;return wx}var Ex;var Ox;function Cx(){if(Ox)return Ex;Ox=1;var t=xx();Ex=t;return Ex}var kx;var Sx;function Tx(){if(Sx)return kx;Sx=1;var t=Cx();kx=t;return kx}var Mx;var Dx;function Ix(){if(Dx)return Mx;Dx=1;Mx=Tx();return Mx}var Px=Ix();var Bx=r(Px);function Nx(t){return Nx="function"==typeof gx&&"symbol"==typeof Bx?function(t){return typeof t}:function(t){return t&&"function"==typeof gx&&t.constructor===gx&&t!==gx.prototype?"symbol":typeof t},Nx(t)}var zx;var Fx;function Ax(){if(Fx)return zx;Fx=1;ps();var t=Lo();zx=t.f("toPrimitive");return zx}var Rx;var jx;function Lx(){if(jx)return Rx;jx=1;var t=Ax();Rx=t;return Rx}var Hx;var Wx;function Vx(){if(Wx)return Hx;Wx=1;var t=Lx();Hx=t;return Hx}var Ux;var qx;function Yx(){if(qx)return Ux;qx=1;var t=Vx();Ux=t;return Ux}var Xx;var Gx;function Kx(){if(Gx)return Xx;Gx=1;Xx=Yx();return Xx}var Zx=Kx();var Qx=r(Zx);function $x(t,e){if("object"!=Nx(t)||!t)return t;var i=t[Qx];if(void 0!==i){var r=i.call(t,e);if("object"!=Nx(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function Jx(t){var e=$x(t,"string");return"symbol"==Nx(e)?e:e+""}function tE(t,e,i){return(e=Jx(e))in t?c_(t,e,{value:i,enumerable:true,configurable:true,writable:true}):t[e]=i,t}var eE={};var iE;var rE;function oE(){if(rE)return iE;rE=1;var t=a();var e=l();var i=b();var r=vo();var o=iu().trim;var n=Jc();var s=i("".charAt);var h=t.parseFloat;var d=t.Symbol;var c=d&&d.iterator;var u=1/h(n+"-0")!==-Infinity||c&&!e((function(){h(Object(c))}));iE=u?function(t){var e=o(r(t));var i=h(e);return i===0&&s(e,0)==="-"?-0:i}:h;return iE}var nE;function sE(){if(nE)return eE;nE=1;var t=Ve();var e=oE();t({global:true,forced:parseFloat!==e},{parseFloat:e});return eE}var aE;var hE;function dE(){if(hE)return aE;hE=1;sE();var t=nt();aE=t.parseFloat;return aE}var lE;var cE;function uE(){if(cE)return lE;cE=1;var t=dE();lE=t;return lE}var vE;var fE;function pE(){if(fE)return vE;fE=1;vE=uE();return vE}var gE=pE();var mE=r(gE);var yE={};var bE;function wE(){if(bE)return yE;bE=1;var t=Ve();var e=l();var i=Io().f;var r=e((function(){return!Object.getOwnPropertyNames(1)}));t({target:"Object",stat:true,forced:r},{getOwnPropertyNames:i});return yE}var _E;var xE;function EE(){if(xE)return _E;xE=1;wE();var t=nt();var e=t.Object;_E=function(t){return e.getOwnPropertyNames(t)};return _E}var OE;var CE;function kE(){if(CE)return OE;CE=1;var t=EE();OE=t;return OE}var SE;var TE;function ME(){if(TE)return SE;TE=1;SE=kE();return SE}var DE=ME();var IE=r(DE);var PE;var BE;function NE(){if(BE)return PE;BE=1;Dn();var t=nt();PE=t.Object.getOwnPropertySymbols;return PE}var zE;var FE;function AE(){if(FE)return zE;FE=1;var t=NE();zE=t;return zE}var RE;var jE;function LE(){if(jE)return RE;jE=1;RE=AE();return RE}var HE=LE();var WE=r(HE);var VE={exports:{}};var UE={};var qE;function YE(){if(qE)return UE;qE=1;var t=Ve();var e=l();var i=J();var r=xe().f;var o=P();var n=!o||e((function(){r(1)}));t({target:"Object",stat:true,forced:n,sham:!o},{getOwnPropertyDescriptor:function(t,e){return r(i(t),e)}});return UE}var XE;function GE(){if(XE)return VE.exports;XE=1;YE();var t=nt();var e=t.Object;var i=VE.exports=function(t,i){return e.getOwnPropertyDescriptor(t,i)};e.getOwnPropertyDescriptor.sham&&(i.sham=true);return VE.exports}var KE;var ZE;function QE(){if(ZE)return KE;ZE=1;var t=GE();KE=t;return KE}var $E;var JE;function tO(){if(JE)return $E;JE=1;$E=QE();return $E}var eO=tO();var iO=r(eO);var rO={};var oO;function nO(){if(oO)return rO;oO=1;var t=Ve();var e=P();var i=Ka();var r=J();var o=xe();var n=Rr();t({target:"Object",stat:true,sham:!e},{getOwnPropertyDescriptors:function(t){var e=r(t);var s=o.f;var a=i(e);var h={};var d=0;var l,c;while(a.length>d){c=s(e,l=a[d++]);c!==void 0&&n(h,l,c)}return h}});return rO}var sO;var aO;function hO(){if(aO)return sO;aO=1;nO();var t=nt();sO=t.Object.getOwnPropertyDescriptors;return sO}var dO;var lO;function cO(){if(lO)return dO;lO=1;var t=hO();dO=t;return dO}var uO;var vO;function fO(){if(vO)return uO;vO=1;uO=cO();return uO}var pO=fO();var gO=r(pO);var mO={exports:{}};var yO={};var bO;function wO(){if(bO)return yO;bO=1;var t=Ve();var e=P();var i=go().f;t({target:"Object",stat:true,forced:Object.defineProperties!==i,sham:!e},{defineProperties:i});return yO}var _O;function xO(){if(_O)return mO.exports;_O=1;wO();var t=nt();var e=t.Object;var i=mO.exports=function(t,i){return e.defineProperties(t,i)};e.defineProperties.sham&&(i.sham=true);return mO.exports}var EO;var OO;function CO(){if(OO)return EO;OO=1;var t=xO();EO=t;return EO}var kO;var SO;function TO(){if(SO)return kO;SO=1;kO=CO();return kO}var MO=TO();var DO=r(MO);var IO;var PO;function BO(){if(PO)return IO;PO=1;IO=t_();return IO}var NO=BO();var zO=r(NO);
/**
 * Determine values to use for (sub)options of 'chosen'.
 *
 * This option is either a boolean or an object whose values should be examined further.
 * The relevant structures are:
 *
 * - chosen: <boolean value>
 * - chosen: { subOption: <boolean or function> }
 *
 * Where subOption is 'node', 'edge' or 'label'.
 *
 * The intention of this method appears to be to set a specific priority to the options;
 * Since most properties are either bridged or merged into the local options objects, there
 * is not much point in handling them separately.
 * TODO: examine if 'most' in previous sentence can be replaced with 'all'. In that case, we
 * should be able to get rid of this method.
 * @param {string}  subOption  option within object 'chosen' to consider; either 'node', 'edge' or 'label'
 * @param {object}  pile       array of options objects to consider
 * @returns {boolean | Function}  value for passed subOption of 'chosen' to use
 */function FO(t,e){const i=["node","edge","label"];let r=true;const o=wm(e,"chosen");if(typeof o==="boolean")r=o;else if(typeof o==="object"){if(zu(i).call(i,t)===-1)throw new Error("choosify: subOption '"+t+"' should be one of '"+i.join("', '")+"'");const o=wm(e,["chosen",t]);typeof o!=="boolean"&&typeof o!=="function"||(r=o)}return r}
/**
 * Check if the point falls within the given rectangle.
 * @param {rect} rect
 * @param {point} point
 * @param {rotationPoint} [rotationPoint] if specified, the rotation that applies to the rectangle.
 * @returns {boolean}  true if point within rectangle, false otherwise
 */function AO(t,e,i){if(t.width<=0||t.height<=0)return false;if(i!==void 0){const t={x:e.x-i.x,y:e.y-i.y};if(i.angle!==0){const r=-i.angle;const o={x:Math.cos(r)*t.x-Math.sin(r)*t.y,y:Math.sin(r)*t.x+Math.cos(r)*t.y};e=o}else e=t}const r=t.x+t.width;const o=t.y+t.width;return t.left<e.x&&r>e.x&&t.top<e.y&&o>e.y}
/**
 * Check if given value is acceptable as a label text.
 * @param {*} text value to check; can be anything at this point
 * @returns {boolean} true if valid label value, false otherwise
 */function RO(t){return typeof t==="string"&&t!==""}
/**
 * Returns x, y of self reference circle based on provided angle
 * @param {object} ctx
 * @param {number} angle
 * @param {number} radius
 * @param {VisNode} node
 * @returns {object} x and y coordinates
 */function jO(t,e,i,r){let o=r.x;let n=r.y;if(typeof r.distanceToBorder==="function"){const i=r.distanceToBorder(t,e);const s=Math.sin(e)*i;const a=Math.cos(e)*i;if(a===i){o+=i;n=r.y}else if(s===i){o=r.x;n-=i}else{o+=a;n-=s}}else if(r.shape.width>r.shape.height){o=r.x+r.shape.width*.5;n=r.y-i}else{o=r.x+i;n=r.y-r.shape.height*.5}return{x:o,y:n}}var LO;var HO;function WO(){if(HO)return LO;HO=1;ga();var t=Zi();LO=t("Array","values");return LO}var VO;var UO;function qO(){if(UO)return VO;UO=1;var t=WO();VO=t;return VO}var YO;var XO;function GO(){if(XO)return YO;XO=1;_a();var t=Ur();var e=ie();var i=ct();var r=qO();var o=Array.prototype;var n={DOMTokenList:true,NodeList:true};YO=function(s){var a=s.values;return s===o||i(o,s)&&a===o.values||e(n,t(s))?r:a};return YO}var KO;var ZO;function QO(){if(ZO)return KO;ZO=1;KO=GO();return KO}var $O=QO();var JO=r($O);
/**
 * Callback to determine text dimensions, using the parent label settings.
 * @callback MeasureText
 * @param {text} text
 * @param {text} mod
 * @returns {object} { width, values} width in pixels and font attributes
 */class LabelAccumulator{
/**
   * @param {MeasureText} measureText
   */
constructor(t){this.measureText=t;this.current=0;this.width=0;this.height=0;this.lines=[]}
/**
   * Append given text to the given line.
   * @param {number}  l    index of line to add to
   * @param {string}  text string to append to line
   * @param {'bold'|'ital'|'boldital'|'mono'|'normal'} [mod]
   * @private
   */_add(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"normal";this.lines[t]===void 0&&(this.lines[t]={width:0,height:0,blocks:[]});let r=e;e!==void 0&&e!==""||(r=" ");const o=this.measureText(r,i);const n=Ri({},JO(o));n.text=e;n.width=o.width;n.mod=i;e!==void 0&&e!==""||(n.width=0);this.lines[t].blocks.push(n);this.lines[t].width+=n.width}
/**
   * Returns the width in pixels of the current line.
   * @returns {number}
   */curWidth(){const t=this.lines[this.current];return t===void 0?0:t.width}
/**
   * Add text in block to current line
   * @param {string} text
   * @param {'bold'|'ital'|'boldital'|'mono'|'normal'} [mod]
   */append(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal";this._add(this.current,t,e)}
/**
   * Add text in block to current line and start a new line
   * @param {string} text
   * @param {'bold'|'ital'|'boldital'|'mono'|'normal'} [mod]
   */newLine(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal";this._add(this.current,t,e);this.current++}determineLineHeights(){for(let t=0;t<this.lines.length;t++){const e=this.lines[t];let i=0;if(e.blocks!==void 0)for(let t=0;t<e.blocks.length;t++){const r=e.blocks[t];i<r.height&&(i=r.height)}e.height=i}}determineLabelSize(){let t=0;let e=0;for(let i=0;i<this.lines.length;i++){const r=this.lines[i];r.width>t&&(t=r.width);e+=r.height}this.width=t;this.height=e}
/**
   * Remove all empty blocks and empty lines we don't need
   *
   * This must be done after the width/height determination,
   * so that these are set properly for processing here.
   * @returns {Array<Line>} Lines with empty blocks (and some empty lines) removed
   * @private
   */removeEmptyBlocks(){const t=[];for(let e=0;e<this.lines.length;e++){const i=this.lines[e];if(i.blocks.length===0)continue;if(e===this.lines.length-1&&i.width===0)continue;const r={};Ri(r,i);r.blocks=[];let o;const n=[];for(let t=0;t<i.blocks.length;t++){const e=i.blocks[t];e.width!==0?n.push(e):o===void 0&&(o=e)}n.length===0&&o!==void 0&&n.push(o);r.blocks=n;t.push(r)}return t}
/**
   * Set the sizes for all lines and the whole thing.
   * @returns {{width: (number|*), height: (number|*), lines: Array}}
   */finalize(){this.determineLineHeights();this.determineLabelSize();const t=this.removeEmptyBlocks();return{width:this.width,height:this.height,lines:t}}}const tC={"<b>":/<b>/,"<i>":/<i>/,"<code>":/<code>/,"</b>":/<\/b>/,"</i>":/<\/i>/,"</code>":/<\/code>/,"*":/\*/,_:/_/,"`":/`/,afterBold:/[^*]/,afterItal:/[^_]/,afterMono:/[^`]/};class MarkupAccumulator{
/**
   * Create an instance
   * @param {string} text  text to parse for markup
   */
constructor(t){this.text=t;this.bold=false;this.ital=false;this.mono=false;this.spacing=false;this.position=0;this.buffer="";this.modStack=[];this.blocks=[]}
/**
   * Return the mod label currently on the top of the stack
   * @returns {string}  label of topmost mod
   * @private
   */mod(){return this.modStack.length===0?"normal":this.modStack[0]}
/**
   * Return the mod label currently active
   * @returns {string}  label of active mod
   * @private
   */modName(){return this.modStack.length===0?"normal":this.modStack[0]==="mono"?"mono":this.bold&&this.ital?"boldital":this.bold?"bold":this.ital?"ital":void 0}emitBlock(){if(this.spacing){this.add(" ");this.spacing=false}if(this.buffer.length>0){this.blocks.push({text:this.buffer,mod:this.modName()});this.buffer=""}}
/**
   * Output text to buffer
   * @param {string} text  text to add
   * @private
   */add(t){t===" "&&(this.spacing=true);if(this.spacing){this.buffer+=" ";this.spacing=false}t!=" "&&(this.buffer+=t)}
/**
   * Handle parsing of whitespace
   * @param {string} ch  the character to check
   * @returns {boolean} true if the character was processed as whitespace, false otherwise
   */parseWS(t){if(/[ \t]/.test(t)){this.mono?this.add(t):this.spacing=true;return true}return false}
/**
   * @param {string} tagName  label for block type to set
   * @private
   */setTag(t){this.emitBlock();this[t]=true;this.modStack.unshift(t)}
/**
   * @param {string} tagName  label for block type to unset
   * @private
   */unsetTag(t){this.emitBlock();this[t]=false;this.modStack.shift()}
/**
   * @param {string} tagName label for block type we are currently processing
   * @param {string|RegExp} tag string to match in text
   * @returns {boolean} true if the tag was processed, false otherwise
   */parseStartTag(t,e){if(!this.mono&&!this[t]&&this.match(e)){this.setTag(t);return true}return false}
/**
   * @param {string|RegExp} tag
   * @param {number} [advance] if set, advance current position in text
   * @returns {boolean} true if match at given position, false otherwise
   * @private
   */match(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const[i,r]=this.prepareRegExp(t);const o=i.test(this.text.substr(this.position,r));o&&e&&(this.position+=r-1);return o}
/**
   * @param {string} tagName label for block type we are currently processing
   * @param {string|RegExp} tag string to match in text
   * @param {RegExp} [nextTag] regular expression to match for characters *following* the current tag
   * @returns {boolean} true if the tag was processed, false otherwise
   */parseEndTag(t,e,i){let r=this.mod()===t;r=t==="mono"?r&&this.mono:r&&!this.mono;if(r&&this.match(e)){i!==void 0?(this.position===this.text.length-1||this.match(i,false))&&this.unsetTag(t):this.unsetTag(t);return true}return false}
/**
   * @param {string|RegExp} tag  string to match in text
   * @param {value} value  string to replace tag with, if found at current position
   * @returns {boolean} true if the tag was processed, false otherwise
   */replace(t,e){if(this.match(t)){this.add(e);this.position+=length-1;return true}return false}
/**
   * Create a regular expression for the tag if it isn't already one.
   *
   * The return value is an array `[RegExp, number]`, with exactly two value, where:
   * - RegExp is the regular expression to use
   * - number is the lenth of the input string to match
   * @param {string|RegExp} tag  string to match in text
   * @returns {Array}  regular expression to use and length of input string to match
   * @private
   */prepareRegExp(t){let e;let i;if(t instanceof RegExp){i=t;e=1}else{const r=tC[t];i=r!==void 0?r:new RegExp(t);e=t.length}return[i,e]}}class LabelSplitter{
/**
   * @param {CanvasRenderingContext2D} ctx Canvas rendering context
   * @param {Label} parent reference to the Label instance using current instance
   * @param {boolean} selected
   * @param {boolean} hover
   */
constructor(t,e,i,r){this.ctx=t;this.parent=e;this.selected=i;this.hover=r;
/**
     * Callback to determine text width; passed to LabelAccumulator instance
     * @param  {string} text string to determine width of
     * @param  {string} mod  font type to use for this text
     * @returns {object} { width, values} width in pixels and font attributes
     */const o=(e,o)=>{if(e===void 0)return 0;const n=this.parent.getFormattingValues(t,i,r,o);let s=0;if(e!==""){const t=this.ctx.measureText(e);s=t.width}return{width:s,values:n}};this.lines=new LabelAccumulator(o)}
/**
   * Split passed text of a label into lines and blocks.
   *
   * # NOTE
   *
   * The handling of spacing is option dependent:
   *
   * - if `font.multi : false`, all spaces are retained
   * - if `font.multi : true`, every sequence of spaces is compressed to a single space
   *
   * This might not be the best way to do it, but this is as it has been working till now.
   * In order not to break existing functionality, for the time being this behaviour will
   * be retained in any code changes.
   * @param {string} text  text to split
   * @returns {Array<line>}
   */process(t){if(!RO(t))return this.lines.finalize();const e=this.parent.fontOptions;t=t.replace(/\r\n/g,"\n");t=t.replace(/\r/g,"\n");const i=String(t).split("\n");const r=i.length;if(e.multi)for(let t=0;t<r;t++){const r=this.splitBlocks(i[t],e.multi);if(r!==void 0)if(r.length!==0){if(e.maxWdt>0)for(let t=0;t<r.length;t++){const e=r[t].mod;const i=r[t].text;this.splitStringIntoLines(i,e,true)}else for(let t=0;t<r.length;t++){const e=r[t].mod;const i=r[t].text;this.lines.append(i,e)}this.lines.newLine()}else this.lines.newLine("")}else if(e.maxWdt>0)for(let t=0;t<r;t++)this.splitStringIntoLines(i[t]);else for(let t=0;t<r;t++)this.lines.newLine(i[t]);return this.lines.finalize()}
/**
   * normalize the markup system
   * @param {boolean|'md'|'markdown'|'html'} markupSystem
   * @returns {string}
   */decodeMarkupSystem(t){let e="none";t==="markdown"||t==="md"?e="markdown":t!==true&&t!=="html"||(e="html");return e}
/**
   *
   * @param {string} text
   * @returns {Array}
   */splitHtmlBlocks(t){const e=new MarkupAccumulator(t);const i=t=>{if(/&/.test(t)){const t=e.replace(e.text,"&lt;","<")||e.replace(e.text,"&amp;","&");t||e.add("&");return true}return false};while(e.position<e.text.length){const t=e.text.charAt(e.position);const r=e.parseWS(t)||/</.test(t)&&(e.parseStartTag("bold","<b>")||e.parseStartTag("ital","<i>")||e.parseStartTag("mono","<code>")||e.parseEndTag("bold","</b>")||e.parseEndTag("ital","</i>")||e.parseEndTag("mono","</code>"))||i(t);r||e.add(t);e.position++}e.emitBlock();return e.blocks}
/**
   *
   * @param {string} text
   * @returns {Array}
   */splitMarkdownBlocks(t){const e=new MarkupAccumulator(t);let i=true;const r=t=>{if(/\\/.test(t)){if(e.position<this.text.length+1){e.position++;t=this.text.charAt(e.position);if(/ \t/.test(t))e.spacing=true;else{e.add(t);i=false}}return true}return false};while(e.position<e.text.length){const t=e.text.charAt(e.position);const o=e.parseWS(t)||r(t)||(i||e.spacing)&&(e.parseStartTag("bold","*")||e.parseStartTag("ital","_")||e.parseStartTag("mono","`"))||e.parseEndTag("bold","*","afterBold")||e.parseEndTag("ital","_","afterItal")||e.parseEndTag("mono","`","afterMono");if(!o){e.add(t);i=false}e.position++}e.emitBlock();return e.blocks}
/**
   * Explodes a piece of text into single-font blocks using a given markup
   * @param {string} text
   * @param {boolean|'md'|'markdown'|'html'} markupSystem
   * @returns {Array.<{text: string, mod: string}>}
   * @private
   */splitBlocks(t,e){const i=this.decodeMarkupSystem(e);return i==="none"?[{text:t,mod:"normal"}]:i==="markdown"?this.splitMarkdownBlocks(t):i==="html"?this.splitHtmlBlocks(t):void 0}
/**
   * @param {string} text
   * @returns {boolean} true if text length over the current max with
   * @private
   */overMaxWidth(t){const e=this.ctx.measureText(t).width;return this.lines.curWidth()+e>this.parent.fontOptions.maxWdt}
/**
   * Determine the longest part of the sentence which still fits in the
   * current max width.
   * @param {Array} words  Array of strings signifying a text lines
   * @returns {number}      index of first item in string making string go over max
   * @private
   */getLongestFit(t){let e="";let i=0;while(i<t.length){const r=e===""?"":" ";const o=e+r+t[i];if(this.overMaxWidth(o))break;e=o;i++}return i}
/**
   * Determine the longest part of the string which still fits in the
   * current max width.
   * @param {Array} words Array of strings signifying a text lines
   * @returns {number} index of first item in string making string go over max
   */getLongestFitWord(t){let e=0;while(e<t.length){if(this.overMaxWidth(Ya(t).call(t,0,e)))break;e++}return e}
/**
   * Split the passed text into lines, according to width constraint (if any).
   *
   * The method assumes that the input string is a single line, i.e. without lines break.
   *
   * This method retains spaces, if still present (case `font.multi: false`).
   * A space which falls on an internal line break, will be replaced by a newline.
   * There is no special handling of tabs; these go along with the flow.
   * @param {string} str
   * @param {string} [mod]
   * @param {boolean} [appendLast]
   * @private
   */splitStringIntoLines(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"normal";let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this.parent.getFormattingValues(this.ctx,this.selected,this.hover,e);t=t.replace(/^( +)/g,"$1\r");t=t.replace(/([^\r][^ ]*)( +)/g,"$1\r$2\r");let r=t.split("\r");while(r.length>0){let t=this.getLongestFit(r);if(t===0){const t=r[0];const i=this.getLongestFitWord(t);this.lines.newLine(Ya(t).call(t,0,i),e);r[0]=Ya(t).call(t,i)}else{let o=t;r[t-1]===" "?t--:r[o]===" "&&o++;const n=Ya(r).call(r,0,t).join("");t==r.length&&i?this.lines.append(n,e):this.lines.newLine(n,e);r=Ya(r).call(r,o)}}}}const eC=["bold","ital","boldital","mono"];class Label{
/**
   * @param {object} body
   * @param {object} options
   * @param {boolean} [edgelabel]
   */
constructor(t,e){let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this.body=t;this.pointToSelf=false;this.baseSize=void 0;this.fontOptions={};this.setOptions(e);this.size={top:0,left:0,width:0,height:0,yLine:0};this.isEdgeLabel=i}
/**
   * @param {object} options the options of the parent Node-instance
   */setOptions(t){this.elementOptions=t;this.initFontOptions(t.font);RO(t.label)?this.labelDirty=true:t.label=void 0;if(t.font!==void 0&&t.font!==null)if(typeof t.font==="string")this.baseSize=this.fontOptions.size;else if(typeof t.font==="object"){const e=t.font.size;e!==void 0&&(this.baseSize=e)}}
/**
   * Init the font Options structure.
   *
   * Member fontOptions serves as an accumulator for the current font options.
   * As such, it needs to be completely separated from the node options.
   * @param {object} newFontOptions the new font options to process
   * @private
   */initFontOptions(t){nm(eC,(t=>{this.fontOptions[t]={}}));Label.parseFontString(this.fontOptions,t)?this.fontOptions.vadjust=0:nm(t,((t,e)=>{t!==void 0&&t!==null&&typeof t!=="object"&&(this.fontOptions[e]=t)}))}
/**
   * If in-variable is a string, parse it as a font specifier.
   *
   * Note that following is not done here and have to be done after the call:
   * - Not all font options are set (vadjust, mod)
   * @param {object} outOptions  out-parameter, object in which to store the parse results (if any)
   * @param {object} inOptions  font options to parse
   * @returns {boolean} true if font parsed as string, false otherwise
   * @static
   */static parseFontString(t,e){if(!e||typeof e!=="string")return false;const i=e.split(" ");t.size=+i[0].replace("px","");t.face=i[1];t.color=i[2];return true}
/**
   * Set the width and height constraints based on 'nearest' value
   * @param {Array} pile array of option objects to consider
   * @returns {object} the actual constraint values to use
   * @private
   */constrain(t){const e={constrainWidth:false,maxWdt:-1,minWdt:-1,constrainHeight:false,minHgt:-1,valign:"middle"};const i=wm(t,"widthConstraint");if(typeof i==="number"){e.maxWdt=Number(i);e.minWdt=Number(i)}else if(typeof i==="object"){const i=wm(t,["widthConstraint","maximum"]);typeof i==="number"&&(e.maxWdt=Number(i));const r=wm(t,["widthConstraint","minimum"]);typeof r==="number"&&(e.minWdt=Number(r))}const r=wm(t,"heightConstraint");if(typeof r==="number")e.minHgt=Number(r);else if(typeof r==="object"){const i=wm(t,["heightConstraint","minimum"]);typeof i==="number"&&(e.minHgt=Number(i));const r=wm(t,["heightConstraint","valign"]);typeof r==="string"&&(r!=="top"&&r!=="bottom"||(e.valign=r))}return e}
/**
   * Set options and update internal state
   * @param {object} options  options to set
   * @param {Array}  pile     array of option objects to consider for option 'chosen'
   */update(t,e){this.setOptions(t,true);this.propagateFonts(e);tm(this.fontOptions,this.constrain(e));this.fontOptions.chooser=FO("label",e)}
/**
   * When margins are set in an element, adjust sizes is called to remove them
   * from the width/height constraints. This must be done prior to label sizing.
   * @param {{top: number, right: number, bottom: number, left: number}} margins
   */adjustSizes(t){const e=t?t.right+t.left:0;if(this.fontOptions.constrainWidth){this.fontOptions.maxWdt-=e;this.fontOptions.minWdt-=e}const i=t?t.top+t.bottom:0;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=i)}
/**
   * Add the font members of the passed list of option objects to the pile.
   * @param {Pile} dstPile  pile of option objects add to
   * @param {Pile} srcPile  pile of option objects to take font options from
   * @private
   */
addFontOptionsToPile(t,e){for(let i=0;i<e.length;++i)this.addFontToPile(t,e[i])}
/**
   * Add given font option object to the list of objects (the 'pile') to consider for determining
   * multi-font option values.
   * @param {Pile} pile  pile of option objects to use
   * @param {object} options  instance to add to pile
   * @private
   */addFontToPile(t,e){if(e===void 0)return;if(e.font===void 0||e.font===null)return;const i=e.font;t.push(i)}
/**
   * Collect all own-property values from the font pile that aren't multi-font option objectss.
   * @param {Pile} pile  pile of option objects to use
   * @returns {object} object with all current own basic font properties
   * @private
   */getBasicOptions(t){const e={};for(let i=0;i<t.length;++i){let r=t[i];const o={};Label.parseFontString(o,r)&&(r=o);nm(r,((t,i)=>{t!==void 0&&(Object.prototype.hasOwnProperty.call(e,i)||(zu(eC).call(eC,i)!==-1?e[i]={}:e[i]=t))}))}return e}
/**
   * Return the value for given option for the given multi-font.
   *
   * All available option objects are trawled in the set order to construct the option values.
   *
   * ---------------------------------------------------------------------
   * ## Traversal of pile for multi-fonts
   *
   * The determination of multi-font option values is a special case, because any values not
   * present in the multi-font options should by definition be taken from the main font options,
   * i.e. from the current 'parent' object of the multi-font option.
   *
   * ### Search order for multi-fonts
   *
   * 'bold' used as example:
   *
   * - search in option group 'bold' in local properties
   * - search in main font option group in local properties
   *
   * ---------------------------------------------------------------------
   * @param {Pile} pile  pile of option objects to use
   * @param {MultiFontStyle} multiName sub path for the multi-font
   * @param {string} option  the option to search for, for the given multi-font
   * @returns {string|number} the value for the given option
   * @private
   */getFontOption(t,e,i){let r;for(let o=0;o<t.length;++o){const n=t[o];if(Object.prototype.hasOwnProperty.call(n,e)){r=n[e];if(r===void 0||r===null)continue;const t={};Label.parseFontString(t,r)&&(r=t);if(Object.prototype.hasOwnProperty.call(r,i))return r[i]}}if(Object.prototype.hasOwnProperty.call(this.fontOptions,i))return this.fontOptions[i];throw new Error("Did not find value for multi-font for property: '"+i+"'")}
/**
   * Return all options values for the given multi-font.
   *
   * All available option objects are trawled in the set order to construct the option values.
   * @param {Pile} pile  pile of option objects to use
   * @param {MultiFontStyle} multiName sub path for the mod-font
   * @returns {MultiFontOptions}
   * @private
   */getFontOptions(t,e){const i={};const r=["color","size","face","mod","vadjust"];for(let o=0;o<r.length;++o){const n=r[o];i[n]=this.getFontOption(t,e,n)}return i}
/**
   * Collapse the font options for the multi-font to single objects, from
   * the chain of option objects passed (the 'pile').
   * @param {Pile} pile  sequence of option objects to consider.
   *                     First item in list assumed to be the newly set options.
   */
propagateFonts(t){const e=[];this.addFontOptionsToPile(e,t);this.fontOptions=this.getBasicOptions(e);for(let t=0;t<eC.length;++t){const i=eC[t];const r=this.fontOptions[i];const o=this.getFontOptions(e,i);nm(o,((t,e)=>{r[e]=t}));r.size=Number(r.size);r.vadjust=Number(r.vadjust)}}
/**
   * Main function. This is called from anything that wants to draw a label.
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x
   * @param {number} y
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {string} [baseline]
   */draw(t,e,i,r,o){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"middle";if(this.elementOptions.label===void 0)return;let s=this.fontOptions.size*this.body.view.scale;if(!(this.elementOptions.label&&s<this.elementOptions.scaling.label.drawThreshold-1)){s>=this.elementOptions.scaling.label.maxVisible&&(s=Number(this.elementOptions.scaling.label.maxVisible)/this.body.view.scale);this.calculateLabelSize(t,r,o,e,i,n);this._drawBackground(t);this._drawText(t,e,this.size.yLine,n,s)}}
/**
   * Draws the label background
   * @param {CanvasRenderingContext2D} ctx
   * @private
   */_drawBackground(t){if(this.fontOptions.background!==void 0&&this.fontOptions.background!=="none"){t.fillStyle=this.fontOptions.background;const e=this.getSize();t.fillRect(e.left,e.top,e.width,e.height)}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x
   * @param {number} y
   * @param {string} [baseline]
   * @param {number} viewFontSize
   * @private
   */_drawText(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"middle";let o=arguments.length>4?arguments[4]:void 0;[e,i]=this._setAlignment(t,e,i,r);t.textAlign="left";e-=this.size.width/2;if(this.fontOptions.valign&&this.size.height>this.size.labelHeight){this.fontOptions.valign==="top"&&(i-=(this.size.height-this.size.labelHeight)/2);this.fontOptions.valign==="bottom"&&(i+=(this.size.height-this.size.labelHeight)/2)}for(let r=0;r<this.lineCount;r++){const n=this.lines[r];if(n&&n.blocks){let r=0;this.isEdgeLabel||this.fontOptions.align==="center"?r+=(this.size.width-n.width)/2:this.fontOptions.align==="right"&&(r+=this.size.width-n.width);for(let s=0;s<n.blocks.length;s++){const a=n.blocks[s];t.font=a.font;const[h,d]=this._getColor(a.color,o,a.strokeColor);if(a.strokeWidth>0){t.lineWidth=a.strokeWidth;t.strokeStyle=d;t.lineJoin="round"}t.fillStyle=h;a.strokeWidth>0&&t.strokeText(a.text,e+r,i+a.vadjust);t.fillText(a.text,e+r,i+a.vadjust);r+=a.width}i+=n.height}}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x
   * @param {number} y
   * @param {string} baseline
   * @returns {Array.<number>}
   * @private
   */_setAlignment(t,e,i,r){if(this.isEdgeLabel&&this.fontOptions.align!=="horizontal"&&this.pointToSelf===false){e=0;i=0;const r=2;if(this.fontOptions.align==="top"){t.textBaseline="alphabetic";i-=2*r}else if(this.fontOptions.align==="bottom"){t.textBaseline="hanging";i+=2*r}else t.textBaseline="middle"}else t.textBaseline=r;return[e,i]}
/**
   * fade in when relative scale is between threshold and threshold - 1.
   * If the relative scale would be smaller than threshold -1 the draw function would have returned before coming here.
   * @param {string} color  The font color to use
   * @param {number} viewFontSize
   * @param {string} initialStrokeColor
   * @returns {Array.<string>} An array containing the font color and stroke color
   * @private
   */_getColor(t,e,i){let r=t||"#000000";let o=i||"#ffffff";if(e<=this.elementOptions.scaling.label.drawThreshold){const t=Math.max(0,Math.min(1,1-(this.elementOptions.scaling.label.drawThreshold-e)));r=am(r,t);o=am(o,t)}return[r,o]}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   * @returns {{width: number, height: number}}
   */getTextSize(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this._processLabel(t,e,i);return{width:this.size.width,height:this.size.height,lineCount:this.lineCount}}
/**
   * Get the current dimensions of the label
   * @returns {rect}
   */getSize(){const t=2;let e=this.size.left;let i=this.size.top-.5*t;if(this.isEdgeLabel){const r=.5*-this.size.width;switch(this.fontOptions.align){case"middle":e=r;i=.5*-this.size.height;break;case"top":e=r;i=-(this.size.height+t);break;case"bottom":e=r;i=t;break}}const r={left:e,top:i,width:this.size.width,height:this.size.height};return r}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {number} [x]
   * @param {number} [y]
   * @param {'middle'|'hanging'} [baseline]
   */calculateLabelSize(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"middle";this._processLabel(t,e,i);this.size.left=r-this.size.width*.5;this.size.top=o-this.size.height*.5;this.size.yLine=o+.5*(1-this.lineCount)*this.fontOptions.size;if(n==="hanging"){this.size.top+=.5*this.fontOptions.size;this.size.top+=4;this.size.yLine+=4}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {string} mod
   * @returns {{color, size, face, mod, vadjust, strokeWidth: *, strokeColor: (*|string|allOptions.edges.font.strokeColor|{string}|allOptions.nodes.font.strokeColor|Array)}}
   */getFormattingValues(t,e,i,r){const o=function(t,e,i){return e==="normal"?i==="mod"?"":t[i]:t[e][i]!==void 0?t[e][i]:t[i]};const n={color:o(this.fontOptions,r,"color"),size:o(this.fontOptions,r,"size"),face:o(this.fontOptions,r,"face"),mod:o(this.fontOptions,r,"mod"),vadjust:o(this.fontOptions,r,"vadjust"),strokeWidth:this.fontOptions.strokeWidth,strokeColor:this.fontOptions.strokeColor};(e||i)&&(r==="normal"&&this.fontOptions.chooser===true&&this.elementOptions.labelHighlightBold?n.mod="bold":typeof this.fontOptions.chooser==="function"&&this.fontOptions.chooser(n,this.elementOptions.id,e,i));let s="";n.mod!==void 0&&n.mod!==""&&(s+=n.mod+" ");s+=n.size+"px "+n.face;t.font=s.replace(/"/g,"");n.font=t.font;n.height=n.size;return n}
/**
   *
   * @param {boolean} selected
   * @param {boolean} hover
   * @returns {boolean}
   */differentState(t,e){return t!==this.selectedState||e!==this.hoverState}
/**
   * This explodes the passed text into lines and determines the width, height and number of lines.
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {string} inText  the text to explode
   * @returns {{width, height, lines}|*}
   * @private
   */_processLabelText(t,e,i,r){const o=new LabelSplitter(t,this,e,i);return o.process(r)}
/**
   * This explodes the label string into lines and sets the width, height and number of lines.
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   * @private
   */_processLabel(t,e,i){if(this.labelDirty===false&&!this.differentState(e,i))return;const r=this._processLabelText(t,e,i,this.elementOptions.label);this.fontOptions.minWdt>0&&r.width<this.fontOptions.minWdt&&(r.width=this.fontOptions.minWdt);this.size.labelHeight=r.height;this.fontOptions.minHgt>0&&r.height<this.fontOptions.minHgt&&(r.height=this.fontOptions.minHgt);this.lines=r.lines;this.lineCount=r.lines.length;this.size.width=r.width;this.size.height=r.height;this.selectedState=e;this.hoverState=i;this.labelDirty=false}
/**
   * Check if this label is visible
   * @returns {boolean} true if this label will be show, false otherwise
   */visible(){if(this.size.width===0||this.size.height===0||this.elementOptions.label===void 0)return false;const t=this.fontOptions.size*this.body.view.scale;return!(t<this.elementOptions.scaling.label.drawThreshold-1)}}class NodeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){this.body=e;this.labelModule=i;this.setOptions(t);this.top=void 0;this.left=void 0;this.height=void 0;this.width=void 0;this.radius=void 0;this.margin=void 0;this.refreshNeeded=true;this.boundingBox={top:0,left:0,right:0,bottom:0}}
/**
   *
   * @param {object} options
   */setOptions(t){this.options=t}
/**
   *
   * @param {Label} labelModule
   * @private
   */_setMargins(t){this.margin={};if(this.options.margin)if(typeof this.options.margin=="object"){this.margin.top=this.options.margin.top;this.margin.right=this.options.margin.right;this.margin.bottom=this.options.margin.bottom;this.margin.left=this.options.margin.left}else{this.margin.top=this.options.margin;this.margin.right=this.options.margin;this.margin.bottom=this.options.margin;this.margin.left=this.options.margin}t.adjustSizes(this.margin)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   * @private
   */_distanceToBorder(t,e){const i=this.options.borderWidth;t&&this.resize(t);return Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {ArrowOptions} values
   */enableShadow(t,e){if(e.shadow){t.shadowColor=e.shadowColor;t.shadowBlur=e.shadowSize;t.shadowOffsetX=e.shadowX;t.shadowOffsetY=e.shadowY}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {ArrowOptions} values
   */disableShadow(t,e){if(e.shadow){t.shadowColor="rgba(0,0,0,0)";t.shadowBlur=0;t.shadowOffsetX=0;t.shadowOffsetY=0}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {ArrowOptions} values
   */enableBorderDashes(t,e){if(e.borderDashes!==false)if(t.setLineDash!==void 0){let i=e.borderDashes;i===true&&(i=[5,15]);t.setLineDash(i)}else{console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used.");this.options.shapeProperties.borderDashes=false;e.borderDashes=false}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {ArrowOptions} values
   */disableBorderDashes(t,e){if(e.borderDashes!==false)if(t.setLineDash!==void 0)t.setLineDash([0]);else{console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used.");this.options.shapeProperties.borderDashes=false;e.borderDashes=false}}
/**
   * Determine if the shape of a node needs to be recalculated.
   * @param {boolean} selected
   * @param {boolean} hover
   * @returns {boolean}
   * @protected
   */needsRefresh(t,e){if(this.refreshNeeded===true){this.refreshNeeded=false;return true}return this.width===void 0||this.labelModule.differentState(t,e)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {ArrowOptions} values
   */initContextForDraw(t,e){const i=e.borderWidth/this.body.view.scale;t.lineWidth=Math.min(this.width,i);t.strokeStyle=e.borderColor;t.fillStyle=e.color}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {ArrowOptions} values
   */performStroke(t,e){const i=e.borderWidth/this.body.view.scale;t.save();if(i>0){this.enableBorderDashes(t,e);t.stroke();this.disableBorderDashes(t,e)}t.restore()}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {ArrowOptions} values
   */performFill(t,e){t.save();t.fillStyle=e.color;this.enableShadow(t,e);cf(t).call(t);this.disableShadow(t,e);t.restore();this.performStroke(t,e)}
/**
   *
   * @param {number} margin
   * @private
   */_addBoundingBoxMargin(t){this.boundingBox.left-=t;this.boundingBox.top-=t;this.boundingBox.bottom+=t;this.boundingBox.right+=t}
/**
   * Actual implementation of this method call.
   *
   * Doing it like this makes it easier to override
   * in the child classes.
   * @param {number} x width
   * @param {number} y height
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   * @private
   */_updateBoundingBox(t,e,i,r,o){i!==void 0&&this.resize(i,r,o);this.left=t-this.width/2;this.top=e-this.height/2;this.boundingBox.left=this.left;this.boundingBox.top=this.top;this.boundingBox.bottom=this.top+this.height;this.boundingBox.right=this.left+this.width}
/**
   * Default implementation of this method call.
   * This acts as a stub which can be overridden.
   * @param {number} x width
   * @param {number} y height
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   */updateBoundingBox(t,e,i,r,o){this._updateBoundingBox(t,e,i,r,o)}
/**
   * Determine the dimensions to use for nodes with an internal label
   *
   * Currently, these are: Circle, Ellipse, Database, Box
   * The other nodes have external labels, and will not call this method
   *
   * If there is no label, decent default values are supplied.
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} [selected]
   * @param {boolean} [hover]
   * @returns {{width:number, height:number}}
   */getDimensionsFromLabel(t,e,i){this.textSize=this.labelModule.getTextSize(t,e,i);let r=this.textSize.width;let o=this.textSize.height;const n=14;if(r===0){r=n;o=n}return{width:r,height:o}}}let iC=class Box extends NodeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i);this._setMargins(i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} [selected]
   * @param {boolean} [hover]
   */resize(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selected;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.hover;if(this.needsRefresh(e,i)){const r=this.getDimensionsFromLabel(t,e,i);this.width=r.width+this.margin.right+this.margin.left;this.height=r.height+this.margin.top+this.margin.bottom;this.radius=this.width/2}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   */draw(t,e,i,r,o,n){this.resize(t,r,o);this.left=e-this.width/2;this.top=i-this.height/2;this.initContextForDraw(t,n);mr(t,this.left,this.top,this.width,this.height,n.borderRadius);this.performFill(t,n);this.updateBoundingBox(e,i,t,r,o);this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,r,o)}
/**
   *
   * @param {number} x width
   * @param {number} y height
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   */updateBoundingBox(t,e,i,r,o){this._updateBoundingBox(t,e,i,r,o);const n=this.options.shapeProperties.borderRadius;this._addBoundingBoxMargin(n)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){t&&this.resize(t);const i=this.options.borderWidth;return Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}};class CircleImageBase extends NodeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i);this.labelOffset=0;this.selected=false}
/**
   *
   * @param {object} options
   * @param {object} [imageObj]
   * @param {object} [imageObjAlt]
   */setOptions(t,e,i){this.options=t;e===void 0&&i===void 0||this.setImages(e,i)}
/**
   * Set the images for this node.
   *
   * The images can be updated after the initial setting of options;
   * therefore, this method needs to be reentrant.
   *
   * For correct working in error cases, it is necessary to properly set
   * field 'nodes.brokenImage' in the options.
   * @param {Image} imageObj  required; main image to show for this node
   * @param {Image|undefined} imageObjAlt optional; image to show when node is selected
   */setImages(t,e){if(e&&this.selected){this.imageObj=e;this.imageObjAlt=t}else{this.imageObj=t;this.imageObjAlt=e}}
/**
   * Set selection and switch between the base and the selected image.
   *
   * Do the switch only if imageObjAlt exists.
   * @param {boolean} selected value of new selected state for current node
   */switchImages(t){const e=t&&!this.selected||!t&&this.selected;this.selected=t;if(this.imageObjAlt!==void 0&&e){const t=this.imageObj;this.imageObj=this.imageObjAlt;this.imageObjAlt=t}}
/**
   * Returns Image Padding from node options
   * @returns {{top: number,left: number,bottom: number,right: number}} image padding inside this shape
   * @private
   */_getImagePadding(){const t={top:0,right:0,bottom:0,left:0};if(this.options.imagePadding){const e=this.options.imagePadding;if(typeof e=="object"){t.top=e.top;t.right=e.right;t.bottom=e.bottom;t.left=e.left}else{t.top=e;t.right=e;t.bottom=e;t.left=e}}return t}_resizeImage(){let t,e;if(this.options.shapeProperties.useImageSize===false){let i=1;let r=1;this.imageObj.width&&this.imageObj.height&&(this.imageObj.width>this.imageObj.height?i=this.imageObj.width/this.imageObj.height:r=this.imageObj.height/this.imageObj.width);t=this.options.size*2*i;e=this.options.size*2*r}else{const i=this._getImagePadding();t=this.imageObj.width+i.left+i.right;e=this.imageObj.height+i.top+i.bottom}this.width=t;this.height=e;this.radius=.5*this.width}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {ArrowOptions} values
   * @private
   */_drawRawCircle(t,e,i,r){this.initContextForDraw(t,r);cr(t,e,i,r.size);this.performFill(t,r)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {ArrowOptions} values
   * @private
   */_drawImageAtPosition(t,e){if(this.imageObj.width!=0){t.globalAlpha=e.opacity!==void 0?e.opacity:1;this.enableShadow(t,e);let i=1;this.options.shapeProperties.interpolation===true&&(i=this.imageObj.width/this.width/this.body.view.scale);const r=this._getImagePadding();const o=this.left+r.left;const n=this.top+r.top;const s=this.width-r.left-r.right;const a=this.height-r.top-r.bottom;this.imageObj.drawImageAtPosition(t,i,o,n,s,a);this.disableShadow(t,e)}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @private
   */_drawImageLabel(t,e,i,r,o){let n=0;if(this.height!==void 0){n=this.height*.5;const e=this.labelModule.getTextSize(t,r,o);e.lineCount>=1&&(n+=e.height/2)}const s=i+n;this.options.label&&(this.labelOffset=n);this.labelModule.draw(t,e,s,r,o,"hanging")}}let rC=class Circle extends CircleImageBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i);this._setMargins(i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} [selected]
   * @param {boolean} [hover]
   */resize(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selected;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.hover;if(this.needsRefresh(e,i)){const r=this.getDimensionsFromLabel(t,e,i);const o=Math.max(r.width+this.margin.right+this.margin.left,r.height+this.margin.top+this.margin.bottom);this.options.size=o/2;this.width=o;this.height=o;this.radius=this.width/2}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   */draw(t,e,i,r,o,n){this.resize(t,r,o);this.left=e-this.width/2;this.top=i-this.height/2;this._drawRawCircle(t,e,i,n);this.updateBoundingBox(e,i);this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,i,r,o)}
/**
   *
   * @param {number} x width
   * @param {number} y height
   */updateBoundingBox(t,e){this.boundingBox.top=e-this.options.size;this.boundingBox.left=t-this.options.size;this.boundingBox.right=t+this.options.size;this.boundingBox.bottom=e+this.options.size}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @returns {number}
   */distanceToBorder(t){t&&this.resize(t);return this.width*.5}};class CircularImage extends CircleImageBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   * @param {Image} imageObj
   * @param {Image} imageObjAlt
   */
constructor(t,e,i,r,o){super(t,e,i);this.setImages(r,o)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} [selected]
   * @param {boolean} [hover]
   */resize(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selected;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.hover;const r=this.imageObj.src===void 0||this.imageObj.width===void 0||this.imageObj.height===void 0;if(r){const t=this.options.size*2;this.width=t;this.height=t;this.radius=.5*this.width}else this.needsRefresh(e,i)&&this._resizeImage()}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   */draw(t,e,i,r,o,n){this.switchImages(r);this.resize();let s=e,a=i;if(this.options.shapeProperties.coordinateOrigin==="top-left"){this.left=e;this.top=i;s+=this.width/2;a+=this.height/2}else{this.left=e-this.width/2;this.top=i-this.height/2}this._drawRawCircle(t,s,a,n);t.save();t.clip();this._drawImageAtPosition(t,n);t.restore();this._drawImageLabel(t,s,a,r,o);this.updateBoundingBox(e,i)}
/**
   *
   * @param {number} x width
   * @param {number} y height
   */
updateBoundingBox(t,e){if(this.options.shapeProperties.coordinateOrigin==="top-left"){this.boundingBox.top=e;this.boundingBox.left=t;this.boundingBox.right=t+this.options.size*2;this.boundingBox.bottom=e+this.options.size*2}else{this.boundingBox.top=e-this.options.size;this.boundingBox.left=t-this.options.size;this.boundingBox.right=t+this.options.size;this.boundingBox.bottom=e+this.options.size}this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left);this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width);this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @returns {number}
   */distanceToBorder(t){t&&this.resize(t);return this.width*.5}}class ShapeBase extends NodeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} [selected]
   * @param {boolean} [hover]
   * @param {object} [values]
   */resize(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selected;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.hover;let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{size:this.options.size};if(this.needsRefresh(e,i)){var o,n;this.labelModule.getTextSize(t,e,i);const s=2*r.size;this.width=(o=this.customSizeWidth)!==null&&o!==void 0?o:s;this.height=(n=this.customSizeHeight)!==null&&n!==void 0?n:s;this.radius=.5*this.width}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {string} shape
   * @param {number} sizeMultiplier - Unused! TODO: Remove next major release
   * @param {number} x
   * @param {number} y
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @private
   * @returns {object} Callbacks to draw later on higher layers.
   */_drawShape(t,e,i,r,o,n,s,a){this.resize(t,n,s,a);this.left=r-this.width/2;this.top=o-this.height/2;this.initContextForDraw(t,a);Er(e)(t,r,o,a.size);this.performFill(t,a);if(this.options.icon!==void 0&&this.options.icon.code!==void 0){t.font=(n?"bold ":"")+this.height/2+"px "+(this.options.icon.face||"FontAwesome");t.fillStyle=this.options.icon.color||"black";t.textAlign="center";t.textBaseline="middle";t.fillText(this.options.icon.code,r,o)}return{drawExternalLabel:()=>{if(this.options.label!==void 0){this.labelModule.calculateLabelSize(t,n,s,r,o,"hanging");const e=o+.5*this.height+.5*this.labelModule.size.height;this.labelModule.draw(t,r,e,n,s,"hanging")}this.updateBoundingBox(r,o)}}}
/**
   *
   * @param {number} x
   * @param {number} y
   */updateBoundingBox(t,e){this.boundingBox.top=e-this.options.size;this.boundingBox.left=t-this.options.size;this.boundingBox.right=t+this.options.size;this.boundingBox.bottom=e+this.options.size;if(this.options.label!==void 0&&this.labelModule.size.width>0){this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left);this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width);this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height)}}}function oC(t,e){var i=Lh(t);if(WE){var r=WE(t);e&&(r=Pc(r).call(r,(function(e){return iO(t,e).enumerable}))),i.push.apply(i,r)}return i}function nC(t){for(var e=1;e<arguments.length;e++){var i,r;var o=null!=arguments[e]?arguments[e]:{};e%2?Ed(i=oC(Object(o),true)).call(i,(function(e){tE(t,e,o[e])})):gO?DO(t,gO(o)):Ed(r=oC(Object(o))).call(r,(function(e){zO(t,e,iO(o,e))}))}return t}class CustomShape extends ShapeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   * @param {Function} ctxRenderer
   */
constructor(t,e,i,r){super(t,e,i,r);this.ctxRenderer=r}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on different layers.
   */draw(t,e,i,r,o,n){this.resize(t,r,o,n);this.left=e-this.width/2;this.top=i-this.height/2;t.save();const s=this.ctxRenderer({ctx:t,id:this.options.id,x:e,y:i,state:{selected:r,hover:o},style:nC({},n),label:this.options.label});s.drawNode!=null&&s.drawNode();t.restore();if(s.drawExternalLabel){const e=s.drawExternalLabel;s.drawExternalLabel=()=>{t.save();e();t.restore()}}if(s.nodeDimensions){this.customSizeWidth=s.nodeDimensions.width;this.customSizeHeight=s.nodeDimensions.height}return s}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}}class Database extends NodeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i);this._setMargins(i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   */resize(t,e,i){if(this.needsRefresh(e,i)){const r=this.getDimensionsFromLabel(t,e,i);const o=r.width+this.margin.right+this.margin.left;this.width=o;this.height=o;this.radius=this.width/2}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   */draw(t,e,i,r,o,n){this.resize(t,r,o);this.left=e-this.width/2;this.top=i-this.height/2;this.initContextForDraw(t,n);br(t,e-this.width/2,i-this.height/2,this.width,this.height);this.performFill(t,n);this.updateBoundingBox(e,i,t,r,o);this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,r,o)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}}let sC=class Diamond extends ShapeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t,e,i,r,o,n){return this._drawShape(t,"diamond",4,e,i,r,o,n)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}};class Dot extends ShapeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t,e,i,r,o,n){return this._drawShape(t,"circle",2,e,i,r,o,n)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @returns {number}
   */distanceToBorder(t){t&&this.resize(t);return this.options.size}}class Ellipse extends NodeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} [selected]
   * @param {boolean} [hover]
   */resize(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selected;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.hover;if(this.needsRefresh(e,i)){const r=this.getDimensionsFromLabel(t,e,i);this.height=r.height*2;this.width=r.width+r.height;this.radius=.5*this.width}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   */draw(t,e,i,r,o,n){this.resize(t,r,o);this.left=e-this.width*.5;this.top=i-this.height*.5;this.initContextForDraw(t,n);yr(t,this.left,this.top,this.width,this.height);this.performFill(t,n);this.updateBoundingBox(e,i,t,r,o);this.labelModule.draw(t,e,i,r,o)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){t&&this.resize(t);const i=this.width*.5;const r=this.height*.5;const o=Math.sin(e)*i;const n=Math.cos(e)*r;return i*r/Math.sqrt(o*o+n*n)}}class Icon extends NodeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i);this._setMargins(i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx - Unused.
   * @param {boolean} [selected]
   * @param {boolean} [hover]
   */resize(t,e,i){if(this.needsRefresh(e,i)){this.iconSize={width:Number(this.options.icon.size),height:Number(this.options.icon.size)};this.width=this.iconSize.width+this.margin.right+this.margin.left;this.height=this.iconSize.height+this.margin.top+this.margin.bottom;this.radius=.5*this.width}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t,e,i,r,o,n){this.resize(t,r,o);this.options.icon.size=this.options.icon.size||50;this.left=e-this.width/2;this.top=i-this.height/2;this._icon(t,e,i,r,o,n);return{drawExternalLabel:()=>{if(this.options.label!==void 0){const e=5;this.labelModule.draw(t,this.left+this.iconSize.width/2+this.margin.left,i+this.height/2+e,r)}this.updateBoundingBox(e,i)}}}
/**
   *
   * @param {number} x
   * @param {number} y
   */updateBoundingBox(t,e){this.boundingBox.top=e-this.options.icon.size*.5;this.boundingBox.left=t-this.options.icon.size*.5;this.boundingBox.right=t+this.options.icon.size*.5;this.boundingBox.bottom=e+this.options.icon.size*.5;if(this.options.label!==void 0&&this.labelModule.size.width>0){const t=5;this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left);this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width);this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+t)}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover - Unused
   * @param {ArrowOptions} values
   */_icon(t,e,i,r,o,n){const s=Number(this.options.icon.size);if(this.options.icon.code!==void 0){t.font=[this.options.icon.weight!=null?this.options.icon.weight:r?"bold":"",(this.options.icon.weight!=null&&r?5:0)+s+"px",this.options.icon.face].join(" ");t.fillStyle=this.options.icon.color||"black";t.textAlign="center";t.textBaseline="middle";this.enableShadow(t,n);t.fillText(this.options.icon.code,e,i);this.disableShadow(t,n)}else console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}}let aC=class Image extends CircleImageBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   * @param {Image} imageObj
   * @param {Image} imageObjAlt
   */
constructor(t,e,i,r,o){super(t,e,i);this.setImages(r,o)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx - Unused.
   * @param {boolean} [selected]
   * @param {boolean} [hover]
   */resize(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selected;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.hover;const r=this.imageObj.src===void 0||this.imageObj.width===void 0||this.imageObj.height===void 0;if(r){const t=this.options.size*2;this.width=t;this.height=t}else this.needsRefresh(e,i)&&this._resizeImage()}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   */draw(t,e,i,r,o,n){t.save();this.switchImages(r);this.resize();let s=e,a=i;if(this.options.shapeProperties.coordinateOrigin==="top-left"){this.left=e;this.top=i;s+=this.width/2;a+=this.height/2}else{this.left=e-this.width/2;this.top=i-this.height/2}if(this.options.shapeProperties.useBorderWithImage===true){const e=this.options.borderWidth;const i=this.options.borderWidthSelected||2*this.options.borderWidth;const s=(r?i:e)/this.body.view.scale;t.lineWidth=Math.min(this.width,s);t.beginPath();let a=r?this.options.color.highlight.border:o?this.options.color.hover.border:this.options.color.border;let h=r?this.options.color.highlight.background:o?this.options.color.hover.background:this.options.color.background;if(n.opacity!==void 0){a=am(a,n.opacity);h=am(h,n.opacity)}t.strokeStyle=a;t.fillStyle=h;t.rect(this.left-.5*t.lineWidth,this.top-.5*t.lineWidth,this.width+t.lineWidth,this.height+t.lineWidth);cf(t).call(t);this.performStroke(t,n);t.closePath()}this._drawImageAtPosition(t,n);this._drawImageLabel(t,s,a,r,o);this.updateBoundingBox(e,i);t.restore()}
/**
   *
   * @param {number} x
   * @param {number} y
   */updateBoundingBox(t,e){this.resize();if(this.options.shapeProperties.coordinateOrigin==="top-left"){this.left=t;this.top=e}else{this.left=t-this.width/2;this.top=e-this.height/2}this.boundingBox.left=this.left;this.boundingBox.top=this.top;this.boundingBox.bottom=this.top+this.height;this.boundingBox.right=this.left+this.width;if(this.options.label!==void 0&&this.labelModule.size.width>0){this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left);this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width);this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}};class Square extends ShapeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t,e,i,r,o,n){return this._drawShape(t,"square",2,e,i,r,o,n)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}}class Hexagon extends ShapeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t,e,i,r,o,n){return this._drawShape(t,"hexagon",4,e,i,r,o,n)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}}class Star extends ShapeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t,e,i,r,o,n){return this._drawShape(t,"star",4,e,i,r,o,n)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}}class Text extends NodeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i);this._setMargins(i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {boolean} selected
   * @param {boolean} hover
   */resize(t,e,i){if(this.needsRefresh(e,i)){this.textSize=this.labelModule.getTextSize(t,e,i);this.width=this.textSize.width+this.margin.right+this.margin.left;this.height=this.textSize.height+this.margin.top+this.margin.bottom;this.radius=.5*this.width}}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x width
   * @param {number} y height
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   */draw(t,e,i,r,o,n){this.resize(t,r,o);this.left=e-this.width/2;this.top=i-this.height/2;this.enableShadow(t,n);this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,r,o);this.disableShadow(t,n);this.updateBoundingBox(e,i,t,r,o)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}}let hC=class Triangle extends ShapeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x
   * @param {number} y
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t,e,i,r,o,n){return this._drawShape(t,"triangle",3,e,i,r,o,n)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}};class TriangleDown extends ShapeBase{
/**
   * @param {object} options
   * @param {object} body
   * @param {Label} labelModule
   */
constructor(t,e,i){super(t,e,i)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x
   * @param {number} y
   * @param {boolean} selected
   * @param {boolean} hover
   * @param {ArrowOptions} values
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t,e,i,r,o,n){return this._drawShape(t,"triangleDown",3,e,i,r,o,n)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} angle
   * @returns {number}
   */distanceToBorder(t,e){return this._distanceToBorder(t,e)}}function dC(t,e){var i=Lh(t);if(WE){var r=WE(t);e&&(r=Pc(r).call(r,(function(e){return iO(t,e).enumerable}))),i.push.apply(i,r)}return i}function lC(t){for(var e=1;e<arguments.length;e++){var i,r;var o=null!=arguments[e]?arguments[e]:{};e%2?Ed(i=dC(Object(o),true)).call(i,(function(e){tE(t,e,o[e])})):gO?DO(t,gO(o)):Ed(r=dC(Object(o))).call(r,(function(e){zO(t,e,iO(o,e))}))}return t}class Node{
/**
   *
   * @param {object} options An object containing options for the node. All
   *                            options are optional, except for the id.
   *                              {number} id     Id of the node. Required
   *                              {string} label  Text label for the node
   *                              {number} x      Horizontal position of the node
   *                              {number} y      Vertical position of the node
   *                              {string} shape  Node shape
   *                              {string} image  An image url
   *                              {string} title  A title text, can be HTML
   *                              {anytype} group A group name or number
   * @param {object} body               Shared state of current network instance
   * @param {Network.Images} imagelist  A list with images. Only needed when the node has an image
   * @param {Groups} grouplist          A list with groups. Needed for retrieving group options
   * @param {object} globalOptions      Current global node options; these serve as defaults for the node instance
   * @param {object} defaultOptions     Global default options for nodes; note that this is also the prototype
   *                                    for parameter `globalOptions`.
   */
constructor(t,e,i,r,o,n){this.options=mm(o);this.globalOptions=o;this.defaultOptions=n;this.body=e;this.edges=[];this.id=void 0;this.imagelist=i;this.grouplist=r;this.x=void 0;this.y=void 0;this.baseSize=this.options.size;this.baseFontSize=this.options.font.size;this.predefinedPosition=false;this.selected=false;this.hover=false;this.labelModule=new Label(this.body,this.options,false);this.setOptions(t)}
/**
   * Attach a edge to the node
   * @param {Edge} edge
   */attachEdge(t){var e;zu(e=this.edges).call(e,t)===-1&&this.edges.push(t)}
/**
   * Detach a edge from the node
   * @param {Edge} edge
   */detachEdge(t){var e;const i=zu(e=this.edges).call(e,t);if(i!=-1){var r;dl(r=this.edges).call(r,i,1)}}
/**
   * Set or overwrite options for the node
   * @param {object} options an object with options
   * @returns {null|boolean}
   */setOptions(t){const e=this.options.shape;if(!t)return;typeof t.color!=="undefined"&&(this._localColor=t.color);t.id!==void 0&&(this.id=t.id);if(this.id===void 0)throw new Error("Node must have an id");Node.checkMass(t,this.id);if(t.x!==void 0)if(t.x===null){this.x=void 0;this.predefinedPosition=false}else{this.x=yu(t.x);this.predefinedPosition=true}if(t.y!==void 0)if(t.y===null){this.y=void 0;this.predefinedPosition=false}else{this.y=yu(t.y);this.predefinedPosition=true}t.size!==void 0&&(this.baseSize=t.size);t.value!==void 0&&(t.value=mE(t.value));Node.parseOptions(this.options,t,true,this.globalOptions,this.grouplist);const i=[t,this.options,this.defaultOptions];this.chooser=FO("node",i);this._load_images();this.updateLabelModule(t);t.opacity!==void 0&&Node.checkOpacity(t.opacity)&&(this.options.opacity=t.opacity);this.updateShape(e);return t.hidden!==void 0||t.physics!==void 0}_load_images(){if((this.options.shape==="circularImage"||this.options.shape==="image")&&this.options.image===void 0)throw new Error("Option image must be defined for node type '"+this.options.shape+"'");if(this.options.image!==void 0){if(this.imagelist===void 0)throw new Error("Internal Error: No images provided");if(typeof this.options.image==="string")this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id);else{if(this.options.image.unselected===void 0)throw new Error("No unselected image provided");this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id);this.options.image.selected!==void 0?this.imageObjAlt=this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id):this.imageObjAlt=void 0}}}
/**
   * Check that opacity is only between 0 and 1
   * @param {number} opacity
   * @returns {boolean}
   */static checkOpacity(t){return 0<=t&&t<=1}
/**
   * Check that origin is 'center' or 'top-left'
   * @param {string} origin
   * @returns {boolean}
   */static checkCoordinateOrigin(t){return t===void 0||t==="center"||t==="top-left"}
/**
   * Copy group option values into the node options.
   *
   * The group options override the global node options, so the copy of group options
   * must happen *after* the global node options have been set.
   *
   * This method must also be called also if the global node options have changed and the group options did not.
   * @param {object} parentOptions
   * @param {object} newOptions  new values for the options, currently only passed in for check
   * @param {object} groupList
   */static updateGroupOptions(t,e,i){var r;if(i===void 0)return;const o=t.group;if(e!==void 0&&e.group!==void 0&&o!==e.group)throw new Error("updateGroupOptions: group values in options don't match.");const n=typeof o==="number"||typeof o==="string"&&o!="";if(!n)return;const s=i.get(o);if(s.opacity!==void 0&&e.opacity===void 0&&!Node.checkOpacity(s.opacity)){console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+s.opacity);s.opacity=void 0}const a=Pc(r=IE(e)).call(r,(t=>e[t]!=null));a.push("font");Jg(a,t,s);t.color=dm(t.color)}
/**
   * This process all possible shorthands in the new options and makes sure that the parentOptions are fully defined.
   * Static so it can also be used by the handler.
   * @param {object} parentOptions
   * @param {object} newOptions
   * @param {boolean} [allowDeletion]
   * @param {object} [globalOptions]
   * @param {object} [groupList]
   * @static
   */static parseOptions(t,e){let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};let o=arguments.length>4?arguments[4]:void 0;const n=["color","fixed","shadow"];Jg(n,t,e,i);Node.checkMass(e);if(t.opacity!==void 0&&!Node.checkOpacity(t.opacity)){console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+t.opacity);t.opacity=void 0}if(e.opacity!==void 0&&!Node.checkOpacity(e.opacity)){console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+e.opacity);e.opacity=void 0}e.shapeProperties&&!Node.checkCoordinateOrigin(e.shapeProperties.coordinateOrigin)&&console.error("Invalid option for node coordinateOrigin, found: "+e.shapeProperties.coordinateOrigin);ym(t,e,"shadow",r);if(e.color!==void 0&&e.color!==null){const i=dm(e.color);Qg(t.color,i)}else i===true&&e.color===null&&(t.color=mm(r.color));if(e.fixed!==void 0&&e.fixed!==null)if(typeof e.fixed==="boolean"){t.fixed.x=e.fixed;t.fixed.y=e.fixed}else{e.fixed.x!==void 0&&typeof e.fixed.x==="boolean"&&(t.fixed.x=e.fixed.x);e.fixed.y!==void 0&&typeof e.fixed.y==="boolean"&&(t.fixed.y=e.fixed.y)}i===true&&e.font===null&&(t.font=mm(r.font));Node.updateGroupOptions(t,e,o);e.scaling!==void 0&&ym(t.scaling,e.scaling,"label",r.scaling)}
/**
   *
   * @returns {{color: *, borderWidth: *, borderColor: *, size: *, borderDashes: (boolean|Array|allOptions.nodes.shapeProperties.borderDashes|{boolean, array}), borderRadius: (number|allOptions.nodes.shapeProperties.borderRadius|{number}|Array), shadow: *, shadowColor: *, shadowSize: *, shadowX: *, shadowY: *}}
   */getFormattingValues(){const t={color:this.options.color.background,opacity:this.options.opacity,borderWidth:this.options.borderWidth,borderColor:this.options.color.border,size:this.options.size,borderDashes:this.options.shapeProperties.borderDashes,borderRadius:this.options.shapeProperties.borderRadius,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y};if(this.selected||this.hover){if(this.chooser===true){if(this.selected){this.options.borderWidthSelected!=null?t.borderWidth=this.options.borderWidthSelected:t.borderWidth*=2;t.color=this.options.color.highlight.background;t.borderColor=this.options.color.highlight.border;t.shadow=this.options.shadow.enabled}else if(this.hover){t.color=this.options.color.hover.background;t.borderColor=this.options.color.hover.border;t.shadow=this.options.shadow.enabled}}else if(typeof this.chooser==="function"){this.chooser(t,this.options.id,this.selected,this.hover);t.shadow===false&&(t.shadowColor===this.options.shadow.color&&t.shadowSize===this.options.shadow.size&&t.shadowX===this.options.shadow.x&&t.shadowY===this.options.shadow.y||(t.shadow=true))}}else t.shadow=this.options.shadow.enabled;if(this.options.opacity!==void 0){const e=this.options.opacity;t.borderColor=am(t.borderColor,e);t.color=am(t.color,e);t.shadowColor=am(t.shadowColor,e)}return t}
/**
   *
   * @param {object} options
   */updateLabelModule(t){this.options.label!==void 0&&this.options.label!==null||(this.options.label="");Node.updateGroupOptions(this.options,lC(lC({},t),{},{color:t&&t.color||this._localColor||void 0}),this.grouplist);const e=this.grouplist.get(this.options.group,false);const i=[t,this.options,e,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,i);this.labelModule.baseSize!==void 0&&(this.baseFontSize=this.labelModule.baseSize)}
/**
   *
   * @param {string} currentShape
   */updateShape(t){if(t===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){case"box":this.shape=new iC(this.options,this.body,this.labelModule);break;case"circle":this.shape=new rC(this.options,this.body,this.labelModule);break;case"circularImage":this.shape=new CircularImage(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"custom":this.shape=new CustomShape(this.options,this.body,this.labelModule,this.options.ctxRenderer);break;case"database":this.shape=new Database(this.options,this.body,this.labelModule);break;case"diamond":this.shape=new sC(this.options,this.body,this.labelModule);break;case"dot":this.shape=new Dot(this.options,this.body,this.labelModule);break;case"ellipse":this.shape=new Ellipse(this.options,this.body,this.labelModule);break;case"icon":this.shape=new Icon(this.options,this.body,this.labelModule);break;case"image":this.shape=new aC(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"square":this.shape=new Square(this.options,this.body,this.labelModule);break;case"hexagon":this.shape=new Hexagon(this.options,this.body,this.labelModule);break;case"star":this.shape=new Star(this.options,this.body,this.labelModule);break;case"text":this.shape=new Text(this.options,this.body,this.labelModule);break;case"triangle":this.shape=new hC(this.options,this.body,this.labelModule);break;case"triangleDown":this.shape=new TriangleDown(this.options,this.body,this.labelModule);break;default:this.shape=new Ellipse(this.options,this.body,this.labelModule);break}this.needsRefresh()}select(){this.selected=true;this.needsRefresh()}unselect(){this.selected=false;this.needsRefresh()}needsRefresh(){this.shape.refreshNeeded=true}
/**
   * get the title of this node.
   * @returns {string} title    The title of the node, or undefined when no title
   *                           has been set.
   */getTitle(){return this.options.title}
/**
   * Calculate the distance to the border of the Node
   * @param {CanvasRenderingContext2D}   ctx
   * @param {number} angle        Angle in radians
   * @returns {number} distance   Distance to the border in pixels
   */distanceToBorder(t,e){return this.shape.distanceToBorder(t,e)}
/**
   * Check if this node has a fixed x and y position
   * @returns {boolean}      true if fixed, false if not
   */isFixed(){return this.options.fixed.x&&this.options.fixed.y}
/**
   * check if this node is selecte
   * @returns {boolean} selected   True if node is selected, else false
   */isSelected(){return this.selected}
/**
   * Retrieve the value of the node. Can be undefined
   * @returns {number} value
   */getValue(){return this.options.value}
/**
   * Get the current dimensions of the label
   * @returns {rect}
   */getLabelSize(){return this.labelModule.size()}
/**
   * Adjust the value range of the node. The node will adjust it's size
   * based on its value.
   * @param {number} min
   * @param {number} max
   * @param {number} total
   */setValueRange(t,e,i){if(this.options.value!==void 0){const r=this.options.scaling.customScalingFunction(t,e,i,this.options.value);const o=this.options.scaling.max-this.options.scaling.min;if(this.options.scaling.label.enabled===true){const t=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+r*t}this.options.size=this.options.scaling.min+r*o}else{this.options.size=this.baseSize;this.options.font.size=this.baseFontSize}this.updateLabelModule()}
/**
   * Draw this node in the given canvas
   * The 2d context of a HTML canvas can be retrieved by canvas.getContext("2d");
   * @param {CanvasRenderingContext2D}   ctx
   * @returns {object} Callbacks to draw later on higher layers.
   */draw(t){const e=this.getFormattingValues();return this.shape.draw(t,this.x,this.y,this.selected,this.hover,e)||{}}
/**
   * Update the bounding box of the shape
   * @param {CanvasRenderingContext2D}   ctx
   */updateBoundingBox(t){this.shape.updateBoundingBox(this.x,this.y,t)}
/**
   * Recalculate the size of this node in the given canvas
   * The 2d context of a HTML canvas can be retrieved by canvas.getContext("2d");
   * @param {CanvasRenderingContext2D}   ctx
   */resize(t){const e=this.getFormattingValues();this.shape.resize(t,this.selected,this.hover,e)}
/**
   * Determine all visual elements of this node instance, in which the given
   * point falls within the bounding shape.
   * @param {point} point
   * @returns {Array.<nodeClickItem|nodeLabelClickItem>} list with the items which are on the point
   */getItemsOnPoint(t){const e=[];this.labelModule.visible()&&AO(this.labelModule.getSize(),t)&&e.push({nodeId:this.id,labelId:0});AO(this.shape.boundingBox,t)&&e.push({nodeId:this.id});return e}
/**
   * Check if this object is overlapping with the provided object
   * @param {object} obj   an object with parameters left, top, right, bottom
   * @returns {boolean}     True if location is located on node
   */isOverlappingWith(t){return this.shape.left<t.right&&this.shape.left+this.shape.width>t.left&&this.shape.top<t.bottom&&this.shape.top+this.shape.height>t.top}
/**
   * Check if this object is overlapping with the provided object
   * @param {object} obj   an object with parameters left, top, right, bottom
   * @returns {boolean}     True if location is located on node
   */isBoundingBoxOverlappingWith(t){return this.shape.boundingBox.left<t.right&&this.shape.boundingBox.right>t.left&&this.shape.boundingBox.top<t.bottom&&this.shape.boundingBox.bottom>t.top}
/**
   * Check valid values for mass
   *
   * The mass may not be negative or zero. If it is, reset to 1
   * @param {object} options
   * @param {Node.id} id
   * @static
   */static checkMass(t,e){if(t.mass!==void 0&&t.mass<=0){let i="";e!==void 0&&(i=" in node id: "+e);console.error("%cNegative or zero mass disallowed"+i+", setting mass to 1.",Nm);t.mass=1}}}class NodesHandler{
/**
   * @param {object} body
   * @param {Images} images
   * @param {Array.<Group>} groups
   * @param {LayoutEngine} layoutEngine
   */
constructor(t,e,i,r){var o;this.body=t;this.images=e;this.groups=i;this.layoutEngine=r;this.body.functions.createNode=lr(o=this.create).call(o,this);this.nodesListeners={add:(t,e)=>{this.add(e.items)},update:(t,e)=>{this.update(e.items,e.data,e.oldData)},remove:(t,e)=>{this.remove(e.items)}};this.defaultOptions={borderWidth:1,borderWidthSelected:void 0,brokenImage:void 0,color:{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},opacity:void 0,fixed:{x:false,y:false},font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:0,strokeColor:"#ffffff",align:"center",vadjust:0,multi:false,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"monospace",vadjust:2}},group:void 0,hidden:false,icon:{face:"FontAwesome",code:void 0,size:50,color:"#2B7CE9"},image:void 0,imagePadding:{top:0,right:0,bottom:0,left:0},label:void 0,labelHighlightBold:true,level:void 0,margin:{top:5,right:5,bottom:5,left:5},mass:1,physics:true,scaling:{min:10,max:30,label:{enabled:false,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,r){if(e===t)return.5;{const i=1/(e-t);return Math.max(0,(r-t)*i)}}},shadow:{enabled:false,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},shape:"ellipse",shapeProperties:{borderDashes:false,borderRadius:6,interpolation:true,useImageSize:false,useBorderWithImage:false,coordinateOrigin:"center"},size:25,title:void 0,value:void 0,x:void 0,y:void 0};if(this.defaultOptions.mass<=0)throw"Internal error: mass in defaultOptions of NodesHandler may not be zero or negative";this.options=mm(this.defaultOptions);this.bindEventListeners()}bindEventListeners(){var t,e;this.body.emitter.on("refreshNodes",lr(t=this.refresh).call(t,this));this.body.emitter.on("refresh",lr(e=this.refresh).call(e,this));this.body.emitter.on("destroy",(()=>{nm(this.nodesListeners,((t,e)=>{this.body.data.nodes&&this.body.data.nodes.off(e,t)}));delete this.body.functions.createNode;delete this.nodesListeners.add;delete this.nodesListeners.update;delete this.nodesListeners.remove;delete this.nodesListeners}))}
/**
   *
   * @param {object} options
   */setOptions(t){if(t!==void 0){Node.parseOptions(this.options,t);t.opacity!==void 0&&(cw(t.opacity)||!Tw(t.opacity)||t.opacity<0||t.opacity>1?console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+t.opacity):this.options.opacity=t.opacity);if(t.shape!==void 0)for(const t in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&this.body.nodes[t].updateShape();if(typeof t.font!=="undefined"||typeof t.widthConstraint!=="undefined"||typeof t.heightConstraint!=="undefined")for(const t of Lh(this.body.nodes)){this.body.nodes[t].updateLabelModule();this.body.nodes[t].needsRefresh()}if(t.size!==void 0)for(const t in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&this.body.nodes[t].needsRefresh();t.hidden===void 0&&t.physics===void 0||this.body.emitter.emit("_dataChanged")}}
/**
   * Set a data set with nodes for the network
   * @param {Array | DataSet | DataView} nodes         The data containing the nodes.
   * @param {boolean} [doNotEmit] - Suppress data changed event.
   * @private
   */setData(i){let r=arguments.length>1&&arguments[1]!==void 0&&arguments[1];const o=this.body.data.nodes;if(t("id",i))this.body.data.nodes=i;else if(dh(i)){this.body.data.nodes=new e;this.body.data.nodes.add(i)}else{if(i)throw new TypeError("Array or DataSet expected");this.body.data.nodes=new e}o&&nm(this.nodesListeners,(function(t,e){o.off(e,t)}));this.body.nodes={};if(this.body.data.nodes){const t=this;nm(this.nodesListeners,(function(e,i){t.body.data.nodes.on(i,e)}));const e=this.body.data.nodes.getIds();this.add(e,true)}r===false&&this.body.emitter.emit("_dataChanged")}
/**
   * Add nodes
   * @param {number[] | string[]} ids
   * @param {boolean} [doNotEmit]
   * @private
   */add(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];let i;const r=[];for(let e=0;e<t.length;e++){i=t[e];const o=this.body.data.nodes.get(i);const n=this.create(o);r.push(n);this.body.nodes[i]=n}this.layoutEngine.positionInitially(r);e===false&&this.body.emitter.emit("_dataChanged")}
/**
   * Update existing nodes, or create them when not yet existing
   * @param {number[] | string[]} ids id's of changed nodes
   * @param {Array} changedData array with changed data
   * @param {Array|undefined} oldData optional; array with previous data
   * @private
   */update(t,e,i){const r=this.body.nodes;let o=false;for(let i=0;i<t.length;i++){const n=t[i];let s=r[n];const a=e[i];if(s!==void 0)s.setOptions(a)&&(o=true);else{o=true;s=this.create(a);r[n]=s}}o||i===void 0||(o=qw(e).call(e,(function(t,e){const r=i[e];return r&&r.level!==t.level})));o===true?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}
/**
   * Remove existing nodes. If nodes do not exist, the method will just ignore it.
   * @param {number[] | string[]} ids
   * @private
   */remove(t){const e=this.body.nodes;for(let i=0;i<t.length;i++){const r=t[i];delete e[r]}this.body.emitter.emit("_dataChanged")}
/**
   * create a node
   * @param {object} properties
   * @param {class} [constructorClass]
   * @returns {*}
   */create(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Node;return new e(t,this.body,this.images,this.groups,this.options,this.defaultOptions)}
/**
   *
   * @param {boolean} [clearPositions]
   */refresh(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];nm(this.body.nodes,((e,i)=>{const r=this.body.data.nodes.get(i);if(r!==void 0){t===true&&e.setOptions({x:null,y:null});e.setOptions({fixed:false});e.setOptions(r)}}))}
/**
   * Returns the positions of the nodes.
   * @param {Array.<Node.id> | string} [ids]  --> optional, can be array of nodeIds, can be string
   * @returns {{}}
   */getPositions(t){const e={};if(t!==void 0){if(dh(t)===true){for(let i=0;i<t.length;i++)if(this.body.nodes[t[i]]!==void 0){const r=this.body.nodes[t[i]];e[t[i]]={x:Math.round(r.x),y:Math.round(r.y)}}}else if(this.body.nodes[t]!==void 0){const i=this.body.nodes[t];e[t]={x:Math.round(i.x),y:Math.round(i.y)}}}else for(let t=0;t<this.body.nodeIndices.length;t++){const i=this.body.nodes[this.body.nodeIndices[t]];e[this.body.nodeIndices[t]]={x:Math.round(i.x),y:Math.round(i.y)}}return e}
/**
   * Retrieves the x y position of a specific id.
   * @param {string} id The id to retrieve.
   * @throws {TypeError} If no id is included.
   * @throws {ReferenceError} If an invalid id is provided.
   * @returns {{ x: number, y: number }} Returns X, Y canvas position of the node with given id.
   */getPosition(t){if(t==void 0)throw new TypeError("No id was specified for getPosition method.");if(this.body.nodes[t]==void 0)throw new ReferenceError("NodeId provided for getPosition does not exist. Provided: ".concat(t));return{x:Math.round(this.body.nodes[t].x),y:Math.round(this.body.nodes[t].y)}}storePositions(){const t=[];const e=this.body.data.nodes.getDataSet();for(const i of e.get()){const e=i.id;const r=this.body.nodes[e];const o=Math.round(r.x);const n=Math.round(r.y);i.x===o&&i.y===n||t.push({id:e,x:o,y:n})}e.update(t)}
/**
   * get the bounding box of a node.
   * @param {Node.id} nodeId
   * @returns {j|*}
   */getBoundingBox(t){if(this.body.nodes[t]!==void 0)return this.body.nodes[t].shape.boundingBox}
/**
   * Get the Ids of nodes connected to this node.
   * @param {Node.id} nodeId
   * @param {'to'|'from'|undefined} direction values 'from' and 'to' select respectively parent and child nodes only.
   *                                          Any other value returns both parent and child nodes.
   * @returns {Array}
   */getConnectedNodes(t,e){const i=[];if(this.body.nodes[t]!==void 0){const r=this.body.nodes[t];const o={};for(let t=0;t<r.edges.length;t++){const n=r.edges[t];if(e!=="to"&&n.toId==r.id){if(o[n.fromId]===void 0){i.push(n.fromId);o[n.fromId]=true}}else if(e!=="from"&&n.fromId==r.id&&o[n.toId]===void 0){i.push(n.toId);o[n.toId]=true}}}return i}
/**
   * Get the ids of the edges connected to this node.
   * @param {Node.id} nodeId
   * @returns {*}
   */getConnectedEdges(t){const e=[];if(this.body.nodes[t]!==void 0){const i=this.body.nodes[t];for(let t=0;t<i.edges.length;t++)e.push(i.edges[t].id)}else console.error("NodeId provided for getConnectedEdges does not exist. Provided: ",t);return e}
/**
   * Move a node.
   * @param {Node.id} nodeId
   * @param {number} x
   * @param {number} y
   */moveNode(t,e,i){if(this.body.nodes[t]!==void 0){this.body.nodes[t].x=Number(e);this.body.nodes[t].y=Number(i);Uv((()=>{this.body.emitter.emit("startSimulation")}),0)}else console.error("Node id supplied to moveNode does not exist. Provided: ",t)}}var cC={};var uC;function vC(){if(uC)return cC;uC=1;var t=Ve();var e=Math.hypot;var i=Math.abs;var r=Math.sqrt;var o=!!e&&e(Infinity,NaN)!==Infinity;t({target:"Math",stat:true,arity:2,forced:o},{hypot:function(t,e){var o=0;var n=0;var s=arguments.length;var a=0;var h,d;while(n<s){h=i(arguments[n++]);if(a<h){d=a/h;o=o*d*d+1;a=h}else if(h>0){d=h/a;o+=d*d}else o+=h}return a===Infinity?Infinity:a*r(o)}});return cC}var fC;var pC;function gC(){if(pC)return fC;pC=1;vC();var t=nt();fC=t.Math.hypot;return fC}var mC;var yC;function bC(){if(yC)return mC;yC=1;var t=gC();mC=t;return mC}var wC;var _C;function xC(){if(_C)return wC;_C=1;wC=bC();return wC}var EC=xC();var OC=r(EC);class EndPoint{
/**
   * Apply transformation on points for display.
   *
   * The following is done:
   * - rotate by the specified angle
   * - multiply the (normalized) coordinates by the passed length
   * - offset by the target coordinates
   * @param points - The point(s) to be transformed.
   * @param arrowData - The data determining the result of the transformation.
   */
static transform(t,e){dh(t)||(t=[t]);const i=e.point.x;const r=e.point.y;const o=e.angle;const n=e.length;for(let e=0;e<t.length;++e){const s=t[e];const a=s.x*Math.cos(o)-s.y*Math.sin(o);const h=s.x*Math.sin(o)+s.y*Math.cos(o);s.x=i+n*a;s.y=r+n*h}}
/**
   * Draw a closed path using the given real coordinates.
   * @param ctx - The path will be rendered into this context.
   * @param points - The points of the path.
   */static drawPath(t,e){t.beginPath();t.moveTo(e[0].x,e[0].y);for(let i=1;i<e.length;++i)t.lineTo(e[i].x,e[i].y);t.closePath()}}let CC=class Image extends EndPoint{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns False as there is no way to fill an image.
   */
static draw(t,e){if(e.image){t.save();t.translate(e.point.x,e.point.y);t.rotate(Math.PI/2+e.angle);const i=e.imageWidth!=null?e.imageWidth:e.image.width;const r=e.imageHeight!=null?e.imageHeight:e.image.height;e.image.drawImageAtPosition(t,1,-i/2,0,i,r);t.restore()}return false}};class Arrow extends EndPoint{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i=[{x:0,y:0},{x:-1,y:.3},{x:-.9,y:0},{x:-1,y:-.3}];EndPoint.transform(i,e);EndPoint.drawPath(t,i);return true}}class Crow{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i=[{x:-1,y:0},{x:0,y:.3},{x:-.4,y:0},{x:0,y:-.3}];EndPoint.transform(i,e);EndPoint.drawPath(t,i);return true}}class Curve{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i={x:-.4,y:0};EndPoint.transform(i,e);t.strokeStyle=t.fillStyle;t.fillStyle="rgba(0, 0, 0, 0)";const r=Math.PI;const o=e.angle-r/2;const n=e.angle+r/2;t.beginPath();t.arc(i.x,i.y,e.length*.4,o,n,false);t.stroke();return true}}class InvertedCurve{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i={x:-.3,y:0};EndPoint.transform(i,e);t.strokeStyle=t.fillStyle;t.fillStyle="rgba(0, 0, 0, 0)";const r=Math.PI;const o=e.angle+r/2;const n=e.angle+3*r/2;t.beginPath();t.arc(i.x,i.y,e.length*.4,o,n,false);t.stroke();return true}}class Triangle{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i=[{x:.02,y:0},{x:-1,y:.3},{x:-1,y:-.3}];EndPoint.transform(i,e);EndPoint.drawPath(t,i);return true}}class InvertedTriangle{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i=[{x:0,y:.3},{x:0,y:-.3},{x:-1,y:0}];EndPoint.transform(i,e);EndPoint.drawPath(t,i);return true}}class Circle{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i={x:-.4,y:0};EndPoint.transform(i,e);cr(t,i.x,i.y,e.length*.4);return true}}class Bar{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i=[{x:0,y:.5},{x:0,y:-.5},{x:-.15,y:-.5},{x:-.15,y:.5}];EndPoint.transform(i,e);EndPoint.drawPath(t,i);return true}}class Box{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i=[{x:0,y:.3},{x:0,y:-.3},{x:-.6,y:-.3},{x:-.6,y:.3}];EndPoint.transform(i,e);EndPoint.drawPath(t,i);return true}}class Diamond{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i=[{x:0,y:0},{x:-.5,y:-.3},{x:-1,y:0},{x:-.5,y:.3}];EndPoint.transform(i,e);EndPoint.drawPath(t,i);return true}}class Vee{
/**
   * Draw this shape at the end of a line.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True because ctx.fill() can be used to fill the arrow.
   */
static draw(t,e){const i=[{x:-1,y:.3},{x:-.5,y:0},{x:-1,y:-.3},{x:0,y:0}];EndPoint.transform(i,e);EndPoint.drawPath(t,i);return true}}class EndPoints{
/**
   * Draw an endpoint.
   * @param ctx - The shape will be rendered into this context.
   * @param arrowData - The data determining the shape.
   * @returns True if ctx.fill() can be used to fill the arrow, false otherwise.
   */
static draw(t,e){let i;e.type&&(i=e.type.toLowerCase());switch(i){case"image":return CC.draw(t,e);case"circle":return Circle.draw(t,e);case"box":return Box.draw(t,e);case"crow":return Crow.draw(t,e);case"curve":return Curve.draw(t,e);case"diamond":return Diamond.draw(t,e);case"inv_curve":return InvertedCurve.draw(t,e);case"triangle":return Triangle.draw(t,e);case"inv_triangle":return InvertedTriangle.draw(t,e);case"bar":return Bar.draw(t,e);case"vee":return Vee.draw(t,e);case"arrow":default:return Arrow.draw(t,e)}}}function kC(t,e){var i=Lh(t);if(WE){var r=WE(t);e&&(r=Pc(r).call(r,(function(e){return iO(t,e).enumerable}))),i.push.apply(i,r)}return i}function SC(t){for(var e=1;e<arguments.length;e++){var i,r;var o=null!=arguments[e]?arguments[e]:{};e%2?Ed(i=kC(Object(o),true)).call(i,(function(e){tE(t,e,o[e])})):gO?DO(t,gO(o)):Ed(r=kC(Object(o))).call(r,(function(e){zO(t,e,iO(o,e))}))}return t}class EdgeBase{
/**
   * Create a new instance.
   * @param options - The options object of given edge.
   * @param body - The body of the network.
   * @param labelModule - Label module.
   */
constructor(t,e,i){tE(this,"color",{});tE(this,"colorDirty",true);tE(this,"hoverWidth",1.5);tE(this,"selectionWidth",2);this._body=e;this._labelModule=i;this.setOptions(t);this.fromPoint=this.from;this.toPoint=this.to}connect(){this.from=this._body.nodes[this.options.from];this.to=this._body.nodes[this.options.to]}cleanup(){return false}
/**
   * Set new edge options.
   * @param options - The new edge options object.
   */setOptions(t){this.options=t;this.from=this._body.nodes[this.options.from];this.to=this._body.nodes[this.options.to];this.id=this.options.id}drawLine(t,e,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.getViaNode();t.strokeStyle=this.getColor(t,e);t.lineWidth=e.width;e.dashes!==false?this._drawDashedLine(t,e,o):this._drawLine(t,e,o)}
/**
   * Draw a line with given style between two nodes through supplied node(s).
   * @param ctx - The context that will be used for rendering.
   * @param values - Formatting values like color, opacity or shadow.
   * @param viaNode - Additional control point(s) for the edge.
   * @param fromPoint - TODO: Seems ignored, remove?
   * @param toPoint - TODO: Seems ignored, remove?
   */_drawLine(t,e,i,r,o){if(this.from!=this.to)this._line(t,e,i,r,o);else{const[i,r,o]=this._getCircleData(t);this._circle(t,e,i,r,o)}}
/**
   * Draw a dashed line with given style between two nodes through supplied node(s).
   * @param ctx - The context that will be used for rendering.
   * @param values - Formatting values like color, opacity or shadow.
   * @param viaNode - Additional control point(s) for the edge.
   * @param _fromPoint - Ignored (TODO: remove in the future).
   * @param _toPoint - Ignored (TODO: remove in the future).
   */_drawDashedLine(t,e,i,r,o){t.lineCap="round";const n=dh(e.dashes)?e.dashes:[5,5];if(t.setLineDash!==void 0){t.save();t.setLineDash(n);t.lineDashOffset=0;if(this.from!=this.to)this._line(t,e,i);else{const[i,r,o]=this._getCircleData(t);this._circle(t,e,i,r,o)}t.setLineDash([0]);t.lineDashOffset=0;t.restore()}else{if(this.from!=this.to)wr(t,this.from.x,this.from.y,this.to.x,this.to.y,n);else{const[i,r,o]=this._getCircleData(t);this._circle(t,e,i,r,o)}this.enableShadow(t,e);t.stroke();this.disableShadow(t,e)}}
/**
   * Find the intersection between the border of the node and the edge.
   * @param node - The node (either from or to node of the edge).
   * @param ctx - The context that will be used for rendering.
   * @param options - Additional options.
   * @returns Cartesian coordinates of the intersection between the border of the node and the edge.
   */findBorderPosition(t,e,i){return this.from!=this.to?this._findBorderPosition(t,e,i):this._findBorderPositionCircle(t,e,i)}findBorderPositions(t){if(this.from!=this.to)return{from:this._findBorderPosition(this.from,t),to:this._findBorderPosition(this.to,t)};{var e;const[i,r]=Ya(e=this._getCircleData(t)).call(e,0,2);return{from:this._findBorderPositionCircle(this.from,t,{x:i,y:r,low:.25,high:.6,direction:-1}),to:this._findBorderPositionCircle(this.from,t,{x:i,y:r,low:.6,high:.8,direction:1})}}}
/**
   * Compute the center point and radius of an edge connected to the same node at both ends.
   * @param ctx - The context that will be used for rendering.
   * @returns `[x, y, radius]`
   */_getCircleData(t){const e=this.options.selfReference.size;t!==void 0&&this.from.shape.width===void 0&&this.from.shape.resize(t);const i=jO(t,this.options.selfReference.angle,e,this.from);return[i.x,i.y,e]}
/**
   * Get a point on a circle.
   * @param x - Center of the circle on the x axis.
   * @param y - Center of the circle on the y axis.
   * @param radius - Radius of the circle.
   * @param position - Value between 0 (line start) and 1 (line end).
   * @returns Cartesian coordinates of requested point on the circle.
   */_pointOnCircle(t,e,i,r){const o=r*2*Math.PI;return{x:t+i*Math.cos(o),y:e-i*Math.sin(o)}}
/**
   * Find the intersection between the border of the node and the edge.
   * @remarks
   * This function uses binary search to look for the point where the circle crosses the border of the node.
   * @param nearNode - The node (either from or to node of the edge).
   * @param ctx - The context that will be used for rendering.
   * @param options - Additional options.
   * @returns Cartesian coordinates of the intersection between the border of the node and the edge.
   */_findBorderPositionCircle(t,e,i){const r=i.x;const o=i.y;let n=i.low;let s=i.high;const a=i.direction;const h=10;const d=this.options.selfReference.size;const l=.05;let c;let u=(n+s)*.5;let v=0;this.options.arrowStrikethrough===true&&(a===-1?v=this.options.endPointOffset.from:a===1&&(v=this.options.endPointOffset.to));let f=0;do{u=(n+s)*.5;c=this._pointOnCircle(r,o,d,u);const i=Math.atan2(t.y-c.y,t.x-c.x);const h=t.distanceToBorder(e,i)+v;const p=Math.sqrt(Math.pow(c.x-t.x,2)+Math.pow(c.y-t.y,2));const g=h-p;if(Math.abs(g)<l)break;g>0?a>0?n=u:s=u:a>0?s=u:n=u;++f}while(n<=s&&f<h);return SC(SC({},c),{},{t:u})}
/**
   * Get the line width of the edge. Depends on width and whether one of the connected nodes is selected.
   * @param selected - Determines wheter the line is selected.
   * @param hover - Determines wheter the line is being hovered, only applies if selected is false.
   * @returns The width of the line.
   */getLineWidth(t,e){return t===true?Math.max(this.selectionWidth,.3/this._body.view.scale):e===true?Math.max(this.hoverWidth,.3/this._body.view.scale):Math.max(this.options.width,.3/this._body.view.scale)}
/**
   * Compute the color or gradient for given edge.
   * @param ctx - The context that will be used for rendering.
   * @param values - Formatting values like color, opacity or shadow.
   * @param _selected - Ignored (TODO: remove in the future).
   * @param _hover - Ignored (TODO: remove in the future).
   * @returns Color string if single color is inherited or gradient if two.
   */getColor(t,e){if(e.inheritsColor!==false){if(e.inheritsColor==="both"&&this.from.id!==this.to.id){const i=t.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y);let r=this.from.options.color.highlight.border;let o=this.to.options.color.highlight.border;if(this.from.selected===false&&this.to.selected===false){r=am(this.from.options.color.border,e.opacity);o=am(this.to.options.color.border,e.opacity)}else this.from.selected===true&&this.to.selected===false?o=this.to.options.color.border:this.from.selected===false&&this.to.selected===true&&(r=this.from.options.color.border);i.addColorStop(0,r);i.addColorStop(1,o);return i}return e.inheritsColor==="to"?am(this.to.options.color.border,e.opacity):am(this.from.options.color.border,e.opacity)}return am(e.color,e.opacity)}
/**
   * Draw a line from a node to itself, a circle.
   * @param ctx - The context that will be used for rendering.
   * @param values - Formatting values like color, opacity or shadow.
   * @param x - Center of the circle on the x axis.
   * @param y - Center of the circle on the y axis.
   * @param radius - Radius of the circle.
   */_circle(t,e,i,r,o){this.enableShadow(t,e);let n=0;let s=Math.PI*2;if(!this.options.selfReference.renderBehindTheNode){const e=this.options.selfReference.angle;const o=this.options.selfReference.angle+Math.PI;const a=this._findBorderPositionCircle(this.from,t,{x:i,y:r,low:e,high:o,direction:-1});const h=this._findBorderPositionCircle(this.from,t,{x:i,y:r,low:e,high:o,direction:1});n=Math.atan2(a.y-r,a.x-i);s=Math.atan2(h.y-r,h.x-i)}t.beginPath();t.arc(i,r,o,n,s,false);t.stroke();this.disableShadow(t,e)}getDistanceToEdge(t,e,i,r,o,n){if(this.from!=this.to)return this._getDistanceToEdge(t,e,i,r,o,n);{const[t,e,i]=this._getCircleData(void 0);const r=t-o;const s=e-n;return Math.abs(Math.sqrt(r*r+s*s)-i)}}
/**
   * Calculate the distance between a point (x3, y3) and a line segment from (x1, y1) to (x2, y2).
   * @param x1 - First end of the line segment on the x axis.
   * @param y1 - First end of the line segment on the y axis.
   * @param x2 - Second end of the line segment on the x axis.
   * @param y2 - Second end of the line segment on the y axis.
   * @param x3 - Position of the point on the x axis.
   * @param y3 - Position of the point on the y axis.
   * @returns The distance between the line segment and the point.
   */_getDistanceToLine(t,e,i,r,o,n){const s=i-t;const a=r-e;const h=s*s+a*a;let d=((o-t)*s+(n-e)*a)/h;d>1?d=1:d<0&&(d=0);const l=t+d*s;const c=e+d*a;const u=l-o;const v=c-n;return Math.sqrt(u*u+v*v)}getArrowData(t,e,i,r,o,n){let s;let a;let h;let d;let l;let c;let u;const v=n.width;if(e==="from"){h=this.from;d=this.to;l=n.fromArrowScale<0;c=Math.abs(n.fromArrowScale);u=n.fromArrowType}else if(e==="to"){h=this.to;d=this.from;l=n.toArrowScale<0;c=Math.abs(n.toArrowScale);u=n.toArrowType}else{h=this.to;d=this.from;l=n.middleArrowScale<0;c=Math.abs(n.middleArrowScale);u=n.middleArrowType}const f=15*c+3*v;if(h!=d){const r=OC(h.x-d.x,h.y-d.y);const o=f/r;if(e!=="middle")if(this.options.smooth.enabled===true){const r=this._findBorderPosition(h,t,{via:i});const n=this.getPoint(r.t+o*(e==="from"?1:-1),i);s=Math.atan2(r.y-n.y,r.x-n.x);a=r}else{s=Math.atan2(h.y-d.y,h.x-d.x);a=this._findBorderPosition(h,t)}else{const t=(l?-o:o)/2;const e=this.getPoint(.5+t,i);const r=this.getPoint(.5-t,i);s=Math.atan2(e.y-r.y,e.x-r.x);a=this.getPoint(.5,i)}}else{const[i,r,o]=this._getCircleData(t);if(e==="from"){const e=this.options.selfReference.angle;const o=this.options.selfReference.angle+Math.PI;const n=this._findBorderPositionCircle(this.from,t,{x:i,y:r,low:e,high:o,direction:-1});s=n.t*-2*Math.PI+1.5*Math.PI+.1*Math.PI;a=n}else if(e==="to"){const e=this.options.selfReference.angle;const o=this.options.selfReference.angle+Math.PI;const n=this._findBorderPositionCircle(this.from,t,{x:i,y:r,low:e,high:o,direction:1});s=n.t*-2*Math.PI+1.5*Math.PI-1.1*Math.PI;a=n}else{const t=this.options.selfReference.angle/(2*Math.PI);a=this._pointOnCircle(i,r,o,t);s=t*-2*Math.PI+1.5*Math.PI+.1*Math.PI}}const p=a.x-f*.9*Math.cos(s);const g=a.y-f*.9*Math.sin(s);const m={x:p,y:g};return{point:a,core:m,angle:s,length:f,type:u}}drawArrowHead(t,e,i,r,o){t.strokeStyle=this.getColor(t,e);t.fillStyle=t.strokeStyle;t.lineWidth=e.width;const n=EndPoints.draw(t,o);if(n){this.enableShadow(t,e);cf(t).call(t);this.disableShadow(t,e)}}
/**
   * Set the shadow formatting values in the context if enabled, do nothing otherwise.
   * @param ctx - The context that will be used for rendering.
   * @param values - Formatting values for the shadow.
   */enableShadow(t,e){if(e.shadow===true){t.shadowColor=e.shadowColor;t.shadowBlur=e.shadowSize;t.shadowOffsetX=e.shadowX;t.shadowOffsetY=e.shadowY}}
/**
   * Reset the shadow formatting values in the context if enabled, do nothing otherwise.
   * @param ctx - The context that will be used for rendering.
   * @param values - Formatting values for the shadow.
   */disableShadow(t,e){if(e.shadow===true){t.shadowColor="rgba(0,0,0,0)";t.shadowBlur=0;t.shadowOffsetX=0;t.shadowOffsetY=0}}
/**
   * Render the background according to the formatting values.
   * @param ctx - The context that will be used for rendering.
   * @param values - Formatting values for the background.
   */drawBackground(t,e){if(e.background!==false){const i={strokeStyle:t.strokeStyle,lineWidth:t.lineWidth,dashes:t.dashes};t.strokeStyle=e.backgroundColor;t.lineWidth=e.backgroundSize;this.setStrokeDashed(t,e.backgroundDashes);t.stroke();t.strokeStyle=i.strokeStyle;t.lineWidth=i.lineWidth;t.dashes=i.dashes;this.setStrokeDashed(t,e.dashes)}}
/**
   * Set the line dash pattern if supported. Logs a warning to the console if it isn't supported.
   * @param ctx - The context that will be used for rendering.
   * @param dashes - The pattern [line, space, line…], true for default dashed line or false for normal line.
   */setStrokeDashed(t,e){if(e!==false)if(t.setLineDash!==void 0){const i=dh(e)?e:[5,5];t.setLineDash(i)}else console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");else t.setLineDash!==void 0?t.setLineDash([]):console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.")}}function TC(t,e){var i=Lh(t);if(WE){var r=WE(t);e&&(r=Pc(r).call(r,(function(e){return iO(t,e).enumerable}))),i.push.apply(i,r)}return i}function MC(t){for(var e=1;e<arguments.length;e++){var i,r;var o=null!=arguments[e]?arguments[e]:{};e%2?Ed(i=TC(Object(o),true)).call(i,(function(e){tE(t,e,o[e])})):gO?DO(t,gO(o)):Ed(r=TC(Object(o))).call(r,(function(e){zO(t,e,iO(o,e))}))}return t}class BezierEdgeBase extends EdgeBase{
/**
   * Create a new instance.
   * @param options - The options object of given edge.
   * @param body - The body of the network.
   * @param labelModule - Label module.
   */
constructor(t,e,i){super(t,e,i)}
/**
   * Find the intersection between the border of the node and the edge.
   * @remarks
   * This function uses binary search to look for the point where the bezier curve crosses the border of the node.
   * @param nearNode - The node (either from or to node of the edge).
   * @param ctx - The context that will be used for rendering.
   * @param viaNode - Additional node(s) the edge passes through.
   * @returns Cartesian coordinates of the intersection between the border of the node and the edge.
   */_findBorderPositionBezier(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this._getViaCoordinates();const r=10;const o=.2;let n=false;let s=1;let a=0;let h=this.to;let d;let l;let c=this.options.endPointOffset?this.options.endPointOffset.to:0;if(t.id===this.from.id){h=this.from;n=true;c=this.options.endPointOffset?this.options.endPointOffset.from:0}this.options.arrowStrikethrough===false&&(c=0);let u=0;do{l=(a+s)*.5;d=this.getPoint(l,i);const t=Math.atan2(h.y-d.y,h.x-d.x);const r=h.distanceToBorder(e,t)+c;const v=Math.sqrt(Math.pow(d.x-h.x,2)+Math.pow(d.y-h.y,2));const f=r-v;if(Math.abs(f)<o)break;f<0?n===false?a=l:s=l:n===false?s=l:a=l;++u}while(a<=s&&u<r);return MC(MC({},d),{},{t:l})}
/**
   * Calculate the distance between a point (x3,y3) and a line segment from (x1,y1) to (x2,y2).
   * @remarks
   * http://stackoverflow.com/questions/849211/shortest-distancae-between-a-point-and-a-line-segment
   * @param x1 - First end of the line segment on the x axis.
   * @param y1 - First end of the line segment on the y axis.
   * @param x2 - Second end of the line segment on the x axis.
   * @param y2 - Second end of the line segment on the y axis.
   * @param x3 - Position of the point on the x axis.
   * @param y3 - Position of the point on the y axis.
   * @param via - The control point for the edge.
   * @returns The distance between the line segment and the point.
   */_getDistanceToBezierEdge(t,e,i,r,o,n,s){let a=1e9;let h;let d,l,c,u;let v=t;let f=e;for(d=1;d<10;d++){l=.1*d;c=Math.pow(1-l,2)*t+2*l*(1-l)*s.x+Math.pow(l,2)*i;u=Math.pow(1-l,2)*e+2*l*(1-l)*s.y+Math.pow(l,2)*r;if(d>0){h=this._getDistanceToLine(v,f,c,u,o,n);a=h<a?h:a}v=c;f=u}return a}
/**
   * Render a bezier curve between two nodes.
   * @remarks
   * The method accepts zero, one or two control points.
   * Passing zero control points just draws a straight line.
   * @param ctx - The context that will be used for rendering.
   * @param values - Style options for edge drawing.
   * @param viaNode1 - First control point for curve drawing.
   * @param viaNode2 - Second control point for curve drawing.
   */_bezierCurve(t,e,i,r){t.beginPath();t.moveTo(this.fromPoint.x,this.fromPoint.y);i!=null&&i.x!=null?r!=null&&r.x!=null?t.bezierCurveTo(i.x,i.y,r.x,r.y,this.toPoint.x,this.toPoint.y):t.quadraticCurveTo(i.x,i.y,this.toPoint.x,this.toPoint.y):t.lineTo(this.toPoint.x,this.toPoint.y);this.drawBackground(t,e);this.enableShadow(t,e);t.stroke();this.disableShadow(t,e)}getViaNode(){return this._getViaCoordinates()}}class BezierEdgeDynamic extends BezierEdgeBase{
/**
   * Create a new instance.
   * @param options - The options object of given edge.
   * @param body - The body of the network.
   * @param labelModule - Label module.
   */
constructor(t,e,i){super(t,e,i);tE(this,"via",this.via);this._boundFunction=()=>{this.positionBezierNode()};this._body.emitter.on("_repositionBezierNodes",this._boundFunction)}setOptions(t){super.setOptions(t);let e=false;this.options.physics!==t.physics&&(e=true);this.options=t;this.id=this.options.id;this.from=this._body.nodes[this.options.from];this.to=this._body.nodes[this.options.to];this.setupSupportNode();this.connect();if(e===true){this.via.setOptions({physics:this.options.physics});this.positionBezierNode()}}connect(){this.from=this._body.nodes[this.options.from];this.to=this._body.nodes[this.options.to];this.from===void 0||this.to===void 0||this.options.physics===false||this.from.id===this.to.id?this.via.setOptions({physics:false}):this.via.setOptions({physics:true})}cleanup(){this._body.emitter.off("_repositionBezierNodes",this._boundFunction);if(this.via!==void 0){delete this._body.nodes[this.via.id];this.via=void 0;return true}return false}setupSupportNode(){if(this.via===void 0){const t="edgeId:"+this.id;const e=this._body.functions.createNode({id:t,shape:"circle",physics:true,hidden:true});this._body.nodes[t]=e;this.via=e;this.via.parentEdgeId=this.id;this.positionBezierNode()}}positionBezierNode(){if(this.via!==void 0&&this.from!==void 0&&this.to!==void 0){this.via.x=.5*(this.from.x+this.to.x);this.via.y=.5*(this.from.y+this.to.y)}else if(this.via!==void 0){this.via.x=0;this.via.y=0}}_line(t,e,i){this._bezierCurve(t,e,i)}_getViaCoordinates(){return this.via}getViaNode(){return this.via}getPoint(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.via;if(this.from===this.to){const[e,i,r]=this._getCircleData();const o=2*Math.PI*(1-t);return{x:e+r*Math.sin(o),y:i+r-r*(1-Math.cos(o))}}return{x:Math.pow(1-t,2)*this.fromPoint.x+2*t*(1-t)*e.x+Math.pow(t,2)*this.toPoint.x,y:Math.pow(1-t,2)*this.fromPoint.y+2*t*(1-t)*e.y+Math.pow(t,2)*this.toPoint.y}}_findBorderPosition(t,e){return this._findBorderPositionBezier(t,e,this.via)}_getDistanceToEdge(t,e,i,r,o,n){return this._getDistanceToBezierEdge(t,e,i,r,o,n,this.via)}}class BezierEdgeStatic extends BezierEdgeBase{
/**
   * Create a new instance.
   * @param options - The options object of given edge.
   * @param body - The body of the network.
   * @param labelModule - Label module.
   */
constructor(t,e,i){super(t,e,i)}_line(t,e,i){this._bezierCurve(t,e,i)}getViaNode(){return this._getViaCoordinates()}
/**
   * Compute the coordinates of the via node.
   * @remarks
   * We do not use the to and fromPoints here to make the via nodes the same as edges without arrows.
   * @returns Cartesian coordinates of the via node.
   */_getViaCoordinates(){const t=this.options.smooth.roundness;const e=this.options.smooth.type;let i=Math.abs(this.from.x-this.to.x);let r=Math.abs(this.from.y-this.to.y);if(e==="discrete"||e==="diagonalCross"){let o;let n;o=n=i<=r?t*r:t*i;this.from.x>this.to.x&&(o=-o);this.from.y>=this.to.y&&(n=-n);let s=this.from.x+o;let a=this.from.y+n;e==="discrete"&&(i<=r?s=i<t*r?this.from.x:s:a=r<t*i?this.from.y:a);return{x:s,y:a}}if(e==="straightCross"){let e=(1-t)*i;let o=(1-t)*r;if(i<=r){e=0;this.from.y<this.to.y&&(o=-o)}else{this.from.x<this.to.x&&(e=-e);o=0}return{x:this.to.x+e,y:this.to.y+o}}if(e==="horizontal"){let e=(1-t)*i;this.from.x<this.to.x&&(e=-e);return{x:this.to.x+e,y:this.from.y}}if(e==="vertical"){let e=(1-t)*r;this.from.y<this.to.y&&(e=-e);return{x:this.from.x,y:this.to.y+e}}if(e==="curvedCW"){i=this.to.x-this.from.x;r=this.from.y-this.to.y;const e=Math.sqrt(i*i+r*r);const o=Math.PI;const n=Math.atan2(r,i);const s=(n+(t*.5+.5)*o)%(2*o);return{x:this.from.x+(t*.5+.5)*e*Math.sin(s),y:this.from.y+(t*.5+.5)*e*Math.cos(s)}}if(e==="curvedCCW"){i=this.to.x-this.from.x;r=this.from.y-this.to.y;const e=Math.sqrt(i*i+r*r);const o=Math.PI;const n=Math.atan2(r,i);const s=(n+(.5*-t+.5)*o)%(2*o);return{x:this.from.x+(t*.5+.5)*e*Math.sin(s),y:this.from.y+(t*.5+.5)*e*Math.cos(s)}}{let e;let o;e=o=i<=r?t*r:t*i;this.from.x>this.to.x&&(e=-e);this.from.y>=this.to.y&&(o=-o);let n=this.from.x+e;let s=this.from.y+o;i<=r?n=this.from.x<=this.to.x?this.to.x<n?this.to.x:n:this.to.x>n?this.to.x:n:s=this.from.y>=this.to.y?this.to.y>s?this.to.y:s:this.to.y<s?this.to.y:s;return{x:n,y:s}}}_findBorderPosition(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._findBorderPositionBezier(t,e,i.via)}_getDistanceToEdge(t,e,i,r,o,n){let s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:this._getViaCoordinates();return this._getDistanceToBezierEdge(t,e,i,r,o,n,s)}getPoint(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._getViaCoordinates();const i=t;const r=Math.pow(1-i,2)*this.fromPoint.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.toPoint.x;const o=Math.pow(1-i,2)*this.fromPoint.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.toPoint.y;return{x:r,y:o}}}class CubicBezierEdgeBase extends BezierEdgeBase{
/**
   * Create a new instance.
   * @param options - The options object of given edge.
   * @param body - The body of the network.
   * @param labelModule - Label module.
   */
constructor(t,e,i){super(t,e,i)}
/**
   * Calculate the distance between a point (x3,y3) and a line segment from (x1,y1) to (x2,y2).
   * @remarks
   * http://stackoverflow.com/questions/849211/shortest-distancae-between-a-point-and-a-line-segment
   * https://en.wikipedia.org/wiki/B%C3%A9zier_curve
   * @param x1 - First end of the line segment on the x axis.
   * @param y1 - First end of the line segment on the y axis.
   * @param x2 - Second end of the line segment on the x axis.
   * @param y2 - Second end of the line segment on the y axis.
   * @param x3 - Position of the point on the x axis.
   * @param y3 - Position of the point on the y axis.
   * @param via1 - The first point this edge passes through.
   * @param via2 - The second point this edge passes through.
   * @returns The distance between the line segment and the point.
   */_getDistanceToBezierEdge2(t,e,i,r,o,n,s,a){let h=1e9;let d=t;let l=e;const c=[0,0,0,0];for(let u=1;u<10;u++){const v=.1*u;c[0]=Math.pow(1-v,3);c[1]=3*v*Math.pow(1-v,2);c[2]=3*Math.pow(v,2)*(1-v);c[3]=Math.pow(v,3);const f=c[0]*t+c[1]*s.x+c[2]*a.x+c[3]*i;const p=c[0]*e+c[1]*s.y+c[2]*a.y+c[3]*r;if(u>0){const t=this._getDistanceToLine(d,l,f,p,o,n);h=t<h?t:h}d=f;l=p}return h}}class CubicBezierEdge extends CubicBezierEdgeBase{
/**
   * Create a new instance.
   * @param options - The options object of given edge.
   * @param body - The body of the network.
   * @param labelModule - Label module.
   */
constructor(t,e,i){super(t,e,i)}_line(t,e,i){const r=i[0];const o=i[1];this._bezierCurve(t,e,r,o)}
/**
   * Compute the additional points the edge passes through.
   * @returns Cartesian coordinates of the points the edge passes through.
   */_getViaCoordinates(){const t=this.from.x-this.to.x;const e=this.from.y-this.to.y;let i;let r;let o;let n;const s=this.options.smooth.roundness;if((Math.abs(t)>Math.abs(e)||this.options.smooth.forceDirection===true||this.options.smooth.forceDirection==="horizontal")&&this.options.smooth.forceDirection!=="vertical"){r=this.from.y;n=this.to.y;i=this.from.x-s*t;o=this.to.x+s*t}else{r=this.from.y-s*e;n=this.to.y+s*e;i=this.from.x;o=this.to.x}return[{x:i,y:r},{x:o,y:n}]}getViaNode(){return this._getViaCoordinates()}_findBorderPosition(t,e){return this._findBorderPositionBezier(t,e)}_getDistanceToEdge(t,e,i,r,o,n){let[s,a]=arguments.length>6&&arguments[6]!==void 0?arguments[6]:this._getViaCoordinates();return this._getDistanceToBezierEdge2(t,e,i,r,o,n,s,a)}getPoint(t){let[e,i]=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._getViaCoordinates();const r=t;const o=[Math.pow(1-r,3),3*r*Math.pow(1-r,2),3*Math.pow(r,2)*(1-r),Math.pow(r,3)];const n=o[0]*this.fromPoint.x+o[1]*e.x+o[2]*i.x+o[3]*this.toPoint.x;const s=o[0]*this.fromPoint.y+o[1]*e.y+o[2]*i.y+o[3]*this.toPoint.y;return{x:n,y:s}}}class StraightEdge extends EdgeBase{
/**
   * Create a new instance.
   * @param options - The options object of given edge.
   * @param body - The body of the network.
   * @param labelModule - Label module.
   */
constructor(t,e,i){super(t,e,i)}_line(t,e){t.beginPath();t.moveTo(this.fromPoint.x,this.fromPoint.y);t.lineTo(this.toPoint.x,this.toPoint.y);this.enableShadow(t,e);t.stroke();this.disableShadow(t,e)}getViaNode(){}getPoint(t){return{x:(1-t)*this.fromPoint.x+t*this.toPoint.x,y:(1-t)*this.fromPoint.y+t*this.toPoint.y}}_findBorderPosition(t,e){let i=this.to;let r=this.from;if(t.id===this.from.id){i=this.from;r=this.to}const o=Math.atan2(i.y-r.y,i.x-r.x);const n=i.x-r.x;const s=i.y-r.y;const a=Math.sqrt(n*n+s*s);const h=t.distanceToBorder(e,o);const d=(a-h)/a;return{x:(1-d)*r.x+d*i.x,y:(1-d)*r.y+d*i.y,t:0}}_getDistanceToEdge(t,e,i,r,o,n){return this._getDistanceToLine(t,e,i,r,o,n)}}class Edge{
/**
   * @param {object} options        values specific to this edge, must contain at least 'from' and 'to'
   * @param {object} body           shared state from Network instance
   * @param {Network.Images} imagelist  A list with images. Only needed when the edge has image arrows.
   * @param {object} globalOptions  options from the EdgesHandler instance
   * @param {object} defaultOptions default options from the EdgeHandler instance. Value and reference are constant
   */
constructor(t,e,i,r,o){if(e===void 0)throw new Error("No body provided");this.options=mm(r);this.globalOptions=r;this.defaultOptions=o;this.body=e;this.imagelist=i;this.id=void 0;this.fromId=void 0;this.toId=void 0;this.selected=false;this.hover=false;this.labelDirty=true;this.baseWidth=this.options.width;this.baseFontSize=this.options.font.size;this.from=void 0;this.to=void 0;this.edgeType=void 0;this.connected=false;this.labelModule=new Label(this.body,this.options,true);this.setOptions(t)}
/**
   * Set or overwrite options for the edge
   * @param {object} options  an object with options
   * @returns {undefined|boolean} undefined if no options, true if layout affecting data changed, false otherwise.
   */setOptions(t){if(!t)return;let e=typeof t.physics!=="undefined"&&this.options.physics!==t.physics||typeof t.hidden!=="undefined"&&(this.options.hidden||false)!==(t.hidden||false)||typeof t.from!=="undefined"&&this.options.from!==t.from||typeof t.to!=="undefined"&&this.options.to!==t.to;Edge.parseOptions(this.options,t,true,this.globalOptions);t.id!==void 0&&(this.id=t.id);t.from!==void 0&&(this.fromId=t.from);t.to!==void 0&&(this.toId=t.to);t.title!==void 0&&(this.title=t.title);t.value!==void 0&&(t.value=mE(t.value));const i=[t,this.options,this.defaultOptions];this.chooser=FO("edge",i);this.updateLabelModule(t);e=this.updateEdgeType()||e;this._setInteractionWidths();this.connect();return e}
/**
   *
   * @param {object} parentOptions
   * @param {object} newOptions
   * @param {boolean} [allowDeletion]
   * @param {object} [globalOptions]
   * @param {boolean} [copyFromGlobals]
   */static parseOptions(t,e){let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};let o=arguments.length>4&&arguments[4]!==void 0&&arguments[4];const n=["endPointOffset","arrowStrikethrough","id","from","hidden","hoverWidth","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","selfReference","to","title","value","width","font","chosen","widthConstraint"];$g(n,t,e,i);if(e.endPointOffset!==void 0&&e.endPointOffset.from!==void 0)if(Tw(e.endPointOffset.from))t.endPointOffset.from=e.endPointOffset.from;else{t.endPointOffset.from=r.endPointOffset.from!==void 0?r.endPointOffset.from:0;console.error("endPointOffset.from is not a valid number")}if(e.endPointOffset!==void 0&&e.endPointOffset.to!==void 0)if(Tw(e.endPointOffset.to))t.endPointOffset.to=e.endPointOffset.to;else{t.endPointOffset.to=r.endPointOffset.to!==void 0?r.endPointOffset.to:0;console.error("endPointOffset.to is not a valid number")}RO(e.label)?t.label=e.label:RO(t.label)||(t.label=void 0);ym(t,e,"smooth",r);ym(t,e,"shadow",r);ym(t,e,"background",r);e.dashes!==void 0&&e.dashes!==null?t.dashes=e.dashes:i===true&&e.dashes===null&&(t.dashes=Ku(r.dashes));if(e.scaling!==void 0&&e.scaling!==null){e.scaling.min!==void 0&&(t.scaling.min=e.scaling.min);e.scaling.max!==void 0&&(t.scaling.max=e.scaling.max);ym(t.scaling,e.scaling,"label",r.scaling)}else i===true&&e.scaling===null&&(t.scaling=Ku(r.scaling));if(e.arrows!==void 0&&e.arrows!==null)if(typeof e.arrows==="string"){const i=e.arrows.toLowerCase();t.arrows.to.enabled=zu(i).call(i,"to")!=-1;t.arrows.middle.enabled=zu(i).call(i,"middle")!=-1;t.arrows.from.enabled=zu(i).call(i,"from")!=-1}else{if(typeof e.arrows!=="object")throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+yv(e.arrows));ym(t.arrows,e.arrows,"to",r.arrows);ym(t.arrows,e.arrows,"middle",r.arrows);ym(t.arrows,e.arrows,"from",r.arrows)}else i===true&&e.arrows===null&&(t.arrows=Ku(r.arrows));if(e.color!==void 0&&e.color!==null){const n=Gg(e.color)?{color:e.color,highlight:e.color,hover:e.color,inherit:false,opacity:1}:e.color;const s=t.color;if(o)tm(s,r.color,false,i);else for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&delete s[t];if(Gg(s)){s.color=s;s.highlight=s;s.hover=s;s.inherit=false;n.opacity===void 0&&(s.opacity=1)}else{let t=false;if(n.color!==void 0){s.color=n.color;t=true}if(n.highlight!==void 0){s.highlight=n.highlight;t=true}if(n.hover!==void 0){s.hover=n.hover;t=true}n.inherit!==void 0&&(s.inherit=n.inherit);n.opacity!==void 0&&(s.opacity=Math.min(1,Math.max(0,n.opacity)));t===true?s.inherit=false:s.inherit===void 0&&(s.inherit="from")}}else i===true&&e.color===null&&(t.color=mm(r.color));i===true&&e.font===null&&(t.font=mm(r.font));if(Object.prototype.hasOwnProperty.call(e,"selfReferenceSize")){console.warn("The selfReferenceSize property has been deprecated. Please use selfReference property instead. The selfReference can be set like thise selfReference:{size:30, angle:Math.PI / 4}");t.selfReference.size=e.selfReferenceSize}}
/**
   *
   * @returns {ArrowOptions}
   */getFormattingValues(){const t=this.options.arrows.to===true||this.options.arrows.to.enabled===true;const e=this.options.arrows.from===true||this.options.arrows.from.enabled===true;const i=this.options.arrows.middle===true||this.options.arrows.middle.enabled===true;const r=this.options.color.inherit;const o={toArrow:t,toArrowScale:this.options.arrows.to.scaleFactor,toArrowType:this.options.arrows.to.type,toArrowSrc:this.options.arrows.to.src,toArrowImageWidth:this.options.arrows.to.imageWidth,toArrowImageHeight:this.options.arrows.to.imageHeight,middleArrow:i,middleArrowScale:this.options.arrows.middle.scaleFactor,middleArrowType:this.options.arrows.middle.type,middleArrowSrc:this.options.arrows.middle.src,middleArrowImageWidth:this.options.arrows.middle.imageWidth,middleArrowImageHeight:this.options.arrows.middle.imageHeight,fromArrow:e,fromArrowScale:this.options.arrows.from.scaleFactor,fromArrowType:this.options.arrows.from.type,fromArrowSrc:this.options.arrows.from.src,fromArrowImageWidth:this.options.arrows.from.imageWidth,fromArrowImageHeight:this.options.arrows.from.imageHeight,arrowStrikethrough:this.options.arrowStrikethrough,color:r?void 0:this.options.color.color,inheritsColor:r,opacity:this.options.color.opacity,hidden:this.options.hidden,length:this.options.length,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y,dashes:this.options.dashes,width:this.options.width,background:this.options.background.enabled,backgroundColor:this.options.background.color,backgroundSize:this.options.background.size,backgroundDashes:this.options.background.dashes};if(this.selected||this.hover){if(this.chooser===true){if(this.selected){const t=this.options.selectionWidth;typeof t==="function"?o.width=t(o.width):typeof t==="number"&&(o.width+=t);o.width=Math.max(o.width,.3/this.body.view.scale);o.color=this.options.color.highlight;o.shadow=this.options.shadow.enabled}else if(this.hover){const t=this.options.hoverWidth;typeof t==="function"?o.width=t(o.width):typeof t==="number"&&(o.width+=t);o.width=Math.max(o.width,.3/this.body.view.scale);o.color=this.options.color.hover;o.shadow=this.options.shadow.enabled}}else if(typeof this.chooser==="function"){this.chooser(o,this.options.id,this.selected,this.hover);o.color!==void 0&&(o.inheritsColor=false);o.shadow===false&&(o.shadowColor===this.options.shadow.color&&o.shadowSize===this.options.shadow.size&&o.shadowX===this.options.shadow.x&&o.shadowY===this.options.shadow.y||(o.shadow=true))}}else{o.shadow=this.options.shadow.enabled;o.width=Math.max(o.width,.3/this.body.view.scale)}return o}
/**
   * update the options in the label module
   * @param {object} options
   */updateLabelModule(t){const e=[t,this.options,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,e);this.labelModule.baseSize!==void 0&&(this.baseFontSize=this.labelModule.baseSize)}
/**
   * update the edge type, set the options
   * @returns {boolean}
   */updateEdgeType(){const t=this.options.smooth;let e=false;let i=true;if(this.edgeType!==void 0){(this.edgeType instanceof BezierEdgeDynamic&&t.enabled===true&&t.type==="dynamic"||this.edgeType instanceof CubicBezierEdge&&t.enabled===true&&t.type==="cubicBezier"||this.edgeType instanceof BezierEdgeStatic&&t.enabled===true&&t.type!=="dynamic"&&t.type!=="cubicBezier"||this.edgeType instanceof StraightEdge&&t.type.enabled===false)&&(i=false);i===true&&(e=this.cleanup())}if(i===true)if(t.enabled===true)if(t.type==="dynamic"){e=true;this.edgeType=new BezierEdgeDynamic(this.options,this.body,this.labelModule)}else t.type==="cubicBezier"?this.edgeType=new CubicBezierEdge(this.options,this.body,this.labelModule):this.edgeType=new BezierEdgeStatic(this.options,this.body,this.labelModule);else this.edgeType=new StraightEdge(this.options,this.body,this.labelModule);else this.edgeType.setOptions(this.options);return e}connect(){this.disconnect();this.from=this.body.nodes[this.fromId]||void 0;this.to=this.body.nodes[this.toId]||void 0;this.connected=this.from!==void 0&&this.to!==void 0;if(this.connected===true){this.from.attachEdge(this);this.to.attachEdge(this)}else{this.from&&this.from.detachEdge(this);this.to&&this.to.detachEdge(this)}this.edgeType.connect()}disconnect(){if(this.from){this.from.detachEdge(this);this.from=void 0}if(this.to){this.to.detachEdge(this);this.to=void 0}this.connected=false}
/**
   * get the title of this edge.
   * @returns {string} title    The title of the edge, or undefined when no title
   *                           has been set.
   */getTitle(){return this.title}
/**
   * check if this node is selecte
   * @returns {boolean} selected   True if node is selected, else false
   */isSelected(){return this.selected}
/**
   * Retrieve the value of the edge. Can be undefined
   * @returns {number} value
   */getValue(){return this.options.value}
/**
   * Adjust the value range of the edge. The edge will adjust it's width
   * based on its value.
   * @param {number} min
   * @param {number} max
   * @param {number} total
   */setValueRange(t,e,i){if(this.options.value!==void 0){const r=this.options.scaling.customScalingFunction(t,e,i,this.options.value);const o=this.options.scaling.max-this.options.scaling.min;if(this.options.scaling.label.enabled===true){const t=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+r*t}this.options.width=this.options.scaling.min+r*o}else{this.options.width=this.baseWidth;this.options.font.size=this.baseFontSize}this._setInteractionWidths();this.updateLabelModule()}_setInteractionWidths(){typeof this.options.hoverWidth==="function"?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width;typeof this.options.selectionWidth==="function"?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width}
/**
   * Redraw a edge
   * Draw this edge in the given canvas
   * The 2d context of a HTML canvas can be retrieved by canvas.getContext("2d");
   * @param {CanvasRenderingContext2D}   ctx
   */draw(t){const e=this.getFormattingValues();if(e.hidden)return;const i=this.edgeType.getViaNode();this.edgeType.drawLine(t,e,this.selected,this.hover,i);this.drawLabel(t,i)}
/**
   * Redraw arrows
   * Draw this arrows in the given canvas
   * The 2d context of a HTML canvas can be retrieved by canvas.getContext("2d");
   * @param {CanvasRenderingContext2D}   ctx
   */drawArrows(t){const e=this.getFormattingValues();if(e.hidden)return;const i=this.edgeType.getViaNode();const r={};this.edgeType.fromPoint=this.edgeType.from;this.edgeType.toPoint=this.edgeType.to;if(e.fromArrow){r.from=this.edgeType.getArrowData(t,"from",i,this.selected,this.hover,e);e.arrowStrikethrough===false&&(this.edgeType.fromPoint=r.from.core);e.fromArrowSrc&&(r.from.image=this.imagelist.load(e.fromArrowSrc));e.fromArrowImageWidth&&(r.from.imageWidth=e.fromArrowImageWidth);e.fromArrowImageHeight&&(r.from.imageHeight=e.fromArrowImageHeight)}if(e.toArrow){r.to=this.edgeType.getArrowData(t,"to",i,this.selected,this.hover,e);e.arrowStrikethrough===false&&(this.edgeType.toPoint=r.to.core);e.toArrowSrc&&(r.to.image=this.imagelist.load(e.toArrowSrc));e.toArrowImageWidth&&(r.to.imageWidth=e.toArrowImageWidth);e.toArrowImageHeight&&(r.to.imageHeight=e.toArrowImageHeight)}if(e.middleArrow){r.middle=this.edgeType.getArrowData(t,"middle",i,this.selected,this.hover,e);e.middleArrowSrc&&(r.middle.image=this.imagelist.load(e.middleArrowSrc));e.middleArrowImageWidth&&(r.middle.imageWidth=e.middleArrowImageWidth);e.middleArrowImageHeight&&(r.middle.imageHeight=e.middleArrowImageHeight)}e.fromArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,r.from);e.middleArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,r.middle);e.toArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,r.to)}
/**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Node} viaNode
   */drawLabel(t,e){if(this.options.label!==void 0){const i=this.from;const r=this.to;this.labelModule.differentState(this.selected,this.hover)&&this.labelModule.getTextSize(t,this.selected,this.hover);let o;if(i.id!=r.id){this.labelModule.pointToSelf=false;o=this.edgeType.getPoint(.5,e);t.save();const i=this._getRotation(t);if(i.angle!=0){t.translate(i.x,i.y);t.rotate(i.angle)}this.labelModule.draw(t,o.x,o.y,this.selected,this.hover);t.restore()}else{this.labelModule.pointToSelf=true;const e=jO(t,this.options.selfReference.angle,this.options.selfReference.size,i);o=this._pointOnCircle(e.x,e.y,this.options.selfReference.size,this.options.selfReference.angle);this.labelModule.draw(t,o.x,o.y,this.selected,this.hover)}}}
/**
   * Determine all visual elements of this edge instance, in which the given
   * point falls within the bounding shape.
   * @param {point} point
   * @returns {Array.<edgeClickItem|edgeLabelClickItem>} list with the items which are on the point
   */getItemsOnPoint(t){const e=[];if(this.labelModule.visible()){const i=this._getRotation();AO(this.labelModule.getSize(),t,i)&&e.push({edgeId:this.id,labelId:0})}const i={left:t.x,top:t.y};this.isOverlappingWith(i)&&e.push({edgeId:this.id});return e}
/**
   * Check if this object is overlapping with the provided object
   * @param {object} obj   an object with parameters left, top
   * @returns {boolean}     True if location is located on the edge
   */isOverlappingWith(t){if(this.connected){const e=10;const i=this.from.x;const r=this.from.y;const o=this.to.x;const n=this.to.y;const s=t.left;const a=t.top;const h=this.edgeType.getDistanceToEdge(i,r,o,n,s,a);return h<e}return false}
/**
   * Determine the rotation point, if any.
   * @param {CanvasRenderingContext2D} [ctx] if passed, do a recalculation of the label size
   * @returns {rotationPoint} the point to rotate around and the angle in radians to rotate
   * @private
   */_getRotation(t){const e=this.edgeType.getViaNode();const i=this.edgeType.getPoint(.5,e);t!==void 0&&this.labelModule.calculateLabelSize(t,this.selected,this.hover,i.x,i.y);const r={x:i.x,y:this.labelModule.size.yLine,angle:0};if(!this.labelModule.visible())return r;if(this.options.font.align==="horizontal")return r;const o=this.from.y-this.to.y;const n=this.from.x-this.to.x;let s=Math.atan2(o,n);(s<-1&&n<0||s>0&&n<0)&&(s+=Math.PI);r.angle=s;return r}
/**
   * Get a point on a circle
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @param {number} angle
   * @returns {object} point
   * @private
   */_pointOnCircle(t,e,i,r){return{x:t+i*Math.cos(r),y:e-i*Math.sin(r)}}select(){this.selected=true}unselect(){this.selected=false}
/**
   * cleans all required things on delete
   * @returns {*}
   */cleanup(){return this.edgeType.cleanup()}remove(){this.cleanup();this.disconnect();delete this.body.edges[this.id]}
/**
   * Check if both connecting nodes exist
   * @returns {boolean}
   */endPointsValid(){return this.body.nodes[this.fromId]!==void 0&&this.body.nodes[this.toId]!==void 0}}class EdgesHandler{
/**
   * @param {object} body
   * @param {Array.<Image>} images
   * @param {Array.<Group>} groups
   */
constructor(t,e,i){var r;this.body=t;this.images=e;this.groups=i;this.body.functions.createEdge=lr(r=this.create).call(r,this);this.edgesListeners={add:(t,e)=>{this.add(e.items)},update:(t,e)=>{this.update(e.items)},remove:(t,e)=>{this.remove(e.items)}};this.options={};this.defaultOptions={arrows:{to:{enabled:false,scaleFactor:1,type:"arrow"},middle:{enabled:false,scaleFactor:1,type:"arrow"},from:{enabled:false,scaleFactor:1,type:"arrow"}},endPointOffset:{from:0,to:0},arrowStrikethrough:true,color:{color:"#848484",highlight:"#848484",hover:"#848484",inherit:"from",opacity:1},dashes:false,font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal",multi:false,vadjust:0,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"courier new",vadjust:2}},hidden:false,hoverWidth:1.5,label:void 0,labelHighlightBold:true,length:void 0,physics:true,scaling:{min:1,max:15,label:{enabled:true,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,r){if(e===t)return.5;{const i=1/(e-t);return Math.max(0,(r-t)*i)}}},selectionWidth:1.5,selfReference:{size:20,angle:Math.PI/4,renderBehindTheNode:true},shadow:{enabled:false,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},background:{enabled:false,color:"rgba(111,111,111,1)",size:10,dashes:false},smooth:{enabled:true,type:"dynamic",forceDirection:"none",roundness:.5},title:void 0,width:1,value:void 0};tm(this.options,this.defaultOptions);this.bindEventListeners()}bindEventListeners(){var t,e,i=this;this.body.emitter.on("_forceDisableDynamicCurves",(function(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];t==="dynamic"&&(t="continuous");let r=false;for(const e in i.body.edges)if(Object.prototype.hasOwnProperty.call(i.body.edges,e)){const o=i.body.edges[e];const n=i.body.data.edges.get(e);if(n!=null){const e=n.smooth;if(e!==void 0&&e.enabled===true&&e.type==="dynamic"){t===void 0?o.setOptions({smooth:false}):o.setOptions({smooth:{type:t}});r=true}}}e===true&&r===true&&i.body.emitter.emit("_dataChanged")}));this.body.emitter.on("_dataUpdated",(()=>{this.reconnectEdges()}));this.body.emitter.on("refreshEdges",lr(t=this.refresh).call(t,this));this.body.emitter.on("refresh",lr(e=this.refresh).call(e,this));this.body.emitter.on("destroy",(()=>{nm(this.edgesListeners,((t,e)=>{this.body.data.edges&&this.body.data.edges.off(e,t)}));delete this.body.functions.createEdge;delete this.edgesListeners.add;delete this.edgesListeners.update;delete this.edgesListeners.remove;delete this.edgesListeners}))}
/**
   *
   * @param {object} options
   */setOptions(t){if(t!==void 0){Edge.parseOptions(this.options,t,true,this.defaultOptions,true);let e=false;if(t.smooth!==void 0)for(const t in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,t)&&(e=this.body.edges[t].updateEdgeType()||e);if(t.font!==void 0)for(const t in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,t)&&this.body.edges[t].updateLabelModule();t.hidden===void 0&&t.physics===void 0&&e!==true||this.body.emitter.emit("_dataChanged")}}
/**
   * Load edges by reading the data table
   * @param {Array | DataSet | DataView} edges    The data containing the edges.
   * @param {boolean} [doNotEmit] - Suppress data changed event.
   * @private
   */setData(i){let r=arguments.length>1&&arguments[1]!==void 0&&arguments[1];const o=this.body.data.edges;if(t("id",i))this.body.data.edges=i;else if(dh(i)){this.body.data.edges=new e;this.body.data.edges.add(i)}else{if(i)throw new TypeError("Array or DataSet expected");this.body.data.edges=new e}o&&nm(this.edgesListeners,((t,e)=>{o.off(e,t)}));this.body.edges={};if(this.body.data.edges){nm(this.edgesListeners,((t,e)=>{this.body.data.edges.on(e,t)}));const t=this.body.data.edges.getIds();this.add(t,true)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout");r===false&&this.body.emitter.emit("_dataChanged")}
/**
   * Add edges
   * @param {number[] | string[]} ids
   * @param {boolean} [doNotEmit]
   * @private
   */add(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];const i=this.body.edges;const r=this.body.data.edges;for(let e=0;e<t.length;e++){const o=t[e];const n=i[o];n&&n.disconnect();const s=r.get(o,{showInternalIds:true});i[o]=this.create(s)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout");e===false&&this.body.emitter.emit("_dataChanged")}
/**
   * Update existing edges, or create them when not yet existing
   * @param {number[] | string[]} ids
   * @private
   */update(t){const e=this.body.edges;const i=this.body.data.edges;let r=false;for(let o=0;o<t.length;o++){const n=t[o];const s=i.get(n);const a=e[n];if(a!==void 0){a.disconnect();r=a.setOptions(s)||r;a.connect()}else{this.body.edges[n]=this.create(s);r=true}}if(r===true){this.body.emitter.emit("_adjustEdgesForHierarchicalLayout");this.body.emitter.emit("_dataChanged")}else this.body.emitter.emit("_dataUpdated")}
/**
   * Remove existing edges. Non existing ids will be ignored
   * @param {number[] | string[]} ids
   * @param {boolean} [emit]
   * @private
   */remove(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];if(t.length===0)return;const i=this.body.edges;nm(t,(t=>{const e=i[t];e!==void 0&&e.remove()}));e&&this.body.emitter.emit("_dataChanged")}refresh(){nm(this.body.edges,((t,e)=>{const i=this.body.data.edges.get(e);i!==void 0&&t.setOptions(i)}))}
/**
   *
   * @param {object} properties
   * @returns {Edge}
   */create(t){return new Edge(t,this.body,this.images,this.options,this.defaultOptions)}reconnectEdges(){let t;const e=this.body.nodes;const i=this.body.edges;for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&(e[t].edges=[]);for(t in i)if(Object.prototype.hasOwnProperty.call(i,t)){const e=i[t];e.from=null;e.to=null;e.connect()}}
/**
   *
   * @param {Edge.id} edgeId
   * @returns {Array}
   */getConnectedNodes(t){const e=[];if(this.body.edges[t]!==void 0){const i=this.body.edges[t];i.fromId!==void 0&&e.push(i.fromId);i.toId!==void 0&&e.push(i.toId)}return e}_updateState(){this._addMissingEdges();this._removeInvalidEdges()}_removeInvalidEdges(){const t=[];nm(this.body.edges,((e,i)=>{const r=this.body.nodes[e.toId];const o=this.body.nodes[e.fromId];r!==void 0&&r.isCluster===true||o!==void 0&&o.isCluster===true||r!==void 0&&o!==void 0||t.push(i)}));this.remove(t,false)}_addMissingEdges(){const t=this.body.data.edges;if(t===void 0||t===null)return;const e=this.body.edges;const i=[];Ed(t).call(t,((t,r)=>{const o=e[r];o===void 0&&i.push(r)}));this.add(i,true)}}class BarnesHutSolver{
/**
   * @param {object} body
   * @param {{physicsNodeIndices: Array, physicsEdgeIndices: Array, forces: {}, velocities: {}}} physicsBody
   * @param {object} options
   */
constructor(t,e,i){this.body=t;this.physicsBody=e;this.barnesHutTree;this.setOptions(i);this._rng=zg("BARNES HUT SOLVER")}
/**
   *
   * @param {object} options
   */setOptions(t){this.options=t;this.thetaInversed=1/this.options.theta;this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))}solve(){if(this.options.gravitationalConstant!==0&&this.physicsBody.physicsNodeIndices.length>0){let t;const e=this.body.nodes;const i=this.physicsBody.physicsNodeIndices;const r=i.length;const o=this._formBarnesHutTree(e,i);this.barnesHutTree=o;for(let n=0;n<r;n++){t=e[i[n]];t.options.mass>0&&this._getForceContributions(o.root,t)}}}
/**
   * @param {object} parentBranch
   * @param {Node} node
   * @private
   */_getForceContributions(t,e){this._getForceContribution(t.children.NW,e);this._getForceContribution(t.children.NE,e);this._getForceContribution(t.children.SW,e);this._getForceContribution(t.children.SE,e)}
/**
   * This function traverses the barnesHutTree. It checks when it can approximate distant nodes with their center of mass.
   * If a region contains a single node, we check if it is not itself, then we apply the force.
   * @param {object} parentBranch
   * @param {Node} node
   * @private
   */_getForceContribution(t,e){if(t.childrenCount>0){const i=t.centerOfMass.x-e.x;const r=t.centerOfMass.y-e.y;const o=Math.sqrt(i*i+r*r);o*t.calcSize>this.thetaInversed?this._calculateForces(o,i,r,e,t):t.childrenCount===4?this._getForceContributions(t,e):t.children.data.id!=e.id&&this._calculateForces(o,i,r,e,t)}}
/**
   * Calculate the forces based on the distance.
   * @param {number} distance
   * @param {number} dx
   * @param {number} dy
   * @param {Node} node
   * @param {object} parentBranch
   * @private
   */_calculateForces(t,e,i,r,o){if(t===0){t=.1;e=t}this.overlapAvoidanceFactor<1&&r.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*r.shape.radius,t-r.shape.radius));const n=this.options.gravitationalConstant*o.mass*r.options.mass/Math.pow(t,3);const s=e*n;const a=i*n;this.physicsBody.forces[r.id].x+=s;this.physicsBody.forces[r.id].y+=a}
/**
   * This function constructs the barnesHut tree recursively. It creates the root, splits it and starts placing the nodes.
   * @param {Array.<Node>} nodes
   * @param {Array.<number>} nodeIndices
   * @returns {{root: {centerOfMass: {x: number, y: number}, mass: number, range: {minX: number, maxX: number, minY: number, maxY: number}, size: number, calcSize: number, children: {data: null}, maxWidth: number, level: number, childrenCount: number}}} BarnesHutTree
   * @private
   */_formBarnesHutTree(t,e){let i;const r=e.length;let o=t[e[0]].x;let n=t[e[0]].y;let s=t[e[0]].x;let a=t[e[0]].y;for(let i=1;i<r;i++){const r=t[e[i]];const h=r.x;const d=r.y;if(r.options.mass>0){h<o&&(o=h);h>s&&(s=h);d<n&&(n=d);d>a&&(a=d)}}const h=Math.abs(s-o)-Math.abs(a-n);if(h>0){n-=.5*h;a+=.5*h}else{o+=.5*h;s-=.5*h}const d=1e-5;const l=Math.max(d,Math.abs(s-o));const c=.5*l;const u=.5*(o+s),v=.5*(n+a);const f={root:{centerOfMass:{x:0,y:0},mass:0,range:{minX:u-c,maxX:u+c,minY:v-c,maxY:v+c},size:l,calcSize:1/l,children:{data:null},maxWidth:0,level:0,childrenCount:4}};this._splitBranch(f.root);for(let o=0;o<r;o++){i=t[e[o]];i.options.mass>0&&this._placeInTree(f.root,i)}return f}
/**
   * this updates the mass of a branch. this is increased by adding a node.
   * @param {object} parentBranch
   * @param {Node} node
   * @private
   */_updateBranchMass(t,e){const i=t.centerOfMass;const r=t.mass+e.options.mass;const o=1/r;i.x=i.x*t.mass+e.x*e.options.mass;i.x*=o;i.y=i.y*t.mass+e.y*e.options.mass;i.y*=o;t.mass=r;const n=Math.max(Math.max(e.height,e.radius),e.width);t.maxWidth=t.maxWidth<n?n:t.maxWidth}
/**
   * determine in which branch the node will be placed.
   * @param {object} parentBranch
   * @param {Node} node
   * @param {boolean} skipMassUpdate
   * @private
   */_placeInTree(t,e,i){i==true&&i!==void 0||this._updateBranchMass(t,e);const r=t.children.NW.range;let o;o=r.maxX>e.x?r.maxY>e.y?"NW":"SW":r.maxY>e.y?"NE":"SE";this._placeInRegion(t,e,o)}
/**
   * actually place the node in a region (or branch)
   * @param {object} parentBranch
   * @param {Node} node
   * @param {'NW'| 'NE' | 'SW' | 'SE'} region
   * @private
   */_placeInRegion(t,e,i){const r=t.children[i];switch(r.childrenCount){case 0:r.children.data=e;r.childrenCount=1;this._updateBranchMass(r,e);break;case 1:if(r.children.data.x===e.x&&r.children.data.y===e.y){e.x+=this._rng();e.y+=this._rng()}else{this._splitBranch(r);this._placeInTree(r,e)}break;case 4:this._placeInTree(r,e);break}}
/**
   * this function splits a branch into 4 sub branches. If the branch contained a node, we place it in the subbranch
   * after the split is complete.
   * @param {object} parentBranch
   * @private
   */_splitBranch(t){let e=null;if(t.childrenCount===1){e=t.children.data;t.mass=0;t.centerOfMass.x=0;t.centerOfMass.y=0}t.childrenCount=4;t.children.data=null;this._insertRegion(t,"NW");this._insertRegion(t,"NE");this._insertRegion(t,"SW");this._insertRegion(t,"SE");e!=null&&this._placeInTree(t,e)}
/**
   * This function subdivides the region into four new segments.
   * Specifically, this inserts a single new segment.
   * It fills the children section of the parentBranch
   * @param {object} parentBranch
   * @param {'NW'| 'NE' | 'SW' | 'SE'} region
   * @private
   */_insertRegion(t,e){let i,r,o,n;const s=.5*t.size;switch(e){case"NW":i=t.range.minX;r=t.range.minX+s;o=t.range.minY;n=t.range.minY+s;break;case"NE":i=t.range.minX+s;r=t.range.maxX;o=t.range.minY;n=t.range.minY+s;break;case"SW":i=t.range.minX;r=t.range.minX+s;o=t.range.minY+s;n=t.range.maxY;break;case"SE":i=t.range.minX+s;r=t.range.maxX;o=t.range.minY+s;n=t.range.maxY;break}t.children[e]={centerOfMass:{x:0,y:0},mass:0,range:{minX:i,maxX:r,minY:o,maxY:n},size:.5*t.size,calcSize:2*t.calcSize,children:{data:null},maxWidth:0,level:t.level+1,childrenCount:0}}
/**
   * This function is for debugging purposed, it draws the tree.
   * @param {CanvasRenderingContext2D} ctx
   * @param {string} color
   * @private
   */
_debug(t,e){if(this.barnesHutTree!==void 0){t.lineWidth=1;this._drawBranch(this.barnesHutTree.root,t,e)}}
/**
   * This function is for debugging purposes. It draws the branches recursively.
   * @param {object} branch
   * @param {CanvasRenderingContext2D} ctx
   * @param {string} color
   * @private
   */_drawBranch(t,e,i){i===void 0&&(i="#FF0000");if(t.childrenCount===4){this._drawBranch(t.children.NW,e);this._drawBranch(t.children.NE,e);this._drawBranch(t.children.SE,e);this._drawBranch(t.children.SW,e)}e.strokeStyle=i;e.beginPath();e.moveTo(t.range.minX,t.range.minY);e.lineTo(t.range.maxX,t.range.minY);e.stroke();e.beginPath();e.moveTo(t.range.maxX,t.range.minY);e.lineTo(t.range.maxX,t.range.maxY);e.stroke();e.beginPath();e.moveTo(t.range.maxX,t.range.maxY);e.lineTo(t.range.minX,t.range.maxY);e.stroke();e.beginPath();e.moveTo(t.range.minX,t.range.maxY);e.lineTo(t.range.minX,t.range.minY);e.stroke()}}class RepulsionSolver{
/**
   * @param {object} body
   * @param {{physicsNodeIndices: Array, physicsEdgeIndices: Array, forces: {}, velocities: {}}} physicsBody
   * @param {object} options
   */
constructor(t,e,i){this._rng=zg("REPULSION SOLVER");this.body=t;this.physicsBody=e;this.setOptions(i)}
/**
   *
   * @param {object} options
   */setOptions(t){this.options=t}solve(){let t,e,i,r,o,n,s,a;const h=this.body.nodes;const d=this.physicsBody.physicsNodeIndices;const l=this.physicsBody.forces;const c=this.options.nodeDistance;const u=-2/3/c;const v=4/3;for(let f=0;f<d.length-1;f++){s=h[d[f]];for(let p=f+1;p<d.length;p++){a=h[d[p]];t=a.x-s.x;e=a.y-s.y;i=Math.sqrt(t*t+e*e);if(i===0){i=.1*this._rng();t=i}if(i<2*c){n=i<.5*c?1:u*i+v;n/=i;r=t*n;o=e*n;l[s.id].x-=r;l[s.id].y-=o;l[a.id].x+=r;l[a.id].y+=o}}}}}class HierarchicalRepulsionSolver{
/**
   * @param {object} body
   * @param {{physicsNodeIndices: Array, physicsEdgeIndices: Array, forces: {}, velocities: {}}} physicsBody
   * @param {object} options
   */
constructor(t,e,i){this.body=t;this.physicsBody=e;this.setOptions(i)}
/**
   *
   * @param {object} options
   */setOptions(t){this.options=t;this.overlapAvoidanceFactor=Math.max(0,Math.min(1,this.options.avoidOverlap||0))}solve(){const t=this.body.nodes;const e=this.physicsBody.physicsNodeIndices;const i=this.physicsBody.forces;const r=this.options.nodeDistance;for(let o=0;o<e.length-1;o++){const n=t[e[o]];for(let s=o+1;s<e.length;s++){const o=t[e[s]];if(n.level===o.level){const t=r+this.overlapAvoidanceFactor*((n.shape.radius||0)/2+(o.shape.radius||0)/2);const e=o.x-n.x;const s=o.y-n.y;const a=Math.sqrt(e*e+s*s);const h=.05;let d;d=a<t?-Math.pow(h*a,2)+Math.pow(h*t,2):0;a!==0&&(d/=a);const l=e*d;const c=s*d;i[n.id].x-=l;i[n.id].y-=c;i[o.id].x+=l;i[o.id].y+=c}}}}}class SpringSolver{
/**
   * @param {object} body
   * @param {{physicsNodeIndices: Array, physicsEdgeIndices: Array, forces: {}, velocities: {}}} physicsBody
   * @param {object} options
   */
constructor(t,e,i){this.body=t;this.physicsBody=e;this.setOptions(i)}
/**
   *
   * @param {object} options
   */setOptions(t){this.options=t}solve(){let t,e;const i=this.physicsBody.physicsEdgeIndices;const r=this.body.edges;let o,n,s;for(let a=0;a<i.length;a++){e=r[i[a]];if(e.connected===true&&e.toId!==e.fromId&&this.body.nodes[e.toId]!==void 0&&this.body.nodes[e.fromId]!==void 0)if(e.edgeType.via!==void 0){t=e.options.length===void 0?this.options.springLength:e.options.length;o=e.to;n=e.edgeType.via;s=e.from;this._calculateSpringForce(o,n,.5*t);this._calculateSpringForce(n,s,.5*t)}else{t=e.options.length===void 0?this.options.springLength*1.5:e.options.length;this._calculateSpringForce(e.from,e.to,t)}}}
/**
   * This is the code actually performing the calculation for the function above.
   * @param {Node} node1
   * @param {Node} node2
   * @param {number} edgeLength
   * @private
   */_calculateSpringForce(t,e,i){const r=t.x-e.x;const o=t.y-e.y;const n=Math.max(Math.sqrt(r*r+o*o),.01);const s=this.options.springConstant*(i-n)/n;const a=r*s;const h=o*s;if(this.physicsBody.forces[t.id]!==void 0){this.physicsBody.forces[t.id].x+=a;this.physicsBody.forces[t.id].y+=h}if(this.physicsBody.forces[e.id]!==void 0){this.physicsBody.forces[e.id].x-=a;this.physicsBody.forces[e.id].y-=h}}}class HierarchicalSpringSolver{
/**
   * @param {object} body
   * @param {{physicsNodeIndices: Array, physicsEdgeIndices: Array, forces: {}, velocities: {}}} physicsBody
   * @param {object} options
   */
constructor(t,e,i){this.body=t;this.physicsBody=e;this.setOptions(i)}
/**
   *
   * @param {object} options
   */setOptions(t){this.options=t}solve(){let t,e;let i,r,o,n,s,a;const h=this.body.edges;const d=.5;const l=this.physicsBody.physicsEdgeIndices;const c=this.physicsBody.physicsNodeIndices;const u=this.physicsBody.forces;for(let t=0;t<c.length;t++){const e=c[t];u[e].springFx=0;u[e].springFy=0}for(let c=0;c<l.length;c++){e=h[l[c]];if(e.connected===true){t=e.options.length===void 0?this.options.springLength:e.options.length;i=e.from.x-e.to.x;r=e.from.y-e.to.y;a=Math.sqrt(i*i+r*r);a=a===0?.01:a;s=this.options.springConstant*(t-a)/a;o=i*s;n=r*s;if(e.to.level!=e.from.level){if(u[e.toId]!==void 0){u[e.toId].springFx-=o;u[e.toId].springFy-=n}if(u[e.fromId]!==void 0){u[e.fromId].springFx+=o;u[e.fromId].springFy+=n}}else{if(u[e.toId]!==void 0){u[e.toId].x-=d*o;u[e.toId].y-=d*n}if(u[e.fromId]!==void 0){u[e.fromId].x+=d*o;u[e.fromId].y+=d*n}}}}s=1;let v,f;for(let t=0;t<c.length;t++){const e=c[t];v=Math.min(s,Math.max(-s,u[e].springFx));f=Math.min(s,Math.max(-s,u[e].springFy));u[e].x+=v;u[e].y+=f}let p=0;let g=0;for(let t=0;t<c.length;t++){const e=c[t];p+=u[e].x;g+=u[e].y}const m=p/c.length;const y=g/c.length;for(let t=0;t<c.length;t++){const e=c[t];u[e].x-=m;u[e].y-=y}}}class CentralGravitySolver{
/**
   * @param {object} body
   * @param {{physicsNodeIndices: Array, physicsEdgeIndices: Array, forces: {}, velocities: {}}} physicsBody
   * @param {object} options
   */
constructor(t,e,i){this.body=t;this.physicsBody=e;this.setOptions(i)}
/**
   *
   * @param {object} options
   */setOptions(t){this.options=t}solve(){let t,e,i,r;const o=this.body.nodes;const n=this.physicsBody.physicsNodeIndices;const s=this.physicsBody.forces;for(let a=0;a<n.length;a++){const h=n[a];r=o[h];t=-r.x;e=-r.y;i=Math.sqrt(t*t+e*e);this._calculateForces(i,t,e,s,r)}}
/**
   * Calculate the forces based on the distance.
   * @param {number} distance
   * @param {number} dx
   * @param {number} dy
   * @param {Object<Node.id, vis.Node>} forces
   * @param {Node} node
   * @private
   */_calculateForces(t,e,i,r,o){const n=t===0?0:this.options.centralGravity/t;r[o.id].x=e*n;r[o.id].y=i*n}}class ForceAtlas2BasedRepulsionSolver extends BarnesHutSolver{
/**
   * @param {object} body
   * @param {{physicsNodeIndices: Array, physicsEdgeIndices: Array, forces: {}, velocities: {}}} physicsBody
   * @param {object} options
   */
constructor(t,e,i){super(t,e,i);this._rng=zg("FORCE ATLAS 2 BASED REPULSION SOLVER")}
/**
   * Calculate the forces based on the distance.
   * @param {number} distance
   * @param {number} dx
   * @param {number} dy
   * @param {Node} node
   * @param {object} parentBranch
   * @private
   */_calculateForces(t,e,i,r,o){if(t===0){t=.1*this._rng();e=t}this.overlapAvoidanceFactor<1&&r.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*r.shape.radius,t-r.shape.radius));const n=r.edges.length+1;const s=this.options.gravitationalConstant*o.mass*r.options.mass*n/Math.pow(t,2);const a=e*s;const h=i*s;this.physicsBody.forces[r.id].x+=a;this.physicsBody.forces[r.id].y+=h}}class ForceAtlas2BasedCentralGravitySolver extends CentralGravitySolver{
/**
   * @param {object} body
   * @param {{physicsNodeIndices: Array, physicsEdgeIndices: Array, forces: {}, velocities: {}}} physicsBody
   * @param {object} options
   */
constructor(t,e,i){super(t,e,i)}
/**
   * Calculate the forces based on the distance.
   * @param {number} distance
   * @param {number} dx
   * @param {number} dy
   * @param {Object<Node.id, Node>} forces
   * @param {Node} node
   * @private
   */_calculateForces(t,e,i,r,o){if(t>0){const t=o.edges.length+1;const n=this.options.centralGravity*t*o.options.mass;r[o.id].x=e*n;r[o.id].y=i*n}}}class PhysicsEngine{
/**
   * @param {object} body
   */
constructor(t){this.body=t;this.physicsBody={physicsNodeIndices:[],physicsEdgeIndices:[],forces:{},velocities:{}};this.physicsEnabled=true;this.simulationInterval=1e3/60;this.requiresTimeout=true;this.previousStates={};this.referenceState={};this.freezeCache={};this.renderTimer=void 0;this.adaptiveTimestep=false;this.adaptiveTimestepEnabled=false;this.adaptiveCounter=0;this.adaptiveInterval=3;this.stabilized=false;this.startedStabilization=false;this.stabilizationIterations=0;this.ready=false;this.options={};this.defaultOptions={enabled:true,barnesHut:{theta:.5,gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{theta:.5,gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09,avoidOverlap:0},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.75,solver:"barnesHut",stabilization:{enabled:true,iterations:1e3,updateInterval:50,onlyDynamicEdges:false,fit:true},timestep:.5,adaptiveTimestep:true,wind:{x:0,y:0}};Ri(this.options,this.defaultOptions);this.timestep=.5;this.layoutFailed=false;this.bindEventListeners()}bindEventListeners(){this.body.emitter.on("initPhysics",(()=>{this.initPhysics()}));this.body.emitter.on("_layoutFailed",(()=>{this.layoutFailed=true}));this.body.emitter.on("resetPhysics",(()=>{this.stopSimulation();this.ready=false}));this.body.emitter.on("disablePhysics",(()=>{this.physicsEnabled=false;this.stopSimulation()}));this.body.emitter.on("restorePhysics",(()=>{this.setOptions(this.options);this.ready===true&&this.startSimulation()}));this.body.emitter.on("startSimulation",(()=>{this.ready===true&&this.startSimulation()}));this.body.emitter.on("stopSimulation",(()=>{this.stopSimulation()}));this.body.emitter.on("destroy",(()=>{this.stopSimulation(false);this.body.emitter.off()}));this.body.emitter.on("_dataChanged",(()=>{this.updatePhysicsData()}))}
/**
   * set the physics options
   * @param {object} options
   */setOptions(t){if(t!==void 0)if(t===false){this.options.enabled=false;this.physicsEnabled=false;this.stopSimulation()}else if(t===true){this.options.enabled=true;this.physicsEnabled=true;this.startSimulation()}else{this.physicsEnabled=true;Jg(["stabilization"],this.options,t);ym(this.options,t,"stabilization");t.enabled===void 0&&(this.options.enabled=true);if(this.options.enabled===false){this.physicsEnabled=false;this.stopSimulation()}const e=this.options.wind;if(e){(typeof e.x!=="number"||cw(e.x))&&(e.x=0);(typeof e.y!=="number"||cw(e.y))&&(e.y=0)}this.timestep=this.options.timestep}this.init()}init(){let t;if(this.options.solver==="forceAtlas2Based"){t=this.options.forceAtlas2Based;this.nodesSolver=new ForceAtlas2BasedRepulsionSolver(this.body,this.physicsBody,t);this.edgesSolver=new SpringSolver(this.body,this.physicsBody,t);this.gravitySolver=new ForceAtlas2BasedCentralGravitySolver(this.body,this.physicsBody,t)}else if(this.options.solver==="repulsion"){t=this.options.repulsion;this.nodesSolver=new RepulsionSolver(this.body,this.physicsBody,t);this.edgesSolver=new SpringSolver(this.body,this.physicsBody,t);this.gravitySolver=new CentralGravitySolver(this.body,this.physicsBody,t)}else if(this.options.solver==="hierarchicalRepulsion"){t=this.options.hierarchicalRepulsion;this.nodesSolver=new HierarchicalRepulsionSolver(this.body,this.physicsBody,t);this.edgesSolver=new HierarchicalSpringSolver(this.body,this.physicsBody,t);this.gravitySolver=new CentralGravitySolver(this.body,this.physicsBody,t)}else{t=this.options.barnesHut;this.nodesSolver=new BarnesHutSolver(this.body,this.physicsBody,t);this.edgesSolver=new SpringSolver(this.body,this.physicsBody,t);this.gravitySolver=new CentralGravitySolver(this.body,this.physicsBody,t)}this.modelOptions=t}initPhysics(){if(this.physicsEnabled===true&&this.options.enabled===true)if(this.options.stabilization.enabled===true)this.stabilize();else{this.stabilized=false;this.ready=true;this.body.emitter.emit("fit",{},this.layoutFailed);this.startSimulation()}else{this.ready=true;this.body.emitter.emit("fit")}}startSimulation(){if(this.physicsEnabled===true&&this.options.enabled===true){this.stabilized=false;this.adaptiveTimestep=false;this.body.emitter.emit("_resizeNodes");if(this.viewFunction===void 0){var t;this.viewFunction=lr(t=this.simulationStep).call(t,this);this.body.emitter.on("initRedraw",this.viewFunction);this.body.emitter.emit("_startRendering")}}else this.body.emitter.emit("_redraw")}
/**
   * Stop the simulation, force stabilization.
   * @param {boolean} [emit]
   */stopSimulation(){let t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.stabilized=true;t===true&&this._emitStabilized();if(this.viewFunction!==void 0){this.body.emitter.off("initRedraw",this.viewFunction);this.viewFunction=void 0;t===true&&this.body.emitter.emit("_stopRendering")}}simulationStep(){const t=td();this.physicsTick();const e=td()-t;if((e<.4*this.simulationInterval||this.runDoubleSpeed===true)&&this.stabilized===false){this.physicsTick();this.runDoubleSpeed=true}this.stabilized===true&&this.stopSimulation()}
/**
   * trigger the stabilized event.
   * @param {number} [amountOfIterations]
   * @private
   */_emitStabilized(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.stabilizationIterations;(this.stabilizationIterations>1||this.startedStabilization===true)&&Uv((()=>{this.body.emitter.emit("stabilized",{iterations:t});this.startedStabilization=false;this.stabilizationIterations=0}),0)}physicsStep(){this.gravitySolver.solve();this.nodesSolver.solve();this.edgesSolver.solve();this.moveNodes()}adjustTimeStep(){const t=1.2;if(this._evaluateStepQuality()===true)this.timestep=t*this.timestep;else if(this.timestep/t<this.options.timestep)this.timestep=this.options.timestep;else{this.adaptiveCounter=-1;this.timestep=Math.max(this.options.timestep,this.timestep/t)}}physicsTick(){this._startStabilizing();if(this.stabilized!==true){if(this.adaptiveTimestep===true&&this.adaptiveTimestepEnabled===true){const t=this.adaptiveCounter%this.adaptiveInterval===0;if(t){this.timestep=2*this.timestep;this.physicsStep();this.revert();this.timestep=.5*this.timestep;this.physicsStep();this.physicsStep();this.adjustTimeStep()}else this.physicsStep();this.adaptiveCounter+=1}else{this.timestep=this.options.timestep;this.physicsStep()}this.stabilized===true&&this.revert();this.stabilizationIterations++}}updatePhysicsData(){this.physicsBody.forces={};this.physicsBody.physicsNodeIndices=[];this.physicsBody.physicsEdgeIndices=[];const t=this.body.nodes;const e=this.body.edges;for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e].options.physics===true&&this.physicsBody.physicsNodeIndices.push(t[e].id);for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&e[t].options.physics===true&&this.physicsBody.physicsEdgeIndices.push(e[t].id);for(let t=0;t<this.physicsBody.physicsNodeIndices.length;t++){const e=this.physicsBody.physicsNodeIndices[t];this.physicsBody.forces[e]={x:0,y:0};this.physicsBody.velocities[e]===void 0&&(this.physicsBody.velocities[e]={x:0,y:0})}for(const e in this.physicsBody.velocities)t[e]===void 0&&delete this.physicsBody.velocities[e]}revert(){const t=Lh(this.previousStates);const e=this.body.nodes;const i=this.physicsBody.velocities;this.referenceState={};for(let r=0;r<t.length;r++){const o=t[r];if(e[o]!==void 0){if(e[o].options.physics===true){this.referenceState[o]={positions:{x:e[o].x,y:e[o].y}};i[o].x=this.previousStates[o].vx;i[o].y=this.previousStates[o].vy;e[o].x=this.previousStates[o].x;e[o].y=this.previousStates[o].y}}else delete this.previousStates[o]}}
/**
   * This compares the reference state to the current state
   * @returns {boolean}
   * @private
   */_evaluateStepQuality(){let t,e,i;const r=this.body.nodes;const o=this.referenceState;const n=.3;for(const s in this.referenceState)if(Object.prototype.hasOwnProperty.call(this.referenceState,s)&&r[s]!==void 0){t=r[s].x-o[s].positions.x;e=r[s].y-o[s].positions.y;i=Math.sqrt(Math.pow(t,2)+Math.pow(e,2));if(i>n)return false}return true}moveNodes(){const t=this.physicsBody.physicsNodeIndices;let e=0;let i=0;const r=5;for(let r=0;r<t.length;r++){const o=t[r];const n=this._performStep(o);e=Math.max(e,n);i+=n}this.adaptiveTimestepEnabled=i/t.length<r;this.stabilized=e<this.options.minVelocity}
/**
   * Calculate new velocity for a coordinate direction
   * @param {number} v  velocity for current coordinate
   * @param {number} f  regular force for current coordinate
   * @param {number} m  mass of current node
   * @returns {number} new velocity for current coordinate
   * @private
   */calculateComponentVelocity(t,e,i){const r=this.modelOptions.damping*t;const o=(e-r)/i;t+=o*this.timestep;const n=this.options.maxVelocity||1e9;Math.abs(t)>n&&(t=t>0?n:-n);return t}
/**
   * Perform the actual step
   * @param {Node.id} nodeId
   * @returns {number} the new velocity of given node
   * @private
   */_performStep(t){const e=this.body.nodes[t];const i=this.physicsBody.forces[t];if(this.options.wind){i.x+=this.options.wind.x;i.y+=this.options.wind.y}const r=this.physicsBody.velocities[t];this.previousStates[t]={x:e.x,y:e.y,vx:r.x,vy:r.y};if(e.options.fixed.x===false){r.x=this.calculateComponentVelocity(r.x,i.x,e.options.mass);e.x+=r.x*this.timestep}else{i.x=0;r.x=0}if(e.options.fixed.y===false){r.y=this.calculateComponentVelocity(r.y,i.y,e.options.mass);e.y+=r.y*this.timestep}else{i.y=0;r.y=0}const o=Math.sqrt(Math.pow(r.x,2)+Math.pow(r.y,2));return o}_freezeNodes(){const t=this.body.nodes;for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].x&&t[e].y){const i=t[e].options.fixed;this.freezeCache[e]={x:i.x,y:i.y};i.x=true;i.y=true}}_restoreFrozenNodes(){const t=this.body.nodes;for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&this.freezeCache[e]!==void 0){t[e].options.fixed.x=this.freezeCache[e].x;t[e].options.fixed.y=this.freezeCache[e].y}this.freezeCache={}}
/**
   * Find a stable position for all nodes
   * @param {number} [iterations]
   */stabilize(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.stabilization.iterations;if(typeof t!=="number"){t=this.options.stabilization.iterations;console.error("The stabilize method needs a numeric amount of iterations. Switching to default: ",t)}if(this.physicsBody.physicsNodeIndices.length!==0){this.adaptiveTimestep=this.options.adaptiveTimestep;this.body.emitter.emit("_resizeNodes");this.stopSimulation();this.stabilized=false;this.body.emitter.emit("_blockRedraw");this.targetIterations=t;this.options.stabilization.onlyDynamicEdges===true&&this._freezeNodes();this.stabilizationIterations=0;Uv((()=>this._stabilizationBatch()),0)}else this.ready=true}
/**
   * If not already stabilizing, start it and emit a start event.
   * @returns {boolean} true if stabilization started with this call
   * @private
   */_startStabilizing(){if(this.startedStabilization===true)return false;this.body.emitter.emit("startStabilizing");this.startedStabilization=true;return true}_stabilizationBatch(){const t=()=>this.stabilized===false&&this.stabilizationIterations<this.targetIterations;const e=()=>{this.body.emitter.emit("stabilizationProgress",{iterations:this.stabilizationIterations,total:this.targetIterations})};this._startStabilizing()&&e();let i=0;while(t()&&i<this.options.stabilization.updateInterval){this.physicsTick();i++}e();if(t()){var r;Uv(lr(r=this._stabilizationBatch).call(r,this),0)}else this._finalizeStabilization()}_finalizeStabilization(){this.body.emitter.emit("_allowRedraw");this.options.stabilization.fit===true&&this.body.emitter.emit("fit");this.options.stabilization.onlyDynamicEdges===true&&this._restoreFrozenNodes();this.body.emitter.emit("stabilizationIterationsDone");this.body.emitter.emit("_requestRedraw");this.stabilized===true?this._emitStabilized():this.startSimulation();this.ready=true}
/**
   * Debug function that display arrows for the forces currently active in the network.
   *
   * Use this when debugging only.
   * @param {CanvasRenderingContext2D} ctx
   * @private
   */
_drawForces(t){for(let e=0;e<this.physicsBody.physicsNodeIndices.length;e++){const i=this.physicsBody.physicsNodeIndices[e];const r=this.body.nodes[i];const o=this.physicsBody.forces[i];const n=20;const s=.03;const a=Math.sqrt(Math.pow(o.x,2)+Math.pow(o.x,2));const h=Math.min(Math.max(5,a),15);const d=3*h;const l=um((180-Math.min(1,Math.max(0,s*a))*180)/360,1,1);const c={x:r.x+n*o.x,y:r.y+n*o.y};t.lineWidth=h;t.strokeStyle=l;t.beginPath();t.moveTo(r.x,r.y);t.lineTo(c.x,c.y);t.stroke();const u=Math.atan2(o.y,o.x);t.fillStyle=l;EndPoints.draw(t,{type:"arrow",point:c,angle:u,length:d});cf(t).call(t)}}}const DC=[];for(let t=0;t<256;++t)DC.push((t+256).toString(16).slice(1));function IC(t,e=0){return(DC[t[e+0]]+DC[t[e+1]]+DC[t[e+2]]+DC[t[e+3]]+"-"+DC[t[e+4]]+DC[t[e+5]]+"-"+DC[t[e+6]]+DC[t[e+7]]+"-"+DC[t[e+8]]+DC[t[e+9]]+"-"+DC[t[e+10]]+DC[t[e+11]]+DC[t[e+12]]+DC[t[e+13]]+DC[t[e+14]]+DC[t[e+15]]).toLowerCase()}let PC;const BC=new Uint8Array(16);function NC(){if(!PC){if(typeof crypto==="undefined"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");PC=crypto.getRandomValues.bind(crypto)}return PC(BC)}const zC=typeof crypto!=="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var FC={randomUUID:zC};function AC(t,e,i){t=t||{};const r=t.random??t.rng?.()??NC();if(r.length<16)throw new Error("Random bytes length must be >= 16");r[6]=r[6]&15|64;r[8]=r[8]&63|128;return IC(r)}function RC(t,e,i){return FC.randomUUID&&!t?FC.randomUUID():AC(t)}class NetworkUtil{constructor(){}
/**
   * Find the center position of the network considering the bounding boxes
   * @param {Array.<Node>} allNodes
   * @param {Array.<Node>} [specificNodes]
   * @returns {{minX: number, maxX: number, minY: number, maxY: number}}
   * @static
   */static getRange(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];let i,r=1e9,o=-1e9,n=1e9,s=-1e9;if(e.length>0)for(let a=0;a<e.length;a++){i=t[e[a]];n>i.shape.boundingBox.left&&(n=i.shape.boundingBox.left);s<i.shape.boundingBox.right&&(s=i.shape.boundingBox.right);r>i.shape.boundingBox.top&&(r=i.shape.boundingBox.top);o<i.shape.boundingBox.bottom&&(o=i.shape.boundingBox.bottom)}n===1e9&&s===-1e9&&r===1e9&&o===-1e9&&(r=0,o=0,n=0,s=0);return{minX:n,maxX:s,minY:r,maxY:o}}
/**
   * Find the center position of the network
   * @param {Array.<Node>} allNodes
   * @param {Array.<Node>} [specificNodes]
   * @returns {{minX: number, maxX: number, minY: number, maxY: number}}
   * @static
   */static getRangeCore(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];let i,r=1e9,o=-1e9,n=1e9,s=-1e9;if(e.length>0)for(let a=0;a<e.length;a++){i=t[e[a]];n>i.x&&(n=i.x);s<i.x&&(s=i.x);r>i.y&&(r=i.y);o<i.y&&(o=i.y)}n===1e9&&s===-1e9&&r===1e9&&o===-1e9&&(r=0,o=0,n=0,s=0);return{minX:n,maxX:s,minY:r,maxY:o}}
/**
   * @param {object} range = {minX: minX, maxX: maxX, minY: minY, maxY: maxY};
   * @returns {{x: number, y: number}}
   * @static
   */static findCenter(t){return{x:.5*(t.maxX+t.minX),y:.5*(t.maxY+t.minY)}}
/**
   * This returns a clone of the options or options of the edge or node to be used for construction of new edges or check functions for new nodes.
   * @param {vis.Item} item
   * @param {'node'|undefined} type
   * @returns {{}}
   * @static
   */static cloneOptions(t,e){const i={};if(e===void 0||e==="node"){tm(i,t.options,true);i.x=t.x;i.y=t.y;i.amountOfConnections=t.edges.length}else tm(i,t.options,true);return i}}class Cluster extends Node{
/**
   * @param {object} options
   * @param {object} body
   * @param {Array.<HTMLImageElement>}imagelist
   * @param {Array} grouplist
   * @param {object} globalOptions
   * @param {object} defaultOptions     Global default options for nodes
   */
constructor(t,e,i,r,o,n){super(t,e,i,r,o,n);this.isCluster=true;this.containedNodes={};this.containedEdges={}}
/**
   * Transfer child cluster data to current and disconnect the child cluster.
   *
   * Please consult the header comment in 'Clustering.js' for the fields set here.
   * @param {string|number} childClusterId  id of child cluster to open
   */_openChildCluster(t){const e=this.body.nodes[t];if(this.containedNodes[t]===void 0)throw new Error("node with id: "+t+" not in current cluster");if(!e.isCluster)throw new Error("node with id: "+t+" is not a cluster");delete this.containedNodes[t];nm(e.edges,(t=>{delete this.containedEdges[t.id]}));nm(e.containedNodes,((t,e)=>{this.containedNodes[e]=t}));e.containedNodes={};nm(e.containedEdges,((t,e)=>{this.containedEdges[e]=t}));e.containedEdges={};nm(e.edges,(t=>{nm(this.edges,(e=>{var i,r;const o=zu(i=e.clusteringEdgeReplacingIds).call(i,t.id);if(o!==-1){nm(t.clusteringEdgeReplacingIds,(t=>{e.clusteringEdgeReplacingIds.push(t);this.body.edges[t].edgeReplacedById=e.id}));dl(r=e.clusteringEdgeReplacingIds).call(r,o,1)}}))}));e.edges=[]}}class ClusterEngine{
/**
   * @param {object} body
   */
constructor(t){this.body=t;this.clusteredNodes={};this.clusteredEdges={};this.options={};this.defaultOptions={};Ri(this.options,this.defaultOptions);this.body.emitter.on("_resetData",(()=>{this.clusteredNodes={};this.clusteredEdges={}}))}
/**
   *
   * @param {number} hubsize
   * @param {object} options
   */clusterByHubsize(t,e){if(t===void 0)t=this._getHubSize();else if(typeof t==="object"){e=this._checkOptions(t);t=this._getHubSize()}const i=[];for(let e=0;e<this.body.nodeIndices.length;e++){const r=this.body.nodes[this.body.nodeIndices[e]];r.edges.length>=t&&i.push(r.id)}for(let t=0;t<i.length;t++)this.clusterByConnection(i[t],e,true);this.body.emitter.emit("_dataChanged")}
/**
   * loop over all nodes, check if they adhere to the condition and cluster if needed.
   * @param {object} options
   * @param {boolean} [refreshData]
   */cluster(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];if(t.joinCondition===void 0)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");t=this._checkOptions(t);const i={};const r={};nm(this.body.nodes,((e,o)=>{if(e.options&&t.joinCondition(e.options)===true){i[o]=e;nm(e.edges,(t=>{this.clusteredEdges[t.id]===void 0&&(r[t.id]=t)}))}}));this._cluster(i,r,t,e)}
/**
   * Cluster all nodes in the network that have only X edges
   * @param {number} edgeCount
   * @param {object} options
   * @param {boolean} [refreshData]
   */clusterByEdgeCount(t,e){let i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];e=this._checkOptions(e);const r=[];const o={};let n,s,a;for(let i=0;i<this.body.nodeIndices.length;i++){const h={};const d={};const l=this.body.nodeIndices[i];const c=this.body.nodes[l];if(o[l]===void 0){a=0;s=[];for(let t=0;t<c.edges.length;t++){n=c.edges[t];if(this.clusteredEdges[n.id]===void 0){n.toId!==n.fromId&&a++;s.push(n)}}if(a===t){const t=function(t){if(e.joinCondition===void 0||e.joinCondition===null)return true;const i=NetworkUtil.cloneOptions(t);return e.joinCondition(i)};let i=true;for(let e=0;e<s.length;e++){n=s[e];const r=this._getConnectedId(n,l);if(!t(c)){i=false;break}d[n.id]=n;h[l]=c;h[r]=this.body.nodes[r];o[l]=true}if(Lh(h).length>0&&Lh(d).length>0&&i===true){
/**
             * Search for cluster data that contains any of the node id's
             * @returns {boolean} true if no joinCondition, otherwise return value of joinCondition
             */
const t=function(){for(let t=0;t<r.length;++t)for(const e in h)if(r[t].nodes[e]!==void 0)return r[t]};const e=t();if(e!==void 0){for(const t in h)e.nodes[t]===void 0&&(e.nodes[t]=h[t]);for(const t in d)e.edges[t]===void 0&&(e.edges[t]=d[t])}else r.push({nodes:h,edges:d})}}}}for(let t=0;t<r.length;t++)this._cluster(r[t].nodes,r[t].edges,e,false);i===true&&this.body.emitter.emit("_dataChanged")}
/**
   * Cluster all nodes in the network that have only 1 edge
   * @param {object} options
   * @param {boolean} [refreshData]
   */clusterOutliers(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];this.clusterByEdgeCount(1,t,e)}
/**
   * Cluster all nodes in the network that have only 2 edge
   * @param {object} options
   * @param {boolean} [refreshData]
   */clusterBridges(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];this.clusterByEdgeCount(2,t,e)}
/**
   * suck all connected nodes of a node into the node.
   * @param {Node.id} nodeId
   * @param {object} options
   * @param {boolean} [refreshData]
   */clusterByConnection(t,e){var i;let r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(t===void 0)throw new Error("No nodeId supplied to clusterByConnection!");if(this.body.nodes[t]===void 0)throw new Error("The nodeId given to clusterByConnection does not exist!");const o=this.body.nodes[t];e=this._checkOptions(e,o);e.clusterNodeProperties.x===void 0&&(e.clusterNodeProperties.x=o.x);e.clusterNodeProperties.y===void 0&&(e.clusterNodeProperties.y=o.y);if(e.clusterNodeProperties.fixed===void 0){e.clusterNodeProperties.fixed={};e.clusterNodeProperties.fixed.x=o.options.fixed.x;e.clusterNodeProperties.fixed.y=o.options.fixed.y}const n={};const s={};const a=o.id;const h=NetworkUtil.cloneOptions(o);n[a]=o;for(let t=0;t<o.edges.length;t++){const i=o.edges[t];if(this.clusteredEdges[i.id]===void 0){const t=this._getConnectedId(i,a);if(this.clusteredNodes[t]===void 0)if(t!==a)if(e.joinCondition===void 0){s[i.id]=i;n[t]=this.body.nodes[t]}else{const r=NetworkUtil.cloneOptions(this.body.nodes[t]);if(e.joinCondition(h,r)===true){s[i.id]=i;n[t]=this.body.nodes[t]}}else s[i.id]=i}}const d=kh(i=Lh(n)).call(i,(function(t){return n[t].id}));for(const t in n){if(!Object.prototype.hasOwnProperty.call(n,t))continue;const e=n[t];for(let t=0;t<e.edges.length;t++){const i=e.edges[t];zu(d).call(d,this._getConnectedId(i,e.id))>-1&&(s[i.id]=i)}}this._cluster(n,s,e,r)}
/**
   * This function creates the edges that will be attached to the cluster
   * It looks for edges that are connected to the nodes from the "outside' of the cluster.
   * @param {{Node.id: vis.Node}} childNodesObj
   * @param {{vis.Edge.id: vis.Edge}} childEdgesObj
   * @param {object} clusterNodeProperties
   * @param {object} clusterEdgeProperties
   * @private
   */_createClusterEdges(t,e,i,r){let o,n,s,a,h,d;const l=Lh(t);const c=[];for(let r=0;r<l.length;r++){n=l[r];s=t[n];for(let r=0;r<s.edges.length;r++){o=s.edges[r];if(this.clusteredEdges[o.id]===void 0){if(o.toId==o.fromId)e[o.id]=o;else if(o.toId==n){a=i.id;h=o.fromId;d=h}else{a=o.toId;h=i.id;d=a}t[d]===void 0&&c.push({edge:o,fromId:h,toId:a})}}}const u=[];
/**
     * Find a cluster edge which matches the given created edge.
     * @param {vis.Edge} createdEdge
     * @returns {vis.Edge}
     */const v=function(t){for(let e=0;e<u.length;e++){const i=u[e];const r=t.fromId===i.fromId&&t.toId===i.toId;const o=t.fromId===i.toId&&t.toId===i.fromId;if(r||o)return i}return null};for(let t=0;t<c.length;t++){const e=c[t];const i=e.edge;let o=v(e);if(o===null){o=this._createClusteredEdge(e.fromId,e.toId,i,r);u.push(o)}else o.clusteringEdgeReplacingIds.push(i.id);this.body.edges[i.id].edgeReplacedById=o.id;this._backupEdgeOptions(i);i.setOptions({physics:false})}}
/**
   * This function checks the options that can be supplied to the different cluster functions
   * for certain fields and inserts defaults if needed
   * @param {object} options
   * @returns {*}
   * @private
   */_checkOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.clusterEdgeProperties===void 0&&(t.clusterEdgeProperties={});t.clusterNodeProperties===void 0&&(t.clusterNodeProperties={});return t}
/**
   *
   * @param {object}    childNodesObj         | object with node objects, id as keys, same as childNodes except it also contains a source node
   * @param {object}    childEdgesObj         | object with edge objects, id as keys
   * @param {Array}     options               | object with {clusterNodeProperties, clusterEdgeProperties, processProperties}
   * @param {boolean}   refreshData | when true, do not wrap up
   * @private
   */_cluster(t,e,i){let r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3];const o=[];for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&this.clusteredNodes[e]!==void 0&&o.push(e);for(let e=0;e<o.length;++e)delete t[o[e]];if(Lh(t).length==0)return;if(Lh(t).length==1&&i.clusterNodeProperties.allowSingleNodeCluster!=true)return;let n=tm({},i.clusterNodeProperties);if(i.processProperties!==void 0){const r=[];for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const i=NetworkUtil.cloneOptions(t[e]);r.push(i)}const o=[];for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.substr(0,12)!=="clusterEdge:"){const i=NetworkUtil.cloneOptions(e[t],"edge");o.push(i)}n=i.processProperties(n,r,o);if(!n)throw new Error("The processProperties function does not return properties!")}n.id===void 0&&(n.id="cluster:"+RC());const s=n.id;n.label===void 0&&(n.label="cluster");let a;if(n.x===void 0){a=this._getClusterPosition(t);n.x=a.x}if(n.y===void 0){a===void 0&&(a=this._getClusterPosition(t));n.y=a.y}n.id=s;const h=this.body.functions.createNode(n,Cluster);h.containedNodes=t;h.containedEdges=e;h.clusterEdgeProperties=i.clusterEdgeProperties;this.body.nodes[n.id]=h;this._clusterEdges(t,e,n,i.clusterEdgeProperties);n.id=void 0;r===true&&this.body.emitter.emit("_dataChanged")}
/**
   *
   * @param {Edge} edge
   * @private
   */_backupEdgeOptions(t){this.clusteredEdges[t.id]===void 0&&(this.clusteredEdges[t.id]={physics:t.options.physics})}
/**
   *
   * @param {Edge} edge
   * @private
   */_restoreEdge(t){const e=this.clusteredEdges[t.id];if(e!==void 0){t.setOptions({physics:e.physics});delete this.clusteredEdges[t.id]}}
/**
   * Check if a node is a cluster.
   * @param {Node.id} nodeId
   * @returns {*}
   */isCluster(t){if(this.body.nodes[t]!==void 0)return this.body.nodes[t].isCluster===true;console.error("Node does not exist.");return false}
/**
   * get the position of the cluster node based on what's inside
   * @param {object} childNodesObj    | object with node objects, id as keys
   * @returns {{x: number, y: number}}
   * @private
   */_getClusterPosition(t){const e=Lh(t);let i=t[e[0]].x;let r=t[e[0]].x;let o=t[e[0]].y;let n=t[e[0]].y;let s;for(let a=1;a<e.length;a++){s=t[e[a]];i=s.x<i?s.x:i;r=s.x>r?s.x:r;o=s.y<o?s.y:o;n=s.y>n?s.y:n}return{x:.5*(i+r),y:.5*(o+n)}}
/**
   * Open a cluster by calling this function.
   * @param {vis.Edge.id}  clusterNodeId | the ID of the cluster node
   * @param {object} options
   * @param {boolean} refreshData | wrap up afterwards if not true
   */openCluster(t,e){let i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(t===void 0)throw new Error("No clusterNodeId supplied to openCluster.");const r=this.body.nodes[t];if(r===void 0)throw new Error("The clusterNodeId supplied to openCluster does not exist.");if(r.isCluster!==true||r.containedNodes===void 0||r.containedEdges===void 0)throw new Error("The node:"+t+" is not a valid cluster.");const o=this.findNode(t);const n=zu(o).call(o,t)-1;if(n>=0){const e=o[n];const r=this.body.nodes[e];r._openChildCluster(t);delete this.body.nodes[t];i===true&&this.body.emitter.emit("_dataChanged");return}const s=r.containedNodes;const a=r.containedEdges;if(e!==void 0&&e.releaseFunction!==void 0&&typeof e.releaseFunction==="function"){const t={};const i={x:r.x,y:r.y};for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e)){const i=this.body.nodes[e];t[e]={x:i.x,y:i.y}}const o=e.releaseFunction(i,t);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)){const e=this.body.nodes[t];if(o[t]!==void 0){e.x=o[t].x===void 0?r.x:o[t].x;e.y=o[t].y===void 0?r.y:o[t].y}}}else nm(s,(function(t){t.options.fixed.x===false&&(t.x=r.x);t.options.fixed.y===false&&(t.y=r.y)}));for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)){const e=this.body.nodes[t];e.vx=r.vx;e.vy=r.vy;e.setOptions({physics:true});delete this.clusteredNodes[t]}const h=[];for(let t=0;t<r.edges.length;t++)h.push(r.edges[t]);for(let e=0;e<h.length;e++){const i=h[e];const r=this._getConnectedId(i,t);const o=this.clusteredNodes[r];for(let t=0;t<i.clusteringEdgeReplacingIds.length;t++){const e=i.clusteringEdgeReplacingIds[t];const n=this.body.edges[e];if(n!==void 0)if(o!==void 0){const t=this.body.nodes[o.clusterId];t.containedEdges[n.id]=n;delete a[n.id];let e=n.fromId;let i=n.toId;n.toId==r?i=o.clusterId:e=o.clusterId;this._createClusteredEdge(e,i,n,t.clusterEdgeProperties,{hidden:false,physics:true})}else this._restoreEdge(n)}i.remove()}for(const t in a)Object.prototype.hasOwnProperty.call(a,t)&&this._restoreEdge(a[t]);delete this.body.nodes[t];i===true&&this.body.emitter.emit("_dataChanged")}
/**
   *
   * @param {Cluster.id} clusterId
   * @returns {Array.<Node.id>}
   */getNodesInCluster(t){const e=[];if(this.isCluster(t)===true){const i=this.body.nodes[t].containedNodes;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e.push(this.body.nodes[t].id)}return e}
/**
   * Get the stack clusterId's that a certain node resides in. cluster A -> cluster B -> cluster C -> node
   *
   * If a node can't be found in the chain, return an empty array.
   * @param {string|number} nodeId
   * @returns {Array}
   */findNode(t){const e=[];const i=100;let r=0;let o;while(this.clusteredNodes[t]!==void 0&&r<i){o=this.body.nodes[t];if(o===void 0)return[];e.push(o.id);t=this.clusteredNodes[t].clusterId;r++}o=this.body.nodes[t];if(o===void 0)return[];e.push(o.id);Ld(e).call(e);return e}
/**
   * Using a clustered nodeId, update with the new options
   * @param {Node.id} clusteredNodeId
   * @param {object} newOptions
   */updateClusteredNode(t,e){if(t===void 0)throw new Error("No clusteredNodeId supplied to updateClusteredNode.");if(e===void 0)throw new Error("No newOptions supplied to updateClusteredNode.");if(this.body.nodes[t]===void 0)throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");this.body.nodes[t].setOptions(e);this.body.emitter.emit("_dataChanged")}
/**
   * Using a base edgeId, update all related clustered edges with the new options
   * @param {vis.Edge.id} startEdgeId
   * @param {object} newOptions
   */updateEdge(t,e){if(t===void 0)throw new Error("No startEdgeId supplied to updateEdge.");if(e===void 0)throw new Error("No newOptions supplied to updateEdge.");if(this.body.edges[t]===void 0)throw new Error("The startEdgeId supplied to updateEdge does not exist.");const i=this.getClusteredEdges(t);for(let t=0;t<i.length;t++){const r=this.body.edges[i[t]];r.setOptions(e)}this.body.emitter.emit("_dataChanged")}
/**
   * Get a stack of clusterEdgeId's (+base edgeid) that a base edge is the same as. cluster edge C -> cluster edge B -> cluster edge A -> base edge(edgeId)
   * @param {vis.Edge.id} edgeId
   * @returns {Array.<vis.Edge.id>}
   */getClusteredEdges(t){const e=[];const i=100;let r=0;while(t!==void 0&&this.body.edges[t]!==void 0&&r<i){e.push(this.body.edges[t].id);t=this.body.edges[t].edgeReplacedById;r++}Ld(e).call(e);return e}
/**
   * Get the base edge id of clusterEdgeId. cluster edge (clusteredEdgeId) -> cluster edge B -> cluster edge C -> base edge
   * @param {vis.Edge.id} clusteredEdgeId
   * @returns {vis.Edge.id} baseEdgeId
   *
   * TODO: deprecate in 5.0.0. Method getBaseEdges() is the correct one to use.
   */getBaseEdge(t){return this.getBaseEdges(t)[0]}
/**
   * Get all regular edges for this clustered edge id.
   * @param {vis.Edge.id} clusteredEdgeId
   * @returns {Array.<vis.Edge.id>} all baseEdgeId's under this clustered edge
   */getBaseEdges(t){const e=[t];const i=[];const r=[];const o=100;let n=0;while(e.length>0&&n<o){const t=e.pop();if(t===void 0)continue;const o=this.body.edges[t];if(o===void 0)continue;n++;const s=o.clusteringEdgeReplacingIds;if(s===void 0)r.push(t);else for(let t=0;t<s.length;++t){const r=s[t];zu(e).call(e,s)===-1&&zu(i).call(i,s)===-1&&e.push(r)}i.push(t)}return r}
/**
   * Get the Id the node is connected to
   * @param {vis.Edge} edge
   * @param {Node.id} nodeId
   * @returns {*}
   * @private
   */_getConnectedId(t,e){return t.toId!=e?t.toId:(t.fromId!=e,t.fromId)}
/**
   * We determine how many connections denote an important hub.
   * We take the mean + 2*std as the important hub size. (Assuming a normal distribution of data, ~2.2%)
   * @returns {number}
   * @private
   */_getHubSize(){let t=0;let e=0;let i=0;let r=0;for(let o=0;o<this.body.nodeIndices.length;o++){const n=this.body.nodes[this.body.nodeIndices[o]];n.edges.length>r&&(r=n.edges.length);t+=n.edges.length;e+=Math.pow(n.edges.length,2);i+=1}t/=i;e/=i;const o=e-Math.pow(t,2);const n=Math.sqrt(o);let s=Math.floor(t+2*n);s>r&&(s=r);return s}
/**
   * Create an edge for the cluster representation.
   * @param {Node.id} fromId
   * @param {Node.id} toId
   * @param {vis.Edge} baseEdge
   * @param {object} clusterEdgeProperties
   * @param {object} extraOptions
   * @returns {Edge} newly created clustered edge
   * @private
   */_createClusteredEdge(t,e,i,r,o){const n=NetworkUtil.cloneOptions(i,"edge");tm(n,r);n.from=t;n.to=e;n.id="clusterEdge:"+RC();o!==void 0&&tm(n,o);const s=this.body.functions.createEdge(n);s.clusteringEdgeReplacingIds=[i.id];s.connect();this.body.edges[s.id]=s;return s}
/**
   * Add the passed child nodes and edges to the given cluster node.
   * @param {object | Node} childNodes  hash of nodes or single node to add in cluster
   * @param {object | Edge} childEdges  hash of edges or single edge to take into account when clustering
   * @param {Node} clusterNode  cluster node to add nodes and edges to
   * @param {object} [clusterEdgeProperties]
   * @private
   */_clusterEdges(t,e,i,r){if(e instanceof Edge){const t=e;const i={};i[t.id]=t;e=i}if(t instanceof Node){const e=t;const i={};i[e.id]=e;t=i}if(i===void 0||i===null)throw new Error("_clusterEdges: parameter clusterNode required");r===void 0&&(r=i.clusterEdgeProperties);this._createClusterEdges(t,e,i,r);for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&this.body.edges[t]!==void 0){const e=this.body.edges[t];this._backupEdgeOptions(e);e.setOptions({physics:false})}for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){this.clusteredNodes[e]={clusterId:i.id,node:this.body.nodes[e]};this.body.nodes[e].setOptions({physics:false})}}
/**
   * Determine in which cluster given nodeId resides.
   *
   * If not in cluster, return undefined.
   *
   * NOTE: If you know a cleaner way to do this, please enlighten me (wimrijnders).
   * @param {Node.id} nodeId
   * @returns {Node|undefined} Node instance for cluster, if present
   * @private
   */_getClusterNodeForNode(t){if(t===void 0)return;const e=this.clusteredNodes[t];if(e===void 0)return;const i=e.clusterId;return i!==void 0?this.body.nodes[i]:void 0}
/**
   * Internal helper function for conditionally removing items in array
   *
   * Done like this because Array.filter() is not fully supported by all IE's.
   * @param {Array} arr
   * @param {Function} callback
   * @returns {Array}
   * @private
   */_filter(t,e){const i=[];nm(t,(t=>{e(t)&&i.push(t)}));return i}_updateState(){let t;const e=[];const i={};
/**
     * Utility function to iterate over clustering nodes only
     * @param {Function} callback  function to call for each cluster node
     */const r=t=>{nm(this.body.nodes,(e=>{e.isCluster===true&&t(e)}))};for(t in this.clusteredNodes){if(!Object.prototype.hasOwnProperty.call(this.clusteredNodes,t))continue;const i=this.body.nodes[t];i===void 0&&e.push(t)}r((function(t){for(let i=0;i<e.length;i++)delete t.containedNodes[e[i]]}));for(let t=0;t<e.length;t++)delete this.clusteredNodes[e[t]];nm(this.clusteredEdges,(t=>{const e=this.body.edges[t];e!==void 0&&e.endPointsValid()||(i[t]=t)}));r((function(t){nm(t.containedEdges,((t,e)=>{t.endPointsValid()||i[e]||(i[e]=e)}))}));nm(this.body.edges,((t,e)=>{let r=true;const o=t.clusteringEdgeReplacingIds;if(o!==void 0){let t=0;nm(o,(e=>{const i=this.body.edges[e];i!==void 0&&i.endPointsValid()&&(t+=1)}));r=t>0}t.endPointsValid()&&r||(i[e]=e)}));r((t=>{nm(i,(e=>{delete t.containedEdges[e];nm(t.edges,((r,o)=>{r.id!==e?r.clusteringEdgeReplacingIds=this._filter(r.clusteringEdgeReplacingIds,(function(t){return!i[t]})):t.edges[o]=null}));t.edges=this._filter(t.edges,(function(t){return t!==null}))}))}));nm(i,(t=>{delete this.clusteredEdges[t]}));nm(i,(t=>{delete this.body.edges[t]}));const o=Lh(this.body.edges);nm(o,(t=>{const e=this.body.edges[t];const i=this._isClusteredNode(e.fromId)||this._isClusteredNode(e.toId);if(i!==this._isClusteredEdge(e.id))if(i){const t=this._getClusterNodeForNode(e.fromId);t!==void 0&&this._clusterEdges(this.body.nodes[e.fromId],e,t);const i=this._getClusterNodeForNode(e.toId);i!==void 0&&this._clusterEdges(this.body.nodes[e.toId],e,i)}else{delete this._clusterEdges[t];this._restoreEdge(e)}}));let n=false;let s=true;while(s){const t=[];r((function(e){const i=Lh(e.containedNodes).length;const r=e.options.allowSingleNodeCluster===true;(r&&i<1||!r&&i<2)&&t.push(e.id)}));for(let e=0;e<t.length;++e)this.openCluster(t[e],{},false);s=t.length>0;n=n||s}n&&this._updateState()}
/**
   * Determine if node with given id is part of a cluster.
   * @param {Node.id} nodeId
   * @returns {boolean} true if part of a cluster.
   */_isClusteredNode(t){return this.clusteredNodes[t]!==void 0}
/**
   * Determine if edge with given id is not visible due to clustering.
   *
   * An edge is considered clustered if:
   * - it is directly replaced by a clustering edge
   * - any of its connecting nodes is in a cluster
   * @param {vis.Edge.id} edgeId
   * @returns {boolean} true if part of a cluster.
   */_isClusteredEdge(t){return this.clusteredEdges[t]!==void 0}}class CanvasRenderer{
/**
   * @param {object} body
   * @param {Canvas} canvas
   */
constructor(t,e){this.body=t;this.canvas=e;this.redrawRequested=false;this.requestAnimationFrameRequestId=void 0;this.renderingActive=false;this.renderRequests=0;this.allowRedraw=true;this.dragging=false;this.zooming=false;this.options={};this.defaultOptions={hideEdgesOnDrag:false,hideEdgesOnZoom:false,hideNodesOnDrag:false};Ri(this.options,this.defaultOptions);this.bindEventListeners()}bindEventListeners(){var t;this.body.emitter.on("dragStart",(()=>{this.dragging=true}));this.body.emitter.on("dragEnd",(()=>{this.dragging=false}));this.body.emitter.on("zoom",(()=>{this.zooming=true;window.clearTimeout(this.zoomTimeoutId);this.zoomTimeoutId=Uv((()=>{var t;this.zooming=false;lr(t=this._requestRedraw).call(t,this)()}),250)}));this.body.emitter.on("_resizeNodes",(()=>{this._resizeNodes()}));this.body.emitter.on("_redraw",(()=>{this.renderingActive===false&&this._redraw()}));this.body.emitter.on("_blockRedraw",(()=>{this.allowRedraw=false}));this.body.emitter.on("_allowRedraw",(()=>{this.allowRedraw=true;this.redrawRequested=false}));this.body.emitter.on("_requestRedraw",lr(t=this._requestRedraw).call(t,this));this.body.emitter.on("_startRendering",(()=>{this.renderRequests+=1;this.renderingActive=true;this._startRendering()}));this.body.emitter.on("_stopRendering",(()=>{this.renderRequests-=1;this.renderingActive=this.renderRequests>0;this.requestAnimationFrameRequestId=void 0}));this.body.emitter.on("destroy",(()=>{this.renderRequests=0;this.allowRedraw=false;this.renderingActive=false;window.cancelAnimationFrame(this.requestAnimationFrameRequestId);this.body.emitter.off()}))}
/**
   *
   * @param {object} options
   */setOptions(t){if(t!==void 0){const e=["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag"];$g(e,this.options,t)}}_startRendering(){if(this.renderingActive===true&&this.requestAnimationFrameRequestId===void 0){var t;this.requestAnimationFrameRequestId=window.requestAnimationFrame(lr(t=this._renderStep).call(t,this),this.simulationInterval)}}_renderStep(){if(this.renderingActive===true){this.requestAnimationFrameRequestId=void 0;this._startRendering();this._redraw()}}redraw(){this.body.emitter.emit("setSize");this._redraw()}_requestRedraw(){if(this.redrawRequested!==true&&this.renderingActive===false&&this.allowRedraw===true){this.redrawRequested=true;window.requestAnimationFrame((()=>{this._redraw(false)}))}}
/**
   * Redraw the network with the current data
   * @param {boolean} [hidden] | Used to get the first estimate of the node sizes.
   *                                   Only the nodes are drawn after which they are quickly drawn over.
   * @private
   */_redraw(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.allowRedraw===true){this.body.emitter.emit("initRedraw");this.redrawRequested=false;const e={drawExternalLabels:null};this.canvas.frame.canvas.width!==0&&this.canvas.frame.canvas.height!==0||this.canvas.setSize();this.canvas.setTransform();const i=this.canvas.getContext();const r=this.canvas.frame.canvas.clientWidth;const o=this.canvas.frame.canvas.clientHeight;i.clearRect(0,0,r,o);if(this.canvas.frame.clientWidth===0)return;i.save();i.translate(this.body.view.translation.x,this.body.view.translation.y);i.scale(this.body.view.scale,this.body.view.scale);i.beginPath();this.body.emitter.emit("beforeDrawing",i);i.closePath();t===false&&(this.dragging===false||this.dragging===true&&this.options.hideEdgesOnDrag===false)&&(this.zooming===false||this.zooming===true&&this.options.hideEdgesOnZoom===false)&&this._drawEdges(i);if(this.dragging===false||this.dragging===true&&this.options.hideNodesOnDrag===false){const{drawExternalLabels:r}=this._drawNodes(i,t);e.drawExternalLabels=r}t===false&&(this.dragging===false||this.dragging===true&&this.options.hideEdgesOnDrag===false)&&(this.zooming===false||this.zooming===true&&this.options.hideEdgesOnZoom===false)&&this._drawArrows(i);e.drawExternalLabels!=null&&e.drawExternalLabels();t===false&&this._drawSelectionBox(i);i.beginPath();this.body.emitter.emit("afterDrawing",i);i.closePath();i.restore();t===true&&i.clearRect(0,0,r,o)}}
/**
   * Redraw all nodes
   * @param {CanvasRenderingContext2D}   ctx
   * @param {boolean} [alwaysShow]
   * @private
   */_resizeNodes(){this.canvas.setTransform();const t=this.canvas.getContext();t.save();t.translate(this.body.view.translation.x,this.body.view.translation.y);t.scale(this.body.view.scale,this.body.view.scale);const e=this.body.nodes;let i;for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){i=e[r];i.resize(t);i.updateBoundingBox(t,i.selected)}t.restore()}
/**
   * Redraw all nodes
   * @param {CanvasRenderingContext2D} ctx  2D context of a HTML canvas
   * @param {boolean} [alwaysShow]
   * @private
   * @returns {object} Callbacks to draw later on higher layers.
   */_drawNodes(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];const i=this.body.nodes;const r=this.body.nodeIndices;let o;const n=[];const s=[];const a=20;const h=this.canvas.DOMtoCanvas({x:-a,y:-a});const d=this.canvas.DOMtoCanvas({x:this.canvas.frame.canvas.clientWidth+a,y:this.canvas.frame.canvas.clientHeight+a});const l={top:h.y,left:h.x,bottom:d.y,right:d.x};const c=[];for(let a=0;a<r.length;a++){o=i[r[a]];if(o.hover)s.push(r[a]);else if(o.isSelected())n.push(r[a]);else if(e===true){const e=o.draw(t);e.drawExternalLabel!=null&&c.push(e.drawExternalLabel)}else if(o.isBoundingBoxOverlappingWith(l)===true){const e=o.draw(t);e.drawExternalLabel!=null&&c.push(e.drawExternalLabel)}else o.updateBoundingBox(t,o.selected)}let u;const v=n.length;const f=s.length;for(u=0;u<v;u++){o=i[n[u]];const e=o.draw(t);e.drawExternalLabel!=null&&c.push(e.drawExternalLabel)}for(u=0;u<f;u++){o=i[s[u]];const e=o.draw(t);e.drawExternalLabel!=null&&c.push(e.drawExternalLabel)}return{drawExternalLabels:()=>{for(const t of c)t()}}}
/**
   * Redraw all edges
   * @param {CanvasRenderingContext2D} ctx  2D context of a HTML canvas
   * @private
   */_drawEdges(t){const e=this.body.edges;const i=this.body.edgeIndices;for(let r=0;r<i.length;r++){const o=e[i[r]];o.connected===true&&o.draw(t)}}
/**
   * Redraw all arrows
   * @param {CanvasRenderingContext2D} ctx  2D context of a HTML canvas
   * @private
   */_drawArrows(t){const e=this.body.edges;const i=this.body.edgeIndices;for(let r=0;r<i.length;r++){const o=e[i[r]];o.connected===true&&o.drawArrows(t)}}
/**
   * Redraw selection box
   * @param {CanvasRenderingContext2D} ctx  2D context of a HTML canvas
   * @private
   */_drawSelectionBox(t){if(this.body.selectionBox.show){t.beginPath();const e=this.body.selectionBox.position.end.x-this.body.selectionBox.position.start.x;const i=this.body.selectionBox.position.end.y-this.body.selectionBox.position.start.y;t.rect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,e,i);t.fillStyle="rgba(151, 194, 252, 0.2)";t.fillRect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,e,i);t.strokeStyle="rgba(151, 194, 252, 1)";t.stroke()}else t.closePath()}}var jC;var LC;function HC(){if(LC)return jC;LC=1;Fv();var t=nt();jC=t.setInterval;return jC}var WC;var VC;function UC(){if(VC)return WC;VC=1;WC=HC();return WC}var qC=UC();var YC=r(qC);
/**
 * Register a touch event, taking place before a gesture
 * @param {Hammer} hammer       A hammer instance
 * @param {Function} callback   Callback, called as callback(event)
 */function XC(t,e){e.inputHandler=function(t){t.isFirst&&e(t)};t.on("hammer.input",e.inputHandler)}
/**
 * Register a release event, taking place after a gesture
 * @param {Hammer} hammer       A hammer instance
 * @param {Function} callback   Callback, called as callback(event)
 * @returns {*}
 */function GC(t,e){e.inputHandler=function(t){t.isFinal&&e(t)};return t.on("hammer.input",e.inputHandler)}class Canvas{
/**
   * @param {object} body
   */
constructor(t){this.body=t;this.pixelRatio=1;this.cameraState={};this.initialized=false;this.canvasViewCenter={};this._cleanupCallbacks=[];this.options={};this.defaultOptions={autoResize:true,height:"100%",width:"100%"};Ri(this.options,this.defaultOptions);this.bindEventListeners()}bindEventListeners(){var t;this.body.emitter.once("resize",(t=>{t.width!==0&&(this.body.view.translation.x=t.width*.5);t.height!==0&&(this.body.view.translation.y=t.height*.5)}));this.body.emitter.on("setSize",lr(t=this.setSize).call(t,this));this.body.emitter.on("destroy",(()=>{this.hammerFrame.destroy();this.hammer.destroy();this._cleanUp()}))}
/**
   * @param {object} options
   */setOptions(t){if(t!==void 0){const e=["width","height","autoResize"];$g(e,this.options,t)}this._cleanUp();if(this.options.autoResize===true){var e;if(window.ResizeObserver){const t=new ResizeObserver((()=>{const t=this.setSize();t===true&&this.body.emitter.emit("_requestRedraw")}));const{frame:e}=this;t.observe(e);this._cleanupCallbacks.push((()=>{t.unobserve(e)}))}else{const t=YC((()=>{const t=this.setSize();t===true&&this.body.emitter.emit("_requestRedraw")}),1e3);this._cleanupCallbacks.push((()=>{clearInterval(t)}))}const t=lr(e=this._onResize).call(e,this);window.addEventListener("resize",t);this._cleanupCallbacks.push((()=>{window.removeEventListener("resize",t)}))}}_cleanUp(){var t,e,i;Ed(t=Ld(e=dl(i=this._cleanupCallbacks).call(i,0)).call(e)).call(t,(t=>{try{t()}catch(t){console.error(t)}}))}_onResize(){this.setSize();this.body.emitter.emit("_redraw")}
/**
   * Get and store the cameraState
   * @param {number} [pixelRatio]
   * @private
   */_getCameraState(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.pixelRatio;if(this.initialized===true){this.cameraState.previousWidth=this.frame.canvas.width/t;this.cameraState.previousHeight=this.frame.canvas.height/t;this.cameraState.scale=this.body.view.scale;this.cameraState.position=this.DOMtoCanvas({x:.5*this.frame.canvas.width/t,y:.5*this.frame.canvas.height/t})}}_setCameraState(){if(this.cameraState.scale!==void 0&&this.frame.canvas.clientWidth!==0&&this.frame.canvas.clientHeight!==0&&this.pixelRatio!==0&&this.cameraState.previousWidth>0&&this.cameraState.previousHeight>0){const t=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth;const e=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight;let i=this.cameraState.scale;t!=1&&e!=1?i=this.cameraState.scale*.5*(t+e):t!=1?i=this.cameraState.scale*t:e!=1&&(i=this.cameraState.scale*e);this.body.view.scale=i;const r=this.DOMtoCanvas({x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight});const o={x:r.x-this.cameraState.position.x,y:r.y-this.cameraState.position.y};this.body.view.translation.x+=o.x*this.body.view.scale;this.body.view.translation.y+=o.y*this.body.view.scale}}
/**
   *
   * @param {number|string} value
   * @returns {string}
   * @private
   */_prepareValue(t){if(typeof t==="number")return t+"px";if(typeof t==="string"){if(zu(t).call(t,"%")!==-1||zu(t).call(t,"px")!==-1)return t;if(zu(t).call(t,"%")===-1)return t+"px"}throw new Error("Could not use the value supplied for width or height:"+t)}_create(){while(this.body.container.hasChildNodes())this.body.container.removeChild(this.body.container.firstChild);this.frame=document.createElement("div");this.frame.className="vis-network";this.frame.style.position="relative";this.frame.style.overflow="hidden";this.frame.tabIndex=0;this.frame.canvas=document.createElement("canvas");this.frame.canvas.style.position="relative";this.frame.appendChild(this.frame.canvas);if(this.frame.canvas.getContext){this._setPixelRatio();this.setTransform()}else{const t=document.createElement("DIV");t.style.color="red";t.style.fontWeight="bold";t.style.padding="10px";t.innerText="Error: your browser does not support HTML canvas";this.frame.canvas.appendChild(t)}this.body.container.appendChild(this.frame);this.body.view.scale=1;this.body.view.translation={x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight};this._bindHammer()}_bindHammer(){this.hammer!==void 0&&this.hammer.destroy();this.drag={};this.pinch={};this.hammer=new Pm(this.frame.canvas);this.hammer.get("pinch").set({enable:true});this.hammer.get("pan").set({threshold:5,direction:Pm.DIRECTION_ALL});XC(this.hammer,(t=>{this.body.eventListeners.onTouch(t)}));this.hammer.on("tap",(t=>{this.body.eventListeners.onTap(t)}));this.hammer.on("doubletap",(t=>{this.body.eventListeners.onDoubleTap(t)}));this.hammer.on("press",(t=>{this.body.eventListeners.onHold(t)}));this.hammer.on("panstart",(t=>{this.body.eventListeners.onDragStart(t)}));this.hammer.on("panmove",(t=>{this.body.eventListeners.onDrag(t)}));this.hammer.on("panend",(t=>{this.body.eventListeners.onDragEnd(t)}));this.hammer.on("pinch",(t=>{this.body.eventListeners.onPinch(t)}));this.frame.canvas.addEventListener("wheel",(t=>{this.body.eventListeners.onMouseWheel(t)}));this.frame.canvas.addEventListener("mousemove",(t=>{this.body.eventListeners.onMouseMove(t)}));this.frame.canvas.addEventListener("contextmenu",(t=>{this.body.eventListeners.onContext(t)}));this.hammerFrame=new Pm(this.frame);GC(this.hammerFrame,(t=>{this.body.eventListeners.onRelease(t)}))}
/**
   * Set a new size for the network
   * @param {string} width   Width in pixels or percentage (for example '800px'
   *                         or '50%')
   * @param {string} height  Height in pixels or percentage  (for example '400px'
   *                         or '30%')
   * @returns {boolean}
   */setSize(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.width;let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.height;t=this._prepareValue(t);e=this._prepareValue(e);let i=false;const r=this.frame.canvas.width;const o=this.frame.canvas.height;const n=this.pixelRatio;this._setPixelRatio();if(t!=this.options.width||e!=this.options.height||this.frame.style.width!=t||this.frame.style.height!=e){this._getCameraState(n);this.frame.style.width=t;this.frame.style.height=e;this.frame.canvas.style.width="100%";this.frame.canvas.style.height="100%";this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio);this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio);this.options.width=t;this.options.height=e;this.canvasViewCenter={x:.5*this.frame.clientWidth,y:.5*this.frame.clientHeight};i=true}else{const t=Math.round(this.frame.canvas.clientWidth*this.pixelRatio);const e=Math.round(this.frame.canvas.clientHeight*this.pixelRatio);this.frame.canvas.width===t&&this.frame.canvas.height===e||this._getCameraState(n);if(this.frame.canvas.width!==t){this.frame.canvas.width=t;i=true}if(this.frame.canvas.height!==e){this.frame.canvas.height=e;i=true}}if(i===true){this.body.emitter.emit("resize",{width:Math.round(this.frame.canvas.width/this.pixelRatio),height:Math.round(this.frame.canvas.height/this.pixelRatio),oldWidth:Math.round(r/this.pixelRatio),oldHeight:Math.round(o/this.pixelRatio)});this._setCameraState()}this.initialized=true;return i}
/**
   *
   * @returns {CanvasRenderingContext2D}
   */getContext(){return this.frame.canvas.getContext("2d")}
/**
   * Determine the pixel ratio for various browsers.
   * @returns {number}
   * @private
   */_determinePixelRatio(){const t=this.getContext();if(t===void 0)throw new Error("Could not get canvax context");let e=1;typeof window!=="undefined"&&(e=window.devicePixelRatio||1);const i=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return e/i}_setPixelRatio(){this.pixelRatio=this._determinePixelRatio()}setTransform(){const t=this.getContext();if(t===void 0)throw new Error("Could not get canvax context");t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}
/**
   * Convert the X coordinate in DOM-space (coordinate point in browser relative to the container div) to
   * the X coordinate in canvas-space (the simulation sandbox, which the camera looks upon)
   * @param {number} x
   * @returns {number}
   * @private
   */_XconvertDOMtoCanvas(t){return(t-this.body.view.translation.x)/this.body.view.scale}
/**
   * Convert the X coordinate in canvas-space (the simulation sandbox, which the camera looks upon) to
   * the X coordinate in DOM-space (coordinate point in browser relative to the container div)
   * @param {number} x
   * @returns {number}
   * @private
   */_XconvertCanvasToDOM(t){return t*this.body.view.scale+this.body.view.translation.x}
/**
   * Convert the Y coordinate in DOM-space (coordinate point in browser relative to the container div) to
   * the Y coordinate in canvas-space (the simulation sandbox, which the camera looks upon)
   * @param {number} y
   * @returns {number}
   * @private
   */_YconvertDOMtoCanvas(t){return(t-this.body.view.translation.y)/this.body.view.scale}
/**
   * Convert the Y coordinate in canvas-space (the simulation sandbox, which the camera looks upon) to
   * the Y coordinate in DOM-space (coordinate point in browser relative to the container div)
   * @param {number} y
   * @returns {number}
   * @private
   */_YconvertCanvasToDOM(t){return t*this.body.view.scale+this.body.view.translation.y}
/**
   * @param {point} pos
   * @returns {point}
   */canvasToDOM(t){return{x:this._XconvertCanvasToDOM(t.x),y:this._YconvertCanvasToDOM(t.y)}}
/**
   *
   * @param {point} pos
   * @returns {point}
   */DOMtoCanvas(t){return{x:this._XconvertDOMtoCanvas(t.x),y:this._YconvertDOMtoCanvas(t.y)}}}
/**
 * Validate the fit options, replace missing optional values by defaults etc.
 * @param rawOptions - The raw options.
 * @param allNodeIds - All node ids that will be used if nodes are omitted in
 * the raw options.
 * @returns Options with everything filled in and validated.
 */function KC(t,e){const i=Ri({nodes:e,minZoomLevel:Number.MIN_VALUE,maxZoomLevel:1},t!==null&&t!==void 0?t:{});if(!dh(i.nodes))throw new TypeError("Nodes has to be an array of ids.");i.nodes.length===0&&(i.nodes=e);if(!(typeof i.minZoomLevel==="number"&&i.minZoomLevel>0))throw new TypeError("Min zoom level has to be a number higher than zero.");if(!(typeof i.maxZoomLevel==="number"&&i.minZoomLevel<=i.maxZoomLevel))throw new TypeError("Max zoom level has to be a number higher than min zoom level.");return i}class View{
/**
   * @param {object} body
   * @param {Canvas} canvas
   */
constructor(t,e){var i,r;this.body=t;this.canvas=e;this.animationSpeed=1/this.renderRefreshRate;this.animationEasingFunction="easeInOutQuint";this.easingTime=0;this.sourceScale=0;this.targetScale=0;this.sourceTranslation=0;this.targetTranslation=0;this.lockedOnNodeId=void 0;this.lockedOnNodeOffset=void 0;this.touchTime=0;this.viewFunction=void 0;this.body.emitter.on("fit",lr(i=this.fit).call(i,this));this.body.emitter.on("animationFinished",(()=>{this.body.emitter.emit("_stopRendering")}));this.body.emitter.on("unlockNode",lr(r=this.releaseNode).call(r,this))}
/**
   *
   * @param {object} [options]
   */setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.options=t}
/**
   * This function zooms out to fit all data on screen based on amount of nodes
   * @param {object} [options={{nodes=Array}}]
   * @param options
   * @param {boolean} [initialZoom]  | zoom based on fitted formula or range, true = fitted, default = false;
   */fit(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];t=KC(t,this.body.nodeIndices);const i=this.canvas.frame.canvas.clientWidth;const r=this.canvas.frame.canvas.clientHeight;let o;let n;if(i===0||r===0){n=1;o=NetworkUtil.getRange(this.body.nodes,t.nodes)}else if(e===true){let e=0;for(const t in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,t)){const i=this.body.nodes[t];i.predefinedPosition===true&&(e+=1)}if(e>.5*this.body.nodeIndices.length){this.fit(t,false);return}o=NetworkUtil.getRange(this.body.nodes,t.nodes);const s=this.body.nodeIndices.length;n=12.662/(s+7.4147)+.0964822;const a=Math.min(i/600,r/600);n*=a}else{this.body.emitter.emit("_resizeNodes");o=NetworkUtil.getRange(this.body.nodes,t.nodes);const e=Math.abs(o.maxX-o.minX)*1.1;const s=Math.abs(o.maxY-o.minY)*1.1;const a=i/e;const h=r/s;n=a<=h?a:h}n>t.maxZoomLevel?n=t.maxZoomLevel:n<t.minZoomLevel&&(n=t.minZoomLevel);const s=NetworkUtil.findCenter(o);const a={position:s,scale:n,animation:t.animation};this.moveTo(a)}
/**
   * Center a node in view.
   * @param {number} nodeId
   * @param {number} [options]
   */
focus(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.body.nodes[t]!==void 0){const i={x:this.body.nodes[t].x,y:this.body.nodes[t].y};e.position=i;e.lockedOnNode=t;this.moveTo(e)}else console.error("Node: "+t+" cannot be found.")}
/**
   *
   * @param {object} options  |  options.offset   = {x:number, y:number}   // offset from the center in DOM pixels
   *                          |  options.scale    = number                 // scale to move to
   *                          |  options.position = {x:number, y:number}   // position to move to
   *                          |  options.animation = {duration:number, easingFunction:String} || Boolean   // position to move to
   */moveTo(t){if(t!==void 0){if(t.offset!=null){if(t.offset.x!=null){t.offset.x=+t.offset.x;if(!Tw(t.offset.x))throw new TypeError('The option "offset.x" has to be a finite number.')}else t.offset.x=0;if(t.offset.y!=null){t.offset.y=+t.offset.y;if(!Tw(t.offset.y))throw new TypeError('The option "offset.y" has to be a finite number.')}else t.offset.x=0}else t.offset={x:0,y:0};if(t.position!=null){if(t.position.x!=null){t.position.x=+t.position.x;if(!Tw(t.position.x))throw new TypeError('The option "position.x" has to be a finite number.')}else t.position.x=0;if(t.position.y!=null){t.position.y=+t.position.y;if(!Tw(t.position.y))throw new TypeError('The option "position.y" has to be a finite number.')}else t.position.x=0}else t.position=this.getViewPosition();if(t.scale!=null){t.scale=+t.scale;if(!(t.scale>0))throw new TypeError('The option "scale" has to be a number greater than zero.')}else t.scale=this.body.view.scale;t.animation===void 0&&(t.animation={duration:0});t.animation===false&&(t.animation={duration:0});t.animation===true&&(t.animation={});t.animation.duration===void 0&&(t.animation.duration=1e3);t.animation.easingFunction===void 0&&(t.animation.easingFunction="easeInOutQuad");this.animateView(t)}else t={}}
/**
   *
   * @param {object} options  |  options.offset   = {x:number, y:number}   // offset from the center in DOM pixels
   *                          |  options.time     = number                 // animation time in milliseconds
   *                          |  options.scale    = number                 // scale to animate to
   *                          |  options.position = {x:number, y:number}   // position to animate to
   *                          |  options.easingFunction = String           // linear, easeInQuad, easeOutQuad, easeInOutQuad,
   *                                                                       // easeInCubic, easeOutCubic, easeInOutCubic,
   *                                                                       // easeInQuart, easeOutQuart, easeInOutQuart,
   *                                                                       // easeInQuint, easeOutQuint, easeInOutQuint
   */animateView(t){if(t===void 0)return;this.animationEasingFunction=t.animation.easingFunction;this.releaseNode();if(t.locked===true){this.lockedOnNodeId=t.lockedOnNode;this.lockedOnNodeOffset=t.offset}this.easingTime!=0&&this._transitionRedraw(true);this.sourceScale=this.body.view.scale;this.sourceTranslation=this.body.view.translation;this.targetScale=t.scale;this.body.view.scale=this.targetScale;const e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight});const i={x:e.x-t.position.x,y:e.y-t.position.y};this.targetTranslation={x:this.sourceTranslation.x+i.x*this.targetScale+t.offset.x,y:this.sourceTranslation.y+i.y*this.targetScale+t.offset.y};if(t.animation.duration===0)if(this.lockedOnNodeId!=void 0){var r;this.viewFunction=lr(r=this._lockedRedraw).call(r,this);this.body.emitter.on("initRedraw",this.viewFunction)}else{this.body.view.scale=this.targetScale;this.body.view.translation=this.targetTranslation;this.body.emitter.emit("_requestRedraw")}else{var o;this.animationSpeed=1/(60*t.animation.duration*.001)||1/60;this.animationEasingFunction=t.animation.easingFunction;this.viewFunction=lr(o=this._transitionRedraw).call(o,this);this.body.emitter.on("initRedraw",this.viewFunction);this.body.emitter.emit("_startRendering")}}_lockedRedraw(){const t={x:this.body.nodes[this.lockedOnNodeId].x,y:this.body.nodes[this.lockedOnNodeId].y};const e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight});const i={x:e.x-t.x,y:e.y-t.y};const r=this.body.view.translation;const o={x:r.x+i.x*this.body.view.scale+this.lockedOnNodeOffset.x,y:r.y+i.y*this.body.view.scale+this.lockedOnNodeOffset.y};this.body.view.translation=o}releaseNode(){if(this.lockedOnNodeId!==void 0&&this.viewFunction!==void 0){this.body.emitter.off("initRedraw",this.viewFunction);this.lockedOnNodeId=void 0;this.lockedOnNodeOffset=void 0}}
/**
   * @param {boolean} [finished]
   * @private
   */_transitionRedraw(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];this.easingTime+=this.animationSpeed;this.easingTime=t===true?1:this.easingTime;const e=bm[this.animationEasingFunction](this.easingTime);this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*e;this.body.view.translation={x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*e,y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*e};if(this.easingTime>=1){this.body.emitter.off("initRedraw",this.viewFunction);this.easingTime=0;if(this.lockedOnNodeId!=void 0){var i;this.viewFunction=lr(i=this._lockedRedraw).call(i,this);this.body.emitter.on("initRedraw",this.viewFunction)}this.body.emitter.emit("animationFinished")}}
/**
   *
   * @returns {number}
   */getScale(){return this.body.view.scale}
/**
   *
   * @returns {{x: number, y: number}}
   */getViewPosition(){return this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight})}}function ZC(t){var e=t&&t.preventDefault||false;var i=t&&t.container||window;var r={};var o={keydown:{},keyup:{}};var n={};var s;for(s=97;s<=122;s++)n[String.fromCharCode(s)]={code:s-97+65,shift:false};for(s=65;s<=90;s++)n[String.fromCharCode(s)]={code:s,shift:true};for(s=0;s<=9;s++)n[""+s]={code:48+s,shift:false};for(s=1;s<=12;s++)n["F"+s]={code:111+s,shift:false};for(s=0;s<=9;s++)n["num"+s]={code:96+s,shift:false};n["num*"]={code:106,shift:false};n["num+"]={code:107,shift:false};n["num-"]={code:109,shift:false};n["num/"]={code:111,shift:false};n["num."]={code:110,shift:false};n.left={code:37,shift:false};n.up={code:38,shift:false};n.right={code:39,shift:false};n.down={code:40,shift:false};n.space={code:32,shift:false};n.enter={code:13,shift:false};n.shift={code:16,shift:void 0};n.esc={code:27,shift:false};n.backspace={code:8,shift:false};n.tab={code:9,shift:false};n.ctrl={code:17,shift:false};n.alt={code:18,shift:false};n.delete={code:46,shift:false};n.pageup={code:33,shift:false};n.pagedown={code:34,shift:false};n["="]={code:187,shift:false};n["-"]={code:189,shift:false};n["]"]={code:221,shift:false};n["["]={code:219,shift:false};var a=function(t){d(t,"keydown")};var h=function(t){d(t,"keyup")};var d=function(t,i){if(o[i][t.keyCode]!==void 0){var r=o[i][t.keyCode];for(var n=0;n<r.length;n++)(r[n].shift===void 0||r[n].shift==true&&t.shiftKey==true||r[n].shift==false&&t.shiftKey==false)&&r[n].fn(t);e==true&&t.preventDefault()}};r.bind=function(t,e,i){i===void 0&&(i="keydown");if(n[t]===void 0)throw new Error("unsupported key: "+t);o[i][n[t].code]===void 0&&(o[i][n[t].code]=[]);o[i][n[t].code].push({fn:e,shift:n[t].shift})};r.bindAll=function(t,e){e===void 0&&(e="keydown");for(var i in n)n.hasOwnProperty(i)&&r.bind(i,t,e)};r.getKey=function(t){for(var e in n)if(n.hasOwnProperty(e)){if(t.shiftKey==true&&n[e].shift==true&&t.keyCode==n[e].code)return e;if(t.shiftKey==false&&n[e].shift==false&&t.keyCode==n[e].code)return e;if(t.keyCode==n[e].code&&e=="shift")return e}return"unknown key, currently not supported"};r.unbind=function(t,e,i){i===void 0&&(i="keydown");if(n[t]===void 0)throw new Error("unsupported key: "+t);if(e!==void 0){var r=[];var s=o[i][n[t].code];if(s!==void 0)for(var a=0;a<s.length;a++)s[a].fn==e&&s[a].shift==n[t].shift||r.push(o[i][n[t].code][a]);o[i][n[t].code]=r}else o[i][n[t].code]=[]};r.reset=function(){o={keydown:{},keyup:{}}};r.destroy=function(){o={keydown:{},keyup:{}};i.removeEventListener("keydown",a,true);i.removeEventListener("keyup",h,true)};i.addEventListener("keydown",a,true);i.addEventListener("keyup",h,true);return r}class NavigationHandler{
/**
   * @param {object} body
   * @param {Canvas} canvas
   */
constructor(t,e){this.body=t;this.canvas=e;this.iconsCreated=false;this.navigationHammers=[];this.boundFunctions={};this.touchTime=0;this.activated=false;this.body.emitter.on("activate",(()=>{this.activated=true;this.configureKeyboardBindings()}));this.body.emitter.on("deactivate",(()=>{this.activated=false;this.configureKeyboardBindings()}));this.body.emitter.on("destroy",(()=>{this.keycharm!==void 0&&this.keycharm.destroy()}));this.options={}}
/**
   *
   * @param {object} options
   */setOptions(t){if(t!==void 0){this.options=t;this.create()}}create(){this.options.navigationButtons===true?this.iconsCreated===false&&this.loadNavigationElements():this.iconsCreated===true&&this.cleanNavigation();this.configureKeyboardBindings()}cleanNavigation(){if(this.navigationHammers.length!=0){for(let t=0;t<this.navigationHammers.length;t++)this.navigationHammers[t].destroy();this.navigationHammers=[]}this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper);this.iconsCreated=false}loadNavigationElements(){this.cleanNavigation();this.navigationDOM={};const t=["up","down","left","right","zoomIn","zoomOut","zoomExtends"];const e=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"];this.navigationDOM.wrapper=document.createElement("div");this.navigationDOM.wrapper.className="vis-navigation";this.canvas.frame.appendChild(this.navigationDOM.wrapper);for(let o=0;o<t.length;o++){this.navigationDOM[t[o]]=document.createElement("div");this.navigationDOM[t[o]].className="vis-button vis-"+t[o];this.navigationDOM.wrapper.appendChild(this.navigationDOM[t[o]]);const n=new Pm(this.navigationDOM[t[o]]);if(e[o]==="_fit"){var i;XC(n,lr(i=this._fit).call(i,this))}else{var r;XC(n,lr(r=this.bindToRedraw).call(r,this,e[o]))}this.navigationHammers.push(n)}const o=new Pm(this.canvas.frame);GC(o,(()=>{this._stopMovement()}));this.navigationHammers.push(o);this.iconsCreated=true}
/**
   *
   * @param {string} action
   */bindToRedraw(t){if(this.boundFunctions[t]===void 0){var e;this.boundFunctions[t]=lr(e=this[t]).call(e,this);this.body.emitter.on("initRedraw",this.boundFunctions[t]);this.body.emitter.emit("_startRendering")}}
/**
   *
   * @param {string} action
   */unbindFromRedraw(t){if(this.boundFunctions[t]!==void 0){this.body.emitter.off("initRedraw",this.boundFunctions[t]);this.body.emitter.emit("_stopRendering");delete this.boundFunctions[t]}}_fit(){if((new Date).valueOf()-this.touchTime>700){this.body.emitter.emit("fit",{duration:700});this.touchTime=(new Date).valueOf()}}_stopMovement(){for(const t in this.boundFunctions)if(Object.prototype.hasOwnProperty.call(this.boundFunctions,t)){this.body.emitter.off("initRedraw",this.boundFunctions[t]);this.body.emitter.emit("_stopRendering")}this.boundFunctions={}}_moveUp(){this.body.view.translation.y+=this.options.keyboard.speed.y}_moveDown(){this.body.view.translation.y-=this.options.keyboard.speed.y}_moveLeft(){this.body.view.translation.x+=this.options.keyboard.speed.x}_moveRight(){this.body.view.translation.x-=this.options.keyboard.speed.x}_zoomIn(){const t=this.body.view.scale;const e=this.body.view.scale*(1+this.options.keyboard.speed.zoom);const i=this.body.view.translation;const r=e/t;const o=(1-r)*this.canvas.canvasViewCenter.x+i.x*r;const n=(1-r)*this.canvas.canvasViewCenter.y+i.y*r;this.body.view.scale=e;this.body.view.translation={x:o,y:n};this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:null})}_zoomOut(){const t=this.body.view.scale;const e=this.body.view.scale/(1+this.options.keyboard.speed.zoom);const i=this.body.view.translation;const r=e/t;const o=(1-r)*this.canvas.canvasViewCenter.x+i.x*r;const n=(1-r)*this.canvas.canvasViewCenter.y+i.y*r;this.body.view.scale=e;this.body.view.translation={x:o,y:n};this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:null})}configureKeyboardBindings(){this.keycharm!==void 0&&this.keycharm.destroy();if(this.options.keyboard.enabled===true){this.options.keyboard.bindToWindow===true?this.keycharm=ZC({container:window,preventDefault:true}):this.keycharm=ZC({container:this.canvas.frame,preventDefault:true});this.keycharm.reset();if(this.activated===true){var t,e,i,r,o,n,s,a,h,d,l,c,u,v,f,p,g,m,y,b,w,_,x,E;lr(t=this.keycharm).call(t,"up",(()=>{this.bindToRedraw("_moveUp")}),"keydown");lr(e=this.keycharm).call(e,"down",(()=>{this.bindToRedraw("_moveDown")}),"keydown");lr(i=this.keycharm).call(i,"left",(()=>{this.bindToRedraw("_moveLeft")}),"keydown");lr(r=this.keycharm).call(r,"right",(()=>{this.bindToRedraw("_moveRight")}),"keydown");lr(o=this.keycharm).call(o,"=",(()=>{this.bindToRedraw("_zoomIn")}),"keydown");lr(n=this.keycharm).call(n,"num+",(()=>{this.bindToRedraw("_zoomIn")}),"keydown");lr(s=this.keycharm).call(s,"num-",(()=>{this.bindToRedraw("_zoomOut")}),"keydown");lr(a=this.keycharm).call(a,"-",(()=>{this.bindToRedraw("_zoomOut")}),"keydown");lr(h=this.keycharm).call(h,"[",(()=>{this.bindToRedraw("_zoomOut")}),"keydown");lr(d=this.keycharm).call(d,"]",(()=>{this.bindToRedraw("_zoomIn")}),"keydown");lr(l=this.keycharm).call(l,"pageup",(()=>{this.bindToRedraw("_zoomIn")}),"keydown");lr(c=this.keycharm).call(c,"pagedown",(()=>{this.bindToRedraw("_zoomOut")}),"keydown");lr(u=this.keycharm).call(u,"up",(()=>{this.unbindFromRedraw("_moveUp")}),"keyup");lr(v=this.keycharm).call(v,"down",(()=>{this.unbindFromRedraw("_moveDown")}),"keyup");lr(f=this.keycharm).call(f,"left",(()=>{this.unbindFromRedraw("_moveLeft")}),"keyup");lr(p=this.keycharm).call(p,"right",(()=>{this.unbindFromRedraw("_moveRight")}),"keyup");lr(g=this.keycharm).call(g,"=",(()=>{this.unbindFromRedraw("_zoomIn")}),"keyup");lr(m=this.keycharm).call(m,"num+",(()=>{this.unbindFromRedraw("_zoomIn")}),"keyup");lr(y=this.keycharm).call(y,"num-",(()=>{this.unbindFromRedraw("_zoomOut")}),"keyup");lr(b=this.keycharm).call(b,"-",(()=>{this.unbindFromRedraw("_zoomOut")}),"keyup");lr(w=this.keycharm).call(w,"[",(()=>{this.unbindFromRedraw("_zoomOut")}),"keyup");lr(_=this.keycharm).call(_,"]",(()=>{this.unbindFromRedraw("_zoomIn")}),"keyup");lr(x=this.keycharm).call(x,"pageup",(()=>{this.unbindFromRedraw("_zoomIn")}),"keyup");lr(E=this.keycharm).call(E,"pagedown",(()=>{this.unbindFromRedraw("_zoomOut")}),"keyup")}}}}class InteractionHandler{
/**
   * @param {object} body
   * @param {Canvas} canvas
   * @param {SelectionHandler} selectionHandler
   */
constructor(t,e,i){var r,o,n,s,a,h,d,l,c,u,v,f,p;this.body=t;this.canvas=e;this.selectionHandler=i;this.navigationHandler=new NavigationHandler(t,e);this.body.eventListeners.onTap=lr(r=this.onTap).call(r,this);this.body.eventListeners.onTouch=lr(o=this.onTouch).call(o,this);this.body.eventListeners.onDoubleTap=lr(n=this.onDoubleTap).call(n,this);this.body.eventListeners.onHold=lr(s=this.onHold).call(s,this);this.body.eventListeners.onDragStart=lr(a=this.onDragStart).call(a,this);this.body.eventListeners.onDrag=lr(h=this.onDrag).call(h,this);this.body.eventListeners.onDragEnd=lr(d=this.onDragEnd).call(d,this);this.body.eventListeners.onMouseWheel=lr(l=this.onMouseWheel).call(l,this);this.body.eventListeners.onPinch=lr(c=this.onPinch).call(c,this);this.body.eventListeners.onMouseMove=lr(u=this.onMouseMove).call(u,this);this.body.eventListeners.onRelease=lr(v=this.onRelease).call(v,this);this.body.eventListeners.onContext=lr(f=this.onContext).call(f,this);this.touchTime=0;this.drag={};this.pinch={};this.popup=void 0;this.popupObj=void 0;this.popupTimer=void 0;this.body.functions.getPointer=lr(p=this.getPointer).call(p,this);this.options={};this.defaultOptions={dragNodes:true,dragView:true,hover:false,keyboard:{enabled:false,speed:{x:10,y:10,zoom:.02},bindToWindow:true,autoFocus:true},navigationButtons:false,tooltipDelay:300,zoomView:true,zoomSpeed:1};Ri(this.options,this.defaultOptions);this.bindEventListeners()}bindEventListeners(){this.body.emitter.on("destroy",(()=>{clearTimeout(this.popupTimer);delete this.body.functions.getPointer}))}
/**
   *
   * @param {object} options
   */setOptions(t){if(t!==void 0){const e=["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"];Jg(e,this.options,t);ym(this.options,t,"keyboard");if(t.tooltip){Ri(this.options.tooltip,t.tooltip);t.tooltip.color&&(this.options.tooltip.color=dm(t.tooltip.color))}}this.navigationHandler.setOptions(this.options)}
/**
   * Get the pointer location from a touch location
   * @param {{x: number, y: number}} touch
   * @returns {{x: number, y: number}} pointer
   * @private
   */getPointer(t){return{x:t.x-rm(this.canvas.frame.canvas),y:t.y-om(this.canvas.frame.canvas)}}
/**
   * On start of a touch gesture, store the pointer
   * @param {Event}  event   The event
   * @private
   */onTouch(t){if((new Date).valueOf()-this.touchTime>50){this.drag.pointer=this.getPointer(t.center);this.drag.pinched=false;this.pinch.scale=this.body.view.scale;this.touchTime=(new Date).valueOf()}}
/**
   * handle tap/click event: select/unselect a node
   * @param {Event} event
   * @private
   */onTap(t){const e=this.getPointer(t.center);const i=this.selectionHandler.options.multiselect&&(t.changedPointers[0].ctrlKey||t.changedPointers[0].metaKey);this.checkSelectionChanges(e,i);this.selectionHandler.commitAndEmit(e,t);this.selectionHandler.generateClickEvent("click",t,e)}
/**
   * handle doubletap event
   * @param {Event} event
   * @private
   */onDoubleTap(t){const e=this.getPointer(t.center);this.selectionHandler.generateClickEvent("doubleClick",t,e)}
/**
   * handle long tap event: multi select nodes
   * @param {Event} event
   * @private
   */onHold(t){const e=this.getPointer(t.center);const i=this.selectionHandler.options.multiselect;this.checkSelectionChanges(e,i);this.selectionHandler.commitAndEmit(e,t);this.selectionHandler.generateClickEvent("click",t,e);this.selectionHandler.generateClickEvent("hold",t,e)}
/**
   * handle the release of the screen
   * @param {Event} event
   * @private
   */onRelease(t){if((new Date).valueOf()-this.touchTime>10){const e=this.getPointer(t.center);this.selectionHandler.generateClickEvent("release",t,e);this.touchTime=(new Date).valueOf()}}
/**
   *
   * @param {Event} event
   */onContext(t){const e=this.getPointer({x:t.clientX,y:t.clientY});this.selectionHandler.generateClickEvent("oncontext",t,e)}
/**
   * Select and deselect nodes depending current selection change.
   * @param {{x: number, y: number}} pointer
   * @param {boolean} [add]
   */checkSelectionChanges(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];e===true?this.selectionHandler.selectAdditionalOnPoint(t):this.selectionHandler.selectOnPoint(t)}
/**
   * Remove all node and edge id's from the first set that are present in the second one.
   * @param {{nodes: Array.<Node>, edges: Array.<vis.Edge>}} firstSet
   * @param {{nodes: Array.<Node>, edges: Array.<vis.Edge>}} secondSet
   * @returns {{nodes: Array.<Node>, edges: Array.<vis.Edge>}}
   * @private
   */_determineDifference(t,e){const i=function(t,e){const i=[];for(let r=0;r<t.length;r++){const o=t[r];zu(e).call(e,o)===-1&&i.push(o)}return i};return{nodes:i(t.nodes,e.nodes),edges:i(t.edges,e.edges)}}
/**
   * This function is called by onDragStart.
   * It is separated out because we can then overload it for the datamanipulation system.
   * @param {Event} event
   * @private
   */onDragStart(t){if(this.drag.dragging)return;this.drag.pointer===void 0&&this.onTouch(t);const e=this.selectionHandler.getNodeAt(this.drag.pointer);this.drag.dragging=true;this.drag.selection=[];this.drag.translation=Ri({},this.body.view.translation);this.drag.nodeId=void 0;if(t.srcEvent.shiftKey){this.body.selectionBox.show=true;const e=this.getPointer(t.center);this.body.selectionBox.position.start={x:this.canvas._XconvertDOMtoCanvas(e.x),y:this.canvas._YconvertDOMtoCanvas(e.y)};this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(e.x),y:this.canvas._YconvertDOMtoCanvas(e.y)}}else if(e!==void 0&&this.options.dragNodes===true){this.drag.nodeId=e.id;e.isSelected()===false&&this.selectionHandler.setSelection({nodes:[e.id]});this.selectionHandler.generateClickEvent("dragStart",t,this.drag.pointer);for(const t of this.selectionHandler.getSelectedNodes()){const e={id:t.id,node:t,x:t.x,y:t.y,xFixed:t.options.fixed.x,yFixed:t.options.fixed.y};t.options.fixed.x=true;t.options.fixed.y=true;this.drag.selection.push(e)}}else this.selectionHandler.generateClickEvent("dragStart",t,this.drag.pointer,void 0,true)}
/**
   * handle drag event
   * @param {Event} event
   * @private
   */onDrag(t){if(this.drag.pinched===true)return;this.body.emitter.emit("unlockNode");const e=this.getPointer(t.center);const i=this.drag.selection;if(i&&i.length&&this.options.dragNodes===true){this.selectionHandler.generateClickEvent("dragging",t,e);const r=e.x-this.drag.pointer.x;const o=e.y-this.drag.pointer.y;Ed(i).call(i,(t=>{const e=t.node;t.xFixed===false&&(e.x=this.canvas._XconvertDOMtoCanvas(this.canvas._XconvertCanvasToDOM(t.x)+r));t.yFixed===false&&(e.y=this.canvas._YconvertDOMtoCanvas(this.canvas._YconvertCanvasToDOM(t.y)+o))}));this.body.emitter.emit("startSimulation")}else{if(t.srcEvent.shiftKey){this.selectionHandler.generateClickEvent("dragging",t,e,void 0,true);if(this.drag.pointer===void 0){this.onDragStart(t);return}this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(e.x),y:this.canvas._YconvertDOMtoCanvas(e.y)};this.body.emitter.emit("_requestRedraw")}if(this.options.dragView===true&&!t.srcEvent.shiftKey){this.selectionHandler.generateClickEvent("dragging",t,e,void 0,true);if(this.drag.pointer===void 0){this.onDragStart(t);return}const i=e.x-this.drag.pointer.x;const r=e.y-this.drag.pointer.y;this.body.view.translation={x:this.drag.translation.x+i,y:this.drag.translation.y+r};this.body.emitter.emit("_requestRedraw")}}}
/**
   * handle drag start event
   * @param {Event} event
   * @private
   */onDragEnd(t){this.drag.dragging=false;if(this.body.selectionBox.show){var e;this.body.selectionBox.show=false;const i=this.body.selectionBox.position;const r={minX:Math.min(i.start.x,i.end.x),minY:Math.min(i.start.y,i.end.y),maxX:Math.max(i.start.x,i.end.x),maxY:Math.max(i.start.y,i.end.y)};const o=Pc(e=this.body.nodeIndices).call(e,(t=>{const e=this.body.nodes[t];return e.x>=r.minX&&e.x<=r.maxX&&e.y>=r.minY&&e.y<=r.maxY}));Ed(o).call(o,(t=>this.selectionHandler.selectObject(this.body.nodes[t])));const n=this.getPointer(t.center);this.selectionHandler.commitAndEmit(n,t);this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,true);this.body.emitter.emit("_requestRedraw")}else{const e=this.drag.selection;if(e&&e.length){Ed(e).call(e,(function(t){t.node.options.fixed.x=t.xFixed;t.node.options.fixed.y=t.yFixed}));this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center));this.body.emitter.emit("startSimulation")}else{this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,true);this.body.emitter.emit("_requestRedraw")}}}
/**
   * Handle pinch event
   * @param {Event}  event   The event
   * @private
   */onPinch(t){const e=this.getPointer(t.center);this.drag.pinched=true;this.pinch.scale===void 0&&(this.pinch.scale=1);const i=this.pinch.scale*t.scale;this.zoom(i,e)}
/**
   * Zoom the network in or out
   * @param {number} scale a number around 1, and between 0.01 and 10
   * @param {{x: number, y: number}} pointer    Position on screen
   * @private
   */zoom(t,e){if(this.options.zoomView===true){const i=this.body.view.scale;t<1e-5&&(t=1e-5);t>10&&(t=10);let r;this.drag!==void 0&&this.drag.dragging===true&&(r=this.canvas.DOMtoCanvas(this.drag.pointer));const o=this.body.view.translation;const n=t/i;const s=(1-n)*e.x+o.x*n;const a=(1-n)*e.y+o.y*n;this.body.view.scale=t;this.body.view.translation={x:s,y:a};if(r!=void 0){const t=this.canvas.canvasToDOM(r);this.drag.pointer.x=t.x;this.drag.pointer.y=t.y}this.body.emitter.emit("_requestRedraw");i<t?this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:e}):this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:e})}}
/**
   * Event handler for mouse wheel event, used to zoom the timeline
   * See http://adomas.org/javascript-mouse-wheel/
   * https://github.com/EightMedia/hammer.js/issues/256
   * @param {MouseEvent}  event
   * @private
   */onMouseWheel(t){if(this.options.zoomView===true){if(t.deltaY!==0){let e=this.body.view.scale;e*=1+(t.deltaY<0?1:-1)*(this.options.zoomSpeed*.1);const i=this.getPointer({x:t.clientX,y:t.clientY});this.zoom(e,i)}t.preventDefault()}}
/**
   * Mouse move handler for checking whether the title moves over a node with a title.
   * @param  {Event} event
   * @private
   */onMouseMove(t){const e=this.getPointer({x:t.clientX,y:t.clientY});let i=false;if(this.popup!==void 0){this.popup.hidden===false&&this._checkHidePopup(e);if(this.popup.hidden===false){i=true;this.popup.setPosition(e.x+3,e.y-5);this.popup.show()}}this.options.keyboard.autoFocus&&this.options.keyboard.bindToWindow===false&&this.options.keyboard.enabled===true&&this.canvas.frame.focus();if(i===false){if(this.popupTimer!==void 0){clearInterval(this.popupTimer);this.popupTimer=void 0}this.drag.dragging||(this.popupTimer=Uv((()=>this._checkShowPopup(e)),this.options.tooltipDelay))}this.options.hover===true&&this.selectionHandler.hoverObject(t,e)}
/**
   * Check if there is an element on the given position in the network
   * (a node or edge). If so, and if this element has a title,
   * show a popup window with its title.
   * @param {{x:number, y:number}} pointer
   * @private
   */_checkShowPopup(t){const e=this.canvas._XconvertDOMtoCanvas(t.x);const i=this.canvas._YconvertDOMtoCanvas(t.y);const r={left:e,top:i,right:e,bottom:i};const o=this.popupObj===void 0?void 0:this.popupObj.id;let n=false;let s="node";if(this.popupObj===void 0){const t=this.body.nodeIndices;const e=this.body.nodes;let i;const o=[];for(let s=0;s<t.length;s++){i=e[t[s]];if(i.isOverlappingWith(r)===true){n=true;i.getTitle()!==void 0&&o.push(t[s])}}if(o.length>0){this.popupObj=e[o[o.length-1]];n=true}}if(this.popupObj===void 0&&n===false){const t=this.body.edgeIndices;const e=this.body.edges;let i;const o=[];for(let n=0;n<t.length;n++){i=e[t[n]];i.isOverlappingWith(r)===true&&i.connected===true&&i.getTitle()!==void 0&&o.push(t[n])}if(o.length>0){this.popupObj=e[o[o.length-1]];s="edge"}}if(this.popupObj!==void 0){if(this.popupObj.id!==o){this.popup===void 0&&(this.popup=new Bm(this.canvas.frame));this.popup.popupTargetType=s;this.popup.popupTargetId=this.popupObj.id;this.popup.setPosition(t.x+3,t.y-5);this.popup.setText(this.popupObj.getTitle());this.popup.show();this.body.emitter.emit("showPopup",this.popupObj.id)}}else if(this.popup!==void 0){this.popup.hide();this.body.emitter.emit("hidePopup")}}
/**
   * Check if the popup must be hidden, which is the case when the mouse is no
   * longer hovering on the object
   * @param {{x:number, y:number}} pointer
   * @private
   */_checkHidePopup(t){const e=this.selectionHandler._pointerToPositionObject(t);let i=false;if(this.popup.popupTargetType==="node"){if(this.body.nodes[this.popup.popupTargetId]!==void 0){i=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(e);if(i===true){const e=this.selectionHandler.getNodeAt(t);i=e!==void 0&&e.id===this.popup.popupTargetId}}}else this.selectionHandler.getNodeAt(t)===void 0&&this.body.edges[this.popup.popupTargetId]!==void 0&&(i=this.body.edges[this.popup.popupTargetId].isOverlappingWith(e));if(i===false){this.popupObj=void 0;this.popup.hide();this.body.emitter.emit("hidePopup")}}}var QC={};var $C={};var JC;function tk(){if(JC)return $C;JC=1;var t=ub();var e=_b();t("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),e);return $C}var ek;function ik(){if(ek)return QC;ek=1;tk();return QC}var rk={};var ok;var nk;function sk(){if(nk)return ok;nk=1;var t=Mt();var e=TypeError;ok=function(i){if(typeof i=="object"&&"size"in i&&"has"in i&&"add"in i&&"delete"in i&&"keys"in i)return i;throw new e(t(i)+" is not a set")};return ok}var ak;var hk;function dk(){if(hk)return ak;hk=1;var t=ht();var e=Mb();var i=t("Set");var r=i.prototype;ak={Set:i,add:e("add",1),has:e("has",1),remove:e("delete",1),proto:r};return ak}var lk;var ck;function uk(){if(ck)return lk;ck=1;var t=z();lk=function(e,i,r){var o=r?e:e.iterator;var n=e.next;var s,a;while(!(s=t(n,o)).done){a=i(s.value);if(a!==void 0)return a}};return lk}var vk;var fk;function pk(){if(fk)return vk;fk=1;var t=uk();vk=function(e,i,r){return r?t(e.keys(),i,true):e.forEach(i)};return vk}var gk;var mk;function yk(){if(mk)return gk;mk=1;var t=dk();var e=pk();var i=t.Set;var r=t.add;gk=function(t){var o=new i;e(t,(function(t){r(o,t)}));return o};return gk}var bk;var wk;function _k(){if(wk)return bk;wk=1;bk=function(t){return t.size};return bk}var xk;var Ek;function Ok(){if(Ek)return xk;Ek=1;xk=function(t){return{iterator:t,next:t.next,done:false}};return xk}var Ck;var kk;function Sk(){if(kk)return Ck;kk=1;var t=Pt();var e=ze();var i=z();var r=Ke();var o=Ok();var n="Invalid size";var s=RangeError;var a=TypeError;var h=Math.max;var d=function(e,i){this.set=e;this.size=h(i,0);this.has=t(e.has);this.keys=t(e.keys)};d.prototype={getIterator:function(){return o(e(i(this.keys,this.set)))},includes:function(t){return i(this.has,this.set,t)}};Ck=function(t){e(t);var i=+t.size;if(i!==i)throw new a(n);var o=r(i);if(o<0)throw new s(n);return new d(t,o)};return Ck}var Tk;var Mk;function Dk(){if(Mk)return Tk;Mk=1;var t=sk();var e=dk();var i=yk();var r=_k();var o=Sk();var n=pk();var s=uk();var a=e.has;var h=e.remove;Tk=function(e){var d=t(this);var l=o(e);var c=i(d);r(d)<=l.size?n(d,(function(t){l.includes(t)&&h(c,t)})):s(l.getIterator(),(function(t){a(c,t)&&h(c,t)}));return c};return Tk}var Ik;var Pk;function Bk(){if(Pk)return Ik;Pk=1;Ik=function(){return false};return Ik}var Nk;function zk(){if(Nk)return rk;Nk=1;var t=Ve();var e=Dk();var i=l();var r=Bk();var o=!r("difference",(function(t){return t.size===0}));var n=o||i((function(){var t={size:1,has:function(){return true},keys:function(){var t=0;return{next:function(){var i=t++>1;e.has(1)&&e.clear();return{done:i,value:2}}}}};var e=new Set([1,2,3,4]);return e.difference(t).size!==3}));t({target:"Set",proto:true,real:true,forced:n},{difference:e});return rk}var Fk={};var Ak;var Rk;function jk(){if(Rk)return Ak;Rk=1;var t=sk();var e=dk();var i=_k();var r=Sk();var o=pk();var n=uk();var s=e.Set;var a=e.add;var h=e.has;Ak=function(e){var d=t(this);var l=r(e);var c=new s;i(d)>l.size?n(l.getIterator(),(function(t){h(d,t)&&a(c,t)})):o(d,(function(t){l.includes(t)&&a(c,t)}));return c};return Ak}var Lk;function Hk(){if(Lk)return Fk;Lk=1;var t=Ve();var e=l();var i=jk();var r=Bk();var o=!r("intersection",(function(t){return t.size===2&&t.has(1)&&t.has(2)}))||e((function(){return String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))!=="3,2"}));t({target:"Set",proto:true,real:true,forced:o},{intersection:i});return Fk}var Wk={};var Vk;var Uk;function qk(){if(Uk)return Vk;Uk=1;var t=sk();var e=dk().has;var i=_k();var r=Sk();var o=pk();var n=uk();var s=rb();Vk=function(a){var h=t(this);var d=r(a);if(i(h)<=d.size)return o(h,(function(t){if(d.includes(t))return false}),true)!==false;var l=d.getIterator();return n(l,(function(t){if(e(h,t))return s(l,"normal",false)}))!==false};return Vk}var Yk;function Xk(){if(Yk)return Wk;Yk=1;var t=Ve();var e=qk();var i=Bk();var r=!i("isDisjointFrom",(function(t){return!t}));t({target:"Set",proto:true,real:true,forced:r},{isDisjointFrom:e});return Wk}var Gk={};var Kk;var Zk;function Qk(){if(Zk)return Kk;Zk=1;var t=sk();var e=_k();var i=pk();var r=Sk();Kk=function(o){var n=t(this);var s=r(o);return!(e(n)>s.size)&&i(n,(function(t){if(!s.includes(t))return false}),true)!==false};return Kk}var $k;function Jk(){if($k)return Gk;$k=1;var t=Ve();var e=Qk();var i=Bk();var r=!i("isSubsetOf",(function(t){return t}));t({target:"Set",proto:true,real:true,forced:r},{isSubsetOf:e});return Gk}var tS={};var eS;var iS;function rS(){if(iS)return eS;iS=1;var t=sk();var e=dk().has;var i=_k();var r=Sk();var o=uk();var n=rb();eS=function(s){var a=t(this);var h=r(s);if(i(a)<h.size)return false;var d=h.getIterator();return o(d,(function(t){if(!e(a,t))return n(d,"normal",false)}))!==false};return eS}var oS;function nS(){if(oS)return tS;oS=1;var t=Ve();var e=rS();var i=Bk();var r=!i("isSupersetOf",(function(t){return!t}));t({target:"Set",proto:true,real:true,forced:r},{isSupersetOf:e});return tS}var sS={};var aS;var hS;function dS(){if(hS)return aS;hS=1;var t=sk();var e=dk();var i=yk();var r=Sk();var o=uk();var n=e.add;var s=e.has;var a=e.remove;aS=function(e){var h=t(this);var d=r(e).getIterator();var l=i(h);o(d,(function(t){s(h,t)?a(l,t):n(l,t)}));return l};return aS}var lS;var cS;function uS(){if(cS)return lS;cS=1;lS=function(t){try{var e=new Set;var i={size:0,has:function(){return true},keys:function(){return Object.defineProperty({},"next",{get:function(){e.clear();e.add(4);return function(){return{done:true}}}})}};var r=e[t](i);return r.size===1&&r.values().next().value===4}catch(t){return false}};return lS}var vS;function fS(){if(vS)return sS;vS=1;var t=Ve();var e=dS();var i=uS();var r=Bk();var o=!r("symmetricDifference")||!i("symmetricDifference");t({target:"Set",proto:true,real:true,forced:o},{symmetricDifference:e});return sS}var pS={};var gS;var mS;function yS(){if(mS)return gS;mS=1;var t=sk();var e=dk().add;var i=yk();var r=Sk();var o=uk();gS=function(n){var s=t(this);var a=r(n).getIterator();var h=i(s);o(a,(function(t){e(h,t)}));return h};return gS}var bS;function wS(){if(bS)return pS;bS=1;var t=Ve();var e=yS();var i=uS();var r=Bk();var o=!r("union")||!i("union");t({target:"Set",proto:true,real:true,forced:o},{union:e});return pS}var _S;var xS;function ES(){if(xS)return _S;xS=1;ga();ik();zk();Hk();Xk();Jk();nS();fS();wS();Lb();var t=nt();_S=t.Set;return _S}var OS;var CS;function kS(){if(CS)return OS;CS=1;var t=ES();_a();OS=t;return OS}var SS;var TS;function MS(){if(TS)return SS;TS=1;SS=kS();return SS}var DS=MS();var IS=r(DS);var PS={};var BS={};var NS;var zS;function FS(){if(zS)return NS;zS=1;var t=b();var e=pb();var i=qy().getWeakData;var r=db();var o=ze();var n=X();var s=it();var a=sb();var h=hn();var d=ie();var l=nn();var c=l.set;var u=l.getterFor;var v=h.find;var f=h.findIndex;var p=t([].splice);var g=0;var m=function(t){return t.frozen||(t.frozen=new y)};var y=function(){this.entries=[]};var w=function(t,e){return v(t.entries,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=w(this,t);if(e)return e[1]},has:function(t){return!!w(this,t)},set:function(t,e){var i=w(this,t);i?i[1]=e:this.entries.push([t,e])},delete:function(t){var e=f(this.entries,(function(e){return e[0]===t}));~e&&p(this.entries,e,1);return!!~e}};NS={getConstructor:function(t,h,l,v){var f=t((function(t,e){r(t,p);c(t,{type:h,id:g++,frozen:null});n(e)||a(e,t[v],{that:t,AS_ENTRIES:l})}));var p=f.prototype;var y=u(h);var b=function(t,e,r){var n=y(t);var s=i(o(e),true);s===true?m(n).set(e,r):s[n.id]=r;return t};e(p,{delete:function(t){var e=y(this);if(!s(t))return false;var r=i(t);return r===true?m(e).delete(t):r&&d(r,e.id)&&delete r[e.id]},has:function(t){var e=y(this);if(!s(t))return false;var r=i(t);return r===true?m(e).has(t):r&&d(r,e.id)}});e(p,l?{get:function(t){var e=y(this);if(s(t)){var r=i(t);if(r===true)return m(e).get(t);if(r)return r[e.id]}},set:function(t,e){return b(this,t,e)}}:{add:function(t){return b(this,t,true)}});return f}};return NS}var AS;function RS(){if(AS)return BS;AS=1;var t=Vy();var e=a();var i=b();var r=pb();var o=qy();var n=ub();var s=FS();var h=it();var d=nn().enforce;var c=l();var u=en();var v=Object;var f=Array.isArray;var p=v.isExtensible;var g=v.isFrozen;var m=v.isSealed;var y=v.freeze;var w=v.seal;var _=!e.ActiveXObject&&"ActiveXObject"in e;var x;var E=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}};var O=n("WeakMap",E,s);var C=O.prototype;var k=i(C.set);var S=function(){return t&&c((function(){var t=y([]);k(new O,t,1);return!g(t)}))};if(u)if(_){x=s.getConstructor(E,"WeakMap",true);o.enable();var T=i(C.delete);var M=i(C.has);var D=i(C.get);r(C,{delete:function(t){if(h(t)&&!p(t)){var e=d(this);e.frozen||(e.frozen=new x);return T(this,t)||e.frozen.delete(t)}return T(this,t)},has:function(t){if(h(t)&&!p(t)){var e=d(this);e.frozen||(e.frozen=new x);return M(this,t)||e.frozen.has(t)}return M(this,t)},get:function(t){if(h(t)&&!p(t)){var e=d(this);e.frozen||(e.frozen=new x);return M(this,t)?D(this,t):e.frozen.get(t)}return D(this,t)},set:function(t,e){if(h(t)&&!p(t)){var i=d(this);i.frozen||(i.frozen=new x);M(this,t)?k(this,t,e):i.frozen.set(t,e)}else k(this,t,e);return this}})}else S()&&r(C,{set:function(t,e){var i;f(t)&&(g(t)?i=y:m(t)&&(i=w));k(this,t,e);i&&i(t);return this}});return BS}var jS;function LS(){if(jS)return PS;jS=1;RS();return PS}var HS;var WS;function VS(){if(WS)return HS;WS=1;ga();LS();var t=nt();HS=t.WeakMap;return HS}var US;var qS;function YS(){if(qS)return US;qS=1;var t=VS();_a();US=t;return US}var XS;var GS;function KS(){if(GS)return XS;GS=1;XS=YS();return XS}var ZS=KS();var QS=r(ZS);function $S(t,e,i){JS(t,e),e.set(t,i)}function JS(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function tT(t,e,i){return t.set(iT(t,e),i),i}function eT(t,e){return t.get(iT(t,e))}function iT(t,e,i){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:i;throw new TypeError("Private element is not present on this object")}
/**
 * @param prev
 * @param next
 */function rT(t,e){const i=new IS;for(const r of e)t.has(r)||i.add(r);return i}var oT=new QS;var nT=new QS;class SingleTypeSelectionAccumulator{constructor(){$S(this,oT,new IS);$S(this,nT,new IS)}get size(){return eT(nT,this).size}add(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];for(const t of e)eT(nT,this).add(t)}delete(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];for(const t of e)eT(nT,this).delete(t)}clear(){eT(nT,this).clear()}getSelection(){return[...eT(nT,this)]}getChanges(){return{added:[...rT(eT(oT,this),eT(nT,this))],deleted:[...rT(eT(nT,this),eT(oT,this))],previous:[...new IS(eT(oT,this))],current:[...new IS(eT(nT,this))]}}commit(){const t=this.getChanges();tT(oT,this,eT(nT,this));tT(nT,this,new IS(eT(oT,this)));for(const e of t.added)e.select();for(const e of t.deleted)e.unselect();return t}}var sT=new QS;var aT=new QS;var hT=new QS;class SelectionAccumulator{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:()=>{};$S(this,sT,new SingleTypeSelectionAccumulator);$S(this,aT,new SingleTypeSelectionAccumulator);$S(this,hT,void 0);tT(hT,this,t)}get sizeNodes(){return eT(sT,this).size}get sizeEdges(){return eT(aT,this).size}getNodes(){return eT(sT,this).getSelection()}getEdges(){return eT(aT,this).getSelection()}addNodes(){eT(sT,this).add(...arguments)}addEdges(){eT(aT,this).add(...arguments)}deleteNodes(t){eT(sT,this).delete(t)}deleteEdges(t){eT(aT,this).delete(t)}clear(){eT(sT,this).clear();eT(aT,this).clear()}commit(){const t={nodes:eT(sT,this).commit(),edges:eT(aT,this).commit()};for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];eT(hT,this).call(this,t,...i);return t}}class SelectionHandler{
/**
   * @param {object} body
   * @param {Canvas} canvas
   */
constructor(t,e){this.body=t;this.canvas=e;this._selectionAccumulator=new SelectionAccumulator;this.hoverObj={nodes:{},edges:{}};this.options={};this.defaultOptions={multiselect:false,selectable:true,selectConnectedEdges:true,hoverConnectedEdges:true};Ri(this.options,this.defaultOptions);this.body.emitter.on("_dataChanged",(()=>{this.updateSelection()}))}
/**
   *
   * @param {object} [options]
   */setOptions(t){if(t!==void 0){const e=["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"];$g(e,this.options,t)}}
/**
   * handles the selection part of the tap;
   * @param {{x: number, y: number}} pointer
   * @returns {boolean}
   */selectOnPoint(t){let e=false;if(this.options.selectable===true){const i=this.getNodeAt(t)||this.getEdgeAt(t);this.unselectAll();i!==void 0&&(e=this.selectObject(i));this.body.emitter.emit("_requestRedraw")}return e}
/**
   *
   * @param {{x: number, y: number}} pointer
   * @returns {boolean}
   */selectAdditionalOnPoint(t){let e=false;if(this.options.selectable===true){const i=this.getNodeAt(t)||this.getEdgeAt(t);if(i!==void 0){e=true;i.isSelected()===true?this.deselectObject(i):this.selectObject(i);this.body.emitter.emit("_requestRedraw")}}return e}
/**
   * Create an object containing the standard fields for an event.
   * @param {Event} event
   * @param {{x: number, y: number}} pointer Object with the x and y screen coordinates of the mouse
   * @returns {{}}
   * @private
   */_initBaseEvent(t,e){const i={};i.pointer={DOM:{x:e.x,y:e.y},canvas:this.canvas.DOMtoCanvas(e)};i.event=t;return i}
/**
   * Generate an event which the user can catch.
   *
   * This adds some extra data to the event with respect to cursor position and
   * selected nodes and edges.
   * @param {string} eventType                          Name of event to send
   * @param {Event}  event
   * @param {{x: number, y: number}} pointer            Object with the x and y screen coordinates of the mouse
   * @param {object | undefined} oldSelection             If present, selection state before event occured
   * @param {boolean|undefined} [emptySelection]  Indicate if selection data should be passed
   */generateClickEvent(t,e,i,r){let o=arguments.length>4&&arguments[4]!==void 0&&arguments[4];const n=this._initBaseEvent(e,i);if(o===true){n.nodes=[];n.edges=[]}else{const t=this.getSelection();n.nodes=t.nodes;n.edges=t.edges}r!==void 0&&(n.previousSelection=r);t=="click"&&(n.items=this.getClickedItems(i));e.controlEdge!==void 0&&(n.controlEdge=e.controlEdge);this.body.emitter.emit(t,n)}
/**
   *
   * @param {object} obj
   * @param {boolean} [highlightEdges]
   * @returns {boolean}
   */selectObject(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.selectConnectedEdges;if(t!==void 0){if(t instanceof Node){e===true&&this._selectionAccumulator.addEdges(...t.edges);this._selectionAccumulator.addNodes(t)}else this._selectionAccumulator.addEdges(t);return true}return false}
/**
   *
   * @param {object} obj
   */deselectObject(t){if(t.isSelected()===true){t.selected=false;this._removeFromSelection(t)}}
/**
   * retrieve all nodes overlapping with given object
   * @param {object} object  An object with parameters left, top, right, bottom
   * @returns {number[]}   An array with id's of the overlapping nodes
   * @private
   */_getAllNodesOverlappingWith(t){const e=[];const i=this.body.nodes;for(let r=0;r<this.body.nodeIndices.length;r++){const o=this.body.nodeIndices[r];i[o].isOverlappingWith(t)&&e.push(o)}return e}
/**
   * Return a position object in canvasspace from a single point in screenspace
   * @param {{x: number, y: number}} pointer
   * @returns {{left: number, top: number, right: number, bottom: number}}
   * @private
   */_pointerToPositionObject(t){const e=this.canvas.DOMtoCanvas(t);return{left:e.x-1,top:e.y+1,right:e.x+1,bottom:e.y-1}}
/**
   * Get the top node at the passed point (like a click)
   * @param {{x: number, y: number}} pointer
   * @param {boolean} [returnNode]
   * @returns {Node | undefined} node
   */getNodeAt(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const i=this._pointerToPositionObject(t);const r=this._getAllNodesOverlappingWith(i);return r.length>0?e===true?this.body.nodes[r[r.length-1]]:r[r.length-1]:void 0}
/**
   * retrieve all edges overlapping with given object, selector is around center
   * @param {object} object  An object with parameters left, top, right, bottom
   * @param {number[]} overlappingEdges An array with id's of the overlapping nodes
   * @private
   */_getEdgesOverlappingWith(t,e){const i=this.body.edges;for(let r=0;r<this.body.edgeIndices.length;r++){const o=this.body.edgeIndices[r];i[o].isOverlappingWith(t)&&e.push(o)}}
/**
   * retrieve all nodes overlapping with given object
   * @param {object} object  An object with parameters left, top, right, bottom
   * @returns {number[]}   An array with id's of the overlapping nodes
   * @private
   */_getAllEdgesOverlappingWith(t){const e=[];this._getEdgesOverlappingWith(t,e);return e}
/**
   * Get the edges nearest to the passed point (like a click)
   * @param {{x: number, y: number}} pointer
   * @param {boolean} [returnEdge]
   * @returns {Edge | undefined} node
   */getEdgeAt(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const i=this.canvas.DOMtoCanvas(t);let r=10;let o=null;const n=this.body.edges;for(let t=0;t<this.body.edgeIndices.length;t++){const e=this.body.edgeIndices[t];const s=n[e];if(s.connected){const t=s.from.x;const n=s.from.y;const a=s.to.x;const h=s.to.y;const d=s.edgeType.getDistanceToEdge(t,n,a,h,i.x,i.y);if(d<r){o=e;r=d}}}return o!==null?e===true?this.body.edges[o]:o:void 0}
/**
   * Add object to the selection array.
   * @param {object} obj
   * @private
   */_addToHover(t){t instanceof Node?this.hoverObj.nodes[t.id]=t:this.hoverObj.edges[t.id]=t}
/**
   * Remove a single option from selection.
   * @param {object} obj
   * @private
   */_removeFromSelection(t){if(t instanceof Node){this._selectionAccumulator.deleteNodes(t);this._selectionAccumulator.deleteEdges(...t.edges)}else this._selectionAccumulator.deleteEdges(t)}unselectAll(){this._selectionAccumulator.clear()}
/**
   * return the number of selected nodes
   * @returns {number}
   */getSelectedNodeCount(){return this._selectionAccumulator.sizeNodes}
/**
   * return the number of selected edges
   * @returns {number}
   */getSelectedEdgeCount(){return this._selectionAccumulator.sizeEdges}
/**
   * select the edges connected to the node that is being selected
   * @param {Node} node
   * @private
   */_hoverConnectedEdges(t){for(let e=0;e<t.edges.length;e++){const i=t.edges[e];i.hover=true;this._addToHover(i)}}
/**
   * Remove the highlight from a node or edge, in response to mouse movement
   * @param {Event}  event
   * @param {{x: number, y: number}} pointer object with the x and y screen coordinates of the mouse
   * @param {Node|vis.Edge} object
   * @private
   */emitBlurEvent(t,e,i){const r=this._initBaseEvent(t,e);if(i.hover===true){i.hover=false;if(i instanceof Node){r.node=i.id;this.body.emitter.emit("blurNode",r)}else{r.edge=i.id;this.body.emitter.emit("blurEdge",r)}}}
/**
   * Create the highlight for a node or edge, in response to mouse movement
   * @param {Event}  event
   * @param {{x: number, y: number}} pointer object with the x and y screen coordinates of the mouse
   * @param {Node|vis.Edge} object
   * @returns {boolean} hoverChanged
   * @private
   */emitHoverEvent(t,e,i){const r=this._initBaseEvent(t,e);let o=false;if(i.hover===false){i.hover=true;this._addToHover(i);o=true;if(i instanceof Node){r.node=i.id;this.body.emitter.emit("hoverNode",r)}else{r.edge=i.id;this.body.emitter.emit("hoverEdge",r)}}return o}
/**
   * Perform actions in response to a mouse movement.
   * @param {Event}  event
   * @param {{x: number, y: number}} pointer | object with the x and y screen coordinates of the mouse
   */hoverObject(t,e){let i=this.getNodeAt(e);i===void 0&&(i=this.getEdgeAt(e));let r=false;for(const o in this.hoverObj.nodes)if(Object.prototype.hasOwnProperty.call(this.hoverObj.nodes,o)&&(i===void 0||i instanceof Node&&i.id!=o||i instanceof Edge)){this.emitBlurEvent(t,e,this.hoverObj.nodes[o]);delete this.hoverObj.nodes[o];r=true}for(const o in this.hoverObj.edges)if(Object.prototype.hasOwnProperty.call(this.hoverObj.edges,o))if(r===true){this.hoverObj.edges[o].hover=false;delete this.hoverObj.edges[o]}else if(i===void 0||i instanceof Edge&&i.id!=o||i instanceof Node&&!i.hover){this.emitBlurEvent(t,e,this.hoverObj.edges[o]);delete this.hoverObj.edges[o];r=true}if(i!==void 0){const o=Lh(this.hoverObj.edges).length;const n=Lh(this.hoverObj.nodes).length;const s=i instanceof Edge&&o===0&&n===0;const a=i instanceof Node&&o===0&&n===0;(r||s||a)&&(r=this.emitHoverEvent(t,e,i));i instanceof Node&&this.options.hoverConnectedEdges===true&&this._hoverConnectedEdges(i)}r===true&&this.body.emitter.emit("_requestRedraw")}commitWithoutEmitting(){this._selectionAccumulator.commit()}
/**
   * Select and deselect nodes depending current selection change.
   *
   * For changing nodes, select/deselect events are fired.
   *
   * NOTE: For a given edge, if one connecting node is deselected and with the
   * same click the other node is selected, no events for the edge will fire. It
   * was selected and it will remain selected.
   * @param {{x: number, y: number}} pointer - The x and y coordinates of the
   * click, tap, dragend… that triggered this.
   * @param {UIEvent} event - The event that triggered this.
   */commitAndEmit(t,e){let i=false;const r=this._selectionAccumulator.commit();const o={nodes:r.nodes.previous,edges:r.edges.previous};if(r.edges.deleted.length>0){this.generateClickEvent("deselectEdge",e,t,o);i=true}if(r.nodes.deleted.length>0){this.generateClickEvent("deselectNode",e,t,o);i=true}if(r.nodes.added.length>0){this.generateClickEvent("selectNode",e,t);i=true}if(r.edges.added.length>0){this.generateClickEvent("selectEdge",e,t);i=true}i===true&&this.generateClickEvent("select",e,t)}
/**
   * Retrieve the currently selected node and edge ids.
   * @returns {{nodes: Array.<string>, edges: Array.<string>}} Arrays with the
   * ids of the selected nodes and edges.
   */getSelection(){return{nodes:this.getSelectedNodeIds(),edges:this.getSelectedEdgeIds()}}
/**
   * Retrieve the currently selected nodes.
   * @returns {Array} An array with selected nodes.
   */getSelectedNodes(){return this._selectionAccumulator.getNodes()}
/**
   * Retrieve the currently selected edges.
   * @returns {Array} An array with selected edges.
   */getSelectedEdges(){return this._selectionAccumulator.getEdges()}
/**
   * Retrieve the currently selected node ids.
   * @returns {Array} An array with the ids of the selected nodes.
   */getSelectedNodeIds(){var t;return kh(t=this._selectionAccumulator.getNodes()).call(t,(t=>t.id))}
/**
   * Retrieve the currently selected edge ids.
   * @returns {Array} An array with the ids of the selected edges.
   */getSelectedEdgeIds(){var t;return kh(t=this._selectionAccumulator.getEdges()).call(t,(t=>t.id))}
/**
   * Updates the current selection
   * @param {{nodes: Array.<string>, edges: Array.<string>}} selection
   * @param {object} options                                 Options
   */setSelection(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!t||!t.nodes&&!t.edges)throw new TypeError("Selection must be an object with nodes and/or edges properties");(e.unselectAll||e.unselectAll===void 0)&&this.unselectAll();if(t.nodes)for(const i of t.nodes){const t=this.body.nodes[i];if(!t)throw new RangeError('Node with id "'+i+'" not found');this.selectObject(t,e.highlightEdges)}if(t.edges)for(const e of t.edges){const t=this.body.edges[e];if(!t)throw new RangeError('Edge with id "'+e+'" not found');this.selectObject(t)}this.body.emitter.emit("_requestRedraw");this._selectionAccumulator.commit()}
/**
   * select zero or more nodes with the option to highlight edges
   * @param {number[] | string[]} selection     An array with the ids of the
   *                                            selected nodes.
   * @param {boolean} [highlightEdges]
   */selectNodes(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];if(!t||t.length===void 0)throw"Selection must be an array with ids";this.setSelection({nodes:t},{highlightEdges:e})}
/**
   * select zero or more edges
   * @param {number[] | string[]} selection     An array with the ids of the
   *                                            selected nodes.
   */selectEdges(t){if(!t||t.length===void 0)throw"Selection must be an array with ids";this.setSelection({edges:t})}updateSelection(){for(const t in this._selectionAccumulator.getNodes())Object.prototype.hasOwnProperty.call(this.body.nodes,t.id)||this._selectionAccumulator.deleteNodes(t);for(const t in this._selectionAccumulator.getEdges())Object.prototype.hasOwnProperty.call(this.body.edges,t.id)||this._selectionAccumulator.deleteEdges(t)}
/**
   * Determine all the visual elements clicked which are on the given point.
   *
   * All elements are returned; this includes nodes, edges and their labels.
   * The order returned is from highest to lowest, i.e. element 0 of the return
   * value is the topmost item clicked on.
   *
   * The return value consists of an array of the following possible elements:
   *
   * - `{nodeId:number}`             - node with given id clicked on
   * - `{nodeId:number, labelId:0}`  - label of node with given id clicked on
   * - `{edgeId:number}`             - edge with given id clicked on
   * - `{edge:number, labelId:0}`    - label of edge with given id clicked on
   *
   * ## NOTES
   *
   * - Currently, there is only one label associated with a node or an edge,
   * but this is expected to change somewhere in the future.
   * - Since there is no z-indexing yet, it is not really possible to set the nodes and
   * edges in the correct order. For the time being, nodes come first.
   * @param {point} pointer  mouse position in screen coordinates
   * @returns {Array.<nodeClickItem|nodeLabelClickItem|edgeClickItem|edgeLabelClickItem>}
   * @private
   */getClickedItems(t){const e=this.canvas.DOMtoCanvas(t);const i=[];const r=this.body.nodeIndices;const o=this.body.nodes;for(let t=r.length-1;t>=0;t--){const n=o[r[t]];const s=n.getItemsOnPoint(e);i.push.apply(i,s)}const n=this.body.edgeIndices;const s=this.body.edges;for(let t=n.length-1;t>=0;t--){const r=s[n[t]];const o=r.getItemsOnPoint(e);i.push.apply(i,o)}return i}}var dT={};var lT;var cT;function uT(){if(cT)return lT;cT=1;var t=Wi();var e=Math.floor;var i=function(r,o){var n=r.length;if(n<8){var s=1;var a,h;while(s<n){h=s;a=r[s];while(h&&o(r[h-1],a)>0)r[h]=r[--h];h!==s++&&(r[h]=a)}}else{var d=e(n/2);var l=i(t(r,0,d),o);var c=i(t(r,d),o);var u=l.length;var v=c.length;var f=0;var p=0;while(f<u||p<v)r[f+p]=f<u&&p<v?o(l[f],c[p])<=0?l[f++]:c[p++]:f<u?l[f++]:c[p++]}return r};lT=i;return lT}var vT;var fT;function pT(){if(fT)return vT;fT=1;var t=ft();var e=t.match(/firefox\/(\d+)/i);vT=!!e&&+e[1];return vT}var gT;var mT;function yT(){if(mT)return gT;mT=1;var t=ft();gT=/MSIE|Trident/.test(t);return gT}var bT;var wT;function _T(){if(wT)return bT;wT=1;var t=ft();var e=t.match(/AppleWebKit\/(\d+)\./);bT=!!e&&+e[1];return bT}var xT;function ET(){if(xT)return dT;xT=1;var t=Ve();var e=b();var i=Pt();var r=Jt();var o=oi();var n=Xd();var s=vo();var a=l();var h=uT();var d=od();var c=pT();var u=yT();var v=mt();var f=_T();var p=[];var g=e(p.sort);var m=e(p.push);var y=a((function(){p.sort(void 0)}));var w=a((function(){p.sort(null)}));var _=d("sort");var x=!a((function(){if(v)return v<70;if(!(c&&c>3)){if(u)return true;if(f)return f<603;var t="";var e,i,r,o;for(e=65;e<76;e++){i=String.fromCharCode(e);switch(e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(o=0;o<47;o++)p.push({k:i+o,v:r})}p.sort((function(t,e){return e.v-t.v}));for(o=0;o<p.length;o++){i=p[o].k.charAt(0);t.charAt(t.length-1)!==i&&(t+=i)}return t!=="DGBEFHACIJK"}}));var E=y||!w||!_||!x;var O=function(t){return function(e,i){return i===void 0?-1:e===void 0?1:t!==void 0?+t(e,i)||0:s(e)>s(i)?1:-1}};t({target:"Array",proto:true,forced:E},{sort:function(t){t!==void 0&&i(t);var e=r(this);if(x)return t===void 0?g(e):g(e,t);var s=[];var a=o(e);var d,l;for(l=0;l<a;l++)l in e&&m(s,e[l]);h(s,O(t));d=o(s);l=0;while(l<d)e[l]=s[l++];while(l<a)n(e,l++);return e}});return dT}var OT;var CT;function kT(){if(CT)return OT;CT=1;ET();var t=Zi();OT=t("Array","sort");return OT}var ST;var TT;function MT(){if(TT)return ST;TT=1;var t=ct();var e=kT();var i=Array.prototype;ST=function(r){var o=r.sort;return r===i||t(i,r)&&o===i.sort?e:o};return ST}var DT;var IT;function PT(){if(IT)return DT;IT=1;var t=MT();DT=t;return DT}var BT;var NT;function zT(){if(NT)return BT;NT=1;BT=PT();return BT}var FT=zT();var AT=r(FT);var RT={};var jT;var LT;function HT(){if(LT)return jT;LT=1;var t=Pt();var e=Jt();var i=U();var r=oi();var o=TypeError;var n="Reduce of empty array with no initial value";var s=function(s){return function(a,h,d,l){var c=e(a);var u=i(c);var v=r(c);t(h);if(v===0&&d<2)throw new o(n);var f=s?v-1:0;var p=s?-1:1;if(d<2)while(true){if(f in u){l=u[f];f+=p;break}f+=p;if(s?f<0:v<=f)throw new o(n)}for(;s?f>=0:v>f;f+=p)f in u&&(l=h(l,u[f],f,c));return l}};jT={left:s(false),right:s(true)};return jT}var WT;var VT;function UT(){if(VT)return WT;VT=1;var t=Ev();WT=t==="NODE";return WT}var qT;function YT(){if(qT)return RT;qT=1;var t=Ve();var e=HT().left;var i=od();var r=mt();var o=UT();var n=!o&&r>79&&r<83;var s=n||!i("reduce");t({target:"Array",proto:true,forced:s},{reduce:function(t){var i=arguments.length;return e(this,t,i,i>1?arguments[1]:void 0)}});return RT}var XT;var GT;function KT(){if(GT)return XT;GT=1;YT();var t=Zi();XT=t("Array","reduce");return XT}var ZT;var QT;function $T(){if(QT)return ZT;QT=1;var t=ct();var e=KT();var i=Array.prototype;ZT=function(r){var o=r.reduce;return r===i||t(i,r)&&o===i.reduce?e:o};return ZT}var JT;var tM;function eM(){if(tM)return JT;tM=1;var t=$T();JT=t;return JT}var iM;var rM;function oM(){if(rM)return iM;rM=1;iM=eM();return iM}var nM=oM();var sM=r(nM);class DirectionInterface{abstract(){throw new Error("Can't instantiate abstract class!")}fake_use(){}
/**
   * Type to use to translate dynamic curves to, in the case of hierarchical layout.
   * Dynamic curves do not work for these.
   *
   * The value should be perpendicular to the actual direction of the layout.
   * @returns {string} Direction, either 'vertical' or 'horizontal'
   */curveType(){return this.abstract()}
/**
   * Return the value of the coordinate that is not fixed for this direction.
   * @param {Node} node The node to read
   * @returns {number} Value of the unfixed coordinate
   */getPosition(t){this.fake_use(t);return this.abstract()}
/**
   * Set the value of the coordinate that is not fixed for this direction.
   * @param {Node} node The node to adjust
   * @param {number} position
   * @param {number} [level] if specified, the hierarchy level that this node should be fixed to
   */setPosition(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;this.fake_use(t,e,i);this.abstract()}
/**
   * Get the width of a tree.
   *
   * A `tree` here is a subset of nodes within the network which are not connected to other nodes,
   * only among themselves. In essence, it is a sub-network.
   * @param {number} index The index number of a tree
   * @returns {number} the width of a tree in the view coordinates
   */getTreeSize(t){this.fake_use(t);return this.abstract()}
/**
   * Sort array of nodes on the unfixed coordinates.
   *
   * Note:** chrome has non-stable sorting implementation, which
   * has a tendency to change the order of the array items,
   * even if the custom sort function returns 0.
   *
   * For this reason, an external sort implementation is used,
   * which has the added benefit of being faster than the standard
   * platforms implementation. This has been verified on `node.js`,
   * `firefox` and `chrome` (all linux).
   * @param {Array.<Node>} nodeArray array of nodes to sort
   */sort(t){this.fake_use(t);this.abstract()}
/**
   * Assign the fixed coordinate of the node to the given level
   * @param {Node} node The node to adjust
   * @param {number} level The level to fix to
   */fix(t,e){this.fake_use(t,e);this.abstract()}
/**
   * Add an offset to the unfixed coordinate of the given node.
   * @param {NodeId} nodeId Id of the node to adjust
   * @param {number} diff Offset to add to the unfixed coordinate
   */shift(t,e){this.fake_use(t,e);this.abstract()}}class VerticalStrategy extends DirectionInterface{
/**
   * Constructor
   * @param {object} layout reference to the parent LayoutEngine instance.
   */
constructor(t){super();this.layout=t}curveType(){return"horizontal"}getPosition(t){return t.x}setPosition(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;i!==void 0&&this.layout.hierarchical.addToOrdering(t,i);t.x=e}getTreeSize(t){const e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t);return{min:e.min_x,max:e.max_x}}sort(t){AT(t).call(t,(function(t,e){return t.x-e.x}))}fix(t,e){t.y=this.layout.options.hierarchical.levelSeparation*e;t.options.fixed.y=true}shift(t,e){this.layout.body.nodes[t].x+=e}}class HorizontalStrategy extends DirectionInterface{
/**
   * Constructor
   * @param {object} layout reference to the parent LayoutEngine instance.
   */
constructor(t){super();this.layout=t}curveType(){return"vertical"}getPosition(t){return t.y}setPosition(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;i!==void 0&&this.layout.hierarchical.addToOrdering(t,i);t.y=e}getTreeSize(t){const e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t);return{min:e.min_y,max:e.max_y}}sort(t){AT(t).call(t,(function(t,e){return t.y-e.y}))}fix(t,e){t.x=this.layout.options.hierarchical.levelSeparation*e;t.options.fixed.x=true}shift(t,e){this.layout.body.nodes[t].y+=e}}var aM={};var hM;function dM(){if(hM)return aM;hM=1;var t=Ve();var e=hn().every;var i=od();var r=i("every");t({target:"Array",proto:true,forced:!r},{every:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}});return aM}var lM;var cM;function uM(){if(cM)return lM;cM=1;dM();var t=Zi();lM=t("Array","every");return lM}var vM;var fM;function pM(){if(fM)return vM;fM=1;var t=ct();var e=uM();var i=Array.prototype;vM=function(r){var o=r.every;return r===i||t(i,r)&&o===i.every?e:o};return vM}var gM;var mM;function yM(){if(mM)return gM;mM=1;var t=pM();gM=t;return gM}var bM;var wM;function _M(){if(wM)return bM;wM=1;bM=yM();return bM}var xM=_M();var EM=r(xM);
/**
 * Try to assign levels to nodes according to their positions in the cyclic “hierarchy”.
 * @param nodes - Visible nodes of the graph.
 * @param levels - If present levels will be added to it, if not a new object will be created.
 * @returns Populated node levels.
 */function OM(t,e){const i=new IS;Ed(t).call(t,(t=>{var e;Ed(e=t.edges).call(e,(t=>{t.connected&&i.add(t)}))}));Ed(i).call(i,(t=>{const i=t.from.id;const r=t.to.id;e[i]==null&&(e[i]=0);(e[r]==null||e[i]>=e[r])&&(e[r]=e[i]+1)}));return e}
/**
 * Assign levels to nodes according to their positions in the hierarchy. Leaves will be lined up at the bottom and all other nodes as close to their children as possible.
 * @param nodes - Visible nodes of the graph.
 * @returns Populated node levels.
 */function CM(t){return SM((e=>{var i,r;return EM(i=Pc(r=e.edges).call(r,(e=>t.has(e.toId)))).call(i,(t=>t.to===e))}),((t,e)=>e>t),"from",t)}
/**
 * Assign levels to nodes according to their positions in the hierarchy. Roots will be lined up at the top and all nodes as close to their parents as possible.
 * @param nodes - Visible nodes of the graph.
 * @returns Populated node levels.
 */function kM(t){return SM((e=>{var i,r;return EM(i=Pc(r=e.edges).call(r,(e=>t.has(e.toId)))).call(i,(t=>t.from===e))}),((t,e)=>e<t),"to",t)}
/**
 * Assign levels to nodes according to their positions in the hierarchy.
 * @param isEntryNode - Checks and return true if the graph should be traversed from this node.
 * @param shouldLevelBeReplaced - Checks and returns true if the level of given node should be updated to the new value.
 * @param direction - Wheter the graph should be traversed in the direction of the edges `"to"` or in the other way `"from"`.
 * @param nodes - Visible nodes of the graph.
 * @returns Populated node levels.
 */function SM(t,e,i,r){var o;const n=Ku(null);const s=sM(o=[...JO(r).call(r)]).call(o,((t,e)=>t+1+e.edges.length),0);const a=i+"Id";const h=i==="to"?1:-1;for(const[o,c]of r){if(!r.has(o)||!t(c))continue;n[o]=0;const u=[c];let v=0;let f;while(f=u.pop()){var d,l;if(!r.has(o))continue;const t=n[f.id]+h;Ed(d=Pc(l=f.edges).call(l,(t=>t.connected&&t.to!==t.from&&t[i]!==f&&r.has(t.toId)&&r.has(t.fromId)))).call(d,(r=>{const o=r[a];const s=n[o];if(s==null||e(t,s)){n[o]=t;u.push(r[i])}}));if(v>s)return OM(r,n);++v}}return n}class HierarchicalStatus{constructor(){this.childrenReference={};this.parentReference={};this.trees={};this.distributionOrdering={};this.levels={};this.distributionIndex={};this.isTree=false;this.treeIndex=-1}
/**
   * Add the relation between given nodes to the current state.
   * @param {Node.id} parentNodeId
   * @param {Node.id} childNodeId
   */addRelation(t,e){this.childrenReference[t]===void 0&&(this.childrenReference[t]=[]);this.childrenReference[t].push(e);this.parentReference[e]===void 0&&(this.parentReference[e]=[]);this.parentReference[e].push(t)}checkIfTree(){for(const t in this.parentReference)if(this.parentReference[t].length>1){this.isTree=false;return}this.isTree=true}
/**
   * Return the number of separate trees in the current network.
   * @returns {number}
   */numTrees(){return this.treeIndex+1}
/**
   * Assign a tree id to a node
   * @param {Node} node
   * @param {string|number} treeId
   */setTreeIndex(t,e){if(e!==void 0&&this.trees[t.id]===void 0){this.trees[t.id]=e;this.treeIndex=Math.max(e,this.treeIndex)}}
/**
   * Ensure level for given id is defined.
   *
   * Sets level to zero for given node id if not already present
   * @param {Node.id} nodeId
   */ensureLevel(t){this.levels[t]===void 0&&(this.levels[t]=0)}
/**
   * get the maximum level of a branch.
   *
   * TODO: Never entered; find a test case to test this!
   * @param {Node.id} nodeId
   * @returns {number}
   */getMaxLevel(t){const e={};const i=t=>{if(e[t]!==void 0)return e[t];let r=this.levels[t];if(this.childrenReference[t]){const e=this.childrenReference[t];if(e.length>0)for(let t=0;t<e.length;t++)r=Math.max(r,i(e[t]))}e[t]=r;return r};return i(t)}
/**
   *
   * @param {Node} nodeA
   * @param {Node} nodeB
   */levelDownstream(t,e){if(this.levels[e.id]===void 0){this.levels[t.id]===void 0&&(this.levels[t.id]=0);this.levels[e.id]=this.levels[t.id]+1}}setMinLevelToZero(){var t;const e=new Qb;let i=0;const r=AT(t=[...new IS(Kc(this.levels))]).call(t,((t,e)=>t-e));for(const t of r)e.set(t,i++);for(const t in this.levels)Object.prototype.hasOwnProperty.call(this.levels,t)&&(this.levels[t]=e.get(this.levels[t]))}
/**
   * Get the min and max xy-coordinates of a given tree
   * @param {Array.<Node>} nodes
   * @param {number} index
   * @returns {{min_x: number, max_x: number, min_y: number, max_y: number}}
   */getTreeSize(t,e){let i=1e9;let r=-1e9;let o=1e9;let n=-1e9;for(const s in this.trees)if(Object.prototype.hasOwnProperty.call(this.trees,s)&&this.trees[s]===e){const e=t[s];i=Math.min(e.x,i);r=Math.max(e.x,r);o=Math.min(e.y,o);n=Math.max(e.y,n)}return{min_x:i,max_x:r,min_y:o,max_y:n}}
/**
   * Check if two nodes have the same parent(s)
   * @param {Node} node1
   * @param {Node} node2
   * @returns {boolean} true if the two nodes have a same ancestor node, false otherwise
   */hasSameParent(t,e){const i=this.parentReference[t.id];const r=this.parentReference[e.id];if(i===void 0||r===void 0)return false;for(let t=0;t<i.length;t++)for(let e=0;e<r.length;e++)if(i[t]==r[e])return true;return false}
/**
   * Check if two nodes are in the same tree.
   * @param {Node} node1
   * @param {Node} node2
   * @returns {boolean} true if this is so, false otherwise
   */inSameSubNetwork(t,e){return this.trees[t.id]===this.trees[e.id]}
/**
   * Get a list of the distinct levels in the current network
   * @returns {Array}
   */getLevels(){return Lh(this.distributionOrdering)}
/**
   * Add a node to the ordering per level
   * @param {Node} node
   * @param {number} level
   */addToOrdering(t,e){this.distributionOrdering[e]===void 0&&(this.distributionOrdering[e]=[]);let i=false;const r=this.distributionOrdering[e];for(const e in r)if(r[e]===t){i=true;break}if(!i){this.distributionOrdering[e].push(t);this.distributionIndex[t.id]=this.distributionOrdering[e].length-1}}}class LayoutEngine{
/**
   * @param {object} body
   */
constructor(t){this.body=t;this._resetRNG(Math.random()+":"+td());this.setPhysics=false;this.options={};this.optionsBackup={physics:{}};this.defaultOptions={randomSeed:void 0,improvedLayout:true,clusterThreshold:150,hierarchical:{enabled:false,levelSeparation:150,nodeSpacing:100,treeSpacing:200,blockShifting:true,edgeMinimization:true,parentCentralization:true,direction:"UD",sortMethod:"hubsize"}};Ri(this.options,this.defaultOptions);this.bindEventListeners()}bindEventListeners(){this.body.emitter.on("_dataChanged",(()=>{this.setupHierarchicalLayout()}));this.body.emitter.on("_dataLoaded",(()=>{this.layoutNetwork()}));this.body.emitter.on("_resetHierarchicalLayout",(()=>{this.setupHierarchicalLayout()}));this.body.emitter.on("_adjustEdgesForHierarchicalLayout",(()=>{if(this.options.hierarchical.enabled!==true)return;const t=this.direction.curveType();this.body.emitter.emit("_forceDisableDynamicCurves",t,false)}))}
/**
   *
   * @param {object} options
   * @param {object} allOptions
   * @returns {object}
   */setOptions(t,e){if(t!==void 0){const i=this.options.hierarchical;const r=i.enabled;$g(["randomSeed","improvedLayout","clusterThreshold"],this.options,t);ym(this.options,t,"hierarchical");t.randomSeed!==void 0&&this._resetRNG(t.randomSeed);if(i.enabled===true){r===true&&this.body.emitter.emit("refresh",true);i.direction==="RL"||i.direction==="DU"?i.levelSeparation>0&&(i.levelSeparation*=-1):i.levelSeparation<0&&(i.levelSeparation*=-1);this.setDirectionStrategy();this.body.emitter.emit("_resetHierarchicalLayout");return this.adaptAllOptionsForHierarchicalLayout(e)}if(r===true){this.body.emitter.emit("refresh");return tm(e,this.optionsBackup)}}return e}
/**
   * Reset the random number generator with given seed.
   * @param {any} seed - The seed that will be forwarded the the RNG.
   */_resetRNG(t){this.initialRandomSeed=t;this._rng=zg(this.initialRandomSeed)}
/**
   *
   * @param {object} allOptions
   * @returns {object}
   */adaptAllOptionsForHierarchicalLayout(t){if(this.options.hierarchical.enabled===true){const e=this.optionsBackup.physics;if(t.physics===void 0||t.physics===true){t.physics={enabled:e.enabled===void 0||e.enabled,solver:"hierarchicalRepulsion"};e.enabled=e.enabled===void 0||e.enabled;e.solver=e.solver||"barnesHut"}else if(typeof t.physics==="object"){e.enabled=t.physics.enabled===void 0||t.physics.enabled;e.solver=t.physics.solver||"barnesHut";t.physics.solver="hierarchicalRepulsion"}else if(t.physics!==false){e.solver="barnesHut";t.physics={solver:"hierarchicalRepulsion"}}let i=this.direction.curveType();if(t.edges===void 0){this.optionsBackup.edges={smooth:{enabled:true,type:"dynamic"}};t.edges={smooth:false}}else if(t.edges.smooth===void 0){this.optionsBackup.edges={smooth:{enabled:true,type:"dynamic"}};t.edges.smooth=false}else if(typeof t.edges.smooth==="boolean"){this.optionsBackup.edges={smooth:t.edges.smooth};t.edges.smooth={enabled:t.edges.smooth,type:i}}else{const e=t.edges.smooth;e.type!==void 0&&e.type!=="dynamic"&&(i=e.type);this.optionsBackup.edges={smooth:{enabled:e.enabled===void 0||e.enabled,type:e.type===void 0?"dynamic":e.type,roundness:e.roundness===void 0?.5:e.roundness,forceDirection:e.forceDirection!==void 0&&e.forceDirection}};t.edges.smooth={enabled:e.enabled===void 0||e.enabled,type:i,roundness:e.roundness===void 0?.5:e.roundness,forceDirection:e.forceDirection!==void 0&&e.forceDirection}}this.body.emitter.emit("_forceDisableDynamicCurves",i)}return t}
/**
   *
   * @param {Array.<Node>} nodesArray
   */positionInitially(t){if(this.options.hierarchical.enabled!==true){this._resetRNG(this.initialRandomSeed);const e=t.length+50;for(let i=0;i<t.length;i++){const r=t[i];const o=2*Math.PI*this._rng();r.x===void 0&&(r.x=e*Math.cos(o));r.y===void 0&&(r.y=e*Math.sin(o))}}}layoutNetwork(){if(this.options.hierarchical.enabled!==true&&this.options.improvedLayout===true){const t=this.body.nodeIndices;let e=0;for(let i=0;i<t.length;i++){const r=this.body.nodes[t[i]];r.predefinedPosition===true&&(e+=1)}if(e<.5*t.length){const e=10;let i=0;const r=this.options.clusterThreshold;const o={clusterNodeProperties:{shape:"ellipse",label:"",group:"",font:{multi:false}},clusterEdgeProperties:{label:"",font:{multi:false},smooth:{enabled:false}}};if(t.length>r){const n=t.length;while(t.length>r&&i<=e){i+=1;const e=t.length;i%3===0?this.body.modules.clustering.clusterBridges(o):this.body.modules.clustering.clusterOutliers(o);const r=t.length;if(e==r&&i%3!==0){this._declusterAll();this.body.emitter.emit("_layoutFailed");console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.");return}}this.body.modules.kamadaKawai.setOptions({springLength:Math.max(150,2*n)})}i>e&&console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result.");this.body.modules.kamadaKawai.solve(t,this.body.edgeIndices,true);this._shiftToCenter();const n=70;for(let e=0;e<t.length;e++){const i=this.body.nodes[t[e]];if(i.predefinedPosition===false){i.x+=(.5-this._rng())*n;i.y+=(.5-this._rng())*n}}this._declusterAll();this.body.emitter.emit("_repositionBezierNodes")}}}_shiftToCenter(){const t=NetworkUtil.getRangeCore(this.body.nodes,this.body.nodeIndices);const e=NetworkUtil.findCenter(t);for(let t=0;t<this.body.nodeIndices.length;t++){const i=this.body.nodes[this.body.nodeIndices[t]];i.x-=e.x;i.y-=e.y}}_declusterAll(){let t=true;while(t===true){t=false;for(let e=0;e<this.body.nodeIndices.length;e++)if(this.body.nodes[this.body.nodeIndices[e]].isCluster===true){t=true;this.body.modules.clustering.openCluster(this.body.nodeIndices[e],{},false)}t===true&&this.body.emitter.emit("_dataChanged")}}
/**
   *
   * @returns {number|*}
   */getSeed(){return this.initialRandomSeed}setupHierarchicalLayout(){if(this.options.hierarchical.enabled===true&&this.body.nodeIndices.length>0){let t,e;let i=false;let r=false;this.lastNodeOnLevel={};this.hierarchical=new HierarchicalStatus;for(e in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,e)){t=this.body.nodes[e];if(t.options.level!==void 0){i=true;this.hierarchical.levels[e]=t.options.level}else r=true}if(r===true&&i===true)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");{if(r===true){const t=this.options.hierarchical.sortMethod;t==="hubsize"?this._determineLevelsByHubsize():t==="directed"?this._determineLevelsDirected():t==="custom"&&this._determineLevelsCustomCallback()}for(const t in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&this.hierarchical.ensureLevel(t);const t=this._getDistribution();this._generateMap();this._placeNodesByHierarchy(t);this._condenseHierarchy();this._shiftToCenter()}}}_condenseHierarchy(){var t=this;let e=false;const i={};const r=()=>{const t=n();let e=0;for(let i=0;i<t.length-1;i++){const r=t[i].max-t[i+1].min;e+=r+this.options.hierarchical.treeSpacing;o(i+1,e)}};const o=(t,e)=>{const i=this.hierarchical.trees;for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&i[r]===t&&this.direction.shift(r,e)};const n=()=>{const t=[];for(let e=0;e<this.hierarchical.numTrees();e++)t.push(this.direction.getTreeSize(e));return t};const s=(t,e)=>{if(!e[t.id]){e[t.id]=true;if(this.hierarchical.childrenReference[t.id]){const i=this.hierarchical.childrenReference[t.id];if(i.length>0)for(let t=0;t<i.length;t++)s(this.body.nodes[i[t]],e)}}};const a=function(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e9;let r=1e9;let o=1e9;let n=1e9;let s=-1e9;for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)){const h=t.body.nodes[a];const d=t.hierarchical.levels[h.id];const l=t.direction.getPosition(h);const[c,u]=t._getSpaceAroundNode(h,e);r=Math.min(c,r);o=Math.min(u,o);if(d<=i){n=Math.min(l,n);s=Math.max(l,s)}}return[n,s,r,o]};const h=(t,e)=>{const i=this.hierarchical.getMaxLevel(t.id);const r=this.hierarchical.getMaxLevel(e.id);return Math.min(i,r)};
/**
     * Condense elements. These can be nodes or branches depending on the callback.
     * @param {Function} callback
     * @param {Array.<number>} levels
     * @param {*} centerParents
     */const d=(t,e,i)=>{const r=this.hierarchical;for(let o=0;o<e.length;o++){const n=e[o];const s=r.distributionOrdering[n];if(s.length>1)for(let e=0;e<s.length-1;e++){const o=s[e];const n=s[e+1];r.hasSameParent(o,n)&&r.inSameSubNetwork(o,n)&&t(o,n,i)}}};const l=function(i,r){let o=arguments.length>2&&arguments[2]!==void 0&&arguments[2];const n=t.direction.getPosition(i);const d=t.direction.getPosition(r);const l=Math.abs(d-n);const c=t.options.hierarchical.nodeSpacing;if(l>c){const n={};const d={};s(i,n);s(r,d);const l=h(i,r);const u=a(n,l);const v=a(d,l);const f=u[1];const p=v[0];const g=v[2];const m=Math.abs(f-p);if(m>c){let i=f-p+c;i<-g+c&&(i=-g+c);if(i<0){t._shiftBlock(r.id,i);e=true;o===true&&t._centerParent(r)}}}};const c=(t,r)=>{const o=r.id;const n=r.edges;const h=this.hierarchical.levels[r.id];const d=this.options.hierarchical.levelSeparation*this.options.hierarchical.levelSeparation;const l={};const c=[];for(let t=0;t<n.length;t++){const e=n[t];if(e.toId!=e.fromId){const i=e.toId==o?e.from:e.to;l[n[t].id]=i;this.hierarchical.levels[i.id]<h&&c.push(e)}}const u=(t,e)=>{let i=0;for(let r=0;r<e.length;r++)if(l[e[r].id]!==void 0){const o=this.direction.getPosition(l[e[r].id])-t;i+=o/Math.sqrt(o*o+d)}return i};const v=(t,e)=>{let i=0;for(let r=0;r<e.length;r++)if(l[e[r].id]!==void 0){const o=this.direction.getPosition(l[e[r].id])-t;i-=d*Math.pow(o*o+d,-1.5)}return i};const f=(t,e)=>{let i=this.direction.getPosition(r);const o={};for(let r=0;r<t;r++){const t=u(i,e);const n=v(i,e);const s=40;const a=Math.max(-s,Math.min(s,Math.round(t/n)));i-=a;if(o[i]!==void 0)break;o[i]=r}return i};const p=t=>{const o=this.direction.getPosition(r);if(i[r.id]===void 0){const t={};s(r,t);i[r.id]=t}const n=a(i[r.id]);const h=n[2];const d=n[3];const l=t-o;let c=0;l>0?c=Math.min(l,d-this.options.hierarchical.nodeSpacing):l<0&&(c=-Math.min(-l,h-this.options.hierarchical.nodeSpacing));if(c!=0){this._shiftBlock(r.id,c);e=true}};const g=t=>{const i=this.direction.getPosition(r);const[o,n]=this._getSpaceAroundNode(r);const s=t-i;let a=i;s>0?a=Math.min(i+(n-this.options.hierarchical.nodeSpacing),t):s<0&&(a=Math.max(i-(o-this.options.hierarchical.nodeSpacing),t));if(a!==i){this.direction.setPosition(r,a);e=true}};let m=f(t,c);p(m);m=f(t,n);g(m)};const u=t=>{let i=this.hierarchical.getLevels();i=Ld(i).call(i);for(let r=0;r<t;r++){e=false;for(let t=0;t<i.length;t++){const e=i[t];const r=this.hierarchical.distributionOrdering[e];for(let t=0;t<r.length;t++)c(1e3,r[t])}if(e!==true)break}};const v=t=>{let i=this.hierarchical.getLevels();i=Ld(i).call(i);for(let r=0;r<t;r++){e=false;d(l,i,true);if(e!==true)break}};const f=()=>{for(const t in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&this._centerParent(this.body.nodes[t])};const p=()=>{let t=this.hierarchical.getLevels();t=Ld(t).call(t);for(let e=0;e<t.length;e++){const i=t[e];const r=this.hierarchical.distributionOrdering[i];for(let t=0;t<r.length;t++)this._centerParent(r[t])}};if(this.options.hierarchical.blockShifting===true){v(5);f()}this.options.hierarchical.edgeMinimization===true&&u(20);this.options.hierarchical.parentCentralization===true&&p();r()}
/**
   * This gives the space around the node. IF a map is supplied, it will only check against nodes NOT in the map.
   * This is used to only get the distances to nodes outside of a branch.
   * @param {Node} node
   * @param {{Node.id: vis.Node}} map
   * @returns {number[]}
   * @private
   */_getSpaceAroundNode(t,e){let i=true;e===void 0&&(i=false);const r=this.hierarchical.levels[t.id];if(r!==void 0){const o=this.hierarchical.distributionIndex[t.id];const n=this.direction.getPosition(t);const s=this.hierarchical.distributionOrdering[r];let a=1e9;let h=1e9;if(o!==0){const t=s[o-1];if(i===true&&e[t.id]===void 0||i===false){const e=this.direction.getPosition(t);a=n-e}}if(o!=s.length-1){const t=s[o+1];if(i===true&&e[t.id]===void 0||i===false){const e=this.direction.getPosition(t);h=Math.min(h,e-n)}}return[a,h]}return[0,0]}
/**
   * We use this method to center a parent node and check if it does not cross other nodes when it does.
   * @param {Node} node
   * @private
   */_centerParent(t){if(this.hierarchical.parentReference[t.id]){const e=this.hierarchical.parentReference[t.id];for(let t=0;t<e.length;t++){const i=e[t];const r=this.body.nodes[i];const o=this.hierarchical.childrenReference[i];if(o!==void 0){const t=this._getCenterPosition(o);const e=this.direction.getPosition(r);const[i,n]=this._getSpaceAroundNode(r);const s=e-t;(s<0&&Math.abs(s)<n-this.options.hierarchical.nodeSpacing||s>0&&Math.abs(s)<i-this.options.hierarchical.nodeSpacing)&&this.direction.setPosition(r,t)}}}}
/**
   * This function places the nodes on the canvas based on the hierarchial distribution.
   * @param {object} distribution | obtained by the function this._getDistribution()
   * @private
   */_placeNodesByHierarchy(t){this.positionedNodes={};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var e;let r=Lh(t[i]);r=this._indexArrayToNodes(r);AT(e=this.direction).call(e,r);let o=0;for(let t=0;t<r.length;t++){const e=r[t];if(this.positionedNodes[e.id]===void 0){const n=this.options.hierarchical.nodeSpacing;let s=n*o;o>0&&(s=this.direction.getPosition(r[t-1])+n);this.direction.setPosition(e,s,i);this._validatePositionAndContinue(e,i,s);o++}}}}
/**
   * This is a recursively called function to enumerate the branches from the largest hubs and place the nodes
   * on a X position that ensures there will be no overlap.
   * @param {Node.id} parentId
   * @param {number} parentLevel
   * @private
   */_placeBranchNodes(t,e){var i;const r=this.hierarchical.childrenReference[t];if(r===void 0)return;const o=[];for(let t=0;t<r.length;t++)o.push(this.body.nodes[r[t]]);AT(i=this.direction).call(i,o);for(let i=0;i<o.length;i++){const r=o[i];const n=this.hierarchical.levels[r.id];if(!(n>e&&this.positionedNodes[r.id]===void 0))return;{const e=this.options.hierarchical.nodeSpacing;let s;s=i===0?this.direction.getPosition(this.body.nodes[t]):this.direction.getPosition(o[i-1])+e;this.direction.setPosition(r,s,n);this._validatePositionAndContinue(r,n,s)}}const n=this._getCenterPosition(o);this.direction.setPosition(this.body.nodes[t],n,e)}
/**
   * This method checks for overlap and if required shifts the branch. It also keeps records of positioned nodes.
   * Finally it will call _placeBranchNodes to place the branch nodes.
   * @param {Node} node
   * @param {number} level
   * @param {number} pos
   * @private
   */_validatePositionAndContinue(t,e,i){if(this.hierarchical.isTree){if(this.lastNodeOnLevel[e]!==void 0){const r=this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[e]]);if(i-r<this.options.hierarchical.nodeSpacing){const o=r+this.options.hierarchical.nodeSpacing-i;const n=this._findCommonParent(this.lastNodeOnLevel[e],t.id);this._shiftBlock(n.withChild,o)}}this.lastNodeOnLevel[e]=t.id;this.positionedNodes[t.id]=true;this._placeBranchNodes(t.id,e)}}
/**
   * Receives an array with node indices and returns an array with the actual node references.
   * Used for sorting based on node properties.
   * @param {Array.<Node.id>} idArray
   * @returns {Array.<Node>}
   */_indexArrayToNodes(t){const e=[];for(let i=0;i<t.length;i++)e.push(this.body.nodes[t[i]]);return e}
/**
   * This function get the distribution of levels based on hubsize
   * @returns {object}
   * @private
   */_getDistribution(){const t={};let e,i;for(e in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,e)){i=this.body.nodes[e];const r=this.hierarchical.levels[e]===void 0?0:this.hierarchical.levels[e];this.direction.fix(i,r);t[r]===void 0&&(t[r]={});t[r][e]=i}return t}
/**
   * Return the active (i.e. visible) edges for this node
   * @param {Node} node
   * @returns {Array.<vis.Edge>} Array of edge instances
   * @private
   */_getActiveEdges(t){const e=[];nm(t.edges,(t=>{var i;zu(i=this.body.edgeIndices).call(i,t.id)!==-1&&e.push(t)}));return e}
/**
   * Get the hubsizes for all active nodes.
   * @returns {number}
   * @private
   */_getHubSizes(){const t={};const e=this.body.nodeIndices;nm(e,(e=>{const i=this.body.nodes[e];const r=this._getActiveEdges(i).length;t[r]=true}));const i=[];nm(t,(t=>{i.push(Number(t))}));AT(i).call(i,(function(t,e){return e-t}));return i}_determineLevelsByHubsize(){const t=(t,e)=>{this.hierarchical.levelDownstream(t,e)};const e=this._getHubSizes();for(let i=0;i<e.length;++i){const r=e[i];if(r===0)break;nm(this.body.nodeIndices,(e=>{const i=this.body.nodes[e];r===this._getActiveEdges(i).length&&this._crawlNetwork(t,e)}))}}_determineLevelsCustomCallback(){const t=1e5;const e=function(t,e,i){};const i=(i,r,o)=>{let n=this.hierarchical.levels[i.id];n===void 0&&(n=this.hierarchical.levels[i.id]=t);const s=e(NetworkUtil.cloneOptions(i,"node"),NetworkUtil.cloneOptions(r,"node"),NetworkUtil.cloneOptions(o,"edge"));this.hierarchical.levels[r.id]=n+s};this._crawlNetwork(i);this.hierarchical.setMinLevelToZero()}_determineLevelsDirected(){var t;const e=sM(t=this.body.nodeIndices).call(t,((t,e)=>{t.set(e,this.body.nodes[e]);return t}),new Qb);this.options.hierarchical.shakeTowards==="roots"?this.hierarchical.levels=kM(e):this.hierarchical.levels=CM(e);this.hierarchical.setMinLevelToZero()}_generateMap(){const t=(t,e)=>{this.hierarchical.levels[e.id]>this.hierarchical.levels[t.id]&&this.hierarchical.addRelation(t.id,e.id)};this._crawlNetwork(t);this.hierarchical.checkIfTree()}
/**
   * Crawl over the entire network and use a callback on each node couple that is connected to each other.
   * @param {Function} [callback]          | will receive nodeA, nodeB and the connecting edge. A and B are distinct.
   * @param {Node.id} startingNodeId
   * @private
   */_crawlNetwork(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};let e=arguments.length>1?arguments[1]:void 0;const i={};const r=(e,o)=>{if(i[e.id]===void 0){this.hierarchical.setTreeIndex(e,o);i[e.id]=true;let n;const s=this._getActiveEdges(e);for(let i=0;i<s.length;i++){const a=s[i];if(a.connected===true){n=a.toId==e.id?a.from:a.to;if(e.id!=n.id){t(e,n,a);r(n,o)}}}}};if(e===void 0){let t=0;for(let e=0;e<this.body.nodeIndices.length;e++){const o=this.body.nodeIndices[e];if(i[o]===void 0){const e=this.body.nodes[o];r(e,t);t+=1}}}else{const t=this.body.nodes[e];if(t===void 0){console.error("Node not found:",e);return}r(t)}}
/**
   * Shift a branch a certain distance
   * @param {Node.id} parentId
   * @param {number} diff
   * @private
   */_shiftBlock(t,e){const i={};const r=t=>{if(i[t])return;i[t]=true;this.direction.shift(t,e);const o=this.hierarchical.childrenReference[t];if(o!==void 0)for(let t=0;t<o.length;t++)r(o[t])};r(t)}
/**
   * Find a common parent between branches.
   * @param {Node.id} childA
   * @param {Node.id} childB
   * @returns {{foundParent, withChild}}
   * @private
   */_findCommonParent(t,e){const i={};const r=(t,e)=>{const i=this.hierarchical.parentReference[e];if(i!==void 0)for(let e=0;e<i.length;e++){const o=i[e];t[o]=true;r(t,o)}};const o=(t,e)=>{const i=this.hierarchical.parentReference[e];if(i!==void 0)for(let r=0;r<i.length;r++){const n=i[r];if(t[n]!==void 0)return{foundParent:n,withChild:e};const s=o(t,n);if(s.foundParent!==null)return s}return{foundParent:null,withChild:e}};r(i,t);return o(i,e)}
/**
   * Set the strategy pattern for handling the coordinates given the current direction.
   *
   * The individual instances contain all the operations and data specific to a layout direction.
   * @param {Node} node
   * @param {{x: number, y: number}} position
   * @param {number} level
   * @param {boolean} [doNotUpdate]
   * @private
   */setDirectionStrategy(){const t=this.options.hierarchical.direction==="UD"||this.options.hierarchical.direction==="DU";this.direction=t?new VerticalStrategy(this):new HorizontalStrategy(this)}
/**
   * Determine the center position of a branch from the passed list of child nodes
   *
   * This takes into account the positions of all the child nodes.
   * @param {Array.<Node|vis.Node.id>} childNodes  Array of either child nodes or node id's
   * @returns {number}
   * @private
   */_getCenterPosition(t){let e=1e9;let i=-1e9;for(let r=0;r<t.length;r++){let o;if(t[r].id!==void 0)o=t[r];else{const e=t[r];o=this.body.nodes[e]}const n=this.direction.getPosition(o);e=Math.min(e,n);i=Math.max(i,n)}return.5*(e+i)}}class ManipulationSystem{
/**
   * @param {object} body
   * @param {Canvas} canvas
   * @param {SelectionHandler} selectionHandler
   * @param {InteractionHandler} interactionHandler
   */
constructor(t,e,i,r){var o,n;this.body=t;this.canvas=e;this.selectionHandler=i;this.interactionHandler=r;this.editMode=false;this.manipulationDiv=void 0;this.editModeDiv=void 0;this.closeDiv=void 0;this._domEventListenerCleanupQueue=[];this.temporaryUIFunctions={};this.temporaryEventFunctions=[];this.touchTime=0;this.temporaryIds={nodes:[],edges:[]};this.guiEnabled=false;this.inMode=false;this.selectedControlNode=void 0;this.options={};this.defaultOptions={enabled:false,initiallyActive:false,addNode:true,addEdge:true,editNode:void 0,editEdge:true,deleteNode:true,deleteEdge:true,controlNodeStyle:{shape:"dot",size:6,color:{background:"#ff0000",border:"#3c3c3c",highlight:{background:"#07f968",border:"#3c3c3c"}},borderWidth:2,borderWidthSelected:2}};Ri(this.options,this.defaultOptions);this.body.emitter.on("destroy",(()=>{this._clean()}));this.body.emitter.on("_dataChanged",lr(o=this._restore).call(o,this));this.body.emitter.on("_resetData",lr(n=this._restore).call(n,this))}_restore(){this.inMode!==false&&(this.options.initiallyActive===true?this.enableEditMode():this.disableEditMode())}
/**
   * Set the Options
   * @param {object} options
   * @param {object} allOptions
   * @param {object} globalOptions
   */setOptions(t,e,i){if(e!==void 0){e.locale!==void 0?this.options.locale=e.locale:this.options.locale=i.locale;e.locales!==void 0?this.options.locales=e.locales:this.options.locales=i.locales}if(t!==void 0){if(typeof t==="boolean")this.options.enabled=t;else{this.options.enabled=true;tm(this.options,t)}this.options.initiallyActive===true&&(this.editMode=true);this._setup()}}toggleEditMode(){this.editMode===true?this.disableEditMode():this.enableEditMode()}enableEditMode(){this.editMode=true;this._clean();if(this.guiEnabled===true){this.manipulationDiv.style.display="block";this.closeDiv.style.display="block";this.editModeDiv.style.display="none";this.showManipulatorToolbar()}}disableEditMode(){this.editMode=false;this._clean();if(this.guiEnabled===true){this.manipulationDiv.style.display="none";this.closeDiv.style.display="none";this.editModeDiv.style.display="block";this._createEditButton()}}showManipulatorToolbar(){this._clean();this.manipulationDOM={};if(this.guiEnabled===true){var t,e;this.editMode=true;this.manipulationDiv.style.display="block";this.closeDiv.style.display="block";const i=this.selectionHandler.getSelectedNodeCount();const r=this.selectionHandler.getSelectedEdgeCount();const o=i+r;const n=this.options.locales[this.options.locale];let s=false;if(this.options.addNode!==false){this._createAddNodeButton(n);s=true}if(this.options.addEdge!==false){s===true?this._createSeperator(1):s=true;this._createAddEdgeButton(n)}if(i===1&&typeof this.options.editNode==="function"){s===true?this._createSeperator(2):s=true;this._createEditNodeButton(n)}else if(r===1&&i===0&&this.options.editEdge!==false){s===true?this._createSeperator(3):s=true;this._createEditEdgeButton(n)}if(o!==0)if(i>0&&this.options.deleteNode!==false){s===true&&this._createSeperator(4);this._createDeleteButton(n)}else if(i===0&&this.options.deleteEdge!==false){s===true&&this._createSeperator(4);this._createDeleteButton(n)}this._bindElementEvents(this.closeDiv,lr(t=this.toggleEditMode).call(t,this));this._temporaryBindEvent("select",lr(e=this.showManipulatorToolbar).call(e,this))}this.body.emitter.emit("_redraw")}addNodeMode(){var t;this.editMode!==true&&this.enableEditMode();this._clean();this.inMode="addNode";if(this.guiEnabled===true){var e;const t=this.options.locales[this.options.locale];this.manipulationDOM={};this._createBackButton(t);this._createSeperator();this._createDescription(t.addDescription||this.options.locales.en.addDescription);this._bindElementEvents(this.closeDiv,lr(e=this.toggleEditMode).call(e,this))}this._temporaryBindEvent("click",lr(t=this._performAddNode).call(t,this))}editNode(){this.editMode!==true&&this.enableEditMode();this._clean();const t=this.selectionHandler.getSelectedNodes()[0];if(t!==void 0){this.inMode="editNode";if(typeof this.options.editNode!=="function")throw new Error("No function has been configured to handle the editing of nodes.");if(t.isCluster!==true){const e=tm({},t.options,false);e.x=t.x;e.y=t.y;if(this.options.editNode.length!==2)throw new Error("The function for edit does not support two arguments (data, callback)");this.options.editNode(e,(t=>{t!==null&&t!==void 0&&this.inMode==="editNode"&&this.body.data.nodes.getDataSet().update(t);this.showManipulatorToolbar()}))}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)}else this.showManipulatorToolbar()}addEdgeMode(){var t,e,i,r,o;this.editMode!==true&&this.enableEditMode();this._clean();this.inMode="addEdge";if(this.guiEnabled===true){var n;const t=this.options.locales[this.options.locale];this.manipulationDOM={};this._createBackButton(t);this._createSeperator();this._createDescription(t.edgeDescription||this.options.locales.en.edgeDescription);this._bindElementEvents(this.closeDiv,lr(n=this.toggleEditMode).call(n,this))}this._temporaryBindUI("onTouch",lr(t=this._handleConnect).call(t,this));this._temporaryBindUI("onDragEnd",lr(e=this._finishConnect).call(e,this));this._temporaryBindUI("onDrag",lr(i=this._dragControlNode).call(i,this));this._temporaryBindUI("onRelease",lr(r=this._finishConnect).call(r,this));this._temporaryBindUI("onDragStart",lr(o=this._dragStartEdge).call(o,this));this._temporaryBindUI("onHold",(()=>{}))}editEdgeMode(){this.editMode!==true&&this.enableEditMode();this._clean();this.inMode="editEdge";if(typeof this.options.editEdge==="object"&&typeof this.options.editEdge.editWithoutDrag==="function"){this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0];if(this.edgeBeingEditedId!==void 0){const t=this.body.edges[this.edgeBeingEditedId];this._performEditEdge(t.from.id,t.to.id);return}}if(this.guiEnabled===true){var t;const e=this.options.locales[this.options.locale];this.manipulationDOM={};this._createBackButton(e);this._createSeperator();this._createDescription(e.editEdgeDescription||this.options.locales.en.editEdgeDescription);this._bindElementEvents(this.closeDiv,lr(t=this.toggleEditMode).call(t,this))}this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0];if(this.edgeBeingEditedId!==void 0){var e,i,r,o;const t=this.body.edges[this.edgeBeingEditedId];const n=this._getNewTargetNode(t.from.x,t.from.y);const s=this._getNewTargetNode(t.to.x,t.to.y);this.temporaryIds.nodes.push(n.id);this.temporaryIds.nodes.push(s.id);this.body.nodes[n.id]=n;this.body.nodeIndices.push(n.id);this.body.nodes[s.id]=s;this.body.nodeIndices.push(s.id);this._temporaryBindUI("onTouch",lr(e=this._controlNodeTouch).call(e,this));this._temporaryBindUI("onTap",(()=>{}));this._temporaryBindUI("onHold",(()=>{}));this._temporaryBindUI("onDragStart",lr(i=this._controlNodeDragStart).call(i,this));this._temporaryBindUI("onDrag",lr(r=this._controlNodeDrag).call(r,this));this._temporaryBindUI("onDragEnd",lr(o=this._controlNodeDragEnd).call(o,this));this._temporaryBindUI("onMouseMove",(()=>{}));this._temporaryBindEvent("beforeDrawing",(e=>{const i=t.edgeType.findBorderPositions(e);if(n.selected===false){n.x=i.from.x;n.y=i.from.y}if(s.selected===false){s.x=i.to.x;s.y=i.to.y}}));this.body.emitter.emit("_redraw")}else this.showManipulatorToolbar()}deleteSelected(){this.editMode!==true&&this.enableEditMode();this._clean();this.inMode="delete";const t=this.selectionHandler.getSelectedNodeIds();const e=this.selectionHandler.getSelectedEdgeIds();let i;if(t.length>0){for(let e=0;e<t.length;e++)if(this.body.nodes[t[e]].isCluster===true){alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError);return}typeof this.options.deleteNode==="function"&&(i=this.options.deleteNode)}else e.length>0&&typeof this.options.deleteEdge==="function"&&(i=this.options.deleteEdge);if(typeof i==="function"){const r={nodes:t,edges:e};if(i.length!==2)throw new Error("The function for delete does not support two arguments (data, callback)");i(r,(t=>{if(t!==null&&t!==void 0&&this.inMode==="delete"){this.body.data.edges.getDataSet().remove(t.edges);this.body.data.nodes.getDataSet().remove(t.nodes);this.body.emitter.emit("startSimulation");this.showManipulatorToolbar()}else{this.body.emitter.emit("startSimulation");this.showManipulatorToolbar()}}))}else{this.body.data.edges.getDataSet().remove(e);this.body.data.nodes.getDataSet().remove(t);this.body.emitter.emit("startSimulation");this.showManipulatorToolbar()}}_setup(){if(this.options.enabled===true){this.guiEnabled=true;this._createWrappers();this.editMode===false?this._createEditButton():this.showManipulatorToolbar()}else{this._removeManipulationDOM();this.guiEnabled=false}}_createWrappers(){if(this.manipulationDiv===void 0){this.manipulationDiv=document.createElement("div");this.manipulationDiv.className="vis-manipulation";this.editMode===true?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none";this.canvas.frame.appendChild(this.manipulationDiv)}if(this.editModeDiv===void 0){this.editModeDiv=document.createElement("div");this.editModeDiv.className="vis-edit-mode";this.editMode===true?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block";this.canvas.frame.appendChild(this.editModeDiv)}if(this.closeDiv===void 0){var t,e;this.closeDiv=document.createElement("button");this.closeDiv.className="vis-close";this.closeDiv.setAttribute("aria-label",(t=(e=this.options.locales[this.options.locale])===null||e===void 0?void 0:e.close)!==null&&t!==void 0?t:this.options.locales.en.close);this.closeDiv.style.display=this.manipulationDiv.style.display;this.canvas.frame.appendChild(this.closeDiv)}}
/**
   * generate a new target node. Used for creating new edges and editing edges
   * @param {number} x
   * @param {number} y
   * @returns {Node}
   * @private
   */_getNewTargetNode(t,e){const i=tm({},this.options.controlNodeStyle);i.id="targetNode"+RC();i.hidden=false;i.physics=false;i.x=t;i.y=e;const r=this.body.functions.createNode(i);r.shape.boundingBox={left:t,right:t,top:e,bottom:e};return r}_createEditButton(){var t;this._clean();this.manipulationDOM={};Xg(this.editModeDiv);const e=this.options.locales[this.options.locale];const i=this._createButton("editMode","vis-edit vis-edit-mode",e.edit||this.options.locales.en.edit);this.editModeDiv.appendChild(i);this._bindElementEvents(i,lr(t=this.toggleEditMode).call(t,this))}_clean(){this.inMode=false;if(this.guiEnabled===true){Xg(this.editModeDiv);Xg(this.manipulationDiv);this._cleanupDOMEventListeners()}this._cleanupTemporaryNodesAndEdges();this._unbindTemporaryUIs();this._unbindTemporaryEvents();this.body.emitter.emit("restorePhysics")}_cleanupDOMEventListeners(){for(const e of dl(t=this._domEventListenerCleanupQueue).call(t,0)){var t;e()}}_removeManipulationDOM(){this._clean();Xg(this.manipulationDiv);Xg(this.editModeDiv);Xg(this.closeDiv);this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv);this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv);this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv);this.manipulationDiv=void 0;this.editModeDiv=void 0;this.closeDiv=void 0}
/**
   * create a seperator line. the index is to differentiate in the manipulation dom
   * @param {number} [index]
   * @private
   */_createSeperator(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;this.manipulationDOM["seperatorLineDiv"+t]=document.createElement("div");this.manipulationDOM["seperatorLineDiv"+t].className="vis-separator-line";this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+t])}
/**
   *
   * @param {Locale} locale
   * @private
   */
_createAddNodeButton(t){var e;const i=this._createButton("addNode","vis-add",t.addNode||this.options.locales.en.addNode);this.manipulationDiv.appendChild(i);this._bindElementEvents(i,lr(e=this.addNodeMode).call(e,this))}
/**
   *
   * @param {Locale} locale
   * @private
   */_createAddEdgeButton(t){var e;const i=this._createButton("addEdge","vis-connect",t.addEdge||this.options.locales.en.addEdge);this.manipulationDiv.appendChild(i);this._bindElementEvents(i,lr(e=this.addEdgeMode).call(e,this))}
/**
   *
   * @param {Locale} locale
   * @private
   */_createEditNodeButton(t){var e;const i=this._createButton("editNode","vis-edit",t.editNode||this.options.locales.en.editNode);this.manipulationDiv.appendChild(i);this._bindElementEvents(i,lr(e=this.editNode).call(e,this))}
/**
   *
   * @param {Locale} locale
   * @private
   */_createEditEdgeButton(t){var e;const i=this._createButton("editEdge","vis-edit",t.editEdge||this.options.locales.en.editEdge);this.manipulationDiv.appendChild(i);this._bindElementEvents(i,lr(e=this.editEdgeMode).call(e,this))}
/**
   *
   * @param {Locale} locale
   * @private
   */_createDeleteButton(t){var e;let i;i=this.options.rtl?"vis-delete-rtl":"vis-delete";const r=this._createButton("delete",i,t.del||this.options.locales.en.del);this.manipulationDiv.appendChild(r);this._bindElementEvents(r,lr(e=this.deleteSelected).call(e,this))}
/**
   *
   * @param {Locale} locale
   * @private
   */_createBackButton(t){var e;const i=this._createButton("back","vis-back",t.back||this.options.locales.en.back);this.manipulationDiv.appendChild(i);this._bindElementEvents(i,lr(e=this.showManipulatorToolbar).call(e,this))}
/**
   *
   * @param {number|string} id
   * @param {string} className
   * @param {label} label
   * @param {string} labelClassName
   * @returns {HTMLElement}
   * @private
   */_createButton(t,e,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"vis-label";this.manipulationDOM[t+"Div"]=document.createElement("button");this.manipulationDOM[t+"Div"].className="vis-button "+e;this.manipulationDOM[t+"Label"]=document.createElement("div");this.manipulationDOM[t+"Label"].className=r;this.manipulationDOM[t+"Label"].innerText=i;this.manipulationDOM[t+"Div"].appendChild(this.manipulationDOM[t+"Label"]);return this.manipulationDOM[t+"Div"]}
/**
   *
   * @param {Label} label
   * @private
   */_createDescription(t){this.manipulationDOM.descriptionLabel=document.createElement("div");this.manipulationDOM.descriptionLabel.className="vis-none";this.manipulationDOM.descriptionLabel.innerText=t;this.manipulationDiv.appendChild(this.manipulationDOM.descriptionLabel)}
/**
   * this binds an event until cleanup by the clean functions.
   * @param {Event}  event   The event
   * @param {Function} newFunction
   * @private
   */
_temporaryBindEvent(t,e){this.temporaryEventFunctions.push({event:t,boundFunction:e});this.body.emitter.on(t,e)}
/**
   * this overrides an UI function until cleanup by the clean function
   * @param {string} UIfunctionName
   * @param {Function} newFunction
   * @private
   */_temporaryBindUI(t,e){if(this.body.eventListeners[t]===void 0)throw new Error("This UI function does not exist. Typo? You tried: "+t+" possible are: "+yv(Lh(this.body.eventListeners)));this.temporaryUIFunctions[t]=this.body.eventListeners[t];this.body.eventListeners[t]=e}_unbindTemporaryUIs(){for(const t in this.temporaryUIFunctions)if(Object.prototype.hasOwnProperty.call(this.temporaryUIFunctions,t)){this.body.eventListeners[t]=this.temporaryUIFunctions[t];delete this.temporaryUIFunctions[t]}this.temporaryUIFunctions={}}_unbindTemporaryEvents(){for(let t=0;t<this.temporaryEventFunctions.length;t++){const e=this.temporaryEventFunctions[t].event;const i=this.temporaryEventFunctions[t].boundFunction;this.body.emitter.off(e,i)}this.temporaryEventFunctions=[]}
/**
   * Bind an hammer instance to a DOM element.
   * @param {Element} domElement
   * @param {Function} boundFunction
   */_bindElementEvents(t,e){const i=new Pm(t,{});XC(i,e);this._domEventListenerCleanupQueue.push((()=>{i.destroy()}));const r=t=>{let{keyCode:i,key:r}=t;r!=="Enter"&&r!==" "&&i!==13&&i!==32||e()};t.addEventListener("keyup",r,false);this._domEventListenerCleanupQueue.push((()=>{t.removeEventListener("keyup",r,false)}))}_cleanupTemporaryNodesAndEdges(){for(let i=0;i<this.temporaryIds.edges.length;i++){var t;this.body.edges[this.temporaryIds.edges[i]].disconnect();delete this.body.edges[this.temporaryIds.edges[i]];const r=zu(t=this.body.edgeIndices).call(t,this.temporaryIds.edges[i]);if(r!==-1){var e;dl(e=this.body.edgeIndices).call(e,r,1)}}for(let t=0;t<this.temporaryIds.nodes.length;t++){var i;delete this.body.nodes[this.temporaryIds.nodes[t]];const e=zu(i=this.body.nodeIndices).call(i,this.temporaryIds.nodes[t]);if(e!==-1){var r;dl(r=this.body.nodeIndices).call(r,e,1)}}this.temporaryIds={nodes:[],edges:[]}}
/**
   * the touch is used to get the position of the initial click
   * @param {Event}  event   The event
   * @private
   */
_controlNodeTouch(t){this.selectionHandler.unselectAll();this.lastTouch=this.body.functions.getPointer(t.center);this.lastTouch.translation=Ri({},this.body.view.translation)}_controlNodeDragStart(){const t=this.lastTouch;const e=this.selectionHandler._pointerToPositionObject(t);const i=this.body.nodes[this.temporaryIds.nodes[0]];const r=this.body.nodes[this.temporaryIds.nodes[1]];const o=this.body.edges[this.edgeBeingEditedId];this.selectedControlNode=void 0;const n=i.isOverlappingWith(e);const s=r.isOverlappingWith(e);if(n===true){this.selectedControlNode=i;o.edgeType.from=i}else if(s===true){this.selectedControlNode=r;o.edgeType.to=r}this.selectedControlNode!==void 0&&this.selectionHandler.selectObject(this.selectedControlNode);this.body.emitter.emit("_redraw")}
/**
   * dragging the control nodes or the canvas
   * @param {Event}  event   The event
   * @private
   */_controlNodeDrag(t){this.body.emitter.emit("disablePhysics");const e=this.body.functions.getPointer(t.center);const i=this.canvas.DOMtoCanvas(e);if(this.selectedControlNode!==void 0){this.selectedControlNode.x=i.x;this.selectedControlNode.y=i.y}else this.interactionHandler.onDrag(t);this.body.emitter.emit("_redraw")}
/**
   * connecting or restoring the control nodes.
   * @param {Event}  event   The event
   * @private
   */_controlNodeDragEnd(t){const e=this.body.functions.getPointer(t.center);const i=this.selectionHandler._pointerToPositionObject(e);const r=this.body.edges[this.edgeBeingEditedId];if(this.selectedControlNode===void 0)return;this.selectionHandler.unselectAll();const o=this.selectionHandler._getAllNodesOverlappingWith(i);let n;for(let t=o.length-1;t>=0;t--)if(o[t]!==this.selectedControlNode.id){n=this.body.nodes[o[t]];break}if(n!==void 0&&this.selectedControlNode!==void 0)if(n.isCluster===true)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{const t=this.body.nodes[this.temporaryIds.nodes[0]];this.selectedControlNode.id===t.id?this._performEditEdge(n.id,r.to.id):this._performEditEdge(r.from.id,n.id)}else{r.updateEdgeType();this.body.emitter.emit("restorePhysics")}this.body.emitter.emit("_redraw")}
/**
   * the function bound to the selection event. It checks if you want to connect a cluster and changes the description
   * to walk the user through the process.
   * @param {Event} event
   * @private
   */
_handleConnect(t){if((new Date).valueOf()-this.touchTime>100){this.lastTouch=this.body.functions.getPointer(t.center);this.lastTouch.translation=Ri({},this.body.view.translation);this.interactionHandler.drag.pointer=this.lastTouch;this.interactionHandler.drag.translation=this.lastTouch.translation;const e=this.lastTouch;const i=this.selectionHandler.getNodeAt(e);if(i!==void 0)if(i.isCluster===true)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{const t=this._getNewTargetNode(i.x,i.y);this.body.nodes[t.id]=t;this.body.nodeIndices.push(t.id);const e=this.body.functions.createEdge({id:"connectionEdge"+RC(),from:i.id,to:t.id,physics:false,smooth:{enabled:true,type:"continuous",roundness:.5}});this.body.edges[e.id]=e;this.body.edgeIndices.push(e.id);this.temporaryIds.nodes.push(t.id);this.temporaryIds.edges.push(e.id)}this.touchTime=(new Date).valueOf()}}
/**
   *
   * @param {Event} event
   * @private
   */_dragControlNode(t){const e=this.body.functions.getPointer(t.center);const i=this.selectionHandler._pointerToPositionObject(e);let r;this.temporaryIds.edges[0]!==void 0&&(r=this.body.edges[this.temporaryIds.edges[0]].fromId);const o=this.selectionHandler._getAllNodesOverlappingWith(i);let n;for(let t=o.length-1;t>=0;t--){var s;if(zu(s=this.temporaryIds.nodes).call(s,o[t])===-1){n=this.body.nodes[o[t]];break}}t.controlEdge={from:r,to:n?n.id:void 0};this.selectionHandler.generateClickEvent("controlNodeDragging",t,e);if(this.temporaryIds.nodes[0]!==void 0){const t=this.body.nodes[this.temporaryIds.nodes[0]];t.x=this.canvas._XconvertDOMtoCanvas(e.x);t.y=this.canvas._YconvertDOMtoCanvas(e.y);this.body.emitter.emit("_redraw")}else this.interactionHandler.onDrag(t)}
/**
   * Connect the new edge to the target if one exists, otherwise remove temp line
   * @param {Event}  event   The event
   * @private
   */_finishConnect(t){const e=this.body.functions.getPointer(t.center);const i=this.selectionHandler._pointerToPositionObject(e);let r;this.temporaryIds.edges[0]!==void 0&&(r=this.body.edges[this.temporaryIds.edges[0]].fromId);const o=this.selectionHandler._getAllNodesOverlappingWith(i);let n;for(let t=o.length-1;t>=0;t--){var s;if(zu(s=this.temporaryIds.nodes).call(s,o[t])===-1){n=this.body.nodes[o[t]];break}}this._cleanupTemporaryNodesAndEdges();n!==void 0&&(n.isCluster===true?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):this.body.nodes[r]!==void 0&&this.body.nodes[n.id]!==void 0&&this._performAddEdge(r,n.id));t.controlEdge={from:r,to:n?n.id:void 0};this.selectionHandler.generateClickEvent("controlNodeDragEnd",t,e);this.body.emitter.emit("_redraw")}
/**
   *
   * @param {Event} event
   * @private
   */_dragStartEdge(t){const e=this.lastTouch;this.selectionHandler.generateClickEvent("dragStart",t,e,void 0,true)}
/**
   * Adds a node on the specified location
   * @param {object} clickData
   * @private
   */
_performAddNode(t){const e={id:RC(),x:t.pointer.canvas.x,y:t.pointer.canvas.y,label:"new"};if(typeof this.options.addNode==="function"){if(this.options.addNode.length!==2){this.showManipulatorToolbar();throw new Error("The function for add does not support two arguments (data,callback)")}this.options.addNode(e,(t=>{t!==null&&t!==void 0&&this.inMode==="addNode"&&this.body.data.nodes.getDataSet().add(t);this.showManipulatorToolbar()}))}else{this.body.data.nodes.getDataSet().add(e);this.showManipulatorToolbar()}}
/**
   * connect two nodes with a new edge.
   * @param {Node.id} sourceNodeId
   * @param {Node.id} targetNodeId
   * @private
   */_performAddEdge(t,e){const i={from:t,to:e};if(typeof this.options.addEdge==="function"){if(this.options.addEdge.length!==2)throw new Error("The function for connect does not support two arguments (data,callback)");this.options.addEdge(i,(t=>{if(t!==null&&t!==void 0&&this.inMode==="addEdge"){this.body.data.edges.getDataSet().add(t);this.selectionHandler.unselectAll();this.showManipulatorToolbar()}}))}else{this.body.data.edges.getDataSet().add(i);this.selectionHandler.unselectAll();this.showManipulatorToolbar()}}
/**
   * connect two nodes with a new edge.
   * @param {Node.id} sourceNodeId
   * @param {Node.id} targetNodeId
   * @private
   */_performEditEdge(t,e){const i={id:this.edgeBeingEditedId,from:t,to:e,label:this.body.data.edges.get(this.edgeBeingEditedId).label};let r=this.options.editEdge;typeof r==="object"&&(r=r.editWithoutDrag);if(typeof r==="function"){if(r.length!==2)throw new Error("The function for edit does not support two arguments (data, callback)");r(i,(t=>{if(t===null||t===void 0||this.inMode!=="editEdge"){this.body.edges[i.id].updateEdgeType();this.body.emitter.emit("_redraw");this.showManipulatorToolbar()}else{this.body.data.edges.getDataSet().update(t);this.selectionHandler.unselectAll();this.showManipulatorToolbar()}}))}else{this.body.data.edges.getDataSet().update(i);this.selectionHandler.unselectAll();this.showManipulatorToolbar()}}}const TM="string";const MM="boolean";const DM="number";const IM="array";const PM="object";const BM="dom";const NM="any";const zM=["arrow","bar","box","circle","crow","curve","diamond","image","inv_curve","inv_triangle","triangle","vee"];
/* eslint-disable @typescript-eslint/naming-convention -- The __*__ format is used to prevent collisions with actual option names. */const FM={borderWidth:{number:DM},borderWidthSelected:{number:DM,undefined:"undefined"},brokenImage:{string:TM,undefined:"undefined"},chosen:{label:{boolean:MM,function:"function"},node:{boolean:MM,function:"function"},__type__:{object:PM,boolean:MM}},color:{border:{string:TM},background:{string:TM},highlight:{border:{string:TM},background:{string:TM},__type__:{object:PM,string:TM}},hover:{border:{string:TM},background:{string:TM},__type__:{object:PM,string:TM}},__type__:{object:PM,string:TM}},opacity:{number:DM,undefined:"undefined"},fixed:{x:{boolean:MM},y:{boolean:MM},__type__:{object:PM,boolean:MM}},font:{align:{string:TM},color:{string:TM},size:{number:DM},face:{string:TM},background:{string:TM},strokeWidth:{number:DM},strokeColor:{string:TM},vadjust:{number:DM},multi:{boolean:MM,string:TM},bold:{color:{string:TM},size:{number:DM},face:{string:TM},mod:{string:TM},vadjust:{number:DM},__type__:{object:PM,string:TM}},boldital:{color:{string:TM},size:{number:DM},face:{string:TM},mod:{string:TM},vadjust:{number:DM},__type__:{object:PM,string:TM}},ital:{color:{string:TM},size:{number:DM},face:{string:TM},mod:{string:TM},vadjust:{number:DM},__type__:{object:PM,string:TM}},mono:{color:{string:TM},size:{number:DM},face:{string:TM},mod:{string:TM},vadjust:{number:DM},__type__:{object:PM,string:TM}},__type__:{object:PM,string:TM}},group:{string:TM,number:DM,undefined:"undefined"},heightConstraint:{minimum:{number:DM},valign:{string:TM},__type__:{object:PM,boolean:MM,number:DM}},hidden:{boolean:MM},icon:{face:{string:TM},code:{string:TM},size:{number:DM},color:{string:TM},weight:{string:TM,number:DM},__type__:{object:PM}},id:{string:TM,number:DM},image:{selected:{string:TM,undefined:"undefined"},unselected:{string:TM,undefined:"undefined"},__type__:{object:PM,string:TM}},imagePadding:{top:{number:DM},right:{number:DM},bottom:{number:DM},left:{number:DM},__type__:{object:PM,number:DM}},label:{string:TM,undefined:"undefined"},labelHighlightBold:{boolean:MM},level:{number:DM,undefined:"undefined"},margin:{top:{number:DM},right:{number:DM},bottom:{number:DM},left:{number:DM},__type__:{object:PM,number:DM}},mass:{number:DM},physics:{boolean:MM},scaling:{min:{number:DM},max:{number:DM},label:{enabled:{boolean:MM},min:{number:DM},max:{number:DM},maxVisible:{number:DM},drawThreshold:{number:DM},__type__:{object:PM,boolean:MM}},customScalingFunction:{function:"function"},__type__:{object:PM}},shadow:{enabled:{boolean:MM},color:{string:TM},size:{number:DM},x:{number:DM},y:{number:DM},__type__:{object:PM,boolean:MM}},shape:{string:["custom","ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon","hexagon"]},ctxRenderer:{function:"function"},shapeProperties:{borderDashes:{boolean:MM,array:IM},borderRadius:{number:DM},interpolation:{boolean:MM},useImageSize:{boolean:MM},useBorderWithImage:{boolean:MM},coordinateOrigin:{string:["center","top-left"]},__type__:{object:PM}},size:{number:DM},title:{string:TM,dom:BM,undefined:"undefined"},value:{number:DM,undefined:"undefined"},widthConstraint:{minimum:{number:DM},maximum:{number:DM},__type__:{object:PM,boolean:MM,number:DM}},x:{number:DM},y:{number:DM},__type__:{object:PM}};const AM={configure:{enabled:{boolean:MM},filter:{boolean:MM,string:TM,array:IM,function:"function"},container:{dom:BM},showButton:{boolean:MM},__type__:{object:PM,boolean:MM,string:TM,array:IM,function:"function"}},edges:{arrows:{to:{enabled:{boolean:MM},scaleFactor:{number:DM},type:{string:zM},imageHeight:{number:DM},imageWidth:{number:DM},src:{string:TM},__type__:{object:PM,boolean:MM}},middle:{enabled:{boolean:MM},scaleFactor:{number:DM},type:{string:zM},imageWidth:{number:DM},imageHeight:{number:DM},src:{string:TM},__type__:{object:PM,boolean:MM}},from:{enabled:{boolean:MM},scaleFactor:{number:DM},type:{string:zM},imageWidth:{number:DM},imageHeight:{number:DM},src:{string:TM},__type__:{object:PM,boolean:MM}},__type__:{string:["from","to","middle"],object:PM}},endPointOffset:{from:{number:DM},to:{number:DM},__type__:{object:PM,number:DM}},arrowStrikethrough:{boolean:MM},background:{enabled:{boolean:MM},color:{string:TM},size:{number:DM},dashes:{boolean:MM,array:IM},__type__:{object:PM,boolean:MM}},chosen:{label:{boolean:MM,function:"function"},edge:{boolean:MM,function:"function"},__type__:{object:PM,boolean:MM}},color:{color:{string:TM},highlight:{string:TM},hover:{string:TM},inherit:{string:["from","to","both"],boolean:MM},opacity:{number:DM},__type__:{object:PM,string:TM}},dashes:{boolean:MM,array:IM},font:{color:{string:TM},size:{number:DM},face:{string:TM},background:{string:TM},strokeWidth:{number:DM},strokeColor:{string:TM},align:{string:["horizontal","top","middle","bottom"]},vadjust:{number:DM},multi:{boolean:MM,string:TM},bold:{color:{string:TM},size:{number:DM},face:{string:TM},mod:{string:TM},vadjust:{number:DM},__type__:{object:PM,string:TM}},boldital:{color:{string:TM},size:{number:DM},face:{string:TM},mod:{string:TM},vadjust:{number:DM},__type__:{object:PM,string:TM}},ital:{color:{string:TM},size:{number:DM},face:{string:TM},mod:{string:TM},vadjust:{number:DM},__type__:{object:PM,string:TM}},mono:{color:{string:TM},size:{number:DM},face:{string:TM},mod:{string:TM},vadjust:{number:DM},__type__:{object:PM,string:TM}},__type__:{object:PM,string:TM}},hidden:{boolean:MM},hoverWidth:{function:"function",number:DM},label:{string:TM,undefined:"undefined"},labelHighlightBold:{boolean:MM},length:{number:DM,undefined:"undefined"},physics:{boolean:MM},scaling:{min:{number:DM},max:{number:DM},label:{enabled:{boolean:MM},min:{number:DM},max:{number:DM},maxVisible:{number:DM},drawThreshold:{number:DM},__type__:{object:PM,boolean:MM}},customScalingFunction:{function:"function"},__type__:{object:PM}},selectionWidth:{function:"function",number:DM},selfReferenceSize:{number:DM},selfReference:{size:{number:DM},angle:{number:DM},renderBehindTheNode:{boolean:MM},__type__:{object:PM}},shadow:{enabled:{boolean:MM},color:{string:TM},size:{number:DM},x:{number:DM},y:{number:DM},__type__:{object:PM,boolean:MM}},smooth:{enabled:{boolean:MM},type:{string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]},roundness:{number:DM},forceDirection:{string:["horizontal","vertical","none"],boolean:MM},__type__:{object:PM,boolean:MM}},title:{string:TM,undefined:"undefined"},width:{number:DM},widthConstraint:{maximum:{number:DM},__type__:{object:PM,boolean:MM,number:DM}},value:{number:DM,undefined:"undefined"},__type__:{object:PM}},groups:{useDefaultGroups:{boolean:MM},__any__:FM,__type__:{object:PM}},interaction:{dragNodes:{boolean:MM},dragView:{boolean:MM},hideEdgesOnDrag:{boolean:MM},hideEdgesOnZoom:{boolean:MM},hideNodesOnDrag:{boolean:MM},hover:{boolean:MM},keyboard:{enabled:{boolean:MM},speed:{x:{number:DM},y:{number:DM},zoom:{number:DM},__type__:{object:PM}},bindToWindow:{boolean:MM},autoFocus:{boolean:MM},__type__:{object:PM,boolean:MM}},multiselect:{boolean:MM},navigationButtons:{boolean:MM},selectable:{boolean:MM},selectConnectedEdges:{boolean:MM},hoverConnectedEdges:{boolean:MM},tooltipDelay:{number:DM},zoomView:{boolean:MM},zoomSpeed:{number:DM},__type__:{object:PM}},layout:{randomSeed:{undefined:"undefined",number:DM,string:TM},improvedLayout:{boolean:MM},clusterThreshold:{number:DM},hierarchical:{enabled:{boolean:MM},levelSeparation:{number:DM},nodeSpacing:{number:DM},treeSpacing:{number:DM},blockShifting:{boolean:MM},edgeMinimization:{boolean:MM},parentCentralization:{boolean:MM},direction:{string:["UD","DU","LR","RL"]},sortMethod:{string:["hubsize","directed"]},shakeTowards:{string:["leaves","roots"]},__type__:{object:PM,boolean:MM}},__type__:{object:PM}},manipulation:{enabled:{boolean:MM},initiallyActive:{boolean:MM},addNode:{boolean:MM,function:"function"},addEdge:{boolean:MM,function:"function"},editNode:{function:"function"},editEdge:{editWithoutDrag:{function:"function"},__type__:{object:PM,boolean:MM,function:"function"}},deleteNode:{boolean:MM,function:"function"},deleteEdge:{boolean:MM,function:"function"},controlNodeStyle:FM,__type__:{object:PM,boolean:MM}},nodes:FM,physics:{enabled:{boolean:MM},barnesHut:{theta:{number:DM},gravitationalConstant:{number:DM},centralGravity:{number:DM},springLength:{number:DM},springConstant:{number:DM},damping:{number:DM},avoidOverlap:{number:DM},__type__:{object:PM}},forceAtlas2Based:{theta:{number:DM},gravitationalConstant:{number:DM},centralGravity:{number:DM},springLength:{number:DM},springConstant:{number:DM},damping:{number:DM},avoidOverlap:{number:DM},__type__:{object:PM}},repulsion:{centralGravity:{number:DM},springLength:{number:DM},springConstant:{number:DM},nodeDistance:{number:DM},damping:{number:DM},__type__:{object:PM}},hierarchicalRepulsion:{centralGravity:{number:DM},springLength:{number:DM},springConstant:{number:DM},nodeDistance:{number:DM},damping:{number:DM},avoidOverlap:{number:DM},__type__:{object:PM}},maxVelocity:{number:DM},minVelocity:{number:DM},solver:{string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]},stabilization:{enabled:{boolean:MM},iterations:{number:DM},updateInterval:{number:DM},onlyDynamicEdges:{boolean:MM},fit:{boolean:MM},__type__:{object:PM,boolean:MM}},timestep:{number:DM},adaptiveTimestep:{boolean:MM},wind:{x:{number:DM},y:{number:DM},__type__:{object:PM}},__type__:{object:PM,boolean:MM}},autoResize:{boolean:MM},clickToUse:{boolean:MM},locale:{string:TM},locales:{__any__:{any:NM},__type__:{object:PM}},height:{string:TM},width:{string:TM},__type__:{object:PM}};
/* eslint-enable @typescript-eslint/naming-convention */const RM={nodes:{borderWidth:[1,0,10,1],borderWidthSelected:[2,0,10,1],color:{border:["color","#2B7CE9"],background:["color","#97C2FC"],highlight:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]},hover:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]}},opacity:[0,0,1,.1],fixed:{x:false,y:false},font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[0,0,50,1],strokeColor:["color","#ffffff"]},hidden:false,labelHighlightBold:true,physics:true,scaling:{min:[10,0,200,1],max:[30,0,200,1],label:{enabled:false,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},shadow:{enabled:false,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown","hexagon"],shapeProperties:{borderDashes:false,borderRadius:[6,0,20,1],interpolation:true,useImageSize:false},size:[25,0,200,1]},edges:{arrows:{to:{enabled:false,scaleFactor:[1,0,3,.05],type:"arrow"},middle:{enabled:false,scaleFactor:[1,0,3,.05],type:"arrow"},from:{enabled:false,scaleFactor:[1,0,3,.05],type:"arrow"}},endPointOffset:{from:[0,-10,10,1],to:[0,-10,10,1]},arrowStrikethrough:true,color:{color:["color","#848484"],highlight:["color","#848484"],hover:["color","#848484"],inherit:["from","to","both",true,false],opacity:[1,0,1,.05]},dashes:false,font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[2,0,50,1],strokeColor:["color","#ffffff"],align:["horizontal","top","middle","bottom"]},hidden:false,hoverWidth:[1.5,0,5,.1],labelHighlightBold:true,physics:true,scaling:{min:[1,0,100,1],max:[15,0,100,1],label:{enabled:true,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},selectionWidth:[1.5,0,5,.1],selfReferenceSize:[20,0,200,1],selfReference:{size:[20,0,200,1],angle:[Math.PI/2,-6*Math.PI,6*Math.PI,Math.PI/8],renderBehindTheNode:true},shadow:{enabled:false,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:true,type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],forceDirection:["horizontal","vertical","none"],roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{hierarchical:{enabled:false,levelSeparation:[150,20,500,5],nodeSpacing:[100,20,500,5],treeSpacing:[200,20,500,5],blockShifting:true,edgeMinimization:true,parentCentralization:true,direction:["UD","DU","LR","RL"],sortMethod:["hubsize","directed"],shakeTowards:["leaves","roots"]}},interaction:{dragNodes:true,dragView:true,hideEdgesOnDrag:false,hideEdgesOnZoom:false,hideNodesOnDrag:false,hover:false,keyboard:{enabled:false,speed:{x:[10,0,40,1],y:[10,0,40,1],zoom:[.02,0,.1,.005]},bindToWindow:true,autoFocus:true},multiselect:false,navigationButtons:false,selectable:true,selectConnectedEdges:true,hoverConnectedEdges:true,tooltipDelay:[300,0,1e3,25],zoomView:true,zoomSpeed:[1,.1,2,.1]},manipulation:{enabled:false,initiallyActive:false},physics:{enabled:true,barnesHut:{theta:[.5,.1,1,.05],gravitationalConstant:[-2e3,-3e4,0,50],centralGravity:[.3,0,10,.05],springLength:[95,0,500,5],springConstant:[.04,0,1.2,.005],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},forceAtlas2Based:{theta:[.5,.1,1,.05],gravitationalConstant:[-50,-500,0,1],centralGravity:[.01,0,1,.005],springLength:[95,0,500,5],springConstant:[.08,0,1.2,.005],damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},repulsion:{centralGravity:[.2,0,10,.05],springLength:[200,0,500,5],springConstant:[.05,0,1.2,.005],nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},hierarchicalRepulsion:{centralGravity:[.2,0,10,.05],springLength:[100,0,500,5],springConstant:[.01,0,1.2,.005],nodeDistance:[120,0,500,5],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},maxVelocity:[50,0,150,1],minVelocity:[.1,.01,.5,.01],solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],timestep:[.5,.01,1,.01],wind:{x:[0,-10,10,.1],y:[0,-10,10,.1]}}};const jM=(t,e,i)=>{var r;return!(!Hl(t).call(t,"physics")||!Hl(r=RM.physics.solver).call(r,e)||i.physics.solver===e||e==="wind")};var LM=Object.freeze({__proto__:null,allOptions:AM,configuratorHideOption:jM,configureOptions:RM});class FloydWarshall{constructor(){}
/**
   *
   * @param {object} body
   * @param {Array.<Node>} nodesArray
   * @param {Array.<Edge>} edgesArray
   * @returns {{}}
   */getDistances(t,e,i){const r={};const o=t.edges;for(let t=0;t<e.length;t++){const i=e[t];const o={};r[i]=o;for(let i=0;i<e.length;i++)o[e[i]]=t==i?0:1e9}for(let t=0;t<i.length;t++){const e=o[i[t]];if(e.connected===true&&r[e.fromId]!==void 0&&r[e.toId]!==void 0){r[e.fromId][e.toId]=1;r[e.toId][e.fromId]=1}}const n=e.length;for(let t=0;t<n;t++){const i=e[t];const o=r[i];for(let t=0;t<n-1;t++){const s=e[t];const a=r[s];for(let h=t+1;h<n;h++){const t=e[h];const n=r[t];const d=Math.min(a[t],a[i]+o[t]);a[t]=d;n[s]=d}}}return r}}class KamadaKawai{
/**
   * @param {object} body
   * @param {number} edgeLength
   * @param {number} edgeStrength
   */
constructor(t,e,i){this.body=t;this.springLength=e;this.springConstant=i;this.distanceSolver=new FloydWarshall}
/**
   * Not sure if needed but can be used to update the spring length and spring constant
   * @param {object} options
   */setOptions(t){if(t){t.springLength&&(this.springLength=t.springLength);t.springConstant&&(this.springConstant=t.springConstant)}}
/**
   * Position the system
   * @param {Array.<Node>} nodesArray
   * @param {Array.<vis.Edge>} edgesArray
   * @param {boolean} [ignoreClusters]
   */solve(t,e){let i=arguments.length>2&&arguments[2]!==void 0&&arguments[2];const r=this.distanceSolver.getDistances(this.body,t,e);this._createL_matrix(r);this._createK_matrix(r);this._createE_matrix();const o=.01;const n=1;let s=0;const a=Math.max(1e3,Math.min(10*this.body.nodeIndices.length,6e3));const h=5;let d=1e9;let l=0,c=0,u=0,v=0,f=0;while(d>o&&s<a){s+=1;[l,d,c,u]=this._getHighestEnergyNode(i);v=d;f=0;while(v>n&&f<h){f+=1;this._moveNode(l,c,u);[v,c,u]=this._getEnergy(l)}}}
/**
   * get the node with the highest energy
   * @param {boolean} ignoreClusters
   * @returns {number[]}
   * @private
   */_getHighestEnergyNode(t){const e=this.body.nodeIndices;const i=this.body.nodes;let r=0;let o=e[0];let n=0,s=0;for(let a=0;a<e.length;a++){const h=e[a];if(i[h].predefinedPosition!==true||i[h].isCluster===true&&t===true||i[h].options.fixed.x!==true||i[h].options.fixed.y!==true){const[t,e,i]=this._getEnergy(h);if(r<t){r=t;o=h;n=e;s=i}}}return[o,r,n,s]}
/**
   * calculate the energy of a single node
   * @param {Node.id} m
   * @returns {number[]}
   * @private
   */_getEnergy(t){const[e,i]=this.E_sums[t];const r=Math.sqrt(e**2+i**2);return[r,e,i]}
/**
   * move the node based on it's energy
   * the dx and dy are calculated from the linear system proposed by Kamada and Kawai
   * @param {number} m
   * @param {number} dE_dx
   * @param {number} dE_dy
   * @private
   */_moveNode(t,e,i){const r=this.body.nodeIndices;const o=this.body.nodes;let n=0;let s=0;let a=0;const h=o[t].x;const d=o[t].y;const l=this.K_matrix[t];const c=this.L_matrix[t];for(let e=0;e<r.length;e++){const i=r[e];if(i!==t){const t=o[i].x;const e=o[i].y;const r=l[i];const u=c[i];const v=1/((h-t)**2+(d-e)**2)**1.5;n+=r*(1-u*(d-e)**2*v);s+=r*(u*(h-t)*(d-e)*v);a+=r*(1-u*(h-t)**2*v)}}const u=n,v=s,f=e,p=a,g=i;const m=(f/u+g/v)/(v/u-p/v);const y=-(v*m+f)/u;o[t].x+=y;o[t].y+=m;this._updateE_matrix(t)}
/**
   * Create the L matrix: edge length times shortest path
   * @param {object} D_matrix
   * @private
   */_createL_matrix(t){const e=this.body.nodeIndices;const i=this.springLength;this.L_matrix=[];for(let r=0;r<e.length;r++){this.L_matrix[e[r]]={};for(let o=0;o<e.length;o++)this.L_matrix[e[r]][e[o]]=i*t[e[r]][e[o]]}}
/**
   * Create the K matrix: spring constants times shortest path
   * @param {object} D_matrix
   * @private
   */_createK_matrix(t){const e=this.body.nodeIndices;const i=this.springConstant;this.K_matrix=[];for(let r=0;r<e.length;r++){this.K_matrix[e[r]]={};for(let o=0;o<e.length;o++)this.K_matrix[e[r]][e[o]]=i*t[e[r]][e[o]]**-2}}_createE_matrix(){const t=this.body.nodeIndices;const e=this.body.nodes;this.E_matrix={};this.E_sums={};for(let e=0;e<t.length;e++)this.E_matrix[t[e]]=[];for(let i=0;i<t.length;i++){const r=t[i];const o=e[r].x;const n=e[r].y;let s=0;let a=0;for(let h=i;h<t.length;h++){const d=t[h];if(d!==r){const t=e[d].x;const l=e[d].y;const c=1/Math.sqrt((o-t)**2+(n-l)**2);this.E_matrix[r][h]=[this.K_matrix[r][d]*(o-t-this.L_matrix[r][d]*(o-t)*c),this.K_matrix[r][d]*(n-l-this.L_matrix[r][d]*(n-l)*c)];this.E_matrix[d][i]=this.E_matrix[r][h];s+=this.E_matrix[r][h][0];a+=this.E_matrix[r][h][1]}}this.E_sums[r]=[s,a]}}
/**
   * Update method, just doing single column (rows are auto-updated) (update all sums)
   * @param {number} m
   * @private
   */_updateE_matrix(t){const e=this.body.nodeIndices;const i=this.body.nodes;const r=this.E_matrix[t];const o=this.K_matrix[t];const n=this.L_matrix[t];const s=i[t].x;const a=i[t].y;let h=0;let d=0;for(let l=0;l<e.length;l++){const c=e[l];if(c!==t){const t=r[l];const e=t[0];const u=t[1];const v=i[c].x;const f=i[c].y;const p=1/Math.sqrt((s-v)**2+(a-f)**2);const g=o[c]*(s-v-n[c]*(s-v)*p);const m=o[c]*(a-f-n[c]*(a-f)*p);r[l]=[g,m];h+=g;d+=m;const y=this.E_sums[c];y[0]+=g-e;y[1]+=m-u}}this.E_sums[t]=[h,d]}}
/**
 * Create a network visualization, displaying nodes and edges.
 * @param {Element} container   The DOM element in which the Network will
 *                                  be created. Normally a div element.
 * @param {object} data         An object containing parameters
 *                              {Array} nodes
 *                              {Array} edges
 * @param {object} options      Options
 * @class Network
 */function HM(t,e,i){var r,o,n,s;if(!(this instanceof HM))throw new SyntaxError("Constructor must be called with the new operator");this.options={};this.defaultOptions={locale:"en",locales:Dy,clickToUse:false};Ri(this.options,this.defaultOptions);this.body={container:t,nodes:{},nodeIndices:[],edges:{},edgeIndices:[],emitter:{on:lr(r=this.on).call(r,this),off:lr(o=this.off).call(o,this),emit:lr(n=this.emit).call(n,this),once:lr(s=this.once).call(s,this)},eventListeners:{onTap:function(){},onTouch:function(){},onDoubleTap:function(){},onHold:function(){},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},onMouseWheel:function(){},onPinch:function(){},onMouseMove:function(){},onRelease:function(){},onContext:function(){}},data:{nodes:null,edges:null},functions:{createNode:function(){},createEdge:function(){},getPointer:function(){}},modules:{},view:{scale:1,translation:{x:0,y:0}},selectionBox:{show:false,position:{start:{x:0,y:0},end:{x:0,y:0}}}};this.bindEventListeners();this.images=new Images((()=>this.body.emitter.emit("_requestRedraw")));this.groups=new Groups;this.canvas=new Canvas(this.body);this.selectionHandler=new SelectionHandler(this.body,this.canvas);this.interactionHandler=new InteractionHandler(this.body,this.canvas,this.selectionHandler);this.view=new View(this.body,this.canvas);this.renderer=new CanvasRenderer(this.body,this.canvas);this.physics=new PhysicsEngine(this.body);this.layoutEngine=new LayoutEngine(this.body);this.clustering=new ClusterEngine(this.body);this.manipulation=new ManipulationSystem(this.body,this.canvas,this.selectionHandler,this.interactionHandler);this.nodesHandler=new NodesHandler(this.body,this.images,this.groups,this.layoutEngine);this.edgesHandler=new EdgesHandler(this.body,this.images,this.groups);this.body.modules.kamadaKawai=new KamadaKawai(this.body,150,.05);this.body.modules.clustering=this.clustering;this.canvas._create();this.setOptions(i);this.setData(e)}Tr(HM.prototype);
/**
 * Set options
 * @param {object} options
 */HM.prototype.setOptions=function(t){t===null&&(t=void 0);if(t!==void 0){const e=zm.validate(t,AM);e===true&&console.error("%cErrors have been found in the supplied options object.",Nm);const i=["locale","locales","clickToUse"];$g(i,this.options,t);t.locale!==void 0&&(t.locale=Iy(t.locales||this.options.locales,t.locale));t=this.layoutEngine.setOptions(t.layout,t);this.canvas.setOptions(t);this.groups.setOptions(t.groups);this.nodesHandler.setOptions(t.nodes);this.edgesHandler.setOptions(t.edges);this.physics.setOptions(t.physics);this.manipulation.setOptions(t.manipulation,t,this.options);this.interactionHandler.setOptions(t.interaction);this.renderer.setOptions(t.interaction);this.selectionHandler.setOptions(t.interaction);t.groups!==void 0&&this.body.emitter.emit("refreshNodes");if("configure"in t){this.configurator||(this.configurator=new Im(this,this.body.container,RM,this.canvas.pixelRatio,jM));this.configurator.setOptions(t.configure)}if(this.configurator&&this.configurator.options.enabled===true){const t={nodes:{},edges:{},layout:{},interaction:{},manipulation:{},physics:{},global:{}};tm(t.nodes,this.nodesHandler.options);tm(t.edges,this.edgesHandler.options);tm(t.layout,this.layoutEngine.options);tm(t.interaction,this.selectionHandler.options);tm(t.interaction,this.renderer.options);tm(t.interaction,this.interactionHandler.options);tm(t.manipulation,this.manipulation.options);tm(t.physics,this.physics.options);tm(t.global,this.canvas.options);tm(t.global,this.options);this.configurator.setModuleOptions(t)}if(t.clickToUse!==void 0)if(t.clickToUse===true){if(this.activator===void 0){this.activator=new Dm(this.canvas.frame);this.activator.on("change",(()=>{this.body.emitter.emit("activate")}))}}else{if(this.activator!==void 0){this.activator.destroy();delete this.activator}this.body.emitter.emit("activate")}else this.body.emitter.emit("activate");this.canvas.setSize();this.body.emitter.emit("startSimulation")}};HM.prototype._updateVisibleIndices=function(){const t=this.body.nodes;const e=this.body.edges;this.body.nodeIndices=[];this.body.edgeIndices=[];for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(this.clustering._isClusteredNode(e)||t[e].options.hidden!==false||this.body.nodeIndices.push(t[e].id));for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){const r=e[i];const o=t[r.fromId];const n=t[r.toId];const s=o!==void 0&&n!==void 0;const a=!this.clustering._isClusteredEdge(i)&&r.options.hidden===false&&s&&o.options.hidden===false&&n.options.hidden===false;a&&this.body.edgeIndices.push(r.id)}};HM.prototype.bindEventListeners=function(){this.body.emitter.on("_dataChanged",(()=>{this.edgesHandler._updateState();this.body.emitter.emit("_dataUpdated")}));this.body.emitter.on("_dataUpdated",(()=>{this.clustering._updateState();this._updateVisibleIndices();this._updateValueRange(this.body.nodes);this._updateValueRange(this.body.edges);this.body.emitter.emit("startSimulation");this.body.emitter.emit("_requestRedraw")}))};
/**
 * Set nodes and edges, and optionally options as well.
 * @param {object} data              Object containing parameters:
 *                                   {Array | DataSet | DataView} [nodes] Array with nodes
 *                                   {Array | DataSet | DataView} [edges] Array with edges
 *                                   {String} [dot] String containing data in DOT format
 *                                   {String} [gephi] String containing data in gephi JSON format
 *                                   {Options} [options] Object with options
 */HM.prototype.setData=function(t){this.body.emitter.emit("resetPhysics");this.body.emitter.emit("_resetData");this.selectionHandler.unselectAll();if(t&&t.dot&&(t.nodes||t.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');this.setOptions(t&&t.options);if(t&&t.dot){console.warn("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");const e=py(t.dot);this.setData(e)}else if(t&&t.gephi){console.warn("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");const e=my(t.gephi);this.setData(e)}else{this.nodesHandler.setData(t&&t.nodes,true);this.edgesHandler.setData(t&&t.edges,true);this.body.emitter.emit("_dataChanged");this.body.emitter.emit("_dataLoaded");this.body.emitter.emit("initPhysics")}};HM.prototype.destroy=function(){this.body.emitter.emit("destroy");this.body.emitter.off();this.off();delete this.groups;delete this.canvas;delete this.selectionHandler;delete this.interactionHandler;delete this.view;delete this.renderer;delete this.physics;delete this.layoutEngine;delete this.clustering;delete this.manipulation;delete this.nodesHandler;delete this.edgesHandler;delete this.configurator;delete this.images;for(const t in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&delete this.body.nodes[t];for(const t in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,t)&&delete this.body.edges[t];Xg(this.body.container)};
/**
 * Update the values of all object in the given array according to the current
 * value range of the objects in the array.
 * @param {object} obj    An object containing a set of Edges or Nodes
 *                        The objects must have a method getValue() and
 *                        setValueRange(min, max).
 * @private
 */HM.prototype._updateValueRange=function(t){let e;let i;let r;let o=0;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const n=t[e].getValue();if(n!==void 0){i=i===void 0?n:Math.min(n,i);r=r===void 0?n:Math.max(n,r);o+=n}}if(i!==void 0&&r!==void 0)for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e].setValueRange(i,r,o)};
/**
 * Returns true when the Network is active.
 * @returns {boolean}
 */HM.prototype.isActive=function(){return!this.activator||this.activator.active};HM.prototype.setSize=function(){return this.canvas.setSize.apply(this.canvas,arguments)};HM.prototype.canvasToDOM=function(){return this.canvas.canvasToDOM.apply(this.canvas,arguments)};HM.prototype.DOMtoCanvas=function(){return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)};
/**
 * Nodes can be in clusters. Clusters can also be in clusters. This function returns and array of
 * nodeIds showing where the node is.
 *
 * If any nodeId in the chain, especially the first passed in as a parameter, is not present in
 * the current nodes list, an empty array is returned.
 *
 * Example:
 * cluster 'A' contains cluster 'B',
 * cluster 'B' contains cluster 'C',
 * cluster 'C' contains node 'fred'.
 * `jsnetwork.clustering.findNode('fred')` will return `['A','B','C','fred']`.
 * @param {string|number} nodeId
 * @returns {Array}
 */HM.prototype.findNode=function(){return this.clustering.findNode.apply(this.clustering,arguments)};HM.prototype.isCluster=function(){return this.clustering.isCluster.apply(this.clustering,arguments)};HM.prototype.openCluster=function(){return this.clustering.openCluster.apply(this.clustering,arguments)};HM.prototype.cluster=function(){return this.clustering.cluster.apply(this.clustering,arguments)};HM.prototype.getNodesInCluster=function(){return this.clustering.getNodesInCluster.apply(this.clustering,arguments)};HM.prototype.clusterByConnection=function(){return this.clustering.clusterByConnection.apply(this.clustering,arguments)};HM.prototype.clusterByHubsize=function(){return this.clustering.clusterByHubsize.apply(this.clustering,arguments)};HM.prototype.updateClusteredNode=function(){return this.clustering.updateClusteredNode.apply(this.clustering,arguments)};HM.prototype.getClusteredEdges=function(){return this.clustering.getClusteredEdges.apply(this.clustering,arguments)};HM.prototype.getBaseEdge=function(){return this.clustering.getBaseEdge.apply(this.clustering,arguments)};HM.prototype.getBaseEdges=function(){return this.clustering.getBaseEdges.apply(this.clustering,arguments)};HM.prototype.updateEdge=function(){return this.clustering.updateEdge.apply(this.clustering,arguments)};
/**
 * This method will cluster all nodes with 1 edge with their respective connected node.
 * The options object is explained in full <a data-scroll="" data-options="{ &quot;easing&quot;: &quot;easeInCubic&quot; }" href="#optionsObject">below</a>.
 * @param {object} [options]
 * @returns {undefined}
 */HM.prototype.clusterOutliers=function(){return this.clustering.clusterOutliers.apply(this.clustering,arguments)};HM.prototype.getSeed=function(){return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)};HM.prototype.enableEditMode=function(){return this.manipulation.enableEditMode.apply(this.manipulation,arguments)};HM.prototype.disableEditMode=function(){return this.manipulation.disableEditMode.apply(this.manipulation,arguments)};HM.prototype.addNodeMode=function(){return this.manipulation.addNodeMode.apply(this.manipulation,arguments)};HM.prototype.editNode=function(){return this.manipulation.editNode.apply(this.manipulation,arguments)};HM.prototype.editNodeMode=function(){console.warn("Deprecated: Please use editNode instead of editNodeMode.");return this.manipulation.editNode.apply(this.manipulation,arguments)};HM.prototype.addEdgeMode=function(){return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)};HM.prototype.editEdgeMode=function(){return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)};HM.prototype.deleteSelected=function(){return this.manipulation.deleteSelected.apply(this.manipulation,arguments)};HM.prototype.getPositions=function(){return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)};HM.prototype.getPosition=function(){return this.nodesHandler.getPosition.apply(this.nodesHandler,arguments)};HM.prototype.storePositions=function(){return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)};HM.prototype.moveNode=function(){return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)};HM.prototype.getBoundingBox=function(){return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)};HM.prototype.getConnectedNodes=function(t){return this.body.nodes[t]!==void 0?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments)};HM.prototype.getConnectedEdges=function(){return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)};HM.prototype.startSimulation=function(){return this.physics.startSimulation.apply(this.physics,arguments)};HM.prototype.stopSimulation=function(){return this.physics.stopSimulation.apply(this.physics,arguments)};HM.prototype.stabilize=function(){return this.physics.stabilize.apply(this.physics,arguments)};HM.prototype.getSelection=function(){return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)};HM.prototype.setSelection=function(){return this.selectionHandler.setSelection.apply(this.selectionHandler,arguments)};HM.prototype.getSelectedNodes=function(){return this.selectionHandler.getSelectedNodeIds.apply(this.selectionHandler,arguments)};HM.prototype.getSelectedEdges=function(){return this.selectionHandler.getSelectedEdgeIds.apply(this.selectionHandler,arguments)};HM.prototype.getNodeAt=function(){const t=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments);return t!==void 0&&t.id!==void 0?t.id:t};HM.prototype.getEdgeAt=function(){const t=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments);return t!==void 0&&t.id!==void 0?t.id:t};HM.prototype.selectNodes=function(){return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)};HM.prototype.selectEdges=function(){return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)};HM.prototype.unselectAll=function(){this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments);this.selectionHandler.commitWithoutEmitting.apply(this.selectionHandler);this.redraw()};HM.prototype.redraw=function(){return this.renderer.redraw.apply(this.renderer,arguments)};HM.prototype.getScale=function(){return this.view.getScale.apply(this.view,arguments)};HM.prototype.getViewPosition=function(){return this.view.getViewPosition.apply(this.view,arguments)};HM.prototype.fit=function(){return this.view.fit.apply(this.view,arguments)};HM.prototype.moveTo=function(){return this.view.moveTo.apply(this.view,arguments)};HM.prototype.focus=function(){return this.view.focus.apply(this.view,arguments)};HM.prototype.releaseNode=function(){return this.view.releaseNode.apply(this.view,arguments)};HM.prototype.getOptionsFromConfigurator=function(){let t={};this.configurator&&(t=this.configurator.getOptions.apply(this.configurator));return t};const WM=py;export{HM as Network,Images as NetworkImages,gy as networkDOTParser,yy as networkGephiParser,LM as networkOptions,WM as parseDOTNetwork,my as parseGephiNetwork};

