(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{392:function(t,e,n){"use strict";var c=n(1).default.extend({name:"PageTitle"}),l=n(9),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("h4",{staticClass:"font-semibold text-3xl"},[t._t("header")],2),t._v(" "),n("h5",{staticClass:"font-semibold"},[t._t("subHeader")],2)])}),[],!1,null,"4add9b68",null);e.a=component.exports},396:function(t,e,n){t.exports={}},406:function(t,e,n){"use strict";n(396)},407:function(t,e,n){"use strict";var c=n(52),l=(n(37),n(29),n(1)),o=n(107),r=n(173),v=l.default.extend({name:"MenuFloating",components:{NavButton:r.a},props:{items:{type:Array,default:function(){return[]}},section:{type:String,required:!0}},data:function(){return{showMenuInternal:!1}},computed:{position:function(){var t=this,e=this.items.map((function(e){return t.localePath(t.getRoute([e]))})).indexOf(this.$route.path);return e<0?1:e+1}},methods:{getRoute:function(t){return Object(o.a)([{key:this.section}].concat(Object(c.a)(t)))}}}),_=(n(406),n(9)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-floating fixed py-2 lg:pt-4 lg:pb-0",class:["items-length-"+t.items.length,{expanded:t.showMenuInternal},t.section]},[n("div",{staticClass:"header-title"},[n("NavButton",{staticClass:"menu-mobile",model:{value:t.showMenuInternal,callback:function(e){t.showMenuInternal=e},expression:"showMenuInternal"}}),t._v(" "),n("div",{staticClass:"title font-bold pl-4 lg:pl-6 2xl:pl-14 lg:pb-10 lg:h-6 text-sm lg:text-sm 2xl:text-base whitespace-nowrap"},[["origins","creating-your-own-yarn","new-yarn-and-colour-innovation"].includes(t.section)?n("PortalTarget",{attrs:{name:"menu-floating-title"}}):[t._v(t._s(t.$t("menu."+t.section+".name")))]],2)],1),t._v(" "),n("div",{staticClass:"menu flex flex-col pt-6 2xl:gap-5"},[t._l(t.items,(function(e,c){return n("NuxtLink",{key:"prim"+c,staticClass:"gap-3 2xl:gap-5 py-2 2xl:py-3 flex items-center lg:pl-6 xl:pl-12 transition-all duration-500",attrs:{to:t.localePath(t.getRoute([e]))},nativeOn:{click:function(e){t.showMenuInternal=!1}}},[n("span",{staticClass:"position text-lg xl:text-xl font-semibold"},[t._v(t._s(c+1))]),t._v(" "),e.logo?n("img",{staticClass:"image",attrs:{src:e.logo,alt:""}}):n("span",{staticClass:"text flex flex-col"},[n("span",{staticClass:"name font-semibold text-sm 2xl:text-base"},[t._v(t._s(t.$t("menu."+e.key+".name")))]),t.$te("menu."+e.key+".subName")?n("span",{staticClass:"sub-name text-xs 2xl:text-sm"},[t._v(t._s(t.$t("menu."+e.key+".subName")))]):t._e()]),t._v(" "),n("span",{staticClass:"arrow-right transition-all duration-500"})])})),t._v(" "),n("div",{staticClass:"line"})],2),t._v(" "),n("Portal",{attrs:{to:"position-title"}},[t._v("\n    "+t._s(t.position)+"\n  ")])],1)}),[],!1,null,"0cdaf624",null);e.a=component.exports},480:function(t,e,n){t.exports={}},525:function(t,e,n){"use strict";n(480)},616:function(t,e,n){"use strict";n.r(e);var c=n(1),menu=n(172),l=n(407),o=n(392),r=c.default.extend({name:"CertificationsPage",components:{MenuFloating:l.a,PageTitle:o.a},data:function(){return{menu:[{key:menu.a.certifications.key,link:""}]}},head:function(){var section="general",t="certifications";return{title:this.$t("pages.".concat(section,".").concat(t,".title")),meta:[{hid:"description",name:"description",content:this.$t("pages.".concat(section,".").concat(t,".description"))},{hid:"og:description",name:"og:description",content:this.$t("pages.".concat(section,".").concat(t,".description"))},{hid:"og:title",name:"og:title",content:this.$t("pages.".concat(section,".").concat(t,".title"))}]}},nuxtI18n:{paths:{es:"/certificaciones"}}}),v=(n(525),n(9)),component=Object(v.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"certifications-main page-root"},[n("MenuFloating",{staticClass:"fixed menu-floating show",attrs:{items:t.menu,section:"certifications"}}),t._v(" "),n("div",{staticClass:"page-position"},[n("PortalTarget",{attrs:{name:"position-title"}})],1),t._v(" "),n("div",{staticClass:"certifications page-with-left-menu page-content"},[n("PageTitle",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.$t("menu.certifications.name"))+" ")]},proxy:!0},{key:"subHeader",fn:function(){return[t._v("& "+t._s(t.$t("certifications.licenses")))]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"text-only left"},[n("p",[t._v(t._s(t.$t("certifications.p-1")))])]),t._v(" "),n("div",{staticClass:"licenses items-section"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("certifications.licenses")))]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"certifications items-section"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("certifications.certifications")))]),t._v(" "),n("div",{staticClass:"items"},[n("div",{staticClass:"item"},[t._m(1),t._v(" "),n("div",{staticClass:"logo-content",domProps:{innerHTML:t._s(t.$t("certifications.p-2"))}})]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"item interwool"},[t._m(5),t._v(" "),n("div",{staticClass:"logo-content"},[n("strong",[t._v(t._s(t.$t("certifications.p-3"))+" ")]),t._v(t._s(t.$t("certifications.p-4"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"item"},[t._m(6),t._v(" "),n("div",{staticClass:"logo-content"},[n("strong",[t._v(t._s(t.$t("certifications.p-5"))+" ")]),n("br"),t._v("\n            "+t._s(t.$t("certifications.p-6"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"item"},[t._m(7),t._v(" "),n("div",{staticClass:"logo-content",domProps:{innerHTML:t._s(t.$t("certifications.p-7"))}})]),t._v(" "),n("div",{staticClass:"item"},[t._m(8),t._v(" "),n("div",{staticClass:"logo-content"},[n("strong",[t._v(t._s(t.$t("certifications.p-9")))]),t._v(" "),n("br"),t._v(" "),n("br"),t._v("\n            "+t._s(t.$t("certifications.p-10"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"item"},[t._m(9),t._v(" "),n("div",{staticClass:"logo-content"},[n("strong",[t._v("RAS")]),n("br"),n("span",{domProps:{innerHTML:t._s(t.$t("certifications.p-8"))}}),t._v(" "),n("br"),t._v(" "),n("a",{staticClass:"font-semibold",attrs:{href:"https://textileexchange.org/standards/responsible-alpaca-standard",target:"_blank"}},[t._v("https://textileexchange.org/standards/responsible-alpaca-standard")]),n("br"),n("br"),t._v(" "),n("strong",[t._v("RWS")]),n("br"),n("span",{domProps:{innerHTML:t._s(t.$t("certifications.p-11"))}}),t._v(" "),n("a",{staticClass:"font-semibold",attrs:{href:"https://textileexchange.org/standards/responsible-wool",target:"_blank"}},[t._v("https://textileexchange.org/standards/responsible-wool")])])]),t._v(" "),t._m(10),t._v(" "),t._m(11)])])],1),t._v(" "),n("Portal",{attrs:{to:"menu-floating-title"}},[t._v(t._s(t.$t("menu.certifications.name"))+"\n  ")])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items"},[n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/Capa_x0020_1-2.svg",width:"101",alt:""}})])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/Fondo.svg",width:"83",alt:""}})])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/Fondo-1.svg",width:"84",alt:""}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/GOTS-WEB@2x.png",width:"83",alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("Certified by Control Union, CU 847906")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/Layer_x0020_1-2.svg",width:"84",alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("Certified by Control Union, CU 847906")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("span",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/Layer_x0020_1-1.svg",width:"86",alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("Certified by Control Union, CU 847906")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/usda-organic-logo-vector.svg",width:"84",alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("Certified by Control Union, CU 847906")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"logo"},[e("img",{attrs:{src:"/assets/michell/images/certifications/Capa_x0020_1-1.svg",width:"251",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"logo"},[e("img",{attrs:{src:"/assets/michell/images/certifications/Layer_x0020_1-4.svg",width:"150",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/assets/michell/images/certifications/Layer_x0020_1.svg",width:"83",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/assets/michell/images/certifications/Capa_x0020_1.svg",width:"70",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-cols flex gap-4"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/Layer_x0020_1-5.svg",width:"84",alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("Certified by Control Union, CU 847906")])]),t._v(" "),n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/Layer_x0020_1-3.svg",width:"84",alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("Certified by Control Union, CU 847906")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/BASC_2@2x.png",width:"110",alt:""}})]),t._v(" "),n("div",{staticClass:"logo-content"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/assets/michell/images/certifications/Layer_1.svg",width:"97",alt:""}})]),t._v(" "),n("div",{staticClass:"logo-content"})])}],!1,null,"2ba82aaa",null);e.default=component.exports}}]);