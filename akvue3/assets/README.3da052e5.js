var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{a as c,o as r,c as d,r as h,f as o,t as i,b as j,d as g,y as v,A as u,L as b}from"./vendor.a13852a4.js";const m={setup:()=>({data:[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}]})};m.render=function(s,a,n,l,t,e){const p=c("ak-tree");return r(),d(p,{data:l.data},null,8,["data"])};const _={setup:()=>({data:[{label:"广东",open:!0,children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}]})};_.render=function(s,a,n,l,t,e){const p=c("ak-tree");return r(),d(p,{data:l.data},null,8,["data"])};const f={setup:()=>({data:[{id:"gd",label:"广东",children:[{id:"gz",label:"广州",children:[{id:"th",label:"天河区"},{id:"by",label:"白云区"},{id:"yx",label:"越秀区"},{id:"hz",label:"海珠区"}]},{id:"sz",label:"深圳"},{id:"dg",label:"东莞"},{id:"fs",label:"佛山"}]},{id:"gx",label:"广西"},{id:"bj",label:"北京"}],value:h("gd")})};f.render=function(s,a,n,l,t,e){const p=c("ak-tree");return r(),d("p",null,[o("当前选中值："+i(l.value)+" ",1),j(p,{data:l.data,modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=s=>l.value=s)},null,8,["data","modelValue"])])};const y=g({components:{vdpv_0:m,vdpv_1:_,vdpv_2:f},setup(s){const c=h(),r=h(),d=h(),o=[c,r,d],i=v({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return j=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))e.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===i[a+"Height"]?i[a+"Height"]=(o[s].value?o[s].value.offsetHeight:0)||0:i[a+"Height"]=0}},u(i)),a(j,n({vdpv_0Ref:c,vdpv_1Ref:r,vdpv_2Ref:d}));var j}});y.$vd={matter:{},toc:[{content:"Tree 树",anchor:"tree-树",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"默认展开指定项",anchor:"默认展开指定项",level:3},{content:"点击可选中值",anchor:"点击可选中值",level:3},{content:"API",anchor:"api",level:2},{content:"Tree Props",anchor:"tree-props",level:3},{content:"Tree Data",anchor:"tree-data",level:3}]};const k=y,w={class:"vuedoc  "},x=b('<h1 id="tree-树" data-source-line="3"><a class="markdownIt-Anchor" href="#tree-树">#</a> Tree 树</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),H={class:"vuedoc-demo "},A={class:"vuedoc-demo__inner"},q={class:"vuedoc-demo__preview"},I={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},C=b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>},\n        ]\n      },\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>},\n    ]\n    <span class="hljs-keyword">return</span> {\n      data\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),O=j("h3",{id:"默认展开指定项","data-source-line":"44"},[j("a",{class:"markdownIt-Anchor",href:"#默认展开指定项"},"#"),o(" 默认展开指定项")],-1),P=j("p",{"data-source-line":"46"},[o("在列表数据"),j("code",null,"data"),o("里使用"),j("code",null,'open="true"'),o("可默认展开")],-1),z=j("pre",{style:{display:"none"}},null,-1),R={class:"vuedoc-demo "},T={class:"vuedoc-demo__inner"},B={class:"vuedoc-demo__preview"},D={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},V=b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">open</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>},\n        ]\n      },\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>},\n    ]\n    <span class="hljs-keyword">return</span> {\n      data\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),E=b('<h3 id="点击可选中值" data-source-line="85"><a class="markdownIt-Anchor" href="#点击可选中值">#</a> 点击可选中值</h3><p data-source-line="87">使用<code>v-model=&quot;string/array&quot;</code>，为<code>string</code>时单选，<code>array</code>时可多选，对应数据列表<code>data</code>的<code>id</code>值</p><pre style="display:none;"></pre>',3),L={class:"vuedoc-demo "},S={class:"vuedoc-demo__inner"},U={class:"vuedoc-demo__preview"},$={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},F=b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前选中值：{{value}}\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;gd&#39;</span>)\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gd&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;th&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;by&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;yx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;hz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;sz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;dg&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;fs&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>},\n        ]\n      },\n      {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;bj&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>},\n    ]\n    <span class="hljs-keyword">return</span> {\n      data,\n      value\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),G=b('<h2 id="api" data-source-line="130"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="tree-props" data-source-line="132"><a class="markdownIt-Anchor" href="#tree-props">#</a> Tree Props</h3><table data-source-line="134"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>Array</td><td>列表数据</td></tr><tr><td>showCheckbox</td><td>Boolean/false</td><td>显示勾选</td></tr><tr><td>lazy</td><td>Boolean/false</td><td>是否异步加载</td></tr><tr><td>v-model</td><td>Array/string</td><td>选中的值，array时为多选</td></tr></tbody></table><h3 id="tree-data" data-source-line="141"><a class="markdownIt-Anchor" href="#tree-data">#</a> Tree Data</h3><table data-source-line="143"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>唯一值</td></tr><tr><td>checked</td><td>Boolean/false</td><td>当前项为勾选状态，仅当showCheckbox=true时有效</td></tr><tr><td>open</td><td>Boolean/false</td><td>是否展开当前项</td></tr></tbody></table>',5);k.render=function(s,a,n,l,t,e){const p=c("vdpv_0"),h=c("vdpv_1"),o=c("vdpv_2");return r(),d("div",w,[x,j("div",H,[j("div",A,[j("div",q,[j(p)]),j("div",{style:{height:s.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[j("div",I,[C],512)],4),j("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(0))},i(s.vdpv_0Height>0?"hidden":"show"),1)])]),O,P,z,j("div",R,[j("div",T,[j("div",B,[j(h)]),j("div",{style:{height:s.vdpv_1Height+"px"},class:"vuedoc-demo__source"},[j("div",D,[V],512)],4),j("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(1))},i(s.vdpv_1Height>0?"hidden":"show"),1)])]),E,j("div",L,[j("div",S,[j("div",U,[j(o)]),j("div",{style:{height:s.vdpv_2Height+"px"},class:"vuedoc-demo__source"},[j("div",$,[F],512)],4),j("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(2))},i(s.vdpv_2Height>0?"hidden":"show"),1)])]),G])};export default k;
