(window.webpackJsonp=window.webpackJsonp||[]).push([[913],{1348:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),u=n,m=b["".concat(a,".").concat(u)]||b[u]||d[u]||c;return r?o.a.createElement(m,s(s({ref:t},l),{},{components:r})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},982:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(1348)),a={id:"src_socket_party_socket",title:"Module: src/socket/party-socket",sidebar_label:"src/socket/party-socket",custom_edit_url:null,hide_title:!0},s={unversionedId:"docs-server/modules/src_socket_party_socket",id:"docs-server/modules/src_socket_party_socket",isDocsHomePage:!1,title:"Module: src/socket/party-socket",description:"Module: src/socket/party-socket",source:"@site/docs/docs-server/modules/src_socket_party_socket.md",slug:"/docs-server/modules/src_socket_party_socket",permalink:"/build/docs/docs-server/modules/src_socket_party_socket",editUrl:null,version:"current",sidebar_label:"src/socket/party-socket",sidebar:"sidebar",previous:{title:"Module: src/services/video/video.service",permalink:"/build/docs/docs-server/modules/src_services_video_video_service"},next:{title:"Module: src/storage/local.storage",permalink:"/build/docs/docs-server/modules/src_storage_local_storage"}},i=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],l={toc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-srcsocketparty-socket"},"Module: src/socket/party-socket"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"default"},"default"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"default"),": (",Object(c.b)("inlineCode",{parentName:"p"},"io"),": Server) => ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"io"),": Server): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"io")),Object(c.b)("td",{parentName:"tr",align:"left"},"Server")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/socket/party-socket.ts#L33"},"packages/server/src/socket/party-socket.ts:33")))}p.isMDXComponent=!0}}]);