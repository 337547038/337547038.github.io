(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2371fd"],{fa7c:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{}},methods:{alertOpen:function(s){this.$alert("这是内容",{title:"警告",confirm:"确定",icon:s})},alertOpen2:function(){this.$alert("确定删除",{title:"警告",confirm:"确定",cancel:"取消",callback:function(s){alert("回调事件"),s()}})},alertOpen3:function(s){this.$msg("删除成功/失败/警告提示",{icon:s,animation:"slideDown"})},alertOpen4:function(){this.$dialogClear()}}},e=t("2877"),n=Object(e.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Alert 弹框")]),s._m(0),s._m(1),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("p",[s._v("模拟Alert 成功 "),t("span",{staticClass:"green",on:{click:function(a){return s.alertOpen(1)}}},[s._v("试一试")])]),t("p",[s._v("模拟Alert 失败 "),t("span",{staticClass:"green",on:{click:function(a){return s.alertOpen(2)}}},[s._v("试一试")])]),t("p",[s._v("模拟Alert 警告 "),t("span",{staticClass:"green",on:{click:function(a){return s.alertOpen(3)}}},[s._v("试一试")])])])]],2),t("p",[t("code",[s._v("Alert")]),s._v("类使用，在页面直接使用 "),t("code",[s._v("this.$alert()")])]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("模拟Alert 成功 "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alertOpen(1)"')]),s._v(">")]),s._v("试一试"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("模拟Alert 失败 "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alertOpen(2)"')]),s._v(">")]),s._v("试一试"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("模拟Alert 警告 "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alertOpen(3)"')]),s._v(">")]),s._v("试一试"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('\x3c!--<p>清空 <span class="green" @click="alertOpen4">试一试</span></p>--\x3e')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {}\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    alertOpen (type) {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$alert("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'这是内容'")]),s._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'警告'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("confirm")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'确定'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(":type\n      })\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 等价于下面代码")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* this.$dialog({\n      title:'警告',\n      content:'这是内容',\n      confirm:'确定',\n      icon:3, // 默认为警告类\n      className: 'dialog-alert', // 添加一个样式\n      showClose: false, // 不显示右上角关闭按钮\n      closeModal: false // 点击遮罩层不关闭\n      }) */")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._m(2),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("p",[s._v("模拟Confirm "),t("span",{staticClass:"green",on:{click:s.alertOpen2}},[s._v("试一试")])])])]],2),t("p",[t("code",[s._v("Confirm")]),s._v("类使用，在页面直接使用 "),t("code",[s._v("this.$alert()")]),s._v("。同"),t("code",[s._v("alert")]),s._v("，这里使用了回调")]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("模拟Confirm "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alertOpen2"')]),s._v(">")]),s._v("试一试"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {}\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    alertOpen2 () {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$alert("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'确定删除'")]),s._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'警告'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("confirm")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'确定'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cancel")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'取消'")]),s._v(",\n        callback (done) {\n          alert("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'回调事件'")]),s._v(")\n          done()\n        }\n      })\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 等价于")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* this.$dialog({\n        title: '警告',\n        content: '确定删除',\n        confirm: '确定',\n        cancel: '取消',\n        callback (done) {\n          alert('回调事件')\n          done()\n        },\n        icon: 3, // 默认为警告类\n        className: 'dialog-alert', // 添加一个样式\n        showClose: false, // 不显示右上角关闭按钮\n        closeModal: false // 点击遮罩层不关闭\n      }) */")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._m(3),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("p",[s._v("消息提示 成功 "),t("span",{staticClass:"green",on:{click:function(a){return s.alertOpen3(1)}}},[s._v("试一试")])]),t("p",[s._v("消息提示 失败 "),t("span",{staticClass:"green",on:{click:function(a){return s.alertOpen3(2)}}},[s._v("试一试")])]),t("p",[s._v("消息提示 提示 "),t("span",{staticClass:"green",on:{click:function(a){return s.alertOpen3(3)}}},[s._v("试一试")])]),t("p",[s._v("消息提示 警告 "),t("span",{staticClass:"green",on:{click:function(a){return s.alertOpen3(4)}}},[s._v("试一试")])])])]],2),t("p",[t("code",[s._v("Msg")]),s._v("类使用，在页面直接使用 "),t("code",[s._v("this.$msg()")])]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("消息提示 成功 "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alertOpen3(1)"')]),s._v(">")]),s._v("试一试"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("消息提示 失败 "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alertOpen3(2)"')]),s._v(">")]),s._v("试一试"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("消息提示 提示 "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alertOpen3(3)"')]),s._v(">")]),s._v("试一试"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("消息提示 警告 "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alertOpen3(4)"')]),s._v(">")]),s._v("试一试"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {}\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    alertOpen3 (type) {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$msg("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'删除成功'")]),s._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(": type\n      })\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 等价于")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* this.$dialog({\n        content: '删除成功',\n        icon: 1,\n        autoClose: 3, // 自动关闭\n        className: 'dialog-msg', // 添加一个样式\n        showClose: false, // 不显示右上角关闭按钮\n        closeModal: false, // 点击遮罩层不关闭\n        modal: false // 不显示遮罩层\n      }) */")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._m(4),s._m(5),s._m(6),s._m(7),s._m(8),s._m(9)],1)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("blockquote",[t("p",[s._v("为方便使用，在"),t("code",{pre:!0},[s._v("dialog")]),s._v("的基础扩展"),t("code",{pre:!0},[s._v("Alert")]),s._v(","),t("code",{pre:!0},[s._v("Confirm")]),s._v(","),t("code",{pre:!0},[s._v("Msg")]),s._v("\n从场景上说，"),t("code",{pre:!0},[s._v("DialogAlert")]),s._v(" 的作用是美化系统自带的 "),t("code",{pre:!0},[s._v("alert")]),s._v("、"),t("code",{pre:!0},[s._v("confirm")]),s._v("，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 "),t("code",{pre:!0},[s._v("Dialog")]),s._v("。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"1%E3%80%81alert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#1%E3%80%81alert","aria-hidden":"true"}},[this._v("¶")]),this._v(" 1、Alert")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"2%E3%80%81confirm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#2%E3%80%81confirm","aria-hidden":"true"}},[this._v("¶")]),this._v(" 2、Confirm")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"3%E3%80%81msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#3%E3%80%81msg","aria-hidden":"true"}},[this._v("¶")]),this._v(" 3、Msg")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("¶")]),this._v(" API")])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("可传两个参数，参数1为消息正文内容；参数2其它信息")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"alert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alert","aria-hidden":"true"}},[this._v("¶")]),this._v(" Alert")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),t("th",[s._v("类型")]),t("th",[s._v("说明")])])]),t("tbody",[t("tr",[t("td",[s._v("title")]),t("td",[s._v("string")]),t("td",[s._v("标题，默认为提示")])]),t("tr",[t("td",[s._v("confirm")]),t("td",[s._v("string")]),t("td",[s._v("确认按钮，点击默认关闭窗口，默认为确认")])]),t("tr",[t("td",[s._v("cancel")]),t("td",[s._v("string")]),t("td",[s._v("取消按钮，点击默认关闭窗口")])]),t("tr",[t("td",[s._v("callback")]),t("td",[s._v("function")]),t("td",[s._v("回调事件")])]),t("tr",[t("td",[s._v("icon")]),t("td",[s._v("number/0")]),t("td",[s._v("用于展示常见的alert提示，1成功，2失败，3提示，4警告。其它的可通过添加样式控制")])]),t("tr",[t("td",[s._v("width")]),t("td",[s._v("number")]),t("td",[s._v("Dialog 的宽度，单位px")])]),t("tr",[t("td",[s._v("animation")]),t("td",[s._v("string")]),t("td",[s._v("动画样式名，可选zoom、flip、door、rotate、slideDown、slideUp、slideLeft、slideRight")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg","aria-hidden":"true"}},[this._v("¶")]),this._v(" Msg")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),t("th",[s._v("类型")]),t("th",[s._v("说明")])])]),t("tbody",[t("tr",[t("td",[s._v("icon")]),t("td",[s._v("number/0")]),t("td",[s._v("用于展示常见的alert提示，1成功，2失败，3提示，4警告。其它的可通过添加样式控制")])]),t("tr",[t("td",[s._v("width")]),t("td",[s._v("number")]),t("td",[s._v("Dialog 的宽度，单位px")])]),t("tr",[t("td",[s._v("animation")]),t("td",[s._v("string")]),t("td",[s._v("动画样式名，可选zoom、flip、door、rotate、slideDown、slideUp、slideLeft、slideRight")])])])])}],!1,null,null,null);a.default=n.exports}}]);