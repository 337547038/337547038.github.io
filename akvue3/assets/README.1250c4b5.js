var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,e=(a,n,t)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{a as c,o,c as h,b as u,e as r,w as d,F as j,i,d as g,r as m,D as v,G as b,q as _,t as q,U as k}from"./vendor.6ab3fc58.js";const y={},f={class:"row"},w=i("默认按钮"),C=i("确认按钮"),x=i("取消按钮"),z=i("文字按钮"),H={class:"row"},I=i("默认圆角按钮"),S=i("确认圆角按钮"),T=i("取消圆角按钮"),R={class:"row"},A=u("p",null,'使用type="border"只显示边框不显示背景',-1),B=i("默认按钮"),G=i("取消圆角按钮");y.render=function(s,a){const n=c("ak-button");return o(),h(j,null,[u("div",f,[r(n,null,{default:d((()=>[w])),_:1}),r(n,{type:"primary"},{default:d((()=>[C])),_:1}),r(n,{type:"cancel"},{default:d((()=>[x])),_:1}),r(n,{type:"text"},{default:d((()=>[z])),_:1})]),u("div",H,[r(n,{round:!0},{default:d((()=>[I])),_:1}),r(n,{round:!0,type:"primary"},{default:d((()=>[S])),_:1}),r(n,{round:!0,type:"cancel"},{default:d((()=>[T])),_:1})]),u("div",R,[A,r(n,{type:"primary border"},{default:d((()=>[B])),_:1}),r(n,{type:"cancel border"},{default:d((()=>[G])),_:1})])],64)};const O={},P=i("默认按钮"),E=i("确认按钮"),D=i("取消按钮"),F=i("文字按钮");O.render=function(s,a){const n=c("ak-button");return o(),h("div",null,[r(n,{disabled:!0},{default:d((()=>[P])),_:1}),r(n,{disabled:!0,type:"primary"},{default:d((()=>[E])),_:1}),r(n,{disabled:!0,type:"cancel"},{default:d((()=>[D])),_:1}),r(n,{disabled:!0,type:"text"},{default:d((()=>[F])),_:1})])};const U={},$={class:"row"},J=u("p",null,'1.size="medium"',-1),K=i("默认按钮"),L=i("确认按钮"),M=i("取消按钮"),N=i("文字按钮"),Q=u("p",null,'2.size="small"',-1),V=i("默认按钮"),W=i("确认按钮"),X=i("取消按钮"),Y=i("文字按钮"),Z=u("p",null,'3.size="mini"',-1),ss=i("默认按钮"),as=i("确认按钮"),ns=i("取消按钮"),ts=i("文字按钮");U.render=function(s,a){const n=c("ak-button");return o(),h(j,null,[u("div",$,[J,r(n,{size:"medium"},{default:d((()=>[K])),_:1}),r(n,{size:"medium",type:"primary"},{default:d((()=>[L])),_:1}),r(n,{size:"medium",type:"cancel"},{default:d((()=>[M])),_:1}),r(n,{size:"medium",type:"text"},{default:d((()=>[N])),_:1})]),u("div",null,[Q,r(n,{size:"small"},{default:d((()=>[V])),_:1}),r(n,{size:"small",type:"primary"},{default:d((()=>[W])),_:1}),r(n,{size:"small",type:"cancel"},{default:d((()=>[X])),_:1}),r(n,{size:"small",type:"text"},{default:d((()=>[Y])),_:1})]),u("div",null,[Z,r(n,{size:"mini"},{default:d((()=>[ss])),_:1}),r(n,{size:"mini",type:"primary"},{default:d((()=>[as])),_:1}),r(n,{size:"mini",type:"cancel"},{default:d((()=>[ns])),_:1}),r(n,{size:"mini",type:"text"},{default:d((()=>[ts])),_:1})])],64)};const ls={},ps=i("默认按钮"),es=i("确认按钮"),cs=i("取消按钮"),os=i("文字按钮");ls.render=function(s,a){const n=c("ak-button");return o(),h("div",null,[r(n,{icon:"search"},{default:d((()=>[ps])),_:1}),r(n,{icon:"search",type:"primary"},{default:d((()=>[es])),_:1}),r(n,{icon:"search",type:"cancel"},{default:d((()=>[cs])),_:1}),r(n,{icon:"search",type:"text"},{default:d((()=>[os])),_:1})])};const hs={},us=i("默认按钮"),rs=i("确认按钮"),ds=i("取消按钮"),js=i("文字按钮"),is=u("p",null,"直接添加标签属性",-1),gs=i("默认按钮"),ms=i("确认按钮"),vs=i("取消按钮"),bs=i("文字按钮");hs.render=function(s,a){const n=c("ak-button");return o(),h(j,null,[u("div",null,[r(n,{routerTo:"/button"},{default:d((()=>[us])),_:1}),r(n,{routerTo:"/button",type:"primary"},{default:d((()=>[rs])),_:1}),r(n,{routerTo:"/button",type:"cancel"},{default:d((()=>[ds])),_:1}),r(n,{routerTo:"/button",type:"text"},{default:d((()=>[js])),_:1})]),u("div",null,[is,r(n,{href:"/button"},{default:d((()=>[gs])),_:1}),r(n,{href:"/button",type:"primary"},{default:d((()=>[ms])),_:1}),r(n,{href:"/button",type:"cancel"},{default:d((()=>[vs])),_:1}),r(n,{href:"/button",type:"text"},{default:d((()=>[bs])),_:1})])],64)};const _s={},qs=i("Button"),ks=i("Submit"),ys=i("Reset");_s.render=function(s,a){const n=c("ak-button");return o(),h("div",null,[r(n,{nativeType:"button"},{default:d((()=>[qs])),_:1}),r(n,{nativeType:"submit",type:"primary"},{default:d((()=>[ks])),_:1}),r(n,{nativeType:"reset",type:"cancel"},{default:d((()=>[ys])),_:1})])};const fs={setup:()=>({btnGroupClick:(s,a)=>{console.log(a)},groupClick:()=>{console.log("groupClick")},groupSingleClick:()=>{console.log("groupClick")}})},ws=i("默认按钮"),Cs=i("确认按钮"),xs=i("取消按钮"),zs=i("文字按钮"),Hs=i("默认按钮"),Is=i("确认按钮"),Ss=i("取消按钮"),Ts=i("文字按钮");fs.render=function(s,a,n,t,l,p){const e=c("ak-button"),i=c("ak-button-group");return o(),h(j,null,[u("p",null,[r(i,{size:"mini",onClick:t.btnGroupClick},{default:d((()=>[r(e,{name:"btn1"},{default:d((()=>[ws])),_:1}),r(e,{type:"primary",name:"btn2"},{default:d((()=>[Cs])),_:1}),r(e,{type:"cancel",name:"btn3"},{default:d((()=>[xs])),_:1}),r(e,{type:"text",name:"btn4"},{default:d((()=>[zs])),_:1})])),_:1},8,["onClick"])]),u("p",null,[r(i,{disabled:!0,onClick:t.groupClick},{default:d((()=>[r(e,null,{default:d((()=>[Hs])),_:1}),r(e,{type:"primary",onClick:t.groupSingleClick},{default:d((()=>[Is])),_:1},8,["onClick"]),r(e,{type:"cancel"},{default:d((()=>[Ss])),_:1}),r(e,{type:"text"},{default:d((()=>[Ts])),_:1})])),_:1},8,["onClick"])])],64)};const Rs=g({components:{vdpv_0:y,vdpv_1:O,vdpv_2:U,vdpv_3:ls,vdpv_4:hs,vdpv_5:_s,vdpv_6:fs},setup(s){const c=m(),o=m(),h=m(),u=m(),r=m(),d=m(),j=m(),i=[c,o,h,u,r,d,j],g=v({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return _=((s,a)=>{for(var n in a||(a={}))l.call(a,n)&&e(s,n,a[n]);if(t)for(var n of t(a))p.call(a,n)&&e(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===g[a+"Height"]?g[a+"Height"]=(i[s].value?i[s].value.offsetHeight:0)||0:g[a+"Height"]=0}},b(g)),a(_,n({vdpv_0Ref:c,vdpv_1Ref:o,vdpv_2Ref:h,vdpv_3Ref:u,vdpv_4Ref:r,vdpv_5Ref:d,vdpv_6Ref:j}));var _}});Rs.$vd={matter:{},toc:[{content:"Button 按钮",anchor:"button-按钮",level:2},{content:"基础用法",anchor:"基础用法",level:3},{content:"禁用状态",anchor:"禁用状态",level:3},{content:"按钮尺寸",anchor:"按钮尺寸",level:3},{content:"带Icon图标",anchor:"带icon图标",level:3},{content:"带路由或链接地址",anchor:"带路由或链接地址",level:3},{content:"输出原始按钮",anchor:"输出原始按钮",level:3},{content:"按钮组",anchor:"按钮组",level:3},{content:"API",anchor:"api",level:2},{content:"Button Props",anchor:"button-props",level:3},{content:"Button Event",anchor:"button-event",level:3},{content:"Button Group",anchor:"button-group",level:3},{content:"Button Group Event",anchor:"button-group-event",level:3}]};const As=Rs,Bs={class:"vuedoc  "},Gs=k('<h2 id="button-按钮" data-source-line="1"><a class="markdownIt-Anchor" href="#button-按钮">#</a> Button 按钮</h2><p data-source-line="3">默认情况下输出a标签</p><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><p data-source-line="7">使用<code>type</code>,<code>round</code>,<code>border</code>区分不同的按钮颜色</p><pre style="display:none;"></pre>',5),Os={class:"vuedoc-demo "},Ps={class:"vuedoc-demo__inner"},Es={class:"vuedoc-demo__preview"},Ds={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Fs=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>默认圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>使用type=&quot;border&quot;只显示边框不显示背景<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary border&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel border&quot;</span>&gt;</span>取消圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],Us=u("h3",{id:"禁用状态","data-source-line":"30"},[u("a",{class:"markdownIt-Anchor",href:"#禁用状态"},"#"),i(" 禁用状态")],-1),$s=u("p",{"data-source-line":"32"},[i("使用"),u("code",null,'disabled="true"'),i("禁用")],-1),Js=u("pre",{style:{display:"none"}},null,-1),Ks={class:"vuedoc-demo "},Ls={class:"vuedoc-demo__inner"},Ms={class:"vuedoc-demo__preview"},Ns={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Qs=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],Vs=u("h3",{id:"按钮尺寸","data-source-line":"45"},[u("a",{class:"markdownIt-Anchor",href:"#按钮尺寸"},"#"),i(" 按钮尺寸")],-1),Ws=u("p",{"data-source-line":"47"},[i("使用"),u("code",null,'size="medium/small/mini"'),i("设置按钮大小")],-1),Xs=u("pre",{style:{display:"none"}},null,-1),Ys={class:"vuedoc-demo "},Zs={class:"vuedoc-demo__inner"},sa={class:"vuedoc-demo__preview"},aa={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},na=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>1.size=&quot;medium&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2.size=&quot;small&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>3.size=&quot;mini&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>  \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],ta=u("h3",{id:"带icon图标","data-source-line":"75"},[u("a",{class:"markdownIt-Anchor",href:"#带icon图标"},"#"),i(" 带Icon图标")],-1),la=u("pre",{style:{display:"none"}},null,-1),pa={class:"vuedoc-demo "},ea={class:"vuedoc-demo__inner"},ca={class:"vuedoc-demo__preview"},oa={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ha=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],ua=u("h3",{id:"带路由或链接地址","data-source-line":"88"},[u("a",{class:"markdownIt-Anchor",href:"#带路由或链接地址"},"#"),i(" 带路由或链接地址")],-1),ra=u("p",{"data-source-line":"90"},[i("使用"),u("code",null,"routerTo"),i("添加路由地址")],-1),da=u("pre",{style:{display:"none"}},null,-1),ja={class:"vuedoc-demo "},ia={class:"vuedoc-demo__inner"},ga={class:"vuedoc-demo__preview"},ma={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},va=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">routerTo</span>=<span class="hljs-string">&quot;/button&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">routerTo</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">routerTo</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">routerTo</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>直接添加标签属性<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/button&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>    \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],ba=u("h3",{id:"输出原始按钮","data-source-line":"110"},[u("a",{class:"markdownIt-Anchor",href:"#输出原始按钮"},"#"),i(" 输出原始按钮")],-1),_a=u("p",{"data-source-line":"112"},[i("使用"),u("code",null,'nativeType="button/submit/reset"'),i("输出button")],-1),qa=u("pre",{style:{display:"none"}},null,-1),ka={class:"vuedoc-demo "},ya={class:"vuedoc-demo__inner"},fa={class:"vuedoc-demo__preview"},wa={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ca=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">nativeType</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">nativeType</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">nativeType</span>=<span class="hljs-string">&quot;reset&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],xa=k('<h3 id="按钮组" data-source-line="124"><a class="markdownIt-Anchor" href="#按钮组">#</a> 按钮组</h3><p data-source-line="126">可统一设置组内按钮<code>size</code>,<code>disabled</code>,<code>width</code>,<code>round</code>属性和<code>click</code>点击事件</p><pre style="display:none;"></pre>',3),za={class:"vuedoc-demo "},Ha={class:"vuedoc-demo__inner"},Ia={class:"vuedoc-demo__preview"},Sa={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ta=[k('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnGroupClick&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;btn1&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;btn2&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;btn3&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;btn4&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;groupClick&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;groupSingleClick&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span>{\n    <span class="hljs-keyword">const</span> btnGroupClick=<span class="hljs-function">(<span class="hljs-params">evt,name</span>)=&gt;</span>{\n      <span class="hljs-built_in">console</span>.log(name) <span class="hljs-comment">// 用于区分点击了哪个按钮</span>\n\t}\n\t<span class="hljs-keyword">const</span> groupClick = <span class="hljs-function">()=&gt;</span>{\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;groupClick&#39;</span>)\n    }\n    <span class="hljs-keyword">const</span> groupSingleClick = <span class="hljs-function">()=&gt;</span>{\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;groupClick&#39;</span>)\n    }\n\t<span class="hljs-keyword">return</span> {\n      btnGroupClick,\n      groupClick,\n      groupSingleClick\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],Ra=k('<h2 id="api" data-source-line="170"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="button-props" data-source-line="172"><a class="markdownIt-Anchor" href="#button-props">#</a> Button Props</h3><table data-source-line="174"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>类型，实际是给按钮添加类名，primary/text等</td></tr><tr><td>size</td><td>String</td><td>大小尺寸，可选medium / small / mini</td></tr><tr><td>width</td><td>String</td><td>按钮宽</td></tr><tr><td>round</td><td>boolean/false</td><td>是否圆角按钮</td></tr><tr><td>routerTo</td><td>String</td><td>路由url，输入为a标签时</td></tr><tr><td>href</td><td>String</td><td>a标签链接地址</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用状态</td></tr><tr><td>icon</td><td>String</td><td>前缀icon</td></tr><tr><td>loading</td><td>boolean/false</td><td>是否加载中状态</td></tr><tr><td>nativeType</td><td>String</td><td>原生 type 属性，button / submit / reset</td></tr><tr><td>name</td><td>String</td><td>按钮组时有效，按钮组点击事件时返回当前按钮唯一标识</td></tr><tr><td>-</td><td>-</td><td>其它原生属性</td></tr></tbody></table><h3 id="button-event" data-source-line="189"><a class="markdownIt-Anchor" href="#button-event">#</a> Button Event</h3><table data-source-line="191"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>-</td></tr></tbody></table><h3 id="button-group" data-source-line="195"><a class="markdownIt-Anchor" href="#button-group">#</a> Button Group</h3><table data-source-line="197"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td>String</td><td>大小尺寸，可选medium / small / mini</td></tr><tr><td>width</td><td>String</td><td>按钮宽</td></tr><tr><td>round</td><td>boolean/false</td><td>是否圆角按钮</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用状态</td></tr></tbody></table><h3 id="button-group-event" data-source-line="204"><a class="markdownIt-Anchor" href="#button-group-event">#</a> Button Group Event</h3><table data-source-line="206"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>-</td></tr></tbody></table>',9);As.render=function(s,a,n,t,l,p){const e=c("vdpv_0"),d=c("vdpv_1"),j=c("vdpv_2"),i=c("vdpv_3"),g=c("vdpv_4"),m=c("vdpv_5"),v=c("vdpv_6");return o(),h("div",Bs,[Gs,u("div",Os,[u("div",Ps,[u("div",Es,[r(e)]),u("div",{style:_({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[u("div",Ds,Fs,512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},q(s.vdpv_0Height>0?"hidden":"show"),1)])]),Us,$s,Js,u("div",Ks,[u("div",Ls,[u("div",Ms,[r(d)]),u("div",{style:_({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[u("div",Ns,Qs,512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},q(s.vdpv_1Height>0?"hidden":"show"),1)])]),Vs,Ws,Xs,u("div",Ys,[u("div",Zs,[u("div",sa,[r(j)]),u("div",{style:_({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[u("div",aa,na,512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},q(s.vdpv_2Height>0?"hidden":"show"),1)])]),ta,la,u("div",pa,[u("div",ea,[u("div",ca,[r(i)]),u("div",{style:_({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[u("div",oa,ha,512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},q(s.vdpv_3Height>0?"hidden":"show"),1)])]),ua,ra,da,u("div",ja,[u("div",ia,[u("div",ga,[r(g)]),u("div",{style:_({height:s.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[u("div",ma,va,512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(4))},q(s.vdpv_4Height>0?"hidden":"show"),1)])]),ba,_a,qa,u("div",ka,[u("div",ya,[u("div",fa,[r(m)]),u("div",{style:_({height:s.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[u("div",wa,Ca,512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(5))},q(s.vdpv_5Height>0?"hidden":"show"),1)])]),xa,u("div",za,[u("div",Ha,[u("div",Ia,[r(v)]),u("div",{style:_({height:s.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[u("div",Sa,Ta,512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=a=>s.toggleCode(6))},q(s.vdpv_6Height>0?"hidden":"show"),1)])]),Ra])};export{As as default};
