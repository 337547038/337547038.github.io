import{s as t}from"./index.bdf2c4cb.js";function e(e){return t({url:"/saveDesignForm",method:"POST",data:e})}function n(e){return t({url:"/getDesignFormRow?id="+e,method:"get"})}function r(e){return t({url:"/list?name="+e,method:"get"})}function o(e,n){return t({url:"/list?name="+e,method:"get",data:n})}function a(e){return t({url:"/getFiled?formId="+e,method:"get"})}function u(e,n){return t({url:"/saveFormList?name="+n,method:"post",data:e})}function d(e,n,r){return t({url:`/editFormList?name=${n}&id=${r}`,method:"post",data:e})}function i(e,n){return t({url:`/getRowById?id=${e}&name=${n}`,method:"get"})}function s(e,n){return t({url:`/delById?id=${n}&name=${e}`,method:"get"})}export{a,n as b,i as c,u as d,d as e,o as f,r as g,s as h,e as s};
