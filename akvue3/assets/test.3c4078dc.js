import{r as l,a as e,o as a,c as u,b as d,f as o,t as n}from"./vendor.19f0dac7.js";const r={setup:()=>({value1:l("2021-06-01"),value2:l("2021-06-01"),value3:l("2021-06-01")})},t=d("br",null,null,-1),m=d("br",null,null,-1),v=d("br",null,null,-1);r.render=function(l,r,p,s,f,c){const V=e("ak-date-picker");return a(),u("div",null,[d("p",null,[o(" 月日小于10时，前面不加0。选择的值："+n(s.value1),1),t,d(V,{modelValue:s.value1,"onUpdate:modelValue":r[1]||(r[1]=l=>s.value1=l),placeholder:"请选择时间",format:"y-M-d"},null,8,["modelValue"])]),d("p",null,[o(" 显示年月日格式。选择的值："+n(s.value2),1),m,d(V,{modelValue:s.value2,"onUpdate:modelValue":r[2]||(r[2]=l=>s.value2=l),placeholder:"请选择时间",format:"y年MM月dd日 星期w","value-format":"y-MM-dd"},null,8,["modelValue"])]),d("p",null,[o(" 显示时间戳。选择的值："+n(s.value3),1),v,d(V,{modelValue:s.value3,"onUpdate:modelValue":r[3]||(r[3]=l=>s.value3=l),placeholder:"请选择时间",format:"timestamp","value-format":"y-MM-dd"},null,8,["modelValue"])])])};export default r;
