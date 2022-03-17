var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,d=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o,r=(e,l)=>{for(var a in l||(l={}))t.call(l,a)&&d(e,a,l[a]);if(o)for(var a of o(l))n.call(l,a)&&d(e,a,l[a]);return e},u=(e,o)=>l(e,a(o));import{_ as i,a as c,b as s}from"./vueFile.04af69c5.js";import{D as m,j as p,l as f,t as b,r as g,o as h,v as V,F as D,x as y,h as v,y as C,u as k,a as _,w,G as U,c as x,s as O,A as L,N,n as H,K as M,L as j,E as A,S,O as R,B as E}from"./vendor.9002cfef.js";import{_ as T}from"./index.baec608b.js";import{a as q,b as F,s as P}from"./index.58059b64.js";import{o as z,l as B,s as K}from"./index.2c01d712.js";const $=[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],I={type:"fixed",source:0,request:"get",sourceFun:""};var J=[{title:"基础字段",children:[{type:"input",label:"单行文本",icon:"input",control:{modelValue:""},slot:{},config:{}},{type:"textarea",label:"多行文本",icon:"textarea",control:{modelValue:""},config:{}},{type:"radio",label:"单选框组",icon:"radio",control:{modelValue:""},options:$,config:I},{type:"checkbox",label:"多选框组",icon:"checkbox",control:{modelValue:[]},options:$,config:I},{type:"select",label:"下拉选择框",icon:"select",control:{modelValue:[],appendToBody:!0},options:$,config:I},{type:"datePicker",label:"日期选择器",icon:"date",control:{modelValue:"",type:"date"},config:{}},{type:"switch",label:"开关",icon:"switch",control:{modelValue:!1},config:{}},{type:"number",label:"计数器",icon:"number",control:{modelValue:""},config:{}},{type:"cascader",label:"级联选择器",icon:"cascader",control:{modelValue:[]},options:[],config:I},{type:"txt",label:"文字",icon:"text",control:{modelValue:""},config:{}},{type:"title",label:"标题",icon:"title",control:{modelValue:"标题"},config:{}}]},{title:"高级字段",children:[{type:"table",label:"子表",icon:"table",list:[],tableData:[],control:{border:!0},config:{}},{type:"component",label:"自定义组件",icon:"component",control:{modelValue:""},config:{},template:"",component:""},{type:"upload",label:"图片",icon:"image",control:{modelValue:[]},config:{}}]},{title:"布局字段",children:[{type:"grid",label:"格栅布局",icon:"grid",columns:[{attr:{span:12},list:[]},{attr:{span:12},list:[]}],control:{},config:{}},{type:"tabs",label:"标签页",icon:"tabs",columns:[{label:"Tab1",list:[]}],control:{},config:{}},{type:"card",label:"卡片布局",icon:"card",list:[],control:{},config:{},item:{}}]}];const W={name:"formControl",props:{formData:Object,searchData:Object,searchDesign:Boolean},components:{Draggable:m},setup(e){const l=p({selectValue:[]}),a=f((()=>e.searchDesign?J.slice(0,1):J)),o=f((()=>{const l=[];return n(e.formData,l),l})),t=["txt","title","table","component","upload"],n=(e,l)=>{e.forEach((e=>{"grid"===e.type||"tabs"===e.type?e.columns.forEach((e=>{n(e.list,l)})):"card"===e.type?n(e.list,l):-1===t.indexOf(e.type)&&l.push(e)}))};return u(r({controlList:a,selectChange:(l,a)=>{if(a){const a=JSON.parse(JSON.stringify(l));a.rules=[],a.customRules=[],e.searchData.list.push(a)}else e.searchData.list.forEach(((a,o)=>{a.name===l.name&&e.searchData.list.splice(o,1)}))},getCheckbox:l=>{let a=!1;return e.searchData.list.forEach((e=>{e.name===l&&(a=!0)})),a}},b(l)),{formDataList:o})}},G={class:"components-list"},Q={class:"title"},X={key:0},Y=v("div",{class:"title"},"已有表单字段",-1),Z={class:"content"};W.render=function(e,l,a,o,t,n){const d=g("draggable"),r=g("el-checkbox");return h(),V("div",G,[(h(!0),V(D,null,y(o.controlList,((e,l)=>(h(),V("div",{key:l},[v("div",Q,k(e.title),1),_(d,{itemKey:"key123",tag:"ul",modelValue:e.children,"onUpdate:modelValue":l=>e.children=l,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1},{item:w((({element:e})=>[v("li",{class:U([e.type])},[v("i",{class:U(`icon-${e.icon}`)},null,2),v("span",null,k(e.label),1)],2)])),_:2},1032,["modelValue","onUpdate:modelValue"])])))),128)),a.searchDesign?(h(),V("div",X,[Y,v("div",Z,[(h(!0),V(D,null,y(o.formDataList,(e=>(h(),x(r,{key:e.name,checked:o.getCheckbox(e.name),onChange:l=>o.selectChange(e,l)},{default:w((()=>[O(k(e.item.label),1)])),_:2},1032,["checked","onChange"])))),128))])])):C("",!0)])};const ee={name:"formControlAttr",components:{},props:{formConfig:Object,linkageValue:Object},emits:["openDialog"],setup(e,{emit:l}){const a=L(),o=N(),t=o.query.formName,n=p({formAttr:[{label:"表单名称",value:"name"},{label:"表单标签宽度",value:"labelWidth"},{label:"表单样式名称",value:"class"},{label:"组件尺寸",value:"size",type:"select",options:[{label:"default",value:""},{label:"medium",value:"medium"},{label:"small",value:"small"},{label:"mini",value:"mini"}]}],dataSourceList:[],customRulesList:[{type:"required",label:"必填"},{type:"mobile",label:"手机号码"},{type:"tel",label:"固话"},{type:"phone",label:"固话或手机"},{type:"email",label:"邮箱"},{type:"int",label:"正整数"},{type:"number",label:"数字"},{type:"card",label:"身份证"},{type:"rules",label:"自定义正则"},{type:"methods",label:"自定义方法"}],searchDesign:"search"===o.query.type});t&&q(t).then((e=>{200===e.data.code&&(n.dataSourceList=e.data.data),n.loading=!1})).catch((e=>{console.log(e)}));const d=f((()=>a.state.form.controlAttr)),i=()=>{let e=d.value.control;"cascader"===d.value.type&&(e=d.value.options),l("openDialog",e,(e=>{"cascader"===d.value.type?d.value.options=e:(d.value.control={},Object.assign(d.value.control,e))}))},c=f((()=>{const e=d.value&&d.value.list;return!!(e&&e.length>0)&&"index"===e[0].typeColumn})),s=f((()=>{const e=d.value&&d.value.list;return!!(e&&e.length>0)&&"operate"===e[e.length-1].typeColumn})),m=f((()=>{const e=d.value&&d.value.rules;return e&&e.length>0}));return u(r({},b(n)),{controlData:d,delSelectOption:(e,l)=>{"tabs"===l?d.value.columns.splice(e,1):d.value.options.splice(e,1)},addSelectOption:e=>{"cascader"===d.value.type?i():"tabs"===e?d.value.columns.push({label:"标签名称",list:[]}):d.value.options.push({label:"",value:""})},openAttrDialog:i,selectMultipleChange:e=>{d.value.control.modelValue=e?[]:""},requiredChange:e=>{e?d.value.rules.push({required:!0,message:"必填项",trigger:"change"}):d.value.rules.splice(0,1)},addRules:()=>{l("openDialog",d.value.rules,(e=>{Object.assign(d.value.rules,e)}))},dataSourceChange:e=>{const l=n.dataSourceList.find((l=>l.COLUMN_NAME===e));d.value.item.label=l.COLUMN_COMMENT||l.COLUMN_NAME},showHide:(e,l)=>{if(e&&0===e.length||0===Object.keys(d.value).length)return!1;const a=e.indexOf(d.value.type);return l?-1!==a:-1===a},tableColumnAdd:(e,l)=>{const a={name:"",type:"tableColumn",typeColumn:l?"operate":"index",item:{label:l?"操作":"序号"},control:{type:l?"":"index"},config:{}};e?l?d.value.list.push(a):d.value.list.unshift(a):l?d.value.list.splice(d.value.list.length-1,1):d.value.list.splice(0,1)},columnIndex:c,columnOperate:s,checkboxRequired:m,addRulesFast:()=>{d.value.customRules&&d.value.customRules.push({type:"required",message:"",trigger:"blur"})},delAddRules:e=>{d.value.customRules&&d.value.customRules.splice(e,1)},rulesCommClick:()=>{l("openDialog",e.formConfig.rulesComm,(l=>{Object.assign(e.formConfig.rulesComm,l)}))}})}},le={class:"sidebar-tools"},ae=v("h3",null,"通用属性",-1),oe={key:7},te=O("="),ne=O("序号列"),de=O("操作列"),re=v("h3",null,"标签配置项",-1),ue=["onClick"],ie=O("增加标签"),ce={key:17},se=v("h3",null,"选项配置",-1),me={key:0},pe=["onClick"],fe=O("新增"),be=O("数据源"),ge=O("方法函数"),he=v("h3",null,"校验设置",-1),Ve={key:0},De=O("快速添加"),ye=O("编辑校验规则"),ve=O("必填 "),Ce={key:20},ke=v("h3",null,"其他属性",-1),_e=O("添加属性"),we=O("编辑全局校验规则");ee.render=function(e,l,a,o,t,n){const d=g("el-input"),r=g("el-form-item"),u=g("el-option"),i=g("el-select"),c=g("el-switch"),s=g("el-checkbox"),m=g("el-col"),p=g("el-button"),f=g("el-tab-pane"),b=g("el-radio"),k=g("el-radio-group"),U=g("el-tabs"),O=g("el-form");return h(),V("div",le,[_(U,{modelValue:"first"},{default:w((()=>[_(f,{label:"字段属性",name:"first"},{default:w((()=>[_(O,{size:"mini",class:"form"},{default:w((()=>[ae,_(r,{label:"自定义Class"},{default:w((()=>[_(d,{modelValue:o.controlData.className,"onUpdate:modelValue":l[0]||(l[0]=e=>o.controlData.className=e),placeholder:"样式类名"},null,8,["modelValue"])])),_:1}),o.showHide(["grid","tabs","card","title","gridChild","tableColumn"])?(h(),x(r,{key:0,label:"字段标识"},{default:w((()=>[e.dataSourceList&&e.dataSourceList.length>0?(h(),x(i,{key:0,modelValue:o.controlData.name,"onUpdate:modelValue":l[1]||(l[1]=e=>o.controlData.name=e),onChange:o.dataSourceChange},{default:w((()=>[(h(!0),V(D,null,y(e.dataSourceList,(e=>(h(),x(u,{key:e.COLUMN_NAME,label:`${e.COLUMN_COMMENT||e.COLUMN_NAME}(${e.COLUMN_NAME})`,value:e.COLUMN_NAME},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])):(h(),x(d,{key:1,modelValue:o.controlData.name,"onUpdate:modelValue":l[2]||(l[2]=e=>o.controlData.name=e),placeholder:"字段唯一标识，对应数据库"},null,8,["modelValue"]))])),_:1})):C("",!0),o.showHide(["table","grid","tabs","title","gridChild"])?(h(),V(D,{key:1},[_(r,{label:"显示标题"},{default:w((()=>[_(d,{modelValue:o.controlData.item.label,"onUpdate:modelValue":l[3]||(l[3]=e=>o.controlData.item.label=e),placeholder:"显示的label标签名称"},null,8,["modelValue"])])),_:1}),o.showHide(["card"])?(h(),x(r,{key:0,label:"隐藏标签"},{default:w((()=>[_(c,{modelValue:o.controlData.item.showLabel,"onUpdate:modelValue":l[4]||(l[4]=e=>o.controlData.item.showLabel=e)},null,8,["modelValue"])])),_:1})):C("",!0),_(r,{label:"帮助信息"},{default:w((()=>[_(d,{modelValue:o.controlData.config.help,"onUpdate:modelValue":l[5]||(l[5]=e=>o.controlData.config.help=e)},null,8,["modelValue"])])),_:1})],64)):C("",!0),o.showHide(["table","grid","gridChild"])?(h(),x(r,{key:2,label:"表单栅格"},{default:w((()=>[_(d,{modelValue:o.controlData.config.span,"onUpdate:modelValue":l[6]||(l[6]=e=>o.controlData.config.span=e),placeholder:"表单区域栅格宽"},null,8,["modelValue"])])),_:1})):C("",!0),o.showHide(["input","textarea","select","date","number"],!0)?(h(),x(r,{key:3,label:"占位内容"},{default:w((()=>[_(d,{modelValue:o.controlData.control.placeholder,"onUpdate:modelValue":l[7]||(l[7]=e=>o.controlData.control.placeholder=e),placeholder:"placeholder"},null,8,["modelValue"])])),_:1})):C("",!0),o.showHide(["txt"],!0)?(h(),x(r,{key:4,label:"默认值"},{default:w((()=>[_(d,{modelValue:o.controlData.control.modelValue,"onUpdate:modelValue":l[8]||(l[8]=e=>o.controlData.control.modelValue=e),placeholder:"支持html",type:"textarea"},null,8,["modelValue"])])),_:1})):C("",!0),o.showHide(["input","password"],!0)?(h(),x(r,{key:5,label:"设为密码"},{default:w((()=>[_(i,{modelValue:o.controlData.type,"onUpdate:modelValue":l[9]||(l[9]=e=>o.controlData.type=e)},{default:w((()=>[_(u,{value:"input",label:"文本"}),_(u,{value:"password",label:"密码"})])),_:1},8,["modelValue"])])),_:1})):C("",!0),o.showHide(["textarea"],!0)?(h(),x(r,{key:6,label:"文本域高度"},{default:w((()=>[_(d,{modelValue:o.controlData.control.rows,"onUpdate:modelValue":l[10]||(l[10]=e=>o.controlData.control.rows=e),placeholder:"输入框行数"},null,8,["modelValue"])])),_:1})):C("",!0),o.showHide(["input"],!0)?(h(),V("div",oe,[_(r,{label:"前缀"},{default:w((()=>[_(d,{modelValue:o.controlData.slot.prepend,"onUpdate:modelValue":l[11]||(l[11]=e=>o.controlData.slot.prepend=e)},null,8,["modelValue"])])),_:1}),_(r,{label:"后缀"},{default:w((()=>[_(d,{modelValue:o.controlData.slot.append,"onUpdate:modelValue":l[12]||(l[12]=e=>o.controlData.slot.append=e)},null,8,["modelValue"])])),_:1})])):C("",!0),o.showHide(["input","textarea","radio","checkbox","select","date","switch","number","cascader","upload"],!0)?(h(),x(r,{key:8,label:"操作属性"},{default:w((()=>[o.showHide(["select"],!0)?(h(),x(s,{key:0,modelValue:o.controlData.control.multiple,"onUpdate:modelValue":l[13]||(l[13]=e=>o.controlData.control.multiple=e),label:"多选",onChange:o.selectMultipleChange},null,8,["modelValue","onChange"])):C("",!0),o.showHide(["input","textarea","radio","checkbox","select","date","switch","number","cascader","upload"],!0)?(h(),x(s,{key:1,modelValue:o.controlData.control.disabled,"onUpdate:modelValue":l[14]||(l[14]=e=>o.controlData.control.disabled=e),label:"禁用"},null,8,["modelValue"])):C("",!0),_(s,{modelValue:o.controlData.config.editDisabled,"onUpdate:modelValue":l[15]||(l[15]=e=>o.controlData.config.editDisabled=e),label:"禁用编辑"},null,8,["modelValue"])])),_:1})):C("",!0),o.showHide(["input","textarea","radio","checkbox","select","date","switch","number","cascader"],!0)?(h(),x(r,{key:9,label:"联动条件"},{default:w((()=>[_(m,{span:9},{default:w((()=>[_(d,{placeholder:"标识名称",modelValue:o.controlData.config.linkKey,"onUpdate:modelValue":l[16]||(l[16]=e=>o.controlData.config.linkKey=e)},null,8,["modelValue"])])),_:1}),_(m,{span:2,offset:1},{default:w((()=>[te])),_:1}),_(m,{span:9,offset:1},{default:w((()=>[_(d,{placeholder:"关联值",modelValue:o.controlData.config.linkValue,"onUpdate:modelValue":l[17]||(l[17]=e=>o.controlData.config.linkValue=e)},null,8,["modelValue"])])),_:1})])),_:1})):C("",!0),o.showHide(["grid"],!0)?(h(),V(D,{key:10},[],64)):C("",!0),o.showHide(["card"],!0)?(h(),V(D,{key:11},[],64)):C("",!0),o.showHide(["title"],!0)?(h(),x(r,{key:12,label:"标题"},{default:w((()=>[_(d,{modelValue:o.controlData.control.modelValue,"onUpdate:modelValue":l[18]||(l[18]=e=>o.controlData.control.modelValue=e)},null,8,["modelValue"])])),_:1})):C("",!0),o.showHide(["gridChild"],!0)?(h(),V(D,{key:13},[_(r,{label:"栅格占据的列数"},{default:w((()=>[_(d,{modelValue:o.controlData.attr.span,"onUpdate:modelValue":l[19]||(l[19]=e=>o.controlData.attr.span=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),_(r,{label:"栅格左侧的间隔格数"},{default:w((()=>[_(d,{modelValue:o.controlData.attr.offset,"onUpdate:modelValue":l[20]||(l[20]=e=>o.controlData.attr.offset=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),_(r,{label:"栅格向右移动格数"},{default:w((()=>[_(d,{modelValue:o.controlData.attr.push,"onUpdate:modelValue":l[21]||(l[21]=e=>o.controlData.attr.push=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),_(r,{label:"栅格向左移动格数"},{default:w((()=>[_(d,{modelValue:o.controlData.attr.pull,"onUpdate:modelValue":l[22]||(l[22]=e=>o.controlData.attr.pull=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1})],64)):C("",!0),o.showHide(["table"],!0)?(h(),x(r,{key:14,label:"添加列"},{default:w((()=>[_(s,{onChange:l[23]||(l[23]=e=>o.tableColumnAdd(e)),modelValue:o.columnIndex,"onUpdate:modelValue":l[24]||(l[24]=e=>o.columnIndex=e)},{default:w((()=>[ne])),_:1},8,["modelValue"]),_(s,{onChange:l[25]||(l[25]=e=>o.tableColumnAdd(e,1)),modelValue:o.columnOperate,"onUpdate:modelValue":l[26]||(l[26]=e=>o.columnOperate=e)},{default:w((()=>[de])),_:1},8,["modelValue"])])),_:1})):C("",!0),o.showHide(["tabs"],!0)?(h(),V(D,{key:15},[re,(h(!0),V(D,null,y(o.controlData.columns,((e,l)=>(h(),x(r,{key:e.label},{default:w((()=>[_(m,{span:12},{default:w((()=>[_(d,{placeholder:"标签配置项",modelValue:e.label,"onUpdate:modelValue":l=>e.label=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),_(m,{span:2,offset:1},{default:w((()=>[v("i",{class:"icon-del",onClick:e=>o.delSelectOption(l,"tabs")},null,8,ue)])),_:2},1024)])),_:2},1024)))),128)),_(r,null,{default:w((()=>[_(p,{onClick:l[27]||(l[27]=e=>o.addSelectOption("tabs"))},{default:w((()=>[ie])),_:1})])),_:1})],64)):C("",!0),o.showHide(["component"],!0)?(h(),x(r,{key:16,label:"组件名"},{default:w((()=>[_(d,{modelValue:o.controlData.template,"onUpdate:modelValue":l[28]||(l[28]=e=>o.controlData.template=e),placeholder:"import进来的组件名称"},null,8,["modelValue"])])),_:1})):C("",!0),o.showHide(["radio","select","checkbox","cascader"],!0)?(h(),V("div",ce,[se,_(U,{modelValue:o.controlData.config.type,"onUpdate:modelValue":l[32]||(l[32]=e=>o.controlData.config.type=e)},{default:w((()=>[_(f,{label:"固定选项",name:"fixed"},{default:w((()=>["cascader"!==o.controlData.type?(h(),V("div",me,[(h(!0),V(D,null,y(o.controlData.options,((e,l)=>(h(),x(r,{key:l},{default:w((()=>[_(m,{span:10},{default:w((()=>[_(d,{placeholder:"选项标签",modelValue:e.label,"onUpdate:modelValue":l=>e.label=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),_(m,{span:10,offset:1},{default:w((()=>[_(d,{placeholder:"选项值",modelValue:e.value,"onUpdate:modelValue":l=>e.value=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),_(m,{span:2,offset:1},{default:w((()=>[v("i",{class:"icon-del",onClick:e=>o.delSelectOption(l)},null,8,pe)])),_:2},1024)])),_:2},1024)))),128))])):C("",!0),_(r,null,{default:w((()=>[_(p,{onClick:o.addSelectOption},{default:w((()=>[fe])),_:1},8,["onClick"])])),_:1})])),_:1}),_(f,{label:"动态选项",name:"async"},{default:w((()=>[_(k,{modelValue:o.controlData.config.source,"onUpdate:modelValue":l[29]||(l[29]=e=>o.controlData.config.source=e)},{default:w((()=>[_(b,{label:0},{default:w((()=>[be])),_:1}),_(b,{label:1},{default:w((()=>[ge])),_:1})])),_:1},8,["modelValue"]),_(r,null,{default:w((()=>[_(d,{modelValue:o.controlData.config.sourceFun,"onUpdate:modelValue":l[31]||(l[31]=e=>o.controlData.config.sourceFun=e),placeholder:o.controlData.config.source?"方法函数名":"数据源接口URL"},H({_:2},[o.controlData.config.source?void 0:{name:"prepend",fn:w((()=>[_(i,{modelValue:o.controlData.config.request,"onUpdate:modelValue":l[30]||(l[30]=e=>o.controlData.config.request=e),style:{width:"80px"}},{default:w((()=>[_(u,{label:"get",value:"get"}),_(u,{label:"post",value:"post"})])),_:1},8,["modelValue"])]))}]),1032,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])):C("",!0),o.showHide(["upload"],!0)?(h(),V(D,{key:18},[_(r,{label:"上传地址"},{default:w((()=>[_(d,{modelValue:o.controlData.control.action,"onUpdate:modelValue":l[33]||(l[33]=e=>o.controlData.control.action=e),placeholder:"图片上传地址"},null,8,["modelValue"])])),_:1}),_(r,{label:"文件字段名"},{default:w((()=>[_(d,{modelValue:o.controlData.control.name,"onUpdate:modelValue":l[34]||(l[34]=e=>o.controlData.control.name=e),placeholder:"上传的文件字段名"},null,8,["modelValue"])])),_:1}),_(r,{label:"列表类型"},{default:w((()=>[_(i,{modelValue:o.controlData.control.listType,"onUpdate:modelValue":l[35]||(l[35]=e=>o.controlData.control.listType=e)},{default:w((()=>[_(u,{value:"text"}),_(u,{value:"picture"}),_(u,{value:"picture-card"})])),_:1},8,["modelValue"])])),_:1}),_(r,{label:"提示文字"},{default:w((()=>[_(d,{modelValue:o.controlData.config.tip,"onUpdate:modelValue":l[36]||(l[36]=e=>o.controlData.config.tip=e),placeholder:"提示说明文字"},null,8,["modelValue"])])),_:1}),_(r,{label:"按钮文本"},{default:w((()=>[_(d,{modelValue:o.controlData.config.btnText,"onUpdate:modelValue":l[37]||(l[37]=e=>o.controlData.config.btnText=e),placeholder:"上传按钮文本"},null,8,["modelValue"])])),_:1})],64)):C("",!0),o.showHide(["txt","title","table","grid","tabs","card","switch","gridChild","tableColumn"])&&!e.searchDesign?(h(),V(D,{key:19},[he,o.showHide(["input","password","component"],!0)?(h(),V("div",Ve,[a.formConfig.rulesComm&&a.formConfig.rulesComm.length>0?(h(),x(r,{key:0},{default:w((()=>[_(i,{placeholder:"快速选择",multiple:!0,modelValue:o.controlData.rulesComm,"onUpdate:modelValue":l[38]||(l[38]=e=>o.controlData.rulesComm=e)},{default:w((()=>[(h(!0),V(D,null,y(a.formConfig.rulesComm,(e=>(h(),x(u,{label:e.message,value:e.key,key:e.key},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})):C("",!0),(h(!0),V(D,null,y(o.controlData.customRules,((l,a)=>(h(),x(r,{key:l.type},{default:w((()=>[_(d,{modelValue:l.message,"onUpdate:modelValue":e=>l.message=e,placeholder:"校验提示信息"},{prepend:w((()=>[_(i,{modelValue:l.type,"onUpdate:modelValue":e=>l.type=e,style:{width:"80px"}},{default:w((()=>[(h(!0),V(D,null,y(e.customRulesList,(e=>(h(),x(u,{key:e.type,label:e.label,value:e.type},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),append:w((()=>[_(p,{icon:"icon-del",onClick:e=>o.delAddRules(a)},null,8,["onClick"])])),_:2},1032,["modelValue","onUpdate:modelValue"]),"rules"===l.type?(h(),x(d,{key:0,placeholder:"正则表达式",modelValue:l.rules,"onUpdate:modelValue":e=>l.rules=e},null,8,["modelValue","onUpdate:modelValue"])):C("",!0),"methods"===l.type?(h(),x(d,{key:1,placeholder:"方法名称",modelValue:l.methods,"onUpdate:modelValue":e=>l.methods=e},null,8,["modelValue","onUpdate:modelValue"])):C("",!0)])),_:2},1024)))),128)),_(r,null,{default:w((()=>[_(p,{onClick:o.addRulesFast},{default:w((()=>[De])),_:1},8,["onClick"]),_(p,{onClick:o.addRules},{default:w((()=>[ye])),_:1},8,["onClick"])])),_:1})])):(h(),x(r,{key:1},{default:w((()=>[_(s,{modelValue:o.checkboxRequired,onChange:o.requiredChange},{default:w((()=>[ve])),_:1},8,["modelValue","onChange"]),o.controlData.rules&&o.controlData.rules[0]?(h(),x(d,{key:0,placeholder:"自定义必填错误提示",modelValue:o.controlData.rules[0].message,"onUpdate:modelValue":l[39]||(l[39]=e=>o.controlData.rules[0].message=e)},null,8,["modelValue"])):C("",!0)])),_:1}))],64)):C("",!0),o.showHide(["grid","card","gridChild"])?(h(),V("div",Ce,[ke,_(p,{size:"mini",onClick:o.openAttrDialog},{default:w((()=>[_e])),_:1},8,["onClick"])])):C("",!0)])),_:1})])),_:1}),_(f,{label:"表单属性",name:"second"},{default:w((()=>[_(O,{size:"mini",class:"form"},{default:w((()=>[(h(!0),V(D,null,y(e.formAttr,((e,l)=>(h(),x(r,{label:e.label,key:l},{default:w((()=>["select"===e.type?(h(),x(i,{key:0,modelValue:a.formConfig[e.value],"onUpdate:modelValue":l=>a.formConfig[e.value]=l},{default:w((()=>[(h(!0),V(D,null,y(e.options,(e=>(h(),x(u,{label:e.label,key:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])):(h(),x(d,{key:1,modelValue:a.formConfig[e.value],"onUpdate:modelValue":l=>a.formConfig[e.value]=l,placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"]))])),_:2},1032,["label"])))),128)),_(r,null,{default:w((()=>[_(p,{onClick:o.rulesCommClick},{default:w((()=>[we])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])};const Ue={name:"designIndex",components:{headTools:i,formControl:W,formDesign:T,formControlAttr:ee,vueFile:c},setup(e,{emit:l}){const a=L(),o=N().query,t=p({formData:{list:[],config:{labelWidth:"",class:"",size:"medium",name:"form"+(new Date).getTime(),rulesComm:[]}},visibleDialog:!1,sourceDialog:"",editor:{},loading:!1,drawerDirection:"rtl",formDataPreview:{},previewVisible:!1,searchDesign:"search"===o.type,formDataList:[]}),n=M(),d=o.id,i=o.formName;if(d&&(t.loading=!0,F(d).then((e=>{if(200===e.data.code)if(t.searchDesign){const l=e.data.data[0].searchData;t.formData=l?z(l):[],t.formDataList=z(e.data.data[0].formData).list}else t.formData=z(e.data.data[0].formData);t.loading=!1})).catch((e=>{console.log(e),t.loading=!1}))),!d&&!i){const e=B();e&&(t.searchDesign?(e.searchData&&(t.formData=e.searchData),e.formData&&(t.formDataList=e.formData.list)):e.formData&&(t.formData=e.formData))}const c=()=>{const e=z(t.formData),l=t.searchDesign?"searchData":"formData";if(i){let a={formData:e,id:o.id,formName:t.formData.config.name,dataTableName:i};t.searchDesign&&(a={searchData:e,id:o.id}),t.loading=!0,P(a).then((e=>{200===e.data.code?A({message:"保存成功！",type:"success"}):A.error(e.data.message),t.loading=!1})).catch((e=>{B(l,t.formData),A.info("请求异常，数据已暂存在localStorage"),t.loading=!1}))}else B(l,t.formData),A.info("数据已暂存在localStorage");a.commit("setActiveKey",""),a.commit("setControlAttr",{})},m=(e,l)=>{t.drawerDirection=l?"ltr":"rtl",t.sourceDialog=l,t.visibleDialog=!0;const a=z(e,!0);S((()=>{t.editor=s(a)}))},f=()=>{t.visibleDialog=!1,t.sourceDialog=""},g=M();return j((()=>{0!==Object.keys(t.editor).length&&(t.editor.destroy(),t.editor.container.remove())})),u(r({},b(t)),{headToolClick:e=>{switch(t.sourceDialog="",e){case"del":t.formData.list=[],t.formData.config.rulesComm=[],a.commit("setActiveKey",""),a.commit("setControlAttr",{});break;case"eye":let e=z(t.formData);const l=t.formData.config.name,o=new RegExp(`get${l}ControlByName`,"g");e=e.replace(o,`getPreview${l}ControlByName`),t.formDataPreview=K(e),t.formDataPreview.config.name=`Preview${l}`,t.previewVisible=!0;break;case"json":m(t.formData);break;case"save":c();break;case"vue":n.value.open(t.formData);break;case"import":m({})}},dialogConfirm:()=>{try{const e=K(t.editor.getValue());t.sourceDialog?t.sourceDialog(e):t.formData=e,t.visibleDialog=!1}catch(e){A.error(e.message)}},dialogOpen:m,drawerBeforeClose:e=>{f(),e()},dialogCancel:f,vueFileEl:n,previewForm:g,previewSubmit:()=>{g.value.validate((e=>{if(!e)return alert("校验不通过"),!1;alert("校验通过")}))}})}},xe={class:"container"},Oe={class:"main-body"},Le={key:0,class:"empty-tips"},Ne={class:"main-form"},He={key:0,id:"editJson"},Me={class:"dialog-footer"},je=O(" 确定 "),Ae={class:"dialog-footer"},Se=O(" 提交 "),Re=O(" 取消 ");Ue.render=function(e,l,a,o,t,n){const d=g("formControl"),r=g("headTools"),u=g("form-design"),i=g("form-control-attr"),c=g("el-button"),s=g("el-drawer"),m=g("vue-File"),p=g("el-dialog"),f=R("loading");return h(),V("div",xe,[_(d,{formData:e.formDataList,searchData:e.formData,searchDesign:e.searchDesign},null,8,["formData","searchData","searchDesign"]),v("div",Oe,[_(r,{onClick:o.headToolClick},null,8,["onClick"]),0===e.formData.list.length?(h(),V("div",Le," 从左侧拖拽来添加字段 ")):C("",!0),E(v("div",Ne,[_(u,{"form-data":e.formData,type:4},null,8,["form-data"])],512),[[f,e.loading]])]),_(i,{formConfig:e.formData.config,onOpenDialog:o.dialogOpen},null,8,["formConfig","onOpenDialog"]),_(s,{modelValue:e.visibleDialog,"onUpdate:modelValue":l[0]||(l[0]=l=>e.visibleDialog=l),size:"60%",direction:e.drawerDirection,"custom-class":"json-dialog","append-to-body":!0,"before-close":o.drawerBeforeClose},{default:w((()=>[e.visibleDialog?(h(),V("div",He)):C("",!0),v("div",Me,[_(c,{type:"primary",size:"small",onClick:o.dialogConfirm},{default:w((()=>[je])),_:1},8,["onClick"])])])),_:1},8,["modelValue","direction","before-close"]),e.searchDesign?C("",!0):(h(),x(m,{key:0,ref:"vueFileEl"},null,512)),_(p,{modelValue:e.previewVisible,"onUpdate:modelValue":l[2]||(l[2]=l=>e.previewVisible=l),title:"预览",fullscreen:!0},{footer:w((()=>[v("div",Ae,[_(c,{size:"small",type:"primary",onClick:o.previewSubmit},{default:w((()=>[Se])),_:1},8,["onClick"]),_(c,{size:"small",onClick:l[1]||(l[1]=l=>e.previewVisible=!1)},{default:w((()=>[Re])),_:1})])])),default:w((()=>[_(u,{"form-data":e.formDataPreview,type:1,ref:"previewForm"},null,8,["form-data"])])),_:1},8,["modelValue"])])};export{Ue as default};
