var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,e=(a,n,t)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{a as c,o,c as h,b as u,w as r,F as d,f as j,d as i,r as g,y as m,A as v,t as b,M as _}from"./vendor.19f0dac7.js";const q={},k={class:"row"},y=j("默认按钮"),f=j("确认按钮"),w=j("取消按钮"),C=j("文字按钮"),x={class:"row"},z=j("默认圆角按钮"),H=j("确认圆角按钮"),I=j("取消圆角按钮"),S={class:"row"},T=u("p",null,'使用type="border"只显示边框不显示背景',-1),A=j("默认按钮"),R=j("取消圆角按钮");q.render=function(s,a){const n=c("ak-button");return o(),h(d,null,[u("div",k,[u(n,null,{default:r((()=>[y])),_:1}),u(n,{type:"primary"},{default:r((()=>[f])),_:1}),u(n,{type:"cancel"},{default:r((()=>[w])),_:1}),u(n,{type:"text"},{default:r((()=>[C])),_:1})]),u("div",x,[u(n,{round:!0},{default:r((()=>[z])),_:1}),u(n,{round:!0,type:"primary"},{default:r((()=>[H])),_:1}),u(n,{round:!0,type:"cancel"},{default:r((()=>[I])),_:1})]),u("div",S,[T,u(n,{type:"primary border"},{default:r((()=>[A])),_:1}),u(n,{type:"cancel border"},{default:r((()=>[R])),_:1})])],64)};const B={},G=j("默认按钮"),O=j("确认按钮"),P=j("取消按钮"),E=j("文字按钮");B.render=function(s,a){const n=c("ak-button");return o(),h("div",null,[u(n,{disabled:!0},{default:r((()=>[G])),_:1}),u(n,{disabled:!0,type:"primary"},{default:r((()=>[O])),_:1}),u(n,{disabled:!0,type:"cancel"},{default:r((()=>[P])),_:1}),u(n,{disabled:!0,type:"text"},{default:r((()=>[E])),_:1})])};const D={},F={class:"row"},M=u("p",null,'1.size="medium"',-1),$=j("默认按钮"),J=j("确认按钮"),K=j("取消按钮"),L=j("文字按钮"),N=u("p",null,'2.size="small"',-1),Q=j("默认按钮"),U=j("确认按钮"),V=j("取消按钮"),W=j("文字按钮"),X=u("p",null,'3.size="mini"',-1),Y=j("默认按钮"),Z=j("确认按钮"),ss=j("取消按钮"),as=j("文字按钮");D.render=function(s,a){const n=c("ak-button");return o(),h(d,null,[u("div",F,[M,u(n,{size:"medium"},{default:r((()=>[$])),_:1}),u(n,{size:"medium",type:"primary"},{default:r((()=>[J])),_:1}),u(n,{size:"medium",type:"cancel"},{default:r((()=>[K])),_:1}),u(n,{size:"medium",type:"text"},{default:r((()=>[L])),_:1})]),u("div",null,[N,u(n,{size:"small"},{default:r((()=>[Q])),_:1}),u(n,{size:"small",type:"primary"},{default:r((()=>[U])),_:1}),u(n,{size:"small",type:"cancel"},{default:r((()=>[V])),_:1}),u(n,{size:"small",type:"text"},{default:r((()=>[W])),_:1})]),u("div",null,[X,u(n,{size:"mini"},{default:r((()=>[Y])),_:1}),u(n,{size:"mini",type:"primary"},{default:r((()=>[Z])),_:1}),u(n,{size:"mini",type:"cancel"},{default:r((()=>[ss])),_:1}),u(n,{size:"mini",type:"text"},{default:r((()=>[as])),_:1})])],64)};const ns={},ts=j("默认按钮"),ls=j("确认按钮"),ps=j("取消按钮"),es=j("文字按钮");ns.render=function(s,a){const n=c("ak-button");return o(),h("div",null,[u(n,{icon:"search"},{default:r((()=>[ts])),_:1}),u(n,{icon:"search",type:"primary"},{default:r((()=>[ls])),_:1}),u(n,{icon:"search",type:"cancel"},{default:r((()=>[ps])),_:1}),u(n,{icon:"search",type:"text"},{default:r((()=>[es])),_:1})])};const cs={},os=j("默认按钮"),hs=j("确认按钮"),us=j("取消按钮"),rs=j("文字按钮"),ds=u("p",null,"直接添加标签属性",-1),js=j("默认按钮"),is=j("确认按钮"),gs=j("取消按钮"),ms=j("文字按钮");cs.render=function(s,a){const n=c("ak-button");return o(),h(d,null,[u("div",null,[u(n,{routerTo:"/button"},{default:r((()=>[os])),_:1}),u(n,{routerTo:"/button",type:"primary"},{default:r((()=>[hs])),_:1}),u(n,{routerTo:"/button",type:"cancel"},{default:r((()=>[us])),_:1}),u(n,{routerTo:"/button",type:"text"},{default:r((()=>[rs])),_:1})]),u("div",null,[ds,u(n,{href:"/button"},{default:r((()=>[js])),_:1}),u(n,{href:"/button",type:"primary"},{default:r((()=>[is])),_:1}),u(n,{href:"/button",type:"cancel"},{default:r((()=>[gs])),_:1}),u(n,{href:"/button",type:"text"},{default:r((()=>[ms])),_:1})])],64)};const vs={},bs=j("Button"),_s=j("Submit"),qs=j("Reset");vs.render=function(s,a){const n=c("ak-button");return o(),h("div",null,[u(n,{nativeType:"button"},{default:r((()=>[bs])),_:1}),u(n,{nativeType:"submit",type:"primary"},{default:r((()=>[_s])),_:1}),u(n,{nativeType:"reset",type:"cancel"},{default:r((()=>[qs])),_:1})])};const ks={setup:()=>({btnGroupClick:(s,a)=>{console.log(a)},groupClick:()=>{console.log("groupClick")},groupSingleClick:()=>{console.log("groupClick")}})},ys=j("默认按钮"),fs=j("确认按钮"),ws=j("取消按钮"),Cs=j("文字按钮"),xs=j("默认按钮"),zs=j("确认按钮"),Hs=j("取消按钮"),Is=j("文字按钮");ks.render=function(s,a,n,t,l,p){const e=c("ak-button"),j=c("ak-button-group");return o(),h(d,null,[u("p",null,[u(j,{size:"mini",onClick:t.btnGroupClick},{default:r((()=>[u(e,{name:"btn1"},{default:r((()=>[ys])),_:1}),u(e,{type:"primary",name:"btn2"},{default:r((()=>[fs])),_:1}),u(e,{type:"cancel",name:"btn3"},{default:r((()=>[ws])),_:1}),u(e,{type:"text",name:"btn4"},{default:r((()=>[Cs])),_:1})])),_:1},8,["onClick"])]),u("p",null,[u(j,{disabled:!0,onClick:t.groupClick},{default:r((()=>[u(e,null,{default:r((()=>[xs])),_:1}),u(e,{type:"primary",onClick:t.groupSingleClick},{default:r((()=>[zs])),_:1},8,["onClick"]),u(e,{type:"cancel"},{default:r((()=>[Hs])),_:1}),u(e,{type:"text"},{default:r((()=>[Is])),_:1})])),_:1},8,["onClick"])])],64)};const Ss=i({components:{vdpv_0:q,vdpv_1:B,vdpv_2:D,vdpv_3:ns,vdpv_4:cs,vdpv_5:vs,vdpv_6:ks},setup(s){const c=g(),o=g(),h=g(),u=g(),r=g(),d=g(),j=g(),i=[c,o,h,u,r,d,j],b=m({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return _=((s,a)=>{for(var n in a||(a={}))l.call(a,n)&&e(s,n,a[n]);if(t)for(var n of t(a))p.call(a,n)&&e(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===b[a+"Height"]?b[a+"Height"]=(i[s].value?i[s].value.offsetHeight:0)||0:b[a+"Height"]=0}},v(b)),a(_,n({vdpv_0Ref:c,vdpv_1Ref:o,vdpv_2Ref:h,vdpv_3Ref:u,vdpv_4Ref:r,vdpv_5Ref:d,vdpv_6Ref:j}));var _}});Ss.$vd={matter:{},toc:[{content:"Button 按钮",anchor:"button-按钮",level:2},{content:"基础用法",anchor:"基础用法",level:3},{content:"禁用状态",anchor:"禁用状态",level:3},{content:"按钮尺寸",anchor:"按钮尺寸",level:3},{content:"带Icon图标",anchor:"带icon图标",level:3},{content:"带路由或链接地址",anchor:"带路由或链接地址",level:3},{content:"输出原始按钮",anchor:"输出原始按钮",level:3},{content:"按钮组",anchor:"按钮组",level:3},{content:"API",anchor:"api",level:2},{content:"Button Props",anchor:"button-props",level:3},{content:"Button Event",anchor:"button-event",level:3},{content:"Button Group",anchor:"button-group",level:3},{content:"Button Group Event",anchor:"button-group-event",level:3}]};const Ts=Ss,As={class:"vuedoc  "},Rs=_('<h2 id="button-按钮" data-source-line="1"><a class="markdownIt-Anchor" href="#button-按钮">#</a> Button 按钮</h2><p data-source-line="3">默认情况下输出a标签</p><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><p data-source-line="7">使用<code>type</code>,<code>round</code>,<code>border</code>区分不同的按钮颜色</p><pre style="display:none;"></pre>',5),Bs={class:"vuedoc-demo "},Gs={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Ps={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Es=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>默认圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>使用type=&quot;border&quot;只显示边框不显示背景<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary border&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel border&quot;</span>&gt;</span>取消圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1),Ds=u("h3",{id:"禁用状态","data-source-line":"30"},[u("a",{class:"markdownIt-Anchor",href:"#禁用状态"},"#"),j(" 禁用状态")],-1),Fs=u("p",{"data-source-line":"32"},[j("使用"),u("code",null,'disabled="true"'),j("禁用")],-1),Ms=u("pre",{style:{display:"none"}},null,-1),$s={class:"vuedoc-demo "},Js={class:"vuedoc-demo__inner"},Ks={class:"vuedoc-demo__preview"},Ls={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Ns=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1),Qs=u("h3",{id:"按钮尺寸","data-source-line":"45"},[u("a",{class:"markdownIt-Anchor",href:"#按钮尺寸"},"#"),j(" 按钮尺寸")],-1),Us=u("p",{"data-source-line":"47"},[j("使用"),u("code",null,'size="medium/small/mini"'),j("设置按钮大小")],-1),Vs=u("pre",{style:{display:"none"}},null,-1),Ws={class:"vuedoc-demo "},Xs={class:"vuedoc-demo__inner"},Ys={class:"vuedoc-demo__preview"},Zs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},sa=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>1.size=&quot;medium&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2.size=&quot;small&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>3.size=&quot;mini&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>  \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1),aa=u("h3",{id:"带icon图标","data-source-line":"75"},[u("a",{class:"markdownIt-Anchor",href:"#带icon图标"},"#"),j(" 带Icon图标")],-1),na=u("pre",{style:{display:"none"}},null,-1),ta={class:"vuedoc-demo "},la={class:"vuedoc-demo__inner"},pa={class:"vuedoc-demo__preview"},ea={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ca=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1),oa=u("h3",{id:"带路由或链接地址","data-source-line":"88"},[u("a",{class:"markdownIt-Anchor",href:"#带路由或链接地址"},"#"),j(" 带路由或链接地址")],-1),ha=u("p",{"data-source-line":"90"},[j("使用"),u("code",null,"routerTo"),j("添加路由地址")],-1),ua=u("pre",{style:{display:"none"}},null,-1),ra={class:"vuedoc-demo "},da={class:"vuedoc-demo__inner"},ja={class:"vuedoc-demo__preview"},ia={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},ga=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">routerTo</span>=<span class="hljs-string">&quot;/button&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">routerTo</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">routerTo</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">routerTo</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>直接添加标签属性<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/button&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/button&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>    \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1),ma=u("h3",{id:"输出原始按钮","data-source-line":"110"},[u("a",{class:"markdownIt-Anchor",href:"#输出原始按钮"},"#"),j(" 输出原始按钮")],-1),va=u("p",{"data-source-line":"112"},[j("使用"),u("code",null,'nativeType="button/submit/reset"'),j("输出button")],-1),ba=u("pre",{style:{display:"none"}},null,-1),_a={class:"vuedoc-demo "},qa={class:"vuedoc-demo__inner"},ka={class:"vuedoc-demo__preview"},ya={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},fa=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">nativeType</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">nativeType</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">nativeType</span>=<span class="hljs-string">&quot;reset&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> \n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1),wa=_('<h3 id="按钮组" data-source-line="124"><a class="markdownIt-Anchor" href="#按钮组">#</a> 按钮组</h3><p data-source-line="126">可统一设置组内按钮<code>size</code>,<code>disabled</code>,<code>width</code>,<code>round</code>属性和<code>click</code>点击事件</p><pre style="display:none;"></pre>',3),Ca={class:"vuedoc-demo "},xa={class:"vuedoc-demo__inner"},za={class:"vuedoc-demo__preview"},Ha={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ia=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnGroupClick&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;btn1&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;btn2&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;btn3&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;btn4&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;groupClick&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;groupSingleClick&quot;</span>&gt;</span>确认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cancel&quot;</span>&gt;</span>取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span>{\n    <span class="hljs-keyword">const</span> btnGroupClick=<span class="hljs-function">(<span class="hljs-params">evt,name</span>)=&gt;</span>{\n      <span class="hljs-built_in">console</span>.log(name) <span class="hljs-comment">// 用于区分点击了哪个按钮</span>\n\t}\n\t<span class="hljs-keyword">const</span> groupClick = <span class="hljs-function">()=&gt;</span>{\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;groupClick&#39;</span>)\n    }\n    <span class="hljs-keyword">const</span> groupSingleClick = <span class="hljs-function">()=&gt;</span>{\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;groupClick&#39;</span>)\n    }\n\t<span class="hljs-keyword">return</span> {\n      btnGroupClick,\n      groupClick,\n      groupSingleClick\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),Sa=_('<h2 id="api" data-source-line="170"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="button-props" data-source-line="172"><a class="markdownIt-Anchor" href="#button-props">#</a> Button Props</h3><table data-source-line="174"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>类型，实际是给按钮添加类名，primary/text等</td></tr><tr><td>size</td><td>String</td><td>大小尺寸，可选medium / small / mini</td></tr><tr><td>width</td><td>String</td><td>按钮宽</td></tr><tr><td>round</td><td>boolean/false</td><td>是否圆角按钮</td></tr><tr><td>routerTo</td><td>String</td><td>路由url，输入为a标签时</td></tr><tr><td>href</td><td>String</td><td>a标签链接地址</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用状态</td></tr><tr><td>icon</td><td>String</td><td>前缀icon</td></tr><tr><td>loading</td><td>boolean/false</td><td>是否加载中状态</td></tr><tr><td>nativeType</td><td>String</td><td>原生 type 属性，button / submit / reset</td></tr><tr><td>name</td><td>String</td><td>按钮组时有效，按钮组点击事件时返回当前按钮唯一标识</td></tr><tr><td>-</td><td>-</td><td>其它原生属性</td></tr></tbody></table><h3 id="button-event" data-source-line="189"><a class="markdownIt-Anchor" href="#button-event">#</a> Button Event</h3><table data-source-line="191"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>-</td></tr></tbody></table><h3 id="button-group" data-source-line="195"><a class="markdownIt-Anchor" href="#button-group">#</a> Button Group</h3><table data-source-line="197"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td>String</td><td>大小尺寸，可选medium / small / mini</td></tr><tr><td>width</td><td>String</td><td>按钮宽</td></tr><tr><td>round</td><td>boolean/false</td><td>是否圆角按钮</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用状态</td></tr></tbody></table><h3 id="button-group-event" data-source-line="204"><a class="markdownIt-Anchor" href="#button-group-event">#</a> Button Group Event</h3><table data-source-line="206"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>-</td></tr></tbody></table>',9);Ts.render=function(s,a,n,t,l,p){const e=c("vdpv_0"),r=c("vdpv_1"),d=c("vdpv_2"),j=c("vdpv_3"),i=c("vdpv_4"),g=c("vdpv_5"),m=c("vdpv_6");return o(),h("div",As,[Rs,u("div",Bs,[u("div",Gs,[u("div",Os,[u(e)]),u("div",{style:{height:s.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[u("div",Ps,[Es],512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(0))},b(s.vdpv_0Height>0?"hidden":"show"),1)])]),Ds,Fs,Ms,u("div",$s,[u("div",Js,[u("div",Ks,[u(r)]),u("div",{style:{height:s.vdpv_1Height+"px"},class:"vuedoc-demo__source"},[u("div",Ls,[Ns],512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(1))},b(s.vdpv_1Height>0?"hidden":"show"),1)])]),Qs,Us,Vs,u("div",Ws,[u("div",Xs,[u("div",Ys,[u(d)]),u("div",{style:{height:s.vdpv_2Height+"px"},class:"vuedoc-demo__source"},[u("div",Zs,[sa],512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(2))},b(s.vdpv_2Height>0?"hidden":"show"),1)])]),aa,na,u("div",ta,[u("div",la,[u("div",pa,[u(j)]),u("div",{style:{height:s.vdpv_3Height+"px"},class:"vuedoc-demo__source"},[u("div",ea,[ca],512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(3))},b(s.vdpv_3Height>0?"hidden":"show"),1)])]),oa,ha,ua,u("div",ra,[u("div",da,[u("div",ja,[u(i)]),u("div",{style:{height:s.vdpv_4Height+"px"},class:"vuedoc-demo__source"},[u("div",ia,[ga],512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(4))},b(s.vdpv_4Height>0?"hidden":"show"),1)])]),ma,va,ba,u("div",_a,[u("div",qa,[u("div",ka,[u(g)]),u("div",{style:{height:s.vdpv_5Height+"px"},class:"vuedoc-demo__source"},[u("div",ya,[fa],512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=a=>s.toggleCode(5))},b(s.vdpv_5Height>0?"hidden":"show"),1)])]),wa,u("div",Ca,[u("div",xa,[u("div",za,[u(m)]),u("div",{style:{height:s.vdpv_6Height+"px"},class:"vuedoc-demo__source"},[u("div",Ha,[Ia],512)],4),u("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=a=>s.toggleCode(6))},b(s.vdpv_6Height>0?"hidden":"show"),1)])]),Sa])};export default Ts;
