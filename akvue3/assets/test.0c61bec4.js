import{r as e,a,o as l,c as u,b as o,t,w as d,f as n}from"./vendor.1eabd6cc.js";const s={setup(){const a=e(!0),l=e(!1);return setTimeout((()=>{l.value=!0}),2e3),{value1:a,value2:l}}},r=n("选项1");s.render=function(e,n,s,v,m,c){const p=a("ak-radio");return l(),u("div",null,[o("p",null,"当前值："+t(v.value1),1),o(p,{modelValue:v.value1,"onUpdate:modelValue":n[1]||(n[1]=e=>v.value1=e),label:"选项1"},null,8,["modelValue"]),o(p,{modelValue:v.value2,"onUpdate:modelValue":n[2]||(n[2]=e=>v.value2=e)},{default:d((()=>[r])),_:1},8,["modelValue"])])};export default s;