!function(){let e,t;function o(e){return e&&e.__esModule?e.default:e}var i,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},s=n.parcelRequire5078;function l(e){if("string"!=typeof e||!e)throw Error("expected a non-empty string, got: "+e)}function d(e){if("number"!=typeof e)throw Error("expected a number, got: "+e)}null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequire5078=s),s.register;let c="emoji",u="keyvalue",h="favorites",m="tokens",p="count",g="group-order",b="eTag",f="skinTone",v="readonly",y="readwrite",w="skinUnicodes";function k(e){return function(e,t){let o=new Set,i=[];for(let n of e){let e=t(n);o.has(e)||(o.add(e),i.push(n))}return i}(e,e=>e.unicode)}let E={},x={},S={};function C(e,t,o){o.onerror=()=>t(o.error),o.onblocked=()=>t(Error("IDB blocked")),o.onsuccess=()=>e(o.result)}async function j(e){let t=await new Promise((t,o)=>{let i=indexedDB.open(e,1);E[e]=i,i.onupgradeneeded=e=>{e.oldVersion<1&&function(e){function t(t,o,i){let n=o?e.createObjectStore(t,{keyPath:o}):e.createObjectStore(t);if(i)for(let[e,[t,o]]of Object.entries(i))n.createIndex(e,t,{multiEntry:o});return n}t(u),t(c,"unicode",{[m]:["tokens",!0],[g]:[["group","order"]],[w]:["skinUnicodes",!0]}),t(h,void 0,{[p]:[""]})}(i.result)},C(t,o,i)});return t.onclose=()=>A(e),t}function T(e,t,o,i){return new Promise((n,a)=>{let r;let s=e.transaction(t,o,{durability:"relaxed"});i("string"==typeof t?s.objectStore(t):t.map(e=>s.objectStore(e)),s,e=>{r=e}),s.oncomplete=()=>n(r),s.onerror=()=>a(s.error)})}function A(e){let t=E[e],o=t&&t.result;if(o){o.close();let t=S[e];if(t)for(let e of t)e()}delete E[e],delete x[e],delete S[e]}let L=new Set([":D","XD",":'D","O:)",":X",":P",";P","XP",":L",":Z",":j","8D","XO","8)",":B",":O",":S",":'o","Dx","X(","D:",":C",">0)",":3","</3","<3","\\M/",":E","8#"]);function z(e){return e.split(/[\s_]+/).map(e=>!e.match(/\w/)||L.has(e)?e.toLowerCase():e.replace(/[)(:,]/g,"").replace(/’/g,"'").toLowerCase()).filter(Boolean)}function D(e){return e.filter(Boolean).map(e=>e.toLowerCase()).filter(e=>e.length>=2)}function _(e,t,o,i){e[t](o).onsuccess=e=>i&&i(e.target.result)}function $(e,t,o){_(e,"get",t,o)}function I(e,t,o){_(e,"getAll",t,o)}function B(e){e.commit&&e.commit()}function R(e,t){let o=function(e,t){let o=e[0];for(let i=1;i<e.length;i++){let n=e[i];t(o)>t(n)&&(o=n)}return o}(e,e=>e.length),i=[];for(let n of o)e.some(e=>-1===e.findIndex(e=>t(e)===t(n)))||i.push(n);return i}async function M(e){return!await W(e,u,"url")}async function N(e,t,o){let[i,n]=await Promise.all([b,"url"].map(t=>W(e,u,t)));return i===o&&n===t}async function F(e,t){return T(e,c,v,(e,o,i)=>{let n;let a=()=>{e.getAll(n&&IDBKeyRange.lowerBound(n,!0),50).onsuccess=e=>{let o=e.target.result;for(let e of o)if(n=e.unicode,t(e))return i(e);if(o.length<50)return i();a()}};a()})}async function O(e,t,o,i){{let n=t.map(({annotation:e,emoticon:t,group:o,order:i,shortcodes:n,skins:a,tags:r,emoji:s,version:l})=>{let d=[...new Set(D([...(n||[]).map(z).flat(),...r.map(z).flat(),...z(e),t]))].sort(),c={annotation:e,group:o,order:i,tags:r,tokens:d,unicode:s,version:l};if(t&&(c.emoticon=t),n&&(c.shortcodes=n),a)for(let{tone:e,emoji:t,version:o}of(c.skinTones=[],c.skinUnicodes=[],c.skinVersions=[],a))c.skinTones.push(e),c.skinUnicodes.push(t),c.skinVersions.push(o);return c});await T(e,[c,u],y,([e,t],a)=>{let r,s;let l=0;function d(){2==++l&&function(){if(r!==i||s!==o){for(let t of(e.clear(),n))e.put(t);t.put(i,b),t.put(o,"url"),B(a)}}()}$(t,b,e=>{r=e,d()}),$(t,"url",e=>{s=e,d()})})}}async function P(e,t){return T(e,c,v,(e,o,i)=>{let n=IDBKeyRange.bound([t,0],[t+1,0],!1,!0);I(e.index(g),n,i)})}async function U(e,t){let o=D(z(t));return o.length?T(e,c,v,(e,t,i)=>{let n=[],a=()=>{n.length===o.length&&r()},r=()=>{i(R(n,e=>e.unicode).sort((e,t)=>e.order<t.order?-1:1))};for(let t=0;t<o.length;t++){let i=o[t],r=t===o.length-1?IDBKeyRange.bound(i,i+"￿",!1,!0):IDBKeyRange.only(i);I(e.index(m),r,e=>{n.push(e),a()})}}):[]}async function q(e,t){let o=await U(e,t);return o.length?o.filter(e=>(e.shortcodes||[]).map(e=>e.toLowerCase()).includes(t.toLowerCase()))[0]||null:await F(e,e=>(e.shortcodes||[]).includes(t.toLowerCase()))||null}async function H(e,t){return T(e,c,v,(e,o,i)=>$(e,t,o=>{if(o)return i(o);$(e.index(w),t,e=>i(e||null))}))}function W(e,t,o){return T(e,t,v,(e,t,i)=>$(e,o,i))}let V=["name","url"];function G(e){!function(e){let t=e&&Array.isArray(e),o=t&&e.length&&(!e[0]||V.some(t=>!(t in e[0])));if(!t||o)throw Error("Custom emojis are in the wrong format")}(e);let t=(e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1,o=e.sort(t),i=function(e,t){let o=new Map;for(let i of e)for(let e of t(i)){let t=o;for(let o=0;o<e.length;o++){let i=e.charAt(o),n=t.get(i);n||(n=new Map,t.set(i,n)),t=n}let n=t.get("");n||(n=[],t.set("",n)),n.push(i)}return(e,t)=>{let i=o;for(let t=0;t<e.length;t++){let o=e.charAt(t),n=i.get(o);if(!n)return[];i=n}if(t)return i.get("")||[];let n=[],a=[i];for(;a.length;)for(let[e,t]of[...a.shift().entries()].sort((e,t)=>e[0]<t[0]?-1:1))""===e?n.push(...t):a.push(t);return n}}(e,e=>[...new Set((e.shortcodes||[]).map(e=>z(e)).flat())]),n=e=>i(e,!0),a=e=>i(e,!1),r=new Map,s=new Map;for(let t of e)for(let e of(s.set(t.name.toLowerCase(),t),t.shortcodes||[]))r.set(e.toLowerCase(),t);return{all:o,search:e=>{let o=z(e);return R(o.map((e,t)=>(t<o.length-1?n:a)(e)),e=>e.name).sort(t)},byShortcode:e=>r.get(e.toLowerCase()),byName:e=>s.get(e.toLowerCase())}}let X="undefined"!=typeof wrappedJSObject;function Y(e){if(!e)return e;if(X&&(e=structuredClone(e)),delete e.tokens,e.skinTones){let t=e.skinTones.length;e.skins=Array(t);for(let o=0;o<t;o++)e.skins[o]={tone:e.skinTones[o],unicode:e.skinUnicodes[o],version:e.skinVersions[o]};delete e.skinTones,delete e.skinUnicodes,delete e.skinVersions}return e}function J(e){e||console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.")}let K=["annotation","emoji","group","order","tags","version"];function Q(e,t){if(2!==Math.floor(e.status/100))throw Error("Failed to fetch: "+t+":  "+e.status)}async function Z(e){let t=await fetch(e,{method:"HEAD"});Q(t,e);let o=t.headers.get("etag");return J(o),o}async function ee(e){let t=await fetch(e);Q(t,e);let o=t.headers.get("etag");J(o);let i=await t.json();return!function(e){if(!e||!Array.isArray(e)||!e[0]||"object"!=typeof e[0]||K.some(t=>!(t in e[0])))throw Error("Emoji data is in the wrong format")}(i),[o,i]}async function et(e){let t=function(e){for(var t=e.length,o=new ArrayBuffer(t),i=new Uint8Array(o),n=-1;++n<t;)i[n]=e.charCodeAt(n);return o}(JSON.stringify(e));return btoa(function(e){for(var t="",o=new Uint8Array(e),i=o.byteLength,n=-1;++n<i;)t+=String.fromCharCode(o[n]);return t}(await crypto.subtle.digest("SHA-1",t)))}async function eo(e,t){let o;let i=await Z(t);if(!i){let e=await ee(t);i=e[0],o=e[1],i||(i=await et(o))}await N(e,t,i)||(o||(o=(await ee(t))[1]),await O(e,o,t,i))}async function ei(e,t){let[o,i]=await ee(t);o||(o=await et(i)),await O(e,i,t,o)}class en{constructor({dataSource:e="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",locale:t="en",customEmoji:o=[]}={}){this.dataSource=e,this.locale=t,this._dbName=`emoji-picker-element-${this.locale}`,this._db=void 0,this._lazyUpdate=void 0,this._custom=G(o),this._clear=this._clear.bind(this),this._ready=this._init()}async _init(){var e,t,o;let i;let n=this._db=await (x[e=this._dbName]||(x[e]=j(e)),x[e]);t=this._dbName,o=this._clear,(i=S[t])||(i=S[t]=[]),i.push(o);let a=this.dataSource;await M(n)?await ei(n,a):this._lazyUpdate=eo(n,a)}async ready(){let e=async()=>(this._ready||(this._ready=this._init()),this._ready);await e(),this._db||await e()}async getEmojiByGroup(e){return d(e),await this.ready(),k(await P(this._db,e)).map(Y)}async getEmojiBySearchQuery(e){return l(e),await this.ready(),[...this._custom.search(e),...k(await U(this._db,e)).map(Y)]}async getEmojiByShortcode(e){return l(e),await this.ready(),this._custom.byShortcode(e)||Y(await q(this._db,e))}async getEmojiByUnicodeOrName(e){return l(e),await this.ready(),this._custom.byName(e)||Y(await H(this._db,e))}async getPreferredSkinTone(){return await this.ready(),await W(this._db,u,f)||0}async setPreferredSkinTone(e){return d(e),await this.ready(),T(this._db,u,y,(t,o)=>{t.put(e,f),B(o)})}async incrementFavoriteEmojiCount(e){return l(e),await this.ready(),T(this._db,h,y,(t,o)=>$(t,e,i=>{t.put((i||0)+1,e),B(o)}))}async getTopFavoriteEmoji(e){var t,o;return d(e),await this.ready(),(await (t=this._db,o=this._custom,0===e?[]:T(t,[h,c],v,([t,i],n,a)=>{let r=[];t.index(p).openCursor(void 0,"prev").onsuccess=t=>{let n=t.target.result;if(!n)return a(r);function s(t){if(r.push(t),r.length===e)return a(r);n.continue()}let l=n.primaryKey,d=o.byName(l);if(d)return s(d);$(i,l,e=>{if(e)return s(e);n.continue()})}}))).map(Y)}set customEmoji(e){this._custom=G(e)}get customEmoji(){return this._custom.all}async _shutdown(){await this.ready();try{await this._lazyUpdate}catch(e){}}_clear(){this._db=this._ready=this._lazyUpdate=void 0}async close(){await this._shutdown(),await A(this._dbName)}async delete(){var e;await this._shutdown(),await (e=this._dbName,new Promise((t,o)=>{A(e),C(t,o,indexedDB.deleteDatabase(e))}))}}let ea=[[-1,"✨","custom"],[0,"\uD83D\uDE00","smileys-emotion"],[1,"\uD83D\uDC4B","people-body"],[3,"\uD83D\uDC31","animals-nature"],[4,"\uD83C\uDF4E","food-drink"],[5,"\uD83C\uDFE0️","travel-places"],[6,"⚽","activities"],[7,"\uD83D\uDCDD","objects"],[8,"⛔️","symbols"],[9,"\uD83C\uDFC1","flags"]].map(([e,t,o])=>({id:e,emoji:t,name:o})),er=ea.slice(1),es="function"==typeof requestIdleCallback?requestIdleCallback:setTimeout;function el(e){return e.unicode.includes("‍")}let ed={"\uD83E\uDEE8":15.1,"\uD83E\uDEE0":14,"\uD83E\uDD72":13.1,"\uD83E\uDD7B":12.1,"\uD83E\uDD70":11,"\uD83E\uDD29":5,"\uD83D\uDC71‍♀️":4,"\uD83E\uDD23":3,"\uD83D\uDC41️‍\uD83D\uDDE8️":2,"\uD83D\uDE00":1,"\uD83D\uDE10️":.7,"\uD83D\uDE03":.6},ec=["\uD83D\uDE0A","\uD83D\uDE12","❤️","\uD83D\uDC4D️","\uD83D\uDE0D","\uD83D\uDE02","\uD83D\uDE2D","☺️","\uD83D\uDE14","\uD83D\uDE29","\uD83D\uDE0F","\uD83D\uDC95","\uD83D\uDE4C","\uD83D\uDE18"],eu='"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',eh=(e,t)=>e<t?-1:e>t?1:0,em=(e,t)=>{let o=document.createElement("canvas");o.width=o.height=1;let i=o.getContext("2d");return i.textBaseline="top",i.font=`100px ${eu}`,i.fillStyle=t,i.scale(.01,.01),i.fillText(e,0,0),i.getImageData(0,0,1,1).data},ep=(e,t)=>{let o=[...e].join(",");return o===[...t].join(",")&&!o.startsWith("0,0,0,")},eg=()=>(e||(e=new Promise(e=>es(()=>e(function(){let e=Object.entries(ed);try{for(let[t,o]of e)if(function(e){let t=em(e,"#000"),o=em(e,"#fff");return t&&o&&ep(t,o)}(t))return o}catch(e){}finally{}return e[0][1]}())))),e),eb=new Map;function ef(e){e.preventDefault(),e.stopPropagation()}function ev(e,t,o){return(t+=e?-1:1)<0?t=o.length-1:t>=o.length&&(t=0),t}function ey(e,t){let o=new Set,i=[];for(let n of e){let e=t(n);o.has(e)||(o.add(e),i.push(n))}return i}let ew=requestAnimationFrame,ek="function"==typeof ResizeObserver;function eE(e){{let t=document.createRange();return t.selectNode(e.firstChild),t.getBoundingClientRect().width}}function ex(e,t,o){let i=e.get(t);return i||(i=o(),e.set(t,i)),i}let eS=new WeakMap,eC=new WeakMap,ej=Symbol("un-keyed"),eT="replaceChildren"in Element.prototype,eA="function"==typeof queueMicrotask?queueMicrotask:e=>Promise.resolve().then(e);function eL(e,t,o){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!o(e[i],t[i]))return!1;return!0}let ez=[],{assign:eD}=Object;var e_={categoriesLabel:"Categories",emojiUnsupportedMessage:"Your browser does not support color emoji.",favoritesLabel:"Favorites",loadingMessage:"Loading…",networkErrorMessage:"Could not load emoji.",regionLabel:"Emoji picker",searchDescription:"When search results are available, press up or down to select and enter to choose.",searchLabel:"Search",searchResultsLabel:"Search results",skinToneDescription:"When expanded, press up or down to select and enter to choose.",skinToneLabel:"Choose a skin tone (currently {skinTone})",skinTonesLabel:"Skin tones",skinTones:["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],categories:{custom:"Custom","smileys-emotion":"Smileys and emoticons","people-body":"People and body","animals-nature":"Animals and nature","food-drink":"Food and drink","travel-places":"Travel and places",activities:"Activities",objects:"Objects",symbols:"Symbols",flags:"Flags"}};let e$=["customEmoji","customCategorySorting","database","dataSource","i18n","locale","skinToneEmoji","emojiVersion"],eI=`:host{--emoji-font-family:${eu}}`;class eB extends HTMLElement{constructor(e){super(),this.attachShadow({mode:"open"});let t=document.createElement("style");for(let o of(t.textContent=":host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.custom-emoji,.emoji,button.emoji{height:var(--total-emoji-size);width:var(--total-emoji-size)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.custom-emoji{padding:var(--emoji-padding);object-fit:contain;pointer-events:none;background-repeat:no-repeat;background-position:center center;background-size:var(--emoji-size) var(--emoji-size)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}"+eI,this.shadowRoot.appendChild(t),this._ctx={locale:"en",dataSource:"https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",skinToneEmoji:"\uD83D\uDD90️",customCategorySorting:eh,customEmoji:null,i18n:e_,emojiVersion:null,...e},e$))"database"!==o&&Object.prototype.hasOwnProperty.call(this,o)&&(this._ctx[o]=this[o],delete this[o]);this._dbFlush()}connectedCallback(){this._cmp||(this._cmp=function(e,o){let i={},n=new AbortController,a=n.signal,{state:r,createEffect:s}=function(e){let t,o,i=!1,n=new Map,a=new Set,r=()=>{if(i)return;let e=[...a];a.clear();try{for(let t of e)t()}finally{o=!1,a.size&&(o=!0,eA(r))}},s=new Proxy({},{get(e,o){if(t){let e=n.get(o);e||(e=new Set,n.set(o,e)),e.add(t)}return e[o]},set(e,t,i){e[t]=i;let s=n.get(t);if(s){for(let e of s)a.add(e);o||(o=!0,eA(r))}return!0}});return e.addEventListener("abort",()=>{i=!0}),{state:s,createEffect:e=>{let o=()=>{let i=t;t=o;try{return e()}finally{t=i}};return o()}}}(a);eD(r,{skinToneEmoji:void 0,i18n:void 0,database:void 0,customEmoji:void 0,customCategorySorting:void 0,emojiVersion:void 0}),eD(r,o),eD(r,{initialLoad:!0,currentEmojis:[],currentEmojisWithCategories:[],rawSearchText:"",searchText:"",searchMode:!1,activeSearchItem:-1,message:void 0,skinTonePickerExpanded:!1,skinTonePickerExpandedAfterAnimation:!1,currentSkinTone:0,activeSkinTone:0,skinToneButtonText:void 0,pickerStyle:void 0,skinToneButtonLabel:"",skinTones:[],currentFavorites:[],defaultFavoriteEmojis:void 0,numColumns:8,isRtl:!1,scrollbarWidth:0,currentGroupIndex:0,groups:er,databaseLoaded:!1,activeSearchItemId:void 0}),s(()=>{r.currentGroup!==r.groups[r.currentGroupIndex]&&(r.currentGroup=r.groups[r.currentGroupIndex])});let l=t=>{e.getElementById(t).focus()},d=t=>e.getElementById(`emo-${t.id}`),c=(e,t)=>{i.rootElement.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))},u=(e,t)=>e.id===t.id,h=(e,t)=>{let{category:o,emojis:i}=e,{category:n,emojis:a}=t;return o===n&&eL(i,a,u)},m=e=>{eL(r.currentEmojis,e,u)||(r.currentEmojis=e)},p=e=>{r.searchMode!==e&&(r.searchMode=e)},g=e=>{eL(r.currentEmojisWithCategories,e,h)||(r.currentEmojisWithCategories=e)},b=(e,t)=>t&&e.skins&&e.skins[t]||e.unicode,f={labelWithSkin:(e,t)=>ey([e.name||b(e,t),e.annotation,...e.shortcodes||ez].filter(Boolean),e=>e).join(", "),titleForEmoji:e=>e.annotation||(e.shortcodes||ez).join(", "),unicodeWithSkin:b},v={onClickSkinToneButton:function(e){r.skinTonePickerExpanded=!r.skinTonePickerExpanded,r.activeSkinTone=r.currentSkinTone,r.skinTonePickerExpanded&&(ef(e),ew(()=>l("skintone-list")))},onEmojiClick:A,onNavClick:function(e){let{target:t}=e,o=t.closest(".nav-button");if(!o)return;let n=parseInt(o.dataset.groupId,10);i.searchElement.value="",r.rawSearchText="",r.searchText="",r.activeSearchItem=-1,r.currentGroupIndex=r.groups.findIndex(e=>e.id===n)},onNavKeydown:function(e){let{target:t,key:o}=e,i=t=>{t&&(ef(e),t.focus())};switch(o){case"ArrowLeft":return i(t.previousElementSibling);case"ArrowRight":return i(t.nextElementSibling);case"Home":return i(t.parentElement.firstElementChild);case"End":return i(t.parentElement.lastElementChild)}},onSearchKeydown:function(e){if(!r.searchMode||!r.currentEmojis.length)return;let t=t=>{ef(e),r.activeSearchItem=ev(t,r.activeSearchItem,r.currentEmojis)};switch(e.key){case"ArrowDown":return t(!1);case"ArrowUp":return t(!0);case"Enter":if(-1!==r.activeSearchItem)return ef(e),T(r.currentEmojis[r.activeSearchItem].id);r.activeSearchItem=0}},onSkinToneOptionsClick:function(e){let{target:{id:t}}=e,o=t&&t.match(/^skintone-(\d)/);o&&(ef(e),L(parseInt(o[1],10)))},onSkinToneOptionsFocusOut:z,onSkinToneOptionsKeydown:function(e){if(!r.skinTonePickerExpanded)return;let t=async t=>{ef(e),r.activeSkinTone=t};switch(e.key){case"ArrowUp":return t(ev(!0,r.activeSkinTone,r.skinTones));case"ArrowDown":return t(ev(!1,r.activeSkinTone,r.skinTones));case"Home":return t(0);case"End":return t(r.skinTones.length-1);case"Enter":return ef(e),L(r.activeSkinTone);case"Escape":return ef(e),r.skinTonePickerExpanded=!1,l("skintone-button")}},onSkinToneOptionsKeyup:function(e){if(r.skinTonePickerExpanded&&" "===e.key)return ef(e),L(r.activeSkinTone)},onSearchInput:function(e){r.rawSearchText=e.target.value}},y={calculateEmojiGridStyle:function(e){var t;let o;t=t=>{{let o=getComputedStyle(i.rootElement),n=parseInt(o.getPropertyValue("--num-columns"),10),a="rtl"===o.getPropertyValue("direction"),s=e.parentElement.getBoundingClientRect().width;r.numColumns=n,r.scrollbarWidth=s-t,r.isRtl=a}},ek?(o=new ResizeObserver(e=>t(e[0].contentRect.width))).observe(e):ew(()=>t(e.getBoundingClientRect().width)),a.addEventListener("abort",()=>{o&&o.disconnect()})}},w=!0;function k(){r.database.customEmoji=r.customEmoji||ez}function E(e){return!e.unicode||!el(e)||eb.get(e.unicode)}async function x(e){let t=r.emojiVersion||await eg();return e.filter(({version:e})=>!e||e<=t)}async function S(e){return function(e,t){let o=e=>{let o={};for(let i of e)"number"==typeof i.tone&&i.version<=t&&(o[i.tone]=i.unicode);return o};return e.map(({unicode:e,skins:t,shortcodes:i,url:n,name:a,category:r,annotation:s})=>({unicode:e,name:a,shortcodes:i,url:n,category:r,annotation:s,id:e||a,skins:t&&o(t)}))}(e,r.emojiVersion||await eg())}async function C(e){let t=-1===e?r.customEmoji:await r.database.getEmojiByGroup(e);return S(await x(t))}async function j(e){return S(await x(await r.database.getEmojiBySearchQuery(e)))}async function T(e){let t=await r.database.getEmojiByUnicodeOrName(e),o=[...r.currentEmojis,...r.currentFavorites].find(t=>t.id===e),i=o.unicode&&b(o,r.currentSkinTone);await r.database.incrementFavoriteEmojiCount(e),c("emoji-click",{emoji:t,skinTone:r.currentSkinTone,...i&&{unicode:i},...o.name&&{name:o.name}})}async function A(e){let{target:t}=e;t.classList.contains("emoji")&&(ef(e),T(t.id.substring(4)))}function L(e){r.currentSkinTone=e,r.skinTonePickerExpanded=!1,l("skintone-button"),c("skin-tone-change",{skinTone:e}),r.database.setPreferredSkinTone(e)}async function z(e){let{relatedTarget:t}=e;t&&"skintone-list"===t.id||(r.skinTonePickerExpanded=!1)}return s(()=>{(function(e,t,o,i,n,a,r,s){let{labelWithSkin:l,titleForEmoji:d,unicodeWithSkin:c}=o,{html:u,map:h}=function(e){let t=ex(eC,e,()=>new Map),o=ej;return{map:function(e,t,i){return e.map((e,n)=>{let a=o;o=i(e);try{return t(e,n)}finally{o=a}})},html:function(e,...i){let n=ex(t,e,()=>new Map);return ex(n,o,()=>(function(e){let{template:t,elementsToBindings:o}=ex(eS,e,()=>(function(e){let t="",o=!1,i=!1,n=-1,a=new Map,r=[];for(let s=0,l=e.length;s<l;s++){let d,c,u;let h=e[s];if(t+=h,s===l-1)break;for(let e=0;e<h.length;e++)switch(h.charAt(e)){case"<":"/"===h.charAt(e+1)?r.pop():(o=!0,r.push(++n));break;case">":o=!1,i=!1;break;case"=":i=!0}let m=ex(a,r[r.length-1],()=>[]);if(i){let t=/(\S+)="?([^"=]*)$/.exec(h);d=t[1],c=t[2],u=/^[^">]*/.exec(e[s+1])[0]}let p={attributeName:d,attributeValuePre:c,attributeValuePost:u,expressionIndex:s};m.push(p),o||i||(t+=" ")}return{template:function(e){let t=document.createElement("template");return t.innerHTML=e,t}(t),elementsToBindings:a}})(e)),i=t.cloneNode(!0).content.firstElementChild,n=function(e,t){let o=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),n=e,a=-1;do{let e=t.get(++a);if(e)for(let t=0;t<e.length;t++){let i=e[t],a=i.attributeName?n:n.firstChild,r={binding:i,targetNode:a,targetParentNode:void 0,currentExpression:void 0};o.push(r)}}while(n=i.nextNode())return o}(i,o);return function(e){return function(e,t){for(let o of t){let{targetNode:t,currentExpression:i,binding:{expressionIndex:n,attributeName:a,attributeValuePre:r,attributeValuePost:s}}=o,l=e[n];if(i!==l){if(o.currentExpression=l,a)t.setAttribute(a,r+""+l+s);else{let e;Array.isArray(l)?function(e,t){let{targetNode:o}=t,{targetParentNode:i}=t,n=!1;if(i?n=function(e,t){let o=e.firstChild,i=0;for(;o;){if(t[i]!==o)return!0;o=o.nextSibling,i++}return i!==t.length}(i,e):(n=!0,t.targetNode=void 0,t.targetParentNode=i=o.parentNode),n){var a;a=i,eT?a.replaceChildren(...e):(a.innerHTML="",a.append(...e))}}(l,o):l instanceof Element?(e=l,t.replaceWith(e)):t.nodeValue=""+l,e&&(o.targetNode=e)}}}}(e,n),i}})(e))(i)}}}(t);function m(e,o,i){return h(e,(e,n)=>u`<button role="${o?"option":"menuitem"}" aria-selected="${t.searchMode?n===t.activeSearchItem:""}" aria-label="${l(e,t.currentSkinTone)}" title="${d(e)}" class="emoji ${o&&n===t.activeSearchItem?"active":""}" id="${`${i}-${e.id}`}">${e.unicode?c(e,t.currentSkinTone):u`<img class="custom-emoji" src="${e.url}" alt="" loading="lazy">`}</button>`,e=>`${i}-${e.id}`)}let p=u`<section data-ref="rootElement" class="picker" aria-label="${t.i18n.regionLabel}" style="${t.pickerStyle}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${t.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(t.searchMode&&t.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${t.activeSearchItemId?`emo-${t.activeSearchItemId}`:""}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${t.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${t.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${t.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${t.skinTonePickerExpanded?"hide-focus":""}" aria-label="${t.skinToneButtonLabel}" title="${t.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${t.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${t.skinToneButtonText}</button></div><span id="skintone-description" class="sr-only">${t.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${t.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${t.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${t.i18n.skinTonesLabel}" aria-activedescendant="skintone-${t.activeSkinTone}" aria-hidden="${!t.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${h(t.skinTones,(e,o)=>u`<div id="skintone-${o}" class="emoji ${o===t.activeSkinTone?"active":""}" aria-selected="${o===t.activeSkinTone}" role="option" title="${t.i18n.skinTones[o]}" aria-label="${t.i18n.skinTones[o]}">${e}</div>`,e=>e)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${t.groups.length},1fr)" aria-label="${t.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${h(t.groups,e=>u`<button role="tab" class="nav-button" aria-controls="tab-${e.id}" aria-label="${t.i18n.categories[e.name]}" aria-selected="${!t.searchMode&&t.currentGroup.id===e.id}" title="${t.i18n.categories[e.name]}" data-group-id="${e.id}"><div class="nav-emoji emoji">${e.emoji}</div></button>`,e=>e.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(t.isRtl?-1:1)*t.currentGroupIndex*100}%)"></div></div><div class="message ${t.message?"":"gone"}" role="alert" aria-live="polite">${t.message}</div><div data-ref="tabpanelElement" class="tabpanel ${!t.databaseLoaded||t.message?"gone":""}" role="${t.searchMode?"region":"tabpanel"}" aria-label="${t.searchMode?t.i18n.searchResultsLabel:t.i18n.categories[t.currentGroup.name]}" id="${t.searchMode?"":`tab-${t.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${h(t.currentEmojisWithCategories,(e,o)=>u`<div><div id="menu-label-${o}" class="category ${1===t.currentEmojisWithCategories.length&&""===t.currentEmojisWithCategories[0].category?"gone":""}" aria-hidden="true">${t.searchMode?t.i18n.searchResultsLabel:e.category?e.category:t.currentEmojisWithCategories.length>1?t.i18n.categories.custom:t.i18n.categories[t.currentGroup.name]}</div><div class="emoji-menu" role="${t.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${o}" id="${t.searchMode?"search-results":""}">${m(e.emojis,t.searchMode,"emo")}</div></div>`,e=>e.category)}</div></div><div class="favorites emoji-menu ${t.message?"gone":""}" role="menu" aria-label="${t.i18n.favoritesLabel}" style="padding-inline-end:${`${t.scrollbarWidth}px`}" data-on-click="onEmojiClick">${m(t.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`;if(s){e.appendChild(p);let t=(t,o)=>{for(let i of e.querySelectorAll(`[${t}]`))o(i,i.getAttribute(t))};for(let e of["click","focusout","input","keydown","keyup"])t(`data-on-${e}`,(t,o)=>{t.addEventListener(e,i[o])});t("data-ref",(e,t)=>{a[t]=e}),t("data-action",(e,t)=>{n[t](e)}),r.addEventListener("abort",()=>{e.removeChild(p)})}})(e,r,f,v,y,i,a,w),w=!1}),r.emojiVersion||eg().then(e=>{e||(r.message=r.i18n.emojiUnsupportedMessage)}),s(()=>{async function e(){let e=!1,t=setTimeout(()=>{e=!0,r.message=r.i18n.loadingMessage},1e3);try{await r.database.ready(),r.databaseLoaded=!0}catch(e){console.error(e),r.message=r.i18n.networkErrorMessage}finally{clearTimeout(t),e&&(e=!1,r.message="")}}r.database&&e()}),s(()=>{r.pickerStyle=`
      --num-groups: ${r.groups.length}; 
      --indicator-opacity: ${r.searchMode?0:1}; 
      --num-skintones: 6;`}),s(()=>{r.customEmoji&&r.database&&k()}),s(()=>{r.customEmoji&&r.customEmoji.length?r.groups!==ea&&(r.groups=ea):r.groups!==er&&(r.currentGroupIndex&&r.currentGroupIndex--,r.groups=er)}),s(()=>{(async function(){r.databaseLoaded&&(r.currentSkinTone=await r.database.getPreferredSkinTone())})()}),s(()=>{r.skinTones=Array(6).fill().map((e,t)=>(function(e,t){if(0===t)return e;let o=e.indexOf("‍");return -1!==o?e.substring(0,o)+String.fromCodePoint(127995+t-1)+e.substring(o):(e.endsWith("️")&&(e=e.substring(0,e.length-1)),e+"\ud83c"+String.fromCodePoint(57339+t-1))})(r.skinToneEmoji,t))}),s(()=>{r.skinToneButtonText=r.skinTones[r.currentSkinTone]}),s(()=>{r.skinToneButtonLabel=r.i18n.skinToneLabel.replace("{skinTone}",r.i18n.skinTones[r.currentSkinTone])}),s(()=>{async function e(){let{database:e}=r,t=(await Promise.all(ec.map(t=>e.getEmojiByUnicodeOrName(t)))).filter(Boolean);r.defaultFavoriteEmojis=t}r.databaseLoaded&&e()}),s(()=>{async function e(){k();let{database:e,defaultFavoriteEmojis:t,numColumns:o}=r,i=await e.getTopFavoriteEmoji(o),n=await S(ey([...i,...t],e=>e.unicode||e.name).slice(0,o));r.currentFavorites=n}r.databaseLoaded&&r.defaultFavoriteEmojis&&e()}),s(()=>{(async function(){let{searchText:e,currentGroup:t,databaseLoaded:o,customEmoji:i}=r;if(o){if(e.length>=2){let t=await j(e);r.searchText===e&&(m(t),p(!0))}else{let{id:e}=t;if(-1!==e||i&&i.length){let t=await C(e);r.currentGroup.id===e&&(m(t),p(!1))}}}else r.currentEmojis=[],r.searchMode=!1})()}),s(()=>{let{currentEmojis:e,emojiVersion:o}=r,n=e.filter(e=>e.unicode).filter(e=>el(e)&&!eb.has(e.unicode));!o&&n.length?(m(e),ew(()=>{(function(e,o,i){for(let n of e){let e=eE(i(n));void 0===t&&(t=eE(o));let a=e/1.8<t;eb.set(n.unicode,a)}})(n,i.baselineEmoji,d),r.currentEmojis=r.currentEmojis})):(m(o?e:e.filter(E)),ew(()=>{var e;(e=i.tabpanelElement)&&(e.scrollTop=0)}))}),s(()=>{}),s(()=>{g(function(){let{searchMode:e,currentEmojis:t}=r;if(e)return[{category:"",emojis:t}];let o=new Map;for(let e of t){let t=e.category||"",i=o.get(t);i||(i=[],o.set(t,i)),i.push(e)}return[...o.entries()].map(([e,t])=>({category:e,emojis:t})).sort((e,t)=>r.customCategorySorting(e.category,t.category))}())}),s(()=>{r.activeSearchItemId=-1!==r.activeSearchItem&&r.currentEmojis[r.activeSearchItem].id}),s(()=>{let{rawSearchText:e}=r;es(()=>{r.searchText=(e||"").trim(),r.activeSearchItem=-1})}),s(()=>{r.skinTonePickerExpanded?i.skinToneDropdown.addEventListener("transitionend",()=>{r.skinTonePickerExpandedAfterAnimation=!0},{once:!0}):r.skinTonePickerExpandedAfterAnimation=!1}),{$set(e){eD(r,e)},$destroy(){n.abort()}}}(this.shadowRoot,this._ctx))}disconnectedCallback(){eA(()=>{if(!this.isConnected&&this._cmp){this._cmp.$destroy(),this._cmp=void 0;let{database:e}=this._ctx;e.close().catch(e=>console.error(e))}})}static get observedAttributes(){return["locale","data-source","skin-tone-emoji","emoji-version"]}attributeChangedCallback(e,t,o){this._set(e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),"emoji-version"===e?parseFloat(o):o)}_set(e,t){this._ctx[e]=t,this._cmp&&this._cmp.$set({[e]:t}),["locale","dataSource"].includes(e)&&this._dbFlush()}_dbCreate(){let{locale:e,dataSource:t,database:o}=this._ctx;o&&o.locale===e&&o.dataSource===t||this._set("database",new en({locale:e,dataSource:t}))}_dbFlush(){eA(()=>this._dbCreate())}}let eR={};for(let e of e$)eR[e]={get(){return"database"===e&&this._dbCreate(),this._ctx[e]},set(t){if("database"===e)throw Error("database is read-only");this._set(e,t)}};function eM(e){if("TEXTAREA"!==e.nodeName)return!1;if(void 0===i){var t=document.createElement("textarea");t.value=1,i=!!t.firstChild}return i}Object.defineProperties(eB.prototype,eR),customElements.get("emoji-picker")||customElements.define("emoji-picker",eB);var eN=function(e,t){if(e.focus(),document.selection){var o=document.selection.createRange();o.text=t,o.collapse(!1),o.select();return}if(!document.execCommand("insertText",!1,t)){var i=e.selectionStart,n=e.selectionEnd;if("function"==typeof e.setRangeText)e.setRangeText(t);else{var a=document.createRange(),r=document.createTextNode(t);if(eM(e)){var s=e.firstChild;if(s){for(var l=0,d=null,c=null;s&&(null===d||null===c);){var u=s.nodeValue.length;i>=l&&i<=l+u&&a.setStart(d=s,i-l),n>=l&&n<=l+u&&a.setEnd(c=s,n-l),l+=u,s=s.nextSibling}i!==n&&a.deleteContents()}else e.appendChild(r)}if(eM(e)&&"#text"===a.commonAncestorContainer.nodeName)a.insertNode(r);else{var h=e.value;e.value=h.slice(0,i)+t+h.slice(n)}}e.setSelectionRange(i+t.length,i+t.length);var m=document.createEvent("UIEvent");m.initEvent("input",!0,!1),e.dispatchEvent(m)}};function eF(e){return null!==e&&"object"==typeof e?"share"in navigator&&"canShare"in navigator&&navigator.canShare(e):"share"in navigator}Object.defineProperty({},"WebShare",{get:function(){return eU},set:void 0,enumerable:!0,configurable:!0});let eO=`
  :host {
    display: inline-block;
  }
`,eP=document.createElement("template");eP.innerHTML=`
  <style>${eO}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class eU extends HTMLElement{#e;#t;#o=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(eP.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#t=this.#i()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#t&&(this.#t.toggleAttribute("disabled",this.disabled),this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#n("shareUrl"),this.#n("shareTitle"),this.#n("shareText"),this.#n("shareFiles"),this.#n("disabled"),this.#e?.addEventListener("slotchange",this.#a),this.#t?.addEventListener("click",this.#r)}disconnectedCallback(){this.#e?.removeEventListener("slotchange",this.#a),this.#t?.removeEventListener("click",this.#r)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#o}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#o=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#r=e=>{e.preventDefault(),this.disabled||this.share()};#a=e=>{e.target&&"button"===e.target.name&&(this.#t?.removeEventListener("click",this.#r),this.#t=this.#i(),this.#t&&(this.#t.addEventListener("click",this.#r),"BUTTON"===this.#t.nodeName||this.#t.hasAttribute("role")||this.#t.setAttribute("role","button")))};#i(){return this.#e&&this.#e.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#n(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="web-share"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eU)}}eU.defineCustomElement(),Object.defineProperty({},"CapturePhoto",{get:function(){return eG},set:void 0,enumerable:!0,configurable:!0});let eq=(e,t,o)=>(Number.isNaN(t)&&(t=0),Number.isNaN(o)&&(o=0),Math.min(Math.max(e,Math.min(t,o)),Math.max(t,o))),eH="capture-photo",eW=`
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
`,eV=document.createElement("template");eV.innerHTML=`
  <style>${eW}</style>

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
`;class eG extends HTMLElement{#e={};#t=null;#i=null;#s=null;#r=null;#a=null;#o=null;#n=null;#l=null;constructor(){super(),this.#e=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eV.content.cloneNode(!0))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}attributeChangedCallback(e,t,o){if(!this.isConnected)return;let i=this.getTrackCapabilities(),n=this.getTrackSettings();if("no-image"===e&&t!==o&&this.#d(),"facing-mode"===e&&t!==o&&"facingMode"in this.#e){let e=["user","environment"].includes(this.facingMode||"");"facingMode"in n&&e&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===e&&t!==o&&"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,t=0]=this.cameraResolution.split("x").map(e=>Number(e));if(e>0&&t>0&&"width"in i&&"height"in i){let o=!!(i.width?.min&&i.width?.max)&&e>=i?.width?.min&&e<=i?.width?.max,a=!!(i.height?.min&&i.height?.max)&&t>=i?.height?.min&&t<=i?.height?.max;"width"in n&&"height"in n&&o&&a&&(this.stopVideoStream(),this.startVideoStream())}}if("pan"===e&&t!==o&&"pan"in this.#e){let e=!!("pan"in i&&i.pan?.min&&i.pan?.max)&&this.pan>=i.pan.min&&this.pan<=i.pan.max;"pan"in n&&"number"==typeof this.pan&&e&&this.#c("pan",this.pan)}if("tilt"===e&&t!==o&&"tilt"in this.#e){let e=!!("tilt"in i&&i.tilt?.min&&i.tilt?.max)&&this.tilt>=i.tilt.min&&this.tilt<=i.tilt.max;"tilt"in n&&"number"==typeof this.tilt&&e&&this.#c("tilt",this.tilt)}if("zoom"===e&&t!==o&&"zoom"in this.#e){let e=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"zoom"in n&&"number"==typeof this.zoom&&e&&this.#c("zoom",this.zoom)}}connectedCallback(){if(this.#u("autpoPlay"),this.#u("noImage"),this.#u("facingMode"),this.#u("cameraResolution"),this.#u("pan"),this.#u("tilt"),this.#u("zoom"),this.#u("calculateFileSize"),this.#i=this.shadowRoot?.querySelector("canvas")||null,this.#s=this.shadowRoot?.getElementById("output")||null,this.#r=this.shadowRoot?.querySelector("video")||null,this.#a=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#o=this.#h(),this.#n=this.shadowRoot?.querySelector('slot[name="facing-mode-button"]')||null,this.#l=this.#m(),this.#r?.addEventListener("loadedmetadata",this.#p),this.#a?.addEventListener("slotchange",this.#g),this.#o?.addEventListener("click",this.#b),this.#n?.addEventListener("slotchange",this.#f),this.#l?.addEventListener("click",this.#v),!eG.isSupported())return this.dispatchEvent(new CustomEvent(`${eH}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#l?.removeEventListener("click",this.#v),this.#o?.removeEventListener("click",this.#b),this.#r?.removeEventListener("canplay",this.#p),this.#a?.removeEventListener("slotchange",this.#g),this.#n?.removeEventListener("slotchange",this.#f)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(e){this.toggleAttribute("auto-play",!!e)}get noImage(){return this.hasAttribute("no-image")}set noImage(e){this.toggleAttribute("no-image",!!e)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(e){this.setAttribute("facing-mode",e)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(e){this.setAttribute("camera-resolution",e)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(e){this.setAttribute("pan",null!=e?e.toString():e)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(e){this.setAttribute("tilt",null!=e?e.toString():e)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(e){this.setAttribute("zoom",null!=e?e.toString():e)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(e){this.toggleAttribute("calculate-file-size",!!e)}#v=e=>{e.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")};#b=e=>{e.preventDefault(),this.capture()};#p=e=>{let t=e.target;t.play().then(()=>{this.dispatchEvent(new CustomEvent(`${eH}:video-play`,{bubbles:!0,composed:!0,detail:{video:t}}))}).catch(e=>{this.dispatchEvent(new CustomEvent(`${eH}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}).finally(()=>{this.removeAttribute("loading")})};#d(){this.#s&&Array.from(this.#s.childNodes).forEach(e=>e.remove())}#c(e,t){if(!this.#t||!e||!t)return;let[o]=this.#t.getVideoTracks(),i=this.getTrackCapabilities();e in this.getTrackSettings()&&o.applyConstraints({advanced:[{[e]:eq(Number(t),i[e]?.min||1,i[e]?.max||1)}]})}#g=e=>{e.target?.name==="capture-button"&&(this.#o?.removeEventListener("click",this.#b),this.#o=this.#h(),this.#o&&(this.#o.addEventListener("click",this.#b),"BUTTON"===this.#o.nodeName||this.#o.hasAttribute("role")||this.#o.setAttribute("role","button")))};#f=e=>{e.target?.name==="facing-mode-button"&&(this.#l?.removeEventListener("click",this.#v),this.#l=this.#m(),this.#l&&(this.#l.addEventListener("click",this.#v),"BUTTON"===this.#l.nodeName||this.#l.hasAttribute("role")||this.#l.setAttribute("role","button")))};#m(){return this.#n&&this.#n.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"facing-mode-button"===e.getAttribute("slot"))||null}#h(){return this.#a&&this.#a.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"capture-button"===e.getAttribute("slot"))||null}#u(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}async startVideoStream(){if(!eG.isSupported()||this.#t)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,o=0]=this.cameraResolution.split("x").map(e=>Number(e));t>0&&o>0&&(e.video.width=t,e.video.height=o)}try{this.#t=await navigator.mediaDevices.getUserMedia(e),this.#r&&(this.#r.srcObject=this.#t),this.#c("pan",this.pan),this.#c("tilt",this.tilt),this.#c("zoom",this.zoom);let t=this.getTrackSettings();"facingMode"in t&&this.#n&&(this.#n.hidden=!1)}catch(e){this.dispatchEvent(new CustomEvent(`${eH}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}finally{this.removeAttribute("loading")}}stopVideoStream(){if(!this.#r||!this.#t)return;let[e]=this.#t.getVideoTracks();e?.stop(),this.#r.srcObject=null,this.#t=null}async capture(){if(!this.loading&&this.#i&&this.#r)try{let e=this.#i.getContext("2d"),t=this.#r.videoWidth,o=this.#r.videoHeight;this.#i.width=t,this.#i.height=o,e?.drawImage(this.#r,0,0,t,o);let i=this.#i.toDataURL("image/png");if("string"==typeof i&&i.includes("data:image")){if(!this.noImage){let e=new Image;e.src=i,e.width=t,e.height=o,e.setAttribute("part","output-image"),this.#d(),this.#s?.appendChild(e)}let e={dataURI:i,width:t,height:o};if(this.calculateFileSize)try{let t=await fetch(i),o=(await t.blob()).size;o&&(e.size=o)}catch(e){}this.dispatchEvent(new CustomEvent(`${eH}:success`,{bubbles:!0,composed:!0,detail:e}))}}catch(e){this.dispatchEvent(new CustomEvent(`${eH}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}getSupportedConstraints(){return eG.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getCapabilities&&e.getCapabilities()||{}}getTrackSettings(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getSettings&&e.getSettings()||{}}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(e=eH){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eG)}}eG.defineCustomElement(),Object.defineProperty({},"ModalElement",{get:function(){return eJ},set:void 0,enumerable:!0,configurable:!0});let eX=document.createElement("template"),eY=`
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
    text-align: end;

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
`;eX.innerHTML=`
  <style>${eY}</style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
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
`;class eJ extends HTMLElement{#t=null;#e=null;#s=null;#l=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eX.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#e=this.shadowRoot.querySelector('slot[name="footer"]'),this.#s=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(e,t,o){if(null!==this.#t){if("open"===e&&t!==o&&(this.open?(this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===e&&t!==o){let e=this.#t.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#t.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}"close-label"===e&&t!==o&&this.#a()}}connectedCallback(){this.#i("open"),this.#i("staticBackdrop"),this.#i("noHeader"),this.#i("noAnimations"),this.#i("noCloseButton"),this.#i("fullscreen"),this.#i("preserveOverflow"),this.#i("placement"),this.#i("closeLabel"),this.#t?.addEventListener("click",this.#r),this.#t?.addEventListener("close",this.#n),this.#t?.addEventListener("cancel",this.#o),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#u),this.#e?.addEventListener("slotchange",this.#h),this.#s?.addEventListener("slotchange",this.#c)}disconnectedCallback(){this.#l&&clearTimeout(this.#l),this.#t?.addEventListener("click",this.#r),this.#t?.removeEventListener("close",this.#n),this.#t?.removeEventListener("cancel",this.#o),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#u),this.#e?.removeEventListener("slotchange",this.#h),this.#s?.removeEventListener("slotchange",this.#c)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){this.toggleAttribute("static-backdrop",!!e)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){this.toggleAttribute("no-header",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){this.toggleAttribute("no-close-button",!!e)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){this.toggleAttribute("fullscreen",!!e)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(e){this.toggleAttribute("preserve-overflow",!!e)}get placement(){return this.getAttribute("placement")||"center"}set placement(e){this.setAttribute("placement",null!=e?e.toString():e)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(e){this.setAttribute("close-label",null!=e?e.toString():e)}#a(){if(null===this.#t)return;let e=this.#t.querySelector(".dialog__close");if(null===e)return;let t=this.#s?.assignedElements()||[];t?.some(e=>e.textContent?.replace(/\s/g,"")!=="")?e.removeAttribute("aria-label"):e.setAttribute("aria-label",this.closeLabel)}#g(){this.#l||(this.#t?.classList.add("dialog--pulse"),this.#l=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#l),this.#l=void 0},300))}#n=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#o=e=>{let t=this.#m("escape-key");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#g())};#u=e=>{let t=this.#m("close-button");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#g())};#r=e=>{let t=e.target;if(t===e.currentTarget){let e=this.#m("backdrop-click");this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#g():this.hide()}if(t instanceof HTMLElement&&null!==t.closest("[data-me-close]")){let e=this.#m("external-invoker");this.dispatchEvent(e),e.defaultPrevented?this.noAnimations||this.#g():this.hide()}};#h=()=>{if(null===this.#t)return;let e=this.#t.querySelector(".dialog__footer");if(null===e)return;let t=this.#e?.assignedNodes(),o=!!t&&t.length>0;e.hidden=!o};#c=()=>{this.#a()};#m(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#i(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eJ)}}eJ.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return tt},set:void 0,enumerable:!0,configurable:!0});let eK=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),eQ=[".DS_Store","Thumbs.db"],eZ=e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=(t.split(".").pop()||"").toLowerCase(),i=eK.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e},e0=(e,t)=>{let o=eZ(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},e1=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),e8=async e=>{let t=[],o=await e1(e);for(;o.length>0;)t.push(...o),o=await e1(e);return t},e3=e=>new Promise((t,o)=>{e.file(o=>t(e0(o,e.fullPath)),o)}),e2=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e){if(e.isFile){let o=await e3(e);-1===eQ.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await e8(e.createReader()))}}return t},e5=async e=>{let t=[];for(let o of e)-1===eQ.indexOf(o.name)&&t.push(e0(o));return t},e4=async e=>e.dataTransfer?e.dataTransfer.items?await e2(e.dataTransfer.items):await e5(e.dataTransfer.files):await e5(e.target.files),e9="files-dropzone",e7="TOO_MANY_FILES",e6=document.createElement("template"),te=`
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
`;e6.innerHTML=`
  <style>
    ${te}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class tt extends HTMLElement{#t=null;#e=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(e6.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.getElementById("file-input"),this.#e=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?(this.#e?.removeAttribute("tabindex"),this.#e?.setAttribute("aria-disabled","true")):(this.#e?.setAttribute("tabindex","0"),this.#e?.setAttribute("aria-disabled","false"))),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple)}connectedCallback(){this.#s("accept"),this.#s("disabled"),this.#s("maxFiles"),this.#s("maxSize"),this.#s("minSize"),this.#s("multiple"),this.#s("autoFocus"),this.#s("noStyle"),this.#t?.addEventListener("change",this.#i),this.#e?.addEventListener("dragenter",this.#n),this.#e?.addEventListener("dragover",this.#a),this.#e?.addEventListener("dragleave",this.#r),this.#e?.addEventListener("drop",this.#o),this.#e?.addEventListener("click",this.#u),this.#e?.addEventListener("keyup",this.#l),this.autoFocus&&this.#e?.focus()}disconnectedCallback(){this.#t?.removeEventListener("change",this.#i),this.#e?.removeEventListener("dragenter",this.#n),this.#e?.removeEventListener("dragover",this.#a),this.#e?.removeEventListener("dragleave",this.#r),this.#e?.removeEventListener("drop",this.#o),this.#e?.removeEventListener("click",this.#u),this.#e?.removeEventListener("keyup",this.#l)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#i=async e=>{try{this.#p(await e4(e))}catch(e){this.dispatchEvent(new CustomEvent(`${e9}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}};#n=()=>{this.disabled||this.dispatchEvent(new Event(`${e9}-dragenter`,{bubbles:!0,composed:!0}))};#a=e=>{if(e.preventDefault(),this.disabled){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e&&(this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${e9}-dragover`,{bubbles:!0,composed:!0}))};#r=()=>{this.disabled||(this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${e9}-dragleave`,{bubbles:!0,composed:!0})))};#o=async e=>{if(!this.disabled){e.preventDefault(),this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"));try{this.#p(await e4(e))}catch(e){this.dispatchEvent(new CustomEvent(`${e9}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}};#u=()=>{this.disabled||this.#t?.click()};#l=e=>{this.disabled||" "!==e.key&&"Enter"!==e.key||this.#t?.click()};#p(e){if(!Array.isArray(e)||!e.length)return;let t=[],o=[],i=e.length;if(!this.multiple&&i>1)for(let t of e)o.push({file:t,errors:[{code:e7,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let t of e)o.push({file:t,errors:[{code:e7,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of e){let e=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,n=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(i,this.accept),n=i.size>this.maxSize,a=i.size<this.minSize;if(!e||n||a){let t=[];e||t.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),n&&t.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),a&&t.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:t})}else t.push(i)}this.dispatchEvent(new CustomEvent(`${e9}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t,rejectedFiles:o}})),t.length>0&&this.dispatchEvent(new CustomEvent(`${e9}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${e9}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#t&&(this.#t.value=this.#t.defaultValue)}openFileDialog(){this.disabled||this.#t?.click()}#s(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=e9){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,tt)}}tt.defineCustomElement();let to=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"],ti=(e="",t="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${o}${"string"==typeof t&&""!==t?"-"+t:""}`},tn=async(e={})=>{let t=await fetch(e.url),o=await t.blob(),i=e.mimeType||o.type||"";if(!to.includes(i))throw Error(`This is not an accepted image format. Accepted MIME types are: ${to.join(", ")}`);return new File([o],e.filename||"",o)},ta=localStorage,tr=new class{#y=null;#w=null;constructor(e,t=localStorage){if(!e)throw Error("Storage prefix is required");if(t!==localStorage&&t!==sessionStorage)throw Error("Storage provider is not supported");this.#y=e,this.#w=t}set(e,t){try{this.#w.setItem(`${this.#y}${e}`,JSON.stringify(t))}catch(e){console.error("Error saving to storage",e)}}get(e){try{let t=this.#w.getItem(`${this.#y}${e}`);return t?JSON.parse(t):null}catch(e){return console.error("Error getting from storage",e),null}}}("meme-generator/",ta),ts=e=>"string"==typeof e;var tl={};tl=s("aNJCr").getBundleURL("9p9yL")+"Pressuru.684952ea.ttf";var td={};td=s("aNJCr").getBundleURL("9p9yL")+"Oswald-Regular.89ec7d89.ttf";var tc={};tc=s("aNJCr").getBundleURL("9p9yL")+"Oswald-Bold.0f6a7ca6.ttf";var tu={};tu=s("aNJCr").getBundleURL("9p9yL")+"Roboto-Regular.ca197847.ttf";var th={};th=s("aNJCr").getBundleURL("9p9yL")+"Roboto-Bold.fdb9b54a.ttf";var tm={};tm=s("aNJCr").getBundleURL("9p9yL")+"RobotoCondensed-Regular.d585f5c7.ttf";var tp={};tp=s("aNJCr").getBundleURL("9p9yL")+"RobotoCondensed-Bold.e1f96d4b.ttf";var tg={};tg=s("aNJCr").getBundleURL("9p9yL")+"CourierPrime-Regular.3a25a501.ttf";var tb={};tb=s("aNJCr").getBundleURL("9p9yL")+"CourierPrime-Bold.3d6bf689.ttf";var tf={};tf=s("aNJCr").getBundleURL("9p9yL")+"OpenSans-Regular.edf9e01b.ttf";var tv={};tv=s("aNJCr").getBundleURL("9p9yL")+"OpenSans-Bold.8fceb72b.ttf";let ty=[{name:"Pressuru",label:"Pressuru",path:o(tl),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:o(td),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:o(tc),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:o(tu),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:o(th),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:o(tm),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:o(tp),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:o(tg),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:o(tb),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:o(tf),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:o(tv),style:"normal",weight:"400"}],tw=async(e,t,o={})=>{try{let i=new FontFace(e,`url(${t})`,{...o});await i.load(),document.fonts.add(i)}catch(e){console.error(e)}},tk=document.getElementById("errorsContainer"),tE=e=>{let t=e.currentTarget;t.removeEventListener("click",tE),tk.removeChild(t.parentNode)},tx=(e="",t="info")=>{["info","warning","danger"].includes(t)||(t="info");let o=`
    ${e}
    <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
  `,i=document.createElement("div");i.className=`alert alert-${t} alert-dismissible text-break mb-2 fade`,i.innerHTML=o,i.querySelector("button").addEventListener("click",tE),tk.appendChild(i),setTimeout(()=>i.classList.add("show"),100)},tS={id:"",text:"",fillColor:"#ffffff",strokeColor:"#000000",font:"Pressuru",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:0,strokeWidth:1.5,offsetY:0,offsetX:0,rotate:0,allCaps:!0},tC=new Map;class tj{constructor(e){let t=ti("textbox",Date.now().toString(36));this.data=e?{...e,id:t}:{...tS,id:t},tC.set(t,this),document.dispatchEvent(new CustomEvent("textbox-create",{bubbles:!0,composed:!0,detail:{textbox:this}}))}getData(){return this.data}static create(e){return new tj(e)}static getAll(){return tC}static getById(e){return tC.get(e)}static remove(e){tC.delete(e),document.dispatchEvent(new CustomEvent("textbox-remove",{bubbles:!0,composed:!0,detail:{id:e}}))}static createElement(e,t=!0){if(!(e instanceof tj))return;let o=e.getData(),{id:i,text:n,fillColor:a,strokeColor:r,fontSize:s,shadowBlur:l,strokeWidth:d,offsetX:c,offsetY:u,rotate:h}=o,m=`
    <div class="d-flex align-items-center">
      <button type="button" class="btn btn-link" data-button="duplicate-text-box" title="Duplicate text box"></button>
      <button type="button" class="btn btn-link" data-button="delete-text-box" title="Remove text box"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="Text #${tC.size}">${n}</textarea>

      <div class="d-flex align-items-center pe-2">
        <label for="fillColorInput" class="visually-hidden">Fill color</label>
        <input class="form-control" type="color" value="${a}" id="fillColorInput" data-input="fillColor" title="Fill color">

        <label for="strokeColorInput" class="visually-hidden">Outline color</label>
        <input class="form-control" type="color" value="${r}" id="strokeColorInput" data-input="strokeColor" title="Outline color">

        <button type="button" class="btn btn-secondary settings-button" data-button="settings" title="Settings"></button>
      </div>
    </div>

    <div class="p-2" data-section="settings" hidden>
      <div class="row g-2">
        <div class="col-12">
          <details class="emoji-picker-details">
            <summary>Emoji picker</summary>
            <emoji-picker class="light"></emoji-picker>
          </details>
        </div>

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
              ${ty.map(({name:e,label:t})=>`<option value="${e}">${t}</option>`)}
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
          <select class="form-select" data-input="textAlign" id="textAlignInput_${i}" value="right">
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
        <div class="col-lg-12">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="allCapsCheckbox_${i}" data-input="allCaps">
            <label class="form-check-label" for="allCapsCheckbox_${i}">ALL CAPS</label>
          </div>
        </div>
      </div>
    </div>
  `,p=document.createDocumentFragment(),g=document.createElement("div");g.setAttribute("id",i),g.setAttribute("data-section","textbox"),g.className="bg-light border shadow-sm mb-3 rounded",g.innerHTML=m,g.querySelectorAll("select").forEach(e=>e.value=o[e.dataset.input]),g.querySelectorAll('input[type="checkbox"]').forEach(e=>e.checked=o[e.dataset.input]);let b=p.appendChild(g);return t&&setTimeout(()=>b.querySelector('[data-input="text"]').focus(),0),b}}class tT{#k=null;#E=null;constructor(e){this.#k=e,this.#E=this.#k.getContext("2d")}get width(){return this.#k.width}set width(e){this.#k.width=e}get height(){return this.#k.height}set height(e){this.#k.height=e}getDimensions(){return{width:this.width,height:this.height}}setDimensions({width:e,height:t}){return this.width=e,this.height=t,this}toDataURL(){return this.#k.toDataURL()}draw(e,t=new Map){if(null==e)return;let o=this.#k,i=this.#E;i.clearRect(0,0,o.width,o.height),ts(e)?(i.fillStyle=e,i.fillRect(0,0,o.width,o.height)):i.drawImage(e,0,0,o.width,o.height);let n=0;return t.forEach(e=>{let{data:t}=e;n+=1,i.save(),i.font=`${t.fontWeight} ${t.fontSize*o.width/1e3}px ${t.font}`,i.fillStyle=t.fillColor,i.textAlign=t.textAlign,i.strokeStyle=t.strokeColor;let a=i.measureText("M").width+t.fontSize/2,r=o.width/2,s=t.shadowBlur,l=(!0===t.allCaps?t.text.toUpperCase():t.text).split("\n");0!==s&&(i.shadowOffsetX=0,i.shadowOffsetY=0,i.shadowBlur=Math.min(s,20),i.shadowColor=t.strokeColor),i.translate(r+t.offsetX,a*n+t.offsetY),i.rotate(Math.min(t.rotate,360)*Math.PI/180),l.forEach((e,t)=>i.fillText(e,0,t*a)),0!==s&&(i.shadowBlur=0,l.forEach((e,t)=>i.fillText(e,0,t*a))),t.strokeWidth>0&&(i.lineWidth=Math.min(t.strokeWidth,20),l.forEach((e,t)=>i.strokeText(e,0,t*a))),i.restore()}),this}clear(){return this.#E.clearRect(0,0,this.#k.width,this.#k.height),this}show(){return this.#k.hidden=!1,this}hide(){return this.#k.hidden=!0,this}static createInstance(e){return new tT(e)}}let tA=tT.createInstance(document.getElementById("canvas")),tL=document.getElementById("videoModal"),tz=document.getElementById("downloadModal"),tD=document.querySelector("files-dropzone"),t_=document.getElementById("instructions"),t$=document.getElementById("imageUploadMethodSelect"),tI=document.getElementById("fileSelectBtn"),tB=document.getElementById("imageUrlForm"),tR=document.getElementById("addTextboxBtn"),tM=document.getElementById("textboxesContainer"),tN=document.getElementById("generateMemeBtn"),tF=document.getElementById("openVideoModalBtn"),tO=document.getElementById("downloadMemeBtn"),tP=document.getElementById("downloadMemePreview"),tU=document.querySelector("web-share"),tq=document.getElementById("gallery"),tH=document.getElementById("gallerySearch"),tW=tq.querySelector(".gallery__no-results"),tV=document.getElementById("solidColorForm"),tG=document.querySelectorAll(".upload-method"),tX=document.getElementById("removeConfirmationModal"),tY=document.getElementById("removeTextForm"),tJ=document.getElementById("maxImageDimensionsForm"),tK=tJ.maxImageDimensions,tQ=document.getElementById("clearCanvasBtn"),tZ=tr.get("maxImageDimensions"),t0=!1,t1=null,t8=null,t3=async()=>{let e=tA.toDataURL("image/png"),t=`${ti("meme")}.png`,o=e.replace("image/png","image/octet-stream");if(tO.download=t,tO.href=o,tP.width=tA.getDimensions().width,tP.height=tA.getDimensions().height,tP.src=o,eF())try{let o=await tn({url:e,filename:t,mimeType:"image/png"}).catch(e=>tx(e.message,"danger"));o&&eF({files:[o]})&&(tU.shareFiles=[o],tU.hidden=!1)}catch(e){console.error(e)}window.requestAnimationFrame(()=>{tz.open=!0})},t2=e=>{let[t,o]=tJ.maxImageDimensions.value.split("x"),i=Number(t)||800,n=Number(o)||600,a=e.width,r=e.height;a>r?a>i&&(r*=i/a,a=i):r>n&&(a*=n/r,r=n),tA.setDimensions({width:a,height:r})},t5=()=>{tA.draw(t1,tj.getAll()).show(),tD.classList.add("dropzone--accepted"),tD.disabled=!0,tN.disabled=!1,t_.hidden=!0,tQ.hidden=!1},t4=e=>{t2(t1=e.target),t5()},t9=e=>{if(!e)return;let t=new Image,o=new FileReader;o.addEventListener("load",function(e){let o=e.target.result;t.addEventListener("load",t4),t.src=o}),o.readAsDataURL(e)},t7=(e,t,o)=>{let i=tj.getById(t).getData();switch(e.type){case"checkbox":i[o]=e.checked;break;case"number":i[o]=Number(e.value);break;default:i[o]=e.value}tA.draw(t1,tj.getAll())},t6=async e=>{e.preventDefault();let t=e.target,o=t.querySelector('button[type="submit"]'),i=t.imageUrl.value;if(i.trim()){o.disabled=!0,o.querySelector(".spinner").hidden=!1,o.querySelector(".label").hidden=!0;try{let e=await tn({url:i}).catch(e=>tx(e.message,"danger"));e&&t9(e)}catch{tx(`Failed to load image from "${i}".`,"danger")}finally{o.disabled=!1,o.querySelector(".spinner").hidden=!0,o.querySelector(".label").hidden=!1}}},oe=(e,t)=>()=>{let o=document.getElementById(e),i=o.querySelector('[data-input="offsetY"]'),n=o.querySelector('[data-input="offsetX"]'),a=tj.getById(e);if(!a)return;let r=a.getData();switch(t=t.toLowerCase()){case"up":r.offsetY-=1,i.value=r.offsetY;break;case"down":r.offsetY+=1,i.value=r.offsetY;break;case"left":r.offsetX-=1,n.value=r.offsetX;break;case"right":r.offsetX+=1,n.value=r.offsetX}tA.draw(t1,tj.getAll()),t8=requestAnimationFrame(oe(e,t))},ot=async e=>{let t=e.target.closest("button");if(!t)return;let o=t.querySelector("img");try{let e=await tn({url:o.src}).catch(e=>tx(e.message,"danger"));e&&t9(e)}catch{tx(`Failed to load image: "${o.alt}".`,"danger")}};tI.addEventListener("click",()=>{"function"==typeof tD.openFileDialog&&tD.openFileDialog()}),tF.addEventListener("click",()=>{tL.open=!0}),tR.addEventListener("click",()=>tj.create()),tN.addEventListener("click",t3),tO.addEventListener("click",()=>tz.open=!1),tB.addEventListener("submit",t6),tD.addEventListener("files-dropzone-drop-accepted",e=>{let[t]=e.detail.acceptedFiles;t&&t9(t)}),tM.addEventListener("input",e=>{let t;let o=e.target,i=o.closest('[data-section="textbox"]').id;o.matches('[data-input="text"]')?t="text":o.matches('[data-input="fillColor"]')?t="fillColor":o.matches('[data-input="strokeColor"]')?t="strokeColor":o.matches('[data-input="font"]')?t="font":o.matches('[data-input="fontSize"]')?t="fontSize":o.matches('[data-input="fontWeight"]')?t="fontWeight":o.matches('[data-input="textAlign"]')?t="textAlign":o.matches('[data-input="shadowBlur"]')?t="shadowBlur":o.matches('[data-input="offsetY"]')?t="offsetY":o.matches('[data-input="offsetX"]')?t="offsetX":o.matches('[data-input="rotate"]')?t="rotate":o.matches('[data-input="strokeWidth"]')&&(t="strokeWidth"),t&&t7(o,i,t)}),tM.addEventListener("change",e=>{let t;let o=e.target,i=o.closest('[data-section="textbox"]').id;o.matches('[data-input="allCaps"]')&&(t="allCaps"),t&&t7(o,i,t)}),tM.addEventListener("click",e=>{let t=e.target;if(t.matches('[data-button="settings"]')){let e=t.closest('[data-section="textbox"]'),o=e?.querySelector('[data-section="settings"]');o&&(o.hidden=!o.hidden)}if(t.matches('[data-button="duplicate-text-box"')){let e=t.closest('[data-section="textbox"]'),o=tj.getById(e.id);tj.create({...o.data})}if(t.matches('[data-button="delete-text-box"]')){let e=t.closest('[data-section="textbox"]').id,o=tj.getById(e);if(o&&o.data.text.trim()){let t=tY["textbox-id"];t&&(t.value=e,tX.open=!0)}else tj.remove(e)}}),tM.addEventListener("pointerdown",e=>{let t=e.target,o=t.closest('[data-section="textbox"]');o&&t.matches('[data-action="move-text"]')&&(t8=requestAnimationFrame(oe(o.id,t.getAttribute("aria-label"))))}),tM.addEventListener("pointerup",e=>{e.target.matches('[data-action="move-text"]')&&(cancelAnimationFrame&&cancelAnimationFrame(t8),t8=null)}),tM.addEventListener("pointerout",e=>{e.target.matches('[data-action="move-text"]')&&(cancelAnimationFrame&&cancelAnimationFrame(t8),t8=null)}),tM.addEventListener("keydown",e=>{let t=e.target,o=t.closest('[data-section="textbox"]');t.matches('[data-action="move-text"]')&&(" "===e.key||"Enter"===e.key)&&(t8&&cancelAnimationFrame(t8),t8=requestAnimationFrame(oe(o.id,t.getAttribute("aria-label"))))}),tM.addEventListener("keyup",e=>{e.target.matches('[data-action="move-text"]')&&(" "===e.key||"Enter"===e.key)&&(t8&&cancelAnimationFrame(t8),t8=null)}),t$.addEventListener("change",e=>{tG.forEach(t=>t.hidden=t.id!==e.target.value),tJ.hidden="solidColorForm"===e.target.value}),tq.addEventListener("click",ot),tH.addEventListener("input",e=>{let t=e.target.value.toLowerCase().trim();tq.querySelectorAll("button").forEach(e=>{let o=(e.querySelector("img").getAttribute("alt")||"").toLowerCase();e.hidden=!o.includes(t)}),tW.hidden=!!tq.querySelector("button:not([hidden])")}),tV.addEventListener("input",e=>{e.target===tV.canvasColor&&(t1=e.target.value),ts(t1)&&(tA.setDimensions({width:Number(tV.canvasWidth.value)||800,height:Number(tV.canvasHeight.value)||600}),t5())}),document.addEventListener("web-share:error",()=>{tz.open=!1,tx("There was an error while trying to share your meme.","danger")}),document.addEventListener("capture-photo:error",e=>{let t=e.detail.error,o="An error occurred while trying to capture photo.";t instanceof Error&&("NotAllowedError"===t.name||"NotFoundError"===t.name)&&(o+=" Make sure you have a camera connected and you have granted the appropriate permissions."),tx(o,"danger"),tL.open=!1,console.error(t)}),document.addEventListener("capture-photo:success",e=>{tL.open=!1;let t=new Image;t.addEventListener("load",t4),t.src=e.detail.dataURI}),document.addEventListener("me-open",e=>{if("videoModal"===e.target.id){let e=tL.querySelector("capture-photo");e&&"function"==typeof e.startVideoStream&&e.startVideoStream()}}),document.addEventListener("me-close",e=>{if("videoModal"===e.target.id){let e=tL.querySelector("capture-photo");e&&"function"==typeof e.stopVideoStream&&e.stopVideoStream()}"removeConfirmationModal"===e.target.id&&tY.reset()}),document.addEventListener("emoji-click",e=>{let t=e.target.closest('[data-section="textbox"]');if(t){let o=t.querySelector('[data-input="text"]'),i=e.detail.unicode;o&&eN(o,i)}}),document.addEventListener("textbox-create",e=>{let t=e.detail.textbox,o=tj.createElement(t,t0);t0=!0,tM.appendChild(o),t.getData().text&&tA.draw(t1,tj.getAll())}),document.addEventListener("textbox-remove",e=>{let t=document.getElementById(e.detail.id);t&&t.remove(),tM.querySelectorAll('[data-section="textbox"]').forEach((e,t)=>{e.querySelector('[data-input="text"]').setAttribute("placeholder",`Text #${t+1}`)}),tA.draw(t1,tj.getAll())}),tY.addEventListener("submit",e=>{e.preventDefault();let t=e.target["textbox-id"].value;t&&(tj.remove(t),tX.open=!1)}),tJ.addEventListener("change",e=>{e.target.matches('[name="maxImageDimensions"]')&&tr.set("maxImageDimensions",e.target.value),!t1||ts(t1)||(t2(t1),tA.draw(t1,tj.getAll()))}),tQ.addEventListener("click",e=>{t1&&(e.stopPropagation(),t1=null,tD.classList.remove("dropzone--accepted"),tN.disabled=!0,t_.hidden=!1,tQ.hidden=!0,tD.disabled=!1,tA.clear().hide())}),tq.querySelectorAll("button > img")?.forEach(e=>{e.setAttribute("title",e.getAttribute("alt"))}),tj.create(),tD.accept=to,ty.forEach(({name:e,path:t,style:o,weight:i})=>{tw(e,t,{style:o,weight:i})}),tZ&&(tK.value=tZ),tK.disabled=!1}();
//# sourceMappingURL=index.598aa9dd.js.map
