(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var s=n(0),a=n.n(s);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=s,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(u,l(l({ref:t},i),{},{components:n})):a.a.createElement(u,l({ref:t},i))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var i=2;i<o;i++)r[i]=n[i];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var s=n(3),a=n(7),o=(n(0),n(1348)),r={id:"components_editor_assets_assetspanel",title:"Module: components/editor/assets/AssetsPanel",sidebar_label:"components/editor/assets/AssetsPanel",custom_edit_url:null,hide_title:!0},l={unversionedId:"docs-client/modules/components_editor_assets_assetspanel",id:"docs-client/modules/components_editor_assets_assetspanel",isDocsHomePage:!1,title:"Module: components/editor/assets/AssetsPanel",description:"Module: components/editor/assets/AssetsPanel",source:"@site/docs/docs-client/modules/components_editor_assets_assetspanel.md",slug:"/docs-client/modules/components_editor_assets_assetspanel",permalink:"/docs/docs-client/modules/components_editor_assets_assetspanel",editUrl:null,version:"current",sidebar_label:"components/editor/assets/AssetsPanel",sidebar:"sidebar",previous:{title:"Module: components/editor/assets/AssetTooltip",permalink:"/docs/docs-client/modules/components_editor_assets_assettooltip"},next:{title:"Module: components/editor/assets/AudioPreview",permalink:"/docs/docs-client/modules/components_editor_assets_audiopreview"}},c=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Namespaces",id:"namespaces",children:[]}]},{value:"Variables",id:"variables",children:[{value:"AssetPanelContentContainer",id:"assetpanelcontentcontainer",children:[]},{value:"AssetPanelToolbarContent",id:"assetpaneltoolbarcontent",children:[]}]},{value:"Functions",id:"functions",children:[{value:"AssetsPanelToolbar",id:"assetspaneltoolbar",children:[]},{value:"default",id:"default",children:[]}]}],i={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-componentseditorassetsassetspanel"},"Module: components/editor/assets/AssetsPanel"),Object(o.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(o.b)("h3",{id:"namespaces"},"Namespaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/docs-client/modules/components_editor_assets_assetspanel.assetspaneltoolbar"},"AssetsPanelToolbar"))),Object(o.b)("h2",{id:"variables"},"Variables"),Object(o.b)("h3",{id:"assetpanelcontentcontainer"},"AssetPanelContentContainer"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"AssetPanelContentContainer"),": ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"[AssetPanelContentContainer container element for asset panel]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/assets/AssetsPanel.tsx#L84"},"packages/client-core/components/editor/assets/AssetsPanel.tsx:84")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"assetpaneltoolbarcontent"},"AssetPanelToolbarContent"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"AssetPanelToolbarContent"),": ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"[AssetPanelToolbarContent used to provide styles toolbar content]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/assets/AssetsPanel.tsx#L37"},"packages/client-core/components/editor/assets/AssetsPanel.tsx:37")),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"assetspaneltoolbar"},"AssetsPanelToolbar"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"AssetsPanelToolbar"),"(",Object(o.b)("inlineCode",{parentName:"p"},"__namedParameters"),": ",Object(o.b)("em",{parentName:"p"},"Object"),"): ",Object(o.b)("em",{parentName:"p"},"Element")),Object(o.b)("p",null,"[AssetsPanelToolbar used to create view elements for toolbar on asset penal]"),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"__namedParameters")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"Object"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Element")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/assets/AssetsPanel.tsx#L53"},"packages/client-core/components/editor/assets/AssetsPanel.tsx:53")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"default"),"(): ",Object(o.b)("em",{parentName:"p"},"Element")),Object(o.b)("p",null,"[AssetsPanel used to render view for AssetsPanel]"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Element")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/assets/AssetsPanel.tsx#L103"},"packages/client-core/components/editor/assets/AssetsPanel.tsx:103")))}b.isMDXComponent=!0}}]);