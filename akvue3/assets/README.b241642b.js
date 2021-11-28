var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(a,n,t)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{r as c,a as o,o as r,c as d,b as h,t as i,d as g,y as u,A as j,M as v,f as m}from"./vendor.19f0dac7.js";const _={setup:()=>({page1:c(1)})};_.render=function(s,a,n,t,e,l){const p=o("ak-pagination");return r(),d("div",null,[h(p,{total:50,current:t.page1},null,8,["current"])])};const f={setup:()=>({page1:c(1),pageSizes:c([10,20,30,50]),changePageSizes:s=>{alert(s)}})};f.render=function(s,a,n,t,e,l){const p=o("ak-pagination");return r(),d(p,{total:1050,current:t.page1,showJumper:!0,pageSizes:t.pageSizes,pageSize:10,showTotal:!0,onChangePageSizes:t.changePageSizes},null,8,["current","pageSizes","onChangePageSizes"])};const w={setup:()=>({page:c(1),change:s=>{alert(s)}})};w.render=function(s,a,n,t,e,l){const p=o("ak-pagination");return r(),d("div",null,[h("p",null,"当前页："+i(t.page),1),h(p,{total:50,current:t.page,"onUpdate:current":a[1]||(a[1]=s=>t.page=s),onChange:t.change,pageSize:10},null,8,["current","onChange"])])};const y=g({components:{vdpv_0:_,vdpv_1:f,vdpv_2:w},setup(s){const o=c(),r=c(),d=c(),h=[o,r,d],i=u({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return g=((s,a)=>{for(var n in a||(a={}))e.call(a,n)&&p(s,n,a[n]);if(t)for(var n of t(a))l.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===i[a+"Height"]?i[a+"Height"]=(h[s].value?h[s].value.offsetHeight:0)||0:i[a+"Height"]=0}},j(i)),a(g,n({vdpv_0Ref:o,vdpv_1Ref:r,vdpv_2Ref:d}));var g}});y.$vd={matter:{},toc:[{content:"Pagination 分页",anchor:"pagination-分页",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"其他选项参数",anchor:"其他选项参数",level:3},{content:"事件",anchor:"事件",level:3},{content:"API",anchor:"api",level:2},{content:"Pagination",anchor:"pagination",level:3},{content:"Pagination Methods",anchor:"pagination-methods",level:3}]};const k=y,b={class:"vuedoc  "},q=v('<h1 id="pagination-分页" data-source-line="3"><a class="markdownIt-Anchor" href="#pagination-分页">#</a> Pagination 分页</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),S={class:"vuedoc-demo "},z={class:"vuedoc-demo__inner"},P={class:"vuedoc-demo__preview"},x={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},H=v('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-pagination</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;page1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> page1 = ref(<span class="hljs-number">1</span>)\n    <span class="hljs-keyword">return</span> {\n      page1\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),C=h("h3",{id:"其他选项参数","data-source-line":"28"},[h("a",{class:"markdownIt-Anchor",href:"#其他选项参数"},"#"),m(" 其他选项参数")],-1),A=h("pre",{style:{display:"none"}},null,-1),I={class:"vuedoc-demo "},O={class:"vuedoc-demo__inner"},R={class:"vuedoc-demo__preview"},J={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},M=v('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-pagination</span>\n    <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;1050&quot;</span>\n    <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;page1&quot;</span>\n    <span class="hljs-attr">:showJumper</span>=<span class="hljs-string">&quot;true&quot;</span>\n    <span class="hljs-attr">:pageSizes</span>=<span class="hljs-string">&quot;pageSizes&quot;</span>\n    <span class="hljs-attr">:pageSize</span>=<span class="hljs-string">&quot;10&quot;</span>\n    <span class="hljs-attr">:showTotal</span>=<span class="hljs-string">&quot;true&quot;</span>\n    @<span class="hljs-attr">changePageSizes</span>=<span class="hljs-string">&quot;changePageSizes&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> page1 = ref(<span class="hljs-number">1</span>)\n    <span class="hljs-keyword">const</span> pageSizes = ref([<span class="hljs-number">10</span>,<span class="hljs-number">20</span>,<span class="hljs-number">30</span>,<span class="hljs-number">50</span>])\n    <span class="hljs-keyword">const</span> changePageSizes = <span class="hljs-function">(<span class="hljs-params">page</span>) =&gt;</span> {\n      alert(page)\n    }\n    <span class="hljs-keyword">return</span> {\n      page1,\n      pageSizes,\n      changePageSizes\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),T=h("h3",{id:"事件","data-source-line":"62"},[h("a",{class:"markdownIt-Anchor",href:"#事件"},"#"),m(" 事件")],-1),D=h("pre",{style:{display:"none"}},null,-1),E={class:"vuedoc-demo "},U={class:"vuedoc-demo__inner"},$={class:"vuedoc-demo__preview"},B={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},F=v('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前页：{{page}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-pagination</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">v-model:current</span>=<span class="hljs-string">&quot;page&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">:pageSize</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> page=ref(<span class="hljs-number">1</span>)\n    <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">page</span>) =&gt;</span> {\n      alert(page)\n    }\n    <span class="hljs-keyword">return</span> {\n      page,\n      change\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),G=v('<h2 id="api" data-source-line="90"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="pagination" data-source-line="92"><a class="markdownIt-Anchor" href="#pagination">#</a> Pagination</h3><table data-source-line="94"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>current</td><td>number</td><td>当前页数，支持v-model</td></tr><tr><td>total</td><td>number</td><td>总条目数</td></tr><tr><td>pageSize</td><td>number</td><td>每页显示条数</td></tr><tr><td>pagerCount</td><td>number/5</td><td>页码按钮的数量，当总页数超过该值时会折叠</td></tr><tr><td>showJumper</td><td>boolean/false</td><td>快速跳转</td></tr><tr><td>pageSizes</td><td>number[]</td><td>每页显示个数选择器的选项设置</td></tr><tr><td>showTotal</td><td>boolean/false</td><td>显示总记录条数</td></tr><tr><td>hideSinglePage</td><td>boolean/false</td><td>当小于或只有一页时是否隐藏显示</td></tr><tr><td>format</td><td>boolean/false</td><td>数值转千分制显示</td></tr></tbody></table><h3 id="pagination-methods" data-source-line="106"><a class="markdownIt-Anchor" href="#pagination-methods">#</a> Pagination Methods</h3><table data-source-line="108"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>changePageSizes</td><td>每页显示条数改变事件</td></tr><tr><td>change</td><td>页码点击改变事件</td></tr></tbody></table>',5);k.render=function(s,a,n,t,e,l){const p=o("vdpv_0"),c=o("vdpv_1"),g=o("vdpv_2");return r(),d("div",b,[q,h("div",S,[h("div",z,[h("div",P,[h(p)]),h("div",{style:{height:s.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[h("div",x,[H],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(0))},i(s.vdpv_0Height>0?"hidden":"show"),1)])]),C,A,h("div",I,[h("div",O,[h("div",R,[h(c)]),h("div",{style:{height:s.vdpv_1Height+"px"},class:"vuedoc-demo__source"},[h("div",J,[M],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(1))},i(s.vdpv_1Height>0?"hidden":"show"),1)])]),T,D,h("div",E,[h("div",U,[h("div",$,[h(g)]),h("div",{style:{height:s.vdpv_2Height+"px"},class:"vuedoc-demo__source"},[h("div",B,[F],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(2))},i(s.vdpv_2Height>0?"hidden":"show"),1)])]),G])};export default k;
