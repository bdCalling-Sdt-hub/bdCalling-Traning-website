exports.id=774,exports.ids=[774],exports.modules={5759:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(997);let r=({children:e})=>a.jsx("div",{className:"w-10 h-10 bg-black flex justify-center items-center rounded-lg hover:bg-[#1796fd] duration-300 cursor-pointer",children:e})},695:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>o});var r=s(997),i=s(7531),l=s(5152),n=s.n(l),c=e([i]);i=(c.then?(await c)():c)[0];let o=({children:e})=>{let t=n()(async()=>{},{loadableGenerated:{modules:["..\\components\\Layouts\\RootLayout.jsx -> @/shared/Navbar"]},ssr:!1});return(0,r.jsxs)("div",{children:[r.jsx(t,{}),e,r.jsx(i.Z,{})]})};a()}catch(e){a(e)}})},4498:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{z:()=>h});var r=s(997),i=s(4338),l=s(6926),n=s(6689),c=s(3850),o=e([i,l,c]);[i,l,c]=o.then?(await o)():o;let d=(0,l.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4  dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),h=n.forwardRef(({className:e,variant:t,size:s,asChild:a=!1,...l},n)=>{let o=a?i.Slot:"button";return r.jsx(o,{className:(0,c.cn)(d({variant:t,size:s,className:e})),ref:n,...l})});h.displayName="Button",a()}catch(e){a(e)}})},4055:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{baseUrl:()=>l,imgUrl:()=>n});var r=s(9648),i=e([r]);r=(i.then?(await i)():i)[0];let l=r.default.create({baseURL:"https://hub.bdcallingacademy.com/api/",timeout:1e4,headers:{"X-Custom-Header":"foobar"}}),n="https://hub.bdcallingacademy.com";a()}catch(e){a(e)}})},6734:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(997);let{baseUrl:r}=s(4055),{createContext:i,useState:l,useEffect:n}=s(6689),c=i(),o=({children:e})=>{let t;let[s,i]=l({});return n(()=>{t&&r.get("/profile",{headers:{"Content-type":"application/json",authorization:`Bearer ${t}`}}).then(e=>{e.data&&i(e.data?.user)}).catch(e=>{console.error("Error fetching user data:",e)})},[t]),a.jsx(c.Provider,{value:{user:s,setUser:i},children:e})}},7519:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>n});var r=s(4055),i=s(6689),l=e([r]);r=(l.then?(await l)():l)[0];let n=()=>{let[e,t]=(0,i.useState)(null),[s,a]=(0,i.useState)(null),[l,n]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=async()=>{try{let e=await r.baseUrl.get("/category");t(e.data.data)}catch(e){a(e)}finally{n(!1)}};e()},[]),{category:e,isLoading:l,error:s}};a()}catch(e){a(e)}})},3850:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{cn:()=>n,i:()=>c});var r=s(6593),i=s(8097),l=e([r,i]);function n(...e){return(0,i.twMerge)((0,r.clsx)(e))}function c(e){let[t,s,a]=e.split(":"),r=t%12;r=0===r?12:r;let i=`${r}:${s} ${t>=12?"PM":"AM"}`;return i}[r,i]=l.then?(await l)():l,a()}catch(e){a(e)}})},8397:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>m});var r=s(997),i=s(8226),l=s.n(i),n=s(6734);s(108),s(5544);var c=s(6197),o=s(1649),d=s(8890),h=s.n(d),x=e([c]);function m({Component:e,pageProps:t}){let s=e.getLayout||(e=>e);return r.jsx(o.SessionProvider,{session:t.session,children:r.jsx(n.Z,{children:r.jsx(c.AnimatePresence,{children:(0,r.jsxs)(c.motion.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:15},transition:{delay:.2},className:l().className,children:[r.jsx(h(),{color:"#1796FD"}),s(r.jsx(e,{...t}))]})})})})}c=(x.then?(await x)():x)[0],a()}catch(e){a(e)}})},4024:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Document});var a=s(997),r=s(6859);function Document(){return(0,a.jsxs)(r.Html,{lang:"en",children:[a.jsx(r.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(r.Main,{}),a.jsx(r.NextScript,{})]})]})}},7531:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>p});var r=s(997),i=s(5759),l=s(7519),n=s(8455),c=s(9560),o=s(726),d=s(6953),h=s(9769),x=s(3574),m=s(5675),g=s.n(m),u=s(1664),b=s.n(u),j=s(7601),f=e([l]);l=(f.then?(await f)():f)[0];let p=()=>{let{usefulLinks:e,description:t,contacts:s,paymentImages:a}=j,{category:m}=(0,l.Z)();return(0,r.jsxs)("footer",{className:"bg-[#e6f8ff]",children:[r.jsx("div",{className:"container pt-16 pb-10",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-8 lg:gap-y-0  text-base-content items-center",children:[(0,r.jsxs)("aside",{children:[r.jsx("a",{href:"#",children:r.jsx(g(),{src:"/images/logo.png",alt:"logo",width:150,height:100})}),r.jsx("p",{className:"mt-4",children:t}),r.jsx("h4",{className:"font-bold mt-4 mb-2",children:"Share Now"}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[r.jsx("a",{href:"https://www.facebook.com/bdcallingacademy",target:"_blank",children:r.jsx(i.Z,{children:r.jsx(n.Z,{color:"#e8e3e3"})})}),r.jsx("a",{href:"https://www.linkedin.com/company/bdcallingitltd",target:"_blank",children:r.jsx(i.Z,{children:r.jsx(c.Z,{color:"#e8e3e3"})})}),r.jsx("a",{href:"https://www.youtube.com/@bdCalling",target:"_blank",children:r.jsx(i.Z,{children:r.jsx(o.Z,{color:"#e8e3e3"})})}),r.jsx("a",{href:"mailto:info@bdcallingacademy.com",children:r.jsx(i.Z,{children:r.jsx(d.Z,{color:"#e8e3e3"})})})]})]}),(0,r.jsxs)("nav",{children:[r.jsx("header",{className:"font-bold mb-6 text-lg",children:"Useful Links"}),e.map((e,t)=>r.jsx(b(),{href:e?.link,className:"block mb-2 hover:underline transition",children:e?.title},t))]}),(0,r.jsxs)("nav",{children:[r.jsx("header",{className:"font-bold mb-6 text-lg",children:"Course Categories"}),m?.slice(0,8).map((e,t)=>r.jsx(b(),{href:"/courses",className:"block mb-2 hover:underline transition",children:"ux/ui design"===e.category_name?r.jsx("span",{children:"UX/UI Design"}):r.jsx("span",{className:"capitalize",children:e.category_name})},t))]}),(0,r.jsxs)("nav",{children:[r.jsx("header",{className:"font-bold mb-6 text-lg",children:"Contact Info"}),r.jsx("a",{href:"tel:+88 01321231802",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[r.jsx(i.Z,{children:r.jsx(h.Z,{color:"#e8e3e3",size:25})}),r.jsx("p",{children:"+88 01321231802"})]})}),r.jsx("a",{href:"mailto:info@bdcallingacademy.com",children:(0,r.jsxs)("div",{className:"flex items-center gap-2 mt-4",children:[r.jsx(i.Z,{children:r.jsx(d.Z,{color:"#e8e3e3"})}),r.jsx("p",{children:"info@bdcallingacademy.com"})]})}),(0,r.jsxs)("div",{className:"flex items-center gap-2 mt-4",children:[r.jsx(i.Z,{children:r.jsx(x.Z,{size:40,color:"#e8e3e3",absoluteStrokeWidth:!0})}),r.jsx("p",{children:"Daisy Garden, House 14, Block A, Banasree, main road, Dhaka-1219"})]})]}),r.jsx("div",{}),r.jsx("div",{children:r.jsx("h2",{className:"text-lg font-semibold border-r-2 border-primary",children:"Online Transaction Method"})}),r.jsx("nav",{className:"lg:col-span-2",children:r.jsx("div",{className:"flex gap-1",children:a.map((e,t)=>r.jsx("div",{className:"bg-white  rounded-md px-2 py-1",children:r.jsx("img",{src:e.imgLink,alt:`${e.title} logo`,width:"ssl"===e.title?150:80,height:80})},t))})})]})}),r.jsx("div",{className:"border-t py-7",children:(0,r.jsxs)("div",{className:"container lg:flex items-center justify-between",children:[(0,r.jsxs)("div",{children:[r.jsx("a",{href:"#",className:"border-r mr-1 px-1",children:"Privacy Policy"}),r.jsx("a",{href:"#",children:"Terms & Conditions"})]}),r.jsx("div",{children:r.jsx("p",{children:"\xa9 2024 Bdcalling Academy. All Rights Reserved."})})]})})]})};a()}catch(e){a(e)}})},108:()=>{},7601:e=>{"use strict";e.exports=JSON.parse('{"description":"What brings innovation to everything we do is collaboration. We help each other, solve issues we face, we enjoys sweet talks. We shape up each other’s ideas to bring the best out of them.","usefulLinks":[{"title":"About Us","link":"/about"},{"title":"Contact Us","link":"/contact"},{"title":"Success Story","link":"/success-stories"},{"title":"Free Seminar Schedule","link":"/free-seminar"},{"title":"Mentors","link":"/mentors?title=Mentors"},{"title":"Team","link":"/mentors?title=Team"},{"title":"Refund Policy","link":""}],"contacts":[{"icon":"Phone","title":"+88 01321231802"},{"icon":"Mail","title":"info@bdcallingacademy.com"},{"icon":"MapPinned","title":"Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219"}],"paymentImages":[{"imgLink":"/images/bkash.png","title":"bkash"},{"imgLink":"/images/nagad.png","title":"nagad"},{"imgLink":"/images/rocket.png","title":"rocket"},{"imgLink":"/images/ssl.png","title":"ssl"}]}')}};