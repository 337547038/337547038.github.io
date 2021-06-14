var t=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(a,s,e)=>s in a?t(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;import{a as l,o as r,c as p,b as d,F as h,d as i,r as v,v as u,z as g,t as b,H as m}from"./vendor.1eabd6cc.js";const k={},j=d("div",{style:{height:"1500px"}},"滚动页面试试",-1);k.render=function(t,a,s,e,n,o){const c=l("ak-backTop");return r(),p(h,null,[j,d(c)],64)};const f=i({components:{vdpv_0:k},setup(t){const l=v(),r=[l],p=u({vdpv_0Height:0});return d=((t,a)=>{for(var s in a||(a={}))n.call(a,s)&&c(t,s,a[s]);if(e)for(var s of e(a))o.call(a,s)&&c(t,s,a[s]);return t})({toggleCode:t=>{const a="vdpv_"+t;0===p[a+"Height"]?p[a+"Height"]=(r[t].value?r[t].value.offsetHeight:0)||0:p[a+"Height"]=0}},g(p)),a(d,s({vdpv_0Ref:l}));var d}});f.$vd={matter:{},toc:[{content:"BackTop 返回顶部",anchor:"backtop-返回顶部",level:1},{content:"用法",anchor:"用法",level:3},{content:"API",anchor:"api",level:2},{content:"BackTop Props",anchor:"backtop-props",level:3},{content:"BackTop Event",anchor:"backtop-event",level:3}]};const _=f,y={class:"vuedoc  "},w=m('<h1 id="backtop-返回顶部" data-source-line="2"><a class="markdownIt-Anchor" href="#backtop-返回顶部">#</a> BackTop 返回顶部</h1><h3 id="用法" data-source-line="3"><a class="markdownIt-Anchor" href="#用法">#</a> 用法</h3><pre style="display:none;"></pre>',3),T={class:"vuedoc-demo "},O={class:"vuedoc-demo__inner"},P={class:"vuedoc-demo__preview"},H={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},I=m('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:1500px&quot;</span>&gt;</span>滚动页面试试<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-backTop</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-backTop</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n</span><span class="xml">\n<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),x=m('<h2 id="api" data-source-line="13"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="backtop-props" data-source-line="14"><a class="markdownIt-Anchor" href="#backtop-props">#</a> BackTop Props</h3><table data-source-line="15"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>height</td><td>Number/200</td><td>页面滚动高度达到该值时才显示BackTop组件</td></tr><tr><td>bottom</td><td>Number/30</td><td>组件距离底部的距离</td></tr><tr><td>right</td><td>Number/30</td><td>组件距离右部的距离</td></tr><tr><td>text</td><td>String</td><td>显示文本</td></tr></tbody></table><h3 id="backtop-event" data-source-line="22"><a class="markdownIt-Anchor" href="#backtop-event">#</a> BackTop Event</h3><table data-source-line="23"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>-</td></tr></tbody></table>',5);_.render=function(t,a,s,e,n,o){const c=l("vdpv_0");return r(),p("div",y,[w,d("div",T,[d("div",O,[d("div",P,[d(c)]),d("div",{style:{height:t.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[d("div",H,[I],512)],4),d("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>t.toggleCode(0))},b(t.vdpv_0Height>0?"hidden":"show"),1)])]),x])};export default _;