var e=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(n,a,s)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s;import{_ as l,j as t,t as r,o as c,v as d,h as u,s as i}from"./vendor.489310ea.js";const p=l({components:{},setup(e){const l=[],c=t({});return((e,l)=>{for(var t in l||(l={}))a.call(l,t)&&o(e,t,l[t]);if(n)for(var t of n(l))s.call(l,t)&&o(e,t,l[t]);return e})({toggleCode:e=>{const n="vdpv_"+e;0===c[n+"Height"]?c[n+"Height"]=(l[e].value?l[e].value.offsetHeight:0)||0:c[n+"Height"]=0}},r(c))}});p.$vd={matter:{},toc:[{content:"介绍",anchor:"介绍",level:1},{content:"目录结构",anchor:"目录结构",level:1},{content:"快速上手",anchor:"快速上手",level:1},{content:"代码编辑支持json或javascript",anchor:"代码编辑支持json或javascript",level:1}]};const v=p,h={class:"vuedoc"},j=[u("h1",{id:"介绍","data-source-line":"1"},[u("a",{class:"markdownIt-Anchor",href:"#介绍"},"#"),i(" 介绍")],-1),u("p",{"data-source-line":"3"},"使用基于 Vue 2.0 的桌面端组件库 Elemnet-Plus ，使用广泛，扩展方便",-1),u("p",{"data-source-line":"5"},"通过可视化的操作，快速完成表单页面的创",-1),u("p",{"data-source-line":"7"},"提供功能强大的各种组件，可适用在各种复杂的场景中",-1),u("p",{"data-source-line":"9"},"丰富的API接口，方便快速的生成表单，验证和获取表单数据",-1),u("p",{"data-source-line":"11"},"利于二次开发",-1),u("p",{"data-source-line":"13"},"用于学习研究，欢迎交流，QQ/微信:337547038",-1),u("h1",{id:"目录结构","data-source-line":"15"},[u("a",{class:"markdownIt-Anchor",href:"#目录结构"},"#"),i(" 目录结构")],-1),u("pre",{style:{display:"none"}},null,-1),u("pre",{class:"hljs vuedoc__hljs language-text hljs--one-dark"},[u("code",null,"nodejs // 模拟后端提供数据接口支持\npublic\nsrc\n ├─api // 数据请求接口\n ├─docs // 使用说明文档\n └─views // 页面\n   ├─designForm // 设计主程序组件\n     ├─components // 核心组件\n     ├─designForm.vue // 表单设计主页面\n     ├─designTable.vue // 表格列表设计主页面\n     ├─form.vue // 表单数据添加编辑查看详情主页面，可通过复制form.vue的方式实现复杂的表单页\n     └─list.vue // 表格列表数据展示主页面，可通过复制list.vue的方式实现复杂的列表页\n   ├─export\n     ├─form.vue // 添加编辑表单文件，在表单设计处导出的vue文件，用作测试\n     ├─list.vue // 表单列表文件，在表单设计处导出的vue文件，用作测试\n   ├─formList // 示例演示\n   └─index  // 示例演示\n")],-1),u("h1",{id:"快速上手","data-source-line":"37"},[u("a",{class:"markdownIt-Anchor",href:"#快速上手"},"#"),i(" 快速上手")],-1),u("p",{"data-source-line":"39"},"进入项目安装依赖包",-1),u("pre",{style:{display:"none"}},null,-1),u("pre",{class:"hljs vuedoc__hljs language-text hljs--one-dark"},[u("code",null,"npm install\nnpm run dev\n")],-1),u("p",{"data-source-line":"46"},"使用nodejs模拟接口时要进入nodejs目录，需要配置好数据库",-1),u("pre",{style:{display:"none"}},null,-1),u("pre",{class:"hljs vuedoc__hljs language-text hljs--one-dark"},[u("code",null,"npm install\nnode app.js\n")],-1),u("p",{"data-source-line":"53"},[i("浏览器进入 "),u("a",{href:"http://localhost:3000"},"http://localhost:3000"),i(" 开始创建表单 "),u("img",{src:"./assets/img1.3c955a92.png",alt:""})],-1),u("h1",{id:"代码编辑支持json或javascript","data-source-line":"56"},[u("a",{class:"markdownIt-Anchor",href:"#代码编辑支持json或javascript"},"#"),i(" 代码编辑支持json或javascript")],-1),u("p",{"data-source-line":"58"},[i("代码编辑输入框可支持"),u("code",null,"json"),i("或"),u("code",null,"javascript"),i("，初始使用时可通过修改"),u("code",null,"/src/utils/index.js"),i("里的"),u("code",null,"EDITTYPE"),i("的值")],-1)];v.render=function(e,n,a,s,o,l){return c(),d("div",h,j)};export{v as default};
