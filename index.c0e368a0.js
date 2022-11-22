import{r as c,c as v}from"./chunks/index.0d03162d.js";import"./chunks/lottie-react.esm.df7ac6f1.js";import{j as p}from"./chunks/jsx-runtime.44949ced.js";var G={},S={},C={};Object.defineProperty(C,"__esModule",{value:!0}),C.useUnityCanvasId=void 0;var K=c.exports,X=0,Y="react-unity-webgl-canvas",ee=function(){return(0,K.useMemo)((function(){return[Y,++X].join("-")}),[])};C.useUnityCanvasId=ee;var F,M={},E={};Object.defineProperty(E,"__esModule",{value:!0}),E.UnityLoaderStatus=void 0,function(e){e.Idle="Idle",e.Loading="Loading",e.Loaded="Loaded",e.Error="Error"}(F||(F={})),E.UnityLoaderStatus=F;var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.isBrowserEnvironment=void 0,h.isBrowserEnvironment=typeof window<"u"&&typeof document<"u";var te=v&&v.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):function(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(i,s)}u((r=r.apply(e,t||[])).next())}))},ne=v&&v.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(M,"__esModule",{value:!0}),M.useUnityInstance=void 0;var re=c.exports,ae=E,se=h,ie=function(e,t,n,r){(0,re.useEffect)((function(){te(void 0,void 0,void 0,(function(){var o,a;return ne(this,(function(i){switch(i.label){case 0:if(!1===se.isBrowserEnvironment)return[2];if(e!==ae.UnityLoaderStatus.Loaded||null===t)return r.setUnityInstance(null),r.setInitialisationError(null),[2];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,window.createUnityInstance(t,n,r.setLoadingProgression)];case 2:return o=i.sent(),r.setUnityInstance(o),r.setInitialisationError(null),[3,4];case 3:return a=i.sent(),r.setUnityInstance(null),r.setInitialisationError(a),[3,4];case 4:return[2]}}))}))}),[e,t,n,r])};M.useUnityInstance=ie;var k={},x=v&&v.__assign||function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},x.apply(this,arguments)};Object.defineProperty(k,"__esModule",{value:!0}),k.useUnityArguments=void 0;var oe=c.exports,ue=function(e){return(0,oe.useMemo)((function(){return x(x({},e.unityProvider.unityConfig),{print:function(e){},printErr:function(e){},devicePixelRatio:e.devicePixelRatio,matchWebGLToCanvasSize:e.matchWebGLToCanvasSize,webglContextAttributes:e.unityProvider.unityConfig.webglContextAttributes||{}})}),[e.devicePixelRatio,e.matchWebGLToCanvasSize,e.unityProvider.unityConfig])};k.useUnityArguments=ue;var N={};Object.defineProperty(N,"__esModule",{value:!0}),N.useUnityLoader=void 0;var z=c.exports,le=h,U=E,ce=function(e){var t=(0,z.useState)(U.UnityLoaderStatus.Loading),n=t[0],r=t[1];return(0,z.useEffect)((function(){if(!1!==le.isBrowserEnvironment){if(null===e)return void r(U.UnityLoaderStatus.Idle);var t=window.document.querySelector('script[src="'.concat(e,'"]'));null===t?((t=window.document.createElement("script")).type="text/javascript",t.src=e,t.async=!0,t.setAttribute("data-status","loading"),window.document.body.appendChild(t),t.addEventListener("load",(function(){return t?.setAttribute("data-status","loaded")})),t.addEventListener("error",(function(){return t?.setAttribute("data-status","error")}))):r("loaded"===t.getAttribute("data-status")?U.UnityLoaderStatus.Loaded:U.UnityLoaderStatus.Error);var n=function(e){return r("load"===e.type?U.UnityLoaderStatus.Loaded:U.UnityLoaderStatus.Error)};return t.addEventListener("load",n),t.addEventListener("error",n),function(){null!==t&&(t.removeEventListener("load",n),t.removeEventListener("error",n),window.document.body.removeChild(t))}}}),[e]),n};N.useUnityLoader=ce,Object.defineProperty(S,"__esModule",{value:!0}),S.Unity=void 0;var W=c.exports,D=c.exports,de=C,ve=M,fe=k,ye=N,_e=(0,D.forwardRef)((function(e,t){var n=(0,D.useRef)(null),r=(0,de.useUnityCanvasId)(),o=(0,fe.useUnityArguments)(e),a=(0,ye.useUnityLoader)(e.unityProvider.unityConfig.loaderUrl);return(0,ve.useUnityInstance)(a,n.current,o,e.unityProvider),(0,W.useImperativeHandle)(t,(function(){return n.current})),(0,W.createElement)("canvas",{ref:n,id:r,style:e.style,className:e.className,tabIndex:e.tabIndex})}));S.Unity=_e;var j={},L={};Object.defineProperty(L,"__esModule",{value:!0}),L.errorMessages=void 0;var be={genericNoUnityInstance:"No Unity Instance found.",requestFullscreenNoUnityInstance:"Unable to Set Fullscreen while Unity is not Instantiated.",requestPointerLockNoUnityInstanceOrCanvas:"Unable to Request Pointer Lock while Unity is not Instantiated or the Canvas is not found.",sendMessageNoUnityInstance:"Unable to Send Message while Unity is not Instantiated.",quitNoUnityInstance:"Unable to Quit Unity while Unity is not Instantiated.",screenshotNoUnityInstanceOrCanvas:"Unable to Take Screenshot while Unity is not Instantiated or Canvas is not available.",noEventListener:"Unable to find Event Listener in Event System for Event"};L.errorMessages=be;var O={},B=v&&v.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)(r||!(o in t))&&(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(O,"__esModule",{value:!0}),O.useEventSystem=void 0;var w=c.exports,me=L,Ue=h,I=[],ge=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=void 0;return I.forEach((function(n){r=n.apply(void 0,B([e],t,!1))})),r};!0===Ue.isBrowserEnvironment&&(window.dispatchReactUnityEvent=ge);var he=function(){var e=(0,w.useRef)([]),t=(0,w.useCallback)((function(t,n){e.current=B(B([],e.current,!0),[{eventName:t,callback:n}],!1)}),[e]),n=(0,w.useCallback)((function(t,n){e.current=e.current.filter((function(e){return e.eventName!==t&&e.callback!==n}))}),[e]),r=(0,w.useCallback)((function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=e.current.find((function(e){return e.eventName===t}));if(!(typeof o>"u"))return o.callback.apply(o,n);console.warn(me.errorMessages.noEventListener,{eventName:t})}),[e]);return(0,w.useEffect)((function(){return I.push(r),function(){I.splice(I.indexOf(r),1)}}),[r]),{addEventListener:t,removeEventListener:n}};O.useEventSystem=he;var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.useNullableState=void 0;var we=c.exports,Ee=function(e){return(0,we.useState)(e||null)};A.useNullableState=Ee;var Le=v&&v.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):function(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(i,s)}u((r=r.apply(e,t||[])).next())}))},pe=v&&v.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(j,"__esModule",{value:!0}),j.useUnityContext=void 0;var _=c.exports,g=L,Ie=O,Q=A,xe=function(e){var t=(0,Q.useNullableState)(),n=t[0],r=t[1],o=(0,_.useState)(0),a=o[0],i=o[1],s=(0,_.useState)(!1),u=s[0],c=s[1],l=(0,Q.useNullableState)(),d=l[0],v=l[1],f=(0,Ie.useEventSystem)(),y=(0,_.useRef)({setLoadingProgression:i,setInitialisationError:v,setUnityInstance:r,setIsLoaded:c,unityConfig:e}),p=(0,_.useCallback)((function(e){null!==n?n.SetFullscreen(!0===e?1:0):console.warn(g.errorMessages.requestFullscreenNoUnityInstance)}),[n]),b=(0,_.useCallback)((function(){if(!(null===n||typeof n.Module.canvas>"u"))return n.Module.canvas.requestPointerLock();console.warn(g.errorMessages.requestPointerLockNoUnityInstanceOrCanvas)}),[n]),U=(0,_.useCallback)((function(e,t,r){null!==n?n.SendMessage(e,t,r):console.warn(g.errorMessages.sendMessageNoUnityInstance)}),[n]),h=(0,_.useCallback)((function(e,t){if(!(null===n||typeof n.Module.canvas>"u"))return n.Module.canvas.toDataURL(e,t);console.warn(g.errorMessages.screenshotNoUnityInstanceOrCanvas)}),[n]),w=(0,_.useCallback)((function(){return null===n?(console.warn(g.errorMessages.quitNoUnityInstance),Promise.reject()):n.Quit()}),[n]),m=(0,_.useCallback)((function(){return Le(void 0,void 0,void 0,(function(){var e;return pe(this,(function(t){switch(t.label){case 0:return null===n||typeof n.Module.canvas>"u"?(console.warn(g.errorMessages.genericNoUnityInstance),[2,Promise.reject()]):(e=n.Module.canvas,document.body.appendChild(e),e.style.display="none",[4,w()]);case 1:return t.sent(),e.remove(),[2]}}))}))}),[n]);return(0,_.useEffect)((function(){c(1===a)}),[a]),{unityProvider:y.current,loadingProgression:a,initialisationError:d,isLoaded:u,UNSAFE__unityInstance:n,requestFullscreen:p,requestPointerLock:b,sendMessage:U,unload:w,takeScreenshot:h,addEventListener:f.addEventListener,removeEventListener:f.removeEventListener,UNSAFE__detachAndUnloadImmediate:m}};function ke({apps:e}){c.exports.useState(!1);const[t,n]=c.exports.useState(!1),[r,o]=c.exports.useState(),[a,i]=c.exports.useState(),{unityProvider:s,sendMessage:u,addEventListener:l,removeEventListener:d,isLoaded:v,loadingProgression:f}=G.useUnityContext({loaderUrl:e.loaderUrl,dataUrl:e.dataUrl,frameworkUrl:e.frameworkUrl,codeUrl:e.codeUrl}),y=c.exports.useCallback(((e,t)=>{n(!0),o(e),i(t)}),[]);c.exports.useEffect((()=>(l("GameOver",y),()=>{d("GameOver",y)})),[l,d,y]);const b=Math.round(100*f);return p.exports.jsxs("div",{className:"container place-content-center justify-center items-center py-12",children:[!1===v&&p.exports.jsx("div",{className:"loading-overlay",children:p.exports.jsxs("p",{children:["Zane's Rage is Loading... (",b,"%)"]})}),p.exports.jsx(G.Unity,{className:"unity rounded-3xl self-auto",unityProvider:s,style:{width:1280,height:720}})]})}j.useUnityContext=xe,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.useUnityContext=e.Unity=void 0;var t=S;Object.defineProperty(e,"Unity",{enumerable:!0,get:function(){return t.Unity}});var n=j;Object.defineProperty(e,"useUnityContext",{enumerable:!0,get:function(){return n.useUnityContext}})}(G);export{ke as default};