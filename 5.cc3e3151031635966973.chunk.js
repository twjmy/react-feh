(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5c17c27ba3ce9e4a619c":function(e,t,r){"use strict";r.r(t);var n,o=r("8af190b70a6bc55c6f1b"),i=r("8a2d1b95e05b6a321e74"),a=r.n(i),c=r("491470064c0e5990dc82"),u=r("0d7f0986bcd2f33d8a2a"),s=r.n(u),l=r("deb1edf8e03fc2092ec7"),f=r("e745436eeff6db2aae0f"),d=r("6054d02a778fdf853e8a"),p=r("12989b5129d66dd4114e"),v=r("6080a705f759d5ca199c"),b=r("6499ac9599cabaf00aab"),h=r("358dcc9bf25208f5e44c"),y=r("e244b6fed539ffc04649"),m=r("54f683fcda7806277002"),g=r("cb4c2a66ea304ba20eba"),S=r.n(g),w=r("8f0726abd0f9a606e94a"),O=r("364993f960e577004d3e"),j=r("ef55fb2ebc45364e784e"),_=r("72b8e49a31bb59b6a3f2"),T=r("ee72cb1e31ca10418f57"),k=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,o){var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=l.c.div.withConfig({displayName:"HeroSelect__Container"})(["display:flex;flex-direction:column;"]),N=Object(l.b)(["background-color:",";color:",";"],function(e){return e.theme.disabledColor},function(e){return e.theme.disabledTextColor}),q=Object(l.b)(["border-bottom-left-radius:0px;border-bottom-right-radius:0px;background-color:",";z-index:1;"],function(e){return e.theme.color3}),I=l.c.div.withConfig({displayName:"HeroSelect__Toggle"})(["border-radius:4px;height:4em;padding:0.5em;display:flex;align-items:center;background-color:",";outline:none;",";"],function(e){return e.theme.color2},function(e){var t=e.disabled,r=e.open;return t?N:r?q:""}),V=l.c.input.attrs({type:"text"}).withConfig({displayName:"HeroSelect__ToggleText"})(["text-align:left;flex-grow:1;width:calc(100% - 1.5em);"]),H=l.c.span.withConfig({displayName:"HeroSelect__Arrow"})(["margin:0 1em;flex-grow:0;user-select:none;"]),F=l.c.div.withConfig({displayName:"HeroSelect__Anchor"})(["position:relative;opacity:",";transition:all 0.2s ease;pointer-events:",";"],function(e){return e.open?1:0},function(e){return e.open?"auto":"none"}),A=l.c.div.withConfig({displayName:"HeroSelect__Menu"})(["border-bottom-left-radius:4px;border-bottom-right-radius:4px;position:absolute;width:100%;background-color:",";z-index:1;"],function(e){return e.theme.color2}),M=Object(l.c)(_.a).withConfig({displayName:"HeroSelect__StyledOptions"})(["max-height:318px;"]),J=S()(w.forceCheck,100),L=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.onInputClick=function(e){var t=r.state.open;e.stopPropagation(),t||(r.setState({open:!0}),r.inputRef.current.focus())},r.toggle=function(e){if(e.stopPropagation(),!(r.state.heroOptions.size<2)){var t=r.state.open;r.setState({open:!t})}},r.changeFilter=function(e){e.stopPropagation(),r.setState({filter:e.target.value})},r.select=function(e){var t=r.props,n=t.selected,o=t.onSelect;n!==e&&(o(e),r.setState({open:!1}))},r.toggleMoveType=function(e){var t=e.moveType,n=e.checked;r.setState(function(e){return{moveTypeFilter:e.moveTypeFilter.set(t,!n)}})},r.toggleWeaponType=function(e){var t=e.weaponType,n=e.checked;r.setState(function(e){return{weaponTypeFilter:e.weaponTypeFilter.set(t,!n)}})},r.toggleTypeCheckboxs=function(e){e.stopPropagation(),r.setState(function(e){return{expanded:!e.expanded}})},r.handleClickOutside=function(e){e.stopPropagation(),r.setState({open:!1})},r.handleOnScroll=function(e){e.stopPropagation(),J()},r.inputRef=Object(o.createRef)(),r.promise=null;var n=e.options;return r.state={open:!1,filter:"",heroOptions:n.toList(),moveTypeFilter:Object(m.fromJS)(O.a.reduce(function(e,t){return x({},e,R({},t,!0))},{})),weaponTypeFilter:Object(m.fromJS)(j.b.reduce(function(e,t){return x({},e,R({},t,!0))},{}))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),C(t,[{key:"render",value:function(){var e=this.props,t=e.selected,r=e.options,n=this.state,o=n.open,i=n.filter,a=n.heroOptions,c=n.moveTypeFilter,u=n.weaponTypeFilter,s=r.getIn([t,"name"])+" - "+r.getIn([t,"title"]),l=r.size<2,f=(o?i:s)||"";return k(P,{},void 0,k(I,{onClick:this.toggle,role:"button",disabled:l,open:o},void 0,k(V,{innerRef:this.inputRef,value:f,placeholder:s,open:o,onClick:this.onInputClick,onChange:this.changeFilter,disabled:l}),k(H,{},void 0,"▼")),k(F,{open:o},void 0,k(A,{},void 0,k(T.a,{moveTypeFilter:c,toggleMoveType:this.toggleMoveType,weaponTypeFilter:u,toggleWeaponType:this.toggleWeaponType}),k(M,{heroOptions:a,selected:t,filter:i,moveTypeFilter:c,weaponTypeFilter:u,onSelect:this.select,notifyLazyLoad:this.handleOnScroll}))))}}]),t}(),$=r("a8ec0c2a8b14558544ed"),z=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var c in i)void 0===r[c]&&(r[c]=i[c]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),E=Object(l.c)($.a).withConfig({displayName:"StatView__StatButtonBase"})(["pointer-events:",";cursor:",";text-align:center;margin:0.25em 0;padding:0.5em;border-radius:0.25em;"],function(e){return e.disabled?"none":"auto"},function(e){return e.disabled?"default":"pointer"}),B=Object(c.compose)(Object(c.withHandlers)({onClick:function(e){var t=e.type,r=e.option,n=e.disabled,o=e.onSelectStat;return function(){n||o(t,r)}}}))(E),W=["hp","atk","spd","def","res"],D=l.c.h3.withConfig({displayName:"StatView__Title"})(["margin:0.25em;text-align:center;"]),G=l.c.div.withConfig({displayName:"StatView__StatRow"})(["display:grid;grid-template-columns:1fr 3fr 1fr;"]),K=l.c.div.withConfig({displayName:"StatView__StatName"})(["text-align:center;margin:0.25em 0;padding:0.5em;"]),Q=l.c.div.withConfig({displayName:"StatView__StatPicker"})(["flex-grow:1;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:0.5em;"]),U=l.c.div.withConfig({displayName:"StatView__MaxStat"})(["flex-shrink:0;text-align:center;margin:0.25em;padding:0.5em;border-radius:0.25em;"]),X=l.c.div.withConfig({displayName:"StatView__Container"})(["padding:0.25em 0.5em;"]),Y={hp:"HP",atk:"攻擊",spd:"速度",def:"防守",res:"魔防"},Z=a.a.oneOf([0,1,2]),ee=(a.a.shape({hp:Z.isRequired,atk:Z.isRequired,spd:Z.isRequired,def:Z.isRequired,res:Z.isRequired}),a.a.shape({option:Z.isRequired,stat:a.a.oneOfType([a.a.string,a.a.number]).isRequired})),te=a.a.arrayOf(ee),re=(a.a.shape({hp:te.isRequired,atk:te.isRequired,spd:te.isRequired,def:te.isRequired,res:te.isRequired}),a.a.shape({hp:a.a.number.isRequired,atk:a.a.number.isRequired,spd:a.a.number.isRequired,def:a.a.number.isRequired,res:a.a.number.isRequired,sum:a.a.number.isRequired}),function(e){var t=e.stats,r=e.lv1Stats,n=e.lv40Stats,o=e.onSelectStat;return z(X,{},void 0,z(G,{},void 0,z(D,{},void 0,"屬性"),z(D,{},void 0,"Lv1"),z(D,{},void 0,"Lv40")),W.map(function(e){return z(G,{},e,z(K,{},void 0,Y[e]),z(Q,{},void 0,r[e].map(function(r){var n=r.option,i=r.stat;return z(B,{type:e,option:n,disabled:"-"===i,active:n===t[e],onSelectStat:o},n,i)})),z(U,{},void 0,n[e]))}),z(D,{},void 0,n.sum))}),ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oe=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ie=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var c in i)void 0===r[c]&&(r[c]=i[c]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}();function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ce=l.c.h2.withConfig({displayName:"IVViewer__Title"})(["padding:0.25em;margin:0;"]),ue=l.c.div.withConfig({displayName:"IVViewer__HeaderContainer"})(["position:sticky;top:0;background-color:",";"],function(e){return e.theme.color1+"cc"}),se=l.c.div.withConfig({displayName:"IVViewer__Container"})(["background:url('assets/summon-stone.jpg') center / cover no-repeat fixed;min-height:100vh;height:100%;color:",";"],function(e){return e.theme.textColor}),le=l.c.div.withConfig({displayName:"IVViewer__BgLayer"})(["background-color:",";min-height:100vh;"],function(e){return e.theme.color1+"aa"}),fe=Object(c.withState)("merge","onSelectMerge",0),de=Object(c.withState)("heroId","onSelectHero","Feh"),pe=Object(c.withProps)(function(e){var t=e.heroId;return{hero:f.a.get(t)}}),ve=Object(c.withProps)(function(e){return{rarityOptions:e.hero.get("rarity").toJS().slice(0,3)}}),be=Object(c.withState)("rarity","onSelectRarity",5),he=Object(c.withState)("stats","setStats",{hp:1,atk:1,spd:1,def:1,res:1}),ye=Object(c.withHandlers)({onSelectStat:function(e){var t=e.stats,r=e.setStats,n=e.hero;return function(e,o){if(!n.get("noiv",!1)){var i=t;i[e]=o,r(i)}}}}),me=Object(c.withProps)(function(e){var t=e.stats;return{initIV:Object.values(t).reduce(function(e,t){return e&&1===t},!0)}}),ge=function(){return"-"},Se=function(e){return e+1},we=function(e){return e-1},Oe=function(e){return e},je=Object(c.withProps)(function(e){var t=e.hero,r=e.rarity,n=e.stats,o=e.merge,i=t.get("noiv",!1),a=t.getIn(["stats",r+"-1"]).toJS(),c=t.getIn(["stats",""+r]).toJS();return{lv1Stats:function(e){var t=e.noiv,r=e.data,n=t?[ge,Oe,ge]:[we,Oe,Se],o=[0,1,2];return Object.entries(r).reduce(function(e,t){var r=oe(t,2),i=r[0],a=r[1];return ne({},e,ae({},i,o.map(function(e,t){return{option:e,stat:n[t](a)}})))},{})}({noiv:i,data:a}),lv40Stats:function(e){var t=e.noiv,r=e.stats,n=e.data,o=e.merge;if(t)return Object.keys(r).reduce(function(e,t){var r;return ne({},e,(ae(r={},t,n[t]),ae(r,"sum",n[t]+e.sum),r))},{sum:o?3:0});var i=Object.values(r).reduce(function(e,t){return e&&1===t},1);return Object.entries(r).reduce(function(e,t){var r,i=oe(t,2),a=i[0],c=i[1];return ne({},e,(ae(r={},a,n[a][c||o&&1]),ae(r,"sum",n[a][o?c||1:c]+e.sum),r))},{sum:o&&i?3:0})}({noiv:i,stats:n,data:c,merge:o})}}),_e=Object(c.withProps)(function(e){var t=e.lv1Stats,r=e.lv40Stats,n=r.sum,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(r,["sum"]),i=e.stats,a=e.merge,c=e.initIV,u=Object.entries(t).reduce(function(e,t){var r=oe(t,2),n=r[0],o=r[1];return ne({},e,ae({},n,o[i[n]].stat))},{}),s=Object(v.a)(u,a,c);return{lv40Stats:Object.entries(o).reduce(function(e,t){var r=oe(t,2),n=r[0],o=r[1];return ne({},e,ae({},n,o+s[n]))},{sum:n})}}),Te=Object(c.withProps)(function(e){var t=e.hero,r=t.get("title"),n=t.get("name"),o=t.get("fid",""),i=t.get("weaponType",""),a=t.get("moveType","");return{title:r,name:n,faceSrc:o?"faces/"+o+".png":"",weaponType:i,moveType:a,blessingSrc:Object(p.c)(t.get("blessing"))}}),ke=Object(c.withHandlers)({onSelectHero:function(e){var t=e.onSelectHero,r=e.setStats,n=e.onSelectRarity;return function(e){r({hp:1,atk:1,spd:1,def:1,res:1}),n(5),t(e)}}}),xe=Object(c.compose)(fe,de,pe,he,ve,be,ye,me,je,_e,Te,ke)(function(e){var t=e.heroId,r=e.faceSrc,n=e.title,o=e.name,i=e.weaponType,a=e.moveType,c=e.blessingSrc,u=e.rarity,l=e.rarityOptions,f=e.merge,p=e.stats,v=e.lv1Stats,m=e.lv40Stats,g=e.onSelectHero,S=e.onSelectRarity,w=e.onSelectMerge,O=e.onSelectStat;return ie(se,{},void 0,ie(le,{},void 0,ie(s.a,{},void 0,ie("title",{},void 0,"IV快點查")),ie(ue,{},void 0,ie(L,{selected:t,onSelect:g,options:d.a}),ie(b.a,{faceSrc:r,title:n,name:o,weaponType:i,moveType:a,blessingSrc:c})),ie(ce,{},void 0,"稀有度"),ie(h.a,{rarity:u,rarityOptions:l,onSelectRarity:S}),ie(ce,{},void 0,"突破次數"),ie(y.a,{merge:f,onSelectMerge:w}),ie(re,{stats:p,lv1Stats:v,lv40Stats:m,onSelectStat:O})))});r.d(t,"default",function(){return xe})},"6080a705f759d5ca199c":function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=Object.entries(e).map(function(e){var t=n(e,2);return{key:t[0],stat:t[1]}});o.sort(function(e,t){return e.stat>t.stat?-1:e.stat<t.stat?1:e.index<t.index?-1:e.index>t.index?1:0});var i=o.map(function(e){return e.key}),a={hp:0,atk:0,spd:0,def:0,res:0};r&&t>0&&(a[i[0]]=1,a[i[1]]=1,a[i[2]]=1);for(var c=0;c<2*t;c+=1){a[i[c%5]]+=1}return a}}}]);