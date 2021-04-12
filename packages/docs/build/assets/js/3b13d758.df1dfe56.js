(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{2722:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||a;return r?c.a.createElement(b,s(s({ref:t},l),{},{components:r})):c.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},697:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(7),a=(r(0),r(2722)),o={id:"src_common_reducers_alert_actions.alertstate",title:"Interface: AlertState",sidebar_label:"AlertState",custom_edit_url:null,hide_title:!0},s={unversionedId:"docs-client-core/interfaces/src_common_reducers_alert_actions.alertstate",id:"docs-client-core/interfaces/src_common_reducers_alert_actions.alertstate",isDocsHomePage:!1,title:"Interface: AlertState",description:"Interface: AlertState",source:"@site/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertstate.md",slug:"/docs-client-core/interfaces/src_common_reducers_alert_actions.alertstate",permalink:"/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertstate",editUrl:null,version:"current",sidebar_label:"AlertState",sidebar:"sidebar",previous:{title:"Interface: AlertAction",permalink:"/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},next:{title:"Interface: AppLoadPercentAction",permalink:"/docs/docs-client-core/interfaces/src_common_reducers_app_actions.apploadpercentaction"}},i=[{value:"Properties",id:"properties",children:[{value:"message",id:"message",children:[]},{value:"type",id:"type",children:[]}]}],l={toc:i};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-alertstate"},"Interface: AlertState"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/docs-client-core/modules/src_common_reducers_alert_actions"},"src/common/reducers/alert/actions"),".AlertState"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"message"},"message"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"message"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/common/reducers/alert/actions.ts#L5"},"packages/client-core/src/common/reducers/alert/actions.ts:5")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"type"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/docs-client-core/modules/src_common_reducers_alert_actions#alerttype"},Object(a.b)("em",{parentName:"a"},"AlertType"))),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/common/reducers/alert/actions.ts#L6"},"packages/client-core/src/common/reducers/alert/actions.ts:6")))}p.isMDXComponent=!0}}]);