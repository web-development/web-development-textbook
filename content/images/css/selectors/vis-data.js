// vis-data@8.0.3 downloaded from https://ga.jspm.io/npm:vis-data@8.0.3/peer/esm/vis-data.mjs

/**
 * vis-data
 * http://visjs.org/
 *
 * Manage unstructured data using DataSet. Add, update, and remove data, and listen for changes in the data.
 *
 * @version 8.0.3
 * @date    2025-09-10T16:22:00.613Z
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
 */
var r=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function t(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var e={exports:{}};var n={};var a;var i;function o(){if(i)return a;i=1;var t=function(r){return r&&r.Math===Math&&r};a=t(typeof globalThis=="object"&&globalThis)||t(typeof window=="object"&&window)||t(typeof self=="object"&&self)||t(typeof r=="object"&&r)||t(typeof a=="object"&&a)||function(){return this}()||Function("return this")();return a}var u;var v;function s(){if(v)return u;v=1;u=function(r){try{return!!r()}catch(r){return true}};return u}var f;var c;function l(){if(c)return f;c=1;var r=s();f=!r((function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}));return f}var h;var p;function d(){if(p)return h;p=1;var r=l();var t=Function.prototype;var e=t.apply;var n=t.call;h=typeof Reflect=="object"&&Reflect.apply||(r?n.bind(e):function(){return n.apply(e,arguments)});return h}var y;var g;function m(){if(g)return y;g=1;var r=l();var t=Function.prototype;var e=t.call;var n=r&&t.bind.bind(e,e);y=r?n:function(r){return function(){return e.apply(r,arguments)}};return y}var b;var _;function w(){if(_)return b;_=1;var r=m();var t=r({}.toString);var e=r("".slice);b=function(r){return e(t(r),8,-1)};return b}var S;var T;function O(){if(T)return S;T=1;var r=w();var t=m();S=function(e){if(r(e)==="Function")return t(e)};return S}var E;var D;function A(){if(D)return E;D=1;var r=typeof document=="object"&&document.all;E=typeof r=="undefined"&&r!==void 0?function(t){return typeof t=="function"||t===r}:function(r){return typeof r=="function"};return E}var P={};var I;var j;function x(){if(j)return I;j=1;var r=s();I=!r((function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}));return I}var k;var C;function M(){if(C)return k;C=1;var r=l();var t=Function.prototype.call;k=r?t.bind(t):function(){return t.apply(t,arguments)};return k}var N={};var R;function F(){if(R)return N;R=1;var r={}.propertyIsEnumerable;var t=Object.getOwnPropertyDescriptor;var e=t&&!r.call({1:2},1);N.f=e?function(r){var e=t(this,r);return!!e&&e.enumerable}:r;return N}var L;var z;function U(){if(z)return L;z=1;L=function(r,t){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:t}};return L}var q;var W;function Y(){if(W)return q;W=1;var r=m();var t=s();var e=w();var n=Object;var a=r("".split);q=t((function(){return!n("z").propertyIsEnumerable(0)}))?function(r){return e(r)==="String"?a(r,""):n(r)}:n;return q}var X;var V;function B(){if(V)return X;V=1;X=function(r){return r===null||r===void 0};return X}var G;var H;function J(){if(H)return G;H=1;var r=B();var t=TypeError;G=function(e){if(r(e))throw new t("Can't call method on "+e);return e};return G}var K;var Q;function Z(){if(Q)return K;Q=1;var r=Y();var t=J();K=function(e){return r(t(e))};return K}var $;var rr;function tr(){if(rr)return $;rr=1;var r=A();$=function(t){return typeof t=="object"?t!==null:r(t)};return $}var er;var nr;function ar(){if(nr)return er;nr=1;er={};return er}var ir;var or;function ur(){if(or)return ir;or=1;var r=ar();var t=o();var e=A();var n=function(r){return e(r)?r:void 0};ir=function(e,a){return arguments.length<2?n(r[e])||n(t[e]):r[e]&&r[e][a]||t[e]&&t[e][a]};return ir}var vr;var sr;function fr(){if(sr)return vr;sr=1;var r=m();vr=r({}.isPrototypeOf);return vr}var cr;var lr;function hr(){if(lr)return cr;lr=1;var r=o();var t=r.navigator;var e=t&&t.userAgent;cr=e?String(e):"";return cr}var pr;var dr;function yr(){if(dr)return pr;dr=1;var r=o();var t=hr();var e=r.process;var n=r.Deno;var a=e&&e.versions||n&&n.version;var i=a&&a.v8;var u,v;if(i){u=i.split(".");v=u[0]>0&&u[0]<4?1:+(u[0]+u[1])}if(!v&&t){u=t.match(/Edge\/(\d+)/);if(!u||u[1]>=74){u=t.match(/Chrome\/(\d+)/);u&&(v=+u[1])}}pr=v;return pr}var gr;var mr;function br(){if(mr)return gr;mr=1;var r=yr();var t=s();var e=o();var n=e.String;gr=!!Object.getOwnPropertySymbols&&!t((function(){var t=Symbol("symbol detection");return!n(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}));return gr}var _r;var wr;function Sr(){if(wr)return _r;wr=1;var r=br();_r=r&&!Symbol.sham&&typeof Symbol.iterator=="symbol";return _r}var Tr;var Or;function Er(){if(Or)return Tr;Or=1;var r=ur();var t=A();var e=fr();var n=Sr();var a=Object;Tr=n?function(r){return typeof r=="symbol"}:function(n){var i=r("Symbol");return t(i)&&e(i.prototype,a(n))};return Tr}var Dr;var Ar;function Pr(){if(Ar)return Dr;Ar=1;var r=String;Dr=function(t){try{return r(t)}catch(r){return"Object"}};return Dr}var Ir;var jr;function xr(){if(jr)return Ir;jr=1;var r=A();var t=Pr();var e=TypeError;Ir=function(n){if(r(n))return n;throw new e(t(n)+" is not a function")};return Ir}var kr;var Cr;function Mr(){if(Cr)return kr;Cr=1;var r=xr();var t=B();kr=function(e,n){var a=e[n];return t(a)?void 0:r(a)};return kr}var Nr;var Rr;function Fr(){if(Rr)return Nr;Rr=1;var r=M();var t=A();var e=tr();var n=TypeError;Nr=function(a,i){var o,u;if(i==="string"&&t(o=a.toString)&&!e(u=r(o,a)))return u;if(t(o=a.valueOf)&&!e(u=r(o,a)))return u;if(i!=="string"&&t(o=a.toString)&&!e(u=r(o,a)))return u;throw new n("Can't convert object to primitive value")};return Nr}var Lr={exports:{}};var zr;var Ur;function qr(){if(Ur)return zr;Ur=1;zr=true;return zr}var Wr;var Yr;function Xr(){if(Yr)return Wr;Yr=1;var r=o();var t=Object.defineProperty;Wr=function(e,n){try{t(r,e,{value:n,configurable:true,writable:true})}catch(t){r[e]=n}return n};return Wr}var Vr;function Br(){if(Vr)return Lr.exports;Vr=1;var r=qr();var t=o();var e=Xr();var n="__core-js_shared__";var a=Lr.exports=t[n]||e(n,{});(a.versions||(a.versions=[])).push({version:"3.44.0",mode:r?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",source:"https://github.com/zloirock/core-js"});return Lr.exports}var Gr;var Hr;function Jr(){if(Hr)return Gr;Hr=1;var r=Br();Gr=function(t,e){return r[t]||(r[t]=e||{})};return Gr}var Kr;var Qr;function Zr(){if(Qr)return Kr;Qr=1;var r=J();var t=Object;Kr=function(e){return t(r(e))};return Kr}var $r;var rt;function tt(){if(rt)return $r;rt=1;var r=m();var t=Zr();var e=r({}.hasOwnProperty);$r=Object.hasOwn||function(r,n){return e(t(r),n)};return $r}var et;var nt;function at(){if(nt)return et;nt=1;var r=m();var t=0;var e=Math.random();var n=r(1.1.toString);et=function(r){return"Symbol("+(r===void 0?"":r)+")_"+n(++t+e,36)};return et}var it;var ot;function ut(){if(ot)return it;ot=1;var r=o();var t=Jr();var e=tt();var n=at();var a=br();var i=Sr();var u=r.Symbol;var v=t("wks");var s=i?u.for||u:u&&u.withoutSetter||n;it=function(r){e(v,r)||(v[r]=a&&e(u,r)?u[r]:s("Symbol."+r));return v[r]};return it}var vt;var st;function ft(){if(st)return vt;st=1;var r=M();var t=tr();var e=Er();var n=Mr();var a=Fr();var i=ut();var o=TypeError;var u=i("toPrimitive");vt=function(i,v){if(!t(i)||e(i))return i;var s=n(i,u);var f;if(s){v===void 0&&(v="default");f=r(s,i,v);if(!t(f)||e(f))return f;throw new o("Can't convert object to primitive value")}v===void 0&&(v="number");return a(i,v)};return vt}var ct;var lt;function ht(){if(lt)return ct;lt=1;var r=ft();var t=Er();ct=function(e){var n=r(e,"string");return t(n)?n:n+""};return ct}var pt;var dt;function yt(){if(dt)return pt;dt=1;var r=o();var t=tr();var e=r.document;var n=t(e)&&t(e.createElement);pt=function(r){return n?e.createElement(r):{}};return pt}var gt;var mt;function bt(){if(mt)return gt;mt=1;var r=x();var t=s();var e=yt();gt=!r&&!t((function(){return Object.defineProperty(e("div"),"a",{get:function(){return 7}}).a!==7}));return gt}var _t;function wt(){if(_t)return P;_t=1;var r=x();var t=M();var e=F();var n=U();var a=Z();var i=ht();var o=tt();var u=bt();var v=Object.getOwnPropertyDescriptor;P.f=r?v:function(r,s){r=a(r);s=i(s);if(u)try{return v(r,s)}catch(r){}if(o(r,s))return n(!t(e.f,r,s),r[s])};return P}var St;var Tt;function Ot(){if(Tt)return St;Tt=1;var r=s();var t=A();var e=/#|\.prototype\./;var n=function(e,n){var v=i[a(e)];return v===u||v!==o&&(t(n)?r(n):!!n)};var a=n.normalize=function(r){return String(r).replace(e,".").toLowerCase()};var i=n.data={};var o=n.NATIVE="N";var u=n.POLYFILL="P";St=n;return St}var Et;var Dt;function At(){if(Dt)return Et;Dt=1;var r=O();var t=xr();var e=l();var n=r(r.bind);Et=function(r,a){t(r);return a===void 0?r:e?n(r,a):function(){return r.apply(a,arguments)}};return Et}var Pt={};var It;var jt;function xt(){if(jt)return It;jt=1;var r=x();var t=s();It=r&&t((function(){return Object.defineProperty((function(){}),"prototype",{value:42,writable:false}).prototype!==42}));return It}var kt;var Ct;function Mt(){if(Ct)return kt;Ct=1;var r=tr();var t=String;var e=TypeError;kt=function(n){if(r(n))return n;throw new e(t(n)+" is not an object")};return kt}var Nt;function Rt(){if(Nt)return Pt;Nt=1;var r=x();var t=bt();var e=xt();var n=Mt();var a=ht();var i=TypeError;var o=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var v="enumerable";var s="configurable";var f="writable";Pt.f=r?e?function(r,t,e){n(r);t=a(t);n(e);if(typeof r==="function"&&t==="prototype"&&"value"in e&&f in e&&!e[f]){var i=u(r,t);if(i&&i[f]){r[t]=e.value;e={configurable:s in e?e[s]:i[s],enumerable:v in e?e[v]:i[v],writable:false}}}return o(r,t,e)}:o:function(r,e,u){n(r);e=a(e);n(u);if(t)try{return o(r,e,u)}catch(r){}if("get"in u||"set"in u)throw new i("Accessors not supported");"value"in u&&(r[e]=u.value);return r};return Pt}var Ft;var Lt;function zt(){if(Lt)return Ft;Lt=1;var r=x();var t=Rt();var e=U();Ft=r?function(r,n,a){return t.f(r,n,e(1,a))}:function(r,t,e){r[t]=e;return r};return Ft}var Ut;var qt;function Wt(){if(qt)return Ut;qt=1;var r=o();var t=d();var e=O();var n=A();var a=wt().f;var i=Ot();var u=ar();var v=At();var s=zt();var f=tt();var c=function(r){var e=function(n,a,i){if(this instanceof e){switch(arguments.length){case 0:return new r;case 1:return new r(n);case 2:return new r(n,a)}return new r(n,a,i)}return t(r,this,arguments)};e.prototype=r.prototype;return e};Ut=function(t,o){var l=t.target;var h=t.global;var p=t.stat;var d=t.proto;var y=h?r:p?r[l]:r[l]&&r[l].prototype;var g=h?u:u[l]||s(u,l,{})[l];var m=g.prototype;var b,_,w;var S,T,O,E,D,A;for(S in o){b=i(h?S:l+(p?".":"#")+S,t.forced);_=!b&&y&&f(y,S);O=g[S];if(_)if(t.dontCallGetSet){A=a(y,S);E=A&&A.value}else E=y[S];T=_&&E?E:o[S];if(b||d||typeof O!=typeof T){D=t.bind&&_?v(T,r):t.wrap&&_?c(T):d&&n(T)?e(T):T;(t.sham||T&&T.sham||O&&O.sham)&&s(D,"sham",true);s(g,S,D);if(d){w=l+"Prototype";f(u,w)||s(u,w,{});s(u[w],S,T);t.real&&m&&(b||!m[S])&&s(m,S,T)}}}};return Ut}var Yt;function Xt(){if(Yt)return n;Yt=1;var r=Wt();var t=x();var e=Rt().f;r({target:"Object",stat:true,forced:Object.defineProperty!==e,sham:!t},{defineProperty:e});return n}var Vt;function Bt(){if(Vt)return e.exports;Vt=1;Xt();var r=ar();var t=r.Object;var n=e.exports=function(r,e,n){return t.defineProperty(r,e,n)};t.defineProperty.sham&&(n.sham=true);return e.exports}var Gt;var Ht;function Jt(){if(Ht)return Gt;Ht=1;var r=Bt();Gt=r;return Gt}var Kt;var Qt;function Zt(){if(Qt)return Kt;Qt=1;var r=Jt();Kt=r;return Kt}var $t;var re;function te(){if(re)return $t;re=1;var r=Zt();$t=r;return $t}var ee;var ne;function ae(){if(ne)return ee;ne=1;ee=te();return ee}var ie=ae();var oe=t(ie);var ue={};var ve;var se;function fe(){if(se)return ve;se=1;var r=w();ve=Array.isArray||function(t){return r(t)==="Array"};return ve}var ce;var le;function he(){if(le)return ce;le=1;var r=Math.ceil;var t=Math.floor;ce=Math.trunc||function(e){var n=+e;return(n>0?t:r)(n)};return ce}var pe;var de;function ye(){if(de)return pe;de=1;var r=he();pe=function(t){var e=+t;return e!==e||e===0?0:r(e)};return pe}var ge;var me;function be(){if(me)return ge;me=1;var r=ye();var t=Math.min;ge=function(e){var n=r(e);return n>0?t(n,9007199254740991):0};return ge}var _e;var we;function Se(){if(we)return _e;we=1;var r=be();_e=function(t){return r(t.length)};return _e}var Te;var Oe;function Ee(){if(Oe)return Te;Oe=1;var r=TypeError;var t=9007199254740991;Te=function(e){if(e>t)throw r("Maximum allowed index exceeded");return e};return Te}var De;var Ae;function Pe(){if(Ae)return De;Ae=1;var r=x();var t=Rt();var e=U();De=function(n,a,i){r?t.f(n,a,e(0,i)):n[a]=i};return De}var Ie;var je;function xe(){if(je)return Ie;je=1;var r=ut();var t=r("toStringTag");var e={};e[t]="z";Ie=String(e)==="[object z]";return Ie}var ke;var Ce;function Me(){if(Ce)return ke;Ce=1;var r=xe();var t=A();var e=w();var n=ut();var a=n("toStringTag");var i=Object;var o=e(function(){return arguments}())==="Arguments";var u=function(r,t){try{return r[t]}catch(r){}};ke=r?e:function(r){var n,v,s;return r===void 0?"Undefined":r===null?"Null":typeof(v=u(n=i(r),a))=="string"?v:o?e(n):(s=e(n))==="Object"&&t(n.callee)?"Arguments":s};return ke}var Ne;var Re;function Fe(){if(Re)return Ne;Re=1;var r=m();var t=A();var e=Br();var n=r(Function.toString);t(e.inspectSource)||(e.inspectSource=function(r){return n(r)});Ne=e.inspectSource;return Ne}var Le;var ze;function Ue(){if(ze)return Le;ze=1;var r=m();var t=s();var e=A();var n=Me();var a=ur();var i=Fe();var o=function(){};var u=a("Reflect","construct");var v=/^\s*(?:class|function)\b/;var f=r(v.exec);var c=!v.test(o);var l=function(r){if(!e(r))return false;try{u(o,[],r);return true}catch(r){return false}};var h=function(r){if(!e(r))return false;switch(n(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return false}try{return c||!!f(v,i(r))}catch(r){return true}};h.sham=true;Le=!u||t((function(){var r;return l(l.call)||!l(Object)||!l((function(){r=true}))||r}))?h:l;return Le}var qe;var We;function Ye(){if(We)return qe;We=1;var r=fe();var t=Ue();var e=tr();var n=ut();var a=n("species");var i=Array;qe=function(n){var o;if(r(n)){o=n.constructor;if(t(o)&&(o===i||r(o.prototype)))o=void 0;else if(e(o)){o=o[a];o===null&&(o=void 0)}}return o===void 0?i:o};return qe}var Xe;var Ve;function Be(){if(Ve)return Xe;Ve=1;var r=Ye();Xe=function(t,e){return new(r(t))(e===0?0:e)};return Xe}var Ge;var He;function Je(){if(He)return Ge;He=1;var r=s();var t=ut();var e=yr();var n=t("species");Ge=function(t){return e>=51||!r((function(){var r=[];var e=r.constructor={};e[n]=function(){return{foo:1}};return r[t](Boolean).foo!==1}))};return Ge}var Ke;function Qe(){if(Ke)return ue;Ke=1;var r=Wt();var t=s();var e=fe();var n=tr();var a=Zr();var i=Se();var o=Ee();var u=Pe();var v=Be();var f=Je();var c=ut();var l=yr();var h=c("isConcatSpreadable");var p=l>=51||!t((function(){var r=[];r[h]=false;return r.concat()[0]!==r}));var d=function(r){if(!n(r))return false;var t=r[h];return t!==void 0?!!t:e(r)};var y=!p||!f("concat");r({target:"Array",proto:true,arity:1,forced:y},{concat:function(r){var t=a(this);var e=v(t,0);var n=0;var s,f,c,l,h;for(s=-1,c=arguments.length;s<c;s++){h=s===-1?t:arguments[s];if(d(h)){l=i(h);o(n+l);for(f=0;f<l;f++,n++)f in h&&u(e,n,h[f])}else{o(n+1);u(e,n++,h)}}e.length=n;return e}});return ue}var Ze={};var $e={};var rn;var tn;function en(){if(tn)return rn;tn=1;var r=Me();var t=String;rn=function(e){if(r(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return t(e)};return rn}var nn={};var an;var on;function un(){if(on)return an;on=1;var r=ye();var t=Math.max;var e=Math.min;an=function(n,a){var i=r(n);return i<0?t(i+a,0):e(i,a)};return an}var vn;var sn;function fn(){if(sn)return vn;sn=1;var r=Z();var t=un();var e=Se();var n=function(n){return function(a,i,o){var u=r(a);var v=e(u);if(v===0)return!n&&-1;var s=t(o,v);var f;if(n&&i!==i)while(v>s){f=u[s++];if(f!==f)return true}else for(;v>s;s++)if((n||s in u)&&u[s]===i)return n||s||0;return!n&&-1}};vn={includes:n(true),indexOf:n(false)};return vn}var cn;var ln;function hn(){if(ln)return cn;ln=1;cn={};return cn}var pn;var dn;function yn(){if(dn)return pn;dn=1;var r=m();var t=tt();var e=Z();var n=fn().indexOf;var a=hn();var i=r([].push);pn=function(r,o){var u=e(r);var v=0;var s=[];var f;for(f in u)!t(a,f)&&t(u,f)&&i(s,f);while(o.length>v)t(u,f=o[v++])&&(~n(s,f)||i(s,f));return s};return pn}var gn;var mn;function bn(){if(mn)return gn;mn=1;gn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];return gn}var _n;var wn;function Sn(){if(wn)return _n;wn=1;var r=yn();var t=bn();_n=Object.keys||function(e){return r(e,t)};return _n}var Tn;function On(){if(Tn)return nn;Tn=1;var r=x();var t=xt();var e=Rt();var n=Mt();var a=Z();var i=Sn();nn.f=r&&!t?Object.defineProperties:function(r,t){n(r);var o=a(t);var u=i(t);var v=u.length;var s=0;var f;while(v>s)e.f(r,f=u[s++],o[f]);return r};return nn}var En;var Dn;function An(){if(Dn)return En;Dn=1;var r=ur();En=r("document","documentElement");return En}var Pn;var In;function jn(){if(In)return Pn;In=1;var r=Jr();var t=at();var e=r("keys");Pn=function(r){return e[r]||(e[r]=t(r))};return Pn}var xn;var kn;function Cn(){if(kn)return xn;kn=1;var r=Mt();var t=On();var e=bn();var n=hn();var a=An();var i=yt();var o=jn();var u=">";var v="<";var s="prototype";var f="script";var c=o("IE_PROTO");var l=function(){};var h=function(r){return v+f+u+r+v+"/"+f+u};var p=function(r){r.write(h(""));r.close();var t=r.parentWindow.Object;r=null;return t};var d=function(){var r=i("iframe");var t="java"+f+":";var e;r.style.display="none";a.appendChild(r);r.src=String(t);e=r.contentWindow.document;e.open();e.write(h("document.F=Object"));e.close();return e.F};var y;var g=function(){try{y=new ActiveXObject("htmlfile")}catch(r){}g=typeof document!="undefined"?document.domain&&y?p(y):d():p(y);var r=e.length;while(r--)delete g[s][e[r]];return g()};n[c]=true;xn=Object.create||function(e,n){var a;if(e!==null){l[s]=r(e);a=new l;l[s]=null;a[c]=e}else a=g();return n===void 0?a:t.f(a,n)};return xn}var Mn={};var Nn;function Rn(){if(Nn)return Mn;Nn=1;var r=yn();var t=bn();var e=t.concat("length","prototype");Mn.f=Object.getOwnPropertyNames||function(t){return r(t,e)};return Mn}var Fn={};var Ln;var zn;function Un(){if(zn)return Ln;zn=1;var r=m();Ln=r([].slice);return Ln}var qn;function Wn(){if(qn)return Fn;qn=1;var r=w();var t=Z();var e=Rn().f;var n=Un();var a=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var i=function(r){try{return e(r)}catch(r){return n(a)}};Fn.f=function(n){return a&&r(n)==="Window"?i(n):e(t(n))};return Fn}var Yn={};var Xn;function Vn(){if(Xn)return Yn;Xn=1;Yn.f=Object.getOwnPropertySymbols;return Yn}var Bn;var Gn;function Hn(){if(Gn)return Bn;Gn=1;var r=zt();Bn=function(t,e,n,a){a&&a.enumerable?t[e]=n:r(t,e,n);return t};return Bn}var Jn;var Kn;function Qn(){if(Kn)return Jn;Kn=1;var r=Rt();Jn=function(t,e,n){return r.f(t,e,n)};return Jn}var Zn={};var $n;function ra(){if($n)return Zn;$n=1;var r=ut();Zn.f=r;return Zn}var ta;var ea;function na(){if(ea)return ta;ea=1;var r=ar();var t=tt();var e=ra();var n=Rt().f;ta=function(a){var i=r.Symbol||(r.Symbol={});t(i,a)||n(i,a,{value:e.f(a)})};return ta}var aa;var ia;function oa(){if(ia)return aa;ia=1;var r=M();var t=ur();var e=ut();var n=Hn();aa=function(){var a=t("Symbol");var i=a&&a.prototype;var o=i&&i.valueOf;var u=e("toPrimitive");i&&!i[u]&&n(i,u,(function(t){return r(o,this)}),{arity:1})};return aa}var ua;var va;function sa(){if(va)return ua;va=1;var r=xe();var t=Me();ua=r?{}.toString:function(){return"[object "+t(this)+"]"};return ua}var fa;var ca;function la(){if(ca)return fa;ca=1;var r=xe();var t=Rt().f;var e=zt();var n=tt();var a=sa();var i=ut();var o=i("toStringTag");fa=function(i,u,v,s){var f=v?i:i&&i.prototype;if(f){n(f,o)||t(f,o,{configurable:true,value:u});s&&!r&&e(f,"toString",a)}};return fa}var ha;var pa;function da(){if(pa)return ha;pa=1;var r=o();var t=A();var e=r.WeakMap;ha=t(e)&&/native code/.test(String(e));return ha}var ya;var ga;function ma(){if(ga)return ya;ga=1;var r=da();var t=o();var e=tr();var n=zt();var a=tt();var i=Br();var u=jn();var v=hn();var s="Object already initialized";var f=t.TypeError;var c=t.WeakMap;var l,h,p;var d=function(r){return p(r)?h(r):l(r,{})};var y=function(r){return function(t){var n;if(!e(t)||(n=h(t)).type!==r)throw new f("Incompatible receiver, "+r+" required");return n}};if(r||i.state){var g=i.state||(i.state=new c);g.get=g.get;g.has=g.has;g.set=g.set;l=function(r,t){if(g.has(r))throw new f(s);t.facade=r;g.set(r,t);return t};h=function(r){return g.get(r)||{}};p=function(r){return g.has(r)}}else{var m=u("state");v[m]=true;l=function(r,t){if(a(r,m))throw new f(s);t.facade=r;n(r,m,t);return t};h=function(r){return a(r,m)?r[m]:{}};p=function(r){return a(r,m)}}ya={set:l,get:h,has:p,enforce:d,getterFor:y};return ya}var ba;var _a;function wa(){if(_a)return ba;_a=1;var r=At();var t=m();var e=Y();var n=Zr();var a=Se();var i=Be();var o=t([].push);var u=function(t){var u=t===1;var v=t===2;var s=t===3;var f=t===4;var c=t===6;var l=t===7;var h=t===5||c;return function(p,d,y,g){var m=n(p);var b=e(m);var _=a(b);var w=r(d,y);var S=0;var T=g||i;var O=u?T(p,_):v||l?T(p,0):void 0;var E,D;for(;_>S;S++)if(h||S in b){E=b[S];D=w(E,S,m);if(t)if(u)O[S]=D;else if(D)switch(t){case 3:return true;case 5:return E;case 6:return S;case 2:o(O,E)}else switch(t){case 4:return false;case 7:o(O,E)}}return c?-1:s||f?f:O}};ba={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)};return ba}var Sa;function Ta(){if(Sa)return $e;Sa=1;var r=Wt();var t=o();var e=M();var n=m();var a=qr();var i=x();var u=br();var v=s();var f=tt();var c=fr();var l=Mt();var h=Z();var p=ht();var d=en();var y=U();var g=Cn();var b=Sn();var _=Rn();var w=Wn();var S=Vn();var T=wt();var O=Rt();var E=On();var D=F();var A=Hn();var P=Qn();var I=Jr();var j=jn();var k=hn();var C=at();var N=ut();var R=ra();var L=na();var z=oa();var q=la();var W=ma();var Y=wa().forEach;var X=j("hidden");var V="Symbol";var B="prototype";var G=W.set;var H=W.getterFor(V);var J=Object[B];var K=t.Symbol;var Q=K&&K[B];var $=t.RangeError;var rr=t.TypeError;var tr=t.QObject;var er=T.f;var nr=O.f;var ar=w.f;var ir=D.f;var or=n([].push);var ur=I("symbols");var vr=I("op-symbols");var sr=I("wks");var cr=!tr||!tr[B]||!tr[B].findChild;var lr=function(r,t,e){var n=er(J,t);n&&delete J[t];nr(r,t,e);n&&r!==J&&nr(J,t,n)};var hr=i&&v((function(){return g(nr({},"a",{get:function(){return nr(this,"a",{value:7}).a}})).a!==7}))?lr:nr;var pr=function(r,t){var e=ur[r]=g(Q);G(e,{type:V,tag:r,description:t});i||(e.description=t);return e};var dr=function(r,t,e){r===J&&dr(vr,t,e);l(r);var n=p(t);l(e);if(f(ur,n)){if(e.enumerable){f(r,X)&&r[X][n]&&(r[X][n]=false);e=g(e,{enumerable:y(0,false)})}else{f(r,X)||nr(r,X,y(1,g(null)));r[X][n]=true}return hr(r,n,e)}return nr(r,n,e)};var yr=function(r,t){l(r);var n=h(t);var a=b(n).concat(Sr(n));Y(a,(function(t){i&&!e(mr,n,t)||dr(r,t,n[t])}));return r};var gr=function(r,t){return t===void 0?g(r):yr(g(r),t)};var mr=function(r){var t=p(r);var n=e(ir,this,t);return!(this===J&&f(ur,t)&&!f(vr,t))&&(!(n||!f(this,t)||!f(ur,t)||f(this,X)&&this[X][t])||n)};var _r=function(r,t){var e=h(r);var n=p(t);if(e!==J||!f(ur,n)||f(vr,n)){var a=er(e,n);!a||!f(ur,n)||f(e,X)&&e[X][n]||(a.enumerable=true);return a}};var wr=function(r){var t=ar(h(r));var e=[];Y(t,(function(r){f(ur,r)||f(k,r)||or(e,r)}));return e};var Sr=function(r){var t=r===J;var e=ar(t?vr:h(r));var n=[];Y(e,(function(r){!f(ur,r)||t&&!f(J,r)||or(n,ur[r])}));return n};if(!u){K=function(){if(c(Q,this))throw new rr("Symbol is not a constructor");var r=arguments.length&&arguments[0]!==void 0?d(arguments[0]):void 0;var n=C(r);var a=function(r){var i=this===void 0?t:this;i===J&&e(a,vr,r);f(i,X)&&f(i[X],n)&&(i[X][n]=false);var o=y(1,r);try{hr(i,n,o)}catch(r){if(!(r instanceof $))throw r;lr(i,n,o)}};i&&cr&&hr(J,n,{configurable:true,set:a});return pr(n,r)};Q=K[B];A(Q,"toString",(function(){return H(this).tag}));A(K,"withoutSetter",(function(r){return pr(C(r),r)}));D.f=mr;O.f=dr;E.f=yr;T.f=_r;_.f=w.f=wr;S.f=Sr;R.f=function(r){return pr(N(r),r)};if(i){P(Q,"description",{configurable:true,get:function(){return H(this).description}});a||A(J,"propertyIsEnumerable",mr,{unsafe:true})}}r({global:true,constructor:true,wrap:true,forced:!u,sham:!u},{Symbol:K});Y(b(sr),(function(r){L(r)}));r({target:V,stat:true,forced:!u},{useSetter:function(){cr=true},useSimple:function(){cr=false}});r({target:"Object",stat:true,forced:!u,sham:!i},{create:gr,defineProperty:dr,defineProperties:yr,getOwnPropertyDescriptor:_r});r({target:"Object",stat:true,forced:!u},{getOwnPropertyNames:wr});z();q(K,V);k[X]=true;return $e}var Oa={};var Ea;var Da;function Aa(){if(Da)return Ea;Da=1;var r=br();Ea=r&&!!Symbol.for&&!!Symbol.keyFor;return Ea}var Pa;function Ia(){if(Pa)return Oa;Pa=1;var r=Wt();var t=ur();var e=tt();var n=en();var a=Jr();var i=Aa();var o=a("string-to-symbol-registry");var u=a("symbol-to-string-registry");r({target:"Symbol",stat:true,forced:!i},{for:function(r){var a=n(r);if(e(o,a))return o[a];var i=t("Symbol")(a);o[a]=i;u[i]=a;return i}});return Oa}var ja={};var xa;function ka(){if(xa)return ja;xa=1;var r=Wt();var t=tt();var e=Er();var n=Pr();var a=Jr();var i=Aa();var o=a("symbol-to-string-registry");r({target:"Symbol",stat:true,forced:!i},{keyFor:function(r){if(!e(r))throw new TypeError(n(r)+" is not a symbol");if(t(o,r))return o[r]}});return ja}var Ca={};var Ma;var Na;function Ra(){if(Na)return Ma;Na=1;var r=m();var t=fe();var e=A();var n=w();var a=en();var i=r([].push);Ma=function(r){if(e(r))return r;if(t(r)){var o=r.length;var u=[];for(var v=0;v<o;v++){var s=r[v];typeof s=="string"?i(u,s):typeof s!="number"&&n(s)!=="Number"&&n(s)!=="String"||i(u,a(s))}var f=u.length;var c=true;return function(r,e){if(c){c=false;return e}if(t(this))return e;for(var n=0;n<f;n++)if(u[n]===r)return e}}};return Ma}var Fa;function La(){if(Fa)return Ca;Fa=1;var r=Wt();var t=ur();var e=d();var n=M();var a=m();var i=s();var o=A();var u=Er();var v=Un();var f=Ra();var c=br();var l=String;var h=t("JSON","stringify");var p=a(/./.exec);var y=a("".charAt);var g=a("".charCodeAt);var b=a("".replace);var _=a(1.1.toString);var w=/[\uD800-\uDFFF]/g;var S=/^[\uD800-\uDBFF]$/;var T=/^[\uDC00-\uDFFF]$/;var O=!c||i((function(){var r=t("Symbol")("stringify detection");return h([r])!=="[null]"||h({a:r})!=="{}"||h(Object(r))!=="{}"}));var E=i((function(){return h("\udf06\ud834")!=='"\\udf06\\ud834"'||h("\udead")!=='"\\udead"'}));var D=function(r,t){var a=v(arguments);var i=f(t);if(o(i)||r!==void 0&&!u(r)){a[1]=function(r,t){o(i)&&(t=n(i,this,l(r),t));if(!u(t))return t};return e(h,null,a)}};var P=function(r,t,e){var n=y(e,t-1);var a=y(e,t+1);return p(S,r)&&!p(T,a)||p(T,r)&&!p(S,n)?"\\u"+_(g(r,0),16):r};h&&r({target:"JSON",stat:true,arity:3,forced:O||E},{stringify:function(r,t,n){var a=v(arguments);var i=e(O?D:h,null,a);return E&&typeof i=="string"?b(i,w,P):i}});return Ca}var za={};var Ua;function qa(){if(Ua)return za;Ua=1;var r=Wt();var t=br();var e=s();var n=Vn();var a=Zr();var i=!t||e((function(){n.f(1)}));r({target:"Object",stat:true,forced:i},{getOwnPropertySymbols:function(r){var t=n.f;return t?t(a(r)):[]}});return za}var Wa;function Ya(){if(Wa)return Ze;Wa=1;Ta();Ia();ka();La();qa();return Ze}var Xa={};var Va;function Ba(){if(Va)return Xa;Va=1;var r=na();r("asyncDispose");return Xa}var Ga={};var Ha;function Ja(){if(Ha)return Ga;Ha=1;var r=na();r("asyncIterator");return Ga}var Ka={};var Qa;function Za(){if(Qa)return Ka;Qa=1;var r=na();r("dispose");return Ka}var $a={};var ri;function ti(){if(ri)return $a;ri=1;var r=na();r("hasInstance");return $a}var ei={};var ni;function ai(){if(ni)return ei;ni=1;var r=na();r("isConcatSpreadable");return ei}var ii={};var oi;function ui(){if(oi)return ii;oi=1;var r=na();r("iterator");return ii}var vi={};var si;function fi(){if(si)return vi;si=1;var r=na();r("match");return vi}var ci={};var li;function hi(){if(li)return ci;li=1;var r=na();r("matchAll");return ci}var pi={};var di;function yi(){if(di)return pi;di=1;var r=na();r("replace");return pi}var gi={};var mi;function bi(){if(mi)return gi;mi=1;var r=na();r("search");return gi}var _i={};var wi;function Si(){if(wi)return _i;wi=1;var r=na();r("species");return _i}var Ti={};var Oi;function Ei(){if(Oi)return Ti;Oi=1;var r=na();r("split");return Ti}var Di={};var Ai;function Pi(){if(Ai)return Di;Ai=1;var r=na();var t=oa();r("toPrimitive");t();return Di}var Ii={};var ji;function xi(){if(ji)return Ii;ji=1;var r=ur();var t=na();var e=la();t("toStringTag");e(r("Symbol"),"Symbol");return Ii}var ki={};var Ci;function Mi(){if(Ci)return ki;Ci=1;var r=na();r("unscopables");return ki}var Ni={};var Ri;function Fi(){if(Ri)return Ni;Ri=1;var r=o();var t=la();t(r.JSON,"JSON",true);return Ni}var Li;var zi;function Ui(){if(zi)return Li;zi=1;Qe();Ya();Ba();Ja();Za();ti();ai();ui();fi();hi();yi();bi();Si();Ei();Pi();xi();Mi();Fi();var r=ar();Li=r.Symbol;return Li}var qi={};var Wi;var Yi;function Xi(){if(Yi)return Wi;Yi=1;Wi=function(){};return Wi}var Vi;var Bi;function Gi(){if(Bi)return Vi;Bi=1;Vi={};return Vi}var Hi;var Ji;function Ki(){if(Ji)return Hi;Ji=1;var r=x();var t=tt();var e=Function.prototype;var n=r&&Object.getOwnPropertyDescriptor;var a=t(e,"name");var i=a&&function(){}.name==="something";var o=a&&(!r||r&&n(e,"name").configurable);Hi={EXISTS:a,PROPER:i,CONFIGURABLE:o};return Hi}var Qi;var Zi;function $i(){if(Zi)return Qi;Zi=1;var r=s();Qi=!r((function(){function r(){}r.prototype.constructor=null;return Object.getPrototypeOf(new r)!==r.prototype}));return Qi}var ro;var to;function eo(){if(to)return ro;to=1;var r=tt();var t=A();var e=Zr();var n=jn();var a=$i();var i=n("IE_PROTO");var o=Object;var u=o.prototype;ro=a?o.getPrototypeOf:function(n){var a=e(n);if(r(a,i))return a[i];var v=a.constructor;return t(v)&&a instanceof v?v.prototype:a instanceof o?u:null};return ro}var no;var ao;function io(){if(ao)return no;ao=1;var r=s();var t=A();var e=tr();var n=Cn();var a=eo();var i=Hn();var o=ut();var u=qr();var v=o("iterator");var f=false;var c,l,h;if([].keys){h=[].keys();if("next"in h){l=a(a(h));l!==Object.prototype&&(c=l)}else f=true}var p=!e(c)||r((function(){var r={};return c[v].call(r)!==r}));p?c={}:u&&(c=n(c));t(c[v])||i(c,v,(function(){return this}));no={IteratorPrototype:c,BUGGY_SAFARI_ITERATORS:f};return no}var oo;var uo;function vo(){if(uo)return oo;uo=1;var r=io().IteratorPrototype;var t=Cn();var e=U();var n=la();var a=Gi();var i=function(){return this};oo=function(o,u,v,s){var f=u+" Iterator";o.prototype=t(r,{next:e(+!s,v)});n(o,f,false,true);a[f]=i;return o};return oo}var so;var fo;function co(){if(fo)return so;fo=1;var r=m();var t=xr();so=function(e,n,a){try{return r(t(Object.getOwnPropertyDescriptor(e,n)[a]))}catch(r){}};return so}var lo;var ho;function po(){if(ho)return lo;ho=1;var r=tr();lo=function(t){return r(t)||t===null};return lo}var yo;var go;function mo(){if(go)return yo;go=1;var r=po();var t=String;var e=TypeError;yo=function(n){if(r(n))return n;throw new e("Can't set "+t(n)+" as a prototype")};return yo}var bo;var _o;function wo(){if(_o)return bo;_o=1;var r=co();var t=tr();var e=J();var n=mo();bo=Object.setPrototypeOf||("__proto__"in{}?function(){var a=false;var i={};var o;try{o=r(Object.prototype,"__proto__","set");o(i,[]);a=i instanceof Array}catch(r){}return function(r,i){e(r);n(i);if(!t(r))return r;a?o(r,i):r.__proto__=i;return r}}():void 0);return bo}var So;var To;function Oo(){if(To)return So;To=1;var r=Wt();var t=M();var e=qr();var n=Ki();var a=A();var i=vo();var o=eo();var u=wo();var v=la();var s=zt();var f=Hn();var c=ut();var l=Gi();var h=io();var p=n.PROPER;var d=n.CONFIGURABLE;var y=h.IteratorPrototype;var g=h.BUGGY_SAFARI_ITERATORS;var m=c("iterator");var b="keys";var _="values";var w="entries";var S=function(){return this};So=function(n,c,h,T,O,E,D){i(h,c,T);var A=function(r){if(r===O&&k)return k;if(!g&&r&&r in j)return j[r];switch(r){case b:return function(){return new h(this,r)};case _:return function(){return new h(this,r)};case w:return function(){return new h(this,r)}}return function(){return new h(this)}};var P=c+" Iterator";var I=false;var j=n.prototype;var x=j[m]||j["@@iterator"]||O&&j[O];var k=!g&&x||A(O);var C=c==="Array"&&j.entries||x;var M,N,R;if(C){M=o(C.call(new n));if(M!==Object.prototype&&M.next){e||o(M)===y||(u?u(M,y):a(M[m])||f(M,m,S));v(M,P,true,true);e&&(l[P]=S)}}if(p&&O===_&&x&&x.name!==_)if(!e&&d)s(j,"name",_);else{I=true;k=function(){return t(x,this)}}if(O){N={values:A(_),keys:E?k:A(b),entries:A(w)};if(D)for(R in N)(g||I||!(R in j))&&f(j,R,N[R]);else r({target:c,proto:true,forced:g||I},N)}e&&!D||j[m]===k||f(j,m,k,{name:O});l[c]=k;return N};return So}var Eo;var Do;function Ao(){if(Do)return Eo;Do=1;Eo=function(r,t){return{value:r,done:t}};return Eo}var Po;var Io;function jo(){if(Io)return Po;Io=1;var r=Z();var t=Xi();var e=Gi();var n=ma();var a=Rt().f;var i=Oo();var o=Ao();var u=qr();var v=x();var s="Array Iterator";var f=n.set;var c=n.getterFor(s);Po=i(Array,"Array",(function(t,e){f(this,{type:s,target:r(t),index:0,kind:e})}),(function(){var r=c(this);var t=r.target;var e=r.index++;if(!t||e>=t.length){r.target=null;return o(void 0,true)}switch(r.kind){case"keys":return o(e,false);case"values":return o(t[e],false)}return o([e,t[e]],false)}),"values");var l=e.Arguments=e.Array;t("keys");t("values");t("entries");if(!u&&v&&l.name!=="values")try{a(l,"name",{value:"values"})}catch(r){}return Po}var xo;var ko;function Co(){if(ko)return xo;ko=1;xo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};return xo}var Mo;function No(){if(Mo)return qi;Mo=1;jo();var r=Co();var t=o();var e=la();var n=Gi();for(var a in r){e(t[a],a);n[a]=n.Array}return qi}var Ro;var Fo;function Lo(){if(Fo)return Ro;Fo=1;var r=Ui();No();Ro=r;return Ro}var zo={};var Uo;function qo(){if(Uo)return zo;Uo=1;var r=ut();var t=Rt().f;var e=r("metadata");var n=Function.prototype;n[e]===void 0&&t(n,e,{value:null});return zo}var Wo={};var Yo;function Xo(){if(Yo)return Wo;Yo=1;Ba();return Wo}var Vo={};var Bo;function Go(){if(Bo)return Vo;Bo=1;Za();return Vo}var Ho={};var Jo;function Ko(){if(Jo)return Ho;Jo=1;var r=na();r("metadata");return Ho}var Qo;var Zo;function $o(){if(Zo)return Qo;Zo=1;var r=Lo();qo();Xo();Go();Ko();Qo=r;return Qo}var ru={};var tu;var eu;function nu(){if(eu)return tu;eu=1;var r=ur();var t=m();var e=r("Symbol");var n=e.keyFor;var a=t(e.prototype.valueOf);tu=e.isRegisteredSymbol||function(r){try{return n(a(r))!==void 0}catch(r){return false}};return tu}var au;function iu(){if(au)return ru;au=1;var r=Wt();var t=nu();r({target:"Symbol",stat:true},{isRegisteredSymbol:t});return ru}var ou={};var uu;var vu;function su(){if(vu)return uu;vu=1;var r=Jr();var t=ur();var e=m();var n=Er();var a=ut();var i=t("Symbol");var o=i.isWellKnownSymbol;var u=t("Object","getOwnPropertyNames");var v=e(i.prototype.valueOf);var s=r("wks");for(var f=0,c=u(i),l=c.length;f<l;f++)try{var h=c[f];n(i[h])&&a(h)}catch(r){}uu=function(r){if(o&&o(r))return true;try{var t=v(r);for(var e=0,n=u(s),a=n.length;e<a;e++)if(s[n[e]]==t)return true}catch(r){}return false};return uu}var fu;function cu(){if(fu)return ou;fu=1;var r=Wt();var t=su();r({target:"Symbol",stat:true,forced:true},{isWellKnownSymbol:t});return ou}var lu={};var hu;function pu(){if(hu)return lu;hu=1;var r=na();r("customMatcher");return lu}var du={};var yu;function gu(){if(yu)return du;yu=1;var r=na();r("observable");return du}var mu={};var bu;function _u(){if(bu)return mu;bu=1;var r=Wt();var t=nu();r({target:"Symbol",stat:true,name:"isRegisteredSymbol"},{isRegistered:t});return mu}var wu={};var Su;function Tu(){if(Su)return wu;Su=1;var r=Wt();var t=su();r({target:"Symbol",stat:true,name:"isWellKnownSymbol",forced:true},{isWellKnown:t});return wu}var Ou={};var Eu;function Du(){if(Eu)return Ou;Eu=1;var r=na();r("matcher");return Ou}var Au={};var Pu;function Iu(){if(Pu)return Au;Pu=1;var r=na();r("metadataKey");return Au}var ju={};var xu;function ku(){if(xu)return ju;xu=1;var r=na();r("patternMatch");return ju}var Cu={};var Mu;function Nu(){if(Mu)return Cu;Mu=1;var r=na();r("replaceAll");return Cu}var Ru;var Fu;function Lu(){if(Fu)return Ru;Fu=1;var r=$o();iu();cu();pu();gu();_u();Tu();Du();Iu();ku();Nu();Ru=r;return Ru}var zu;var Uu;function qu(){if(Uu)return zu;Uu=1;zu=Lu();return zu}var Wu=qu();var Yu=t(Wu);var Xu={};var Vu;var Bu;function Gu(){if(Bu)return Vu;Bu=1;var r=m();var t=ye();var e=en();var n=J();var a=r("".charAt);var i=r("".charCodeAt);var o=r("".slice);var u=function(r){return function(u,v){var s=e(n(u));var f=t(v);var c=s.length;var l,h;if(f<0||f>=c)return r?"":void 0;l=i(s,f);return l<55296||l>56319||f+1===c||(h=i(s,f+1))<56320||h>57343?r?a(s,f):l:r?o(s,f,f+2):h-56320+(l-55296<<10)+65536}};Vu={codeAt:u(false),charAt:u(true)};return Vu}var Hu;function Ju(){if(Hu)return Xu;Hu=1;var r=Gu().charAt;var t=en();var e=ma();var n=Oo();var a=Ao();var i="String Iterator";var o=e.set;var u=e.getterFor(i);n(String,"String",(function(r){o(this,{type:i,string:t(r),index:0})}),(function(){var t=u(this);var e=t.string;var n=t.index;var i;if(n>=e.length)return a(void 0,true);i=r(e,n);t.index+=i.length;return a(i,false)}));return Xu}var Ku;var Qu;function Zu(){if(Qu)return Ku;Qu=1;jo();Ju();ui();var r=ra();Ku=r.f("iterator");return Ku}var $u;var rv;function tv(){if(rv)return $u;rv=1;var r=Zu();No();$u=r;return $u}var ev;var nv;function av(){if(nv)return ev;nv=1;var r=tv();ev=r;return ev}var iv;var ov;function uv(){if(ov)return iv;ov=1;var r=av();iv=r;return iv}var vv;var sv;function fv(){if(sv)return vv;sv=1;vv=uv();return vv}var cv=fv();var lv=t(cv);function hv(r){return hv="function"==typeof Yu&&"symbol"==typeof lv?function(r){return typeof r}:function(r){return r&&"function"==typeof Yu&&r.constructor===Yu&&r!==Yu.prototype?"symbol":typeof r},hv(r)}var pv;var dv;function yv(){if(dv)return pv;dv=1;Pi();var r=ra();pv=r.f("toPrimitive");return pv}var gv;var mv;function bv(){if(mv)return gv;mv=1;var r=yv();gv=r;return gv}var _v;var wv;function Sv(){if(wv)return _v;wv=1;var r=bv();_v=r;return _v}var Tv;var Ov;function Ev(){if(Ov)return Tv;Ov=1;var r=Sv();Tv=r;return Tv}var Dv;var Av;function Pv(){if(Av)return Dv;Av=1;Dv=Ev();return Dv}var Iv=Pv();var jv=t(Iv);function xv(r,t){if("object"!=hv(r)||!r)return r;var e=r[jv];if(void 0!==e){var n=e.call(r,t);if("object"!=hv(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}function kv(r){var t=xv(r,"string");return"symbol"==hv(t)?t:t+""}function Cv(r,t,e){return(t=kv(t))in r?oe(r,t,{value:e,enumerable:true,configurable:true,writable:true}):r[t]=e,r}var Mv={};var Nv;var Rv;function Fv(){if(Rv)return Nv;Rv=1;var r=m();var t=xr();var e=tr();var n=tt();var a=Un();var i=l();var o=Function;var u=r([].concat);var v=r([].join);var s={};var f=function(r,t,e){if(!n(s,t)){var a=[];var i=0;for(;i<t;i++)a[i]="a["+i+"]";s[t]=o("C,a","return new C("+v(a,",")+")")}return s[t](r,e)};Nv=i?o.bind:function(r){var n=t(this);var i=n.prototype;var o=a(arguments,1);var v=function(){var t=u(o,a(arguments));return this instanceof v?f(n,t.length,t):n.apply(r,t)};e(i)&&(v.prototype=i);return v};return Nv}var Lv;function zv(){if(Lv)return Mv;Lv=1;var r=Wt();var t=Fv();r({target:"Function",proto:true,forced:Function.bind!==t},{bind:t});return Mv}var Uv;var qv;function Wv(){if(qv)return Uv;qv=1;var r=o();var t=ar();Uv=function(e,n){var a=t[e+"Prototype"];var i=a&&a[n];if(i)return i;var o=r[e];var u=o&&o.prototype;return u&&u[n]};return Uv}var Yv;var Xv;function Vv(){if(Xv)return Yv;Xv=1;zv();var r=Wv();Yv=r("Function","bind");return Yv}var Bv;var Gv;function Hv(){if(Gv)return Bv;Gv=1;var r=fr();var t=Vv();var e=Function.prototype;Bv=function(n){var a=n.bind;return n===e||r(e,n)&&a===e.bind?t:a};return Bv}var Jv;var Kv;function Qv(){if(Kv)return Jv;Kv=1;var r=Hv();Jv=r;return Jv}var Zv;var $v;function rs(){if($v)return Zv;$v=1;Zv=Qv();return Zv}var ts=rs();var es=t(ts);var ns={};var as;var is;function os(){if(is)return as;is=1;var r=xr();var t=Zr();var e=Y();var n=Se();var a=TypeError;var i="Reduce of empty array with no initial value";var o=function(o){return function(u,v,s,f){var c=t(u);var l=e(c);var h=n(c);r(v);if(h===0&&s<2)throw new a(i);var p=o?h-1:0;var d=o?-1:1;if(s<2)while(true){if(p in l){f=l[p];p+=d;break}p+=d;if(o?p<0:h<=p)throw new a(i)}for(;o?p>=0:h>p;p+=d)p in l&&(f=v(f,l[p],p,c));return f}};as={left:o(false),right:o(true)};return as}var us;var vs;function ss(){if(vs)return us;vs=1;var r=s();us=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))};return us}var fs;var cs;function ls(){if(cs)return fs;cs=1;var r=o();var t=hr();var e=w();var n=function(r){return t.slice(0,r.length)===r};fs=function(){return n("Bun/")?"BUN":n("Cloudflare-Workers")?"CLOUDFLARE":n("Deno/")?"DENO":n("Node.js/")?"NODE":r.Bun&&typeof Bun.version=="string"?"BUN":r.Deno&&typeof Deno.version=="object"?"DENO":e(r.process)==="process"?"NODE":r.window&&r.document?"BROWSER":"REST"}();return fs}var hs;var ps;function ds(){if(ps)return hs;ps=1;var r=ls();hs=r==="NODE";return hs}var ys;function gs(){if(ys)return ns;ys=1;var r=Wt();var t=os().left;var e=ss();var n=yr();var a=ds();var i=!a&&n>79&&n<83;var o=i||!e("reduce");r({target:"Array",proto:true,forced:o},{reduce:function(r){var e=arguments.length;return t(this,r,e,e>1?arguments[1]:void 0)}});return ns}var ms;var bs;function _s(){if(bs)return ms;bs=1;gs();var r=Wv();ms=r("Array","reduce");return ms}var ws;var Ss;function Ts(){if(Ss)return ws;Ss=1;var r=fr();var t=_s();var e=Array.prototype;ws=function(n){var a=n.reduce;return n===e||r(e,n)&&a===e.reduce?t:a};return ws}var Os;var Es;function Ds(){if(Es)return Os;Es=1;var r=Ts();Os=r;return Os}var As;var Ps;function Is(){if(Ps)return As;Ps=1;As=Ds();return As}var js=Is();var xs=t(js);var ks={};var Cs;function Ms(){if(Cs)return ks;Cs=1;var r=Wt();var t=wa().filter;var e=Je();var n=e("filter");r({target:"Array",proto:true,forced:!n},{filter:function(r){return t(this,r,arguments.length>1?arguments[1]:void 0)}});return ks}var Ns;var Rs;function Fs(){if(Rs)return Ns;Rs=1;Ms();var r=Wv();Ns=r("Array","filter");return Ns}var Ls;var zs;function Us(){if(zs)return Ls;zs=1;var r=fr();var t=Fs();var e=Array.prototype;Ls=function(n){var a=n.filter;return n===e||r(e,n)&&a===e.filter?t:a};return Ls}var qs;var Ws;function Ys(){if(Ws)return qs;Ws=1;var r=Us();qs=r;return qs}var Xs;var Vs;function Bs(){if(Vs)return Xs;Vs=1;Xs=Ys();return Xs}var Gs=Bs();var Hs=t(Gs);var Js={};var Ks;function Qs(){if(Ks)return Js;Ks=1;var r=Wt();var t=wa().map;var e=Je();var n=e("map");r({target:"Array",proto:true,forced:!n},{map:function(r){return t(this,r,arguments.length>1?arguments[1]:void 0)}});return Js}var Zs;var $s;function rf(){if($s)return Zs;$s=1;Qs();var r=Wv();Zs=r("Array","map");return Zs}var tf;var ef;function nf(){if(ef)return tf;ef=1;var r=fr();var t=rf();var e=Array.prototype;tf=function(n){var a=n.map;return n===e||r(e,n)&&a===e.map?t:a};return tf}var af;var of;function uf(){if(of)return af;of=1;var r=nf();af=r;return af}var vf;var sf;function ff(){if(sf)return vf;sf=1;vf=uf();return vf}var cf=ff();var lf=t(cf);var hf={};var pf;var df;function yf(){if(df)return pf;df=1;var r=fe();var t=Se();var e=Ee();var n=At();var a=function(i,o,u,v,s,f,c,l){var h=s;var p=0;var d=!!c&&n(c,l);var y,g;while(p<v){if(p in u){y=d?d(u[p],p,o):u[p];if(f>0&&r(y)){g=t(y);h=a(i,o,y,g,h,f-1)-1}else{e(h+1);i[h]=y}h++}p++}return h};pf=a;return pf}var gf;function mf(){if(gf)return hf;gf=1;var r=Wt();var t=yf();var e=xr();var n=Zr();var a=Se();var i=Be();r({target:"Array",proto:true},{flatMap:function(r){var o=n(this);var u=a(o);var v;e(r);v=i(o,0);v.length=t(v,o,o,u,0,1,r,arguments.length>1?arguments[1]:void 0);return v}});return hf}var bf={};var _f;function wf(){if(_f)return bf;_f=1;var r=Xi();r("flatMap");return bf}var Sf;var Tf;function Of(){if(Tf)return Sf;Tf=1;mf();wf();var r=Wv();Sf=r("Array","flatMap");return Sf}var Ef;var Df;function Af(){if(Df)return Ef;Df=1;var r=fr();var t=Of();var e=Array.prototype;Ef=function(n){var a=n.flatMap;return n===e||r(e,n)&&a===e.flatMap?t:a};return Ef}var Pf;var If;function jf(){if(If)return Pf;If=1;var r=Af();Pf=r;return Pf}var xf;var kf;function Cf(){if(kf)return xf;kf=1;xf=jf();return xf}var Mf=Cf();var Nf=t(Mf);
/**
 * Create new data pipe.
 * @param from - The source data set or data view.
 * @remarks
 * Example usage:
 * ```typescript
 * interface AppItem {
 *   whoami: string;
 *   appData: unknown;
 *   visData: VisItem;
 * }
 * interface VisItem {
 *   id: number;
 *   label: string;
 *   color: string;
 *   x: number;
 *   y: number;
 * }
 *
 * const ds1 = new DataSet<AppItem, "whoami">([], { fieldId: "whoami" });
 * const ds2 = new DataSet<VisItem, "id">();
 *
 * const pipe = createNewDataPipeFrom(ds1)
 *   .filter((item): boolean => item.enabled === true)
 *   .map<VisItem, "id">((item): VisItem => item.visData)
 *   .to(ds2);
 *
 * pipe.start();
 * ```
 * @returns A factory whose methods can be used to configure the pipe.
 */function Rf(r){return new DataPipeUnderConstruction(r)}
/**
 * Internal implementation of the pipe. This should be accessible only through
 * `createNewDataPipeFrom` from the outside.
 * @typeParam SI - Source item type.
 * @typeParam SP - Source item type's id property name.
 * @typeParam TI - Target item type.
 * @typeParam TP - Target item type's id property name.
 */class SimpleDataPipe{
/**
   * Create a new data pipe.
   * @param source - The data set or data view that will be observed.
   * @param transformers - An array of transforming functions to be used to
   * filter or transform the items in the pipe.
   * @param target - The data set or data view that will receive the items.
   */
constructor(r,t,e){var n,a,i;Cv(this,"_listeners",{add:es(n=this._add).call(n,this),remove:es(a=this._remove).call(a,this),update:es(i=this._update).call(i,this)});this._source=r;this._transformers=t;this._target=e}all(){this._target.update(this._transformItems(this._source.get()));return this}start(){this._source.on("add",this._listeners.add);this._source.on("remove",this._listeners.remove);this._source.on("update",this._listeners.update);return this}stop(){this._source.off("add",this._listeners.add);this._source.off("remove",this._listeners.remove);this._source.off("update",this._listeners.update);return this}
/**
   * Apply the transformers to the items.
   * @param items - The items to be transformed.
   * @returns The transformed items.
   */_transformItems(r){var t;return xs(t=this._transformers).call(t,((r,t)=>t(r)),r)}
/**
   * Handle an add event.
   * @param _name - Ignored.
   * @param payload - The payload containing the ids of the added items.
   */_add(r,t){t!=null&&this._target.add(this._transformItems(this._source.get(t.items)))}
/**
   * Handle an update event.
   * @param _name - Ignored.
   * @param payload - The payload containing the ids of the updated items.
   */_update(r,t){t!=null&&this._target.update(this._transformItems(this._source.get(t.items)))}
/**
   * Handle a remove event.
   * @param _name - Ignored.
   * @param payload - The payload containing the data of the removed items.
   */_remove(r,t){t!=null&&this._target.remove(this._transformItems(t.oldData))}}
/**
 * Internal implementation of the pipe factory. This should be accessible
 * only through `createNewDataPipeFrom` from the outside.
 * @typeParam TI - Target item type.
 * @typeParam TP - Target item type's id property name.
 */class DataPipeUnderConstruction{
/**
   * Create a new data pipe factory. This is an internal constructor that
   * should never be called from outside of this file.
   * @param source - The source data set or data view for this pipe.
   */
constructor(r){Cv(this,"_transformers",[]);this._source=r}
/**
   * Filter the items.
   * @param callback - A filtering function that returns true if given item
   * should be piped and false if not.
   * @returns This factory for further configuration.
   */filter(r){this._transformers.push((t=>Hs(t).call(t,r)));return this}
/**
   * Map each source item to a new type.
   * @param callback - A mapping function that takes a source item and returns
   * corresponding mapped item.
   * @typeParam TI - Target item type.
   * @typeParam TP - Target item type's id property name.
   * @returns This factory for further configuration.
   */map(r){this._transformers.push((t=>lf(t).call(t,r)));return this}
/**
   * Map each source item to zero or more items of a new type.
   * @param callback - A mapping function that takes a source item and returns
   * an array of corresponding mapped items.
   * @typeParam TI - Target item type.
   * @typeParam TP - Target item type's id property name.
   * @returns This factory for further configuration.
   */flatMap(r){this._transformers.push((t=>Nf(t).call(t,r)));return this}
/**
   * Connect this pipe to given data set.
   * @param target - The data set that will receive the items from this pipe.
   * @returns The pipe connected between given data sets and performing
   * configured transformation on the processed items.
   */to(r){return new SimpleDataPipe(this._source,this._transformers,r)}}var Ff;var Lf;function zf(){if(Lf)return Ff;Lf=1;Ff=Lo();return Ff}var Uf=zf();var qf=t(Uf);var Wf={};var Yf;function Xf(){if(Yf)return Wf;Yf=1;var r=Wt();var t=fe();var e=Ue();var n=tr();var a=un();var i=Se();var o=Z();var u=Pe();var v=ut();var s=Je();var f=Un();var c=s("slice");var l=v("species");var h=Array;var p=Math.max;r({target:"Array",proto:true,forced:!c},{slice:function(r,v){var s=o(this);var c=i(s);var d=a(r,c);var y=a(v===void 0?c:v,c);var g,m,b;if(t(s)){g=s.constructor;if(e(g)&&(g===h||t(g.prototype)))g=void 0;else if(n(g)){g=g[l];g===null&&(g=void 0)}if(g===h||g===void 0)return f(s,d,y)}m=new(g===void 0?h:g)(p(y-d,0));for(b=0;d<y;d++,b++)d in s&&u(m,b,s[d]);m.length=b;return m}});return Wf}var Vf;var Bf;function Gf(){if(Bf)return Vf;Bf=1;Xf();var r=Wv();Vf=r("Array","slice");return Vf}var Hf;var Jf;function Kf(){if(Jf)return Hf;Jf=1;var r=fr();var t=Gf();var e=Array.prototype;Hf=function(n){var a=n.slice;return n===e||r(e,n)&&a===e.slice?t:a};return Hf}var Qf;var Zf;function $f(){if(Zf)return Qf;Zf=1;var r=Kf();Qf=r;return Qf}var rc;var tc;function ec(){if(tc)return rc;tc=1;rc=$f();return rc}var nc=ec();var ac=t(nc);var ic={};var oc;var uc;function vc(){if(uc)return oc;uc=1;var r=ur();var t=m();var e=Rn();var n=Vn();var a=Mt();var i=t([].concat);oc=r("Reflect","ownKeys")||function(r){var t=e.f(a(r));var o=n.f;return o?i(t,o(r)):t};return oc}var sc;function fc(){if(sc)return ic;sc=1;var r=Wt();var t=vc();r({target:"Reflect",stat:true},{ownKeys:t});return ic}var cc;var lc;function hc(){if(lc)return cc;lc=1;fc();var r=ar();cc=r.Reflect.ownKeys;return cc}var pc;var dc;function yc(){if(dc)return pc;dc=1;var r=hc();pc=r;return pc}var gc;var mc;function bc(){if(mc)return gc;mc=1;gc=yc();return gc}var _c=bc();var wc=t(_c);var Sc={};var Tc;function Oc(){if(Tc)return Sc;Tc=1;var r=Wt();var t=fe();r({target:"Array",stat:true},{isArray:t});return Sc}var Ec;var Dc;function Ac(){if(Dc)return Ec;Dc=1;Oc();var r=ar();Ec=r.Array.isArray;return Ec}var Pc;var Ic;function jc(){if(Ic)return Pc;Ic=1;var r=Ac();Pc=r;return Pc}var xc;var kc;function Cc(){if(kc)return xc;kc=1;xc=jc();return xc}var Mc=Cc();var Nc=t(Mc);var Rc={};var Fc;function Lc(){if(Fc)return Rc;Fc=1;var r=Wt();var t=Zr();var e=Sn();var n=s();var a=n((function(){e(1)}));r({target:"Object",stat:true,forced:a},{keys:function(r){return e(t(r))}});return Rc}var zc;var Uc;function qc(){if(Uc)return zc;Uc=1;Lc();var r=ar();zc=r.Object.keys;return zc}var Wc;var Yc;function Xc(){if(Yc)return Wc;Yc=1;var r=qc();Wc=r;return Wc}var Vc;var Bc;function Gc(){if(Bc)return Vc;Bc=1;Vc=Xc();return Vc}var Hc=Gc();var Jc=t(Hc);var Kc={};var Qc;var Zc;function $c(){if(Zc)return Qc;Zc=1;var r=wa().forEach;var t=ss();var e=t("forEach");Qc=e?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)};return Qc}var rl;function tl(){if(rl)return Kc;rl=1;var r=Wt();var t=$c();r({target:"Array",proto:true,forced:[].forEach!==t},{forEach:t});return Kc}var el;var nl;function al(){if(nl)return el;nl=1;tl();var r=Wv();el=r("Array","forEach");return el}var il;var ol;function ul(){if(ol)return il;ol=1;var r=al();il=r;return il}var vl;var sl;function fl(){if(sl)return vl;sl=1;var r=Me();var t=tt();var e=fr();var n=ul();var a=Array.prototype;var i={DOMTokenList:true,NodeList:true};vl=function(o){var u=o.forEach;return o===a||e(a,o)&&u===a.forEach||t(i,r(o))?n:u};return vl}var cl;var ll;function hl(){if(ll)return cl;ll=1;cl=fl();return cl}var pl=hl();var dl=t(pl);var yl={};var gl;function ml(){if(gl)return yl;gl=1;var r=Wt();var t=m();var e=fe();var n=t([].reverse);var a=[1,2];r({target:"Array",proto:true,forced:String(a)===String(a.reverse())},{reverse:function(){e(this)&&(this.length=this.length);return n(this)}});return yl}var bl;var _l;function wl(){if(_l)return bl;_l=1;ml();var r=Wv();bl=r("Array","reverse");return bl}var Sl;var Tl;function Ol(){if(Tl)return Sl;Tl=1;var r=fr();var t=wl();var e=Array.prototype;Sl=function(n){var a=n.reverse;return n===e||r(e,n)&&a===e.reverse?t:a};return Sl}var El;var Dl;function Al(){if(Dl)return El;Dl=1;var r=Ol();El=r;return El}var Pl;var Il;function jl(){if(Il)return Pl;Il=1;Pl=Al();return Pl}var xl=jl();var kl=t(xl);var Cl={};var Ml;var Nl;function Rl(){if(Nl)return Ml;Nl=1;var r=x();var t=fe();var e=TypeError;var n=Object.getOwnPropertyDescriptor;var a=r&&!function(){if(this!==void 0)return true;try{Object.defineProperty([],"length",{writable:false}).length=1}catch(r){return r instanceof TypeError}}();Ml=a?function(r,a){if(t(r)&&!n(r,"length").writable)throw new e("Cannot set read only .length");return r.length=a}:function(r,t){return r.length=t};return Ml}var Fl;var Ll;function zl(){if(Ll)return Fl;Ll=1;var r=Pr();var t=TypeError;Fl=function(e,n){if(!delete e[n])throw new t("Cannot delete property "+r(n)+" of "+r(e))};return Fl}var Ul;function ql(){if(Ul)return Cl;Ul=1;var r=Wt();var t=Zr();var e=un();var n=ye();var a=Se();var i=Rl();var o=Ee();var u=Be();var v=Pe();var s=zl();var f=Je();var c=f("splice");var l=Math.max;var h=Math.min;r({target:"Array",proto:true,forced:!c},{splice:function(r,f){var c=t(this);var p=a(c);var d=e(r,p);var y=arguments.length;var g,m,b,_,w,S;if(y===0)g=m=0;else if(y===1){g=0;m=p-d}else{g=y-2;m=h(l(n(f),0),p-d)}o(p+g-m);b=u(c,m);for(_=0;_<m;_++){w=d+_;w in c&&v(b,_,c[w])}b.length=m;if(g<m){for(_=d;_<p-m;_++){w=_+m;S=_+g;w in c?c[S]=c[w]:s(c,S)}for(_=p;_>p-m+g;_--)s(c,_-1)}else if(g>m)for(_=p-m;_>d;_--){w=_+m-1;S=_+g-1;w in c?c[S]=c[w]:s(c,S)}for(_=0;_<g;_++)c[_+d]=arguments[_+2];i(c,p-m+g);return b}});return Cl}var Wl;var Yl;function Xl(){if(Yl)return Wl;Yl=1;ql();var r=Wv();Wl=r("Array","splice");return Wl}var Vl;var Bl;function Gl(){if(Bl)return Vl;Bl=1;var r=fr();var t=Xl();var e=Array.prototype;Vl=function(n){var a=n.splice;return n===e||r(e,n)&&a===e.splice?t:a};return Vl}var Hl;var Jl;function Kl(){if(Jl)return Hl;Jl=1;var r=Gl();Hl=r;return Hl}var Ql;var Zl;function $l(){if(Zl)return Ql;Zl=1;Ql=Kl();return Ql}var rh=$l();var th=t(rh);var eh={};var nh;var ah;function ih(){if(ah)return nh;ah=1;var r=x();var t=m();var e=M();var n=s();var a=Sn();var i=Vn();var o=F();var u=Zr();var v=Y();var f=Object.assign;var c=Object.defineProperty;var l=t([].concat);nh=!f||n((function(){if(r&&f({b:1},f(c({},"a",{enumerable:true,get:function(){c(this,"b",{value:3,enumerable:false})}}),{b:2})).b!==1)return true;var t={};var e={};var n=Symbol("assign detection");var i="abcdefghijklmnopqrst";t[n]=7;i.split("").forEach((function(r){e[r]=r}));return f({},t)[n]!==7||a(f({},e)).join("")!==i}))?function(t,n){var s=u(t);var f=arguments.length;var c=1;var h=i.f;var p=o.f;while(f>c){var d=v(arguments[c++]);var y=h?l(a(d),h(d)):a(d);var g=y.length;var m=0;var b;while(g>m){b=y[m++];r&&!e(p,d,b)||(s[b]=d[b])}}return s}:f;return nh}var oh;function uh(){if(oh)return eh;oh=1;var r=Wt();var t=ih();r({target:"Object",stat:true,arity:2,forced:Object.assign!==t},{assign:t});return eh}var vh;var sh;function fh(){if(sh)return vh;sh=1;uh();var r=ar();vh=r.Object.assign;return vh}var ch;var lh;function hh(){if(lh)return ch;lh=1;var r=fh();ch=r;return ch}var ph;var dh;function yh(){if(dh)return ph;dh=1;ph=hh();return ph}var gh=yh();var mh=t(gh);var bh;var _h;function wh(){if(_h)return bh;_h=1;Qe();var r=Wv();bh=r("Array","concat");return bh}var Sh;var Th;function Oh(){if(Th)return Sh;Th=1;var r=fr();var t=wh();var e=Array.prototype;Sh=function(n){var a=n.concat;return n===e||r(e,n)&&a===e.concat?t:a};return Sh}var Eh;var Dh;function Ah(){if(Dh)return Eh;Dh=1;var r=Oh();Eh=r;return Eh}var Ph;var Ih;function jh(){if(Ih)return Ph;Ih=1;Ph=Ah();return Ph}var xh=jh();var kh=t(xh);var Ch={};var Mh;function Nh(){if(Mh)return Ch;Mh=1;var r=Wt();var t=x();var e=Cn();r({target:"Object",stat:true,sham:!t},{create:e});return Ch}var Rh;var Fh;function Lh(){if(Fh)return Rh;Fh=1;Nh();var r=ar();var t=r.Object;Rh=function(r,e){return t.create(r,e)};return Rh}var zh;var Uh;function qh(){if(Uh)return zh;Uh=1;var r=Lh();zh=r;return zh}var Wh;var Yh;function Xh(){if(Yh)return Wh;Yh=1;Wh=qh();return Wh}var Vh=Xh();var Bh=t(Vh);var Gh={};var Hh;var Jh;function Kh(){if(Jh)return Hh;Jh=1;var r=ye();var t=en();var e=J();var n=RangeError;Hh=function(a){var i=t(e(this));var o="";var u=r(a);if(u<0||u===Infinity)throw new n("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(i+=i))u&1&&(o+=i);return o};return Hh}var Qh;var Zh;function $h(){if(Zh)return Qh;Zh=1;var r=m();var t=be();var e=en();var n=Kh();var a=J();var i=r(n);var o=r("".slice);var u=Math.ceil;var v=function(r){return function(n,v,s){var f=e(a(n));var c=t(v);var l=f.length;var h=s===void 0?" ":e(s);var p,d;if(c<=l||h==="")return f;p=c-l;d=i(h,u(p/h.length));d.length>p&&(d=o(d,0,p));return r?f+d:d+f}};Qh={start:v(false),end:v(true)};return Qh}var rp;var tp;function ep(){if(tp)return rp;tp=1;var r=m();var t=s();var e=$h().start;var n=RangeError;var a=isFinite;var i=Math.abs;var o=Date.prototype;var u=o.toISOString;var v=r(o.getTime);var f=r(o.getUTCDate);var c=r(o.getUTCFullYear);var l=r(o.getUTCHours);var h=r(o.getUTCMilliseconds);var p=r(o.getUTCMinutes);var d=r(o.getUTCMonth);var y=r(o.getUTCSeconds);rp=t((function(){return u.call(new Date(-50000000000001))!=="0385-07-25T07:06:39.999Z"}))||!t((function(){u.call(new Date(NaN))}))?function(){if(!a(v(this)))throw new n("Invalid time value");var r=this;var t=c(r);var o=h(r);var u=t<0?"-":t>9999?"+":"";return u+e(i(t),u?6:4,0)+"-"+e(d(r)+1,2,0)+"-"+e(f(r),2,0)+"T"+e(l(r),2,0)+":"+e(p(r),2,0)+":"+e(y(r),2,0)+"."+e(o,3,0)+"Z"}:u;return rp}var np;function ap(){if(np)return Gh;np=1;var r=Wt();var t=M();var e=Zr();var n=ft();var a=ep();var i=w();var o=s();var u=o((function(){return new Date(NaN).toJSON()!==null||t(Date.prototype.toJSON,{toISOString:function(){return 1}})!==1}));r({target:"Date",proto:true,forced:u},{toJSON:function(r){var o=e(this);var u=n(o,"number");return typeof u!="number"||isFinite(u)?"toISOString"in o||i(o)!=="Date"?o.toISOString():t(a,o):null}});return Gh}var ip;var op;function up(){if(op)return ip;op=1;ap();La();var r=ar();var t=d();r.JSON||(r.JSON={stringify:JSON.stringify});ip=function(e,n,a){return t(r.JSON.stringify,null,arguments)};return ip}var vp;var sp;function fp(){if(sp)return vp;sp=1;var r=up();vp=r;return vp}var cp;var lp;function hp(){if(lp)return cp;lp=1;cp=fp();return cp}var pp=hp();var dp=t(pp);var yp={};var gp={};var mp;var bp;function _p(){if(bp)return mp;bp=1;var r=TypeError;mp=function(t,e){if(t<e)throw new r("Not enough arguments");return t};return mp}var wp;var Sp;function Tp(){if(Sp)return wp;Sp=1;var r=o();var t=d();var e=A();var n=ls();var a=hr();var i=Un();var u=_p();var v=r.Function;var s=/MSIE .\./.test(a)||n==="BUN"&&function(){var t=r.Bun.version.split(".");return t.length<3||t[0]==="0"&&(t[1]<3||t[1]==="3"&&t[2]==="0")}();wp=function(r,n){var a=n?2:1;return s?function(o,s){var f=u(arguments.length,1)>a;var c=e(o)?o:v(o);var l=f?i(arguments,a):[];var h=f?function(){t(c,this,l)}:c;return n?r(h,s):r(h)}:r};return wp}var Op;function Ep(){if(Op)return gp;Op=1;var r=Wt();var t=o();var e=Tp();var n=e(t.setInterval,true);r({global:true,bind:true,forced:t.setInterval!==n},{setInterval:n});return gp}var Dp={};var Ap;function Pp(){if(Ap)return Dp;Ap=1;var r=Wt();var t=o();var e=Tp();var n=e(t.setTimeout,true);r({global:true,bind:true,forced:t.setTimeout!==n},{setTimeout:n});return Dp}var Ip;function jp(){if(Ip)return yp;Ip=1;Ep();Pp();return yp}var xp;var kp;function Cp(){if(kp)return xp;kp=1;jp();var r=ar();xp=r.setTimeout;return xp}var Mp;var Np;function Rp(){if(Np)return Mp;Np=1;Mp=Cp();return Mp}var Fp=Rp();var Lp=t(Fp);var zp={exports:{}};var Up;function qp(){if(Up)return zp.exports;Up=1;(function(r){function t(r){if(r)return e(r);this._callbacks=new Map}function e(r){Object.assign(r,t.prototype);r._callbacks=new Map;return r}t.prototype.on=function(r,t){const e=this._callbacks.get(r)??[];e.push(t);this._callbacks.set(r,e);return this};t.prototype.once=function(r,t){const e=(...n)=>{this.off(r,e);t.apply(this,n)};e.fn=t;this.on(r,e);return this};t.prototype.off=function(r,t){if(r===void 0&&t===void 0){this._callbacks.clear();return this}if(t===void 0){this._callbacks.delete(r);return this}const e=this._callbacks.get(r);if(e){for(const[r,n]of e.entries())if(n===t||n.fn===t){e.splice(r,1);break}e.length===0?this._callbacks.delete(r):this._callbacks.set(r,e)}return this};t.prototype.emit=function(r,...t){const e=this._callbacks.get(r);if(e){const r=[...e];for(const e of r)e.apply(this,t)}return this};t.prototype.listeners=function(r){return this._callbacks.get(r)??[]};t.prototype.listenerCount=function(r){if(r)return this.listeners(r).length;let t=0;for(const r of this._callbacks.values())t+=r.length;return t};t.prototype.hasListeners=function(r){return this.listenerCount(r)>0};t.prototype.addEventListener=t.prototype.on;t.prototype.removeListener=t.prototype.off;t.prototype.removeEventListener=t.prototype.off;t.prototype.removeAllListeners=t.prototype.off;r.exports=t})(zp);return zp.exports}var Wp=qp();var Yp=t(Wp);function Xp(){Xp=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r};return Xp.apply(this,arguments)}function Vp(r,t){r.prototype=Object.create(t.prototype);r.prototype.constructor=r;r.__proto__=t}function Bp(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}
/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */var Gp;Gp=typeof Object.assign!=="function"?function(r){if(r===void 0||r===null)throw new TypeError("Cannot convert undefined or null to object");var t=Object(r);for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n!==void 0&&n!==null)for(var a in n)n.hasOwnProperty(a)&&(t[a]=n[a])}return t}:Object.assign;var Hp=Gp;var Jp=["","webkit","Moz","MS","ms","o"];var Kp=typeof document==="undefined"?{style:{}}:document.createElement("div");var Qp="function";var Zp=Math.round,$p=Math.abs;var rd=Date.now;
/**
 * @private
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */function td(r,t){var e;var n;var a=t[0].toUpperCase()+t.slice(1);var i=0;while(i<Jp.length){e=Jp[i];n=e?e+a:t;if(n in r)return n;i++}}var ed;ed=typeof window==="undefined"?{}:window;var nd=td(Kp.style,"touchAction");var ad=nd!==void 0;function id(){if(!ad)return false;var r={};var t=ed.CSS&&ed.CSS.supports;["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(e){return r[e]=!t||ed.CSS.supports("touch-action",e)}));return r}var od="compute";var ud="auto";var vd="manipulation";var sd="none";var fd="pan-x";var cd="pan-y";var ld=id();var hd=/mobile|tablet|ip(ad|hone|od)|android/i;var pd="ontouchstart"in ed;var dd=td(ed,"PointerEvent")!==void 0;var yd=pd&&hd.test(navigator.userAgent);var gd="touch";var md="pen";var bd="mouse";var _d="kinect";var wd=25;var Sd=1;var Td=2;var Od=4;var Ed=8;var Dd=1;var Ad=2;var Pd=4;var Id=8;var jd=16;var xd=Ad|Pd;var kd=Id|jd;var Cd=xd|kd;var Md=["x","y"];var Nd=["clientX","clientY"];
/**
 * @private
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */function Rd(r,t,e){var n;if(r)if(r.forEach)r.forEach(t,e);else if(r.length!==void 0){n=0;while(n<r.length){t.call(e,r[n],n,r);n++}}else for(n in r)r.hasOwnProperty(n)&&t.call(e,r[n],n,r)}
/**
 * @private
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */function Fd(r,t){return typeof r===Qp?r.apply(t&&t[0]||void 0,t):r}
/**
 * @private
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */function Ld(r,t){return r.indexOf(t)>-1}
/**
 * @private
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */function zd(r){if(Ld(r,sd))return sd;var t=Ld(r,fd);var e=Ld(r,cd);return t&&e?sd:t||e?t?fd:cd:Ld(r,vd)?vd:ud}
/**
 * @private
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */var Ud=function(){function r(r,t){this.manager=r;this.set(t)}
/**
   * @private
   * set the touchAction value on the element or enable the polyfill
   * @param {String} value
   */var t=r.prototype;t.set=function(r){r===od&&(r=this.compute());ad&&this.manager.element.style&&ld[r]&&(this.manager.element.style[nd]=r);this.actions=r.toLowerCase().trim()};t.update=function(){this.set(this.manager.options.touchAction)};
/**
   * @private
   * compute the value for the touchAction property based on the recognizer's settings
   * @returns {String} value
   */t.compute=function(){var r=[];Rd(this.manager.recognizers,(function(t){Fd(t.options.enable,[t])&&(r=r.concat(t.getTouchAction()))}));return zd(r.join(" "))};
/**
   * @private
   * this method is called on each input cycle and provides the preventing of the browser behavior
   * @param {Object} input
   */t.preventDefaults=function(r){var t=r.srcEvent;var e=r.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var n=this.actions;var a=Ld(n,sd)&&!ld[sd];var i=Ld(n,cd)&&!ld[cd];var o=Ld(n,fd)&&!ld[fd];if(a){var u=r.pointers.length===1;var v=r.distance<2;var s=r.deltaTime<250;if(u&&v&&s)return}if(!o||!i)return a||i&&e&xd||o&&e&kd?this.preventSrc(t):void 0}};
/**
   * @private
   * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
   * @param {Object} srcEvent
   */t.preventSrc=function(r){this.manager.session.prevented=true;r.preventDefault()};return r}();
/**
 * @private
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */function qd(r,t){while(r){if(r===t)return true;r=r.parentNode}return false}
/**
 * @private
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */function Wd(r){var t=r.length;if(t===1)return{x:Zp(r[0].clientX),y:Zp(r[0].clientY)};var e=0;var n=0;var a=0;while(a<t){e+=r[a].clientX;n+=r[a].clientY;a++}return{x:Zp(e/t),y:Zp(n/t)}}
/**
 * @private
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */function Yd(r){var t=[];var e=0;while(e<r.pointers.length){t[e]={clientX:Zp(r.pointers[e].clientX),clientY:Zp(r.pointers[e].clientY)};e++}return{timeStamp:rd(),pointers:t,center:Wd(t),deltaX:r.deltaX,deltaY:r.deltaY}}
/**
 * @private
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */function Xd(r,t,e){e||(e=Md);var n=t[e[0]]-r[e[0]];var a=t[e[1]]-r[e[1]];return Math.sqrt(n*n+a*a)}
/**
 * @private
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */function Vd(r,t,e){e||(e=Md);var n=t[e[0]]-r[e[0]];var a=t[e[1]]-r[e[1]];return Math.atan2(a,n)*180/Math.PI}
/**
 * @private
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */function Bd(r,t){return r===t?Dd:$p(r)>=$p(t)?r<0?Ad:Pd:t<0?Id:jd}function Gd(r,t){var e=t.center;var n=r.offsetDelta||{};var a=r.prevDelta||{};var i=r.prevInput||{};if(t.eventType===Sd||i.eventType===Od){a=r.prevDelta={x:i.deltaX||0,y:i.deltaY||0};n=r.offsetDelta={x:e.x,y:e.y}}t.deltaX=a.x+(e.x-n.x);t.deltaY=a.y+(e.y-n.y)}
/**
 * @private
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */function Hd(r,t,e){return{x:t/r||0,y:e/r||0}}
/**
 * @private
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */function Jd(r,t){return Xd(t[0],t[1],Nd)/Xd(r[0],r[1],Nd)}
/**
 * @private
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */function Kd(r,t){return Vd(t[1],t[0],Nd)+Vd(r[1],r[0],Nd)}
/**
 * @private
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */function Qd(r,t){var e=r.lastInterval||t;var n=t.timeStamp-e.timeStamp;var a;var i;var o;var u;if(t.eventType!==Ed&&(n>wd||e.velocity===void 0)){var v=t.deltaX-e.deltaX;var s=t.deltaY-e.deltaY;var f=Hd(n,v,s);i=f.x;o=f.y;a=$p(f.x)>$p(f.y)?f.x:f.y;u=Bd(v,s);r.lastInterval=t}else{a=e.velocity;i=e.velocityX;o=e.velocityY;u=e.direction}t.velocity=a;t.velocityX=i;t.velocityY=o;t.direction=u}
/**
* @private
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */function Zd(r,t){var e=r.session;var n=t.pointers;var a=n.length;e.firstInput||(e.firstInput=Yd(t));a>1&&!e.firstMultiple?e.firstMultiple=Yd(t):a===1&&(e.firstMultiple=false);var i=e.firstInput,o=e.firstMultiple;var u=o?o.center:i.center;var v=t.center=Wd(n);t.timeStamp=rd();t.deltaTime=t.timeStamp-i.timeStamp;t.angle=Vd(u,v);t.distance=Xd(u,v);Gd(e,t);t.offsetDirection=Bd(t.deltaX,t.deltaY);var s=Hd(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=s.x;t.overallVelocityY=s.y;t.overallVelocity=$p(s.x)>$p(s.y)?s.x:s.y;t.scale=o?Jd(o.pointers,n):1;t.rotation=o?Kd(o.pointers,n):0;t.maxPointers=e.prevInput?t.pointers.length>e.prevInput.maxPointers?t.pointers.length:e.prevInput.maxPointers:t.pointers.length;Qd(e,t);var f=r.element;var c=t.srcEvent;var l;l=c.composedPath?c.composedPath()[0]:c.path?c.path[0]:c.target;qd(l,f)&&(f=l);t.target=f}
/**
 * @private
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */function $d(r,t,e){var n=e.pointers.length;var a=e.changedPointers.length;var i=t&Sd&&n-a===0;var o=t&(Od|Ed)&&n-a===0;e.isFirst=!!i;e.isFinal=!!o;i&&(r.session={});e.eventType=t;Zd(r,e);r.emit("hammer.input",e);r.recognize(e);r.session.prevInput=e}
/**
 * @private
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */function ry(r){return r.trim().split(/\s+/g)}
/**
 * @private
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */function ty(r,t,e){Rd(ry(t),(function(t){r.addEventListener(t,e,false)}))}
/**
 * @private
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */function ey(r,t,e){Rd(ry(t),(function(t){r.removeEventListener(t,e,false)}))}
/**
 * @private
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */function ny(r){var t=r.ownerDocument||r;return t.defaultView||t.parentWindow||window}
/**
 * @private
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */var ay=function(){function r(r,t){var e=this;this.manager=r;this.callback=t;this.element=r.element;this.target=r.options.inputTarget;this.domHandler=function(t){Fd(r.options.enable,[r])&&e.handler(t)};this.init()}var t=r.prototype;t.handler=function(){};t.init=function(){this.evEl&&ty(this.element,this.evEl,this.domHandler);this.evTarget&&ty(this.target,this.evTarget,this.domHandler);this.evWin&&ty(ny(this.element),this.evWin,this.domHandler)};t.destroy=function(){this.evEl&&ey(this.element,this.evEl,this.domHandler);this.evTarget&&ey(this.target,this.evTarget,this.domHandler);this.evWin&&ey(ny(this.element),this.evWin,this.domHandler)};return r}();
/**
 * @private
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */function iy(r,t,e){if(r.indexOf&&!e)return r.indexOf(t);var n=0;while(n<r.length){if(e&&r[n][e]==t||!e&&r[n]===t)return n;n++}return-1}var oy={pointerdown:Sd,pointermove:Td,pointerup:Od,pointercancel:Ed,pointerout:Ed};var uy={2:gd,3:md,4:bd,5:_d};var vy="pointerdown";var sy="pointermove pointerup pointercancel";if(ed.MSPointerEvent&&!ed.PointerEvent){vy="MSPointerDown";sy="MSPointerMove MSPointerUp MSPointerCancel"}var fy=function(r){Vp(t,r);function t(){var e;var n=t.prototype;n.evEl=vy;n.evWin=sy;e=r.apply(this,arguments)||this;e.store=e.manager.session.pointerEvents=[];return e}
/**
   * @private
   * handle mouse events
   * @param {Object} ev
   */var e=t.prototype;e.handler=function(r){var t=this.store;var e=false;var n=r.type.toLowerCase().replace("ms","");var a=oy[n];var i=uy[r.pointerType]||r.pointerType;var o=i===gd;var u=iy(t,r.pointerId,"pointerId");if(a&Sd&&(r.button===0||o)){if(u<0){t.push(r);u=t.length-1}}else a&(Od|Ed)&&(e=true);if(!(u<0)){t[u]=r;this.callback(this.manager,a,{pointers:t,changedPointers:[r],pointerType:i,srcEvent:r});e&&t.splice(u,1)}};return t}(ay);
/**
 * @private
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */function cy(r){return Array.prototype.slice.call(r,0)}
/**
 * @private
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */function ly(r,t,e){var n=[];var a=[];var i=0;while(i<r.length){var o=t?r[i][t]:r[i];iy(a,o)<0&&n.push(r[i]);a[i]=o;i++}e&&(n=t?n.sort((function(r,e){return r[t]>e[t]})):n.sort());return n}var hy={touchstart:Sd,touchmove:Td,touchend:Od,touchcancel:Ed};var py="touchstart touchmove touchend touchcancel";var dy=function(r){Vp(t,r);function t(){var e;t.prototype.evTarget=py;e=r.apply(this,arguments)||this;e.targetIds={};return e}var e=t.prototype;e.handler=function(r){var t=hy[r.type];var e=yy.call(this,r,t);e&&this.callback(this.manager,t,{pointers:e[0],changedPointers:e[1],pointerType:gd,srcEvent:r})};return t}(ay);function yy(r,t){var e=cy(r.touches);var n=this.targetIds;if(t&(Sd|Td)&&e.length===1){n[e[0].identifier]=true;return[e,e]}var a;var i;var o=cy(r.changedTouches);var u=[];var v=this.target;i=e.filter((function(r){return qd(r.target,v)}));if(t===Sd){a=0;while(a<i.length){n[i[a].identifier]=true;a++}}a=0;while(a<o.length){n[o[a].identifier]&&u.push(o[a]);t&(Od|Ed)&&delete n[o[a].identifier];a++}if(u.length)return[ly(i.concat(u),"identifier",true),u]}var gy={mousedown:Sd,mousemove:Td,mouseup:Od};var my="mousedown";var by="mousemove mouseup";var _y=function(r){Vp(t,r);function t(){var e;var n=t.prototype;n.evEl=my;n.evWin=by;e=r.apply(this,arguments)||this;e.pressed=false;return e}
/**
   * @private
   * handle mouse events
   * @param {Object} ev
   */var e=t.prototype;e.handler=function(r){var t=gy[r.type];t&Sd&&r.button===0&&(this.pressed=true);t&Td&&r.which!==1&&(t=Od);if(this.pressed){t&Od&&(this.pressed=false);this.callback(this.manager,t,{pointers:[r],changedPointers:[r],pointerType:bd,srcEvent:r})}};return t}(ay);var wy=2500;var Sy=25;function Ty(r){var t=r.changedPointers,e=t[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};var a=this.lastTouches;this.lastTouches.push(n);var i=function(){var r=a.indexOf(n);r>-1&&a.splice(r,1)};setTimeout(i,wy)}}function Oy(r,t){if(r&Sd){this.primaryTouch=t.changedPointers[0].identifier;Ty.call(this,t)}else r&(Od|Ed)&&Ty.call(this,t)}function Ey(r){var t=r.srcEvent.clientX;var e=r.srcEvent.clientY;for(var n=0;n<this.lastTouches.length;n++){var a=this.lastTouches[n];var i=Math.abs(t-a.x);var o=Math.abs(e-a.y);if(i<=Sy&&o<=Sy)return true}return false}var Dy=function(){var r=function(r){Vp(t,r);function t(t,e){var n;n=r.call(this,t,e)||this;n.handler=function(r,t,e){var a=e.pointerType===gd;var i=e.pointerType===bd;if(!(i&&e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents)){if(a)Oy.call(Bp(Bp(n)),t,e);else if(i&&Ey.call(Bp(Bp(n)),e))return;n.callback(r,t,e)}};n.touch=new dy(n.manager,n.handler);n.mouse=new _y(n.manager,n.handler);n.primaryTouch=null;n.lastTouches=[];return n}
/**
     * @private
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */var e=t.prototype;e.destroy=function(){this.touch.destroy();this.mouse.destroy()};return t}(ay);return r}();
/**
 * @private
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */function Ay(r){var t;var e=r.options.inputClass;t=e||(dd?fy:yd?dy:pd?Dy:_y);return new t(r,$d)}
/**
 * @private
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */function Py(r,t,e){if(Array.isArray(r)){Rd(r,e[t],e);return true}return false}var Iy=1;var jy=2;var xy=4;var ky=8;var Cy=ky;var My=16;var Ny=32;
/**
 * @private
 * get a unique id
 * @returns {number} uniqueId
 */var Ry=1;function Fy(){return Ry++}
/**
 * @private
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */function Ly(r,t){var e=t.manager;return e?e.get(r):r}
/**
 * @private
 * get a usable string, used as event postfix
 * @param {constant} state
 * @returns {String} state
 */function zy(r){return r&My?"cancel":r&ky?"end":r&xy?"move":r&jy?"start":""}
/**
 * @private
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */var Uy=function(){function r(r){r===void 0&&(r={});this.options=Xp({enable:true},r);this.id=Fy();this.manager=null;this.state=Iy;this.simultaneous={};this.requireFail=[]}
/**
   * @private
   * set options
   * @param {Object} options
   * @return {Recognizer}
   */var t=r.prototype;t.set=function(r){Hp(this.options,r);this.manager&&this.manager.touchAction.update();return this};
/**
   * @private
   * recognize simultaneous with an other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */t.recognizeWith=function(r){if(Py(r,"recognizeWith",this))return this;var t=this.simultaneous;r=Ly(r,this);if(!t[r.id]){t[r.id]=r;r.recognizeWith(this)}return this};
/**
   * @private
   * drop the simultaneous link. it doesnt remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */t.dropRecognizeWith=function(r){if(Py(r,"dropRecognizeWith",this))return this;r=Ly(r,this);delete this.simultaneous[r.id];return this};
/**
   * @private
   * recognizer can only run when an other is failing
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */t.requireFailure=function(r){if(Py(r,"requireFailure",this))return this;var t=this.requireFail;r=Ly(r,this);if(iy(t,r)===-1){t.push(r);r.requireFailure(this)}return this};
/**
   * @private
   * drop the requireFailure link. it does not remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */t.dropRequireFailure=function(r){if(Py(r,"dropRequireFailure",this))return this;r=Ly(r,this);var t=iy(this.requireFail,r);t>-1&&this.requireFail.splice(t,1);return this};
/**
   * @private
   * has require failures boolean
   * @returns {boolean}
   */t.hasRequireFailures=function(){return this.requireFail.length>0};
/**
   * @private
   * if the recognizer can recognize simultaneous with an other recognizer
   * @param {Recognizer} otherRecognizer
   * @returns {Boolean}
   */t.canRecognizeWith=function(r){return!!this.simultaneous[r.id]};
/**
   * @private
   * You should use `tryEmit` instead of `emit` directly to check
   * that all the needed recognizers has failed before emitting.
   * @param {Object} input
   */t.emit=function(r){var t=this;var e=this.state;function n(e){t.manager.emit(e,r)}e<ky&&n(t.options.event+zy(e));n(t.options.event);r.additionalEvent&&n(r.additionalEvent);e>=ky&&n(t.options.event+zy(e))};
/**
   * @private
   * Check that all the require failure recognizers has failed,
   * if true, it emits a gesture event,
   * otherwise, setup the state to FAILED.
   * @param {Object} input
   */t.tryEmit=function(r){if(this.canEmit())return this.emit(r);this.state=Ny};
/**
   * @private
   * can we emit?
   * @returns {boolean}
   */t.canEmit=function(){var r=0;while(r<this.requireFail.length){if(!(this.requireFail[r].state&(Ny|Iy)))return false;r++}return true};
/**
   * @private
   * update the recognizer
   * @param {Object} inputData
   */t.recognize=function(r){var t=Hp({},r);if(Fd(this.options.enable,[this,t])){this.state&(Cy|My|Ny)&&(this.state=Iy);this.state=this.process(t);this.state&(jy|xy|ky|My)&&this.tryEmit(t)}else{this.reset();this.state=Ny}};
/**
   * @private
   * return the state of the recognizer
   * the actual recognizing happens in this method
   * @virtual
   * @param {Object} inputData
   * @returns {constant} STATE
   */t.process=function(r){};
/**
   * @private
   * return the preferred touch-action
   * @virtual
   * @returns {Array}
   */t.getTouchAction=function(){};t.reset=function(){};return r}();var qy=function(r){Vp(t,r);function t(t){var e;t===void 0&&(t={});e=r.call(this,Xp({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},t))||this;e.pTime=false;e.pCenter=false;e._timer=null;e._input=null;e.count=0;return e}var e=t.prototype;e.getTouchAction=function(){return[vd]};e.process=function(r){var t=this;var e=this.options;var n=r.pointers.length===e.pointers;var a=r.distance<e.threshold;var i=r.deltaTime<e.time;this.reset();if(r.eventType&Sd&&this.count===0)return this.failTimeout();if(a&&i&&n){if(r.eventType!==Od)return this.failTimeout();var o=!this.pTime||r.timeStamp-this.pTime<e.interval;var u=!this.pCenter||Xd(this.pCenter,r.center)<e.posThreshold;this.pTime=r.timeStamp;this.pCenter=r.center;u&&o?this.count+=1:this.count=1;this._input=r;var v=this.count%e.taps;if(v===0){if(this.hasRequireFailures()){this._timer=setTimeout((function(){t.state=Cy;t.tryEmit()}),e.interval);return jy}return Cy}}return Ny};e.failTimeout=function(){var r=this;this._timer=setTimeout((function(){r.state=Ny}),this.options.interval);return Ny};e.reset=function(){clearTimeout(this._timer)};e.emit=function(){if(this.state===Cy){this._input.tapCount=this.count;this.manager.emit(this.options.event,this._input)}};return t}(Uy);var Wy=function(r){Vp(t,r);function t(t){t===void 0&&(t={});return r.call(this,Xp({pointers:1},t))||this}
/**
   * @private
   * Used to check if it the recognizer receives valid input, like input.distance > 10.
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {Boolean} recognized
   */var e=t.prototype;e.attrTest=function(r){var t=this.options.pointers;return t===0||r.pointers.length===t};
/**
   * @private
   * Process the input and return the state for the recognizer
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {*} State
   */e.process=function(r){var t=this.state;var e=r.eventType;var n=t&(jy|xy);var a=this.attrTest(r);return n&&(e&Ed||!a)?t|My:n||a?e&Od?t|ky:t&jy?t|xy:jy:Ny};return t}(Uy);
/**
 * @private
 * direction cons to string
 * @param {constant} direction
 * @returns {String}
 */function Yy(r){return r===jd?"down":r===Id?"up":r===Ad?"left":r===Pd?"right":""}var Xy=function(r){Vp(t,r);function t(t){var e;t===void 0&&(t={});e=r.call(this,Xp({event:"pan",threshold:10,pointers:1,direction:Cd},t))||this;e.pX=null;e.pY=null;return e}var e=t.prototype;e.getTouchAction=function(){var r=this.options.direction;var t=[];r&xd&&t.push(cd);r&kd&&t.push(fd);return t};e.directionTest=function(r){var t=this.options;var e=true;var n=r.distance;var a=r.direction;var i=r.deltaX;var o=r.deltaY;if(!(a&t.direction))if(t.direction&xd){a=i===0?Dd:i<0?Ad:Pd;e=i!==this.pX;n=Math.abs(r.deltaX)}else{a=o===0?Dd:o<0?Id:jd;e=o!==this.pY;n=Math.abs(r.deltaY)}r.direction=a;return e&&n>t.threshold&&a&t.direction};e.attrTest=function(r){return Wy.prototype.attrTest.call(this,r)&&(this.state&jy||!(this.state&jy)&&this.directionTest(r))};e.emit=function(t){this.pX=t.deltaX;this.pY=t.deltaY;var e=Yy(t.direction);e&&(t.additionalEvent=this.options.event+e);r.prototype.emit.call(this,t)};return t}(Wy);var Vy=function(r){Vp(t,r);function t(t){t===void 0&&(t={});return r.call(this,Xp({event:"swipe",threshold:10,velocity:.3,direction:xd|kd,pointers:1},t))||this}var e=t.prototype;e.getTouchAction=function(){return Xy.prototype.getTouchAction.call(this)};e.attrTest=function(t){var e=this.options.direction;var n;e&(xd|kd)?n=t.overallVelocity:e&xd?n=t.overallVelocityX:e&kd&&(n=t.overallVelocityY);return r.prototype.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers===this.options.pointers&&$p(n)>this.options.velocity&&t.eventType&Od};e.emit=function(r){var t=Yy(r.offsetDirection);t&&this.manager.emit(this.options.event+t,r);this.manager.emit(this.options.event,r)};return t}(Wy);var By=function(r){Vp(t,r);function t(t){t===void 0&&(t={});return r.call(this,Xp({event:"pinch",threshold:0,pointers:2},t))||this}var e=t.prototype;e.getTouchAction=function(){return[sd]};e.attrTest=function(t){return r.prototype.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&jy)};e.emit=function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}r.prototype.emit.call(this,t)};return t}(Wy);var Gy=function(r){Vp(t,r);function t(t){t===void 0&&(t={});return r.call(this,Xp({event:"rotate",threshold:0,pointers:2},t))||this}var e=t.prototype;e.getTouchAction=function(){return[sd]};e.attrTest=function(t){return r.prototype.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&jy)};return t}(Wy);var Hy=function(r){Vp(t,r);function t(t){var e;t===void 0&&(t={});e=r.call(this,Xp({event:"press",pointers:1,time:251,threshold:9},t))||this;e._timer=null;e._input=null;return e}var e=t.prototype;e.getTouchAction=function(){return[ud]};e.process=function(r){var t=this;var e=this.options;var n=r.pointers.length===e.pointers;var a=r.distance<e.threshold;var i=r.deltaTime>e.time;this._input=r;if(!a||!n||r.eventType&(Od|Ed)&&!i)this.reset();else if(r.eventType&Sd){this.reset();this._timer=setTimeout((function(){t.state=Cy;t.tryEmit()}),e.time)}else if(r.eventType&Od)return Cy;return Ny};e.reset=function(){clearTimeout(this._timer)};e.emit=function(r){if(this.state===Cy)if(r&&r.eventType&Od)this.manager.emit(this.options.event+"up",r);else{this._input.timeStamp=rd();this.manager.emit(this.options.event,this._input)}};return t}(Uy);var Jy={
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
touchAction:od,
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
 */var Ky=[[Gy,{enable:false}],[By,{enable:false},["rotate"]],[Vy,{direction:xd}],[Xy,{direction:xd},["swipe"]],[qy],[qy,{event:"doubletap",taps:2},["tap"]],[Hy]];var Qy=1;var Zy=2;
/**
 * @private
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */function $y(r,t){var e=r.element;if(e.style){var n;Rd(r.options.cssProps,(function(a,i){n=td(e.style,i);if(t){r.oldCssProps[n]=e.style[n];e.style[n]=a}else e.style[n]=r.oldCssProps[n]||""}));t||(r.oldCssProps={})}}
/**
 * @private
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */function rg(r,t){var e=document.createEvent("Event");e.initEvent(r,true,true);e.gesture=t;t.target.dispatchEvent(e)}
/**
* @private
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */var tg=function(){function r(r,t){var e=this;this.options=Hp({},Jy,t||{});this.options.inputTarget=this.options.inputTarget||r;this.handlers={};this.session={};this.recognizers=[];this.oldCssProps={};this.element=r;this.input=Ay(this);this.touchAction=new Ud(this,this.options.touchAction);$y(this,true);Rd(this.options.recognizers,(function(r){var t=e.add(new r[0](r[1]));r[2]&&t.recognizeWith(r[2]);r[3]&&t.requireFailure(r[3])}),this)}
/**
   * @private
   * set options
   * @param {Object} options
   * @returns {Manager}
   */var t=r.prototype;t.set=function(r){Hp(this.options,r);r.touchAction&&this.touchAction.update();if(r.inputTarget){this.input.destroy();this.input.target=r.inputTarget;this.input.init()}return this};
/**
   * @private
   * stop recognizing for this session.
   * This session will be discarded, when a new [input]start event is fired.
   * When forced, the recognizer cycle is stopped immediately.
   * @param {Boolean} [force]
   */t.stop=function(r){this.session.stopped=r?Zy:Qy};
/**
   * @private
   * run the recognizers!
   * called by the inputHandler function on every movement of the pointers (touches)
   * it walks through all the recognizers and tries to detect the gesture that is being made
   * @param {Object} inputData
   */t.recognize=function(r){var t=this.session;if(!t.stopped){this.touchAction.preventDefaults(r);var e;var n=this.recognizers;var a=t.curRecognizer;if(!a||a&&a.state&Cy){t.curRecognizer=null;a=null}var i=0;while(i<n.length){e=n[i];t.stopped===Zy||a&&e!==a&&!e.canRecognizeWith(a)?e.reset():e.recognize(r);if(!a&&e.state&(jy|xy|ky)){t.curRecognizer=e;a=e}i++}}};
/**
   * @private
   * get a recognizer by its event name.
   * @param {Recognizer|String} recognizer
   * @returns {Recognizer|Null}
   */t.get=function(r){if(r instanceof Uy)return r;var t=this.recognizers;for(var e=0;e<t.length;e++)if(t[e].options.event===r)return t[e];return null};
/**
   * @private add a recognizer to the manager
   * existing recognizers with the same event name will be removed
   * @param {Recognizer} recognizer
   * @returns {Recognizer|Manager}
   */t.add=function(r){if(Py(r,"add",this))return this;var t=this.get(r.options.event);t&&this.remove(t);this.recognizers.push(r);r.manager=this;this.touchAction.update();return r};
/**
   * @private
   * remove a recognizer by name or instance
   * @param {Recognizer|String} recognizer
   * @returns {Manager}
   */t.remove=function(r){if(Py(r,"remove",this))return this;var t=this.get(r);if(r){var e=this.recognizers;var n=iy(e,t);if(n!==-1){e.splice(n,1);this.touchAction.update()}}return this};
/**
   * @private
   * bind event
   * @param {String} events
   * @param {Function} handler
   * @returns {EventEmitter} this
   */t.on=function(r,t){if(r===void 0||t===void 0)return this;var e=this.handlers;Rd(ry(r),(function(r){e[r]=e[r]||[];e[r].push(t)}));return this};
/**
   * @private unbind event, leave emit blank to remove all handlers
   * @param {String} events
   * @param {Function} [handler]
   * @returns {EventEmitter} this
   */t.off=function(r,t){if(r===void 0)return this;var e=this.handlers;Rd(ry(r),(function(r){t?e[r]&&e[r].splice(iy(e[r],t),1):delete e[r]}));return this};
/**
   * @private emit event to the listeners
   * @param {String} event
   * @param {Object} data
   */t.emit=function(r,t){this.options.domEvents&&rg(r,t);var e=this.handlers[r]&&this.handlers[r].slice();if(e&&e.length){t.type=r;t.preventDefault=function(){t.srcEvent.preventDefault()};var n=0;while(n<e.length){e[n](t);n++}}};t.destroy=function(){this.element&&$y(this,false);this.handlers={};this.session={};this.input.destroy();this.element=null};return r}();var eg={touchstart:Sd,touchmove:Td,touchend:Od,touchcancel:Ed};var ng="touchstart";var ag="touchstart touchmove touchend touchcancel";var ig=function(r){Vp(t,r);function t(){var e;var n=t.prototype;n.evTarget=ng;n.evWin=ag;e=r.apply(this,arguments)||this;e.started=false;return e}var e=t.prototype;e.handler=function(r){var t=eg[r.type];t===Sd&&(this.started=true);if(this.started){var e=og.call(this,r,t);t&(Od|Ed)&&e[0].length-e[1].length===0&&(this.started=false);this.callback(this.manager,t,{pointers:e[0],changedPointers:e[1],pointerType:gd,srcEvent:r})}};return t}(ay);function og(r,t){var e=cy(r.touches);var n=cy(r.changedTouches);t&(Od|Ed)&&(e=ly(e.concat(n),"identifier",true));return[e,n]}
/**
 * @private
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */function ug(r,t,e){var n="DEPRECATED METHOD: "+t+"\n"+e+" AT \n";return function(){var t=new Error("get-stack-trace");var e=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace";var a=window.console&&(window.console.warn||window.console.log);a&&a.call(window.console,n,e);return r.apply(this,arguments)}}
/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */var vg=ug((function(r,t,e){var n=Object.keys(t);var a=0;while(a<n.length){(!e||e&&r[n[a]]===void 0)&&(r[n[a]]=t[n[a]]);a++}return r}),"extend","Use `assign`.");
/**
 * @private
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */var sg=ug((function(r,t){return vg(r,t,true)}),"merge","Use `assign`.");
/**
 * @private
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */function fg(r,t,e){var n=t.prototype;var a;a=r.prototype=Object.create(n);a.constructor=r;a._super=n;e&&Hp(a,e)}
/**
 * @private
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */function cg(r,t){return function(){return r.apply(t,arguments)}}
/**
 * @private
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */var lg=function(){var r=function(r,t){t===void 0&&(t={});return new tg(r,Xp({recognizers:Ky.concat()},t))};r.VERSION="2.0.17-rc";r.DIRECTION_ALL=Cd;r.DIRECTION_DOWN=jd;r.DIRECTION_LEFT=Ad;r.DIRECTION_RIGHT=Pd;r.DIRECTION_UP=Id;r.DIRECTION_HORIZONTAL=xd;r.DIRECTION_VERTICAL=kd;r.DIRECTION_NONE=Dd;r.DIRECTION_DOWN=jd;r.INPUT_START=Sd;r.INPUT_MOVE=Td;r.INPUT_END=Od;r.INPUT_CANCEL=Ed;r.STATE_POSSIBLE=Iy;r.STATE_BEGAN=jy;r.STATE_CHANGED=xy;r.STATE_ENDED=ky;r.STATE_RECOGNIZED=Cy;r.STATE_CANCELLED=My;r.STATE_FAILED=Ny;r.Manager=tg;r.Input=ay;r.TouchAction=Ud;r.TouchInput=dy;r.MouseInput=_y;r.PointerEventInput=fy;r.TouchMouseInput=Dy;r.SingleTouchInput=ig;r.Recognizer=Uy;r.AttrRecognizer=Wy;r.Tap=qy;r.Pan=Xy;r.Swipe=Vy;r.Pinch=By;r.Rotate=Gy;r.Press=Hy;r.on=ty;r.off=ey;r.each=Rd;r.merge=sg;r.extend=vg;r.bindFn=cg;r.assign=Hp;r.inherit=fg;r.bindFn=cg;r.prefixed=td;r.toArray=cy;r.inArray=iy;r.uniqueArray=ly;r.splitStr=ry;r.boolOrFn=Fd;r.hasParent=qd;r.addEventListeners=ty;r.removeEventListeners=ey;r.defaults=Hp({},Jy,{preset:Ky});return r}();const hg=qf("DELETE");
/**
 * Pure version of deepObjectAssign, it doesn't modify any of it's arguments.
 * @param base - The base object that fullfils the whole interface T.
 * @param updates - Updates that may change or delete props.
 * @returns A brand new instance with all the supplied objects deeply merged.
 */function pg(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return dg({},r,...e)}
/**
 * Deep version of object assign with additional deleting by the DELETE symbol.
 * @param values - Objects to be deeply merged.
 * @returns The first object from values.
 */function dg(){const r=yg(...arguments);mg(r);return r}
/**
 * Deep version of object assign with additional deleting by the DELETE symbol.
 * @remarks
 * This doesn't strip the DELETE symbols so they may end up in the final object.
 * @param values - Objects to be deeply merged.
 * @returns The first object from values.
 */function yg(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];if(t.length<2)return t[0];if(t.length>2)return yg(dg(t[0],t[1]),...ac(t).call(t,2));const n=t[0];const a=t[1];if(n instanceof Date&&a instanceof Date){n.setTime(a.getTime());return n}for(const r of wc(a))Object.prototype.propertyIsEnumerable.call(a,r)&&(a[r]===hg?delete n[r]:n[r]===null||a[r]===null||typeof n[r]!=="object"||typeof a[r]!=="object"||Nc(n[r])||Nc(a[r])?n[r]=gg(a[r]):n[r]=yg(n[r],a[r]));return n}
/**
 * Deep clone given object or array. In case of primitive simply return.
 * @param a - Anything.
 * @returns Deep cloned object/array or unchanged a.
 */function gg(r){return Nc(r)?lf(r).call(r,(r=>gg(r))):typeof r==="object"&&r!==null?r instanceof Date?new Date(r.getTime()):yg({},r):r}
/**
 * Strip DELETE from given object.
 * @param a - Object which may contain DELETE but won't after this is executed.
 */function mg(r){for(const t of Jc(r))r[t]===hg?delete r[t]:typeof r[t]==="object"&&r[t]!==null&&mg(r[t])}
/**
 * Setup a mock hammer.js object, for unit testing.
 *
 * Inspiration: https://github.com/uber/deck.gl/pull/658
 * @returns {{on: noop, off: noop, destroy: noop, emit: noop, get: get}}
 */function bg(){const r=()=>{};return{on:r,off:r,destroy:r,emit:r,get(){return{set:r}}}}const _g=typeof window!=="undefined"?window.Hammer||lg:function(){return bg()};
/**
 * Turn an element into an clickToUse element.
 * When not active, the element has a transparent overlay. When the overlay is
 * clicked, the mode is changed to active.
 * When active, the element is displayed with a blue border around it, and
 * the interactive contents of the element can be used. When clicked outside
 * the element, the elements mode is changed to inactive.
 * @param {Element} container
 * @class Activator
 */function wg(r){var t;this._cleanupQueue=[];this.active=false;this._dom={container:r,overlay:document.createElement("div")};this._dom.overlay.classList.add("vis-overlay");this._dom.container.appendChild(this._dom.overlay);this._cleanupQueue.push((()=>{this._dom.overlay.parentNode.removeChild(this._dom.overlay)}));const e=_g(this._dom.overlay);e.on("tap",es(t=this._onTapOverlay).call(t,this));this._cleanupQueue.push((()=>{e.destroy()}));const n=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"];dl(n).call(n,(r=>{e.on(r,(r=>{r.srcEvent.stopPropagation()}))}));if(document&&document.body){this._onClick=t=>{Sg(t.target,r)||this.deactivate()};document.body.addEventListener("click",this._onClick);this._cleanupQueue.push((()=>{document.body.removeEventListener("click",this._onClick)}))}this._escListener=r=>{("key"in r?r.key==="Escape":r.keyCode===27)&&this.deactivate()}}Yp(wg.prototype);wg.current=null;wg.prototype.destroy=function(){this.deactivate();for(const e of kl(r=th(t=this._cleanupQueue).call(t,0)).call(r)){var r,t;e()}};wg.prototype.activate=function(){wg.current&&wg.current.deactivate();wg.current=this;this.active=true;this._dom.overlay.style.display="none";this._dom.container.classList.add("vis-active");this.emit("change");this.emit("activate");document.body.addEventListener("keydown",this._escListener)};wg.prototype.deactivate=function(){this.active=false;this._dom.overlay.style.display="block";this._dom.container.classList.remove("vis-active");document.body.removeEventListener("keydown",this._escListener);this.emit("change");this.emit("deactivate")};
/**
 * Handle a tap event: activate the container
 * @param {Event}  event   The event
 * @private
 */wg.prototype._onTapOverlay=function(r){this.activate();r.srcEvent.stopPropagation()};
/**
 * Test whether the element has the requested parent element somewhere in
 * its chain of parent nodes.
 * @param {HTMLElement} element
 * @param {HTMLElement} parent
 * @returns {boolean} Returns true when the parent is found somewhere in the
 *                    chain of parent nodes.
 * @private
 */function Sg(r,t){while(r){if(r===t)return true;r=r.parentNode}return false}var Tg;var Og;function Eg(){if(Og)return Tg;Og=1;Ya();var r=ar();Tg=r.Object.getOwnPropertySymbols;return Tg}var Dg;var Ag;function Pg(){if(Ag)return Dg;Ag=1;var r=Eg();Dg=r;return Dg}var Ig;var jg;function xg(){if(jg)return Ig;jg=1;Ig=Pg();return Ig}var kg=xg();var Cg=t(kg);var Mg={exports:{}};var Ng={};var Rg;function Fg(){if(Rg)return Ng;Rg=1;var r=Wt();var t=s();var e=Z();var n=wt().f;var a=x();var i=!a||t((function(){n(1)}));r({target:"Object",stat:true,forced:i,sham:!a},{getOwnPropertyDescriptor:function(r,t){return n(e(r),t)}});return Ng}var Lg;function zg(){if(Lg)return Mg.exports;Lg=1;Fg();var r=ar();var t=r.Object;var e=Mg.exports=function(r,e){return t.getOwnPropertyDescriptor(r,e)};t.getOwnPropertyDescriptor.sham&&(e.sham=true);return Mg.exports}var Ug;var qg;function Wg(){if(qg)return Ug;qg=1;var r=zg();Ug=r;return Ug}var Yg;var Xg;function Vg(){if(Xg)return Yg;Xg=1;Yg=Wg();return Yg}var Bg=Vg();var Gg=t(Bg);var Hg={};var Jg;function Kg(){if(Jg)return Hg;Jg=1;var r=Wt();var t=x();var e=vc();var n=Z();var a=wt();var i=Pe();r({target:"Object",stat:true,sham:!t},{getOwnPropertyDescriptors:function(r){var t=n(r);var o=a.f;var u=e(t);var v={};var s=0;var f,c;while(u.length>s){c=o(t,f=u[s++]);c!==void 0&&i(v,f,c)}return v}});return Hg}var Qg;var Zg;function $g(){if(Zg)return Qg;Zg=1;Kg();var r=ar();Qg=r.Object.getOwnPropertyDescriptors;return Qg}var rm;var tm;function em(){if(tm)return rm;tm=1;var r=$g();rm=r;return rm}var nm;var am;function im(){if(am)return nm;am=1;nm=em();return nm}var om=im();var um=t(om);var vm={exports:{}};var sm={};var fm;function cm(){if(fm)return sm;fm=1;var r=Wt();var t=x();var e=On().f;r({target:"Object",stat:true,forced:Object.defineProperties!==e,sham:!t},{defineProperties:e});return sm}var lm;function hm(){if(lm)return vm.exports;lm=1;cm();var r=ar();var t=r.Object;var e=vm.exports=function(r,e){return t.defineProperties(r,e)};t.defineProperties.sham&&(e.sham=true);return vm.exports}var pm;var dm;function ym(){if(dm)return pm;dm=1;var r=hm();pm=r;return pm}var gm;var mm;function bm(){if(mm)return gm;mm=1;gm=ym();return gm}var _m=bm();var wm=t(_m);var Sm;var Tm;function Om(){if(Tm)return Sm;Tm=1;Sm=Jt();return Sm}var Em=Om();var Dm=t(Em);var Am={};var Pm={};var Im={exports:{}};var jm;var xm;function km(){if(xm)return jm;xm=1;var r=s();jm=r((function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}}));return jm}var Cm;var Mm;function Nm(){if(Mm)return Cm;Mm=1;var r=s();var t=tr();var e=w();var n=km();var a=Object.isExtensible;var i=r((function(){}));Cm=i||n?function(r){return!!t(r)&&((!n||e(r)!=="ArrayBuffer")&&(!a||a(r)))}:a;return Cm}var Rm;var Fm;function Lm(){if(Fm)return Rm;Fm=1;var r=s();Rm=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}));return Rm}var zm;function Um(){if(zm)return Im.exports;zm=1;var r=Wt();var t=m();var e=hn();var n=tr();var a=tt();var i=Rt().f;var o=Rn();var u=Wn();var v=Nm();var s=at();var f=Lm();var c=false;var l=s("meta");var h=0;var p=function(r){i(r,l,{value:{objectID:"O"+h++,weakData:{}}})};var d=function(r,t){if(!n(r))return typeof r=="symbol"?r:(typeof r=="string"?"S":"P")+r;if(!a(r,l)){if(!v(r))return"F";if(!t)return"E";p(r)}return r[l].objectID};var y=function(r,t){if(!a(r,l)){if(!v(r))return true;if(!t)return false;p(r)}return r[l].weakData};var g=function(r){f&&c&&v(r)&&!a(r,l)&&p(r);return r};var b=function(){_.enable=function(){};c=true;var e=o.f;var n=t([].splice);var a={};a[l]=1;if(e(a).length){o.f=function(r){var t=e(r);for(var a=0,i=t.length;a<i;a++)if(t[a]===l){n(t,a,1);break}return t};r({target:"Object",stat:true,forced:true},{getOwnPropertyNames:u.f})}};var _=Im.exports={enable:b,fastKey:d,getWeakData:y,onFreeze:g};e[l]=true;return Im.exports}var qm;var Wm;function Ym(){if(Wm)return qm;Wm=1;var r=ut();var t=Gi();var e=r("iterator");var n=Array.prototype;qm=function(r){return r!==void 0&&(t.Array===r||n[e]===r)};return qm}var Xm;var Vm;function Bm(){if(Vm)return Xm;Vm=1;var r=Me();var t=Mr();var e=B();var n=Gi();var a=ut();var i=a("iterator");Xm=function(a){if(!e(a))return t(a,i)||t(a,"@@iterator")||n[r(a)]};return Xm}var Gm;var Hm;function Jm(){if(Hm)return Gm;Hm=1;var r=M();var t=xr();var e=Mt();var n=Pr();var a=Bm();var i=TypeError;Gm=function(o,u){var v=arguments.length<2?a(o):u;if(t(v))return e(r(v,o));throw new i(n(o)+" is not iterable")};return Gm}var Km;var Qm;function Zm(){if(Qm)return Km;Qm=1;var r=M();var t=Mt();var e=Mr();Km=function(n,a,i){var o,u;t(n);try{o=e(n,"return");if(!o){if(a==="throw")throw i;return i}o=r(o,n)}catch(r){u=true;o=r}if(a==="throw")throw i;if(u)throw o;t(o);return i};return Km}var $m;var rb;function tb(){if(rb)return $m;rb=1;var r=At();var t=M();var e=Mt();var n=Pr();var a=Ym();var i=Se();var o=fr();var u=Jm();var v=Bm();var s=Zm();var f=TypeError;var c=function(r,t){this.stopped=r;this.result=t};var l=c.prototype;$m=function(h,p,d){var y=d&&d.that;var g=!!(d&&d.AS_ENTRIES);var m=!!(d&&d.IS_RECORD);var b=!!(d&&d.IS_ITERATOR);var _=!!(d&&d.INTERRUPTED);var w=r(p,y);var S,T,O,E,D,A,P;var I=function(r){S&&s(S,"normal");return new c(true,r)};var j=function(r){if(g){e(r);return _?w(r[0],r[1],I):w(r[0],r[1])}return _?w(r,I):w(r)};if(m)S=h.iterator;else if(b)S=h;else{T=v(h);if(!T)throw new f(n(h)+" is not iterable");if(a(T)){for(O=0,E=i(h);E>O;O++){D=j(h[O]);if(D&&o(l,D))return D}return new c(false)}S=u(h,T)}A=m?h.next:S.next;while(!(P=t(A,S)).done){try{D=j(P.value)}catch(r){s(S,"throw",r)}if(typeof D=="object"&&D&&o(l,D))return D}return new c(false)};return $m}var eb;var nb;function ab(){if(nb)return eb;nb=1;var r=fr();var t=TypeError;eb=function(e,n){if(r(n,e))return e;throw new t("Incorrect invocation")};return eb}var ib;var ob;function ub(){if(ob)return ib;ob=1;var r=Wt();var t=o();var e=Um();var n=s();var a=zt();var i=tb();var u=ab();var v=A();var f=tr();var c=B();var l=la();var h=Rt().f;var p=wa().forEach;var d=x();var y=ma();var g=y.set;var m=y.getterFor;ib=function(o,s,y){var b=o.indexOf("Map")!==-1;var _=o.indexOf("Weak")!==-1;var w=b?"set":"add";var S=t[o];var T=S&&S.prototype;var O={};var E;if(d&&v(S)&&(_||T.forEach&&!n((function(){(new S).entries().next()})))){E=s((function(r,t){g(u(r,D),{type:o,collection:new S});c(t)||i(t,r[w],{that:r,AS_ENTRIES:b})}));var D=E.prototype;var A=m(o);p(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(r){var t=r==="add"||r==="set";!(r in T)||_&&r==="clear"||a(D,r,(function(e,n){var a=A(this).collection;if(!t&&_&&!f(e))return r==="get"&&void 0;var i=a[r](e===0?0:e,n);return t?this:i}))}));_||h(D,"size",{configurable:true,get:function(){return A(this).collection.size}})}else{E=y.getConstructor(s,o,b,w);e.enable()}l(E,o,false,true);O[o]=E;r({global:true,forced:true},O);_||y.setStrong(E,o,b);return E};return ib}var vb;var sb;function fb(){if(sb)return vb;sb=1;var r=Hn();vb=function(t,e,n){for(var a in e)n&&n.unsafe&&t[a]?t[a]=e[a]:r(t,a,e[a],n);return t};return vb}var cb;var lb;function hb(){if(lb)return cb;lb=1;var r=ur();var t=Qn();var e=ut();var n=x();var a=e("species");cb=function(e){var i=r(e);n&&i&&!i[a]&&t(i,a,{configurable:true,get:function(){return this}})};return cb}var pb;var db;function yb(){if(db)return pb;db=1;var r=Cn();var t=Qn();var e=fb();var n=At();var a=ab();var i=B();var o=tb();var u=Oo();var v=Ao();var s=hb();var f=x();var c=Um().fastKey;var l=ma();var h=l.set;var p=l.getterFor;pb={getConstructor:function(u,v,s,l){var d=u((function(t,e){a(t,y);h(t,{type:v,index:r(null),first:null,last:null,size:0});f||(t.size=0);i(e)||o(e,t[l],{that:t,AS_ENTRIES:s})}));var y=d.prototype;var g=p(v);var m=function(r,t,e){var n=g(r);var a=b(r,t);var i,o;if(a)a.value=e;else{n.last=a={index:o=c(t,true),key:t,value:e,previous:i=n.last,next:null,removed:false};n.first||(n.first=a);i&&(i.next=a);f?n.size++:r.size++;o!=="F"&&(n.index[o]=a)}return r};var b=function(r,t){var e=g(r);var n=c(t);var a;if(n!=="F")return e.index[n];for(a=e.first;a;a=a.next)if(a.key===t)return a};e(y,{clear:function(){var t=this;var e=g(t);var n=e.first;while(n){n.removed=true;n.previous&&(n.previous=n.previous.next=null);n=n.next}e.first=e.last=null;e.index=r(null);f?e.size=0:t.size=0},delete:function(r){var t=this;var e=g(t);var n=b(t,r);if(n){var a=n.next;var i=n.previous;delete e.index[n.index];n.removed=true;i&&(i.next=a);a&&(a.previous=i);e.first===n&&(e.first=a);e.last===n&&(e.last=i);f?e.size--:t.size--}return!!n},forEach:function(r){var t=g(this);var e=n(r,arguments.length>1?arguments[1]:void 0);var a;while(a=a?a.next:t.first){e(a.value,a.key,this);while(a&&a.removed)a=a.previous}},has:function(r){return!!b(this,r)}});e(y,s?{get:function(r){var t=b(this,r);return t&&t.value},set:function(r,t){return m(this,r===0?0:r,t)}}:{add:function(r){return m(this,r=r===0?0:r,r)}});f&&t(y,"size",{configurable:true,get:function(){return g(this).size}});return d},setStrong:function(r,t,e){var n=t+" Iterator";var a=p(t);var i=p(n);u(r,t,(function(r,t){h(this,{type:n,target:r,state:a(r),kind:t,last:null})}),(function(){var r=i(this);var t=r.kind;var e=r.last;while(e&&e.removed)e=e.previous;if(!r.target||!(r.last=e=e?e.next:r.state.first)){r.target=null;return v(void 0,true)}return v(t==="keys"?e.key:t==="values"?e.value:[e.key,e.value],false)}),e?"entries":"values",!e,true);s(t)}};return pb}var gb;function mb(){if(gb)return Pm;gb=1;var r=ub();var t=yb();r("Map",(function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}}),t);return Pm}var bb;function _b(){if(bb)return Am;bb=1;mb();return Am}var wb={};var Sb;var Tb;function Ob(){if(Tb)return Sb;Tb=1;Sb=function(r,t){return t===1?function(t,e){return t[r](e)}:function(t,e,n){return t[r](e,n)}};return Sb}var Eb;var Db;function Ab(){if(Db)return Eb;Db=1;var r=ur();var t=Ob();var e=r("Map");Eb={Map:e,set:t("set",2),get:t("get",1),has:t("has",1),remove:t("delete",1),proto:e.prototype};return Eb}var Pb;function Ib(){if(Pb)return wb;Pb=1;var r=Wt();var t=m();var e=xr();var n=J();var a=tb();var i=Ab();var o=qr();var u=s();var v=i.Map;var f=i.has;var c=i.get;var l=i.set;var h=t([].push);var p=o||u((function(){return v.groupBy("ab",(function(r){return r})).get("a").length!==1}));r({target:"Map",stat:true,forced:o||p},{groupBy:function(r,t){n(r);e(t);var i=new v;var o=0;a(r,(function(r){var e=t(r,o++);f(i,e)?h(c(i,e),r):l(i,e,[r])}));return i}});return wb}var jb;var xb;function kb(){if(xb)return jb;xb=1;jo();_b();Ib();Ju();var r=ar();jb=r.Map;return jb}var Cb;var Mb;function Nb(){if(Mb)return Cb;Mb=1;var r=kb();No();Cb=r;return Cb}var Rb;var Fb;function Lb(){if(Fb)return Rb;Fb=1;Rb=Nb();return Rb}var zb=Lb();var Ub=t(zb);var qb={};var Wb;function Yb(){if(Wb)return qb;Wb=1;var r=Wt();var t=wa().some;var e=ss();var n=e("some");r({target:"Array",proto:true,forced:!n},{some:function(r){return t(this,r,arguments.length>1?arguments[1]:void 0)}});return qb}var Xb;var Vb;function Bb(){if(Vb)return Xb;Vb=1;Yb();var r=Wv();Xb=r("Array","some");return Xb}var Gb;var Hb;function Jb(){if(Hb)return Gb;Hb=1;var r=fr();var t=Bb();var e=Array.prototype;Gb=function(n){var a=n.some;return n===e||r(e,n)&&a===e.some?t:a};return Gb}var Kb;var Qb;function Zb(){if(Qb)return Kb;Qb=1;var r=Jb();Kb=r;return Kb}var $b;var r_;function t_(){if(r_)return $b;r_=1;$b=Zb();return $b}var e_=t_();var n_=t(e_);var a_;var i_;function o_(){if(i_)return a_;i_=1;jo();var r=Wv();a_=r("Array","keys");return a_}var u_;var v_;function s_(){if(v_)return u_;v_=1;var r=o_();u_=r;return u_}var f_;var c_;function l_(){if(c_)return f_;c_=1;No();var r=Me();var t=tt();var e=fr();var n=s_();var a=Array.prototype;var i={DOMTokenList:true,NodeList:true};f_=function(o){var u=o.keys;return o===a||e(a,o)&&u===a.keys||t(i,r(o))?n:u};return f_}var h_;var p_;function d_(){if(p_)return h_;p_=1;h_=l_();return h_}var y_=d_();var g_=t(y_);var m_={};var b_;var __;function w_(){if(__)return b_;__=1;var r=Un();var t=Math.floor;var e=function(n,a){var i=n.length;if(i<8){var o=1;var u,v;while(o<i){v=o;u=n[o];while(v&&a(n[v-1],u)>0)n[v]=n[--v];v!==o++&&(n[v]=u)}}else{var s=t(i/2);var f=e(r(n,0,s),a);var c=e(r(n,s),a);var l=f.length;var h=c.length;var p=0;var d=0;while(p<l||d<h)n[p+d]=p<l&&d<h?a(f[p],c[d])<=0?f[p++]:c[d++]:p<l?f[p++]:c[d++]}return n};b_=e;return b_}var S_;var T_;function O_(){if(T_)return S_;T_=1;var r=hr();var t=r.match(/firefox\/(\d+)/i);S_=!!t&&+t[1];return S_}var E_;var D_;function A_(){if(D_)return E_;D_=1;var r=hr();E_=/MSIE|Trident/.test(r);return E_}var P_;var I_;function j_(){if(I_)return P_;I_=1;var r=hr();var t=r.match(/AppleWebKit\/(\d+)\./);P_=!!t&&+t[1];return P_}var x_;function k_(){if(x_)return m_;x_=1;var r=Wt();var t=m();var e=xr();var n=Zr();var a=Se();var i=zl();var o=en();var u=s();var v=w_();var f=ss();var c=O_();var l=A_();var h=yr();var p=j_();var d=[];var y=t(d.sort);var g=t(d.push);var b=u((function(){d.sort(void 0)}));var _=u((function(){d.sort(null)}));var w=f("sort");var S=!u((function(){if(h)return h<70;if(!(c&&c>3)){if(l)return true;if(p)return p<603;var r="";var t,e,n,a;for(t=65;t<76;t++){e=String.fromCharCode(t);switch(t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(a=0;a<47;a++)d.push({k:e+a,v:n})}d.sort((function(r,t){return t.v-r.v}));for(a=0;a<d.length;a++){e=d[a].k.charAt(0);r.charAt(r.length-1)!==e&&(r+=e)}return r!=="DGBEFHACIJK"}}));var T=b||!_||!w||!S;var O=function(r){return function(t,e){return e===void 0?-1:t===void 0?1:r!==void 0?+r(t,e)||0:o(t)>o(e)?1:-1}};r({target:"Array",proto:true,forced:T},{sort:function(r){r!==void 0&&e(r);var t=n(this);if(S)return r===void 0?y(t):y(t,r);var o=[];var u=a(t);var s,f;for(f=0;f<u;f++)f in t&&g(o,t[f]);v(o,O(r));s=a(o);f=0;while(f<s)t[f]=o[f++];while(f<u)i(t,f++);return t}});return m_}var C_;var M_;function N_(){if(M_)return C_;M_=1;k_();var r=Wv();C_=r("Array","sort");return C_}var R_;var F_;function L_(){if(F_)return R_;F_=1;var r=fr();var t=N_();var e=Array.prototype;R_=function(n){var a=n.sort;return n===e||r(e,n)&&a===e.sort?t:a};return R_}var z_;var U_;function q_(){if(U_)return z_;U_=1;var r=L_();z_=r;return z_}var W_;var Y_;function X_(){if(Y_)return W_;Y_=1;W_=q_();return W_}var V_=X_();var B_=t(V_);var G_;var H_;function J_(){if(H_)return G_;H_=1;jo();var r=Wv();G_=r("Array","values");return G_}var K_;var Q_;function Z_(){if(Q_)return K_;Q_=1;var r=J_();K_=r;return K_}var $_;var rw;function tw(){if(rw)return $_;rw=1;No();var r=Me();var t=tt();var e=fr();var n=Z_();var a=Array.prototype;var i={DOMTokenList:true,NodeList:true};$_=function(o){var u=o.values;return o===a||e(a,o)&&u===a.values||t(i,r(o))?n:u};return $_}var ew;var nw;function aw(){if(nw)return ew;nw=1;ew=tw();return ew}var iw=aw();var ow=t(iw);var uw;var vw;function sw(){if(vw)return uw;vw=1;uw=tv();return uw}var fw=sw();var cw=t(fw);var lw;var hw;function pw(){if(hw)return lw;hw=1;jo();var r=Wv();lw=r("Array","entries");return lw}var dw;var yw;function gw(){if(yw)return dw;yw=1;var r=pw();dw=r;return dw}var mw;var bw;function _w(){if(bw)return mw;bw=1;No();var r=Me();var t=tt();var e=fr();var n=gw();var a=Array.prototype;var i={DOMTokenList:true,NodeList:true};mw=function(o){var u=o.entries;return o===a||e(a,o)&&u===a.entries||t(i,r(o))?n:u};return mw}var ww;var Sw;function Tw(){if(Sw)return ww;Sw=1;ww=_w();return ww}var Ow=Tw();var Ew=t(Ow);const Dw=[];for(let r=0;r<256;++r)Dw.push((r+256).toString(16).slice(1));function Aw(r,t=0){return(Dw[r[t+0]]+Dw[r[t+1]]+Dw[r[t+2]]+Dw[r[t+3]]+"-"+Dw[r[t+4]]+Dw[r[t+5]]+"-"+Dw[r[t+6]]+Dw[r[t+7]]+"-"+Dw[r[t+8]]+Dw[r[t+9]]+"-"+Dw[r[t+10]]+Dw[r[t+11]]+Dw[r[t+12]]+Dw[r[t+13]]+Dw[r[t+14]]+Dw[r[t+15]]).toLowerCase()}let Pw;const Iw=new Uint8Array(16);function jw(){if(!Pw){if(typeof crypto==="undefined"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Pw=crypto.getRandomValues.bind(crypto)}return Pw(Iw)}const xw=typeof crypto!=="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var kw={randomUUID:xw};function Cw(r,t,e){r=r||{};const n=r.random??r.rng?.()??jw();if(n.length<16)throw new Error("Random bytes length must be >= 16");n[6]=n[6]&15|64;n[8]=n[8]&63|128;return Aw(n)}function Mw(r,t,e){return kw.randomUUID&&!r?kw.randomUUID():Cw(r)}
/**
 * Determine whether a value can be used as an id.
 * @param value - Input value of unknown type.
 * @returns True if the value is valid id, false otherwise.
 */function Nw(r){return typeof r==="string"||typeof r==="number"}
/**
 * A queue.
 * @typeParam T - The type of method names to be replaced by queued versions.
 */class Queue{
/**
   * Construct a new Queue.
   * @param options - Queue configuration.
   */
constructor(r){Cv(this,"_queue",[]);Cv(this,"_timeout",null);Cv(this,"_extended",null);this.delay=null;this.max=Infinity;this.setOptions(r)}
/**
   * Update the configuration of the queue.
   * @param options - Queue configuration.
   */setOptions(r){r&&typeof r.delay!=="undefined"&&(this.delay=r.delay);r&&typeof r.max!=="undefined"&&(this.max=r.max);this._flushIfNeeded()}
/**
   * Extend an object with queuing functionality.
   * The object will be extended with a function flush, and the methods provided in options.replace will be replaced with queued ones.
   * @param object - The object to be extended.
   * @param options - Additional options.
   * @returns The created queue.
   */static extend(r,t){const e=new Queue(t);if(r.flush!==void 0)throw new Error("Target object already has a property flush");r.flush=()=>{e.flush()};const n=[{name:"flush",original:void 0}];if(t&&t.replace)for(let a=0;a<t.replace.length;a++){const i=t.replace[a];n.push({name:i,original:r[i]});e.replace(r,i)}e._extended={object:r,methods:n};return e}destroy(){this.flush();if(this._extended){const r=this._extended.object;const t=this._extended.methods;for(let e=0;e<t.length;e++){const n=t[e];n.original?r[n.name]=n.original:delete r[n.name]}this._extended=null}}
/**
   * Replace a method on an object with a queued version.
   * @param object - Object having the method.
   * @param method - The method name.
   */replace(r,t){
/* eslint-disable-next-line @typescript-eslint/no-this-alias -- Function this is necessary in the function bellow, so class this has to be saved into a variable here. */
const e=this;const n=r[t];if(!n)throw new Error("Method "+t+" undefined");r[t]=function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];e.queue({args:t,fn:n,context:this})}}
/**
   * Queue a call.
   * @param entry - The function or entry to be queued.
   */queue(r){typeof r==="function"?this._queue.push({fn:r}):this._queue.push(r);this._flushIfNeeded()}_flushIfNeeded(){this._queue.length>this.max&&this.flush();if(this._timeout!=null){clearTimeout(this._timeout);this._timeout=null}this.queue.length>0&&typeof this.delay==="number"&&(this._timeout=Lp((()=>{this.flush()}),this.delay))}flush(){var r,t;dl(r=th(t=this._queue).call(t,0)).call(r,(r=>{r.fn.apply(r.context||r.fn,r.args||[])}))}}
