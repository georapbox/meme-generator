!function(){function t(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},n=o.parcelRequire5078;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){a[t]=e},o.parcelRequire5078=n);var s=n.register;function r(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}s("iE7OH",function(e,o){t(e.exports,"register",function(){return i},function(t){return i=t});var i,a=new Map;i=function(t,e){for(var o=0;o<e.length-1;o+=2)a.set(e[o],{baseUrl:t,path:e[o+1]})}}),s("aNJCr",function(e,o){t(e.exports,"getBundleURL",function(){return i},function(t){return i=t});var i,a={};i=function(t){var e=a[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[t]=e),e}}),n("iE7OH").register(n("aNJCr").getBundleURL("8tAhj"),JSON.parse('["8tAhj","index.bc158aed.js","cmj6F","Anton-Regular.e58ab3fe.ttf","a9OJN","Oswald-Regular.89ec7d89.ttf","jOuj0","Oswald-Bold.0f6a7ca6.ttf","ePq3V","Roboto-Regular.ca197847.ttf","9WQUU","Roboto-Bold.fdb9b54a.ttf","hIywO","RobotoCondensed-Regular.d585f5c7.ttf","ab1rw","RobotoCondensed-Bold.e1f96d4b.ttf","j4ruO","CourierPrime-Regular.3a25a501.ttf","3nnD2","CourierPrime-Bold.3d6bf689.ttf","8fsWK","OpenSans-Regular.edf9e01b.ttf","5JXG6","OpenSans-Bold.8fceb72b.ttf","9FH7D","index.2d751096.css"]')),Object.defineProperty({},"WebShare",{get:function(){return c},set:void 0,enumerable:!0,configurable:!0});let l=`
  :host {
    display: inline-block;
  }
`,d=document.createElement("template");d.innerHTML=`
  <style>${l}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class c extends HTMLElement{#t;#e;#o=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(d.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#e=this.#i()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#e&&(this.#e.toggleAttribute("disabled",this.disabled),this.#e.setAttribute("aria-disabled",this.disabled.toString()),this.#e.part&&this.#e.part.contains("button")&&this.#e.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#a("shareUrl"),this.#a("shareTitle"),this.#a("shareText"),this.#a("shareFiles"),this.#a("disabled"),this.#t?.addEventListener("slotchange",this.#n),this.#e?.addEventListener("click",this.#s)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#n),this.#e?.removeEventListener("click",this.#s)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#o}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#o=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#s=t=>{t.preventDefault(),this.disabled||this.share()};#n=t=>{t.target&&"button"===t.target.name&&(this.#e?.removeEventListener("click",this.#s),this.#e=this.#i(),this.#e&&(this.#e.addEventListener("click",this.#s),"BUTTON"===this.#e.nodeName||this.#e.hasAttribute("role")||this.#e.setAttribute("role","button")))};#i(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#a(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,c)}}c.defineCustomElement(),Object.defineProperty({},"CapturePhoto",{get:function(){return b},set:void 0,enumerable:!0,configurable:!0});let h=(t,e,o)=>(Number.isNaN(e)&&(e=0),Number.isNaN(o)&&(o=0),Math.min(Math.max(t,Math.min(e,o)),Math.max(e,o))),u="capture-photo",p=`
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none;
  }

  video {
    display: block;
  }

  #output:empty {
    display: none;
  }
`,m=document.createElement("template");m.innerHTML=`
  <style>${p}</style>

  <video part="video" playsinline></video>

  <canvas hidden></canvas>

  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button">
        <slot name="capture-button-content">Capture photo</slot>
      </button>
    </slot>

    <slot name="facing-mode-button" hidden>
      <button part="facing-mode-button" type="button">
        <slot name="facing-mode-button-content">Toggle facing mode</slot>
      </button>
    </slot>

    <slot name="actions"></slot>
  </div>

  <slot></slot>

  <div part="output-container" id="output"></div>
