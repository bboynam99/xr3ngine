(window.webpackJsonp=window.webpackJsonp||[]).push([[1083],{1152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(1348)),p={id:"pages__app",title:"Module: pages/_app",sidebar_label:"pages/_app",custom_edit_url:null,hide_title:!0},c={unversionedId:"docs/modules/pages__app",id:"docs/modules/pages__app",isDocsHomePage:!1,title:"Module: pages/_app",description:"Module: pages/\\_app",source:"@site/docs/docs/modules/pages__app.md",slug:"/docs/modules/pages__app",permalink:"/docs/docs/modules/pages__app",editUrl:null,version:"current",sidebar_label:"pages/_app",sidebar:"sidebar",previous:{title:"Module: pages/WorkerTest",permalink:"/docs/docs/modules/pages_workertest"},next:{title:"Module: pages/_document",permalink:"/docs/docs/modules/pages__document"}},i=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],l={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-pages_app"},"Module: pages/","_","app"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"default"),": ",Object(o.b)("em",{parentName:"p"},"object")),Object(o.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"contextType"),"?"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"Context"),"<any",">")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"displayName")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"string"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"getInitialProps")),Object(o.b)("td",{parentName:"tr",align:"left"},"(",Object(o.b)("inlineCode",{parentName:"td"},"appCtx"),": ",Object(o.b)("em",{parentName:"td"},"AppContextType"),"<default",">",") => ",Object(o.b)("em",{parentName:"td"},"Promise"),"<{ ",Object(o.b)("inlineCode",{parentName:"td"},"initialProps"),": {} ; ",Object(o.b)("inlineCode",{parentName:"td"},"initialState"),": ",Object(o.b)("em",{parentName:"td"},"any")," ; ",Object(o.b)("inlineCode",{parentName:"td"},"isServer"),": ",Object(o.b)("em",{parentName:"td"},"boolean"),"  }",">")))))}b.isMDXComponent=!0},1348:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=b(r),u=n,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);