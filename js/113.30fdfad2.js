(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[113],{"968e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("doc-page",{attrs:{title:"Electron Preload Script",nav:t.nav,badge:t.badge}},[n("p",[t._v("As of “@quasar/app” v1.5+, you can benefit from an Electron preload script, which is very useful when you have "),n("doc-link",{attrs:{to:"/quasar-cli/developing-electron-apps/node-integration"}},[t._v("Node Integration")]),t._v(" turned off.")],1),n("p",[t._v("This preload script can allow you to inject Nodejs stuff into the “window” global from the rendered thread (UI). This script will run in the browser, before your rendered thread. Regardless of your Node Integration setting, this file will have access to Nodejs. So be careful what you do with it!")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"How-to-enable-it"},on:{click:function(e){return t.copyHeading("How-to-enable-it")}}},[t._v("How to enable it")]),n("p",[t._v("In "),n("code",{staticClass:"doc-token"},[t._v("/src-electron/main-process/")]),t._v(" folder, create a file and name it "),n("code",{staticClass:"doc-token"},[t._v("electron-preload.js")]),t._v(". Fill it with your preload code. Then edit "),n("code",{staticClass:"doc-token"},[t._v("/src-electron/main-process/electron-main.js")]),t._v(", near the “webPreferences” section:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// file: /src-electron/main-process/electron-main.js")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add this at the top:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  mainWindow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BrowserWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    webPreferences"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      nodeIntegration"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("QUASAR_NODE_INTEGRATION")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nodeIntegrationInWorker"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("QUASAR_NODE_INTEGRATION")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HERE IS THE MAGIC:")]),t._v("\n      preload"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron-preload.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("div",{staticClass:"doc-note doc-note--warning"},[n("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),n("p",[t._v("The name "),n("code",{staticClass:"doc-token"},[t._v("electron-preload.js")]),t._v(" cannot be changed, otherwise Quasar will not detect it and your production build will fail.")])]),n("p",[t._v("Example of "),n("code",{staticClass:"doc-token"},[t._v("/src-electron/main-process/electron-preload.js")]),t._v(" content:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("electron "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Limitations-on-electron-preload.js"},on:{click:function(e){return t.copyHeading("Limitations-on-electron-preload.js")}}},[t._v("Limitations on electron-preload.js")]),n("ol",[n("li",[t._v("This file is not transpiled by Babel.")]),n("li",[t._v("This file is not going through any linting.")]),n("li",[t._v("You cannot import files with a relative path from it, as it is copied as-is into the final app bundle.")]),n("li",[t._v("You need to have this file already created before starting up the “quasar dev” command, otherwise any changes in it will not trigger a reload.")])])])},s=[],o=n("8669");const r="Electron Preload Script | Quasar Framework",c="How to handle Electron Node Integration with an Electron Preload script with Quasar CLI.";var i={meta:{title:"Electron Preload Script",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},created(){this.$root.store.toc=[{id:"How-to-enable-it",title:"How to enable it"},{id:"Limitations-on-electron-preload.js",title:"Limitations on electron-preload.js"}],this.nav=[{name:"Node Integration",category:"Developing Electron Apps",path:"/quasar-cli/developing-electron-apps/node-integration",dir:"left"},{name:"Electron Packages",category:"Developing Electron Apps",path:"/quasar-cli/developing-electron-apps/electron-packages",dir:"right"}],this.badge="@quasar/app v1.5+"},methods:{copyHeading:o["a"]}},p=i,l=n("2877"),d=Object(l["a"])(p,a,s,!1,null,null,null);e["default"]=d.exports}}]);