/**
 * {@link DataSet} code that can be reused in {@link DataView} or other similar implementations of {@link DataInterface}.
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 */class DataSetPart{constructor(){Cv(this,"_subscribers",{"*":[],add:[],remove:[],update:[]});
/**
     * @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
     */Cv(this,"subscribe",DataSetPart.prototype.on);
/**
     * @deprecated Use off instead (PS: DataView.unsubscribe === DataView.off).
     */Cv(this,"unsubscribe",DataSetPart.prototype.off)}
/**
   * Trigger an event
   * @param event - Event name.
   * @param payload - Event payload.
   * @param senderId - Id of the sender.
   */_trigger(r,t,e){var n;if(r==="*")throw new Error("Cannot trigger event *");dl(n=[...this._subscribers[r],...this._subscribers["*"]]).call(n,(n=>{n(r,t,e!=null?e:null)}))}
/**
   * Subscribe to an event, add an event listener.
   * @remarks Non-function callbacks are ignored.
   * @param event - Event name.
   * @param callback - Callback method.
   */on(r,t){typeof t==="function"&&this._subscribers[r].push(t)}
/**
   * Unsubscribe from an event, remove an event listener.
   * @remarks If the same callback was subscribed more than once **all** occurences will be removed.
   * @param event - Event name.
   * @param callback - Callback method.
   */off(r,t){var e;this._subscribers[r]=Hs(e=this._subscribers[r]).call(e,(r=>r!==t))}}var Rw={};var Fw={};var Lw;function zw(){if(Lw)return Fw;Lw=1;var r=ub();var t=yb();r("Set",(function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}}),t);return Fw}var Uw;function qw(){if(Uw)return Rw;Uw=1;zw();return Rw}var Ww={};var Yw;var Xw;function Vw(){if(Xw)return Yw;Xw=1;var r=Pr();var t=TypeError;Yw=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"add"in e&&"delete"in e&&"keys"in e)return e;throw new t(r(e)+" is not a set")};return Yw}var Bw;var Gw;function Hw(){if(Gw)return Bw;Gw=1;var r=ur();var t=Ob();var e=r("Set");var n=e.prototype;Bw={Set:e,add:t("add",1),has:t("has",1),remove:t("delete",1),proto:n};return Bw}var Jw;var Kw;function Qw(){if(Kw)return Jw;Kw=1;var r=M();Jw=function(t,e,n){var a=n?t:t.iterator;var i=t.next;var o,u;while(!(o=r(i,a)).done){u=e(o.value);if(u!==void 0)return u}};return Jw}var Zw;var $w;function rS(){if($w)return Zw;$w=1;var r=Qw();Zw=function(t,e,n){return n?r(t.keys(),e,true):t.forEach(e)};return Zw}var tS;var eS;function nS(){if(eS)return tS;eS=1;var r=Hw();var t=rS();var e=r.Set;var n=r.add;tS=function(r){var a=new e;t(r,(function(r){n(a,r)}));return a};return tS}var aS;var iS;function oS(){if(iS)return aS;iS=1;aS=function(r){return r.size};return aS}var uS;var vS;function sS(){if(vS)return uS;vS=1;uS=function(r){return{iterator:r,next:r.next,done:false}};return uS}var fS;var cS;function lS(){if(cS)return fS;cS=1;var r=xr();var t=Mt();var e=M();var n=ye();var a=sS();var i="Invalid size";var o=RangeError;var u=TypeError;var v=Math.max;var s=function(t,e){this.set=t;this.size=v(e,0);this.has=r(t.has);this.keys=r(t.keys)};s.prototype={getIterator:function(){return a(t(e(this.keys,this.set)))},includes:function(r){return e(this.has,this.set,r)}};fS=function(r){t(r);var e=+r.size;if(e!==e)throw new u(i);var a=n(e);if(a<0)throw new o(i);return new s(r,a)};return fS}var hS;var pS;function dS(){if(pS)return hS;pS=1;var r=Vw();var t=Hw();var e=nS();var n=oS();var a=lS();var i=rS();var o=Qw();var u=t.has;var v=t.remove;hS=function(t){var s=r(this);var f=a(t);var c=e(s);n(s)<=f.size?i(s,(function(r){f.includes(r)&&v(c,r)})):o(f.getIterator(),(function(r){u(c,r)&&v(c,r)}));return c};return hS}var yS;var gS;function mS(){if(gS)return yS;gS=1;yS=function(){return false};return yS}var bS;function _S(){if(bS)return Ww;bS=1;var r=Wt();var t=dS();var e=s();var n=mS();var a=!n("difference",(function(r){return r.size===0}));var i=a||e((function(){var r={size:1,has:function(){return true},keys:function(){var r=0;return{next:function(){var e=r++>1;t.has(1)&&t.clear();return{done:e,value:2}}}}};var t=new Set([1,2,3,4]);return t.difference(r).size!==3}));r({target:"Set",proto:true,real:true,forced:i},{difference:t});return Ww}var wS={};var SS;var TS;function OS(){if(TS)return SS;TS=1;var r=Vw();var t=Hw();var e=oS();var n=lS();var a=rS();var i=Qw();var o=t.Set;var u=t.add;var v=t.has;SS=function(t){var s=r(this);var f=n(t);var c=new o;e(s)>f.size?i(f.getIterator(),(function(r){v(s,r)&&u(c,r)})):a(s,(function(r){f.includes(r)&&u(c,r)}));return c};return SS}var ES;function DS(){if(ES)return wS;ES=1;var r=Wt();var t=s();var e=OS();var n=mS();var a=!n("intersection",(function(r){return r.size===2&&r.has(1)&&r.has(2)}))||t((function(){return String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))!=="3,2"}));r({target:"Set",proto:true,real:true,forced:a},{intersection:e});return wS}var AS={};var PS;var IS;function jS(){if(IS)return PS;IS=1;var r=Vw();var t=Hw().has;var e=oS();var n=lS();var a=rS();var i=Qw();var o=Zm();PS=function(u){var v=r(this);var s=n(u);if(e(v)<=s.size)return a(v,(function(r){if(s.includes(r))return false}),true)!==false;var f=s.getIterator();return i(f,(function(r){if(t(v,r))return o(f,"normal",false)}))!==false};return PS}var xS;function kS(){if(xS)return AS;xS=1;var r=Wt();var t=jS();var e=mS();var n=!e("isDisjointFrom",(function(r){return!r}));r({target:"Set",proto:true,real:true,forced:n},{isDisjointFrom:t});return AS}var CS={};var MS;var NS;function RS(){if(NS)return MS;NS=1;var r=Vw();var t=oS();var e=rS();var n=lS();MS=function(a){var i=r(this);var o=n(a);return!(t(i)>o.size)&&e(i,(function(r){if(!o.includes(r))return false}),true)!==false};return MS}var FS;function LS(){if(FS)return CS;FS=1;var r=Wt();var t=RS();var e=mS();var n=!e("isSubsetOf",(function(r){return r}));r({target:"Set",proto:true,real:true,forced:n},{isSubsetOf:t});return CS}var zS={};var US;var qS;function WS(){if(qS)return US;qS=1;var r=Vw();var t=Hw().has;var e=oS();var n=lS();var a=Qw();var i=Zm();US=function(o){var u=r(this);var v=n(o);if(e(u)<v.size)return false;var s=v.getIterator();return a(s,(function(r){if(!t(u,r))return i(s,"normal",false)}))!==false};return US}var YS;function XS(){if(YS)return zS;YS=1;var r=Wt();var t=WS();var e=mS();var n=!e("isSupersetOf",(function(r){return!r}));r({target:"Set",proto:true,real:true,forced:n},{isSupersetOf:t});return zS}var VS={};var BS;var GS;function HS(){if(GS)return BS;GS=1;var r=Vw();var t=Hw();var e=nS();var n=lS();var a=Qw();var i=t.add;var o=t.has;var u=t.remove;BS=function(t){var v=r(this);var s=n(t).getIterator();var f=e(v);a(s,(function(r){o(v,r)?u(f,r):i(f,r)}));return f};return BS}var JS;var KS;function QS(){if(KS)return JS;KS=1;JS=function(r){try{var t=new Set;var e={size:0,has:function(){return true},keys:function(){return Object.defineProperty({},"next",{get:function(){t.clear();t.add(4);return function(){return{done:true}}}})}};var n=t[r](e);return n.size===1&&n.values().next().value===4}catch(r){return false}};return JS}var ZS;function $S(){if(ZS)return VS;ZS=1;var r=Wt();var t=HS();var e=QS();var n=mS();var a=!n("symmetricDifference")||!e("symmetricDifference");r({target:"Set",proto:true,real:true,forced:a},{symmetricDifference:t});return VS}var rT={};var tT;var eT;function nT(){if(eT)return tT;eT=1;var r=Vw();var t=Hw().add;var e=nS();var n=lS();var a=Qw();tT=function(i){var o=r(this);var u=n(i).getIterator();var v=e(o);a(u,(function(r){t(v,r)}));return v};return tT}var aT;function iT(){if(aT)return rT;aT=1;var r=Wt();var t=nT();var e=QS();var n=mS();var a=!n("union")||!e("union");r({target:"Set",proto:true,real:true,forced:a},{union:t});return rT}var oT;var uT;function vT(){if(uT)return oT;uT=1;jo();qw();_S();DS();kS();LS();XS();$S();iT();Ju();var r=ar();oT=r.Set;return oT}var sT;var fT;function cT(){if(fT)return sT;fT=1;var r=vT();No();sT=r;return sT}var lT;var hT;function pT(){if(hT)return lT;hT=1;lT=cT();return lT}var dT=pT();var yT=t(dT);var gT;var mT;function bT(){if(mT)return gT;mT=1;jo();Ju();var r=Jm();gT=r;return gT}var _T;var wT;function ST(){if(wT)return _T;wT=1;var r=bT();No();_T=r;return _T}var TT;var OT;function ET(){if(OT)return TT;OT=1;var r=ST();TT=r;return TT}var DT;var AT;function PT(){if(AT)return DT;AT=1;var r=ET();DT=r;return DT}var IT;var jT;function xT(){if(jT)return IT;jT=1;IT=PT();return IT}var kT;var CT;function MT(){if(CT)return kT;CT=1;kT=xT();return kT}var NT=MT();var RT=t(NT);
