(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[265],{a56f:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{title:"QTime",related:t.related,nav:t.nav}},[o("p",[t._v("The QTime component provides a method to input time.")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("p",[t._v("For handling date and/or time, also check out "),o("doc-link",{attrs:{to:"/quasar-utils/date-utils"}},[t._v("Quasar Date Utils")]),t._v(".")],1)]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),o("doc-installation",{attrs:{components:"QTime"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),o("p",[t._v("Notice that the model is a String only.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic"},on:{click:function(e){return t.copyHeading("Basic")}}},[t._v("Basic")]),o("doc-example",{attrs:{title:"Basic",file:"QTime/Basic",overflow:""}}),o("doc-example",{attrs:{title:"Landscape",file:"QTime/Landscape",overflow:""}}),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("p",[t._v("For landscape mode, you can use it along with "),o("code",{staticClass:"doc-token"},[t._v("$q.screen")]),t._v(" to make QTime responsive. Example: "),o("code",{staticClass:"doc-token"},[t._v(':landscape="$q.screen.gt.xs"')]),t._v(". More info: "),o("doc-link",{attrs:{to:"/options/screen-plugin"}},[t._v("Quasar Screen Plugin")]),t._v(".")],1)]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Functionality"},on:{click:function(e){return t.copyHeading("Functionality")}}},[t._v("Functionality")]),o("p",[t._v("The 24 hour format is applied depending on the "),o("doc-link",{attrs:{to:"/options/quasar-language-packs"}},[t._v("Quasar Language Pack")]),t._v(" that you’ve set, but you can also force it, like in the example below.")],1),o("doc-example",{attrs:{title:"24h format",file:"QTime/Format24h",overflow:""}}),o("p",[t._v("Clicking on the “Now” button sets time to current user time:")]),o("doc-example",{attrs:{title:"Now button",file:"QTime/NowBtn",overflow:""}}),o("doc-example",{attrs:{title:"Disable and readonly",file:"QTime/DisableReadonly",overflow:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Model-mask"},on:{click:function(e){return t.copyHeading("Model-mask")}}},[t._v("Model mask")]),o("p",[t._v("The default model mask is "),o("code",{staticClass:"doc-token"},[t._v("HH:mm")]),t._v(" (or "),o("code",{staticClass:"doc-token"},[t._v("HH:mm:ss")]),t._v(" when using "),o("code",{staticClass:"doc-token"},[t._v("with-seconds")]),t._v(" prop), however you can use custom masks too.")]),o("p",[t._v("The "),o("code",{staticClass:"doc-token"},[t._v("mask")]),t._v(" prop tokens can be found at "),o("doc-link",{attrs:{to:"/quasar-utils/date-utils#Format-for-display"}},[t._v("Quasar Utils > Date utils")]),t._v(".")],1),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("Note on SSR")]),o("p",[t._v("Using "),o("code",{staticClass:"doc-token"},[t._v("x")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("X")]),t._v(" (timestamps) in the mask may cause hydration errors on the client, because decoding the model String must be done with "),o("code",{staticClass:"doc-token"},[t._v("new Date()")]),t._v(" which takes into account the local timezone. As a result, if the server is in a different timezone than the client, then the rendered output of the server will differ than the one on the client so hydration will fail.")])]),o("div",{staticClass:"doc-note doc-note--danger"},[o("p",{staticClass:"doc-note__title"},[t._v("Note on persian calendar")]),o("p",[t._v("When using the persian calendar, the mask for QTime is forced to "),o("code",{staticClass:"doc-token"},[t._v("HH:mm")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("HH:mm:ss")]),t._v(" (if "),o("code",{staticClass:"doc-token"},[t._v("with-seconds")]),t._v(" is specified).")])]),o("doc-example",{attrs:{title:"Simple mask",file:"QTime/MaskSimple",overflow:""}}),o("p",[t._v("If you want to insert strings into your mask, make sure you escape them by surrounding them with "),o("code",{staticClass:"doc-token"},[t._v("[")]),t._v(" and "),o("code",{staticClass:"doc-token"},[t._v("]")]),t._v(", otherwise the characters might be interpreted as format tokens.")]),o("doc-example",{attrs:{title:"Mask with escaped characters",file:"QTime/MaskEscape",overflow:""}}),o("p",[t._v("Using the mask to connect a "),o("doc-link",{attrs:{to:"/vue-components/date"}},[t._v("QDate")]),t._v(" and QTime to the same model:")],1),o("doc-example",{attrs:{title:"QDate and QTime on same model",file:"QTime/MaskDateTime",overflow:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Custom-ad-hoc-locale"},on:{click:function(e){return t.copyHeading("Custom-ad-hoc-locale")}}},[t._v("Custom ad-hoc locale")]),o("p",[t._v("If, for some reason, you need to use a custom ad-hoc locale rather than the current Quasar Language Pack that has been set, you can use the "),o("code",{staticClass:"doc-token"},[t._v("locale")]),t._v(" prop:")]),o("doc-example",{attrs:{title:"Custom ad-hoc locale",file:"QTime/CustomLocale",overflow:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Coloring"},on:{click:function(e){return t.copyHeading("Coloring")}}},[t._v("Coloring")]),o("doc-example",{attrs:{title:"Coloring",file:"QTime/Color",overflow:""}}),o("doc-example",{attrs:{title:"Dark",file:"QTime/Dark",overflow:"",dark:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Limiting-options"},on:{click:function(e){return t.copyHeading("Limiting-options")}}},[t._v("Limiting options")]),o("ul",[o("li",[t._v("You can use the "),o("code",{staticClass:"doc-token"},[t._v("hour-options")]),t._v(", "),o("code",{staticClass:"doc-token"},[t._v("minute-options")]),t._v(" and "),o("code",{staticClass:"doc-token"},[t._v("second-options")]),t._v(" props to limit user selection to certain times.")]),o("li",[t._v("Alternatively, for a more in-depth way of limiting options, you can also supply a function (second example below) to "),o("code",{staticClass:"doc-token"},[t._v("options-fn")]),t._v(" prop.")])]),o("doc-example",{attrs:{title:"Options",file:"QTime/Options",overflow:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"With-QInput"},on:{click:function(e){return t.copyHeading("With-QInput")}}},[t._v("With QInput")]),o("doc-example",{attrs:{title:"Input",file:"QTime/Input",overflow:""}}),o("p",[t._v("Connecting a QDate and QTime with same model on a QInput:")]),o("doc-example",{attrs:{title:"QDate and QTime with QInput",file:"QTime/InputFull",overflow:""}}),o("p",[t._v("The following are "),o("strong",[t._v("helpers")]),t._v(" for QInput "),o("code",{staticClass:"doc-token"},[t._v("mask")]),t._v(" and "),o("code",{staticClass:"doc-token"},[t._v("rules")]),t._v(" props. You can use these for convenience or write the string specifying your "),o("doc-link",{attrs:{to:"/vue-components/input#Mask"}},[t._v("custom needs")]),t._v(".")],1),o("ul",[o("li",[t._v("Property "),o("code",{staticClass:"doc-token"},[t._v("mask")]),t._v(" helpers: "),o("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/blob/dev/ui/src/mixins/mask.js#L2"}},[t._v("full list")]),t._v(".")],1),o("li",[t._v("Property "),o("code",{staticClass:"doc-token"},[t._v("rules")]),t._v(" helpers: "),o("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js"}},[t._v("full list")]),t._v(".")],1)]),o("p",[t._v("Examples: “date”, “time”, “fulltime”.")]),o("p",[t._v("More info: "),o("doc-link",{attrs:{to:"/vue-components/input"}},[t._v("QInput")]),t._v(".")],1),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"With-additional-buttons"},on:{click:function(e){return t.copyHeading("With-additional-buttons")}}},[t._v("With additional buttons "),o("q-badge",{attrs:{align:"top",label:"v1.2.8+"}})],1),o("p",[t._v("You can use the default slot for adding buttons:")]),o("doc-example",{attrs:{title:"With additional buttons",file:"QTime/AdditionalButtons",overflow:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Native-form-submit"},on:{click:function(e){return t.copyHeading("Native-form-submit")}}},[t._v("Native form submit "),o("q-badge",{attrs:{align:"top",label:"v1.9+"}})],1),o("p",[t._v("When dealing with a native form which has an "),o("code",{staticClass:"doc-token"},[t._v("action")]),t._v(" and a "),o("code",{staticClass:"doc-token"},[t._v("method")]),t._v(" (eg. when using Quasar with ASP.NET controllers), you need to specify the "),o("code",{staticClass:"doc-token"},[t._v("name")]),t._v(" property on QTime, otherwise formData will not contain it (if it should):")]),o("doc-example",{attrs:{title:"Native form",file:"QTime/NativeForm"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QTime-API"},on:{click:function(e){return t.copyHeading("QTime-API")}}},[t._v("QTime API")]),o("doc-api",{attrs:{file:"QTime"}})],1)},i=[],s=o("8669");const n="QTime | Quasar Framework",c="The QTime component provides a method to input time.";var l={meta:{title:"QTime",meta:{title:{name:"title",content:n},ogTitle:{name:"og:title",content:n},twitterTitle:{name:"twitter:title",content:n},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Basic",title:"Basic",sub:!0},{id:"Functionality",title:"Functionality",sub:!0},{id:"Model-mask",title:"Model mask",sub:!0},{id:"Custom-ad-hoc-locale",title:"Custom ad-hoc locale",sub:!0},{id:"Coloring",title:"Coloring",sub:!0},{id:"Limiting-options",title:"Limiting options",sub:!0},{id:"With-QInput",title:"With QInput",sub:!0},{id:"With-additional-buttons",title:"With additional buttons",sub:!0},{id:"Native-form-submit",title:"Native form submit",sub:!0},{id:"QTime-API",title:"QTime API"}],this.related=[{name:"Date Picker",category:"Form Components",path:"/vue-components/date"},{name:"Date Utils",category:"Quasar Utils",path:"/quasar-utils/date-utils"},{name:"Field (wrapper)",category:"Form Components",path:"/vue-components/field"}],this.nav=[{name:"Range",category:"Form Components",path:"/vue-components/range",dir:"left"},{name:"Date Picker",category:"Form Components",path:"/vue-components/date",dir:"right"}]},methods:{copyHeading:s["a"]}},d=l,r=o("2877"),m=Object(r["a"])(d,a,i,!1,null,null,null);e["default"]=m.exports}}]);