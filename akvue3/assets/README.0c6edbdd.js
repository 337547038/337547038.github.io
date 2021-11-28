var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,e=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{a as r,o as c,c as o,b as d,w as h,f as j,d as g,r as u,y as i,A as v,t as m,M as q}from"./vendor.19f0dac7.js";const _={data:()=>({value1:0})};_.render=function(s,a,n,l,t,p){const e=r("ak-progress");return c(),o("div",null,[d("p",null,[d(e,{modelValue:t.value1,"onUpdate:modelValue":a[1]||(a[1]=s=>t.value1=s)},null,8,["modelValue"])]),d("p",null,[d(e,{modelValue:30})]),d("p",null,[d(e,{modelValue:100})])])};const f={},y=d("p",null,"设置宽高",-1),b=d("p",null,"设置背景和进度颜色",-1),k=d("p",null,"进度文字固定位置",-1);f.render=function(s,a,n,l,t,p){const e=r("ak-progress");return c(),o("div",null,[y,d("p",null,[d(e,{modelValue:50,radius:300,border:10})]),b,d("p",null,[d(e,{modelValue:30,color:"#ddd",borderColor:"#f60"})]),k,d("p",null,[d(e,{modelValue:80,followText:!1})])])};const w={data:()=>({})},V=j("自定义显示内容");w.render=function(s,a,n,l,t,p){const e=r("ak-progress");return c(),o("div",null,[d(e,{modelValue:0,radius:50,border:8,type:"circle"}),d(e,{modelValue:30,radius:50,border:8,type:"circle"}),d(e,{modelValue:50,radius:50,border:8,type:"circle"}),d(e,{modelValue:80,radius:50,border:8,color:"#ddd",borderColor:"#f60",type:"circle"}),d(e,{modelValue:100,radius:50,border:8,type:"circle"}),d(e,{modelValue:80,radius:50,border:8,type:"circle",showText:!1},{default:h((()=>[V])),_:1})])};const x=g({components:{vdpv_0:_,vdpv_1:f,vdpv_2:w},setup(s){const r=u(),c=u(),o=u(),d=[r,c,o],h=i({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return j=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&e(s,n,a[n]);if(l)for(var n of l(a))p.call(a,n)&&e(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===h[a+"Height"]?h[a+"Height"]=(d[s].value?d[s].value.offsetHeight:0)||0:h[a+"Height"]=0}},v(h)),a(j,n({vdpv_0Ref:r,vdpv_1Ref:c,vdpv_2Ref:o}));var j}});x.$vd={matter:{},toc:[{content:"Progress 进度条",anchor:"progress-进度条",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"其他用法",anchor:"其他用法",level:3},{content:"环形进度条",anchor:"环形进度条",level:3},{content:"API",anchor:"api",level:2},{content:"Progress",anchor:"progress",level:3}]};const H=x,C={class:"vuedoc  "},P=q('<h1 id="progress-进度条" data-source-line="3"><a class="markdownIt-Anchor" href="#progress-进度条">#</a> Progress 进度条</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),A={class:"vuedoc-demo "},I={class:"vuedoc-demo__inner"},O={class:"vuedoc-demo__preview"},R={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},T=q('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;30&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;100&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value1</span>: <span class="hljs-number">0</span>,\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),N=d("h3",{id:"其他用法","data-source-line":"33"},[d("a",{class:"markdownIt-Anchor",href:"#其他用法"},"#"),j(" 其他用法")],-1),S=d("pre",{style:{display:"none"}},null,-1),B={class:"vuedoc-demo "},D={class:"vuedoc-demo__inner"},E={class:"vuedoc-demo__preview"},M={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},U=q('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>设置宽高<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>设置背景和进度颜色<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ddd&quot;</span> <span class="hljs-attr">borderColor</span>=<span class="hljs-string">&quot;#f60&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>进度文字固定位置<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;80&quot;</span> <span class="hljs-attr">:followText</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),$=d("h3",{id:"环形进度条","data-source-line":"59"},[d("a",{class:"markdownIt-Anchor",href:"#环形进度条"},"#"),j(" 环形进度条")],-1),z=d("pre",{style:{display:"none"}},null,-1),F={class:"vuedoc-demo "},G={class:"vuedoc-demo__inner"},J={class:"vuedoc-demo__preview"},K={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},L=q('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-progress</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-progress</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-progress</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;80&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ddd&quot;</span> <span class="hljs-attr">borderColor</span>=<span class="hljs-string">&quot;#f60&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-progress</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-progress</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-progress</span> <span class="hljs-attr">:modelValue</span>=<span class="hljs-string">&quot;80&quot;</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">:showText</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>自定义显示内容<span class="hljs-tag">&lt;/<span class="hljs-name">ak-progress</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {}\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),Q=q('<h2 id="api" data-source-line="89"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="progress" data-source-line="91"><a class="markdownIt-Anchor" href="#progress">#</a> Progress</h3><table data-source-line="93"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>Number</td><td>进度值</td></tr><tr><td>type</td><td>String</td><td>进度条类型，支持两种line直线、circle圆环</td></tr><tr><td>radius</td><td>Number</td><td>圆环半径，单位px。line时为宽</td></tr><tr><td>border</td><td>Number</td><td>进度条宽，单位px。line时为高</td></tr><tr><td>color</td><td>String</td><td>背景颜色</td></tr><tr><td>borderColor</td><td>String</td><td>进度颜色</td></tr><tr><td>duration</td><td>Number/1000</td><td>持续时间，单位毫秒</td></tr><tr><td>showText</td><td>Boolean/true</td><td>显示进度文字</td></tr><tr><td>followText</td><td>Boolean/true</td><td>进度文字跟随进度的位置,type=line时有效</td></tr><tr><td>className</td><td>String</td><td>样式类名</td></tr></tbody></table>',3);H.render=function(s,a,n,l,t,p){const e=r("vdpv_0"),h=r("vdpv_1"),j=r("vdpv_2");return c(),o("div",C,[P,d("div",A,[d("div",I,[d("div",O,[d(e)]),d("div",{style:{height:s.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[d("div",R,[T],512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(0))},m(s.vdpv_0Height>0?"hidden":"show"),1)])]),N,S,d("div",B,[d("div",D,[d("div",E,[d(h)]),d("div",{style:{height:s.vdpv_1Height+"px"},class:"vuedoc-demo__source"},[d("div",M,[U],512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(1))},m(s.vdpv_1Height>0?"hidden":"show"),1)])]),$,z,d("div",F,[d("div",G,[d("div",J,[d(j)]),d("div",{style:{height:s.vdpv_2Height+"px"},class:"vuedoc-demo__source"},[d("div",K,[L],512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(2))},m(s.vdpv_2Height>0?"hidden":"show"),1)])]),Q])};export default H;
