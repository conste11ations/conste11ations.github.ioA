(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{7268:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(1664),o=t(5893);function a(){return(0,o.jsx)("nav",{className:"absolute right-0 m-8",children:(0,o.jsx)(r.default,{href:"https://www.github.com/conste11ations",children:(0,o.jsx)("svg",{height:"32","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1",width:"32","data-view-component":"true",className:"animate-bounce octicon octicon-mark-github v-align-middle",children:(0,o.jsx)("path",{fill:"#fff","fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})})})}},7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(4957),u=t(9898),i=t(639);var l={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),s=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,v=s.as,p=e.children,h=e.replace,b=e.shallow,g=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var w=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,y=i.useIntersection({rootMargin:"200px"}),_=r(y,2),E=_[0],L=_[1],M=a.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);a.default.useEffect((function(){var e=L&&t&&c.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,r=l[d+"%"+v+(n?"%"+n:"")];e&&!r&&f(o,d,v,{locale:n})}),[v,d,L,m,t,o]);var k={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,v,h,b,g,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&f(o,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof m?m:o&&o.locale,x=o&&o.isLocaleDomain&&c.getDomainLocale(v,C,o&&o.locales,o&&o.domainLocales);k.href=x||c.addBasePath(c.addLocale(v,C,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=s},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],d=f[1],v=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[v,s]};var o=t(7294),a=t(6286),c="undefined"!==typeof IntersectionObserver;var u=new Map},5729:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(7268),o=t(5893);function a(){return(0,o.jsx)(r.Z,{})}},4613:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(5729)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=4613,e(e.s=n);var n}));var n=e.O();_N_E=n}]);