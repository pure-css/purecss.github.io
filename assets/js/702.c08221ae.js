(self.webpackChunkpure=self.webpackChunkpure||[]).push([[702],{1312:(e,t,n)=>{"use strict";n.d(t,{A:()=>l,T:()=>c});var o=n(6540),s=n(4848);function a(e,t){const n=e.split(/(\{\w+\})/).map(((e,n)=>{if(n%2==1){const n=t?.[e.slice(1,-1)];if(void 0!==n)return n}return e}));return n.some((e=>(0,o.isValidElement)(e)))?n.map(((e,t)=>(0,o.isValidElement)(e)?o.cloneElement(e,{key:t}):e)).filter((e=>""!==e)):n.join("")}var r=n(2654);function i(e){let{id:t,message:n}=e;if(void 0===t&&void 0===n)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return r[t??n]??n??t}function c(e,t){let{message:n,id:o}=e;return a(i({message:n,id:o}),t)}function l(e){let{children:t,id:n,values:o}=e;if(t&&"string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");const r=i({message:t,id:n});return(0,s.jsx)(s.Fragment,{children:a(r,o)})}},1107:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(6540);var o=n(4164),s=n(1312),a=n(6342),r=n(8774),i=n(3427);const c={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var l=n(4848);function d(e){let{as:t,id:n,...d}=e;const u=(0,i.A)(),{navbar:{hideOnScroll:m}}=(0,a.p)();if("h1"===t||!n)return(0,l.jsx)(t,{...d,id:void 0});u.collectAnchor(n);const h=(0,s.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return(0,l.jsxs)(t,{...d,className:(0,o.A)("anchor",m?c.anchorWithHideOnScrollNavbar:c.anchorWithStickyNavbar,d.className),id:n,children:[d.children,(0,l.jsx)(r.A,{className:"hash-link",to:`#${n}`,"aria-label":h,title:h,children:"\u200b"})]})}},8702:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Tt});var o=n(6540),s=n(4164),a=n(1003);const r={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",blogAuthorsListPage:"blog-authors-list-page",blogAuthorsPostsPage:"blog-authors-posts-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button",codeBlock:"theme-code-block",admonition:"theme-admonition",unlistedBanner:"theme-unlisted-banner",draftBanner:"theme-draft-banner",admonitionType:e=>`theme-admonition-${e}`},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docBreadcrumbs:"theme-doc-breadcrumbs",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarContainer:"theme-doc-sidebar-container",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{blogFooterTagsRow:"theme-blog-footer-tags-row",blogFooterEditMetaRow:"theme-blog-footer-edit-meta-row"},pages:{pageFooterEditMetaRow:"theme-pages-footer-edit-meta-row"}};var i=n(6225),c=n(8453),l=n(5260),d=n(2303),u=n(8193),m=n(205),h=n(4848);class f extends Error{constructor(e,t){super(),this.name="ReactContextError",this.message=`Hook ${this.stack?.split("\n")[1]?.match(/at (?:\w+\.)?(?<name>\w+)/)?.groups.name??""} is called outside the <${e}>. ${t??""}`}}var p=n(4180);const g=p.N;function b(e){let{key:t,oldValue:n,newValue:o,storage:s}=e;if(n===o)return;const a=document.createEvent("StorageEvent");a.initStorageEvent("storage",!1,!1,t,n,o,window.location.href,s),window.dispatchEvent(a)}function x(e){if(void 0===e&&(e=g),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,v||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),v=!0),null}var t}let v=!1;const j={get:()=>null,set:()=>{},del:()=>{},listen:()=>()=>{}};function y(e,t){const n=`${e}${p.M}`;if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t,listen:t}}(n);const o=x(t?.persistence);return null===o?j:{get:()=>{try{return o.getItem(n)}catch(e){return console.error(`Docusaurus storage error, can't get key=${n}`,e),null}},set:e=>{try{const t=o.getItem(n);o.setItem(n,e),b({key:n,oldValue:t,newValue:e,storage:o})}catch(t){console.error(`Docusaurus storage error, can't set ${n}=${e}`,t)}},del:()=>{try{const e=o.getItem(n);o.removeItem(n),b({key:n,oldValue:e,newValue:null,storage:o})}catch(e){console.error(`Docusaurus storage error, can't delete key=${n}`,e)}},listen:e=>{try{const t=t=>{t.storageArea===o&&t.key===n&&e(t)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)}catch(t){return console.error(`Docusaurus storage error, can't listen for changes of key=${n}`,t),()=>{}}}}}const w=o.createContext(void 0),N="theme";y(N);var k=n(6342);function A(){const{prism:e}=(0,k.p)(),{colorMode:t}=function(){const e=(0,o.useContext)(w);if(null==e)throw new f("ColorModeProvider","Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.");return e}(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var C=n(8426),B=n.n(C);const L=/title=(?<quote>["'])(?<title>.*?)\1/,E=/\{(?<range>[\d,-]+)\}/,T={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},S={...T,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},_=Object.keys(T);function H(e,t){const n=e.map((e=>{const{start:n,end:o}=S[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function I(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:a}=t;if(a&&E.test(a)){const e=a.match(E).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=B()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return H(["js","jsBlock"],t);case"jsx":case"tsx":return H(["js","jsBlock","jsx"],t);case"html":return H(["js","jsBlock","html"],t);case"python":case"py":case"bash":return H(["bash"],t);case"markdown":case"md":return H(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return H(["tex"],t);case"lua":case"haskell":case"sql":return H(["lua"],t);case"wasm":return H(["wasm"],t);case"vb":case"vba":case"visual-basic":return H(["vb","rem"],t);case"vbnet":return H(["vbnet","rem"],t);case"batch":return H(["rem"],t);case"basic":return H(["rem","f90"],t);case"fsharp":return H(["js","ml"],t);case"ocaml":case"sml":return H(["ml"],t);case"fortran":return H(["f90"],t);case"cobol":return H(["cobol"],t);default:return H(_,t)}}(o,s),i=n.split("\n"),c=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(r);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?c[l[t]].range+=`${h},`:d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;B()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const M={codeBlockContainer:"codeBlockContainer_Ckt0"};function P(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const a=t[o];a&&"string"==typeof s&&(n[a]=s)})),n}(A());return(0,h.jsx)(t,{...n,style:o,className:(0,s.A)(n.className,M.codeBlockContainer,r.common.codeBlock)})}const R={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function U(e){let{children:t,className:n}=e;return(0,h.jsx)(P,{as:"pre",tabIndex:0,className:(0,s.A)(R.codeBlockStandalone,"thin-scrollbar",n),children:(0,h.jsx)("code",{className:R.codeBlockLines,children:t})})}const $={attributes:!0,characterData:!0,childList:!0,subtree:!0};function V(e,t,n){void 0===n&&(n=$);const s=function(e){const t=(0,o.useRef)(e);return(0,m.A)((()=>{t.current=e}),[e]),(0,o.useCallback)((function(){return t.current(...arguments)}),[])}(t),a=function(e){const t=Object.entries(e);return t.sort(((e,t)=>e[0].localeCompare(t[0]))),(0,o.useMemo)((()=>e),t.flat())}(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,a),()=>t.disconnect()}),[e,s,a])}function D(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),a=(0,o.useRef)(null),r=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");s(n)}),[a]);return function(e,t){const[n,s]=(0,o.useState)(),a=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{a()}),[a]),V(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(a,i),(0,o.useEffect)((()=>{i()}),[e,i]),(0,o.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:r}}var z=n(1765);const O={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function W(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:a,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,s.A)(n,o&&O.codeLine)}),c=t.map(((e,t)=>(0,h.jsx)("span",{...r({token:e})},t)));return(0,h.jsxs)("span",{...i,children:[o?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{className:O.codeLineNumber}),(0,h.jsx)("span",{className:O.codeLineContent,children:c})]}):c,(0,h.jsx)("br",{})]})}var F=n(1312);function q(e){return(0,h.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,h.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function G(e){return(0,h.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,h.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const Z={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function J(e){let{code:t,className:n}=e;const[a,r]=(0,o.useState)(!1),i=(0,o.useRef)(void 0),c=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection(),r=a.rangeCount>0&&a.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}o.remove(),r&&(a.removeAllRanges(),a.addRange(r)),s&&s.focus()}(t),r(!0),i.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,h.jsx)("button",{type:"button","aria-label":a?(0,F.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,F.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,F.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",n,Z.copyButton,a&&Z.copyButtonCopied),onClick:c,children:(0,h.jsxs)("span",{className:Z.copyButtonIcons,"aria-hidden":"true",children:[(0,h.jsx)(q,{className:Z.copyButtonIcon}),(0,h.jsx)(G,{className:Z.copyButtonSuccessIcon})]})})}function Y(e){return(0,h.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,h.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const K={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Q(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,F.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,h.jsx)("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",t,o&&K.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,h.jsx)(Y,{className:K.wordWrapButtonIcon,"aria-hidden":"true"})})}function X(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:r,language:i}=e;const{prism:{defaultLanguage:c,magicComments:l}}=(0,k.p)(),d=function(e){return e?.toLowerCase()}(i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??c),u=A(),m=D(),f=function(e){return e?.match(L)?.groups.title??""}(o)||a,{lineClassNames:p,code:g}=I(t,{metastring:o,language:d,magicComments:l}),b=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,h.jsxs)(P,{as:"div",className:(0,s.A)(n,d&&!n.includes(`language-${d}`)&&`language-${d}`),children:[f&&(0,h.jsx)("div",{className:R.codeBlockTitle,children:f}),(0,h.jsxs)("div",{className:R.codeBlockContent,children:[(0,h.jsx)(z.f4,{theme:u,code:g,language:d??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:a,getTokenProps:r}=e;return(0,h.jsx)("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,s.A)(t,R.codeBlock,"thin-scrollbar"),style:n,children:(0,h.jsx)("code",{className:(0,s.A)(R.codeBlockLines,b&&R.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,h.jsx)(W,{line:e,getLineProps:a,getTokenProps:r,classNames:p[t],showLineNumbers:b},t)))})})}}),(0,h.jsxs)("div",{className:R.buttonGroup,children:[(m.isEnabled||m.isCodeScrollable)&&(0,h.jsx)(Q,{className:R.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),(0,h.jsx)(J,{className:R.codeButton,code:g})]})]})]})}function ee(e){let{children:t,...n}=e;const s=(0,d.A)(),a=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof a?X:U;return(0,h.jsx)(r,{...n,children:a},String(s))}function te(e){return(0,h.jsx)("code",{...e})}var ne=n(8774);var oe=n(3427);const se="ease-in-out";const ae={display:"none",overflow:"hidden",height:"0px"},re={display:"block",overflow:"visible",height:"auto"};function ie(e,t){const n=t?ae:re;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function ce(e){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return 1;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function le(e){let{collapsibleRef:t,collapsed:n,animation:s}=e;const a=(0,o.useRef)(!1);(0,o.useEffect)((()=>{const e=t.current;function o(){const t=function(){const t=e.scrollHeight;return{transition:`height ${s?.duration??ce(t)}ms ${s?.easing??se}`,height:`${t}px`}}();e.style.transition=t.transition,e.style.height=t.height}if(!a.current)return ie(e,n),void(a.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(o(),requestAnimationFrame((()=>{e.style.height=ae.height,e.style.overflow=ae.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{o()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,s])}function de(e){if(!u.A.canUseDOM)return e?ae:re}function ue(e){let{as:t="div",collapsed:n,children:s,animation:a,onCollapseTransitionEnd:r,className:i,disableSSRStyle:c}=e;const l=(0,o.useRef)(null);return le({collapsibleRef:l,collapsed:n,animation:a}),(0,h.jsx)(t,{ref:l,style:c?void 0:de(n),onTransitionEnd:e=>{"height"===e.propertyName&&(ie(l.current,n),r?.(n))},className:i,children:s})}function me(e){let{collapsed:t,...n}=e;const[s,a]=(0,o.useState)(!t),[r,i]=(0,o.useState)(t);return(0,m.A)((()=>{t||a(!0)}),[t]),(0,m.A)((()=>{s&&i(t)}),[s,t]),s?(0,h.jsx)(ue,{...n,collapsed:r}):null}function he(e){let{lazy:t,...n}=e;const o=t?me:ue;return(0,h.jsx)(o,{...n})}const fe={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function pe(e){return!!e&&("SUMMARY"===e.tagName||pe(e.parentElement))}function ge(e,t){return!!e&&(e===t||ge(e.parentElement,t))}function be(e){let{summary:t,children:n,...a}=e;(0,oe.A)().collectAnchor(a.id);const r=(0,d.A)(),i=(0,o.useRef)(null),{collapsed:c,setCollapsed:l}=function(e){let{initialState:t}=e;const[n,s]=(0,o.useState)(t??!1),a=(0,o.useCallback)((()=>{s((e=>!e))}),[]);return{collapsed:n,setCollapsed:s,toggleCollapsed:a}}({initialState:!a.open}),[u,m]=(0,o.useState)(a.open),f=o.isValidElement(t)?t:(0,h.jsx)("summary",{children:t??"Details"});return(0,h.jsxs)("details",{...a,ref:i,open:u,"data-collapsed":c,className:(0,s.A)(fe.details,r&&fe.isBrowser,a.className),onMouseDown:e=>{pe(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;pe(t)&&ge(t,i.current)&&(e.preventDefault(),c?(l(!1),m(!0)):l(!0))},children:[f,(0,h.jsx)(he,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),m(!e)},children:(0,h.jsx)("div",{className:fe.collapsibleContent,children:n})})]})}const xe={details:"details_b_Ee"},ve="alert alert--info";function je(e){let{...t}=e;return(0,h.jsx)(be,{...t,className:(0,s.A)(ve,xe.details,t.className)})}function ye(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.type)),s=(0,h.jsx)(h.Fragment,{children:t.filter((e=>e!==n))});return(0,h.jsx)(je,{...e,summary:n,children:s})}var we=n(1107);function Ne(e){return(0,h.jsx)(we.A,{...e})}const ke={containsTaskList:"containsTaskList_mC6p"};function Ae(e){if(void 0!==e)return(0,s.A)(e,e?.includes("contains-task-list")&&ke.containsTaskList)}const Ce={img:"img_ev3q"};function Be(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:s.length>0?(0,h.jsx)(h.Fragment,{children:s}):null}}(e.children),s=e.title??t;return{...e,...s&&{title:s},children:n}}const Le={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function Ee(e){let{type:t,className:n,children:o}=e;return(0,h.jsx)("div",{className:(0,s.A)(r.common.admonition,r.common.admonitionType(t),Le.admonition,n),children:o})}function Te(e){let{icon:t,title:n}=e;return(0,h.jsxs)("div",{className:Le.admonitionHeading,children:[(0,h.jsx)("span",{className:Le.admonitionIcon,children:t}),n]})}function Se(e){let{children:t}=e;return t?(0,h.jsx)("div",{className:Le.admonitionContent,children:t}):null}function _e(e){const{type:t,icon:n,title:o,children:s,className:a}=e;return(0,h.jsxs)(Ee,{type:t,className:a,children:[o||n?(0,h.jsx)(Te,{title:o,icon:n}):null,(0,h.jsx)(Se,{children:s})]})}function He(e){return(0,h.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const Ie={icon:(0,h.jsx)(He,{}),title:(0,h.jsx)(F.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Me(e){return(0,h.jsx)(_e,{...Ie,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function Pe(e){return(0,h.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const Re={icon:(0,h.jsx)(Pe,{}),title:(0,h.jsx)(F.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function Ue(e){return(0,h.jsx)(_e,{...Re,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function $e(e){return(0,h.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const Ve={icon:(0,h.jsx)($e,{}),title:(0,h.jsx)(F.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function De(e){return(0,h.jsx)(_e,{...Ve,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function ze(e){return(0,h.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const Oe={icon:(0,h.jsx)(ze,{}),title:(0,h.jsx)(F.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function We(e){return(0,h.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Fe={icon:(0,h.jsx)(We,{}),title:(0,h.jsx)(F.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const qe={icon:(0,h.jsx)(ze,{}),title:(0,h.jsx)(F.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Ge={...{note:Me,tip:Ue,info:De,warning:function(e){return(0,h.jsx)(_e,{...Oe,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,h.jsx)(_e,{...Fe,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,h.jsx)(Me,{title:"secondary",...e}),important:e=>(0,h.jsx)(De,{title:"important",...e}),success:e=>(0,h.jsx)(Ue,{title:"success",...e}),caution:function(e){return(0,h.jsx)(_e,{...qe,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}};function Ze(e){const t=Be(e),n=(o=t.type,Ge[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),Ge.info));var o;return(0,h.jsx)(n,{...t})}const Je={Head:l.A,details:ye,Details:ye,code:function(e){return function(e){return void 0!==e.children&&o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,h.jsx)(te,{...e}):(0,h.jsx)(ee,{...e})},a:function(e){return(0,h.jsx)(ne.A,{...e})},pre:function(e){return(0,h.jsx)(h.Fragment,{children:e.children})},ul:function(e){return(0,h.jsx)("ul",{...e,className:Ae(e.className)})},li:function(e){return(0,oe.A)().collectAnchor(e.id),(0,h.jsx)("li",{...e})},img:function(e){return(0,h.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,s.A)(t,Ce.img))});var t},h1:e=>(0,h.jsx)(Ne,{as:"h1",...e}),h2:e=>(0,h.jsx)(Ne,{as:"h2",...e}),h3:e=>(0,h.jsx)(Ne,{as:"h3",...e}),h4:e=>(0,h.jsx)(Ne,{as:"h4",...e}),h5:e=>(0,h.jsx)(Ne,{as:"h5",...e}),h6:e=>(0,h.jsx)(Ne,{as:"h6",...e}),admonition:Ze,mermaid:()=>null};function Ye(e){let{children:t}=e;return(0,h.jsx)(c.x,{components:Je,children:t})}function Ke(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):o.push(s)})),o}function Qe(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=Qe({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function Xe(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Xe(e.parentNode):t}function et(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>Xe(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Xe(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function tt(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,k.p)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function nt(e){const t=(0,o.useRef)(void 0),n=tt();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let s=t;s<=n;s+=1)o.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:a,maxHeadingLevel:r}),c=et(i,{anchorTopOffset:n.current}),l=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===l)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function ot(e){let{toc:t,className:n,linkClassName:o,isChild:s}=e;return t.length?(0,h.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(ne.A,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(ot,{isChild:!0,toc:e.children,className:n,linkClassName:o})]},e.id)))}):null}const st=o.memo(ot);function at(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:i,...c}=e;const l=(0,k.p)(),d=r??l.tableOfContents.minHeadingLevel,u=i??l.tableOfContents.maxHeadingLevel,m=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,o.useMemo)((()=>Qe({toc:Ke(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return nt((0,o.useMemo)((()=>{if(s&&a)return{linkClassName:s,linkActiveClassName:a,minHeadingLevel:d,maxHeadingLevel:u}}),[s,a,d,u])),(0,h.jsx)(st,{toc:m,className:n,linkClassName:s,...c})}const rt={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},it="table-of-contents__link toc-highlight",ct="table-of-contents__link--active";function lt(e){let{className:t,...n}=e;return(0,h.jsx)("div",{className:(0,s.A)(rt.tableOfContents,"thin-scrollbar",t),children:(0,h.jsx)(at,{...n,linkClassName:it,linkActiveClassName:ct})})}function dt(){return(0,h.jsx)(F.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function ut(){return(0,h.jsx)(F.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function mt(){return(0,h.jsx)(l.A,{children:(0,h.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function ht(){return(0,h.jsx)(F.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function ft(){return(0,h.jsx)(F.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function pt(e){let{className:t}=e;return(0,h.jsx)(Ze,{type:"caution",title:(0,h.jsx)(ht,{}),className:(0,s.A)(t,r.common.draftBanner),children:(0,h.jsx)(ft,{})})}function gt(e){let{className:t}=e;return(0,h.jsx)(Ze,{type:"caution",title:(0,h.jsx)(dt,{}),className:(0,s.A)(t,r.common.unlistedBanner),children:(0,h.jsx)(ut,{})})}function bt(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(mt,{}),(0,h.jsx)(gt,{...e})]})}function xt(e){let{metadata:t}=e;const{unlisted:n,frontMatter:o}=t;return(0,h.jsxs)(h.Fragment,{children:[(n||o.unlisted)&&(0,h.jsx)(bt,{}),o.draft&&(0,h.jsx)(pt,{})]})}const vt={iconEdit:"iconEdit_Z9Sw"};function jt(e){let{className:t,...n}=e;return(0,h.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(vt.iconEdit,t),"aria-hidden":"true",...n,children:(0,h.jsx)("g",{children:(0,h.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function yt(e){let{editUrl:t}=e;return(0,h.jsxs)(ne.A,{to:t,className:r.common.editThisPage,children:[(0,h.jsx)(jt,{}),(0,h.jsx)(F.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var wt=n(4586);function Nt(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,wt.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,wt.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function kt(e){let{lastUpdatedAt:t}=e;const n=new Date(t),o=Nt({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,h.jsx)(F.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,h.jsx)("b",{children:(0,h.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:o})})},children:" on {date}"})}function At(e){let{lastUpdatedBy:t}=e;return(0,h.jsx)(F.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,h.jsx)("b",{children:t})},children:" by {user}"})}function Ct(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,h.jsxs)("span",{className:r.common.lastUpdated,children:[(0,h.jsx)(F.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,h.jsx)(kt,{lastUpdatedAt:t}):"",byUser:n?(0,h.jsx)(At,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const Bt={lastUpdated:"lastUpdated_JAkA"};function Lt(e){let{className:t,editUrl:n,lastUpdatedAt:o,lastUpdatedBy:a}=e;return(0,h.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,h.jsx)("div",{className:"col",children:n&&(0,h.jsx)(yt,{editUrl:n})}),(0,h.jsx)("div",{className:(0,s.A)("col",Bt.lastUpdated),children:(o||a)&&(0,h.jsx)(Ct,{lastUpdatedAt:o,lastUpdatedBy:a})})]})}const Et={mdxPageWrapper:"mdxPageWrapper_j9I6"};function Tt(e){const{content:t}=e,{metadata:n,assets:o}=t,{title:c,editUrl:l,description:d,frontMatter:u,lastUpdatedBy:m,lastUpdatedAt:f}=n,{keywords:p,wrapperClassName:g,hide_table_of_contents:b}=u,x=o.image??u.image,v=!!(l||f||m);return(0,h.jsx)(a.e3,{className:(0,s.A)(g??r.wrapper.mdxPages,r.page.mdxPage),children:(0,h.jsxs)(i.A,{children:[(0,h.jsx)(a.be,{title:c,description:d,keywords:p,image:x}),(0,h.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,h.jsxs)("div",{className:(0,s.A)("row",Et.mdxPageWrapper),children:[(0,h.jsxs)("div",{className:(0,s.A)("col",!b&&"col--8"),children:[(0,h.jsx)(xt,{metadata:n}),(0,h.jsx)("article",{children:(0,h.jsx)(Ye,{children:(0,h.jsx)(t,{})})}),v&&(0,h.jsx)(Lt,{className:(0,s.A)("margin-top--sm",r.pages.pageFooterEditMetaRow),editUrl:l,lastUpdatedAt:f,lastUpdatedBy:m})]}),!b&&t.toc.length>0&&(0,h.jsx)("div",{className:"col col--2",children:(0,h.jsx)(lt,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level})})]})})]})})}},8426:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>r,x:()=>i});var o=n(6540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);