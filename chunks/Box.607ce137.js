import{_ as o}from"./ButtonBase.1805c610.js";import{o as b,p as E,q as O,t as S,v as _,d as A,_ as j,e as B,w as L,C as P}from"./TransitionGroupContext.59b44132.js";import{r as u}from"./index.0d03162d.js";import{j as N}from"./jsx-runtime.44949ced.js";function k(e){return Object.entries(e).filter((function(e){e[0];var t=e[1];return t||!1===t})).map((function(e){var t=e[0],a=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(a)})).join("&")}var x,g,C="hcaptcha-api-script-id",R="hcaptchaOnLoad",y=new Promise((function(e,t){x=e,g=t})),D=function(e){if(void 0===e&&(e={}),document.getElementById(C))return y;window[R]=x;var t=e.apihost||"https://js.hcaptcha.com";delete e.apihost;var a=document.createElement("script");a.id=C,a.src=t+"/1/api.js?render=explicit&onload="+R,a.async=!0,a.onerror=function(e){return g("script-error")};var n=k(e);return a.src+=""!==n?"&"+n:"",document.head.appendChild(a),y},W=function(e){function t(t){var a;(a=e.call(this,t)||this).renderCaptcha=a.renderCaptcha.bind(o(a)),a.resetCaptcha=a.resetCaptcha.bind(o(a)),a.removeCaptcha=a.removeCaptcha.bind(o(a)),a.isReady=a.isReady.bind(o(a)),a.loadCaptcha=a.loadCaptcha.bind(o(a)),a.handleOnLoad=a.handleOnLoad.bind(o(a)),a.handleSubmit=a.handleSubmit.bind(o(a)),a.handleExpire=a.handleExpire.bind(o(a)),a.handleError=a.handleError.bind(o(a)),a.handleOpen=a.handleOpen.bind(o(a)),a.handleClose=a.handleClose.bind(o(a)),a.handleChallengeExpired=a.handleChallengeExpired.bind(o(a));var n=typeof hcaptcha<"u";return a.ref=u.exports.createRef(),a.apiScriptRequested=!1,a.state={isApiReady:n,isRemoved:!1,elementId:t.id,captchaId:""},a}b(t,e);var a=t.prototype;return a.componentDidMount=function(){this.state.isApiReady?this.renderCaptcha():this.loadCaptcha()},a.componentWillUnmount=function(){var e=this.state.captchaId;!this.isReady()||(hcaptcha.reset(e),hcaptcha.remove(e))},a.shouldComponentUpdate=function(e,t){return!(this.state.isApiReady!==t.isApiReady||this.state.isRemoved!==t.isRemoved)},a.componentDidUpdate=function(e){var t=this;["sitekey","size","theme","tabindex","languageOverride","endpoint"].every((function(a){return e[a]===t.props[a]}))||this.removeCaptcha((function(){t.renderCaptcha()}))},a.loadCaptcha=function(){if(!this.apiScriptRequested){var e=this.props,t=e.apihost,a=e.assethost,n=e.endpoint,s=e.host,i=e.imghost,o=e.languageOverride,r=e.reCaptchaCompat,h=e.reportapi,c=e.sentry,p=e.custom;D({apihost:t,assethost:a,endpoint:n,hl:o,host:s,imghost:i,recaptchacompat:!1===r?"off":null,reportapi:h,sentry:c,custom:p}).then(this.handleOnLoad).catch(this.handleError),this.apiScriptRequested=!0}},a.renderCaptcha=function(e){if(this.state.isApiReady){var t=Object.assign({"open-callback":this.handleOpen,"close-callback":this.handleClose,"error-callback":this.handleError,"chalexpired-callback":this.handleChallengeExpired,"expired-callback":this.handleExpire,callback:this.handleSubmit},this.props,{hl:this.props.hl||this.props.languageOverride,languageOverride:void 0}),a=hcaptcha.render(this.ref.current,t);this.setState({isRemoved:!1,captchaId:a},(function(){e&&e()}))}},a.resetCaptcha=function(){var e=this.state.captchaId;!this.isReady()||hcaptcha.reset(e)},a.removeCaptcha=function(e){var t=this.state.captchaId;!this.isReady()||this.setState({isRemoved:!0},(function(){hcaptcha.remove(t),e&&e()}))},a.handleOnLoad=function(){var e=this;this.setState({isApiReady:!0},(function(){e.renderCaptcha((function(){var t=e.props.onLoad;t&&t()}))}))},a.handleSubmit=function(e){var t=this.props.onVerify,a=this.state,n=a.isRemoved,s=a.captchaId;typeof hcaptcha>"u"||n||t(hcaptcha.getResponse(s),hcaptcha.getRespKey(s))},a.handleExpire=function(){var e=this.props.onExpire,t=this.state.captchaId;!this.isReady()||(hcaptcha.reset(t),e&&e())},a.handleError=function(e){var t=this.props.onError,a=this.state.captchaId;this.isReady()&&hcaptcha.reset(a),t&&t(e)},a.isReady=function(){var e=this.state,t=e.isApiReady,a=e.isRemoved;return t&&!a},a.handleOpen=function(){!this.isReady()||!this.props.onOpen||this.props.onOpen()},a.handleClose=function(){!this.isReady()||!this.props.onClose||this.props.onClose()},a.handleChallengeExpired=function(){!this.isReady()||!this.props.onChalExpired||this.props.onChalExpired()},a.execute=function(e){void 0===e&&(e=null);var t=this.state.captchaId;if(this.isReady())return e&&"object"!=typeof e&&(e=null),hcaptcha.execute(t,e)},a.setData=function(e){var t=this.state.captchaId;!this.isReady()||(e&&"object"!=typeof e&&(e=null),hcaptcha.setData(t,e))},a.getResponse=function(){return hcaptcha.getResponse(this.state.captchaId)},a.getRespKey=function(){return hcaptcha.getRespKey(this.state.captchaId)},a.render=function(){var e=this.state.elementId;return u.exports.createElement("div",{ref:this.ref,id:e})},t}(u.exports.Component);const U=["className","component"];function T(e={}){const{defaultTheme:t,defaultClassName:a="MuiBox-root",generateClassName:n,styleFunctionSx:s=O}=e,i=E("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s);return u.exports.forwardRef((function(e,s){const o=S(t),r=_(e),{className:h,component:c="div"}=r,p=A(r,U);return N.exports.jsx(i,j({as:c,ref:s,className:B(h,n?n(a):a),theme:o},p))}))}const w=L(),F=T({defaultTheme:w,defaultClassName:"MuiBox-root",generateClassName:P.generate}),$=F;export{$ as B,W as H};