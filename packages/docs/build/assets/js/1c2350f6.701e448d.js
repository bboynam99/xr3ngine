(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{2722:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=d(a),m=r,O=i["".concat(p,".").concat(m)]||i[m]||o[m]||b;return a?n.a.createElement(O,c(c({ref:t},s),{},{components:a})):n.a.createElement(O,c({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,p=new Array(b);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<b;s++)p[s]=a[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},358:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),b=(a(0),a(2722)),p={id:"media_upload_presigned_upload_presigned_class.uploadpresigned",title:"Class: UploadPresigned",sidebar_label:"UploadPresigned",custom_edit_url:null,hide_title:!0},c={unversionedId:"docs-server-core/classes/media_upload_presigned_upload_presigned_class.uploadpresigned",id:"docs-server-core/classes/media_upload_presigned_upload_presigned_class.uploadpresigned",isDocsHomePage:!1,title:"Class: UploadPresigned",description:"Class: UploadPresigned",source:"@site/docs/docs-server-core/classes/media_upload_presigned_upload_presigned_class.uploadpresigned.md",slug:"/docs-server-core/classes/media_upload_presigned_upload_presigned_class.uploadpresigned",permalink:"/docs/docs-server-core/classes/media_upload_presigned_upload_presigned_class.uploadpresigned",editUrl:null,version:"current",sidebar_label:"UploadPresigned",sidebar:"sidebar",previous:{title:"Class: UploadMedia",permalink:"/docs/docs-server-core/classes/media_upload_media_upload_media_class.uploadmedia"},next:{title:"Class: Upload",permalink:"/docs/docs-server-core/classes/media_upload_upload_class.upload"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"app",id:"app",children:[]},{value:"docs",id:"docs",children:[]},{value:"options",id:"options",children:[]},{value:"s3",id:"s3",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"find",id:"find",children:[]},{value:"get",id:"get",children:[]},{value:"getKeyForFilename",id:"getkeyforfilename",children:[]},{value:"patch",id:"patch",children:[]},{value:"remove",id:"remove",children:[]},{value:"update",id:"update",children:[]}]}],s={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-uploadpresigned"},"Class: UploadPresigned"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/docs-server-core/modules/media_upload_presigned_upload_presigned_class"},"media/upload-presigned/upload-presigned.class"),".UploadPresigned"),Object(b.b)("p",null,"A class for Upload service"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("em",{parentName:"li"},"ServiceMethods"),"<Data",">")),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new UploadPresigned"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ServiceOptions, ",Object(b.b)("inlineCode",{parentName:"p"},"app"),": Application): ",Object(b.b)("a",{parentName:"p",href:"/docs/docs-server-core/classes/media_upload_presigned_upload_presigned_class.uploadpresigned"},Object(b.b)("em",{parentName:"a"},"UploadPresigned"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:"left"},"ServiceOptions")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"app")),Object(b.b)("td",{parentName:"tr",align:"left"},"Application")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/docs-server-core/classes/media_upload_presigned_upload_presigned_class.uploadpresigned"},Object(b.b)("em",{parentName:"a"},"UploadPresigned"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L20"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:20")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"app"},"app"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"app"),": Application"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L17"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:17")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"docs"},"docs"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"docs"),": ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L19"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:19")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"options"},"options"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"options"),": ServiceOptions"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L18"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"s3"},"s3"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"s3"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/docs-server-core/classes/media_storageprovider_s3_storage.default"},Object(b.b)("em",{parentName:"a"},"default"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L20"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:20")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Data, ",Object(b.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:"left"},"Data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params?")),Object(b.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("p",null,"Implementation of: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L43"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:43")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"find"},"find"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"find"),"(",Object(b.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data[] ","|"," Paginated<Data",">",">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params?")),Object(b.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data[] ","|"," Paginated<Data",">",">"),Object(b.b)("p",null,"Implementation of: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L27"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:27")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"get"},"get"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"get"),"(",Object(b.b)("inlineCode",{parentName:"p"},"id"),": Id, ",Object(b.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",{parentName:"tr",align:"left"},"Id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params?")),Object(b.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("p",null,"Implementation of: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L31"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:31")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getkeyforfilename"},"getKeyForFilename"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getKeyForFilename"),"(",Object(b.b)("inlineCode",{parentName:"p"},"key"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"key")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L67"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:67")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"patch"},"patch"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"patch"),"(",Object(b.b)("inlineCode",{parentName:"p"},"id"),": Id, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Data, ",Object(b.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",{parentName:"tr",align:"left"},"Id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:"left"},"Data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params?")),Object(b.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("p",null,"Implementation of: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L51"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:51")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"remove"},"remove"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"remove"),"(",Object(b.b)("inlineCode",{parentName:"p"},"id"),": Id, ",Object(b.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",{parentName:"tr",align:"left"},"Id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params?")),Object(b.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("p",null,"Implementation of: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L55"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:55")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"id"),": Id, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Data, ",Object(b.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",{parentName:"tr",align:"left"},"Id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:"left"},"Data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params?")),Object(b.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(b.b)("p",null,"Implementation of: void"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/media/upload-presigned/upload-presigned.class.ts#L47"},"packages/server-core/src/media/upload-presigned/upload-presigned.class.ts:47")))}d.isMDXComponent=!0}}]);