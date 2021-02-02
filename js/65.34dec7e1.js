(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{9894:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{title:"Platform Detection",nav:t.nav}},[a("p",[t._v("Helpers are built into Quasar to detect the Platform (and its capabilities) within the context of which the code is running.")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("Based on your needs, you might also want to check the "),a("doc-link",{attrs:{to:"/style/visibility"}},[t._v("Style & Identity > Visibility")]),t._v(" page to see how you can achieve the same effect using CSS alone. This latter method will render your DOM elements or components regardless of platform though, so choose wisely on how you want to handle the performance of your app.")],1)]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),a("p",[t._v("Usage inside a Vue component JS:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mobile\n")])]),a("p",[t._v("Usage inside a Vue component template:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("$q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cordova\n")])]),a("p",[t._v("You must import it when you use it outside of a Vue component :")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Platform "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n")])]),a("p",[a("code",{staticClass:"doc-token"},[t._v("Platform.is")]),t._v(" by itself returns an object containing details about the current platform. For example when running Chrome on a MacOS desktop machine, "),a("code",{staticClass:"doc-token"},[t._v("Platform.is")]),t._v(" would return something similar to:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  desktop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mac"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mac"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"70.0.3538.110"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  versionNumber"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("Now, let’s say we want to render different components or DOM elements, based on the platform that the code is running under. We want to show something on desktop and something else on mobile. We would proceed like this:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$q.platform.is.desktop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  I'm only rendered on desktop!\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$q.platform.is.mobile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  I'm only rendered on mobile!\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$q.platform.is.electron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  I'm only rendered on Electron!\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("doc-example",{attrs:{title:"Your device",file:"Platform/Basic"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Properties"},on:{click:function(e){return t.copyHeading("Properties")}}},[t._v("Properties")]),a("p",[t._v("The following properties are available to the Platform object. It’s not an exhaustive list though. See the API section below for more details.")]),a("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Property")]),a("th",{staticClass:"text-left"},[t._v("Type")]),a("th",{staticClass:"text-left"},[t._v("Meaning")])])]),a("tbody",[a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.mobile")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running on a mobile device?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.cordova")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running within Cordova?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.capacitor")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running with Capacitor? (requires @quasar/app v1.2+)")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.electron")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running within Electron?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.desktop")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running on a desktop browser?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.bex")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running in a browser extension? (requires @quasar/app v1.2+)")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.android")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running on an Android device?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.blackberry")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running on a Blackberry device?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.cros")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running on device with the Chrome OS operating system?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.ios")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running on an iOS device?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.ipad")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running on an iPad?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.iphone")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running on an iPhone?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.ipod")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running on an iPod?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.kindle")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running on a Kindle device?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.linux")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running on a device with the Linux operating system?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.mac")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running on a device with the MacOS operating system?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.win")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running on a device with the Windows operating system?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.winphone")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running on a Windows Phone device?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.playbook")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running on a Blackberry Playbook device?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.silk")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running the Kindle Silk browser?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.chrome")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running inside the Google Chrome browser?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.opera")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running inside the Opera browser?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.safari")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running inside the Apple Safari browser?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.edge")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running inside the Microsoft Edge browser?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.is.ie")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running inside the Microsoft Internet Explorer browser?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.has.touch")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the code running on a touch capable screen?")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("Platform.within.iframe")])]),a("td",[t._v("Boolean")]),a("td",[t._v("Is the app running within an IFRAME?")])])])]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova wrapper.")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Note-about-SSR"},on:{click:function(e){return t.copyHeading("Note-about-SSR")}}},[t._v("Note about SSR")]),a("p",[t._v("When building for SSR, use only the "),a("code",{staticClass:"doc-token"},[t._v("$q.platform")]),t._v(" form. If you need to use the "),a("code",{staticClass:"doc-token"},[t._v("import { Platform } from 'quasar'")]),t._v(" (when on server-side), then you’ll need to do it like this:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Platform "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you need access to `ssrContext`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ssrContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" platform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SERVER")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSSR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssrContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Platform "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// otherwise we're on client")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// platform is equivalent to the global import as in non-SSR builds")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("The "),a("code",{staticClass:"doc-token"},[t._v("ssrContext")]),t._v(" is available in "),a("doc-link",{attrs:{to:"/quasar-cli/boot-files"}},[t._v("boot files")]),t._v(". And also in the "),a("doc-link",{attrs:{to:"/quasar-cli/prefetch-feature"}},[t._v("preFetch")]),t._v(" feature, where it is supplied as a parameter.")],1),a("p",[t._v("The reason for all this is that in a client-only app, every user will be using a fresh instance of the app in their browser. For server-side rendering we want the same: each request should have a fresh, isolated app instance so that there is no cross-request state pollution. So Platform needs to be bound to each request separately.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"API"},on:{click:function(e){return t.copyHeading("API")}}},[t._v("API")]),a("doc-api",{attrs:{file:"Platform"}})],1)},n=[],o=a("8669");const r="Platform Detection | Quasar Framework",c="How to detect the platform under which a Quasar app is running.";var i={meta:{title:"Platform Detection",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},created(){this.$root.store.toc=[{id:"Usage",title:"Usage"},{id:"Properties",title:"Properties"},{id:"Note-about-SSR",title:"Note about SSR"},{id:"API",title:"API"}],this.nav=[{name:"Quasar Icon Sets",category:"Quasar Options & Helpers",path:"/options/quasar-icon-sets",dir:"left"},{name:"Screen Plugin",category:"Quasar Options & Helpers",path:"/options/screen-plugin",dir:"right"}]},methods:{copyHeading:o["a"]}},p=i,l=a("2877"),d=Object(l["a"])(p,s,n,!1,null,null,null);e["default"]=d.exports}}]);