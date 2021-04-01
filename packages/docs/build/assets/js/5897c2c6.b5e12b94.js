(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{1348:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),d=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||p[u]||o;return a?c.a.createElement(m,r(r({ref:t},l),{},{components:a})):c.a.createElement(m,r({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var l=2;l<o;l++)i[l]=a[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},536:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),c=a(7),o=(a(0),a(1348)),i={id:"redux_location_actions",title:"Module: redux/location/actions",sidebar_label:"redux/location/actions",custom_edit_url:null,hide_title:!0},r={unversionedId:"docs-client/modules/redux_location_actions",id:"docs-client/modules/redux_location_actions",isDocsHomePage:!1,title:"Module: redux/location/actions",description:"Module: redux/location/actions",source:"@site/docs/docs-client/modules/redux_location_actions.md",slug:"/docs-client/modules/redux_location_actions",permalink:"/build/docs/docs-client/modules/redux_location_actions",editUrl:null,version:"current",sidebar_label:"redux/location/actions",sidebar:"sidebar",previous:{title:"Module: redux/invite/service",permalink:"/build/docs/docs-client/modules/redux_invite_service"},next:{title:"Module: redux/location/reducers",permalink:"/build/docs/docs-client/modules/redux_location_reducers"}},b=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"LocationsAction",id:"locationsaction",children:[]}]},{value:"Functions",id:"functions",children:[{value:"fetchingCurrentLocation",id:"fetchingcurrentlocation",children:[]},{value:"locationBanCreated",id:"locationbancreated",children:[]},{value:"locationCreated",id:"locationcreated",children:[]},{value:"locationNotFound",id:"locationnotfound",children:[]},{value:"locationPatched",id:"locationpatched",children:[]},{value:"locationRemoved",id:"locationremoved",children:[]},{value:"locationRetrieved",id:"locationretrieved",children:[]},{value:"locationsRetrieved",id:"locationsretrieved",children:[]}]}],l={toc:b};function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-reduxlocationactions"},"Module: redux/location/actions"),Object(o.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_location_actions.fetchingcurrentlocationaction"},"FetchingCurrentLocationAction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationbancreatedaction"},"LocationBanCreatedAction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationcreatedaction"},"LocationCreatedAction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationnotfoundaction"},"LocationNotFoundAction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationpatchedaction"},"LocationPatchedAction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationremovedaction"},"LocationRemovedAction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationretrievedaction"},"LocationRetrievedAction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationsretrievedaction"},"LocationsRetrievedAction"))),Object(o.b)("h2",{id:"type-aliases"},"Type aliases"),Object(o.b)("h3",{id:"locationsaction"},"LocationsAction"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"LocationsAction"),": ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationsretrievedaction"},Object(o.b)("em",{parentName:"a"},"LocationsRetrievedAction"))," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationretrievedaction"},Object(o.b)("em",{parentName:"a"},"LocationRetrievedAction"))," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationbancreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationBanCreatedAction"))," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.fetchingcurrentlocationaction"},Object(o.b)("em",{parentName:"a"},"FetchingCurrentLocationAction"))," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationnotfoundaction"},Object(o.b)("em",{parentName:"a"},"LocationNotFoundAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L49"},"packages/client-core/redux/location/actions.ts:49")),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"fetchingcurrentlocation"},"fetchingCurrentLocation"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"fetchingCurrentLocation"),"(): ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.fetchingcurrentlocationaction"},Object(o.b)("em",{parentName:"a"},"FetchingCurrentLocationAction"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.fetchingcurrentlocationaction"},Object(o.b)("em",{parentName:"a"},"FetchingCurrentLocationAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L98"},"packages/client-core/redux/location/actions.ts:98")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"locationbancreated"},"locationBanCreated"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"locationBanCreated"),"(): ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationbancreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationBanCreatedAction"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationbancreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationBanCreatedAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L92"},"packages/client-core/redux/location/actions.ts:92")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"locationcreated"},"locationCreated"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"locationCreated"),"(",Object(o.b)("inlineCode",{parentName:"p"},"location"),": Location): ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationcreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationCreatedAction"))),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"location")),Object(o.b)("td",{parentName:"tr",align:"left"},"Location")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationcreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationCreatedAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L70"},"packages/client-core/redux/location/actions.ts:70")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"locationnotfound"},"locationNotFound"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"locationNotFound"),"(): ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationnotfoundaction"},Object(o.b)("em",{parentName:"a"},"LocationNotFoundAction"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationnotfoundaction"},Object(o.b)("em",{parentName:"a"},"LocationNotFoundAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L104"},"packages/client-core/redux/location/actions.ts:104")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"locationpatched"},"locationPatched"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"locationPatched"),"(",Object(o.b)("inlineCode",{parentName:"p"},"location"),": Location): ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationcreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationCreatedAction"))),Object(o.b)("h4",{id:"parameters-1"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"location")),Object(o.b)("td",{parentName:"tr",align:"left"},"Location")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationcreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationCreatedAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L78"},"packages/client-core/redux/location/actions.ts:78")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"locationremoved"},"locationRemoved"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"locationRemoved"),"(",Object(o.b)("inlineCode",{parentName:"p"},"location"),": Location): ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationcreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationCreatedAction"))),Object(o.b)("h4",{id:"parameters-2"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"location")),Object(o.b)("td",{parentName:"tr",align:"left"},"Location")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationcreatedaction"},Object(o.b)("em",{parentName:"a"},"LocationCreatedAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L85"},"packages/client-core/redux/location/actions.ts:85")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"locationretrieved"},"locationRetrieved"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"locationRetrieved"),"(",Object(o.b)("inlineCode",{parentName:"p"},"location"),": ",Object(o.b)("em",{parentName:"p"},"any"),"): ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationretrievedaction"},Object(o.b)("em",{parentName:"a"},"LocationRetrievedAction"))),Object(o.b)("h4",{id:"parameters-3"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"location")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"any"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationretrievedaction"},Object(o.b)("em",{parentName:"a"},"LocationRetrievedAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L63"},"packages/client-core/redux/location/actions.ts:63")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"locationsretrieved"},"locationsRetrieved"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"locationsRetrieved"),"(",Object(o.b)("inlineCode",{parentName:"p"},"locations"),": ",Object(o.b)("em",{parentName:"p"},"any"),"): ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationsretrievedaction"},Object(o.b)("em",{parentName:"a"},"LocationsRetrievedAction"))),Object(o.b)("h4",{id:"parameters-4"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"locations")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"any"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/build/docs/docs-client/interfaces/redux_location_actions.locationsretrievedaction"},Object(o.b)("em",{parentName:"a"},"LocationsRetrievedAction"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/location/actions.ts#L56"},"packages/client-core/redux/location/actions.ts:56")))}d.isMDXComponent=!0}}]);