`;class b extends HTMLElement{#t={};#e=null;#i=null;#r=null;#s=null;#n=null;#o=null;#a=null;#l=null;constructor(){super(),this.#t=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}attributeChangedCallback(t,e,o){if(!this.isConnected)return;let i=this.getTrackCapabilities(),a=this.getTrackSettings();if("no-image"===t&&e!==o&&this.#d(),"facing-mode"===t&&e!==o&&"facingMode"in this.#t){let t=["user","environment"].includes(this.facingMode||"");"facingMode"in a&&t&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===t&&e!==o&&"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,e=0]=this.cameraResolution.split("x").map(t=>Number(t));if(t>0&&e>0&&"width"in i&&"height"in i){let o=!!(i.width?.min&&i.width?.max)&&t>=i?.width?.min&&t<=i?.width?.max,n=!!(i.height?.min&&i.height?.max)&&e>=i?.height?.min&&e<=i?.height?.max;"width"in a&&"height"in a&&o&&n&&(this.stopVideoStream(),this.startVideoStream())}}if("pan"===t&&e!==o&&"pan"in this.#t){let t=!!("pan"in i&&i.pan?.min&&i.pan?.max)&&this.pan>=i.pan.min&&this.pan<=i.pan.max;"pan"in a&&"number"==typeof this.pan&&t&&this.#c("pan",this.pan)}if("tilt"===t&&e!==o&&"tilt"in this.#t){let t=!!("tilt"in i&&i.tilt?.min&&i.tilt?.max)&&this.tilt>=i.tilt.min&&this.tilt<=i.tilt.max;"tilt"in a&&"number"==typeof this.tilt&&t&&this.#c("tilt",this.tilt)}if("zoom"===t&&e!==o&&"zoom"in this.#t){let t=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"zoom"in a&&"number"==typeof this.zoom&&t&&this.#c("zoom",this.zoom)}}connectedCallback(){if(this.#h("autpoPlay"),this.#h("noImage"),this.#h("facingMode"),this.#h("cameraResolution"),this.#h("pan"),this.#h("tilt"),this.#h("zoom"),this.#h("calculateFileSize"),this.#i=this.shadowRoot?.querySelector("canvas")||null,this.#r=this.shadowRoot?.getElementById("output")||null,this.#s=this.shadowRoot?.querySelector("video")||null,this.#n=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#o=this.#u(),this.#a=this.shadowRoot?.querySelector('slot[name="facing-mode-button"]')||null,this.#l=this.#p(),this.#s?.addEventListener("loadedmetadata",this.#m),this.#n?.addEventListener("slotchange",this.#b),this.#o?.addEventListener("click",this.#g),this.#a?.addEventListener("slotchange",this.#f),this.#l?.addEventListener("click",this.#v),!b.isSupported())return this.dispatchEvent(new CustomEvent(`${u}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#l?.removeEventListener("click",this.#v),this.#o?.removeEventListener("click",this.#g),this.#s?.removeEventListener("canplay",this.#m),this.#n?.removeEventListener("slotchange",this.#b),this.#a?.removeEventListener("slotchange",this.#f)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(t){this.toggleAttribute("auto-play",!!t)}get noImage(){return this.hasAttribute("no-image")}set noImage(t){this.toggleAttribute("no-image",!!t)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(t){this.setAttribute("pan",null!=t?t.toString():t)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(t){this.setAttribute("tilt",null!=t?t.toString():t)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(t){this.setAttribute("zoom",null!=t?t.toString():t)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){this.toggleAttribute("calculate-file-size",!!t)}#v=t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")};#g=t=>{t.preventDefault(),this.capture()};#m=t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${u}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${u}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})};#d(){this.#r&&Array.from(this.#r.childNodes).forEach(t=>t.remove())}#c(t,e){if(!this.#e||!t||!e)return;let[o]=this.#e.getVideoTracks(),i=this.getTrackCapabilities();t in this.getTrackSettings()&&o.applyConstraints({advanced:[{[t]:h(Number(e),i[t]?.min||1,i[t]?.max||1)}]})}#b=t=>{t.target?.name==="capture-button"&&(this.#o?.removeEventListener("click",this.#g),this.#o=this.#u(),this.#o&&(this.#o.addEventListener("click",this.#g),"BUTTON"===this.#o.nodeName||this.#o.hasAttribute("role")||this.#o.setAttribute("role","button")))};#f=t=>{t.target?.name==="facing-mode-button"&&(this.#l?.removeEventListener("click",this.#v),this.#l=this.#p(),this.#l&&(this.#l.addEventListener("click",this.#v),"BUTTON"===this.#l.nodeName||this.#l.hasAttribute("role")||this.#l.setAttribute("role","button")))};#p(){return this.#a&&this.#a.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))||null}#u(){return this.#n&&this.#n.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))||null}#h(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}async startVideoStream(){if(!b.isSupported()||this.#e)return;this.setAttribute("loading","");let t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,o=0]=this.cameraResolution.split("x").map(t=>Number(t));e>0&&o>0&&(t.video.width=e,t.video.height=o)}try{this.#e=await navigator.mediaDevices.getUserMedia(t),this.#s&&(this.#s.srcObject=this.#e),this.#c("pan",this.pan),this.#c("tilt",this.tilt),this.#c("zoom",this.zoom);let e=this.getTrackSettings();"facingMode"in e&&this.#a&&(this.#a.hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent(`${u}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}stopVideoStream(){if(!this.#s||!this.#e)return;let[t]=this.#e.getVideoTracks();t?.stop(),this.#s.srcObject=null,this.#e=null}async capture(){if(!this.loading&&this.#i&&this.#s)try{let t=this.#i.getContext("2d"),e=this.#s.videoWidth,o=this.#s.videoHeight;this.#i.width=e,this.#i.height=o,t?.drawImage(this.#s,0,0,e,o);let i=this.#i.toDataURL("image/png");if("string"==typeof i&&i.includes("data:image")){if(!this.noImage){let t=new Image;t.src=i,t.width=e,t.height=o,t.setAttribute("part","output-image"),this.#d(),this.#r?.appendChild(t)}let t={dataURI:i,width:e,height:o};if(this.calculateFileSize)try{let e=await fetch(i),o=(await e.blob()).size;o&&(t.size=o)}catch(t){}this.dispatchEvent(new CustomEvent(`${u}:success`,{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent(`${u}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return b.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#e)return{};let[t]=this.#e.getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!this.#e)return{};let[t]=this.#e.getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=u){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,b)}}b.defineCustomElement(),Object.defineProperty({},"ModalElement",{get:function(){return f},set:void 0,enumerable:!0,configurable:!0});let g=document.createElement("template");g.innerHTML=`
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
`;class f extends HTMLElement{#e=null;#t=null;#r=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(g.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.querySelector("dialog"),this.#t=this.shadowRoot.querySelector('slot[name="footer"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button"]}attributeChangedCallback(t,e,o){if(null!==this.#e){if("open"===t&&e!==o&&(this.open?(this.#e.showModal(),document.body&&(document.body.style.overflowY="hidden"),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}}))):this.#e.close()),"no-header"===t&&e!==o){let t=this.#e.querySelector(".dialog__header");null!==t&&(t.hidden=this.noHeader)}if("no-animations"===t&&e!==o&&this.#e.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===t&&e!==o){let t=this.#e.querySelector(".dialog__close");null!==t&&(t.hidden=this.noCloseButton)}}}connectedCallback(){this.#i("open"),this.#i("staticBackdrop"),this.#i("noHeader"),this.#i("noAnimations"),this.#i("noCloseButton"),this.#i("fullscreen"),this.#e?.addEventListener("click",this.#n),this.#e?.addEventListener("close",this.#l),this.#e?.addEventListener("cancel",this.#o),this.#e?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#s),this.#t?.addEventListener("slotchange",this.#a)}disconnectedCallback(){this.#r&&clearTimeout(this.#r),this.#e?.addEventListener("click",this.#n),this.#e?.removeEventListener("close",this.#l),this.#e?.removeEventListener("cancel",this.#o),this.#e?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#s),this.#t?.removeEventListener("slotchange",this.#a)}get open(){return this.hasAttribute("open")}set open(t){t?this.setAttribute("open",""):this.removeAttribute("open")}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(t){t?this.setAttribute("static-backdrop",""):this.removeAttribute("static-backdrop")}get noHeader(){return this.hasAttribute("no-header")}set noHeader(t){t?this.setAttribute("no-header",""):this.removeAttribute("no-header")}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){t?this.setAttribute("no-animations",""):this.removeAttribute("no-animations")}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(t){t?this.setAttribute("no-close-button",""):this.removeAttribute("no-close-button")}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(t){t?this.setAttribute("fullscreen",""):this.removeAttribute("fullscreen")}#h(){this.#r||(this.#e?.classList.add("dialog--pulse"),this.#r=setTimeout(()=>{this.#e?.classList.remove("dialog--pulse"),clearTimeout(this.#r),this.#r=void 0},300))}#l=()=>{this.open=!1,document.body&&(document.body.style.overflowY=""),this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}}))};#o=t=>{let e=this.#u("escape-key");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#h())};#s=t=>{let e=this.#u("close-button");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#h())};#n=t=>{if(t.target!==t.currentTarget)return;let e=this.#u("backdrop-click");if(this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop){this.noAnimations||this.#h();return}this.#e?.close()};#a=()=>{if(null===this.#e)return;let t=this.#e.querySelector(".dialog__footer");if(null===t)return;let e=this.#t?.assignedNodes(),o=!!e&&e.length>0;t.hidden=!o};#u(t){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:t,element:this}})}#i(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(t="modal-element"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,f)}}f.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return T},set:void 0,enumerable:!0,configurable:!0});let v=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),y=[".DS_Store","Thumbs.db"],w=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let o=(e.split(".").pop()||"").toLowerCase(),i=v.get(o);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t},E=(t,e)=>{let o=w(t);if("string"!=typeof o.path){let{webkitRelativePath:i}=t;Object.defineProperty(o,"path",{value:"string"==typeof e?e:i||t.name,writable:!1,configurable:!1,enumerable:!0})}return o},x=async t=>await new Promise((e,o)=>{t.readEntries(e,o)}),A=async t=>{let e=[],o=await x(t);for(;o.length>0;)e.push(...o),o=await x(t);return e},S=t=>new Promise((e,o)=>{t.file(o=>e(E(o,t.fullPath)),o)}),k=async t=>{let e=[],o=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();o.push(t)}for(;o.length>0;){let t=o.shift();if(t){if(t.isFile){let o=await S(t);-1===y.indexOf(o.name)&&e.push(o)}else t.isDirectory&&o.push(...await A(t.createReader()))}}return e},C=async t=>{let e=[];for(let o of t)-1===y.indexOf(o.name)&&e.push(E(o));return e},z=async t=>t.dataTransfer?t.dataTransfer.items?await k(t.dataTransfer.items):await C(t.dataTransfer.files):await C(t.target.files),L="files-dropzone",_="TOO_MANY_FILES",R=document.createElement("template"),B=`
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
`;R.innerHTML=`
  <style>
    ${B}
  </style>

  <input type="file" id="fileInput" hidden>

  <div part="dropzone" class="dropzone" id="dropzoneEl" tabindex="0" role="presentation">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class T extends HTMLElement{#e=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(R.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.getElementById("fileInput"),this.#t=this.shadowRoot.getElementById("dropzoneEl"))}static get observedAttributes(){return["accept","disabled","multiple","no-keyboard"]}attributeChangedCallback(t,e,o){"accept"===t&&e!==o&&this.#e&&(this.#e.accept=this.accept),"disabled"===t&&e!==o&&this.#e&&(this.#e.disabled=this.disabled,this.disabled?this.#t?.removeAttribute("tabindex"):this.#t?.setAttribute("tabindex","0")),"multiple"===t&&e!==o&&this.#e&&(this.#e.multiple=this.multiple),"no-keyboard"===t&&e!==o&&this.#t&&(this.noKeyboard?this.#t.removeAttribute("tabindex"):this.#t.setAttribute("tabindex","0"))}connectedCallback(){this.#r("accept"),this.#r("disabled"),this.#r("maxFiles"),this.#r("maxSize"),this.#r("minSize"),this.#r("multiple"),this.#r("noClick"),this.#r("noDrag"),this.#r("noKeyboard"),this.#r("autoFocus"),this.#r("noStyle"),this.#e?.addEventListener("change",this.#i),this.#t?.addEventListener("dragenter",this.#a),this.#t?.addEventListener("dragover",this.#n),this.#t?.addEventListener("dragleave",this.#s),this.#t?.addEventListener("drop",this.#o),this.#t?.addEventListener("click",this.#h),this.#t?.addEventListener("keyup",this.#l),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#e?.removeEventListener("change",this.#i),this.#t?.removeEventListener("dragenter",this.#a),this.#t?.removeEventListener("dragover",this.#n),this.#t?.removeEventListener("dragleave",this.#s),this.#t?.removeEventListener("drop",this.#o),this.#t?.removeEventListener("click",this.#h),this.#t?.removeEventListener("keyup",this.#l)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get noClick(){return this.hasAttribute("no-click")}set noClick(t){this.toggleAttribute("no-click",!!t)}get noDrag(){return this.hasAttribute("no-drag")}set noDrag(t){this.toggleAttribute("no-drag",!!t)}get noKeyboard(){return this.hasAttribute("no-keyboard")}set noKeyboard(t){this.toggleAttribute("no-keyboard",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#i=async t=>{try{this.#m(await z(t))}catch(t){this.dispatchEvent(new CustomEvent(`${L}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#a=()=>{this.disabled||this.noDrag||this.dispatchEvent(new Event(`${L}-dragenter`,{bubbles:!0,composed:!0}))};#n=t=>{if(t.preventDefault(),this.disabled||this.noDrag){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${L}-dragover`,{bubbles:!0,composed:!0}))};#s=()=>{this.disabled||this.noDrag||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${L}-dragleave`,{bubbles:!0,composed:!0})))};#o=async t=>{if(!this.disabled&&!this.noDrag){t.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#m(await z(t))}catch(t){this.dispatchEvent(new CustomEvent(`${L}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#h=()=>{this.disabled||this.noClick||this.#e?.click()};#l=t=>{this.disabled||this.noKeyboard||" "!==t.key&&"Enter"!==t.key||this.#e?.click()};#m(t){if(!Array.isArray(t)||!t.length)return;let e=[],o=[],i=t.length;if(!this.multiple&&i>1)for(let e of t)o.push({file:e,errors:[{code:_,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let e of t)o.push({file:e,errors:[{code:_,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of t){let t=function(t,e=""){if(!e)return!0;let o=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],i=t.type,a=i.replace(/\/.*$/,"");for(let e of o)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(a===e.replace(/\/.*$/,""))return!0}else if(i===e)return!0;return!1}(i,this.accept),a=i.size>this.maxSize,n=i.size<this.minSize;if(!t||a||n){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),a&&e.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),n&&e.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:e})}else e.push(i)}this.dispatchEvent(new CustomEvent(`${L}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:o}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${L}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${L}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#e&&(this.#e.value=this.#e.defaultValue)}openFileDialog(){this.disabled||this.#e?.click()}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t=L){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,T)}}T.defineCustomElement();let F=(t,...e)=>{if(!Array.isArray(t))throw TypeError("Expected an array for first argument");return t.filter((t,o)=>-1===e.indexOf(o))},N=(t="",e="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${o}${"string"==typeof e&&""!==e?"-"+e:""}`},$=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];var O={};O=n("aNJCr").getBundleURL("8tAhj")+"Anton-Regular.e58ab3fe.ttf";var H={};H=n("aNJCr").getBundleURL("8tAhj")+"Oswald-Regular.89ec7d89.ttf";var I={};I=n("aNJCr").getBundleURL("8tAhj")+"Oswald-Bold.0f6a7ca6.ttf";var M={};M=n("aNJCr").getBundleURL("8tAhj")+"Roboto-Regular.ca197847.ttf";var j={};j=n("aNJCr").getBundleURL("8tAhj")+"Roboto-Bold.fdb9b54a.ttf";var q={};q=n("aNJCr").getBundleURL("8tAhj")+"RobotoCondensed-Regular.d585f5c7.ttf";var P={};P=n("aNJCr").getBundleURL("8tAhj")+"RobotoCondensed-Bold.e1f96d4b.ttf";var U={};U=n("aNJCr").getBundleURL("8tAhj")+"CourierPrime-Regular.3a25a501.ttf";var D={};D=n("aNJCr").getBundleURL("8tAhj")+"CourierPrime-Bold.3d6bf689.ttf";var Y={};Y=n("aNJCr").getBundleURL("8tAhj")+"OpenSans-Regular.edf9e01b.ttf";var V={};V=n("aNJCr").getBundleURL("8tAhj")+"OpenSans-Bold.8fceb72b.ttf";let X=[{name:"Anton",label:"Anton",path:e(O),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:e(H),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:e(I),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:e(M),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:e(j),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:e(q),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:e(P),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:e(U),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:e(D),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:e(Y),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:e(V),style:"normal",weight:"400"}],J=async(t,e,o={})=>{try{let i=new FontFace(t,`url(${e})`,{...o});await i.load(),document.fonts.add(i)}catch(t){console.error(t)}},W=async(t={})=>{let e=await fetch(t.url),o=await e.blob(),i=t.mimeType||o.type||"";if(!$.includes(i))throw Error(`This is not an accepted image format. Accepted MIME types are: ${$.join(", ")}`);return new File([o],t.filename||"",o)},G=document.getElementById("errorsContainer"),K=t=>{let e=t.currentTarget;e.removeEventListener("click",K),G.removeChild(e.parentNode)},Q=(t="",e="info")=>{["info","warning","danger"].includes(e)||(e="info");let o=`
    ${t}
    <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
  `,i=document.createElement("div");i.className=`alert alert-${e} alert-dismissible text-break mb-2 fade`,i.innerHTML=o,i.querySelector("button").addEventListener("click",K),G.appendChild(i),setTimeout(()=>i.classList.add("show"),100)},Z=(t,e={})=>{let o=`
    <div class="d-flex align-items-center">
      <button class="btn btn-link" data-button="delete-text-box" aria-label="Remove"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="Text #${t+1}">${e.text}</textarea>

      <div class="d-flex align-items-center pe-2">
        <input class="form-control" type="color" value="${e.fillColor}" data-input="fillColor" title="Fill color">
        <input class="form-control" type="color" value="${e.shadowColor}" data-input="shadowColor" title="Outline color">
        <button class="btn btn-secondary settings-button" data-button="settings" aria-label="Settings"></button>
      </div>
    </div>

    <div class="p-2" data-section="settings" ${e._isSettingsOpen?"":"hidden"}>
      <div class="row g-2">
        <div class="col-4 mb-3">
          <label for="fontInput_${t}" class="mb-1 d-block text-truncate">Font: </label>

          <select class="form-select" data-input="font" id="fontInput_${t}">
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
              ${X.map(({name:t,label:e})=>`<option value="${t}">${e}</option>`)}
            </optgroup>
          </select>
        </div>

        <div class="col-4 mb-3">
          <label for="fontSizeInput_${t}" class="mb-1 d-block text-truncate">Size:</label>
          <input class="form-control" type="number" min="1" value="${e.fontSize}" data-input="fontSize" id="fontSizeInput_${t}">
        </div>

        <div class="col-4 mb-3">
          <label for="fontWeightInput_${t}" class="mb-1 d-block text-truncate">Weight:</label>
          <select class="form-select" data-input="fontWeight" id="fontWeightInput_${t}">
            <option value="normal" selected>Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label for="shadowWidthInput_${t}" class="mb-1 d-block text-truncate">Shadow width:</label>
          <input class="form-control" type="number" min="0" max="10" value="${e.shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${t}">
        </div>

        <div class="col-4 mb-3">
          <label for="textAlign_${t}" class="mb-1 d-block text-truncate">Text align:</label>
          <select class="form-select" data-input="textAlign" id="textAlignInput_${t}">
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

      <div class="row g-2">
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

      <div class="row g-2">
        <div class="col-lg-12">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="allCapsCheckbox_${t}" data-input="allCaps">
            <label class="custom-control-label" for="allCapsCheckbox_${t}">ALL CAPS</label>
          </div>
        </div>
      </div>
    </div>
  `,i=document.createDocumentFragment(),a=document.createElement("div");return a.className="bg-light border shadow-sm mb-3 rounded",a.setAttribute("data-section","textBox"),a.setAttribute("data-index",t),a.innerHTML=o,a.querySelector('[data-input="font"]').value=e.font,a.querySelector('[data-input="textAlign"]').value=e.textAlign,a.querySelector('[data-input="allCaps"]').checked=e.allCaps,i.appendChild(a)},tt=(t,e,o,i=[])=>{null!=t&&(o.clearRect(0,0,e.width,e.height),"string"==typeof t?(o.fillStyle=t,o.fillRect(0,0,e.width,e.height)):o.drawImage(t,0,0,e.width,e.height),i.forEach(function(t,i){o.font=`${t.fontWeight} ${t.fontSize}px ${t.font}`;let a=i+1,n=o.measureText("M").width+t.fontSize/2,s=e.width/2,r=t.shadowBlur,l=(!0===t.allCaps?t.text.toUpperCase():t.text).split("\n");o.fillStyle=t.fillColor,o.textAlign=t.textAlign,o.save(),0!==r&&(o.shadowOffsetX=0,o.shadowOffsetY=0,o.shadowBlur=r,o.shadowColor=t.shadowColor),t.rotate?(o.translate(s+t.offsetX,n*a+t.offsetY),o.rotate(t.rotate*Math.PI/180),l.forEach((t,e)=>o.fillText(t,0,e*n)),o.rotate(-(t.rotate*Math.PI/180)),o.translate(-(s+t.offsetX),-(n*a+t.offsetY))):l.forEach((e,i)=>{o.fillText(e,s+t.offsetX,i*n+n*a+t.offsetY)}),o.restore()}))},te=document.getElementById("videoModal"),to=document.getElementById("downloadModal"),ti=document.getElementById("canvas"),ta=document.querySelector("files-dropzone"),tn=document.getElementById("instructions"),ts=ti.getContext("2d"),tr=document.getElementById("imageUploadMethodSelect"),tl=document.getElementById("fileSelectBtn"),td=document.getElementById("imageUrlForm"),tc=document.getElementById("addTextboxBtn"),th=document.getElementById("inputsContainer"),tu=document.getElementById("generateMemeBtn"),tp=document.getElementById("openVideoModalBtn"),tm=document.getElementById("downloadMemeBtn"),tb=document.getElementById("downloadMemePreview"),tg=document.querySelector("web-share"),tf=document.getElementById("gallery"),tv=document.getElementById("gallerySearch"),ty=tf.querySelector(".gallery__no-results"),tw=document.getElementById("solidColorForm"),tE=document.querySelectorAll(".upload-method"),tx=null,tA=null,tS={_isSettingsOpen:!1,text:"",fillColor:"#ffffff",shadowColor:"#000000",font:"Anton",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:3,offsetY:0,offsetX:0,rotate:0,allCaps:!0},tk=[{...tS}],tC=async()=>{let t=ti.toDataURL("image/png"),e=t.replace("image/png","image/octet-stream");if(tm.download=`${N("meme")}.png`,tm.href=e,tb.src=e,r())try{let e=await W({url:t,filename:`${N("meme")}.png`,mimeType:"image/png"}).catch(t=>Q(t.message,"danger"));e&&r({files:[e]})&&(tg.shareFiles=[e],tg.hidden=!1)}catch(t){console.error(t)}to.open=!0},tz=t=>{let e=t.target.width,o=t.target.height;e>o?e>800&&(o*=800/e,e=800):o>600&&(e*=600/o,o=600),ti.width=e,ti.height=o,tt(tx=t.target,ti,ts,tk),tu.disabled=!1,ti.hidden=!1,tn.hidden=!0},tL=t=>{if(!t)return;let e=new Image,o=new FileReader;o.addEventListener("load",function(t){let o=t.target.result;e.addEventListener("load",tz),e.src=o}),o.readAsDataURL(t)},t_=(t,e,o)=>{"checkbox"===t.type?tk[e][o]=t.checked:"number"===t.type?tk[e][o]=Number(t.value):tk[e][o]=t.value,tt(tx,ti,ts,tk)},tR=async t=>{t.preventDefault();let e=t.target,o=e.querySelector('button[type="submit"]'),i=e.imageUrl.value;if(i.trim()){o.disabled=!0,o.querySelector(".spinner").hidden=!1,o.querySelector(".label").hidden=!0;try{let t=await W({url:i}).catch(t=>Q(t.message,"danger"));t&&tL(t)}catch(t){Q(`Failed to load image from "${i}".`,"danger")}finally{o.disabled=!1,o.querySelector(".spinner").hidden=!0,o.querySelector(".label").hidden=!1}}},tB=(t,e,o)=>()=>{let i=document.querySelectorAll('[data-section="textBox"]')[o],a=i.querySelector('[data-input="offsetY"]'),n=i.querySelector('[data-input="offsetX"]');"offsetY"===t&&("-"===e&&(tk[o].offsetY-=1),"+"===e&&(tk[o].offsetY+=1),a.value=tk[o].offsetY),"offsetX"===t&&("-"===e&&(tk[o].offsetX-=1),"+"===e&&(tk[o].offsetX+=1),n.value=tk[o].offsetX),tt(tx,ti,ts,tk),tA=requestAnimationFrame(tB(t,e,o))},tT=async t=>{let e=t.target.closest("button");if(!e)return;let o=e.querySelector("img");try{let t=await W({url:o.src}).catch(t=>Q(t.message,"danger"));t&&tL(t)}catch(t){Q(`Failed to load image: "${o.alt}".`,"danger")}};tl.addEventListener("click",()=>{"function"==typeof ta.openFileDialog&&ta.openFileDialog()}),tp.addEventListener("click",()=>{te.open=!0}),tc.addEventListener("click",()=>{let t=Z(tk.length,tS);tk.push({...tS}),th.appendChild(t),t.querySelector('[data-input="text"]').focus()}),tu.addEventListener("click",tC),tm.addEventListener("click",()=>to.open=!1),td.addEventListener("submit",tR),ta.addEventListener("files-dropzone-drop-accepted",t=>{let[e]=t.detail.acceptedFiles;e&&tL(e)}),th.addEventListener("input",t=>{let e;let o=t.target,i=Number(o.closest('[data-section="textBox"]').getAttribute("data-index"));o.matches('[data-input="text"]')?e="text":o.matches('[data-input="fillColor"]')?e="fillColor":o.matches('[data-input="shadowColor"]')?e="shadowColor":o.matches('[data-input="font"]')?e="font":o.matches('[data-input="fontSize"]')?e="fontSize":o.matches('[data-input="fontWeight"]')?e="fontWeight":o.matches('[data-input="textAlign"]')?e="textAlign":o.matches('[data-input="shadowBlur"]')?e="shadowBlur":o.matches('[data-input="offsetY"]')?e="offsetY":o.matches('[data-input="offsetX"]')?e="offsetX":o.matches('[data-input="rotate"]')&&(e="rotate"),e&&t_(o,i,e)}),th.addEventListener("change",t=>{let e;let o=t.target,i=Number(o.closest('[data-section="textBox"]').getAttribute("data-index"));o.matches('[data-input="allCaps"]')&&(e="allCaps"),e&&t_(o,i,e)}),th.addEventListener("click",t=>{let e=t.target;if(e.matches('[data-button="settings"]')){let t=e.closest('[data-section="textBox"]').getAttribute("data-index");document.querySelectorAll('[data-section="textBox"]').forEach((e,o)=>{let i=e.querySelector('[data-section="settings"]');e.getAttribute("data-index")===t?(i.hidden=!i.hidden,tk[o]._isSettingsOpen=!tk[o]._isSettingsOpen):(i.hidden=!0,tk[o]._isSettingsOpen=!1)})}if(e.matches('[data-button="delete-text-box"]')){let t=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),o=!0;tk[t].text.trim()&&(o=window.confirm("Are you sure you want to remove this text box?")),o&&(tk=F(tk,t),th.querySelectorAll('[data-section="textBox"]').forEach(t=>t.remove()),tk.forEach((t,e)=>th.appendChild(Z(e,t))),tt(tx,ti,ts,tk))}}),th.addEventListener("pointerdown",t=>{let e=t.target;if(!e.closest('[data-section="textBox"]'))return;let o=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),i=e.matches('[data-move="offsetY"]'),a=e.matches('[data-move="offsetX"]');if(!i&&!a)return;let n=e.getAttribute("data-move"),s=e.getAttribute("data-sign");tA=requestAnimationFrame(tB(n,s,o))}),th.addEventListener("pointerup",t=>{let e=t.target,o=e.matches('[data-move="offsetY"]'),i=e.matches('[data-move="offsetX"]');(o||i)&&(cancelAnimationFrame(tA),tA=null)}),th.addEventListener("pointerout",t=>{let e=t.target,o=e.matches('[data-move="offsetY"]'),i=e.matches('[data-move="offsetX"]');(o||i)&&tA&&(cancelAnimationFrame(tA),tA=null)}),tr.addEventListener("change",t=>{tE.forEach(e=>e.hidden=e.id!==t.target.value)}),tf.addEventListener("click",tT),tv.addEventListener("input",t=>{let e=t.target.value.toLowerCase().trim();tf.querySelectorAll("button").forEach(t=>{let o=(t.querySelector("img").getAttribute("alt")||"").toLowerCase();t.hidden=!o.includes(e)}),ty.hidden=!!tf.querySelector("button:not([hidden])")}),tw.addEventListener("input",t=>{t.target===tw.canvasColor&&(tx=t.target.value),"string"==typeof tx&&(ti.width=Number(tw.canvasWidth.value)||600,ti.height=Number(tw.canvasHeight.value)||400,tt(tx,ti,ts,tk),tu.disabled=!1,ti.hidden=!1,tn.hidden=!0)}),document.addEventListener("web-share:error",()=>{to.open=!1,Q("There was an error while trying to share your meme.","danger")}),document.addEventListener("capture-photo:error",t=>{console.error(t.detail.error),Q(t.detail.error.message,"danger")}),document.addEventListener("capture-photo:success",t=>{te.open=!1;let e=new Image;e.addEventListener("load",tz),e.src=t.detail.dataURI}),document.addEventListener("me-open",t=>{if("videoModal"===t.target.id){let t=te.querySelector("capture-photo");t&&"function"==typeof t.startVideoStream&&t.startVideoStream()}}),document.addEventListener("me-close",t=>{if("videoModal"===t.target.id){let t=te.querySelector("capture-photo");t&&"function"==typeof t.stopVideoStream&&t.stopVideoStream()}}),tf.querySelectorAll("button > img")?.forEach(t=>{t.setAttribute("title",t.getAttribute("alt"))}),tk.forEach((t,e)=>{th.appendChild(Z(e,t))}),ta.accept=$,X.forEach(({name:t,path:e,style:o,weight:i})=>{J(t,e,{style:o,weight:i})})}();
//# sourceMappingURL=index.bc158aed.js.map
