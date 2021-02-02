(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{5661:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("doc-page",{attrs:{title:"Browser compatibility",related:t.related,nav:t.nav,badge:t.badge}},[e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Configuring-compatibility"},on:{click:function(s){return t.copyHeading("Configuring-compatibility")}}},[t._v("Configuring compatibility")]),e("p",[t._v("Your "),e("code",{staticClass:"doc-token"},[t._v("/package.json")]),t._v(" file should contain a "),e("code",{staticClass:"doc-token"},[t._v("browserslist")]),t._v(" field. This will tell Quasar App the range of browsers that the project is targeting. Babel and Autoprefixer will use this field to determine how to transpile JS code (if transpiling is left enabled) and what CSS vendor prefixes it needs to add your CSS code.")]),e("p",[t._v("Babel will look for exactly the JS features that need transpiling (based on the configured browsers) and apply them. Be mindful about it though, as it is sufficient to add one “bad apple” in the options list and that will dumb down your code back to ES5.")]),e("p",[t._v("The following is the default “browserslist” when you create a Quasar project:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browserslist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 10 Chrome versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 10 Firefox versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 4 Edge versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 7 Safari versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 8 Android versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 8 ChromeAndroid versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 8 FirefoxAndroid versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 10 iOS versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 5 Opera versions"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),e("p",[t._v("More info on how to specify browser ranges: "),e("doc-link",{attrs:{to:"https://github.com/browserslist/browserslist"}},[t._v("browserslist")]),t._v(".")],1),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"IE-11-Support"},on:{click:function(s){return t.copyHeading("IE-11-Support")}}},[t._v("IE 11 Support")]),e("p",[t._v("In order to support Internet Explorer 11, you’ll need to edit browserslist from "),e("code",{staticClass:"doc-token"},[t._v("/package.json")]),t._v(":")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browserslist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ie 11"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <<-- add it")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),e("p",[t._v("That’s it. This will inject the Promise polyfill, along with some other smaller polyfills, adding an extra ~6k worth of code (minified) to your bundle. Check "),e("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/tree/dev/ui/src/ie-compat"}},[t._v("Github")]),t._v(" to see it.")],1),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("IE Polyfills")]),e("p",[t._v("Quasar CLI is smart enough to include the IE polyfills only if it is really needed. An Electron app for example doesn’t need it and as a result, even if you leave "),e("code",{staticClass:"doc-token"},[t._v("ie 11")]),t._v(" in your package.json > browserslist it won’t add the polyfills.")])]),e("div",{staticClass:"doc-note doc-note--warning"},[e("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),e("p",[t._v("Running dev server on a Windows machine and consuming the output in IE11 might result in an error (ansi-strip package related used by webpack-dev-server). This is why you might need to keep the strict dependency "),e("code",{staticClass:"doc-token"},[t._v('"strip-ansi": "=3.0.1"')]),t._v(" in your package.json (use yarn and pin this version).")])])])},n=[],o=e("8669");const r="Browser compatibility | Quasar Framework",i="How to handle the browser support with Quasar CLI.";var p={meta:{title:"Browser compatibility",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:i},ogDesc:{name:"og:description",content:i},twitterDesc:{name:"twitter:description",content:i}}},created(){this.$root.store.toc=[{id:"Configuring-compatibility",title:"Configuring compatibility"},{id:"IE-11-Support",title:"IE 11 Support"}],this.related=[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],this.nav=[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js",dir:"left"},{name:"Supporting TypeScript",category:"Quasar CLI",path:"/quasar-cli/supporting-ts",dir:"right"}],this.badge="@quasar/app v2+"},methods:{copyHeading:o["a"]}},c=p,l=e("2877"),d=Object(l["a"])(c,a,n,!1,null,null,null);s["default"]=d.exports}}]);