_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"82gj":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var r=function(){},o=function(){}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var f=d[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"9uj6":function(e,t,n){"use strict";n.r(t);var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.default=o},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ibe6:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return q})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return k})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return y}));var r=n("mrSG"),o=function(e,t){return function(n){return Math.max(Math.min(n,t),e)}},a=function(e){return e%1?Number(e.toFixed(5)):e},i=/(-)?([\d]*\.?[\d])+/g,u=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,c=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function s(e){return"string"===typeof e}var f={test:function(e){return"number"===typeof e},parse:parseFloat,transform:function(e){return e}},l=Object(r.a)(Object(r.a)({},f),{transform:o(0,1)}),d=Object(r.a)(Object(r.a)({},f),{default:1}),p=function(e){return{test:function(t){return s(t)&&t.endsWith(e)&&1===t.split(" ").length},parse:parseFloat,transform:function(t){return""+t+e}}},h=p("deg"),v=p("%"),m=p("px"),g=p("vh"),y=p("vw"),b=Object(r.a)(Object(r.a)({},v),{parse:function(e){return v.parse(e)/100},transform:function(e){return v.transform(100*e)}}),x=function(e,t){return function(n){return s(n)&&c.test(n)&&n.startsWith(e)||t&&n.hasOwnProperty(t)}},j=function(e,t,n){return function(r){var o;if(!s(r))return r;var a=r.match(i),u=a[0],c=a[1],f=a[2],l=a[3];return(o={})[e]=parseFloat(u),o[t]=parseFloat(c),o[n]=parseFloat(f),o.alpha=void 0!==l?parseFloat(l):1,o}},O={test:x("hsl","hue"),parse:j("hue","saturation","lightness"),transform:function(e){var t=e.hue,n=e.saturation,r=e.lightness,o=e.alpha,i=void 0===o?1:o;return"hsla("+Math.round(t)+", "+v.transform(a(n))+", "+v.transform(a(r))+", "+a(l.transform(i))+")"}},M=o(0,255),w=Object(r.a)(Object(r.a)({},f),{transform:function(e){return Math.round(M(e))}}),k={test:x("rgb","red"),parse:j("red","green","blue"),transform:function(e){var t=e.red,n=e.green,r=e.blue,o=e.alpha,i=void 0===o?1:o;return"rgba("+w.transform(t)+", "+w.transform(n)+", "+w.transform(r)+", "+a(l.transform(i))+")"}};var _={test:x("#"),parse:function(e){var t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:k.transform},S={test:function(e){return k.test(e)||_.test(e)||O.test(e)},parse:function(e){return k.test(e)?k.parse(e):O.test(e)?O.parse(e):_.parse(e)},transform:function(e){return s(e)?e:e.hasOwnProperty("red")?k.transform(e):O.transform(e)}},A="${c}",C="${n}";function R(e){var t=[],n=0,r=e.match(u);r&&(n=r.length,e=e.replace(u,A),t.push.apply(t,r.map(S.parse)));var o=e.match(i);return o&&(e=e.replace(i,C),t.push.apply(t,o.map(f.parse))),{values:t,numColors:n,tokenised:e}}function P(e){return R(e).values}function I(e){var t=R(e),n=t.values,r=t.numColors,o=t.tokenised,i=n.length;return function(e){for(var t=o,n=0;n<i;n++)t=t.replace(n<r?A:C,n<r?S.transform(e[n]):a(e[n]));return t}}var T=function(e){return"number"===typeof e?0:e};var N={test:function(e){var t,n,r,o;return isNaN(e)&&s(e)&&(null!==(n=null===(t=e.match(i))||void 0===t?void 0:t.length)&&void 0!==n?n:0)+(null!==(o=null===(r=e.match(u))||void 0===r?void 0:r.length)&&void 0!==o?o:0)>0},parse:P,createTransformer:I,getAnimatableNone:function(e){var t=P(e);return I(e)(t.map(T))}},E=new Set(["brightness","contrast","saturate","opacity"]);function H(e){var t=e.slice(0,-1).split("("),n=t[0],r=t[1];if("drop-shadow"===n)return e;var o=(r.match(i)||[])[0];if(!o)return e;var a=r.replace(o,""),u=E.has(n)?1:0;return o!==r&&(u*=100),n+"("+u+a+")"}var D=/([a-z-]*)\(.*?\)/g,q=Object(r.a)(Object(r.a)({},N),{getAnimatableNone:function(e){var t=e.match(D);return t?t.map(H).join(" "):e}})},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Neuu:function(e,t,n){"use strict";n.d(t,"a",(function(){return re})),n.d(t,"b",(function(){return G})),n.d(t,"c",(function(){return Y})),n.d(t,"d",(function(){return X})),n.d(t,"e",(function(){return K})),n.d(t,"f",(function(){return Z})),n.d(t,"g",(function(){return V})),n.d(t,"h",(function(){return J})),n.d(t,"i",(function(){return W})),n.d(t,"j",(function(){return B})),n.d(t,"k",(function(){return z})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return be})),n.d(t,"n",(function(){return le})),n.d(t,"o",(function(){return L})),n.d(t,"p",(function(){return U})),n.d(t,"q",(function(){return F})),n.d(t,"r",(function(){return ae})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return q})),n.d(t,"u",(function(){return g})),n.d(t,"v",(function(){return k})),n.d(t,"w",(function(){return m})),n.d(t,"x",(function(){return oe})),n.d(t,"y",(function(){return de}));var r=n("mrSG"),o=n("82gj"),a=n("Ibe6"),i=n("eUsl"),u=function(e,t,n){return Math.min(Math.max(n,e),t)},c=.001;function s(e){var t,n,r=e.duration,a=void 0===r?800:r,i=e.bounce,s=void 0===i?.25:i,l=e.velocity,d=void 0===l?0:l,p=e.mass,h=void 0===p?1:p;Object(o.b)(a<=1e4,"Spring duration must be 10 seconds or less");var v=1-s;v=u(.05,1,v),a=u(.01,10,a/1e3),v<1?(t=function(e){var t=e*v,n=t*a,r=t-d,o=f(e,v),i=Math.exp(-n);return c-r/o*i},n=function(e){var n=e*v*a,r=n*d+d,o=Math.pow(v,2)*Math.pow(e,2)*a,i=Math.exp(-n),u=f(Math.pow(e,2),v);return(-t(e)+c>0?-1:1)*((r-o)*i)/u}):(t=function(e){return Math.exp(-e*a)*((e-d)*a+1)-.001},n=function(e){return Math.exp(-e*a)*(a*a*(d-e))});var m=function(e,t,n){for(var r=n,o=1;o<12;o++)r-=e(r)/t(r);return r}(t,n,5/a);if(isNaN(m))return{stiffness:100,damping:10};var g=Math.pow(m,2)*h;return{stiffness:g,damping:2*v*Math.sqrt(h*g)}}function f(e,t){return e*Math.sqrt(1-t*t)}var l=["duration","bounce"],d=["stiffness","damping","mass"];function p(e,t){return t.some((function(t){return void 0!==e[t]}))}function h(e){var t=e.from,n=void 0===t?0:t,o=e.to,a=void 0===o?1:o,i=e.restSpeed,u=void 0===i?2:i,c=e.restDelta,h=Object(r.d)(e,["from","to","restSpeed","restDelta"]),m={done:!1,value:n},g=function(e){var t=Object(r.a)({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!p(e,d)&&p(e,l)){var n=s(e);(t=Object(r.a)(Object(r.a)(Object(r.a)({},t),n),{velocity:0,mass:1})).isResolvedFromDuration=!0}return t}(h),y=g.stiffness,b=g.damping,x=g.mass,j=g.velocity,O=g.isResolvedFromDuration,M=v,w=v;function k(){var e=j?-j/1e3:0,t=a-n,r=b/(2*Math.sqrt(y*x)),o=Math.sqrt(y/x)/1e3;if(null!==c&&void 0!==c||(c=Math.abs(a-n)<=1?.01:.4),r<1){var i=f(o,r);M=function(n){var u=Math.exp(-r*o*n);return a-u*((e+r*o*t)/i*Math.sin(i*n)+t*Math.cos(i*n))},w=function(n){var a=Math.exp(-r*o*n);return r*o*a*(Math.sin(i*n)*(e+r*o*t)/i+t*Math.cos(i*n))-a*(Math.cos(i*n)*(e+r*o*t)-i*t*Math.sin(i*n))}}else if(1===r)M=function(n){return a-Math.exp(-o*n)*(t+(e+o*t)*n)};else{var u=o*Math.sqrt(r*r-1);M=function(n){var i=Math.exp(-r*o*n),c=Math.min(u*n,300);return a-i*((e+r*o*t)*Math.sinh(c)+u*t*Math.cosh(c))/u}}}return k(),{next:function(e){var t=M(e);if(O)m.done=e>=h.duration;else{var n=1e3*w(e),r=Math.abs(n)<=u,o=Math.abs(a-t)<=c;m.done=r&&o}return m.value=m.done?a:t,m},flipTarget:function(){var e;j=-j,n=(e=[a,n])[0],a=e[1],k()}}}h.needsInterpolation=function(e,t){return"string"===typeof e||"string"===typeof t};var v=function(e){return 0},m=function(e,t,n){var r=t-e;return 0===r?1:(n-e)/r},g=function(e,t,n){return-n*e+n*t+e},y=function(e,t,n){var r=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-r)+r))},b=[a.f,a.l,a.g],x=function(e){return b.find((function(t){return t.test(e)}))},j=function(e){return"'"+e+"' is not an animatable color. Use the equivalent color code instead."},O=function(e,t){var n=x(e),i=x(t);Object(o.a)(!!n,j(e)),Object(o.a)(!!i,j(t)),Object(o.a)(n.transform===i.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var u=n.parse(e),c=i.parse(t),s=Object(r.a)({},u),f=n===a.g?g:y;return function(e){for(var t in s)"alpha"!==t&&(s[t]=f(u[t],c[t],e));return s.alpha=g(u.alpha,c.alpha,e),n.transform(s)}},M=function(e){return"number"===typeof e},w=function(e,t){return function(n){return t(e(n))}},k=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce(w)};function _(e,t){return M(e)?function(n){return g(e,t,n)}:a.b.test(e)?O(e,t):R(e,t)}var S=function(e,t){var n=Object(r.f)(e),o=n.length,a=e.map((function(e,n){return _(e,t[n])}));return function(e){for(var t=0;t<o;t++)n[t]=a[t](e);return n}},A=function(e,t){var n=Object(r.a)(Object(r.a)({},e),t),o={};for(var a in n)void 0!==e[a]&&void 0!==t[a]&&(o[a]=_(e[a],t[a]));return function(e){for(var t in o)n[t]=o[t](e);return n}};function C(e){for(var t=a.c.parse(e),n=t.length,r=0,o=0,i=0,u=0;u<n;u++)r||"number"===typeof t[u]?r++:void 0!==t[u].hue?i++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:i}}var R=function(e,t){var n=a.c.createTransformer(t),r=C(e),i=C(t);return Object(o.a)(r.numHSL===i.numHSL&&r.numRGB===i.numRGB&&r.numNumbers>=i.numNumbers,"Complex values '"+e+"' and '"+t+"' too different to mix. Ensure all colors are of the same type."),k(S(r.parsed,i.parsed),n)},P=function(e,t){return function(n){return g(e,t,n)}};function I(e,t,n){for(var r,o=[],i=n||("number"===typeof(r=e[0])?P:"string"===typeof r?a.b.test(r)?O:R:Array.isArray(r)?S:"object"===typeof r?A:void 0),u=e.length-1,c=0;c<u;c++){var s=i(e[c],e[c+1]);if(t){var f=Array.isArray(t)?t[c]:t;s=k(f,s)}o.push(s)}return o}function T(e,t,n){var r=void 0===n?{}:n,a=r.clamp,i=void 0===a||a,c=r.ease,s=r.mixer,f=e.length;Object(o.a)(f===t.length,"Both input and output ranges must be the same length"),Object(o.a)(!c||!Array.isArray(c)||c.length===f-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[f-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());var l=I(t,c,s),d=2===f?function(e,t){var n=e[0],r=e[1],o=t[0];return function(e){return o(m(n,r,e))}}(e,l):function(e,t){var n=e.length,r=n-1;return function(o){var a=0,i=!1;if(o<=e[0]?i=!0:o>=e[r]&&(a=r-1,i=!0),!i){for(var u=1;u<n&&!(e[u]>o||u===r);u++);a=u-1}var c=m(e[a],e[a+1],o);return t[a](c)}}(e,l);return i?function(t){return d(u(e[0],e[f-1],t))}:d}var N=function(e){return function(t){return 1-e(1-t)}},E=function(e){return function(t){return t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2}},H=function(e){return function(t){return t*t*((e+1)*t-e)}},D=function(e){var t=H(e);return function(e){return(e*=2)<1?.5*t(e):.5*(2-Math.pow(2,-10*(e-1)))}},q=function(e){return e},L=function(e){return function(t){return Math.pow(t,e)}}(2),F=N(L),U=E(L),W=function(e){return 1-Math.sin(Math.acos(e))},z=N(W),B=E(z),Y=H(1.525),K=N(Y),X=E(Y),G=D(1.525),J=function(e){if(1===e||0===e)return e;var t=e*e;return e<.36363636363636365?7.5625*t:e<.7272727272727273?9.075*t-9.9*e+3.4:e<.9?12.066481994459833*t-19.63545706371191*e+8.898060941828255:10.8*e*e-20.52*e+10.72},Z=N(J),V=function(e){return e<.5?.5*(1-J(1-2*e)):.5*J(2*e-1)+.5};function $(e,t){return e.map((function(){return t||U})).splice(0,e.length-1)}function Q(e){var t=e.from,n=void 0===t?0:t,r=e.to,o=void 0===r?1:r,a=e.ease,i=e.offset,u=e.duration,c=void 0===u?300:u,s={done:!1,value:n},f=Array.isArray(o)?o:[n,o],l=function(e,t){return e.map((function(e){return e*t}))}(i&&i.length===f.length?i:function(e){var t=e.length;return e.map((function(e,n){return 0!==n?n/(t-1):0}))}(f),c);function d(){return T(l,f,{ease:Array.isArray(a)?a:$(f,a)})}var p=d();return{next:function(e){return s.value=p(e),s.done=e>=c,s},flipTarget:function(){f.reverse(),p=d()}}}var ee={keyframes:Q,spring:h,decay:function(e){var t=e.velocity,n=void 0===t?0:t,r=e.from,o=void 0===r?0:r,a=e.power,i=void 0===a?.8:a,u=e.timeConstant,c=void 0===u?350:u,s=e.restDelta,f=void 0===s?.5:s,l=e.modifyTarget,d={done:!1,value:o},p=i*n,h=o+p,v=void 0===l?h:l(h);return v!==h&&(p=v-o),{next:function(e){var t=-p*Math.exp(-e/c);return d.done=!(t>f||t<-f),d.value=d.done?v:v+t,d},flipTarget:function(){}}}};function te(e,t,n){return void 0===n&&(n=0),e-t-n}var ne=function(e){var t=function(t){var n=t.delta;return e(n)};return{start:function(){return i.b.update(t,!0,!0)},stop:function(){return i.a.update(t)}}};function re(e){var t,n,o,a,i,u=e.from,c=e.autoplay,s=void 0===c||c,f=e.driver,l=void 0===f?ne:f,d=e.elapsed,p=void 0===d?0:d,v=e.repeat,m=void 0===v?0:v,g=e.repeatType,y=void 0===g?"loop":g,b=e.repeatDelay,x=void 0===b?0:b,j=e.onPlay,O=e.onStop,M=e.onComplete,w=e.onRepeat,k=e.onUpdate,_=Object(r.d)(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),S=_.to,A=0,C=_.duration,R=!1,P=!0,I=function(e){if(Array.isArray(e.to))return Q;if(ee[e.type])return ee[e.type];var t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Q:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?h:Q}(_);(null===(n=(t=I).needsInterpolation)||void 0===n?void 0:n.call(t,u,S))&&(i=T([0,100],[u,S],{clamp:!1}),u=0,S=100);var N=I(Object(r.a)(Object(r.a)({},_),{from:u,to:S}));function E(){A++,"reverse"===y?p=function(e,t,n,r){return void 0===n&&(n=0),void 0===r&&(r=!0),r?te(t+-e,t,n):t-(e-t)+n}(p,C,x,P=A%2===0):(p=te(p,C,x),"mirror"===y&&N.flipTarget()),R=!1,w&&w()}function H(e){if(P||(e=-e),p+=e,!R){var t=N.next(Math.max(0,p));a=t.value,i&&(a=i(a)),R=P?t.done:p<=0}null===k||void 0===k||k(a),R&&(0===A&&(null!==C&&void 0!==C||(C=p)),A<m?function(e,t,n,r){return r?e>=t+n:e<=-n}(p,C,x,P)&&E():(o.stop(),M&&M()))}return s&&(null===j||void 0===j||j(),(o=l(H)).start()),{stop:function(){null===O||void 0===O||O(),o.stop()}}}function oe(e,t){return t?e*(1e3/t):0}function ae(e){var t,n=e.from,o=void 0===n?0:n,a=e.velocity,u=void 0===a?0:a,c=e.min,s=e.max,f=e.power,l=void 0===f?.8:f,d=e.timeConstant,p=void 0===d?750:d,h=e.bounceStiffness,v=void 0===h?500:h,m=e.bounceDamping,g=void 0===m?10:m,y=e.restDelta,b=void 0===y?1:y,x=e.modifyTarget,j=e.driver,O=e.onUpdate,M=e.onComplete;function w(e){return void 0!==c&&e<c||void 0!==s&&e>s}function k(e){return void 0===c?s:void 0===s||Math.abs(c-e)<Math.abs(s-e)?c:s}function _(e){null===t||void 0===t||t.stop(),t=re(Object(r.a)(Object(r.a)({},e),{driver:j,onUpdate:function(t){var n;null===O||void 0===O||O(t),null===(n=e.onUpdate)||void 0===n||n.call(e,t)},onComplete:M}))}function S(e){_(Object(r.a)({type:"spring",stiffness:v,damping:g,restDelta:b},e))}if(w(o))S({from:o,velocity:u,to:k(o)});else{var A=l*u+o;"undefined"!==typeof x&&(A=x(A));var C,R,P=k(A),I=P===c?-1:1;_({type:"decay",from:o,velocity:u,timeConstant:p,power:l,restDelta:b,modifyTarget:x,onUpdate:w(A)?function(e){C=R,R=e,u=oe(e-C,Object(i.c)().delta),(1===I&&e>P||-1===I&&e<P)&&S({from:e,to:P,velocity:u})}:void 0})}return{stop:function(){return null===t||void 0===t?void 0:t.stop()}}}var ie=function(e){return e},ue=function(e){return void 0===e&&(e=ie),function(t,n,r){var o=n-r,a=-(0-t+1)*(0-e(Math.abs(o)));return o<=0?n+a:n-a}},ce=(Math.sqrt,function(e){return e.hasOwnProperty("x")&&e.hasOwnProperty("y")}),se=function(e){return ce(e)&&e.hasOwnProperty("z")},fe=function(e,t){return Math.abs(e-t)};function le(e,t){if(M(e)&&M(t))return fe(e,t);if(ce(e)&&ce(t)){var n=fe(e.x,t.x),r=fe(e.y,t.y),o=se(e)&&se(t)?fe(e.z,t.z):0;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2)+Math.pow(o,2))}}var de=function(e,t,n){var r=t-e;return((n-e)%r+r)%r+e},pe=function(e,t){return 1-3*t+3*e},he=function(e,t){return 3*t-6*e},ve=function(e){return 3*e},me=function(e,t,n){return((pe(t,n)*e+he(t,n))*e+ve(t))*e},ge=function(e,t,n){return 3*pe(t,n)*e*e+2*he(t,n)*e+ve(t)};var ye=.1;function be(e,t,n,r){if(e===t&&n===r)return q;for(var o=new Float32Array(11),a=0;a<11;++a)o[a]=me(a*ye,e,n);function i(t){for(var r=0,a=1;10!==a&&o[a]<=t;++a)r+=ye;--a;var i=r+(t-o[a])/(o[a+1]-o[a])*ye,u=ge(i,e,n);return u>=.001?function(e,t,n,r){for(var o=0;o<8;++o){var a=ge(t,n,r);if(0===a)return t;t-=(me(t,n,r)-e)/a}return t}(t,i,e,n):0===u?i:function(e,t,n,r,o){var a,i,u=0;do{(a=me(i=t+(n-t)/2,r,o)-e)>0?n=i:t=i}while(Math.abs(a)>1e-7&&++u<10);return i}(t,r,r+ye,e,n)}return function(e){return 0===e||1===e?e:me(i(e),t,r)}}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o),i=n("ZMKu"),u=n("YFqc"),c=n.n(u),s=n("vRNQ"),f=n.n(s);function l(){return Object(r.jsxs)("div",{className:f.a.container,children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"Conste11ations"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("main",{className:f.a.main,children:[Object(r.jsx)("h1",{className:f.a.title,children:"Conste11ations"}),Object(r.jsx)(i.a.div,{whileHover:{scale:1.3},whileTap:{scale:.9},children:Object(r.jsx)("p",{className:f.a.description,children:Object(r.jsx)("code",{className:f.a.code,children:"blog"})})}),Object(r.jsxs)("div",{className:f.a.grid,children:[Object(r.jsxs)(i.a.div,{animate:{scale:[1.1,1]},transition:{duration:1},className:f.a.card,children:[Object(r.jsx)("h3",{children:"About"}),Object(r.jsx)(i.a.div,{animate:{scale:[1,2,2,1,1],rotate:[0,0,270,270,0],borderRadius:["20%","20%","50%","50%","20%"]},children:Object(r.jsx)("p",{children:Object(r.jsx)(c.a,{href:"https://github.com/conste11ations/",children:Object(r.jsx)("img",{src:"github.svg",alt:"github"})})})})]}),Object(r.jsxs)(i.a.div,{animate:{scale:[1.1,1]},transition:{duration:1},className:f.a.card,children:[Object(r.jsx)("h3",{children:"Ideas"}),Object(r.jsx)("p",{children:"When I pen my thoughts down"})]}),Object(r.jsxs)(i.a.div,{animate:{scale:[1.1,1]},transition:{duration:1},className:f.a.card,children:[Object(r.jsx)("h3",{children:"Code"}),Object(r.jsx)("p",{children:"When I code or explain tech things"}),Object(r.jsx)("ul",{children:Object(r.jsxs)("li",{children:[Object(r.jsx)("a",{href:"#",class:"special-link",children:"Zones, Zone.js, NgZone"}),Object(r.jsx)("a",{href:"#",class:"special-link",children:"Change Detection in Angular"}),Object(r.jsx)("a",{href:"#",class:"special-link",children:"Alternatives to the Async Pipe"})]})})]}),Object(r.jsxs)(i.a.div,{animate:{scale:[1.1,1]},transition:{duration:1},className:f.a.card,children:[Object(r.jsx)("h3",{children:"Research"}),Object(r.jsx)("p",{children:"After researching various topics"})]})]})]}),Object(r.jsx)("footer",{className:f.a.footer})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),u=n("nOHt"),c=n("vNVm"),s={};function f(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=l.href,p=l.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=a.Children.only(h),x=b&&"object"===typeof b&&b.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),O=r(j,2),M=O[0],w=O[1],k=a.default.useCallback((function(e){M(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,M]);(0,a.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,w,y,t,n]);var _={ref:k,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,n,d,p,v,m,g,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var S="undefined"!==typeof y?y:n&&n.locale,A=(0,i.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);_.href=A||(0,i.addBasePath)((0,i.addLocale)(p,S,n&&n.defaultLocale))}return a.default.cloneElement(b,_)};t.default=l},eUsl:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return m}));var r=1/60*1e3,o="undefined"!==typeof window?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout((function(){return e(performance.now())}),r)};var a=!0,i=!1,u=!1,c={delta:0,timestamp:0},s=["read","update","preRender","render","postRender"],f=s.reduce((function(e,t){return e[t]=function(e){var t=[],n=[],r=0,o=!1,a=new WeakSet,i={schedule:function(e,i,u){void 0===i&&(i=!1),void 0===u&&(u=!1);var c=u&&o,s=c?t:n;return i&&a.add(e),-1===s.indexOf(e)&&(s.push(e),c&&o&&(r=t.length)),e},cancel:function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1),a.delete(e)},process:function(u){var c;if(o=!0,t=(c=[n,t])[0],(n=c[1]).length=0,r=t.length)for(var s=0;s<r;s++){var f=t[s];f(u),a.has(f)&&(i.schedule(f),e())}o=!1}};return i}((function(){return i=!0})),e}),{}),l=s.reduce((function(e,t){var n=f[t];return e[t]=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=!1),i||v(),n.schedule(e,t,r)},e}),{}),d=s.reduce((function(e,t){return e[t]=f[t].cancel,e}),{}),p=function(e){return f[e].process(c)},h=function(e){i=!1,c.delta=a?r:Math.max(Math.min(e-c.timestamp,40),1),c.timestamp=e,u=!0,s.forEach(p),u=!1,i&&(a=!1,o(h))},v=function(){i=!0,a=!0,u||o(h)},m=function(){return c};t.b=l},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mrSG:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return f}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function s(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}function f(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,o=(0,a.useRef)(),s=(0,a.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||l||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,a.useEffect)((function(){u||l||(0,i.default)((function(){return d(!0)}))}),[l]),[p,l]};var a=n("q1tI"),i=o(n("0G5g")),u="undefined"!==typeof IntersectionObserver;var c=new Map},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,3,2]]]);