/**
 * Data stream
 * @remarks
 * {@link DataStream} offers an always up to date stream of items from a {@link DataSet} or {@link DataView}.
 * That means that the stream is evaluated at the time of iteration, conversion to another data type or when {@link cache} is called, not when the {@link DataStream} was created.
 * Multiple invocations of for example {@link toItemArray} may yield different results (if the data source like for example {@link DataSet} gets modified).
 * @typeParam Item - The item type this stream is going to work with.
 */class DataStream{
/**
   * Create a new data stream.
   * @param pairs - The id, item pairs.
   */
constructor(r){this._pairs=r}*[cw](){for(const[r,t]of this._pairs)yield[r,t]}*entries(){for(const[r,t]of this._pairs)yield[r,t]}*keys(){for(const[r]of this._pairs)yield r}*values(){for(const[,r]of this._pairs)yield r}
/**
   * Return an array containing all the ids in this stream.
   * @remarks
   * The array may contain duplicities.
   * @returns The array with all ids from this stream.
   */toIdArray(){var r;return lf(r=[...this._pairs]).call(r,(r=>r[0]))}
/**
   * Return an array containing all the items in this stream.
   * @remarks
   * The array may contain duplicities.
   * @returns The array with all items from this stream.
   */toItemArray(){var r;return lf(r=[...this._pairs]).call(r,(r=>r[1]))}
/**
   * Return an array containing all the entries in this stream.
   * @remarks
   * The array may contain duplicities.
   * @returns The array with all entries from this stream.
   */toEntryArray(){return[...this._pairs]}
/**
   * Return an object map containing all the items in this stream accessible by ids.
   * @remarks
   * In case of duplicate ids (coerced to string so `7 == '7'`) the last encoutered appears in the returned object.
   * @returns The object map of all id → item pairs from this stream.
   */toObjectMap(){const r=Bh(null);for(const[t,e]of this._pairs)r[t]=e;return r}
/**
   * Return a map containing all the items in this stream accessible by ids.
   * @returns The map of all id → item pairs from this stream.
   */toMap(){return new Ub(this._pairs)}
/**
   * Return a set containing all the (unique) ids in this stream.
   * @returns The set of all ids from this stream.
   */toIdSet(){return new yT(this.toIdArray())}
/**
   * Return a set containing all the (unique) items in this stream.
   * @returns The set of all items from this stream.
   */toItemSet(){return new yT(this.toItemArray())}
/**
   * Cache the items from this stream.
   * @remarks
   * This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
   * It can also be used to optimize performance as {@link DataStream} would otherwise reevaluate everything upon each iteration.
   *
   * ## Example
   * ```javascript
   * const ds = new DataSet([…])
   *
   * const cachedStream = ds.stream()
   *   .filter(…)
   *   .sort(…)
   *   .map(…)
   *   .cached(…) // Data are fetched, processed and cached here.
   *
   * ds.clear()
   * chachedStream // Still has all the items.
   * ```
   * @returns A new {@link DataStream} with cached items (detached from the original {@link DataSet}).
   */cache(){return new DataStream([...this._pairs])}
/**
   * Get the distinct values of given property.
   * @param callback - The function that picks and possibly converts the property.
   * @typeParam T - The type of the distinct value.
   * @returns A set of all distinct properties.
   */distinct(r){const t=new yT;for(const[e,n]of this._pairs)t.add(r(n,e));return t}
/**
   * Filter the items of the stream.
   * @param callback - The function that decides whether an item will be included.
   * @returns A new data stream with the filtered items.
   */filter(r){const t=this._pairs;return new DataStream({*[cw](){for(const[e,n]of t)r(n,e)&&(yield[e,n])}})}
/**
   * Execute a callback for each item of the stream.
   * @param callback - The function that will be invoked for each item.
   */forEach(r){for(const[t,e]of this._pairs)r(e,t)}
/**
   * Map the items into a different type.
   * @param callback - The function that does the conversion.
   * @typeParam Mapped - The type of the item after mapping.
   * @returns A new data stream with the mapped items.
   */map(r){const t=this._pairs;return new DataStream({*[cw](){for(const[e,n]of t)yield[e,r(n,e)]}})}
/**
   * Get the item with the maximum value of given property.
   * @param callback - The function that picks and possibly converts the property.
   * @returns The item with the maximum if found otherwise null.
   */max(r){const t=RT(this._pairs);let e=t.next();if(e.done)return null;let n=e.value[1];let a=r(e.value[1],e.value[0]);while(!(e=t.next()).done){const[t,i]=e.value;const o=r(i,t);if(o>a){a=o;n=i}}return n}
/**
   * Get the item with the minimum value of given property.
   * @param callback - The function that picks and possibly converts the property.
   * @returns The item with the minimum if found otherwise null.
   */min(r){const t=RT(this._pairs);let e=t.next();if(e.done)return null;let n=e.value[1];let a=r(e.value[1],e.value[0]);while(!(e=t.next()).done){const[t,i]=e.value;const o=r(i,t);if(o<a){a=o;n=i}}return n}
/**
   * Reduce the items into a single value.
   * @param callback - The function that does the reduction.
   * @param accumulator - The initial value of the accumulator.
   * @typeParam T - The type of the accumulated value.
   * @returns The reduced value.
   */reduce(r,t){for(const[e,n]of this._pairs)t=r(t,n,e);return t}
/**
   * Sort the items.
   * @param callback - Item comparator.
   * @returns A new stream with sorted items.
   */sort(r){return new DataStream({[cw]:()=>{var t;return RT(B_(t=[...this._pairs]).call(t,((t,e)=>{let[n,a]=t;let[i,o]=e;return r(a,o,n,i)})))}})}}function FT(r,t){var e=Jc(r);if(Cg){var n=Cg(r);t&&(n=Hs(n).call(n,(function(t){return Gg(r,t).enumerable}))),e.push.apply(e,n)}return e}function LT(r){for(var t=1;t<arguments.length;t++){var e,n;var a=null!=arguments[t]?arguments[t]:{};t%2?dl(e=FT(Object(a),true)).call(e,(function(t){Cv(r,t,a[t])})):um?wm(r,um(a)):dl(n=FT(Object(a))).call(n,(function(t){Dm(r,t,Gg(a,t))}))}return r}
