!function(){function t(t={}){return t={files:null,...t},Array.isArray(t.files)?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t.files):"share"in navigator
/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version v2.1.4
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @repository git+https://github.com/georapbox/web-share-element.git
 * @license MIT
 */}const e=document.createElement("template"),o=String.raw;e.innerHTML=o`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class n extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){this._buttonSlot&&this._buttonSlot.addEventListener("slotchange",this._onSlotChange),this.$button&&this.$button.addEventListener("click",this._onClick),this._upgradeProperty("shareUrl"),this._upgradeProperty("shareTitle"),this._upgradeProperty("shareText"),this._upgradeProperty("shareFiles"),this._upgradeProperty("disabled")}disconnectedCallback(){this._buttonSlot&&this._buttonSlot.removeEventListener("slotchange",this._onSlotChange),this.$button&&this.$button.removeEventListener("click",this._onClick)}attributeChangedCallback(t){"disabled"===t&&this.$button&&(this.$button.disabled=this.disabled,this.$button.setAttribute("aria-disabled",this.disabled),this.$button.part&&this.$button.part.contains("button")&&this.$button.part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this._files||null}set shareFiles(t){this._files=t}async share(){if(!this.disabled)try{const t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if("AbortError"===t.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}_onClick(t){t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}_onSlotChange(t){t.target&&"button"===t.target.name&&(this.$button&&this.$button.removeEventListener("click",this._onClick),this.$button=this._getButton(),this.$button&&(this.$button.addEventListener("click",this._onClick),"BUTTON"===this.$button.nodeName||this.$button.hasAttribute("role")||this.$button.setAttribute("role","button")))}_getButton(){return this._buttonSlot?this._buttonSlot.assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))):null}_upgradeProperty(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,n)}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e.content.cloneNode(!0))),this._buttonSlot=this.shadowRoot.querySelector('slot[name="button"]'),this.$button=this._getButton(),this._onClick=this._onClick.bind(this),this._onSlotChange=this._onSlotChange.bind(this)}}
/*!
 * @georapbox/capture-photo-element
 * A custom element that implements the MediaDevices.getUserMedia() method of the MediaDevices interface to capture a photo in the browser.
 *
 * @version v1.2.4
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/capture-photo-element#readme
 * @repository git+https://github.com/georapbox/capture-photo-element.git
 * @license MIT
 */const a=document.createElement("template"),i=String.raw;a.innerHTML=i`
  <style>
    :host {
      all: initial;
      display: block;
      box-sizing: border-box;
    }
    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }
    :host video {
      display: block;
    }
    :host #output:empty {
      display: none;
    }
    [hidden] {
      display: none !important;
    }
  </style>
  <video part="video" playsinline></video>
  <canvas hidden></canvas>
  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button"><slot name="capture-button-content">Capture photo</slot></button>
    </slot>
    <slot name="facing-mode-button"><button part="facing-mode-button" type="button"><slot name="facing-mode-button-content">Toggle facing mode</slot></button></slot>
  </div>
  <div part="output-container" id="output"></div>
