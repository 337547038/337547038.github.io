var g=Object.defineProperty;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(o,t,e)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,_=(o,t)=>{for(var e in t||(t={}))x.call(t,e)&&u(o,e,t[e]);if(d)for(var e of d(t))F.call(t,e)&&u(o,e,t[e]);return o};import{n as B,p as L,r as m,o as s,x as n,h as r,F as p,A as f,a as v,w as a,v as c,c as y,s as w,T as D,b as V}from"./vendor.f9fdd043.js";import{_ as $}from"./index.04a1649d.js";const C={name:"layout",props:{},components:{},setup(o){const t=B({menu:[{title:"\u5F00\u53D1\u6307\u5357",children:[{title:"\u4ECB\u7ECD",to:"/docs"},{title:"\u76EE\u5F55\u7ED3\u6784",to:"/docs#\u76EE\u5F55\u7ED3\u6784"},{title:"\u5FEB\u901F\u4E0A\u624B",to:"/docs#\u5FEB\u901F\u4E0A\u624B"}]},{title:"\u7EC4\u4EF6Props",children:[{title:"designForm",to:"/docs/designForm"},{title:"tableList",to:"/docs/tableList"}]},{title:"\u8868\u5355\u793A\u4F8B",children:[{title:"designForm",to:"/docs/designFormDemo"},{title:"tableList",to:"/docs/tableListDemo"}]},{title:"\u4F7F\u7528\u624B\u518C",children:[{title:"\u9875\u9762\u4ECB\u7ECD",to:"/docs/useInfo"},{title:"\u6570\u636E\u7ED1\u5B9A",to:"/docs/useBind"},{title:"\u8868\u5355\u6821\u9A8C",to:"/docs/useVerify"}]}]});return _({},L(t))}},N={class:"layout-docs"},T={class:"sidebar"},A=["href"],E={class:"main-content"};function I(o,t,e,O,P,R){const h=m("router-link"),k=m("router-view");return s(),n("div",N,[r("div",T,[r("ul",null,[(s(!0),n(p,null,f(o.menu,l=>(s(),n("li",{key:l.title},[r("span",null,c(l.title),1),r("ul",null,[(s(!0),n(p,null,f(l.children,(i,b)=>(s(),n("li",{key:b},[i.to.indexOf("#")===-1?(s(),y(h,{key:0,to:i.to},{default:a(()=>[w(c(i.title),1)]),_:2},1032,["to"])):(s(),n("a",{key:1,href:i.to},c(i.title),9,A))]))),128))])]))),128))])]),r("div",E,[v(k,null,{default:a(({Component:l})=>[v(D,{name:"left-fade",mode:"out-in"},{default:a(()=>[(s(),y(V(l)))]),_:2},1024)]),_:1})])])}var z=$(C,[["render",I]]);export{z as default};
