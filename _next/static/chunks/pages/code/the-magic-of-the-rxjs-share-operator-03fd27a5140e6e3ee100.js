_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(s.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},s=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,s=e.hasQuery,a=void 0!==s&&s;return n||o&&a}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=r?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),i=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var s=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?s=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(var i=0,l=p.length;i<l;i++){var u=p[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var d=o.props[u],h=r[u]||new Set;"name"===u&&a||!h.has(d)?(h.add(d),r[u]=h):s=!1}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}f.rewind=function(){};var b=f;t.default=b},"8uIX":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/code/the-magic-of-the-rxjs-share-operator",function(){return n("iHZn")}])},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),s=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||s(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),s=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),i=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){a(n,e);var t=l(n);function n(e){var s;return o(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},iHZn:function(e,t,n){"use strict";n.r(t),n.d(t,"CodePost1",(function(){return a}));var r=n("nKUr"),o=n("vRNQ"),s=n.n(o);n("g4pe");function a(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:s.a.container,children:[Object(r.jsx)("h1",{children:"The magic of the RxJS share operators"}),Object(r.jsxs)("div",{className:s.a.main,children:[Object(r.jsx)("p",{children:"There are two main ways to reap the benefits of the RxJS share/shareReplay operators:"}),Object(r.jsxs)("ol",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Share reduces repeated computations"}),Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:"With multiple subscribers to the same observable, you can process computations (side-effects) once, broadcast the results to whoever is listening."})})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:'ShareReplay = share + making sure "everyone\'s on the same page"'}),Object(r.jsx)("ul",{children:Object(r.jsxs)("li",{children:["When there are multiple subscribers, and you want to make sure they all get the same data, ",Object(r.jsx)("i",{children:"at the same time"})]})})]})]}),Object(r.jsx)("h2",{children:"1. Reduce Repeated Computations"}),Object(r.jsx)("p",{children:Object(r.jsx)("b",{children:"Without share()"})}),Object(r.jsxs)("code",{children:[Object(r.jsx)("pre",{className:"grey",children:"import { interval } from 'rxjs';\nimport { share, map } from 'rxjs/operators';\n  "}),Object(r.jsx)("pre",{children:"const source = interval(1000)\n   .pipe(\n         map((x: number) => {\n             console.log('INTENSE computation for: ', x)\n             return x * x;\n         })\n );\n\nsource.subscribe(x => console.log('subscription 1: ', x));\nsource.subscribe(x => console.log('subscription 2: ', x));\n "}),Object(r.jsx)("pre",{className:"grey",children:"// Console:\n// INTENSE computation for:  0\n// subscription 1:  0\n// INTENSE computation for:  0\n// subscription 2:  0\n// INTENSE computation for:  1\n// subscription 1:  1\n// INTENSE computation for:  1\n// subscription 2:  1\n// INTENSE computation for:  2\n// subscription 1:  4\n// INTENSE computation for:  2\n// subscription 2:  4"})]}),Object(r.jsx)("p",{children:Object(r.jsx)("b",{children:"With share()"})}),Object(r.jsxs)("code",{children:[Object(r.jsx)("pre",{className:"grey",children:"import { interval } from 'rxjs';\nimport { share, map } from 'rxjs/operators';\n  "}),Object(r.jsx)("pre",{children:"const source$ = interval(1000)\n   .pipe(\n         map((x: number) => {\n             console.log('Heavy-duty computation for: ', x)\n             return x * x;\n         })\n\nsource$.subscribe(x => console.log('subscription 1: ', x));\nsource$.subscribe(x => console.log('subscription 2: ', x));\n );"}),Object(r.jsx)("pre",{className:"grey",children:"// Console:\n// INTENSE computation for:  0\n// subscription 1:  0\n// subscription 2:  0\n// INTENSE computation for:  1\n// subscription 1:  1\n// subscription 2:  1\n// INTENSE computation for:  2\n// subscription 1:  4\n// subscription 2:  4"})]}),Object(r.jsx)("h2",{children:"2. Everyone's On the Same Page"}),Object(r.jsxs)("code",{children:[Object(r.jsx)("pre",{className:"grey",children:'import { Component } from "@angular/core";\nimport { Observable, of } from "rxjs";\nimport { delay, share, shareReplay, tap } from "rxjs/operators";\n\n  @Component({\n    selector: "my-app",'}),Object(r.jsx)("pre",{children:'templateUrl: `\n    <div *ngIf="(source$ | async)">\n      <div *ngIf="(source$ | async)">\n        <div>{{ source$ | async }}1</div>\n      </div>\n    </div>\n    <div *ngIf="(source$ | async)">\n      <div>{{ source$ | async }}2</div>\n    </div>\n  `,\n})'}),Object(r.jsx)("pre",{className:"grey",children:"\nexport class AppComponent {\n  source$: Observable<any>;\n"}),Object(r.jsx)("pre",{children:"\n  ngOnInit() {\n"}),Object(r.jsx)("pre",{className:"yellow",children:"     this.source$ = this.getData();"}),Object(r.jsx)("pre",{children:' }\n\n  getData() {\n    // Fake Slow Async Data\n    return of("here is data").pipe(\n      tap(() => console.log("side-effect")),\n      delay(2000)\n    );\n  }\n}'})]}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("b",{children:["If the yellow line was",Object(r.jsx)("code",{children:"this.source$ = this.getData()"})]}),Object(r.jsx)("p",{children:"Five calls to get data for five separate subscriptions, data displays asynchronously."})]}),Object(r.jsx)("p",{children:Object(r.jsx)("img",{width:"500",src:"/getData.gif"})}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("b",{children:["If the yellow line was",Object(r.jsx)("code",{children:"this.source$ = this.getData(share())"})]}),Object(r.jsx)("p",{children:"Three calls to get data, data displays asynchronously. Not so great if you're looking for more control over your display."})]}),Object(r.jsx)("p",{children:Object(r.jsx)("img",{width:"500",src:"/share.gif"})}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("b",{children:["If the yellow line was",Object(r.jsx)("code",{children:"this.source$ = this.getData(shareReplay(1))"})]}),Object(r.jsx)("p",{children:"One call, everyone gets data all at once - everyone's on the same page."})]}),Object(r.jsx)("p",{children:Object(r.jsx)("img",{width:"500",src:"/shareReplay.gif"})}),Object(r.jsx)("h2",{children:"Advanced Reading for the Technically Adventurous"}),Object(r.jsxs)("ol",{children:[Object(r.jsxs)("li",{children:["There is no need to use share or shareReplay for ngrx/store selectors"," ",Object(r.jsx)("a",{className:"underlined-link",href:"https://ngrx.io/guide/component-store/read",children:"because multicast is already enabled."})]}),Object(r.jsxs)("li",{children:["share() is an alias for"," ",Object(r.jsx)("a",{className:"underlined-link",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/share.ts",children:"multicast(() => new Subject()),refCount()"})]})]})]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("footer",{className:s.a.footer,children:[Object(r.jsx)("b",{children:"Reference documentation"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/share.ts",className:"underlined-link",children:"RxJS source code (caution: check your version as the share operator has undergone changes between versions)"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://medium.com/@mikesnare/angular-async-pipes-beware-the-share-bcc9c1cd849d",className:"underlined-link",children:"Beware the Share by Mike Snare"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://netbasal.com/understanding-rxjs-multicast-operators-77b3f60af0a2",className:"underlined-link",children:"Understanding multicast operators by Netanel Basal"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255",className:"underlined-link",children:"The magic of RXJS sharing operators and their differences by ITNEXT"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://coryrylan.com/blog/angular-async-data-binding-with-ng-if-and-ng-else#async-pipe-and-the-share-operator",className:"underlined-link",children:"Angular Async Data Binding with ngIf and ngElse by Cory Rylan"})})]})]})]})}t.default=a},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},[["8uIX",0,1]]]);