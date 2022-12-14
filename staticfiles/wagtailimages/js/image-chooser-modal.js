(()=>{"use strict";var e,t={1293:function(e,t,o){var r,n=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=a(o(5311)),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.ajaxifyLinks=function(t,o){e.prototype.ajaxifyLinks.call(this,t,o),(0,i.default)("a.upload-one-now").on("click",(function(e){var t=(0,i.default)("#id_collection_id").val();t&&(0,i.default)("#id_image-chooser-upload-collection").val(t),e.preventDefault()}))},t.prototype.onLoadChooseStep=function(t){var o=this;e.prototype.onLoadChooseStep.call(this,t),(0,i.default)("a.suggested-tag").on("click",(function(e){return(0,i.default)("#id_q").val(""),o.searchController.search({tag:(0,i.default)(e.currentTarget).text(),collection_id:(0,i.default)("#id_collection_id").val()}),!1}))},t.prototype.onLoadDuplicateFoundStep=function(e,t){(0,i.default)("#tab-upload",e.body).replaceWith(t.htmlFragment),(0,i.default)(".use-new-image",e.body).on("click",(function(t){return e.loadUrl(t.currentTarget.href),!1})),(0,i.default)(".use-existing-image",e.body).on("click",(function(t){var o=(0,i.default)(t.currentTarget).closest("form"),r=(0,i.default)('input[name="csrfmiddlewaretoken"]',o).val();return e.postForm(t.currentTarget.href,{csrfmiddlewaretoken:r}),!1}))},t.prototype.onLoadSelectFormatStep=function(e){var t=document.querySelector("#id_image-chooser-insertion-image_is_decorative"),o=document.querySelector("#id_image-chooser-insertion-alt_text"),r=document.querySelector('[for="id_image-chooser-insertion-alt_text"]');function n(){o.setAttribute("disabled","disabled"),r.classList.remove("required")}function a(){o.removeAttribute("disabled"),r.classList.add("required")}t.checked?n():a(),t.addEventListener("change",(function(e){e.target.checked?n():a()})),(0,i.default)("form",e.body).on("submit",(function(t){return i.default.post(t.currentTarget.action,(0,i.default)(t.currentTarget).serialize(),e.loadResponseText,"text"),!1}))},t.prototype.getOnLoadHandlers=function(){var t=this,o=e.prototype.getOnLoadHandlers.call(this);return o.duplicate_found=function(e,o){t.onLoadDuplicateFoundStep(e,o)},o.select_format=function(e,o){t.onLoadSelectFormatStep(e,o)},o},t}(o(6024).ChooserModalOnloadHandlerFactory);window.IMAGE_CHOOSER_MODAL_ONLOAD_HANDLERS=new l({creationFormFileFieldSelector:"#id_image-chooser-upload-file",creationFormTitleFieldSelector:"#id_image-chooser-upload-title",creationFormEventName:"wagtail:images-upload",creationFormTabSelector:"#tab-upload"}).getOnLoadHandlers()},5311:e=>{e.exports=jQuery}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],l=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[u])))?o.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=813,(()=>{var e={813:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,u]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(u)var d=u(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},o=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[751],(()=>r(1293)));n=r.O(n)})();