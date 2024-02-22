!function(){function e(e,t,o,i){Object.defineProperty(e,t,{get:o,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},n=o.parcelRequire5078;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},o.parcelRequire5078=n);var r=n.register;function s(e){return null!==e&&"object"==typeof e?"share"in navigator&&"canShare"in navigator&&navigator.canShare(e):"share"in navigator}r("iE7OH",function(t,o){e(t.exports,"register",function(){return i},function(e){return i=e});var i,a=new Map;i=function(e,t){for(var o=0;o<t.length-1;o+=2)a.set(t[o],{baseUrl:e,path:t[o+1]})}}),r("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return i},function(e){return i=e});var i,a={};i=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),n("iE7OH").register(n("aNJCr").getBundleURL("9p9yL"),JSON.parse('["9p9yL","index.dc7e95c9.js","EzZtK","Pressuru.684952ea.ttf","60MKY","Oswald-Regular.89ec7d89.ttf","6eP3Z","Oswald-Bold.0f6a7ca6.ttf","2o0AT","Roboto-Regular.ca197847.ttf","4xbeZ","Roboto-Bold.fdb9b54a.ttf","33Gxj","RobotoCondensed-Regular.d585f5c7.ttf","jWeQN","RobotoCondensed-Bold.e1f96d4b.ttf","d49QV","CourierPrime-Regular.3a25a501.ttf","6LGb0","CourierPrime-Bold.3d6bf689.ttf","3GM8h","OpenSans-Regular.edf9e01b.ttf","imsJw","OpenSans-Bold.8fceb72b.ttf","4W9cy","index.983eb480.css"]')),Object.defineProperty({},"WebShare",{get:function(){return c},set:void 0,enumerable:!0,configurable:!0});let l=`
  :host {
    display: inline-block;
  }
`,d=document.createElement("template");d.innerHTML=`
  <style>${l}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class c extends HTMLElement{#e;#t;#o=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(d.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#t=this.#i()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#t&&(this.#t.toggleAttribute("disabled",this.disabled),this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#a("shareUrl"),this.#a("shareTitle"),this.#a("shareText"),this.#a("shareFiles"),this.#a("disabled"),this.#e?.addEventListener("slotchange",this.#n),this.#t?.addEventListener("click",this.#r)}disconnectedCallback(){this.#e?.removeEventListener("slotchange",this.#n),this.#t?.removeEventListener("click",this.#r)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#o}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#o=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#r=e=>{e.preventDefault(),this.disabled||this.share()};#n=e=>{e.target&&"button"===e.target.name&&(this.#t?.removeEventListener("click",this.#r),this.#t=this.#i(),this.#t&&(this.#t.addEventListener("click",this.#r),"BUTTON"===this.#t.nodeName||this.#t.hasAttribute("role")||this.#t.setAttribute("role","button")))};#i(){return this.#e&&this.#e.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#a(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="web-share"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,c)}}c.defineCustomElement(),Object.defineProperty({},"CapturePhoto",{get:function(){return b},set:void 0,enumerable:!0,configurable:!0});let h=(e,t,o)=>(Number.isNaN(t)&&(t=0),Number.isNaN(o)&&(o=0),Math.min(Math.max(e,Math.min(t,o)),Math.max(t,o))),u="capture-photo",p=`
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
`;class b extends HTMLElement{#e={};#t=null;#i=null;#s=null;#r=null;#n=null;#o=null;#a=null;#l=null;constructor(){super(),this.#e=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}attributeChangedCallback(e,t,o){if(!this.isConnected)return;let i=this.getTrackCapabilities(),a=this.getTrackSettings();if("no-image"===e&&t!==o&&this.#d(),"facing-mode"===e&&t!==o&&"facingMode"in this.#e){let e=["user","environment"].includes(this.facingMode||"");"facingMode"in a&&e&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===e&&t!==o&&"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,t=0]=this.cameraResolution.split("x").map(e=>Number(e));if(e>0&&t>0&&"width"in i&&"height"in i){let o=!!(i.width?.min&&i.width?.max)&&e>=i?.width?.min&&e<=i?.width?.max,n=!!(i.height?.min&&i.height?.max)&&t>=i?.height?.min&&t<=i?.height?.max;"width"in a&&"height"in a&&o&&n&&(this.stopVideoStream(),this.startVideoStream())}}if("pan"===e&&t!==o&&"pan"in this.#e){let e=!!("pan"in i&&i.pan?.min&&i.pan?.max)&&this.pan>=i.pan.min&&this.pan<=i.pan.max;"pan"in a&&"number"==typeof this.pan&&e&&this.#c("pan",this.pan)}if("tilt"===e&&t!==o&&"tilt"in this.#e){let e=!!("tilt"in i&&i.tilt?.min&&i.tilt?.max)&&this.tilt>=i.tilt.min&&this.tilt<=i.tilt.max;"tilt"in a&&"number"==typeof this.tilt&&e&&this.#c("tilt",this.tilt)}if("zoom"===e&&t!==o&&"zoom"in this.#e){let e=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"zoom"in a&&"number"==typeof this.zoom&&e&&this.#c("zoom",this.zoom)}}connectedCallback(){if(this.#h("autpoPlay"),this.#h("noImage"),this.#h("facingMode"),this.#h("cameraResolution"),this.#h("pan"),this.#h("tilt"),this.#h("zoom"),this.#h("calculateFileSize"),this.#i=this.shadowRoot?.querySelector("canvas")||null,this.#s=this.shadowRoot?.getElementById("output")||null,this.#r=this.shadowRoot?.querySelector("video")||null,this.#n=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#o=this.#u(),this.#a=this.shadowRoot?.querySelector('slot[name="facing-mode-button"]')||null,this.#l=this.#p(),this.#r?.addEventListener("loadedmetadata",this.#m),this.#n?.addEventListener("slotchange",this.#b),this.#o?.addEventListener("click",this.#g),this.#a?.addEventListener("slotchange",this.#f),this.#l?.addEventListener("click",this.#v),!b.isSupported())return this.dispatchEvent(new CustomEvent(`${u}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#l?.removeEventListener("click",this.#v),this.#o?.removeEventListener("click",this.#g),this.#r?.removeEventListener("canplay",this.#m),this.#n?.removeEventListener("slotchange",this.#b),this.#a?.removeEventListener("slotchange",this.#f)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(e){this.toggleAttribute("auto-play",!!e)}get noImage(){return this.hasAttribute("no-image")}set noImage(e){this.toggleAttribute("no-image",!!e)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(e){this.setAttribute("facing-mode",e)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(e){this.setAttribute("camera-resolution",e)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(e){this.setAttribute("pan",null!=e?e.toString():e)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(e){this.setAttribute("tilt",null!=e?e.toString():e)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(e){this.setAttribute("zoom",null!=e?e.toString():e)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(e){this.toggleAttribute("calculate-file-size",!!e)}#v=e=>{e.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")};#g=e=>{e.preventDefault(),this.capture()};#m=e=>{let t=e.target;t.play().then(()=>{this.dispatchEvent(new CustomEvent(`${u}:video-play`,{bubbles:!0,composed:!0,detail:{video:t}}))}).catch(e=>{this.dispatchEvent(new CustomEvent(`${u}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}).finally(()=>{this.removeAttribute("loading")})};#d(){this.#s&&Array.from(this.#s.childNodes).forEach(e=>e.remove())}#c(e,t){if(!this.#t||!e||!t)return;let[o]=this.#t.getVideoTracks(),i=this.getTrackCapabilities();e in this.getTrackSettings()&&o.applyConstraints({advanced:[{[e]:h(Number(t),i[e]?.min||1,i[e]?.max||1)}]})}#b=e=>{e.target?.name==="capture-button"&&(this.#o?.removeEventListener("click",this.#g),this.#o=this.#u(),this.#o&&(this.#o.addEventListener("click",this.#g),"BUTTON"===this.#o.nodeName||this.#o.hasAttribute("role")||this.#o.setAttribute("role","button")))};#f=e=>{e.target?.name==="facing-mode-button"&&(this.#l?.removeEventListener("click",this.#v),this.#l=this.#p(),this.#l&&(this.#l.addEventListener("click",this.#v),"BUTTON"===this.#l.nodeName||this.#l.hasAttribute("role")||this.#l.setAttribute("role","button")))};#p(){return this.#a&&this.#a.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"facing-mode-button"===e.getAttribute("slot"))||null}#u(){return this.#n&&this.#n.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"capture-button"===e.getAttribute("slot"))||null}#h(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}async startVideoStream(){if(!b.isSupported()||this.#t)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,o=0]=this.cameraResolution.split("x").map(e=>Number(e));t>0&&o>0&&(e.video.width=t,e.video.height=o)}try{this.#t=await navigator.mediaDevices.getUserMedia(e),this.#r&&(this.#r.srcObject=this.#t),this.#c("pan",this.pan),this.#c("tilt",this.tilt),this.#c("zoom",this.zoom);let t=this.getTrackSettings();"facingMode"in t&&this.#a&&(this.#a.hidden=!1)}catch(e){this.dispatchEvent(new CustomEvent(`${u}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}finally{this.removeAttribute("loading")}}stopVideoStream(){if(!this.#r||!this.#t)return;let[e]=this.#t.getVideoTracks();e?.stop(),this.#r.srcObject=null,this.#t=null}async capture(){if(!this.loading&&this.#i&&this.#r)try{let e=this.#i.getContext("2d"),t=this.#r.videoWidth,o=this.#r.videoHeight;this.#i.width=t,this.#i.height=o,e?.drawImage(this.#r,0,0,t,o);let i=this.#i.toDataURL("image/png");if("string"==typeof i&&i.includes("data:image")){if(!this.noImage){let e=new Image;e.src=i,e.width=t,e.height=o,e.setAttribute("part","output-image"),this.#d(),this.#s?.appendChild(e)}let e={dataURI:i,width:t,height:o};if(this.calculateFileSize)try{let t=await fetch(i),o=(await t.blob()).size;o&&(e.size=o)}catch(e){}this.dispatchEvent(new CustomEvent(`${u}:success`,{bubbles:!0,composed:!0,detail:e}))}}catch(e){this.dispatchEvent(new CustomEvent(`${u}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}getSupportedConstraints(){return b.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getCapabilities&&e.getCapabilities()||{}}getTrackSettings(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getSettings&&e.getSettings()||{}}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(e=u){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,b)}}b.defineCustomElement(),Object.defineProperty({},"ModalElement",{get:function(){return v},set:void 0,enumerable:!0,configurable:!0});let g=document.createElement("template"),f=`
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
    overscroll-behavior: contain;
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
`;g.innerHTML=`
  <style>${f}</style>

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
`;class v extends HTMLElement{#t=null;#e=null;#s=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(g.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#e=this.shadowRoot.querySelector('slot[name="footer"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button"]}attributeChangedCallback(e,t,o){if(null!==this.#t){if("open"===e&&t!==o&&(this.open?(this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===e&&t!==o){let e=this.#t.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#t.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}}}connectedCallback(){this.#i("open"),this.#i("staticBackdrop"),this.#i("noHeader"),this.#i("noAnimations"),this.#i("noCloseButton"),this.#i("fullscreen"),this.#i("preserveOverflow"),this.#t?.addEventListener("click",this.#n),this.#t?.addEventListener("close",this.#l),this.#t?.addEventListener("cancel",this.#o),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#a),this.#e?.addEventListener("slotchange",this.#r)}disconnectedCallback(){this.#s&&clearTimeout(this.#s),this.#t?.addEventListener("click",this.#n),this.#t?.removeEventListener("close",this.#l),this.#t?.removeEventListener("cancel",this.#o),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#a),this.#e?.removeEventListener("slotchange",this.#r)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){this.toggleAttribute("static-backdrop",!!e)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){this.toggleAttribute("no-header",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){this.toggleAttribute("no-close-button",!!e)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){this.toggleAttribute("fullscreen",!!e)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(e){this.toggleAttribute("preserve-overflow",!!e)}#h(){this.#s||(this.#t?.classList.add("dialog--pulse"),this.#s=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#s),this.#s=void 0},300))}#l=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#o=e=>{let t=this.#u("escape-key");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#h())};#a=e=>{let t=this.#u("close-button");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#h())};#n=e=>{let t=e.target,o=e.currentTarget;if(t instanceof HTMLElement&&null!==t.closest("[data-me-close]")&&this.#t?.close(),t===o){let e=this.#u("backdrop-click");if(this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop){this.noAnimations||this.#h();return}this.#t?.close()}};#r=()=>{if(null===this.#t)return;let e=this.#t.querySelector(".dialog__footer");if(null===e)return;let t=this.#e?.assignedNodes(),o=!!t&&t.length>0;e.hidden=!o};#u(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#i(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,v)}}v.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return F},set:void 0,enumerable:!0,configurable:!0});let y=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),w=[".DS_Store","Thumbs.db"],E=e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=(t.split(".").pop()||"").toLowerCase(),i=y.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e},x=(e,t)=>{let o=E(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},A=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),S=async e=>{let t=[],o=await A(e);for(;o.length>0;)t.push(...o),o=await A(e);return t},k=e=>new Promise((t,o)=>{e.file(o=>t(x(o,e.fullPath)),o)}),C=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e){if(e.isFile){let o=await k(e);-1===w.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await S(e.createReader()))}}return t},z=async e=>{let t=[];for(let o of e)-1===w.indexOf(o.name)&&t.push(x(o));return t},L=async e=>e.dataTransfer?e.dataTransfer.items?await C(e.dataTransfer.items):await z(e.dataTransfer.files):await z(e.target.files),_="files-dropzone",R="TOO_MANY_FILES",B=document.createElement("template"),T=`
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

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
    user-select: none;
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
`;B.innerHTML=`
  <style>
    ${T}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class F extends HTMLElement{#t=null;#e=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(B.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.getElementById("file-input"),this.#e=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?(this.#e?.removeAttribute("tabindex"),this.#e?.setAttribute("aria-disabled","true")):(this.#e?.setAttribute("tabindex","0"),this.#e?.setAttribute("aria-disabled","false"))),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple)}connectedCallback(){this.#s("accept"),this.#s("disabled"),this.#s("maxFiles"),this.#s("maxSize"),this.#s("minSize"),this.#s("multiple"),this.#s("autoFocus"),this.#s("noStyle"),this.#t?.addEventListener("change",this.#i),this.#e?.addEventListener("dragenter",this.#a),this.#e?.addEventListener("dragover",this.#n),this.#e?.addEventListener("dragleave",this.#r),this.#e?.addEventListener("drop",this.#o),this.#e?.addEventListener("click",this.#h),this.#e?.addEventListener("keyup",this.#l),this.autoFocus&&this.#e?.focus()}disconnectedCallback(){this.#t?.removeEventListener("change",this.#i),this.#e?.removeEventListener("dragenter",this.#a),this.#e?.removeEventListener("dragover",this.#n),this.#e?.removeEventListener("dragleave",this.#r),this.#e?.removeEventListener("drop",this.#o),this.#e?.removeEventListener("click",this.#h),this.#e?.removeEventListener("keyup",this.#l)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#i=async e=>{try{this.#m(await L(e))}catch(e){this.dispatchEvent(new CustomEvent(`${_}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}};#a=()=>{this.disabled||this.dispatchEvent(new Event(`${_}-dragenter`,{bubbles:!0,composed:!0}))};#n=e=>{if(e.preventDefault(),this.disabled){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e&&(this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${_}-dragover`,{bubbles:!0,composed:!0}))};#r=()=>{this.disabled||(this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${_}-dragleave`,{bubbles:!0,composed:!0})))};#o=async e=>{if(!this.disabled){e.preventDefault(),this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"));try{this.#m(await L(e))}catch(e){this.dispatchEvent(new CustomEvent(`${_}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}};#h=()=>{this.disabled||this.#t?.click()};#l=e=>{this.disabled||" "!==e.key&&"Enter"!==e.key||this.#t?.click()};#m(e){if(!Array.isArray(e)||!e.length)return;let t=[],o=[],i=e.length;if(!this.multiple&&i>1)for(let t of e)o.push({file:t,errors:[{code:R,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let t of e)o.push({file:t,errors:[{code:R,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of e){let e=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,a=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(a===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(i,this.accept),a=i.size>this.maxSize,n=i.size<this.minSize;if(!e||a||n){let t=[];e||t.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),a&&t.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),n&&t.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:t})}else t.push(i)}this.dispatchEvent(new CustomEvent(`${_}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t,rejectedFiles:o}})),t.length>0&&this.dispatchEvent(new CustomEvent(`${_}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${_}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#t&&(this.#t.value=this.#t.defaultValue)}openFileDialog(){this.disabled||this.#t?.click()}#s(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=_){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,F)}}F.defineCustomElement();let N=(e,...t)=>{if(!Array.isArray(e))throw TypeError("Expected an array for first argument");return e.filter((e,o)=>-1===t.indexOf(o))},$=(e="",t="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${o}${"string"==typeof t&&""!==t?"-"+t:""}`},O=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];var H={};H=n("aNJCr").getBundleURL("9p9yL")+"Pressuru.684952ea.ttf";var M={};M=n("aNJCr").getBundleURL("9p9yL")+"Oswald-Regular.89ec7d89.ttf";var I={};I=n("aNJCr").getBundleURL("9p9yL")+"Oswald-Bold.0f6a7ca6.ttf";var q={};q=n("aNJCr").getBundleURL("9p9yL")+"Roboto-Regular.ca197847.ttf";var P={};P=n("aNJCr").getBundleURL("9p9yL")+"Roboto-Bold.fdb9b54a.ttf";var j={};j=n("aNJCr").getBundleURL("9p9yL")+"RobotoCondensed-Regular.d585f5c7.ttf";var U={};U=n("aNJCr").getBundleURL("9p9yL")+"RobotoCondensed-Bold.e1f96d4b.ttf";var D={};D=n("aNJCr").getBundleURL("9p9yL")+"CourierPrime-Regular.3a25a501.ttf";var W={};W=n("aNJCr").getBundleURL("9p9yL")+"CourierPrime-Bold.3d6bf689.ttf";var V={};V=n("aNJCr").getBundleURL("9p9yL")+"OpenSans-Regular.edf9e01b.ttf";var Y={};Y=n("aNJCr").getBundleURL("9p9yL")+"OpenSans-Bold.8fceb72b.ttf";let X=[{name:"Pressuru",label:"Pressuru",path:t(H),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:t(M),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:t(I),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:t(q),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:t(P),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:t(j),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:t(U),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:t(D),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:t(W),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:t(V),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:t(Y),style:"normal",weight:"400"}],J=async(e,t,o={})=>{try{let i=new FontFace(e,`url(${t})`,{...o});await i.load(),document.fonts.add(i)}catch(e){console.error(e)}},G=async(e={})=>{let t=await fetch(e.url),o=await t.blob(),i=e.mimeType||o.type||"";if(!O.includes(i))throw Error(`This is not an accepted image format. Accepted MIME types are: ${O.join(", ")}`);return new File([o],e.filename||"",o)},Z=document.getElementById("errorsContainer"),K=e=>{let t=e.currentTarget;t.removeEventListener("click",K),Z.removeChild(t.parentNode)},Q=(e="",t="info")=>{["info","warning","danger"].includes(t)||(t="info");let o=`
    ${e}
    <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
  `,i=document.createElement("div");i.className=`alert alert-${t} alert-dismissible text-break mb-2 fade`,i.innerHTML=o,i.querySelector("button").addEventListener("click",K),Z.appendChild(i),setTimeout(()=>i.classList.add("show"),100)},ee=(e,t={})=>{let o=`
    <div class="d-flex align-items-center">
      <button class="btn btn-link" data-button="delete-text-box" aria-label="Remove"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="Text #${e+1}">${t.text}</textarea>

      <div class="d-flex align-items-center pe-2">
        <input class="form-control" type="color" value="${t.fillColor}" data-input="fillColor" title="Fill color">
        <input class="form-control" type="color" value="${t.shadowColor}" data-input="shadowColor" title="Outline color">
        <button class="btn btn-secondary settings-button" data-button="settings" aria-label="Settings"></button>
      </div>
    </div>

    <div class="p-2" data-section="settings" ${t._isSettingsOpen?"":"hidden"}>
      <div class="row g-2">
        <div class="col-4 mb-3">
          <label for="fontInput_${e}" class="mb-1 d-block text-truncate">Font: </label>

          <select class="form-select" data-input="font" id="fontInput_${e}">
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
              ${X.map(({name:e,label:t})=>`<option value="${e}">${t}</option>`)}
            </optgroup>
          </select>
        </div>

        <div class="col-4 mb-3">
          <label for="fontSizeInput_${e}" class="mb-1 d-block text-truncate">Size:</label>
          <input class="form-control" type="number" min="1" value="${t.fontSize}" data-input="fontSize" id="fontSizeInput_${e}">
        </div>

        <div class="col-4 mb-3">
          <label for="fontWeightInput_${e}" class="mb-1 d-block text-truncate">Weight:</label>
          <select class="form-select" data-input="fontWeight" id="fontWeightInput_${e}">
            <option value="normal" selected>Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label for="shadowWidthInput_${e}" class="mb-1 d-block text-truncate">Shadow size:</label>
          <input class="form-control" type="number" min="0" max="100" value="${t.shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${e}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="borderWidthInput_${e}">Border width:</label>
          <input class="form-control" type="number" min="0" max="100" value="${t.borderWidth}" data-input="borderWidth" id="borderWidthInput_${e}">
        </div>

        <div class="col-4 mb-3">
          <label for="textAlignInput_${e}" class="mb-1 d-block text-truncate">Text align:</label>
          <select class="form-select" data-input="textAlign" id="textAlignInput_${e}">
            <option value="left">Left</option>
            <option value="center" selected>Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetYInput_${e}">Vertical offset:</label>
          <input class="form-control" type="number" value="${t.offsetY}" data-input="offsetY" id="offsetYInput_${e}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetXInput_${e}">Horizontal offset:</label>
          <input class="form-control" type="number" value="${t.offsetX}" data-input="offsetX" id="offsetXInput_${e}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="textRotateInput_${e}">Rotate:</label>
          <input class="form-control" type="number" value="${t.rotate}" data-input="rotate" id="textRotateInput_${e}" min="-360" max="360">
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
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="allCapsCheckbox_${e}" data-input="allCaps">
            <label class="form-check-label" for="allCapsCheckbox_${e}">ALL CAPS</label>
          </div>
        </div>
      </div>
    </div>
  `,i=document.createDocumentFragment(),a=document.createElement("div");return a.className="bg-light border shadow-sm mb-3 rounded",a.setAttribute("data-section","textBox"),a.setAttribute("data-index",e),a.innerHTML=o,a.querySelector('[data-input="font"]').value=t.font,a.querySelector('[data-input="textAlign"]').value=t.textAlign,a.querySelector('[data-input="allCaps"]').checked=t.allCaps,i.appendChild(a)},et=(e,t,o,i=[])=>{null!=e&&(o.clearRect(0,0,t.width,t.height),"string"==typeof e?(o.fillStyle=e,o.fillRect(0,0,t.width,t.height)):o.drawImage(e,0,0,t.width,t.height),i.forEach(function(e,i){o.save(),o.font=`${e.fontWeight} ${e.fontSize}px ${e.font}`,o.fillStyle=e.fillColor,o.textAlign=e.textAlign,o.strokeStyle=e.shadowColor;let a=o.measureText("M").width+e.fontSize/2,n=t.width/2,r=e.shadowBlur,s=(!0===e.allCaps?e.text.toUpperCase():e.text).split("\n");0!==r&&(o.shadowOffsetX=0,o.shadowOffsetY=0,o.shadowBlur=r,o.shadowColor=e.shadowColor),o.translate(n+e.offsetX,a*(i+1)+e.offsetY),o.rotate(e.rotate*Math.PI/180),s.forEach((e,t)=>o.fillText(e,0,t*a)),o.shadowBlur=0,s.forEach((e,t)=>o.fillText(e,0,t*a)),e.borderWidth>0&&(o.lineWidth=e.borderWidth,s.forEach((e,t)=>o.strokeText(e,0,t*a))),o.restore()}))},eo=document.getElementById("videoModal"),ei=document.getElementById("downloadModal"),ea=document.getElementById("canvas"),en=document.querySelector("files-dropzone"),er=document.getElementById("instructions"),es=ea.getContext("2d"),el=document.getElementById("imageUploadMethodSelect"),ed=document.getElementById("fileSelectBtn"),ec=document.getElementById("imageUrlForm"),eh=document.getElementById("addTextboxBtn"),eu=document.getElementById("inputsContainer"),ep=document.getElementById("generateMemeBtn"),em=document.getElementById("openVideoModalBtn"),eb=document.getElementById("downloadMemeBtn"),eg=document.getElementById("downloadMemePreview"),ef=document.querySelector("web-share"),ev=document.getElementById("gallery"),ey=document.getElementById("gallerySearch"),ew=ev.querySelector(".gallery__no-results"),eE=document.getElementById("solidColorForm"),ex=document.querySelectorAll(".upload-method"),eA=document.getElementById("removeConfirmationModal"),eS=document.getElementById("removeTextForm"),ek=null,eC=null,ez={_isSettingsOpen:!1,text:"",fillColor:"#ffffff",shadowColor:"#000000",font:"Pressuru",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:3,borderWidth:1,offsetY:0,offsetX:0,rotate:0,allCaps:!0},eL=[{...ez}],e_=async()=>{let e=ea.toDataURL("image/png"),t=e.replace("image/png","image/octet-stream");if(eb.download=`${$("meme")}.png`,eb.href=t,eg.width=ea.width,eg.height=ea.height,eg.src=t,s())try{let t=await G({url:e,filename:`${$("meme")}.png`,mimeType:"image/png"}).catch(e=>Q(e.message,"danger"));t&&s({files:[t]})&&(ef.shareFiles=[t],ef.hidden=!1)}catch(e){console.error(e)}window.requestAnimationFrame(()=>{ei.open=!0})},eR=e=>{let t=e.target.width,o=e.target.height;t>o?t>4e3&&(o*=4e3/t,t=4e3):o>3e3&&(t*=3e3/o,o=3e3),ea.width=t,ea.height=o,et(ek=e.target,ea,es,eL),ep.disabled=!1,ea.hidden=!1,er.hidden=!0},eB=e=>{eL=N(eL,e),eu.querySelectorAll('[data-section="textBox"]').forEach(e=>e.remove()),eL.forEach((e,t)=>eu.appendChild(ee(t,e))),et(ek,ea,es,eL)},eT=e=>{if(!e)return;let t=new Image,o=new FileReader;o.addEventListener("load",function(e){let o=e.target.result;t.addEventListener("load",eR),t.src=o}),o.readAsDataURL(e)},eF=(e,t,o)=>{"checkbox"===e.type?eL[t][o]=e.checked:"number"===e.type?eL[t][o]=Number(e.value):eL[t][o]=e.value,et(ek,ea,es,eL)},eN=async e=>{e.preventDefault();let t=e.target,o=t.querySelector('button[type="submit"]'),i=t.imageUrl.value;if(i.trim()){o.disabled=!0,o.querySelector(".spinner").hidden=!1,o.querySelector(".label").hidden=!0;try{let e=await G({url:i}).catch(e=>Q(e.message,"danger"));e&&eT(e)}catch(e){Q(`Failed to load image from "${i}".`,"danger")}finally{o.disabled=!1,o.querySelector(".spinner").hidden=!0,o.querySelector(".label").hidden=!1}}},e$=(e,t,o)=>()=>{let i=document.querySelectorAll('[data-section="textBox"]')[o],a=i.querySelector('[data-input="offsetY"]'),n=i.querySelector('[data-input="offsetX"]');"offsetY"===e&&("-"===t&&(eL[o].offsetY-=1),"+"===t&&(eL[o].offsetY+=1),a.value=eL[o].offsetY),"offsetX"===e&&("-"===t&&(eL[o].offsetX-=1),"+"===t&&(eL[o].offsetX+=1),n.value=eL[o].offsetX),et(ek,ea,es,eL),eC=requestAnimationFrame(e$(e,t,o))},eO=async e=>{let t=e.target.closest("button");if(!t)return;let o=t.querySelector("img");try{let e=await G({url:o.src}).catch(e=>Q(e.message,"danger"));e&&eT(e)}catch(e){Q(`Failed to load image: "${o.alt}".`,"danger")}};ed.addEventListener("click",()=>{"function"==typeof en.openFileDialog&&en.openFileDialog()}),em.addEventListener("click",()=>{eo.open=!0}),eh.addEventListener("click",()=>{let e=ee(eL.length,ez);eL.push({...ez}),eu.appendChild(e),e.querySelector('[data-input="text"]').focus()}),ep.addEventListener("click",e_),eb.addEventListener("click",()=>ei.open=!1),ec.addEventListener("submit",eN),en.addEventListener("files-dropzone-drop-accepted",e=>{let[t]=e.detail.acceptedFiles;t&&eT(t)}),eu.addEventListener("input",e=>{let t;let o=e.target,i=Number(o.closest('[data-section="textBox"]').getAttribute("data-index"));o.matches('[data-input="text"]')?t="text":o.matches('[data-input="fillColor"]')?t="fillColor":o.matches('[data-input="shadowColor"]')?t="shadowColor":o.matches('[data-input="font"]')?t="font":o.matches('[data-input="fontSize"]')?t="fontSize":o.matches('[data-input="fontWeight"]')?t="fontWeight":o.matches('[data-input="textAlign"]')?t="textAlign":o.matches('[data-input="shadowBlur"]')?t="shadowBlur":o.matches('[data-input="offsetY"]')?t="offsetY":o.matches('[data-input="offsetX"]')?t="offsetX":o.matches('[data-input="rotate"]')?t="rotate":o.matches('[data-input="borderWidth"]')&&(t="borderWidth"),t&&eF(o,i,t)}),eu.addEventListener("change",e=>{let t;let o=e.target,i=Number(o.closest('[data-section="textBox"]').getAttribute("data-index"));o.matches('[data-input="allCaps"]')&&(t="allCaps"),t&&eF(o,i,t)}),eu.addEventListener("click",e=>{let t=e.target;if(t.matches('[data-button="settings"]')){let e=t.closest('[data-section="textBox"]').getAttribute("data-index");document.querySelectorAll('[data-section="textBox"]').forEach((t,o)=>{let i=t.querySelector('[data-section="settings"]');t.getAttribute("data-index")===e?(i.hidden=!i.hidden,eL[o]._isSettingsOpen=!eL[o]._isSettingsOpen):(i.hidden=!0,eL[o]._isSettingsOpen=!1)})}if(t.matches('[data-button="delete-text-box"]')){let e=Number(t.closest('[data-section="textBox"]').getAttribute("data-index"));if(eL[e].text.trim()){let t=eS["text-index"];t&&(t.value=e,eA.open=!0)}else eB(e)}}),eu.addEventListener("pointerdown",e=>{let t=e.target;if(!t.closest('[data-section="textBox"]'))return;let o=Number(t.closest('[data-section="textBox"]').getAttribute("data-index")),i=t.matches('[data-move="offsetY"]'),a=t.matches('[data-move="offsetX"]');if(!i&&!a)return;let n=t.getAttribute("data-move"),r=t.getAttribute("data-sign");eC=requestAnimationFrame(e$(n,r,o))}),eu.addEventListener("pointerup",e=>{let t=e.target,o=t.matches('[data-move="offsetY"]'),i=t.matches('[data-move="offsetX"]');(o||i)&&(cancelAnimationFrame(eC),eC=null)}),eu.addEventListener("pointerout",e=>{let t=e.target,o=t.matches('[data-move="offsetY"]'),i=t.matches('[data-move="offsetX"]');(o||i)&&eC&&(cancelAnimationFrame(eC),eC=null)}),el.addEventListener("change",e=>{ex.forEach(t=>t.hidden=t.id!==e.target.value)}),ev.addEventListener("click",eO),ey.addEventListener("input",e=>{let t=e.target.value.toLowerCase().trim();ev.querySelectorAll("button").forEach(e=>{let o=(e.querySelector("img").getAttribute("alt")||"").toLowerCase();e.hidden=!o.includes(t)}),ew.hidden=!!ev.querySelector("button:not([hidden])")}),eE.addEventListener("input",e=>{e.target===eE.canvasColor&&(ek=e.target.value),"string"==typeof ek&&(ea.width=Number(eE.canvasWidth.value)||600,ea.height=Number(eE.canvasHeight.value)||400,et(ek,ea,es,eL),ep.disabled=!1,ea.hidden=!1,er.hidden=!0)}),document.addEventListener("web-share:error",()=>{ei.open=!1,Q("There was an error while trying to share your meme.","danger")}),document.addEventListener("capture-photo:error",e=>{let t=e.detail.error,o="An error occurred while trying to capture photo.";t instanceof Error&&("NotAllowedError"===t.name||"NotFoundError"===t.name)&&(o+=" Make sure you have a camera connected and you have granted the appropriate permissions."),Q(o,"danger"),eo.open=!1,console.error(t)}),document.addEventListener("capture-photo:success",e=>{eo.open=!1;let t=new Image;t.addEventListener("load",eR),t.src=e.detail.dataURI}),document.addEventListener("me-open",e=>{if("videoModal"===e.target.id){let e=eo.querySelector("capture-photo");e&&"function"==typeof e.startVideoStream&&e.startVideoStream()}}),document.addEventListener("me-close",e=>{if("videoModal"===e.target.id){let e=eo.querySelector("capture-photo");e&&"function"==typeof e.stopVideoStream&&e.stopVideoStream()}"removeConfirmationModal"===e.target.id&&eS.reset()}),eS.addEventListener("submit",e=>{e.preventDefault();let t=Number(e.target["text-index"].value);t>=0&&(eB(t),eA.open=!1)}),ev.querySelectorAll("button > img")?.forEach(e=>{e.setAttribute("title",e.getAttribute("alt"))}),eL.forEach((e,t)=>{eu.appendChild(ee(t,e))}),en.accept=O,X.forEach(({name:e,path:t,style:o,weight:i})=>{J(e,t,{style:o,weight:i})})}();
//# sourceMappingURL=index.dc7e95c9.js.map
