(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{b6f3:function(t,e,s){"use strict";s("c069")},c069:function(t,e,s){},e24c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{staticClass:"bg-grey-1"},[s("q-header",{staticClass:"text-white",staticStyle:{background:"#24292e"},attrs:{elevated:"","height-hint":"61.59"}},[s("q-toolbar",{staticClass:"q-py-sm q-px-md"},[s("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",dense:"",flat:"",ripple:!1,icon:t.fabGithub,size:"19px",color:"white","no-caps":""}}),s("q-select",{ref:"search",staticClass:"GL__toolbar-select",staticStyle:{width:"300px"},attrs:{dark:"",dense:"",standout:"","use-input":"","hide-selected":"",color:"black","stack-label":!1,label:"Search or jump to...",options:t.filteredOptions},on:{filter:t.filter},scopedSlots:t._u([{key:"append",fn:function(){return[s("img",{attrs:{src:"https://cdn.quasar.dev/img/layout-gallery/img-github-search-key-slash.svg"}})]},proxy:!0},{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",[s("div",{staticClass:"text-center"},[s("q-spinner-pie",{attrs:{color:"grey-5",size:"24px"}})],1)])],1)]},proxy:!0},{key:"option",fn:function(e){return[s("q-item",t._g(t._b({staticClass:"GL__select-GL__menu-link"},"q-item",e.itemProps,!1),e.itemEvents),[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{name:"collections_bookmark"}})],1),s("q-item-section",[s("q-item-label",{domProps:{innerHTML:t._s(e.opt.label)}})],1),s("q-item-section",{class:{"default-type":!e.opt.type},attrs:{side:""}},[s("q-btn",{staticClass:"bg-grey-1 q-px-sm",attrs:{outline:"",dense:"","no-caps":"","text-color":"blue-grey-5",size:"12px"}},[t._v("\n                "+t._s(e.opt.type||"Jump to")+"\n                "),s("q-icon",{attrs:{name:"subdirectory_arrow_left",size:"14px"}})],1)],1)],1)]}}]),model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t.$q.screen.gt.sm?s("div",{staticClass:"GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"},[s("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"}},[t._v("\n          Pull requests\n        ")]),s("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"}},[t._v("\n          Issues\n        ")]),s("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"}},[t._v("\n          Marketplace\n        ")]),s("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"}},[t._v("\n          Explore\n        ")])]):t._e(),s("q-space"),s("div",{staticClass:"q-pl-sm q-gutter-sm row items-center no-wrap"},[t.$q.screen.gt.xs?s("q-btn",{attrs:{dense:"",flat:"",round:"",size:"sm",icon:"notifications"}}):t._e(),t.$q.screen.gt.xs?s("q-btn",{attrs:{dense:"",flat:""}},[s("div",{staticClass:"row items-center no-wrap"},[s("q-icon",{attrs:{name:"add",size:"20px"}}),s("q-icon",{staticStyle:{"margin-left":"-2px"},attrs:{name:"arrow_drop_down",size:"16px"}})],1),s("q-menu",{attrs:{"auto-close":""}},[s("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("New repository")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Import repository")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("New gist")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("New organization")])],1),s("q-separator"),s("q-item-label",{attrs:{header:""}},[t._v("This repository")]),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("New issue")])],1)],1)],1)],1):t._e(),s("q-btn",{attrs:{dense:"",flat:"","no-wrap":""}},[s("q-avatar",{attrs:{rounded:"",size:"20px"}},[s("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar3.jpg"}})]),s("q-icon",{attrs:{name:"arrow_drop_down",size:"16px"}}),s("q-menu",{attrs:{"auto-close":""}},[s("q-list",{attrs:{dense:""}},[s("q-item",{staticClass:"GL__menu-link-signed-in"},[s("q-item-section",[s("div",[t._v("Signed in as "),s("strong",[t._v("Mary")])])])],1),s("q-separator"),s("q-item",{staticClass:"GL__menu-link-status",attrs:{clickable:""}},[s("q-item-section",[s("div",[s("q-icon",{attrs:{name:"tag_faces",color:"blue-9",size:"18px"}}),t._v("\n                    Set your status\n                  ")],1)])],1),s("q-separator"),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Your profile")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Your repositories")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Your projects")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Your stars")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Your gists")])],1),s("q-separator"),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Help")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Settings")])],1),s("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[s("q-item-section",[t._v("Sign out")])],1)],1)],1)],1)],1)],1)],1),s("q-page-container",[s("router-view")],1)],1)},a=[],r=(s("ddb0"),s("d272"));const n=["quasarframework/quasar","quasarframework/quasar-awesome"];var o={name:"MyLayout",data(){return{text:"",options:null,filteredOptions:[]}},methods:{filter(t,e){if(null===this.options)return setTimeout((()=>{this.options=n,this.$refs.search.filter("")}),2e3),void e();e(""!==t?()=>{this.filteredOptions=[{label:t,type:"In this repository"},{label:t,type:"All GitHub"},...this.options.filter((e=>e.toLowerCase().includes(t.toLowerCase()))).map((t=>({label:t})))]}:()=>{this.filteredOptions=this.options.map((t=>({label:t})))})}},created(){this.fabGithub=r["h"]}},l=o,c=(s("b6f3"),s("2877")),m=Object(c["a"])(l,i,a,!1,null,null,null);e["default"]=m.exports}}]);