/**
 * Add an id to given item if it doesn't have one already.
 * @remarks
 * The item will be modified.
 * @param item - The item that will have an id after a call to this function.
 * @param idProp - The key of the id property.
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 * @returns true
 */function zT(r,t){r[t]==null&&(r[t]=Mw());return r}
/**
 * # DataSet
 *
 * Vis.js comes with a flexible DataSet, which can be used to hold and
 * manipulate unstructured data and listen for changes in the data. The DataSet
 * is key/value based. Data items can be added, updated and removed from the
 * DataSet, and one can subscribe to changes in the DataSet. The data in the
 * DataSet can be filtered and ordered. Data can be normalized when appending it
 * to the DataSet as well.
 *
 * ## Example
 *
 * The following example shows how to use a DataSet.
 *
 * ```javascript
 * // create a DataSet
 * var options = {};
 * var data = new vis.DataSet(options);
 *
 * // add items
 * // note that the data items can contain different properties and data formats
 * data.add([
 * {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
 * {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
 * {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
 * {id: 4, text: 'item 4'}
 * ]);
 *
 * // subscribe to any change in the DataSet
 * data.on('*', function (event, properties, senderId) {
 * console.log('event', event, properties);
 * });
 *
 * // update an existing item
 * data.update({id: 2, group: 1});
 *
 * // remove an item
 * data.remove(4);
 *
 * // get all ids
 * var ids = data.getIds();
 * console.log('ids', ids);
 *
 * // get a specific item
 * var item1 = data.get(1);
 * console.log('item1', item1);
 *
 * // retrieve a filtered subset of the data
 * var items = data.get({
 * filter: function (item) {
 * return item.group == 1;
 * }
 * });
 * console.log('filtered items', items);
 * ```
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 */class DataSet extends DataSetPart{get idProp(){return this._idProp}
/**
   * Construct a new DataSet.
   * @param data - Initial data or options.
   * @param options - Options (type error if data is also options).
   */constructor(r,t){super();Cv(this,"_queue",null);if(r&&!Nc(r)){t=r;r=[]}this._options=t||{};this._data=new Ub;this.length=0;this._idProp=this._options.fieldId||"id";r&&r.length&&this.add(r);this.setOptions(t)}
/**
   * Set new options.
   * @param options - The new options.
   */setOptions(r){if(r&&r.queue!==void 0)if(r.queue===false){if(this._queue){this._queue.destroy();this._queue=null}}else{this._queue||(this._queue=Queue.extend(this,{replace:["add","update","remove"]}));r.queue&&typeof r.queue==="object"&&this._queue.setOptions(r.queue)}}
/**
   * Add a data item or an array with items.
   *
   * After the items are added to the DataSet, the DataSet will trigger an event `add`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
   *
   * ## Example
   *
   * ```javascript
   * // create a DataSet
   * const data = new vis.DataSet()
   *
   * // add items
   * const ids = data.add([
   * { id: 1, text: 'item 1' },
   * { id: 2, text: 'item 2' },
   * { text: 'item without an id' }
   * ])
   *
   * console.log(ids) // [1, 2, '<UUIDv4>']
   * ```
   * @param data - Items to be added (ids will be generated if missing).
   * @param senderId - Sender id.
   * @returns addedIds - Array with the ids (generated if not present) of the added items.
   * @throws When an item with the same id as any of the added items already exists.
   */add(r,t){const e=[];let n;if(Nc(r)){const t=lf(r).call(r,(r=>r[this._idProp]));if(n_(t).call(t,(r=>this._data.has(r))))throw new Error("A duplicate id was found in the parameter array.");for(let t=0,a=r.length;t<a;t++){n=this._addItem(r[t]);e.push(n)}}else{if(!r||typeof r!=="object")throw new Error("Unknown dataType");n=this._addItem(r);e.push(n)}e.length&&this._trigger("add",{items:e},t);return e}
/**
   * Update existing items. When an item does not exist, it will be created.
   * @remarks
   * The provided properties will be merged in the existing item. When an item does not exist, it will be created.
   *
   * After the items are updated, the DataSet will trigger an event `add` for the added items, and an event `update`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
   *
   * ## Example
   *
   * ```javascript
   * // create a DataSet
   * const data = new vis.DataSet([
   *   { id: 1, text: 'item 1' },
   *   { id: 2, text: 'item 2' },
   *   { id: 3, text: 'item 3' }
   * ])
   *
   * // update items
   * const ids = data.update([
   *   { id: 2, text: 'item 2 (updated)' },
   *   { id: 4, text: 'item 4 (new)' }
   * ])
   *
   * console.log(ids) // [2, 4]
   * ```
   *
   * ## Warning for TypeScript users
   * This method may introduce partial items into the data set. Use add or updateOnly instead for better type safety.
   * @param data - Items to be updated (if the id is already present) or added (if the id is missing).
   * @param senderId - Sender id.
   * @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
   * @throws When the supplied data is neither an item nor an array of items.
   */update(r,t){const e=[];const n=[];const a=[];const i=[];const o=this._idProp;const u=r=>{const t=r[o];if(t!=null&&this._data.has(t)){const e=r;const o=mh({},this._data.get(t));const u=this._updateItem(e);n.push(u);i.push(e);a.push(o)}else{const t=this._addItem(r);e.push(t)}};if(Nc(r))for(let t=0,e=r.length;t<e;t++)r[t]&&typeof r[t]==="object"?u(r[t]):console.warn("Ignoring input item, which is not an object at index "+t);else{if(!r||typeof r!=="object")throw new Error("Unknown dataType");u(r)}e.length&&this._trigger("add",{items:e},t);if(n.length){const r={items:n,oldData:a,data:i};this._trigger("update",r,t)}return kh(e).call(e,n)}
/**
   * Update existing items. When an item does not exist, an error will be thrown.
   * @remarks
   * The provided properties will be deeply merged into the existing item.
   * When an item does not exist (id not present in the data set or absent), an error will be thrown and nothing will be changed.
   *
   * After the items are updated, the DataSet will trigger an event `update`.
   * When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
   *
   * ## Example
   *
   * ```javascript
   * // create a DataSet
   * const data = new vis.DataSet([
   *   { id: 1, text: 'item 1' },
   *   { id: 2, text: 'item 2' },
   *   { id: 3, text: 'item 3' },
   * ])
   *
   * // update items
   * const ids = data.update([
   *   { id: 2, text: 'item 2 (updated)' }, // works
   *   // { id: 4, text: 'item 4 (new)' }, // would throw
   *   // { text: 'item 4 (new)' }, // would also throw
   * ])
   *
   * console.log(ids) // [2]
   * ```
   * @param data - Updates (the id and optionally other props) to the items in this data set.
   * @param senderId - Sender id.
   * @returns updatedIds - The ids of the updated items.
   * @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
   */updateOnly(r,t){var e;Nc(r)||(r=[r]);const n=lf(e=lf(r).call(r,(r=>{const t=this._data.get(r[this._idProp]);if(t==null)throw new Error("Updating non-existent items is not allowed.");return{oldData:t,update:r}}))).call(e,(r=>{let{oldData:t,update:e}=r;const n=t[this._idProp];const a=pg(t,e);this._data.set(n,a);return{id:n,oldData:t,updatedData:a}}));if(n.length){const r={items:lf(n).call(n,(r=>r.id)),oldData:lf(n).call(n,(r=>r.oldData)),data:lf(n).call(n,(r=>r.updatedData))};this._trigger("update",r,t);return r.items}return[]}get(r,t){let e;let n;let a;if(Nw(r)){e=r;a=t}else if(Nc(r)){n=r;a=t}else a=r;const i=a&&a.returnType==="Object"?"Object":"Array";const o=a&&Hs(a);const u=[];let v;let s;let f;if(e!=null){v=this._data.get(e);v&&o&&!o(v)&&(v=void 0)}else if(n!=null)for(let r=0,t=n.length;r<t;r++){v=this._data.get(n[r]);v==null||o&&!o(v)||u.push(v)}else{var c;s=[...g_(c=this._data).call(c)];for(let r=0,t=s.length;r<t;r++){f=s[r];v=this._data.get(f);v==null||o&&!o(v)||u.push(v)}}a&&a.order&&e==void 0&&this._sort(u,a.order);if(a&&a.fields){const r=a.fields;if(e!=void 0&&v!=null)v=this._filterFields(v,r);else for(let t=0,e=u.length;t<e;t++)u[t]=this._filterFields(u[t],r)}if(i=="Object"){const r={};for(let t=0,e=u.length;t<e;t++){const e=u[t];const n=e[this._idProp];r[n]=e}return r}return e!=null?v!==null&&v!==void 0?v:null:u}getIds(r){const t=this._data;const e=r&&Hs(r);const n=r&&r.order;const a=[...g_(t).call(t)];const i=[];if(e)if(n){const r=[];for(let t=0,n=a.length;t<n;t++){const n=a[t];const i=this._data.get(n);i!=null&&e(i)&&r.push(i)}this._sort(r,n);for(let t=0,e=r.length;t<e;t++)i.push(r[t][this._idProp])}else for(let r=0,t=a.length;r<t;r++){const t=a[r];const n=this._data.get(t);n!=null&&e(n)&&i.push(n[this._idProp])}else if(n){const r=[];for(let e=0,n=a.length;e<n;e++){const n=a[e];r.push(t.get(n))}this._sort(r,n);for(let t=0,e=r.length;t<e;t++)i.push(r[t][this._idProp])}else for(let r=0,e=a.length;r<e;r++){const e=a[r];const n=t.get(e);n!=null&&i.push(n[this._idProp])}return i}getDataSet(){return this}forEach(r,t){const e=t&&Hs(t);const n=this._data;const a=[...g_(n).call(n)];if(t&&t.order){const e=this.get(t);for(let t=0,n=e.length;t<n;t++){const n=e[t];const a=n[this._idProp];r(n,a)}}else for(let t=0,n=a.length;t<n;t++){const n=a[t];const i=this._data.get(n);i==null||e&&!e(i)||r(i,n)}}map(r,t){const e=t&&Hs(t);const n=[];const a=this._data;const i=[...g_(a).call(a)];for(let t=0,a=i.length;t<a;t++){const a=i[t];const o=this._data.get(a);o==null||e&&!e(o)||n.push(r(o,a))}t&&t.order&&this._sort(n,t.order);return n}
/**
   * Filter the fields of an item.
   * @param item - The item whose fields should be filtered.
   * @param fields - The names of the fields that will be kept.
   * @typeParam K - Field name type.
   * @returns The item without any additional fields.
   */_filterFields(r,t){var e;return r?xs(e=Nc(t)?t:Jc(t)).call(e,((t,e)=>{t[e]=r[e];return t}),{}):r}
/**
   * Sort the provided array with items.
   * @param items - Items to be sorted in place.
   * @param order - A field name or custom sort function.
   * @typeParam T - The type of the items in the items array.
   */_sort(r,t){if(typeof t==="string"){const e=t;B_(r).call(r,((r,t)=>{const n=r[e];const a=t[e];return n>a?1:n<a?-1:0}))}else{if(typeof t!=="function")throw new TypeError("Order must be a function or a string");B_(r).call(r,t)}}
/**
   * Remove an item or multiple items by “reference” (only the id is used) or by id.
   *
   * The method ignores removal of non-existing items, and returns an array containing the ids of the items which are actually removed from the DataSet.
   *
   * After the items are removed, the DataSet will trigger an event `remove` for the removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
   *
   * ## Example
   * ```javascript
   * // create a DataSet
   * const data = new vis.DataSet([
   * { id: 1, text: 'item 1' },
   * { id: 2, text: 'item 2' },
   * { id: 3, text: 'item 3' }
   * ])
   *
   * // remove items
   * const ids = data.remove([2, { id: 3 }, 4])
   *
   * console.log(ids) // [2, 3]
   * ```
   * @param id - One or more items or ids of items to be removed.
   * @param senderId - Sender id.
   * @returns The ids of the removed items.
   */remove(r,t){const e=[];const n=[];const a=Nc(r)?r:[r];for(let r=0,t=a.length;r<t;r++){const t=this._remove(a[r]);if(t){const r=t[this._idProp];if(r!=null){e.push(r);n.push(t)}}}e.length&&this._trigger("remove",{items:e,oldData:n},t);return e}
/**
   * Remove an item by its id or reference.
   * @param id - Id of an item or the item itself.
   * @returns The removed item if removed, null otherwise.
   */_remove(r){let t;Nw(r)?t=r:r&&typeof r==="object"&&(t=r[this._idProp]);if(t!=null&&this._data.has(t)){const r=this._data.get(t)||null;this._data.delete(t);--this.length;return r}return null}
/**
   * Clear the entire data set.
   *
   * After the items are removed, the {@link DataSet} will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
   * @param senderId - Sender id.
   * @returns removedIds - The ids of all removed items.
   */clear(r){var t;const e=[...g_(t=this._data).call(t)];const n=[];for(let r=0,t=e.length;r<t;r++)n.push(this._data.get(e[r]));this._data.clear();this.length=0;this._trigger("remove",{items:e,oldData:n},r);return e}
/**
   * Find the item with maximum value of a specified field.
   * @param field - Name of the property that should be searched for max value.
   * @returns Item containing max value, or null if no items.
   */max(r){let t=null;let e=null;for(const a of ow(n=this._data).call(n)){var n;const i=a[r];if(typeof i==="number"&&(e==null||i>e)){t=a;e=i}}return t||null}
/**
   * Find the item with minimum value of a specified field.
   * @param field - Name of the property that should be searched for min value.
   * @returns Item containing min value, or null if no items.
   */min(r){let t=null;let e=null;for(const a of ow(n=this._data).call(n)){var n;const i=a[r];if(typeof i==="number"&&(e==null||i<e)){t=a;e=i}}return t||null}
/**
   * Find all distinct values of a specified field
   * @param prop - The property name whose distinct values should be returned.
   * @returns Unordered array containing all distinct values. Items without specified property are ignored.
   */distinct(r){const t=this._data;const e=[...g_(t).call(t)];const n=[];let a=0;for(let i=0,o=e.length;i<o;i++){const o=e[i];const u=t.get(o);const v=u[r];let s=false;for(let r=0;r<a;r++)if(n[r]==v){s=true;break}if(!s&&v!==void 0){n[a]=v;a++}}return n}
/**
   * Add a single item. Will fail when an item with the same id already exists.
   * @param item - A new item to be added.
   * @returns Added item's id. An id is generated when it is not present in the item.
   */_addItem(r){const t=zT(r,this._idProp);const e=t[this._idProp];if(this._data.has(e))throw new Error("Cannot add item: item with id "+e+" already exists");this._data.set(e,t);++this.length;return e}
/**
   * Update a single item: merge with existing item.
   * Will fail when the item has no id, or when there does not exist an item with the same id.
   * @param update - The new item
   * @returns The id of the updated item.
   */_updateItem(r){const t=r[this._idProp];if(t==null)throw new Error("Cannot update item: item has no id (item: "+dp(r)+")");const e=this._data.get(t);if(!e)throw new Error("Cannot update item: no item with id "+t+" found");this._data.set(t,LT(LT({},e),r));return t}stream(r){if(r){const t=this._data;return new DataStream({*[cw](){for(const e of r){const r=t.get(e);r!=null&&(yield[e,r])}}})}var t;return new DataStream({[cw]:es(t=Ew(this._data)).call(t,this._data)})}}
