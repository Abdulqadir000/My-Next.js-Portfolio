(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[659],{250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(8754),i=r(1757),o=r(5893),l=i._(r(7294)),s=n._(r(3935)),a=n._(r(3709)),u=r(3943),c=r(6270),d=r(3334);r(6415);let f=r(5832),p=n._(r(5930)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,i,o){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){let[t,r]=l.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let y=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:s,width:a,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:g,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:S,onLoad:O,onError:_,...x}=e;return(0,o.jsx)("img",{...x,...h(f),loading:g,width:a,height:s,decoding:u,"data-nimg":v?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,p,b,w,j,y))},[r,p,b,w,j,_,y,t]),onLoad:e=>{m(e.currentTarget,p,b,w,j,y)},onError:e=>{S(!0),"empty"!==p&&j(!0),_&&_(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,n),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(d.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=g||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:s,onLoadingComplete:a}=e,m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let[b,w]=(0,l.useState)(!1),[j,S]=(0,l.useState)(!1),{props:O,meta:_}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:j});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...O,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:S,ref:t}),_.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:O}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3943:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(6415);let n=r(4010),i=r(6270);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,a,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:y,height:v,fill:b=!1,style:w,onLoad:j,onLoadingComplete:S,placeholder:O="empty",blurDataURL:_,fetchPriority:x,layout:C,objectFit:E,objectPosition:P,lazyBoundary:z,lazyRoot:k,...D}=e,{imgConf:T,showAltText:R,blurComplete:N,defaultLoader:I}=t,M=T||i.imageConfigDefault;if("allSizes"in M)s=M;else{let e=[...M.deviceSizes,...M.imageSizes].sort((e,t)=>e-t),t=M.deviceSizes.sort((e,t)=>e-t);s={...M,allSizes:e,deviceSizes:t}}let A=D.loader||I;delete D.loader,delete D.srcSet;let L="__next_img_default"in A;if(L){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!d&&(d=t)}let B="",W=l(y),F=l(v);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,_=_||e.blurDataURL,B=e.src,!b){if(W||F){if(W&&!F){let t=W/e.width;F=Math.round(e.height*t)}else if(!W&&F){let t=F/e.height;W=Math.round(e.width*t)}}else W=e.width,F=e.height}}let G=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,G=!1),s.unoptimized&&(f=!0),L&&c.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),p&&(x="high");let Y=l(h),U=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:P}:{},R?{}:{color:"transparent"},w),V=N||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:W,heightInt:F,blurWidth:a,blurHeight:u,blurDataURL:_||"",objectFit:U.objectFit})+'")':'url("'+O+'")',q=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),c=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:s({config:t,src:r,quality:o,width:a[c]})}}({config:s,src:c,unoptimized:f,width:W,quality:Y,sizes:d,loader:A});return{props:{...D,loading:G?"lazy":g,fetchPriority:x,width:W,height:F,decoding:"async",className:m,style:{...U,...q},sizes:H.sizes,srcSet:H.srcSet,src:H.src},meta:{unoptimized:f,priority:p,placeholder:O,fill:b}}}},4010:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,s=n?40*n:t,a=i?40*i:r,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return s},default:function(){return a}});let n=r(8754),i=r(3943),o=r(250),l=n._(r(5930)),s=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=o.Image},5930:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(7922)},9207:function(e,t,r){"use strict";var n=r(5893),i=r(7294),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function l(e,t){var r,n;switch(t.type){case"TYPE":return o(o({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length+1)});case"DELAY":return o(o({},e),{speed:t.payload});case"DELETE":return o(o({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length-1)});case"COUNT":return o(o({},e),{count:e.count+1});default:return e}}var s=function(e){var t=e.words,r=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,n=e.loop,o=void 0===n?1:n,s=e.typeSpeed,a=void 0===s?80:s,u=e.deleteSpeed,c=void 0===u?50:u,d=e.delaySpeed,f=void 0===d?1500:d,p=e.onLoopDone,g=e.onType,m=e.onDelete,h=e.onDelay,y=i.useReducer(l,{speed:a,text:"",count:0}),v=y[0],b=v.speed,w=v.text,j=v.count,S=y[1],O=i.useRef(0),_=i.useRef(!1),x=i.useRef(!1),C=i.useRef(!1),E=i.useRef(!1),P=i.useCallback(function(){var e=j%r.length,t=r[e];x.current?(S({type:"DELETE",payload:t,speed:c}),""===w&&(x.current=!1,S({type:"COUNT"}))):(S({type:"TYPE",payload:t,speed:a}),C.current=!0,w===t&&(S({type:"DELAY",payload:f}),C.current=!1,E.current=!0,setTimeout(function(){E.current=!1,x.current=!0},f),o>0&&(O.current+=1,O.current/r.length===o&&(E.current=!1,_.current=!0)))),C.current&&g&&g(O.current),x.current&&m&&m(),E.current&&h&&h()},[j,f,c,o,a,r,w,g,m,h]);return i.useEffect(function(){var e=setTimeout(P,b);return _.current&&clearTimeout(e),function(){return clearTimeout(e)}},[P,b]),i.useEffect(function(){p&&_.current&&p()},[p]),[w,{isType:C.current,isDelay:E.current,isDelete:x.current,isDone:_.current}]};!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var a=i.memo(function(e){var t=e.cursorBlinking,r=e.cursorStyle,i=e.cursorColor;return n.jsx("span",o({style:{color:void 0===i?"inherit":i},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(void 0===t||t?"styles-module_blinking__9VXRT":"")},{children:void 0===r?"|":r}))});t.rf=function(e){var t=e.words,r=e.loop,i=e.typeSpeed,o=e.deleteSpeed,l=e.delaySpeed,u=e.cursor,c=e.cursorStyle,d=e.cursorColor,f=e.cursorBlinking,p=s({words:void 0===t?["Hello World!","This is","a simple Typewriter"]:t,loop:void 0===r?1:r,typeSpeed:void 0===i?80:i,deleteSpeed:void 0===o?50:o,delaySpeed:void 0===l?1500:l,onLoopDone:e.onLoopDone,onType:e.onType,onDelay:e.onDelay,onDelete:e.onDelete})[0];return n.jsxs(n.Fragment,{children:[n.jsx("span",{children:p}),void 0!==u&&u&&n.jsx(a,{cursorStyle:void 0===c?"|":c,cursorColor:void 0===d?"inherit":d,cursorBlinking:void 0===f||f})]})}},5054:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),l=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,i;n=t,i=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(d,s({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:i,size:o,title:a}=e,c=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,l),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(i)}}}]);