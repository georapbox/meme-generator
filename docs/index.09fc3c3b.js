!function(){function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n,a,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},r=i.parcelRequire5078;function l(t={}){return t={files:null,...t},Array.isArray(t.files)?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t.files):"share"in navigator}function d(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function c(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,d(t,e,"get"))}function u(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(t,e,n){u(t,e),e.set(t,n)}function m(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,d(t,e,"set"),n),n}function p(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function f(t,e){u(t,e),e.add(t)}null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){s[t]=e},i.parcelRequire5078=r),r.register("iE7OH",(function(e,n){var a,i;t(e.exports,"register",(function(){return a}),(function(t){return a=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var o={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r.register("aNJCr",(function(e,n){var a;t(e.exports,"getBundleURL",(function(){return a}),(function(t){return a=t}));var i={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(t){var e=i[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),i[t]=e),e}})),r("iE7OH").register(JSON.parse('{"8tAhj":"index.09fc3c3b.js","cmj6F":"Anton-Regular.e58ab3fe.ttf","a9OJN":"Oswald-Regular.89ec7d89.ttf","jOuj0":"Oswald-Bold.0f6a7ca6.ttf","ePq3V":"Roboto-Regular.ca197847.ttf","9WQUU":"Roboto-Bold.fdb9b54a.ttf","hIywO":"RobotoCondensed-Regular.d585f5c7.ttf","ab1rw":"RobotoCondensed-Bold.e1f96d4b.ttf","j4ruO":"CourierPrime-Regular.3a25a501.ttf","3nnD2":"CourierPrime-Bold.3d6bf689.ttf","8fsWK":"OpenSans-Regular.edf9e01b.ttf","5JXG6":"OpenSans-Bold.8fceb72b.ttf","9FH7D":"index.7d77b59f.css"}')),n={},a=function(){return B},Object.defineProperty(n,"WebShare",{get:a,set:undefined,enumerable:!0,configurable:!0});const b=document.createElement("template"),g=String.raw;b.innerHTML=g`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;var v,w,y=new WeakMap,E=new WeakMap,x=new WeakMap,A=new WeakMap,S=new WeakMap,C=new WeakSet,k=new WeakSet;class B extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){p(this,k,L).call(this,"shareUrl"),p(this,k,L).call(this,"shareTitle"),p(this,k,L).call(this,"shareText"),p(this,k,L).call(this,"shareFiles"),p(this,k,L).call(this,"disabled"),c(this,y)&&c(this,y).addEventListener("slotchange",c(this,S)),c(this,E)&&c(this,E).addEventListener("click",c(this,A))}disconnectedCallback(){c(this,y)&&c(this,y).removeEventListener("slotchange",c(this,S)),c(this,E)&&c(this,E).removeEventListener("click",c(this,A))}attributeChangedCallback(t){"disabled"===t&&c(this,E)&&(c(this,E).disabled=this.disabled,c(this,E).setAttribute("aria-disabled",this.disabled),c(this,E).part&&c(this,E).part.contains("button")&&c(this,E).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return c(this,x)}set shareFiles(t){m(this,x,t)}async share(){if(!this.disabled)try{const t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if("AbortError"===t.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,B)}constructor(){super(),f(this,C),f(this,k),h(this,y,{writable:!0,value:void 0}),h(this,E,{writable:!0,value:void 0}),h(this,x,{writable:!0,value:null}),h(this,A,{writable:!0,value:t=>{t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}}),h(this,S,{writable:!0,value:t=>{t.target&&"button"===t.target.name&&(c(this,E)&&c(this,E).removeEventListener("click",c(this,A)),m(this,E,p(this,C,R).call(this)),c(this,E)&&(c(this,E).addEventListener("click",c(this,A)),"BUTTON"===c(this,E).nodeName||c(this,E).hasAttribute("role")||c(this,E).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(b.content.cloneNode(!0))),m(this,y,this.shadowRoot.querySelector('slot[name="button"]')),m(this,E,p(this,C,R).call(this))}}function R(){return c(this,y)?c(this,y).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))):null}function L(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}function T(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function M(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,T(t,e,"get"))}function N(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function O(t,e,n){N(t,e),e.set(t,n)}function I(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,T(t,e,"set"),n),n}function _(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function H(t,e){N(t,e),e.add(t)}B.defineCustomElement(),v={},w=function(){return ot},Object.defineProperty(v,"CapturePhoto",{get:w,set:undefined,enumerable:!0,configurable:!0});const U=(t,e,n)=>(Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Math.min(Math.max(t,Math.min(e,n)),Math.max(e,n))),$=document.createElement("template");$.innerHTML='\n  <style>\n    :host { all: initial; display: block; box-sizing: border-box; }\n    :host *, :host *::before, :host *::after { box-sizing: inherit; }\n    :host([hidden]), [hidden] { display: none; }\n    :host video { display: block; }\n    :host #output:empty { display: none; }\n  </style>\n  <video part="video" playsinline></video>\n  <canvas hidden></canvas>\n  <div part="actions-container">\n    <slot name="capture-button">\n      <button part="capture-button" type="button">\n        <slot name="capture-button-content">Capture photo</slot>\n      </button>\n    </slot>\n    <slot name="facing-mode-button" hidden>\n      <button part="facing-mode-button" type="button">\n        <slot name="facing-mode-button-content">Toggle facing mode</slot>\n      </button>\n    </slot>\n    <slot name="actions"></slot>\n  </div>\n  <slot></slot>\n  <div part="output-container" id="output"></div>\n';var W=new WeakMap,z=new WeakMap,F=new WeakMap,q=new WeakMap,j=new WeakMap,P=new WeakMap,V=new WeakMap,X=new WeakMap,Y=new WeakMap,D=new WeakMap,J=new WeakMap,G=new WeakMap,K=new WeakMap,Q=new WeakSet,Z=new WeakSet,tt=new WeakMap,et=new WeakMap,nt=new WeakSet,at=new WeakSet,it=new WeakSet;class ot extends HTMLElement{static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}static isSupported(){return Boolean(navigator.mediaDevices?.getUserMedia)}static defineCustomElement(t="capture-photo"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,ot)}connectedCallback(){if(_(this,it,ct).call(this,"noImage"),_(this,it,ct).call(this,"facingMode"),_(this,it,ct).call(this,"cameraResolution"),_(this,it,ct).call(this,"pan"),_(this,it,ct).call(this,"tilt"),_(this,it,ct).call(this,"zoom"),_(this,it,ct).call(this,"calculateFileSize"),I(this,W,!0),I(this,q,this.shadowRoot.querySelector("canvas")),I(this,j,this.shadowRoot.getElementById("output")),I(this,P,this.shadowRoot.querySelector("video")),I(this,V,this.shadowRoot.querySelector('slot[name="capture-button"]')),I(this,X,_(this,at,dt).call(this)),I(this,Y,this.shadowRoot.querySelector('slot[name="facing-mode-button"]')),I(this,D,_(this,nt,lt).call(this)),M(this,P)?.addEventListener("loadedmetadata",M(this,K)),M(this,V)?.addEventListener("slotchange",M(this,tt)),M(this,X)?.addEventListener("click",M(this,G)),M(this,Y)?.addEventListener("slotchange",M(this,et)),M(this,D)?.addEventListener("click",M(this,J)),!ot.isSupported())return this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),M(this,D)?.removeEventListener("click",M(this,J)),M(this,X)?.removeEventListener("click",M(this,G)),M(this,P)?.removeEventListener("canplay",M(this,K)),M(this,V)?.removeEventListener("slotchange",M(this,tt)),M(this,Y)?.removeEventListener("slotchange",M(this,et))}attributeChangedCallback(t,e,n){if(!M(this,W))return;const a=this.getTrackCapabilities(),i=this.getTrackSettings();if("no-image"===t&&e!==n&&_(this,Q,st).call(this),"facing-mode"===t&&e!==n&&M(this,z)?.facingMode){const t=["user","environment"].includes(this.facingMode);i?.facingMode&&t&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===t&&e!==n&&"string"==typeof this.cameraResolution){const[t,e]=this.cameraResolution.split("x").map((t=>Number(t))),n=t>=a?.width?.min&&t<=a?.width?.max,o=e>=a?.height?.min&&e<=a?.height?.max;i?.width&&i?.height&&n&&o&&(this.stopVideoStream(),this.startVideoStream())}if("pan"===t&&e!==n&&M(this,z)?.pan){const t=this.pan>=a?.pan?.min&&this.pan<=a?.pan?.max;i?.pan&&t&&_(this,Z,rt).call(this,"pan",this.pan)}if("tilt"===t&&e!==n&&M(this,z)?.tilt){const t=this.tilt>=a?.tilt?.min&&this.tilt<=a?.tilt?.max;i?.tilt&&t&&_(this,Z,rt).call(this,"tilt",this.tilt)}if("zoom"===t&&e!==n&&M(this,z)?.zoom){const t=this.zoom>=a?.zoom?.min&&this.zoom<=a?.zoom?.max;i?.zoom&&t&&_(this,Z,rt).call(this,"zoom",this.zoom)}}get noImage(){return this.hasAttribute("no-image")}set noImage(t){t?this.setAttribute("no-image",""):this.removeAttribute("no-image")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||null}set pan(t){this.setAttribute("pan",Number(t)||null)}get tilt(){return Number(this.getAttribute("tilt"))||null}set tilt(t){this.setAttribute("tilt",Number(t)||null)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){this.setAttribute("zoom",Number(t)||null)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){t?this.setAttribute("calculate-file-size",""):this.removeAttribute("calculate-file-size")}stopVideoStream(){if(!M(this,P)||!M(this,F))return;const[t]=M(this,F).getVideoTracks();t?.stop(),M(this,P).srcObject=null,I(this,F,null)}async startVideoStream(){if(!ot.isSupported()||M(this,F))return;this.setAttribute("loading","");const t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution){const[e,n]=this.cameraResolution.split("x").map((t=>Number(t)));t.video.width=e,t.video.height=n}try{I(this,F,await navigator.mediaDevices.getUserMedia(t)),M(this,P).srcObject=M(this,F),_(this,Z,rt).call(this,"pan",this.pan),_(this,Z,rt).call(this,"tilt",this.tilt),_(this,Z,rt).call(this,"zoom",this.zoom);this.getTrackSettings()?.facingMode&&(M(this,Y).hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}async capture(){if(!this.loading)try{const t=M(this,q).getContext("2d"),e=M(this,P).videoWidth,n=M(this,P).videoHeight;M(this,q).width=e,M(this,q).height=n,t.drawImage(M(this,P),0,0,e,n);const a=M(this,q).toDataURL("image/png");if("string"==typeof a&&a.includes("data:image")){if(!this.noImage){const t=new Image;t.src=a,t.width=e,t.height=n,t.part="output-image",_(this,Q,st).call(this),M(this,j)?.appendChild(t)}const t={dataURI:a,width:e,height:n};if(this.calculateFileSize)try{const e=await fetch(a),n=(await e.blob()).size;n&&(t.size=n)}catch(t){}this.dispatchEvent(new CustomEvent("capture-photo:success",{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return ot.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!M(this,F))return{};const[t]=M(this,F).getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!M(this,F))return{};const[t]=M(this,F).getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}constructor(){super(),H(this,Q),H(this,Z),H(this,nt),H(this,at),H(this,it),O(this,W,{writable:!0,value:void 0}),O(this,z,{writable:!0,value:void 0}),O(this,F,{writable:!0,value:void 0}),O(this,q,{writable:!0,value:void 0}),O(this,j,{writable:!0,value:void 0}),O(this,P,{writable:!0,value:void 0}),O(this,V,{writable:!0,value:void 0}),O(this,X,{writable:!0,value:void 0}),O(this,Y,{writable:!0,value:void 0}),O(this,D,{writable:!0,value:void 0}),O(this,J,{writable:!0,value:t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}}),O(this,G,{writable:!0,value:t=>{t.preventDefault(),this.capture()}}),O(this,K,{writable:!0,value:t=>{const e=t.target;e.play().then((()=>{this.dispatchEvent(new CustomEvent("capture-photo:video-play",{bubbles:!0,composed:!0,detail:{video:e}}))})).catch((t=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))})).finally((()=>{this.removeAttribute("loading")}))}}),O(this,tt,{writable:!0,value:t=>{"capture-button"===t.target?.name&&(M(this,X)?.removeEventListener("click",M(this,G)),I(this,X,_(this,at,dt).call(this)),M(this,X)&&(M(this,X).addEventListener("click",M(this,G)),"BUTTON"===M(this,X).nodeName||M(this,X).hasAttribute("role")||M(this,X).setAttribute("role","button")))}}),O(this,et,{writable:!0,value:t=>{"facing-mode-button"===t.target?.name&&(M(this,D)?.removeEventListener("click",M(this,J)),I(this,D,_(this,nt,lt).call(this)),M(this,D)&&(M(this,D).addEventListener("click",M(this,J)),"BUTTON"===M(this,D).nodeName||M(this,D).hasAttribute("role")||M(this,D).setAttribute("role","button")))}}),I(this,W,!1),I(this,z,this.getSupportedConstraints()),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild($.content.cloneNode(!0)))}}function st(){M(this,j)&&Array.from(M(this,j).childNodes).forEach((t=>t.remove()))}function rt(t,e){if(!M(this,F)||!t||!e)return;const[n]=M(this,F).getVideoTracks(),a=this.getTrackCapabilities();this.getTrackSettings()?.[t]&&n.applyConstraints({advanced:[{[t]:U(Number(e),a?.[t]?.min,a?.[t]?.max)}]})}function lt(){return M(this,Y)?M(this,Y).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))):null}function dt(){return M(this,V)?M(this,V).assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))):null}function ct(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}ot.defineCustomElement();const ut=(t,...e)=>{if(!Array.isArray(t))throw new TypeError("Expected an array for first argument");return t.filter(((t,n)=>-1===e.indexOf(n)))},ht="meme.png",mt=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];var pt;pt=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("cmj6F");var ft;ft=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("a9OJN");var bt;bt=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("jOuj0");var gt;gt=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("ePq3V");var vt;vt=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("9WQUU");var wt;wt=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("hIywO");var yt;yt=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("ab1rw");var Et;Et=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("j4ruO");var xt;xt=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("3nnD2");var At;At=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("8fsWK");var St;St=r("aNJCr").getBundleURL("8tAhj")+r("iE7OH").resolve("5JXG6");const Ct=[{name:"Anton",label:"Anton",path:e(pt),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:e(ft),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:e(bt),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:e(gt),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:e(vt),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:e(wt),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:e(yt),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:e(Et),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:e(xt),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:e(At),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:e(St),style:"normal",weight:"400"}],kt=async(t,e,n={})=>{try{const a=new FontFace(t,`url(${e})`,{...n});await a.load(),document.fonts.add(a)}catch(t){console.error(t)}},Bt=async(t={})=>{const e=await fetch(t.url),n=await e.blob(),a=t.mimeType||n.type||"";if(!mt.includes(a))throw new Error(`This is not an accepted image format. Accepted MIME types are: ${mt.join(", ")}`);let i=t.filename||"";if(!t.filename){const e=a.split("/")[1];i=`${t.url}.${e}`}return new File([n],i,n)},Rt=document.getElementById("errorsContainer"),Lt=t=>{const e=t.currentTarget;e.removeEventListener("click",Lt),Rt.removeChild(e.parentNode)},Tt=(t="",e="info")=>{["info","warning","danger"].includes(e)||(e="info");const n=`\n    ${t}\n    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>\n  `,a=document.createElement("div");a.className=`alert alert-${e} alert-dismissible text-break mb-2 fade`,a.innerHTML=n,a.querySelector("button").addEventListener("click",Lt),Rt.appendChild(a),setTimeout((()=>a.classList.add("show")),100)},Mt=(t,e)=>{e?(t.style.display="block",t.setAttribute("data-open",""),document.body.classList.add("modal-open"),t.dispatchEvent(new CustomEvent("modal-open",{bubbles:!0,detail:{modalId:t.id}}))):(t.style.display="none",t.removeAttribute("data-open"),document.body.classList.remove("modal-open"),t.dispatchEvent(new CustomEvent("modal-close",{bubbles:!0,detail:{modalId:t.id}})))},Nt=(t,e={})=>{const n=`\n    <div class="d-flex align-items-center">\n      <button class="btn" data-button="delete-text-box" aria-label="Remove"></button>\n\n      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="Text #${t+1}">${e.text}</textarea>\n\n      <div class="d-flex align-items-center pr-2">\n        <input class="form-control" type="color" value="${e.fillColor}" data-input="fillColor" title="Fill color">\n        <input class="form-control" type="color" value="${e.shadowColor}" data-input="shadowColor" title="Outline color">\n        <button class="btn btn-secondary settings-button" data-button="settings" aria-label="Settings"></button>\n      </div>\n    </div>\n\n    <div class="p-2" data-section="settings" ${e._isSettingsOpen?"":"hidden"}>\n      <div class="form-row">\n        <div class="col-4 mb-3">\n          <label for="fontInput_${t}" class="mb-1 d-block text-truncate">Font: </label>\n\n          <select class="custom-select" data-input="font" id="fontInput_${t}">\n            <optgroup label="Web fonts">\n              <option value="Impact">Impact</option>\n              <option value="Arial">Arial</option>\n              <option value="Arial Black">Arial Black</option>\n              <option value="Helvetica">Helvetica</option>\n              <option value="Comic Sans MS">Comic Sans MS</option>\n              <option value="Times">Times</option>\n              <option value="Times New Roman">Times New Roman</option>\n              <option value="Courier New">Courier New</option>\n              <option value="Verdana">Verdana</option>\n              <option value="Georgia">Georgia</option>\n              <option value="Palatino">Palatino</option>\n              <option value="Garamond">Garamond</option>\n              <option value="Bookman">Bookman</option>\n              <option value="Trebuchet MS">Trebuchet MS</option>\n            </optgroup>\n            <optgroup label="Google fonts">\n              ${Ct.map((({name:t,label:e})=>`<option value="${t}">${e}</option>`))}\n            </optgroup>\n          </select>\n        </div>\n\n        <div class="col-4 mb-3">\n          <label for="fontSizeInput_${t}" class="mb-1 d-block text-truncate">Size:</label>\n          <input class="form-control" type="number" min="1" value="${e.fontSize}" data-input="fontSize" id="fontSizeInput_${t}">\n        </div>\n\n        <div class="col-4 mb-3">\n          <label for="fontWeightInput_${t}" class="mb-1 d-block text-truncate">Weight:</label>\n          <select class="custom-select" data-input="fontWeight" id="fontWeightInput_${t}">\n            <option value="normal" selected>Normal</option>\n            <option value="bold">Bold</option>\n          </select>\n        </div>\n      </div>\n\n      <div class="form-row">\n        <div class="col-4 mb-3">\n          <label for="shadowWidthInput_${t}" class="mb-1 d-block text-truncate">Shadow width:</label>\n          <input class="form-control" type="number" min="0" max="10" value="${e.shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${t}">\n        </div>\n\n        <div class="col-4 mb-3">\n          <label for="textAlign_${t}" class="mb-1 d-block text-truncate">Text align:</label>\n          <select class="custom-select" data-input="textAlign" id="textAlignInput_${t}">\n            <option value="left">Left</option>\n            <option value="center" selected>Center</option>\n            <option value="right">Right</option>\n          </select>\n        </div>\n\n        <div class="col-4 mb-3">\n          <label class="mb-1 d-block text-truncate" for="textRotateInput_${t}">Rotate:</label>\n          <input class="form-control" type="number" value="${e.rotate}" data-input="rotate" id="textRotateInput_${t}" min="-360" max="360">\n        </div>\n      </div>\n\n      <div class="form-row">\n        <div class="col-6 mb-3">\n          <label class="mb-1 d-block text-truncate" for="offsetYInput_${t}">Vertical offset:</label>\n          <input class="form-control" type="number" value="${e.offsetY}" data-input="offsetY" id="offsetYInput_${t}">\n        </div>\n\n        <div class="col-6 mb-3">\n          <label class="mb-1 d-block text-truncate" for="offsetXInput_${t}">Horizontal offset:</label>\n          <input class="form-control" type="number" value="${e.offsetX}" data-input="offsetX" id="offsetXInput_${t}">\n        </div>\n\n        <div class="col-12">\n          <div class="move-text-actions mb-3">\n            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="-" aria-label="Up"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="+" aria-label="Right"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="+" aria-label="Down"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="-" aria-label="Left"></button>\n          </div>\n        </div>\n      </div>\n\n      <div class="form-row">\n        <div class="col-lg-12">\n          <div class="custom-control custom-checkbox">\n            <input type="checkbox" class="custom-control-input" id="allCapsCheckbox_${t}" data-input="allCaps">\n            <label class="custom-control-label" for="allCapsCheckbox_${t}">ALL CAPS</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,a=document.createDocumentFragment(),i=document.createElement("div");return i.className="bg-light border shadow-sm mb-3 rounded",i.setAttribute("data-section","textBox"),i.setAttribute("data-index",t),i.innerHTML=n,i.querySelector('[data-input="font"]').value=e.font,i.querySelector('[data-input="textAlign"]').value=e.textAlign,i.querySelector('[data-input="allCaps"]').checked=e.allCaps,a.appendChild(i)},Ot=(t,e,n,a=[])=>{null!=t&&(n.clearRect(0,0,e.width,e.height),"string"==typeof t?(n.fillStyle=t,n.fillRect(0,0,e.width,e.height)):n.drawImage(t,0,0,e.width,e.height),a.forEach((function(t,a){n.font=`${t.fontWeight} ${t.fontSize}px ${t.font}`;const i=a+1,o=n.measureText("M").width+t.fontSize/2,s=e.width/2,r=t.shadowBlur,l=(!0===t.allCaps?t.text.toUpperCase():t.text).split("\n");n.fillStyle=t.fillColor,n.textAlign=t.textAlign,n.save(),0!==r&&(n.shadowOffsetX=0,n.shadowOffsetY=0,n.shadowBlur=r,n.shadowColor=t.shadowColor),t.rotate?(n.translate(s+t.offsetX,o*i+t.offsetY),n.rotate(t.rotate*Math.PI/180),l.forEach(((t,e)=>n.fillText(t,0,e*o))),n.rotate(-t.rotate*Math.PI/180),n.translate(-(s+t.offsetX),-(o*i+t.offsetY))):l.forEach(((e,a)=>{n.fillText(e,s+t.offsetX,a*o+o*i+t.offsetY)})),n.restore()})))},It=document.getElementById("videoModal"),_t=document.getElementById("downloadModal"),Ht=document.getElementById("closeVideoModalBtn"),Ut=document.getElementById("canvas"),$t=document.getElementById("canvasPlaceholder"),Wt=document.getElementById("instructions"),zt=Ut.getContext("2d"),Ft=document.getElementById("imageUploadMethodSelect"),qt=document.getElementById("fileInput"),jt=document.getElementById("imageUrlForm"),Pt=document.getElementById("addTextboxBtn"),Vt=document.getElementById("inputsContainer"),Xt=document.getElementById("generateMemeBtn"),Yt=document.getElementById("openVideoModalBtn"),Dt=document.getElementById("downloadMemeBtn"),Jt=document.getElementById("downloadMemePreview"),Gt=document.getElementById("downloadMemeModalCloseBtn"),Kt=document.querySelector("web-share"),Qt=document.getElementById("gallery"),Zt=document.getElementById("gallerySearch"),te=Qt.querySelector(".gallery__no-results"),ee=document.getElementById("solidColorForm"),ne=document.querySelectorAll(".upload-method");let ae=null,ie=ht,oe=null;const se={_isSettingsOpen:!1,text:"",fillColor:"#ffffff",shadowColor:"#000000",font:"Anton",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:3,offsetY:0,offsetX:0,rotate:0,allCaps:!0};let re=[{...se}];const le=t=>{let e=t.target.width,n=t.target.height;e>n?e>800&&(n*=800/e,e=800):n>600&&(e*=600/n,n=600),Ut.width=e,Ut.height=n,ae=t.target,Ot(ae,Ut,zt,re),Xt.disabled=!1,Ut.hidden=!1,Wt.hidden=!0},de=t=>{if(!t)return;const e=new Image,n=new FileReader;ie=`${t.name.replace(/\.[^.]+$/,"")}-meme.png`,n.addEventListener("load",(function(t){const n=t.target.result;e.addEventListener("load",le),e.src=n})),n.readAsDataURL(t)},ce=(t,e,n)=>{"checkbox"===t.type?re[e][n]=t.checked:"number"===t.type?re[e][n]=Number(t.value):re[e][n]=t.value,Ot(ae,Ut,zt,re)},ue=(t,e,n)=>()=>{const a=document.querySelectorAll('[data-section="textBox"]')[n],i=a.querySelector('[data-input="offsetY"]'),o=a.querySelector('[data-input="offsetX"]');"offsetY"===t&&("-"===e&&(re[n].offsetY-=1),"+"===e&&(re[n].offsetY+=1),i.value=re[n].offsetY),"offsetX"===t&&("-"===e&&(re[n].offsetX-=1),"+"===e&&(re[n].offsetX+=1),o.value=re[n].offsetX),Ot(ae,Ut,zt,re),oe=requestAnimationFrame(ue(t,e,n))};qt.addEventListener("change",(t=>{jt.imageUrl.value="",de(t.target.files[0])})),Yt.addEventListener("click",(()=>{const t=document.createElement("capture-photo");t.noImage=!0,It.querySelector(".modal-body").appendChild(t),Mt(It,!0)})),Ht.addEventListener("click",(()=>Mt(It,!1))),Pt.addEventListener("click",(()=>{const t=re.length,e=Nt(t,se);re.push({...se}),Vt.appendChild(e),e.querySelector('[data-input="text"]').focus()})),Xt.addEventListener("click",(async()=>{const t=Ut.toDataURL("image/png"),e=t.replace("image/png","image/octet-stream");if(Dt.download=ie,Dt.href=e,Jt.src=e,l())try{const e=await Bt({url:t,filename:ht,mimeType:"image/png"}).catch((t=>Tt(t.message,"danger")));e&&(Kt.shareFiles=[e],Kt.shareUrl=window.location.href,Kt.shareTitle=document.title,Kt.hidden=!1)}catch(t){console.error(t)}Mt(_t,!0)})),Dt.addEventListener("click",(()=>Mt(_t,!1))),Gt.addEventListener("click",(()=>Mt(_t,!1))),jt.addEventListener("submit",(async t=>{t.preventDefault();const e=t.target,n=e.querySelector('button[type="submit"]'),a=e.imageUrl.value;if(a.trim()){n.disabled=!0,n.querySelector(".spinner").hidden=!1,n.querySelector(".label").hidden=!0;try{const t=await Bt({url:a}).catch((t=>Tt(t.message,"danger")));t&&(de(t),qt.value=qt.defaultValue)}catch(t){Tt(`Failed to load image from "${a}".`,"danger")}finally{n.disabled=!1,n.querySelector(".spinner").hidden=!0,n.querySelector(".label").hidden=!1}}})),$t.addEventListener("dragover",(t=>{t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"})),$t.addEventListener("drop",(t=>{t.stopPropagation(),t.preventDefault();const e=t.dataTransfer.files,[n]=e;mt.includes(n.type)&&(qt.value=qt.defaultValue,jt.imageUrl.value="",de(n))})),Vt.addEventListener("input",(t=>{const e=t.target,n=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let a;e.matches('[data-input="text"]')?a="text":e.matches('[data-input="fillColor"]')?a="fillColor":e.matches('[data-input="shadowColor"]')?a="shadowColor":e.matches('[data-input="font"]')?a="font":e.matches('[data-input="fontSize"]')?a="fontSize":e.matches('[data-input="fontWeight"]')?a="fontWeight":e.matches('[data-input="textAlign"]')?a="textAlign":e.matches('[data-input="shadowBlur"]')?a="shadowBlur":e.matches('[data-input="offsetY"]')?a="offsetY":e.matches('[data-input="offsetX"]')?a="offsetX":e.matches('[data-input="rotate"]')&&(a="rotate"),a&&ce(e,n,a)})),Vt.addEventListener("change",(t=>{const e=t.target,n=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let a;e.matches('[data-input="allCaps"]')&&(a="allCaps"),a&&ce(e,n,a)})),Vt.addEventListener("click",(t=>{const e=t.target;if(e.matches('[data-button="settings"]')){const t=e.closest('[data-section="textBox"]').getAttribute("data-index");document.querySelectorAll('[data-section="textBox"]').forEach(((e,n)=>{const a=e.querySelector('[data-section="settings"]');e.getAttribute("data-index")===t?(a.hidden=!a.hidden,re[n]._isSettingsOpen=!re[n]._isSettingsOpen):(a.hidden=!0,re[n]._isSettingsOpen=!1)}))}if(e.matches('[data-button="delete-text-box"]')){const t=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let n=!0;re[t].text.trim()&&(n=window.confirm("Are you sure you want to remove this text box?")),n&&(re=ut(re,t),Vt.querySelectorAll('[data-section="textBox"]').forEach((t=>t.remove())),re.forEach(((t,e)=>Vt.appendChild(Nt(e,t)))),Ot(ae,Ut,zt,re))}})),Vt.addEventListener("pointerdown",(t=>{const e=t.target;if(!e.closest('[data-section="textBox"]'))return;const n=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),a=e.matches('[data-move="offsetY"]'),i=e.matches('[data-move="offsetX"]');if(!a&&!i)return;const o=e.getAttribute("data-move"),s=e.getAttribute("data-sign");oe=requestAnimationFrame(ue(o,s,n))})),Vt.addEventListener("pointerup",(t=>{const e=t.target,n=e.matches('[data-move="offsetY"]'),a=e.matches('[data-move="offsetX"]');(n||a)&&(cancelAnimationFrame(oe),oe=null)})),Vt.addEventListener("pointerout",(t=>{const e=t.target,n=e.matches('[data-move="offsetY"]'),a=e.matches('[data-move="offsetX"]');(n||a)&&oe&&(cancelAnimationFrame(oe),oe=null)})),Ft.addEventListener("change",(t=>{ne.forEach((e=>e.hidden=e.id!==t.target.value))})),Qt.addEventListener("click",(async t=>{const e=t.target.closest("button");if(!e)return;const n=e.querySelector("img");try{const t=await Bt({url:n.src}).catch((t=>Tt(t.message,"danger")));t&&(de(t),qt.value=qt.defaultValue,jt.imageUrl.value="")}catch(t){Tt(`Failed to load image: "${n.alt}".`,"danger")}})),Zt.addEventListener("input",(t=>{const e=t.target.value.toLowerCase().trim();Qt.querySelectorAll("button").forEach((t=>{const n=(t.querySelector("img").getAttribute("alt")||"").toLowerCase();t.hidden=!n.includes(e)})),te.hidden=!!Qt.querySelector("button:not([hidden])")})),ee.addEventListener("input",(t=>{t.target===ee.canvasColor&&(ae=t.target.value),"string"==typeof ae&&(Ut.width=Number(ee.canvasWidth.value)||600,Ut.height=Number(ee.canvasHeight.value)||400,Ot(ae,Ut,zt,re),Xt.disabled=!1,Ut.hidden=!1,Wt.hidden=!0)})),document.addEventListener("web-share:error",(()=>{Tt("There was an error while trying to share your meme.","danger")})),document.addEventListener("capture-photo:error",(t=>{console.error(t.detail.error),Tt(t.detail.error.message,"danger")})),document.addEventListener("capture-photo:success",(t=>{Mt(It,!1);const e=new Image;e.addEventListener("load",le),e.src=t.detail.dataURI,qt.value&&(qt.value=qt.defaultValue,jt.imageUrl.value="",ie=ht)})),document.addEventListener("modal-close",(t=>{if("videoModal"===t.detail.modalId){It.querySelector("capture-photo").remove()}})),document.addEventListener("keyup",(t=>{"Escape"===t.code&&(It.hasAttribute("data-open")&&Mt(It,!1),_t.hasAttribute("data-open")&&Mt(_t,!1))})),Qt.querySelectorAll("button > img")?.forEach((t=>{t.setAttribute("title",t.getAttribute("alt"))})),re.forEach(((t,e)=>{Vt.appendChild(Nt(e,t))})),qt.accept=mt.join(","),Ct.forEach((({name:t,path:e,style:n,weight:a})=>{kt(t,e,{style:n,weight:a})}))}();
//# sourceMappingURL=index.09fc3c3b.js.map
