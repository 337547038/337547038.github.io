var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{r as c,a as o,o as d,c as h,b as r,e as i,F as v,g as u,w as j,i as g,t as m,d as w,D as _,G as f,q as k,U as y}from"./vendor.6ab3fc58.js";const b={setup:()=>({switch1:c(!1),switch2:c(!0)})};b.render=function(s,a,n,l,e,t){const p=o("ak-switch");return d(),h(v,null,[r("p",null,[i(p,{modelValue:l.switch1,"onUpdate:modelValue":a[0]||(a[0]=s=>l.switch1=s)},null,8,["modelValue"])]),r("p",null,[i(p,{modelValue:l.switch2,"onUpdate:modelValue":a[1]||(a[1]=s=>l.switch2=s)},null,8,["modelValue"])])],64)};const q={setup:()=>({switch3:c(!1)})},V=g("开"),C=g("关");q.render=function(s,a,n,l,e,t){const p=o("ak-switch");return d(),u(p,{modelValue:l.switch3,"onUpdate:modelValue":a[0]||(a[0]=s=>l.switch3=s)},{open:j((()=>[V])),close:j((()=>[C])),_:1},8,["modelValue"])};const x={setup:()=>({switch4:c(!1),switch5:c(!0)})};x.render=function(s,a,n,l,e,t){const p=o("ak-switch");return d(),h(v,null,[r("p",null,[i(p,{modelValue:l.switch4,"onUpdate:modelValue":a[0]||(a[0]=s=>l.switch4=s),disabled:!0},null,8,["modelValue"])]),r("p",null,[i(p,{modelValue:l.switch5,"onUpdate:modelValue":a[1]||(a[1]=s=>l.switch5=s),disabled:!0},null,8,["modelValue"])])],64)};const H={setup:()=>({switch6:c(!0)})};H.render=function(s,a,n,l,e,t){const p=o("ak-switch");return d(),h("p",null,[g(m(l.switch6)+" ",1),i(p,{modelValue:l.switch6,"onUpdate:modelValue":a[0]||(a[0]=s=>l.switch6=s),"close-color":"#999","active-color":"red"},null,8,["modelValue"])])};const S={setup:()=>({switch7:c("a")})};S.render=function(s,a,n,l,e,t){const p=o("ak-switch");return d(),h("p",null,[g(m(l.switch7)+" ",1),i(p,{modelValue:l.switch7,"onUpdate:modelValue":a[0]||(a[0]=s=>l.switch7=s),"close-value":"a","active-value":"b"},null,8,["modelValue"])])};const I={setup:()=>({switch7:c(!1),beforeChange:()=>(alert("不能切换"),!1)})};I.render=function(s,a,n,l,e,t){const p=o("ak-switch");return d(),h("p",null,[i(p,{modelValue:l.switch7,"onUpdate:modelValue":a[0]||(a[0]=s=>l.switch7=s),beforeChange:l.beforeChange},null,8,["modelValue","beforeChange"])])};const A=w({components:{vdpv_0:b,vdpv_1:q,vdpv_2:x,vdpv_3:H,vdpv_4:S,vdpv_5:I},setup(s){const o=c(),d=c(),h=c(),r=c(),i=c(),v=c(),u=[o,d,h,r,i,v],j=_({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0});return g=((s,a)=>{for(var n in a||(a={}))e.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))t.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===j[a+"Height"]?j[a+"Height"]=(u[s].value?u[s].value.offsetHeight:0)||0:j[a+"Height"]=0}},f(j)),a(g,n({vdpv_0Ref:o,vdpv_1Ref:d,vdpv_2Ref:h,vdpv_3Ref:r,vdpv_4Ref:i,vdpv_5Ref:v}));var g}});A.$vd={matter:{},toc:[{content:"Switch 开关",anchor:"switch-开关",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"自定显示文本",anchor:"自定显示文本",level:3},{content:"禁用",anchor:"禁用",level:3},{content:"设置开关状态时的颜色",anchor:"设置开关状态时的颜色",level:3},{content:"设置开关状态时的值",anchor:"设置开关状态时的值",level:3},{content:"异步控制",anchor:"异步控制",level:3},{content:"API",anchor:"api",level:2},{content:"Switch",anchor:"switch",level:3},{content:"Switch Event",anchor:"switch-event",level:3},{content:"Switch Slot",anchor:"switch-slot",level:3}]};const R=A,O={class:"vuedoc  "},U=y('<h1 id="switch-开关" data-source-line="3"><a class="markdownIt-Anchor" href="#switch-开关">#</a> Switch 开关</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),P={class:"vuedoc-demo "},E={class:"vuedoc-demo__inner"},D={class:"vuedoc-demo__preview"},F={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},G=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch1 = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> switch2 = ref(<span class="hljs-literal">true</span>)\n    <span class="hljs-keyword">return</span> {\n      switch1,\n      switch2\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],$=r("h3",{id:"自定显示文本","data-source-line":"33"},[r("a",{class:"markdownIt-Anchor",href:"#自定显示文本"},"#"),g(" 自定显示文本")],-1),z=r("pre",{style:{display:"none"}},null,-1),B={class:"vuedoc-demo "},J={class:"vuedoc-demo__inner"},K={class:"vuedoc-demo__preview"},L={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},M=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">open</span>&gt;</span>开<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">close</span>&gt;</span>关<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-switch</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch3 = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">return</span> {\n      switch3\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],N=r("h3",{id:"禁用","data-source-line":"56"},[r("a",{class:"markdownIt-Anchor",href:"#禁用"},"#"),g(" 禁用")],-1),Q=r("pre",{style:{display:"none"}},null,-1),T={class:"vuedoc-demo "},W={class:"vuedoc-demo__inner"},X={class:"vuedoc-demo__preview"},Y={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Z=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch4&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch5&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch4 = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> switch5 = ref(<span class="hljs-literal">true</span>)\n    <span class="hljs-keyword">return</span> {\n      switch4,\n      switch5\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],ss=r("h3",{id:"设置开关状态时的颜色","data-source-line":"85"},[r("a",{class:"markdownIt-Anchor",href:"#设置开关状态时的颜色"},"#"),g(" 设置开关状态时的颜色")],-1),as=r("p",{"data-source-line":"87"},[r("code",null,"closeColor"),g("设置关闭状态颜色，"),r("code",null,"activeColor"),g("设置打开状态颜色")],-1),ns=r("pre",{style:{display:"none"}},null,-1),ls={class:"vuedoc-demo "},es={class:"vuedoc-demo__inner"},ts={class:"vuedoc-demo__preview"},ps={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},cs=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{switch6}}\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch6&quot;</span> <span class="hljs-attr">close-color</span>=<span class="hljs-string">&quot;#999&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;red&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch6 = ref(<span class="hljs-literal">true</span>)\n    <span class="hljs-keyword">return</span> {\n      switch6\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],os=r("h3",{id:"设置开关状态时的值","data-source-line":"111"},[r("a",{class:"markdownIt-Anchor",href:"#设置开关状态时的值"},"#"),g(" 设置开关状态时的值")],-1),ds=r("p",{"data-source-line":"113"},[r("code",null,"closeValue"),g("设置关闭状态时的值，"),r("code",null,"activeValue"),g("设置打开状态的值，当"),r("code",null,"v-model=activeValue"),g("时选中状态")],-1),hs=r("pre",{style:{display:"none"}},null,-1),rs={class:"vuedoc-demo "},is={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},us={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},js=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{switch7}}\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch7&quot;</span> <span class="hljs-attr">close-value</span>=<span class="hljs-string">&quot;a&quot;</span> <span class="hljs-attr">active-value</span>=<span class="hljs-string">&quot;b&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch7 = ref(<span class="hljs-string">&#39;a&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      switch7\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],gs=r("h3",{id:"异步控制","data-source-line":"135"},[r("a",{class:"markdownIt-Anchor",href:"#异步控制"},"#"),g(" 异步控制")],-1),ms=r("p",{"data-source-line":"137"},[r("code",null,"beforeChange"),g("切换前事件，"),r("code",null,"return false"),g("阻止切换")],-1),ws=r("pre",{style:{display:"none"}},null,-1),_s={class:"vuedoc-demo "},fs={class:"vuedoc-demo__inner"},ks={class:"vuedoc-demo__preview"},ys={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},bs=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch7&quot;</span> <span class="hljs-attr">:beforeChange</span>=<span class="hljs-string">&quot;beforeChange&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch7 = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> beforeChange=<span class="hljs-function">()=&gt;</span>{\n      alert(<span class="hljs-string">&#39;不能切换&#39;</span>)\n      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>\n    }\n    <span class="hljs-keyword">return</span> {\n      switch7,\n      beforeChange\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],qs=y('<h2 id="api" data-source-line="164"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="switch" data-source-line="166"><a class="markdownIt-Anchor" href="#switch">#</a> Switch</h3><table data-source-line="168"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>boolean/false</td><td>指定当前是否选中</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用状态</td></tr><tr><td>closeColor</td><td>String</td><td>设置关闭时颜色值</td></tr><tr><td>activeColor</td><td>String</td><td>设置打开时颜色值</td></tr><tr><td>closeValue</td><td>String</td><td>设置关闭状态时的值</td></tr><tr><td>activeValue</td><td>String</td><td>设置打开状态时的值</td></tr><tr><td>beforeChange</td><td>Function</td><td>选项改变前事件,return false阻止选择</td></tr></tbody></table><h3 id="switch-event" data-source-line="178"><a class="markdownIt-Anchor" href="#switch-event">#</a> Switch Event</h3><table data-source-line="180"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table><h3 id="switch-slot" data-source-line="184"><a class="markdownIt-Anchor" href="#switch-slot">#</a> Switch Slot</h3><table data-source-line="186"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td>自定义显示打开时的内容</td></tr><tr><td>close</td><td>自定义显示关闭时的内容</td></tr></tbody></table>',7);R.render=function(s,a,n,l,e,t){const p=o("vdpv_0"),c=o("vdpv_1"),v=o("vdpv_2"),u=o("vdpv_3"),j=o("vdpv_4"),g=o("vdpv_5");return d(),h("div",O,[U,r("div",P,[r("div",E,[r("div",D,[i(p)]),r("div",{style:k({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[r("div",F,G,512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},m(s.vdpv_0Height>0?"hidden":"show"),1)])]),$,z,r("div",B,[r("div",J,[r("div",K,[i(c)]),r("div",{style:k({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[r("div",L,M,512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},m(s.vdpv_1Height>0?"hidden":"show"),1)])]),N,Q,r("div",T,[r("div",W,[r("div",X,[i(v)]),r("div",{style:k({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[r("div",Y,Z,512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},m(s.vdpv_2Height>0?"hidden":"show"),1)])]),ss,as,ns,r("div",ls,[r("div",es,[r("div",ts,[i(u)]),r("div",{style:k({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[r("div",ps,cs,512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},m(s.vdpv_3Height>0?"hidden":"show"),1)])]),os,ds,hs,r("div",rs,[r("div",is,[r("div",vs,[i(j)]),r("div",{style:k({height:s.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[r("div",us,js,512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(4))},m(s.vdpv_4Height>0?"hidden":"show"),1)])]),gs,ms,ws,r("div",_s,[r("div",fs,[r("div",ks,[i(g)]),r("div",{style:k({height:s.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[r("div",ys,bs,512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(5))},m(s.vdpv_5Height>0?"hidden":"show"),1)])]),qs])};export{R as default};
