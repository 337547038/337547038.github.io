var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{Z as n,h as s,t as c,o as l,v as i,u as d,q as u}from"./vendor.bb6fcdfb.js";const p=n({components:{},setup(e){const n=[],l=s({});return((e,n)=>{for(var s in n||(n={}))t.call(n,s)&&o(e,s,n[s]);if(a)for(var s of a(n))r.call(n,s)&&o(e,s,n[s]);return e})({toggleCode:e=>{const a="vdpv_"+e;0===l[a+"Height"]?l[a+"Height"]=(n[e].value?n[e].value.offsetHeight:0)||0:l[a+"Height"]=0}},c(l))}});p.$vd={matter:{},toc:[{content:"表单校验",anchor:"表单校验",level:1},{content:"快速选择",anchor:"快速选择",level:2},{content:"快速添加",anchor:"快速添加",level:2},{content:"编辑校验规则",anchor:"编辑校验规则",level:2}]};const h=p,v={class:"vuedoc"},f=[d("h1",{id:"表单校验","data-source-line":"3"},[d("a",{class:"markdownIt-Anchor",href:"#表单校验"},"#"),u(" 表单校验")],-1),d("p",{"data-source-line":"5"},"提供了三种表单检验规则填写方式",-1),d("p",{"data-source-line":"7"},"考虑到数据安全所有可编辑的规则只支持json。如需支持javascript可在导出的vue文件里进行修改。",-1),d("p",{"data-source-line":"9"},[d("img",{src:"./assets/img6.e2dce284.png",alt:""})],-1),d("h2",{id:"快速选择","data-source-line":"11"},[d("a",{class:"markdownIt-Anchor",href:"#快速选择"},"#"),u(" 快速选择")],-1),d("p",{"data-source-line":"13"},"从当前表单全局校验规则里选择添加，适用于多个表单控件使用同一个规则时。使用前需要先从添加属性里添加全局校验规则（如图）。每个对象里的key是必须且唯一的，其他所有参数同UI组件的校验规则。",-1),d("p",{"data-source-line":"15"},[d("img",{src:"./assets/img5.e1dd52be.png",alt:""})],-1),d("h2",{id:"快速添加","data-source-line":"17"},[d("a",{class:"markdownIt-Anchor",href:"#快速添加"},"#"),u(" 快速添加")],-1),d("p",{"data-source-line":"19"},"内置了常用的校验规则正则和自定义方法，自定义方法的使用可以参数示例",-1),d("h2",{id:"编辑校验规则","data-source-line":"21"},[d("a",{class:"markdownIt-Anchor",href:"#编辑校验规则"},"#"),u(" 编辑校验规则")],-1),d("p",{"data-source-line":"23"},"所有参数同UI组件的校验规则",-1),d("p",{"data-source-line":"25"},null,-1)];h.render=function(e,a,t,r,o,n){return l(),i("div",v,f)};export{h as default};
