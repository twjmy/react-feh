(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2bc822e570489344a484":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("deb1edf8e03fc2092ec7")),s=n("ef55fb2ebc45364e784e"),i=n("c1d0df1466113eca96ac"),l=n("c9dd7b4f2540bc3f4075"),c=n("9cbbf93b4b14a35c4c9d"),f=n("820838b578959fb7cbd0"),u=n("a17698738bfaaefd79fe"),p=n("02529214ba6eaf3d0120"),d=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g={atk:!0,spd:!0,def:!0,res:!0},v=function(e,t){return{weapon:s.a.getSkill(e.weapon,t),assist:i.a.getSkill(e.assist),special:l.a.getSkill(e.special),skillA:c.a.getSkill(e.skillA),skillB:f.a.getSkill(e.skillB),skillC:u.a.getSkill(e.skillC),seal:p.a.getSkill(e.seal)}},b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",r=v(e,t),a={};if(Object.entries(r).forEach(function(e){var t=d(e,2),n=t[0],r=t[1].get("icon",null);a[n]=r&&"skills/"+r}),"-"!==n){var o=r.weapon.getIn(["refine",n,"icon"],null);a.weapon=g[n]?"skills/weapon/"+n+".png":o&&"skills/weapon/"+o+".png"}return a},h=function(e,t,n,r){var a=v(e,t),o={},s=0,i=a.special.get("cd",0);s+=a.weapon.get("cd",0),s+=a.assist.get("cd",0),s+=a.skillA.get("cd",0),s+=a.skillB.get("cd",0),s+=a.skillC.get("cd",0),s+=a.seal.get("cd",0);var l={hp:0,atk:0,spd:0,def:0,res:0},c=0,f=0;Object.entries(a).forEach(function(e){var t=d(e,2),n=t[0],a=t[1];o[n]=a.get("name","-"),l.hp+=a.get("hp",0),l.atk+=a.get("mt",0)+a.get("atk",0),l.spd+=a.get("spd",0),l.def+=a.get("def",0),l.res+=a.get("res",0),c+=a.get("sp",0),5===r&&(f=Math.max(a.get("bst",0),f))});var u=a.weapon.getIn(["refine",n]);return u&&(l.hp+=u.get("hp",0),l.atk+=u.get("mt",0)+u.get("atk",0),l.spd+=u.get("spd",0),l.def+=u.get("def",0),l.res+=u.get("res",0),s+=u.get("cd",0),5===r&&(f=Math.max(f,u.get("bst",0)))),{names:o,stats:l,accelerate:s,specialCD:i,spt:c,bst:f}},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={hp:0,atk:1,spd:2,def:3,res:4},x=function(e){if("-"===e)return{boon:"hp",bane:"hp"};var t=e.substring(1).split("-");return{boon:t[0],bane:t[1]}},A=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var O,S=function(e,t,n,r,a,o,s,i){var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments[1],n=x(t),r=n.boon,a=n.bane,o={hp:1,atk:1,spd:1,def:1,res:1};return o[r]+=1,o[a]-=1,Object.entries(e).reduce(function(e,t){var n=m(t,2),r=n[0],a=n[1];return y({},e,w({},r,Array.isArray(a)?a[o[r]]:a))},{})}(t[""+e],n),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments[1],n=x(t),r=n.boon,a=n.bane,o={hp:0,atk:0,spd:0,def:0,res:0};return o[r]+=1,o[a]-=1,Object.entries(e).reduce(function(e,t){var n=m(t,2),r=n[0],a=n[1];return y({},e,w({},r,a+o[r]))},{})}(t[e+"-1"],n),f=function(e,t){var n=Object.entries(e).map(function(e){var t=A(e,2);return{key:t[0],stat:t[1]}});n.sort(function(e,t){return e.stat>t.stat?-1:e.stat<t.stat?1:e.index<t.index?-1:e.index>t.index?1:0});for(var r=n.map(function(e){return e.key}),a={hp:0,atk:0,spd:0,def:0,res:0},o=0;o<2*t;o+=1)a[r[o%5]]+=1;return a}(c,r),u=a?{hp:5,atk:2,spd:2,def:2,res:2}:{hp:0,atk:0,spd:0,def:0,res:0},p=i?{hp:10,atk:4,spd:4,def:4,res:4}:{hp:0,atk:0,spd:0,def:0,res:0};return{stats:Object.entries(s?c:l).reduce(function(e,t){var n=C(t,2),r=n[0],a=n[1]+o.stats[r]+f[r]+u[r]+p[r];return I({},e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},r,a>-1?a:0))},{}),bst:Object.values(l).reduce(function(e,t){return e+t},0)}},T={1:{base:47,float:69},2:{base:49,float:74},3:{base:51,float:81},4:{base:53,float:86},5:{base:55,float:93}},j=function(e){var t=e.rarity,n=void 0===t?5:t,r=e.merge,a=e.bst,o=e.spt,s=e.blesser,i=void 0===s?0:s,l=T[n];return 2*(150+l.base+l.float+2*r+Math.floor(a/5)+Math.floor(o/100)+4*i)},B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E=(O="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,r){var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+3];t.children=i}return{$$typeof:O,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),P=function(e){return a.a.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},e),E("path",{d:"M38 18h-8v-12h-12v12h-8l14 14 14-14zm-28 18v4h28v-4h-28z"}),E("path",{d:"M0 0h48v48h-48z",fill:"none"}))},M=function(e){var t=e.context,n=e.background;e.support?t.drawImage(n,540,0,540,960,0,0,540,960):t.drawImage(n,0,0,540,960,0,0,540,960)},H=function(e){var t=e.context,n=e.portrait;t.drawImage(n,0,0,540,960,0,0,540,960)},_=function(e){var t=e.context,n=e.foreground;t.drawImage(n,0,0,540,960,0,0,540,960)},N=function(e){var t=e.context,n=e.rarityAtlas;switch(e.rarity){case 5:t.drawImage(n,0,0,153,40,32,380,153,40);break;case 4:t.drawImage(n,0,41,153,40,32,380,153,40)}},R=48,J=554,D=["red-sword","blue-lance","green-axe","red-bow","blue-bow","green-bow","white-bow","red-dagger","blue-dagger","green-dagger","white-dagger","red-tome","blue-tome","green-tome","white-staff","red-dragon","blue-dragon","green-dragon","white-dragon"].reverse(),U=function(e){var t=e.context,n=e.weaponTypeAtlas,r=e.weaponType,a=D.indexOf(r);a>-1&&t.drawImage(n,52*a,0,52,52,R,J,26,26)},z=206,F=555,W=["infantry","armored","cavalry","flying"],Y=function(e){var t=e.context,n=e.moveTypeAtlas,r=e.moveType,a=W.indexOf(r);a>-1&&t.drawImage(n,56*a,0,52,52,z,F,26,26)},$=432,V=425,L=function(e){var t=e.context,n=e.supportAtlas,r=e.support,a=e.hasBlessing?108:0;r&&t.drawImage(n,$-a,V,108,115)},q=432,G=425,K=function(e){var t=e.context,n=e.blessingAtlas;t.drawImage(n,q,G,108,115)},Q=275,X=594,Z=function(e,t,n){var r=37*n+1+X;e.drawImage(t,Q,r,35,35)},ee=function(e){var t=e.context,n=e.weaponIcon,r=e.assistIcon,a=e.specialIcon,o=e.textA,s=e.textB,i=e.textC,l=e.textS,c=e.skillAIcon,f=e.skillBIcon,u=e.skillCIcon,p=e.sealIcon,d=e.loadeds;d.weaponIcon&&Z(t,n,0),d.assistIcon&&Z(t,r,1),d.specialIcon&&Z(t,a,2),d.skillAIcon&&Z(t,c,3),t.drawImage(o,Q+20,X+112+18,18,18),d.skillBIcon&&Z(t,f,4),t.drawImage(s,Q+20,X+149+18,18,18),d.skillCIcon&&Z(t,u,5),t.drawImage(i,Q+20,X+186+18,18,18),d.sealIcon&&Z(t,p,6),t.drawImage(l,Q+20,X+223+18,18,18)},te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var ne=1,re=43,ae=85,oe=127,se=169,ie=[0,1,2,3,4,5,6,7,8,9,"x","+","-"].reduce(function(e,t,n){return te({},e,(o=34*n+1,(a=t)in(r={})?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r));var r,a,o},{}),le=function(e,t,n,r,a,o){ie[r]&&e.drawImage(t,ie[r],n,32,40,a,o,16,20)},ce=60,fe=594,ue=function(e){var t=e.context,n=e.numberAtlas,r=e.iv;if("-"!==r){var a=function(e){if("-"===e)return{boon:0,bane:0};var t=e.substring(1).split("-");return{boon:k[t[0]],bane:k[t[1]]}}(r),o=a.boon,s=a.bane;le(t,n,ae,"+",ce,fe+8+37*o),le(t,n,oe,"-",ce,fe+8+37*s)}},pe=114,de=558,ge=[14,28,42],ve=function(e){var t=e.context,n=e.numberAtlas,r=e.lv1?1:40,a=0;r>9&&le(t,n,re,4,pe+ge[a],de),le(t,n,re,r%10,pe+ge[a+=1],de)},be=144,he=558,ye=[14,28,42],me=function(e){var t=e.context,n=e.numberAtlas,r=e.merge;if(!(r<=0)){var a=0,o=r>9?se:re;le(t,n,o,"+",be+ye[0],he),a+=1,r>9&&(le(t,n,o,1,be+ye[a],he),a+=1),le(t,n,o,r%10,be+ye[a],he)}},we=130,ke=594,xe=[14,28,42,56],Ae=[1e3,100,10],Ie=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:ne,o=8+ke+37*r;Ae.forEach(function(r,s){if(n>=r){var i=Math.floor(n/r%10);le(e,t,a,i,we+xe[s],o)}}),le(e,t,a,n%10,we+xe[3],o)},Ce=function(e){var t=e.context,n=e.numberAtlas,r=e.stats,a=e.score,o=e.sbst,s=e.bst;Object.values(r).forEach(function(e,r){Ie(t,n,e,r,ne)});var i=o>s?ae:se;Ie(t,n,s,5,se),Ie(t,n,a,6,i)},Oe=465,Se=594,Te=function(e){var t=e.context,n=e.numberAtlas,r=e.accelerate,a=e.specialCD;if(a){var o=re;r<0&&(o=ae),r>0&&(o=oe),function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:re;le(e,t,r,n,Oe,8+Se+74)}(t,n,r+a,o)}},je=206,Be=1298,Ee=["攻擊","速度","防守","魔防","BST","鬥技分"],Pe=function(e){var t=e.canvas.getContext("2d");t.font="500 36px FEH, 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif",t.fillStyle="white",t.strokeStyle="#101010",t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineWidth=8,Ee.forEach(function(e,n){var r=Be+74*n+4;t.strokeText(e,je,r),t.fillText(e,je,r)})};var Me=634,He=1224,_e={weapon:0,assist:1,special:2,skillA:3,skillB:4,skillC:5,seal:6},Ne=function(e){var t=e.canvas,n=e.refine,r=e.weapon,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["canvas","refine","weapon"]),o=t.getContext("2d");o.font="500 36px FEH, 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif",o.textAlign="left",o.textBaseline="middle",o.lineJoin="round",o.lineWidth=8,o.strokeStyle="#101010",o.fillStyle="-"!==n?"lime":"white";var s=Me+("-"===r?4:0),i=He+4;o.strokeText(r,s,i),o.fillText(r,s,i),o.fillStyle="white",Object.keys(a).forEach(function(e){var t=a[e],n=He+74*_e[e]+4,r="-"===t?4:0;o.strokeText(t,Me+r,n),o.fillText(t,Me+r,n)})},Re=296,Je=876,De=336,Ue=992,ze=function(e){var t=e.canvas,n=e.title,r=e.name,a=t.getContext("2d");a.font="500 48px FEH, 'Microsoft YaHei', 'Helvetica Neue', Helvetica, 'Microsoft JhengHei', Arial, sans-serif",a.fillStyle="white",a.strokeStyle="#220d00",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",a.lineWidth=8,a.strokeText(n,Re,Je),a.fillText(n,Re,Je),a.font="500 52px FEH, 'Microsoft YaHei', 'Helvetica Neue', Helvetica, 'Microsoft JhengHei', Arial, sans-serif",a.strokeText(r,De,Ue),a.fillText(r,De,Ue)},Fe=function(e){var t=e.context,n=e.arenaIcon;t.beginPath(),t.moveTo(28+24*Math.cos(0),28+24*Math.sin(0));for(var r=0;r<7;r+=1)t.lineTo(28+24*Math.cos(2*r*(Math.PI/6)),28+24*Math.sin(2*r*(Math.PI/6)));t.fillStyle="rgba(0, 0, 0, 0.63)",t.fill(),t.strokeStyle="rgba(255,255,255, 0.63)",t.lineWidth="2",t.stroke(),t.drawImage(n,12,12,32,32),t.closePath()},We=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&o)for(var i in o)void 0===n[i]&&(n[i]=o[i]);else n||(n=o||{});if(1===s)n.children=a;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Ve=o.b.canvas.withConfig({displayName:"UnitViewer__Canvas"})(["height:100%;position:relative;"]),Le=o.b.div.withConfig({displayName:"UnitViewer__Container"})(["width:100%;height:100%;position:relative;"]),qe=Object(o.b)(P).withConfig({displayName:"UnitViewer__Button"})(["background-color:white;position:absolute;border-radius:1.25em;top:4px;right:4px;padding:0.5em;font-size:16px;width:2.5em;height:2.5em;cursor:pointer;"]),Ge=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.setAssets=function(){var e=n.props,t=e.hero,r=e.rarity,a=e.iv,o=e.merge,s=e.blessing,i=e.support,l=e.weapon,c=e.refine,f=e.assist,u=e.special,p=e.skillA,d=e.skillB,g=e.skillC,v=e.seal,y=e.lv1,m=e.arena,w=t.get("portrait"),k=t.get("stats").toJS(),x={weapon:l,assist:f,special:u,skillA:p,skillB:d,skillC:g,seal:v};n.loaders.portrait("portraits/"+w);var A=b(x,t,c);[{skillName:"weapon",empty:"skills/weapon.png"},{skillName:"skillA",empty:"skills/empty.png"},{skillName:"skillB",empty:"skills/empty.png"},{skillName:"skillC",empty:"skills/empty.png"},{skillName:"seal",empty:"skills/seal-empty.png"}].forEach(function(e){var t=e.skillName,r=e.empty;n.loaders[t+"Icon"](A[t]||r)});var I=s&&"-"!==s;n.loaders.blessingAtlas(I?"assets/blessing-"+s+".png":"");var C=h(x,t,c,r),O=S(r,k,a,o,i,C,y,m);n.skillInfos=C,n.statsInfos=O,n.score=j({rarity:r,merge:o,bst:Math.max(O.bst,C.bst),spt:C.spt})},n.setRef=function(e){n.canvasRef=e},n.draw=function(){var e=n.props,t=e.hero,r=e.rarity,a=e.iv,o=e.merge,s=e.blessing,i=e.support,l=e.refine,c=e.lv1,f=e.arena,u=n.images,p=u.background,d=u.foreground,g=u.portrait,v=u.rarityAtlas,b=u.weaponTypeAtlas,h=u.moveTypeAtlas,y=u.supportAtlas,m=u.blessingAtlas,w=u.numberAtlas,k=u.weaponIcon,x=u.assistIcon,A=u.specialIcon,I=u.textA,C=u.textB,O=u.textC,S=u.textS,T=u.arenaIcon,j=u.skillAIcon,B=u.skillBIcon,E=u.skillCIcon,P=u.sealIcon,R=t.get("title"),J=t.get("name"),D=t.get("weaponType"),z=t.get("moveType"),F=s&&"-"!==s;if(n.canvasRef){var W=n.canvasRef.getContext("2d");W.clearRect(0,0,540,960),n.loadeds.background&&M({context:W,background:p,support:i}),n.loadeds.portrait&&H({context:W,portrait:g}),n.loadeds.foreground&&_({context:W,foreground:d}),n.loadeds.rarityAtlas&&N({context:W,rarityAtlas:v,rarity:r}),n.loadeds.weaponTypeAtlas&&U({context:W,weaponTypeAtlas:b,weaponType:D}),n.loadeds.moveTypeAtlas&&Y({context:W,moveTypeAtlas:h,moveType:z}),n.loadeds.supportAtlas&&L({context:W,supportAtlas:y,support:i,hasBlessing:F}),n.loadeds.blessingAtlas&&K({context:W,blessingAtlas:m,blessing:s}),n.loadeds.numberAtlas&&(ve({context:W,numberAtlas:w,lv1:c}),me({context:W,numberAtlas:w,merge:o}),ue({context:W,numberAtlas:w,iv:a}),Ce(Ye({context:W,numberAtlas:w,score:n.score,sbst:n.skillInfos.bst},n.statsInfos)),Te({context:W,numberAtlas:w,accelerate:n.skillInfos.accelerate,specialCD:n.skillInfos.specialCD})),ee({context:W,weaponIcon:k,assistIcon:x,specialIcon:A,textA:I,textB:C,textC:O,textS:S,skillAIcon:j,skillBIcon:B,skillCIcon:E,sealIcon:P,loadeds:n.loadeds}),n.textCanvas.getContext("2d").clearRect(0,0,1080,1920),Pe({canvas:n.textCanvas}),Ne(Ye({canvas:n.textCanvas,refine:l},n.skillInfos.names)),ze({canvas:n.textCanvas,title:R,name:J}),f&&T&&Fe({context:W,arenaIcon:T}),W.drawImage(n.textCanvas,0,0,540,960)}},n.download=function(e){e.stopPropagation();var t=n.props.hero,r=n.canvasRef.toDataURL("image/png"),a=document.createElement("a");a.href=r,a.download=t.get("name")+"-"+t.get("title")+".png",document.body.appendChild(a),a.click(),document.body.removeChild(a)},n.canvasRef=null,n.textCanvas=document.createElement("canvas"),n.textCanvas.width=1080,n.textCanvas.height=1920;return n.images={},n.loadeds={},n.loaders={},["background","foreground","portrait","rarityAtlas","weaponTypeAtlas","moveTypeAtlas","supportAtlas","blessingAtlas","numberAtlas","weaponIcon","assistIcon","specialIcon","textA","textB","textC","textS","arenaIcon","skillAIcon","skillBIcon","skillCIcon","sealIcon"].forEach(function(e){n.images[e]=new Image,n.loadeds[e]=!1,n.images[e].onload=function(){n.loadeds[e]=!0,n.draw()},n.images[e].onerror=function(){n.loadeds[e]=!1,n.draw()},n.loaders[e]=function(t){n.loadeds[e]=!1,n.images[e].src=t}}),n.loaders.background("assets/background.jpg"),n.loaders.foreground("assets/foreground.png"),n.loaders.rarityAtlas("assets/rarity.png"),n.loaders.weaponTypeAtlas("assets/weapon-type.png"),n.loaders.moveTypeAtlas("assets/move-type.png"),n.loaders.supportAtlas("assets/support.png"),n.loaders.numberAtlas("assets/number.png"),n.loaders.weaponIcon("skills/weapon.png"),n.loaders.assistIcon("skills/assist.png"),n.loaders.specialIcon("skills/special.png"),n.loaders.textA("assets/skill-a.png"),n.loaders.textB("assets/skill-b.png"),n.loaders.textC("assets/skill-c.png"),n.loaders.textS("assets/skill-s.png"),n.loaders.arenaIcon("assets/Dueling_Crest.png"),n.setAssets(e),n.draw(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),$e(t,[{key:"componentDidUpdate",value:function(){this.setAssets()}},{key:"render",value:function(){return We(Le,{},void 0,We(Ve,{width:"540",height:"960",innerRef:this.setRef}),We(qe,{onClick:this.download}))}}]),t}();n.d(t,"default",function(){return Ge})}}]);