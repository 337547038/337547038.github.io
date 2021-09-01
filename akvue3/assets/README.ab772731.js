var a=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(s,t,e)=>t in s?a(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;import{a as c,o as d,g as p,d as o,r as h,C as i,E as u,c as v,b as j,e as g,q as b,t as m,R as f}from"./vendor.d66ac961.js";const _={setup:()=>({data:[{title:"首页",href:"/"},{title:"组件演示1",href:"/"},{title:"组件演示2",href:"/breadcrumb"},{title:"面包屑"}]})};_.render=function(a,s,t,e,n,r){const l=c("ak-breadcrumb");return d(),p(l,{data:e.data,separator:">"},null,8,["data"])};const y=o({components:{vdpv_0:_},setup(a){const c=h(),d=[c],p=i({vdpv_0Height:0});return o=((a,s)=>{for(var t in s||(s={}))n.call(s,t)&&l(a,t,s[t]);if(e)for(var t of e(s))r.call(s,t)&&l(a,t,s[t]);return a})({toggleCode:a=>{const s="vdpv_"+a;0===p[s+"Height"]?p[s+"Height"]=(d[a].value?d[a].value.offsetHeight:0)||0:p[s+"Height"]=0}},u(p)),s(o,t({vdpv_0Ref:c}));var o}});y.$vd={matter:{},toc:[{content:"Breadcrumb 面包屑",anchor:"breadcrumb-面包屑",level:1},{content:"用法",anchor:"用法",level:3},{content:"API",anchor:"api",level:2},{content:"BackTop",anchor:"backtop",level:3},{content:"data",anchor:"data",level:3}]};const k=y,w={class:"vuedoc  "},O=f('<h1 id="breadcrumb-面包屑" data-source-line="3"><a class="markdownIt-Anchor" href="#breadcrumb-面包屑">#</a> Breadcrumb 面包屑</h1><h3 id="用法" data-source-line="5"><a class="markdownIt-Anchor" href="#用法">#</a> 用法</h3><pre style="display:none;"></pre>',3),A={class:"vuedoc-demo "},I={class:"vuedoc-demo__inner"},H={class:"vuedoc-demo__preview"},P={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},q=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-breadcrumb</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">separator</span>=<span class="hljs-string">&quot;&gt;&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> data = [\n      {<span class="hljs-attr">title</span>: <span class="hljs-string">&#39;首页&#39;</span>, <span class="hljs-attr">href</span>: <span class="hljs-string">&#39;/&#39;</span>},\n      {<span class="hljs-attr">title</span>: <span class="hljs-string">&#39;组件演示1&#39;</span>, <span class="hljs-attr">href</span>: <span class="hljs-string">&#39;/&#39;</span>},\n      {<span class="hljs-attr">title</span>: <span class="hljs-string">&#39;组件演示2&#39;</span>, <span class="hljs-attr">href</span>: <span class="hljs-string">&#39;/breadcrumb&#39;</span>},\n      {<span class="hljs-attr">title</span>: <span class="hljs-string">&#39;面包屑&#39;</span>}\n    ]\n    <span class="hljs-keyword">return</span> {\n      data\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],x=f('<h2 id="api" data-source-line="28"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="backtop" data-source-line="30"><a class="markdownIt-Anchor" href="#backtop">#</a> BackTop</h3><table data-source-line="32"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>Array</td><td>数据</td></tr><tr><td>separator</td><td>String</td><td>分隔字符</td></tr></tbody></table><h3 id="data" data-source-line="37"><a class="markdownIt-Anchor" href="#data">#</a> data</h3><table data-source-line="39"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>显示的名称</td></tr><tr><td>href</td><td>String</td><td>链接地址</td></tr></tbody></table>',5);k.render=function(a,s,t,e,n,r){const l=c("vdpv_0");return d(),v("div",w,[O,j("div",A,[j("div",I,[j("div",H,[g(l)]),j("div",{style:b({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[j("div",P,q,512)],4),j("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=s=>a.toggleCode(0))},m(a.vdpv_0Height>0?"hidden":"show"),1)])]),x])};export{k as default};
