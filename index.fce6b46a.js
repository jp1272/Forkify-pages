var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,g=globalThis;function v(e){return e&&e.__esModule?e.default:e}var y={},m={},b=g.parcelRequire94c2;null==b&&((b=function(e){if(e in y)return y[e].exports;if(e in m){var t=m[e];delete m[e];var r={id:e,exports:{}};return y[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){m[e]=t},g.parcelRequire94c2=b),(0,b.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),b("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.fce6b46a.js","eyyUD","icons.c5b0f01c.svg"]'));var _={},w={},k=function(e){return e&&e.Math===Math&&e};w=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||k("object"==typeof self&&self)||k("object"==typeof g&&g)||k("object"==typeof w&&w)||function(){return this}()||Function("return this")();var E={},S={};E=!(S=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},O={};O=!S(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;$=O?j.bind(j):function(){return j.apply(j,arguments)};var L={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;r=x&&!L.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:L;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var M={},T={},F={},N=Function.prototype,H=N.call,A=O&&N.bind.bind(H,H),I={},q=(F=O?A:function(e){return function(){return H.apply(e,arguments)}})({}.toString),R=F("".slice);I=function(e){return R(q(e),8,-1)};var C=Object,D=F("".split);T=S(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===I(e)?D(e,""):C(e)}:C;var U={},W={};W=function(e){return null==e};var B=TypeError;U=function(e){if(W(e))throw new B("Can't call method on "+e);return e},M=function(e){return T(U(e))};var G={},z={},J={},Y={},V="object"==typeof document&&document.all;Y=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},J=function(e){return"object"==typeof e?null!==e:Y(e)};var Q={},K={};K=function(e,t){var r;return arguments.length<2?(r=w[e],Y(r)?r:void 0):w[e]&&w[e][t]};var X={};X=F({}.isPrototypeOf);var Z={},ee={},et={},er={},en=w.navigator,ei=en&&en.userAgent;er=ei?String(ei):"";var eo=w.process,ea=w.Deno,es=eo&&eo.versions||ea&&ea.version,ec=es&&es.v8;ec&&(i=(n=ec.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&er&&(!(n=er.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=er.match(/Chrome\/(\d+)/))&&(i=+n[1]),et=i;var eu=w.String;Z=(ee=!!Object.getOwnPropertySymbols&&!S(function(){var e=Symbol("symbol detection");return!eu(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&et&&et<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var el=Object;Q=Z?function(e){return"symbol"==typeof e}:function(e){var t=K("Symbol");return Y(t)&&X(t.prototype,el(e))};var ed={},ef={},ep={},eh=String;ep=function(e){try{return eh(e)}catch(e){return"Object"}};var eg=TypeError;ef=function(e){if(Y(e))return e;throw new eg(ep(e)+" is not a function")},ed=function(e,t){var r=e[t];return W(r)?void 0:ef(r)};var ev={},ey=TypeError;ev=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!J(n=$(r,e))||Y(r=e.valueOf)&&!J(n=$(r,e))||"string"!==t&&Y(r=e.toString)&&!J(n=$(r,e)))return n;throw new ey("Can't convert object to primitive value")};var em={},eb={},e_={},ew={};ew=!1;var ek={},eE=Object.defineProperty;ek=function(e,t){try{eE(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var eS="__core-js_shared__",e$=e_=w[eS]||ek(eS,{});(e$.versions||(e$.versions=[])).push({version:"3.41.0",mode:ew?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eb=function(e,t){return e_[e]||(e_[e]=t||{})};var eO={},ej={},eL=Object;ej=function(e){return eL(U(e))};var ex=F({}.hasOwnProperty);eO=Object.hasOwn||function(e,t){return ex(ej(e),t)};var eP={},eM=0,eT=Math.random(),eF=F(1..toString);eP=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eF(++eM+eT,36)};var eN=w.Symbol,eH=eb("wks"),eA=Z?eN.for||eN:eN&&eN.withoutSetter||eP,eI=TypeError,eq=function(e){return eO(eH,e)||(eH[e]=ee&&eO(eN,e)?eN[e]:eA("Symbol."+e)),eH[e]}("toPrimitive");z=function(e,t){if(!J(e)||Q(e))return e;var r,n=ed(e,eq);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!J(r)||Q(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},G=function(e){var t=z(e,"string");return Q(t)?t:t+""};var eR={},eC={},eD=w.document,eU=J(eD)&&J(eD.createElement);eC=function(e){return eU?eD.createElement(e):{}},eR=!E&&!S(function(){return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var eW=Object.getOwnPropertyDescriptor;t=E?eW:function(e,t){if(e=M(e),t=G(t),eR)try{return eW(e,t)}catch(e){}if(eO(e,t))return P(!$(r,e,t),e[t])};var eB={},eG={};eG=E&&S(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eJ=String,eY=TypeError;ez=function(e){if(J(e))return e;throw new eY(eJ(e)+" is not an object")};var eV=TypeError,eQ=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";o=E?eG?function(e,t,r){if(ez(e),t=G(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eK(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(ez(e),t=G(t),ez(r),eR)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eV("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eB=E?function(e,t,r){return o(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e9={},e4=Function.prototype,e5=E&&Object.getOwnPropertyDescriptor,e7=eO(e4,"name"),e3=e7&&(!E||E&&e5(e4,"name").configurable),e8={},e6=F(Function.toString);Y(e_.inspectSource)||(e_.inspectSource=function(e){return e6(e)}),e8=e_.inspectSource;var te={},tt={},tr=w.WeakMap;tt=Y(tr)&&/native code/.test(String(tr));var tn={},ti=eb("keys");tn=function(e){return ti[e]||(ti[e]=eP(e))};var to={};to={};var ta="Object already initialized",ts=w.TypeError,tc=w.WeakMap;if(tt||e_.state){var tu=e_.state||(e_.state=new tc);tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,a=function(e,t){if(tu.has(e))throw new ts(ta);return t.facade=e,tu.set(e,t),t},s=function(e){return tu.get(e)||{}},c=function(e){return tu.has(e)}}else{var tl=tn("state");to[tl]=!0,a=function(e,t){if(eO(e,tl))throw new ts(ta);return t.facade=e,eB(e,tl,t),t},s=function(e){return eO(e,tl)?e[tl]:{}},c=function(e){return eO(e,tl)}}var td=(te={set:a,get:s,has:c,enforce:function(e){return c(e)?s(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=s(t)).type!==e)throw new ts("Incompatible receiver, "+e+" required");return r}}}).enforce,tf=te.get,tp=String,th=Object.defineProperty,tg=F("".slice),tv=F("".replace),ty=F([].join),tm=E&&!S(function(){return 8!==th(function(){},"length",{value:8}).length}),tb=String(String).split("String"),t_=e2=function(e,t,r){"Symbol("===tg(tp(t),0,7)&&(t="["+tv(tp(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eO(e,"name")||e3&&e.name!==t)&&(E?th(e,"name",{value:t,configurable:!0}):e.name=t),tm&&r&&eO(r,"arity")&&e.length!==r.arity&&th(e,"length",{value:r.arity});try{r&&eO(r,"constructor")&&r.constructor?E&&th(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=td(e);return eO(n,"source")||(n.source=ty(tb,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return Y(this)&&tf(this).source||e8(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(Y(r)&&e2(r,a,n),n.global)i?e[t]=r:ek(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tw={},tk={},tE={},tS={},t$={},tO={},tj={},tL=Math.ceil,tx=Math.floor;tj=Math.trunc||function(e){var t=+e;return(t>0?tx:tL)(t)},tO=function(e){var t=+e;return t!=t||0===t?0:tj(t)};var tP=Math.max,tM=Math.min;t$=function(e,t){var r=tO(e);return r<0?tP(r+t,0):tM(r,t)};var tT={},tF={},tN=Math.min;tF=function(e){var t=tO(e);return t>0?tN(t,0x1fffffffffffff):0},tT=function(e){return tF(e.length)};var tH=function(e){return function(t,r,n){var i,o=M(t),a=tT(o);if(0===a)return!e&&-1;var s=t$(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tA={includes:tH(!0),indexOf:tH(!1)}.indexOf,tI=F([].push);tE=function(e,t){var r,n=M(e),i=0,o=[];for(r in n)!eO(to,r)&&eO(n,r)&&tI(o,r);for(;t.length>i;)eO(n,r=t[i++])&&(~tA(o,r)||tI(o,r));return o};var tq={},tR=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return tE(e,tR)},l=Object.getOwnPropertySymbols;var tC=F([].concat);tk=K("Reflect","ownKeys")||function(e){var t=u(ez(e));return l?tC(t,l(e)):t},tw=function(e,r,n){for(var i=tk(r),a=0;a<i.length;a++){var s=i[a];eO(e,s)||n&&eO(n,s)||o(e,s,t(r,s))}};var tD={},tU=/#|\.prototype\./,tW=function(e,t){var r=tG[tB(e)];return r===tJ||r!==tz&&(Y(t)?S(t):!!t)},tB=tW.normalize=function(e){return String(e).replace(tU,".").toLowerCase()},tG=tW.data={},tz=tW.NATIVE="N",tJ=tW.POLYFILL="P";tD=tW,_=function(e,r){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?w:l?w[c]||ek(c,{}):w[c]&&w[c].prototype)for(i in r){if(a=r[i],o=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tD(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tw(a,o)}(e.sham||o&&o.sham)&&eB(a,"sham",!0),e1(n,i,a,e)}};var tY={},tV={},tQ=Function.prototype,tK=tQ.apply,tX=tQ.call;tV="object"==typeof Reflect&&Reflect.apply||(O?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){if("Function"===I(e))return F(e)})(t0.bind);tZ=function(e,t){return ef(e),void 0===t?e:O?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=K("document","documentElement");var t9={};t9=F([].slice);var t4={},t5=TypeError;t4=function(e,t){if(e<t)throw new t5("Not enough arguments");return e};var t7={};t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(er);var t3={},t8={},t6=function(e){return er.slice(0,e.length)===e};t3="NODE"===(t8=t6("Bun/")?"BUN":t6("Cloudflare-Workers")?"CLOUDFLARE":t6("Deno/")?"DENO":t6("Node.js/")?"NODE":w.Bun&&"string"==typeof Bun.version?"BUN":w.Deno&&"object"==typeof Deno.version?"DENO":"process"===I(w.process)?"NODE":w.window&&w.document?"BROWSER":"REST");var re=w.setImmediate,rt=w.clearImmediate,rr=w.process,rn=w.Dispatch,ri=w.Function,ro=w.MessageChannel,ra=w.String,rs=0,rc={},ru="onreadystatechange";S(function(){d=w.location});var rl=function(e){if(eO(rc,e)){var t=rc[e];delete rc[e],t()}},rd=function(e){return function(){rl(e)}},rf=function(e){rl(e.data)},rp=function(e){w.postMessage(ra(e),d.protocol+"//"+d.host)};re&&rt||(re=function(e){t4(arguments.length,1);var t=Y(e)?e:ri(e),r=t9(arguments,1);return rc[++rs]=function(){tV(t,void 0,r)},f(rs),rs},rt=function(e){delete rc[e]},t3?f=function(e){rr.nextTick(rd(e))}:rn&&rn.now?f=function(e){rn.now(rd(e))}:ro&&!t7?(h=(p=new ro).port2,p.port1.onmessage=rf,f=tZ(h.postMessage,h)):w.addEventListener&&Y(w.postMessage)&&!w.importScripts&&d&&"file:"!==d.protocol&&!S(rp)?(f=rp,w.addEventListener("message",rf,!1)):f=ru in eC("script")?function(e){t2.appendChild(eC("script"))[ru]=function(){t2.removeChild(this),rl(e)}}:function(e){setTimeout(rd(e),0)});var rh=(tY={set:re,clear:rt}).clear;_({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rh},{clearImmediate:rh});var rg=tY.set,rv={},ry=w.Function,rm=/MSIE .\./.test(er)||"BUN"===t8&&((e=w.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rv=function(e,t){var r=t?2:1;return rm?function(n,i){var o=t4(arguments.length,1)>r,a=Y(n)?n:ry(n),s=o?t9(arguments,r):[],c=o?function(){tV(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rb=w.setImmediate?rv(rg,!1):rg;_({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rb},{setImmediate:rb});var r_=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c,u,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(a=e,s=n,c=new j(o||[]),u=f,function(e,r){if(u===p)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(i){if(i===g)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===f)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=d(a,s,c);if("normal"===o.type){if(u=c.done?h:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=h,c.method="throw",c.arg=o.arg)}})}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=r_}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r_:Function("r","regeneratorRuntime = r")(r_)}const rw="https://forkify-api.jonas.io/api/v2/recipes/",rk="559986a1-73c6-4e1e-b52d-72057c94cf8d",rE=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rS={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},r$=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rO=async function(e){try{let t=await rE(`${rw}${e}?key=${rk}`);rS.recipe=r$(t),rS.bookmarks.some(t=>t.id===e)?rS.recipe.bookmarked=!0:rS.recipe.bookmarked=!1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rj=async function(e){try{rS.search.query=e;let t=await rE(`${rw}?search=${e}&key=${rk}`);console.log(t),rS.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,...e.key&&{key:e.key}})),rS.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rL=function(e=rS.search.page){rS.search.page=e;let t=(e-1)*rS.search.resultsPerPage,r=e*rS.search.resultsPerPage;return rS.search.results.slice(t,r)},rx=function(e){rS.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rS.recipe.servings}),rS.recipe.servings=e},rP=function(){localStorage.setItem("bookmarks",JSON.stringify(rS.bookmarks))},rM=function(e){rS.bookmarks.push(e),e.id===rS.recipe.id&&(rS.recipe.bookmarked=!0),rP()},rT=function(e){let t=rS.bookmarks.findIndex(t=>t.id===e);rS.bookmarks.splice(t,1),e===rS.recipe.id&&(rS.recipe.bookmarked=!1),rP()};!function(){let e=localStorage.getItem("bookmarks");e&&(rS.bookmarks=JSON.parse(e))}();const rF=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use correct format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rE(`${rw}?key=${rk}`,r);rS.recipe=r$(n),rM(rS.recipe)}catch(e){throw e}};var rN={};rN=new URL("icons.c5b0f01c.svg",import.meta.url).toString();class rH{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
          <div class="spinner">
            <svg>
              <use href="${v(rN)}#icon-loader"></use>
            </svg>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
            <div class="error">
                <div>
                  <svg>
                    <use href="${v(rN)}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
            <div class="message">
                <div>
                  <svg>
                    <use href="${v(rN)}#icon-smile"></use>
                  </svg>
                </div>
                <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rA={};function rI(e,t,r,n,i){var o,a,s,c;let u=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&u.push(t);let l=0,d=e,f=t;for(;l<=u.length;)d%u[l]==0&&f%u[l]==0?(u[l],d/=u[l],f/=u[l]):l++;return o=f,a=d,s=r,c=n,1===o&&1===a?(s=`${c}${(parseInt(s)+1).toString()}`,`${s}`):0===a?`${c}${s}`:"0"==s?`${c}${a}/${o}`:`${c}${s} ${a}/${o}`}rA=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var s,c,u;return s=r,c=o,u=t,rI(parseInt(s,10),Math.pow(10,s.length),c,u,!1)}{let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rI(Math.round((s*c-s)*Math.pow(10,o)),(c-1)*a,n,i,!0)}(r,n,e,o,t)}};class rq extends rH{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try again!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${v(rN)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${v(rN)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${v(rN)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${v(rN)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${v(rN)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${v(rN)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${v(rN)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
  <li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${v(rN)}#icon-check"></use>
  </svg>
  <div class="recipe__quantity">${e.quantity?new(v(rA))(e.quantity).toString():""}</div>
  <div class="recipe__description">
    <span class="recipe__unit">${e.unit}</span>
    ${e.description}
  </div>
</li>
  `}}var rR=new rq;class rC{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rD=new rC,rU=new class extends rH{_parentElement="";_generateMarkup(e){let t=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.image}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
              </div>
              <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                  <use href="${v(rN)}#icon-user"></use>
                </svg>
              </div>
            </a>
        </li>
    `}};class rW extends rH{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_message="";_generateMarkup(){return this._data.map(e=>rU.render(e,!1)).join("")}}var rB=new rW;class rG extends rH{_parentElement=document.querySelector(".pagination");_addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${v(rN)}#icon-arrow-right"></use>
            </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${v(rN)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${v(rN)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${v(rN)}#icon-arrow-right"></use>
            </svg>
        </button>
      `:""}}var rz=new rG;class rJ extends rH{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it!";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rU.render(e,!1)).join("")}}var rY=new rJ;class rV extends rH{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rQ=new rV;const rK=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rR.renderSpinner(),rB.update(rL()),await rO(e),rR.render(rS.recipe),rY.update(rS.bookmarks)}catch(e){rR.renderError(),console.error(e)}},rX=async function(){try{rB.renderSpinner();let e=rD.getQuery();if(!e)return;await rj(e),rB.render(rL()),rz.render(rS.search)}catch(e){console.log(e)}},rZ=async function(e){try{rQ.renderSpinner(),await rF(e),console.log(rS.recipe),rR.render(rS.recipe),rQ.renderMessage(),rY.render(rS.bookmarks),window.history.pushState(null,"",`#${rS.recipe.id}`),setTimeout(function(){rQ.toggleWindow},2500)}catch(e){console.log("⛔️",e),rQ.renderError(e.message)}};rY.addHandlerRender(function(){rY.render(rS.bookmarks)}),rR.addHandlerRender(rK),rR.addHandlerUpdateServings(function(e){rx(e),rR.update(rS.recipe)}),rR.addHandlerAddBookmark(function(){rS.recipe.bookmarked?rT(rS.recipe.id):rM(rS.recipe),rR.update(rS.recipe),rY.render(rS.bookmarks)}),rD.addHandlerSearch(rX),rz._addHandlerClick(function(e){rB.render(rL(e)),rz.render(rS.search)}),rQ.addHandlerUpload(rZ);
//# sourceMappingURL=index.fce6b46a.js.map
