var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;import{g as d,h as n}from"./index.4462bcd9.js";import{Y as b,h as p,t as i,E as c,r as m,N as u,v as f,B as y,a as h,w as g,u as w,o as N,F as k,x as j,c as O,q as v,s as T}from"./vendor.b251bce2.js";import"./index.00aab0cf.js";const q={name:"formIndex",props:{},setup(){const e=b(),m=p({tableData:[],loading:!1,btnGroup:[{label:"修改",type:1},{label:"搜索设置",type:2},{label:"列表设置",type:3},{label:"添加数据",type:4},{label:"查看",type:5},{label:"删除",type:6}]}),u=()=>{d("designform").then((e=>{200===e.data.code&&(m.tableData=e.data.data),m.loading=!1})).catch((e=>{m.loading=!1,console.log(e)}))};return u(),f=((e,a)=>{for(var r in a||(a={}))o.call(a,r)&&s(e,r,a[r]);if(t)for(var r of t(a))l.call(a,r)&&s(e,r,a[r]);return e})({},i(m)),a(f,r({btnClick:(a,r)=>{switch(a){case 1:e.push({path:"/design",query:{formName:r.row.dataTableName,id:r.row.id}});break;case 2:e.push({path:"/design",query:{formName:r.row.dataTableName,id:r.row.id,type:"search"}});break;case 3:e.push({path:"/designTable",query:{id:r.row.id}});break;case 4:e.push({path:"/form",query:{formName:r.row.dataTableName,formId:r.row.id}});break;case 5:e.push({path:"/list",query:{formName:r.row.dataTableName,formId:r.row.id}});break;case 6:console.log(r),console.log(r.row.dataTableName),n("designform",r.row.id).then((e=>{200===e.data.code?(c.success("删除成功"),u()):c.error("删除失败")})).catch((e=>{c.error("删除失败")}))}}}));var f}},x={class:"form-list-page"},P=w("h3",null,"设计表单列表",-1);q.render=function(e,a,r,t,o,l){const s=m("el-table-column"),d=m("el-button"),n=m("el-table"),b=u("loading");return N(),f("div",x,[P,y(h(n,{data:e.tableData,border:"",style:{width:"100%"}},{default:g((()=>[h(s,{prop:"formName",label:"表单名称"}),h(s,{prop:"dataTableName",label:"数据表名"}),h(s,{label:"操作"},{default:g((a=>[(N(!0),f(k,null,j(e.btnGroup,(e=>(N(),O(d,{size:"small",type:"text",key:e.type,onClick:r=>t.btnClick(e.type,a)},{default:g((()=>[v(T(e.label),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["data"]),[[b,e.loading]])])};export{q as default};
