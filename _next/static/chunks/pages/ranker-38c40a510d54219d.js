(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{4248:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ranker",function(){return t(9348)}])},8616:function(e,n,t){"use strict";t.d(n,{Z:function(){return G}});var c=t(5893),i=t(7294),s=t(5227),l=t(7867),r=t(7561),o=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(r.Z,{})})},a=t(9165),u=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(a.Z,{})})},d=t(9004),h=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(d.Z,{})})},k=t(463),x=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(k.Z,{})})},j=t(2204),g=t(6987),C=t.n(g),f=function(){let e=(0,j.Z)("/assets/dancer.png");return(0,c.jsx)("div",{className:C().icon,style:{backgroundImage:"url('".concat(e,"')")}})},m=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(f,{})})},_=t(9357),b=t(3886),Z=t(5041),p=t.n(Z),v=t(2983),y=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(v.Z,{})})},N=t(5280),R=t.n(N),w=function(e){let{style:n}=e,t=(0,j.Z)("/assets/blessing-fire-atk.png");return(0,c.jsx)("div",{className:R().icon,style:{backgroundImage:"url('".concat(t,"')"),...n}})},S=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(w,{})})},T=t(6704),M=t.n(T),D=function(e){let{style:n={}}=e,t=(0,j.Z)("/assets/blessing-light-res.png");return(0,c.jsx)("div",{className:M().icon,style:{backgroundImage:"url('".concat(t,"')"),...n}})},A=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(D,{})})},E=t(1152),F=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(E.Z,{ascended:!0})})},I=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(E.Z,{rearmed:!0})})},K=t(5307),P=function(e){let{checked:n,onClick:t}=e;return(0,c.jsx)(l.Z,{checked:n,onClick:t,children:(0,c.jsx)(K.Z,{})})},G=(0,i.memo)(function(e){let{allChecked:n,allIndeterminated:t,toggleAll:l,moveTypeFilter:r,toggleMoveType:a,weaponTypeFilter:d,toggleWeaponType:k,isRarity5:j,toggleRarity5:g,isRarity4:C,toggleRarity4:f,isGrail:Z,toggleGrail:v,isLegendary:N,toggleLegendary:R,isMythic:w,toggleMythic:T,isDuo:M,toggleDuo:D,isHar:E,toggleHar:K,isAscended:G,toggleAscended:H,isRearmed:O,toggleRearmed:X,isAttuned:q,toggleAttuned:L,isDancer:W,toggleDancer:z}=e,[Q,$]=(0,i.useState)(!1),B=(0,i.useCallback)(()=>{$(e=>!e)},[]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:p().content,children:(0,c.jsxs)("div",{className:p().checkboxs,hidden:!Q,children:[(0,c.jsx)(s.Z,{onClick:l,checked:n,indeterminated:t}),(0,c.jsx)(_.Z,{moveTypeFilter:r,onToggle:a}),(0,c.jsx)(b.Z,{weaponTypeFilter:d,onToggle:k}),(0,c.jsx)(o,{checked:j,onClick:g}),(0,c.jsx)(u,{checked:C,onClick:f}),(0,c.jsx)(S,{checked:N,onClick:R}),(0,c.jsx)(A,{checked:w,onClick:T}),(0,c.jsx)(x,{checked:M,onClick:D}),(0,c.jsx)(y,{checked:E,onClick:K}),(0,c.jsx)(F,{checked:G,onClick:H}),(0,c.jsx)(I,{checked:O,onClick:X}),(0,c.jsx)(P,{checked:q,onClick:L}),(0,c.jsx)(h,{checked:Z,onClick:v}),(0,c.jsx)(m,{checked:W,onClick:z})]})}),(0,c.jsx)("div",{className:p()["expand-button"],onClick:B,children:Q?"▲":"▼"})]})})},9348:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var c=t(5893),i=t(9008),s=t.n(i),l=t(8616),r=t(163),o=t(7294),a=t(6738),u=t(1728),d=t(3321);function h(e){let{index:n,style:t,data:i}=e,{heroes:s}=i,l=s[n];return(0,c.jsx)("div",{style:t,children:(0,c.jsx)(d.Z,{id:l.id,...l})},l.id)}var k=(0,o.memo)(function(e){let{heroes:n}=e,t=(0,o.useMemo)(()=>({heroes:n}),[n]),i=(0,o.useCallback)(e=>n[e].id,[n]);return(0,c.jsx)(u.Z,{children:e=>{let{width:s,height:l}=e;return(0,c.jsx)(a.t7,{width:s,height:l,itemCount:n.length,itemSize:160,itemData:t,itemKey:i,children:h})}})}),x=t(2204),j=t(5869),g=t(2602),C=t(6308),f=t(8950),m=t.n(f);let _=()=>{let{bg:e,allChecked:n,allIndeterminated:t,toggleAll:i,moveTypeFilter:r,toggleMoveType:a,weaponTypeFilter:u,toggleWeaponType:d,isRarity5:h,toggleRarity5:f,isRarity4:_,toggleRarity4:b,isGrail:Z,toggleGrail:p,isLegendary:v,toggleLegendary:y,isMythic:N,toggleMythic:R,isAscended:w,toggleAscended:S,isRearmed:T,toggleRearmed:M,isDuo:D,toggleDuo:A,isHar:E,toggleHar:F,isAttuned:I,toggleAttuned:K,isDancer:P,toggleDancer:G,sortByHP:H,toggleSortByHp:O,sortByAtk:X,toggleSortByAtk:q,sortBySpd:L,toggleSortBySpd:W,sortByDef:z,toggleSortByDef:Q,sortByRes:$,toggleSortByRes:B,sortByDf:J,toggleSortByDf:U,sortByArena:V,toggleSortByArena:Y,computedHeroes:ee}=function(){let{heroDB:e,dragonflowersDB:n,assistDB:t,resplendentDB:c}=(0,C.K)(),i=(0,o.useMemo)(()=>(0,j.$f)({heroDB:e,dragonflowersDB:n,assistDB:t,resplendentDB:c}),[e,n,t,c]),{allChecked:s,allIndeterminated:l,toggleAll:r,moveTypeFilter:a,toggleMoveType:u,weaponTypeFilter:d,toggleWeaponType:h,isRarity5:k,toggleRarity5:f,isRarity4:m,toggleRarity4:_,isGrail:b,toggleGrail:Z,isLegendary:p,toggleLegendary:v,isMythic:y,toggleMythic:N,isAscended:R,toggleAscended:w,isRearmed:S,toggleRearmed:T,isDuo:M,toggleDuo:D,isHar:A,toggleHar:E,isAttuned:F,toggleAttuned:I,isDancer:K,toggleDancer:P}=(0,g.Z)(),{sortBy:G,sortByHP:H,toggleSortByHp:O,sortByAtk:X,toggleSortByAtk:q,sortBySpd:L,toggleSortBySpd:W,sortByDef:z,toggleSortByDef:Q,sortByRes:$,toggleSortByRes:B,sortByDf:J,toggleSortByDf:U,sortByArena:V,toggleSortByArena:Y}=function(){let[e,n]=(0,o.useState)(!1),t=(0,o.useCallback)(()=>{n(e=>(e||_(!1),!e))},[]),[c,i]=(0,o.useState)(!1),s=(0,o.useCallback)(()=>{i(e=>(e||_(!1),!e))},[]),[l,r]=(0,o.useState)(!1),a=(0,o.useCallback)(()=>{r(e=>(e||_(!1),!e))},[]),[u,d]=(0,o.useState)(!1),h=(0,o.useCallback)(()=>{d(e=>(e||_(!1),!e))},[]),[k,x]=(0,o.useState)(!1),j=(0,o.useCallback)(()=>{x(e=>(e||_(!1),!e))},[]),[g,C]=(0,o.useState)(!1),f=(0,o.useCallback)(()=>{C(e=>(e||_(!1),!e))},[]),[m,_]=(0,o.useState)(!1),b=(0,o.useCallback)(()=>{_(e=>(e||(n(!1),i(!1),r(!1),d(!1),x(!1),C(!1)),!e))},[]),Z=(0,o.useMemo)(()=>{let n=[];return e&&n.push("hp"),c&&n.push("atk"),l&&n.push("spd"),u&&n.push("def"),k&&n.push("res"),n},[e,c,l,u,k]);return{sortBy:Z,sortByHP:e,toggleSortByHp:t,sortByAtk:c,toggleSortByAtk:s,sortBySpd:l,toggleSortBySpd:a,sortByDef:u,toggleSortByDef:h,sortByRes:k,toggleSortByRes:j,sortByDf:g,toggleSortByDf:f,sortByArena:m,toggleSortByArena:b}}(),ee=(0,o.useMemo)(()=>i.sort((e,n)=>{if(V)return e.bst>n.bst?-1:e.bst<n.bst?1:e.index-n.index;let t=G.reduce((n,t)=>n+e[t],0),c=G.reduce((e,t)=>e+n[t],0);return(J&&(t+=e.dfDelta*G.length,c+=n.dfDelta*G.length),t>c)?-1:c>t?1:e.index-n.index}).reduce((e,n,t)=>({...e,[n.id]:t}),{}),[i,G,J,V]),en=(0,o.useMemo)(()=>i.filter(e=>{let n=(0,j._u)(e,{moveTypeFilter:a,weaponTypeFilter:d,isRarity5:k,isRarity4:m,isGrail:b,isLegendary:p,isMythic:y,isAscended:R,isRearmed:S,isDuo:M,isHar:A,isAttuned:F,isDancer:K});return!n}).sort((e,n)=>ee[e.id]-ee[n.id]),[i,ee,a,d,k,m,b,p,y,R,S,M,A,F,K]),et=(0,x.Z)("/assets/summon-stone.jpg");return{bg:et,allChecked:s,allIndeterminated:l,toggleAll:r,moveTypeFilter:a,toggleMoveType:u,weaponTypeFilter:d,toggleWeaponType:h,isRarity5:k,toggleRarity5:f,isRarity4:m,toggleRarity4:_,isGrail:b,toggleGrail:Z,isLegendary:p,toggleLegendary:v,isMythic:y,toggleMythic:N,isAscended:R,toggleAscended:w,isRearmed:S,toggleRearmed:T,isDuo:M,toggleDuo:D,isHar:A,toggleHar:E,isAttuned:F,toggleAttuned:I,isDancer:K,toggleDancer:P,sortByHP:H,toggleSortByHp:O,sortByAtk:X,toggleSortByAtk:q,sortBySpd:L,toggleSortBySpd:W,sortByDef:z,toggleSortByDef:Q,sortByRes:$,toggleSortByRes:B,sortByDf:J,toggleSortByDf:U,sortByArena:V,toggleSortByArena:Y,computedHeroes:en,heroesOrder:ee}}();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s(),{children:(0,c.jsx)("title",{children:"體質排排看"})}),(0,c.jsx)("div",{className:m().container,style:{background:"url('".concat(e,"') center / cover no-repeat fixed")},children:(0,c.jsxs)("div",{className:m()["bg-layer"],children:[(0,c.jsx)(l.Z,{allChecked:n,allIndeterminated:t,toggleAll:i,moveTypeFilter:r,toggleMoveType:a,weaponTypeFilter:u,toggleWeaponType:d,isRarity5:h,toggleRarity5:f,isRarity4:_,toggleRarity4:b,isGrail:Z,toggleGrail:p,isLegendary:v,toggleLegendary:y,isMythic:N,toggleMythic:R,isAscended:w,toggleAscended:S,isRearmed:T,toggleRearmed:M,isDuo:D,toggleDuo:A,isHar:E,toggleHar:F,isAttuned:I,toggleAttuned:K,isDancer:P,toggleDancer:G}),(0,c.jsxs)("div",{className:m()["stats-buttons"],children:[(0,c.jsx)("div",{className:m().title,children:"排序依據"}),(0,c.jsx)("button",{"data-active":H,onClick:O,children:"HP"}),(0,c.jsx)("button",{"data-active":X,onClick:q,children:"攻擊"}),(0,c.jsx)("button",{"data-active":L,onClick:W,children:"速度"}),(0,c.jsx)("button",{"data-active":z,onClick:Q,children:"防守"}),(0,c.jsx)("button",{"data-active":$,onClick:B,children:"魔防"}),(0,c.jsx)("button",{"data-active":J,onClick:U,children:"龍花"}),(0,c.jsx)("button",{"data-active":V,onClick:Y,children:"鬥技"})]}),(0,c.jsx)("div",{className:m().list,children:(0,c.jsx)(k,{heroes:ee})})]})})]})};var b=function(){return(0,c.jsx)(r.Z,{children:(0,c.jsx)(_,{})})},Z=function(){return(0,c.jsx)(b,{})}},6987:function(e){e.exports={icon:"icon_icon__XNGsC"}},5280:function(e){e.exports={icon:"icon_icon__9c1lK"}},6704:function(e){e.exports={icon:"icon_icon__qIw7r"}},8950:function(e){e.exports={container:"Ranker_container__uOjIa","bg-layer":"Ranker_bg-layer__ESCt2",list:"Ranker_list__PQqor","stats-buttons":"Ranker_stats-buttons__omtgK",title:"Ranker_title__lxhWA"}}},function(e){e.O(0,[270,259,774,888,179],function(){return e(e.s=4248)}),_N_E=e.O()}]);