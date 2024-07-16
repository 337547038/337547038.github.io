var s=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,t,n)=>t in a?s(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,d=(s,a)=>{for(var t in a||(a={}))l.call(a,t)&&p(s,t,a[t]);if(n)for(var t of n(a))e.call(a,t)&&p(s,t,a[t]);return s},c=(s,n)=>a(s,t(n));import{D as o,G as r,a as h,o as i,g as u,w as j,e as v,i as m,d as g,r as _,c as f,b as k,q as y,t as b,U as w}from"./vendor.66660a0e.js";const q={setup(){const s=o({action:"http://localhost/upload/upload.php"});return c(d({},r(s)),{success:(s,a)=>{a(s.data,2)}})}},x=m("图片上传");q.render=function(s,a,t,n,l,e){const p=h("ak-button"),d=h("ak-upload");return i(),u(d,{action:s.action,onSuccess:n.success},{default:j((()=>[v(p,{type:"primary"},{default:j((()=>[x])),_:1})])),_:1},8,["action","onSuccess"])};const H={setup(){const s=o({action:"http://localhost/upload/upload.php"});return c(d({},r(s)),{success:(s,a)=>{a("",2)}})}};H.render=function(s,a,t,n,l,e){const p=h("ak-upload");return i(),u(p,{action:s.action,listType:"picture",multiple:!0,onSuccess:n.success},null,8,["action","onSuccess"])};const R={setup(){const s=o({action:"http://localhost/upload/upload.php"});return c(d({},r(s)),{success:(s,a)=>{a("",2)}})}};R.render=function(s,a,t,n,l,e){const p=h("ak-upload");return i(),u(p,{action:s.action,drag:!0,listType:"picture",multiple:!0,onSuccess:n.success},null,8,["action","onSuccess"])};const I={setup(){const s=o({action:"http://localhost/upload/upload.php"});return d({},r(s))}};I.render=function(s,a,t,n,l,e){const p=h("ak-img-crop");return i(),u(p,{action:s.action},null,8,["action"])};const O=g({components:{vdpv_0:q,vdpv_1:H,vdpv_2:R,vdpv_3:I},setup(s){const a=_(),t=_(),n=_(),l=_(),e=[a,t,n,l],p=o({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return c(d({toggleCode:s=>{const a="vdpv_"+s;0===p[a+"Height"]?p[a+"Height"]=(e[s].value?e[s].value.offsetHeight:0)||0:p[a+"Height"]=0}},r(p)),{vdpv_0Ref:a,vdpv_1Ref:t,vdpv_2Ref:n,vdpv_3Ref:l})}});O.$vd={matter:{},toc:[{content:"Upload 文件上传",anchor:"upload-文件上传",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"图片列表",anchor:"图片列表",level:3},{content:"拖动上传",anchor:"拖动上传",level:3},{content:"裁切上传",anchor:"裁切上传",level:3},{content:"API",anchor:"api",level:2},{content:"Upload Props",anchor:"upload-props",level:3},{content:"Upload Event",anchor:"upload-event",level:3},{content:"Upload Methods",anchor:"upload-methods",level:3},{content:"ImgCrop Props 图片裁切上传",anchor:"imgcrop-props-图片裁切上传",level:3}]};const A=O,C={class:"vuedoc  "},P=w('<h1 id="upload-文件上传" data-source-line="1"><a class="markdownIt-Anchor" href="#upload-文件上传">#</a> Upload 文件上传</h1><h3 id="基本用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><p data-source-line="5">图片上传需要显示上传进度和状态时，需要在上传完成后通过回调事件更新图片地址和状态</p><pre style="display:none;"></pre>',4),S={class:"vuedoc-demo "},U={class:"vuedoc-demo__inner"},B={class:"vuedoc-demo__preview"},T={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},E=[w('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-upload</span>\n    <span class="hljs-attr">:action</span>=<span class="hljs-string">&quot;action&quot;</span>\n    @<span class="hljs-attr">success</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>图片上传<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-upload</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">action</span>: <span class="hljs-string">&#39;http://localhost/upload/upload.php&#39;</span>\n    })\n    <span class="hljs-comment">// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功</span>\n    <span class="hljs-keyword">const</span> success = <span class="hljs-function">(<span class="hljs-params">res, callback</span>) =&gt;</span> {\n      callback(res.data, <span class="hljs-number">2</span>)\n    }\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      success\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],z=k("h3",{id:"图片列表","data-source-line":"37"},[k("a",{class:"markdownIt-Anchor",href:"#图片列表"},"#"),m(" 图片列表")],-1),D=k("pre",{style:{display:"none"}},null,-1),M={class:"vuedoc-demo "},W={class:"vuedoc-demo__inner"},F={class:"vuedoc-demo__preview"},G={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},L=[w('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-upload</span>\n    <span class="hljs-attr">:action</span>=<span class="hljs-string">&quot;action&quot;</span>\n    <span class="hljs-attr">listType</span>=<span class="hljs-string">&quot;picture&quot;</span>\n    <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;true&quot;</span>\n    @<span class="hljs-attr">success</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-upload</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">action</span>: <span class="hljs-string">&#39;http://localhost/upload/upload.php&#39;</span>\n    })\n    <span class="hljs-comment">// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功</span>\n    <span class="hljs-keyword">const</span> success = <span class="hljs-function">(<span class="hljs-params">res, callback</span>) =&gt;</span> {\n      callback(<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-number">2</span>)\n    }\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      success\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],V=k("h3",{id:"拖动上传","data-source-line":"69"},[k("a",{class:"markdownIt-Anchor",href:"#拖动上传"},"#"),m(" 拖动上传")],-1),$=k("pre",{style:{display:"none"}},null,-1),J={class:"vuedoc-demo "},K={class:"vuedoc-demo__inner"},N={class:"vuedoc-demo__preview"},Q={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},X=[w('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-upload</span>\n    <span class="hljs-attr">:action</span>=<span class="hljs-string">&quot;action&quot;</span>\n    <span class="hljs-attr">:drag</span>=<span class="hljs-string">&quot;true&quot;</span>\n    <span class="hljs-attr">listType</span>=<span class="hljs-string">&quot;picture&quot;</span>\n    <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;true&quot;</span>\n    @<span class="hljs-attr">success</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-upload</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">action</span>: <span class="hljs-string">&#39;http://localhost/upload/upload.php&#39;</span>\n    })\n    <span class="hljs-comment">// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功</span>\n    <span class="hljs-keyword">const</span> success = <span class="hljs-function">(<span class="hljs-params">res, callback</span>) =&gt;</span> {\n      callback(<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-number">2</span>)\n    }\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state),\n      success\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],Y=k("h3",{id:"裁切上传","data-source-line":"102"},[k("a",{class:"markdownIt-Anchor",href:"#裁切上传"},"#"),m(" 裁切上传")],-1),Z=k("pre",{style:{display:"none"}},null,-1),ss={class:"vuedoc-demo "},as={class:"vuedoc-demo__inner"},ts={class:"vuedoc-demo__preview"},ns={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ls=[w('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-img-crop</span>\n    <span class="hljs-attr">:action</span>=<span class="hljs-string">&quot;action&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-img-crop</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">action</span>: <span class="hljs-string">&#39;http://localhost/upload/upload.php&#39;</span>\n    })\n    <span class="hljs-keyword">return</span> {\n      ...toRefs(state)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],es=w('<h2 id="api" data-source-line="126"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="upload-props" data-source-line="128"><a class="markdownIt-Anchor" href="#upload-props">#</a> Upload Props</h3><table data-source-line="130"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>modelValue</td><td>Array/Object</td><td>上传的文件，单个文件时为object</td></tr><tr><td>name</td><td>string</td><td>上传的文件字段名</td></tr><tr><td>action</td><td>string</td><td>必选参数，上传的地址</td></tr><tr><td>multiple</td><td>Boolean/false</td><td>是否支持多选文件</td></tr><tr><td>accept</td><td>string</td><td>h5原生属性，接受上传的文件类型，即打开上传框时默认选择的类型</td></tr><tr><td>data</td><td>Object</td><td>上传时附带的额外参数</td></tr><tr><td>headers</td><td>Object</td><td>设置上传的请求头部</td></tr><tr><td>format</td><td>string</td><td>支持的文件后缀类型，多个用豆号隔开</td></tr><tr><td>maxSize</td><td>number</td><td>最大上传限制kb</td></tr><tr><td>timeout</td><td>number</td><td>指定请求超时的毫秒数</td></tr><tr><td>auto</td><td>Boolean/true</td><td>是否自动上传文件</td></tr><tr><td>drag</td><td>Boolean/false</td><td>允许拖动上传</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁止上传状态</td></tr><tr><td>limit</td><td>number</td><td>允许上传的最大数量</td></tr><tr><td>showFileList</td><td>Boolean/true</td><td>是否显示已上传文件列表</td></tr><tr><td>listType</td><td>string/text</td><td>文件列表展示类型text/picture</td></tr></tbody></table><h3 id="upload-event" data-source-line="149"><a class="markdownIt-Anchor" href="#upload-event">#</a> Upload Event</h3><table data-source-line="151"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选择上传文件时触发的事件</td></tr><tr><td>error</td><td>上传错误事件</td></tr><tr><td>success</td><td>上传成功事件</td></tr><tr><td>remove</td><td>移除上传文件事件</td></tr></tbody></table><h3 id="upload-methods" data-source-line="158"><a class="markdownIt-Anchor" href="#upload-methods">#</a> Upload Methods</h3><table data-source-line="160"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>cancelRequest</td><td>取消上传方法</td></tr><tr><td>upload</td><td>手动上传方法</td></tr></tbody></table><h3 id="imgcrop-props-图片裁切上传" data-source-line="165"><a class="markdownIt-Anchor" href="#imgcrop-props-图片裁切上传">#</a> ImgCrop Props 图片裁切上传</h3><table data-source-line="167"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>boxWidth</td><td>number</td><td>裁切画布的宽</td></tr><tr><td>boxHeight</td><td>number</td><td>裁切画布的高</td></tr><tr><td>imgWidth</td><td>number</td><td>裁切图片的宽</td></tr><tr><td>imgHeight</td><td>number</td><td>裁切图片的高</td></tr><tr><td>fixedScale</td><td>Boolean/true</td><td>约束比例</td></tr><tr><td>maxSize</td><td>number</td><td>最大上传限制kb</td></tr><tr><td>name</td><td>string</td><td>上传的文件字段名</td></tr><tr><td>data</td><td>Object</td><td>上传时附带的额外参数</td></tr><tr><td>headers</td><td>Object</td><td>设置上传的请求头部</td></tr><tr><td>action</td><td>string</td><td>必选参数，上传的地址</td></tr><tr><td>timeout</td><td>number</td><td>指定请求超时的毫秒数</td></tr><tr><td>text</td><td>array</td><td>文案</td></tr></tbody></table>',9);A.render=function(s,a,t,n,l,e){const p=h("vdpv_0"),d=h("vdpv_1"),c=h("vdpv_2"),o=h("vdpv_3");return i(),f("div",C,[P,k("div",S,[k("div",U,[k("div",B,[v(p)]),k("div",{style:y({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[k("div",T,E,512)],4),k("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},b(s.vdpv_0Height>0?"hidden":"show"),1)])]),z,D,k("div",M,[k("div",W,[k("div",F,[v(d)]),k("div",{style:y({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[k("div",G,L,512)],4),k("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},b(s.vdpv_1Height>0?"hidden":"show"),1)])]),V,$,k("div",J,[k("div",K,[k("div",N,[v(c)]),k("div",{style:y({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[k("div",Q,X,512)],4),k("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},b(s.vdpv_2Height>0?"hidden":"show"),1)])]),Y,Z,k("div",ss,[k("div",as,[k("div",ts,[v(o)]),k("div",{style:y({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[k("div",ns,ls,512)],4),k("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},b(s.vdpv_3Height>0?"hidden":"show"),1)])]),es])};export{A as default};