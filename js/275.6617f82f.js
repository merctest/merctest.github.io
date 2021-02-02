(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[275],{7759:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("doc-page",{attrs:{title:"Handling Back Button",nav:t.nav}},[e("p",[t._v("When writing reusable code for building a mobile App and a website, it’s important to know how to handle the “Back” button. More specifically, how to manage buttons on your layout/page that should make your App’s “go back” to the previous page.")]),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[t._v("If you have no knowledge of "),e("doc-link",{attrs:{to:"http://router.vuejs.org/"}},[t._v("Vue Router")]),t._v(", we highly recommend you read and understand how it works first.")],1)]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Cordova%2FCapacitor"},on:{click:function(a){return t.copyHeading("Cordova%2FCapacitor")}}},[t._v("Cordova/Capacitor")]),e("p",[t._v("Quasar handles the back button for you by default, so it can hide any opened Dialogs "),e("strong",[t._v("instead of the default behavior")]),t._v(" which is to return to the previous page (which is not a nice user experience).")]),e("p",[t._v("Also, when on the home route ("),e("code",{staticClass:"doc-token"},[t._v("/")]),t._v(") and user presses the back button on the phone/tablet, Quasar will make your app exit. Should you wish to disable or configure this behavior, then you can do so via quasar.conf.js options:")]),e("ul",[e("li",[e("code",{staticClass:"doc-token"},[t._v("false")]),t._v(" will disable the feature;")]),e("li",[e("code",{staticClass:"doc-token"},[t._v("'*'")]),t._v(" will make your app exit on any page, if the history length is 0;")]),e("li",[t._v("an array of strings (eg. "),e("code",{staticClass:"doc-token"},[t._v("['login', 'home', 'my-page']")]),t._v(") will make your app exit when current path is included in that array (or on default "),e("code",{staticClass:"doc-token"},[t._v("/")]),t._v("). The array automatically filters out non-strings or empty values and normalizes paths to match "),e("code",{staticClass:"doc-token"},[t._v("#/<your-path>")]),t._v(" format.")])]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for Cordova (only!):")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  framework"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cordova"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quasar handles app exit on mobile phone back button.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requires Quasar v1.9.3+ for true/false, v1.12.6+ for '*' wildcard and array values")]),t._v("\n        backButtonExit"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// On the other hand, the following completely")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disables Quasar's back button management.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requires Quasar v1.14.1+")]),t._v("\n        backButton"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for Capacitor (only!)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  framework"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      capacitor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quasar handles app exit on mobile phone back button.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requires Quasar v1.9.3+ for true/false, v1.12.6+ for '*' wildcard and array values")]),t._v("\n        backButtonExit"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// On the other hand, the following completely")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disables Quasar's back button management.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requires Quasar v1.14.1+")]),t._v("\n        backButton"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Navigation-Scenario"},on:{click:function(a){return t.copyHeading("Navigation-Scenario")}}},[t._v("Navigation Scenario")]),e("p",[t._v("Consider this situation: We have an App with two pages (so two routes): a login page (route “/”) and another page with a list of items on multiple layout tabs - let’s call this page “List page” from now on, where each tab has a route like “/list/shoes”, “/list/hats”. The Login page redirects to List page and List page has a “Logout” button, which redirects the user to the Login page.")]),e("p",[t._v("How would you handle this situation? Normally, you’d write code like below for the Login and Logout button (we won’t go into details of handling the login information and communicating with a server as this is outside of the exercise here):")]),e("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Login button --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Login"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Logout button --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/login"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Logout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),e("p",[t._v("Now you build your App and install it on a phone. You open up the App, hit login then logout, then the phone’s back button. What you most likely want is for your App to exit at this point… but it doesn’t! It goes to the “/list” route instead. It’s kind of obvious why. Web history builds up as you hit the buttons:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("# Start App\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length is "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n# Hit Login button\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length is "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n# Hit Logout button\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length is "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])]),e("p",[t._v("What you’d like instead, is when you hit the Logout button, the "),e("code",{staticClass:"doc-token"},[t._v("window.history.length")]),t._v(" to be 1 again. Quasar can handle this automatically for you. Read about the "),e("code",{staticClass:"doc-token"},[t._v("v-go-back")]),t._v(" Vue directive.")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Directive-v-go-back"},on:{click:function(a){return t.copyHeading("Directive-v-go-back")}}},[t._v("Directive v-go-back")]),e("p",[t._v("Let’s rewrite the Logout button to act as we would actually want it to work, which is to make "),e("code",{staticClass:"doc-token"},[t._v("window.history.length")]),t._v(" be 1 again. We’re going to install the directive:")]),e("doc-installation",{attrs:{directives:"GoBack"}}),e("p",[t._v("Then we use it:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Logout button --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-go-back")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Logout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),e("p",[t._v("This directive determines if the Platform is Cordova or Capacitor, and if so, it performs a "),e("code",{staticClass:"doc-token"},[t._v("window.history.back()")]),t._v(" call instead of a "),e("code",{staticClass:"doc-token"},[t._v("$router.push('/')")]),t._v(".")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Quirks"},on:{click:function(a){return t.copyHeading("Quirks")}}},[t._v("Quirks")]),e("p",[t._v('Now you may think everything will work smoothly, but you must be careful about how your app is stacking up the window history. Remember, we started out by saying that the List page has a layout with multiple tabs, each one with its own route ("/list/shoes", “/list/hats”). If we’d use '),e("code",{staticClass:"doc-token"},[t._v('to="/list/shoes"')]),t._v(" and "),e("code",{staticClass:"doc-token"},[t._v('to="/list/hats"')]),t._v(" on your Tabs (read more about "),e("doc-link",{attrs:{to:"/vue-components/tabs"}},[t._v("QTabs")]),t._v("), then window history will build up when switching between the tabs.")],1),e("p",[t._v("This incorrect behavior for apps is due to Vue Router pushing routes to the history by default. What you’d like instead, is for your window history length to stay the same, even if routes change. Fortunately, Vue Router comes to the rescue with the "),e("code",{staticClass:"doc-token"},[t._v("replace")]),t._v(" property, which essentially replaces current route instead of pushing it as a new route.")]),e("p",[t._v("So, besides "),e("code",{staticClass:"doc-token"},[t._v('to="/some/route"')]),t._v(" you should add the "),e("code",{staticClass:"doc-token"},[t._v("replace")]),t._v(" attribute (becoming "),e("code",{staticClass:"doc-token"},[t._v('to="/some/route" replace')]),t._v("). This will replace the current route in the window history rather than pushing it.")]),e("p",[t._v("The same applies to "),e("code",{staticClass:"doc-token"},[t._v("<router-link>")]),t._v("s.")]),e("div",{staticClass:"doc-note doc-note--warning"},[e("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),e("p",[t._v("Always "),e("strong",[t._v("think")]),t._v(" about how you redirect your App to a new route, depending on what you want to achieve. Think if you really want to push a new route to window history or if you want to “replace” the current route. Otherwise the phone/tablet/browser “Back” button won’t work quite as expected. Instead of finally exiting the App, it will make you go through all the routes in the reverse order they were visited. So when you hit back and go to the Login page, you’d expect another back to make the App exit, but it might make your App go to one of the List tabs, depending on the user’s navigation history.")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"GoBack-API"},on:{click:function(a){return t.copyHeading("GoBack-API")}}},[t._v("GoBack API")]),e("doc-api",{attrs:{file:"GoBack"}})],1)},n=[],o=e("8669");const r="Handling Back Button | Quasar Framework",p="How to manage the back button in a Quasar app.";var c={meta:{title:"Handling Back Button",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},created(){this.$root.store.toc=[{id:"Cordova%2FCapacitor",title:"Cordova/Capacitor"},{id:"Navigation-Scenario",title:"Navigation Scenario"},{id:"Directive-v-go-back",title:"Directive v-go-back"},{id:"Quirks",title:"Quirks"},{id:"GoBack-API",title:"GoBack API"}],this.nav=[{name:"Close Popup",category:"Vue Directives",path:"/vue-directives/close-popup",dir:"left"},{name:"Intersection",category:"Vue Directives",path:"/vue-directives/intersection",dir:"right"}]},methods:{copyHeading:o["a"]}},i=c,l=e("2877"),u=Object(l["a"])(i,s,n,!1,null,null,null);a["default"]=u.exports}}]);