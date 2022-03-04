(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{555:function(t,s,a){t.exports=a.p+"assets/img/iconfont.9faa5f72.png"},556:function(t,s,a){t.exports=a.p+"assets/img/useicon.24ceb8a9.png"},557:function(t,s,a){t.exports=a.p+"assets/img/uni.ec8391d4.png"},576:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("本节将介绍如何在项目中引入 baseConfig，和常用的外部资源")]),t._v(" "),n("h2",{attrs:{id:"引入共通配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入共通配置"}},[t._v("#")]),t._v(" 引入共通配置")]),t._v(" "),n("h3",{attrs:{id:"baseconfig全局引入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#baseconfig全局引入"}},[t._v("#")]),t._v(" baseConfig全局引入")]),t._v(" "),n("p",[t._v("只需要在main.js增加以下代码：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入全局baseConfig")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" baseConfig "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baseConfig'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果项目使用Vue2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #ifndef VUE3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baseConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("App\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #endif")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果项目使用Vue3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #ifdef VUE3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("createSSRApp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSSRApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baseConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #endif")]),t._v("\n")])])]),n("h2",{attrs:{id:"iconfont图标引入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iconfont图标引入"}},[t._v("#")]),t._v(" iconfont图标引入")]),t._v(" "),n("h3",{attrs:{id:"获取图标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取图标"}},[t._v("#")]),t._v(" 获取图标")]),t._v(" "),n("p",[t._v("以下所有说明都是基于阿里图标库进行扩展，其他图标库同理，明白原理即可方便扩展")]),t._v(" "),n("ol",[n("li",[t._v("访问 "),n("a",{attrs:{href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里图标库"),n("OutboundLink")],1),t._v("，搜索图标并加入购物车：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/8610a5f2-2562-4ca6-9806-679a500a1d0a.png",alt:"Image text"}})]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("点击页面右上角购物车图标 ，点击添加至项目，如没有项目，需要点击下图第二步的图标添加一个项目目录，如已经有项目则可以略过第二步，选择项目后点击确定：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2f639b71-a2d3-43a1-bd6b-766134dea8e3.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("确定后进入项目，点击项目设置 ，对图标库进行一些设置：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/996ffe2e-4fdd-42d2-bf04-c44c0c978874.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("项目名称和项目描述根据自己需求填写，格式可以只勾选 ttf：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/6992d375-0ec2-4cfb-82eb-6e724a111fd7.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("点击保存后 ，可以下载图库库到本地:")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/6992d375-0ec2-4cfb-82eb-6e724a111fd7.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[t._v("下载解压后，需要用到的文件暂时有两个 iconfont.css、iconfont.ttf:")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/8d1b81af-c1f2-494d-b139-2ac6d3ea4ff5.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"7"}},[n("li",[n("p",[t._v("将 iconfont.ttf、iconfont.css 放到项目根目录 static/iconfont 下替换源文件:")])]),t._v(" "),n("li",[n("p",[t._v("打开 iconfont.css ,修改 @font-face 如下,将下面代码复制到本地的iconfont.css文件中替换原来的代码，只需要留最后一行，并加上https:：")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(555),alt:""}})]),t._v(" "),n("p",[t._v("修改之后如果就可以：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("@font-face {\n  font-family: 'iconfont';\n  src: url('https://at.alicdn.com/t/font_2971496_q3ve1y7i95.ttf?t=1638273885160') format('truetype');\n}\n")])])]),n("h3",{attrs:{id:"代码中使用iconfont"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码中使用iconfont"}},[t._v("#")]),t._v(" 代码中使用iconfont")]),t._v(" "),n("p",[t._v("复制红框中的代码，放在标签中即可，前提是在class中添加 "),n("code",[t._v("iconfont")]),t._v(" 属性")]),t._v(" "),n("p",[n("img",{attrs:{src:a(556),alt:""}})]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iconfont icon-dianzan"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h2",{attrs:{id:"引入组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入组件"}},[t._v("#")]),t._v(" 引入组件")]),t._v(" "),n("h3",{attrs:{id:"uni-app官方组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uni-app官方组件"}},[t._v("#")]),t._v(" uni-app官方组件")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("在官网中选择自己需要的组件\n"),n("img",{attrs:{src:a(557),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("点击下载&安装")])]),t._v(" "),n("li",[n("p",[t._v("右侧使用HBuilderX导入插件")])]),t._v(" "),n("li",[n("p",[t._v("组件会生成在项目的根目录下uni_modules文件中，直接按照官网中的方式使用即可，不需要import导入 和 component中引用")])])]),t._v(" "),n("h3",{attrs:{id:"uview组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uview组件"}},[t._v("#")]),t._v(" uView组件")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.uviewui.com/components/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("uView官网"),n("OutboundLink")],1),t._v("，点击下载地址，进入插件市场，使用HBuilderX导入插件，不建议用npm下载")])])}),[],!1,null,null,null);s.default=e.exports}}]);