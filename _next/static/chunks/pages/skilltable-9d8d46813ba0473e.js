(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{6776:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skilltable",function(){return t(3342)}])},8416:function(e,s,t){"use strict";var l=t(5893);t(7294),s.Z=e=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...e,children:[(0,l.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),(0,l.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})},875:function(e,s,t){"use strict";t.d(s,{JO:function(){return d},XR:function(){return u},Z4:function(){return m},bP:function(){return c},eM:function(){return p},i5:function(){return x},lG:function(){return j},lJ:function(){return h},n0:function(){return o},pp:function(){return a}});var l=t(5893),n=t(4530),i=t(3409),r=t.n(i);function a(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().skillTitle,children:s})}function c(e){let{children:s,style:t}=e;return(0,l.jsx)("div",{className:r().skillName,style:t,children:s})}function o(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().skillSp,children:s})}function d(e){let{src:s}=e;return(0,l.jsx)(n.Z,{src:s,width:"32px",height:"32px",style:{width:"32px",height:"32px",marginRight:"0.25em"},loading:"lazy"})}function u(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().might,children:s})}function h(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().extractStats,children:s})}function x(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().extractStat,children:s})}function p(e){let{cd:s,children:t}=e;return s?(0,l.jsx)("div",{style:{color:s<0?"lightskyblue":"palevioletred"},children:t}):null}function m(e){let{children:s}=e;return(0,l.jsx)("div",{style:{color:"salmon"},children:s})}let j=e=>e>0?"+".concat(e):"".concat(e)},5600:function(e,s,t){"use strict";var l=t(5893),n=t(7294),i=t(2890),r=t.n(i);function a(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().weaponTitle,children:s})}function c(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().weaponName,children:s})}function o(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().weaponSp,children:s})}function d(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().might,children:s})}function u(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().extractStats,children:s})}function h(e){let{children:s}=e;return(0,l.jsx)("div",{className:r().extractStat,children:s})}function x(e){let{cd:s,children:t}=e;return s?(0,l.jsx)("div",{style:{color:s<0?"lightskyblue":"palevioletred"},children:t}):null}function p(e){let{children:s}=e;return(0,l.jsx)("div",{style:{color:"salmon"},children:s})}let m=e=>e>0?"+".concat(e):"".concat(e);s.Z=(0,n.memo)(function(e){let{weapon:s}=e;return s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a,{children:[(0,l.jsx)(c,{children:s.name}),(0,l.jsxs)(o,{children:[s.sp,"SP"]})]}),(0,l.jsxs)(d,{children:["威力 ",s.mt]}),s.cd&&(0,l.jsxs)(x,{cd:s.cd,children:["奧義 cd",m(s.cd)]}),(0,l.jsxs)(u,{children:[s.hp&&(0,l.jsxs)(h,{children:["HP ",m(s.hp)]}),s.atk&&(0,l.jsxs)(h,{children:["攻擊 ",m(s.atk)]}),s.spd&&(0,l.jsxs)(h,{children:["速度 ",m(s.spd)]}),s.def&&(0,l.jsxs)(h,{children:["防守 ",m(s.def)]}),s.res&&(0,l.jsxs)(h,{children:["魔防 ",m(s.res)]})]}),s.exclusive&&(0,l.jsx)(p,{children:"限定本人裝備"})]}):null})},3342:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return eA}});var l=t(5893),n=t(9008),i=t.n(n),r=t(163),a=t(7294),c=t(4530),o=t(3321),d=t(5600),u=t(6308),h=t(5869),x=t(2895),p=t(4570),m=t(9950),j=t(8263),f=t(1342),v=t(2209),k=t.n(v),g=t(875),_=function(e){let{skill:s}=e;return s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(g.pp,{children:[(0,l.jsxs)(g.bP,{children:[s.icon&&(0,l.jsx)(g.JO,{src:"/skills/".concat(s.icon)}),s.name]}),(0,l.jsxs)(g.n0,{children:[s.sp,"SP"]})]}),s.mt&&(0,l.jsxs)(g.XR,{children:["威力 ",s.mt]}),s.cd&&(0,l.jsxs)(g.eM,{cd:s.cd,children:["奧義 cd",(0,g.lG)(s.cd)]}),(0,l.jsxs)(g.lJ,{children:[s.hp&&(0,l.jsxs)(g.i5,{children:["HP ",(0,g.lG)(s.hp)]}),s.atk&&(0,l.jsxs)(g.i5,{children:["攻擊 ",(0,g.lG)(s.atk)]}),s.spd&&(0,l.jsxs)(g.i5,{children:["速度 ",(0,g.lG)(s.spd)]}),s.def&&(0,l.jsxs)(g.i5,{children:["防守 ",(0,g.lG)(s.def)]}),s.res&&(0,l.jsxs)(g.i5,{children:["魔防 ",(0,g.lG)(s.res)]})]}),s.exclusive&&(0,l.jsx)(g.Z4,{children:"限定本人裝備"})]}):null},w=function(e){let{assist:s}=e;return s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(g.pp,{children:[(0,l.jsx)(g.bP,{children:s.name}),(0,l.jsxs)(g.n0,{children:[s.sp,"SP"]})]}),s.exclusive&&(0,l.jsx)(g.Z4,{children:"限定本人裝備"})]}):null},b=function(e){let{special:s}=e;return s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(g.pp,{children:[(0,l.jsx)(g.bP,{children:s.name}),(0,l.jsxs)(g.n0,{children:[s.sp,"SP"]})]}),(0,l.jsxs)("div",{children:["CD ",s.cd]}),s.exclusive&&(0,l.jsx)(g.Z4,{children:"限定本人裝備"})]}):null},y=function(e){let{className:s,heroId:t}=e,{heroHeaderInfo:n,weapon:i,assist:r,special:v,skillA:g,skillB:y,skillC:N,skillX:I}=function(e){let{heroId:s}=e,{heroDB:t,defaultSkillDB:l,weaponDB:n,assistDB:i,specialDB:r,skillADB:c,skillBDB:o,skillCDB:d,skillXDB:v}=(0,u.K)(),k=(0,a.useMemo)(()=>t[s],[t,s]),g=(0,a.useMemo)(()=>(0,h.eM)(k),[k]),_=(0,a.useMemo)(()=>(0,x.N)({defaultSkillDB:l,heroId:s}),[l,s]),w=(0,a.useMemo)(()=>(0,p.i7)({heroDB:t,weaponDB:n,heroId:s,weaponId:_.weaponId}),[_.weaponId,t,s,n]),b=(0,a.useMemo)(()=>(0,m.NV)({assistDB:i,assistId:_.assistId}),[i,_.assistId]),y=(0,a.useMemo)(()=>(0,j.cf)({specialDB:r,specialId:_.specialId}),[_.specialId,r]),N=(0,a.useMemo)(()=>(0,f.PU)({skillDB:c,skillId:_.skillAId}),[_.skillAId,c]),I=(0,a.useMemo)(()=>(0,f.PU)({skillDB:o,skillId:_.skillBId}),[_.skillBId,o]),C=(0,a.useMemo)(()=>(0,f.PU)({skillDB:d,skillId:_.skillCId}),[_.skillCId,d]),Z=(0,a.useMemo)(()=>(0,f.PU)({skillDB:v,skillId:_.skillXId}),[_.skillXId,v]);return{heroHeaderInfo:g,weapon:w,assist:b,special:y,skillA:N,skillB:I,skillC:C,skillX:Z}}({heroId:t});return(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("div",{className:k().heroInfo,children:(0,l.jsx)(o.Z,{...n})}),(0,l.jsxs)("div",{className:k().infoGrid,children:[(0,l.jsxs)("div",{className:k().type,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",src:"/skills/weapon.png"}),"武器"]}),(0,l.jsx)("div",{className:k().info,children:(0,l.jsx)(d.Z,{weapon:i})}),(0,l.jsxs)("div",{className:k().type,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",src:"/skills/assist.png"}),"輔助"]}),(0,l.jsx)("div",{className:k().info,children:(0,l.jsx)(w,{assist:r})}),(0,l.jsxs)("div",{className:k().type,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",src:"/skills/special.png"}),"奧義"]}),(0,l.jsx)("div",{className:k().info,children:(0,l.jsx)(b,{special:v})}),(0,l.jsxs)("div",{className:k().type,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",src:"/assets/skill-a.png"}),"A技能"]}),(0,l.jsx)("div",{className:k().info,children:(0,l.jsx)(_,{skill:g})}),(0,l.jsxs)("div",{className:k().type,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",src:"/assets/skill-b.png"}),"B技能"]}),(0,l.jsx)("div",{className:k().info,children:(0,l.jsx)(_,{skill:y})}),(0,l.jsxs)("div",{className:k().type,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",src:"/assets/skill-c.png"}),"C技能"]}),(0,l.jsx)("div",{className:k().info,children:(0,l.jsx)(_,{skill:N})}),I&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:k().type,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",src:"/assets/skill-x.png"}),"X技能"]}),(0,l.jsx)("div",{className:k().info,children:(0,l.jsx)(_,{skill:I})})]})]})]})},N=t(5227),I=t(9357),C=t(3886),Z=t(5041),S=t.n(Z),M=(0,a.memo)(function(e){let{allChecked:s,allIndeterminated:t,toggleAll:n,moveTypeFilter:i,toggleMoveType:r,weaponTypeFilter:c,toggleWeaponType:o}=e,[d,u]=(0,a.useState)(!1),h=(0,a.useCallback)(()=>{u(e=>!e)},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:S().content,children:(0,l.jsxs)("div",{className:S().checkboxs,hidden:!d,children:[(0,l.jsx)(N.Z,{onClick:n,checked:s,indeterminated:t}),(0,l.jsx)(I.Z,{moveTypeFilter:i,onToggle:r}),(0,l.jsx)(C.Z,{weaponTypeFilter:c,onToggle:o})]})}),(0,l.jsx)("div",{className:S()["expand-button"],onClick:h,children:d?"▲":"▼"})]})}),T=t(8416),B=t(6738),F=t(1728),P=t(3912),O=t.n(P),A=t(3851);let G=a.createContext(null);var z=t(1152),q=t(463),E=t(9004),K=t(2983),X=t(9165),W=t(7561),D=t(5307),U=t(2758),L=t.n(U);function R(e){let{hero:s}=e,t=(0,A.nY)(s.blessing);return(0,l.jsx)(c.Z,{src:t,loading:"lazy",width:"44",height:"48",style:{zoom:.5,filter:"drop-shadow(4px 4px 4px black)"}})}function H(e){let{hero:s}=e,t=(0,A.nY)(s.blessing);return(0,l.jsx)(c.Z,{src:t,loading:"lazy",width:"44",height:"48",style:{zoom:.5,filter:"drop-shadow(4px 4px 4px black)"}})}function J(e){let{hero:s}=e;if(s.ascended||s.rearmed)return(0,l.jsx)(z.Z,{ascended:s.ascended,rearmed:s.rearmed,style:{zoom:.5,filter:"drop-shadow(-4px 4px 4px black)"}});if(s.attuned)return(0,l.jsx)(D.Z,{style:{zoom:.5,filter:"drop-shadow(4px 4px 4px black)"}});switch(s.pool){case"grail":return(0,l.jsx)(E.Z,{style:{zoom:.5,filter:"drop-shadow(4px 4px 4px black)"}});case"legendary":return(0,l.jsx)(R,{hero:s});case"mythic":return(0,l.jsx)(H,{hero:s});case"duo":return(0,l.jsx)(q.Z,{style:{zoom:.5,filter:"drop-shadow(4px 4px 4px black)"}});case"harmonized":return(0,l.jsx)(K.Z,{style:{zoom:.5,filter:"drop-shadow(4px 4px 4px black)"}})}return s.rarity.length>1?(0,l.jsx)(X.Z,{style:{zoom:.5}}):(0,l.jsx)(W.Z,{style:{zoom:.5}})}var V=function(e){let{hero:s}=e,{setHeroId:t}=(0,a.useContext)(G);return(0,l.jsxs)("button",{className:L().heroIcon,onClick:()=>{t(s.id)},children:[(0,l.jsx)(c.Z,{src:"/faces/".concat(s.id,".png"),loading:"lazy",width:79,height:79,title:s.name},s.id),(0,l.jsx)("div",{className:L().poolIcon,children:(0,l.jsx)(J,{hero:s})})]})};function Q(e){let{inheritablesDB:s,weaponGroup:t}=e;if(!s||!s.weapon||!t)return[];let l=s.weapon[t];return l?Object.values(l).map(e=>{let s="".concat(e.id.toLowerCase(),"|").concat(e.name);return{query:s,...e}}):[]}var Y=t(9651);let $=["#","grail","legendary","mythic","special","duo","harmonized"];function ee(e){let{skill:s}=e,{heroDB:t}=(0,u.K)();return(0,a.useMemo)(()=>{let e=s.pool||{},l=[];return $.forEach(s=>{let t=e[s];if(!t)return;let n=Object.keys(t);n.forEach(e=>{l=l.concat(t[e])})}),(0,h.oc)({heroDB:t,heroIds:l})},[t,s])}function es(e){let{moveTypeEnum:s,ruleId:t,rules2DB:l}=e;if(!s)return!0;let n=(0,Y.o7)({rules2DB:l,ruleId:t});return null!=n&&!!n.moveType&&((null==n?void 0:n.moveType)&s)==0}function et(e){let{weaponTypeEnum:s,ruleId:t,rules2DB:l}=e;if(!s)return!0;let n=(0,Y.o7)({rules2DB:l,ruleId:t});return null!=n&&!!n.weaponType&&((null==n?void 0:n.weaponType)&s)==0}function el(e){let{skill:s}=e,t=ee({skill:s});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:L().name,children:[s.name,(0,l.jsxs)("span",{className:L().sp,children:[s.sp," SP"]})]}),(0,l.jsx)("div",{className:L().heroIcons,children:t.map(e=>(0,l.jsx)(V,{hero:e},e.id))})]})}function en(e){let{index:s,style:t,data:n}=e,{skills:i}=n,r=i[s];return(0,l.jsx)("div",{style:t,children:(0,l.jsx)(el,{skill:r},r.id)})}var ei=function(e){let{filter:s}=e,{options:t,spOptions:n,spChecked:i,onCheckSp:r}=function(e){let{filter:s}=e,{inheritablesDB:t}=(0,u.K)(),l=(0,a.useMemo)(()=>(function(e){let{inheritablesDB:s}=e;return s&&s.assist?Object.values(s.assist).map(e=>{let s="".concat(e.id.toLowerCase(),"|").concat(e.name);return{query:s,...e}}):[]})({inheritablesDB:t}),[t]),n=(0,a.useMemo)(()=>{let e={};l.forEach(s=>{e[s.sp]=s.sp});let s=Object.values(e).filter(e=>!!e);return s.length<2?[]:s.sort((e,s)=>e-s)},[l]),[i,r]=(0,a.useState)([]),c=(0,a.useCallback)(e=>{let s=+e.currentTarget.value;r(e=>e.includes(s)?e.filter(e=>s!==e):[...e,s])},[]),o=(0,a.useMemo)(()=>l.filter(e=>!!e.id.startsWith("_")||(!s||!!e.query.includes(s.toLowerCase()))&&(!i.length||!!i.includes(e.sp))),[s,l,i]);return{options:o,spOptions:n,spChecked:i,onCheckSp:c}}({filter:s}),c=(0,a.useMemo)(()=>({skills:t}),[t]),o=(0,a.useCallback)(e=>{let s=t[e];return s.id.startsWith("_")?48:143},[t]),d=(0,a.useCallback)(e=>t[e].id,[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:O().spButtons,children:n.map(e=>(0,l.jsx)("button",{type:"button",value:e,"data-active":i.includes(e),onClick:r,children:e},e))}),(0,l.jsx)("div",{className:O().listItems,children:(0,l.jsx)(F.Z,{children:e=>{let{width:s,height:n}=e;return(0,l.jsx)(B.S_,{width:s,height:n,itemCount:t.length,itemSize:o,itemData:c,itemKey:d,children:en},t.length)}})})]})},er=t(6858),ea=t(200),ec=t(5642),eo=function(e){let{ruleId:s}=e,{rules2DB:t}=(0,u.K)(),{moveTypeToRule2List:n,weaponTypeToRule2List:i}=(0,a.useContext)(G),{moveTypeOptions:r,weaponTypeOptions:c}=(0,a.useMemo)(()=>{let e=(0,Y.o7)({rules2DB:t,ruleId:s});if(!e)return{moveTypeOptions:[],weaponTypeOptions:[]};let l=n.filter(s=>(0,Y.ob)({rule2A:e,rule2B:s.rule2})).map(e=>e.moveType),r=i.filter(s=>(0,Y.ob)({rule2A:e,rule2B:s.rule2})).map(e=>e.weaponType);return{moveTypeOptions:er.dM.length===l.length?[]:l,weaponTypeOptions:er.s6.length===r.length?[]:r}},[t,s,n,i]);return(0,l.jsxs)(l.Fragment,{children:[r.map(e=>(0,l.jsx)("div",{className:L().inheritor,children:(0,l.jsx)(ea.Z,{moveType:e})},e)),c.map(e=>(0,l.jsx)("div",{className:L().inheritor,children:(0,l.jsx)(ec.Z,{weaponType:e})},e))]})};function ed(e){let{skill:s}=e,t=ee({skill:s});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:L().name,children:[s.icon&&(0,l.jsx)(c.Z,{src:"/skills/".concat(s.icon),width:26,height:26}),s.name,(0,l.jsxs)("span",{className:L().sp,children:[s.sp," SP"]})]}),(0,l.jsx)("div",{className:L().inheritors,children:(0,l.jsx)(eo,{ruleId:s.rules})}),(0,l.jsx)("div",{className:L().heroIcons,children:t.map(e=>(0,l.jsx)(V,{hero:e},e.id))})]})}function eu(e){let{index:s,style:t,data:n}=e,{skills:i}=n,r=i[s];return(0,l.jsx)("div",{style:t,children:(0,l.jsx)(ed,{skill:r},r.id)})}var eh=function(e){let{filter:s}=e,{options:t,spOptions:n,spChecked:i,onCheckSp:r}=function(e){let{filter:s}=e,{inheritablesDB:t,skillADB:l,rules2DB:n}=(0,u.K)(),{moveTypeEnum:i,weaponTypeEnum:r}=(0,a.useContext)(G),c=(0,a.useMemo)(()=>(function(e){let{inheritablesDB:s,skillADB:t}=e;return s&&s.skillA?Object.values(s.skillA).map(e=>{let s="".concat(e.id.toLowerCase(),"|").concat(e.name),l=(0,f.PU)({skillDB:t,skillId:e.id});return{query:s,...e,rules:l.rules}}):[]})({inheritablesDB:t,skillADB:l}),[t,l]),o=(0,a.useMemo)(()=>{let e={};c.forEach(s=>{e[s.sp]=s.sp});let s=Object.values(e).filter(e=>!!e);return s.length<2?[]:s.sort((e,s)=>e-s)},[c]),[d,h]=(0,a.useState)([]),x=(0,a.useCallback)(e=>{let s=+e.currentTarget.value;h(e=>e.includes(s)?e.filter(e=>s!==e):[...e,s])},[]),p=(0,a.useMemo)(()=>c.filter(e=>!!e.id.startsWith("_")||!(s&&!e.query.includes(s.toLowerCase())||d.length&&!d.includes(e.sp)||es({moveTypeEnum:i,ruleId:e.rules,rules2DB:n})||et({weaponTypeEnum:r,ruleId:e.rules,rules2DB:n}))),[s,i,n,c,d,r]);return{options:p,spOptions:o,spChecked:d,onCheckSp:x}}({filter:s}),c=(0,a.useMemo)(()=>({skills:t}),[t]),o=(0,a.useCallback)(e=>{let s=t[e];return s.id.startsWith("_")?48:s.rules?191:143},[t]),d=(0,a.useCallback)(e=>t[e].id,[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:O().spButtons,children:n.map(e=>(0,l.jsx)("button",{type:"button",value:e,"data-active":i.includes(e),onClick:r,children:e},e))}),(0,l.jsx)("div",{className:O().listItems,children:(0,l.jsx)(F.Z,{children:e=>{let{width:s,height:n}=e;return(0,l.jsx)(B.S_,{width:s,height:n,itemCount:t.length,itemSize:o,itemData:c,itemKey:d,children:eu},t.length)}})})]})};function ex(e){let{skill:s}=e,t=ee({skill:s});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:L().name,children:[s.icon&&(0,l.jsx)(c.Z,{src:"/skills/".concat(s.icon),width:26,height:26}),s.name,(0,l.jsxs)("span",{className:L().sp,children:[s.sp," SP"]})]}),(0,l.jsx)("div",{className:L().inheritors,children:(0,l.jsx)(eo,{ruleId:s.rules})}),(0,l.jsx)("div",{className:L().heroIcons,children:t.map(e=>(0,l.jsx)(V,{hero:e},e.id))})]})}function ep(e){let{index:s,style:t,data:n}=e,{skills:i}=n,r=i[s];return(0,l.jsx)("div",{style:t,children:(0,l.jsx)(ex,{skill:r},r.id)})}var em=function(e){let{filter:s}=e,{options:t,spOptions:n,spChecked:i,onCheckSp:r}=function(e){let{filter:s}=e,{inheritablesDB:t,skillBDB:l,rules2DB:n}=(0,u.K)(),{moveTypeEnum:i,weaponTypeEnum:r}=(0,a.useContext)(G),c=(0,a.useMemo)(()=>(function(e){let{inheritablesDB:s,skillBDB:t}=e;return s&&s.skillB?Object.values(s.skillB).map(e=>{let s="".concat(e.id.toLowerCase(),"|").concat(e.name),l=(0,f.PU)({skillDB:t,skillId:e.id});return{query:s,...e,rules:l.rules}}):[]})({inheritablesDB:t,skillBDB:l}),[t,l]),o=(0,a.useMemo)(()=>{let e={};c.forEach(s=>{e[s.sp]=s.sp});let s=Object.values(e).filter(e=>!!e);return s.length<2?[]:s.sort((e,s)=>e-s)},[c]),[d,h]=(0,a.useState)([]),x=(0,a.useCallback)(e=>{let s=+e.currentTarget.value;h(e=>e.includes(s)?e.filter(e=>s!==e):[...e,s])},[]),p=(0,a.useMemo)(()=>c.filter(e=>!!e.id.startsWith("_")||!(s&&!e.query.includes(s.toLowerCase())||d.length&&!d.includes(e.sp)||es({moveTypeEnum:i,ruleId:e.rules,rules2DB:n})||et({weaponTypeEnum:r,ruleId:e.rules,rules2DB:n}))),[s,i,n,c,d,r]);return{options:p,spOptions:o,spChecked:d,onCheckSp:x}}({filter:s}),c=(0,a.useMemo)(()=>({skills:t}),[t]),o=(0,a.useCallback)(e=>{let s=t[e];return s.id.startsWith("_")?48:s.rules?191:143},[t]),d=(0,a.useCallback)(e=>t[e].id,[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:O().spButtons,children:n.map(e=>(0,l.jsx)("button",{type:"button",value:e,"data-active":i.includes(e),onClick:r,children:e},e))}),(0,l.jsx)("div",{className:O().listItems,children:(0,l.jsx)(F.Z,{children:e=>{let{width:s,height:n}=e;return(0,l.jsx)(B.S_,{width:s,height:n,itemCount:t.length,itemSize:o,itemData:c,itemKey:d,children:ep},t.length)}})})]})};function ej(e){let{skill:s}=e,t=ee({skill:s});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:L().name,children:[s.icon&&(0,l.jsx)(c.Z,{src:"/skills/".concat(s.icon),width:26,height:26}),s.name,(0,l.jsxs)("span",{className:L().sp,children:[s.sp," SP"]})]}),(0,l.jsx)("div",{className:L().inheritors,children:(0,l.jsx)(eo,{ruleId:s.rules})}),(0,l.jsx)("div",{className:L().heroIcons,children:t.map(e=>(0,l.jsx)(V,{hero:e},e.id))})]})}function ef(e){let{index:s,style:t,data:n}=e,{skills:i}=n,r=i[s];return(0,l.jsx)("div",{style:t,children:(0,l.jsx)(ej,{skill:r},r.id)})}var ev=function(e){let{filter:s}=e,{options:t,spOptions:n,spChecked:i,onCheckSp:r}=function(e){let{filter:s}=e,{inheritablesDB:t,skillCDB:l,rules2DB:n}=(0,u.K)(),{moveTypeEnum:i,weaponTypeEnum:r}=(0,a.useContext)(G),c=(0,a.useMemo)(()=>(function(e){let{inheritablesDB:s,skillCDB:t}=e;return s&&s.skillC?Object.values(s.skillC).map(e=>{let s="".concat(e.id.toLowerCase(),"|").concat(e.name),l=(0,f.PU)({skillDB:t,skillId:e.id});return{query:s,...e,rules:l.rules}}):[]})({inheritablesDB:t,skillCDB:l}),[t,l]),o=(0,a.useMemo)(()=>{let e={};c.forEach(s=>{e[s.sp]=s.sp});let s=Object.values(e).filter(e=>!!e);return s.length<2?[]:s.sort((e,s)=>e-s)},[c]),[d,h]=(0,a.useState)([]),x=(0,a.useCallback)(e=>{let s=+e.currentTarget.value;h(e=>e.includes(s)?e.filter(e=>s!==e):[...e,s])},[]),p=(0,a.useMemo)(()=>c.filter(e=>!!e.id.startsWith("_")||(s?e.query.includes(s.toLowerCase()):d.length?d.includes(e.sp):!(es({moveTypeEnum:i,ruleId:e.rules,rules2DB:n})||et({weaponTypeEnum:r,ruleId:e.rules,rules2DB:n})))),[s,i,n,c,d,r]);return{options:p,spOptions:o,spChecked:d,onCheckSp:x}}({filter:s}),c=(0,a.useMemo)(()=>({skills:t}),[t]),o=(0,a.useCallback)(e=>{let s=t[e];return s.id.startsWith("_")?48:s.rules?191:143},[t]),d=(0,a.useCallback)(e=>t[e].id,[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:O().spButtons,children:n.map(e=>(0,l.jsx)("button",{type:"button",value:e,"data-active":i.includes(e),onClick:r,children:e},e))}),(0,l.jsx)("div",{className:O().listItems,children:(0,l.jsx)(F.Z,{children:e=>{let{width:s,height:n}=e;return(0,l.jsx)(B.S_,{width:s,height:n,itemCount:t.length,itemSize:o,itemData:c,itemKey:d,children:ef},t.length)}})})]})};function ek(e){let{skill:s}=e,t=ee({skill:s});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:L().name,children:[s.icon&&(0,l.jsx)(c.Z,{src:"/skills/".concat(s.icon),width:26,height:26}),s.name,(0,l.jsxs)("span",{className:L().sp,children:[s.sp," SP"]})]}),(0,l.jsx)("div",{className:L().inheritors,children:(0,l.jsx)(eo,{ruleId:s.rules})}),(0,l.jsx)("div",{className:L().heroIcons,children:t.map(e=>(0,l.jsx)(V,{hero:e},e.id))})]})}function eg(e){let{index:s,style:t,data:n}=e,{skills:i}=n,r=i[s];return(0,l.jsx)("div",{style:t,children:(0,l.jsx)(ek,{skill:r},r.id)})}var e_=function(e){let{filter:s}=e,{options:t,spOptions:n,spChecked:i,onCheckSp:r}=function(e){let{filter:s}=e,{inheritablesDB:t,skillXDB:l,rules2DB:n}=(0,u.K)(),{moveTypeEnum:i,weaponTypeEnum:r}=(0,a.useContext)(G),c=(0,a.useMemo)(()=>(function(e){let{inheritablesDB:s,skillXDB:t}=e;return s&&s.skillX?Object.values(s.skillX).map(e=>{let s="".concat(e.id.toLowerCase(),"|").concat(e.name),l=(0,f.PU)({skillDB:t,skillId:e.id});return{query:s,...e,rules:l.rules}}):[]})({inheritablesDB:t,skillXDB:l}),[t,l]),o=(0,a.useMemo)(()=>{let e={};c.forEach(s=>{e[s.sp]=s.sp});let s=Object.values(e).filter(e=>!!e);return s.length<2?[]:s.sort((e,s)=>e-s)},[c]),[d,h]=(0,a.useState)([]),x=(0,a.useCallback)(e=>{let s=+e.currentTarget.value;h(e=>e.includes(s)?e.filter(e=>s!==e):[...e,s])},[]),p=(0,a.useMemo)(()=>c.filter(e=>!!e.id.startsWith("_")||(s?e.query.includes(s.toLowerCase()):d.length?d.includes(e.sp):!(es({moveTypeEnum:i,ruleId:e.rules,rules2DB:n})||et({weaponTypeEnum:r,ruleId:e.rules,rules2DB:n})))),[s,i,n,c,d,r]);return{options:p,spOptions:o,spChecked:d,onCheckSp:x}}({filter:s}),c=(0,a.useMemo)(()=>({skills:t}),[t]),o=(0,a.useCallback)(e=>{let s=t[e];return s.id.startsWith("_")?48:s.rules?191:143},[t]),d=(0,a.useCallback)(e=>t[e].id,[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:O().spButtons,children:n.map(e=>(0,l.jsx)("button",{type:"button",value:e,"data-active":i.includes(e),onClick:r,children:e},e))}),(0,l.jsx)("div",{className:O().listItems,children:(0,l.jsx)(F.Z,{children:e=>{let{width:s,height:n}=e;return(0,l.jsx)(B.S_,{width:s,height:n,itemCount:t.length,itemSize:o,itemData:c,itemKey:d,children:eg},t.length)}})})]})};function ew(e){let{skill:s}=e,t=ee({skill:s});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:L().name,children:[s.name,(0,l.jsxs)("span",{className:L().sp,children:[s.sp," SP"]})]}),(0,l.jsx)("div",{className:L().inheritors,children:(0,l.jsx)(eo,{ruleId:s.rules})}),(0,l.jsx)("div",{className:L().heroIcons,children:t.map(e=>(0,l.jsx)(V,{hero:e},e.id))})]})}function eb(e){let{index:s,style:t,data:n}=e,{skills:i}=n,r=i[s];return(0,l.jsx)("div",{style:t,children:(0,l.jsx)(ew,{skill:r},r.id)})}var ey=function(e){let{filter:s}=e,{options:t,spOptions:n,spChecked:i,onCheckSp:r}=function(e){let{filter:s}=e,{inheritablesDB:t,specialDB:l,rules2DB:n}=(0,u.K)(),{moveTypeEnum:i,weaponTypeEnum:r}=(0,a.useContext)(G),c=(0,a.useMemo)(()=>(function(e){let{inheritablesDB:s,specialDB:t}=e;return s&&s.special?Object.values(s.special).map(e=>{let s="".concat(e.id.toLowerCase(),"|").concat(e.name),l=(0,f.PU)({skillDB:t,skillId:e.id});return{query:s,...e,rules:l.rules}}):[]})({inheritablesDB:t,specialDB:l}),[t,l]),o=(0,a.useMemo)(()=>{let e={};c.forEach(s=>{e[s.sp]=s.sp});let s=Object.values(e).filter(e=>!!e);return s.length<2?[]:s.sort((e,s)=>e-s)},[c]),[d,h]=(0,a.useState)([]),x=(0,a.useCallback)(e=>{let s=+e.currentTarget.value;h(e=>e.includes(s)?e.filter(e=>s!==e):[...e,s])},[]),p=(0,a.useMemo)(()=>c.filter(e=>!!e.id.startsWith("_")||!(s&&!e.query.includes(s.toLowerCase())||d.length&&!d.includes(e.sp)||es({moveTypeEnum:i,ruleId:e.rules,rules2DB:n})||et({weaponTypeEnum:r,ruleId:e.rules,rules2DB:n}))),[s,c,d,n,i,r]);return{options:p,spOptions:o,spChecked:d,onCheckSp:x}}({filter:s}),c=(0,a.useMemo)(()=>({skills:t}),[t]),o=(0,a.useCallback)(e=>{let s=t[e];return s.id.startsWith("_")?48:s.rules?191:143},[t]),d=(0,a.useCallback)(e=>t[e].id,[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:O().spButtons,children:n.map(e=>(0,l.jsx)("button",{type:"button",value:e,"data-active":i.includes(e),onClick:r,children:e},e))}),(0,l.jsx)("div",{className:O().listItems,children:(0,l.jsx)(F.Z,{children:e=>{let{width:s,height:n}=e;return(0,l.jsx)(B.S_,{width:s,height:n,itemCount:t.length,itemSize:o,itemData:c,itemKey:d,children:eb},t.length)}})})]})};function eN(e){let{skill:s}=e,t=ee({skill:s});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:L().name,children:[s.name,(0,l.jsxs)("span",{className:L().sp,children:[s.sp," SP"]})]}),(0,l.jsx)("div",{className:L().heroIcons,children:t.map(e=>(0,l.jsx)(V,{hero:e},e.id))})]})}function eI(e){let{index:s,style:t,data:n}=e,{skills:i}=n,r=i[s];if(r.id.startsWith("_")){let e=r.id.substring(1);"dragon"===e||"beast"===e?e="red-".concat(e):("bow"===e||"dagger"===e)&&(e="white-".concat(e));let s=e;return(0,l.jsx)("div",{style:t,children:(0,l.jsxs)("div",{className:L().weaponGroup,children:[(0,l.jsx)("div",{className:L().icon,children:(0,l.jsx)(ec.Z,{weaponType:s})}),r.name]})})}return(0,l.jsx)("div",{style:t,children:(0,l.jsx)(eN,{skill:r},r.id)})}var eC=function(e){let{filter:s}=e,{options:t,spOptions:n,spChecked:i,onCheckSp:r}=function(e){let{filter:s}=e,{inheritablesDB:t}=(0,u.K)(),l=(0,a.useMemo)(()=>{let e=Q({inheritablesDB:t,weaponGroup:"red-sword"}),s=Q({inheritablesDB:t,weaponGroup:"blue-lance"}),l=Q({inheritablesDB:t,weaponGroup:"green-axe"}),n=Q({inheritablesDB:t,weaponGroup:"white-staff"}),i=Q({inheritablesDB:t,weaponGroup:"dragon"}),r=Q({inheritablesDB:t,weaponGroup:"red-tome"}),a=Q({inheritablesDB:t,weaponGroup:"blue-tome"}),c=Q({inheritablesDB:t,weaponGroup:"green-tome"}),o=Q({inheritablesDB:t,weaponGroup:"white-tome"}),d=Q({inheritablesDB:t,weaponGroup:"bow"}),u=Q({inheritablesDB:t,weaponGroup:"dagger"});return[{id:"_red-sword",name:"",query:""},...e,{id:"_blue-lance",name:"",query:""},...s,{id:"_green-axe",name:"",query:""},...l,{id:"_white-staff",name:"",query:""},...n,{id:"_dragon",name:"",query:""},...i,{id:"_red-tome",name:"",query:""},...r,{id:"_blue-tome",name:"",query:""},...a,{id:"_green-tome",name:"",query:""},...c,{id:"_white-tome",name:"",query:""},...o,{id:"_bow",name:"",query:""},...d,{id:"_dagger",name:"",query:""},...u]},[t]),n=(0,a.useMemo)(()=>{let e={};l.forEach(s=>{e[s.sp]=s.sp});let s=Object.values(e).filter(e=>!!e);return s.length<2?[]:s.sort((e,s)=>e-s)},[l]),[i,r]=(0,a.useState)([]),c=(0,a.useCallback)(e=>{let s=+e.currentTarget.value;r(e=>e.includes(s)?e.filter(e=>s!==e):(e.push(s),e))},[]),o=(0,a.useMemo)(()=>l.filter(e=>!!e.id.startsWith("_")||(!s||!!e.query.includes(s.toLowerCase()))&&(!i.length||!!i.includes(e.sp))),[s,l,i]);return{options:o,spOptions:n,spChecked:i,onCheckSp:c}}({filter:s}),c=(0,a.useMemo)(()=>({skills:t}),[t]),o=(0,a.useCallback)(e=>{let s=t[e];return s.id.startsWith("_")?48:143},[t]),d=(0,a.useCallback)(e=>t[e].id,[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:O().spButtons,children:n.map(e=>(0,l.jsx)("button",{type:"button",value:e,"data-active":i.includes(e),onClick:r,children:e},e))}),(0,l.jsx)("div",{className:O().listItems,children:(0,l.jsx)(F.Z,{children:e=>{let{width:s,height:n}=e;return(0,l.jsx)(B.S_,{width:s,height:n,itemCount:t.length,itemSize:o,itemData:c,itemKey:d,children:eI},t.length)}})})]})},eZ=function(e){let{skillType:s,filter:t}=e;if("weapon"===s)return(0,l.jsx)(eC,{filter:t});if("assist"===s)return(0,l.jsx)(ei,{filter:t});if("special"===s)return(0,l.jsx)(ey,{filter:t});if("skillA"===s)return(0,l.jsx)(eh,{filter:t});if("skillB"===s)return(0,l.jsx)(em,{filter:t});if("skillC"===s)return(0,l.jsx)(ev,{filter:t});if("skillX"===s)return(0,l.jsx)(e_,{filter:t});return null},eS=t(2602),eM=function(){let{heroId:e,setHeroId:s,onClickButton:t,filter:n,onChangeFilter:i,skillType:r,moveTypeToRule2List:o,weaponTypeToRule2List:d,allChecked:h,allIndeterminated:x,toggleAll:p,moveTypeFilter:m,toggleMoveType:j,weaponTypeFilter:f,toggleWeaponType:v,moveTypeEnum:k,weaponTypeEnum:g}=function(){let{rules2DB:e}=(0,u.K)(),[s,t]=(0,a.useState)("weapon"),[l,n]=(0,a.useState)(""),i=(0,a.useCallback)(e=>{n(e.currentTarget.value)},[]),[r,c]=(0,a.useState)(""),{moveTypeToRule2List:o,weaponTypeToRule2List:d}=(0,a.useMemo)(()=>{let s=[],t=[];return er.dM.forEach(t=>{let l=(0,Y.o7)({rules2DB:e,ruleId:t});s.push({moveType:t,rule2:l})}),er.s6.forEach(s=>{let l=s.split("-")[0],n=(0,Y.o7)({rules2DB:e,ruleId:l}),i=(0,Y.o7)({rules2DB:e,ruleId:s});t.push({weaponType:s,rule2:{...n,...i}})}),{moveTypeToRule2List:s,weaponTypeToRule2List:t}},[e]),{allChecked:h,allIndeterminated:x,toggleAll:p,moveTypeFilter:m,toggleMoveType:j,weaponTypeFilter:f,toggleWeaponType:v}=(0,eS.Z)(),k=(0,a.useMemo)(()=>{let s=Object.entries(m).filter(e=>e[1]).map(e=>e[0]);return(0,Y.cF)({moveTypeKeys:s,rules2DB:e})},[m,e]),g=(0,a.useMemo)(()=>{let s=Object.entries(f).filter(e=>e[1]).map(e=>e[0]);return(0,Y.$4)({weaponTypeKeys:s,rules2DB:e})},[f,e]);return{skillType:s,onClickButton:e=>{e.stopPropagation(),t(e.currentTarget.value)},filter:l,onChangeFilter:i,heroId:r,setHeroId:c,moveTypeToRule2List:o,weaponTypeToRule2List:d,allChecked:h,allIndeterminated:x,toggleAll:p,moveTypeFilter:m,toggleMoveType:j,weaponTypeFilter:f,toggleWeaponType:v,moveTypeEnum:k,weaponTypeEnum:g}}();return(0,l.jsxs)(G.Provider,{value:{heroId:e,setHeroId:s,moveTypeToRule2List:o,weaponTypeToRule2List:d,moveTypeEnum:k,weaponTypeEnum:g},children:[(0,l.jsxs)("div",{className:O().container,children:[(0,l.jsx)("div",{children:(0,l.jsx)(M,{allChecked:h,allIndeterminated:x,toggleAll:p,moveTypeFilter:m,toggleMoveType:j,weaponTypeFilter:f,toggleWeaponType:v})}),(0,l.jsxs)("div",{className:O().buttons,children:[(0,l.jsxs)("button",{type:"button",value:"weapon",disabled:"weapon"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/weapon.png"}),"武器"]}),(0,l.jsxs)("button",{type:"button",value:"assist",disabled:"assist"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/assist.png"}),"輔助"]}),(0,l.jsxs)("button",{type:"button",value:"special",disabled:"special"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/special.png"}),"奧義"]}),(0,l.jsxs)("button",{type:"button",value:"skillA",disabled:"skillA"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-a.png"}),"A技能"]}),(0,l.jsxs)("button",{type:"button",value:"skillB",disabled:"skillB"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-b.png"}),"B技能"]}),(0,l.jsxs)("button",{type:"button",value:"skillC",disabled:"skillC"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-c.png"}),"C技能"]}),(0,l.jsxs)("button",{type:"button",value:"skillX",disabled:"skillX"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-x.png"}),"X技能"]})]}),(0,l.jsxs)("div",{className:O().buttons2,children:[(0,l.jsxs)("button",{type:"button",value:"skillA",disabled:"skillA"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-a.png"}),"技能"]}),(0,l.jsxs)("button",{type:"button",value:"skillB",disabled:"skillB"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-b.png"}),"技能"]}),(0,l.jsxs)("button",{type:"button",value:"skillC",disabled:"skillC"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-c.png"}),"技能"]}),(0,l.jsxs)("button",{type:"button",value:"skillX",disabled:"skillX"===r,onClick:t,children:[(0,l.jsx)(c.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-x.png"}),"技能"]})]}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{className:O().input,placeholder:"技能名稱",onChange:i})}),(0,l.jsx)("div",{className:O().list,children:(0,l.jsx)(eZ,{skillType:r,filter:n})})]}),e&&(0,l.jsxs)("div",{className:O().heroFullInfoContainer,children:[(0,l.jsx)("div",{className:O().heroInfoCloseButton,children:(0,l.jsx)("button",{onClick:()=>{s("")},children:(0,l.jsx)(T.Z,{})})}),(0,l.jsx)("div",{className:O().heroFullInfo,children:(0,l.jsx)(y,{heroId:e})})]})]})},eT=t(2204),eB=t(4879),eF=t.n(eB);function eP(){let{bg:e}=function(){let e=(0,eT.Z)("/assets/summon-stone.jpg");return{bg:e}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:"技能找一找"})}),(0,l.jsx)("div",{className:eF().container,style:{background:"url('".concat(e,"') center / cover no-repeat fixed")},children:(0,l.jsx)("div",{className:eF()["bg-layer"],children:(0,l.jsx)(eM,{})})})]})}var eO=function(){return(0,l.jsx)(r.Z,{children:(0,l.jsx)(eP,{})})},eA=function(){return(0,l.jsx)(eO,{})}},2209:function(e){e.exports={heroInfo:"heroFullInfo_heroInfo__reWab",infoGrid:"heroFullInfo_infoGrid__M1Q_7",type:"heroFullInfo_type__CvZS5",info:"heroFullInfo_info__TCsmN"}},3409:function(e){e.exports={skillTitle:"skillInfo_skillTitle__RXdU7",skillName:"skillInfo_skillName__meSQy",skillSp:"skillInfo_skillSp__WYlYJ",might:"skillInfo_might__g_UNX",extractStats:"skillInfo_extractStats__cwe7j",extractStat:"skillInfo_extractStat__1diNO"}},2890:function(e){e.exports={weaponTitle:"weaponInfo_weaponTitle__wVM5U",weaponName:"weaponInfo_weaponName__IfHcA",weaponSp:"weaponInfo_weaponSp__OrRZt",might:"weaponInfo_might__UnhBc",extractStats:"weaponInfo_extractStats__vwVGU",extractStat:"weaponInfo_extractStat__xMLPX"}},2758:function(e){e.exports={weaponGroup:"skillRow_weaponGroup__Vdq7Q",icon:"skillRow_icon__qMZm6",name:"skillRow_name__Ee_64",sp:"skillRow_sp__H10rs",inheritors:"skillRow_inheritors__tofb_",inheritor:"skillRow_inheritor__3_NgB",heroIcons:"skillRow_heroIcons__FrRsI",heroIcon:"skillRow_heroIcon__PTce9",poolIcon:"skillRow_poolIcon__XktQK"}},3912:function(e){e.exports={container:"styles_container__iaQFH",buttons:"styles_buttons__gBj9w",buttons2:"styles_buttons2__3qVZt",input:"styles_input__SBx_U",spButtons:"styles_spButtons__x2nPq",list:"styles_list__uUESj",listItems:"styles_listItems__PIcTa",heroFullInfoContainer:"styles_heroFullInfoContainer__MJAOV",heroFullInfo:"styles_heroFullInfo__FM_0o",heroInfoCloseButton:"styles_heroInfoCloseButton__ZEh41"}},4879:function(e){e.exports={container:"SkillTable_container__eyqo7","bg-layer":"SkillTable_bg-layer__UOItR",title:"SkillTable_title__EGbB7","header-container":"SkillTable_header-container__zEFft"}}},function(e){e.O(0,[270,259,612,774,888,179],function(){return e(e.s=6776)}),_N_E=e.O()}]);