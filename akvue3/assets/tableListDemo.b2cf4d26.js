var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,e=(a,n,t)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,o=(s,a)=>{for(var n in a||(a={}))l.call(a,n)&&e(s,n,a[n]);if(t)for(var n of t(a))p.call(a,n)&&e(s,n,a[n]);return s},c=(s,t)=>a(s,n(t));import{M as r,Y as u,K as h,j as i,t as j,r as q,o as g,v as d,a as m,w as b,s as v,_ as k,h as _,I as y,u as w,$ as f}from"./vendor.489310ea.js";const x={name:"list",props:{},components:{},setup(){r(),u();const s=h(),a=i({tableData:{config:{},columns:[{label:"勾选",prop:"__selection",type:"selection"},{label:"序号",prop:"__index",type:"index"},{prop:"name",label:"用户名"},{prop:"tel",label:"手机号"},{prop:"sex",label:"性别"},{label:"操作",prop:"__control"}]},searchData:{},requestUrl:"",tableList:[{name:"张二",tel:"13800138000",sex:"男"},{name:"李五",tel:"13800138000",sex:"女"}]});return c(o({},j(a)),{onSubmit:()=>{s.value.searchClick()},tableListEl:s,btnClick:(s,a)=>{}})}},C={class:"form-list-page"},L=v("查看"),D=v("编辑"),R=v("删除");x.render=function(s,a,n,t,l,p){const e=q("el-button"),o=q("ak-table-list");return g(),d("div",C,[m(o,{ref:"tableListEl",searchData:s.searchData,tableData:s.tableData,tableList:s.tableList,requestUrl:s.requestUrl},{__control:b((s=>[m(e,{type:"text",onClick:a=>t.btnClick(s.row.id,"show")},{default:b((()=>[L])),_:2},1032,["onClick"]),m(e,{type:"text",onClick:a=>t.btnClick(s.row.id,"edit")},{default:b((()=>[D])),_:2},1032,["onClick"]),m(e,{type:"text",onClick:a=>t.btnClick(s.row.id,"del")},{default:b((()=>[R])),_:2},1032,["onClick"])])),_:1},8,["searchData","tableData","tableList","requestUrl"])])};const E={name:"list",props:{},components:{},setup(){r(),u();const s=h(),a=i({tableData:{config:{},columns:[{label:"勾选",prop:"__selection",type:"selection"},{label:"序号",prop:"__index",type:"index"},{prop:"name",label:"用户名"},{prop:"tel",label:"手机号"},{prop:"sex",label:"性别"},{label:"操作",prop:"__control"}]},searchData:{list:[{name:"name",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"用户名",showLabel:!1},rules:[],customRules:[]},{name:"tel",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"手机号",showLabel:!1},rules:[],customRules:[]}],config:{labelWidth:"",class:"",size:"medium",name:"form1636711196545",rulesComm:[]}},requestUrl:"",tableList:[{name:"张二",tel:"13800138000",sex:"男"},{name:"李五",tel:"13800138000",sex:"女"}]});return c(o({},j(a)),{onSubmit:()=>{s.value.searchClick()},tableListEl:s,btnClick:(s,a)=>{}})}},U={class:"form-list-page"},H=v("查看"),O=v("编辑"),S=v("删除");E.render=function(s,a,n,t,l,p){const e=q("el-button"),o=q("ak-table-list");return g(),d("div",U,[m(o,{ref:"tableListEl",searchData:s.searchData,tableData:s.tableData,tableList:s.tableList,requestUrl:s.requestUrl},{__control:b((s=>[m(e,{type:"text",onClick:a=>t.btnClick(s.row.id,"show")},{default:b((()=>[H])),_:2},1032,["onClick"]),m(e,{type:"text",onClick:a=>t.btnClick(s.row.id,"edit")},{default:b((()=>[O])),_:2},1032,["onClick"]),m(e,{type:"text",onClick:a=>t.btnClick(s.row.id,"del")},{default:b((()=>[S])),_:2},1032,["onClick"])])),_:1},8,["searchData","tableData","tableList","requestUrl"])])};const I=k({components:{vdpv_0:x,vdpv_1:E},setup(s){const a=h(),n=h(),t=[a,n],l=i({vdpv_0Height:0,vdpv_1Height:0});return c(o({toggleCode:s=>{const a="vdpv_"+s;0===l[a+"Height"]?l[a+"Height"]=(t[s].value?t[s].value.offsetHeight:0)||0:l[a+"Height"]=0}},j(l)),{vdpv_0Ref:a,vdpv_1Ref:n})}});I.$vd={matter:{},toc:[{content:"tableList demo",anchor:"tablelist-demo",level:1},{content:"基础用法",anchor:"基础用法",level:1},{content:"筛选表单",anchor:"筛选表单",level:2}]};const P=I,V={class:"vuedoc"},A=f('<h1 id="tablelist-demo" data-source-line="1"><a class="markdownIt-Anchor" href="#tablelist-demo">#</a> tableList demo</h1><h1 id="基础用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h1><pre style="display:none;"></pre>',3),z={class:"vuedoc-demo"},W={class:"vuedoc-demo__inner"},$={class:"vuedoc-demo__preview"},K={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},M=[f('<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-list-page&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table-list</span>\n      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableListEl&quot;</span>\n      <span class="hljs-attr">:searchData</span>=<span class="hljs-string">&quot;searchData&quot;</span>\n      <span class="hljs-attr">:tableData</span>=<span class="hljs-string">&quot;tableData&quot;</span>\n      <span class="hljs-attr">:tableList</span>=<span class="hljs-string">&quot;tableList&quot;</span>\n      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">__control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;show&#39;)&quot;</span>&gt;</span>查看<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;edit&#39;)&quot;</span>&gt;</span>编辑<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;del&#39;)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table-list</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {useRoute, useRouter} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>\n<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;list&quot;</span>,\n  <span class="hljs-attr">props</span>: {},\n  <span class="hljs-attr">components</span>: {},\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> route = useRoute()\n    <span class="hljs-keyword">const</span> router = useRouter()\n    <span class="hljs-keyword">const</span> tableListEl = ref()\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">tableData</span>: {\n        <span class="hljs-string">&quot;config&quot;</span>: {},\n        <span class="hljs-string">&quot;columns&quot;</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;勾选&quot;</span>, <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__selection&quot;</span>, <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;selection&quot;</span>}, {\n          <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;序号&quot;</span>,\n          <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__index&quot;</span>,\n          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;index&quot;</span>\n        }, {<span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;name&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;用户名&quot;</span>}, {<span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;tel&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;手机号&quot;</span>}, {\n          <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;sex&quot;</span>,\n          <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;性别&quot;</span>\n        }, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;操作&quot;</span>, <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__control&quot;</span>}]\n      },\n      <span class="hljs-attr">searchData</span>: {}, <span class="hljs-comment">// 筛选表单</span>\n      <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 数据列表接口</span>\n      <span class="hljs-attr">tableList</span>: [\n        {\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;张二&#39;</span>,\n          <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13800138000&#39;</span>,\n          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;男&#39;</span>\n        },\n        {\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;李五&#39;</span>,\n          <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13800138000&#39;</span>,\n          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;女&#39;</span>\n        }\n      ]\n    })\n    <span class="hljs-keyword">const</span> onSubmit = <span class="hljs-function">() =&gt;</span> {\n      tableListEl.value.searchClick()\n    }\n    <span class="hljs-keyword">const</span> btnClick = <span class="hljs-function">(<span class="hljs-params">id, type</span>) =&gt;</span> {\n      <span class="hljs-keyword">switch</span> (type) {\n        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;show&#39;</span>:\n          <span class="hljs-keyword">break</span>\n        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;edit&#39;</span>:\n          <span class="hljs-keyword">break</span>\n        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;del&#39;</span>:\n          <span class="hljs-comment">// tableListEl.value.getListData() // 调用组件内部方法重新拉数据</span>\n          <span class="hljs-keyword">break</span>\n      }\n    }\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      onSubmit,\n      tableListEl,\n      btnClick\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],Y=_("h2",{id:"筛选表单","data-source-line":"88"},[_("a",{class:"markdownIt-Anchor",href:"#筛选表单"},"#"),v(" 筛选表单")],-1),B=_("p",{"data-source-line":"89"},[v("使用"),_("code",null,"searchData"),v("添加列表筛选条件")],-1),F=_("pre",{style:{display:"none"}},null,-1),G={class:"vuedoc-demo"},J={class:"vuedoc-demo__inner"},N={class:"vuedoc-demo__preview"},Q={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},T=[f('<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-list-page&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table-list</span>\n      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableListEl&quot;</span>\n      <span class="hljs-attr">:searchData</span>=<span class="hljs-string">&quot;searchData&quot;</span>\n      <span class="hljs-attr">:tableData</span>=<span class="hljs-string">&quot;tableData&quot;</span>\n      <span class="hljs-attr">:tableList</span>=<span class="hljs-string">&quot;tableList&quot;</span>\n      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">__control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;show&#39;)&quot;</span>&gt;</span>查看<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;edit&#39;)&quot;</span>&gt;</span>编辑<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;del&#39;)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table-list</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {useRoute, useRouter} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>\n<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;list&quot;</span>,\n  <span class="hljs-attr">props</span>: {},\n  <span class="hljs-attr">components</span>: {},\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> route = useRoute()\n    <span class="hljs-keyword">const</span> router = useRouter()\n    <span class="hljs-keyword">const</span> tableListEl = ref()\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">tableData</span>: {\n        <span class="hljs-string">&quot;config&quot;</span>: {},\n        <span class="hljs-string">&quot;columns&quot;</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;勾选&quot;</span>, <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__selection&quot;</span>, <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;selection&quot;</span>}, {\n          <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;序号&quot;</span>,\n          <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__index&quot;</span>,\n          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;index&quot;</span>\n        }, {<span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;name&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;用户名&quot;</span>}, {<span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;tel&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;手机号&quot;</span>}, {\n          <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;sex&quot;</span>,\n          <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;性别&quot;</span>\n        }, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;操作&quot;</span>, <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__control&quot;</span>}]\n      },\n      <span class="hljs-attr">searchData</span>: {\n        <span class="hljs-string">&quot;list&quot;</span>: [\n          {\n            <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;name&quot;</span>,\n            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,\n            <span class="hljs-string">&quot;control&quot;</span>: {\n              <span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>\n            },\n            <span class="hljs-string">&quot;slot&quot;</span>: {},\n            <span class="hljs-string">&quot;config&quot;</span>: {},\n            <span class="hljs-string">&quot;item&quot;</span>: {\n              <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;用户名&quot;</span>,\n              <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>\n            },\n            <span class="hljs-string">&quot;rules&quot;</span>: [],\n            <span class="hljs-string">&quot;customRules&quot;</span>: []\n          },\n          {\n            <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;tel&quot;</span>,\n            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,\n            <span class="hljs-string">&quot;control&quot;</span>: {\n              <span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>\n            },\n            <span class="hljs-string">&quot;slot&quot;</span>: {},\n            <span class="hljs-string">&quot;config&quot;</span>: {},\n            <span class="hljs-string">&quot;item&quot;</span>: {\n              <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;手机号&quot;</span>,\n              <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>\n            },\n            <span class="hljs-string">&quot;rules&quot;</span>: [],\n            <span class="hljs-string">&quot;customRules&quot;</span>: []\n          }\n        ],\n        <span class="hljs-string">&quot;config&quot;</span>: {\n          <span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,\n          <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,\n          <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;medium&quot;</span>,\n          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1636711196545&quot;</span>,\n          <span class="hljs-string">&quot;rulesComm&quot;</span>: []\n        }\n      }, <span class="hljs-comment">// 筛选表单</span>\n      <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 数据列表接口</span>\n      <span class="hljs-attr">tableList</span>: [\n        {\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;张二&#39;</span>,\n          <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13800138000&#39;</span>,\n          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;男&#39;</span>\n        },\n        {\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;李五&#39;</span>,\n          <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13800138000&#39;</span>,\n          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;女&#39;</span>\n        }\n      ]\n    })\n    <span class="hljs-keyword">const</span> onSubmit = <span class="hljs-function">() =&gt;</span> {\n      tableListEl.value.searchClick()\n    }\n    <span class="hljs-keyword">const</span> btnClick = <span class="hljs-function">(<span class="hljs-params">id, type</span>) =&gt;</span> {\n      <span class="hljs-keyword">switch</span> (type) {\n        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;show&#39;</span>:\n          <span class="hljs-keyword">break</span>\n        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;edit&#39;</span>:\n          <span class="hljs-keyword">break</span>\n        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;del&#39;</span>:\n          <span class="hljs-comment">// tableListEl.value.getListData() // 调用组件内部方法重新拉数据</span>\n          <span class="hljs-keyword">break</span>\n      }\n    }\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      onSubmit,\n      tableListEl,\n      btnClick\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)];P.render=function(s,a,n,t,l,p){const e=q("vdpv_0"),o=q("vdpv_1");return g(),d("div",V,[A,_("div",z,[_("div",W,[_("div",$,[m(e)]),_("div",{style:y({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[_("div",K,M,512)],4),_("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},w(s.vdpv_0Height>0?"hidden":"show"),1)])]),Y,B,F,_("div",G,[_("div",J,[_("div",N,[m(o)]),_("div",{style:y({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[_("div",Q,T,512)],4),_("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},w(s.vdpv_1Height>0?"hidden":"show"),1)])])])};export{P as default};
