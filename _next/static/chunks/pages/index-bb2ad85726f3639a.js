(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1869)}])},4530:function(e,t,n){"use strict";var r=n(5893),l=n(2204);t.Z=function(e){let{src:t,...n}=e;t.endsWith(".jpg")||t.endsWith(".png")||t.endsWith(".webp")||(t+=".webp");let o=(0,l.Z)(t);return(0,r.jsx)("img",{src:o,...n})}},5405:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return f}});let l="refresh",o="navigate",u="restore",i="server-patch",s="prefetch",a="fast-refresh",c="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4231:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2492),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),l=r._(n(7294)),o=n(7406),u=n(578),i=n(9902),s=n(4316),a=n(586),c=n(2534),f=n(4751),d=n(4457),p=n(4231),h=n(8134),_=n(5405),b=new Set;function g(e,t,n,r,l,o){if(!o&&!(0,u.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let l=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+l;if(b.has(o))return;b.add(o)}let i=o?e.prefetch(t,l):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let j=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:b,children:j,prefetch:y=null,passHref:m,replace:x,shallow:E,scroll:O,locale:C,onClick:P,onMouseEnter:k,onTouchStart:T,legacyBehavior:N=!1,...R}=e;n=j,N&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let M=l.default.useContext(c.RouterContext),w=l.default.useContext(f.AppRouterContext),A=null!=M?M:w,I=!M,L=!1!==y,S=null===y?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:F,as:U}=l.default.useMemo(()=>{if(!M){let e=v(i);return{href:e,as:b?v(b):e}}let[e,t]=(0,o.resolveHref)(M,i,!0);return{href:e,as:b?(0,o.resolveHref)(M,b):t||e}},[M,i,b]),Z=l.default.useRef(F),H=l.default.useRef(U);N&&(r=l.default.Children.only(n));let K=N?r&&"object"==typeof r&&r.ref:t,[D,V,G]=(0,d.useIntersection)({rootMargin:"200px"}),W=l.default.useCallback(e=>{(H.current!==U||Z.current!==F)&&(G(),H.current=U,Z.current=F),D(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[U,K,F,G,D]);l.default.useEffect(()=>{A&&V&&L&&g(A,F,U,{locale:C},{kind:S},I)},[U,F,V,C,L,null==M?void 0:M.locale,A,I,S]);let q={ref:W,onClick(e){N||"function"!=typeof P||P(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,o,i,s,a,c){let{nodeName:f}=e.currentTarget,d="A"===f.toUpperCase();if(d&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let p=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?l.default.startTransition(p):p()}(e,A,F,U,x,E,O,C,I)},onMouseEnter(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(L||!I)&&g(A,F,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:S},I)},onTouchStart(e){N||"function"!=typeof T||T(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(L||!I)&&g(A,F,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:S},I)}};if((0,s.isAbsoluteUrl)(U))q.href=U;else if(!N||m||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);q.href=t||(0,h.addBasePath)((0,a.addLocale)(U,e,null==M?void 0:M.defaultLocale))}return N?l.default.cloneElement(r,q):l.default.createElement("a",{...R,...q},n)}),y=j;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4457:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=n(7294),l=n(3371),o="function"==typeof IntersectionObserver,u=new Map,i=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,a=s||!o,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(o){if(a||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:l,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:l},i.push(n),u.set(n,t),t}(n);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,l.requestIdleCallback)(()=>f(!0));return()=>(0,l.cancelIdleCallback)(e)}},[a,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1869:function(e,t,n){"use strict";n.r(t);var r=n(5893),l=n(9008),o=n.n(l),u=n(1664),i=n.n(u),s=n(7910),a=n.n(s),c=n(4530),f=n(2204);t.default=function(){let e=(0,f.Z)("/assets/summon-stone.jpg");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"FEH幫個忙"})}),(0,r.jsxs)("div",{className:a().container,style:{background:"url('".concat(e,"') center / cover no-repeat fixed")},children:[(0,r.jsx)(c.Z,{src:"/error.png",className:a()["title-img"]}),(0,r.jsx)("div",{className:"".concat(a().title," ").concat(a()["gradient-bg"]),children:"FEH幫個忙"}),(0,r.jsxs)("div",{className:a().links,children:[(0,r.jsxs)(i(),{href:"/uniteditor",shallow:!0,children:[(0,r.jsx)(c.Z,{src:"/assets/uniteditor.jpg"}),(0,r.jsx)("div",{className:a()["gradient-bg"],children:"單兵製造機"})]}),(0,r.jsxs)(i(),{href:"/ivviewer",shallow:!0,children:[(0,r.jsx)(c.Z,{src:"/assets/ivviewer.jpg"}),(0,r.jsx)("div",{className:a()["gradient-bg"],children:"IV快點查"})]}),(0,r.jsxs)(i(),{href:"/ranker",shallow:!0,children:[(0,r.jsx)(c.Z,{src:"/assets/ranker.jpg"}),(0,r.jsx)("div",{className:a()["gradient-bg"],children:"體質排排看"})]}),(0,r.jsxs)(i(),{href:"/skilltable",shallow:!0,children:[(0,r.jsx)(c.Z,{src:"/assets/skilltable.jpg"}),(0,r.jsx)("div",{className:a()["gradient-bg"],children:"技能找一找"})]}),(0,r.jsxs)(i(),{href:"/arenacalc",shallow:!0,children:[(0,r.jsx)(c.Z,{src:"/assets/arenacalc.jpg"}),(0,r.jsx)("div",{className:a()["gradient-bg"],children:"豆祭計算器"})]})]})]})]})}},7910:function(e){e.exports={container:"home_container__STkGE","title-img":"home_title-img__vJuRI","gradient-bg":"home_gradient-bg__GPboR",title:"home_title__znpQq",links:"home_links__rcOKN"}},1664:function(e,t,n){e.exports=n(1521)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);