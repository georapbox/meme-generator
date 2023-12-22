!function(){function t(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=i.parcelRequire5078;null==s&&((s=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},i.parcelRequire5078=s);var r=s.register;function l(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}r("iE7OH",function(e,o){t(e.exports,"register",function(){return i},function(t){return i=t});var i,a=new Map;i=function(t,e){for(var o=0;o<e.length-1;o+=2)a.set(e[o],{baseUrl:t,path:e[o+1]})}}),r("aNJCr",function(e,o){t(e.exports,"getBundleURL",function(){return i},function(t){return i=t});var i,a={};i=function(t){var e=a[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[t]=e),e}}),s("iE7OH").register(s("aNJCr").getBundleURL("8tAhj"),JSON.parse('["8tAhj","index.b85a5c43.js","cmj6F","Anton-Regular.e58ab3fe.ttf","a9OJN","Oswald-Regular.89ec7d89.ttf","jOuj0","Oswald-Bold.0f6a7ca6.ttf","ePq3V","Roboto-Regular.ca197847.ttf","9WQUU","Roboto-Bold.fdb9b54a.ttf","hIywO","RobotoCondensed-Regular.d585f5c7.ttf","ab1rw","RobotoCondensed-Bold.e1f96d4b.ttf","j4ruO","CourierPrime-Regular.3a25a501.ttf","3nnD2","CourierPrime-Bold.3d6bf689.ttf","8fsWK","OpenSans-Regular.edf9e01b.ttf","5JXG6","OpenSans-Bold.8fceb72b.ttf","9FH7D","index.6ac1a655.css"]')),Object.defineProperty({},"WebShare",{get:function(){return h},set:void 0,enumerable:!0,configurable:!0});let d=`
  :host {
    display: inline-block;
  }
`,c=document.createElement("template");c.innerHTML=`
  <style>${d}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class h extends HTMLElement{#t;#e;#o=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(c.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#e=this.#i()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#e&&(this.#e.toggleAttribute("disabled",this.disabled),this.#e.setAttribute("aria-disabled",this.disabled.toString()),this.#e.part&&this.#e.part.contains("button")&&this.#e.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#a("shareUrl"),this.#a("shareTitle"),this.#a("shareText"),this.#a("shareFiles"),this.#a("disabled"),this.#t?.addEventListener("slotchange",this.#n),this.#e?.addEventListener("click",this.#s)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#n),this.#e?.removeEventListener("click",this.#s)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#o}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#o=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#s=t=>{t.preventDefault(),this.disabled||this.share()};#n=t=>{t.target&&"button"===t.target.name&&(this.#e?.removeEventListener("click",this.#s),this.#e=this.#i(),this.#e&&(this.#e.addEventListener("click",this.#s),"BUTTON"===this.#e.nodeName||this.#e.hasAttribute("role")||this.#e.setAttribute("role","button")))};#i(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#a(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,h)}}function u(t,e,o){if(!e.has(t))throw TypeError("attempted to "+o+" private field on non-instance");return e.get(t)}function p(t,e){var o;return(o=u(t,e,"get")).get?o.get.call(t):o.value}function m(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function b(t,e,o){m(t,e),e.set(t,o)}function g(t,e,o){return function(t,e,o){if(e.set)e.set.call(t,o);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=o}}(t,u(t,e,"set"),o),o}function f(t,e,o){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return o}function v(t,e){m(t,e),e.add(t)}h.defineCustomElement(),Object.defineProperty({},"CapturePhoto",{get:function(){return U},set:o,enumerable:!0,configurable:!0});let w=(t,e,o)=>(Number.isNaN(e)&&(e=0),Number.isNaN(o)&&(o=0),Math.min(Math.max(t,Math.min(e,o)),Math.max(e,o))),y="capture-photo",E=document.createElement("template");E.innerHTML='\n  <style>\n    :host { all: initial; display: block; box-sizing: border-box; }\n    :host *, :host *::before, :host *::after { box-sizing: inherit; }\n    :host([hidden]), [hidden] { display: none; }\n    :host video { display: block; }\n    :host #output:empty { display: none; }\n  </style>\n  <video part="video" playsinline></video>\n  <canvas hidden></canvas>\n  <div part="actions-container">\n    <slot name="capture-button">\n      <button part="capture-button" type="button">\n        <slot name="capture-button-content">Capture photo</slot>\n      </button>\n    </slot>\n    <slot name="facing-mode-button" hidden>\n      <button part="facing-mode-button" type="button">\n        <slot name="facing-mode-button-content">Toggle facing mode</slot>\n      </button>\n    </slot>\n    <slot name="actions"></slot>\n  </div>\n  <slot></slot>\n  <div part="output-container" id="output"></div>\n';var x=new WeakMap,A=new WeakMap,k=new WeakMap,S=new WeakMap,C=new WeakMap,z=new WeakMap,L=new WeakMap,_=new WeakMap,R=new WeakMap,B=new WeakMap,T=new WeakMap,F=new WeakMap,N=new WeakMap,M=new WeakSet,O=new WeakSet,$=new WeakMap,H=new WeakMap,I=new WeakSet,j=new WeakSet,q=new WeakSet;class U extends HTMLElement{static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=y){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,U)}connectedCallback(){if(f(this,q,V).call(this,"noImage"),f(this,q,V).call(this,"facingMode"),f(this,q,V).call(this,"cameraResolution"),f(this,q,V).call(this,"pan"),f(this,q,V).call(this,"tilt"),f(this,q,V).call(this,"zoom"),f(this,q,V).call(this,"calculateFileSize"),g(this,x,!0),g(this,S,this.shadowRoot.querySelector("canvas")),g(this,C,this.shadowRoot.getElementById("output")),g(this,z,this.shadowRoot.querySelector("video")),g(this,L,this.shadowRoot.querySelector('slot[name="capture-button"]')),g(this,_,f(this,j,Y).call(this)),g(this,R,this.shadowRoot.querySelector('slot[name="facing-mode-button"]')),g(this,B,f(this,I,W).call(this)),p(this,z)?.addEventListener("loadedmetadata",p(this,N)),p(this,L)?.addEventListener("slotchange",p(this,$)),p(this,_)?.addEventListener("click",p(this,F)),p(this,R)?.addEventListener("slotchange",p(this,H)),p(this,B)?.addEventListener("click",p(this,T)),!U.isSupported())return this.dispatchEvent(new CustomEvent(`${y}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),p(this,B)?.removeEventListener("click",p(this,T)),p(this,_)?.removeEventListener("click",p(this,F)),p(this,z)?.removeEventListener("canplay",p(this,N)),p(this,L)?.removeEventListener("slotchange",p(this,$)),p(this,R)?.removeEventListener("slotchange",p(this,H))}attributeChangedCallback(t,e,o){if(!p(this,x))return;let i=this.getTrackCapabilities(),a=this.getTrackSettings();if("no-image"===t&&e!==o&&f(this,M,D).call(this),"facing-mode"===t&&e!==o&&p(this,A)?.facingMode){let t=["user","environment"].includes(this.facingMode);a?.facingMode&&t&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===t&&e!==o&&"string"==typeof this.cameraResolution){let[t,e]=this.cameraResolution.split("x").map(t=>Number(t)),o=t>=i?.width?.min&&t<=i?.width?.max,n=e>=i?.height?.min&&e<=i?.height?.max;a?.width&&a?.height&&o&&n&&(this.stopVideoStream(),this.startVideoStream())}if("pan"===t&&e!==o&&p(this,A)?.pan){let t=this.pan>=i?.pan?.min&&this.pan<=i?.pan?.max;a?.pan&&t&&f(this,O,P).call(this,"pan",this.pan)}if("tilt"===t&&e!==o&&p(this,A)?.tilt){let t=this.tilt>=i?.tilt?.min&&this.tilt<=i?.tilt?.max;a?.tilt&&t&&f(this,O,P).call(this,"tilt",this.tilt)}if("zoom"===t&&e!==o&&p(this,A)?.zoom){let t=this.zoom>=i?.zoom?.min&&this.zoom<=i?.zoom?.max;a?.zoom&&t&&f(this,O,P).call(this,"zoom",this.zoom)}}get noImage(){return this.hasAttribute("no-image")}set noImage(t){t?this.setAttribute("no-image",""):this.removeAttribute("no-image")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||null}set pan(t){this.setAttribute("pan",Number(t)||null)}get tilt(){return Number(this.getAttribute("tilt"))||null}set tilt(t){this.setAttribute("tilt",Number(t)||null)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){this.setAttribute("zoom",Number(t)||null)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){t?this.setAttribute("calculate-file-size",""):this.removeAttribute("calculate-file-size")}stopVideoStream(){if(!p(this,z)||!p(this,k))return;let[t]=p(this,k).getVideoTracks();t?.stop(),p(this,z).srcObject=null,g(this,k,null)}async startVideoStream(){if(!U.isSupported()||p(this,k))return;this.setAttribute("loading","");let t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution){let[e,o]=this.cameraResolution.split("x").map(t=>Number(t));t.video.width=e,t.video.height=o}try{g(this,k,await navigator.mediaDevices.getUserMedia(t)),p(this,z).srcObject=p(this,k),f(this,O,P).call(this,"pan",this.pan),f(this,O,P).call(this,"tilt",this.tilt),f(this,O,P).call(this,"zoom",this.zoom);let e=this.getTrackSettings();e?.facingMode&&(p(this,R).hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent(`${y}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}async capture(){if(!this.loading)try{let t=p(this,S).getContext("2d"),e=p(this,z).videoWidth,o=p(this,z).videoHeight;p(this,S).width=e,p(this,S).height=o,t.drawImage(p(this,z),0,0,e,o);let i=p(this,S).toDataURL("image/png");if("string"==typeof i&&i.includes("data:image")){if(!this.noImage){let t=new Image;t.src=i,t.width=e,t.height=o,t.part="output-image",f(this,M,D).call(this),p(this,C)?.appendChild(t)}let t={dataURI:i,width:e,height:o};if(this.calculateFileSize)try{let e=await fetch(i),o=(await e.blob()).size;o&&(t.size=o)}catch(t){}this.dispatchEvent(new CustomEvent(`${y}:success`,{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent(`${y}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return U.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!p(this,k))return{};let[t]=p(this,k).getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!p(this,k))return{};let[t]=p(this,k).getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}constructor(){super(),v(this,M),v(this,O),v(this,I),v(this,j),v(this,q),b(this,x,{writable:!0,value:void 0}),b(this,A,{writable:!0,value:void 0}),b(this,k,{writable:!0,value:void 0}),b(this,S,{writable:!0,value:void 0}),b(this,C,{writable:!0,value:void 0}),b(this,z,{writable:!0,value:void 0}),b(this,L,{writable:!0,value:void 0}),b(this,_,{writable:!0,value:void 0}),b(this,R,{writable:!0,value:void 0}),b(this,B,{writable:!0,value:void 0}),b(this,T,{writable:!0,value:t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}}),b(this,F,{writable:!0,value:t=>{t.preventDefault(),this.capture()}}),b(this,N,{writable:!0,value:t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${y}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${y}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})}}),b(this,$,{writable:!0,value:t=>{"capture-button"===t.target?.name&&(p(this,_)?.removeEventListener("click",p(this,F)),g(this,_,f(this,j,Y).call(this)),p(this,_)&&(p(this,_).addEventListener("click",p(this,F)),"BUTTON"===p(this,_).nodeName||p(this,_).hasAttribute("role")||p(this,_).setAttribute("role","button")))}}),b(this,H,{writable:!0,value:t=>{"facing-mode-button"===t.target?.name&&(p(this,B)?.removeEventListener("click",p(this,T)),g(this,B,f(this,I,W).call(this)),p(this,B)&&(p(this,B).addEventListener("click",p(this,T)),"BUTTON"===p(this,B).nodeName||p(this,B).hasAttribute("role")||p(this,B).setAttribute("role","button")))}}),g(this,x,!1),g(this,A,this.getSupportedConstraints()),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(E.content.cloneNode(!0)))}}function D(){p(this,C)&&Array.from(p(this,C).childNodes).forEach(t=>t.remove())}function P(t,e){if(!p(this,k)||!t||!e)return;let[o]=p(this,k).getVideoTracks(),i=this.getTrackCapabilities(),a=this.getTrackSettings();a?.[t]&&o.applyConstraints({advanced:[{[t]:w(Number(e),i?.[t]?.min,i?.[t]?.max)}]})}function W(){return p(this,R)?p(this,R).assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot")):null}function Y(){return p(this,L)?p(this,L).assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot")):null}function V(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}U.defineCustomElement(),Object.defineProperty({},"ModalElement",{get:function(){return J},set:void 0,enumerable:!0,configurable:!0});let X=document.createElement("template");X.innerHTML=`
  <style>
    :host {
      --me-width: 32rem;
      --me-height: fit-content;
      --me-border-color: initial;
      --me-border-style: solid;
      --me-border-width: initial;
      --me-border-radius: 0;
      --me-box-shadow: none;
      --me-background-color: canvas;
      --me-header-spacing: 1rem;
      --me-body-spacing: 1rem;
      --me-footer-spacing: 1rem;
      --me-header-background-color: transparent;
      --me-body-background-color: transparent;
      --me-footer-background-color: transparent;
      --me-close-border-radius: 0;
      --me-close-background-color: transparent;
      --me-backdrop-background: rgba(0, 0, 0, 0.5);
      --me-backdrop-filter: none;

      display: contents;
      box-sizing: border-box;
    }

    :host *,
    :host *:after,
    :host *:before {
      box-sizing: inherit;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    /* Dialog */
    .dialog {
      width: var(--me-width);
      height: var(--me-height);
      padding: 0;
      border-color: var(--me-border-color);
      border-style: var(--me-border-style);
      border-width: var(--me-border-width);
      border-radius: var(--me-border-radius);
      box-shadow: var(--me-box-shadow);
      background-color: var(--me-background-color);
    }

    .dialog[open] {
      display: flex;
    }

    :host([fullscreen]) .dialog {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
    }

    .dialog::backdrop {
      background: var(--me-backdrop-background, rgba(0, 0, 0, 0.5));
      backdrop-filter: var(--me-backdrop-filter, none);
      opacity: 0;
    }

    .dialog[open]::backdrop {
      opacity: 1;
    }

    @media (prefers-reduced-motion: no-preference) {
      .dialog:not(.dialog--no-animations),
      .dialog:not(.dialog--no-animations)::backdrop {
        transition: transform 0.3s, opacity 0.3s, display 0.3s allow-discrete, overlay 0.3s allow-discrete;
      }

      /* 1. IS-OPEN STATE */
      .dialog[open] {
        transform: scale(1);
        opacity: 1;
      }

      /* 2. EXIT STATE */
      .dialog {
        transform: scale(0.95);
        opacity: 0;
      }

      /* 0. BEFORE-OPEN STATE */
      @starting-style {
        .dialog[open] {
          transform: scale(0.95);
          opacity: 0;
        }

        .dialog[open]::backdrop {
          opacity: 0;
        }
      }

      .dialog--pulse:not(.dialog--no-animations) {
        animation-name: pulse;
        animation-duration: 300ms;
        animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
      }

      @keyframes pulse {
        0%   { transform: scale(1); }
        50%  { transform: scale(1.02); }
        100% { transform: scale(1); }
      }
    }

    /* Dialog panel, header, body, footer */
    .dialog__panel {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      width: 100%;
    }

    .dialog__header {
      display: flex;
      align-items: center;
      padding: var(--me-header-spacing);
      column-gap: 0.5rem;
      background-color: var(--me-header-background-color);
    }

    :host([no-close-button]) .dialog__header {
      column-gap: 0;
    }

    .dialog__title {
      display: block;
      flex: 1 1 auto;
      padding: 0;
      margin: 0;
    }

    .dialog__body {
      display: block;
      flex: 1 1 auto;
      padding: var(--me-body-spacing);
      overflow: auto;
      background-color: var(--me-body-background-color);
    }

    .dialog__footer {
      flex: 0 0 auto;
      text-align: right;

      padding: var(--me-footer-spacing);
      background-color: var(--me-footer-background-color);
    }

    .dialog__close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.4375rem;
      border: none;
      background-color: transparent;
    }

    .dialog__close:not(:disabled) {
      cursor: pointer;
    }

    .dialog__close:disabled {
      cursor: not-allowed;
    }
  </style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </slot>
          </button>
        </form>
      </header>

      <slot part="body" class="dialog__body"></slot>

      <footer part="footer" class="dialog__footer" hidden>
        <slot name="footer"></slot>
      </footer>
    </div>
  </dialog>
`;class J extends HTMLElement{#e=null;#t=null;#r=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(X.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.querySelector("dialog"),this.#t=this.shadowRoot.querySelector('slot[name="footer"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button"]}attributeChangedCallback(t,e,o){if(null!==this.#e){if("open"===t&&e!==o&&(this.open?(this.#e.showModal(),document.body&&(document.body.style.overflowY="hidden"),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}}))):this.#e.close()),"no-header"===t&&e!==o){let t=this.#e.querySelector(".dialog__header");null!==t&&(t.hidden=this.noHeader)}if("no-animations"===t&&e!==o&&this.#e.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===t&&e!==o){let t=this.#e.querySelector(".dialog__close");null!==t&&(t.hidden=this.noCloseButton)}}}connectedCallback(){this.#i("open"),this.#i("staticBackdrop"),this.#i("noHeader"),this.#i("noAnimations"),this.#i("noCloseButton"),this.#i("fullscreen"),this.#e?.addEventListener("click",this.#n),this.#e?.addEventListener("close",this.#l),this.#e?.addEventListener("cancel",this.#o),this.#e?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#s),this.#t?.addEventListener("slotchange",this.#a)}disconnectedCallback(){this.#r&&clearTimeout(this.#r),this.#e?.addEventListener("click",this.#n),this.#e?.removeEventListener("close",this.#l),this.#e?.removeEventListener("cancel",this.#o),this.#e?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#s),this.#t?.removeEventListener("slotchange",this.#a)}get open(){return this.hasAttribute("open")}set open(t){t?this.setAttribute("open",""):this.removeAttribute("open")}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(t){t?this.setAttribute("static-backdrop",""):this.removeAttribute("static-backdrop")}get noHeader(){return this.hasAttribute("no-header")}set noHeader(t){t?this.setAttribute("no-header",""):this.removeAttribute("no-header")}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){t?this.setAttribute("no-animations",""):this.removeAttribute("no-animations")}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(t){t?this.setAttribute("no-close-button",""):this.removeAttribute("no-close-button")}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(t){t?this.setAttribute("fullscreen",""):this.removeAttribute("fullscreen")}#d(){this.#r||(this.#e?.classList.add("dialog--pulse"),this.#r=setTimeout(()=>{this.#e?.classList.remove("dialog--pulse"),clearTimeout(this.#r),this.#r=void 0},300))}#l=()=>{this.open=!1,document.body&&(document.body.style.overflowY=""),this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}}))};#o=t=>{let e=this.#c("escape-key");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#d())};#s=t=>{let e=this.#c("close-button");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#d())};#n=t=>{if(t.target!==t.currentTarget)return;let e=this.#c("backdrop-click");if(this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop){this.noAnimations||this.#d();return}this.#e?.close()};#a=()=>{if(null===this.#e)return;let t=this.#e.querySelector(".dialog__footer");if(null===t)return;let e=this.#t?.assignedNodes(),o=!!e&&e.length>0;t.hidden=!o};#c(t){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:t,element:this}})}#i(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(t="modal-element"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,J)}}J.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return tc},set:void 0,enumerable:!0,configurable:!0});let G=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),K=[".DS_Store","Thumbs.db"],Q=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let o=(e.split(".").pop()||"").toLowerCase(),i=G.get(o);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t},Z=(t,e)=>{let o=Q(t);if("string"!=typeof o.path){let{webkitRelativePath:i}=t;Object.defineProperty(o,"path",{value:"string"==typeof e?e:i||t.name,writable:!1,configurable:!1,enumerable:!0})}return o},tt=async t=>await new Promise((e,o)=>{t.readEntries(e,o)}),te=async t=>{let e=[],o=await tt(t);for(;o.length>0;)e.push(...o),o=await tt(t);return e},to=t=>new Promise((e,o)=>{t.file(o=>e(Z(o,t.fullPath)),o)}),ti=async t=>{let e=[],o=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();o.push(t)}for(;o.length>0;){let t=o.shift();if(t){if(t.isFile){let o=await to(t);-1===K.indexOf(o.name)&&e.push(o)}else t.isDirectory&&o.push(...await te(t.createReader()))}}return e},ta=async t=>{let e=[];for(let o of t)-1===K.indexOf(o.name)&&e.push(Z(o));return e},tn=async t=>t.dataTransfer?t.dataTransfer.items?await ti(t.dataTransfer.items):await ta(t.dataTransfer.files):await ta(t.target.files),ts="files-dropzone",tr="TOO_MANY_FILES",tl=document.createElement("template"),td=`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host {
    --dropzone-border-width: 2px;
    --dropzone-border-style: dashed;
    --dropzone-border-radius: 0.25rem;
    --dropzone-border-color: #6c757d;
    --dropzone-border-color-dragover: #0d6efd;
    --dropzone-border-color-hover: var(--dropzone-border-color-dragover);
    --dropzone-background-color: #ffffff;
    --dropzone-background-color-dragover: #f4f4f5;
    --dropzone-background-color-hover: var(--dropzone-background-color-dragover);
    --dropzone-body-color: #3f3f46;
    --dropzone-body-color-dragover: var(--dropzone-body-color);
    --dropzone-body-color-hover: var(--dropzone-body-color-dragover);
    --dropzone-focus-shadow-rgb: 49,132,253;
    --dropzone-focus-box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    --transition-duration: 0.2s; /* for backwards compatibility */
    --dropzone-transition-duration: var(--transition-duration);

    display: block;
  }

  :host(:not([no-style])) .dropzone {
    border: var(--dropzone-border-width) var(--dropzone-border-style) var(--dropzone-border-color);
    border-radius: var(--dropzone-border-radius);
    padding: 3rem 1rem;
    overflow: hidden;
    background-color: var(--dropzone-background-color);
    color: var(--dropzone-body-color);
    text-align: center;
    cursor: pointer;
    transition: border var(--dropzone-transition-duration) ease-in-out, background-color var(--dropzone-transition-duration) ease-in-out, color var(--dropzone-transition-duration) ease-in-out, box-shadow var(--dropzone-transition-duration) ease-in-out;
  }

  :host(:not([no-style])[no-click]) .dropzone {
    cursor: default;
  }

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
  }

  :host(:not([no-style]):not([disabled])) .dropzone--dragover {
    border-color: var(--dropzone-border-color-dragover);
    background-color: var(--dropzone-background-color-dragover);
    color: var(--dropzone-body-color-dragover);
  }

  :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
    outline: none;
    box-shadow: var(--dropzone-focus-box-shadow);
  }

  @media (hover: hover) {
    :host(:not([no-style]):not([disabled])) .dropzone:not(.dropzone--dragover):hover {
      border-color: var(--dropzone-border-color-hover);
      background-color: var(--dropzone-background-color-hover);
      color: var(--dropzone-body-color-hover);
    }
  }
