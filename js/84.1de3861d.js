(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[84],{fe90:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("doc-page",{attrs:{title:"BEX Build Commands",nav:e.nav}},[t("p",[e._v("With the "),t("doc-link",{attrs:{to:"/start/quasar-cli"}},[e._v("Quasar CLI")]),e._v(", it is incredibly easy to develop and build Browser Extension distributables. Below, we’ll explain the two processes in detail.")],1),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Developing"},on:{click:function(o){return e.copyHeading("Developing")}}},[e._v("Developing")]),t("p",[e._v("Start developing a Browser Extension with just one command.")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ quasar dev -m bex\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ..or the longer form:")]),e._v("\n$ quasar dev --mode bex\n")])]),t("p",[e._v("You may or may not have already had a "),t("code",{staticClass:"doc-token"},[e._v("src-bex")]),e._v(" folder, but you will definitely have one now. You will also have a set of files under "),t("code",{staticClass:"doc-token"},[e._v("src-bex/www")]),e._v(". These files are the output from the webpack development server. Normally, these files are kept in memory, which is why you wouldn’t see them when creating an SPA, but for Browser Extension development, physical files are required in order for the process to work.")]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("Do not edit anything under the "),t("code",{staticClass:"doc-token"},[e._v("src-bex/www")]),e._v(" folder, as these changes are overridden via Hot Module Reloading (HMR). This folder is just the built output of your "),t("code",{staticClass:"doc-token"},[e._v("src")]),e._v(" folder, so make the changes there instead.")])]),t("p",[e._v("Now that we’ve created a development environment, we need to load generated browser extension into your browser.")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Chrome"},on:{click:function(o){return e.copyHeading("Chrome")}}},[e._v("Chrome")]),t("p",[t("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/adding-bex-to-chrome-with-debug.png",alt:""}})]),t("p",[e._v("In line with the screenshot above, the following steps must be taken:")]),t("ol",[t("li",[e._v("In Chrome, navigate to "),t("code",{staticClass:"doc-token"},[e._v("chrome://extensions")])]),t("li",[e._v("Toggle “Developer Mode”.")]),t("li",[e._v("Click “Load unpacked”. This will present you with the "),t("em",[e._v("folder")]),e._v(" selection dialog. Navigate to and select your "),t("code",{staticClass:"doc-token"},[e._v("src-bex")]),e._v(" folder.")]),t("li",[e._v("You should now see your BEX mounted in Chrome.")])]),t("p",[e._v("More information about debugging Chrome Browser Extensions can be found in the "),t("doc-link",{attrs:{to:"https://developer.chrome.com/extensions/tut_debugging"}},[e._v("official documentation")]),e._v(".")],1),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Other-Chromium-Browsers"},on:{click:function(o){return e.copyHeading("Other-Chromium-Browsers")}}},[e._v("Other Chromium Browsers")]),t("p",[e._v("Although we haven’t tested all the various Chromium based browsers, BEX mode should be compatible with them. Please refer to the appropriate browser documentation on how to add a browser extension to that particular browser.")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Firefox"},on:{click:function(o){return e.copyHeading("Firefox")}}},[e._v("Firefox")]),t("p",[t("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/adding-bex-to-firefox.png",alt:""}})]),t("p",[e._v("In line with the screenshot above, the following steps must be taken:")]),t("ol",[t("li",[e._v("In Firefox, navigate to "),t("code",{staticClass:"doc-token"},[e._v("about:debugging")])]),t("li",[e._v("Click on “This Firefox”")]),t("li",[e._v("Click “Load Temporary Add-on…”. This will present you with the "),t("em",[e._v("file")]),e._v(" selection dialog. Navigate to and select your "),t("code",{staticClass:"doc-token"},[e._v("src-bex/manifest.json")]),e._v(" file. "),t("strong",[e._v("Note:")]),e._v(" Firefox requires the manifest file, not the "),t("code",{staticClass:"doc-token"},[e._v("src-bex")]),e._v(" folder like Chromium browsers.")]),t("li",[e._v("You should now see your BEX mounted in Firefox.")])]),t("p",[e._v("More information about debugging Firefox temporary addons can be found in the "),t("doc-link",{attrs:{to:"https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/"}},[e._v("Firefox Extension Workshop")]),e._v(".")],1),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Hot-Module-Reloading-(HMR)"},on:{click:function(o){e.copyHeading("Hot-Module-Reloading-(HMR)")}}},[e._v("Hot Module Reloading (HMR)")]),t("p",[e._v("HMR works with Browser Extension development but does work slightly differently depending on which browser you’re developing on. In both cases, the Quasar application being built will reload when changes are made. The quasar application in this instance would refer to changes made to everything under the "),t("code",{staticClass:"doc-token"},[e._v("src")]),e._v(" folder.")]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[t("strong",[e._v("Chrome vs Firefox Nuances")]),e._v(" - When developing your Browser Extension, you will often need to make changes to the files under the "),t("code",{staticClass:"doc-token"},[e._v("src-bex")]),e._v(" folder as well. This will be done when configuring hooks, setting up popups etc. Firefox will see these changes and automatically re-load the Browser Extension. Chrome on the other hand will not. When you have made these changes in Chrome, you will need to navigate to your Extension (see the Chrome section above) and click on the refresh icon in your Development Browser Extension.")])]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Building-for-Production"},on:{click:function(o){return e.copyHeading("Building-for-Production")}}},[e._v("Building for Production")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ quasar build -m bex\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ..or the longer form:")]),e._v("\n$ quasar build --mode bex\n")])]),t("p",[e._v("When building for production, multiple directories are generated:")]),t("p",[e._v("The new folder has the following structure:")]),t("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[t("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n└── dist/\n    ├── UnPackaged/                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Built code ready for testing in your development environment")]),e._v("\n    └── Packaged/\n        ├── Chrome\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   └── your-project-name.zip     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# A zip file ready for submission to the Chrome Browser Extension Store / Other Chromium based stores.")]),e._v("\n        └── Firefox\n            └── your-project-name.zip     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# A zip file ready for submission to the Firefox Extension Store")]),e._v("\n")])]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("If you want to test out the "),t("code",{staticClass:"doc-token"},[e._v("your-project-name.zip")]),e._v(" file, you can do this by dragging the file into the same place you load the Extension in development mode; for Chrome "),t("code",{staticClass:"doc-token"},[e._v("chrome://extensions")]),e._v(" and Firefox "),t("code",{staticClass:"doc-token"},[e._v("about:debugging")]),e._v(". See the development screenshots above for more information.")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"A-Note-on-Minification"},on:{click:function(o){return e.copyHeading("A-Note-on-Minification")}}},[e._v("A Note on Minification")]),t("p",[e._v("Part of the review process for Browser Extensions in both Chrome and Firefox must allow the relative teams to examine the code being deployed as a live extension. With this in mind, minified code is not allowed. So, to allow for the review process, Quasar will not obfuscate and minify the built code for Browser Extensions.")]),t("p",[e._v("Given any extension will be ran directly on the user’s computer, upload speed isn’t a factor to worry about here, so minifying the code isn’t necessary.")]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Publishing-to-the-Stores"},on:{click:function(o){return e.copyHeading("Publishing-to-the-Stores")}}},[e._v("Publishing to the Stores")]),t("p",[e._v("Since Quasar removes the burden of building and packaging your Browser Extension, once you are finished developing your extension, it is ready to be published. The publishing process differs between browsers, but the official documentation will guide you through the process.")]),t("p",[t("strong",[e._v("Chrome")]),e._v(" - "),t("doc-link",{attrs:{to:"https://developer.chrome.com/webstore/publish"}},[e._v("Publishing a Chrome Browser Extension")])],1),t("p",[t("strong",[e._v("Firefox")]),e._v(" - "),t("doc-link",{attrs:{to:"https://extensionworkshop.com/documentation/publish/"}},[e._v("Publishing a Firefox Add On (Browser Extension)")])],1),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("BEX mode should be compatible with all chromium based browsers. Please refer to their relative documentation on publishing extensions.")])])])},i=[],s=t("8669");const r="BEX Build Commands | Quasar Framework",a="The Quasar CLI list of commands when developing or building a Browser Extension (BEX).";var d={meta:{title:"BEX Build Commands",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:a},ogDesc:{name:"og:description",content:a},twitterDesc:{name:"twitter:description",content:a}}},created(){this.$root.store.toc=[{id:"Developing",title:"Developing"},{id:"Chrome",title:"Chrome",sub:!0},{id:"Other-Chromium-Browsers",title:"Other Chromium Browsers",sub:!0},{id:"Firefox",title:"Firefox",sub:!0},{id:"Hot-Module-Reloading-(HMR)",title:"Hot Module Reloading (HMR)",sub:!0},{id:"Building-for-Production",title:"Building for Production"},{id:"A-Note-on-Minification",title:"A Note on Minification",sub:!0},{id:"Publishing-to-the-Stores",title:"Publishing to the Stores"}],this.nav=[{name:"App Icons for BEX",category:"Developing Browser Extensions",path:"/quasar-cli/developing-browser-extensions/app-icons-browser-extension",dir:"left"},{name:"Types of BEX",category:"Developing Browser Extensions",path:"/quasar-cli/developing-browser-extensions/types-of-bex",dir:"right"}]},methods:{copyHeading:s["a"]}},c=d,l=t("2877"),h=Object(l["a"])(c,n,i,!1,null,null,null);o["default"]=h.exports}}]);