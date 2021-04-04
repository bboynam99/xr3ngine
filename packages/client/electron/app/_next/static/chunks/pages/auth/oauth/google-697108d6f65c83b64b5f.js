(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4069,5747],{22265:function(t,n,e){"use strict";var r=e(87400),o=e(68625),i=e(26395),u=e(27878),a=e(10101),c=e(31451),s=e(81879),l=u.forwardRef((function(t,n){var e=t.classes,i=t.className,c=t.component,l=void 0===c?"div":c,f=t.disableGutters,p=void 0!==f&&f,d=t.fixed,h=void 0!==d&&d,g=t.maxWidth,b=void 0===g?"lg":g,v=(0,o.Z)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return u.createElement(l,(0,r.Z)({className:(0,a.Z)(e.root,i,h&&e.fixed,p&&e.disableGutters,!1!==b&&e["maxWidth".concat((0,s.Z)(String(b)))]),ref:n},v))}));n.Z=(0,c.Z)((function(t){return{root:(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(n,e){var r=t.breakpoints.values[e];return 0!==r&&(n[t.breakpoints.up(e)]={maxWidth:r}),n}),{}),maxWidthXs:(0,i.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:(0,i.Z)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:(0,i.Z)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:(0,i.Z)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:(0,i.Z)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},20193:function(t,n,e){"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}e.d(n,{Z:function(){return r}})},23568:function(t,n,e){t.exports=e(99514)},62151:function(t,n,e){"use strict";function r(t,n){return t===n}function o(t,n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!t(n[o],e[o]))return!1;return!0}function i(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+e+"]")}return n}e.d(n,{P1:function(){return u}});var u=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var u=0,a=r.pop(),c=i(r),s=t.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(e)),l=t((function(){for(var t=[],n=c.length,e=0;e<n;e++)t.push(c[e].apply(null,arguments));return s.apply(null,t)}));return l.resultFunc=a,l.dependencies=c,l.recomputations=function(){return u},l.resetRecomputations=function(){return u=0},l}}((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,e=null,i=null;return function(){return o(n,e,arguments)||(i=t.apply(null,arguments)),e=arguments,i}}))},82866:function(t,n,e){"use strict";e.r(n),e.d(n,{GoogleHomePage:function(){return m},default:function(){return y}});var r=e(27878),o=e(20193),i=e(15194),u=e(23568),a=e(24892),c=e(22265),s=e(33859),l=e(69744),f=e(14571),p=r.createElement;function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var g=function(t){var n=t.auth,e=t.loginUserByJwt,o=t.refreshConnections,i=t.router,u=(0,r.useState)({error:"",token:""}),a=u[0],s=u[1];return(0,r.useEffect)((function(){var t=i.query.error,r=i.query.token,u=i.query.type,c=i.query.path,l=i.query.instanceId;if(!t)if("connection"===u){var f=n.get("user");o(f.id)}else e(r,"".concat(c,"?instanceId=").concat(l)||"/","/");s(h(h({},a),{},{error:t,token:r}))}),[]),a.error&&""!==a.error?p(c.Z,null,"Google authentication failed.",p("br",null),a.error):p(c.Z,null,"Authenticating...")},b=(0,f.$j)((function(t){return{auth:(0,s._)(t)}}),(function(t){return{loginUserByJwt:(0,l.DE)(a.pQ,t),refreshConnections:(0,l.DE)(a.C0,t)}}))((function(t){var n=(0,u.useRouter)();return p(g,(0,o.Z)({},t,{router:n}))})),v=r.createElement,m=function(){return v(b,null)},y=m},33859:function(t,n,e){"use strict";e.d(n,{_:function(){return r}});var r=(0,e(62151).P1)([function(t){return t.get("auth")}],(function(t){return t}))},28181:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/oauth/google",function(){return e(82866)}])},35747:function(t){"use strict";t.exports=fs},40418:function(){}},0,[[28181,2272,9774,2182,4546,1514,3828,6231,9351,1810,8900,3600,6508,6835,5774]]]);