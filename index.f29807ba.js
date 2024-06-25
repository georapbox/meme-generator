let e,t;function o(e){return e&&e.__esModule?e.default:e}function i(e){if("string"!=typeof e||!e)throw Error("expected a non-empty string, got: "+e)}function n(e){if("number"!=typeof e)throw Error("expected a number, got: "+e)}const a="emoji",r="keyvalue",s="favorites",l="tokens",d="count",c="group-order",u="eTag",h="skinTone",m="readonly",p="readwrite",g="skinUnicodes";function b(e){return function(e,t){let o=new Set,i=[];for(let n of e){let e=t(n);o.has(e)||(o.add(e),i.push(n))}return i}(e,e=>e.unicode)}const f={},v={},y={};function w(e,t,o){o.onerror=()=>t(o.error),o.onblocked=()=>t(Error("IDB blocked")),o.onsuccess=()=>e(o.result)}async function k(e){let t=await new Promise((t,o)=>{let i=indexedDB.open(e,1);f[e]=i,i.onupgradeneeded=e=>{e.oldVersion<1&&function(e){function t(t,o,i){let n=o?e.createObjectStore(t,{keyPath:o}):e.createObjectStore(t);if(i)for(let[e,[t,o]]of Object.entries(i))n.createIndex(e,t,{multiEntry:o});return n}t(r),t(a,"unicode",{[l]:["tokens",!0],[c]:[["group","order"]],[g]:["skinUnicodes",!0]}),t(s,void 0,{[d]:[""]})}(i.result)},w(t,o,i)});return t.onclose=()=>x(e),t}function E(e,t,o,i){return new Promise((n,a)=>{let r;let s=e.transaction(t,o,{durability:"relaxed"});i("string"==typeof t?s.objectStore(t):t.map(e=>s.objectStore(e)),s,e=>{r=e}),s.oncomplete=()=>n(r),s.onerror=()=>a(s.error)})}function x(e){let t=f[e],o=t&&t.result;if(o){o.close();let t=y[e];if(t)for(let e of t)e()}delete f[e],delete v[e],delete y[e]}const S=new Set([":D","XD",":'D","O:)",":X",":P",";P","XP",":L",":Z",":j","8D","XO","8)",":B",":O",":S",":'o","Dx","X(","D:",":C",">0)",":3","</3","<3","\\M/",":E","8#"]);function C(e){return e.split(/[\s_]+/).map(e=>!e.match(/\w/)||S.has(e)?e.toLowerCase():e.replace(/[)(:,]/g,"").replace(/’/g,"'").toLowerCase()).filter(Boolean)}function j(e){return e.filter(Boolean).map(e=>e.toLowerCase()).filter(e=>e.length>=2)}function T(e,t,o,i){e[t](o).onsuccess=e=>i&&i(e.target.result)}function A(e,t,o){T(e,"get",t,o)}function L(e,t,o){T(e,"getAll",t,o)}function z(e){e.commit&&e.commit()}function D(e,t){let o=function(e,t){let o=e[0];for(let i=1;i<e.length;i++){let n=e[i];t(o)>t(n)&&(o=n)}return o}(e,e=>e.length),i=[];for(let n of o)e.some(e=>-1===e.findIndex(e=>t(e)===t(n)))||i.push(n);return i}async function _(e){return!await P(e,r,"url")}async function $(e,t,o){let[i,n]=await Promise.all([u,"url"].map(t=>P(e,r,t)));return i===o&&n===t}async function I(e,t){return E(e,a,m,(e,o,i)=>{let n;let a=()=>{e.getAll(n&&IDBKeyRange.lowerBound(n,!0),50).onsuccess=e=>{let o=e.target.result;for(let e of o)if(n=e.unicode,t(e))return i(e);if(o.length<50)return i();a()}};a()})}async function B(e,t,o,i){{let n=t.map(({annotation:e,emoticon:t,group:o,order:i,shortcodes:n,skins:a,tags:r,emoji:s,version:l})=>{let d=[...new Set(j([...(n||[]).map(C).flat(),...r.map(C).flat(),...C(e),t]))].sort(),c={annotation:e,group:o,order:i,tags:r,tokens:d,unicode:s,version:l};if(t&&(c.emoticon=t),n&&(c.shortcodes=n),a)for(let{tone:e,emoji:t,version:o}of(c.skinTones=[],c.skinUnicodes=[],c.skinVersions=[],a))c.skinTones.push(e),c.skinUnicodes.push(t),c.skinVersions.push(o);return c});await E(e,[a,r],p,([e,t],a)=>{let r,s;let l=0;function d(){2==++l&&function(){if(r!==i||s!==o){for(let t of(e.clear(),n))e.put(t);t.put(i,u),t.put(o,"url"),z(a)}}()}A(t,u,e=>{r=e,d()}),A(t,"url",e=>{s=e,d()})})}}async function R(e,t){return E(e,a,m,(e,o,i)=>{let n=IDBKeyRange.bound([t,0],[t+1,0],!1,!0);L(e.index(c),n,i)})}async function M(e,t){let o=j(C(t));return o.length?E(e,a,m,(e,t,i)=>{let n=[],a=()=>{n.length===o.length&&r()},r=()=>{i(D(n,e=>e.unicode).sort((e,t)=>e.order<t.order?-1:1))};for(let t=0;t<o.length;t++){let i=o[t],r=t===o.length-1?IDBKeyRange.bound(i,i+"￿",!1,!0):IDBKeyRange.only(i);L(e.index(l),r,e=>{n.push(e),a()})}}):[]}async function F(e,t){let o=await M(e,t);return o.length?o.filter(e=>(e.shortcodes||[]).map(e=>e.toLowerCase()).includes(t.toLowerCase()))[0]||null:await I(e,e=>(e.shortcodes||[]).includes(t.toLowerCase()))||null}async function N(e,t){return E(e,a,m,(e,o,i)=>A(e,t,o=>{if(o)return i(o);A(e.index(g),t,e=>i(e||null))}))}function P(e,t,o){return E(e,t,m,(e,t,i)=>A(e,o,i))}const O=["name","url"];function U(e){!function(e){let t=e&&Array.isArray(e),o=t&&e.length&&(!e[0]||O.some(t=>!(t in e[0])));if(!t||o)throw Error("Custom emojis are in the wrong format")}(e);let t=(e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1,o=e.sort(t),i=function(e,t){let o=new Map;for(let i of e)for(let e of t(i)){let t=o;for(let o=0;o<e.length;o++){let i=e.charAt(o),n=t.get(i);n||(n=new Map,t.set(i,n)),t=n}let n=t.get("");n||(n=[],t.set("",n)),n.push(i)}return(e,t)=>{let i=o;for(let t=0;t<e.length;t++){let o=e.charAt(t),n=i.get(o);if(!n)return[];i=n}if(t)return i.get("")||[];let n=[],a=[i];for(;a.length;)for(let[e,t]of[...a.shift().entries()].sort((e,t)=>e[0]<t[0]?-1:1))""===e?n.push(...t):a.push(t);return n}}(e,e=>[...new Set((e.shortcodes||[]).map(e=>C(e)).flat())]),n=e=>i(e,!0),a=e=>i(e,!1),r=new Map,s=new Map;for(let t of e)for(let e of(s.set(t.name.toLowerCase(),t),t.shortcodes||[]))r.set(e.toLowerCase(),t);return{all:o,search:e=>{let o=C(e);return D(o.map((e,t)=>(t<o.length-1?n:a)(e)),e=>e.name).sort(t)},byShortcode:e=>r.get(e.toLowerCase()),byName:e=>s.get(e.toLowerCase())}}const q="undefined"!=typeof wrappedJSObject;function H(e){if(!e)return e;if(q&&(e=structuredClone(e)),delete e.tokens,e.skinTones){let t=e.skinTones.length;e.skins=Array(t);for(let o=0;o<t;o++)e.skins[o]={tone:e.skinTones[o],unicode:e.skinUnicodes[o],version:e.skinVersions[o]};delete e.skinTones,delete e.skinUnicodes,delete e.skinVersions}return e}function W(e){e||console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.")}const V=["annotation","emoji","group","order","tags","version"];function G(e,t){if(2!==Math.floor(e.status/100))throw Error("Failed to fetch: "+t+":  "+e.status)}async function X(e){let t=await fetch(e,{method:"HEAD"});G(t,e);let o=t.headers.get("etag");return W(o),o}async function Y(e){let t=await fetch(e);G(t,e);let o=t.headers.get("etag");W(o);let i=await t.json();return!function(e){if(!e||!Array.isArray(e)||!e[0]||"object"!=typeof e[0]||V.some(t=>!(t in e[0])))throw Error("Emoji data is in the wrong format")}(i),[o,i]}async function K(e){let t=function(e){for(var t=e.length,o=new ArrayBuffer(t),i=new Uint8Array(o),n=-1;++n<t;)i[n]=e.charCodeAt(n);return o}(JSON.stringify(e));return btoa(function(e){for(var t="",o=new Uint8Array(e),i=o.byteLength,n=-1;++n<i;)t+=String.fromCharCode(o[n]);return t}(await crypto.subtle.digest("SHA-1",t)))}async function J(e,t){let o;let i=await X(t);if(!i){let e=await Y(t);i=e[0],o=e[1],i||(i=await K(o))}await $(e,t,i)||(o||(o=(await Y(t))[1]),await B(e,o,t,i))}async function Q(e,t){let[o,i]=await Y(t);o||(o=await K(i)),await B(e,i,t,o)}class Z{constructor({dataSource:e="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",locale:t="en",customEmoji:o=[]}={}){this.dataSource=e,this.locale=t,this._dbName=`emoji-picker-element-${this.locale}`,this._db=void 0,this._lazyUpdate=void 0,this._custom=U(o),this._clear=this._clear.bind(this),this._ready=this._init()}async _init(){var e,t,o;let i;let n=this._db=await (v[e=this._dbName]||(v[e]=k(e)),v[e]);t=this._dbName,o=this._clear,(i=y[t])||(i=y[t]=[]),i.push(o);let a=this.dataSource;await _(n)?await Q(n,a):this._lazyUpdate=J(n,a)}async ready(){let e=async()=>(this._ready||(this._ready=this._init()),this._ready);await e(),this._db||await e()}async getEmojiByGroup(e){return n(e),await this.ready(),b(await R(this._db,e)).map(H)}async getEmojiBySearchQuery(e){return i(e),await this.ready(),[...this._custom.search(e),...b(await M(this._db,e)).map(H)]}async getEmojiByShortcode(e){return i(e),await this.ready(),this._custom.byShortcode(e)||H(await F(this._db,e))}async getEmojiByUnicodeOrName(e){return i(e),await this.ready(),this._custom.byName(e)||H(await N(this._db,e))}async getPreferredSkinTone(){return await this.ready(),await P(this._db,r,h)||0}async setPreferredSkinTone(e){return n(e),await this.ready(),E(this._db,r,p,(t,o)=>{t.put(e,h),z(o)})}async incrementFavoriteEmojiCount(e){return i(e),await this.ready(),E(this._db,s,p,(t,o)=>A(t,e,i=>{t.put((i||0)+1,e),z(o)}))}async getTopFavoriteEmoji(e){var t,o;return n(e),await this.ready(),(await (t=this._db,o=this._custom,0===e?[]:E(t,[s,a],m,([t,i],n,a)=>{let r=[];t.index(d).openCursor(void 0,"prev").onsuccess=t=>{let n=t.target.result;if(!n)return a(r);function s(t){if(r.push(t),r.length===e)return a(r);n.continue()}let l=n.primaryKey,d=o.byName(l);if(d)return s(d);A(i,l,e=>{if(e)return s(e);n.continue()})}}))).map(H)}set customEmoji(e){this._custom=U(e)}get customEmoji(){return this._custom.all}async _shutdown(){await this.ready();try{await this._lazyUpdate}catch(e){}}_clear(){this._db=this._ready=this._lazyUpdate=void 0}async close(){await this._shutdown(),await x(this._dbName)}async delete(){var e;await this._shutdown(),await (e=this._dbName,new Promise((t,o)=>{x(e),w(t,o,indexedDB.deleteDatabase(e))}))}}const ee=[[-1,"✨","custom"],[0,"\uD83D\uDE00","smileys-emotion"],[1,"\uD83D\uDC4B","people-body"],[3,"\uD83D\uDC31","animals-nature"],[4,"\uD83C\uDF4E","food-drink"],[5,"\uD83C\uDFE0️","travel-places"],[6,"⚽","activities"],[7,"\uD83D\uDCDD","objects"],[8,"⛔️","symbols"],[9,"\uD83C\uDFC1","flags"]].map(([e,t,o])=>({id:e,emoji:t,name:o})),et=ee.slice(1),eo="function"==typeof requestIdleCallback?requestIdleCallback:setTimeout;function ei(e){return e.unicode.includes("‍")}const en={"\uD83E\uDEE8":15.1,"\uD83E\uDEE0":14,"\uD83E\uDD72":13.1,"\uD83E\uDD7B":12.1,"\uD83E\uDD70":11,"\uD83E\uDD29":5,"\uD83D\uDC71‍♀️":4,"\uD83E\uDD23":3,"\uD83D\uDC41️‍\uD83D\uDDE8️":2,"\uD83D\uDE00":1,"\uD83D\uDE10️":.7,"\uD83D\uDE03":.6},ea=["\uD83D\uDE0A","\uD83D\uDE12","❤️","\uD83D\uDC4D️","\uD83D\uDE0D","\uD83D\uDE02","\uD83D\uDE2D","☺️","\uD83D\uDE14","\uD83D\uDE29","\uD83D\uDE0F","\uD83D\uDC95","\uD83D\uDE4C","\uD83D\uDE18"],er='"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',es=(e,t)=>e<t?-1:e>t?1:0,el=(e,t)=>{let o=document.createElement("canvas");o.width=o.height=1;let i=o.getContext("2d");return i.textBaseline="top",i.font=`100px ${er}`,i.fillStyle=t,i.scale(.01,.01),i.fillText(e,0,0),i.getImageData(0,0,1,1).data},ed=(e,t)=>{let o=[...e].join(",");return o===[...t].join(",")&&!o.startsWith("0,0,0,")},ec=()=>(e||(e=new Promise(e=>eo(()=>e(function(){let e=Object.entries(en);try{for(let[t,o]of e)if(function(e){let t=el(e,"#000"),o=el(e,"#fff");return t&&o&&ed(t,o)}(t))return o}catch(e){}finally{}return e[0][1]}())))),e),eu=new Map;function eh(e){e.preventDefault(),e.stopPropagation()}function em(e,t,o){return(t+=e?-1:1)<0?t=o.length-1:t>=o.length&&(t=0),t}function ep(e,t){let o=new Set,i=[];for(let n of e){let e=t(n);o.has(e)||(o.add(e),i.push(n))}return i}const eg=requestAnimationFrame;let eb="function"==typeof ResizeObserver;function ef(e){{let t=document.createRange();return t.selectNode(e.firstChild),t.getBoundingClientRect().width}}function ev(e,t,o){let i=e.get(t);return i||(i=o(),e.set(t,i)),i}const ey=new WeakMap,ew=new WeakMap,ek=Symbol("un-keyed"),eE="replaceChildren"in Element.prototype,ex="function"==typeof queueMicrotask?queueMicrotask:e=>Promise.resolve().then(e);function eS(e,t,o){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!o(e[i],t[i]))return!1;return!0}const eC=[],{assign:ej}=Object;var eT,eA={categoriesLabel:"Categories",emojiUnsupportedMessage:"Your browser does not support color emoji.",favoritesLabel:"Favorites",loadingMessage:"Loading…",networkErrorMessage:"Could not load emoji.",regionLabel:"Emoji picker",searchDescription:"When search results are available, press up or down to select and enter to choose.",searchLabel:"Search",searchResultsLabel:"Search results",skinToneDescription:"When expanded, press up or down to select and enter to choose.",skinToneLabel:"Choose a skin tone (currently {skinTone})",skinTonesLabel:"Skin tones",skinTones:["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],categories:{custom:"Custom","smileys-emotion":"Smileys and emoticons","people-body":"People and body","animals-nature":"Animals and nature","food-drink":"Food and drink","travel-places":"Travel and places",activities:"Activities",objects:"Objects",symbols:"Symbols",flags:"Flags"}};const eL=["customEmoji","customCategorySorting","database","dataSource","i18n","locale","skinToneEmoji","emojiVersion"],ez=`:host{--emoji-font-family:${er}}`;class eD extends HTMLElement{constructor(e){super(),this.attachShadow({mode:"open"});let t=document.createElement("style");for(let o of(t.textContent=":host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.custom-emoji,.emoji,button.emoji{height:var(--total-emoji-size);width:var(--total-emoji-size)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.custom-emoji{padding:var(--emoji-padding);object-fit:contain;pointer-events:none;background-repeat:no-repeat;background-position:center center;background-size:var(--emoji-size) var(--emoji-size)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}"+ez,this.shadowRoot.appendChild(t),this._ctx={locale:"en",dataSource:"https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",skinToneEmoji:"\uD83D\uDD90️",customCategorySorting:es,customEmoji:null,i18n:eA,emojiVersion:null,...e},eL))"database"!==o&&Object.prototype.hasOwnProperty.call(this,o)&&(this._ctx[o]=this[o],delete this[o]);this._dbFlush()}connectedCallback(){this._cmp||(this._cmp=function(e,o){let i={},n=new AbortController,a=n.signal,{state:r,createEffect:s}=function(e){let t,o,i=!1,n=new Map,a=new Set,r=()=>{if(i)return;let e=[...a];a.clear();try{for(let t of e)t()}finally{o=!1,a.size&&(o=!0,ex(r))}},s=new Proxy({},{get(e,o){if(t){let e=n.get(o);e||(e=new Set,n.set(o,e)),e.add(t)}return e[o]},set(e,t,i){e[t]=i;let s=n.get(t);if(s){for(let e of s)a.add(e);o||(o=!0,ex(r))}return!0}});return e.addEventListener("abort",()=>{i=!0}),{state:s,createEffect:e=>{let o=()=>{let i=t;t=o;try{return e()}finally{t=i}};return o()}}}(a);ej(r,{skinToneEmoji:void 0,i18n:void 0,database:void 0,customEmoji:void 0,customCategorySorting:void 0,emojiVersion:void 0}),ej(r,o),ej(r,{initialLoad:!0,currentEmojis:[],currentEmojisWithCategories:[],rawSearchText:"",searchText:"",searchMode:!1,activeSearchItem:-1,message:void 0,skinTonePickerExpanded:!1,skinTonePickerExpandedAfterAnimation:!1,currentSkinTone:0,activeSkinTone:0,skinToneButtonText:void 0,pickerStyle:void 0,skinToneButtonLabel:"",skinTones:[],currentFavorites:[],defaultFavoriteEmojis:void 0,numColumns:8,isRtl:!1,scrollbarWidth:0,currentGroupIndex:0,groups:et,databaseLoaded:!1,activeSearchItemId:void 0}),s(()=>{r.currentGroup!==r.groups[r.currentGroupIndex]&&(r.currentGroup=r.groups[r.currentGroupIndex])});let l=t=>{e.getElementById(t).focus()},d=t=>e.getElementById(`emo-${t.id}`),c=(e,t)=>{i.rootElement.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))},u=(e,t)=>e.id===t.id,h=(e,t)=>{let{category:o,emojis:i}=e,{category:n,emojis:a}=t;return o===n&&eS(i,a,u)},m=e=>{eS(r.currentEmojis,e,u)||(r.currentEmojis=e)},p=e=>{r.searchMode!==e&&(r.searchMode=e)},g=e=>{eS(r.currentEmojisWithCategories,e,h)||(r.currentEmojisWithCategories=e)},b=(e,t)=>t&&e.skins&&e.skins[t]||e.unicode,f={labelWithSkin:(e,t)=>ep([e.name||b(e,t),e.annotation,...e.shortcodes||eC].filter(Boolean),e=>e).join(", "),titleForEmoji:e=>e.annotation||(e.shortcodes||eC).join(", "),unicodeWithSkin:b},v={onClickSkinToneButton:function(e){r.skinTonePickerExpanded=!r.skinTonePickerExpanded,r.activeSkinTone=r.currentSkinTone,r.skinTonePickerExpanded&&(eh(e),eg(()=>l("skintone-list")))},onEmojiClick:A,onNavClick:function(e){let{target:t}=e,o=t.closest(".nav-button");if(!o)return;let n=parseInt(o.dataset.groupId,10);i.searchElement.value="",r.rawSearchText="",r.searchText="",r.activeSearchItem=-1,r.currentGroupIndex=r.groups.findIndex(e=>e.id===n)},onNavKeydown:function(e){let{target:t,key:o}=e,i=t=>{t&&(eh(e),t.focus())};switch(o){case"ArrowLeft":return i(t.previousElementSibling);case"ArrowRight":return i(t.nextElementSibling);case"Home":return i(t.parentElement.firstElementChild);case"End":return i(t.parentElement.lastElementChild)}},onSearchKeydown:function(e){if(!r.searchMode||!r.currentEmojis.length)return;let t=t=>{eh(e),r.activeSearchItem=em(t,r.activeSearchItem,r.currentEmojis)};switch(e.key){case"ArrowDown":return t(!1);case"ArrowUp":return t(!0);case"Enter":if(-1!==r.activeSearchItem)return eh(e),T(r.currentEmojis[r.activeSearchItem].id);r.activeSearchItem=0}},onSkinToneOptionsClick:function(e){let{target:{id:t}}=e,o=t&&t.match(/^skintone-(\d)/);o&&(eh(e),L(parseInt(o[1],10)))},onSkinToneOptionsFocusOut:z,onSkinToneOptionsKeydown:function(e){if(!r.skinTonePickerExpanded)return;let t=async t=>{eh(e),r.activeSkinTone=t};switch(e.key){case"ArrowUp":return t(em(!0,r.activeSkinTone,r.skinTones));case"ArrowDown":return t(em(!1,r.activeSkinTone,r.skinTones));case"Home":return t(0);case"End":return t(r.skinTones.length-1);case"Enter":return eh(e),L(r.activeSkinTone);case"Escape":return eh(e),r.skinTonePickerExpanded=!1,l("skintone-button")}},onSkinToneOptionsKeyup:function(e){if(r.skinTonePickerExpanded&&" "===e.key)return eh(e),L(r.activeSkinTone)},onSearchInput:function(e){r.rawSearchText=e.target.value}},y={calculateEmojiGridStyle:function(e){var t;let o;t=t=>{{let o=getComputedStyle(i.rootElement),n=parseInt(o.getPropertyValue("--num-columns"),10),a="rtl"===o.getPropertyValue("direction"),s=e.parentElement.getBoundingClientRect().width;r.numColumns=n,r.scrollbarWidth=s-t,r.isRtl=a}},eb?(o=new ResizeObserver(e=>t(e[0].contentRect.width))).observe(e):eg(()=>t(e.getBoundingClientRect().width)),a.addEventListener("abort",()=>{o&&o.disconnect()})}},w=!0;function k(){r.database.customEmoji=r.customEmoji||eC}function E(e){return!e.unicode||!ei(e)||eu.get(e.unicode)}async function x(e){let t=r.emojiVersion||await ec();return e.filter(({version:e})=>!e||e<=t)}async function S(e){return function(e,t){let o=e=>{let o={};for(let i of e)"number"==typeof i.tone&&i.version<=t&&(o[i.tone]=i.unicode);return o};return e.map(({unicode:e,skins:t,shortcodes:i,url:n,name:a,category:r,annotation:s})=>({unicode:e,name:a,shortcodes:i,url:n,category:r,annotation:s,id:e||a,skins:t&&o(t)}))}(e,r.emojiVersion||await ec())}async function C(e){let t=-1===e?r.customEmoji:await r.database.getEmojiByGroup(e);return S(await x(t))}async function j(e){return S(await x(await r.database.getEmojiBySearchQuery(e)))}async function T(e){let t=await r.database.getEmojiByUnicodeOrName(e),o=[...r.currentEmojis,...r.currentFavorites].find(t=>t.id===e),i=o.unicode&&b(o,r.currentSkinTone);await r.database.incrementFavoriteEmojiCount(e),c("emoji-click",{emoji:t,skinTone:r.currentSkinTone,...i&&{unicode:i},...o.name&&{name:o.name}})}async function A(e){let{target:t}=e;t.classList.contains("emoji")&&(eh(e),T(t.id.substring(4)))}function L(e){r.currentSkinTone=e,r.skinTonePickerExpanded=!1,l("skintone-button"),c("skin-tone-change",{skinTone:e}),r.database.setPreferredSkinTone(e)}async function z(e){let{relatedTarget:t}=e;t&&"skintone-list"===t.id||(r.skinTonePickerExpanded=!1)}return s(()=>{(function(e,t,o,i,n,a,r,s){let{labelWithSkin:l,titleForEmoji:d,unicodeWithSkin:c}=o,{html:u,map:h}=function(e){let t=ev(ew,e,()=>new Map),o=ek;return{map:function(e,t,i){return e.map((e,n)=>{let a=o;o=i(e);try{return t(e,n)}finally{o=a}})},html:function(e,...i){let n=ev(t,e,()=>new Map);return ev(n,o,()=>(function(e){let{template:t,elementsToBindings:o}=ev(ey,e,()=>(function(e){let t="",o=!1,i=!1,n=-1,a=new Map,r=[];for(let s=0,l=e.length;s<l;s++){let d,c,u;let h=e[s];if(t+=h,s===l-1)break;for(let e=0;e<h.length;e++)switch(h.charAt(e)){case"<":"/"===h.charAt(e+1)?r.pop():(o=!0,r.push(++n));break;case">":o=!1,i=!1;break;case"=":i=!0}let m=ev(a,r[r.length-1],()=>[]);if(i){let t=/(\S+)="?([^"=]*)$/.exec(h);d=t[1],c=t[2],u=/^[^">]*/.exec(e[s+1])[0]}let p={attributeName:d,attributeValuePre:c,attributeValuePost:u,expressionIndex:s};m.push(p),o||i||(t+=" ")}return{template:function(e){let t=document.createElement("template");return t.innerHTML=e,t}(t),elementsToBindings:a}})(e)),i=t.cloneNode(!0).content.firstElementChild,n=function(e,t){let o=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),n=e,a=-1;do{let e=t.get(++a);if(e)for(let t=0;t<e.length;t++){let i=e[t],a=i.attributeName?n:n.firstChild,r={binding:i,targetNode:a,targetParentNode:void 0,currentExpression:void 0};o.push(r)}}while(n=i.nextNode())return o}(i,o);return function(e){return function(e,t){for(let o of t){let{targetNode:t,currentExpression:i,binding:{expressionIndex:n,attributeName:a,attributeValuePre:r,attributeValuePost:s}}=o,l=e[n];if(i!==l){if(o.currentExpression=l,a)t.setAttribute(a,r+""+l+s);else{let e;Array.isArray(l)?function(e,t){let{targetNode:o}=t,{targetParentNode:i}=t,n=!1;if(i?n=function(e,t){let o=e.firstChild,i=0;for(;o;){if(t[i]!==o)return!0;o=o.nextSibling,i++}return i!==t.length}(i,e):(n=!0,t.targetNode=void 0,t.targetParentNode=i=o.parentNode),n){var a;a=i,eE?a.replaceChildren(...e):(a.innerHTML="",a.append(...e))}}(l,o):l instanceof Element?(e=l,t.replaceWith(e)):t.nodeValue=""+l,e&&(o.targetNode=e)}}}}(e,n),i}})(e))(i)}}}(t);function m(e,o,i){return h(e,(e,n)=>u`<button role="${o?"option":"menuitem"}" aria-selected="${t.searchMode?n===t.activeSearchItem:""}" aria-label="${l(e,t.currentSkinTone)}" title="${d(e)}" class="emoji ${o&&n===t.activeSearchItem?"active":""}" id="${`${i}-${e.id}`}">${e.unicode?c(e,t.currentSkinTone):u`<img class="custom-emoji" src="${e.url}" alt="" loading="lazy">`}</button>`,e=>`${i}-${e.id}`)}let p=u`<section data-ref="rootElement" class="picker" aria-label="${t.i18n.regionLabel}" style="${t.pickerStyle}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${t.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(t.searchMode&&t.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${t.activeSearchItemId?`emo-${t.activeSearchItemId}`:""}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${t.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${t.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${t.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${t.skinTonePickerExpanded?"hide-focus":""}" aria-label="${t.skinToneButtonLabel}" title="${t.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${t.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${t.skinToneButtonText}</button></div><span id="skintone-description" class="sr-only">${t.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${t.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${t.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${t.i18n.skinTonesLabel}" aria-activedescendant="skintone-${t.activeSkinTone}" aria-hidden="${!t.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${h(t.skinTones,(e,o)=>u`<div id="skintone-${o}" class="emoji ${o===t.activeSkinTone?"active":""}" aria-selected="${o===t.activeSkinTone}" role="option" title="${t.i18n.skinTones[o]}" aria-label="${t.i18n.skinTones[o]}">${e}</div>`,e=>e)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${t.groups.length},1fr)" aria-label="${t.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${h(t.groups,e=>u`<button role="tab" class="nav-button" aria-controls="tab-${e.id}" aria-label="${t.i18n.categories[e.name]}" aria-selected="${!t.searchMode&&t.currentGroup.id===e.id}" title="${t.i18n.categories[e.name]}" data-group-id="${e.id}"><div class="nav-emoji emoji">${e.emoji}</div></button>`,e=>e.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(t.isRtl?-1:1)*t.currentGroupIndex*100}%)"></div></div><div class="message ${t.message?"":"gone"}" role="alert" aria-live="polite">${t.message}</div><div data-ref="tabpanelElement" class="tabpanel ${!t.databaseLoaded||t.message?"gone":""}" role="${t.searchMode?"region":"tabpanel"}" aria-label="${t.searchMode?t.i18n.searchResultsLabel:t.i18n.categories[t.currentGroup.name]}" id="${t.searchMode?"":`tab-${t.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${h(t.currentEmojisWithCategories,(e,o)=>u`<div><div id="menu-label-${o}" class="category ${1===t.currentEmojisWithCategories.length&&""===t.currentEmojisWithCategories[0].category?"gone":""}" aria-hidden="true">${t.searchMode?t.i18n.searchResultsLabel:e.category?e.category:t.currentEmojisWithCategories.length>1?t.i18n.categories.custom:t.i18n.categories[t.currentGroup.name]}</div><div class="emoji-menu" role="${t.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${o}" id="${t.searchMode?"search-results":""}">${m(e.emojis,t.searchMode,"emo")}</div></div>`,e=>e.category)}</div></div><div class="favorites emoji-menu ${t.message?"gone":""}" role="menu" aria-label="${t.i18n.favoritesLabel}" style="padding-inline-end:${`${t.scrollbarWidth}px`}" data-on-click="onEmojiClick">${m(t.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`;if(s){e.appendChild(p);let t=(t,o)=>{for(let i of e.querySelectorAll(`[${t}]`))o(i,i.getAttribute(t))};for(let e of["click","focusout","input","keydown","keyup"])t(`data-on-${e}`,(t,o)=>{t.addEventListener(e,i[o])});t("data-ref",(e,t)=>{a[t]=e}),t("data-action",(e,t)=>{n[t](e)}),r.addEventListener("abort",()=>{e.removeChild(p)})}})(e,r,f,v,y,i,a,w),w=!1}),r.emojiVersion||ec().then(e=>{e||(r.message=r.i18n.emojiUnsupportedMessage)}),s(()=>{async function e(){let e=!1,t=setTimeout(()=>{e=!0,r.message=r.i18n.loadingMessage},1e3);try{await r.database.ready(),r.databaseLoaded=!0}catch(e){console.error(e),r.message=r.i18n.networkErrorMessage}finally{clearTimeout(t),e&&(e=!1,r.message="")}}r.database&&e()}),s(()=>{r.pickerStyle=`
      --num-groups: ${r.groups.length}; 
      --indicator-opacity: ${r.searchMode?0:1}; 
      --num-skintones: 6;`}),s(()=>{r.customEmoji&&r.database&&k()}),s(()=>{r.customEmoji&&r.customEmoji.length?r.groups!==ee&&(r.groups=ee):r.groups!==et&&(r.currentGroupIndex&&r.currentGroupIndex--,r.groups=et)}),s(()=>{(async function(){r.databaseLoaded&&(r.currentSkinTone=await r.database.getPreferredSkinTone())})()}),s(()=>{r.skinTones=Array(6).fill().map((e,t)=>(function(e,t){if(0===t)return e;let o=e.indexOf("‍");return -1!==o?e.substring(0,o)+String.fromCodePoint(127995+t-1)+e.substring(o):(e.endsWith("️")&&(e=e.substring(0,e.length-1)),e+"\ud83c"+String.fromCodePoint(57339+t-1))})(r.skinToneEmoji,t))}),s(()=>{r.skinToneButtonText=r.skinTones[r.currentSkinTone]}),s(()=>{r.skinToneButtonLabel=r.i18n.skinToneLabel.replace("{skinTone}",r.i18n.skinTones[r.currentSkinTone])}),s(()=>{async function e(){let{database:e}=r,t=(await Promise.all(ea.map(t=>e.getEmojiByUnicodeOrName(t)))).filter(Boolean);r.defaultFavoriteEmojis=t}r.databaseLoaded&&e()}),s(()=>{async function e(){k();let{database:e,defaultFavoriteEmojis:t,numColumns:o}=r,i=await e.getTopFavoriteEmoji(o),n=await S(ep([...i,...t],e=>e.unicode||e.name).slice(0,o));r.currentFavorites=n}r.databaseLoaded&&r.defaultFavoriteEmojis&&e()}),s(()=>{(async function(){let{searchText:e,currentGroup:t,databaseLoaded:o,customEmoji:i}=r;if(o){if(e.length>=2){let t=await j(e);r.searchText===e&&(m(t),p(!0))}else{let{id:e}=t;if(-1!==e||i&&i.length){let t=await C(e);r.currentGroup.id===e&&(m(t),p(!1))}}}else r.currentEmojis=[],r.searchMode=!1})()}),s(()=>{let{currentEmojis:e,emojiVersion:o}=r,n=e.filter(e=>e.unicode).filter(e=>ei(e)&&!eu.has(e.unicode));!o&&n.length?(m(e),eg(()=>{(function(e,o,i){for(let n of e){let e=ef(i(n));void 0===t&&(t=ef(o));let a=e/1.8<t;eu.set(n.unicode,a)}})(n,i.baselineEmoji,d),r.currentEmojis=r.currentEmojis})):(m(o?e:e.filter(E)),eg(()=>{var e;(e=i.tabpanelElement)&&(e.scrollTop=0)}))}),s(()=>{}),s(()=>{g(function(){let{searchMode:e,currentEmojis:t}=r;if(e)return[{category:"",emojis:t}];let o=new Map;for(let e of t){let t=e.category||"",i=o.get(t);i||(i=[],o.set(t,i)),i.push(e)}return[...o.entries()].map(([e,t])=>({category:e,emojis:t})).sort((e,t)=>r.customCategorySorting(e.category,t.category))}())}),s(()=>{r.activeSearchItemId=-1!==r.activeSearchItem&&r.currentEmojis[r.activeSearchItem].id}),s(()=>{let{rawSearchText:e}=r;eo(()=>{r.searchText=(e||"").trim(),r.activeSearchItem=-1})}),s(()=>{r.skinTonePickerExpanded?i.skinToneDropdown.addEventListener("transitionend",()=>{r.skinTonePickerExpandedAfterAnimation=!0},{once:!0}):r.skinTonePickerExpandedAfterAnimation=!1}),{$set(e){ej(r,e)},$destroy(){n.abort()}}}(this.shadowRoot,this._ctx))}disconnectedCallback(){ex(()=>{if(!this.isConnected&&this._cmp){this._cmp.$destroy(),this._cmp=void 0;let{database:e}=this._ctx;e.close().catch(e=>console.error(e))}})}static get observedAttributes(){return["locale","data-source","skin-tone-emoji","emoji-version"]}attributeChangedCallback(e,t,o){this._set(e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),"emoji-version"===e?parseFloat(o):o)}_set(e,t){this._ctx[e]=t,this._cmp&&this._cmp.$set({[e]:t}),["locale","dataSource"].includes(e)&&this._dbFlush()}_dbCreate(){let{locale:e,dataSource:t,database:o}=this._ctx;o&&o.locale===e&&o.dataSource===t||this._set("database",new Z({locale:e,dataSource:t}))}_dbFlush(){ex(()=>this._dbCreate())}}const e_={};for(const e of eL)e_[e]={get(){return"database"===e&&this._dbCreate(),this._ctx[e]},set(t){if("database"===e)throw Error("database is read-only");this._set(e,t)}};function e$(e){if("TEXTAREA"!==e.nodeName)return!1;if(void 0===eT){var t=document.createElement("textarea");t.value=1,eT=!!t.firstChild}return eT}Object.defineProperties(eD.prototype,e_),customElements.get("emoji-picker")||customElements.define("emoji-picker",eD);var eI=function(e,t){if(e.focus(),document.selection){var o=document.selection.createRange();o.text=t,o.collapse(!1),o.select();return}if(!document.execCommand("insertText",!1,t)){var i=e.selectionStart,n=e.selectionEnd;if("function"==typeof e.setRangeText)e.setRangeText(t);else{var a=document.createRange(),r=document.createTextNode(t);if(e$(e)){var s=e.firstChild;if(s){for(var l=0,d=null,c=null;s&&(null===d||null===c);){var u=s.nodeValue.length;i>=l&&i<=l+u&&a.setStart(d=s,i-l),n>=l&&n<=l+u&&a.setEnd(c=s,n-l),l+=u,s=s.nextSibling}i!==n&&a.deleteContents()}else e.appendChild(r)}if(e$(e)&&"#text"===a.commonAncestorContainer.nodeName)a.insertNode(r);else{var h=e.value;e.value=h.slice(0,i)+t+h.slice(n)}}e.setSelectionRange(i+t.length,i+t.length);var m=document.createEvent("UIEvent");m.initEvent("input",!0,!1),e.dispatchEvent(m)}};function eB(e){return null!==e&&"object"==typeof e?"share"in navigator&&"canShare"in navigator&&navigator.canShare(e):"share"in navigator}Object.defineProperty({},"WebShare",{get:function(){return eF},set:void 0,enumerable:!0,configurable:!0});let eR=`
  :host {
    display: inline-block;
  }
`,eM=document.createElement("template");eM.innerHTML=`
  <style>${eR}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class eF extends HTMLElement{#e;#t;#o=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(eM.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#t=this.#i()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#t&&(this.#t.toggleAttribute("disabled",this.disabled),this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#n("shareUrl"),this.#n("shareTitle"),this.#n("shareText"),this.#n("shareFiles"),this.#n("disabled"),this.#e?.addEventListener("slotchange",this.#a),this.#t?.addEventListener("click",this.#r)}disconnectedCallback(){this.#e?.removeEventListener("slotchange",this.#a),this.#t?.removeEventListener("click",this.#r)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#o}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#o=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#r=e=>{e.preventDefault(),this.disabled||this.share()};#a=e=>{e.target&&"button"===e.target.name&&(this.#t?.removeEventListener("click",this.#r),this.#t=this.#i(),this.#t&&(this.#t.addEventListener("click",this.#r),"BUTTON"===this.#t.nodeName||this.#t.hasAttribute("role")||this.#t.setAttribute("role","button")))};#i(){return this.#e&&this.#e.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#n(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="web-share"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eF)}}eF.defineCustomElement(),Object.defineProperty({},"CapturePhoto",{get:function(){return eq},set:void 0,enumerable:!0,configurable:!0});let eN=(e,t,o)=>(Number.isNaN(t)&&(t=0),Number.isNaN(o)&&(o=0),Math.min(Math.max(e,Math.min(t,o)),Math.max(t,o))),eP="capture-photo",eO=`
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
`,eU=document.createElement("template");eU.innerHTML=`
  <style>${eO}</style>

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
`;class eq extends HTMLElement{#e={};#t=null;#i=null;#s=null;#r=null;#a=null;#o=null;#n=null;#l=null;constructor(){super(),this.#e=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eU.content.cloneNode(!0))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}attributeChangedCallback(e,t,o){if(!this.isConnected)return;let i=this.getTrackCapabilities(),n=this.getTrackSettings();if("no-image"===e&&t!==o&&this.#d(),"facing-mode"===e&&t!==o&&"facingMode"in this.#e){let e=["user","environment"].includes(this.facingMode||"");"facingMode"in n&&e&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===e&&t!==o&&"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,t=0]=this.cameraResolution.split("x").map(e=>Number(e));if(e>0&&t>0&&"width"in i&&"height"in i){let o=!!(i.width?.min&&i.width?.max)&&e>=i?.width?.min&&e<=i?.width?.max,a=!!(i.height?.min&&i.height?.max)&&t>=i?.height?.min&&t<=i?.height?.max;"width"in n&&"height"in n&&o&&a&&(this.stopVideoStream(),this.startVideoStream())}}if("pan"===e&&t!==o&&"pan"in this.#e){let e=!!("pan"in i&&i.pan?.min&&i.pan?.max)&&this.pan>=i.pan.min&&this.pan<=i.pan.max;"pan"in n&&"number"==typeof this.pan&&e&&this.#c("pan",this.pan)}if("tilt"===e&&t!==o&&"tilt"in this.#e){let e=!!("tilt"in i&&i.tilt?.min&&i.tilt?.max)&&this.tilt>=i.tilt.min&&this.tilt<=i.tilt.max;"tilt"in n&&"number"==typeof this.tilt&&e&&this.#c("tilt",this.tilt)}if("zoom"===e&&t!==o&&"zoom"in this.#e){let e=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"zoom"in n&&"number"==typeof this.zoom&&e&&this.#c("zoom",this.zoom)}}connectedCallback(){if(this.#u("autpoPlay"),this.#u("noImage"),this.#u("facingMode"),this.#u("cameraResolution"),this.#u("pan"),this.#u("tilt"),this.#u("zoom"),this.#u("calculateFileSize"),this.#i=this.shadowRoot?.querySelector("canvas")||null,this.#s=this.shadowRoot?.getElementById("output")||null,this.#r=this.shadowRoot?.querySelector("video")||null,this.#a=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#o=this.#h(),this.#n=this.shadowRoot?.querySelector('slot[name="facing-mode-button"]')||null,this.#l=this.#m(),this.#r?.addEventListener("loadedmetadata",this.#p),this.#a?.addEventListener("slotchange",this.#g),this.#o?.addEventListener("click",this.#b),this.#n?.addEventListener("slotchange",this.#f),this.#l?.addEventListener("click",this.#v),!eq.isSupported())return this.dispatchEvent(new CustomEvent(`${eP}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#l?.removeEventListener("click",this.#v),this.#o?.removeEventListener("click",this.#b),this.#r?.removeEventListener("canplay",this.#p),this.#a?.removeEventListener("slotchange",this.#g),this.#n?.removeEventListener("slotchange",this.#f)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(e){this.toggleAttribute("auto-play",!!e)}get noImage(){return this.hasAttribute("no-image")}set noImage(e){this.toggleAttribute("no-image",!!e)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(e){this.setAttribute("facing-mode",e)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(e){this.setAttribute("camera-resolution",e)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(e){this.setAttribute("pan",null!=e?e.toString():e)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(e){this.setAttribute("tilt",null!=e?e.toString():e)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(e){this.setAttribute("zoom",null!=e?e.toString():e)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(e){this.toggleAttribute("calculate-file-size",!!e)}#v=e=>{e.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")};#b=e=>{e.preventDefault(),this.capture()};#p=e=>{let t=e.target;t.play().then(()=>{this.dispatchEvent(new CustomEvent(`${eP}:video-play`,{bubbles:!0,composed:!0,detail:{video:t}}))}).catch(e=>{this.dispatchEvent(new CustomEvent(`${eP}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}).finally(()=>{this.removeAttribute("loading")})};#d(){this.#s&&Array.from(this.#s.childNodes).forEach(e=>e.remove())}#c(e,t){if(!this.#t||!e||!t)return;let[o]=this.#t.getVideoTracks(),i=this.getTrackCapabilities();e in this.getTrackSettings()&&o.applyConstraints({advanced:[{[e]:eN(Number(t),i[e]?.min||1,i[e]?.max||1)}]})}#g=e=>{e.target?.name==="capture-button"&&(this.#o?.removeEventListener("click",this.#b),this.#o=this.#h(),this.#o&&(this.#o.addEventListener("click",this.#b),"BUTTON"===this.#o.nodeName||this.#o.hasAttribute("role")||this.#o.setAttribute("role","button")))};#f=e=>{e.target?.name==="facing-mode-button"&&(this.#l?.removeEventListener("click",this.#v),this.#l=this.#m(),this.#l&&(this.#l.addEventListener("click",this.#v),"BUTTON"===this.#l.nodeName||this.#l.hasAttribute("role")||this.#l.setAttribute("role","button")))};#m(){return this.#n&&this.#n.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"facing-mode-button"===e.getAttribute("slot"))||null}#h(){return this.#a&&this.#a.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"capture-button"===e.getAttribute("slot"))||null}#u(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}async startVideoStream(){if(!eq.isSupported()||this.#t)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,o=0]=this.cameraResolution.split("x").map(e=>Number(e));t>0&&o>0&&(e.video.width=t,e.video.height=o)}try{this.#t=await navigator.mediaDevices.getUserMedia(e),this.#r&&(this.#r.srcObject=this.#t),this.#c("pan",this.pan),this.#c("tilt",this.tilt),this.#c("zoom",this.zoom);let t=this.getTrackSettings();"facingMode"in t&&this.#n&&(this.#n.hidden=!1)}catch(e){this.dispatchEvent(new CustomEvent(`${eP}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}finally{this.removeAttribute("loading")}}stopVideoStream(){if(!this.#r||!this.#t)return;let[e]=this.#t.getVideoTracks();e?.stop(),this.#r.srcObject=null,this.#t=null}async capture(){if(!this.loading&&this.#i&&this.#r)try{let e=this.#i.getContext("2d"),t=this.#r.videoWidth,o=this.#r.videoHeight;this.#i.width=t,this.#i.height=o,e?.drawImage(this.#r,0,0,t,o);let i=this.#i.toDataURL("image/png");if("string"==typeof i&&i.includes("data:image")){if(!this.noImage){let e=new Image;e.src=i,e.width=t,e.height=o,e.setAttribute("part","output-image"),this.#d(),this.#s?.appendChild(e)}let e={dataURI:i,width:t,height:o};if(this.calculateFileSize)try{let t=await fetch(i),o=(await t.blob()).size;o&&(e.size=o)}catch(e){}this.dispatchEvent(new CustomEvent(`${eP}:success`,{bubbles:!0,composed:!0,detail:e}))}}catch(e){this.dispatchEvent(new CustomEvent(`${eP}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}getSupportedConstraints(){return eq.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getCapabilities&&e.getCapabilities()||{}}getTrackSettings(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getSettings&&e.getSettings()||{}}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(e=eP){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eq)}}eq.defineCustomElement(),Object.defineProperty({},"ModalElement",{get:function(){return eV},set:void 0,enumerable:!0,configurable:!0});let eH=document.createElement("template"),eW=`
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
`;eH.innerHTML=`
  <style>${eW}</style>

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
`;class eV extends HTMLElement{#t=null;#e=null;#s=null;#l=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eH.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#e=this.shadowRoot.querySelector('slot[name="footer"]'),this.#s=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(e,t,o){if(null!==this.#t){if("open"===e&&t!==o&&(this.open?(this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===e&&t!==o){let e=this.#t.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#t.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}"close-label"===e&&t!==o&&this.#a()}}connectedCallback(){this.#i("open"),this.#i("staticBackdrop"),this.#i("noHeader"),this.#i("noAnimations"),this.#i("noCloseButton"),this.#i("fullscreen"),this.#i("preserveOverflow"),this.#i("placement"),this.#i("closeLabel"),this.#t?.addEventListener("click",this.#r),this.#t?.addEventListener("close",this.#n),this.#t?.addEventListener("cancel",this.#o),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#u),this.#e?.addEventListener("slotchange",this.#h),this.#s?.addEventListener("slotchange",this.#c)}disconnectedCallback(){this.#l&&clearTimeout(this.#l),this.#t?.addEventListener("click",this.#r),this.#t?.removeEventListener("close",this.#n),this.#t?.removeEventListener("cancel",this.#o),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#u),this.#e?.removeEventListener("slotchange",this.#h),this.#s?.removeEventListener("slotchange",this.#c)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){this.toggleAttribute("static-backdrop",!!e)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){this.toggleAttribute("no-header",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){this.toggleAttribute("no-close-button",!!e)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){this.toggleAttribute("fullscreen",!!e)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(e){this.toggleAttribute("preserve-overflow",!!e)}get placement(){return this.getAttribute("placement")||"center"}set placement(e){this.setAttribute("placement",null!=e?e.toString():e)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(e){this.setAttribute("close-label",null!=e?e.toString():e)}#a(){if(null===this.#t)return;let e=this.#t.querySelector(".dialog__close");if(null===e)return;let t=this.#s?.assignedElements()||[];t?.some(e=>e.textContent?.replace(/\s/g,"")!=="")?e.removeAttribute("aria-label"):e.setAttribute("aria-label",this.closeLabel)}#g(){this.#l||(this.#t?.classList.add("dialog--pulse"),this.#l=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#l),this.#l=void 0},300))}#n=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#o=e=>{let t=this.#m("escape-key");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#g())};#u=e=>{let t=this.#m("close-button");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#g())};#r=e=>{let t=e.target;if(t===e.currentTarget){let e=this.#m("backdrop-click");this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#g():this.hide()}if(t instanceof HTMLElement&&null!==t.closest("[data-me-close]")){let e=this.#m("external-invoker");this.dispatchEvent(e),e.defaultPrevented?this.noAnimations||this.#g():this.hide()}};#h=()=>{if(null===this.#t)return;let e=this.#t.querySelector(".dialog__footer");if(null===e)return;let t=this.#e?.assignedNodes(),o=!!t&&t.length>0;e.hidden=!o};#c=()=>{this.#a()};#m(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#i(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eV)}}eV.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return e7},set:void 0,enumerable:!0,configurable:!0});let eG=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),eX=[".DS_Store","Thumbs.db"],eY=e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=(t.split(".").pop()||"").toLowerCase(),i=eG.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e},eK=(e,t)=>{let o=eY(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},eJ=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),eQ=async e=>{let t=[],o=await eJ(e);for(;o.length>0;)t.push(...o),o=await eJ(e);return t},eZ=e=>new Promise((t,o)=>{e.file(o=>t(eK(o,e.fullPath)),o)}),e0=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e){if(e.isFile){let o=await eZ(e);-1===eX.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await eQ(e.createReader()))}}return t},e1=async e=>{let t=[];for(let o of e)-1===eX.indexOf(o.name)&&t.push(eK(o));return t},e8=async e=>e.dataTransfer?e.dataTransfer.items?await e0(e.dataTransfer.items):await e1(e.dataTransfer.files):await e1(e.target.files),e3="files-dropzone",e2="TOO_MANY_FILES",e5=document.createElement("template"),e4=`
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
`;e5.innerHTML=`
  <style>
    ${e4}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class e7 extends HTMLElement{#t=null;#e=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(e5.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.getElementById("file-input"),this.#e=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?(this.#e?.removeAttribute("tabindex"),this.#e?.setAttribute("aria-disabled","true")):(this.#e?.setAttribute("tabindex","0"),this.#e?.setAttribute("aria-disabled","false"))),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple)}connectedCallback(){this.#s("accept"),this.#s("disabled"),this.#s("maxFiles"),this.#s("maxSize"),this.#s("minSize"),this.#s("multiple"),this.#s("autoFocus"),this.#s("noStyle"),this.#t?.addEventListener("change",this.#i),this.#e?.addEventListener("dragenter",this.#n),this.#e?.addEventListener("dragover",this.#a),this.#e?.addEventListener("dragleave",this.#r),this.#e?.addEventListener("drop",this.#o),this.#e?.addEventListener("click",this.#u),this.#e?.addEventListener("keyup",this.#l),this.autoFocus&&this.#e?.focus()}disconnectedCallback(){this.#t?.removeEventListener("change",this.#i),this.#e?.removeEventListener("dragenter",this.#n),this.#e?.removeEventListener("dragover",this.#a),this.#e?.removeEventListener("dragleave",this.#r),this.#e?.removeEventListener("drop",this.#o),this.#e?.removeEventListener("click",this.#u),this.#e?.removeEventListener("keyup",this.#l)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#i=async e=>{try{this.#p(await e8(e))}catch(e){this.dispatchEvent(new CustomEvent(`${e3}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}};#n=()=>{this.disabled||this.dispatchEvent(new Event(`${e3}-dragenter`,{bubbles:!0,composed:!0}))};#a=e=>{if(e.preventDefault(),this.disabled){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e&&(this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${e3}-dragover`,{bubbles:!0,composed:!0}))};#r=()=>{this.disabled||(this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${e3}-dragleave`,{bubbles:!0,composed:!0})))};#o=async e=>{if(!this.disabled){e.preventDefault(),this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"));try{this.#p(await e8(e))}catch(e){this.dispatchEvent(new CustomEvent(`${e3}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}};#u=()=>{this.disabled||this.#t?.click()};#l=e=>{this.disabled||" "!==e.key&&"Enter"!==e.key||this.#t?.click()};#p(e){if(!Array.isArray(e)||!e.length)return;let t=[],o=[],i=e.length;if(!this.multiple&&i>1)for(let t of e)o.push({file:t,errors:[{code:e2,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let t of e)o.push({file:t,errors:[{code:e2,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of e){let e=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,n=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(i,this.accept),n=i.size>this.maxSize,a=i.size<this.minSize;if(!e||n||a){let t=[];e||t.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),n&&t.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),a&&t.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:t})}else t.push(i)}this.dispatchEvent(new CustomEvent(`${e3}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t,rejectedFiles:o}})),t.length>0&&this.dispatchEvent(new CustomEvent(`${e3}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${e3}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#t&&(this.#t.value=this.#t.defaultValue)}openFileDialog(){this.disabled||this.#t?.click()}#s(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=e3){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,e7)}}e7.defineCustomElement();const e6=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"],e9=(e="",t="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${o}${"string"==typeof t&&""!==t?"-"+t:""}`},te=async(e={})=>{let t=await fetch(e.url),o=await t.blob(),i=e.mimeType||o.type||"";if(!e6.includes(i))throw Error(`This is not an accepted image format. Accepted MIME types are: ${e6.join(", ")}`);return new File([o],e.filename||"",o)},tt=localStorage,to=new class{#y=null;#w=null;constructor(e,t=localStorage){if(!e)throw Error("Storage prefix is required");if(t!==localStorage&&t!==sessionStorage)throw Error("Storage provider is not supported");this.#y=e,this.#w=t}set(e,t){try{this.#w.setItem(`${this.#y}${e}`,JSON.stringify(t))}catch(e){console.error("Error saving to storage",e)}}get(e){try{let t=this.#w.getItem(`${this.#y}${e}`);return t?JSON.parse(t):null}catch(e){return console.error("Error getting from storage",e),null}}}("meme-generator/",tt),ti=e=>"string"==typeof e;var tn={};tn=new URL("Pressuru.684952ea.ttf",import.meta.url).toString();var ta={};ta=new URL("Oswald-Regular.89ec7d89.ttf",import.meta.url).toString();var tr={};tr=new URL("Oswald-Bold.0f6a7ca6.ttf",import.meta.url).toString();var ts={};ts=new URL("Roboto-Regular.ca197847.ttf",import.meta.url).toString();var tl={};tl=new URL("Roboto-Bold.fdb9b54a.ttf",import.meta.url).toString();var td={};td=new URL("RobotoCondensed-Regular.d585f5c7.ttf",import.meta.url).toString();var tc={};tc=new URL("RobotoCondensed-Bold.e1f96d4b.ttf",import.meta.url).toString();var tu={};tu=new URL("CourierPrime-Regular.3a25a501.ttf",import.meta.url).toString();var th={};th=new URL("CourierPrime-Bold.3d6bf689.ttf",import.meta.url).toString();var tm={};tm=new URL("OpenSans-Regular.edf9e01b.ttf",import.meta.url).toString();var tp={};tp=new URL("OpenSans-Bold.8fceb72b.ttf",import.meta.url).toString();const tg=[{name:"Pressuru",label:"Pressuru",path:o(tn),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:o(ta),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:o(tr),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:o(ts),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:o(tl),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:o(td),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:o(tc),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:o(tu),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:o(th),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:o(tm),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:o(tp),style:"normal",weight:"400"}],tb=async(e,t,o={})=>{try{let i=new FontFace(e,`url(${t})`,{...o});await i.load(),document.fonts.add(i)}catch(e){console.error(e)}},tf=document.getElementById("errorsContainer"),tv=e=>{let t=e.currentTarget;t.removeEventListener("click",tv),tf.removeChild(t.parentNode)},ty=(e="",t="info")=>{["info","warning","danger"].includes(t)||(t="info");let o=`
    ${e}
    <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
  `,i=document.createElement("div");i.className=`alert alert-${t} alert-dismissible text-break mb-2 fade`,i.innerHTML=o,i.querySelector("button").addEventListener("click",tv),tf.appendChild(i),setTimeout(()=>i.classList.add("show"),100)},tw={id:"",text:"",fillColor:"#ffffff",strokeColor:"#000000",font:"Pressuru",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:0,strokeWidth:1.5,offsetY:0,offsetX:0,rotate:0,allCaps:!0},tk=new Map;class tE{constructor(e){let t=e9("textbox",Date.now().toString(36));this.data=e?{...e,id:t}:{...tw,id:t},tk.set(t,this),document.dispatchEvent(new CustomEvent("textbox-create",{bubbles:!0,composed:!0,detail:{textbox:this}}))}getData(){return this.data}static create(e){return new tE(e)}static getAll(){return tk}static getById(e){return tk.get(e)}static remove(e){tk.delete(e),document.dispatchEvent(new CustomEvent("textbox-remove",{bubbles:!0,composed:!0,detail:{id:e}}))}static createElement(e,t=!0){if(!(e instanceof tE))return;let o=e.getData(),{id:i,text:n,fillColor:a,strokeColor:r,fontSize:s,shadowBlur:l,strokeWidth:d,offsetX:c,offsetY:u,rotate:h}=o,m=`
    <div class="d-flex align-items-center">
      <button type="button" class="btn btn-link" data-button="duplicate-text-box" title="Duplicate text box"></button>
      <button type="button" class="btn btn-link" data-button="delete-text-box" title="Remove text box"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="Text #${tk.size}">${n}</textarea>

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
              ${tg.map(({name:e,label:t})=>`<option value="${e}">${t}</option>`)}
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
  `,p=document.createDocumentFragment(),g=document.createElement("div");g.setAttribute("id",i),g.setAttribute("data-section","textbox"),g.className="bg-light border shadow-sm mb-3 rounded",g.innerHTML=m,g.querySelectorAll("select").forEach(e=>e.value=o[e.dataset.input]),g.querySelectorAll('input[type="checkbox"]').forEach(e=>e.checked=o[e.dataset.input]);let b=p.appendChild(g);return t&&setTimeout(()=>b.querySelector('[data-input="text"]').focus(),0),b}}class tx{#k=null;#E=null;constructor(e){this.#k=e,this.#E=this.#k.getContext("2d")}get width(){return this.#k.width}set width(e){this.#k.width=e}get height(){return this.#k.height}set height(e){this.#k.height=e}getDimensions(){return{width:this.width,height:this.height}}setDimensions({width:e,height:t}){return this.width=e,this.height=t,this}toDataURL(){return this.#k.toDataURL()}draw(e,t=new Map){if(null==e)return;let o=this.#k,i=this.#E;i.clearRect(0,0,o.width,o.height),ti(e)?(i.fillStyle=e,i.fillRect(0,0,o.width,o.height)):i.drawImage(e,0,0,o.width,o.height);let n=0;return t.forEach(e=>{let{data:t}=e;n+=1,i.save(),i.font=`${t.fontWeight} ${t.fontSize*o.width/1e3}px ${t.font}`,i.fillStyle=t.fillColor,i.textAlign=t.textAlign,i.strokeStyle=t.strokeColor;let a=i.measureText("M").width+t.fontSize/2,r=o.width/2,s=t.shadowBlur,l=(!0===t.allCaps?t.text.toUpperCase():t.text).split("\n");0!==s&&(i.shadowOffsetX=0,i.shadowOffsetY=0,i.shadowBlur=Math.min(s,20),i.shadowColor=t.strokeColor),i.translate(r+t.offsetX,a*n+t.offsetY),i.rotate(Math.min(t.rotate,360)*Math.PI/180),l.forEach((e,t)=>i.fillText(e,0,t*a)),0!==s&&(i.shadowBlur=0,l.forEach((e,t)=>i.fillText(e,0,t*a))),t.strokeWidth>0&&(i.lineWidth=Math.min(t.strokeWidth,20),l.forEach((e,t)=>i.strokeText(e,0,t*a))),i.restore()}),this}clear(){return this.#E.clearRect(0,0,this.#k.width,this.#k.height),this}show(){return this.#k.hidden=!1,this}hide(){return this.#k.hidden=!0,this}static createInstance(e){return new tx(e)}}const tS=tx.createInstance(document.getElementById("canvas")),tC=document.getElementById("videoModal"),tj=document.getElementById("downloadModal"),tT=document.querySelector("files-dropzone"),tA=document.getElementById("instructions"),tL=document.getElementById("imageUploadMethodSelect"),tz=document.getElementById("fileSelectBtn"),tD=document.getElementById("imageUrlForm"),t_=document.getElementById("addTextboxBtn"),t$=document.getElementById("textboxesContainer"),tI=document.getElementById("generateMemeBtn"),tB=document.getElementById("openVideoModalBtn"),tR=document.getElementById("downloadMemeBtn"),tM=document.getElementById("downloadMemePreview"),tF=document.querySelector("web-share"),tN=document.getElementById("gallery"),tP=document.getElementById("gallerySearch"),tO=tN.querySelector(".gallery__no-results"),tU=document.getElementById("solidColorForm"),tq=document.querySelectorAll(".upload-method"),tH=document.getElementById("removeConfirmationModal"),tW=document.getElementById("removeTextForm"),tV=document.getElementById("maxImageDimensionsForm"),tG=tV.maxImageDimensions,tX=document.getElementById("clearCanvasBtn"),tY=to.get("maxImageDimensions");let tK=!1,tJ=null,tQ=null;const tZ=async()=>{let e=tS.toDataURL("image/png"),t=`${e9("meme")}.png`,o=e.replace("image/png","image/octet-stream");if(tR.download=t,tR.href=o,tM.width=tS.getDimensions().width,tM.height=tS.getDimensions().height,tM.src=o,eB())try{let o=await te({url:e,filename:t,mimeType:"image/png"}).catch(e=>ty(e.message,"danger"));o&&eB({files:[o]})&&(tF.shareFiles=[o],tF.hidden=!1)}catch(e){console.error(e)}window.requestAnimationFrame(()=>{tj.open=!0})},t0=e=>{let[t,o]=tV.maxImageDimensions.value.split("x"),i=Number(t)||800,n=Number(o)||600,a=e.width,r=e.height;a>r?a>i&&(r*=i/a,a=i):r>n&&(a*=n/r,r=n),tS.setDimensions({width:a,height:r})},t1=()=>{tS.draw(tJ,tE.getAll()).show(),tT.classList.add("dropzone--accepted"),tT.disabled=!0,tI.disabled=!1,tA.hidden=!0,tX.hidden=!1},t8=e=>{t0(tJ=e.target),t1()},t3=e=>{if(!e)return;let t=new Image,o=new FileReader;o.addEventListener("load",function(e){let o=e.target.result;t.addEventListener("load",t8),t.src=o}),o.readAsDataURL(e)},t2=(e,t,o)=>{let i=tE.getById(t).getData();switch(e.type){case"checkbox":i[o]=e.checked;break;case"number":i[o]=Number(e.value);break;default:i[o]=e.value}tS.draw(tJ,tE.getAll())},t5=async e=>{e.preventDefault();let t=e.target,o=t.querySelector('button[type="submit"]'),i=t.imageUrl.value;if(i.trim()){o.disabled=!0,o.querySelector(".spinner").hidden=!1,o.querySelector(".label").hidden=!0;try{let e=await te({url:i}).catch(e=>ty(e.message,"danger"));e&&t3(e)}catch{ty(`Failed to load image from "${i}".`,"danger")}finally{o.disabled=!1,o.querySelector(".spinner").hidden=!0,o.querySelector(".label").hidden=!1}}},t4=(e,t)=>()=>{let o=document.getElementById(e),i=o.querySelector('[data-input="offsetY"]'),n=o.querySelector('[data-input="offsetX"]'),a=tE.getById(e);if(!a)return;let r=a.getData();switch(t=t.toLowerCase()){case"up":r.offsetY-=1,i.value=r.offsetY;break;case"down":r.offsetY+=1,i.value=r.offsetY;break;case"left":r.offsetX-=1,n.value=r.offsetX;break;case"right":r.offsetX+=1,n.value=r.offsetX}tS.draw(tJ,tE.getAll()),tQ=requestAnimationFrame(t4(e,t))},t7=async e=>{let t=e.target.closest("button");if(!t)return;let o=t.querySelector("img");try{let e=await te({url:o.src}).catch(e=>ty(e.message,"danger"));e&&t3(e)}catch{ty(`Failed to load image: "${o.alt}".`,"danger")}};tz.addEventListener("click",()=>{"function"==typeof tT.openFileDialog&&tT.openFileDialog()}),tB.addEventListener("click",()=>{tC.open=!0}),t_.addEventListener("click",()=>tE.create()),tI.addEventListener("click",tZ),tR.addEventListener("click",()=>tj.open=!1),tD.addEventListener("submit",t5),tT.addEventListener("files-dropzone-drop-accepted",e=>{let[t]=e.detail.acceptedFiles;t&&t3(t)}),t$.addEventListener("input",e=>{let t;let o=e.target,i=o.closest('[data-section="textbox"]').id;o.matches('[data-input="text"]')?t="text":o.matches('[data-input="fillColor"]')?t="fillColor":o.matches('[data-input="strokeColor"]')?t="strokeColor":o.matches('[data-input="font"]')?t="font":o.matches('[data-input="fontSize"]')?t="fontSize":o.matches('[data-input="fontWeight"]')?t="fontWeight":o.matches('[data-input="textAlign"]')?t="textAlign":o.matches('[data-input="shadowBlur"]')?t="shadowBlur":o.matches('[data-input="offsetY"]')?t="offsetY":o.matches('[data-input="offsetX"]')?t="offsetX":o.matches('[data-input="rotate"]')?t="rotate":o.matches('[data-input="strokeWidth"]')&&(t="strokeWidth"),t&&t2(o,i,t)}),t$.addEventListener("change",e=>{let t;let o=e.target,i=o.closest('[data-section="textbox"]').id;o.matches('[data-input="allCaps"]')&&(t="allCaps"),t&&t2(o,i,t)}),t$.addEventListener("click",e=>{let t=e.target;if(t.matches('[data-button="settings"]')){let e=t.closest('[data-section="textbox"]'),o=e?.querySelector('[data-section="settings"]');o&&(o.hidden=!o.hidden)}if(t.matches('[data-button="duplicate-text-box"')){let e=t.closest('[data-section="textbox"]'),o=tE.getById(e.id);tE.create({...o.data})}if(t.matches('[data-button="delete-text-box"]')){let e=t.closest('[data-section="textbox"]').id,o=tE.getById(e);if(o&&o.data.text.trim()){let t=tW["textbox-id"];t&&(t.value=e,tH.open=!0)}else tE.remove(e)}}),t$.addEventListener("pointerdown",e=>{let t=e.target,o=t.closest('[data-section="textbox"]');o&&t.matches('[data-action="move-text"]')&&(tQ=requestAnimationFrame(t4(o.id,t.getAttribute("aria-label"))))}),t$.addEventListener("pointerup",e=>{e.target.matches('[data-action="move-text"]')&&(cancelAnimationFrame&&cancelAnimationFrame(tQ),tQ=null)}),t$.addEventListener("pointerout",e=>{e.target.matches('[data-action="move-text"]')&&(cancelAnimationFrame&&cancelAnimationFrame(tQ),tQ=null)}),t$.addEventListener("keydown",e=>{let t=e.target,o=t.closest('[data-section="textbox"]');t.matches('[data-action="move-text"]')&&(" "===e.key||"Enter"===e.key)&&(tQ&&cancelAnimationFrame(tQ),tQ=requestAnimationFrame(t4(o.id,t.getAttribute("aria-label"))))}),t$.addEventListener("keyup",e=>{e.target.matches('[data-action="move-text"]')&&(" "===e.key||"Enter"===e.key)&&(tQ&&cancelAnimationFrame(tQ),tQ=null)}),tL.addEventListener("change",e=>{tq.forEach(t=>t.hidden=t.id!==e.target.value),tV.hidden="solidColorForm"===e.target.value}),tN.addEventListener("click",t7),tP.addEventListener("input",e=>{let t=e.target.value.toLowerCase().trim();tN.querySelectorAll("button").forEach(e=>{let o=(e.querySelector("img").getAttribute("alt")||"").toLowerCase();e.hidden=!o.includes(t)}),tO.hidden=!!tN.querySelector("button:not([hidden])")}),tU.addEventListener("input",e=>{e.target===tU.canvasColor&&(tJ=e.target.value),ti(tJ)&&(tS.setDimensions({width:Number(tU.canvasWidth.value)||800,height:Number(tU.canvasHeight.value)||600}),t1())}),document.addEventListener("web-share:error",()=>{tj.open=!1,ty("There was an error while trying to share your meme.","danger")}),document.addEventListener("capture-photo:error",e=>{let t=e.detail.error,o="An error occurred while trying to capture photo.";t instanceof Error&&("NotAllowedError"===t.name||"NotFoundError"===t.name)&&(o+=" Make sure you have a camera connected and you have granted the appropriate permissions."),ty(o,"danger"),tC.open=!1,console.error(t)}),document.addEventListener("capture-photo:success",e=>{tC.open=!1;let t=new Image;t.addEventListener("load",t8),t.src=e.detail.dataURI}),document.addEventListener("me-open",e=>{if("videoModal"===e.target.id){let e=tC.querySelector("capture-photo");e&&"function"==typeof e.startVideoStream&&e.startVideoStream()}}),document.addEventListener("me-close",e=>{if("videoModal"===e.target.id){let e=tC.querySelector("capture-photo");e&&"function"==typeof e.stopVideoStream&&e.stopVideoStream()}"removeConfirmationModal"===e.target.id&&tW.reset()}),document.addEventListener("emoji-click",e=>{let t=e.target.closest('[data-section="textbox"]');if(t){let o=t.querySelector('[data-input="text"]'),i=e.detail.unicode;o&&eI(o,i)}}),document.addEventListener("textbox-create",e=>{let t=e.detail.textbox,o=tE.createElement(t,tK);tK=!0,t$.appendChild(o),t.getData().text&&tS.draw(tJ,tE.getAll())}),document.addEventListener("textbox-remove",e=>{let t=document.getElementById(e.detail.id);t&&t.remove(),t$.querySelectorAll('[data-section="textbox"]').forEach((e,t)=>{e.querySelector('[data-input="text"]').setAttribute("placeholder",`Text #${t+1}`)}),tS.draw(tJ,tE.getAll())}),tW.addEventListener("submit",e=>{e.preventDefault();let t=e.target["textbox-id"].value;t&&(tE.remove(t),tH.open=!1)}),tV.addEventListener("change",e=>{e.target.matches('[name="maxImageDimensions"]')&&to.set("maxImageDimensions",e.target.value),!tJ||ti(tJ)||(t0(tJ),tS.draw(tJ,tE.getAll()))}),tX.addEventListener("click",e=>{tJ&&(e.stopPropagation(),tJ=null,tT.classList.remove("dropzone--accepted"),tI.disabled=!0,tA.hidden=!1,tX.hidden=!0,tT.disabled=!1,tS.clear().hide())}),tN.querySelectorAll("button > img")?.forEach(e=>{e.setAttribute("title",e.getAttribute("alt"))}),tE.create(),tT.accept=e6,tg.forEach(({name:e,path:t,style:o,weight:i})=>{tb(e,t,{style:o,weight:i})}),tY&&(tG.value=tY),tG.disabled=!1;
//# sourceMappingURL=index.f29807ba.js.map
