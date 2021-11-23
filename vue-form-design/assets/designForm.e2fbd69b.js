var s=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?s(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{Z as l,h as e,t as p,o as r,v as c,_ as u}from"./vendor.b251bce2.js";const h=l({components:{},setup(s){const l=[],r=e({});return((s,l)=>{for(var e in l||(l={}))a.call(l,e)&&o(s,e,l[e]);if(t)for(var e of t(l))n.call(l,e)&&o(s,e,l[e]);return s})({toggleCode:s=>{const t="vdpv_"+s;0===r[t+"Height"]?r[t+"Height"]=(l[s].value?l[s].value.offsetHeight:0)||0:r[t+"Height"]=0}},p(r))}});h.$vd={matter:{},toc:[{content:"designForm 表单",anchor:"designform-表单",level:1},{content:"API",anchor:"api",level:2},{content:"Props",anchor:"props",level:3},{content:"Methods",anchor:"methods",level:3},{content:"Provide",anchor:"provide",level:3},{content:"Slot",anchor:"slot",level:3},{content:"formData",anchor:"formdata",level:3}]};const i=h,d={class:"vuedoc"},q=[u('<h1 id="designform-表单" data-source-line="1"><a class="markdownIt-Anchor" href="#designform-表单">#</a> designForm 表单</h1><h2 id="api" data-source-line="3"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="props" data-source-line="5"><a class="markdownIt-Anchor" href="#props">#</a> Props</h3><table data-source-line="7"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>formData</td><td>object</td><td>设计的表单数据</td></tr><tr><td>type</td><td>number/1</td><td>表单展示模式，1新增；2查看（表单模式） ；3查看； 4设计</td></tr><tr><td>isEdit</td><td>boolean/false</td><td>编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改</td></tr><tr><td>disabled</td><td>boolean/false</td><td>表单禁用模式，类似于表单模式查看</td></tr></tbody></table><h3 id="methods" data-source-line="14"><a class="markdownIt-Anchor" href="#methods">#</a> Methods</h3><table data-source-line="16"><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>表单校验方法</td></tr><tr><td>getValue</td><td>用于获取表单的值</td></tr><tr><td>setValue</td><td>对表单设置初始值</td></tr></tbody></table><h3 id="provide" data-source-line="22"><a class="markdownIt-Anchor" href="#provide">#</a> Provide</h3><table data-source-line="23"><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>DFControlChange</td><td>表单控件值改变事件，返回{key, value}</td></tr></tbody></table><h3 id="slot" data-source-line="27"><a class="markdownIt-Anchor" href="#slot">#</a> Slot</h3><table data-source-line="29"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>-</td></tr></tbody></table><h3 id="formdata" data-source-line="33"><a class="markdownIt-Anchor" href="#formdata">#</a> formData</h3><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>formData = {\n  <span class="hljs-string">&quot;list&quot;</span>: [ <span class="hljs-comment">// 表单数据</span>\n    {\n      <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;input1636607044096&quot;</span>, <span class="hljs-comment">// 表单唯一标识</span>\n      <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>, <span class="hljs-comment">// 表单控件类型</span>\n      <span class="hljs-string">&quot;control&quot;</span>: {}, <span class="hljs-comment">// 当前控件类型的所有`props`参数，详见`element-plus`对应的`props`参数</span>\n      <span class="hljs-string">&quot;slot&quot;</span>: {}, <span class="hljs-comment">// 仅在`type=input`时，前后缀内容</span>\n      <span class="hljs-string">&quot;config&quot;</span>: { <span class="hljs-comment">// 其他一些扩展配置信息</span>\n        <span class="hljs-string">&quot;linkKey&quot;</span>: <span class="hljs-string">&quot;radio&quot;</span>, <span class="hljs-comment">// 联动标识</span>\n        <span class="hljs-string">&quot;linkValue&quot;</span>: <span class="hljs-string">&quot;2&quot;</span>, <span class="hljs-comment">// 联动值，即当表单中`name=linkKey`的控件值为`linkValue`时，当前控件才显示</span>\n        <span class="hljs-string">&quot;editDisabled&quot;</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">// 编辑状态下禁用，即表单部分字段只能添加，不允许编辑时可使用此设置</span>\n      },\n      <span class="hljs-string">&quot;item&quot;</span>: { <span class="hljs-comment">// 组件el-form-item的参数配置</span>\n        <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;单行文本&quot;</span>,\n        <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>\n      },\n      <span class="hljs-string">&quot;rules&quot;</span>: [], <span class="hljs-comment">// 当前控件的校验规则</span>\n      <span class="hljs-string">&quot;customRules&quot;</span>: [], <span class="hljs-comment">// 使用快速方法添加的校验规则，会自动合并到`rules`</span>\n      <span class="hljs-string">&quot;rulesComm&quot;</span>: [] <span class="hljs-comment">// 使用快速选择添加的公共校验规则，会自动合并到`rules`</span>\n    },\n    {\n      <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;checkbox1636687284762&quot;</span>,\n      <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;checkbox&quot;</span>,\n      <span class="hljs-string">&quot;control&quot;</span>: {\n        <span class="hljs-string">&quot;modelValue&quot;</span>: []\n      },\n      <span class="hljs-string">&quot;options&quot;</span>: [], <span class="hljs-comment">// 单选多选下拉的`option`选项数据</span>\n      <span class="hljs-string">&quot;config&quot;</span>: {\n        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;async&quot;</span>, <span class="hljs-comment">// `options`数据来源方式`async`动态选项，`fixed`固定选项</span>\n        <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// 动态选项时 0数据源，1方法函数</span>\n        <span class="hljs-string">&quot;request&quot;</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-comment">// source=0时的数据请求方式</span>\n        <span class="hljs-string">&quot;sourceFun&quot;</span>: <span class="hljs-string">&quot;1&quot;</span> <span class="hljs-comment">// 方法函数名或请求url</span>\n      },\n      <span class="hljs-string">&quot;item&quot;</span>: {\n        <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;多选框组&quot;</span>,\n        <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>\n      },\n      <span class="hljs-string">&quot;rules&quot;</span>: []\n    }\n  ],\n  <span class="hljs-string">&quot;config&quot;</span>: { <span class="hljs-comment">// 表单配置信息</span>\n    <span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,\n    <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,\n    <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;medium&quot;</span>,\n    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1636607042495&quot;</span>,\n    <span class="hljs-string">&quot;rulesComm&quot;</span>: [ <span class="hljs-comment">// 表单公共校验方法</span>\n      {\n        <span class="hljs-string">&quot;key&quot;</span>: <span class="hljs-string">&quot;required&quot;</span>, <span class="hljs-comment">// 必须有唯一标识key，其他选项同校验规则</span>\n        <span class="hljs-string">&quot;message&quot;</span>: <span class="hljs-string">&quot;必填项&quot;</span>,\n        <span class="hljs-string">&quot;trigger&quot;</span>: <span class="hljs-string">&quot;blur&quot;</span>\n      }\n    ]\n  }\n}\n</code></pre>',13)];i.render=function(s,t,a,n,o,l){return r(),c("div",d,q)};export{i as default};
