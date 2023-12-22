function t(t){return t&&t.__esModule?t.default:t}var e,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},n=o.parcelRequire5078;function s(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){a[t]=e},o.parcelRequire5078=n),(0,n.register)("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return o},set:function(t){return o=t},enumerable:!0,configurable:!0});var o,i=new Map;o=function(t,e){for(var o=0;o<e.length-1;o+=2)i.set(e[o],{baseUrl:t,path:e[o+1]})}}),n("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["eq2Ey","index.cd948b32.js","9jzSS","Anton-Regular.e58ab3fe.ttf","hr5Pp","Oswald-Regular.89ec7d89.ttf","5TebC","Oswald-Bold.0f6a7ca6.ttf","3ENF9","Roboto-Regular.ca197847.ttf","5yAXK","Roboto-Bold.fdb9b54a.ttf","k2KZ9","RobotoCondensed-Regular.d585f5c7.ttf","4h4UX","RobotoCondensed-Bold.e1f96d4b.ttf","8pomG","CourierPrime-Regular.3a25a501.ttf","l2v76","CourierPrime-Bold.3d6bf689.ttf","eKMWr","OpenSans-Regular.edf9e01b.ttf","dXO1Z","OpenSans-Bold.8fceb72b.ttf","9FH7D","index.6ac1a655.css"]')),Object.defineProperty({},"WebShare",{get:function(){return d},set:void 0,enumerable:!0,configurable:!0});let r=`
  :host {
    display: inline-block;
  }
`,l=document.createElement("template");l.innerHTML=`
  <style>${r}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class d extends HTMLElement{#t;#e;#o=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(l.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#e=this.#i()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#e&&(this.#e.toggleAttribute("disabled",this.disabled),this.#e.setAttribute("aria-disabled",this.disabled.toString()),this.#e.part&&this.#e.part.contains("button")&&this.#e.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#a("shareUrl"),this.#a("shareTitle"),this.#a("shareText"),this.#a("shareFiles"),this.#a("disabled"),this.#t?.addEventListener("slotchange",this.#n),this.#e?.addEventListener("click",this.#s)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#n),this.#e?.removeEventListener("click",this.#s)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#o}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#o=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#s=t=>{t.preventDefault(),this.disabled||this.share()};#n=t=>{t.target&&"button"===t.target.name&&(this.#e?.removeEventListener("click",this.#s),this.#e=this.#i(),this.#e&&(this.#e.addEventListener("click",this.#s),"BUTTON"===this.#e.nodeName||this.#e.hasAttribute("role")||this.#e.setAttribute("role","button")))};#i(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#a(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,d)}}function c(t,e,o){if(!e.has(t))throw TypeError("attempted to "+o+" private field on non-instance");return e.get(t)}function h(t,e){var o;return(o=c(t,e,"get")).get?o.get.call(t):o.value}function u(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function p(t,e,o){u(t,e),e.set(t,o)}function m(t,e,o){return function(t,e,o){if(e.set)e.set.call(t,o);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=o}}(t,c(t,e,"set"),o),o}function b(t,e,o){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return o}function g(t,e){u(t,e),e.add(t)}d.defineCustomElement(),Object.defineProperty({},"CapturePhoto",{get:function(){return q},set:e,enumerable:!0,configurable:!0});const f=(t,e,o)=>(Number.isNaN(e)&&(e=0),Number.isNaN(o)&&(o=0),Math.min(Math.max(t,Math.min(e,o)),Math.max(e,o))),v="capture-photo",w=document.createElement("template");w.innerHTML='\n  <style>\n    :host { all: initial; display: block; box-sizing: border-box; }\n    :host *, :host *::before, :host *::after { box-sizing: inherit; }\n    :host([hidden]), [hidden] { display: none; }\n    :host video { display: block; }\n    :host #output:empty { display: none; }\n  </style>\n  <video part="video" playsinline></video>\n  <canvas hidden></canvas>\n  <div part="actions-container">\n    <slot name="capture-button">\n      <button part="capture-button" type="button">\n        <slot name="capture-button-content">Capture photo</slot>\n      </button>\n    </slot>\n    <slot name="facing-mode-button" hidden>\n      <button part="facing-mode-button" type="button">\n        <slot name="facing-mode-button-content">Toggle facing mode</slot>\n      </button>\n    </slot>\n    <slot name="actions"></slot>\n  </div>\n  <slot></slot>\n  <div part="output-container" id="output"></div>\n';var y=new WeakMap,E=new WeakMap,x=new WeakMap,S=new WeakMap,A=new WeakMap,k=new WeakMap,z=new WeakMap,C=new WeakMap,L=new WeakMap,_=new WeakMap,R=new WeakMap,T=new WeakMap,B=new WeakMap,F=new WeakSet,M=new WeakSet,$=new WeakMap,H=new WeakMap,O=new WeakSet,N=new WeakSet,I=new WeakSet;class q extends HTMLElement{static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=v){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,q)}connectedCallback(){if(b(this,I,W).call(this,"noImage"),b(this,I,W).call(this,"facingMode"),b(this,I,W).call(this,"cameraResolution"),b(this,I,W).call(this,"pan"),b(this,I,W).call(this,"tilt"),b(this,I,W).call(this,"zoom"),b(this,I,W).call(this,"calculateFileSize"),m(this,y,!0),m(this,S,this.shadowRoot.querySelector("canvas")),m(this,A,this.shadowRoot.getElementById("output")),m(this,k,this.shadowRoot.querySelector("video")),m(this,z,this.shadowRoot.querySelector('slot[name="capture-button"]')),m(this,C,b(this,N,P).call(this)),m(this,L,this.shadowRoot.querySelector('slot[name="facing-mode-button"]')),m(this,_,b(this,O,D).call(this)),h(this,k)?.addEventListener("loadedmetadata",h(this,B)),h(this,z)?.addEventListener("slotchange",h(this,$)),h(this,C)?.addEventListener("click",h(this,T)),h(this,L)?.addEventListener("slotchange",h(this,H)),h(this,_)?.addEventListener("click",h(this,R)),!q.isSupported())return this.dispatchEvent(new CustomEvent(`${v}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),h(this,_)?.removeEventListener("click",h(this,R)),h(this,C)?.removeEventListener("click",h(this,T)),h(this,k)?.removeEventListener("canplay",h(this,B)),h(this,z)?.removeEventListener("slotchange",h(this,$)),h(this,L)?.removeEventListener("slotchange",h(this,H))}attributeChangedCallback(t,e,o){if(!h(this,y))return;let i=this.getTrackCapabilities(),a=this.getTrackSettings();if("no-image"===t&&e!==o&&b(this,F,j).call(this),"facing-mode"===t&&e!==o&&h(this,E)?.facingMode){let t=["user","environment"].includes(this.facingMode);a?.facingMode&&t&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===t&&e!==o&&"string"==typeof this.cameraResolution){let[t,e]=this.cameraResolution.split("x").map(t=>Number(t)),o=t>=i?.width?.min&&t<=i?.width?.max,n=e>=i?.height?.min&&e<=i?.height?.max;a?.width&&a?.height&&o&&n&&(this.stopVideoStream(),this.startVideoStream())}if("pan"===t&&e!==o&&h(this,E)?.pan){let t=this.pan>=i?.pan?.min&&this.pan<=i?.pan?.max;a?.pan&&t&&b(this,M,U).call(this,"pan",this.pan)}if("tilt"===t&&e!==o&&h(this,E)?.tilt){let t=this.tilt>=i?.tilt?.min&&this.tilt<=i?.tilt?.max;a?.tilt&&t&&b(this,M,U).call(this,"tilt",this.tilt)}if("zoom"===t&&e!==o&&h(this,E)?.zoom){let t=this.zoom>=i?.zoom?.min&&this.zoom<=i?.zoom?.max;a?.zoom&&t&&b(this,M,U).call(this,"zoom",this.zoom)}}get noImage(){return this.hasAttribute("no-image")}set noImage(t){t?this.setAttribute("no-image",""):this.removeAttribute("no-image")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||null}set pan(t){this.setAttribute("pan",Number(t)||null)}get tilt(){return Number(this.getAttribute("tilt"))||null}set tilt(t){this.setAttribute("tilt",Number(t)||null)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){this.setAttribute("zoom",Number(t)||null)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){t?this.setAttribute("calculate-file-size",""):this.removeAttribute("calculate-file-size")}stopVideoStream(){if(!h(this,k)||!h(this,x))return;let[t]=h(this,x).getVideoTracks();t?.stop(),h(this,k).srcObject=null,m(this,x,null)}async startVideoStream(){if(!q.isSupported()||h(this,x))return;this.setAttribute("loading","");let t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution){let[e,o]=this.cameraResolution.split("x").map(t=>Number(t));t.video.width=e,t.video.height=o}try{m(this,x,await navigator.mediaDevices.getUserMedia(t)),h(this,k).srcObject=h(this,x),b(this,M,U).call(this,"pan",this.pan),b(this,M,U).call(this,"tilt",this.tilt),b(this,M,U).call(this,"zoom",this.zoom);let e=this.getTrackSettings();e?.facingMode&&(h(this,L).hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent(`${v}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}async capture(){if(!this.loading)try{let t=h(this,S).getContext("2d"),e=h(this,k).videoWidth,o=h(this,k).videoHeight;h(this,S).width=e,h(this,S).height=o,t.drawImage(h(this,k),0,0,e,o);let i=h(this,S).toDataURL("image/png");if("string"==typeof i&&i.includes("data:image")){if(!this.noImage){let t=new Image;t.src=i,t.width=e,t.height=o,t.part="output-image",b(this,F,j).call(this),h(this,A)?.appendChild(t)}let t={dataURI:i,width:e,height:o};if(this.calculateFileSize)try{let e=await fetch(i),o=(await e.blob()).size;o&&(t.size=o)}catch(t){}this.dispatchEvent(new CustomEvent(`${v}:success`,{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent(`${v}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return q.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!h(this,x))return{};let[t]=h(this,x).getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!h(this,x))return{};let[t]=h(this,x).getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}constructor(){super(),g(this,F),g(this,M),g(this,O),g(this,N),g(this,I),p(this,y,{writable:!0,value:void 0}),p(this,E,{writable:!0,value:void 0}),p(this,x,{writable:!0,value:void 0}),p(this,S,{writable:!0,value:void 0}),p(this,A,{writable:!0,value:void 0}),p(this,k,{writable:!0,value:void 0}),p(this,z,{writable:!0,value:void 0}),p(this,C,{writable:!0,value:void 0}),p(this,L,{writable:!0,value:void 0}),p(this,_,{writable:!0,value:void 0}),p(this,R,{writable:!0,value:t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}}),p(this,T,{writable:!0,value:t=>{t.preventDefault(),this.capture()}}),p(this,B,{writable:!0,value:t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${v}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${v}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})}}),p(this,$,{writable:!0,value:t=>{"capture-button"===t.target?.name&&(h(this,C)?.removeEventListener("click",h(this,T)),m(this,C,b(this,N,P).call(this)),h(this,C)&&(h(this,C).addEventListener("click",h(this,T)),"BUTTON"===h(this,C).nodeName||h(this,C).hasAttribute("role")||h(this,C).setAttribute("role","button")))}}),p(this,H,{writable:!0,value:t=>{"facing-mode-button"===t.target?.name&&(h(this,_)?.removeEventListener("click",h(this,R)),m(this,_,b(this,O,D).call(this)),h(this,_)&&(h(this,_).addEventListener("click",h(this,R)),"BUTTON"===h(this,_).nodeName||h(this,_).hasAttribute("role")||h(this,_).setAttribute("role","button")))}}),m(this,y,!1),m(this,E,this.getSupportedConstraints()),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(w.content.cloneNode(!0)))}}function j(){h(this,A)&&Array.from(h(this,A).childNodes).forEach(t=>t.remove())}function U(t,e){if(!h(this,x)||!t||!e)return;let[o]=h(this,x).getVideoTracks(),i=this.getTrackCapabilities(),a=this.getTrackSettings();a?.[t]&&o.applyConstraints({advanced:[{[t]:f(Number(e),i?.[t]?.min,i?.[t]?.max)}]})}function D(){return h(this,L)?h(this,L).assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot")):null}function P(){return h(this,z)?h(this,z).assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot")):null}function W(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}q.defineCustomElement(),Object.defineProperty({},"ModalElement",{get:function(){return Y},set:void 0,enumerable:!0,configurable:!0});let X=document.createElement("template");X.innerHTML=`
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
`;class Y extends HTMLElement{#e=null;#t=null;#r=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(X.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.querySelector("dialog"),this.#t=this.shadowRoot.querySelector('slot[name="footer"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button"]}attributeChangedCallback(t,e,o){if(null!==this.#e){if("open"===t&&e!==o&&(this.open?(this.#e.showModal(),document.body&&(document.body.style.overflowY="hidden"),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}}))):this.#e.close()),"no-header"===t&&e!==o){let t=this.#e.querySelector(".dialog__header");null!==t&&(t.hidden=this.noHeader)}if("no-animations"===t&&e!==o&&this.#e.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===t&&e!==o){let t=this.#e.querySelector(".dialog__close");null!==t&&(t.hidden=this.noCloseButton)}}}connectedCallback(){this.#i("open"),this.#i("staticBackdrop"),this.#i("noHeader"),this.#i("noAnimations"),this.#i("noCloseButton"),this.#i("fullscreen"),this.#e?.addEventListener("click",this.#n),this.#e?.addEventListener("close",this.#l),this.#e?.addEventListener("cancel",this.#o),this.#e?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#s),this.#t?.addEventListener("slotchange",this.#a)}disconnectedCallback(){this.#r&&clearTimeout(this.#r),this.#e?.addEventListener("click",this.#n),this.#e?.removeEventListener("close",this.#l),this.#e?.removeEventListener("cancel",this.#o),this.#e?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#s),this.#t?.removeEventListener("slotchange",this.#a)}get open(){return this.hasAttribute("open")}set open(t){t?this.setAttribute("open",""):this.removeAttribute("open")}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(t){t?this.setAttribute("static-backdrop",""):this.removeAttribute("static-backdrop")}get noHeader(){return this.hasAttribute("no-header")}set noHeader(t){t?this.setAttribute("no-header",""):this.removeAttribute("no-header")}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){t?this.setAttribute("no-animations",""):this.removeAttribute("no-animations")}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(t){t?this.setAttribute("no-close-button",""):this.removeAttribute("no-close-button")}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(t){t?this.setAttribute("fullscreen",""):this.removeAttribute("fullscreen")}#d(){this.#r||(this.#e?.classList.add("dialog--pulse"),this.#r=setTimeout(()=>{this.#e?.classList.remove("dialog--pulse"),clearTimeout(this.#r),this.#r=void 0},300))}#l=()=>{this.open=!1,document.body&&(document.body.style.overflowY=""),this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}}))};#o=t=>{let e=this.#c("escape-key");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#d())};#s=t=>{let e=this.#c("close-button");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#d())};#n=t=>{if(t.target!==t.currentTarget)return;let e=this.#c("backdrop-click");if(this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop){this.noAnimations||this.#d();return}this.#e?.close()};#a=()=>{if(null===this.#e)return;let t=this.#e.querySelector(".dialog__footer");if(null===t)return;let e=this.#t?.assignedNodes(),o=!!e&&e.length>0;t.hidden=!o};#c(t){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:t,element:this}})}#i(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(t="modal-element"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,Y)}}Y.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return tl},set:void 0,enumerable:!0,configurable:!0});let V=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),G=[".DS_Store","Thumbs.db"],K=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let o=(e.split(".").pop()||"").toLowerCase(),i=V.get(o);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t},Z=(t,e)=>{let o=K(t);if("string"!=typeof o.path){let{webkitRelativePath:i}=t;Object.defineProperty(o,"path",{value:"string"==typeof e?e:i||t.name,writable:!1,configurable:!1,enumerable:!0})}return o},J=async t=>await new Promise((e,o)=>{t.readEntries(e,o)}),Q=async t=>{let e=[],o=await J(t);for(;o.length>0;)e.push(...o),o=await J(t);return e},tt=t=>new Promise((e,o)=>{t.file(o=>e(Z(o,t.fullPath)),o)}),te=async t=>{let e=[],o=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();o.push(t)}for(;o.length>0;){let t=o.shift();if(t){if(t.isFile){let o=await tt(t);-1===G.indexOf(o.name)&&e.push(o)}else t.isDirectory&&o.push(...await Q(t.createReader()))}}return e},to=async t=>{let e=[];for(let o of t)-1===G.indexOf(o.name)&&e.push(Z(o));return e},ti=async t=>t.dataTransfer?t.dataTransfer.items?await te(t.dataTransfer.items):await to(t.dataTransfer.files):await to(t.target.files),ta="files-dropzone",tn="TOO_MANY_FILES",ts=document.createElement("template"),tr=`
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
`;ts.innerHTML=`
  <style>
    ${tr}
  </style>

  <input type="file" id="fileInput" hidden>

  <div part="dropzone" class="dropzone" id="dropzoneEl" tabindex="0" role="presentation">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class tl extends HTMLElement{#e=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(ts.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.getElementById("fileInput"),this.#t=this.shadowRoot.getElementById("dropzoneEl"))}static get observedAttributes(){return["accept","disabled","multiple","no-keyboard"]}attributeChangedCallback(t,e,o){"accept"===t&&e!==o&&this.#e&&(this.#e.accept=this.accept),"disabled"===t&&e!==o&&this.#e&&(this.#e.disabled=this.disabled,this.disabled?this.#t?.removeAttribute("tabindex"):this.#t?.setAttribute("tabindex","0")),"multiple"===t&&e!==o&&this.#e&&(this.#e.multiple=this.multiple),"no-keyboard"===t&&e!==o&&this.#t&&(this.noKeyboard?this.#t.removeAttribute("tabindex"):this.#t.setAttribute("tabindex","0"))}connectedCallback(){this.#r("accept"),this.#r("disabled"),this.#r("maxFiles"),this.#r("maxSize"),this.#r("minSize"),this.#r("multiple"),this.#r("noClick"),this.#r("noDrag"),this.#r("noKeyboard"),this.#r("autoFocus"),this.#r("noStyle"),this.#e?.addEventListener("change",this.#i),this.#t?.addEventListener("dragenter",this.#a),this.#t?.addEventListener("dragover",this.#n),this.#t?.addEventListener("dragleave",this.#s),this.#t?.addEventListener("drop",this.#o),this.#t?.addEventListener("click",this.#d),this.#t?.addEventListener("keyup",this.#l),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#e?.removeEventListener("change",this.#i),this.#t?.removeEventListener("dragenter",this.#a),this.#t?.removeEventListener("dragover",this.#n),this.#t?.removeEventListener("dragleave",this.#s),this.#t?.removeEventListener("drop",this.#o),this.#t?.removeEventListener("click",this.#d),this.#t?.removeEventListener("keyup",this.#l)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get noClick(){return this.hasAttribute("no-click")}set noClick(t){this.toggleAttribute("no-click",!!t)}get noDrag(){return this.hasAttribute("no-drag")}set noDrag(t){this.toggleAttribute("no-drag",!!t)}get noKeyboard(){return this.hasAttribute("no-keyboard")}set noKeyboard(t){this.toggleAttribute("no-keyboard",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#i=async t=>{try{this.#h(await ti(t))}catch(t){this.dispatchEvent(new CustomEvent(`${ta}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#a=()=>{this.disabled||this.noDrag||this.dispatchEvent(new Event(`${ta}-dragenter`,{bubbles:!0,composed:!0}))};#n=t=>{if(t.preventDefault(),this.disabled||this.noDrag){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${ta}-dragover`,{bubbles:!0,composed:!0}))};#s=()=>{this.disabled||this.noDrag||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${ta}-dragleave`,{bubbles:!0,composed:!0})))};#o=async t=>{if(!this.disabled&&!this.noDrag){t.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#h(await ti(t))}catch(t){this.dispatchEvent(new CustomEvent(`${ta}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#d=()=>{this.disabled||this.noClick||this.#e?.click()};#l=t=>{this.disabled||this.noKeyboard||" "!==t.key&&"Enter"!==t.key||this.#e?.click()};#h(t){if(!Array.isArray(t)||!t.length)return;let e=[],o=[],i=t.length;if(!this.multiple&&i>1)for(let e of t)o.push({file:e,errors:[{code:tn,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let e of t)o.push({file:e,errors:[{code:tn,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of t){let t=function(t,e=""){if(!e)return!0;let o=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],i=t.type,a=i.replace(/\/.*$/,"");for(let e of o)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(a===e.replace(/\/.*$/,""))return!0}else if(i===e)return!0;return!1}(i,this.accept),a=i.size>this.maxSize,n=i.size<this.minSize;if(!t||a||n){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),a&&e.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),n&&e.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:e})}else e.push(i)}this.dispatchEvent(new CustomEvent(`${ta}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:o}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${ta}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${ta}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#e&&(this.#e.value=this.#e.defaultValue)}openFileDialog(){this.disabled||this.#e?.click()}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t=ta){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tl)}}tl.defineCustomElement();const td=(t,...e)=>{if(!Array.isArray(t))throw TypeError("Expected an array for first argument");return t.filter((t,o)=>-1===e.indexOf(o))},tc=(t="",e="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${o}${"string"==typeof e&&""!==e?"-"+e:""}`},th=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];var tu={};tu=new URL("Anton-Regular.e58ab3fe.ttf",import.meta.url).toString();var tp={};tp=new URL("Oswald-Regular.89ec7d89.ttf",import.meta.url).toString();var tm={};tm=new URL("Oswald-Bold.0f6a7ca6.ttf",import.meta.url).toString();var tb={};tb=new URL("Roboto-Regular.ca197847.ttf",import.meta.url).toString();var tg={};tg=new URL("Roboto-Bold.fdb9b54a.ttf",import.meta.url).toString();var tf={};tf=new URL("RobotoCondensed-Regular.d585f5c7.ttf",import.meta.url).toString();var tv={};tv=new URL("RobotoCondensed-Bold.e1f96d4b.ttf",import.meta.url).toString();var tw={};tw=new URL("CourierPrime-Regular.3a25a501.ttf",import.meta.url).toString();var ty={};ty=new URL("CourierPrime-Bold.3d6bf689.ttf",import.meta.url).toString();var tE={};tE=new URL("OpenSans-Regular.edf9e01b.ttf",import.meta.url).toString();var tx={};tx=new URL("OpenSans-Bold.8fceb72b.ttf",import.meta.url).toString();const tS=[{name:"Anton",label:"Anton",path:t(tu),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:t(tp),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:t(tm),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:t(tb),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:t(tg),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:t(tf),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:t(tv),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:t(tw),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:t(ty),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:t(tE),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:t(tx),style:"normal",weight:"400"}],tA=async(t,e,o={})=>{try{let i=new FontFace(t,`url(${e})`,{...o});await i.load(),document.fonts.add(i)}catch(t){console.error(t)}},tk=async(t={})=>{let e=await fetch(t.url),o=await e.blob(),i=t.mimeType||o.type||"";if(!th.includes(i))throw Error(`This is not an accepted image format. Accepted MIME types are: ${th.join(", ")}`);return new File([o],t.filename||"",o)},tz=document.getElementById("errorsContainer"),tC=t=>{let e=t.currentTarget;e.removeEventListener("click",tC),tz.removeChild(e.parentNode)},tL=(t="",e="info")=>{["info","warning","danger"].includes(e)||(e="info");let o=`
    ${t}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `,i=document.createElement("div");i.className=`alert alert-${e} alert-dismissible text-break mb-2 fade`,i.innerHTML=o,i.querySelector("button").addEventListener("click",tC),tz.appendChild(i),setTimeout(()=>i.classList.add("show"),100)},t_=(t,e={})=>{let o=`
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
  `,i=document.createDocumentFragment(),a=document.createElement("div");return a.className="bg-light border shadow-sm mb-3 rounded",a.setAttribute("data-section","textBox"),a.setAttribute("data-index",t),a.innerHTML=o,a.querySelector('[data-input="font"]').value=e.font,a.querySelector('[data-input="textAlign"]').value=e.textAlign,a.querySelector('[data-input="allCaps"]').checked=e.allCaps,i.appendChild(a)},tR=(t,e,o,i=[])=>{null!=t&&(o.clearRect(0,0,e.width,e.height),"string"==typeof t?(o.fillStyle=t,o.fillRect(0,0,e.width,e.height)):o.drawImage(t,0,0,e.width,e.height),i.forEach(function(t,i){o.font=`${t.fontWeight} ${t.fontSize}px ${t.font}`;let a=i+1,n=o.measureText("M").width+t.fontSize/2,s=e.width/2,r=t.shadowBlur,l=(!0===t.allCaps?t.text.toUpperCase():t.text).split("\n");o.fillStyle=t.fillColor,o.textAlign=t.textAlign,o.save(),0!==r&&(o.shadowOffsetX=0,o.shadowOffsetY=0,o.shadowBlur=r,o.shadowColor=t.shadowColor),t.rotate?(o.translate(s+t.offsetX,n*a+t.offsetY),o.rotate(t.rotate*Math.PI/180),l.forEach((t,e)=>o.fillText(t,0,e*n)),o.rotate(-(t.rotate*Math.PI/180)),o.translate(-(s+t.offsetX),-(n*a+t.offsetY))):l.forEach((e,i)=>{o.fillText(e,s+t.offsetX,i*n+n*a+t.offsetY)}),o.restore()}))},tT=document.getElementById("videoModal"),tB=document.getElementById("downloadModal"),tF=document.getElementById("canvas"),tM=document.querySelector("files-dropzone"),t$=document.getElementById("instructions"),tH=tF.getContext("2d"),tO=document.getElementById("imageUploadMethodSelect"),tN=document.getElementById("fileSelectBtn"),tI=document.getElementById("imageUrlForm"),tq=document.getElementById("addTextboxBtn"),tj=document.getElementById("inputsContainer"),tU=document.getElementById("generateMemeBtn"),tD=document.getElementById("openVideoModalBtn"),tP=document.getElementById("downloadMemeBtn"),tW=document.getElementById("downloadMemePreview"),tX=document.querySelector("web-share"),tY=document.getElementById("gallery"),tV=document.getElementById("gallerySearch"),tG=tY.querySelector(".gallery__no-results"),tK=document.getElementById("solidColorForm"),tZ=document.querySelectorAll(".upload-method");let tJ=null,tQ=null;const t0={_isSettingsOpen:!1,text:"",fillColor:"#ffffff",shadowColor:"#000000",font:"Anton",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:3,offsetY:0,offsetX:0,rotate:0,allCaps:!0};let t1=[{...t0}];const t2=async()=>{let t=tF.toDataURL("image/png"),e=t.replace("image/png","image/octet-stream");if(tP.download=`${tc("meme")}.png`,tP.href=e,tW.src=e,s())try{let e=await tk({url:t,filename:`${tc("meme")}.png`,mimeType:"image/png"}).catch(t=>tL(t.message,"danger"));e&&s({files:[e]})&&(tX.shareFiles=[e],tX.hidden=!1)}catch(t){console.error(t)}tB.open=!0},t7=t=>{let e=t.target.width,o=t.target.height;e>o?e>800&&(o*=800/e,e=800):o>600&&(e*=600/o,o=600),tF.width=e,tF.height=o,tR(tJ=t.target,tF,tH,t1),tU.disabled=!1,tF.hidden=!1,t$.hidden=!0},t5=t=>{if(!t)return;let e=new Image,o=new FileReader;o.addEventListener("load",function(t){let o=t.target.result;e.addEventListener("load",t7),e.src=o}),o.readAsDataURL(t)},t3=(t,e,o)=>{"checkbox"===t.type?t1[e][o]=t.checked:"number"===t.type?t1[e][o]=Number(t.value):t1[e][o]=t.value,tR(tJ,tF,tH,t1)},t4=async t=>{t.preventDefault();let e=t.target,o=e.querySelector('button[type="submit"]'),i=e.imageUrl.value;if(i.trim()){o.disabled=!0,o.querySelector(".spinner").hidden=!1,o.querySelector(".label").hidden=!0;try{let t=await tk({url:i}).catch(t=>tL(t.message,"danger"));t&&t5(t)}catch(t){tL(`Failed to load image from "${i}".`,"danger")}finally{o.disabled=!1,o.querySelector(".spinner").hidden=!0,o.querySelector(".label").hidden=!1}}},t8=(t,e,o)=>()=>{let i=document.querySelectorAll('[data-section="textBox"]')[o],a=i.querySelector('[data-input="offsetY"]'),n=i.querySelector('[data-input="offsetX"]');"offsetY"===t&&("-"===e&&(t1[o].offsetY-=1),"+"===e&&(t1[o].offsetY+=1),a.value=t1[o].offsetY),"offsetX"===t&&("-"===e&&(t1[o].offsetX-=1),"+"===e&&(t1[o].offsetX+=1),n.value=t1[o].offsetX),tR(tJ,tF,tH,t1),tQ=requestAnimationFrame(t8(t,e,o))},t6=async t=>{let e=t.target.closest("button");if(!e)return;let o=e.querySelector("img");try{let t=await tk({url:o.src}).catch(t=>tL(t.message,"danger"));t&&t5(t)}catch(t){tL(`Failed to load image: "${o.alt}".`,"danger")}};tN.addEventListener("click",()=>{"function"==typeof tM.openFileDialog&&tM.openFileDialog()}),tD.addEventListener("click",()=>{let t=tT.querySelector("capture-photo");t?"function"==typeof t.startVideoStream&&t.startVideoStream():((t=document.createElement("capture-photo")).noImage=!0,tT.appendChild(t)),tT.open=!0}),tq.addEventListener("click",()=>{let t=t_(t1.length,t0);t1.push({...t0}),tj.appendChild(t),t.querySelector('[data-input="text"]').focus()}),tU.addEventListener("click",t2),tP.addEventListener("click",()=>tB.open=!1),tI.addEventListener("submit",t4),tM.addEventListener("files-dropzone-drop-accepted",t=>{let[e]=t.detail.acceptedFiles;e&&t5(e)}),tj.addEventListener("input",t=>{let e;let o=t.target,i=Number(o.closest('[data-section="textBox"]').getAttribute("data-index"));o.matches('[data-input="text"]')?e="text":o.matches('[data-input="fillColor"]')?e="fillColor":o.matches('[data-input="shadowColor"]')?e="shadowColor":o.matches('[data-input="font"]')?e="font":o.matches('[data-input="fontSize"]')?e="fontSize":o.matches('[data-input="fontWeight"]')?e="fontWeight":o.matches('[data-input="textAlign"]')?e="textAlign":o.matches('[data-input="shadowBlur"]')?e="shadowBlur":o.matches('[data-input="offsetY"]')?e="offsetY":o.matches('[data-input="offsetX"]')?e="offsetX":o.matches('[data-input="rotate"]')&&(e="rotate"),e&&t3(o,i,e)}),tj.addEventListener("change",t=>{let e;let o=t.target,i=Number(o.closest('[data-section="textBox"]').getAttribute("data-index"));o.matches('[data-input="allCaps"]')&&(e="allCaps"),e&&t3(o,i,e)}),tj.addEventListener("click",t=>{let e=t.target;if(e.matches('[data-button="settings"]')){let t=e.closest('[data-section="textBox"]').getAttribute("data-index");document.querySelectorAll('[data-section="textBox"]').forEach((e,o)=>{let i=e.querySelector('[data-section="settings"]');e.getAttribute("data-index")===t?(i.hidden=!i.hidden,t1[o]._isSettingsOpen=!t1[o]._isSettingsOpen):(i.hidden=!0,t1[o]._isSettingsOpen=!1)})}if(e.matches('[data-button="delete-text-box"]')){let t=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),o=!0;t1[t].text.trim()&&(o=window.confirm("Are you sure you want to remove this text box?")),o&&(t1=td(t1,t),tj.querySelectorAll('[data-section="textBox"]').forEach(t=>t.remove()),t1.forEach((t,e)=>tj.appendChild(t_(e,t))),tR(tJ,tF,tH,t1))}}),tj.addEventListener("pointerdown",t=>{let e=t.target;if(!e.closest('[data-section="textBox"]'))return;let o=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),i=e.matches('[data-move="offsetY"]'),a=e.matches('[data-move="offsetX"]');if(!i&&!a)return;let n=e.getAttribute("data-move"),s=e.getAttribute("data-sign");tQ=requestAnimationFrame(t8(n,s,o))}),tj.addEventListener("pointerup",t=>{let e=t.target,o=e.matches('[data-move="offsetY"]'),i=e.matches('[data-move="offsetX"]');(o||i)&&(cancelAnimationFrame(tQ),tQ=null)}),tj.addEventListener("pointerout",t=>{let e=t.target,o=e.matches('[data-move="offsetY"]'),i=e.matches('[data-move="offsetX"]');(o||i)&&tQ&&(cancelAnimationFrame(tQ),tQ=null)}),tO.addEventListener("change",t=>{tZ.forEach(e=>e.hidden=e.id!==t.target.value)}),tY.addEventListener("click",t6),tV.addEventListener("input",t=>{let e=t.target.value.toLowerCase().trim();tY.querySelectorAll("button").forEach(t=>{let o=(t.querySelector("img").getAttribute("alt")||"").toLowerCase();t.hidden=!o.includes(e)}),tG.hidden=!!tY.querySelector("button:not([hidden])")}),tK.addEventListener("input",t=>{t.target===tK.canvasColor&&(tJ=t.target.value),"string"==typeof tJ&&(tF.width=Number(tK.canvasWidth.value)||600,tF.height=Number(tK.canvasHeight.value)||400,tR(tJ,tF,tH,t1),tU.disabled=!1,tF.hidden=!1,t$.hidden=!0)}),document.addEventListener("web-share:error",()=>{tB.open=!1,tL("There was an error while trying to share your meme.","danger")}),document.addEventListener("capture-photo:error",t=>{console.error(t.detail.error),tL(t.detail.error.message,"danger")}),document.addEventListener("capture-photo:success",t=>{tT.open=!1;let e=new Image;e.addEventListener("load",t7),e.src=t.detail.dataURI}),document.addEventListener("me-close",t=>{if("videoModal"===t.target.id){let t=tT.querySelector("capture-photo");t&&"function"==typeof t.stopVideoStream&&t.stopVideoStream()}}),tY.querySelectorAll("button > img")?.forEach(t=>{t.setAttribute("title",t.getAttribute("alt"))}),t1.forEach((t,e)=>{tj.appendChild(t_(e,t))}),tM.accept=th,tS.forEach(({name:t,path:e,style:o,weight:i})=>{tA(t,e,{style:o,weight:i})});
//# sourceMappingURL=index.cd948b32.js.map
