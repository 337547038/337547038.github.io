var s=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,l,n)=>l in a?s(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n;import{r as c,a as o,o as d,c as r,b as h,t as u,e as j,L as i,d as v,D as g,G as m,q as _,U as b,i as f}from"./vendor.6ab3fc58.js";var y=[{value:"广东",label:"广东",children:[{value:"广州",label:"广州",children:[{value:"天河",label:"天河"},{value:"白云",label:"白云"},{value:"越秀",label:"越秀"},{value:"海珠",label:"海珠"}]},{value:"深圳",label:"深圳",children:[{value:"罗湖区",label:"罗湖区"},{value:"宝安区",label:"宝安区"},{value:"南山区",label:"南山区"},{value:"龙岗区",label:"龙岗区"},{value:"盐田区",label:"盐田区"}]},{value:"东莞",label:"东莞",children:[{value:"长安",label:"长安"},{value:"虎门",label:"虎门"},{value:"茶山",label:"茶山"}]},{label:"禁用测试",disabled:!0,value:"1",children:[{label:"禁用测试2",value:"2"}]}]},{value:"北京",label:"北京",children:[{value:"西城区",label:"西城区"},{value:"崇文区",label:"崇文区"},{value:"宣武区",label:"宣武区"},{value:"朝阳区",label:"朝阳区"},{value:"丰台区",label:"丰台区"},{value:"海淀区",label:"海淀区"}]},{value:"上海",label:"上海",children:[{value:"黄浦区",label:"黄浦区"},{value:"卢湾区",label:"卢湾区"},{value:"徐汇区",label:"徐汇区"},{value:"广州1",label:"广州"}]}];const q={setup(s){const a=c([]);return(s,l)=>{const n=o("ak-cascader");return d(),r("div",null,[h("p",null,"当前值："+u(a.value),1),j(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),placeholder:"请选择",options:i(y)},null,8,["modelValue","options"])])}}},k={setup(s){const a=c(["广东,广州,白云"]);return(s,l)=>{const n=o("ak-cascader");return d(),r("div",null,[h("p",null,"当前值："+u(a.value),1),j(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),placeholder:"请选择",options:i(y)},null,8,["modelValue","options"])])}}},w={setup(s){const a=c(["广东,广州,白云"]);return(s,l)=>{const n=o("ak-cascader");return d(),r("div",null,[h("p",null,"当前值："+u(a.value),1),j(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),placeholder:"请选择",options:i(y)},null,8,["modelValue","options"])])}}},V={setup(s){const a=c(["广东,广州,白云"]);return(s,l)=>{const n=o("ak-cascader");return d(),r("div",null,[h("p",null,"当前值："+u(a.value),1),j(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),placeholder:"请选择",options:i(y),clear:!0},null,8,["modelValue","options"])])}}},C=h("p",null,"使用`collapseTags`折叠多选项",-1),H={setup(s){const a=c(["广东,广州,白云","上海,黄蒲区"]);return(s,l)=>{const n=o("ak-cascader");return d(),r("div",null,[j(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),placeholder:"请选择",options:i(y),multiple:!0},null,8,["modelValue","options"]),C,j(n,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=s=>a.value=s),placeholder:"请选择",options:i(y),multiple:!0,collapseTags:""},null,8,["modelValue","options"])])}}},A=h("p",null,"单选可搜索",-1),z=h("p",null,"多选可搜索",-1),x={setup(s){const a=c(["广东,广州,白云"]);return(s,l)=>{const n=o("ak-cascader");return d(),r("div",null,[A,j(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),placeholder:"请选择",options:i(y),filterable:""},null,8,["modelValue","options"]),z,j(n,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=s=>a.value=s),placeholder:"请选择",options:i(y),filterable:"",multiple:""},null,8,["modelValue","options"])])}}},I=h("br",null,null,-1),R=h("br",null,null,-1),U=h("br",null,null,-1),O=h("br",null,null,-1),T=h("br",null,null,-1),L=h("br",null,null,-1),P=h("p",null,"可搜索异步加载",-1),S={setup(s){const a=c(["广东,广州,白云"]),l=c([]),n=c([]),t=c([]),e=(s,a)=>{setTimeout((()=>{let l=[];s||(l=[{value:"广东",label:"广东",children:[]},{value:"北京",label:"北京",children:[]},{value:"上海",label:"上海"}]),s&&"广东"===s.value&&(l=[{value:"广州",label:"广州"},{value:"深圳",label:"深圳"}]),s&&"广州"===s.value&&(l=[{value:"天河",label:"天河"},{value:"白云",label:"白云"}]),a(l)}),1e3)},p=s=>{s&&(t.value=[{value:"广东",label:"广东",children:[{value:"深圳",label:"深圳"}]}])};return(s,c)=>{const i=o("ak-cascader");return d(),r("div",null,[h("p",null,"当前值："+u(a.value),1),j(i,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=s=>a.value=s),placeholder:"请选择",lazy:"","lazy-load":e,onSearchChange:p},null,8,["modelValue"]),I,R,U,h("p",null,"当前值："+u(l.value),1),j(i,{modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=s=>l.value=s),placeholder:"请选择（没有初始值）",lazy:"","lazy-load":e},null,8,["modelValue"]),O,T,L,P,h("p",null,"当前值："+u(n.value),1),j(i,{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=s=>n.value=s),placeholder:"请选择",lazy:"","lazy-load":e,options:t.value,filterable:"",onSearchChange:p},null,8,["modelValue","options"])])}}},E=h("br",null,null,-1),D=h("br",null,null,-1),B=h("br",null,null,-1),G=h("br",null,null,-1),K=h("br",null,null,-1),$=h("br",null,null,-1),F=h("br",null,null,-1),J=h("br",null,null,-1),M=h("br",null,null,-1),N=v({components:{vdpv_0:q,vdpv_1:k,vdpv_2:w,vdpv_3:V,vdpv_4:H,vdpv_5:x,vdpv_6:S,vdpv_7:{setup(s){const a=c(["广东,广州,白云"]),l=c([]),n=c(["广东,广州,白云","广东,深圳"]),t=c([]);return(s,e)=>{const p=o("ak-cascader");return d(),r("div",null,[h("p",null,"当前值："+u(a.value),1),j(p,{checkAny:"",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=s=>a.value=s),placeholder:"请选择",options:i(y)},null,8,["modelValue","options"]),E,D,B,h("p",null,"当前值："+u(l.value),1),j(p,{checkAny:"",modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=s=>l.value=s),placeholder:"请选择",options:i(y)},null,8,["modelValue","options"]),G,K,$,h("p",null,"当前值："+u(n.value),1),j(p,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=s=>n.value=s),placeholder:"请选择",multiple:"",options:i(y),checkAny:""},null,8,["modelValue","options"]),F,J,M,h("p",null,"当前值："+u(t.value),1),j(p,{modelValue:t.value,"onUpdate:modelValue":e[3]||(e[3]=s=>t.value=s),placeholder:"请选择",multiple:"",options:i(y),checkAny:""},null,8,["modelValue","options"])])}}}},setup(s){const o=c(),d=c(),r=c(),h=c(),u=c(),j=c(),i=c(),v=c(),_=[o,d,r,h,u,j,i,v],b=g({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0});return f=((s,a)=>{for(var l in a||(a={}))t.call(a,l)&&p(s,l,a[l]);if(n)for(var l of n(a))e.call(a,l)&&p(s,l,a[l]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===b[a+"Height"]?b[a+"Height"]=(_[s].value?_[s].value.offsetHeight:0)||0:b[a+"Height"]=0}},m(b)),a(f,l({vdpv_0Ref:o,vdpv_1Ref:d,vdpv_2Ref:r,vdpv_3Ref:h,vdpv_4Ref:u,vdpv_5Ref:j,vdpv_6Ref:i,vdpv_7Ref:v}));var f}});N.$vd={matter:{},toc:[{content:"Cascader 级联选择器",anchor:"cascader-级联选择器",level:1},{content:"基础用法",anchor:"基础用法",level:3},{content:"默认初始值",anchor:"默认初始值",level:3},{content:"禁用选项",anchor:"禁用选项",level:3},{content:"可清空",anchor:"可清空",level:3},{content:"多选",anchor:"多选",level:3},{content:"可搜索",anchor:"可搜索",level:3},{content:"异步加载",anchor:"异步加载",level:3},{content:"选择任意项",anchor:"选择任意项",level:3},{content:"API",anchor:"api",level:2},{content:"Cascader",anchor:"cascader",level:3},{content:"Cascader Event",anchor:"cascader-event",level:3},{content:"Cascader Options",anchor:"cascader-options",level:3}]};const Q=N,W={class:"vuedoc  "},X=b('<h1 id="cascader-级联选择器" data-source-line="3"><a class="markdownIt-Anchor" href="#cascader-级联选择器">#</a> Cascader 级联选择器</h1><h3 id="基础用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h3><pre style="display:none;"></pre>',3),Y={class:"vuedoc-demo "},Z={class:"vuedoc-demo__inner"},ss={class:"vuedoc-demo__preview"},as={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ls=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>\n<span class="hljs-keyword">const</span> value1 = ref([])\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],ns=h("h3",{id:"默认初始值","data-source-line":"21"},[h("a",{class:"markdownIt-Anchor",href:"#默认初始值"},"#"),f(" 默认初始值")],-1),ts=h("pre",{style:{display:"none"}},null,-1),es={class:"vuedoc-demo "},ps={class:"vuedoc-demo__inner"},cs={class:"vuedoc-demo__preview"},os={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ds=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>\n<span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&quot;广东,广州,白云&quot;</span>])\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],rs=h("h3",{id:"禁用选项","data-source-line":"37"},[h("a",{class:"markdownIt-Anchor",href:"#禁用选项"},"#"),f(" 禁用选项")],-1),hs=h("p",{"data-source-line":"39"},[f("通过在数据源中设置 "),h("code",null,"disabled"),f(" 字段来声明该选项是禁用的")],-1),us=h("pre",{style:{display:"none"}},null,-1),js={class:"vuedoc-demo "},is={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},gs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ms=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>\n<span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&quot;广东,广州,白云&quot;</span>])\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],_s=h("h3",{id:"可清空","data-source-line":"55"},[h("a",{class:"markdownIt-Anchor",href:"#可清空"},"#"),f(" 可清空")],-1),bs=h("p",{"data-source-line":"57"},[f("通过在数据源中设置 "),h("code",null,"disabled"),f(" 字段来声明该选项是禁用的")],-1),fs=h("pre",{style:{display:"none"}},null,-1),ys={class:"vuedoc-demo "},qs={class:"vuedoc-demo__inner"},ks={class:"vuedoc-demo__preview"},ws={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Vs=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">:clear</span>=<span class="hljs-string">&quot;true&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>\n<span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&quot;广东,广州,白云&quot;</span>])\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],Cs=h("h3",{id:"多选","data-source-line":"73"},[h("a",{class:"markdownIt-Anchor",href:"#多选"},"#"),f(" 多选")],-1),Hs=h("p",{"data-source-line":"75"},[f("通过在数据源中设置 "),h("code",null,"disabled"),f(" 字段来声明该选项是禁用的")],-1),As=h("pre",{style:{display:"none"}},null,-1),zs={class:"vuedoc-demo "},xs={class:"vuedoc-demo__inner"},Is={class:"vuedoc-demo__preview"},Rs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Us=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;true&quot;</span>/&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>使用`collapseTags`折叠多选项<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">collapseTags</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>\n<span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&quot;广东,广州,白云&quot;</span>,<span class="hljs-string">&quot;上海,黄蒲区&quot;</span>])\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],Os=h("h3",{id:"可搜索","data-source-line":"92"},[h("a",{class:"markdownIt-Anchor",href:"#可搜索"},"#"),f(" 可搜索")],-1),Ts=h("p",{"data-source-line":"94"},[f("开启"),h("code",null,"filterable"),f("可以快捷地搜索选项并选择")],-1),Ls=h("pre",{style:{display:"none"}},null,-1),Ps={class:"vuedoc-demo "},Ss={class:"vuedoc-demo__inner"},Es={class:"vuedoc-demo__preview"},Ds={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Bs=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>单选可搜索<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">filterable</span>/&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>多选可搜索<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">filterable</span> <span class="hljs-attr">multiple</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>\n<span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&quot;广东,广州,白云&quot;</span>])\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],Gs=b('<h3 id="异步加载" data-source-line="112"><a class="markdownIt-Anchor" href="#异步加载">#</a> 异步加载</h3><p data-source-line="114">通过<code>lazy</code>开启异步加载，并通过<code>lazyload</code>来设置加载数据源的方法。 <code>lazyload</code>方法有两个参数，第一个参数<code>node</code>为当前点击的节点，第二个<code>resolve</code>为数据加载完成的回调(必须调用)</p><pre style="display:none;"></pre>',3),Ks={class:"vuedoc-demo "},$s={class:"vuedoc-demo__inner"},Fs={class:"vuedoc-demo__preview"},Js={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ms=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>\n      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>\n      <span class="hljs-attr">lazy</span>\n      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span>\n      @<span class="hljs-attr">searchChange</span>=<span class="hljs-string">&quot;searchChange&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value2 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择（没有初始值）&quot;</span> <span class="hljs-attr">lazy</span> <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>可搜索异步加载<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value3 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>\n      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>\n      <span class="hljs-attr">lazy</span>\n      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;lazyLoad&quot;</span>\n      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n      <span class="hljs-attr">filterable</span>\n      @<span class="hljs-attr">searchChange</span>=<span class="hljs-string">&quot;searchChange&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>])\n<span class="hljs-keyword">const</span> value2 = ref([])\n<span class="hljs-keyword">const</span> value3 = ref([])\n<span class="hljs-keyword">const</span> options = ref([])\n<span class="hljs-keyword">const</span> lazyLoad = <span class="hljs-function">(<span class="hljs-params">obj, resolve</span>) =&gt;</span> {\n  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">let</span> temp = []\n    <span class="hljs-keyword">if</span> (!obj) {\n      <span class="hljs-comment">// 加载第一级</span>\n      temp = [\n        {\n          <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;广东&#39;</span>,\n          <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;广东&#39;</span>,\n          <span class="hljs-attr">children</span>: []\n        },\n        {\n          <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n          <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n          <span class="hljs-attr">children</span>: []\n        },\n        {\n          <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;上海&#39;</span>,\n          <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;上海&#39;</span>\n        }\n      ]\n      <span class="hljs-comment">//resolve(temp)</span>\n    }\n    <span class="hljs-keyword">if</span> (obj &amp;&amp; obj.value === <span class="hljs-string">&#39;广东&#39;</span>) {\n      temp = [\n        {\n          <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;广州&#39;</span>,\n          <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;广州&#39;</span>\n        },\n        {\n          <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;深圳&#39;</span>,\n          <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;深圳&#39;</span>\n        }\n      ]\n    }\n    <span class="hljs-keyword">if</span> (obj &amp;&amp; obj.value === <span class="hljs-string">&#39;广州&#39;</span>) {\n      temp = [\n        {\n          <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;天河&#39;</span>,\n          <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;天河&#39;</span>\n        },\n        {\n          <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;白云&#39;</span>,\n          <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;白云&#39;</span>\n        }\n      ]\n    }\n    resolve(temp)\n  }, <span class="hljs-number">1000</span>)\n}\n<span class="hljs-keyword">const</span> searchChange = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n  <span class="hljs-comment">// console.log(&#39;12&#39;)</span>\n  <span class="hljs-keyword">if</span> (val) {\n    options.value = [\n      {\n        <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;广东&#39;</span>,\n        <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;广东&#39;</span>,\n        <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-string">&#39;value&#39;</span>: <span class="hljs-string">&#39;深圳&#39;</span>,\n            <span class="hljs-string">&#39;label&#39;</span>: <span class="hljs-string">&#39;深圳&#39;</span>\n          }\n        ]\n      }\n    ]\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n\n</span></code></pre></div>',1)],Ns=h("h3",{id:"选择任意项","data-source-line":"221"},[h("a",{class:"markdownIt-Anchor",href:"#选择任意项"},"#"),f(" 选择任意项")],-1),Qs=h("p",{"data-source-line":"223"},[f("使用"),h("code",null,"checkAny"),f("可选择任意项")],-1),Ws=h("pre",{style:{display:"none"}},null,-1),Xs={class:"vuedoc-demo "},Ys={class:"vuedoc-demo__inner"},Zs={class:"vuedoc-demo__preview"},sa={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},aa=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>\n      <span class="hljs-attr">checkAny</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>\n      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>\n      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value2 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span>\n      <span class="hljs-attr">checkAny</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>\n      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>\n      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value3 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">checkAny</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前值：{{ value4 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">checkAny</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> options <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./demo.json&#39;</span>\n\n<span class="hljs-keyword">const</span> value1 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>])\n<span class="hljs-keyword">const</span> value2 = ref([])\n<span class="hljs-keyword">const</span> value3 = ref([<span class="hljs-string">&#39;广东,广州,白云&#39;</span>, <span class="hljs-string">&#39;广东,深圳&#39;</span>])\n<span class="hljs-keyword">const</span> value4 = ref([])\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],la=b('<h2 id="api" data-source-line="261"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="cascader" data-source-line="263"><a class="markdownIt-Anchor" href="#cascader">#</a> Cascader</h3><table data-source-line="265"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>array</td><td>显示的值</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>multiple</td><td>boolean/false</td><td>多选模式</td></tr><tr><td>collapseTags</td><td>boolean/false</td><td>多选模式下是否折叠Tag</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>filterable</td><td>boolean/false</td><td>是否可搜索选项</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0默认　1向下　2向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon图标</td></tr><tr><td>options</td><td>object</td><td>下拉面板选项数据</td></tr><tr><td>optionsKey</td><td>object</td><td>指定选择数据的<code>label</code>和<code>value</code>属于，默认{label:‘label’,value:‘value’}</td></tr><tr><td>showAllLevels</td><td>boolean/true</td><td>定义了是否显示完整的路径，将其赋值为<code>false</code>则仅显示最后一级</td></tr><tr><td>lazy</td><td>boolean/false</td><td>是否动态加载子节点，需与 <code>lazyLoad</code> 方法结合使用</td></tr><tr><td>lazyLoad</td><td>function</td><td>加载动态数据的方法，仅在 <code>lazy</code> 为 <code>true</code> 时有效,function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)</td></tr><tr><td>checkAny</td><td>boolean/false</td><td>启用该功能后，选择任意一级选项。</td></tr><tr><td>emptyText</td><td>string</td><td>无下拉数据提示文案</td></tr></tbody></table><h3 id="cascader-event" data-source-line="290"><a class="markdownIt-Anchor" href="#cascader-event">#</a> Cascader Event</h3><table data-source-line="292"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选择事件</td></tr><tr><td>input</td><td>可搜索时输入框改变事件</td></tr><tr><td>blur</td><td>可搜索时输入框焦点事件</td></tr><tr><td>focus</td><td>可搜索时输入框获得焦点事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>delete</td><td>删除单个选项,多选时有效</td></tr></tbody></table><h3 id="cascader-options" data-source-line="301"><a class="markdownIt-Anchor" href="#cascader-options">#</a> Cascader Options</h3><table data-source-line="303"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>选项名称</td></tr><tr><td>value</td><td>String/number</td><td>选项对应的值，应唯一</td></tr><tr><td>disabled</td><td>boolean</td><td>禁用当前项</td></tr><tr><td>children</td><td>Array</td><td>子级数据，见自定义数据格式</td></tr></tbody></table>',7);Q.render=function(s,a,l,n,t,e){const p=o("vdpv_0"),c=o("vdpv_1"),i=o("vdpv_2"),v=o("vdpv_3"),g=o("vdpv_4"),m=o("vdpv_5"),b=o("vdpv_6"),f=o("vdpv_7");return d(),r("div",W,[X,h("div",Y,[h("div",Z,[h("div",ss,[j(p)]),h("div",{style:_({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[h("div",as,ls,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},u(s.vdpv_0Height>0?"hidden":"show"),1)])]),ns,ts,h("div",es,[h("div",ps,[h("div",cs,[j(c)]),h("div",{style:_({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[h("div",os,ds,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},u(s.vdpv_1Height>0?"hidden":"show"),1)])]),rs,hs,us,h("div",js,[h("div",is,[h("div",vs,[j(i)]),h("div",{style:_({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[h("div",gs,ms,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},u(s.vdpv_2Height>0?"hidden":"show"),1)])]),_s,bs,fs,h("div",ys,[h("div",qs,[h("div",ks,[j(v)]),h("div",{style:_({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[h("div",ws,Vs,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},u(s.vdpv_3Height>0?"hidden":"show"),1)])]),Cs,Hs,As,h("div",zs,[h("div",xs,[h("div",Is,[j(g)]),h("div",{style:_({height:s.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[h("div",Rs,Us,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(4))},u(s.vdpv_4Height>0?"hidden":"show"),1)])]),Os,Ts,Ls,h("div",Ps,[h("div",Ss,[h("div",Es,[j(m)]),h("div",{style:_({height:s.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[h("div",Ds,Bs,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(5))},u(s.vdpv_5Height>0?"hidden":"show"),1)])]),Gs,h("div",Ks,[h("div",$s,[h("div",Fs,[j(b)]),h("div",{style:_({height:s.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[h("div",Js,Ms,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=a=>s.toggleCode(6))},u(s.vdpv_6Height>0?"hidden":"show"),1)])]),Ns,Qs,Ws,h("div",Xs,[h("div",Ys,[h("div",Zs,[j(f)]),h("div",{style:_({height:s.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[h("div",sa,aa,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=a=>s.toggleCode(7))},u(s.vdpv_7Height>0?"hidden":"show"),1)])]),la])};export{Q as default};