/**
 * DataView
 *
 * A DataView offers a filtered and/or formatted view on a DataSet. One can subscribe to changes in a DataView, and easily get filtered or formatted data without having to specify filters and field types all the time.
 *
 * ## Example
 * ```javascript
 * // create a DataSet
 * var data = new vis.DataSet();
 * data.add([
 * {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
 * {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
 * {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
 * {id: 4, text: 'item 4'}
 * ]);
 *
 * // create a DataView
 * // the view will only contain items having a property group with value 1,
 * // and will only output fields id, text, and date.
 * var view = new vis.DataView(data, {
 * filter: function (item) {
 * return (item.group == 1);
 * },
 * fields: ['id', 'text', 'date']
 * });
 *
 * // subscribe to any change in the DataView
 * view.on('*', function (event, properties, senderId) {
 * console.log('event', event, properties);
 * });
 *
 * // update an item in the data set
 * data.update({id: 2, group: 1});
 *
 * // get all ids in the view
 * var ids = view.getIds();
 * console.log('ids', ids); // will output [1, 2]
 *
 * // get all items in the view
 * var items = view.get();
 * ```
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 */class DataView extends DataSetPart{get idProp(){return this.getDataSet().idProp}
/**
   * Create a DataView.
   * @param data - The instance containing data (directly or indirectly).
   * @param options - Options to configure this data view.
   */
constructor(r,t){var e;super();Cv(this,"length",0);Cv(this,"_ids",new yT);this._options=t||{};this._listener=es(e=this._onEvent).call(e,this);this.setData(r)}
/**
   * Set a data source for the view.
   * @param data - The instance containing data (directly or indirectly).
   * @remarks
   * Note that when the data view is bound to a data set it won't be garbage
   * collected unless the data set is too. Use `dataView.setData(null)` or
   * `dataView.dispose()` to enable garbage collection before you lose the last
   * reference.
   */
setData(r){if(this._data){this._data.off&&this._data.off("*",this._listener);const r=this._data.getIds({filter:Hs(this._options)});const t=this._data.get(r);this._ids.clear();this.length=0;this._trigger("remove",{items:r,oldData:t})}if(r!=null){this._data=r;const t=this._data.getIds({filter:Hs(this._options)});for(let r=0,e=t.length;r<e;r++){const e=t[r];this._ids.add(e)}this.length=t.length;this._trigger("add",{items:t})}else this._data=new DataSet;this._data.on&&this._data.on("*",this._listener)}refresh(){const r=this._data.getIds({filter:Hs(this._options)});const t=[...this._ids];const e={};const n=[];const a=[];const i=[];for(let t=0,a=r.length;t<a;t++){const a=r[t];e[a]=true;if(!this._ids.has(a)){n.push(a);this._ids.add(a)}}for(let r=0,n=t.length;r<n;r++){const n=t[r];const o=this._data.get(n);if(o==null)console.error("If you see this, report it please.");else if(!e[n]){a.push(n);i.push(o);this._ids.delete(n)}}this.length+=n.length-a.length;n.length&&this._trigger("add",{items:n});a.length&&this._trigger("remove",{items:a,oldData:i})}get(r,t){if(this._data==null)return null;let e=null;let n;if(Nw(r)||Nc(r)){e=r;n=t}else n=r;const a=mh({},this._options,n);const i=Hs(this._options);const o=n&&Hs(n);i&&o&&(a.filter=r=>i(r)&&o(r));return e==null?this._data.get(a):this._data.get(e,a)}getIds(r){if(this._data.length){const t=Hs(this._options);const e=r!=null?Hs(r):null;let n;n=e?t?r=>t(r)&&e(r):e:t;return this._data.getIds({filter:n,order:r&&r.order})}return[]}forEach(r,t){if(this._data){var e;const n=Hs(this._options);const a=t&&Hs(t);let i;i=a?n?function(r){return n(r)&&a(r)}:a:n;dl(e=this._data).call(e,r,{filter:i,order:t&&t.order})}}map(r,t){if(this._data){var e;const n=Hs(this._options);const a=t&&Hs(t);let i;i=a?n?r=>n(r)&&a(r):a:n;return lf(e=this._data).call(e,r,{filter:i,order:t&&t.order})}return[]}getDataSet(){return this._data.getDataSet()}stream(r){var t;return this._data.stream(r||{[cw]:es(t=g_(this._ids)).call(t,this._ids)})}dispose(){var r;(r=this._data)!==null&&r!==void 0&&r.off&&this._data.off("*",this._listener);const t="This data view has already been disposed of.";const e={get:()=>{throw new Error(t)},set:()=>{throw new Error(t)},configurable:false};for(const r of wc(DataView.prototype))Dm(this,r,e)}
/**
   * Event listener. Will propagate all events from the connected data set to the subscribers of the DataView, but will filter the items and only trigger when there are changes in the filtered data set.
   * @param event - The name of the event.
   * @param params - Parameters of the event.
   * @param senderId - Id supplied by the sender.
   */_onEvent(r,t,e){if(!t||!t.items||!this._data)return;const n=t.items;const a=[];const i=[];const o=[];const u=[];const v=[];const s=[];switch(r){case"add":for(let r=0,t=n.length;r<t;r++){const t=n[r];const e=this.get(t);if(e){this._ids.add(t);a.push(t)}}break;case"update":for(let r=0,e=n.length;r<e;r++){const e=n[r];const f=this.get(e);if(f)if(this._ids.has(e)){i.push(e);v.push(t.data[r]);u.push(t.oldData[r])}else{this._ids.add(e);a.push(e)}else if(this._ids.has(e)){this._ids.delete(e);o.push(e);s.push(t.oldData[r])}}break;case"remove":for(let r=0,e=n.length;r<e;r++){const e=n[r];if(this._ids.has(e)){this._ids.delete(e);o.push(e);s.push(t.oldData[r])}}break}this.length+=a.length-o.length;a.length&&this._trigger("add",{items:a},e);i.length&&this._trigger("update",{items:i,oldData:u,data:v},e);o.length&&this._trigger("remove",{items:o,oldData:s},e)}}
