var t=Object.defineProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,o,l)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;import{j as i,t as r,r as n,o as a,v as d,h as c,F as u,x as f,a as m,w as p,u as b,c as y,s as v,T as h,b as O}from"./vendor.9002cfef.js";const g={name:"layout",props:{},components:{},setup(t){const n=i({menu:[{title:"开发指南",children:[{title:"介绍",to:"/docs"},{title:"目录结构",to:"/docs#目录结构"},{title:"快速上手",to:"/docs#快速上手"}]},{title:"组件Props",children:[{title:"designForm",to:"/docs/designForm"},{title:"tableList",to:"/docs/tableList"}]},{title:"表单示例",children:[{title:"designForm",to:"/docs/designFormDemo"},{title:"tableList",to:"/docs/tableListDemo"}]},{title:"使用手册",children:[{title:"页面介绍",to:"/docs/useInfo"},{title:"数据绑定",to:"/docs/useBind"},{title:"表单校验",to:"/docs/useVerify"}]}]});return((t,i)=>{for(var r in i||(i={}))o.call(i,r)&&s(t,r,i[r]);if(e)for(var r of e(i))l.call(i,r)&&s(t,r,i[r]);return t})({},r(n))}},j={class:"layout-docs"},k={class:"sidebar"},w=["href"],F={class:"main-content"};g.render=function(t,e,o,l,s,i){const r=n("router-link"),g=n("router-view");return a(),d("div",j,[c("div",k,[c("ul",null,[(a(!0),d(u,null,f(t.menu,(t=>(a(),d("li",{key:t.title},[c("span",null,b(t.title),1),c("ul",null,[(a(!0),d(u,null,f(t.children,((t,e)=>(a(),d("li",{key:e},[-1===t.to.indexOf("#")?(a(),y(r,{key:0,to:t.to},{default:p((()=>[v(b(t.title),1)])),_:2},1032,["to"])):(a(),d("a",{key:1,href:t.to},b(t.title),9,w))])))),128))])])))),128))])]),c("div",F,[m(g,null,{default:p((({Component:t})=>[m(h,{name:"left-fade",mode:"out-in"},{default:p((()=>[(a(),y(O(t)))])),_:2},1024)])),_:1})])])};export{g as default};
