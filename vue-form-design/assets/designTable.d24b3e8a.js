var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as i,a as r,l as d,b as c}from"./vueFile.81285961.js";import{b,s as p}from"./index.4462bcd9.js";import{M as u,W as m,K as f,h,l as g,S as y,R as v,t as k,E as D,r as x,N as C,B as _,v as O,u as I,F as V,a as j,w,y as E,n as F,X as S,o as L,x as q,c as G,m as J,q as N,s as T,O as z}from"./vendor.b251bce2.js";import"./index.00aab0cf.js";const P={name:"list",props:{},components:{headTools:i,vueFile:r},setup(){const e=u(),{ctx:i}=m(),r=f(),x=h({filedList:[],otherFiled:[{label:"勾选",prop:"__selection",type:"selection"},{label:"序号",prop:"__index",type:"index"},{label:"操作",prop:"__control"}],checkboxGroup:[],tableData:{config:{},columns:[]},editor:{},visibleDialog:!1,loading:!1,queryId:e.query.id,selectCheck:"",editIndex:"",dataList:[{}]}),C=["txt","title","table","component","upload"],_=e=>{e.list.forEach((e=>{"grid"===e.type||"tabs"===e.type?e.columns.forEach((e=>{_(e)})):"card"===e.type?_(e):-1===C.indexOf(e.type)&&x.filedList.push({prop:e.name,label:e.item.label,help:e.config.help})}))},O=e=>{x.visibleDialog=!0;const a=JSON.stringify(e,null,2);y((()=>{x.editor=c(a)}))},I=()=>{if(!x.queryId)return d("tableData",x.tableData),void D.info("数据已暂存在localStorage");x.loading=!0;const e={tableData:JSON.stringify(x.tableData),id:x.queryId};p(e).then((e=>{200===e.data.code?D({message:"保存成功！",type:"success"}):D.error(e.data.message),x.loading=!1})).catch((e=>{D.error("保存异常"),x.loading=!1}))};if(x.queryId)b(x.queryId).then((e=>{200===e.data.code&&(_(JSON.parse(e.data.data[0].formData)),x.tableData=JSON.parse(e.data.data[0].tableData),x.tableData.columns.forEach((e=>{x.checkboxGroup.push(e.label)})))}));else{const e=d();e&&(e.tableData&&(x.tableData=e.tableData),e.formData&&(console.log(e.formData),_(e.formData)))}return g((()=>{y((()=>{(()=>{const e=i.$el.querySelector(".el-table__header-wrapper tr");S.create(e,{animation:180,delay:0,onEnd:e=>{const a=x.tableData.columns[e.oldIndex];x.tableData.columns.splice(e.oldIndex,1),x.tableData.columns.splice(e.newIndex,0,a)}})})()}))})),v((()=>{0!==Object.keys(x.editor).length&&(x.editor.destroy(),x.editor.container.remove())})),V=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&n(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&n(e,l,a[l]);return e})({headToolClick:e=>{switch(e){case"del":x.tableData.columns=[],x.checkboxGroup=[];break;case"json":O(x.tableData);break;case"vue":r.value.openTable(x.tableData);break;case"import":O({});break;case"save":I()}},checkChange:e=>{-1===x.checkboxGroup.indexOf(e.label)?x.tableData.columns.forEach(((a,l)=>{a.label===e.label&&a.prop===e.prop&&x.tableData.columns.splice(l,1)})):x.tableData.columns.push(e)}},k(x)),a(V,l({dialogConfirm:()=>{""!==x.editIndex?(x.tableData.columns[x.editIndex]=JSON.parse(x.editor.getValue()),x.editIndex=""):x.tableData=JSON.parse(x.editor.getValue()),x.visibleDialog=!1},drawerBeforeClose:e=>{x.editIndex="",e()},vueFileEl:r,editOtherField:()=>{O(x.tableData)},selectChange:e=>{let a={};x.tableData.columns.forEach(((l,t)=>{l.prop===e&&(a=l,x.editIndex=t)})),O(a)}}));var V}},U={class:"container design-table"},B={class:"components-list"},M=I("div",{class:"title"},"可选字段",-1),H={class:"content"},K=I("div",{class:"title"},"其他字段",-1),R={class:"content"},W={class:"title"},X=N("编辑自定义字段"),$={class:"main-body"},A={class:"main-form main-table"},Q=I("p",{style:{padding:"10px 0"}},"点击表头可拖动改变顺序",-1),Y=["innerHTML"],Z=I("i",{class:"icon-help"},null,-1),ee={key:1},ae={key:2},le={class:"sidebar-tools"},te=N(" 请使用生成脚本预览功能，编辑config属性 "),oe={key:0,id:"editJson"},se={class:"dialog-footer"},ne=N(" 确定 ");P.render=function(e,a,l,t,o,s){const n=x("el-checkbox"),i=x("el-checkbox-group"),r=x("el-button"),d=x("headTools"),c=x("el-tooltip"),b=x("el-table-column"),p=x("el-table"),u=x("el-option"),m=x("el-select"),f=x("el-form-item"),h=x("el-tab-pane"),g=x("el-tabs"),y=x("el-form"),v=x("el-drawer"),k=x("vue-File"),D=C("loading");return _((L(),O("div",U,[I("div",B,[e.filedList&&e.filedList.length>0?(L(),O(V,{key:0},[M,I("div",H,[j(i,{modelValue:e.checkboxGroup,"onUpdate:modelValue":a[0]||(a[0]=a=>e.checkboxGroup=a),size:"small"},{default:w((()=>[(L(!0),O(V,null,q(e.filedList,(e=>(L(),G(n,{label:e.label,border:!0,key:e.prop,onChange:a=>t.checkChange(e)},null,8,["label","onChange"])))),128))])),_:1},8,["modelValue"])])],64)):E("",!0),K,I("div",R,[j(i,{modelValue:e.checkboxGroup,"onUpdate:modelValue":a[1]||(a[1]=a=>e.checkboxGroup=a),size:"small"},{default:w((()=>[(L(!0),O(V,null,q(e.otherFiled,(e=>(L(),G(n,{label:e.label,border:!0,key:e.prop,onChange:a=>t.checkChange(e)},null,8,["label","onChange"])))),128))])),_:1},8,["modelValue"])]),I("div",W,[j(r,{size:"small",onClick:t.editOtherField},{default:w((()=>[X])),_:1},8,["onClick"])])]),I("div",$,[j(d,{onClick:t.headToolClick,type:"2"},null,8,["onClick"]),I("div",A,[Q,j(p,F({data:e.dataList},e.tableData.config,{ref:"tableEl"}),{default:w((()=>[(L(!0),O(V,null,q(e.tableData.columns,(e=>(L(),G(b,z(F({key:e.prop||e.label},e)),J({_:2},[e.help?{name:"header",fn:w((a=>[N(T(a.column.label)+" ",1),j(c,{placement:"top"},{content:w((()=>[I("span",{innerHTML:e.help},null,8,Y)])),default:w((()=>[Z])),_:2},1024)]))}:void 0,"index"!==e.type?{name:"default",fn:w((()=>["selection"===e.type?(L(),G(n,{key:0})):"__control"===e.prop?(L(),O("span",ee,"删除")):(L(),O("span",ae,"测试数据"))]))}:void 0]),1040)))),128))])),_:1},16,["data"])])]),I("div",le,[j(y,{size:"small"},{default:w((()=>[j(g,{modelValue:"first"},{default:w((()=>[j(h,{label:"字段属性",name:"first"},{default:w((()=>[j(f,{label:"选择表头字段"},{default:w((()=>[j(m,{modelValue:e.selectCheck,"onUpdate:modelValue":a[2]||(a[2]=a=>e.selectCheck=a),onChange:t.selectChange},{default:w((()=>[(L(!0),O(V,null,q(e.tableData.columns,(e=>(L(),G(u,{key:e.prop,value:e.prop,label:e.label},null,8,["value","label"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),j(h,{label:"表格属性",name:"second"},{default:w((()=>[te])),_:1})])),_:1})])),_:1})]),j(v,{modelValue:e.visibleDialog,"onUpdate:modelValue":a[3]||(a[3]=a=>e.visibleDialog=a),size:"60%",direction:"rtl","custom-class":"json-dialog","append-to-body":!0,"before-close":t.drawerBeforeClose},{default:w((()=>[e.visibleDialog?(L(),O("div",oe)):E("",!0),I("div",se,[j(r,{type:"primary",size:"small",onClick:t.dialogConfirm},{default:w((()=>[ne])),_:1},8,["onClick"])])])),_:1},8,["modelValue","before-close"]),j(k,{ref:"vueFileEl"},null,512)],512)),[[D,e.loading]])};export{P as default};