/**
 * Check that given value is compatible with Vis Data Set interface.
 * @param idProp - The expected property to contain item id.
 * @param v - The value to be tested.
 * @returns True if all expected values and methods match, false otherwise.
 */function UT(r,t){return typeof t==="object"&&t!==null&&r===t.idProp&&typeof t.add==="function"&&typeof t.clear==="function"&&typeof t.distinct==="function"&&typeof dl(t)==="function"&&typeof t.get==="function"&&typeof t.getDataSet==="function"&&typeof t.getIds==="function"&&typeof t.length==="number"&&typeof lf(t)==="function"&&typeof t.max==="function"&&typeof t.min==="function"&&typeof t.off==="function"&&typeof t.on==="function"&&typeof t.remove==="function"&&typeof t.setOptions==="function"&&typeof t.stream==="function"&&typeof t.update==="function"&&typeof t.updateOnly==="function"}
/**
 * Check that given value is compatible with Vis Data View interface.
 * @param idProp - The expected property to contain item id.
 * @param v - The value to be tested.
 * @returns True if all expected values and methods match, false otherwise.
 */function qT(r,t){return typeof t==="object"&&t!==null&&r===t.idProp&&typeof dl(t)==="function"&&typeof t.get==="function"&&typeof t.getDataSet==="function"&&typeof t.getIds==="function"&&typeof t.length==="number"&&typeof lf(t)==="function"&&typeof t.off==="function"&&typeof t.on==="function"&&typeof t.stream==="function"&&UT(r,t.getDataSet())}export{hg as DELETE,DataSet,DataStream,DataView,Queue,Rf as createNewDataPipeFrom,UT as isDataSetLike,qT as isDataViewLike};

