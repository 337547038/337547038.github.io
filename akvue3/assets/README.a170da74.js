var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{a as c,o as d,c as o,e as h,w as r,i as g,d as u,r as v,D as j,G as i,b as m,q as _,t as b,U as f}from"./vendor.6ab3fc58.js";const k={},q=g("评论"),w=g("回复");k.render=function(s,a){const n=c("ak-button"),l=c("ak-badge");return d(),o("div",null,[h(l,{value:12},{default:r((()=>[h(n,null,{default:r((()=>[q])),_:1})])),_:1}),h(l,{value:2},{default:r((()=>[h(n,null,{default:r((()=>[w])),_:1})])),_:1})])};const y={methods:{click(s){console.log(s)}}},x=g("回复"),H=g(" 回复 ");y.render=function(s,a,n,l,t,e){const p=c("ak-button"),g=c("ak-badge");return d(),o("div",null,[h(g,{value:220,max:99},{default:r((()=>[h(p,null,{default:r((()=>[x])),_:1})])),_:1}),h(g,{value:220,max:9},{default:r((()=>[H])),_:1})])};const I={methods:{click(s){console.log(s)}}},A=g("回复"),C=g(" 评论 ");I.render=function(s,a,n,l,t,e){const p=c("ak-button"),g=c("ak-badge");return d(),o("div",null,[h(g,{value:220,dot:!0},{default:r((()=>[h(p,null,{default:r((()=>[A])),_:1})])),_:1}),h(g,{value:220,dot:!0},{default:r((()=>[C])),_:1})])};const O={methods:{click(s){console.log(s)}}},R=g("回复"),P=g(" 回复 ");O.render=function(s,a,n,l,t,e){const p=c("ak-button"),g=c("ak-badge");return d(),o("div",null,[h(g,{value:"hot",dot:!0},{default:r((()=>[h(p,null,{default:r((()=>[R])),_:1})])),_:1}),h(g,{value:"new",dot:!0},{default:r((()=>[P])),_:1})])};const B=u({components:{vdpv_0:k,vdpv_1:y,vdpv_2:I,vdpv_3:O},setup(s){const c=v(),d=v(),o=v(),h=v(),r=[c,d,o,h],g=j({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return u=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))e.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===g[a+"Height"]?g[a+"Height"]=(r[s].value?r[s].value.offsetHeight:0)||0:g[a+"Height"]=0}},i(g)),a(u,n({vdpv_0Ref:c,vdpv_1Ref:d,vdpv_2Ref:o,vdpv_3Ref:h}));var u}});B.$vd={matter:{},toc:[{content:"Badge 标记",anchor:"badge-标记",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"最大值",anchor:"最大值",level:3},{content:"小圆点",anchor:"小圆点",level:3},{content:"自定义内容",anchor:"自定义内容",level:3},{content:"API",anchor:"api",level:2},{content:"Badge",anchor:"badge",level:3}]};const N=B,D={class:"vuedoc  "},S=f('<h1 id="badge-标记" data-source-line="1"><a class="markdownIt-Anchor" href="#badge-标记">#</a> Badge 标记</h1><h3 id="基础用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),E={class:"vuedoc-demo "},G={class:"vuedoc-demo__inner"},U={class:"vuedoc-demo__preview"},$={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},z=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>评论<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>回复<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],F=m("h3",{id:"最大值","data-source-line":"18"},[m("a",{class:"markdownIt-Anchor",href:"#最大值"},"#"),g(" 最大值")],-1),J=m("p",{"data-source-line":"20"},"可自定义最大值，当value为Number时",-1),K=m("pre",{style:{display:"none"}},null,-1),L={class:"vuedoc-demo "},M={class:"vuedoc-demo__inner"},Q={class:"vuedoc-demo__preview"},T={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},V=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;99&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>回复<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>\n        回复\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span> \n   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">methods</span>:{\n    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params">name</span>)</span>{\n      <span class="hljs-built_in">console</span>.log(name)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],W=m("h3",{id:"小圆点","data-source-line":"44"},[m("a",{class:"markdownIt-Anchor",href:"#小圆点"},"#"),g(" 小圆点")],-1),X=m("p",{"data-source-line":"46"},"以红点的形式标注需要关注的内容",-1),Y=m("pre",{style:{display:"none"}},null,-1),Z={class:"vuedoc-demo "},ss={class:"vuedoc-demo__inner"},as={class:"vuedoc-demo__preview"},ns={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ls=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:dot</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>回复<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span> \n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:dot</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n        评论\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span> \n   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">methods</span>:{\n    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params">name</span>)</span>{\n      <span class="hljs-built_in">console</span>.log(name)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],ts=m("h3",{id:"自定义内容","data-source-line":"70"},[m("a",{class:"markdownIt-Anchor",href:"#自定义内容"},"#"),g(" 自定义内容")],-1),es=m("p",{"data-source-line":"72"},"自定义显示内容",-1),ps=m("pre",{style:{display:"none"}},null,-1),cs={class:"vuedoc-demo "},ds={class:"vuedoc-demo__inner"},os={class:"vuedoc-demo__preview"},hs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},rs=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;hot&quot;</span> <span class="hljs-attr">:dot</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>回复<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;new&quot;</span> <span class="hljs-attr">:dot</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n        回复\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>  \n   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">methods</span>:{\n    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params">name</span>)</span>{\n      <span class="hljs-built_in">console</span>.log(name)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],gs=f('<h2 id="api" data-source-line="96"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="badge" data-source-line="98"><a class="markdownIt-Anchor" href="#badge">#</a> Badge</h3><table data-source-line="100"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td>String/Number</td><td>显示值</td></tr><tr><td>max</td><td>Number</td><td>最大值，value为Number有效</td></tr><tr><td>dot</td><td>boolean/false</td><td>显示小圆点</td></tr></tbody></table>',3);N.render=function(s,a,n,l,t,e){const p=c("vdpv_0"),r=c("vdpv_1"),g=c("vdpv_2"),u=c("vdpv_3");return d(),o("div",D,[S,m("div",E,[m("div",G,[m("div",U,[h(p)]),m("div",{style:_({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[m("div",$,z,512)],4),m("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},b(s.vdpv_0Height>0?"hidden":"show"),1)])]),F,J,K,m("div",L,[m("div",M,[m("div",Q,[h(r)]),m("div",{style:_({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[m("div",T,V,512)],4),m("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},b(s.vdpv_1Height>0?"hidden":"show"),1)])]),W,X,Y,m("div",Z,[m("div",ss,[m("div",as,[h(g)]),m("div",{style:_({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[m("div",ns,ls,512)],4),m("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},b(s.vdpv_2Height>0?"hidden":"show"),1)])]),ts,es,ps,m("div",cs,[m("div",ds,[m("div",os,[h(u)]),m("div",{style:_({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[m("div",hs,rs,512)],4),m("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},b(s.vdpv_3Height>0?"hidden":"show"),1)])]),gs])};export{N as default};
