(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{1497:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityCanvasId=void 0;var r=n(2115),o=0;t.useUnityCanvasId=function(e){return void 0!==e.id?e.id:(0,r.useMemo)(function(){return["react-unity-webgl-canvas",++o].join("-")},[])}},2243:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.UnityLoaderStatus=void 0,function(e){e.Idle="Idle",e.Loading="Loading",e.Loaded="Loaded",e.Error="Error"}(n||(t.UnityLoaderStatus=n={}))},3110:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}u((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(u){return function(s){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityInstance=void 0;var i=n(2115),a=n(2243),s=n(5769);t.useUnityInstance=function(e,t,n,u){(0,i.useEffect)(function(){r(void 0,void 0,void 0,function(){var r,i;return o(this,function(o){switch(o.label){case 0:if(!1===s.isBrowserEnvironment)return[2];if(e!==a.UnityLoaderStatus.Loaded||null===t)return u.setUnityInstance(null),u.setInitialisationError(null),[2];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,window.createUnityInstance(t,n,u.setLoadingProgression)];case 2:return r=o.sent(),u.setUnityInstance(r),u.setInitialisationError(null),[3,4];case 3:return i=o.sent(),u.setUnityInstance(null),u.setInitialisationError(i),[3,4];case 4:return[2]}})})},[e,t,n,u])}},4520:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var r=n(5155);n(2115);var o=n(9173);let i=e=>{let{game:t}=e,{unityProvider:n}=(0,o.sT)({loaderUrl:"/data/".concat(t.id,"/").concat(t.loaderUrl),dataUrl:"/data/".concat(t.id,"/").concat(t.dataUrl),frameworkUrl:"/data/".concat(t.id,"/").concat(t.frameworkUrl),codeUrl:"/data/".concat(t.id,"/").concat(t.codeUrl)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-lg font-semibold mt-4",children:"Играть"}),(0,r.jsx)(o.G9,{unityProvider:n})]})}},4620:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useNullableState=void 0;var r=n(2115);t.useNullableState=function(e){return(0,r.useState)(e||null)}},5766:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityLoader=void 0;var r=n(2115),o=n(5769),i=n(2243);t.useUnityLoader=function(e){var t=(0,r.useState)(i.UnityLoaderStatus.Loading),n=t[0],a=t[1];return(0,r.useEffect)(function(){if(!1!==o.isBrowserEnvironment){if(null===e.loaderUrl){a(i.UnityLoaderStatus.Idle);return}var t=window.document.querySelector('script[src="'.concat(e.loaderUrl,'"]'));null===t?((t=window.document.createElement("script")).type="text/javascript",t.src=e.loaderUrl,t.async=!0,t.setAttribute("data-status","loading"),window.document.body.appendChild(t),t.addEventListener("load",function(){return null==t?void 0:t.setAttribute("data-status","loaded")}),t.addEventListener("error",function(){return null==t?void 0:t.setAttribute("data-status","error")})):a("loaded"===t.getAttribute("data-status")?i.UnityLoaderStatus.Loaded:i.UnityLoaderStatus.Error);var n=function(e){return a("load"===e.type?i.UnityLoaderStatus.Loaded:i.UnityLoaderStatus.Error)};return t.addEventListener("load",n),t.addEventListener("error",n),function(){null!==t&&(t.removeEventListener("load",n),t.removeEventListener("error",n),window.document.body.removeChild(t))}}},[e.loaderUrl]),n}},5769:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowserEnvironment=void 0,t.isBrowserEnvironment="undefined"!=typeof window&&"undefined"!=typeof document},6317:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=void 0,t.errorMessages={genericNoUnityInstance:"No Unity Instance found.",requestFullscreenNoUnityInstance:"Unable to Set Fullscreen while Unity is not Instantiated.",requestPointerLockNoUnityInstanceOrCanvas:"Unable to Request Pointer Lock while Unity is not Instantiated or the Canvas is not found.",sendMessageNoUnityInstance:"Unable to Send Message while Unity is not Instantiated.",quitNoUnityInstance:"Unable to Quit Unity while Unity is not Instantiated.",screenshotNoUnityInstanceOrCanvas:"Unable to Take Screenshot while Unity is not Instantiated or Canvas is not available.",noEventListener:"Unable to find Event Listener in Event System for Event"}},6538:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Unity=void 0;var r=n(2115),o=n(2115),i=n(1497),a=n(3110),s=n(8347),u=n(5766);t.Unity=(0,o.forwardRef)(function(e,t){var n=(0,o.useRef)(null),c=(0,i.useUnityCanvasId)(e),l=(0,s.useUnityArguments)(e),d=(0,u.useUnityLoader)(e.unityProvider.unityConfig);return(0,a.useUnityInstance)(d,n.current,l,e.unityProvider),(0,r.useImperativeHandle)(t,function(){return n.current}),(0,r.createElement)("canvas",{ref:n,id:c,style:e.style,className:e.className,tabIndex:e.tabIndex})})},8244:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}u((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(u){return function(s){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityContext=void 0;var i=n(2115),a=n(6317),s=n(9667),u=n(4620);t.useUnityContext=function(e){var t=(0,u.useNullableState)(),n=t[0],c=t[1],l=(0,i.useState)(0),d=l[0],f=l[1],v=(0,i.useState)(!1),y=v[0],b=v[1],p=(0,u.useNullableState)(),U=p[0],h=p[1],m=(0,s.useEventSystem)(),g=(0,i.useRef)({setLoadingProgression:f,setInitialisationError:h,setUnityInstance:c,setIsLoaded:b,unityConfig:e}),w=(0,i.useCallback)(function(e){if(null===n){console.warn(a.errorMessages.requestFullscreenNoUnityInstance);return}n.SetFullscreen(+(!0===e))},[n]),E=(0,i.useCallback)(function(){if(null===n||void 0===n.Module.canvas){console.warn(a.errorMessages.requestPointerLockNoUnityInstanceOrCanvas);return}return n.Module.canvas.requestPointerLock()},[n]),C=(0,i.useCallback)(function(e,t,r){if(null===n){console.warn(a.errorMessages.sendMessageNoUnityInstance);return}n.SendMessage(e,t,r)},[n]),L=(0,i.useCallback)(function(e,t){if(null===n||void 0===n.Module.canvas){console.warn(a.errorMessages.screenshotNoUnityInstanceOrCanvas);return}return n.Module.canvas.toDataURL(e,t)},[n]),P=(0,i.useCallback)(function(){return null===n?(console.warn(a.errorMessages.quitNoUnityInstance),Promise.reject()):n.Quit()},[n]),I=(0,i.useCallback)(function(){return r(void 0,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:if(null===n||void 0===n.Module.canvas)return console.warn(a.errorMessages.genericNoUnityInstance),[2,Promise.reject()];return e=n.Module.canvas,document.body.appendChild(e),e.style.display="none",[4,P()];case 1:return t.sent(),e.remove(),[2]}})})},[n]);return(0,i.useEffect)(function(){b(1===d)},[d]),{unityProvider:g.current,loadingProgression:d,initialisationError:U,isLoaded:y,UNSAFE__unityInstance:n,requestFullscreen:w,requestPointerLock:E,sendMessage:C,takeScreenshot:L,unload:P,UNSAFE__detachAndUnloadImmediate:I,addEventListener:m.addEventListener,removeEventListener:m.removeEventListener}}},8347:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityArguments=void 0;var r=n(2115);t.useUnityArguments=function(e){return(0,r.useMemo)(function(){return{dataUrl:e.unityProvider.unityConfig.dataUrl,frameworkUrl:e.unityProvider.unityConfig.frameworkUrl,codeUrl:e.unityProvider.unityConfig.codeUrl,streamingAssetsUrl:e.unityProvider.unityConfig.streamingAssetsUrl,memoryUrl:e.unityProvider.unityConfig.memoryUrl,symbolsUrl:e.unityProvider.unityConfig.symbolsUrl,workerUrl:e.unityProvider.unityConfig.workerUrl,companyName:e.unityProvider.unityConfig.companyName,productName:e.unityProvider.unityConfig.productName,productVersion:e.unityProvider.unityConfig.productVersion,webglContextAttributes:e.unityProvider.unityConfig.webglContextAttributes||{},cacheControl:e.unityProvider.unityConfig.cacheControl||function(){return"must-revalidate"},devicePixelRatio:e.devicePixelRatio||1,autoSyncPersistentDataPath:e.autoSyncPersistentDataPath,matchWebGLToCanvasSize:"boolean"!=typeof e.matchWebGLToCanvasSize||e.matchWebGLToCanvasSize,disabledCanvasEvents:e.disabledCanvasEvents||["contextmenu","dragstart"],print:function(e){},printErr:function(e){}}},[])}},8818:(e,t,n)=>{Promise.resolve().then(n.bind(n,4520))},9173:(e,t,n)=>{"use strict";t.sT=t.G9=void 0;var r=n(6538);Object.defineProperty(t,"G9",{enumerable:!0,get:function(){return r.Unity}});var o=n(8244);Object.defineProperty(t,"sT",{enumerable:!0,get:function(){return o.useUnityContext}})},9667:function(e,t,n){"use strict";var r=this&&this.__spreadArray||function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.useEventSystem=void 0;var o=n(2115),i=n(6317),a=n(5769),s=[];!0===a.isBrowserEnvironment&&(window.dispatchReactUnityEvent=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=void 0;return s.forEach(function(n){o=n.apply(void 0,r([e],t,!1))}),o}),t.useEventSystem=function(){var e=(0,o.useRef)([]),t=(0,o.useCallback)(function(t,n){e.current=r(r([],e.current,!0),[{eventName:t,callback:n}],!1)},[e]),n=(0,o.useCallback)(function(t,n){e.current=e.current.filter(function(e){return e.eventName!==t&&e.callback!==n})},[e]),a=(0,o.useCallback)(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=e.current.find(function(e){return e.eventName===t});if(void 0===o){console.warn(i.errorMessages.noEventListener,{eventName:t});return}return o.callback.apply(o,n)},[e]);return(0,o.useEffect)(function(){return s.push(a),function(){s.splice(s.indexOf(a),1)}},[a]),{addEventListener:t,removeEventListener:n}}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(8818)),_N_E=e.O()}]);