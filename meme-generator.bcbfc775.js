let e,t;function o(e){return e&&e.__esModule?e.default:e}function i(e){return new URL(r+(e=d.i?.[e]||e),import.meta.url).toString()}var n,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="./",s={},l={},d=a.parcelRequire5078;function c(e){if("string"!=typeof e||!e)throw Error("expected a non-empty string, got: "+e)}function u(e){if("number"!=typeof e)throw Error("expected a number, got: "+e)}null==d&&((d=function(e){if(e in s)return s[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return s[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},a.parcelRequire5078=d),d.register,Object.assign(d.i??={},{lRBOd:"Pressuru.684952ea.ttf",hOimC:"Oswald-Regular.89ec7d89.ttf",c5nso:"Oswald-Bold.0f6a7ca6.ttf","917SN":"Roboto-Regular.ca197847.ttf",kCRYk:"Roboto-Bold.fdb9b54a.ttf","7mTjM":"RobotoCondensed-Regular.d585f5c7.ttf",bNJU7:"RobotoCondensed-Bold.e1f96d4b.ttf","2zTNP":"CourierPrime-Regular.3a25a501.ttf","6U5us":"CourierPrime-Bold.3d6bf689.ttf",jadM2:"OpenSans-Regular.edf9e01b.ttf","4rZHV":"OpenSans-Bold.8fceb72b.ttf"});const h="emoji",m="keyvalue",p="favorites",g="tokens",b="count",f="group-order",v="eTag",y="skinTone",w="readonly",E="readwrite",k="skinUnicodes";function x(e){return function(e,t){let o=new Set,i=[];for(let n of e){let e=t(n);o.has(e)||(o.add(e),i.push(n))}return i}(e,e=>e.unicode)}const S={},C={},A={};function T(e,t,o){o.onerror=()=>t(o.error),o.onblocked=()=>t(Error("IDB blocked")),o.onsuccess=()=>e(o.result)}async function L(e){let t=await new Promise((t,o)=>{let i=indexedDB.open(e,1);S[e]=i,i.onupgradeneeded=e=>{e.oldVersion<1&&function(e){function t(t,o,i){let n=o?e.createObjectStore(t,{keyPath:o}):e.createObjectStore(t);if(i)for(let[e,[t,o]]of Object.entries(i))n.createIndex(e,t,{multiEntry:o});return n}t(m),t(h,"unicode",{[g]:["tokens",!0],[f]:[["group","order"]],[k]:["skinUnicodes",!0]}),t(p,void 0,{[b]:[""]})}(i.result)},T(t,o,i)});return t.onclose=()=>_(e),t}function j(e,t,o,i){return new Promise((n,a)=>{let r,s=e.transaction(t,o,{durability:"relaxed"});i("string"==typeof t?s.objectStore(t):t.map(e=>s.objectStore(e)),s,e=>{r=e}),s.oncomplete=()=>n(r),s.onerror=()=>a(s.error)})}function _(e){let t=S[e],o=t&&t.result;if(o){o.close();let t=A[e];if(t)for(let e of t)e()}delete S[e],delete C[e],delete A[e]}const z=new Set([":D","XD",":'D","O:)",":X",":P",";P","XP",":L",":Z",":j","8D","XO","8)",":B",":O",":S",":'o","Dx","X(","D:",":C",">0)",":3","</3","<3","\\M/",":E","8#"]);function D(e){return e.split(/[\s_]+/).map(e=>!e.match(/\w/)||z.has(e)?e.toLowerCase():e.replace(/[)(:,]/g,"").replace(/’/g,"'").toLowerCase()).filter(Boolean)}function I(e){return e.filter(Boolean).map(e=>e.toLowerCase()).filter(e=>e.length>=2)}function $(e,t,o,i){e[t](o).onsuccess=e=>i&&i(e.target.result)}function O(e,t,o){$(e,"get",t,o)}function B(e,t,o){$(e,"getAll",t,o)}function R(e){e.commit&&e.commit()}function M(e,t){let o=function(e,t){let o=e[0];for(let i=1;i<e.length;i++){let n=e[i];t(o)>t(n)&&(o=n)}return o}(e,e=>e.length),i=[];for(let n of o)e.some(e=>-1===e.findIndex(e=>t(e)===t(n)))||i.push(n);return i}async function N(e){return!await G(e,m,"url")}async function F(e,t,o){let[i,n]=await Promise.all([v,"url"].map(t=>G(e,m,t)));return i===o&&n===t}async function P(e,t){return j(e,h,w,(e,o,i)=>{let n,a=()=>{e.getAll(n&&IDBKeyRange.lowerBound(n,!0),50).onsuccess=e=>{let o=e.target.result;for(let e of o)if(n=e.unicode,t(e))return i(e);if(o.length<50)return i();a()}};a()})}async function H(e,t,o,i){{let n=t.map(({annotation:e,emoticon:t,group:o,order:i,shortcodes:n,skins:a,tags:r,emoji:s,version:l})=>{let d=[...new Set(I([...(n||[]).map(D).flat(),...(r||[]).map(D).flat(),...D(e),t]))].sort(),c={annotation:e,group:o,order:i,tags:r,tokens:d,unicode:s,version:l};if(t&&(c.emoticon=t),n&&(c.shortcodes=n),a)for(let{tone:e,emoji:t,version:o}of(c.skinTones=[],c.skinUnicodes=[],c.skinVersions=[],a))c.skinTones.push(e),c.skinUnicodes.push(t),c.skinVersions.push(o);return c});await j(e,[h,m],E,([e,t],a)=>{let r,s,l=0;function d(){2==++l&&function(){if(r!==i||s!==o){for(let t of(e.clear(),n))e.put(t);t.put(i,v),t.put(o,"url"),R(a)}}()}O(t,v,e=>{r=e,d()}),O(t,"url",e=>{s=e,d()})})}}async function q(e,t){return j(e,h,w,(e,o,i)=>{let n=IDBKeyRange.bound([t,0],[t+1,0],!1,!0);B(e.index(f),n,i)})}async function U(e,t){let o=I(D(t));return o.length?j(e,h,w,(e,t,i)=>{let n=[],a=()=>{n.length===o.length&&r()},r=()=>{i(M(n,e=>e.unicode).sort((e,t)=>e.order<t.order?-1:1))};for(let t=0;t<o.length;t++){let i=o[t],r=t===o.length-1?IDBKeyRange.bound(i,i+"￿",!1,!0):IDBKeyRange.only(i);B(e.index(g),r,e=>{n.push(e),a()})}}):[]}async function V(e,t){let o=await U(e,t);return o.length?o.filter(e=>(e.shortcodes||[]).map(e=>e.toLowerCase()).includes(t.toLowerCase()))[0]||null:await P(e,e=>(e.shortcodes||[]).includes(t.toLowerCase()))||null}async function W(e,t){return j(e,h,w,(e,o,i)=>O(e,t,o=>{if(o)return i(o);O(e.index(k),t,e=>i(e||null))}))}function G(e,t,o){return j(e,t,w,(e,t,i)=>O(e,o,i))}const Y=["name","url"];function X(e){let t=e&&Array.isArray(e),o=t&&e.length&&(!e[0]||Y.some(t=>!(t in e[0])));if(!t||o)throw Error("Custom emojis are in the wrong format");let i=(e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1,n=e.sort(i),a=function(e,t){let o=new Map;for(let i of e)for(let e of t(i)){let t=o;for(let o=0;o<e.length;o++){let i=e.charAt(o),n=t.get(i);n||(n=new Map,t.set(i,n)),t=n}let n=t.get("");n||(n=[],t.set("",n)),n.push(i)}return(e,t)=>{let i=o;for(let t=0;t<e.length;t++){let o=e.charAt(t),n=i.get(o);if(!n)return[];i=n}if(t)return i.get("")||[];let n=[],a=[i];for(;a.length;)for(let[e,t]of[...a.shift().entries()].sort((e,t)=>e[0]<t[0]?-1:1))""===e?n.push(...t):a.push(t);return n}}(e,e=>{let t=new Set;if(e.shortcodes)for(let o of e.shortcodes)for(let e of D(o))t.add(e);return t}),r=new Map,s=new Map;for(let t of e)for(let e of(s.set(t.name.toLowerCase(),t),t.shortcodes||[]))r.set(e.toLowerCase(),t);return{all:n,search:e=>{let t=D(e);return M(t.map((e,o)=>(o<t.length-1?e=>a(e,!0):e=>a(e,!1))(e)),e=>e.name).sort(i)},byShortcode:e=>r.get(e.toLowerCase()),byName:e=>s.get(e.toLowerCase())}}const K="undefined"!=typeof wrappedJSObject;function J(e){if(!e)return e;if(K&&(e=structuredClone(e)),delete e.tokens,e.skinTones){let t=e.skinTones.length;e.skins=Array(t);for(let o=0;o<t;o++)e.skins[o]={tone:e.skinTones[o],unicode:e.skinUnicodes[o],version:e.skinVersions[o]};delete e.skinTones,delete e.skinUnicodes,delete e.skinVersions}return e}function Z(e){e||console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.")}const Q=["annotation","emoji","group","order","version"];function ee(e,t){if(2!==Math.floor(e.status/100))throw Error("Failed to fetch: "+t+":  "+e.status)}async function et(e){let t=await fetch(e,{method:"HEAD"});ee(t,e);let o=t.headers.get("etag");return Z(o),o}async function eo(e){let t=await fetch(e);ee(t,e);let o=t.headers.get("etag");Z(o);let i=await t.json();if(!i||!Array.isArray(i)||!i[0]||"object"!=typeof i[0]||Q.some(e=>!(e in i[0])))throw Error("Emoji data is in the wrong format");return[o,i]}async function ei(e){let t=function(e){for(var t=e.length,o=new ArrayBuffer(t),i=new Uint8Array(o),n=-1;++n<t;)i[n]=e.charCodeAt(n);return o}(JSON.stringify(e));return btoa(function(e){for(var t="",o=new Uint8Array(e),i=o.byteLength,n=-1;++n<i;)t+=String.fromCharCode(o[n]);return t}(await crypto.subtle.digest("SHA-1",t)))}async function en(e,t){let o,i=await et(t);if(!i){let e=await eo(t);i=e[0],o=e[1],i||(i=await ei(o))}await F(e,t,i)||(o||(o=(await eo(t))[1]),await H(e,o,t,i))}async function ea(e,t){let[o,i]=await eo(t);o||(o=await ei(i)),await H(e,i,t,o)}async function er(e,t){try{await en(e,t)}catch(e){if("InvalidStateError"!==e.name)throw e}}class es{constructor({dataSource:e="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",locale:t="en",customEmoji:o=[]}={}){this.dataSource=e,this.locale=t,this._dbName=`emoji-picker-element-${this.locale}`,this._db=void 0,this._lazyUpdate=void 0,this._custom=X(o),this._clear=this._clear.bind(this),this._ready=this._init()}async _init(){var e,t,o;let i,n=this._db=await (!C[e=this._dbName]&&(C[e]=L(e)),C[e]);t=this._dbName,o=this._clear,(i=A[t])||(i=A[t]=[]),i.push(o);let a=this.dataSource;await N(n)?await ea(n,a):this._lazyUpdate=er(n,a)}async ready(){let e=async()=>(this._ready||(this._ready=this._init()),this._ready);await e(),this._db||await e()}async getEmojiByGroup(e){return u(e),await this.ready(),x(await q(this._db,e)).map(J)}async getEmojiBySearchQuery(e){return c(e),await this.ready(),[...this._custom.search(e),...x(await U(this._db,e)).map(J)]}async getEmojiByShortcode(e){c(e),await this.ready();let t=this._custom.byShortcode(e);return t||J(await V(this._db,e))}async getEmojiByUnicodeOrName(e){c(e),await this.ready();let t=this._custom.byName(e);return t||J(await W(this._db,e))}async getPreferredSkinTone(){return await this.ready(),await G(this._db,m,y)||0}async setPreferredSkinTone(e){var t;return u(e),await this.ready(),t=this._db,j(t,m,E,(t,o)=>{t.put(e,y),R(o)})}async incrementFavoriteEmojiCount(e){var t;return c(e),await this.ready(),t=this._db,j(t,p,E,(t,o)=>O(t,e,i=>{t.put((i||0)+1,e),R(o)}))}async getTopFavoriteEmoji(e){var t,o;return u(e),await this.ready(),(await (t=this._db,o=this._custom,0===e?[]:j(t,[p,h],w,([t,i],n,a)=>{let r=[];t.index(b).openCursor(void 0,"prev").onsuccess=t=>{let n=t.target.result;if(!n)return a(r);function s(t){if(r.push(t),r.length===e)return a(r);n.continue()}let l=n.primaryKey,d=o.byName(l);if(d)return s(d);O(i,l,e=>{if(e)return s(e);n.continue()})}}))).map(J)}set customEmoji(e){this._custom=X(e)}get customEmoji(){return this._custom.all}async _shutdown(){await this.ready();try{await this._lazyUpdate}catch(e){}}_clear(){this._db=this._ready=this._lazyUpdate=void 0}async close(){await this._shutdown(),await _(this._dbName)}async delete(){var e;await this._shutdown(),await (e=this._dbName,new Promise((t,o)=>{_(e),T(t,o,indexedDB.deleteDatabase(e))}))}}const el=[[-1,"✨","custom"],[0,"\uD83D\uDE00","smileys-emotion"],[1,"\uD83D\uDC4B","people-body"],[3,"\uD83D\uDC31","animals-nature"],[4,"\uD83C\uDF4E","food-drink"],[5,"\uD83C\uDFE0️","travel-places"],[6,"⚽","activities"],[7,"\uD83D\uDCDD","objects"],[8,"⛔️","symbols"],[9,"\uD83C\uDFC1","flags"]].map(([e,t,o])=>({id:e,emoji:t,name:o})),ed=el.slice(1),ec="function"==typeof requestIdleCallback?requestIdleCallback:setTimeout;function eu(e){return e.unicode.includes("‍")}const eh={"\uD83E\uDEE9":16,"\uD83E\uDEE8":15.1,"\uD83E\uDEE0":14,"\uD83E\uDD72":13.1,"\uD83E\uDD7B":12.1,"\uD83E\uDD70":11,"\uD83E\uDD29":5,"\uD83D\uDC71‍♀️":4,"\uD83E\uDD23":3,"\uD83D\uDC41️‍\uD83D\uDDE8️":2,"\uD83D\uDE00":1,"\uD83D\uDE10️":.7,"\uD83D\uDE03":.6},em=["\uD83D\uDE0A","\uD83D\uDE12","❤️","\uD83D\uDC4D️","\uD83D\uDE0D","\uD83D\uDE02","\uD83D\uDE2D","☺️","\uD83D\uDE14","\uD83D\uDE29","\uD83D\uDE0F","\uD83D\uDC95","\uD83D\uDE4C","\uD83D\uDE18"],ep='"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',eg=(e,t)=>e<t?-1:+(e>t),eb=(e,t)=>{let o=document.createElement("canvas");o.width=o.height=1;let i=o.getContext("2d",{willReadFrequently:!0});return i.textBaseline="top",i.font=`100px ${ep}`,i.fillStyle=t,i.scale(.01,.01),i.fillText(e,0,0),i.getImageData(0,0,1,1).data},ef=()=>(e||(e=new Promise(e=>ec(()=>e(function(){let e=Object.entries(eh);try{for(let[t,o]of e)if(function(e){let t=eb(e,"#000"),o=eb(e,"#fff");return t&&o&&((e,t)=>{let o=[...e].join(",");return o===[...t].join(",")&&!o.startsWith("0,0,0,")})(t,o)}(t))return o}catch(e){}finally{}return e[0][1]}())))),e),ev=new Map;function ey(e){e.preventDefault(),e.stopPropagation()}function ew(e,t,o){return(t+=e?-1:1)<0?t=o.length-1:t>=o.length&&(t=0),t}function eE(e,t){let o=new Set,i=[];for(let n of e){let e=t(n);o.has(e)||(o.add(e),i.push(n))}return i}const ek=requestAnimationFrame;let ex="function"==typeof ResizeObserver;function eS(e){{let t=document.createRange();return t.selectNode(e.firstChild),t.getBoundingClientRect().width}}function eC(e,t,o){let i=e.get(t);return i||(i=o(),e.set(t,i)),i}const eA=new WeakMap,eT=new WeakMap,eL=Symbol("un-keyed"),ej="replaceChildren"in Element.prototype;function e_(e,t,o){for(let i=0;i<e.length;i++){let n=e[i],a=n.attributeName?t:t.firstChild,r={binding:n,targetNode:a,targetParentNode:void 0,currentExpression:void 0};o.push(r)}}const ez="function"==typeof queueMicrotask?queueMicrotask:e=>Promise.resolve().then(e);function eD(e,t,o){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!o(e[i],t[i]))return!1;return!0}const eI=new WeakMap,e$=[],{assign:eO}=Object;var eB={categoriesLabel:"Categories",emojiUnsupportedMessage:"Your browser does not support color emoji.",favoritesLabel:"Favorites",loadingMessage:"Loading…",networkErrorMessage:"Could not load emoji.",regionLabel:"Emoji picker",searchDescription:"When search results are available, press up or down to select and enter to choose.",searchLabel:"Search",searchResultsLabel:"Search results",skinToneDescription:"When expanded, press up or down to select and enter to choose.",skinToneLabel:"Choose a skin tone (currently {skinTone})",skinTonesLabel:"Skin tones",skinTones:["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],categories:{custom:"Custom","smileys-emotion":"Smileys and emoticons","people-body":"People and body","animals-nature":"Animals and nature","food-drink":"Food and drink","travel-places":"Travel and places",activities:"Activities",objects:"Objects",symbols:"Symbols",flags:"Flags"}};const eR=["customEmoji","customCategorySorting","database","dataSource","i18n","locale","skinToneEmoji","emojiVersion"],eM=`:host{--emoji-font-family:${ep}}`;class eN extends HTMLElement{constructor(e){super(),this.attachShadow({mode:"open"});let t=document.createElement("style");for(let o of(t.textContent=':host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}'+eM,this.shadowRoot.appendChild(t),this._ctx={locale:"en",dataSource:"https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",skinToneEmoji:"\uD83D\uDD90️",customCategorySorting:eg,customEmoji:null,i18n:eB,emojiVersion:null,...e},eR))"database"!==o&&Object.prototype.hasOwnProperty.call(this,o)&&(this._ctx[o]=this[o],delete this[o]);this._dbFlush()}connectedCallback(){this._cmp||(this._cmp=function(e,o){let i={},n=new AbortController,a=n.signal,{state:r,createEffect:s}=function(e){let t,o,i=!1,n=new Map,a=new Set,r=()=>{if(i)return;let e=[...a];a.clear();try{for(let t of e)t()}finally{o=!1,a.size&&(o=!0,ez(r))}},s=new Proxy({},{get(e,o){if(t){let e=n.get(o);e||(e=new Set,n.set(o,e)),e.add(t)}return e[o]},set(e,t,i){if(e[t]!==i){e[t]=i;let s=n.get(t);if(s){for(let e of s)a.add(e);o||(o=!0,ez(r))}}return!0}});return e.addEventListener("abort",()=>{i=!0}),{state:s,createEffect:e=>{let o=()=>{let i=t;t=o;try{return e()}finally{t=i}};return o()}}}(a),l=new Map;eO(r,{skinToneEmoji:void 0,i18n:void 0,database:void 0,customEmoji:void 0,customCategorySorting:void 0,emojiVersion:void 0}),eO(r,o),eO(r,{initialLoad:!0,currentEmojis:[],currentEmojisWithCategories:[],rawSearchText:"",searchText:"",searchMode:!1,activeSearchItem:-1,message:void 0,skinTonePickerExpanded:!1,skinTonePickerExpandedAfterAnimation:!1,currentSkinTone:0,activeSkinTone:0,skinToneButtonText:void 0,pickerStyle:void 0,skinToneButtonLabel:"",skinTones:[],currentFavorites:[],defaultFavoriteEmojis:void 0,numColumns:8,isRtl:!1,currentGroupIndex:0,groups:ed,databaseLoaded:!1,activeSearchItemId:void 0}),s(()=>{r.currentGroup!==r.groups[r.currentGroupIndex]&&(r.currentGroup=r.groups[r.currentGroupIndex])});let d=t=>{e.getElementById(t).focus()},c=t=>e.getElementById(`emo-${t.id}`),u=(e,t)=>{i.rootElement.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))},h=(e,t)=>e.id===t.id,m=(e,t)=>{let{category:o,emojis:i}=e,{category:n,emojis:a}=t;return o===n&&eD(i,a,h)},p=e=>{eD(r.currentEmojis,e,h)||(r.currentEmojis=e)},g=e=>{r.searchMode!==e&&(r.searchMode=e)},b=(e,t)=>t&&e.skins&&e.skins[t]||e.unicode,f={labelWithSkin:(e,t)=>eE([e.name||b(e,t),e.annotation,...e.shortcodes||e$].filter(Boolean),e=>e).join(", "),titleForEmoji:e=>e.annotation||(e.shortcodes||e$).join(", "),unicodeWithSkin:b},v={onClickSkinToneButton:function(e){r.skinTonePickerExpanded=!r.skinTonePickerExpanded,r.activeSkinTone=r.currentSkinTone,r.skinTonePickerExpanded&&(ey(e),ek(()=>d("skintone-list")))},onEmojiClick:j,onNavClick:function(e){let{target:t}=e,o=t.closest(".nav-button");if(!o)return;let n=parseInt(o.dataset.groupId,10);i.searchElement.value="",r.rawSearchText="",r.searchText="",r.activeSearchItem=-1,r.currentGroupIndex=r.groups.findIndex(e=>e.id===n)},onNavKeydown:function(e){let{target:t,key:o}=e,i=t=>{t&&(ey(e),t.focus())};switch(o){case"ArrowLeft":return i(t.previousElementSibling);case"ArrowRight":return i(t.nextElementSibling);case"Home":return i(t.parentElement.firstElementChild);case"End":return i(t.parentElement.lastElementChild)}},onSearchKeydown:function(e){if(!r.searchMode||!r.currentEmojis.length)return;let t=t=>{ey(e),r.activeSearchItem=ew(t,r.activeSearchItem,r.currentEmojis)};switch(e.key){case"ArrowDown":return t(!1);case"ArrowUp":return t(!0);case"Enter":if(-1!==r.activeSearchItem)return ey(e),L(r.currentEmojis[r.activeSearchItem].id);r.activeSearchItem=0}},onSkinToneOptionsClick:function(e){let{target:{id:t}}=e,o=t&&t.match(/^skintone-(\d)/);o&&(ey(e),_(parseInt(o[1],10)))},onSkinToneOptionsFocusOut:z,onSkinToneOptionsKeydown:function(e){if(!r.skinTonePickerExpanded)return;let t=async t=>{ey(e),r.activeSkinTone=t};switch(e.key){case"ArrowUp":return t(ew(!0,r.activeSkinTone,r.skinTones));case"ArrowDown":return t(ew(!1,r.activeSkinTone,r.skinTones));case"Home":return t(0);case"End":return t(r.skinTones.length-1);case"Enter":return ey(e),_(r.activeSkinTone);case"Escape":return ey(e),r.skinTonePickerExpanded=!1,d("skintone-button")}},onSkinToneOptionsKeyup:function(e){if(r.skinTonePickerExpanded&&" "===e.key)return ey(e),_(r.activeSkinTone)},onSearchInput:function(e){r.rawSearchText=e.target.value}},y={calculateEmojiGridStyle:function(e){var t;let o;t=()=>{{let e=getComputedStyle(i.rootElement),t=parseInt(e.getPropertyValue("--num-columns"),10),o="rtl"===e.getPropertyValue("direction");r.numColumns=t,r.isRtl=o}},ex?(o=new ResizeObserver(t)).observe(e):ek(t),a.addEventListener("abort",()=>{o&&o.disconnect()})},updateOnIntersection:function(e){{let t=e.closest(".tabpanel"),o=eI.get(t);o||(o=new IntersectionObserver(e=>{for(let{target:t,isIntersecting:o}of e)t.classList.toggle("onscreen",o)},{root:t,rootMargin:"50% 0px 50% 0px",threshold:0}),eI.set(t,o),a.addEventListener("abort",()=>{o.disconnect()})),o.observe(e)}}},w=!0;function E(){let{customEmoji:e,database:t}=r,o=e||e$;t.customEmoji!==o&&(t.customEmoji=o)}s(()=>{!function(e,t,o,i,n,a,r,s,l){let{labelWithSkin:d,titleForEmoji:c,unicodeWithSkin:u}=o,{html:h,map:m}=function(e){let t=eC(eT,e,()=>new Map),o=eL;return{map:function(e,t,i){return e.map((e,n)=>{let a=o;o=i(e);try{return t(e,n)}finally{o=a}})},html:function(e,...i){let n=eC(t,e,()=>new Map);return eC(n,o,()=>(function(e){let{template:t,elementsToBindings:o}=eC(eA,e,()=>(function(e){let t="",o=!1,i=!1,n=-1,a=new Map,r=[],s=0;for(let l=0,d=e.length;l<d;l++){let c,u,h,m=e[l];if(t+=m.slice(s),l===d-1)break;for(let e=0;e<m.length;e++)switch(m.charAt(e)){case"<":"/"===m.charAt(e+1)?r.pop():(o=!0,r.push(++n));break;case">":o=!1,i=!1;break;case"=":i=!0}let p=eC(a,r[r.length-1],()=>[]);if(i){let o=/(\S+)="?([^"=]*)$/.exec(m);c=o[1],u=o[2];let i=/^([^">]*)("?)/.exec(e[l+1]);h=i[1],t=t.slice(0,-1*o[0].length),s=i[0].length}else s=0;let g={attributeName:c,attributeValuePre:u,attributeValuePost:h,expressionIndex:l};p.push(g),o||i||(t+=" ")}return{template:function(e){let t=document.createElement("template");return t.innerHTML=e,t}(t),elementsToBindings:a}})(e)),i=t.cloneNode(!0).content.firstElementChild,n=function(e,t){let o,i=[];if(1===t.size&&(o=t.get(0)))e_(o,e,i);else{let o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),n=e,a=-1;do{let e=t.get(++a);e&&e_(e,n,i)}while(n=o.nextNode())}return i}(i,o);return function(e){for(let t of n){let{targetNode:o,currentExpression:i,binding:{expressionIndex:n,attributeName:a,attributeValuePre:r,attributeValuePost:s}}=t,l=e[n];if(i!==l)if(t.currentExpression=l,a)if(null===l)o.removeAttribute(a);else{let e=r+""+l+s;o.setAttribute(a,e)}else{let e;Array.isArray(l)?!function(e,t){var o;let{targetNode:i}=t,{targetParentNode:n}=t,a=!1;n?a=function(e,t){let o=e.firstChild,i=0;for(;o;){if(t[i]!==o)return!0;o=o.nextSibling,i++}return i!==t.length}(n,e):(a=!0,t.targetNode=void 0,t.targetParentNode=n=i.parentNode),a&&(o=n,ej?o.replaceChildren(...e):(o.innerHTML="",o.append(...e)))}(l,t):l instanceof Element?(e=l,o.replaceWith(e)):o.nodeValue=""+l,e&&(t.targetNode=e)}}return i}})(e))(i)}}}(t);function p(e,o,i){return m(e,(e,n)=>h`<button role="${o?"option":"menuitem"}" aria-selected="${o?n===t.activeSearchItem:null}" aria-label="${d(e,t.currentSkinTone)}" title="${c(e)}" class="${"emoji"+(o&&n===t.activeSearchItem?" active":"")+(e.unicode?"":" custom-emoji")}" id="${`${i}-${e.id}`}" style="${e.unicode?null:`--custom-emoji-background: url(${JSON.stringify(e.url)})`}">${e.unicode?u(e,t.currentSkinTone):""}</button>`,e=>`${i}-${e.id}`)}let g=h`<section data-ref="rootElement" class="picker" aria-label="${t.i18n.regionLabel}" style="${t.pickerStyle||""}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${t.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(t.searchMode&&t.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${t.activeSearchItemId?`emo-${t.activeSearchItemId}`:null}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${t.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${t.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${t.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${t.skinTonePickerExpanded?"hide-focus":""}" aria-label="${t.skinToneButtonLabel}" title="${t.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${t.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${t.skinToneButtonText||""}</button></div><span id="skintone-description" class="sr-only">${t.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${t.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${t.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${t.i18n.skinTonesLabel}" aria-activedescendant="skintone-${t.activeSkinTone}" aria-hidden="${!t.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${m(t.skinTones,(e,o)=>h`<div id="skintone-${o}" class="emoji ${o===t.activeSkinTone?"active":""}" aria-selected="${o===t.activeSkinTone}" role="option" title="${t.i18n.skinTones[o]}" aria-label="${t.i18n.skinTones[o]}">${e}</div>`,e=>e)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${t.groups.length},1fr)" aria-label="${t.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${m(t.groups,e=>h`<button role="tab" class="nav-button" aria-controls="tab-${e.id}" aria-label="${t.i18n.categories[e.name]}" aria-selected="${!t.searchMode&&t.currentGroup.id===e.id}" title="${t.i18n.categories[e.name]}" data-group-id="${e.id}"><div class="nav-emoji emoji">${e.emoji}</div></button>`,e=>e.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(t.isRtl?-1:1)*t.currentGroupIndex*100}%)"></div></div><div class="message ${t.message?"":"gone"}" role="alert" aria-live="polite">${t.message||""}</div><div data-ref="tabpanelElement" class="tabpanel ${!t.databaseLoaded||t.message?"gone":""}" role="${t.searchMode?"region":"tabpanel"}" aria-label="${t.searchMode?t.i18n.searchResultsLabel:t.i18n.categories[t.currentGroup.name]}" id="${t.searchMode?null:`tab-${t.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${m(t.currentEmojisWithCategories,(e,o)=>h`<div><div id="menu-label-${o}" class="category ${1===t.currentEmojisWithCategories.length&&""===t.currentEmojisWithCategories[0].category?"gone":""}" aria-hidden="true">${t.searchMode?t.i18n.searchResultsLabel:e.category?e.category:t.currentEmojisWithCategories.length>1?t.i18n.categories.custom:t.i18n.categories[t.currentGroup.name]}</div><div class="emoji-menu ${0!==o&&!t.searchMode&&-1===t.currentGroup.id?"visibility-auto":""}" style="${`--num-rows: ${Math.ceil(e.emojis.length/t.numColumns)}`}" data-action="updateOnIntersection" role="${t.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${o}" id="${t.searchMode?"search-results":null}">${p(e.emojis,t.searchMode,"emo")}</div></div>`,e=>e.category)}</div></div><div class="favorites onscreen emoji-menu ${t.message?"gone":""}" role="menu" aria-label="${t.i18n.favoritesLabel}" data-on-click="onEmojiClick">${p(t.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`,b=(t,o)=>{for(let i of e.querySelectorAll(`[${t}]`))o(i,i.getAttribute(t))};if(l){for(let t of(e.appendChild(g),["click","focusout","input","keydown","keyup"]))b(`data-on-${t}`,(e,o)=>{e.addEventListener(t,i[o])});b("data-ref",(e,t)=>{a[t]=e}),r.addEventListener("abort",()=>{e.removeChild(g)})}b("data-action",(e,t)=>{let o=s.get(t);o||s.set(t,o=new WeakSet),o.has(e)||(o.add(e),n[t](e))})}(e,r,f,v,y,i,a,l,w),w=!1}),r.emojiVersion||ef().then(e=>{e||(r.message=r.i18n.emojiUnsupportedMessage)}),s(()=>{async function e(){let e=!1,t=setTimeout(()=>{e=!0,r.message=r.i18n.loadingMessage},1e3);try{await r.database.ready(),r.databaseLoaded=!0}catch(e){console.error(e),r.message=r.i18n.networkErrorMessage}finally{clearTimeout(t),e&&(e=!1,r.message="")}}r.database&&e()}),s(()=>{r.pickerStyle=`
      --num-groups: ${r.groups.length}; 
      --indicator-opacity: ${+!r.searchMode}; 
      --num-skintones: 6;`}),s(()=>{r.customEmoji&&r.database&&E()}),s(()=>{r.customEmoji&&r.customEmoji.length?r.groups!==el&&(r.groups=el):r.groups!==ed&&(r.currentGroupIndex&&r.currentGroupIndex--,r.groups=ed)}),s(()=>{!async function(){r.databaseLoaded&&(r.currentSkinTone=await r.database.getPreferredSkinTone())}()}),s(()=>{r.skinTones=Array(6).fill().map((e,t)=>(function(e,t){if(0===t)return e;let o=e.indexOf("‍");return -1!==o?e.substring(0,o)+String.fromCodePoint(127995+t-1)+e.substring(o):(e.endsWith("️")&&(e=e.substring(0,e.length-1)),e+"\ud83c"+String.fromCodePoint(57339+t-1))})(r.skinToneEmoji,t))}),s(()=>{r.skinToneButtonText=r.skinTones[r.currentSkinTone]}),s(()=>{r.skinToneButtonLabel=r.i18n.skinToneLabel.replace("{skinTone}",r.i18n.skinTones[r.currentSkinTone])}),s(()=>{async function e(){let{database:e}=r;r.defaultFavoriteEmojis=(await Promise.all(em.map(t=>e.getEmojiByUnicodeOrName(t)))).filter(Boolean)}r.databaseLoaded&&e()}),s(()=>{async function e(){E();let{database:e,defaultFavoriteEmojis:t,numColumns:o}=r,i=await e.getTopFavoriteEmoji(o);r.currentFavorites=await C(eE([...i,...t],e=>e.unicode||e.name).slice(0,o))}r.databaseLoaded&&r.defaultFavoriteEmojis&&e()}),s(()=>{!async function(){let{searchText:e,currentGroup:t,databaseLoaded:o,customEmoji:i}=r;if(o)if(e.length>=2){let t=await T(e);r.searchText===e&&(p(t),g(!0))}else{let{id:e}=t;if(-1!==e||i&&i.length){let t=await A(e);r.currentGroup.id===e&&(p(t),g(!1))}}else r.currentEmojis=[],r.searchMode=!1}()});let k=()=>{ek(()=>{var e;(e=i.tabpanelElement)&&(e.scrollTop=0)})};function x(e){return!e.unicode||!eu(e)||ev.get(e.unicode)}async function S(e){let t=r.emojiVersion||await ef();return e.filter(({version:e})=>!e||e<=t)}async function C(e){var t;return t=r.emojiVersion||await ef(),e.map(({unicode:e,skins:o,shortcodes:i,url:n,name:a,category:r,annotation:s})=>({unicode:e,name:a,shortcodes:i,url:n,category:r,annotation:s,id:e||a,skins:o&&(e=>{let o={};for(let i of e)"number"==typeof i.tone&&i.version<=t&&(o[i.tone]=i.unicode);return o})(o)}))}async function A(e){let t=-1===e?r.customEmoji:await r.database.getEmojiByGroup(e);return C(await S(t))}async function T(e){return C(await S(await r.database.getEmojiBySearchQuery(e)))}async function L(e){let t=await r.database.getEmojiByUnicodeOrName(e),o=[...r.currentEmojis,...r.currentFavorites].find(t=>t.id===e),i=o.unicode&&b(o,r.currentSkinTone);await r.database.incrementFavoriteEmojiCount(e),u("emoji-click",{emoji:t,skinTone:r.currentSkinTone,...i&&{unicode:i},...o.name&&{name:o.name}})}async function j(e){let{target:t}=e;t.classList.contains("emoji")&&(ey(e),L(t.id.substring(4)))}function _(e){r.currentSkinTone=e,r.skinTonePickerExpanded=!1,d("skintone-button"),u("skin-tone-change",{skinTone:e}),r.database.setPreferredSkinTone(e)}async function z(e){let{relatedTarget:t}=e;t&&"skintone-list"===t.id||(r.skinTonePickerExpanded=!1)}return s(()=>{let{currentEmojis:e,emojiVersion:o}=r,n=e.filter(e=>e.unicode).filter(e=>eu(e)&&!ev.has(e.unicode));!o&&n.length?(p(e),ek(()=>{!function(e,o,i){let n=!0;for(let a of e){let e=i(a);if(!e)continue;let r=eS(e);void 0===t&&(t=eS(o));let s=r/1.8<t;ev.set(a.unicode,s),s||(n=!1)}return n}(n,i.baselineEmoji,c)?r.currentEmojis=[...r.currentEmojis]:k()})):(p(o?e:e.filter(x)),k())}),s(()=>{}),s(()=>{var e;e=function(){let{searchMode:e,currentEmojis:t}=r;if(e)return[{category:"",emojis:t}];let o=new Map;for(let e of t){let t=e.category||"",i=o.get(t);i||(i=[],o.set(t,i)),i.push(e)}return[...o.entries()].map(([e,t])=>({category:e,emojis:t})).sort((e,t)=>r.customCategorySorting(e.category,t.category))}(),eD(r.currentEmojisWithCategories,e,m)||(r.currentEmojisWithCategories=e)}),s(()=>{r.activeSearchItemId=-1!==r.activeSearchItem&&r.currentEmojis[r.activeSearchItem].id}),s(()=>{let{rawSearchText:e}=r;ec(()=>{r.searchText=(e||"").trim(),r.activeSearchItem=-1})}),s(()=>{r.skinTonePickerExpanded?i.skinToneDropdown.addEventListener("transitionend",()=>{r.skinTonePickerExpandedAfterAnimation=!0},{once:!0}):r.skinTonePickerExpandedAfterAnimation=!1}),{$set(e){eO(r,e)},$destroy(){n.abort()}}}(this.shadowRoot,this._ctx))}disconnectedCallback(){ez(()=>{if(!this.isConnected&&this._cmp){this._cmp.$destroy(),this._cmp=void 0;let{database:e}=this._ctx;e.close().catch(e=>console.error(e))}})}static get observedAttributes(){return["locale","data-source","skin-tone-emoji","emoji-version"]}attributeChangedCallback(e,t,o){this._set(e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),"emoji-version"===e?parseFloat(o):o)}_set(e,t){this._ctx[e]=t,this._cmp&&this._cmp.$set({[e]:t}),["locale","dataSource"].includes(e)&&this._dbFlush()}_dbCreate(){let{locale:e,dataSource:t,database:o}=this._ctx;o&&o.locale===e&&o.dataSource===t||this._set("database",new es({locale:e,dataSource:t}))}_dbFlush(){ez(()=>this._dbCreate())}}const eF={};for(const e of eR)eF[e]={get(){return"database"===e&&this._dbCreate(),this._ctx[e]},set(t){if("database"===e)throw Error("database is read-only");this._set(e,t)}};function eP(e){if("TEXTAREA"!==e.nodeName)return!1;if(void 0===n){var t=document.createElement("textarea");t.value=1,n=!!t.firstChild}return n}Object.defineProperties(eN.prototype,eF),customElements.get("emoji-picker")||customElements.define("emoji-picker",eN);var eH=function(e,t){if(e.focus(),document.selection){var o=document.selection.createRange();o.text=t,o.collapse(!1),o.select();return}if(!document.execCommand("insertText",!1,t)){var i=e.selectionStart,n=e.selectionEnd;if("function"==typeof e.setRangeText)e.setRangeText(t);else{var a=document.createRange(),r=document.createTextNode(t);if(eP(e)){var s=e.firstChild;if(s){for(var l=0,d=null,c=null;s&&(null===d||null===c);){var u=s.nodeValue.length;i>=l&&i<=l+u&&a.setStart(d=s,i-l),n>=l&&n<=l+u&&a.setEnd(c=s,n-l),l+=u,s=s.nextSibling}i!==n&&a.deleteContents()}else e.appendChild(r)}if(eP(e)&&"#text"===a.commonAncestorContainer.nodeName)a.insertNode(r);else{var h=e.value;e.value=h.slice(0,i)+t+h.slice(n)}}e.setSelectionRange(i+t.length,i+t.length);var m=document.createEvent("UIEvent");m.initEvent("input",!0,!1),e.dispatchEvent(m)}},eq="capture-photo",eU=`
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`,eV=document.createElement("template");eV.innerHTML=`
  <style>${eU}</style>
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
`;var eW=class e extends HTMLElement{#e={};#t=null;#o=null;#i=null;#n=null;#a=null;#r=null;constructor(){super(),this.#e=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eV.content.cloneNode(!0))}static get observedAttributes(){return["no-image","pan","tilt","zoom","torch"]}attributeChangedCallback(e,t,o){if(!this.isConnected)return;let i=this.getTrackCapabilities();if("no-image"===e&&t!==o&&this.#s(),"pan"===e&&t!==o&&"pan"in this.#e){let e=!!("pan"in i&&i.pan?.min&&i.pan?.max)&&this.pan>=i.pan.min&&this.pan<=i.pan.max;"number"==typeof this.pan&&e&&this.#l("pan",this.pan)}if("tilt"===e&&t!==o&&"tilt"in this.#e){let e=!!("tilt"in i&&i.tilt?.min&&i.tilt?.max)&&this.tilt>=i.tilt.min&&this.tilt<=i.tilt.max;"number"==typeof this.tilt&&e&&this.#l("tilt",this.tilt)}if("zoom"===e&&t!==o&&"zoom"in this.#e){let e=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"number"==typeof this.zoom&&e&&this.#l("zoom",this.zoom)}"torch"===e&&t!==o&&"torch"in this.#e&&this.#l("torch",this.torch)}async connectedCallback(){if(this.#d("autoPlay"),this.#d("noImage"),this.#d("facingMode"),this.#d("cameraResolution"),this.#d("pan"),this.#d("tilt"),this.#d("zoom"),this.#d("torch"),this.#d("calculateFileSize"),this.#o=this.shadowRoot?.querySelector("canvas")||null,this.#i=this.shadowRoot?.getElementById("output")||null,this.#n=this.shadowRoot?.querySelector("video")||null,this.#a=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#r=this.#c(),this.#n?.addEventListener("loadedmetadata",this.#u),this.#a?.addEventListener("slotchange",this.#h),this.#r?.addEventListener("click",this.#m),!e.isSupported())return this.dispatchEvent(new CustomEvent(`${eq}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#r?.removeEventListener("click",this.#m),this.#n?.removeEventListener("loadedmetadata",this.#u),this.#a?.removeEventListener("slotchange",this.#h)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(e){this.toggleAttribute("auto-play",!!e)}get noImage(){return this.hasAttribute("no-image")}set noImage(e){this.toggleAttribute("no-image",!!e)}get facingMode(){let e=this.getAttribute("facing-mode");return"user"!==e?"environment":e}set facingMode(e){this.setAttribute("facing-mode",e)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(e){this.setAttribute("camera-resolution",e)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(e){this.setAttribute("pan",null!=e?e.toString():e)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(e){this.setAttribute("tilt",null!=e?e.toString():e)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(e){this.setAttribute("zoom",null!=e?e.toString():e)}get torch(){return this.hasAttribute("torch")}set torch(e){this.toggleAttribute("torch",!!e)}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(e){this.toggleAttribute("calculate-file-size",!!e)}get loading(){return this.hasAttribute("loading")}#m=e=>{e.preventDefault(),this.capture()};#u=e=>{let t=e.target;t.play().then(()=>{this.dispatchEvent(new CustomEvent(`${eq}:video-play`,{bubbles:!0,composed:!0,detail:{video:t}}))}).catch(e=>{this.dispatchEvent(new CustomEvent(`${eq}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}).finally(()=>{this.removeAttribute("loading")})};#s(){this.#i&&this.#i.replaceChildren()}#l(e,t){let o,i,n;if(!this.#t)return;let[a]=this.#t.getVideoTracks(),r=this.getTrackCapabilities(),s=this.getTrackSettings(),l="pan"===e||"tilt"===e||"zoom"===e?(o=Number(t),i=r[e]?.min||1,n=r[e]?.max||1,Number.isNaN(i)&&(i=0),Number.isNaN(n)&&(n=0),Math.min(Math.max(o,Math.min(i,n)),Math.max(i,n))):t;e in s&&a.applyConstraints({advanced:[{[e]:l}]}).catch(()=>{})}#h=e=>{e.target?.name==="capture-button"&&(this.#r?.removeEventListener("click",this.#m),this.#r=this.#c(),this.#r&&(this.#r.addEventListener("click",this.#m),"BUTTON"===this.#r.nodeName||this.#r.hasAttribute("role")||this.#r.setAttribute("role","button")))};#c(){return this.#a&&this.#a.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"capture-button"===e.getAttribute("slot"))||null}#d(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}async startVideoStream(t){if(!e.isSupported()||this.#t)return;this.setAttribute("loading","");let o={video:{facingMode:{ideal:this.facingMode},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof t&&t.trim().length>0&&(o.video.deviceId={exact:t}),"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,t=0]=this.cameraResolution.split("x").map(e=>Number(e));e>0&&t>0&&(o.video.width=e,o.video.height=t)}try{this.#t=await navigator.mediaDevices.getUserMedia(o),this.#n&&(this.#n.srcObject=this.#t),this.#l("pan",this.pan),this.#l("tilt",this.tilt),this.#l("zoom",this.zoom)}catch(e){this.dispatchEvent(new CustomEvent(`${eq}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}finally{this.removeAttribute("loading")}}restartVideoStream(e){this.#t&&this.#n&&this.stopVideoStream(),this.startVideoStream(e)}stopVideoStream(){if(!this.#n||!this.#t)return;let[e]=this.#t.getVideoTracks();e?.stop(),this.#n.srcObject=null,this.#t=null}async capture(){if(!(this.loading||!this.#o||!this.#n))try{let e=this.#o.getContext("2d"),t=this.#n.videoWidth,o=this.#n.videoHeight;this.#o.width=t,this.#o.height=o,e?.drawImage(this.#n,0,0,t,o);let i=this.#o.toDataURL("image/png");if("string"==typeof i&&i.includes("data:image")){if(!this.noImage){let e=new Image;e.src=i,e.width=t,e.height=o,e.alt="Captured photo",e.setAttribute("part","output-image"),this.#s(),this.#i?.appendChild(e)}let e={dataURI:i,width:t,height:o};if(this.calculateFileSize)try{let t=(await (await fetch(i)).blob()).size;t&&(e.size=t)}catch{}this.dispatchEvent(new CustomEvent(`${eq}:success`,{bubbles:!0,composed:!0,detail:e}))}}catch(e){this.dispatchEvent(new CustomEvent(`${eq}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}getSupportedConstraints(){return e.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getCapabilities&&e.getCapabilities()||{}}getTrackSettings(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getSettings&&e.getSettings()||{}}static async getVideoInputDevices(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?(await navigator.mediaDevices.enumerateDevices()||[]).filter(e=>"videoinput"===e.kind&&!!e.deviceId):[]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=eq){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}};function eG(e){return null!==e&&"object"==typeof e?"share"in navigator&&"canShare"in navigator&&navigator.canShare(e):"share"in navigator}eW.defineCustomElement();var eY="theme-toggle/theme-preference",eX=document.createElement("template"),eK=`
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
  <style>${eK}</style>

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
`,(class e extends HTMLElement{#r=["light","dark","system"];#t="system";#d=0;#n=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(eX.content.cloneNode(!0)),this.#n=this.shadowRoot?.getElementById("theme-toggle")||null}static get observedAttributes(){return["storage-key","no-icon","no-label"]}attributeChangedCallback(e,t,o){"storage-key"===e&&t!==o&&(this.#t=this.#e(),this.#d=this.#r.indexOf(this.#t)||0,this.#l()),"no-icon"===e&&t!==o&&this.#n&&this.#n.querySelectorAll('slot[name^="icon"]').forEach(e=>{e.classList.toggle("icon--hidden",this.noIcon)}),"no-label"===e&&t!==o&&this.#n&&this.#n.querySelectorAll('slot[name^="label"]').forEach(e=>{e.classList.toggle("label--hidden",this.noLabel)})}get noStorage(){return this.hasAttribute("no-storage")}set noStorage(e){e?this.setAttribute("no-storage",""):this.removeAttribute("no-storage")}get storageKey(){return this.getAttribute("storage-key")}set storageKey(e){null!=e&&this.setAttribute("storage-key",e)}get noIcon(){return this.hasAttribute("no-icon")}set noIcon(e){e?this.setAttribute("no-icon",""):this.removeAttribute("no-icon")}get noLabel(){return this.hasAttribute("no-label")}set noLabel(e){e?this.setAttribute("no-label",""):this.removeAttribute("no-label")}connectedCallback(){this.#o("noStorage"),this.#o("storageKey"),this.#o("noIcon"),this.#o("noLabel"),this.#t=this.#e(),this.#d=this.#r.indexOf(this.#t)||0,this.#l(),this.#n?.addEventListener("click",this.#m),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.#a)}disconnectedCallback(){this.#n?.removeEventListener("click",this.#m),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.#a)}#e(){if(this.noStorage)return"system";let e="";try{e=window.localStorage.getItem(this.storageKey||eY)||""}catch{}return"light"===e||"dark"===e||"system"===e?e:"system"}#i(){if(!this.noStorage)try{window.localStorage.setItem(this.storageKey||eY,this.#t)}catch{}}#l(){if(this.#n?.querySelectorAll('slot[name="light"], slot[name="dark"], slot[name="system"]').forEach(e=>{e.classList.toggle("hidden",!e.getAttribute("name")?.startsWith(this.#t))}),document.documentElement.setAttribute("data-theme",this.#t),"system"===this.#t){let e=window.matchMedia("(prefers-color-scheme: dark)").matches;this.#n?.querySelectorAll(".system-path").forEach(t=>{t.classList.toggle("hidden",e?t.classList.contains("system-path--light"):t.classList.contains("system-path--dark"))})}}#u(){return this.#d=(this.#d+1)%this.#r.length,this.#r[this.#d]}#m=()=>{this.#t=this.#u(),this.#i(),this.#l(),this.dispatchEvent(new CustomEvent("tt-theme-change",{bubbles:!0,composed:!0,detail:{theme:this.#t}}))};#a=()=>{this.#l()};#o(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t="theme-toggle"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var eJ=`
  :host {
    display: inline-block;
  }
`,eZ=document.createElement("template");eZ.innerHTML=`
  <style>${eJ}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`,(class e extends HTMLElement{#n;#t;#a=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(eZ.content.cloneNode(!0)),this.#n=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#t=this.#i()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#t&&(this.#t.toggleAttribute("disabled",this.disabled),this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#d("shareUrl"),this.#d("shareTitle"),this.#d("shareText"),this.#d("shareFiles"),this.#d("disabled"),this.#n?.addEventListener("slotchange",this.#e),this.#t?.addEventListener("click",this.#r)}disconnectedCallback(){this.#n?.removeEventListener("slotchange",this.#e),this.#t?.removeEventListener("click",this.#r)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#a}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#a=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name)return void this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#r=e=>{e.preventDefault(),this.disabled||this.share()};#e=e=>{e.target&&"button"===e.target.name&&(this.#t?.removeEventListener("click",this.#r),this.#t=this.#i(),this.#t&&(this.#t.addEventListener("click",this.#r),"BUTTON"===this.#t.nodeName||this.#t.hasAttribute("role")||this.#t.setAttribute("role","button")))};#i(){return this.#n&&this.#n.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#d(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t="web-share"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var eQ=document.createElement("template"),e0=`
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
`;eQ.innerHTML=`
  <style>${e0}</style>

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
`,(class e extends HTMLElement{#n=null;#e=null;#d=null;#l=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eQ.content.cloneNode(!0)),this.shadowRoot&&(this.#n=this.shadowRoot.querySelector("dialog"),this.#e=this.shadowRoot.querySelector('slot[name="footer"]'),this.#d=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(e,t,o){if(null!==this.#n){if("open"===e&&t!==o&&(this.open?(this.#n.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#n.close()),"no-header"===e&&t!==o){let e=this.#n.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#n.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#n.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}"close-label"===e&&t!==o&&this.#a()}}connectedCallback(){this.#t("open"),this.#t("staticBackdrop"),this.#t("noHeader"),this.#t("noAnimations"),this.#t("noCloseButton"),this.#t("fullscreen"),this.#t("preserveOverflow"),this.#t("placement"),this.#t("closeLabel"),this.#n?.addEventListener("click",this.#i),this.#n?.addEventListener("close",this.#m),this.#n?.addEventListener("cancel",this.#h),this.#n?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#u),this.#e?.addEventListener("slotchange",this.#p),this.#d?.addEventListener("slotchange",this.#s),this.addEventListener("command",this.#c)}disconnectedCallback(){this.#l&&clearTimeout(this.#l),this.#n?.removeEventListener("click",this.#i),this.#n?.removeEventListener("close",this.#m),this.#n?.removeEventListener("cancel",this.#h),this.#n?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#u),this.#e?.removeEventListener("slotchange",this.#p),this.#d?.removeEventListener("slotchange",this.#s),this.removeEventListener("command",this.#c)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){this.toggleAttribute("static-backdrop",!!e)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){this.toggleAttribute("no-header",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){this.toggleAttribute("no-close-button",!!e)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){this.toggleAttribute("fullscreen",!!e)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(e){this.toggleAttribute("preserve-overflow",!!e)}get placement(){return this.getAttribute("placement")||"center"}set placement(e){this.setAttribute("placement",null!=e?e.toString():e)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(e){this.setAttribute("close-label",null!=e?e.toString():e)}#a(){if(null===this.#n)return;let e=this.#n.querySelector(".dialog__close");null!==e&&((this.#d?.assignedElements()||[])?.some(e=>e.textContent?.replace(/\s/g,"")!=="")?e.removeAttribute("aria-label"):e.setAttribute("aria-label",this.closeLabel))}#r(){this.#l||(this.#n?.classList.add("dialog--pulse"),this.#l=setTimeout(()=>{this.#n?.classList.remove("dialog--pulse"),clearTimeout(this.#l),this.#l=void 0},300))}#m=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#h=e=>{let t=this.#o("escape-key");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#r())};#u=e=>{let t=this.#o("close-button");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#r())};#i=e=>{let t=e.target;if(t===e.currentTarget){let e=this.#o("backdrop-click");this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#r():this.hide()}if(t instanceof HTMLElement&&null!==t.closest("[data-me-close]")){let e=this.#o("external-invoker");this.dispatchEvent(e),e.defaultPrevented?this.noAnimations||this.#r():this.hide()}};#c=e=>{if("--me-open"!==e.command||this.open||this.show(),"--me-close"===e.command&&this.open){let e=this.#o("external-invoker");this.dispatchEvent(e),e.defaultPrevented?this.noAnimations||this.#r():this.hide()}};#p=()=>{if(null===this.#n)return;let e=this.#n.querySelector(".dialog__footer");if(null===e)return;let t=this.#e?.assignedNodes();e.hidden=!(t&&t.length>0)};#s=()=>{this.#a()};#o(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#t(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(t="modal-element"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var e1=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),e3=[".DS_Store","Thumbs.db"],e5=(e,t)=>{let o=(e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=(t.split(".").pop()||"").toLowerCase(),i=e1.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e})(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},e2=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),e4=async e=>{let t=[],o=await e2(e);for(;o.length>0;)t.push(...o),o=await e2(e);return t},e9=e=>new Promise((t,o)=>{e.file(o=>t(e5(o,e.fullPath)),o)}),e8=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e)if(e.isFile){let o=await e9(e);-1===e3.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await e4(e.createReader()))}return t},e6=async e=>{let t=[];for(let o of e)-1===e3.indexOf(o.name)&&t.push(e5(o));return t},e7=async e=>e.dataTransfer?e.dataTransfer.items?await e8(e.dataTransfer.items):await e6(e.dataTransfer.files):await e6(e.target.files),te=String.raw,tt=String.raw,to="files-dropzone",ti=document.createElement("template"),tn=te`
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
`;ti.innerHTML=tt`
  <style>
    ${tn}
  </style>

  <input type="file" id="file-input" hidden />

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot><span>Drag 'n' drop files here, or click to select files</span></slot>
  </div>
`,(class e extends HTMLElement{static ERROR_CODES={FILE_DIALOG_OPEN_FAILED:"FILE_DIALOG_OPEN_FAILED",FILE_INPUT_CHANGE_FAILED:"FILE_INPUT_CHANGE_FAILED",DROP_EVENT_PROCESSING_FAILED:"DROP_EVENT_PROCESSING_FAILED",UNKNOWN_ERROR:"UNKNOWN_ERROR"};static REJECTION_CODES={TOO_MANY_FILES:"TOO_MANY_FILES",FILE_TOO_LARGE:"FILE_TOO_LARGE",FILE_TOO_SMALL:"FILE_TOO_SMALL",INVALID_MIME_TYPE:"INVALID_MIME_TYPE"};#t=null;#n=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(ti.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.getElementById("file-input"),this.#n=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==o&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?(this.#n?.removeAttribute("tabindex"),this.#n?.setAttribute("aria-disabled","true")):(this.#n?.setAttribute("tabindex","0"),this.#n?.setAttribute("aria-disabled","false"))),"multiple"===e&&t!==o&&this.#t&&(this.#t.multiple=this.multiple)}connectedCallback(){this.#l("accept"),this.#l("disabled"),this.#l("maxFiles"),this.#l("maxSize"),this.#l("minSize"),this.#l("multiple"),this.#l("autoFocus"),this.#l("noStyle"),this.#t?.addEventListener("change",this.#d),this.#n?.addEventListener("dragenter",this.#o),this.#n?.addEventListener("dragover",this.#e),this.#n?.addEventListener("dragleave",this.#h),this.#n?.addEventListener("drop",this.#m),this.#n?.addEventListener("click",this.#u),this.#n?.addEventListener("keyup",this.#g),this.autoFocus&&this.#n?.focus()}disconnectedCallback(){this.#t?.removeEventListener("change",this.#d),this.#n?.removeEventListener("dragenter",this.#o),this.#n?.removeEventListener("dragover",this.#e),this.#n?.removeEventListener("dragleave",this.#h),this.#n?.removeEventListener("drop",this.#m),this.#n?.removeEventListener("click",this.#u),this.#n?.removeEventListener("keyup",this.#g)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#r(e,t,o){let i=new CustomEvent(`${to}-${e}`,{bubbles:!0,composed:!0,cancelable:!1,...o,detail:t});return this.dispatchEvent(i)}#a(e,t){this.#r("error",{code:e,error:t})}#d=async t=>{try{this.#i(await e7(t))}catch(t){this.#a(e.ERROR_CODES.FILE_INPUT_CHANGE_FAILED,t)}};#o=()=>{this.disabled||this.#r("dragenter")};#e=e=>{if(e.preventDefault(),this.disabled){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#n&&(this.#n.classList.add("dropzone--dragover"),this.#n.part.add("dropzone--dragover")),this.#r("dragover")};#h=()=>{this.disabled||(this.#n&&(this.#n.classList.remove("dropzone--dragover"),this.#n.part.remove("dropzone--dragover")),this.#r("dragleave"))};#m=async t=>{if(!this.disabled){t.preventDefault(),this.#n&&(this.#n.classList.remove("dropzone--dragover"),this.#n.part.remove("dropzone--dragover"));try{this.#i(await e7(t))}catch(t){this.#a(e.ERROR_CODES.DROP_EVENT_PROCESSING_FAILED,t)}}};#u=()=>{this.disabled||this.openFileDialog()};#g=e=>{this.disabled||(" "===e.key||"Enter"===e.key)&&this.openFileDialog()};#i(t){if(!Array.isArray(t)||!t.length)return;let o=[],i=[],n=t.length;if(!this.multiple&&n>1)for(let o of t)i.push({file:o,errors:[{code:e.REJECTION_CODES.TOO_MANY_FILES,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&n>this.maxFiles)for(let o of t)i.push({file:o,errors:[{code:e.REJECTION_CODES.TOO_MANY_FILES,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let n of t){let t=function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,n=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(n,this.accept),a=n.size>this.maxSize,r=n.size<this.minSize;if(!t||a||r){let o=[];t||o.push({code:e.REJECTION_CODES.INVALID_MIME_TYPE,message:`File type "${n.type}" is not accepted.`}),a&&o.push({code:e.REJECTION_CODES.FILE_TOO_LARGE,message:`File size ${n.size} exceeds the maximum size of ${this.maxSize}.`}),r&&o.push({code:e.REJECTION_CODES.FILE_TOO_SMALL,message:`File size ${n.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:n,errors:o})}else o.push(n)}this.#r("drop",{acceptedFiles:o,rejectedFiles:i}),o.length>0&&this.#r("drop-accepted",{acceptedFiles:o}),i.length>0&&this.#r("drop-rejected",{rejectedFiles:i}),this.#t&&(this.#t.value=this.#t.defaultValue)}openFileDialog(){if(!(this.disabled||!this.#t)){if("showPicker"in HTMLInputElement.prototype&&"function"==typeof this.#t.showPicker){try{this.#t.showPicker()}catch(t){this.#a(e.ERROR_CODES.FILE_DIALOG_OPEN_FAILED,t)}return}this.#t.click()}}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t=to){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();const ta=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"],tr=(e="",t="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${o}${"string"==typeof t&&""!==t?"-"+t:""}`},ts=async(e={})=>{let t=await fetch(e.url),o=await t.blob(),i=e.mimeType||o.type||"";if(!ta.includes(i))throw Error(`This is not an accepted image format. Accepted MIME types are: ${ta.join(", ")}`);return new File([o],e.filename||"",o)},tl=localStorage,td=new class{#b=null;#f=null;constructor(e,t=localStorage){if(!e)throw Error("Storage prefix is required");if(t!==localStorage&&t!==sessionStorage)throw Error("Storage provider is not supported");this.#b=e,this.#f=t}set(e,t){try{this.#f.setItem(`${this.#b}${e}`,JSON.stringify(t))}catch(e){console.error("Error saving to storage",e)}}get(e){try{let t=this.#f.getItem(`${this.#b}${e}`);return t?JSON.parse(t):null}catch(e){return console.error("Error getting from storage",e),null}}}("meme-generator/",tl);var tc={};tc=i("lRBOd");var tu={};tu=i("hOimC");var th={};th=i("c5nso");var tm={};tm=i("917SN");var tp={};tp=i("kCRYk");var tg={};tg=i("7mTjM");var tb={};tb=i("bNJU7");var tf={};tf=i("2zTNP");var tv={};tv=i("6U5us");var ty={};ty=i("jadM2");var tw={};tw=i("4rZHV");const tE=[{name:"Pressuru",label:"Pressuru",path:o(tc),style:"normal",weight:"400"},{name:"Oswald-Regular",label:"Oswald",path:o(tu),style:"normal",weight:"400"},{name:"Oswald-Bold",label:"Oswald Bold",path:o(th),style:"normal",weight:"700"},{name:"Roboto-Regular",label:"Roboto",path:o(tm),style:"normal",weight:"400"},{name:"Roboto-Bold",label:"Roboto Bold",path:o(tp),style:"normal",weight:"700"},{name:"RobotoCondensed-Regular",label:"Roboto Condensed",path:o(tg),style:"normal",weight:"400"},{name:"RobotoCondensed-Bold",label:"Roboto Condensed Bold",path:o(tb),style:"normal",weight:"700"},{name:"CourierPrime-Regular",label:"Courier Prime",path:o(tf),style:"normal",weight:"400"},{name:"CourierPrime-Bold",label:"Courier Prime Bold",path:o(tv),style:"normal",weight:"700"},{name:"OpenSans-Regular",label:"Open Sans",path:o(ty),style:"normal",weight:"400"},{name:"OpenSans-Bold",label:"Open Sans Bold",path:o(tw),style:"normal",weight:"400"}],tk=async(e,t,o={})=>{try{let i=new FontFace(e,`url(${t})`,{...o});await i.load(),document.fonts.add(i)}catch(e){console.error(e)}},tx=document.getElementById("errorsContainer"),tS=e=>{let t=e.currentTarget;t.removeEventListener("click",tS),tx.removeChild(t.parentNode)},tC=(e="",t="info")=>{["info","warning","danger"].includes(t)||(t="info");let o=`
    ${e}
    <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
  `,i=document.createElement("div");i.className=`alert alert-${t} alert-dismissible text-break mb-2 fade`,i.innerHTML=o,i.querySelector("button").addEventListener("click",tS),tx.appendChild(i),setTimeout(()=>i.classList.add("show"),100)},tA={id:"",text:"",fillColor:"#ffffff",strokeColor:"#000000",font:"Pressuru",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:0,strokeWidth:1.5,offsetY:0,offsetX:0,rotate:0,allCaps:!0,textBackgroundEnabled:!1,textBackgroundColor:"#000000"},tT=new Map;class tL{constructor(e){let t=tr("textbox",Date.now().toString(36));this.data=e?{...e,id:t}:{...tA,id:t},tT.set(t,this),document.dispatchEvent(new CustomEvent("textbox-create",{bubbles:!0,composed:!0,detail:{textbox:this}}))}getData(){return this.data}static create(e){return new tL(e)}static getAll(){return tT}static getById(e){return tT.get(e)}static remove(e){tT.delete(e),document.dispatchEvent(new CustomEvent("textbox-remove",{bubbles:!0,composed:!0,detail:{id:e}}))}static createElement(e,t=!0){if(!(e instanceof tL))return;let o=e.getData(),{id:i,text:n,fillColor:a,strokeColor:r,fontSize:s,shadowBlur:l,strokeWidth:d,offsetX:c,offsetY:u,rotate:h,textBackgroundColor:m}=o,p=`
    <div class="d-flex align-items-center" data-section="basic-settings">
      <button type="button" class="btn btn-link" data-button="duplicate-text-box" title="Duplicate text box"></button>
      <button type="button" class="btn btn-link" data-button="delete-text-box" title="Remove text box"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="Text #${tT.size}">${n}</textarea>

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
              ${tE.map(({name:e,label:t})=>`<option value="${e}">${t}</option>`)}
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
  `,g=document.createDocumentFragment(),b=document.createElement("div");b.setAttribute("id",i),b.setAttribute("data-section","textbox"),b.className="bg-body-tertiary border shadow-sm mb-3 rounded",b.innerHTML=p,b.querySelectorAll("select").forEach(e=>e.value=o[e.dataset.input]),b.querySelectorAll('input[type="checkbox"]').forEach(e=>e.checked=o[e.dataset.input]);let f=g.appendChild(b);return t&&setTimeout(()=>f.querySelector('[data-input="text"]').focus(),0),f}}class tj{#v=null;#y=null;constructor(e){this.#v=e,this.#y=this.#v.getContext("2d")}get width(){return this.#v.width}set width(e){this.#v.width=e}get height(){return this.#v.height}set height(e){this.#v.height=e}getDimensions(){return{width:this.width,height:this.height}}setDimensions({width:e,height:t}){return this.width=e,this.height=t,this}toDataURL(){return this.#v.toDataURL()}draw(e,t=new Map){if(null==e)return;let o=this.#v,i=this.#y;i.clearRect(0,0,o.width,o.height),"string"==typeof e?(i.fillStyle=e,i.fillRect(0,0,o.width,o.height)):i.drawImage(e,0,0,o.width,o.height);let n=0;return t.forEach(e=>{let{data:t}=e;n+=1,i.save(),i.font=`${t.fontWeight} ${t.fontSize*o.width/1e3}px ${t.font}`,i.textAlign=t.textAlign,i.strokeStyle=t.strokeColor;let a=o.width/2,r=t.shadowBlur,s=(!0===t.allCaps?t.text.toUpperCase():t.text).split("\n").filter(e=>""!==e.trim()),l=i.measureText(s[0]),d=l.actualBoundingBoxAscent+l.actualBoundingBoxDescent,c=t.textBackgroundEnabled?d/4:0,u=d+t.fontSize/4+c;i.translate(a+t.offsetX,u*n+t.offsetY),i.rotate(Math.min(t.rotate,360)*Math.PI/180),t.textBackgroundEnabled&&(i.fillStyle=t.textBackgroundColor,s.forEach((e,o)=>{if(e){let n=i.measureText(e),a=n.width,r=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,s="left"===t.textAlign?0:"right"===t.textAlign?-a:-a/2;i.fillRect(s-c,o*u-r-c,a+2*c,r+2*c)}})),i.save(),0!==r&&(i.shadowOffsetX=0,i.shadowOffsetY=0,i.shadowBlur=Math.min(r,20),i.shadowColor=t.strokeColor),i.fillStyle=t.fillColor,s.forEach((e,t)=>i.fillText(e,0,t*u)),i.restore(),t.strokeWidth>0&&(i.lineWidth=Math.min(t.strokeWidth,20),s.forEach((e,t)=>i.strokeText(e,0,t*u))),i.restore()}),this}clear(){return this.#y.clearRect(0,0,this.#v.width,this.#v.height),this}show(){return this.#v.hidden=!1,this}hide(){return this.#v.hidden=!0,this}static createInstance(e){return new tj(e)}}const t_=tj.createInstance(document.getElementById("canvas")),tz=document.getElementById("videoModal"),tD=document.getElementById("downloadModal"),tI=document.querySelector("capture-photo"),t$=document.getElementById("cameraSelect"),tO=document.getElementById("capturePhotoButton"),tB=document.getElementById("torchButton"),tR=document.querySelector("files-dropzone"),tM=document.getElementById("instructions"),tN=document.getElementById("imageUploadMethodSelect"),tF=document.getElementById("fileSelectBtn"),tP=document.getElementById("imageUrlForm"),tH=document.getElementById("addTextboxBtn"),tq=document.getElementById("textboxesContainer"),tU=document.getElementById("generateMemeBtn"),tV=document.getElementById("openVideoModalBtn"),tW=document.getElementById("downloadMemeBtn"),tG=document.getElementById("downloadMemePreview"),tY=document.querySelector("web-share"),tX=document.getElementById("gallery"),tK=document.getElementById("gallerySearch"),tJ=tX.querySelector(".gallery__no-results"),tZ=document.getElementById("solidColorForm"),tQ=document.querySelectorAll(".upload-method"),t0=document.getElementById("removeConfirmationModal"),t1=document.getElementById("removeTextForm"),t3=document.getElementById("maxImageDimensionsForm"),t5=t3.maxImageDimensions,t2=document.getElementById("clearCanvasBtn"),t4=td.get("maxImageDimensions");let t9=!1,t8=null,t6=null;const t7=async()=>{let e=t_.toDataURL("image/png"),t=`${tr("meme")}.png`,o=e.replace("image/png","image/octet-stream");if(tW.download=t,tW.href=o,tG.width=t_.getDimensions().width,tG.height=t_.getDimensions().height,tG.src=o,eG())try{let o=await ts({url:e,filename:t,mimeType:"image/png"}).catch(e=>tC(e.message,"danger"));o&&eG({files:[o]})&&(tY.shareFiles=[o],tY.hidden=!1)}catch(e){console.error(e)}window.requestAnimationFrame(()=>{tD.open=!0})},oe=e=>{let[t,o]=t3.maxImageDimensions.value.split("x"),i=Number(t)||800,n=Number(o)||600,a=e.width,r=e.height;a>r?a>i&&(r*=i/a,a=i):r>n&&(a*=n/r,r=n),t_.setDimensions({width:a,height:r})},ot=()=>{t_.draw(t8,tL.getAll()).show(),tR.classList.add("dropzone--accepted"),tR.disabled=!0,tU.disabled=!1,tM.hidden=!0,t2.hidden=!1},oo=e=>{oe(t8=e.target),ot()},oi=e=>{if(!e)return;let t=new Image,o=new FileReader;o.addEventListener("load",function(e){let o=e.target.result;t.addEventListener("load",oo),t.src=o}),o.readAsDataURL(e)},on=(e,t,o)=>{let i=tL.getById(t).getData();switch(e.type){case"checkbox":i[o]=e.checked;break;case"number":i[o]=Number(e.value);break;default:i[o]=e.value}t_.draw(t8,tL.getAll())},oa=async e=>{e.preventDefault();let t=e.target,o=t.querySelector('button[type="submit"]'),i=t.imageUrl.value;if(i.trim()){o.disabled=!0,o.querySelector(".spinner").hidden=!1,o.querySelector(".label").hidden=!0;try{let e=await ts({url:i}).catch(e=>tC(e.message,"danger"));e&&oi(e)}catch{tC(`Failed to load image from "${i}".`,"danger")}finally{o.disabled=!1,o.querySelector(".spinner").hidden=!0,o.querySelector(".label").hidden=!1}}},or=(e,t)=>()=>{let o=document.getElementById(e),i=o.querySelector('[data-input="offsetY"]'),n=o.querySelector('[data-input="offsetX"]'),a=tL.getById(e);if(!a)return;let r=a.getData();switch(t=t.toLowerCase()){case"up":r.offsetY-=1,i.value=r.offsetY;break;case"down":r.offsetY+=1,i.value=r.offsetY;break;case"left":r.offsetX-=1,n.value=r.offsetX;break;case"right":r.offsetX+=1,n.value=r.offsetX}t_.draw(t8,tL.getAll()),t6=requestAnimationFrame(or(e,t))},os=async e=>{let t=e.target.closest("button");if(!t)return;let o=t.querySelector("img");try{let e=await ts({url:o.src}).catch(e=>tC(e.message,"danger"));e&&oi(e)}catch{tC(`Failed to load image: "${o.alt}".`,"danger")}},ol=(e={})=>{let{el:t,isTorchOn:o}={...{el:document.getElementById("torchButton"),isTorchOn:!1},...e},i=t.querySelectorAll("svg path");2===i.length&&(i[0].style.display=o?"none":"block",i[1].style.display=o?"block":"none",t.setAttribute("aria-label",`Turn ${o?"off":"on"} flash`))},od=async e=>{let t=e.target.getTrackCapabilities();t?.torch&&(tB?.removeAttribute("hidden"),tI?.hasAttribute("torch")&&ol({el:tB,isTorchOn:!0}));let o=await eW.getVideoInputDevices();o.forEach((e,t)=>{let o=document.createElement("option");o.value=e.deviceId,o.textContent=e.label||`Camera ${t+1}`,t$.appendChild(o)}),o.length>1&&t$?.removeAttribute("hidden")};document.addEventListener("tt-theme-change",e=>{let t=e.detail.theme,o=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-bs-theme","system"===t?o:t)}),document.addEventListener("web-share:error",()=>{tD.open=!1,tC("There was an error while trying to share your meme.","danger")}),document.addEventListener("capture-photo:video-play",od,{once:!0}),document.addEventListener("capture-photo:error",e=>{let t=e.detail.error,o="An error occurred while trying to capture photo.";t instanceof Error&&("NotAllowedError"===t.name||"NotFoundError"===t.name)&&(o+=" Make sure you have a camera connected and you have granted the appropriate permissions."),tC(o,"danger"),tz.open=!1,console.error(t)}),document.addEventListener("capture-photo:success",e=>{tz.open=!1;let t=new Image;t.addEventListener("load",oo),t.src=e.detail.dataURI}),document.addEventListener("me-open",e=>{"videoModal"===e.target.id&&tI&&"function"==typeof tI.startVideoStream&&tI.startVideoStream()}),document.addEventListener("me-close",e=>{"videoModal"===e.target.id&&tI&&"function"==typeof tI.stopVideoStream&&tI.stopVideoStream(),"removeConfirmationModal"===e.target.id&&t1.reset()}),document.addEventListener("emoji-click",e=>{let t=e.target.closest('[data-section="textbox"]');if(t){let o=t.querySelector('[data-input="text"]'),i=e.detail.unicode;o&&eH(o,i)}}),document.addEventListener("textbox-create",e=>{let t=e.detail.textbox,o=tL.createElement(t,t9);t9=!0,tq.appendChild(o),t.getData().text&&t_.draw(t8,tL.getAll())}),document.addEventListener("textbox-remove",e=>{let t=document.getElementById(e.detail.id);t&&t.remove(),tq.querySelectorAll('[data-section="textbox"]').forEach((e,t)=>{e.querySelector('[data-input="text"]').setAttribute("placeholder",`Text #${t+1}`)}),t_.draw(t8,tL.getAll())}),tF.addEventListener("click",()=>{"function"==typeof tR.openFileDialog&&(tR.disabled=!1,tR.openFileDialog())}),tV.addEventListener("click",()=>{tz.open=!0}),tH.addEventListener("click",()=>tL.create()),tU.addEventListener("click",t7),tW.addEventListener("click",()=>tD.open=!1),tP.addEventListener("submit",oa),tR.addEventListener("files-dropzone-drop-accepted",e=>{let[t]=e.detail.acceptedFiles;t&&oi(t)}),tq.addEventListener("input",e=>{let t=e.target,o={text:"text",fillColor:"fillColor",strokeColor:"strokeColor",font:"font",fontSize:"fontSize",fontWeight:"fontWeight",textAlign:"textAlign",shadowBlur:"shadowBlur",offsetY:"offsetY",offsetX:"offsetX",rotate:"rotate",strokeWidth:"strokeWidth",textBackgroundEnabled:"textBackgroundEnabled",textBackgroundColor:"textBackgroundColor"}[t.dataset.input];if(!o)return;let i=t.closest('[data-section="textbox"]').id;on(t,i,o)}),tq.addEventListener("change",e=>{let t,o=e.target,i=o.closest('[data-section="textbox"]').id;o.matches('[data-input="allCaps"]')&&(t="allCaps"),t&&on(o,i,t)}),tq.addEventListener("click",e=>{let t=e.target;if(t.matches('[data-button="settings"]')){let e=t.closest('[data-section="textbox"]'),o=e?.querySelector('[data-section="advanced-settings"]');o&&(o.hidden=!o.hidden)}if(t.matches('[data-button="duplicate-text-box"')){let e=t.closest('[data-section="textbox"]'),o=tL.getById(e.id);tL.create({...o.data})}if(t.matches('[data-button="delete-text-box"]')){let e=t.closest('[data-section="textbox"]').id,o=tL.getById(e);if(o&&o.data.text.trim()){let t=t1["textbox-id"];t&&(t.value=e,t0.open=!0)}else tL.remove(e)}}),tq.addEventListener("pointerdown",e=>{let t=e.target,o=t.closest('[data-section="textbox"]');o&&t.matches('[data-action="move-text"]')&&(t6=requestAnimationFrame(or(o.id,t.getAttribute("aria-label"))))}),tq.addEventListener("pointerup",e=>{e.target.matches('[data-action="move-text"]')&&(cancelAnimationFrame&&cancelAnimationFrame(t6),t6=null)}),tq.addEventListener("pointerout",e=>{e.target.matches('[data-action="move-text"]')&&(cancelAnimationFrame&&cancelAnimationFrame(t6),t6=null)}),tq.addEventListener("keydown",e=>{let t=e.target,o=t.closest('[data-section="textbox"]');t.matches('[data-action="move-text"]')&&(" "===e.key||"Enter"===e.key)&&(t6&&cancelAnimationFrame(t6),t6=requestAnimationFrame(or(o.id,t.getAttribute("aria-label"))))}),tq.addEventListener("keyup",e=>{e.target.matches('[data-action="move-text"]')&&(" "===e.key||"Enter"===e.key)&&(t6&&cancelAnimationFrame(t6),t6=null)}),tN.addEventListener("change",e=>{tQ.forEach(t=>t.hidden=t.id!==e.target.value),t3.hidden="solidColorForm"===e.target.value}),tX.addEventListener("click",os),tK.addEventListener("input",e=>{let t=e.target.value.toLowerCase().trim();tX.querySelectorAll("button").forEach(e=>{let o=(e.querySelector("img").getAttribute("alt")||"").toLowerCase();e.hidden=!o.includes(t)}),tJ.hidden=!!tX.querySelector("button:not([hidden])")}),tZ.addEventListener("input",e=>{e.target===tZ.canvasColor&&(t8=e.target.value),"string"==typeof t8&&(t_.setDimensions({width:Number(tZ.canvasWidth.value)||800,height:Number(tZ.canvasHeight.value)||600}),ot())}),t1.addEventListener("submit",e=>{e.preventDefault();let t=e.target["textbox-id"].value;t&&(tL.remove(t),t0.open=!1)}),t3.addEventListener("change",e=>{e.target.matches('[name="maxImageDimensions"]')&&td.set("maxImageDimensions",e.target.value),!t8||"string"==typeof t8||(oe(t8),t_.draw(t8,tL.getAll()))}),t2.addEventListener("click",e=>{t8&&(e.stopPropagation(),t8=null,tR.classList.remove("dropzone--accepted"),tU.disabled=!0,tM.hidden=!1,t2.hidden=!0,tR.disabled=!1,t_.clear().hide())}),t$.addEventListener("change",e=>{if(null===tI||"function"!=typeof tI.restartVideoStream||tI.hasAttribute("loading"))return;let t=e.target.value||void 0;tI.restartVideoStream(t)}),tO.addEventListener("click",()=>{null===tI||"function"!=typeof tI.capture||tI.hasAttribute("loading")||tI.capture()}),tB.addEventListener("click",e=>{null!==tI&&(tI.torch=!tI.torch,ol({el:e.currentTarget,isTorchOn:tI.hasAttribute("torch")}))}),tX.querySelectorAll("button > img")?.forEach(e=>{e.setAttribute("title",e.getAttribute("alt"))}),tL.create(),tR.accept=ta,((e,t)=>{if(!t)return;let o=e.map(e=>e.split("/")[1]),i=`Supported image formats: ${o.join(", ")}`,n=document.createElement("div"),a=document.createElement("small");a.textContent=i,n.appendChild(a),t.appendChild(a)})(ta,tM),tE.forEach(({name:e,path:t,style:o,weight:i})=>{tk(e,t,{style:o,weight:i})}),t4&&(t5.value=t4),t5.disabled=!1;
//# sourceMappingURL=meme-generator.bcbfc775.js.map
