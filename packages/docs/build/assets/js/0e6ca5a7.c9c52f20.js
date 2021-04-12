(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),s=n(7),r=(n(0),n(2722)),p={id:"renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass",title:"Class: DepthDownsamplingPass",sidebar_label:"DepthDownsamplingPass",custom_edit_url:null,hide_title:!0},b={unversionedId:"docs-engine/classes/renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass",id:"docs-engine/classes/renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass",isDocsHomePage:!1,title:"Class: DepthDownsamplingPass",description:"Class: DepthDownsamplingPass",source:"@site/docs/docs-engine/classes/renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass.md",slug:"/docs-engine/classes/renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass",permalink:"/docs/docs-engine/classes/renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass",editUrl:null,version:"current",sidebar_label:"DepthDownsamplingPass",sidebar:"sidebar",previous:{title:"Class: ClearPass",permalink:"/docs/docs-engine/classes/renderer_postprocessing_passes_clearpass.clearpass"},next:{title:"Class: DepthPass",permalink:"/docs/docs-engine/classes/renderer_postprocessing_passes_depthpass.depthpass"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"camera",id:"camera",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"name",id:"name",children:[]},{value:"needsDepthTexture",id:"needsdepthtexture",children:[]},{value:"needsSwap",id:"needsswap",children:[]},{value:"renderTarget",id:"rendertarget",children:[]},{value:"resolution",id:"resolution",children:[]},{value:"rtt",id:"rtt",children:[]},{value:"scene",id:"scene",children:[]},{value:"screen",id:"screen",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"renderToScreen",id:"rendertoscreen",children:[]},{value:"texture",id:"texture",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dispose",id:"dispose",children:[]},{value:"getDepthTexture",id:"getdepthtexture",children:[]},{value:"getFullscreenMaterial",id:"getfullscreenmaterial",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"render",id:"render",children:[]},{value:"setDepthTexture",id:"setdepthtexture",children:[]},{value:"setFullscreenMaterial",id:"setfullscreenmaterial",children:[]},{value:"setSize",id:"setsize",children:[]}]}],i={toc:c};function l(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-depthdownsamplingpass"},"Class: DepthDownsamplingPass"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/modules/renderer_postprocessing_passes_depthdownsamplingpass"},"renderer/postprocessing/passes/DepthDownsamplingPass"),".DepthDownsamplingPass"),Object(r.b)("p",null,"A pass that downsamples the scene depth by picking the most representative\ndepth in 2x2 texel neighborhoods. If a normal buffer is provided, the\ncorresponding normals will be stored as well."),Object(r.b)("p",null,"Attention: This pass requires WebGL 2."),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},Object(r.b)("em",{parentName:"a"},"Pass"))),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"DepthDownsamplingPass")))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new DepthDownsamplingPass"),"(",Object(r.b)("inlineCode",{parentName:"p"},"__namedParameters?"),": { ",Object(r.b)("inlineCode",{parentName:"p"},"height"),":  ; ",Object(r.b)("inlineCode",{parentName:"p"},"normalBuffer"),":  ; ",Object(r.b)("inlineCode",{parentName:"p"},"resolutionScale"),":  ; ",Object(r.b)("inlineCode",{parentName:"p"},"width"),":   }): ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass"},Object(r.b)("em",{parentName:"a"},"DepthDownsamplingPass"))),Object(r.b)("p",null,"Constructs a new depth downsampling pass."),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"__namedParameters")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"object"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"__namedParameters.height")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"__namedParameters.normalBuffer")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"__namedParameters.resolutionScale")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"__namedParameters.width")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass"},Object(r.b)("em",{parentName:"a"},"DepthDownsamplingPass"))),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L19"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:19")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"camera"},"camera"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"camera"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#camera"},"camera")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L73"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:73")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"enabled"},"enabled"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"enabled"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#enabled"},"enabled")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L78"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:78")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"name"},"name"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#name"},"name")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L71"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:71")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"needsdepthtexture"},"needsDepthTexture"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"needsDepthTexture"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#needsdepthtexture"},"needsDepthTexture")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L16"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:16")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"needsswap"},"needsSwap"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"needsSwap"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#needsswap"},"needsSwap")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L17"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:17")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rendertarget"},"renderTarget"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"renderTarget"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L18"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:18")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"resolution"},"resolution"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"resolution"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_core_resizer.resizer"},Object(r.b)("em",{parentName:"a"},"Resizer"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L19"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:19")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rtt"},"rtt"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"rtt"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#rtt"},"rtt")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L75"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:75")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"scene"},"scene"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"scene"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#scene"},"scene")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L72"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:72")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"screen"},"screen"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"screen"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#screen"},"screen")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L74"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:74")),Object(r.b)("h2",{id:"accessors"},"Accessors"),Object(r.b)("h3",{id:"rendertoscreen"},"renderToScreen"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"renderToScreen"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Indicates whether this pass should render to screen."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L171"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:171")),Object(r.b)("p",null,"\u2022 set ",Object(r.b)("strong",{parentName:"p"},"renderToScreen"),"(",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the render to screen flag."),Object(r.b)("p",null,"If the flag is changed to a different value, the fullscreen material will\nbe updated as well."),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"boolean"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L184"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:184")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"texture"},"texture"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"texture"),"(): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"The normal(RGB) + depth(A) texture."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L83"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:83")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"dispose"},"dispose"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"dispose"),"(): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Performs a shallow search for disposable properties and deletes them. The\npass will be inoperative after this method was called!"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_core_effectcomposer.effectcomposer"},"EffectComposer")," calls this method when it is being destroyed.\nYou may, however, use it independently to free memory when you are certain\nthat you don't need this pass anymore."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L322"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:322")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getdepthtexture"},"getDepthTexture"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getDepthTexture"),"(): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Returns the current depth texture."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"The current depth texture, or null if there is none."),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L240"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:240")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getfullscreenmaterial"},"getFullscreenMaterial"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getFullscreenMaterial"),"(): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Returns the current fullscreen material."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"The current fullscreen material, or null if there is none."),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L202"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:202")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"initialize"},"initialize"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"initialize"),"(",Object(r.b)("inlineCode",{parentName:"p"},"renderer"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"alpha"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"frameBufferType"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Performs initialization tasks."),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"renderer")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The renderer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"alpha")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"Whether the renderer uses the alpha channel or not.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"frameBufferType")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The type of the main frame buffers.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L140"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:140")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"render"},"render"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"render"),"(",Object(r.b)("inlineCode",{parentName:"p"},"renderer"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"inputBuffer"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"outputBuffer"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"deltaTime"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"stencilTest"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Downsamples depth and scene normals."),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"renderer")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The renderer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"inputBuffer")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"A frame buffer that contains the result of the previous pass.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"outputBuffer")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"A frame buffer that serves as the output render target unless this pass renders to screen.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"deltaTime")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"stencilTest")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L110"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:110")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setdepthtexture"},"setDepthTexture"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setDepthTexture"),"(",Object(r.b)("inlineCode",{parentName:"p"},"depthTexture"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"depthPacking?"),": ",Object(r.b)("em",{parentName:"p"},"number"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the depth texture."),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"depthTexture")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"-"),Object(r.b)("td",{parentName:"tr",align:"left"},"A depth texture.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"depthPacking")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"number")),Object(r.b)("td",{parentName:"tr",align:"left"},"0"),Object(r.b)("td",{parentName:"tr",align:"left"},"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L94"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:94")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setfullscreenmaterial"},"setFullscreenMaterial"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected"),Object(r.b)("strong",{parentName:"p"},"setFullscreenMaterial"),"(",Object(r.b)("inlineCode",{parentName:"p"},"material"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the fullscreen material."),Object(r.b)("p",null,"The material will be assigned to a mesh that fills the screen. The mesh\nwill be created once a material is assigned via this method."),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"material")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"A fullscreen material.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L216"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:216")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setsize"},"setSize"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setSize"),"(",Object(r.b)("inlineCode",{parentName:"p"},"width"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"height"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Updates the size of this pass."),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"width")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The width.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"height")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The height.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts#L122"},"packages/engine/src/renderer/postprocessing/passes/DepthDownsamplingPass.ts:122")))}l.isMDXComponent=!0},2722:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),l=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=l(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),o=l(n),m=a,O=o["".concat(p,".").concat(m)]||o[m]||d[m]||r;return n?s.a.createElement(O,b(b({ref:t},i),{},{components:n})):s.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,p[1]=b;for(var i=2;i<r;i++)p[i]=n[i];return s.a.createElement.apply(null,p)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);