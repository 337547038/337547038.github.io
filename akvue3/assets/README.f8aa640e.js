var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,o=(a,n,t)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{a as e,o as c,c as h,b as d,e as i,w as r,i as g,d as j,r as u,D as v,G as m,q as _,t as q,U as f}from"./vendor.6ab3fc58.js";const k={},b={class:"tooltip-demo"},y=d("span",null,"上左",-1),w=d("span",null,"上边",-1),x=d("span",null,"上右",-1),H={class:"tooltip-demo"},C=d("span",null,"左边",-1),I=d("span",null,null,-1),A=d("span",null,"右边",-1),R={class:"tooltip-demo"},O=d("span",null,"下左",-1),P=d("span",null,"下边",-1),T=d("span",null,"下右",-1);k.render=function(s,a){const n=e("ak-tooltip");return c(),h("div",null,[d("div",b,[i(n,{content:"这是提示内容这是提示内容"},{default:r((()=>[y])),_:1}),i(n,{content:"这是提示内容这是提示内容，direction＝'top'",direction:"top"},{default:r((()=>[w])),_:1}),i(n,{content:"这是提示内容direction='top-right'",direction:"top-right"},{default:r((()=>[x])),_:1})]),d("div",H,[i(n,{direction:"left",content:"这是提示内容direction=left"},{default:r((()=>[C])),_:1}),I,i(n,{direction:"right",content:"这是提示内容direction=right"},{default:r((()=>[A])),_:1})]),d("div",R,[i(n,{direction:"bottom-left",content:"这是提示内容direction=bottom-left"},{default:r((()=>[O])),_:1}),i(n,{direction:"bottom",content:"这是提示内容direction=bottom"},{default:r((()=>[P])),_:1}),i(n,{direction:"bottom-right",content:"这是提示内容direction=bottom-right"},{default:r((()=>[T])),_:1})])])};const S={},N={class:"tooltip-demo"},W=d("span",null,"上左",-1),B=d("span",null,"上边",-1),E=d("span",null,"上右",-1),D={class:"tooltip-demo"},X=d("span",null,"左边",-1),G=d("span",null,null,-1),U=d("span",null,"右边",-1),$={class:"tooltip-demo"},z=d("span",null,"下左",-1),F=d("span",null,"下边",-1),J=d("span",null,"下右",-1);S.render=function(s,a){const n=e("ak-tooltip");return c(),h("div",null,[d("div",N,[i(n,{content:"提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行"},{default:r((()=>[W])),_:1}),i(n,{content:"上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽",direction:"top"},{default:r((()=>[B])),_:1}),i(n,{content:"这里跟上左类型，计算的是到浏览器左边的距离",direction:"top-right",maxWidth:200},{default:r((()=>[E])),_:1})]),d("div",D,[i(n,{direction:"left",content:"受当前标签到浏览器左边的距离影响"},{default:r((()=>[X])),_:1}),G,i(n,{direction:"right",content:"受当前标签到浏览器左边的距离影响",maxWidth:200},{default:r((()=>[U])),_:1})]),d("div",$,[i(n,{direction:"bottom-left",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。"},{default:r((()=>[z])),_:1}),i(n,{direction:"bottom",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行"},{default:r((()=>[F])),_:1}),i(n,{direction:"bottom-right",content:"这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。"},{default:r((()=>[J])),_:1})])])};const K={},L=d("i",{class:"tooltip-icon"},"?",-1),M=d("i",{class:"tooltip-icon"},"?",-1);K.render=function(s,a){const n=e("ak-tooltip");return c(),h("div",null,[i(n,{content:"这里是提示文字，因为icon比较小，可使用x微调",x:-10},{default:r((()=>[L])),_:1}),i(n,{content:"这里是提示文字。使用x轴微调将箭头和icon对齐",x:-10},{default:r((()=>[M])),_:1})])};const Q={},V={class:"tooltip-demo"},Y=d("span",null,"always",-1);Q.render=function(s,a){const n=e("ak-tooltip");return c(),h("div",V,[i(n,{content:"一直都显示的",always:!0,direction:"top"},{default:r((()=>[Y])),_:1})])};const Z={},ss={class:"tooltip-demo"},as=g("内容为slot"),ns=g(" 这里是提示内容 ");Z.render=function(s,a){const n=e("ak-button"),t=e("ak-tooltip");return c(),h("div",ss,[i(t,{direction:"top"},{content:r((()=>[ns])),default:r((()=>[i(n,null,{default:r((()=>[as])),_:1})])),_:1})])};const ts={},ls={class:"tooltip-demo"},ps=g("设置延时关闭"),os=g(" 这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等 ");ts.render=function(s,a){const n=e("ak-button"),t=e("ak-tooltip");return c(),h("div",ls,[i(t,{direction:"top",delay:300},{content:r((()=>[os])),default:r((()=>[i(n,null,{default:r((()=>[ps])),_:1})])),_:1})])};const es=j({components:{vdpv_0:k,vdpv_1:S,vdpv_2:K,vdpv_3:Q,vdpv_4:Z,vdpv_5:ts},setup(s){const e=u(),c=u(),h=u(),d=u(),i=u(),r=u(),g=[e,c,h,d,i,r],j=v({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0});return _=((s,a)=>{for(var n in a||(a={}))l.call(a,n)&&o(s,n,a[n]);if(t)for(var n of t(a))p.call(a,n)&&o(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===j[a+"Height"]?j[a+"Height"]=(g[s].value?g[s].value.offsetHeight:0)||0:j[a+"Height"]=0}},m(j)),a(_,n({vdpv_0Ref:e,vdpv_1Ref:c,vdpv_2Ref:h,vdpv_3Ref:d,vdpv_4Ref:i,vdpv_5Ref:r}));var _}});es.$vd={matter:{},toc:[{content:"Tooltip 提示",anchor:"tooltip-提示",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"多文字自动换行",anchor:"多文字自动换行",level:3},{content:"支持多种效果",anchor:"支持多种效果",level:3},{content:"固定显示",anchor:"固定显示",level:3},{content:"内容参数可使用slots形式",anchor:"内容参数可使用slots形式",level:3},{content:"设置延时关闭",anchor:"设置延时关闭",level:3},{content:"API",anchor:"api",level:2},{content:"Tooltip Props",anchor:"tooltip-props",level:3},{content:"Tooltip Event",anchor:"tooltip-event",level:3}]};const cs=es,hs={class:"vuedoc  "},ds=f('<h1 id="tooltip-提示" data-source-line="3"><a class="markdownIt-Anchor" href="#tooltip-提示">#</a> Tooltip 提示</h1><p data-source-line="5">注意：内容必须要包含一层标签用作事件触发区域，不能是纯文字</p><h3 id="基本用法" data-source-line="7"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',4),is={class:"vuedoc-demo "},rs={class:"vuedoc-demo__inner"},gs={class:"vuedoc-demo__preview"},js={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},us=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容这是提示内容&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>上左<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容这是提示内容，direction＝&#39;top&#39;&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>上边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=&#39;top-right&#39;&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top-right&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>上右<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=left&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>左边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n       <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=right&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>右边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom-left&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=bottom-left&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>下左<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>下边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom-right&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容direction=bottom-right&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>下右<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n\n</span></code></pre></div>',1)],vs=d("h3",{id:"多文字自动换行","data-source-line":"35"},[d("a",{class:"markdownIt-Anchor",href:"#多文字自动换行"},"#"),g(" 多文字自动换行")],-1),ms=d("p",{"data-source-line":"37"},"可通过设置最大宽度自动换行",-1),_s=d("pre",{style:{display:"none"}},null,-1),qs={class:"vuedoc-demo "},fs={class:"vuedoc-demo__inner"},ks={class:"vuedoc-demo__preview"},bs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ys=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>上左<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>上边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这里跟上左类型，计算的是到浏览器左边的距离&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top-right&quot;</span> <span class="hljs-attr">:maxWidth</span>=<span class="hljs-string">&quot;200&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>上右<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;受当前标签到浏览器左边的距离影响&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>左边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n       <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;受当前标签到浏览器左边的距离影响&quot;</span> <span class="hljs-attr">:maxWidth</span>=<span class="hljs-string">&quot;200&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>右边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom-left&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容，如果内容超过设定的最大宽时则自动换行。&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>下左<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>下边<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom-right&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>下右<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n</span></code></pre></div>',1)],ws=d("h3",{id:"支持多种效果","data-source-line":"64"},[d("a",{class:"markdownIt-Anchor",href:"#支持多种效果"},"#"),g(" 支持多种效果")],-1),xs=d("p",{"data-source-line":"66"},"可自定样式",-1),Hs=d("pre",{style:{display:"none"}},null,-1),Cs={class:"vuedoc-demo "},Is={class:"vuedoc-demo__inner"},As={class:"vuedoc-demo__preview"},Rs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Os=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这里是提示文字，因为icon比较小，可使用x微调&quot;</span> <span class="hljs-attr">:x</span>=<span class="hljs-string">&quot;-10&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-icon&quot;</span>&gt;</span>?<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这里是提示文字。使用x轴微调将箭头和icon对齐&quot;</span> <span class="hljs-attr">:x</span>=<span class="hljs-string">&quot;-10&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-icon&quot;</span>&gt;</span>?<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n</span></code></pre></div>',1)],Ps=d("h3",{id:"固定显示","data-source-line":"80"},[d("a",{class:"markdownIt-Anchor",href:"#固定显示"},"#"),g(" 固定显示")],-1),Ts=d("pre",{style:{display:"none"}},null,-1),Ss={class:"vuedoc-demo "},Ns={class:"vuedoc-demo__inner"},Ws={class:"vuedoc-demo__preview"},Bs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Es=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;一直都显示的&quot;</span> <span class="hljs-attr">:always</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>always<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n</span></code></pre></div>',1)],Ds=d("h3",{id:"内容参数可使用slots形式","data-source-line":"93"},[d("a",{class:"markdownIt-Anchor",href:"#内容参数可使用slots形式"},"#"),g(" 内容参数可使用slots形式")],-1),Xs=d("pre",{style:{display:"none"}},null,-1),Gs={class:"vuedoc-demo "},Us={class:"vuedoc-demo__inner"},$s={class:"vuedoc-demo__preview"},zs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Fs=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>内容为slot<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>\n        这里是提示内容\n       <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n</span></code></pre></div>',1)],Js=d("h3",{id:"设置延时关闭","data-source-line":"109"},[d("a",{class:"markdownIt-Anchor",href:"#设置延时关闭"},"#"),g(" 设置延时关闭")],-1),Ks=d("p",{"data-source-line":"111"},[g("通过"),d("code",null,"delay"),g("设置延时关闭，可将鼠标移至提示语上，例如实现提示语上的点击事件")],-1),Ls=d("pre",{style:{display:"none"}},null,-1),Ms={class:"vuedoc-demo "},Qs={class:"vuedoc-demo__inner"},Vs={class:"vuedoc-demo__preview"},Ys={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Zs=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tooltip-demo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tooltip</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">:delay</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>设置延时关闭<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>\n        这里是提示内容，鼠标可以移动到上面，提示内容不会消失，可实现从这里点击跳转链接等\n       <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n</span></code></pre></div>',1)],sa=f('<h2 id="api" data-source-line="127"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="tooltip-props" data-source-line="129"><a class="markdownIt-Anchor" href="#tooltip-props">#</a> Tooltip Props</h3><table data-source-line="131"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>content</td><td>String</td><td>显示的内容，也可以是slot</td></tr><tr><td>direction</td><td>String</td><td>显示方向。有top-left、top、top-right、left、right、bottom-left、bottom、bottom-right共8个方向，默认top-left</td></tr><tr><td>maxWidth</td><td>Number/500</td><td>最大显示宽</td></tr><tr><td>delay</td><td>Number/0</td><td>延时关闭时间，单位毫秒。主要是为了能让鼠标移到提示文字上面，实现点链接等</td></tr><tr><td>always</td><td>Boolean/false</td><td>是否总是可见</td></tr><tr><td>x</td><td>Number</td><td>弹出窗距离触发点x轴方向的距离，可用于微调距离</td></tr><tr><td>y</td><td>Number</td><td>弹出窗距离触发点y轴方向的距离，可用于微调距离</td></tr><tr><td>transition</td><td>String</td><td>自定义显示隐藏过渡动画名称，需要手动添加相应的css样式</td></tr><tr><td>appendToBody</td><td>Boolean/true</td><td>提示内容是否插入到body</td></tr><tr><td>className</td><td>String</td><td>自定样式类名</td></tr><tr><td>trigger</td><td>String/hover</td><td>事件触发方式，hover/click两种</td></tr></tbody></table><h3 id="tooltip-event" data-source-line="145"><a class="markdownIt-Anchor" href="#tooltip-event">#</a> Tooltip Event</h3><table data-source-line="147"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件，trigger=click时</td></tr></tbody></table>',5);cs.render=function(s,a,n,t,l,p){const o=e("vdpv_0"),r=e("vdpv_1"),g=e("vdpv_2"),j=e("vdpv_3"),u=e("vdpv_4"),v=e("vdpv_5");return c(),h("div",hs,[ds,d("div",is,[d("div",rs,[d("div",gs,[i(o)]),d("div",{style:_({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[d("div",js,us,512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},q(s.vdpv_0Height>0?"hidden":"show"),1)])]),vs,ms,_s,d("div",qs,[d("div",fs,[d("div",ks,[i(r)]),d("div",{style:_({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[d("div",bs,ys,512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},q(s.vdpv_1Height>0?"hidden":"show"),1)])]),ws,xs,Hs,d("div",Cs,[d("div",Is,[d("div",As,[i(g)]),d("div",{style:_({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[d("div",Rs,Os,512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},q(s.vdpv_2Height>0?"hidden":"show"),1)])]),Ps,Ts,d("div",Ss,[d("div",Ns,[d("div",Ws,[i(j)]),d("div",{style:_({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[d("div",Bs,Es,512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},q(s.vdpv_3Height>0?"hidden":"show"),1)])]),Ds,Xs,d("div",Gs,[d("div",Us,[d("div",$s,[i(u)]),d("div",{style:_({height:s.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[d("div",zs,Fs,512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(4))},q(s.vdpv_4Height>0?"hidden":"show"),1)])]),Js,Ks,Ls,d("div",Ms,[d("div",Qs,[d("div",Vs,[i(v)]),d("div",{style:_({height:s.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[d("div",Ys,Zs,512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(5))},q(s.vdpv_5Height>0?"hidden":"show"),1)])]),sa])};export{cs as default};
