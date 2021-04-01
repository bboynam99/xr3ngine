(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1348:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=o(r),s=n,m=p["".concat(b,".").concat(s)]||p[s]||u[s]||c;return r?a.a.createElement(m,d(d({ref:t},l),{},{components:r})):a.a.createElement(m,d({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,b=new Array(c);b[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,b[1]=d;for(var l=2;l<c;l++)b[l]=r[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return o}));var n=r(3),a=r(7),c=(r(0),r(1348)),b={id:"redux_feed_reducers",title:"Module: redux/feed/reducers",sidebar_label:"redux/feed/reducers",custom_edit_url:null,hide_title:!0},d={unversionedId:"docs-client/modules/redux_feed_reducers",id:"docs-client/modules/redux_feed_reducers",isDocsHomePage:!1,title:"Module: redux/feed/reducers",description:"Module: redux/feed/reducers",source:"@site/docs/docs-client/modules/redux_feed_reducers.md",slug:"/docs-client/modules/redux_feed_reducers",permalink:"/build/docs/docs-client/modules/redux_feed_reducers",editUrl:null,version:"current",sidebar_label:"redux/feed/reducers",sidebar:"sidebar",previous:{title:"Module: redux/feed/actions",permalink:"/build/docs/docs-client/modules/redux_feed_actions"},next:{title:"Module: redux/feed/selector",permalink:"/build/docs/docs-client/modules/redux_feed_selector"}},i=[{value:"Variables",id:"variables",children:[{value:"initialState",id:"initialstate",children:[]}]},{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[]}]}],l={toc:i};function o(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-reduxfeedreducers"},"Module: redux/feed/reducers"),Object(c.b)("h2",{id:"variables"},"Variables"),Object(c.b)("h3",{id:"initialstate"},"initialState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Const")," ",Object(c.b)("strong",{parentName:"p"},"initialState"),": ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"feeds")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"object"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"feeds.feed")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"object"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"feeds.feeds")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"),"[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"feeds.feedsBookmark")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"),"[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"feeds.feedsCreator")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"),"[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"feeds.feedsFeatured")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"),"[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"feeds.fetching")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean"))))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/feed/reducers.ts#L24"},"packages/client-core/redux/feed/reducers.ts:24")),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"default"},"default"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Const"),Object(c.b)("strong",{parentName:"p"},"default"),"(",Object(c.b)("inlineCode",{parentName:"p"},"state?"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"action"),": ",Object(c.b)("a",{parentName:"p",href:"/build/docs/docs-client/modules/redux_feed_actions#feedsaction"},Object(c.b)("em",{parentName:"a"},"FeedsAction")),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"state")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"action")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/build/docs/docs-client/modules/redux_feed_actions#feedsaction"},Object(c.b)("em",{parentName:"a"},"FeedsAction")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/feed/reducers.ts#L37"},"packages/client-core/redux/feed/reducers.ts:37")))}o.isMDXComponent=!0}}]);