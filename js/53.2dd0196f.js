(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{9801:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{title:"Grid Row",related:t.related,nav:t.nav}},[o("p",[t._v("In the hope that you’ve previously read the "),o("doc-link",{attrs:{to:"/layout/grid/introduction-to-flexbox"}},[t._v("Introduction to Flexbox")]),t._v(" theory, let’s get deeper into Rows.")],1),o("p",[t._v("Utilize breakpoint-specific column classes for equal-width columns. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Equal-width"},on:{click:function(e){return t.copyHeading("Equal-width")}}},[t._v("Equal-width")]),o("p",[t._v("For example, here are two grid layouts that apply to every device and viewport, from xs to xl.")]),o("doc-example",{attrs:{title:"Equal Width Example",file:"grid/RowEqualWidth"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Setting-one-column-width"},on:{click:function(e){return t.copyHeading("Setting-one-column-width")}}},[t._v("Setting one column width")]),o("p",[t._v("Auto-layout for flexbox grid columns also means you can set the width of one column and the others will automatically resize around it. You may use predefined grid classes (as shown below) or inline widths. Note that the other columns will resize no matter the width of the center column.")]),o("doc-example",{attrs:{title:"Setting one column width",file:"grid/RowColumnWidth"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Variable-width-content"},on:{click:function(e){return t.copyHeading("Variable-width-content")}}},[t._v("Variable width content")]),o("p",[t._v("Using the "),o("code",{staticClass:"doc-token"},[t._v("col-{breakpoint}-auto")]),t._v(" classes, columns can size itself based on the natural width of its content. This is super handy with single line content like inputs, numbers, etc (see last example on this page). This, in conjunction with horizontal alignment classes, is very useful for centering layouts with uneven column sizes as viewport width changes.")]),o("doc-example",{attrs:{title:"Variable width content",file:"grid/RowVariableWidth"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Responsive-classes"},on:{click:function(e){return t.copyHeading("Responsive-classes")}}},[t._v("Responsive classes")]),o("p",[t._v("The grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"All-breakpoints"},on:{click:function(e){return t.copyHeading("All-breakpoints")}}},[t._v("All breakpoints")]),o("p",[t._v("For grids that are the same from the smallest of devices to the largest, use the "),o("code",{staticClass:"doc-token"},[t._v(".col")]),t._v(" and "),o("code",{staticClass:"doc-token"},[t._v(".col-*")]),t._v(" classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to .col.")]),o("doc-example",{attrs:{title:"All breakpoints",file:"grid/RowAllBreakpoints"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Stacked-to-horizontal"},on:{click:function(e){return t.copyHeading("Stacked-to-horizontal")}}},[t._v("Stacked to horizontal")]),o("p",[t._v("Using a combination of "),o("code",{staticClass:"doc-token"},[t._v(".col-12")]),t._v(" and "),o("code",{staticClass:"doc-token"},[t._v(".col-md-*")]),t._v(" classes, you can create a basic grid system that starts out stacked on small devices before becoming horizontal on desktop (medium) devices.")]),o("doc-example",{attrs:{title:"Stacked to horizontal",file:"grid/RowStackedToHorizontal"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Mix-and-match"},on:{click:function(e){return t.copyHeading("Mix-and-match")}}},[t._v("Mix and match")]),o("p",[t._v("Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.")]),o("doc-example",{attrs:{title:"Mix and match",file:"grid/RowMixAndMatch"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Alignment"},on:{click:function(e){return t.copyHeading("Alignment")}}},[t._v("Alignment")]),o("p",[t._v("Use flexbox alignment utilities to vertically and horizontally align columns.")]),o("doc-example",{attrs:{title:"Vertical alignment",file:"grid/RowVerticalAlignment"}}),o("doc-example",{attrs:{title:"Horizontal alignment",file:"grid/RowHorizontalAlignment"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Column-wrapping"},on:{click:function(e){return t.copyHeading("Column-wrapping")}}},[t._v("Column wrapping")]),o("p",[t._v("If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.")]),o("doc-example",{attrs:{title:"Column wrapping",file:"grid/RowColumnWrapping"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Reordering"},on:{click:function(e){return t.copyHeading("Reordering")}}},[t._v("Reordering")]),o("doc-example",{attrs:{title:"Reverse",file:"grid/RowReverse"}}),o("doc-example",{attrs:{title:"Flex order",file:"grid/RowFlexOrder"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Offsetting-columns"},on:{click:function(e){return t.copyHeading("Offsetting-columns")}}},[t._v("Offsetting columns")]),o("p",[t._v("Move columns to the right using "),o("code",{staticClass:"doc-token"},[t._v(".offset-md-*")]),t._v(" classes. These classes increase the left margin of a column by * columns. For example, "),o("code",{staticClass:"doc-token"},[t._v(".offset-md-4")]),t._v(" moves "),o("code",{staticClass:"doc-token"},[t._v(".col-md-4")]),t._v(" over four columns.")]),o("doc-example",{attrs:{title:"Offsetting columns",file:"grid/RowOffsettingColumns"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Nesting"},on:{click:function(e){return t.copyHeading("Nesting")}}},[t._v("Nesting")]),o("p",[t._v("To nest your content with the default grid, add a new .row and set of "),o("code",{staticClass:"doc-token"},[t._v(".col-sm-*")]),t._v(" columns within an existing "),o("code",{staticClass:"doc-token"},[t._v(".col-sm-*")]),t._v(" column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).")]),o("doc-example",{attrs:{title:"Nesting",file:"grid/RowNesting"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Flex-Playground"},on:{click:function(e){return t.copyHeading("Flex-Playground")}}},[t._v("Flex Playground")]),o("p",[t._v("To see the Flex in action, you can use the Flex Playground to interactively learn more.")]),o("q-btn",{attrs:{push:"",color:"primary","icon-right":"launch",label:"Flex Playground",to:"/layout/grid/flex-playground"}})],1)},n=[],a=o("8669");const l="Grid Row | Quasar Framework",s="How to use the Quasar grid for rows.";var c={meta:{title:"Grid Row",meta:{title:{name:"title",content:l},ogTitle:{name:"og:title",content:l},twitterTitle:{name:"twitter:title",content:l},description:{name:"description",content:s},ogDesc:{name:"og:description",content:s},twitterDesc:{name:"twitter:description",content:s}}},created(){this.$root.store.toc=[{id:"Equal-width",title:"Equal-width"},{id:"Setting-one-column-width",title:"Setting one column width"},{id:"Variable-width-content",title:"Variable width content"},{id:"Responsive-classes",title:"Responsive classes"},{id:"All-breakpoints",title:"All breakpoints",sub:!0},{id:"Stacked-to-horizontal",title:"Stacked to horizontal",sub:!0},{id:"Mix-and-match",title:"Mix and match",sub:!0},{id:"Alignment",title:"Alignment",sub:!0},{id:"Column-wrapping",title:"Column wrapping",sub:!0},{id:"Reordering",title:"Reordering",sub:!0},{id:"Offsetting-columns",title:"Offsetting columns",sub:!0},{id:"Nesting",title:"Nesting",sub:!0},{id:"Flex-Playground",title:"Flex Playground"}],this.related=[{name:"Introduction to Flexbox",category:"Flex Grid",path:"/layout/grid/introduction-to-flexbox"},{name:"Grid Column",category:"Flex Grid",path:"/layout/grid/column"},{name:"Grid Gutter",category:"Flex Grid",path:"/layout/grid/gutter"},{name:"Flex Playground",category:"Flex Grid",path:"/layout/grid/flex-playground"}],this.nav=[{name:"Introduction to Flexbox",category:"Flex Grid",path:"/layout/grid/introduction-to-flexbox",dir:"left"},{name:"Grid Column",category:"Flex Grid",path:"/layout/grid/column",dir:"right"}]},methods:{copyHeading:a["a"]}},r=c,d=o("2877"),u=Object(d["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports}}]);