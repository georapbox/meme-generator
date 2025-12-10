let e,t,o;function i(e){return e&&e.__esModule?e.default:e}function n(e){return new URL(s+(e=c.i?.[e]||e),import.meta.url).toString()}var a,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="./",l={},d={},c=r.parcelRequire5078;function u(e){if("string"!=typeof e||!e)throw Error("expected a non-empty string, got: "+e)}function h(e){if("number"!=typeof e)throw Error("expected a number, got: "+e)}null==c&&((c=function(e){if(e in l)return l[e].exports;if(e in d){var t=d[e];delete d[e];var o={id:e,exports:{}};return l[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){d[e]=t},r.parcelRequire5078=c),c.register,Object.assign(c.i??={},{lRBOd:"Pressuru.684952ea.ttf",hOimC:"Oswald-Regular.89ec7d89.ttf",c5nso:"Oswald-Bold.0f6a7ca6.ttf","917SN":"Roboto-Regular.ca197847.ttf",kCRYk:"Roboto-Bold.fdb9b54a.ttf","7mTjM":"RobotoCondensed-Regular.d585f5c7.ttf",bNJU7:"RobotoCondensed-Bold.e1f96d4b.ttf","2zTNP":"CourierPrime-Regular.3a25a501.ttf","6U5us":"CourierPrime-Bold.3d6bf689.ttf",jadM2:"OpenSans-Regular.edf9e01b.ttf","4rZHV":"OpenSans-Bold.8fceb72b.ttf"});let m="emoji",p="keyvalue",g="favorites",b="tokens",f="count",v="group-order",y="eTag",w="skinTone",E="readonly",k="readwrite",x="skinUnicodes";function S(e){return function(e,t){let o=new Set,i=[];for(let n of e){let e=t(n);o.has(e)||(o.add(e),i.push(n))}return i}(e,e=>e.unicode)}let A={},L={},C={};function _(e,t,o){o.onerror=()=>t(o.error),o.onblocked=()=>t(Error("IDB blocked")),o.onsuccess=()=>e(o.result)}async function T(e){let t=await new Promise((t,o)=>{let i=indexedDB.open(e,1);A[e]=i,i.onupgradeneeded=e=>{e.oldVersion<1&&function(e){function t(t,o,i){let n=o?e.createObjectStore(t,{keyPath:o}):e.createObjectStore(t);if(i)for(let[e,[t,o]]of Object.entries(i))n.createIndex(e,t,{multiEntry:o});return n}t(p),t(m,"unicode",{[b]:["tokens",!0],[v]:[["group","order"]],[x]:["skinUnicodes",!0]}),t(g,void 0,{[f]:[""]})}(i.result)},_(t,o,i)});return t.onclose=()=>z(e),t}function j(e,t,o,i){return new Promise((n,a)=>{let r,s=e.transaction(t,o,{durability:"relaxed"});i("string"==typeof t?s.objectStore(t):t.map(e=>s.objectStore(e)),s,e=>{r=e}),s.oncomplete=()=>n(r),s.onerror=()=>a(s.error)})}function z(e){let t=A[e],o=t&&t.result;if(o){o.close();let t=C[e];if(t)for(let e of t)e()}delete A[e],delete L[e],delete C[e]}let I=new Set([":D","XD",":'D","O:)",":X",":P",";P","XP",":L",":Z",":j","8D","XO","8)",":B",":O",":S",":'o","Dx","X(","D:",":C",">0)",":3","</3","<3","\\M/",":E","8#"]);function O(e){return e.split(/[\s_]+/).map(e=>!e.match(/\w/)||I.has(e)?e.toLowerCase():e.replace(/[)(:,]/g,"").replace(/’/g,"'").toLowerCase()).filter(Boolean)}function $(e){return e.filter(Boolean).map(e=>e.toLowerCase()).filter(e=>e.length>=2)}function M(e,t,o,i){e[t](o).onsuccess=e=>i&&i(e.target.result)}function R(e,t,o){M(e,"get",t,o)}function B(e,t,o){M(e,"getAll",t,o)}function N(e){e.commit&&e.commit()}function D(e,t){let o=function(e,t){let o=e[0];for(let i=1;i<e.length;i++){let n=e[i];t(o)>t(n)&&(o=n)}return o}(e,e=>e.length),i=[];for(let n of o)e.some(e=>-1===e.findIndex(e=>t(e)===t(n)))||i.push(n);return i}async function F(e){return!await K(e,p,"url")}async function P(e,t,o){let[i,n]=await Promise.all([y,"url"].map(t=>K(e,p,t)));return i===o&&n===t}async function H(e,t){return j(e,m,E,(e,o,i)=>{let n,a=()=>{e.getAll(n&&IDBKeyRange.lowerBound(n,!0),50).onsuccess=e=>{let o=e.target.result;for(let e of o)if(n=e.unicode,t(e))return i(e);if(o.length<50)return i();a()}};a()})}async function q(e,t,o,i){{let n=t.map(({annotation:e,emoticon:t,group:o,order:i,shortcodes:n,skins:a,tags:r,emoji:s,version:l})=>{let d=[...new Set($([...(n||[]).map(O).flat(),...(r||[]).map(O).flat(),...O(e),t]))].sort(),c={annotation:e,group:o,order:i,tags:r,tokens:d,unicode:s,version:l};if(t&&(c.emoticon=t),n&&(c.shortcodes=n),a)for(let{tone:e,emoji:t,version:o}of(c.skinTones=[],c.skinUnicodes=[],c.skinVersions=[],a))c.skinTones.push(e),c.skinUnicodes.push(t),c.skinVersions.push(o);return c});await j(e,[m,p],k,([e,t],a)=>{let r,s,l=0;function d(){2==++l&&function(){if(r!==i||s!==o){for(let t of(e.clear(),n))e.put(t);t.put(i,y),t.put(o,"url"),N(a)}}()}R(t,y,e=>{r=e,d()}),R(t,"url",e=>{s=e,d()})})}}async function U(e,t){return j(e,m,E,(e,o,i)=>{let n=IDBKeyRange.bound([t,0],[t+1,0],!1,!0);B(e.index(v),n,i)})}async function V(e,t){let o=$(O(t));return o.length?j(e,m,E,(e,t,i)=>{let n=[],a=()=>{n.length===o.length&&r()},r=()=>{i(D(n,e=>e.unicode).sort((e,t)=>e.order<t.order?-1:1))};for(let t=0;t<o.length;t++){let i=o[t],r=t===o.length-1?IDBKeyRange.bound(i,i+"￿",!1,!0):IDBKeyRange.only(i);B(e.index(b),r,e=>{n.push(e),a()})}}):[]}async function W(e,t){let o=await V(e,t);return o.length?o.filter(e=>(e.shortcodes||[]).map(e=>e.toLowerCase()).includes(t.toLowerCase()))[0]||null:await H(e,e=>(e.shortcodes||[]).includes(t.toLowerCase()))||null}async function G(e,t){return j(e,m,E,(e,o,i)=>R(e,t,o=>{if(o)return i(o);R(e.index(x),t,e=>i(e||null))}))}function K(e,t,o){return j(e,t,E,(e,t,i)=>R(e,o,i))}let Y=["name","url"];function X(e){let t=e&&Array.isArray(e),o=t&&e.length&&(!e[0]||Y.some(t=>!(t in e[0])));if(!t||o)throw Error("Custom emojis are in the wrong format");let i=(e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1,n=e.sort(i),a=function(e,t){let o=new Map;for(let i of e)for(let e of t(i)){let t=o;for(let o=0;o<e.length;o++){let i=e.charAt(o),n=t.get(i);n||(n=new Map,t.set(i,n)),t=n}let n=t.get("");n||(n=[],t.set("",n)),n.push(i)}return(e,t)=>{let i=o;for(let t=0;t<e.length;t++){let o=e.charAt(t),n=i.get(o);if(!n)return[];i=n}if(t)return i.get("")||[];let n=[],a=[i];for(;a.length;)for(let[e,t]of[...a.shift().entries()].sort((e,t)=>e[0]<t[0]?-1:1))""===e?n.push(...t):a.push(t);return n}}(e,e=>{let t=new Set;if(e.shortcodes)for(let o of e.shortcodes)for(let e of O(o))t.add(e);return t}),r=new Map,s=new Map;for(let t of e)for(let e of(s.set(t.name.toLowerCase(),t),t.shortcodes||[]))r.set(e.toLowerCase(),t);return{all:n,search:e=>{let t=O(e);return D(t.map((e,o)=>(o<t.length-1?e=>a(e,!0):e=>a(e,!1))(e)),e=>e.name).sort(i)},byShortcode:e=>r.get(e.toLowerCase()),byName:e=>s.get(e.toLowerCase())}}let J="undefined"!=typeof wrappedJSObject;function Q(e){if(!e)return e;if(J&&(e=structuredClone(e)),delete e.tokens,e.skinTones){let t=e.skinTones.length;e.skins=Array(t);for(let o=0;o<t;o++)e.skins[o]={tone:e.skinTones[o],unicode:e.skinUnicodes[o],version:e.skinVersions[o]};delete e.skinTones,delete e.skinUnicodes,delete e.skinVersions}return e}function Z(e){e||console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.")}let ee=["annotation","emoji","group","order","version"];function et(e,t){if(2!==Math.floor(e.status/100))throw Error("Failed to fetch: "+t+":  "+e.status)}async function eo(e){let t=await fetch(e,{method:"HEAD"});et(t,e);let o=t.headers.get("etag");return Z(o),o}async function ei(e){let t=await fetch(e);et(t,e);let o=t.headers.get("etag");Z(o);let i=await t.json();if(!i||!Array.isArray(i)||!i[0]||"object"!=typeof i[0]||ee.some(e=>!(e in i[0])))throw Error("Emoji data is in the wrong format");return[o,i]}async function en(e){let t=function(e){for(var t=e.length,o=new ArrayBuffer(t),i=new Uint8Array(o),n=-1;++n<t;)i[n]=e.charCodeAt(n);return o}(JSON.stringify(e));return btoa(function(e){for(var t="",o=new Uint8Array(e),i=o.byteLength,n=-1;++n<i;)t+=String.fromCharCode(o[n]);return t}(await crypto.subtle.digest("SHA-1",t)))}async function ea(e,t){let o,i=await eo(t);if(!i){let e=await ei(t);i=e[0],o=e[1],i||(i=await en(o))}await P(e,t,i)||(o||(o=(await ei(t))[1]),await q(e,o,t,i))}async function er(e,t){let[o,i]=await ei(t);o||(o=await en(i)),await q(e,i,t,o)}async function es(e,t){try{await ea(e,t)}catch(e){if("InvalidStateError"!==e.name)throw e}}class el{constructor({dataSource:e="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",locale:t="en",customEmoji:o=[]}={}){this.dataSource=e,this.locale=t,this._dbName=`emoji-picker-element-${this.locale}`,this._db=void 0,this._lazyUpdate=void 0,this._custom=X(o),this._clear=this._clear.bind(this),this._ready=this._init()}async _init(){var e,t,o;let i,n=this._db=await (!L[e=this._dbName]&&(L[e]=T(e)),L[e]);t=this._dbName,o=this._clear,(i=C[t])||(i=C[t]=[]),i.push(o);let a=this.dataSource;await F(n)?await er(n,a):this._lazyUpdate=es(n,a)}async ready(){let e=async()=>(this._ready||(this._ready=this._init()),this._ready);await e(),this._db||await e()}async getEmojiByGroup(e){return h(e),await this.ready(),S(await U(this._db,e)).map(Q)}async getEmojiBySearchQuery(e){return u(e),await this.ready(),[...this._custom.search(e),...S(await V(this._db,e)).map(Q)]}async getEmojiByShortcode(e){u(e),await this.ready();let t=this._custom.byShortcode(e);return t||Q(await W(this._db,e))}async getEmojiByUnicodeOrName(e){u(e),await this.ready();let t=this._custom.byName(e);return t||Q(await G(this._db,e))}async getPreferredSkinTone(){return await this.ready(),await K(this._db,p,w)||0}async setPreferredSkinTone(e){var t;return h(e),await this.ready(),t=this._db,j(t,p,k,(t,o)=>{t.put(e,w),N(o)})}async incrementFavoriteEmojiCount(e){var t;return u(e),await this.ready(),t=this._db,j(t,g,k,(t,o)=>R(t,e,i=>{t.put((i||0)+1,e),N(o)}))}async getTopFavoriteEmoji(e){var t,o;return h(e),await this.ready(),(await (t=this._db,o=this._custom,0===e?[]:j(t,[g,m],E,([t,i],n,a)=>{let r=[];t.index(f).openCursor(void 0,"prev").onsuccess=t=>{let n=t.target.result;if(!n)return a(r);function s(t){if(r.push(t),r.length===e)return a(r);n.continue()}let l=n.primaryKey,d=o.byName(l);if(d)return s(d);R(i,l,e=>{if(e)return s(e);n.continue()})}}))).map(Q)}set customEmoji(e){this._custom=X(e)}get customEmoji(){return this._custom.all}async _shutdown(){await this.ready();try{await this._lazyUpdate}catch(e){}}_clear(){this._db=this._ready=this._lazyUpdate=void 0}async close(){await this._shutdown(),await z(this._dbName)}async delete(){var e;await this._shutdown(),await (e=this._dbName,new Promise((t,o)=>{z(e),_(t,o,indexedDB.deleteDatabase(e))}))}}let ed=[[-1,"✨","custom"],[0,"😀","smileys-emotion"],[1,"👋","people-body"],[3,"🐱","animals-nature"],[4,"🍎","food-drink"],[5,"🏠️","travel-places"],[6,"⚽","activities"],[7,"📝","objects"],[8,"⛔️","symbols"],[9,"🏁","flags"]].map(([e,t,o])=>({id:e,emoji:t,name:o})),ec=ed.slice(1),eu="function"==typeof requestIdleCallback?requestIdleCallback:setTimeout;function eh(e){return e.unicode.includes("‍")}let em={"🫪":17,"🫩":16,"🫨":15.1,"🫠":14,"🥲":13.1,"🥻":12.1,"🥰":11,"🤩":5,"👱‍♀️":4,"🤣":3,"👁️‍🗨️":2,"😀":1,"😐️":.7,"😃":.6},ep=["😊","😒","❤️","👍️","😍","😂","😭","☺️","😔","😩","😏","💕","🙌","😘"],eg='"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',eb=(e,t)=>e<t?-1:+(e>t),ef=(e,t)=>{let o=document.createElement("canvas");o.width=o.height=1;let i=o.getContext("2d",{willReadFrequently:!0});return i.textBaseline="top",i.font=`100px ${eg}`,i.fillStyle=t,i.scale(.01,.01),i.fillText(e,0,0),i.getImageData(0,0,1,1).data},ev=()=>(e||(e=new Promise(e=>eu(()=>e(function(){let e=Object.entries(em);try{for(let[t,o]of e)if(function(e){let t,o=ef(e,"#000"),i=ef(e,"#fff");return o&&i&&(t=[...o].join(","))===[...i].join(",")&&!t.startsWith("0,0,0,")}(t))return o}catch(e){}finally{}return e[0][1]}())))),e),ey=new Map;function ew(e){e.preventDefault(),e.stopPropagation()}function eE(e,t,o){return(t+=e?-1:1)<0?t=o.length-1:t>=o.length&&(t=0),t}function ek(e,t){let o=new Set,i=[];for(let n of e){let e=t(n);o.has(e)||(o.add(e),i.push(n))}return i}let ex=requestAnimationFrame,eS="function"==typeof ResizeObserver;function eA(e){{let t=document.createRange();return t.selectNode(e.firstChild),t.getBoundingClientRect().width}}function eL(e,t,o){let i=e.get(t);return i||(i=o(),e.set(t,i)),i}let eC=new WeakMap,e_=new WeakMap,eT=Symbol("un-keyed"),ej="replaceChildren"in Element.prototype;function ez(e,t,o){for(let i=0;i<e.length;i++){let n=e[i],a=n.attributeName?t:t.firstChild,r={binding:n,targetNode:a,targetParentNode:void 0,currentExpression:void 0};o.push(r)}}let eI="function"==typeof queueMicrotask?queueMicrotask:e=>Promise.resolve().then(e);function eO(e,t,o){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!o(e[i],t[i]))return!1;return!0}let e$=new WeakMap,eM=[],{assign:eR}=Object;var eB={categoriesLabel:"Categories",emojiUnsupportedMessage:"Your browser does not support color emoji.",favoritesLabel:"Favorites",loadingMessage:"Loading…",networkErrorMessage:"Could not load emoji.",regionLabel:"Emoji picker",searchDescription:"When search results are available, press up or down to select and enter to choose.",searchLabel:"Search",searchResultsLabel:"Search results",skinToneDescription:"When expanded, press up or down to select and enter to choose.",skinToneLabel:"Choose a skin tone (currently {skinTone})",skinTonesLabel:"Skin tones",skinTones:["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],categories:{custom:"Custom","smileys-emotion":"Smileys and emoticons","people-body":"People and body","animals-nature":"Animals and nature","food-drink":"Food and drink","travel-places":"Travel and places",activities:"Activities",objects:"Objects",symbols:"Symbols",flags:"Flags"}};let eN=["customEmoji","customCategorySorting","database","dataSource","i18n","locale","skinToneEmoji","emojiVersion"],eD=`:host{--emoji-font-family:${eg}}`;class eF extends HTMLElement{constructor(e){super(),this.attachShadow({mode:"open"});let t=document.createElement("style");for(let o of(t.textContent=':host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}'+eD,this.shadowRoot.appendChild(t),this._ctx={locale:"en",dataSource:"https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",skinToneEmoji:"🖐️",customCategorySorting:eb,customEmoji:null,i18n:eB,emojiVersion:null,...e},eN))"database"!==o&&Object.prototype.hasOwnProperty.call(this,o)&&(this._ctx[o]=this[o],delete this[o]);this._dbFlush()}connectedCallback(){this._cmp||(this._cmp=function(e,o){let i,n,a,r,s,l,d,c={},u=new AbortController,h=u.signal,{state:m,createEffect:p}=(a=!1,r=new Map,s=new Set,l=()=>{if(a)return;let e=[...s];s.clear();try{for(let t of e)t()}finally{n=!1,s.size&&(n=!0,eI(l))}},d=new Proxy({},{get(e,t){if(i){let e=r.get(t);e||(e=new Set,r.set(t,e)),e.add(i)}return e[t]},set(e,t,o){if(e[t]!==o){e[t]=o;let i=r.get(t);if(i){for(let e of i)s.add(e);n||(n=!0,eI(l))}}return!0}}),h.addEventListener("abort",()=>{a=!0}),{state:d,createEffect:e=>{let t=()=>{let o=i;i=t;try{return e()}finally{i=o}};return t()}}),g=new Map;eR(m,{skinToneEmoji:void 0,i18n:void 0,database:void 0,customEmoji:void 0,customCategorySorting:void 0,emojiVersion:void 0}),eR(m,o),eR(m,{initialLoad:!0,currentEmojis:[],currentEmojisWithCategories:[],rawSearchText:"",searchText:"",searchMode:!1,activeSearchItem:-1,message:void 0,skinTonePickerExpanded:!1,skinTonePickerExpandedAfterAnimation:!1,currentSkinTone:0,activeSkinTone:0,skinToneButtonText:void 0,pickerStyle:void 0,skinToneButtonLabel:"",skinTones:[],currentFavorites:[],defaultFavoriteEmojis:void 0,numColumns:8,isRtl:!1,currentGroupIndex:0,groups:ec,databaseLoaded:!1,activeSearchItemId:void 0}),p(()=>{m.currentGroup!==m.groups[m.currentGroupIndex]&&(m.currentGroup=m.groups[m.currentGroupIndex])});let b=t=>{e.getElementById(t).focus()},f=t=>e.getElementById(`emo-${t.id}`),v=(e,t)=>{c.rootElement.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))},y=(e,t)=>e.id===t.id,w=(e,t)=>{let{category:o,emojis:i}=e,{category:n,emojis:a}=t;return o===n&&eO(i,a,y)},E=e=>{eO(m.currentEmojis,e,y)||(m.currentEmojis=e)},k=e=>{m.searchMode!==e&&(m.searchMode=e)},x=(e,t)=>t&&e.skins&&e.skins[t]||e.unicode,S={labelWithSkin:(e,t)=>ek([e.name||x(e,t),e.annotation,...e.shortcodes||eM].filter(Boolean),e=>e).join(", "),titleForEmoji:e=>e.annotation||(e.shortcodes||eM).join(", "),unicodeWithSkin:x},A={onClickSkinToneButton:function(e){m.skinTonePickerExpanded=!m.skinTonePickerExpanded,m.activeSkinTone=m.currentSkinTone,m.skinTonePickerExpanded&&(ew(e),ex(()=>b("skintone-list")))},onEmojiClick:function(e){let{target:t}=e;t.classList.contains("emoji")&&(ew(e),R(t.id.substring(4)))},onNavClick:function(e){let{target:t}=e,o=t.closest(".nav-button");if(!o)return;let i=parseInt(o.dataset.groupId,10);c.searchElement.value="",m.rawSearchText="",m.searchText="",m.activeSearchItem=-1,m.currentGroupIndex=m.groups.findIndex(e=>e.id===i)},onNavKeydown:function(e){let{target:t,key:o}=e,i=t=>{t&&(ew(e),t.focus())};switch(o){case"ArrowLeft":return i(t.previousElementSibling);case"ArrowRight":return i(t.nextElementSibling);case"Home":return i(t.parentElement.firstElementChild);case"End":return i(t.parentElement.lastElementChild)}},onSearchKeydown:function(e){if(!m.searchMode||!m.currentEmojis.length)return;let t=t=>{ew(e),m.activeSearchItem=eE(t,m.activeSearchItem,m.currentEmojis)};switch(e.key){case"ArrowDown":return t(!1);case"ArrowUp":return t(!0);case"Enter":if(-1!==m.activeSearchItem)return ew(e),R(m.currentEmojis[m.activeSearchItem].id);m.activeSearchItem=0}},onSkinToneOptionsClick:function(e){let{target:{id:t}}=e,o=t&&t.match(/^skintone-(\d)/);o&&(ew(e),B(parseInt(o[1],10)))},onSkinToneOptionsFocusOut:N,onSkinToneOptionsKeydown:function(e){if(!m.skinTonePickerExpanded)return;let t=async t=>{ew(e),m.activeSkinTone=t};switch(e.key){case"ArrowUp":return t(eE(!0,m.activeSkinTone,m.skinTones));case"ArrowDown":return t(eE(!1,m.activeSkinTone,m.skinTones));case"Home":return t(0);case"End":return t(m.skinTones.length-1);case"Enter":return ew(e),B(m.activeSkinTone);case"Escape":return ew(e),m.skinTonePickerExpanded=!1,b("skintone-button")}},onSkinToneOptionsKeyup:function(e){if(m.skinTonePickerExpanded&&" "===e.key)return ew(e),B(m.activeSkinTone)},onSearchInput:function(e){m.rawSearchText=e.target.value}},L={calculateEmojiGridStyle:function(e){var t;let o;t=()=>{{let e=getComputedStyle(c.rootElement),t=parseInt(e.getPropertyValue("--num-columns"),10),o="rtl"===e.getPropertyValue("direction");m.numColumns=t,m.isRtl=o}},eS?(o=new ResizeObserver(t)).observe(e):ex(t),h.addEventListener("abort",()=>{o&&o.disconnect()})},updateOnIntersection:function(e){let t,o;t=e.closest(".tabpanel"),(o=e$.get(t))||(o=new IntersectionObserver(e=>{for(let{target:t,isIntersecting:o}of e)t.classList.toggle("onscreen",o)},{root:t,rootMargin:"50% 0px 50% 0px",threshold:0}),e$.set(t,o),h.addEventListener("abort",()=>{o.disconnect()})),o.observe(e)}},C=!0;function _(){let{customEmoji:e,database:t}=m,o=e||eM;t.customEmoji!==o&&(t.customEmoji=o)}p(()=>{!function(e,t,o,i,n,a,r,s,l){let d,c,{labelWithSkin:u,titleForEmoji:h,unicodeWithSkin:m}=o,{html:p,map:g}=(d=eL(e_,t,()=>new Map),c=eT,{map:function(e,t,o){return e.map((e,i)=>{let n=c;c=o(e);try{return t(e,i)}finally{c=n}})},html:function(e,...t){let o=eL(d,e,()=>new Map);return eL(o,c,()=>(function(e){let{template:t,elementsToBindings:o}=eL(eC,e,()=>(function(e){var t;let o,i="",n=!1,a=!1,r=-1,s=new Map,l=[],d=0;for(let t=0,o=e.length;t<o;t++){let c,u,h,m=e[t];if(i+=m.slice(d),t===o-1)break;for(let e=0;e<m.length;e++)switch(m.charAt(e)){case"<":"/"===m.charAt(e+1)?l.pop():(n=!0,l.push(++r));break;case">":n=!1,a=!1;break;case"=":a=!0}let p=eL(s,l[l.length-1],()=>[]);if(a){let o=/(\S+)="?([^"=]*)$/.exec(m);c=o[1],u=o[2];let n=/^([^">]*)("?)/.exec(e[t+1]);h=n[1],i=i.slice(0,-1*o[0].length),d=n[0].length}else d=0;let g={attributeName:c,attributeValuePre:u,attributeValuePost:h,expressionIndex:t};p.push(g),n||a||(i+=" ")}return{template:(t=i,(o=document.createElement("template")).innerHTML=t,o),elementsToBindings:s}})(e)),i=t.cloneNode(!0).content.firstElementChild,n=function(e,t){let o,i=[];if(1===t.size&&(o=t.get(0)))ez(o,e,i);else{let o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),n=e,a=-1;do{let e=t.get(++a);e&&ez(e,n,i)}while(n=o.nextNode())}return i}(i,o);return function(e){for(let t of n){let{targetNode:o,currentExpression:i,binding:{expressionIndex:n,attributeName:a,attributeValuePre:r,attributeValuePost:s}}=t,l=e[n];if(i!==l)if(t.currentExpression=l,a)if(null===l)o.removeAttribute(a);else{let e=r+""+l+s;o.setAttribute(a,e)}else{let e;Array.isArray(l)?!function(e,t){var o;let{targetNode:i}=t,{targetParentNode:n}=t,a=!1;n?a=function(e,t){let o=e.firstChild,i=0;for(;o;){if(t[i]!==o)return!0;o=o.nextSibling,i++}return i!==t.length}(n,e):(a=!0,t.targetNode=void 0,t.targetParentNode=n=i.parentNode),a&&(o=n,ej?o.replaceChildren(...e):(o.innerHTML="",o.append(...e)))}(l,t):l instanceof Element?(e=l,o.replaceWith(e)):o.nodeValue=""+l,e&&(t.targetNode=e)}}return i}})(e))(t)}});function b(e,o,i){return g(e,(e,n)=>p`<button role="${o?"option":"menuitem"}" aria-selected="${o?n===t.activeSearchItem:null}" aria-label="${u(e,t.currentSkinTone)}" title="${h(e)}" class="${"emoji"+(o&&n===t.activeSearchItem?" active":"")+(e.unicode?"":" custom-emoji")}" id="${`${i}-${e.id}`}" style="${e.unicode?null:`--custom-emoji-background: url(${JSON.stringify(e.url)})`}">${e.unicode?m(e,t.currentSkinTone):""}</button>`,e=>`${i}-${e.id}`)}let f=p`<section data-ref="rootElement" class="picker" aria-label="${t.i18n.regionLabel}" style="${t.pickerStyle||""}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${t.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(t.searchMode&&t.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${t.activeSearchItemId?`emo-${t.activeSearchItemId}`:null}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${t.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${t.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${t.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${t.skinTonePickerExpanded?"hide-focus":""}" aria-label="${t.skinToneButtonLabel}" title="${t.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${t.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${t.skinToneButtonText||""}</button></div><span id="skintone-description" class="sr-only">${t.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${t.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${t.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${t.i18n.skinTonesLabel}" aria-activedescendant="skintone-${t.activeSkinTone}" aria-hidden="${!t.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${g(t.skinTones,(e,o)=>p`<div id="skintone-${o}" class="emoji ${o===t.activeSkinTone?"active":""}" aria-selected="${o===t.activeSkinTone}" role="option" title="${t.i18n.skinTones[o]}" aria-label="${t.i18n.skinTones[o]}">${e}</div>`,e=>e)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${t.groups.length},1fr)" aria-label="${t.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${g(t.groups,e=>p`<button role="tab" class="nav-button" aria-controls="tab-${e.id}" aria-label="${t.i18n.categories[e.name]}" aria-selected="${!t.searchMode&&t.currentGroup.id===e.id}" title="${t.i18n.categories[e.name]}" data-group-id="${e.id}"><div class="nav-emoji emoji">${e.emoji}</div></button>`,e=>e.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(t.isRtl?-1:1)*t.currentGroupIndex*100}%)"></div></div><div class="message ${t.message?"":"gone"}" role="alert" aria-live="polite">${t.message||""}</div><div data-ref="tabpanelElement" class="tabpanel ${!t.databaseLoaded||t.message?"gone":""}" role="${t.searchMode?"region":"tabpanel"}" aria-label="${t.searchMode?t.i18n.searchResultsLabel:t.i18n.categories[t.currentGroup.name]}" id="${t.searchMode?null:`tab-${t.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${g(t.currentEmojisWithCategories,(e,o)=>p`<div><div id="menu-label-${o}" class="category ${1===t.currentEmojisWithCategories.length&&""===t.currentEmojisWithCategories[0].category?"gone":""}" aria-hidden="true">${t.searchMode?t.i18n.searchResultsLabel:e.category?e.category:t.currentEmojisWithCategories.length>1?t.i18n.categories.custom:t.i18n.categories[t.currentGroup.name]}</div><div class="emoji-menu ${0!==o&&!t.searchMode&&-1===t.currentGroup.id?"visibility-auto":""}" style="${`--num-rows: ${Math.ceil(e.emojis.length/t.numColumns)}`}" data-action="updateOnIntersection" role="${t.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${o}" id="${t.searchMode?"search-results":null}">${b(e.emojis,t.searchMode,"emo")}</div></div>`,e=>e.category)}</div></div><div class="favorites onscreen emoji-menu ${t.message?"gone":""}" role="menu" aria-label="${t.i18n.favoritesLabel}" data-on-click="onEmojiClick">${b(t.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`,v=(t,o)=>{for(let i of e.querySelectorAll(`[${t}]`))o(i,i.getAttribute(t))};if(l){for(let t of(e.appendChild(f),["click","focusout","input","keydown","keyup"]))v(`data-on-${t}`,(e,o)=>{e.addEventListener(t,i[o])});v("data-ref",(e,t)=>{a[t]=e}),r.addEventListener("abort",()=>{e.removeChild(f)})}v("data-action",(e,t)=>{let o=s.get(t);o||s.set(t,o=new WeakSet),o.has(e)||(o.add(e),n[t](e))})}(e,m,S,A,L,c,h,g,C),C=!1}),m.emojiVersion||ev().then(e=>{e||(m.message=m.i18n.emojiUnsupportedMessage)}),p(()=>{async function e(){let e=!1,t=setTimeout(()=>{e=!0,m.message=m.i18n.loadingMessage},1e3);try{await m.database.ready(),m.databaseLoaded=!0}catch(e){console.error(e),m.message=m.i18n.networkErrorMessage}finally{clearTimeout(t),e&&(e=!1,m.message="")}}m.database&&e()}),p(()=>{m.pickerStyle=`
      --num-groups: ${m.groups.length}; 
      --indicator-opacity: ${+!m.searchMode}; 
      --num-skintones: 6;`}),p(()=>{m.customEmoji&&m.database&&_()}),p(()=>{m.customEmoji&&m.customEmoji.length?m.groups!==ed&&(m.groups=ed):m.groups!==ec&&(m.currentGroupIndex&&m.currentGroupIndex--,m.groups=ec)}),p(()=>{!async function(){m.databaseLoaded&&(m.currentSkinTone=await m.database.getPreferredSkinTone())}()}),p(()=>{m.skinTones=Array(6).fill().map((e,t)=>(function(e,t){if(0===t)return e;let o=e.indexOf("‍");return -1!==o?e.substring(0,o)+String.fromCodePoint(127995+t-1)+e.substring(o):(e.endsWith("️")&&(e=e.substring(0,e.length-1)),e+"\uD83C"+String.fromCodePoint(57339+t-1))})(m.skinToneEmoji,t))}),p(()=>{m.skinToneButtonText=m.skinTones[m.currentSkinTone]}),p(()=>{m.skinToneButtonLabel=m.i18n.skinToneLabel.replace("{skinTone}",m.i18n.skinTones[m.currentSkinTone])}),p(()=>{async function e(){let{database:e}=m;m.defaultFavoriteEmojis=(await Promise.all(ep.map(t=>e.getEmojiByUnicodeOrName(t)))).filter(Boolean)}m.databaseLoaded&&e()}),p(()=>{async function e(){_();let{database:e,defaultFavoriteEmojis:t,numColumns:o}=m,i=await e.getTopFavoriteEmoji(o);m.currentFavorites=await I(ek([...i,...t],e=>e.unicode||e.name).slice(0,o))}m.databaseLoaded&&m.defaultFavoriteEmojis&&e()}),p(()=>{!async function(){let{searchText:e,currentGroup:t,databaseLoaded:o,customEmoji:i}=m;if(o)if(e.length>=2){let t=await $(e);m.searchText===e&&(E(t),k(!0))}else{let{id:e}=t;if(-1!==e||i&&i.length){let t=await O(e);m.currentGroup.id===e&&(E(t),k(!1))}}else m.currentEmojis=[],m.searchMode=!1}()});let T=()=>{ex(()=>{var e;(e=c.tabpanelElement)&&(e.scrollTop=0)})};function j(e){return!e.unicode||!eh(e)||ey.get(e.unicode)}async function z(e){let t=m.emojiVersion||await ev();return e.filter(({version:e})=>!e||e<=t)}async function I(e){var t;return t=m.emojiVersion||await ev(),e.map(({unicode:e,skins:o,shortcodes:i,url:n,name:a,category:r,annotation:s})=>({unicode:e,name:a,shortcodes:i,url:n,category:r,annotation:s,id:e||a,skins:o&&(e=>{let o={};for(let i of e)"number"==typeof i.tone&&i.version<=t&&(o[i.tone]=i.unicode);return o})(o)}))}async function O(e){let t=-1===e?m.customEmoji:await m.database.getEmojiByGroup(e);return I(await z(t))}async function $(e){return I(await z(await m.database.getEmojiBySearchQuery(e)))}async function M(e){let t=await m.database.getEmojiByUnicodeOrName(e),o=[...m.currentEmojis,...m.currentFavorites].find(t=>t.id===e),i=o.unicode&&x(o,m.currentSkinTone);return await m.database.incrementFavoriteEmojiCount(e),{emoji:t,skinTone:m.currentSkinTone,...i&&{unicode:i},...o.name&&{name:o.name}}}async function R(e){let t=M(e);v("emoji-click-sync",t),v("emoji-click",await t)}function B(e){m.currentSkinTone=e,m.skinTonePickerExpanded=!1,b("skintone-button"),v("skin-tone-change",{skinTone:e}),m.database.setPreferredSkinTone(e)}async function N(e){let{relatedTarget:t}=e;t&&"skintone-list"===t.id||(m.skinTonePickerExpanded=!1)}return p(()=>{let{currentEmojis:e,emojiVersion:o}=m,i=e.filter(e=>e.unicode).filter(e=>eh(e)&&!ey.has(e.unicode));!o&&i.length?(E(e),ex(()=>{!function(e,o,i){let n=!0;for(let a of e){let e=i(a);if(!e)continue;let r=eA(e);void 0===t&&(t=eA(o));let s=r/1.8<t;ey.set(a.unicode,s),s||(n=!1)}return n}(i,c.baselineEmoji,f)?m.currentEmojis=[...m.currentEmojis]:T()})):(E(o?e:e.filter(j)),T())}),p(()=>{}),p(()=>{var e;e=function(){let{searchMode:e,currentEmojis:t}=m;if(e)return[{category:"",emojis:t}];let o=new Map;for(let e of t){let t=e.category||"",i=o.get(t);i||(i=[],o.set(t,i)),i.push(e)}return[...o.entries()].map(([e,t])=>({category:e,emojis:t})).sort((e,t)=>m.customCategorySorting(e.category,t.category))}(),eO(m.currentEmojisWithCategories,e,w)||(m.currentEmojisWithCategories=e)}),p(()=>{m.activeSearchItemId=-1!==m.activeSearchItem&&m.currentEmojis[m.activeSearchItem].id}),p(()=>{let{rawSearchText:e}=m;eu(()=>{m.searchText=(e||"").trim(),m.activeSearchItem=-1})}),p(()=>{m.skinTonePickerExpanded?c.skinToneDropdown.addEventListener("transitionend",()=>{m.skinTonePickerExpandedAfterAnimation=!0},{once:!0}):m.skinTonePickerExpandedAfterAnimation=!1}),{$set(e){eR(m,e)},$destroy(){u.abort()}}}(this.shadowRoot,this._ctx))}disconnectedCallback(){eI(()=>{if(!this.isConnected&&this._cmp){this._cmp.$destroy(),this._cmp=void 0;let{database:e}=this._ctx;e.close().catch(e=>console.error(e))}})}static get observedAttributes(){return["locale","data-source","skin-tone-emoji","emoji-version"]}attributeChangedCallback(e,t,o){this._set(e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),"emoji-version"===e?parseFloat(o):o)}_set(e,t){this._ctx[e]=t,this._cmp&&this._cmp.$set({[e]:t}),["locale","dataSource"].includes(e)&&this._dbFlush()}_dbCreate(){let{locale:e,dataSource:t,database:o}=this._ctx;o&&o.locale===e&&o.dataSource===t||this._set("database",new el({locale:e,dataSource:t}))}_dbFlush(){eI(()=>this._dbCreate())}}let eP={};for(let e of eN)eP[e]={get(){return"database"===e&&this._dbCreate(),this._ctx[e]},set(t){if("database"===e)throw Error("database is read-only");this._set(e,t)}};function eH(e){if("TEXTAREA"!==e.nodeName)return!1;if(void 0===a){var t=document.createElement("textarea");t.value=1,a=!!t.firstChild}return a}Object.defineProperties(eF.prototype,eP),customElements.get("emoji-picker")||customElements.define("emoji-picker",eF);var eq=function(e,t){if(e.focus(),document.selection){var o=document.selection.createRange();o.text=t,o.collapse(!1),o.select();return}if(!document.execCommand("insertText",!1,t)){var i=e.selectionStart,n=e.selectionEnd;if("function"==typeof e.setRangeText)e.setRangeText(t);else{var a=document.createRange(),r=document.createTextNode(t);if(eH(e)){var s=e.firstChild;if(s){for(var l=0,d=null,c=null;s&&(null===d||null===c);){var u=s.nodeValue.length;i>=l&&i<=l+u&&a.setStart(d=s,i-l),n>=l&&n<=l+u&&a.setEnd(c=s,n-l),l+=u,s=s.nextSibling}i!==n&&a.deleteContents()}else e.appendChild(r)}if(eH(e)&&"#text"===a.commonAncestorContainer.nodeName)a.insertNode(r);else{var h=e.value;e.value=h.slice(0,i)+t+h.slice(n)}}e.setSelectionRange(i+t.length,i+t.length);var m=document.createEvent("UIEvent");m.initEvent("input",!0,!1),e.dispatchEvent(m)}},eU="capture-photo",eV=`
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`,eW=document.createElement("template");eW.innerHTML=`
  <style>${eV}</style>
  <video part="video" playsinline></video>
  <canvas hidden></canvas>
  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button">
        <slot name="capture-button-content">Capture photo</slot>
      </button>
    </slot>
    <slot name="actions"></slot>
  </div>
  <slot></slot>
  <div part="output-container" id="output"></div>
`;var eG=class e extends HTMLElement{#e={};#t=null;#o=null;#i=null;#n=null;#a=null;#r=null;constructor(){super(),this.#e=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eW.content.cloneNode(!0))}static get observedAttributes(){return["no-image","pan","tilt","zoom","torch"]}attributeChangedCallback(e,t,o){if(!this.isConnected)return;let i=this.getTrackCapabilities();if("no-image"===e&&t!==o&&this.#s(),"pan"===e&&t!==o&&"pan"in this.#e){let e=!!("pan"in i&&i.pan?.min&&i.pan?.max)&&this.pan>=i.pan.min&&this.pan<=i.pan.max;"number"==typeof this.pan&&e&&this.#l("pan",this.pan)}if("tilt"===e&&t!==o&&"tilt"in this.#e){let e=!!("tilt"in i&&i.tilt?.min&&i.tilt?.max)&&this.tilt>=i.tilt.min&&this.tilt<=i.tilt.max;"number"==typeof this.tilt&&e&&this.#l("tilt",this.tilt)}if("zoom"===e&&t!==o&&"zoom"in this.#e){let e=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"number"==typeof this.zoom&&e&&this.#l("zoom",this.zoom)}"torch"===e&&t!==o&&"torch"in this.#e&&this.#l("torch",this.torch)}async connectedCallback(){if(this.#d("autoPlay"),this.#d("noImage"),this.#d("facingMode"),this.#d("cameraResolution"),this.#d("pan"),this.#d("tilt"),this.#d("zoom"),this.#d("torch"),this.#d("calculateFileSize"),this.#o=this.shadowRoot?.querySelector("canvas")||null,this.#i=this.shadowRoot?.getElementById("output")||null,this.#n=this.shadowRoot?.querySelector("video")||null,this.#a=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#r=this.#c(),this.#n?.addEventListener("loadedmetadata",this.#u),this.#a?.addEventListener("slotchange",this.#h),this.#r?.addEventListener("click",this.#m),!e.isSupported())return this.dispatchEvent(new CustomEvent(`${eU}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#r?.removeEventListener("click",this.#m),this.#n?.removeEventListener("loadedmetadata",this.#u),this.#a?.removeEventListener("slotchange",this.#h)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(e){this.toggleAttribute("auto-play",!!e)}get noImage(){return this.hasAttribute("no-image")}set noImage(e){this.toggleAttribute("no-image",!!e)}get facingMode(){let e=this.getAttribute("facing-mode");return"user"!==e?"environment":e}set facingMode(e){this.setAttribute("facing-mode",e)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(e){this.setAttribute("camera-resolution",e)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(e){this.setAttribute("pan",null!=e?e.toString():e)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(e){this.setAttribute("tilt",null!=e?e.toString():e)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(e){this.setAttribute("zoom",null!=e?e.toString():e)}get torch(){return this.hasAttribute("torch")}set torch(e){this.toggleAttribute("torch",!!e)}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(e){this.toggleAttribute("calculate-file-size",!!e)}get loading(){return this.hasAttribute("loading")}#m=e=>{e.preventDefault(),this.capture()};#u=e=>{let t=e.target;t.play().then(()=>{this.dispatchEvent(new CustomEvent(`${eU}:video-play`,{bubbles:!0,composed:!0,detail:{video:t}}))}).catch(e=>{this.dispatchEvent(new CustomEvent(`${eU}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}).finally(()=>{this.removeAttribute("loading")})};#s(){this.#i&&this.#i.replaceChildren()}#l(e,t){let o,i,n;if(!this.#t)return;let[a]=this.#t.getVideoTracks(),r=this.getTrackCapabilities(),s=this.getTrackSettings(),l="pan"===e||"tilt"===e||"zoom"===e?(o=Number(t),i=r[e]?.min||1,n=r[e]?.max||1,Number.isNaN(i)&&(i=0),Number.isNaN(n)&&(n=0),Math.min(Math.max(o,Math.min(i,n)),Math.max(i,n))):t;e in s&&a.applyConstraints({advanced:[{[e]:l}]}).catch(()=>{})}#h=e=>{e.target?.name==="capture-button"&&(this.#r?.removeEventListener("click",this.#m),this.#r=this.#c(),this.#r&&(this.#r.addEventListener("click",this.#m),"BUTTON"===this.#r.nodeName||this.#r.hasAttribute("role")||this.#r.setAttribute("role","button")))};#c(){return this.#a&&this.#a.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"capture-button"===e.getAttribute("slot"))||null}#d(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}async startVideoStream(t){if(!e.isSupported()||this.#t)return;this.setAttribute("loading","");let o={video:{facingMode:{ideal:this.facingMode},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof t&&t.trim().length>0&&(o.video.deviceId={exact:t}),"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,t=0]=this.cameraResolution.split("x").map(e=>Number(e));e>0&&t>0&&(o.video.width=e,o.video.height=t)}try{this.#t=await navigator.mediaDevices.getUserMedia(o),this.#n&&(this.#n.srcObject=this.#t),this.#l("pan",this.pan),this.#l("tilt",this.tilt),this.#l("zoom",this.zoom)}catch(e){this.dispatchEvent(new CustomEvent(`${eU}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}finally{this.removeAttribute("loading")}}restartVideoStream(e){this.#t&&this.#n&&this.stopVideoStream(),this.startVideoStream(e)}stopVideoStream(){if(!this.#n||!this.#t)return;let[e]=this.#t.getVideoTracks();e?.stop(),this.#n.srcObject=null,this.#t=null}async capture(){if(!(this.loading||!this.#o||!this.#n))try{let e=this.#o.getContext("2d"),t=this.#n.videoWidth,o=this.#n.videoHeight;this.#o.width=t,this.#o.height=o,e?.drawImage(this.#n,0,0,t,o);let i=this.#o.toDataURL("image/png");if("string"==typeof i&&i.includes("data:image")){if(!this.noImage){let e=new Image;e.src=i,e.width=t,e.height=o,e.alt="Captured photo",e.setAttribute("part","output-image"),this.#s(),this.#i?.appendChild(e)}let e={dataURI:i,width:t,height:o};if(this.calculateFileSize)try{let t=(await (await fetch(i)).blob()).size;t&&(e.size=t)}catch{}this.dispatchEvent(new CustomEvent(`${eU}:success`,{bubbles:!0,composed:!0,detail:e}))}}catch(e){this.dispatchEvent(new CustomEvent(`${eU}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}getSupportedConstraints(){return e.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getCapabilities&&e.getCapabilities()||{}}getTrackSettings(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getSettings&&e.getSettings()||{}}static async getVideoInputDevices(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?(await navigator.mediaDevices.enumerateDevices()||[]).filter(e=>"videoinput"===e.kind&&!!e.deviceId):[]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=eU){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}};function eK(e){return null!==e&&"object"==typeof e?"share"in navigator&&"canShare"in navigator&&navigator.canShare(e):"share"in navigator}eG.defineCustomElement();var eY="theme-toggle/theme-preference",eX=document.createElement("template"),eJ=`
  :host {
    display: inline-block;
    box-sizing: border-box;
  }

  :host *,
  :host *:after,
  :host *:before {
    box-sizing: inherit;
  }

  .hidden {
    display: none !important;
  }

  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.375rem;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
  }

  .icon--hidden {
    display: none !important;
  }

  .label--hidden {
    display: inline !important;
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .icon__svg {
    min-width: 1.5em;
    width: 1.5em;
    height: 1.5em;
  }

  .system-path {
    transform: scale(0.4) translateY(-4px);
    transform-origin: center;
  }
`;eX.innerHTML=`
  <style>${eJ}</style>

  <button type="button" part="base" id="theme-toggle" class="button">
    <slot name="light">
      <slot name="icon-light" part="icon icon-light" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="icon__svg" aria-hidden="true">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
        </svg>
      </slot>
      <slot name="label-light" part="label label-light" class="label">Light theme</slot>
    </slot>

    <slot name="dark">
      <slot name="icon-dark" part="icon icon-dark" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="icon__svg" aria-hidden="true">
          <path d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"></path>
        </svg>
      </slot>
      <slot name="label-dark" part="label label-dark" class="label">Dark theme</slot>
    </slot>

    <slot name="system">
      <slot name="icon-system" part="icon icon-system" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="icon__svg" aria-hidden="true">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"></path>
          <path class="system-path system-path--light" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
          <path class="system-path system-path--dark" d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"></path>
        </svg>
      </slot>
      <slot name="label-system" part="label label-system" class="label">System theme</slot>
    </slot>
  </button>
`,(class e extends HTMLElement{#r=["light","dark","system"];#t="system";#d=0;#n=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(eX.content.cloneNode(!0)),this.#n=this.shadowRoot?.getElementById("theme-toggle")||null}static get observedAttributes(){return["storage-key","no-icon","no-label"]}attributeChangedCallback(e,t,o){"storage-key"===e&&t!==o&&(this.#t=this.#e(),this.#d=this.#r.indexOf(this.#t)||0,this.#l()),"no-icon"===e&&t!==o&&this.#n&&this.#n.querySelectorAll('slot[name^="icon"]').forEach(e=>{e.classList.toggle("icon--hidden",this.noIcon)}),"no-label"===e&&t!==o&&this.#n&&this.#n.querySelectorAll('slot[name^="label"]').forEach(e=>{e.classList.toggle("label--hidden",this.noLabel)})}get noStorage(){return this.hasAttribute("no-storage")}set noStorage(e){e?this.setAttribute("no-storage",""):this.removeAttribute("no-storage")}get storageKey(){return this.getAttribute("storage-key")}set storageKey(e){null!=e&&this.setAttribute("storage-key",e)}get noIcon(){return this.hasAttribute("no-icon")}set noIcon(e){e?this.setAttribute("no-icon",""):this.removeAttribute("no-icon")}get noLabel(){return this.hasAttribute("no-label")}set noLabel(e){e?this.setAttribute("no-label",""):this.removeAttribute("no-label")}connectedCallback(){this.#o("noStorage"),this.#o("storageKey"),this.#o("noIcon"),this.#o("noLabel"),this.#t=this.#e(),this.#d=this.#r.indexOf(this.#t)||0,this.#l(),this.#n?.addEventListener("click",this.#m),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.#a)}disconnectedCallback(){this.#n?.removeEventListener("click",this.#m),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.#a)}#e(){if(this.noStorage)return"system";let e="";try{e=window.localStorage.getItem(this.storageKey||eY)||""}catch{}return"light"===e||"dark"===e||"system"===e?e:"system"}#i(){if(!this.noStorage)try{window.localStorage.setItem(this.storageKey||eY,this.#t)}catch{}}#l(){if(this.#n?.querySelectorAll('slot[name="light"], slot[name="dark"], slot[name="system"]').forEach(e=>{e.classList.toggle("hidden",!e.getAttribute("name")?.startsWith(this.#t))}),document.documentElement.setAttribute("data-theme",this.#t),"system"===this.#t){let e=window.matchMedia("(prefers-color-scheme: dark)").matches;this.#n?.querySelectorAll(".system-path").forEach(t=>{t.classList.toggle("hidden",e?t.classList.contains("system-path--light"):t.classList.contains("system-path--dark"))})}}#u(){return this.#d=(this.#d+1)%this.#r.length,this.#r[this.#d]}#m=()=>{this.#t=this.#u(),this.#i(),this.#l(),this.dispatchEvent(new CustomEvent("tt-theme-change",{bubbles:!0,composed:!0,detail:{theme:this.#t}}))};#a=()=>{this.#l()};#o(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t="theme-toggle"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var eQ=`
  :host {
    display: inline-block;
  }
`,eZ=document.createElement("template");eZ.innerHTML=`
  <style>${eQ}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`,(class e extends HTMLElement{#n;#t;#a=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(eZ.content.cloneNode(!0)),this.#n=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#t=this.#i()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#t&&(this.#t.toggleAttribute("disabled",this.disabled),this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#d("shareUrl"),this.#d("shareTitle"),this.#d("shareText"),this.#d("shareFiles"),this.#d("disabled"),this.#n?.addEventListener("slotchange",this.#e),this.#t?.addEventListener("click",this.#r)}disconnectedCallback(){this.#n?.removeEventListener("slotchange",this.#e),this.#t?.removeEventListener("click",this.#r)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#a}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#a=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name)return void this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#r=e=>{e.preventDefault(),this.disabled||this.share()};#e=e=>{e.target&&"button"===e.target.name&&(this.#t?.removeEventListener("click",this.#r),this.#t=this.#i(),this.#t&&(this.#t.addEventListener("click",this.#r),"BUTTON"===this.#t.nodeName||this.#t.hasAttribute("role")||this.#t.setAttribute("role","button")))};#i(){return this.#n&&this.#n.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#d(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t="web-share"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var e0=document.createElement("template"),e1=`
  :host {
    --me-width: 32rem;
    --me-height: fit-content;
    --me-border-color: initial;
    --me-border-style: solid;
    --me-border-width: initial;
    --me-border-radius: 0;
    --me-box-shadow: none;
    --me-background-color: canvas;
    --me-color: canvastext;

    --me-header-spacing: 1rem;
    --me-footer-spacing: 1rem;
    --me-header-background-color: transparent;
    --me-header-color: initial;

    --me-body-spacing: 1rem;
    --me-body-background-color: transparent;
    --me-body-color: initial;
    --me-footer-background-color: transparent;
    --me-footer-color: initial;

    --me-close-padding: 0.4375rem;
    --me-close-border: none;
    --me-close-border-radius: 0;
    --me-close-background-color: transparent;
    --me-close-color: inherit;
    --me-close-font-size: 1rem;

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
    --dialog-placement-margin: calc((2em + 6px) / 2);

    width: var(--me-width);
    height: var(--me-height);
    padding: 0;
    border-color: var(--me-border-color);
    border-style: var(--me-border-style);
    border-width: var(--me-border-width);
    border-radius: var(--me-border-radius);
    box-shadow: var(--me-box-shadow);
    background-color: var(--me-background-color);
    color: var(--me-color);
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

  /* Dialog placement */
  :host(:not([fullscreen])[placement="top-start"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-center"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-end"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center-start"]) .dialog {
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center"]) .dialog {
    margin: auto;
  }

  :host(:not([fullscreen])[placement="center-end"]) .dialog {
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-start"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-center"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-end"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  /* Dialog animations */
  @media (prefers-reduced-motion: no-preference) {
    .dialog:not(.dialog--no-animations),
    .dialog:not(.dialog--no-animations)::backdrop {
      transition: transform 0.3s, opacity 0.3s, display 0.3s allow-discrete, overlay 0.3s allow-discrete;
    }

    /* 1. IS-OPEN STATE */
    .dialog[open]:not(.dialog--no-animations) {
      transform: scale(1);
      opacity: 1;
    }

    /* 2. EXIT STATE */
    .dialog:not(.dialog--no-animations) {
      transform: scale(0.95);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      .dialog[open]:not(.dialog--no-animations) {
        transform: scale(0.95);
        opacity: 0;
      }

      .dialog[open]:not(.dialog--no-animations)::backdrop {
        opacity: 0;
      }
    }

    .dialog--pulse:not(.dialog--no-animations) {
      animation-name: pulse;
      animation-duration: 300ms;
      animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
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
    color: var(--me-header-color);
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
    color: var(--me-body-color);
    overscroll-behavior: contain;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: end;
    padding: var(--me-footer-spacing);
    background-color: var(--me-footer-background-color);
    color: var(--me-footer-color);
  }

  .dialog__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--me-close-padding);
    border: var(--me-close-border);
    border-radius: var(--me-close-border-radius);
    background-color: var(--me-close-background-color);
    color: var(--me-close-color);
    font-size: var(--me-close-font-size);
  }

  .dialog__close:not(:disabled) {
    cursor: pointer;
  }

  .dialog__close:disabled {
    cursor: not-allowed;
  }
`;e0.innerHTML=`
  <style>${e1}</style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg part="close-icon" xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
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
`,(class e extends HTMLElement{static CLOSE_REQUEST_REASONS={CLOSE_BUTTON:"close-button",ESCAPE_KEY:"escape-key",BACKDROP_CLICK:"backdrop-click",EXTERNAL_INVOKER:"external-invoker"};#n=null;#r=null;#o=null;#l=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(e0.content.cloneNode(!0)),this.shadowRoot&&(this.#n=this.shadowRoot.querySelector("dialog"),this.#r=this.shadowRoot.querySelector('slot[name="footer"]'),this.#o=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(e,t,o){if(null!==this.#n){if("open"===e&&t!==o&&(this.open?(this.#n.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#n.close()),"no-header"===e&&t!==o){let e=this.#n.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#n.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#n.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}"close-label"===e&&t!==o&&this.#a()}}connectedCallback(){this.#t("open"),this.#t("staticBackdrop"),this.#t("noHeader"),this.#t("noAnimations"),this.#t("noCloseButton"),this.#t("fullscreen"),this.#t("preserveOverflow"),this.#t("placement"),this.#t("closeLabel"),this.#n?.addEventListener("click",this.#i),this.#n?.addEventListener("close",this.#m),this.#n?.addEventListener("cancel",this.#h),this.#n?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#u),this.#r?.addEventListener("slotchange",this.#p),this.#o?.addEventListener("slotchange",this.#s),this.addEventListener("command",this.#c)}disconnectedCallback(){this.#l&&clearTimeout(this.#l),this.#n?.removeEventListener("click",this.#i),this.#n?.removeEventListener("close",this.#m),this.#n?.removeEventListener("cancel",this.#h),this.#n?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#u),this.#r?.removeEventListener("slotchange",this.#p),this.#o?.removeEventListener("slotchange",this.#s),this.removeEventListener("command",this.#c)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){this.toggleAttribute("static-backdrop",!!e)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){this.toggleAttribute("no-header",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){this.toggleAttribute("no-close-button",!!e)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){this.toggleAttribute("fullscreen",!!e)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(e){this.toggleAttribute("preserve-overflow",!!e)}get placement(){return this.getAttribute("placement")||"center"}set placement(e){this.setAttribute("placement",null!=e?e.toString():e)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(e){this.setAttribute("close-label",null!=e?e.toString():e)}#a(){if(null===this.#n)return;let e=this.#n.querySelector(".dialog__close");null!==e&&((this.#o?.assignedElements()||[])?.some(e=>e.textContent?.replace(/\s/g,"")!=="")?e.removeAttribute("aria-label"):e.setAttribute("aria-label",this.closeLabel))}#e(){this.#l||(this.#n?.classList.add("dialog--pulse"),this.#l=setTimeout(()=>{this.#n?.classList.remove("dialog--pulse"),clearTimeout(this.#l),this.#l=void 0},300))}#m=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#h=t=>{let o=this.#d(e.CLOSE_REQUEST_REASONS.ESCAPE_KEY);this.dispatchEvent(o),o.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#e())};#u=t=>{let o=this.#d(e.CLOSE_REQUEST_REASONS.CLOSE_BUTTON);this.dispatchEvent(o),o.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#e())};#i=t=>{let o=t.target,i=t.currentTarget,n=null;if(o===i?n=e.CLOSE_REQUEST_REASONS.BACKDROP_CLICK:o instanceof HTMLElement&&null!==o.closest("[data-me-close]")&&(n=e.CLOSE_REQUEST_REASONS.EXTERNAL_INVOKER),null!==n){let e=this.#d(n);this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#e():this.hide()}};#c=e=>{if("--me-open"!==e.command||this.open||this.show(),"--me-close"===e.command&&this.open){let e=this.#d("external-invoker");this.dispatchEvent(e),e.defaultPrevented?this.noAnimations||this.#e():this.hide()}};#p=()=>{if(null===this.#n)return;let e=this.#n.querySelector(".dialog__footer");if(null===e)return;let t=this.#r?.assignedNodes();e.hidden=!(t&&t.length>0)};#s=()=>{this.#a()};#d(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#t(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(t="modal-element"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var e5=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),e3=[".DS_Store","Thumbs.db"],e2=(e,t)=>{let o=(e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=(t.split(".").pop()||"").toLowerCase(),i=e5.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e})(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},e4=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),e9=async e=>{let t=[],o=await e4(e);for(;o.length>0;)t.push(...o),o=await e4(e);return t},e8=e=>new Promise((t,o)=>{e.file(o=>t(e2(o,e.fullPath)),o)}),e6=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e)if(e.isFile){let o=await e8(e);-1===e3.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await e9(e.createReader()))}return t},e7=async e=>{let t=[];for(let o of e)-1===e3.indexOf(o.name)&&t.push(e2(o));return t},te=async e=>e.dataTransfer?e.dataTransfer.items?await e6(e.dataTransfer.items):await e7(e.dataTransfer.files):await e7(e.target.files),tt=String.raw,to=String.raw,ti="files-dropzone",tn=document.createElement("template"),ta=tt`
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
    --dropzone-focus-shadow-rgb: 49, 132, 253;
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
    transition:
      border var(--dropzone-transition-duration) ease-in-out,
      background-color var(--dropzone-transition-duration) ease-in-out,
      color var(--dropzone-transition-duration) ease-in-out,
      box-shadow var(--dropzone-transition-duration) ease-in-out;
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
`;tn.innerHTML=to`
  <style>
    ${ta}
  </style>

  <input type="file" id="file-input" hidden />

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot><span>Drag 'n' drop files here, or click to select files</span></slot>
  </div>
`,(class e extends HTMLElement{static ERROR_CODES={FILE_DIALOG_OPEN_FAILED:"FILE_DIALOG_OPEN_FAILED",FILE_INPUT_CHANGE_FAILED:"FILE_INPUT_CHANGE_FAILED",DROP_EVENT_PROCESSING_FAILED:"DROP_EVENT_PROCESSING_FAILED",UNKNOWN_ERROR:"UNKNOWN_ERROR"};static REJECTION_CODES={TOO_MANY_FILES:"TOO_MANY_FILES",FILE_TOO_LARGE:"FILE_TOO_LARGE",FILE_TOO_SMALL:"FILE_TOO_SMALL",INVALID_MIME_TYPE:"INVALID_MIME_TYPE"};#t=null;#n=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(tn.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.getElementById("file-input"),this.#n=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?(this.#n?.removeAttribute("tabindex"),this.#n?.setAttribute("aria-disabled","true")):(this.#n?.setAttribute("tabindex","0"),this.#n?.setAttribute("aria-disabled","false"))),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple)}connectedCallback(){this.#l("accept"),this.#l("disabled"),this.#l("maxFiles"),this.#l("maxSize"),this.#l("minSize"),this.#l("multiple"),this.#l("autoFocus"),this.#l("noStyle"),this.#t?.addEventListener("change",this.#d),this.#n?.addEventListener("dragenter",this.#o),this.#n?.addEventListener("dragover",this.#e),this.#n?.addEventListener("dragleave",this.#h),this.#n?.addEventListener("drop",this.#m),this.#n?.addEventListener("click",this.#u),this.#n?.addEventListener("keyup",this.#g),this.autoFocus&&this.#n?.focus()}disconnectedCallback(){this.#t?.removeEventListener("change",this.#d),this.#n?.removeEventListener("dragenter",this.#o),this.#n?.removeEventListener("dragover",this.#e),this.#n?.removeEventListener("dragleave",this.#h),this.#n?.removeEventListener("drop",this.#m),this.#n?.removeEventListener("click",this.#u),this.#n?.removeEventListener("keyup",this.#g)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#r(e,t,o){let i=new CustomEvent(`${ti}-${e}`,{bubbles:!0,composed:!0,cancelable:!1,...o,detail:t});return this.dispatchEvent(i)}#a(e,t){this.#r("error",{code:e,error:t})}#d=async t=>{try{this.#i(await te(t))}catch(t){this.#a(e.ERROR_CODES.FILE_INPUT_CHANGE_FAILED,t)}};#o=()=>{this.disabled||this.#r("dragenter")};#e=e=>{if(e.preventDefault(),this.disabled){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#n&&(this.#n.classList.add("dropzone--dragover"),this.#n.part.add("dropzone--dragover")),this.#r("dragover")};#h=()=>{this.disabled||(this.#n&&(this.#n.classList.remove("dropzone--dragover"),this.#n.part.remove("dropzone--dragover")),this.#r("dragleave"))};#m=async t=>{if(!this.disabled){t.preventDefault(),this.#n&&(this.#n.classList.remove("dropzone--dragover"),this.#n.part.remove("dropzone--dragover"));try{this.#i(await te(t))}catch(t){this.#a(e.ERROR_CODES.DROP_EVENT_PROCESSING_FAILED,t)}}};#u=()=>{this.disabled||this.openFileDialog()};#g=e=>{this.disabled||(" "===e.key||"Enter"===e.key)&&this.openFileDialog()};#i(t){if(!Array.isArray(t)||!t.length)return;let o=[],i=[],n=t.length;if(!this.multiple&&n>1)for(let o of t)i.push({file:o,errors:[{code:e.REJECTION_CODES.TOO_MANY_FILES,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&n>this.maxFiles)for(let o of t)i.push({file:o,errors:[{code:e.REJECTION_CODES.TOO_MANY_FILES,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let n of t){let t=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,n=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(n,this.accept),a=n.size>this.maxSize,r=n.size<this.minSize;if(!t||a||r){let o=[];t||o.push({code:e.REJECTION_CODES.INVALID_MIME_TYPE,message:`File type "${n.type}" is not accepted.`}),a&&o.push({code:e.REJECTION_CODES.FILE_TOO_LARGE,message:`File size ${n.size} exceeds the maximum size of ${this.maxSize}.`}),r&&o.push({code:e.REJECTION_CODES.FILE_TOO_SMALL,message:`File size ${n.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:n,errors:o})}else o.push(n)}this.#r("drop",{acceptedFiles:o,rejectedFiles:i}),o.length>0&&this.#r("drop-accepted",{acceptedFiles:o}),i.length>0&&this.#r("drop-rejected",{rejectedFiles:i}),this.#t&&(this.#t.value=this.#t.defaultValue)}openFileDialog(){if(!(this.disabled||!this.#t)){if("showPicker"in HTMLInputElement.prototype&&"function"==typeof this.#t.showPicker){try{this.#t.showPicker()}catch(t){this.#a(e.ERROR_CODES.FILE_DIALOG_OPEN_FAILED,t)}return}this.#t.click()}}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t=ti){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var tr=String.raw,ts=class e extends EventTarget{#r=!1;#t=0;#n=0;#e=0;#o=0;#m=0;constructor(e){super();let{elapsed:t,duration:o}={elapsed:0,duration:1/0,...e};if("number"!=typeof t||Number.isNaN(t))throw TypeError("elapsed option must be a number");if("number"!=typeof o||Number.isNaN(o))throw TypeError("duration option must be a number");this.#r=!1,this.#t=Math.max(0,o),this.#n=Math.min(Math.max(0,t),this.#t),this.#e=this.#n,this.#o=0,this.#m=this.#n}#l(e){this.dispatchEvent(new Event(e))}#d=()=>{if(!this.#r)return;let t=e.now()-this.#o+this.#m;this.#n=Math.min(t,this.#t),this.#l("tick"),t<this.#t?requestAnimationFrame(this.#d):(this.#r=!1,this.#m=this.#n,this.#l("finish"))};on(e,t,o){return this.addEventListener(e,t,o),this}off(e,t,o){return this.removeEventListener(e,t,o),this}start(){return this.#r||this.#n>=this.#t||(this.#r=!0,this.#o=e.now(),this.#l("start"),requestAnimationFrame(this.#d)),this}stop(){return this.#r&&(this.#r=!1,this.#m=this.#n,this.#l("stop")),this}reset(){return this.#r=!1,this.#n=this.#e,this.#m=this.#e,this.#o=0,this.#l("reset"),this}time(){return{elapsed:this.#n,remaining:this.remaining}}get elapsed(){return this.#n}get remaining(){return Math.max(0,this.#t-this.#n)}get running(){return this.#r}static now(){return"performance"in window?performance.now():Date.now()}},tl="alert-element",td="alert-after-show",tc="alert-after-hide",tu=String.raw,th=String.raw,tm=((o=Object.assign(document.createElement("div"),{className:"alert-toast-stack"})).attachShadow({mode:"open"}).innerHTML=tr`
    <style>
      :host {
        display: contents;
        box-sizing: border-box;
      }

      :host *,
      :host *::before,
      :host *::after {
        box-sizing: inherit;
      }

      .stack {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
        width: 30rem;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        scrollbar-width: none;
      }

      @media (prefers-reduced-motion: no-preference) {
        .stack {
          scroll-behavior: smooth;
        }
      }

      .stack > ::slotted(*) {
        margin: 1rem;
      }
    </style>

    <div class="stack" part="base"><slot></slot></div>
  `,o),tp=th`
  :host {
    --alert-border-radius: 0.25rem;
    --alert-top-border-width: 0.1875rem;
    --alert-countdown-height: 0.1875rem;
    --alert-fg-color: #3f3f46;
    --alert-bg-color: #ffffff;
    --alert-border-color: #e4e4e7;
    --alert-base-variant-color: var(--alert-fg-color);
    --alert-info-variant-color: #0584c7;
    --alert-success-variant-color: #16a34a;
    --alert-neutral-variant-color: #52525b;
    --alert-warning-variant-color: #d87708;
    --alert-danger-variant-color: #dc2626;
    display: contents;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --alert-fg-color: #b6b6be;
      --alert-bg-color: #252528;
      --alert-border-color: #36363a;
      --alert-info-variant-color: #27bbfc;
      --alert-success-variant-color: #3ae075;
      --alert-neutral-variant-color: #8e8e9a;
      --alert-warning-variant-color: #ffbd11;
      --alert-danger-variant-color: #fe5c5c;
    }
  }

  :host([variant='info']) {
    --alert-base-variant-color: var(--alert-info-variant-color);
  }
  :host([variant='success']) {
    --alert-base-variant-color: var(--alert-success-variant-color);
  }
  :host([variant='neutral']) {
    --alert-base-variant-color: var(--alert-neutral-variant-color);
  }
  :host([variant='warning']) {
    --alert-base-variant-color: var(--alert-warning-variant-color);
  }
  :host([variant='danger']) {
    --alert-base-variant-color: var(--alert-danger-variant-color);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: center;
    margin: inherit;
    border: 1px solid var(--alert-border-color);
    border-top-width: var(--alert-top-border-width);
    border-top-color: var(--alert-base-variant-color);
    border-radius: var(--alert-border-radius);
    overflow: hidden;
    background-color: var(--alert-bg-color);
  }

  :host([countdown]) .alert {
    padding-bottom: var(--alert-countdown-height);
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--alert-base-variant-color);
    font-size: inherit;
    line-height: 0;
  }

  .alert__icon ::slotted(*) {
    margin-inline-start: 1rem;
  }

  .alert__message {
    flex: 1 1 auto;
    padding: 1.25rem;
    overflow: hidden;
    color: var(--alert-fg-color);
    line-height: 1.5;
  }

  .alert__close {
    display: flex;
    align-items: center;
    margin-inline-end: 1rem;
    padding: 0.5rem;
    border: none;
    line-height: 0;
    background: transparent;
    color: var(--alert-fg-color);
    font-size: inherit;
    cursor: pointer;
  }

  :host(:not([closable])) .alert__close {
    display: none !important;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: var(--alert-countdown-height);
    background-color: var(--alert-border-color);
  }

  .alert__countdown-elapsed {
    width: 100%;
    height: 100%;
    background-color: var(--alert-base-variant-color);
  }
`,tg=document.createElement("template");tg.innerHTML=tu`
  <style>
    ${tp}
  </style>

  <div class="alert" part="base" role="alert" hidden>
    <div class="alert__icon" part="icon">
      <slot name="icon"></slot>
    </div>
    <div class="alert__message" part="message"><slot></slot></div>
    <button type="button" class="alert__close" part="close" aria-label="Close">
      <slot name="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
          />
        </svg>
      </slot>
    </button>
    <div class="alert__countdown" part="countdown" hidden>
      <div class="alert__countdown-elapsed" part="countdown-elapsed"></div>
    </div>
  </div>
`,(class e extends HTMLElement{#r=!1;#t=null;#n=null;#e=null;#o=null;#m;static customAnimations;#l="api";#d=null;#b=null;#i=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tg.content.cloneNode(!0))}static get observedAttributes(){return["open","duration","close-label","announce","countdown"]}attributeChangedCallback(e,t,o){if(!(!this.#r||t===o))switch(e){case"open":this.open?(this.duration!==1/0&&this.#d?.start(),this.#t?.removeAttribute("hidden"),this.#i?.style.setProperty("width","100%"),this.#f("alert-show"),this.#v(this.#t)?.finished.finally(()=>{this.#f(td)})):(this.duration!==1/0&&this.#d?.reset(),this.#f("alert-hide",{reason:this.#l}),this.#y(this.#t)?.finished.finally(()=>{this.#t?.setAttribute("hidden",""),this.#f(tc,{reason:this.#l}),this.#l="api"}));break;case"duration":this.#d?.stop().off("tick",this.#u).off("finish",this.#h),this.#d=new ts({duration:this.duration}).on("tick",this.#u).on("finish",this.#h),this.open&&this.duration!==1/0&&!this.#w()&&this.#d.start(),this.duration===1/0&&this.#i?.style.setProperty("width","100%");break;case"close-label":this.#g();break;case"announce":"none"!==this.announce?this.#t?.setAttribute("role",this.announce):this.#t?.removeAttribute("role");break;case"countdown":this.#b?.toggleAttribute("hidden",!this.countdown)}}get closable(){return this.hasAttribute("closable")}set closable(e){this.toggleAttribute("closable",!!e)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get duration(){let e=this.getAttribute("duration");if(null===e||""===e)return 1/0;let t=Number(e);return t<=0?10:Number.isNaN(t)?1/0:t}set duration(e){this.setAttribute("duration",null!=e?e.toString():e)}get variant(){return this.getAttribute("variant")||""}set variant(e){this.setAttribute("variant",e)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(e){this.setAttribute("close-label",null!=e?e.toString():e)}get announce(){let e=this.getAttribute("announce");return"alert"===e||"status"===e||"none"===e?e:"alert"}set announce(e){this.setAttribute("announce",null!=e?e.toString():e)}get countdown(){return this.hasAttribute("countdown")}set countdown(e){this.toggleAttribute("countdown",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get customAnimations(){return this.#m}set customAnimations(e){this.#m=e}connectedCallback(){this.#a("closable"),this.#a("open"),this.#a("duration"),this.#a("variant"),this.#a("closeLabel"),this.#a("announce"),this.#a("countdown"),this.#a("noAnimations"),this.#a("customAnimations"),this.#t=this.shadowRoot?.querySelector(".alert")??null,this.#n=this.shadowRoot?.querySelector(".alert__close")??null,this.#e=this.shadowRoot?.querySelector('slot[name="close"]')??null,this.#b=this.shadowRoot?.querySelector(".alert__countdown")??null,this.#i=this.shadowRoot?.querySelector(".alert__countdown-elapsed")??null,this.#n?.addEventListener("click",this.#E),this.#e?.addEventListener("slotchange",this.#p),this.addEventListener("mouseenter",this.#s),this.addEventListener("mouseleave",this.#c),this.addEventListener("focusin",this.#s),this.addEventListener("focusout",this.#c),this.addEventListener("command",this.#k),this.#d=new ts({duration:this.duration}).on("tick",this.#u).on("finish",this.#h),this.open?(this.duration!==1/0&&this.#d?.start(),this.#t?.removeAttribute("hidden")):this.#t?.setAttribute("hidden",""),this.closeLabel&&this.#g(),"none"!==this.announce?this.#t?.setAttribute("role",this.announce):this.#t?.removeAttribute("role"),this.#b?.toggleAttribute("hidden",!this.countdown),this.#r=!0}disconnectedCallback(){this.#r=!1,this.#d?.stop().off("tick",this.#u).off("finish",this.#h),this.#d=null,this.#n?.removeEventListener("click",this.#E),this.#e?.removeEventListener("slotchange",this.#p),this.removeEventListener("mouseenter",this.#s),this.removeEventListener("mouseleave",this.#c),this.removeEventListener("focusin",this.#s),this.removeEventListener("focusout",this.#c),this.removeEventListener("command",this.#k)}connectedMoveCallback(){}#u=e=>{if(!this.countdown||!this.#i)return;let{remaining:t}=e.currentTarget;this.#i.style.width=`${t/this.duration*100}%`};#h=()=>{this.#l="timeout",this.open=!1};#E=()=>{this.closable&&(this.#l="user",this.open=!1)};#s=()=>{this.open&&this.duration!==1/0&&this.#d?.stop()};#c=()=>{!this.open||this.duration===1/0||this.#w()||this.#d?.start()};#p=()=>{this.#g()};#k=e=>{switch(e.command){case"--alert-show":this.open=!0;break;case"--alert-hide":this.#l="api",this.open=!1}};#g(){this.#n&&((this.#e?.assignedElements()||[])?.some(e=>e.textContent?.replace(/\s/g,"")!=="")?this.#n.removeAttribute("aria-label"):this.#n.setAttribute("aria-label",this.closeLabel))}#x(){let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o={show:{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}},hide:{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:250,easing:"ease"}}},i=this.customAnimations||e.customAnimations||{},n=t||this.noAnimations||null===this.customAnimations||null===e.customAnimations,a=e=>{let t=i[e]?.options??{},a=o[e].options;return{...a,...t,duration:n?0:t.duration??a.duration}};return{show:{keyframes:i.show?.keyframes??o.show.keyframes,options:a("show")},hide:{keyframes:i.hide?.keyframes??o.hide.keyframes,options:a("hide")}}}#v(e){let{keyframes:t,options:o}=this.#x().show;return e?.animate(t,o)}#y(e){let{keyframes:t,options:o}=this.#x().hide;return e?.animate(t,o)}#f(e,t=null){let o=new CustomEvent(e,{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(o)}#S(e,t){return new Promise(o=>{e.addEventListener(t,t=>{t.target===e&&o()},{once:!0})})}#w(){return this.matches(":focus-within")}show(){return this.open?Promise.resolve():(this.open=!0,this.#S(this,td))}hide(){return this.open?(this.open=!1,this.#S(this,tc)):Promise.resolve()}toast(e={}){if(e={forceRestart:!1,...e},this.#o){if(!e.forceRestart)return this.#o.promise;this.#o.resolve(),this.#o.cleanup()}let t=()=>{},o=new Promise(e=>t=e),i=()=>{this.#o?.resolve(),this.#o?.cleanup()};this.#o={promise:o,resolve:t,cleanup:()=>{this.removeEventListener(tc,i),this.parentNode===tm&&tm.removeChild(this),tm.querySelector(tl)||tm.remove(),this.open=!1,this.#o=null}},tm.parentElement||document.body.append(tm),tm.appendChild(this),this.#t?.setAttribute("data-toast",""),this.open=!0;let n=tm.shadowRoot?.querySelector(".stack");return n?.scrollTo({top:n.scrollHeight}),this.addEventListener(tc,i,{once:!0}),o}#a(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t=tl){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();let tb=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"],tf=(e="",t="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${o}${"string"==typeof t&&""!==t?"-"+t:""}`},tv=async(e={})=>{let t=await fetch(e.url),o=await t.blob(),i=e.mimeType||o.type||"";if(!tb.includes(i))throw Error(`This is not an accepted image format. Accepted MIME types are: ${tb.join(", ")}`);return new File([o],e.filename||"",o)},ty=localStorage,tw=new class{#A=null;#L=null;constructor(e,t=localStorage){if(!e)throw Error("Storage prefix is required");if(t!==localStorage&&t!==sessionStorage)throw Error("Storage provider is not supported");this.#A=e,this.#L=t}set(e,t){try{this.#L.setItem(`${this.#A}${e}`,JSON.stringify(t))}catch(e){console.error("Error saving to storage",e)}}get(e){try{let t=this.#L.getItem(`${this.#A}${e}`);return t?JSON.parse(t):null}catch(e){return console.error("Error getting from storage",e),null}}}("meme-generator/",ty);var tE={};tE=n("lRBOd");var tk={};tk=n("hOimC");var tx={};tx=n("c5nso");var tS={};tS=n("917SN");var tA={};tA=n("kCRYk");var tL={};tL=n("7mTjM");var tC={};tC=n("bNJU7");var t_={};t_=n("2zTNP");var tT={};tT=n("6U5us");var tj={};tj=n("jadM2");var tz={};tz=n("4rZHV");let tI=[{name:"Pressuru",label:"Pressuru",path:i(tE),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:i(tk),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:i(tx),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:i(tS),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:i(tA),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:i(tL),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:i(tC),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:i(t_),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:i(tT),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:i(tj),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:i(tz),style:"normal",weight:"400"}],tO=async(e,t,o={})=>{try{let i=new FontFace(e,`url(${t})`,{...o});await i.load(),document.fonts.add(i)}catch(e){console.error(e)}},t$={id:"",text:"",fillColor:"#ffffff",strokeColor:"#000000",font:"Pressuru",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:0,strokeWidth:1.5,offsetY:0,offsetX:0,rotate:0,allCaps:!0,textBackgroundEnabled:!1,textBackgroundColor:"#000000"},tM=new Map;class tR{constructor(e){let t=tf("textbox",Date.now().toString(36));this.data=e?{...e,id:t}:{...t$,id:t},tM.set(t,this),document.dispatchEvent(new CustomEvent("textbox-create",{bubbles:!0,composed:!0,detail:{textbox:this}}))}getData(){return this.data}static hasDefaultValues(e){for(let t of Object.keys(t$))if("id"!==t&&e[t]!==t$[t])return!1;return!0}static create(e){return new tR(e)}static getAll(){return tM}static getById(e){return tM.get(e)}static remove(e){tM.delete(e),document.dispatchEvent(new CustomEvent("textbox-remove",{bubbles:!0,composed:!0,detail:{id:e}}))}static createElement(e,t=!0){if(!(e instanceof tR))return;let o=e.getData(),{id:i,text:n,fillColor:a,strokeColor:r,fontSize:s,shadowBlur:l,strokeWidth:d,offsetX:c,offsetY:u,rotate:h,textBackgroundColor:m}=o,p=`
    <div class="d-flex align-items-center" data-section="basic-settings">
      <button type="button" class="btn btn-link" data-button="duplicate-text-box" title="Duplicate text box"></button>
      <button type="button" class="btn btn-link" data-button="delete-text-box" title="Remove text box"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="Text #${tM.size}">${n}</textarea>

      <div class="d-flex align-items-center pe-2">
        <label for="fillColorInput" class="visually-hidden">Fill color</label>
        <input class="form-control" type="color" value="${a}" id="fillColorInput_${i}" data-input="fillColor" title="Fill color">

        <label for="strokeColorInput" class="visually-hidden">Outline color</label>
        <input class="form-control" type="color" value="${r}" id="strokeColorInput_${i}" data-input="strokeColor" title="Outline color">

        <button type="button" class="btn btn-secondary settings-button" data-button="settings" title="Settings"></button>
      </div>
    </div>

    <div class="p-2" data-section="advanced-settings" hidden>
      <div class="row g-2">
        <div class="col-12">
          <details class="emoji-picker-details">
            <summary>Emoji picker</summary>
            <emoji-picker class="light"></emoji-picker>
          </details>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label for="fontInput_${i}" class="mb-1 d-block text-truncate">Font: </label>

          <select class="form-select" data-input="font" id="fontInput_${i}">
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
              ${tI.map(({name:e,label:t})=>`<option value="${e}">${t}</option>`)}
            </optgroup>
          </select>
        </div>

        <div class="col-4 mb-3">
          <label for="fontSizeInput_${i}" class="mb-1 d-block text-truncate">Size:</label>
          <input class="form-control" type="number" min="1" value="${s}" data-input="fontSize" id="fontSizeInput_${i}">
        </div>

        <div class="col-4 mb-3">
          <label for="fontWeightInput_${i}" class="mb-1 d-block text-truncate">Weight:</label>
          <select class="form-select" data-input="fontWeight" id="fontWeightInput_${i}">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label for="shadowWidthInput_${i}" class="mb-1 d-block text-truncate">Shadow size:</label>
          <input class="form-control" type="number" min="0" max="20" value="${l}" data-input="shadowBlur" id="shadowWidthInput_${i}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="strokeWidthInput_${i}">Outline size:</label>
          <input class="form-control" type="number" min="0" max="20" step="0.5" value="${d}" data-input="strokeWidth" id="strokeWidthInput_${i}">
        </div>

        <div class="col-4 mb-3">
          <label for="textAlignInput_${i}" class="mb-1 d-block text-truncate">Text align:</label>
          <select class="form-select" data-input="textAlign" id="textAlignInput_${i}">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetYInput_${i}">Vertical offset:</label>
          <input class="form-control" type="number" value="${u}" data-input="offsetY" id="offsetYInput_${i}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetXInput_${i}">Horizontal offset:</label>
          <input class="form-control" type="number" value="${c}" data-input="offsetX" id="offsetXInput_${i}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="textRotateInput_${i}">Rotate:</label>
          <input class="form-control" type="number" value="${h}" data-input="rotate" id="textRotateInput_${i}" min="-360" max="360">
        </div>

        <div class="col-12">
          <div class="move-text-actions mb-3">
            <button type="button" class="btn btn-secondary" data-action="move-text" aria-label="Up"></button>
            <button type="button" class="btn btn-secondary" data-action="move-text" aria-label="Right"></button>
            <button type="button" class="btn btn-secondary" data-action="move-text" aria-label="Down"></button>
            <button type="button" class="btn btn-secondary" data-action="move-text" aria-label="Left"></button>
          </div>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-12">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="allCapsCheckbox_${i}" data-input="allCaps">
            <label class="form-check-label" for="allCapsCheckbox_${i}">ALL CAPS</label>
          </div>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-12">
          <div class="d-flex align-items-center gap-3">
            <div class="form-check">
              <label class="form-check-label" for="textBackgroundEnabledInput_${i}">Enable text background</label>
              <input class="form-check-input" type="checkbox" role="switch" data-input="textBackgroundEnabled" id="textBackgroundEnabledInput_${i}">
            </div>

            <div>
              <label class="visually-hidden" for="textBackgroundColorInput_${i}">Background color:</label>
              <input class="border rounded p-0" type="color" value="${m}" data-input="textBackgroundColor" id="textBackgroundColorInput_${i}">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,g=document.createDocumentFragment(),b=document.createElement("div");b.setAttribute("id",i),b.setAttribute("data-section","textbox"),b.className="bg-body-tertiary border shadow-sm mb-3 rounded",b.innerHTML=p,b.querySelectorAll("select").forEach(e=>e.value=o[e.dataset.input]),b.querySelectorAll('input[type="checkbox"]').forEach(e=>e.checked=o[e.dataset.input]);let f=g.appendChild(b);return t&&setTimeout(()=>f.querySelector('[data-input="text"]').focus(),0),f}}class tB{#C=null;#_=null;constructor(e){this.#C=e,this.#_=this.#C.getContext("2d")}get width(){return this.#C.width}set width(e){this.#C.width=e}get height(){return this.#C.height}set height(e){this.#C.height=e}getDimensions(){return{width:this.width,height:this.height}}setDimensions({width:e,height:t}){return this.width=e,this.height=t,this}toDataURL(){return this.#C.toDataURL()}draw(e,t=new Map){if(null==e)return;let o=this.#C,i=this.#_;i.clearRect(0,0,o.width,o.height),"string"==typeof e?(i.fillStyle=e,i.fillRect(0,0,o.width,o.height)):i.drawImage(e,0,0,o.width,o.height);let n=0;return t.forEach(e=>{let{data:t}=e;n+=1,i.save(),i.font=`${t.fontWeight} ${t.fontSize*o.width/1e3}px ${t.font}`,i.textAlign=t.textAlign,i.strokeStyle=t.strokeColor;let a=o.width/2,r=t.shadowBlur,s=(!0===t.allCaps?t.text.toUpperCase():t.text).split("\n").filter(e=>""!==e.trim()),l=i.measureText(s[0]),d=l.actualBoundingBoxAscent+l.actualBoundingBoxDescent,c=t.textBackgroundEnabled?d/4:0,u=d+t.fontSize/4+c;i.translate(a+t.offsetX,u*n+t.offsetY),i.rotate(Math.min(t.rotate,360)*Math.PI/180),t.textBackgroundEnabled&&(i.fillStyle=t.textBackgroundColor,s.forEach((e,o)=>{if(e){let n=i.measureText(e),a=n.width,r=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,s="left"===t.textAlign?0:"right"===t.textAlign?-a:-a/2;i.fillRect(s-c,o*u-r-c,a+2*c,r+2*c)}})),i.save(),0!==r&&(i.shadowOffsetX=0,i.shadowOffsetY=0,i.shadowBlur=Math.min(r,20),i.shadowColor=t.strokeColor),i.fillStyle=t.fillColor,s.forEach((e,t)=>i.fillText(e,0,t*u)),i.restore(),t.strokeWidth>0&&(i.lineWidth=Math.min(t.strokeWidth,20),s.forEach((e,t)=>i.strokeText(e,0,t*u))),i.restore()}),this}clear(){return this.#_.clearRect(0,0,this.#C.width,this.#C.height),this}show(){return this.#C.hidden=!1,this}hide(){return this.#C.hidden=!0,this}static createInstance(e){return new tB(e)}}function tN(e,t={}){var o;let i,n={duration:5e3,variant:"neutral",countdown:!0,icon:"",...t},a={info:`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
      </svg>
    `,success:`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
      </svg>
    `,warning:`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
      </svg>
    `,danger:`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg>
    `}[n.icon||n.variant]||"";return Object.assign(document.createElement("alert-element"),{closable:!0,duration:n.duration,variant:n.variant,countdown:n.countdown,innerHTML:`${a?`<span slot="icon">${a}</span>`:""}${n.trustDangerousInnerHTML?e:(o=e,(i=document.createElement("div")).textContent=o,i.innerHTML)}`}).toast()}let tD=tB.createInstance(document.getElementById("canvas")),tF=document.getElementById("videoModal"),tP=document.getElementById("downloadModal"),tH=document.querySelector("capture-photo"),tq=document.getElementById("cameraSelect"),tU=document.getElementById("capturePhotoButton"),tV=document.getElementById("torchButton"),tW=document.querySelector("files-dropzone"),tG=document.getElementById("instructions"),tK=document.getElementById("imageUploadMethodSelect"),tY=document.getElementById("fileSelectBtn"),tX=document.getElementById("imageUrlForm"),tJ=document.getElementById("addTextboxBtn"),tQ=document.getElementById("textboxesContainer"),tZ=document.getElementById("generateMemeBtn"),t0=document.getElementById("openVideoModalBtn"),t1=document.getElementById("downloadMemeBtn"),t5=document.getElementById("downloadMemePreview"),t3=document.querySelector("web-share"),t2=document.getElementById("gallery"),t4=document.getElementById("gallerySearch"),t9=t2.querySelector(".gallery__no-results"),t8=document.getElementById("solidColorForm"),t6=document.querySelectorAll(".upload-method"),t7=document.getElementById("removeConfirmationModal"),oe=document.getElementById("removeTextForm"),ot=document.getElementById("maxImageDimensionsForm"),oo=ot.maxImageDimensions,oi=document.getElementById("clearCanvasBtn"),on=tw.get("maxImageDimensions"),oa=!1,or=null,os=null;async function ol(){let e=tD.toDataURL("image/png"),t=`${tf("meme")}.png`,o=e.replace("image/png","image/octet-stream");if(t1.download=t,t1.href=o,t5.width=tD.getDimensions().width,t5.height=tD.getDimensions().height,t5.src=o,eK())try{let o=await tv({url:e,filename:t,mimeType:"image/png"}).catch(e=>{tN(`<strong>Error preparing meme for sharing</strong><br><small>${e.message}</small>`,{trustDangerousInnerHTML:!0,variant:"danger"})});o&&eK({files:[o]})&&(t3.shareFiles=[o],t3.hidden=!1)}catch(e){console.error(e)}window.requestAnimationFrame(()=>{tP.open=!0})}function od(e){let[t,o]=ot.maxImageDimensions.value.split("x"),i=Number(t)||800,n=Number(o)||600,a=e.width,r=e.height;a>r?a>i&&(r*=i/a,a=i):r>n&&(a*=n/r,r=n),tD.setDimensions({width:a,height:r})}function oc(){tD.draw(or,tR.getAll()).show(),tW.classList.add("dropzone--accepted"),tW.disabled=!0,tZ.disabled=!1,tG.hidden=!0,oi.hidden=!1}function ou(e){od(or=e.target),oc()}function oh(e){if(!e)return;let t=new Image,o=new FileReader;o.addEventListener("load",function(e){let o=e.target.result;t.addEventListener("load",ou),t.src=o}),o.readAsDataURL(e)}function om(e,t,o){let i=tR.getById(t).getData();switch(e.type){case"checkbox":i[o]=e.checked;break;case"number":i[o]=Number(e.value);break;default:i[o]=e.value}tD.draw(or,tR.getAll())}async function op(e){e.preventDefault();let t=e.target,o=t.querySelector('button[type="submit"]'),i=t.imageUrl.value,n=`<strong>Error loading image</strong><br><small class="d-block text-truncate">Failed to fetch image from ${i||""}.</small>`;if(i.trim()){o.disabled=!0,o.querySelector(".spinner").hidden=!1,o.querySelector(".label").hidden=!0;try{let e=await tv({url:i}).catch(()=>{tN(n,{trustDangerousInnerHTML:!0,variant:"danger"})});e&&oh(e)}catch{tN(n,{trustDangerousInnerHTML:!0,variant:"danger"})}finally{o.disabled=!1,o.querySelector(".spinner").hidden=!0,o.querySelector(".label").hidden=!1}}}function og(e,t){return function(){let o=document.getElementById(e),i=o.querySelector('[data-input="offsetY"]'),n=o.querySelector('[data-input="offsetX"]'),a=tR.getById(e);if(!a)return;let r=a.getData();switch(t=t.toLowerCase()){case"up":r.offsetY-=1,i.value=r.offsetY;break;case"down":r.offsetY+=1,i.value=r.offsetY;break;case"left":r.offsetX-=1,n.value=r.offsetX;break;case"right":r.offsetX+=1,n.value=r.offsetX}tD.draw(or,tR.getAll()),os=requestAnimationFrame(og(e,t))}}async function ob(e){let t=e.target.closest("button");if(!t)return;let o=t.querySelector("img"),i=`<strong>Error loading image</strong><br><small>Failed to load image: "${o.alt||""}".</small>`;try{let e=await tv({url:o.src}).catch(()=>{tN(i,{trustDangerousInnerHTML:!0,variant:"danger"})});e&&oh(e)}catch{tN(i,{trustDangerousInnerHTML:!0,variant:"danger"})}}function of(e={}){let{el:t,isTorchOn:o}={...{el:document.getElementById("torchButton"),isTorchOn:!1},...e},i=t.querySelectorAll("svg path");2===i.length&&(i[0].style.display=o?"none":"block",i[1].style.display=o?"block":"none",t.setAttribute("aria-label",`Turn ${o?"off":"on"} flash`))}async function ov(e){let t=e.target.getTrackCapabilities();t?.torch&&(tV?.removeAttribute("hidden"),tH?.hasAttribute("torch")&&of({el:tV,isTorchOn:!0}));let o=await eG.getVideoInputDevices();o.forEach((e,t)=>{let o=document.createElement("option");o.value=e.deviceId,o.textContent=e.label||`Camera ${t+1}`,tq.appendChild(o)}),o.length>1&&tq?.removeAttribute("hidden")}document.addEventListener("tt-theme-change",function(e){let t=e.detail.theme,o=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-bs-theme","system"===t?o:t)}),document.addEventListener("web-share:error",function(){tP.open=!1,tN("<strong>Error sharing</strong><br><small>There was an error while trying to share your meme.</small>",{trustDangerousInnerHTML:!0,variant:"danger"})}),document.addEventListener("capture-photo:video-play",ov,{once:!0}),document.addEventListener("capture-photo:error",function(e){let t=e.detail.error,o="An error occurred while trying to capture photo.";t instanceof Error&&("NotAllowedError"===t.name||"NotFoundError"===t.name)&&(o+=" Make sure you have a camera connected and you have granted the appropriate permissions."),tN(`<strong>Error capturing photo</strong><br><small>${o}</small>`,{trustDangerousInnerHTML:!0,variant:"danger"}),tF.open=!1,console.error(t)}),document.addEventListener("capture-photo:success",function(e){tF.open=!1;let t=new Image;t.addEventListener("load",ou),t.src=e.detail.dataURI}),document.addEventListener("me-open",function(e){"videoModal"===e.target.id&&tH&&"function"==typeof tH.startVideoStream&&tH.startVideoStream()}),document.addEventListener("me-close",function(e){"videoModal"===e.target.id&&tH&&"function"==typeof tH.stopVideoStream&&tH.stopVideoStream(),"removeConfirmationModal"===e.target.id&&oe.reset()}),document.addEventListener("emoji-click",function(e){let t=e.target.closest('[data-section="textbox"]');if(t){let o=t.querySelector('[data-input="text"]'),i=e.detail.unicode;o&&eq(o,i)}}),document.addEventListener("textbox-create",function(e){let t=e.detail.textbox,o=tR.createElement(t,oa);oa=!0,tQ.appendChild(o),t.getData().text&&tD.draw(or,tR.getAll())}),document.addEventListener("textbox-remove",function(e){let t=document.getElementById(e.detail.id);t&&t.remove(),tQ.querySelectorAll('[data-section="textbox"]').forEach((e,t)=>{e.querySelector('[data-input="text"]').setAttribute("placeholder",`Text #${t+1}`)}),tD.draw(or,tR.getAll())}),tY.addEventListener("click",function(){"function"==typeof tW.openFileDialog&&(tW.disabled=!1,tW.openFileDialog())}),t0.addEventListener("click",function(){tF.open=!0}),tJ.addEventListener("click",function(){return tR.create()}),tZ.addEventListener("click",ol),t1.addEventListener("click",()=>tP.open=!1),tX.addEventListener("submit",op),tW.addEventListener("files-dropzone-drop-accepted",function(e){let[t]=e.detail.acceptedFiles;t&&oh(t)}),tQ.addEventListener("input",function(e){let t=e.target,o={text:"text",fillColor:"fillColor",strokeColor:"strokeColor",font:"font",fontSize:"fontSize",fontWeight:"fontWeight",textAlign:"textAlign",shadowBlur:"shadowBlur",offsetY:"offsetY",offsetX:"offsetX",rotate:"rotate",strokeWidth:"strokeWidth",textBackgroundEnabled:"textBackgroundEnabled",textBackgroundColor:"textBackgroundColor"}[t.dataset.input];if(!o)return;let i=t.closest('[data-section="textbox"]').id;om(t,i,o)}),tQ.addEventListener("change",function(e){let t,o=e.target,i=o.closest('[data-section="textbox"]').id;o.matches('[data-input="allCaps"]')&&(t="allCaps"),t&&om(o,i,t)}),tQ.addEventListener("click",function(e){let t=e.target;if(t.matches('[data-button="settings"]')){let e=t.closest('[data-section="textbox"]'),o=e?.querySelector('[data-section="advanced-settings"]');o&&(o.hidden=!o.hidden)}if(t.matches('[data-button="duplicate-text-box"')){let e=t.closest('[data-section="textbox"]'),o=tR.getById(e.id);tR.create({...o.data})}if(t.matches('[data-button="delete-text-box"]')){let e=t.closest('[data-section="textbox"]').id,o=tR.getById(e);if(o&&o.data.text.trim()){let t=oe["textbox-id"];t&&(t.value=e,t7.open=!0)}else tR.remove(e)}}),tQ.addEventListener("pointerdown",function(e){let t=e.target,o=t.closest('[data-section="textbox"]');o&&t.matches('[data-action="move-text"]')&&(os=requestAnimationFrame(og(o.id,t.getAttribute("aria-label"))))}),tQ.addEventListener("pointerup",function(e){e.target.matches('[data-action="move-text"]')&&(cancelAnimationFrame&&cancelAnimationFrame(os),os=null)}),tQ.addEventListener("pointerout",function(e){e.target.matches('[data-action="move-text"]')&&(cancelAnimationFrame&&cancelAnimationFrame(os),os=null)}),tQ.addEventListener("keydown",function(e){let t=e.target,o=t.closest('[data-section="textbox"]');t.matches('[data-action="move-text"]')&&(" "===e.key||"Enter"===e.key)&&(os&&cancelAnimationFrame(os),os=requestAnimationFrame(og(o.id,t.getAttribute("aria-label"))))}),tQ.addEventListener("keyup",function(e){e.target.matches('[data-action="move-text"]')&&(" "===e.key||"Enter"===e.key)&&(os&&cancelAnimationFrame(os),os=null)}),tK.addEventListener("change",function(e){t6.forEach(t=>t.hidden=t.id!==e.target.value),ot.hidden="solidColorForm"===e.target.value}),t2.addEventListener("click",ob),t4.addEventListener("input",function(e){let t=e.target.value.toLowerCase().trim();t2.querySelectorAll("button").forEach(e=>{let o=(e.querySelector("img").getAttribute("alt")||"").toLowerCase();e.hidden=!o.includes(t)}),t9.hidden=!!t2.querySelector("button:not([hidden])")}),t8.addEventListener("input",function(e){e.target===t8.canvasColor&&(or=e.target.value),"string"==typeof or&&(tD.setDimensions({width:Number(t8.canvasWidth.value)||800,height:Number(t8.canvasHeight.value)||600}),oc())}),oe.addEventListener("submit",function(e){e.preventDefault();let t=e.target["textbox-id"].value;t&&(tR.remove(t),t7.open=!1)}),ot.addEventListener("change",function(e){e.target.matches('[name="maxImageDimensions"]')&&tw.set("maxImageDimensions",e.target.value),!or||"string"==typeof or||(od(or),tD.draw(or,tR.getAll()))}),oi.addEventListener("click",function(e){or&&(e.stopPropagation(),or=null,tW.classList.remove("dropzone--accepted"),tZ.disabled=!0,tG.hidden=!1,oi.hidden=!0,tW.disabled=!1,tD.clear().hide())}),tq.addEventListener("change",function(e){if(null===tH||"function"!=typeof tH.restartVideoStream||tH.hasAttribute("loading"))return;let t=e.target.value||void 0;tH.restartVideoStream(t)}),tU.addEventListener("click",function(){null===tH||"function"!=typeof tH.capture||tH.hasAttribute("loading")||tH.capture()}),tV.addEventListener("click",function(e){null!==tH&&(tH.torch=!tH.torch,of({el:e.currentTarget,isTorchOn:tH.hasAttribute("torch")}))}),window.addEventListener("beforeunload",function(e){(function(){let e=null!==or;for(let t of tR.getAll().values())if(!tR.hasDefaultValues(t.data)){e=!0;break}return e})()&&(e.preventDefault(),e.returnValue=!0)}),t2.querySelectorAll("button > img")?.forEach(e=>{e.setAttribute("title",e.getAttribute("alt"))}),tR.create(),tW.accept=tb,function(e,t){if(!t)return;let o=e.map(e=>e.split("/")[1]),i=`Supported image formats: ${o.join(", ")}`,n=document.createElement("div"),a=document.createElement("small");a.textContent=i,n.appendChild(a),t.appendChild(a)}(tb,tG),tI.forEach(({name:e,path:t,style:o,weight:i})=>{tO(e,t,{style:o,weight:i})}),on&&(oo.value=on),oo.disabled=!1;
//# sourceMappingURL=meme-generator.49a4ca49.js.map
