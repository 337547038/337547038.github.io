var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{a as c,o as d,c as o,e as r,i,b as v,w as h,d as g,r as j,D as u,G as m,q as _,t as f,U as y}from"./vendor.66660a0e.js";const k={},b=i(" 这是文本内容 "),q=v("p",null,'也可以是虚线 borderStyle="dashed"',-1),w=v("p",null,'这是文本内容 borderStyle="dotted"',-1),H=v("p",null,"这是文本内容",-1);k.render=function(s,a){const n=c("ak-divider");return d(),o("div",null,[b,r(n),q,r(n,{borderStyle:"dashed"}),w,r(n,{borderStyle:"dotted"}),H])};const O={},S=i(" 这是文本内容 "),x=i("标题"),C=v("p",null,"这是文本内容",-1);O.render=function(s,a){const n=c("ak-divider");return d(),o("div",null,[S,r(n,{contentPosition:"left"},{default:h((()=>[x])),_:1}),C])};const P={},R=v("span",null,"编辑",-1),I=v("span",null,"查看",-1),A=v("span",null,"删除",-1);P.render=function(s,a){const n=c("ak-divider");return d(),o("div",null,[R,r(n,{direction:"vertical"}),I,r(n,{direction:"vertical"}),A])};const D=g({components:{vdpv_0:k,vdpv_1:O,vdpv_2:P},setup(s){const c=j(),d=j(),o=j(),r=[c,d,o],i=u({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return v=((s,a)=>{for(var n in a||(a={}))e.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))t.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===i[a+"Height"]?i[a+"Height"]=(r[s].value?r[s].value.offsetHeight:0)||0:i[a+"Height"]=0}},m(i)),a(v,n({vdpv_0Ref:c,vdpv_1Ref:d,vdpv_2Ref:o}));var v}});D.$vd={matter:{},toc:[{content:"Divider 分割线",anchor:"divider-分割线",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"设置文案提示",anchor:"设置文案提示",level:3},{content:"垂直分隔线",anchor:"垂直分隔线",level:3}]};const E=D,G={class:"vuedoc  "},U=y('<h1 id="divider-分割线" data-source-line="1"><a class="markdownIt-Anchor" href="#divider-分割线">#</a> Divider 分割线</h1><h3 id="基础用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><p data-source-line="5">对段落间的文本进行分割</p><pre style="display:none;"></pre>',4),$={class:"vuedoc-demo "},z={class:"vuedoc-demo__inner"},B={class:"vuedoc-demo__preview"},F={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},J=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    这是文本内容\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>也可以是虚线 borderStyle=&quot;dashed&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">borderStyle</span>=<span class="hljs-string">&quot;dashed&quot;</span>/&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是文本内容 borderStyle=&quot;dotted&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">borderStyle</span>=<span class="hljs-string">&quot;dotted&quot;</span>/&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是文本内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n</span></code></pre></div>',1)],K=v("h3",{id:"设置文案提示","data-source-line":"22"},[v("a",{class:"markdownIt-Anchor",href:"#设置文案提示"},"#"),i(" 设置文案提示")],-1),L=v("p",{"data-source-line":"24"},"对段落间的文本进行分割",-1),M=v("pre",{style:{display:"none"}},null,-1),N={class:"vuedoc-demo "},Q={class:"vuedoc-demo__inner"},T={class:"vuedoc-demo__preview"},V={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},W=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    这是文本内容\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">contentPosition</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>标题<span class="hljs-tag">&lt;/<span class="hljs-name">ak-divider</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是文本内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n</span></code></pre></div>',1)],X=v("h3",{id:"垂直分隔线","data-source-line":"38"},[v("a",{class:"markdownIt-Anchor",href:"#垂直分隔线"},"#"),i(" 垂直分隔线")],-1),Y=v("p",{"data-source-line":"40"},"对段落间的文本进行分割",-1),Z=v("pre",{style:{display:"none"}},null,-1),ss={class:"vuedoc-demo "},as={class:"vuedoc-demo__inner"},ns={class:"vuedoc-demo__preview"},ls={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},es=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>编辑<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-divider</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>查看<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-divider</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-divider</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n</span></code></pre></div>',1)];E.render=function(s,a,n,l,e,t){const p=c("vdpv_0"),i=c("vdpv_1"),h=c("vdpv_2");return d(),o("div",G,[U,v("div",$,[v("div",z,[v("div",B,[r(p)]),v("div",{style:_({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[v("div",F,J,512)],4),v("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},f(s.vdpv_0Height>0?"hidden":"show"),1)])]),K,L,M,v("div",N,[v("div",Q,[v("div",T,[r(i)]),v("div",{style:_({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[v("div",V,W,512)],4),v("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},f(s.vdpv_1Height>0?"hidden":"show"),1)])]),X,Y,Z,v("div",ss,[v("div",as,[v("div",ns,[r(h)]),v("div",{style:_({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[v("div",ls,es,512)],4),v("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},f(s.vdpv_2Height>0?"hidden":"show"),1)])])])};export{E as default};