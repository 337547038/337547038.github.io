var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;import{_ as d}from"./index.baec608b.js";import{K as c,N as i,j as m,t as l,E as f,r as p,O as u,B as y,o as b,v as g,a as v,w as O,h,s as j}from"./vendor.9002cfef.js";import{b as w,c as D,d as N,e as x}from"./index.58059b64.js";import{s as P}from"./index.2c01d712.js";const q={name:"add",props:{},components:{designForm:d},setup(e){const d=c(),p=i(),u=p.query.formName,y=p.query.id,b=p.query.formId,g=p.query.type||1,v=m({loading:!1,formData:{},type:parseInt(g)});b&&(v.loading=!0,w(b).then((e=>{200===e.data.code&&(v.formData=P(e.data.data[0].formData)),v.loading=!1})).catch((e=>{throw v.loading=!1,new Error("获取表单设计数据失败")}))),y&&D(y,u).then((e=>{if(200===e.data.code){const a=e.data.data[0];j(a,0),d.value.setValue(a)}}));const O=e=>{j(e,1),N(e,u).then((e=>{200===e.data.code?f({message:"保存成功！",type:"success"}):f.error(e.data.message)}))},h=e=>{j(e,1),x(e,u,y).then((e=>{200===e.data.code?f({message:"修改成功！",type:"success"}):f.error(e.data.message)}))},j=(e,a)=>{console.log(e),["cascader","checkbox","tableList"].forEach((r=>{0===a?e[r]&&(e[r]=JSON.parse(e[r])):1===a&&(e[r]=JSON.stringify(e[r]))}))};return q=((e,a)=>{for(var r in a||(a={}))o.call(a,r)&&n(e,r,a[r]);if(t)for(var r of t(a))s.call(a,r)&&n(e,r,a[r]);return e})({},l(v)),a(q,r({submit:()=>{const e=d.value.getValue();d.value.validate((a=>{if(!a)return console.log("error submit"),!1;y?h(e):O(e)}))},formName:d}));var q}},E={class:"add-form-demo"},k=h("h3",null,"新增/编辑/查看数据",-1),I=j("提交");q.render=function(e,a,r,t,o,s){const n=p("design-form"),d=p("el-button"),c=u("loading");return y((b(),g("div",E,[k,v(n,{formData:e.formData,ref:"formName",type:e.type},null,8,["formData","type"]),v(d,{type:"primary",onClick:t.submit},{default:O((()=>[I])),_:1},8,["onClick"])],512)),[[c,e.loading]])};export{q as default};
