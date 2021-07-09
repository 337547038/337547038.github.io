var s=Object.defineProperty,a=Object.defineProperties,e=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(a,e,n)=>e in a?s(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;import{r as c,a as r,o as d,c as o,b as h,d as i,y as v,A as u,t as j,L as g,f as m}from"./vendor.a13852a4.js";const _={setup:()=>({textarea1:c("")})};_.render=function(s,a,e,n,t,l){const p=r("ak-textarea");return d(),o("div",null,[h(p,{modelValue:n.textarea1,"onUpdate:modelValue":a[1]||(a[1]=s=>n.textarea1=s),placeholder:"placeholder"},null,8,["modelValue"])])};const f={setup:()=>({textarea1:c("不能输入")})};f.render=function(s,a,e,n,t,l){const p=r("ak-textarea");return d(),o("div",null,[h(p,{modelValue:n.textarea1,"onUpdate:modelValue":a[1]||(a[1]=s=>n.textarea1=s),placeholder:"placeholder",disabled:"disabled"},null,8,["modelValue"])])};const x={setup:()=>({textarea1:c("输入些文字回车换行试试")})};x.render=function(s,a,e,n,t,l){const p=r("ak-textarea");return d(),o(p,{modelValue:n.textarea1,"onUpdate:modelValue":a[1]||(a[1]=s=>n.textarea1=s),placeholder:"placeholder"},null,8,["modelValue"])};const y=i({components:{vdpv_0:_,vdpv_1:f,vdpv_2:x},setup(s){const r=c(),d=c(),o=c(),h=[r,d,o],i=v({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return j=((s,a)=>{for(var e in a||(a={}))t.call(a,e)&&p(s,e,a[e]);if(n)for(var e of n(a))l.call(a,e)&&p(s,e,a[e]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===i[a+"Height"]?i[a+"Height"]=(h[s].value?h[s].value.offsetHeight:0)||0:i[a+"Height"]=0}},u(i)),a(j,e({vdpv_0Ref:r,vdpv_1Ref:d,vdpv_2Ref:o}));var j}});y.$vd={matter:{},toc:[{content:"Textarea 文本框",anchor:"textarea-文本框",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"禁用",anchor:"禁用",level:3},{content:"自动高",anchor:"自动高",level:3},{content:"API",anchor:"api",level:2},{content:"Textarea",anchor:"textarea",level:3}]};const k=y,w={class:"vuedoc  "},b=g('<h1 id="textarea-文本框" data-source-line="3"><a class="markdownIt-Anchor" href="#textarea-文本框">#</a> Textarea 文本框</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),q={class:"vuedoc-demo "},H={class:"vuedoc-demo__inner"},A={class:"vuedoc-demo__preview"},I={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},O=g('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      textarea1\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),V=h("h3",{id:"禁用","data-source-line":"27"},[h("a",{class:"markdownIt-Anchor",href:"#禁用"},"#"),m(" 禁用")],-1),C=h("pre",{style:{display:"none"}},null,-1),P={class:"vuedoc-demo "},R={class:"vuedoc-demo__inner"},S={class:"vuedoc-demo__preview"},T={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},U=g('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;不能输入&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      textarea1\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),D=h("h3",{id:"自动高","data-source-line":"49"},[h("a",{class:"markdownIt-Anchor",href:"#自动高"},"#"),m(" 自动高")],-1),E=h("pre",{style:{display:"none"}},null,-1),L={class:"vuedoc-demo "},$={class:"vuedoc-demo__inner"},z={class:"vuedoc-demo__preview"},B={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},F=g('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;输入些文字回车换行试试&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      textarea1\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1),G=g('<h2 id="api" data-source-line="71"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="textarea" data-source-line="73"><a class="markdownIt-Anchor" href="#textarea">#</a> Textarea</h3><table data-source-line="75"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>绑定的值</td></tr><tr><td>autoHeight</td><td>boolean/true</td><td>自动高</td></tr><tr><td>width</td><td>String</td><td>要带单位px/%</td></tr><tr><td>height</td><td>String</td><td></td></tr></tbody></table>',3);k.render=function(s,a,e,n,t,l){const p=r("vdpv_0"),c=r("vdpv_1"),i=r("vdpv_2");return d(),o("div",w,[b,h("div",q,[h("div",H,[h("div",A,[h(p)]),h("div",{style:{height:s.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[h("div",I,[O],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(0))},j(s.vdpv_0Height>0?"hidden":"show"),1)])]),V,C,h("div",P,[h("div",R,[h("div",S,[h(c)]),h("div",{style:{height:s.vdpv_1Height+"px"},class:"vuedoc-demo__source"},[h("div",T,[U],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(1))},j(s.vdpv_1Height>0?"hidden":"show"),1)])]),D,E,h("div",L,[h("div",$,[h("div",z,[h(i)]),h("div",{style:{height:s.vdpv_2Height+"px"},class:"vuedoc-demo__source"},[h("div",B,[F],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(2))},j(s.vdpv_2Height>0?"hidden":"show"),1)])]),G])};export default k;
