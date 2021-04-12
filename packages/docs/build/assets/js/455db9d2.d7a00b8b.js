(window.webpackJsonp=window.webpackJsonp||[]).push([[722],{2722:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),o=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,m=b(e,["components","mdxType","originalType","parentName"]),p=o(n),u=r,d=p["".concat(l,".").concat(u)]||p[u]||s[u]||c;return n?a.a.createElement(d,i(i({ref:t},m),{},{components:n})):a.a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<c;m++)l[m]=n[m];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},792:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),c=(n(0),n(2722)),l={id:"src_terminal_components_terminal_terminal_utils",title:"Module: src/terminal/components/Terminal/terminal-utils",sidebar_label:"src/terminal/components/Terminal/terminal-utils",custom_edit_url:null,hide_title:!0},i={unversionedId:"docs-client-core/modules/src_terminal_components_terminal_terminal_utils",id:"docs-client-core/modules/src_terminal_components_terminal_terminal_utils",isDocsHomePage:!1,title:"Module: src/terminal/components/Terminal/terminal-utils",description:"Module: src/terminal/components/Terminal/terminal-utils",source:"@site/docs/docs-client-core/modules/src_terminal_components_terminal_terminal_utils.md",slug:"/docs-client-core/modules/src_terminal_components_terminal_terminal_utils",permalink:"/docs/docs-client-core/modules/src_terminal_components_terminal_terminal_utils",editUrl:null,version:"current",sidebar_label:"src/terminal/components/Terminal/terminal-utils",sidebar:"sidebar",previous:{title:"Module: src/terminal/components/Terminal/styled-elements",permalink:"/docs/docs-client-core/modules/src_terminal_components_terminal_styled_elements"},next:{title:"Module: src/terminal/components/types",permalink:"/docs/docs-client-core/modules/src_terminal_components_types"}},b=[{value:"Variables",id:"variables",children:[{value:"os",id:"os",children:[]}]},{value:"Functions",id:"functions",children:[{value:"getShortcuts",id:"getshortcuts",children:[]},{value:"modCommands",id:"modcommands",children:[]},{value:"pluginMap",id:"pluginmap",children:[]},{value:"uuidv4",id:"uuidv4",children:[]}]}],m={toc:b};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-srcterminalcomponentsterminalterminal-utils"},"Module: src/terminal/components/Terminal/terminal-utils"),Object(c.b)("h2",{id:"variables"},"Variables"),Object(c.b)("h3",{id:"os"},"os"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Const")," ",Object(c.b)("strong",{parentName:"p"},"os"),": ",Object(c.b)("em",{parentName:"p"},"win")," ","|"," ",Object(c.b)("em",{parentName:"p"},"linux")," ","|"," ",Object(c.b)("em",{parentName:"p"},"darwin")," ","|"," ",Object(c.b)("em",{parentName:"p"},"unknown")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx#L4"},"packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx:4")),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"getshortcuts"},"getShortcuts"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getShortcuts"),"(",Object(c.b)("inlineCode",{parentName:"p"},"shortcuts"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"obj"),": ",Object(c.b)("em",{parentName:"p"},"any"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"shortcuts")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"obj")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx#L26"},"packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx:26")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"modcommands"},"modCommands"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"modCommands"),"(",Object(c.b)("inlineCode",{parentName:"p"},"commands"),": ",Object(c.b)("em",{parentName:"p"},"any"),"): ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"commands")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx#L43"},"packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx:43")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"pluginmap"},"pluginMap"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"pluginMap"),"(",Object(c.b)("inlineCode",{parentName:"p"},"plugins"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"eachHandler"),": ",Object(c.b)("em",{parentName:"p"},"any"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"plugins")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"eachHandler")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx#L6"},"packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx:6")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"uuidv4"},"uuidv4"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"uuidv4"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx#L18"},"packages/client-core/src/terminal/components/Terminal/terminal-utils.tsx:18")))}o.isMDXComponent=!0}}]);