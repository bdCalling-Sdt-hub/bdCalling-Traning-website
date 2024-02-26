(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8226:e=>{e.exports={style:{fontFamily:"'__Poppins_45434c', '__Poppins_Fallback_45434c'",fontWeight:400,fontStyle:"normal"},className:"__className_45434c"}},8826:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>c,getServerSideProps:()=>m,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>y,routeModule:()=>v,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>x,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>g});var a=r(7093),o=r(5244),i=r(1323),l=r(4024),s=r(8397),u=r(6908),d=e([s]);s=(d.then?(await d)():d)[0];let c=(0,i.l)(u,"default"),p=(0,i.l)(u,"getStaticProps"),f=(0,i.l)(u,"getStaticPaths"),m=(0,i.l)(u,"getServerSideProps"),h=(0,i.l)(u,"config"),y=(0,i.l)(u,"reportWebVitals"),g=(0,i.l)(u,"unstable_getStaticProps"),b=(0,i.l)(u,"unstable_getStaticPaths"),_=(0,i.l)(u,"unstable_getStaticParams"),P=(0,i.l)(u,"unstable_getServerProps"),x=(0,i.l)(u,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:s.default,Document:l.default},userland:u});n()}catch(e){n(e)}})},6908:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});let n=r(167),a=n._(r(6689)),o=n._(r(9201)),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e,n=t&&t.statusCode?t.statusCode:r?r.statusCode:404;return{statusCode:n}}let s={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class Error extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||i[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:s.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),a.default.createElement("div",{style:s.desc},a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?a.default.createElement("h1",{className:"next-error-h1",style:s.h1},e):null,a.default.createElement("div",{style:s.wrap},a.default.createElement("h2",{style:s.h2},this.props.title||e?r:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}Error.displayName="ErrorPage",Error.getInitialProps=l,Error.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7543:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9201:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return d},default:function(){return m}});let n=r(167),a=r(8760),o=a._(r(6689)),i=n._(r(8955)),l=r(8039),s=r(1988),u=r(7543);function d(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1905);let p=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(c,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let o=!0,i=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){i=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8955:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(6689),a=()=>{},o=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1905:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},4055:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{baseUrl:()=>i,imgUrl:()=>l});var a=r(9648),o=e([a]);a=(o.then?(await o)():o)[0];let i=a.default.create({baseURL:"https://hub.bdcallingacademy.com/api/",timeout:1e4,headers:{"X-Custom-Header":"foobar"}}),l="https://hub.bdcallingacademy.com";n()}catch(e){n(e)}})},6734:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(997);let{baseUrl:a}=r(4055),{createContext:o,useState:i,useEffect:l}=r(6689),s=o(),u=({children:e})=>{let t;let[r,o]=i({});return l(()=>{t&&a.get("/profile",{headers:{"Content-type":"application/json",authorization:`Bearer ${t}`}}).then(e=>{e.data&&o(e.data?.user)}).catch(e=>{console.error("Error fetching user data:",e)})},[t]),n.jsx(s.Provider,{value:{user:r,setUser:o},children:e})}},8397:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>f});var a=r(997),o=r(8226),i=r.n(o),l=r(6734);r(108),r(5544);var s=r(6197),u=r(1649),d=r(8890),c=r.n(d),p=e([s]);function f({Component:e,pageProps:t}){let r=e.getLayout||(e=>e);return a.jsx(u.SessionProvider,{session:t.session,children:a.jsx(l.Z,{children:a.jsx(s.AnimatePresence,{children:(0,a.jsxs)(s.motion.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:15},transition:{delay:.2},className:i().className,children:[a.jsx(c(),{color:"#1796FD"}),r(a.jsx(e,{...t}))]})})})})}s=(p.then?(await p)():p)[0],n()}catch(e){n(e)}})},4024:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Document});var n=r(997),a=r(6859);function Document(){return(0,n.jsxs)(a.Html,{lang:"en",children:[n.jsx(a.Head,{}),(0,n.jsxs)("body",{children:[n.jsx(a.Main,{}),n.jsx(a.NextScript,{})]})]})}},5544:()=>{},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},8890:e=>{"use strict";e.exports=require("nextjs-progressbar")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9648:e=>{"use strict";e.exports=import("axios")},6197:e=>{"use strict";e.exports=import("framer-motion")},1017:e=>{"use strict";e.exports=require("path")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[198],()=>r(8826));module.exports=n})();