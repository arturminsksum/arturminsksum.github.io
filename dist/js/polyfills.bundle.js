!function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=41)}([function(t,r,e){var n=e(22)("wks"),o=e(15),i=e(1).Symbol,s="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=n},function(t,r){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,r,e){var n=e(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,r,e){var n=e(11),o=e(24);t.exports=e(6)?function(t,r,e){return n.f(t,r,o(1,e))}:function(t,r,e){return t[r]=e,t}},function(t,r,e){var n=e(1),o=e(3),i=e(7),s=e(15)("src"),u=Function.toString,a=(""+u).split("toString");e(8).inspectSource=function(t){return u.call(t)},(t.exports=function(t,r,e,u){var c="function"==typeof e;c&&(i(e,"name")||o(e,"name",r)),t[r]!==e&&(c&&(i(e,s)||o(e,s,t[r]?""+t[r]:a.join(String(r)))),t===n?t[r]=e:u?t[r]?t[r]=e:o(t,r,e):(delete t[r],o(t,r,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,e){t.exports=!e(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,r){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},function(t,r){var e=t.exports={version:"2.5.2"};"number"==typeof __e&&(__e=e)},function(t,r){t.exports={}},function(t,r){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,r,e){var n=e(2),o=e(44),i=e(45),s=Object.defineProperty;r.f=e(6)?Object.defineProperty:function(t,r,e){if(n(t),r=i(r,!0),n(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[r]=e.value),t}},function(t,r,e){var n=e(13);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,r,e){var n=e(10),o=e(0)("toStringTag"),i="Arguments"==n(function(){return arguments}()),s=function(t,r){try{return t[r]}catch(t){}};t.exports=function(t){var r,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=s(r=Object(t),o))?e:i?n(r):"Object"==(u=n(r))&&"function"==typeof r.callee?"Arguments":u}},function(t,r){var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},function(t,r,e){var n=e(5),o=e(1).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,r){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},function(t,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,r,e){var n=e(52),o=e(18);t.exports=function(t){return n(o(t))}},function(t,r,e){var n=e(22)("keys"),o=e(15);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,r,e){var n=e(11).f,o=e(7),i=e(0)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},function(t,r,e){var n=e(1),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,e){"use strict";var n=e(26),o=e(27),i=e(4),s=e(3),u=e(7),a=e(9),c=e(48),f=e(21),p=e(55),l=e(0)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,r,e,y,v,m,b){c(e,r,y);var _,x,w,g=function(t){if(!h&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},T=r+" Iterator",S="values"==v,P=!1,j=t.prototype,O=j[l]||j["@@iterator"]||v&&j[v],A=O||g(v),E=v?S?g("entries"):A:void 0,B="Array"==r?j.entries||O:O;if(B&&(w=p(B.call(new t)))!==Object.prototype&&w.next&&(f(w,T,!0),n||u(w,l)||s(w,l,d)),S&&O&&"values"!==O.name&&(P=!0,A=function(){return O.call(this)}),n&&!b||!h&&!P&&j[l]||s(j,l,A),a[r]=A,a[T]=d,v)if(_={values:S?A:g("values"),keys:m?A:g("keys"),entries:E},b)for(x in _)x in j||i(j,x,_[x]);else o(o.P+o.F*(h||P),r,_);return _}},function(t,r){t.exports=!1},function(t,r,e){var n=e(1),o=e(8),i=e(3),s=e(4),u=e(12),a=function(t,r,e){var c,f,p,l,h=t&a.F,d=t&a.G,y=t&a.S,v=t&a.P,m=t&a.B,b=d?n:y?n[r]||(n[r]={}):(n[r]||{}).prototype,_=d?o:o[r]||(o[r]={}),x=_.prototype||(_.prototype={});d&&(e=r);for(c in e)f=!h&&b&&void 0!==b[c],p=(f?b:e)[c],l=m&&f?u(p,n):v&&"function"==typeof p?u(Function.call,p):p,b&&s(b,c,p,t&a.U),_[c]!=p&&i(_,c,l),v&&x[c]!=p&&(x[c]=p)};n.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,r,e){var n=e(51),o=e(30);t.exports=Object.keys||function(t){return n(t,o)}},function(t,r,e){var n=e(17),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,r,e){var n=e(1).document;t.exports=n&&n.documentElement},function(t,r,e){var n,o,i,s=e(12),u=e(68),a=e(31),c=e(16),f=e(1),p=f.process,l=f.setImmediate,h=f.clearImmediate,d=f.MessageChannel,y=f.Dispatch,v=0,m={},b=function(){var t=+this;if(m.hasOwnProperty(t)){var r=m[t];delete m[t],r()}},_=function(t){b.call(t.data)};l&&h||(l=function(t){for(var r=[],e=1;arguments.length>e;)r.push(arguments[e++]);return m[++v]=function(){u("function"==typeof t?t:Function(t),r)},n(v),v},h=function(t){delete m[t]},"process"==e(10)(p)?n=function(t){p.nextTick(s(b,t,1))}:y&&y.now?n=function(t){y.now(s(b,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=_,n=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):n="onreadystatechange"in c("script")?function(t){a.appendChild(c("script")).onreadystatechange=function(){a.removeChild(this),b.call(t)}}:function(t){setTimeout(s(b,t,1),0)}),t.exports={set:l,clear:h}},function(t,r,e){"use strict";function n(t){var r,e;this.promise=new t(function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=o(r),this.reject=o(e)}var o=e(13);t.exports.f=function(t){return new n(t)}},,,,,,,,function(t,r,e){e(42),t.exports=e(75)},function(t,r,e){e(43),e(46),e(57),e(61),t.exports=e(8).Promise},function(t,r,e){"use strict";var n=e(14),o={};o[e(0)("toStringTag")]="z",o+""!="[object z]"&&e(4)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},function(t,r,e){t.exports=!e(6)&&!e(23)(function(){return 7!=Object.defineProperty(e(16)("div"),"a",{get:function(){return 7}}).a})},function(t,r,e){var n=e(5);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r,e){"use strict";var n=e(47)(!0);e(25)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,r=this._t,e=this._i;return e>=r.length?{value:void 0,done:!0}:(t=n(r,e),this._i+=t.length,{value:t,done:!1})})},function(t,r,e){var n=e(17),o=e(18);t.exports=function(t){return function(r,e){var i,s,u=String(o(r)),a=n(e),c=u.length;return a<0||a>=c?t?"":void 0:(i=u.charCodeAt(a),i<55296||i>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):i:t?u.slice(a,a+2):s-56320+(i-55296<<10)+65536)}}},function(t,r,e){"use strict";var n=e(49),o=e(24),i=e(21),s={};e(3)(s,e(0)("iterator"),function(){return this}),t.exports=function(t,r,e){t.prototype=n(s,{next:o(1,e)}),i(t,r+" Iterator")}},function(t,r,e){var n=e(2),o=e(50),i=e(30),s=e(20)("IE_PROTO"),u=function(){},a=function(){var t,r=e(16)("iframe"),n=i.length;for(r.style.display="none",e(31).appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;n--;)delete a.prototype[i[n]];return a()};t.exports=Object.create||function(t,r){var e;return null!==t?(u.prototype=n(t),e=new u,u.prototype=null,e[s]=t):e=a(),void 0===r?e:o(e,r)}},function(t,r,e){var n=e(11),o=e(2),i=e(28);t.exports=e(6)?Object.defineProperties:function(t,r){o(t);for(var e,s=i(r),u=s.length,a=0;u>a;)n.f(t,e=s[a++],r[e]);return t}},function(t,r,e){var n=e(7),o=e(19),i=e(53)(!1),s=e(20)("IE_PROTO");t.exports=function(t,r){var e,u=o(t),a=0,c=[];for(e in u)e!=s&&n(u,e)&&c.push(e);for(;r.length>a;)n(u,e=r[a++])&&(~i(c,e)||c.push(e));return c}},function(t,r,e){var n=e(10);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,r,e){var n=e(19),o=e(29),i=e(54);t.exports=function(t){return function(r,e,s){var u,a=n(r),c=o(a.length),f=i(s,c);if(t&&e!=e){for(;c>f;)if((u=a[f++])!=u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,r,e){var n=e(17),o=Math.max,i=Math.min;t.exports=function(t,r){return t=n(t),t<0?o(t+r,0):i(t,r)}},function(t,r,e){var n=e(7),o=e(56),i=e(20)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,r,e){var n=e(18);t.exports=function(t){return Object(n(t))}},function(t,r,e){for(var n=e(58),o=e(28),i=e(4),s=e(1),u=e(3),a=e(9),c=e(0),f=c("iterator"),p=c("toStringTag"),l=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(h),y=0;y<d.length;y++){var v,m=d[y],b=h[m],_=s[m],x=_&&_.prototype;if(x&&(x[f]||u(x,f,l),x[p]||u(x,p,m),a[m]=l,b))for(v in n)x[v]||i(x,v,n[v],!0)}},function(t,r,e){"use strict";var n=e(59),o=e(60),i=e(9),s=e(19);t.exports=e(25)(Array,"Array",function(t,r){this._t=s(t),this._i=0,this._k=r},function(){var t=this._t,r=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==r?o(0,e):"values"==r?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,r,e){var n=e(0)("unscopables"),o=Array.prototype;void 0==o[n]&&e(3)(o,n,{}),t.exports=function(t){o[n][t]=!0}},function(t,r){t.exports=function(t,r){return{value:r,done:!!t}}},function(t,r,e){"use strict";var n,o,i,s,u=e(26),a=e(1),c=e(12),f=e(14),p=e(27),l=e(5),h=e(13),d=e(62),y=e(63),v=e(67),m=e(32).set,b=e(69)(),_=e(33),x=e(70),w=e(71),g=a.TypeError,T=a.process,S=a.Promise,P="process"==f(T),j=function(){},O=o=_.f,A=!!function(){try{var t=S.resolve(1),r=(t.constructor={})[e(0)("species")]=function(t){t(j,j)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof r}catch(t){}}(),E=function(t){var r;return!(!l(t)||"function"!=typeof(r=t.then))&&r},B=function(t,r){if(!t._n){t._n=!0;var e=t._c;b(function(){for(var n=t._v,o=1==t._s,i=0;e.length>i;)!function(r){var e,i,s=o?r.ok:r.fail,u=r.resolve,a=r.reject,c=r.domain;try{s?(o||(2==t._h&&R(t),t._h=1),!0===s?e=n:(c&&c.enter(),e=s(n),c&&c.exit()),e===r.promise?a(g("Promise-chain cycle")):(i=E(e))?i.call(e,u,a):u(e)):a(n)}catch(t){a(t)}}(e[i++]);t._c=[],t._n=!1,r&&!t._h&&L(t)})}},L=function(t){m.call(a,function(){var r,e,n,o=t._v,i=F(t);if(i&&(r=x(function(){P?T.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(n=a.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=P||F(t)?2:1),t._a=void 0,i&&r.e)throw r.v})},F=function(t){if(1==t._h)return!1;for(var r,e=t._a||t._c,n=0;e.length>n;)if(r=e[n++],r.fail||!F(r.promise))return!1;return!0},R=function(t){m.call(a,function(){var r;P?T.emit("rejectionHandled",t):(r=a.onrejectionhandled)&&r({promise:t,reason:t._v})})},M=function(t){var r=this;r._d||(r._d=!0,r=r._w||r,r._v=t,r._s=2,r._a||(r._a=r._c.slice()),B(r,!0))},U=function(t){var r,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw g("Promise can't be resolved itself");(r=E(t))?b(function(){var n={_w:e,_d:!1};try{r.call(t,c(U,n,1),c(M,n,1))}catch(t){M.call(n,t)}}):(e._v=t,e._s=1,B(e,!1))}catch(t){M.call({_w:e,_d:!1},t)}}};A||(S=function(t){d(this,S,"Promise","_h"),h(t),n.call(this);try{t(c(U,this,1),c(M,this,1))}catch(t){M.call(this,t)}},n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=e(72)(S.prototype,{then:function(t,r){var e=O(v(this,S));return e.ok="function"!=typeof t||t,e.fail="function"==typeof r&&r,e.domain=P?T.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&B(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new n;this.promise=t,this.resolve=c(U,t,1),this.reject=c(M,t,1)},_.f=O=function(t){return t===S||t===s?new i(t):o(t)}),p(p.G+p.W+p.F*!A,{Promise:S}),e(21)(S,"Promise"),e(73)("Promise"),s=e(8).Promise,p(p.S+p.F*!A,"Promise",{reject:function(t){var r=O(this);return(0,r.reject)(t),r.promise}}),p(p.S+p.F*(u||!A),"Promise",{resolve:function(t){return w(u&&this===s?S:this,t)}}),p(p.S+p.F*!(A&&e(74)(function(t){S.all(t).catch(j)})),"Promise",{all:function(t){var r=this,e=O(r),n=e.resolve,o=e.reject,i=x(function(){var e=[],i=0,s=1;y(t,!1,function(t){var u=i++,a=!1;e.push(void 0),s++,r.resolve(t).then(function(t){a||(a=!0,e[u]=t,--s||n(e))},o)}),--s||n(e)});return i.e&&o(i.v),e.promise},race:function(t){var r=this,e=O(r),n=e.reject,o=x(function(){y(t,!1,function(t){r.resolve(t).then(e.resolve,n)})});return o.e&&n(o.v),e.promise}})},function(t,r){t.exports=function(t,r,e,n){if(!(t instanceof r)||void 0!==n&&n in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,r,e){var n=e(12),o=e(64),i=e(65),s=e(2),u=e(29),a=e(66),c={},f={},r=t.exports=function(t,r,e,p,l){var h,d,y,v,m=l?function(){return t}:a(t),b=n(e,p,r?2:1),_=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=u(t.length);h>_;_++)if((v=r?b(s(d=t[_])[0],d[1]):b(t[_]))===c||v===f)return v}else for(y=m.call(t);!(d=y.next()).done;)if((v=o(y,b,d.value,r))===c||v===f)return v};r.BREAK=c,r.RETURN=f},function(t,r,e){var n=e(2);t.exports=function(t,r,e,o){try{return o?r(n(e)[0],e[1]):r(e)}catch(r){var i=t.return;throw void 0!==i&&n(i.call(t)),r}}},function(t,r,e){var n=e(9),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},function(t,r,e){var n=e(14),o=e(0)("iterator"),i=e(9);t.exports=e(8).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,r,e){var n=e(2),o=e(13),i=e(0)("species");t.exports=function(t,r){var e,s=n(t).constructor;return void 0===s||void 0==(e=n(s)[i])?r:o(e)}},function(t,r){t.exports=function(t,r,e){var n=void 0===e;switch(r.length){case 0:return n?t():t.call(e);case 1:return n?t(r[0]):t.call(e,r[0]);case 2:return n?t(r[0],r[1]):t.call(e,r[0],r[1]);case 3:return n?t(r[0],r[1],r[2]):t.call(e,r[0],r[1],r[2]);case 4:return n?t(r[0],r[1],r[2],r[3]):t.call(e,r[0],r[1],r[2],r[3])}return t.apply(e,r)}},function(t,r,e){var n=e(1),o=e(32).set,i=n.MutationObserver||n.WebKitMutationObserver,s=n.process,u=n.Promise,a="process"==e(10)(s);t.exports=function(){var t,r,e,c=function(){var n,o;for(a&&(n=s.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(n){throw t?e():r=void 0,n}}r=void 0,n&&n.enter()};if(a)e=function(){s.nextTick(c)};else if(!i||n.navigator&&n.navigator.standalone)if(u&&u.resolve){var f=u.resolve();e=function(){f.then(c)}}else e=function(){o.call(n,c)};else{var p=!0,l=document.createTextNode("");new i(c).observe(l,{characterData:!0}),e=function(){l.data=p=!p}}return function(n){var o={fn:n,next:void 0};r&&(r.next=o),t||(t=o,e()),r=o}}},function(t,r){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,r,e){var n=e(2),o=e(5),i=e(33);t.exports=function(t,r){if(n(t),o(r)&&r.constructor===t)return r;var e=i.f(t);return(0,e.resolve)(r),e.promise}},function(t,r,e){var n=e(4);t.exports=function(t,r,e){for(var o in r)n(t,o,r[o],e);return t}},function(t,r,e){"use strict";var n=e(1),o=e(11),i=e(6),s=e(0)("species");t.exports=function(t){var r=n[t];i&&r&&!r[s]&&o.f(r,s,{configurable:!0,get:function(){return this}})}},function(t,r,e){var n=e(0)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:e=!0}},i[n]=function(){return s},t(i)}catch(t){}return e}},function(t,r){!function(t){"use strict";function r(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function e(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var r={next:function(){var r=t.shift();return{done:void 0===r,value:r}}};return m.iterable&&(r[Symbol.iterator]=function(){return r}),r}function o(t){this.map={},t instanceof o?t.forEach(function(t,r){this.append(r,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(r){this.append(r,t[r])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise(function(r,e){t.onload=function(){r(t.result)},t.onerror=function(){e(t.error)}})}function u(t){var r=new FileReader,e=s(r);return r.readAsArrayBuffer(t),e}function a(t){var r=new FileReader,e=s(r);return r.readAsText(t),e}function c(t){for(var r=new Uint8Array(t),e=new Array(r.length),n=0;n<r.length;n++)e[n]=String.fromCharCode(r[n]);return e.join("")}function f(t){if(t.slice)return t.slice(0);var r=new Uint8Array(t.byteLength);return r.set(new Uint8Array(t)),r.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&_(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!x(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return a(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function l(t){var r=t.toUpperCase();return w.indexOf(r)>-1?r:t}function h(t,r){r=r||{};var e=r.body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,r.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,e||null==t._bodyInit||(e=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=r.credentials||this.credentials||"omit",!r.headers&&this.headers||(this.headers=new o(r.headers)),this.method=l(r.method||this.method||"GET"),this.mode=r.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&e)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(e)}function d(t){var r=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),n=e.shift().replace(/\+/g," "),o=e.join("=").replace(/\+/g," ");r.append(decodeURIComponent(n),decodeURIComponent(o))}}),r}function y(t){var r=new o;return t.split(/\r?\n/).forEach(function(t){var e=t.split(":"),n=e.shift().trim();if(n){var o=e.join(":").trim();r.append(n,o)}}),r}function v(t,r){r||(r={}),this.type="default",this.status="status"in r?r.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in r?r.statusText:"OK",this.headers=new o(r.headers),this.url=r.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],_=function(t){return t&&DataView.prototype.isPrototypeOf(t)},x=ArrayBuffer.isView||function(t){return t&&b.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=r(t),n=e(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[r(t)]},o.prototype.get=function(t){return t=r(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(r(t))},o.prototype.set=function(t,n){this.map[r(t)]=e(n)},o.prototype.forEach=function(t,r){for(var e in this.map)this.map.hasOwnProperty(e)&&t.call(r,this.map[e],e,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(r,e){t.push(e)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(r){t.push(r)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(r,e){t.push([e,r])}),n(t)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},p.call(h.prototype),p.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];v.redirect=function(t,r){if(-1===g.indexOf(r))throw new RangeError("Invalid status code");return new v(null,{status:r,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=v,t.fetch=function(t,r){return new Promise(function(e,n){var o=new h(t,r),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;e(new v(r,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(t,r){i.setRequestHeader(r,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}]);