(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{d028:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{title:"Grid Gutter",related:t.related,nav:t.nav}},[o("p",[t._v("In the hope that you’ve previously read the "),o("doc-link",{attrs:{to:"/layout/grid/introduction-to-flexbox"}},[t._v("Introduction to Flexbox")]),t._v(" theory, let’s get deeper into Gutters.")],1),o("p",[t._v("Gutter Quasar CSS classes offer an easy way to space out elements (especially in a "),o("doc-link",{attrs:{to:"/layout/grid/row"}},[t._v("Grid Row")]),t._v(") one from each other at equal distance.")],1),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Types"},on:{click:function(e){return t.copyHeading("Types")}}},[t._v("Types")]),o("p",[t._v("There are two main types of gutters depending on your use-case: "),o("code",{staticClass:"doc-token"},[t._v("q-gutter-{size}")]),t._v(" and "),o("code",{staticClass:"doc-token"},[t._v("q-col-gutter-{size}")]),t._v(". The first is to be used when the elements that you want to distance one from each other don’t use "),o("code",{staticClass:"doc-token"},[t._v("col-*")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("offset-*")]),t._v(" classes that specify a width, and the latter is to be used when they do have "),o("code",{staticClass:"doc-token"},[t._v("col-*")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("offset-*")]),t._v(" classes specifying a width.")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("p",[t._v("Suffixes ("),o("code",{staticClass:"doc-token"},[t._v("-none")]),t._v(", "),o("code",{staticClass:"doc-token"},[t._v("-xs")]),t._v(", "),o("code",{staticClass:"doc-token"},[t._v("-sm")]),t._v(", "),o("code",{staticClass:"doc-token"},[t._v("-md")]),t._v(", "),o("code",{staticClass:"doc-token"},[t._v("-lg")]),t._v(", "),o("code",{staticClass:"doc-token"},[t._v("-xl")]),t._v(") do not refer to device screen size, but to the size of gutter between elements.")])]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Classes-%E2%80%9Cq-gutter-%7Bsize%7D%E2%80%9D"},on:{click:function(e){return t.copyHeading("Classes-%E2%80%9Cq-gutter-%7Bsize%7D%E2%80%9D")}}},[t._v("Classes “q-gutter-{size}”")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("The "),o("code",{staticClass:"doc-token"},[t._v("q-gutter-*")]),t._v(" classes apply a "),o("strong",[t._v("negative top and left margins")]),t._v(" to the parent and a "),o("strong",[t._v("positive top and left margins")]),t._v(" to the children. Take this into account when working with the other "),o("doc-link",{attrs:{to:"/style/spacing"}},[t._v("Spacing classes")]),t._v(" so as to not to break the gutter’s css.")],1)]),o("p",[t._v("These classes are to be used when the direct children don’t have "),o("code",{staticClass:"doc-token"},[t._v("col-*")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("offset-*")]),t._v(" classes specifying a width.")]),o("doc-example",{attrs:{title:"Sizes for q-gutter",file:"grid/GutterSize"}}),o("p",[t._v("There’s also the "),o("code",{staticClass:"doc-token"},[t._v("q-gutter-none")]),t._v(" class (equivalent to: no gutter applied) which wasn’t included in the example above.")]),o("doc-example",{attrs:{title:"Horizontal only q-gutter",file:"grid/GutterHorizontal"}}),o("doc-example",{attrs:{title:"Vertical only q-gutter",file:"grid/GutterVertical"}}),o("doc-example",{attrs:{title:"Mixed horizontal and vertical q-gutter",file:"grid/GutterMixed"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Classes-%E2%80%9Cq-col-gutter-%7Bsize%7D%E2%80%9D"},on:{click:function(e){return t.copyHeading("Classes-%E2%80%9Cq-col-gutter-%7Bsize%7D%E2%80%9D")}}},[t._v("Classes “q-col-gutter-{size}”")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("The "),o("code",{staticClass:"doc-token"},[t._v("q-col-gutter-*")]),t._v(" classes apply a "),o("strong",[t._v("negative top and left margins")]),t._v(" to the parent and a "),o("strong",[t._v("positive top and left paddings")]),t._v(" to the children. Take this into account when working with the other "),o("doc-link",{attrs:{to:"/style/spacing"}},[t._v("Spacing classes")]),t._v(" so as to not to break the gutter’s css.")],1)]),o("p",[t._v("These classes are to be used when the direct children have "),o("code",{staticClass:"doc-token"},[t._v("col-*")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("offset-*")]),t._v(" classes that specify a width.")]),o("doc-example",{attrs:{title:"Sizes for q-col-gutter",file:"grid/ColGutterSize"}}),o("doc-example",{attrs:{title:"Horizontal only q-col-gutter",file:"grid/ColGutterHorizontal"}}),o("doc-example",{attrs:{title:"Vertical only q-col-gutter",file:"grid/ColGutterVertical"}}),o("doc-example",{attrs:{title:"Mixed horizontal and vertical q-col-gutter",file:"grid/ColGutterMixed"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Pros%2C-cons-and-how-to-workaround-problems---%E2%80%9Cq-gutter-%7Bsize%7D%E2%80%9D-vs.-%E2%80%9Cq-col-gutter-%7Bsize%7D%E2%80%9D"},on:{click:function(e){return t.copyHeading("Pros%2C-cons-and-how-to-workaround-problems---%E2%80%9Cq-gutter-%7Bsize%7D%E2%80%9D-vs.-%E2%80%9Cq-col-gutter-%7Bsize%7D%E2%80%9D")}}},[t._v("Pros, cons and how to workaround problems - “q-gutter-{size}” vs. “q-col-gutter-{size}”")]),o("p",[t._v("Both set of classes have pros and cons.")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("Because both "),o("code",{staticClass:"doc-token"},[t._v("q-gutter-*")]),t._v(" and "),o("code",{staticClass:"doc-token"},[t._v("q-col-gutter-*")]),t._v(" classes apply a "),o("strong",[t._v("negative top and left margins")]),t._v(" to the parent you should not apply styling targeting background, margin or border related properties on the parent.")]),o("p",[t._v("Instead you need to wrap them in a container, apply the styling on the container, and add "),o("code",{staticClass:"doc-token"},[t._v("overflow-auto")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("row")]),t._v(" class "),o("strong",[t._v("on the container")])])]),o("doc-example",{attrs:{title:"Parent styling",file:"grid/ParentStyling"}}),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("p",[t._v("The "),o("code",{staticClass:"doc-token"},[t._v("q-gutter-*")]),t._v(" classes "),o("strong",[t._v("do not change")]),t._v(" the internal dimensions of the children, so you can use "),o("code",{staticClass:"doc-token"},[t._v("background")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("border")]),t._v(" directly on children.")])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("The "),o("code",{staticClass:"doc-token"},[t._v("q-gutter-*")]),t._v(" classes "),o("strong",[t._v("do change")]),t._v(" the external dimensions of the children, so you cannot use "),o("code",{staticClass:"doc-token"},[t._v("col-*")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("offset-*")]),t._v(" classes specifying a width on children anymore.")])]),o("doc-example",{attrs:{title:"Children size compare",file:"grid/ChildrenSizeCompare"}}),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("Because "),o("code",{staticClass:"doc-token"},[t._v("q-col-gutter-*")]),t._v(" classes apply a "),o("strong",[t._v("negative top and left padding")]),t._v(" to the children you should not apply styling targeting background, padding or border related properties on the children. Instead you need to put the styled element inside the child and apply the styling on that element.")])]),o("doc-example",{attrs:{title:"Children styling",file:"grid/ChildrenStyling"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Flex-Grid-Playground"},on:{click:function(e){return t.copyHeading("Flex-Grid-Playground")}}},[t._v("Flex Grid Playground")]),o("p",[t._v("To see the Flex in action, you can use the Flex Playground to interactively learn more.")]),o("q-btn",{attrs:{push:"",color:"primary","icon-right":"launch",label:"Flex Playground",to:"/layout/grid/flex-playground"}})],1)},a=[],i=o("8669");const n="Grid Gutter | Quasar Framework",r="How to use the Quasar grid for gutter spaces.";var c={meta:{title:"Grid Gutter",meta:{title:{name:"title",content:n},ogTitle:{name:"og:title",content:n},twitterTitle:{name:"twitter:title",content:n},description:{name:"description",content:r},ogDesc:{name:"og:description",content:r},twitterDesc:{name:"twitter:description",content:r}}},created(){this.$root.store.toc=[{id:"Types",title:"Types"},{id:"Classes-%E2%80%9Cq-gutter-%7Bsize%7D%E2%80%9D",title:"Classes “q-gutter-{size}”"},{id:"Classes-%E2%80%9Cq-col-gutter-%7Bsize%7D%E2%80%9D",title:"Classes “q-col-gutter-{size}”"},{id:"Pros%2C-cons-and-how-to-workaround-problems---%E2%80%9Cq-gutter-%7Bsize%7D%E2%80%9D-vs.-%E2%80%9Cq-col-gutter-%7Bsize%7D%E2%80%9D",title:"Pros, cons and how to workaround problems - “q-gutter-{size}” vs. “q-col-gutter-{size}”"},{id:"Flex-Grid-Playground",title:"Flex Grid Playground"}],this.related=[{name:"Introduction to Flexbox",category:"Flex Grid",path:"/layout/grid/introduction-to-flexbox"},{name:"Grid Row",category:"Flex Grid",path:"/layout/grid/row"},{name:"Grid Column",category:"Flex Grid",path:"/layout/grid/column"},{name:"Flex Playground",category:"Flex Grid",path:"/layout/grid/flex-playground"}],this.nav=[{name:"Grid Column",category:"Flex Grid",path:"/layout/grid/column",dir:"left"},{name:"Flexbox patterns",category:"Flex Grid",path:"/layout/grid/flexbox-patterns",dir:"right"}]},methods:{copyHeading:i["a"]}},l=c,d=o("2877"),g=Object(d["a"])(l,s,a,!1,null,null,null);e["default"]=g.exports}}]);