`;class s extends HTMLElement{connectedCallback(){if(this.$canvasElement=this.shadowRoot.querySelector("canvas"),this.$outputElement=this.shadowRoot.getElementById("output"),this.$videoElement=this.shadowRoot.querySelector("video"),this.$videoElement&&this.$videoElement.addEventListener("canplay",this._onVideoCanPlay),this._captureButtonSlot=this.shadowRoot.querySelector('slot[name="capture-button"]'),this._captureButtonSlot&&this._captureButtonSlot.addEventListener("slotchange",this._onCaptureButtonSlotChange),this.$captureButton=this._getCaptureButton(),this.$captureButton&&this.$captureButton.addEventListener("click",this._onCapturePhotoButtonClick),this._facingModeButtonSlot=this.shadowRoot.querySelector('slot[name="facing-mode-button"]'),this._facingModeButtonSlot&&this._facingModeButtonSlot.addEventListener("slotchange",this._onFacingModeButtonSlotChange),this.$facingModeButton=this._getFacingModeButton(),this.$facingModeButton&&(this._supportedConstraints.facingMode?this.$facingModeButton.addEventListener("click",this._onFacingModeButtonClick):this.$facingModeButton.hidden=!0),this._upgradeProperty("outputDisabled"),this._upgradeProperty("facingMode"),this._upgradeProperty("cameraResolution"),this._upgradeProperty("zoom"),!s.isSupported())return this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this._requestGetUserMedia()}disconnectedCallback(){this._stopVideoStreaming(),this.$facingModeButton&&this.$facingModeButton.removeEventListener("click",this._onFacingModeButtonClick),this.$captureButton&&this.$captureButton.removeEventListener("click",this._onCapturePhotoButtonClick),this.$videoElement&&this.$videoElement.removeEventListener("canplay",this._onVideoCanPlay),this._captureButtonSlot&&this._captureButtonSlot.removeEventListener("slotchange",this._onCaptureButtonSlotChange),this._facingModeButtonSlot&&this._facingModeButtonSlot.removeEventListener("slotchange",this._onFacingModeButtonSlotChange)}attributeChangedCallback(t,e,o){"output-disabled"===t&&this._emptyOutputElement(),"facing-mode"===t&&this._supportedConstraints.facingMode&&(this._stopVideoStreaming(),this._requestGetUserMedia(),this.dispatchEvent(new CustomEvent("capture-photo:facing-mode-change",{bubbles:!0,composed:!0,detail:{facingMode:o}}))),"camera-resolution"===t&&(this._stopVideoStreaming(),this._requestGetUserMedia(),this.dispatchEvent(new CustomEvent("capture-photo:camera-resolution-change",{bubbles:!0,composed:!0,detail:{cameraResolution:o}}))),"zoom"===t&&(this._applyZoom(this.zoom),this.dispatchEvent(new CustomEvent("capture-photo:zoom-change",{bubbles:!0,composed:!0,detail:{zoom:this.zoom}})))}static get observedAttributes(){return["output-disabled","facing-mode","camera-resolution","zoom"]}get outputDisabled(){return this.hasAttribute("output-disabled")}set outputDisabled(t){t?this.setAttribute("output-disabled",""):this.removeAttribute("output-disabled")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){const e=Number(t)||0;this.setAttribute("zoom",e>0?Math.floor(e):0)}get loading(){return this.hasAttribute("loading")}_stopVideoStreaming(){if(!this.$videoElement||!this._stream)return;const[t]=this._stream.getVideoTracks();t&&t.stop(),this.$videoElement.srcObject=null,this._stream=null}_requestGetUserMedia(){if(!s.isSupported())return;this.setAttribute("loading","");const t={video:{facingMode:{ideal:this.facingMode||"user"}},audio:!1};if("string"==typeof this.cameraResolution){const[e,o]=this.cameraResolution.split("x");t.video.width=e,t.video.height=o}navigator.mediaDevices.getUserMedia(t).then((t=>{this.$videoElement.srcObject=t,this._stream=t,this._applyZoom(this.zoom)})).catch((t=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}))}capture(){if(!this.hasAttribute("loading"))try{const t=this.$canvasElement.getContext("2d"),e=this.$videoElement.videoWidth,o=this.$videoElement.videoHeight;this.$canvasElement.width=e,this.$canvasElement.height=o,t.drawImage(this.$videoElement,0,0,e,o);const n=this.$canvasElement.toDataURL("image/png");if("string"==typeof n&&n.includes("data:image")){if(!this.outputDisabled){const t=new Image;t.src=n,t.width=e,t.height=o,t.part="output-image",this._emptyOutputElement(),this.$outputElement&&this.$outputElement.appendChild(t)}this.dispatchEvent(new CustomEvent("capture-photo:success",{bubbles:!0,composed:!0,detail:{dataURI:n,width:e,height:o}}))}}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}_onFacingModeButtonClick(t){t.preventDefault(),this.hasAttribute("loading")||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}_onCapturePhotoButtonClick(t){t.preventDefault(),this.capture()}_onVideoCanPlay(t){this.removeAttribute("loading"),t.target.play().catch((t=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}))}_emptyOutputElement(){this.$outputElement&&Array.from(this.$outputElement.childNodes).forEach((t=>t.remove()))}_applyZoom(t){if(!this._stream||!t)return;const[e]=this._stream.getVideoTracks();if("function"!=typeof e.getCapabilities||"function"!=typeof e.getSettings)return;const o=e.getCapabilities();var n,a,i;"zoom"in e.getSettings()&&e.applyConstraints({advanced:[{zoom:(n=Number(t),a=o.zoom.min,i=o.zoom.max,Number.isNaN(a)&&(a=0),Number.isNaN(i)&&(i=0),Math.min(Math.max(n,Math.min(a,i)),Math.max(a,i)))}]})}_onCaptureButtonSlotChange(t){t.target&&"capture-button"===t.target.name&&(this.$captureButton&&this.$captureButton.removeEventListener("click",this._onCapturePhotoButtonClick),this.$captureButton=this._getCaptureButton(),this.$captureButton&&(this.$captureButton.addEventListener("click",this._onCapturePhotoButtonClick),"BUTTON"===this.$captureButton.nodeName||this.$captureButton.hasAttribute("role")||this.$captureButton.setAttribute("role","button")))}_onFacingModeButtonSlotChange(t){t.target&&"facing-mode-button"===t.target.name&&(this.$facingModeButton&&this.$facingModeButton.removeEventListener("click",this._onFacingModeButtonClick),this.$facingModeButton=this._getFacingModeButton(),this.$facingModeButton&&(this.$facingModeButton.addEventListener("click",this._onFacingModeButtonClick),"BUTTON"===this.$facingModeButton.nodeName||this.$facingModeButton.hasAttribute("role")||this.$facingModeButton.setAttribute("role","button")))}_getFacingModeButton(){return this._facingModeButtonSlot?this._facingModeButtonSlot.assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))):null}_getCaptureButton(){return this._captureButtonSlot?this._captureButtonSlot.assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))):null}_upgradeProperty(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}static isSupported(){return Boolean(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}static defineCustomElement(t="capture-photo"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,s)}constructor(){super(),this._supportedConstraints=s.isSupported()?navigator.mediaDevices.getSupportedConstraints():{},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(a.content.cloneNode(!0))),this._onFacingModeButtonClick=this._onFacingModeButtonClick.bind(this),this._onCapturePhotoButtonClick=this._onCapturePhotoButtonClick.bind(this),this._onVideoCanPlay=this._onVideoCanPlay.bind(this),this._onCaptureButtonSlotChange=this._onCaptureButtonSlotChange.bind(this),this._onFacingModeButtonSlotChange=this._onFacingModeButtonSlotChange.bind(this)}}n.defineCustomElement(),s.defineCustomElement();const r=document.getElementById("errorsContainer"),l=document.getElementById("videoModal"),d=document.getElementById("downloadModal"),u=document.getElementById("closeVideoModalBtn"),c=document.getElementById("canvas"),h=document.getElementById("canvasPlaceholder"),m=document.getElementById("instructions"),p=c.getContext("2d"),g=document.getElementById("imageUploadMethodSelect"),b=document.getElementById("file"),v=document.getElementById("imageUrlForm"),f=document.getElementById("addTextboxBtn"),E=document.getElementById("inputsContainer"),C=document.getElementById("generateMemeBtn"),y=document.getElementById("openVideoModalBtn"),B=document.getElementById("downloadMemeBtn"),w=document.getElementById("downloadMemePreview"),_=document.getElementById("downloadMemeModalCloseBtn"),S=document.querySelector("web-share"),$="meme.png";let M=null,x=$;const k=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];b.accept=k.join(",");const A={text:"",fillColor:"#ffffff",shadowColor:"#000000",font:"Impact",fontSize:40,textAlign:"center",shadowBlur:3,offsetY:0,offsetX:0,allCaps:!0},L=[Object.assign({},A),Object.assign({},A)],T=(t,e)=>{e?(t.style.display="block",t.setAttribute("data-open",""),document.body.classList.add("modal-open"),t.dispatchEvent(new CustomEvent("modal-open",{bubbles:!0,detail:{modalId:t.id}}))):(t.style.display="none",t.removeAttribute("data-open"),document.body.classList.remove("modal-open"),t.dispatchEvent(new CustomEvent("modal-close",{bubbles:!0,detail:{modalId:t.id}})))},N=t=>{const e=t.currentTarget;e.removeEventListener("click",N),r.removeChild(e.parentNode)},F=(t="")=>{const e=`\n    ${t}\n    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>\n  `,o=document.createElement("div");o.className="alert alert-danger alert-dismissible text-break mb-2 fade",o.innerHTML=e,o.querySelector("button").addEventListener("click",N),r.appendChild(o),setTimeout((()=>o.classList.add("show")),100)},I=t=>{null!=t&&(p.clearRect(0,0,c.width,c.height),p.drawImage(t,0,0,c.width,c.height),L.forEach((function(t,e){p.font=`${t.fontSize}px ${t.font}`;const o=e+1,n=p.measureText("M").width+20,a="center"!==t.textAlign&&t.textAlign?"left"===t.textAlign?0:c.width:c.width/2,i=Number.isNaN(Number(t.shadowBlur))?3:Number(t.shadowBlur),s=!0===t.allCaps?t.text.toUpperCase():t.text;p.fillStyle=t.fillColor,p.textAlign=t.textAlign,p.save(),0!==i&&(p.shadowOffsetX=0,p.shadowOffsetY=0,p.shadowBlur=i,p.shadowColor=t.shadowColor),p.fillText(s,a+Number(t.offsetX),1===e?c.height-20+Number(t.offsetY):n*(o-1||1)+Number(t.offsetY)),p.restore()})))},P=t=>{let e=t.target.width,o=t.target.height;e>o?e>800&&(o*=800/e,e=800):o>600&&(e*=600/o,o=600),c.width=e,c.height=o,I(t.target),M=t.target,C.disabled=!1,c.classList.remove("d-none"),m&&m.remove()},U=t=>{const e=new Image,o=new FileReader;x=`${t.name.replace(/\.[^.]+$/,"")}-meme.png`,o.addEventListener("load",(function(t){const o=t.target.result;e.addEventListener("load",P),e.src=o})),o.readAsDataURL(t)},q=(t,e,o)=>{L[e][o]="checkbox"===t.type?t.checked:t.value,I(M)},z=t=>{const e=String.raw`
    <div class="d-flex">
      <input class="form-control m-2" type="text" value="${L[t].text}" data-input="text" autocomplete="off" placeholder="${0===t?"Top Text":1===t?"Bottom Text":`Text #${t+1}`}" style="min-width: 0;">
      <div class="d-flex align-items-center pr-2">
        <input class="form-control" type="color" value="${L[t].fillColor}" data-input="fillColor" title="Fill color">
        <input class="form-control" type="color" value="${L[t].shadowColor}" data-input="shadowColor" title="Outline color">
        <button class="btn btn-secondary settings-button" data-button="settings"></button>
      </div>
    </div>
    <div class="p-2 d-none" data-section="settings">
      <div class="form-row">
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Font: </label>
          <select class="custom-select" data-input="font">
            <option value="Impact">Impact</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Times">Times</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Palatino">Palatino</option>
            <option value="Garamond">Garamond</option>
            <option value="Bookman">Bookman</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Arial Black">Arial Black</option>
          </select>
        </div>
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Font size:</label>
          <input class="form-control" type="number" min="1" max="100" value="${L[t].fontSize}" data-input="fontSize">
        </div>
      </div>
      <div class="form-row">
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Shadow width:</label>
          <input class="form-control" type="number" min="0" max="10" value="${L[t].shadowBlur}" data-input="shadowBlur">
        </div>
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Text align:</label>
          <select class="custom-select" data-input="textAlign">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Vertical offset:</label>
          <input class="form-control" type="number" value="${L[t].offsetY}" data-input="offsetY">
        </div>
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Horizontal offset:</label>
          <input class="form-control" type="number" value="${L[t].offsetX}" data-input="offsetX">
        </div>
      </div>
      <div class="form-row">
        <div class="col-lg-12">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="allCapsCheckbox_${t}" data-input="allCaps">
            <label class="custom-control-label" for="allCapsCheckbox_${t}">USE ALL CAPS</label>
          </div>
        </div>
      </div>
    </div>
  `,o=document.createDocumentFragment(),n=document.createElement("div");return n.className="bg-light border shadow-sm mb-3 rounded",n.setAttribute("data-section","textBox"),n.setAttribute("data-index",t),n.innerHTML=e,setTimeout((()=>M&&n.querySelector('[data-input="text"]').focus()),100),n.querySelector('[data-input="font"]').value=L[t].font,n.querySelector('[data-input="textAlign"]').value=L[t].textAlign,n.querySelector('[data-input="allCaps"]').checked=L[t].allCaps,o.appendChild(n)};b.addEventListener("change",(t=>{v.imageUrl.value="",U(t.target.files[0])})),y.addEventListener("click",(()=>{const t=document.createElement("capture-photo");t.outputDisabled=!0,l.querySelector(".modal-body").appendChild(t),T(l,!0)})),u.addEventListener("click",(()=>T(l,!1))),f.addEventListener("click",(()=>{const t=document.querySelectorAll('[data-input="text"]').length;L.push(Object.assign({},A)),E.appendChild(z(t))})),C.addEventListener("click",(async()=>{const e=c.toDataURL("image/png"),o=e.replace("image/png","image/octet-stream");if(B.download=x,B.href=o,w.src=o,t())try{const t=await(async(t,e,o)=>{const n=await fetch(t),a=await n.arrayBuffer();return new File([a],e,{type:o})})(e,$,"image/png");S.shareFiles=[t],S.shareUrl=window.location.href,S.shareTitle=document.title,S.classList.remove("d-none")}catch(t){console.error(t)}T(d,!0)})),B.addEventListener("click",(()=>T(d,!1))),_.addEventListener("click",(()=>T(d,!1))),v.addEventListener("submit",(async t=>{t.preventDefault();const e=t.target,o=e.querySelector('button[type="submit"]'),n=e.imageUrl.value;if(n.trim()){o.disabled=!0,o.querySelector(".spinner").classList.remove("d-none"),o.querySelector(".label").classList.add("d-none");try{const t=await fetch(n),e=await t.blob(),a=e.type||"";if(!k.includes(a))return F(`This is not an accepted image format. Accepted MIME types are: ${k.join(", ")}`);const i=a.split("/")[1],s=new File([e],`${n}.${i}`,e);s&&U(s),b.value=b.defaultValue}catch(t){F(`Failed to load image from "${n}".`)}finally{o.disabled=!1,o.querySelector(".spinner").classList.add("d-none"),o.querySelector(".label").classList.remove("d-none")}}})),h.addEventListener("dragover",(t=>{t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"})),h.addEventListener("drop",(t=>{t.stopPropagation(),t.preventDefault();const e=t.dataTransfer.files,[o]=e;k.includes(o.type)&&(b.value=b.defaultValue,v.imageUrl.value="",U(o))})),E.appendChild(z(0)),E.appendChild(z(1)),E.addEventListener("input",(t=>{const e=t.target,o=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let n;e.matches('[data-input="text"]')?n="text":e.matches('[data-input="fillColor"]')?n="fillColor":e.matches('[data-input="shadowColor"]')?n="shadowColor":e.matches('[data-input="font"]')?n="font":e.matches('[data-input="fontSize"]')?n="fontSize":e.matches('[data-input="textAlign"]')?n="textAlign":e.matches('[data-input="shadowBlur"]')?n="shadowBlur":e.matches('[data-input="offsetY"]')?n="offsetY":e.matches('[data-input="offsetX"]')&&(n="offsetX"),n&&q(e,o,n)})),E.addEventListener("change",(t=>{const e=t.target,o=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let n;e.matches('[data-input="allCaps"]')&&(n="allCaps"),n&&q(e,o,n)})),E.addEventListener("click",(t=>{const e=t.target;if(e.matches('[data-button="settings"]')){const t=e.closest('[data-section="textBox"]').getAttribute("data-index");document.querySelectorAll('[data-section="textBox"]').forEach((e=>{const o=e.querySelector('[data-section="settings"]');e.getAttribute("data-index")===t?o.classList.toggle("d-none"):o.classList.add("d-none")}))}})),g.addEventListener("change",(t=>{document.querySelectorAll(".upload-method").forEach((e=>{e.hidden=e.id!==t.target.value}))})),document.addEventListener("web-share:error",(()=>{F("There was an error while trying to share your meme.")})),document.addEventListener("capture-photo:error",(t=>{console.error(t.detail.error),F(t.detail.error.message)})),document.addEventListener("capture-photo:success",(t=>{T(l,!1);const e=new Image;e.addEventListener("load",P),e.src=t.detail.dataURI,b.value&&(b.value=b.defaultValue,v.imageUrl.value="",x=$)})),document.addEventListener("modal-close",(t=>{if("videoModal"===t.detail.modalId){l.querySelector("capture-photo").remove()}})),document.addEventListener("keyup",(t=>{"Escape"===t.code&&(l.hasAttribute("data-open")&&T(l,!1),d.hasAttribute("data-open")&&T(d,!1))}))}();
//# sourceMappingURL=index.8d57dee0.js.map