`;tl.innerHTML=`
  <style>
    ${td}
  </style>

  <input type="file" id="fileInput" hidden>

  <div part="dropzone" class="dropzone" id="dropzoneEl" tabindex="0" role="presentation">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class tc extends HTMLElement{#e=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tl.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.getElementById("fileInput"),this.#t=this.shadowRoot.getElementById("dropzoneEl"))}static get observedAttributes(){return["accept","disabled","multiple","no-keyboard"]}attributeChangedCallback(t,e,o){"accept"===t&&e!==o&&this.#e&&(this.#e.accept=this.accept),"disabled"===t&&e!==o&&this.#e&&(this.#e.disabled=this.disabled,this.disabled?this.#t?.removeAttribute("tabindex"):this.#t?.setAttribute("tabindex","0")),"multiple"===t&&e!==o&&this.#e&&(this.#e.multiple=this.multiple),"no-keyboard"===t&&e!==o&&this.#t&&(this.noKeyboard?this.#t.removeAttribute("tabindex"):this.#t.setAttribute("tabindex","0"))}connectedCallback(){this.#r("accept"),this.#r("disabled"),this.#r("maxFiles"),this.#r("maxSize"),this.#r("minSize"),this.#r("multiple"),this.#r("noClick"),this.#r("noDrag"),this.#r("noKeyboard"),this.#r("autoFocus"),this.#r("noStyle"),this.#e?.addEventListener("change",this.#i),this.#t?.addEventListener("dragenter",this.#a),this.#t?.addEventListener("dragover",this.#n),this.#t?.addEventListener("dragleave",this.#s),this.#t?.addEventListener("drop",this.#o),this.#t?.addEventListener("click",this.#d),this.#t?.addEventListener("keyup",this.#l),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#e?.removeEventListener("change",this.#i),this.#t?.removeEventListener("dragenter",this.#a),this.#t?.removeEventListener("dragover",this.#n),this.#t?.removeEventListener("dragleave",this.#s),this.#t?.removeEventListener("drop",this.#o),this.#t?.removeEventListener("click",this.#d),this.#t?.removeEventListener("keyup",this.#l)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get noClick(){return this.hasAttribute("no-click")}set noClick(t){this.toggleAttribute("no-click",!!t)}get noDrag(){return this.hasAttribute("no-drag")}set noDrag(t){this.toggleAttribute("no-drag",!!t)}get noKeyboard(){return this.hasAttribute("no-keyboard")}set noKeyboard(t){this.toggleAttribute("no-keyboard",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#i=async t=>{try{this.#h(await tn(t))}catch(t){this.dispatchEvent(new CustomEvent(`${ts}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#a=()=>{this.disabled||this.noDrag||this.dispatchEvent(new Event(`${ts}-dragenter`,{bubbles:!0,composed:!0}))};#n=t=>{if(t.preventDefault(),this.disabled||this.noDrag){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${ts}-dragover`,{bubbles:!0,composed:!0}))};#s=()=>{this.disabled||this.noDrag||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${ts}-dragleave`,{bubbles:!0,composed:!0})))};#o=async t=>{if(!this.disabled&&!this.noDrag){t.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#h(await tn(t))}catch(t){this.dispatchEvent(new CustomEvent(`${ts}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#d=()=>{this.disabled||this.noClick||this.#e?.click()};#l=t=>{this.disabled||this.noKeyboard||" "!==t.key&&"Enter"!==t.key||this.#e?.click()};#h(t){if(!Array.isArray(t)||!t.length)return;let e=[],o=[],i=t.length;if(!this.multiple&&i>1)for(let e of t)o.push({file:e,errors:[{code:tr,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let e of t)o.push({file:e,errors:[{code:tr,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of t){let t=function(t,e=""){if(!e)return!0;let o=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],i=t.type,a=i.replace(/\/.*$/,"");for(let e of o)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(a===e.replace(/\/.*$/,""))return!0}else if(i===e)return!0;return!1}(i,this.accept),a=i.size>this.maxSize,n=i.size<this.minSize;if(!t||a||n){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),a&&e.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),n&&e.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:e})}else e.push(i)}this.dispatchEvent(new CustomEvent(`${ts}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:o}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${ts}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${ts}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#e&&(this.#e.value=this.#e.defaultValue)}openFileDialog(){this.disabled||this.#e?.click()}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t=ts){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tc)}}tc.defineCustomElement();let th=(t,...e)=>{if(!Array.isArray(t))throw TypeError("Expected an array for first argument");return t.filter((t,o)=>-1===e.indexOf(o))},tu=(t="",e="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${o}${"string"==typeof e&&""!==e?"-"+e:""}`},tp=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];var tm={};tm=s("aNJCr").getBundleURL("8tAhj")+"Anton-Regular.e58ab3fe.ttf";var tb={};tb=s("aNJCr").getBundleURL("8tAhj")+"Oswald-Regular.89ec7d89.ttf";var tg={};tg=s("aNJCr").getBundleURL("8tAhj")+"Oswald-Bold.0f6a7ca6.ttf";var tf={};tf=s("aNJCr").getBundleURL("8tAhj")+"Roboto-Regular.ca197847.ttf";var tv={};tv=s("aNJCr").getBundleURL("8tAhj")+"Roboto-Bold.fdb9b54a.ttf";var tw={};tw=s("aNJCr").getBundleURL("8tAhj")+"RobotoCondensed-Regular.d585f5c7.ttf";var ty={};ty=s("aNJCr").getBundleURL("8tAhj")+"RobotoCondensed-Bold.e1f96d4b.ttf";var tE={};tE=s("aNJCr").getBundleURL("8tAhj")+"CourierPrime-Regular.3a25a501.ttf";var tx={};tx=s("aNJCr").getBundleURL("8tAhj")+"CourierPrime-Bold.3d6bf689.ttf";var tA={};tA=s("aNJCr").getBundleURL("8tAhj")+"OpenSans-Regular.edf9e01b.ttf";var tk={};tk=s("aNJCr").getBundleURL("8tAhj")+"OpenSans-Bold.8fceb72b.ttf";let tS=[{name:"Anton",label:"Anton",path:e(tm),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:e(tb),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:e(tg),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:e(tf),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:e(tv),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:e(tw),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:e(ty),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:e(tE),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:e(tx),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:e(tA),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:e(tk),style:"normal",weight:"400"}],tC=async(t,e,o={})=>{try{let i=new FontFace(t,`url(${e})`,{...o});await i.load(),document.fonts.add(i)}catch(t){console.error(t)}},tz=async(t={})=>{let e=await fetch(t.url),o=await e.blob(),i=t.mimeType||o.type||"";if(!tp.includes(i))throw Error(`This is not an accepted image format. Accepted MIME types are: ${tp.join(", ")}`);return new File([o],t.filename||"",o)},tL=document.getElementById("errorsContainer"),t_=t=>{let e=t.currentTarget;e.removeEventListener("click",t_),tL.removeChild(e.parentNode)},tR=(t="",e="info")=>{["info","warning","danger"].includes(e)||(e="info");let o=`
    ${t}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `,i=document.createElement("div");i.className=`alert alert-${e} alert-dismissible text-break mb-2 fade`,i.innerHTML=o,i.querySelector("button").addEventListener("click",t_),tL.appendChild(i),setTimeout(()=>i.classList.add("show"),100)},tB=(t,e={})=>{let o=`
    <div class="d-flex align-items-center">
      <button class="btn" data-button="delete-text-box" aria-label="Remove"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="Text #${t+1}">${e.text}</textarea>

      <div class="d-flex align-items-center pr-2">
        <input class="form-control" type="color" value="${e.fillColor}" data-input="fillColor" title="Fill color">
        <input class="form-control" type="color" value="${e.shadowColor}" data-input="shadowColor" title="Outline color">
        <button class="btn btn-secondary settings-button" data-button="settings" aria-label="Settings"></button>
      </div>
    </div>

    <div class="p-2" data-section="settings" ${e._isSettingsOpen?"":"hidden"}>
      <div class="form-row">
        <div class="col-4 mb-3">
          <label for="fontInput_${t}" class="mb-1 d-block text-truncate">Font: </label>

          <select class="custom-select" data-input="font" id="fontInput_${t}">
            <optgroup label="Web fonts">
              <option value="Impact">Impact</option>
              <option value="Arial">Arial</option>
              <option value="Arial Black">Arial Black</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              <option value="Times">Times</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>
              <option value="Palatino">Palatino</option>
              <option value="Garamond">Garamond</option>
              <option value="Bookman">Bookman</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
            </optgroup>
            <optgroup label="Google fonts">
              ${tS.map(({name:t,label:e})=>`<option value="${t}">${e}</option>`)}
            </optgroup>
          </select>
        </div>

        <div class="col-4 mb-3">
          <label for="fontSizeInput_${t}" class="mb-1 d-block text-truncate">Size:</label>
          <input class="form-control" type="number" min="1" value="${e.fontSize}" data-input="fontSize" id="fontSizeInput_${t}">
        </div>

        <div class="col-4 mb-3">
          <label for="fontWeightInput_${t}" class="mb-1 d-block text-truncate">Weight:</label>
          <select class="custom-select" data-input="fontWeight" id="fontWeightInput_${t}">
            <option value="normal" selected>Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="col-4 mb-3">
          <label for="shadowWidthInput_${t}" class="mb-1 d-block text-truncate">Shadow width:</label>
          <input class="form-control" type="number" min="0" max="10" value="${e.shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${t}">
        </div>

        <div class="col-4 mb-3">
          <label for="textAlign_${t}" class="mb-1 d-block text-truncate">Text align:</label>
          <select class="custom-select" data-input="textAlign" id="textAlignInput_${t}">
            <option value="left">Left</option>
            <option value="center" selected>Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="textRotateInput_${t}">Rotate:</label>
          <input class="form-control" type="number" value="${e.rotate}" data-input="rotate" id="textRotateInput_${t}" min="-360" max="360">
        </div>
      </div>

      <div class="form-row">
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetYInput_${t}">Vertical offset:</label>
          <input class="form-control" type="number" value="${e.offsetY}" data-input="offsetY" id="offsetYInput_${t}">
        </div>

        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetXInput_${t}">Horizontal offset:</label>
          <input class="form-control" type="number" value="${e.offsetX}" data-input="offsetX" id="offsetXInput_${t}">
        </div>

        <div class="col-12">
          <div class="move-text-actions mb-3">
            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="-" aria-label="Up"></button>
            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="+" aria-label="Right"></button>
            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="+" aria-label="Down"></button>
            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="-" aria-label="Left"></button>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="col-lg-12">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="allCapsCheckbox_${t}" data-input="allCaps">
            <label class="custom-control-label" for="allCapsCheckbox_${t}">ALL CAPS</label>
          </div>
        </div>
      </div>
    </div>
  `,i=document.createDocumentFragment(),a=document.createElement("div");return a.className="bg-light border shadow-sm mb-3 rounded",a.setAttribute("data-section","textBox"),a.setAttribute("data-index",t),a.innerHTML=o,a.querySelector('[data-input="font"]').value=e.font,a.querySelector('[data-input="textAlign"]').value=e.textAlign,a.querySelector('[data-input="allCaps"]').checked=e.allCaps,i.appendChild(a)},tT=(t,e,o,i=[])=>{null!=t&&(o.clearRect(0,0,e.width,e.height),"string"==typeof t?(o.fillStyle=t,o.fillRect(0,0,e.width,e.height)):o.drawImage(t,0,0,e.width,e.height),i.forEach(function(t,i){o.font=`${t.fontWeight} ${t.fontSize}px ${t.font}`;let a=i+1,n=o.measureText("M").width+t.fontSize/2,s=e.width/2,r=t.shadowBlur,l=(!0===t.allCaps?t.text.toUpperCase():t.text).split("\n");o.fillStyle=t.fillColor,o.textAlign=t.textAlign,o.save(),0!==r&&(o.shadowOffsetX=0,o.shadowOffsetY=0,o.shadowBlur=r,o.shadowColor=t.shadowColor),t.rotate?(o.translate(s+t.offsetX,n*a+t.offsetY),o.rotate(t.rotate*Math.PI/180),l.forEach((t,e)=>o.fillText(t,0,e*n)),o.rotate(-(t.rotate*Math.PI/180)),o.translate(-(s+t.offsetX),-(n*a+t.offsetY))):l.forEach((e,i)=>{o.fillText(e,s+t.offsetX,i*n+n*a+t.offsetY)}),o.restore()}))},tF=document.getElementById("videoModal"),tN=document.getElementById("downloadModal"),tM=document.getElementById("canvas"),tO=document.querySelector("files-dropzone"),t$=document.getElementById("instructions"),tH=tM.getContext("2d"),tI=document.getElementById("imageUploadMethodSelect"),tj=document.getElementById("fileSelectBtn"),tq=document.getElementById("imageUrlForm"),tU=document.getElementById("addTextboxBtn"),tD=document.getElementById("inputsContainer"),tP=document.getElementById("generateMemeBtn"),tW=document.getElementById("openVideoModalBtn"),tY=document.getElementById("downloadMemeBtn"),tV=document.getElementById("downloadMemePreview"),tX=document.querySelector("web-share"),tJ=document.getElementById("gallery"),tG=document.getElementById("gallerySearch"),tK=tJ.querySelector(".gallery__no-results"),tQ=document.getElementById("solidColorForm"),tZ=document.querySelectorAll(".upload-method"),t0=null,t1=null,t2={_isSettingsOpen:!1,text:"",fillColor:"#ffffff",shadowColor:"#000000",font:"Anton",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:3,offsetY:0,offsetX:0,rotate:0,allCaps:!0},t8=[{...t2}],t7=async()=>{let t=tM.toDataURL("image/png"),e=t.replace("image/png","image/octet-stream");if(tY.download=`${tu("meme")}.png`,tY.href=e,tV.src=e,l())try{let e=await tz({url:t,filename:`${tu("meme")}.png`,mimeType:"image/png"}).catch(t=>tR(t.message,"danger"));e&&l({files:[e]})&&(tX.shareFiles=[e],tX.hidden=!1)}catch(t){console.error(t)}tN.open=!0},t4=t=>{let e=t.target.width,o=t.target.height;e>o?e>800&&(o*=800/e,e=800):o>600&&(e*=600/o,o=600),tM.width=e,tM.height=o,tT(t0=t.target,tM,tH,t8),tP.disabled=!1,tM.hidden=!1,t$.hidden=!0},t5=t=>{if(!t)return;let e=new Image,o=new FileReader;o.addEventListener("load",function(t){let o=t.target.result;e.addEventListener("load",t4),e.src=o}),o.readAsDataURL(t)},t6=(t,e,o)=>{"checkbox"===t.type?t8[e][o]=t.checked:"number"===t.type?t8[e][o]=Number(t.value):t8[e][o]=t.value,tT(t0,tM,tH,t8)},t3=async t=>{t.preventDefault();let e=t.target,o=e.querySelector('button[type="submit"]'),i=e.imageUrl.value;if(i.trim()){o.disabled=!0,o.querySelector(".spinner").hidden=!1,o.querySelector(".label").hidden=!0;try{let t=await tz({url:i}).catch(t=>tR(t.message,"danger"));t&&t5(t)}catch(t){tR(`Failed to load image from "${i}".`,"danger")}finally{o.disabled=!1,o.querySelector(".spinner").hidden=!0,o.querySelector(".label").hidden=!1}}},t9=(t,e,o)=>()=>{let i=document.querySelectorAll('[data-section="textBox"]')[o],a=i.querySelector('[data-input="offsetY"]'),n=i.querySelector('[data-input="offsetX"]');"offsetY"===t&&("-"===e&&(t8[o].offsetY-=1),"+"===e&&(t8[o].offsetY+=1),a.value=t8[o].offsetY),"offsetX"===t&&("-"===e&&(t8[o].offsetX-=1),"+"===e&&(t8[o].offsetX+=1),n.value=t8[o].offsetX),tT(t0,tM,tH,t8),t1=requestAnimationFrame(t9(t,e,o))},et=async t=>{let e=t.target.closest("button");if(!e)return;let o=e.querySelector("img");try{let t=await tz({url:o.src}).catch(t=>tR(t.message,"danger"));t&&t5(t)}catch(t){tR(`Failed to load image: "${o.alt}".`,"danger")}};tj.addEventListener("click",()=>{"function"==typeof tO.openFileDialog&&tO.openFileDialog()}),tW.addEventListener("click",()=>{let t=tF.querySelector("capture-photo");t?"function"==typeof t.startVideoStream&&t.startVideoStream():((t=document.createElement("capture-photo")).noImage=!0,tF.appendChild(t)),tF.open=!0}),tU.addEventListener("click",()=>{let t=tB(t8.length,t2);t8.push({...t2}),tD.appendChild(t),t.querySelector('[data-input="text"]').focus()}),tP.addEventListener("click",t7),tY.addEventListener("click",()=>tN.open=!1),tq.addEventListener("submit",t3),tO.addEventListener("files-dropzone-drop-accepted",t=>{let[e]=t.detail.acceptedFiles;e&&t5(e)}),tD.addEventListener("input",t=>{let e;let o=t.target,i=Number(o.closest('[data-section="textBox"]').getAttribute("data-index"));o.matches('[data-input="text"]')?e="text":o.matches('[data-input="fillColor"]')?e="fillColor":o.matches('[data-input="shadowColor"]')?e="shadowColor":o.matches('[data-input="font"]')?e="font":o.matches('[data-input="fontSize"]')?e="fontSize":o.matches('[data-input="fontWeight"]')?e="fontWeight":o.matches('[data-input="textAlign"]')?e="textAlign":o.matches('[data-input="shadowBlur"]')?e="shadowBlur":o.matches('[data-input="offsetY"]')?e="offsetY":o.matches('[data-input="offsetX"]')?e="offsetX":o.matches('[data-input="rotate"]')&&(e="rotate"),e&&t6(o,i,e)}),tD.addEventListener("change",t=>{let e;let o=t.target,i=Number(o.closest('[data-section="textBox"]').getAttribute("data-index"));o.matches('[data-input="allCaps"]')&&(e="allCaps"),e&&t6(o,i,e)}),tD.addEventListener("click",t=>{let e=t.target;if(e.matches('[data-button="settings"]')){let t=e.closest('[data-section="textBox"]').getAttribute("data-index");document.querySelectorAll('[data-section="textBox"]').forEach((e,o)=>{let i=e.querySelector('[data-section="settings"]');e.getAttribute("data-index")===t?(i.hidden=!i.hidden,t8[o]._isSettingsOpen=!t8[o]._isSettingsOpen):(i.hidden=!0,t8[o]._isSettingsOpen=!1)})}if(e.matches('[data-button="delete-text-box"]')){let t=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),o=!0;t8[t].text.trim()&&(o=window.confirm("Are you sure you want to remove this text box?")),o&&(t8=th(t8,t),tD.querySelectorAll('[data-section="textBox"]').forEach(t=>t.remove()),t8.forEach((t,e)=>tD.appendChild(tB(e,t))),tT(t0,tM,tH,t8))}}),tD.addEventListener("pointerdown",t=>{let e=t.target;if(!e.closest('[data-section="textBox"]'))return;let o=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),i=e.matches('[data-move="offsetY"]'),a=e.matches('[data-move="offsetX"]');if(!i&&!a)return;let n=e.getAttribute("data-move"),s=e.getAttribute("data-sign");t1=requestAnimationFrame(t9(n,s,o))}),tD.addEventListener("pointerup",t=>{let e=t.target,o=e.matches('[data-move="offsetY"]'),i=e.matches('[data-move="offsetX"]');(o||i)&&(cancelAnimationFrame(t1),t1=null)}),tD.addEventListener("pointerout",t=>{let e=t.target,o=e.matches('[data-move="offsetY"]'),i=e.matches('[data-move="offsetX"]');(o||i)&&t1&&(cancelAnimationFrame(t1),t1=null)}),tI.addEventListener("change",t=>{tZ.forEach(e=>e.hidden=e.id!==t.target.value)}),tJ.addEventListener("click",et),tG.addEventListener("input",t=>{let e=t.target.value.toLowerCase().trim();tJ.querySelectorAll("button").forEach(t=>{let o=(t.querySelector("img").getAttribute("alt")||"").toLowerCase();t.hidden=!o.includes(e)}),tK.hidden=!!tJ.querySelector("button:not([hidden])")}),tQ.addEventListener("input",t=>{t.target===tQ.canvasColor&&(t0=t.target.value),"string"==typeof t0&&(tM.width=Number(tQ.canvasWidth.value)||600,tM.height=Number(tQ.canvasHeight.value)||400,tT(t0,tM,tH,t8),tP.disabled=!1,tM.hidden=!1,t$.hidden=!0)}),document.addEventListener("web-share:error",()=>{tN.open=!1,tR("There was an error while trying to share your meme.","danger")}),document.addEventListener("capture-photo:error",t=>{console.error(t.detail.error),tR(t.detail.error.message,"danger")}),document.addEventListener("capture-photo:success",t=>{tF.open=!1;let e=new Image;e.addEventListener("load",t4),e.src=t.detail.dataURI}),document.addEventListener("me-close",t=>{if("videoModal"===t.target.id){let t=tF.querySelector("capture-photo");t&&"function"==typeof t.stopVideoStream&&t.stopVideoStream()}}),tJ.querySelectorAll("button > img")?.forEach(t=>{t.setAttribute("title",t.getAttribute("alt"))}),t8.forEach((t,e)=>{tD.appendChild(tB(e,t))}),tO.accept=tp,tS.forEach(({name:t,path:e,style:o,weight:i})=>{tC(t,e,{style:o,weight:i})})}();
//# sourceMappingURL=index.b85a5c43.js.map
