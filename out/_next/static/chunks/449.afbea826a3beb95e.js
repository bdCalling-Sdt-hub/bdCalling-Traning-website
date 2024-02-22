"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{5449:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var s=a(5893),r=a(2854),l=a(2003),n=a(1352),i=a(7294),d=a(3850);let o=r.fC,c=r.xz;r.x8;let u=r.h_,m=i.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.aV,{className:(0,d.cn)("fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80",a),...l,ref:t})});m.displayName=r.aV.displayName;let f=(0,l.j)("fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-full lg:w-[500px]  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right "}},defaultVariants:{side:"right"}}),p=i.forwardRef((e,t)=>{let{side:a="right",className:l,children:i,...o}=e;return(0,s.jsxs)(u,{children:[(0,s.jsx)(m,{}),(0,s.jsxs)(r.VY,{ref:t,className:(0,d.cn)(f({side:a}),l),...o,children:[i,(0,s.jsxs)(r.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800",children:[(0,s.jsx)(n.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=r.VY.displayName;let x=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,d.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};x.displayName="SheetHeader";let h=i.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.Dx,{ref:t,className:(0,d.cn)("text-lg font-semibold text-slate-950 dark:text-slate-50",a),...l})});h.displayName=r.Dx.displayName;let b=i.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.dk,{ref:t,className:(0,d.cn)("text-sm text-slate-500 dark:text-slate-400",a),...l})});b.displayName=r.dk.displayName;var g=a(4498),k=a(7462),j=a(8771),y=a(5360),N=a(6206),w=a(7342),v=a(7546),E=a(9115),C=a(5320);let R="Checkbox",[I,z]=(0,y.b)(R),[_,S]=I(R),P=(0,i.forwardRef)((e,t)=>{let{__scopeCheckbox:a,name:s,checked:r,defaultChecked:l,required:n,disabled:d,value:o="on",onCheckedChange:c,...u}=e,[m,f]=(0,i.useState)(null),p=(0,j.e)(t,e=>f(e)),x=(0,i.useRef)(!1),h=!m||!!m.closest("form"),[b=!1,g]=(0,w.T)({prop:r,defaultProp:l,onChange:c}),y=(0,i.useRef)(b);return(0,i.useEffect)(()=>{let e=null==m?void 0:m.form;if(e){let t=()=>g(y.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[m,g]),(0,i.createElement)(_,{scope:a,state:b,disabled:d},(0,i.createElement)(C.WV.button,(0,k.Z)({type:"button",role:"checkbox","aria-checked":L(b)?"mixed":b,"aria-required":n,"data-state":M(b),"data-disabled":d?"":void 0,disabled:d,value:o},u,{ref:p,onKeyDown:(0,N.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,N.M)(e.onClick,e=>{g(e=>!!L(e)||!e),h&&(x.current=e.isPropagationStopped(),x.current||e.stopPropagation())})})),h&&(0,i.createElement)(D,{control:m,bubbles:!x.current,name:s,value:o,checked:b,required:n,disabled:d,style:{transform:"translateX(-100%)"}}))}),V=(0,i.forwardRef)((e,t)=>{let{__scopeCheckbox:a,forceMount:s,...r}=e,l=S("CheckboxIndicator",a);return(0,i.createElement)(E.z,{present:s||L(l.state)||!0===l.state},(0,i.createElement)(C.WV.span,(0,k.Z)({"data-state":M(l.state),"data-disabled":l.disabled?"":void 0},r,{ref:t,style:{pointerEvents:"none",...e.style}})))}),D=e=>{let{control:t,checked:a,bubbles:s=!0,...r}=e,l=(0,i.useRef)(null),n=function(e){let t=(0,i.useRef)({value:e,previous:e});return(0,i.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(a),d=(0,v.t)(t);return(0,i.useEffect)(()=>{let e=l.current,t=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(t,"checked"),i=r.set;if(n!==a&&i){let t=new Event("click",{bubbles:s});e.indeterminate=L(a),i.call(e,!L(a)&&a),e.dispatchEvent(t)}},[n,a,s]),(0,i.createElement)("input",(0,k.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!L(a)&&a},r,{tabIndex:-1,ref:l,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function L(e){return"indeterminate"===e}function M(e){return L(e)?"indeterminate":e?"checked":"unchecked"}var Z=a(3742);let U=i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(P,{ref:t,className:(0,d.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",a),...r,children:(0,s.jsx)(V,{className:(0,d.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(Z.Z,{className:"h-4 w-4"})})})});U.displayName=P.displayName;var q=a(9535),F=e=>{let{setRegister:t}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(x,{className:"mb-5",children:[(0,s.jsx)(h,{className:"text-xl",children:"Login"}),(0,s.jsx)(b,{children:"Hello there, haven’t we seen you before?"})]}),(0,s.jsx)(q.I,{placeholder:"User Name",className:"mb-4"}),(0,s.jsx)(q.I,{placeholder:"Password",className:""}),(0,s.jsxs)("div",{className:"flex items-center justify-between mb-7",children:[(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsx)(U,{id:"terms1"}),(0,s.jsx)("label",{htmlFor:"terms1",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Remember me"})]}),(0,s.jsx)(g.z,{variant:"link",className:"px-0",children:"Forget password"})]}),(0,s.jsx)(g.z,{className:"w-full py-6 bg-primary",children:"Login"}),(0,s.jsxs)("p",{className:"my-5",children:["I haven’t account?"," ",(0,s.jsx)(g.z,{onClick:()=>t("signUp"),variant:"link",className:"px-0 text-primary",children:"Sign up"})]}),(0,s.jsxs)(g.z,{className:"flex items-center gap-2 w-full py-6 bg-white shadow text-gray-500",children:[(0,s.jsx)("img",{src:"/images/google.svg",alt:"google"})," Sign with Google"]})]})},H=e=>{let{setRegister:t}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(x,{className:"mb-5",children:[(0,s.jsx)(h,{className:"text-xl",children:"Register"}),(0,s.jsxs)("p",{children:["I haven’t account?"," ",(0,s.jsx)(g.z,{onClick:()=>t(""),variant:"link",className:"px-0 text-primary",children:"Sign In"})]})]}),(0,s.jsx)(q.I,{placeholder:"Full Name",className:"mb-4"}),(0,s.jsx)(q.I,{placeholder:"Username",className:"mb-4"}),(0,s.jsx)(q.I,{placeholder:"Email",className:"mb-4"}),(0,s.jsx)(q.I,{placeholder:"Password",className:"mb-4"}),(0,s.jsx)(q.I,{placeholder:"Confirm Password",className:"mb-4"}),(0,s.jsx)(g.z,{className:"w-full py-6 bg-primary",children:"Register"}),(0,s.jsxs)(g.z,{className:"flex items-center gap-2 w-full py-6 bg-white shadow text-gray-500 mt-10",children:[(0,s.jsx)("img",{src:"/images/google.svg",alt:"google"})," Sign with Google"]})]})},G=()=>{let[e,t]=(0,i.useState)("");return(0,s.jsxs)(o,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(g.z,{className:"bg-[#1796fd]",children:"Login"})}),(0,s.jsx)(p,{children:"signUp"!==e?(0,s.jsx)(F,{setRegister:t}):(0,s.jsx)(H,{setRegister:t})})]})}},9535:function(e,t,a){a.d(t,{I:function(){return n}});var s=a(5893),r=a(7294),l=a(3850);let n=r.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,l.cn)("flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",a),ref:t,...n})});n.displayName="Input"}}]);