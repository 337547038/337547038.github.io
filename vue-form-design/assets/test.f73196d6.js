var V=Object.defineProperty,v=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(o,e,t)=>e in o?V(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,d=(o,e)=>{for(var t in e||(e={}))w.call(e,t)&&f(o,t,e[t]);if(u)for(var t of u(e))k.call(e,t)&&f(o,t,e[t]);return o},c=(o,e)=>v(o,g(e));import{_ as y}from"./index.d8e9edb6.js";import{n as C,i as D,p as N,r as n,o as h,x as $,a as l,w as r,h as B,s as p}from"./vendor.f9fdd043.js";const x={name:"addForm",props:{},components:{},setup(o){const e=C({formData:{},previewVisible:!0});setTimeout(()=>{e.formData={list:[{name:"input1648358902208",type:"input",control:{modelValue:""},config:{disabledAdd:!1},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]},{name:"tinymce1648360480166",type:"tinymce",control:{modelValue:""},config:{},item:{label:"tinymce\u5BCC\u6587\u672C",showLabel:!1},rules:[]}],config:{labelWidth:"",class:"",size:"default",name:"form1648300327079",rulesComm:[]}}},1);const t=D(),s=()=>{t.value.validate(a=>{if(console.log(a),a)alert("submit");else return console.log("error submit"),!1})};return c(d({},N(e)),{submit:s,formName:t})}},L=p("1122"),R=p("\u63D0\u4EA4");function T(o,e,t,s,a,z){const i=n("el-button"),_=n("ak-form-design"),b=n("el-dialog");return h(),$("div",null,[l(i,{onClick:e[0]||(e[0]=m=>o.previewVisible=!0)},{default:r(()=>[L]),_:1}),l(b,{modelValue:o.previewVisible,"onUpdate:modelValue":e[1]||(e[1]=m=>o.previewVisible=m),title:"\u9884\u89C8",fullscreen:!0},{default:r(()=>[B("div",null,[l(_,{formData:o.formData,ref:"formName"},null,8,["formData"]),l(i,{type:"primary",onClick:s.submit},{default:r(()=>[R]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])])}var U=y(x,[["render",T]]);export{U as default};
