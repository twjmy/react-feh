webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/UnitViewer/hooks.tsx":
/*!*********************************************!*\
  !*** ./app/components/UnitViewer/hooks.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_utils_data_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/data-utils */ "./app/utils/data-utils.tsx");
/* harmony import */ var _app_utils_stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/utils/stats */ "./app/utils/stats.tsx");
/* harmony import */ var _app_utils_arenascore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/utils/arenascore */ "./app/utils/arenascore.tsx");
/* harmony import */ var _app_utils_resplendent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/utils/resplendent */ "./app/utils/resplendent.tsx");
/* harmony import */ var _app_utils_heroes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/utils/heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageLoader */ "./app/components/UnitViewer/ImageLoader/index.tsx");
/* harmony import */ var _Background_draw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Background/draw */ "./app/components/UnitViewer/Background/draw.tsx");
/* harmony import */ var _Portrait_draw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Portrait/draw */ "./app/components/UnitViewer/Portrait/draw.tsx");
/* harmony import */ var _Foreground_draw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Foreground/draw */ "./app/components/UnitViewer/Foreground/draw.tsx");
/* harmony import */ var _Foreground2_draw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Foreground2/draw */ "./app/components/UnitViewer/Foreground2/draw.tsx");
/* harmony import */ var _Rarity_draw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Rarity/draw */ "./app/components/UnitViewer/Rarity/draw.tsx");
/* harmony import */ var _WeaponType_draw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./WeaponType/draw */ "./app/components/UnitViewer/WeaponType/draw.tsx");
/* harmony import */ var _MoveType_draw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MoveType/draw */ "./app/components/UnitViewer/MoveType/draw.tsx");
/* harmony import */ var _DragonFlower_draw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DragonFlower/draw */ "./app/components/UnitViewer/DragonFlower/draw.tsx");
/* harmony import */ var _Support_draw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Support/draw */ "./app/components/UnitViewer/Support/draw.tsx");
/* harmony import */ var _Blessing_draw__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Blessing/draw */ "./app/components/UnitViewer/Blessing/draw.tsx");
/* harmony import */ var _SkillIcon_draw__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SkillIcon/draw */ "./app/components/UnitViewer/SkillIcon/draw.tsx");
/* harmony import */ var _Level_draw__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Level/draw */ "./app/components/UnitViewer/Level/draw.tsx");
/* harmony import */ var _Merge_draw__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Merge/draw */ "./app/components/UnitViewer/Merge/draw.tsx");
/* harmony import */ var _StatNumber_draw__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./StatNumber/draw */ "./app/components/UnitViewer/StatNumber/draw.tsx");
/* harmony import */ var _SpecialNumber_draw__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SpecialNumber/draw */ "./app/components/UnitViewer/SpecialNumber/draw.tsx");
/* harmony import */ var _StatText_draw__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./StatText/draw */ "./app/components/UnitViewer/StatText/draw.tsx");
/* harmony import */ var _SkillText_draw__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./SkillText/draw */ "./app/components/UnitViewer/SkillText/draw.tsx");
/* harmony import */ var _DescriptionText_draw__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./DescriptionText/draw */ "./app/components/UnitViewer/DescriptionText/draw.tsx");
/* harmony import */ var _ArenaIcon_draw__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ArenaIcon/draw */ "./app/components/UnitViewer/ArenaIcon/draw.tsx");
/* harmony import */ var _ResplendentIcon_draw__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ResplendentIcon/draw */ "./app/components/UnitViewer/ResplendentIcon/draw.tsx");



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






























var imageIdAndSrc = [['background', '/assets/background.jpg'], ['foreground', '/assets/foreground.png'], ['foreground2', '/assets/foreground2.png'], ['portrait', ''], ['rarityAtlas', '/assets/rarity.png'], ['weaponTypeAtlas', '/assets/weapon-type.png'], ['moveTypeAtlas', '/assets/move-type.png'], ['dragonflowerAtlas', '/assets/dragonflower.png'], ['supportAtlas', '/assets/support.png'], ['blessingAtlas', ''], ['numberAtlas', '/assets/number.png'], ['weaponIcon', '/skills/weapon.png'], ['assistIcon', '/skills/assist.png'], ['specialIcon', '/skills/special.png'], ['textA', '/assets/skill-a.png'], ['textB', '/assets/skill-b.png'], ['textC', '/assets/skill-c.png'], ['textS', '/assets/skill-s.png'], ['arenaIcon', '/assets/Arena_Crown.png'], ['skillAIcon', ''], ['skillBIcon', ''], ['skillCIcon', ''], ['sealIcon', ''], ['resplendentIcon', '/assets/god-wear-l.png']];
var defaultSkillIcons = [{
  skillName: 'weapon',
  empty: '/skills/weapon.png'
}, {
  skillName: 'skillA',
  empty: '/skills/empty.png'
}, {
  skillName: 'skillB',
  empty: '/skills/empty.png'
}, {
  skillName: 'skillC',
  empty: '/skills/empty.png'
}, {
  skillName: 'seal',
  empty: '/skills/seal-empty.png'
}];

function useHooks(_ref) {
  _s();

  var heroId = _ref.heroId,
      rarity = _ref.rarity,
      iv = _ref.iv,
      merge = _ref.merge,
      dragonflower = _ref.dragonflower,
      blessing = _ref.blessing,
      support = _ref.support,
      arena = _ref.arena,
      resplendent = _ref.resplendent,
      weapon = _ref.weapon,
      refine = _ref.refine,
      assist = _ref.assist,
      special = _ref.special,
      skillA = _ref.skillA,
      skillB = _ref.skillB,
      skillC = _ref.skillC,
      seal = _ref.seal,
      lv1 = _ref.lv1;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      basePath = _useRouter.basePath;

  var db = Object(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__["useFehDB"])();
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var textCanvas = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var heroRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var skillInfosRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var statsInfosRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var rarityRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var ivRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var mergeRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var dragonflowerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var blessingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var supportRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var arenaRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var resplendentRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var refineRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var lv1Ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var scoreRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var hero = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_heroes__WEBPACK_IMPORTED_MODULE_8__["getHero"])(db.heroDB, heroId);
  }, [db.heroDB, heroId]);
  var skills = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      weapon: weapon,
      assist: assist,
      special: special,
      skillA: skillA,
      skillB: skillB,
      skillC: skillC,
      seal: seal
    };
  }, [weapon, assist, special, skillA, skillB, skillC, seal]);
  var stats = hero.stats;
  var skillInfos = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_data_utils__WEBPACK_IMPORTED_MODULE_4__["getSkillInfos"])({
      heroDB: db.heroDB,
      weaponDB: db.weaponDB,
      assistDB: db.assistDB,
      specialDB: db.specialDB,
      skillADB: db.skillADB,
      skillBDB: db.skillBDB,
      skillCDB: db.skillCDB,
      sealDB: db.sealDB,
      skills: skills,
      heroId: heroId,
      refine: refine,
      rarity: rarity
    });
  }, [skills, heroId, refine, rarity, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB]);
  var statsInfos = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_stats__WEBPACK_IMPORTED_MODULE_5__["getStats"])(rarity, stats, iv, merge, support, skillInfos.stats, lv1, arena, dragonflower, resplendent);
  }, [rarity, stats, iv, merge, support, skillInfos, lv1, arena, dragonflower, resplendent]);
  var score = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_arenascore__WEBPACK_IMPORTED_MODULE_6__["default"])({
      rarity: rarity,
      merge: merge,
      bst: Math.max(statsInfos.bst, skillInfos.bst, hero.bst || 0),
      spt: skillInfos.spt
    });
  }, [rarity, merge, statsInfos.bst, skillInfos.bst, skillInfos.spt, hero]);
  var loaders = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});
  var draw = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!canvasRef.current) {
      return;
    }

    var _loaders$current = loaders.current,
        background = _loaders$current.background,
        foreground = _loaders$current.foreground,
        foreground2 = _loaders$current.foreground2,
        portrait = _loaders$current.portrait,
        rarityAtlas = _loaders$current.rarityAtlas,
        weaponTypeAtlas = _loaders$current.weaponTypeAtlas,
        moveTypeAtlas = _loaders$current.moveTypeAtlas,
        dragonflowerAtlas = _loaders$current.dragonflowerAtlas,
        supportAtlas = _loaders$current.supportAtlas,
        blessingAtlas = _loaders$current.blessingAtlas,
        numberAtlas = _loaders$current.numberAtlas,
        weaponIcon = _loaders$current.weaponIcon,
        assistIcon = _loaders$current.assistIcon,
        specialIcon = _loaders$current.specialIcon,
        textA = _loaders$current.textA,
        textB = _loaders$current.textB,
        textC = _loaders$current.textC,
        textS = _loaders$current.textS,
        arenaIcon = _loaders$current.arenaIcon,
        skillAIcon = _loaders$current.skillAIcon,
        skillBIcon = _loaders$current.skillBIcon,
        skillCIcon = _loaders$current.skillCIcon,
        sealIcon = _loaders$current.sealIcon,
        resplendentIcon = _loaders$current.resplendentIcon;
    var _heroRef$current = heroRef.current,
        title = _heroRef$current.title,
        name = _heroRef$current.name,
        weaponType = _heroRef$current.weaponType,
        moveType = _heroRef$current.moveType;
    var hasBlessing = !!heroRef.current.blessing || !!blessingRef.current;
    var context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, 540, 960);

    if (background.loaded) {
      Object(_Background_draw__WEBPACK_IMPORTED_MODULE_11__["default"])({
        context: context,
        background: background.image,
        support: supportRef.current
      });
    }

    if (portrait.loaded) {
      Object(_Portrait_draw__WEBPACK_IMPORTED_MODULE_12__["default"])({
        context: context,
        portrait: portrait.image
      });
    }

    if (foreground.loaded) {
      Object(_Foreground_draw__WEBPACK_IMPORTED_MODULE_13__["default"])({
        context: context,
        foreground: foreground.image
      });
    }

    if (foreground2.loaded) {
      Object(_Foreground2_draw__WEBPACK_IMPORTED_MODULE_14__["default"])({
        context: context,
        foreground2: foreground2.image,
        dragonflower: dragonflowerRef.current
      });
    }

    if (rarityAtlas.loaded) {
      Object(_Rarity_draw__WEBPACK_IMPORTED_MODULE_15__["default"])({
        context: context,
        rarityAtlas: rarityAtlas.image,
        rarity: rarityRef.current
      });
    }

    if (weaponTypeAtlas.loaded) {
      Object(_WeaponType_draw__WEBPACK_IMPORTED_MODULE_16__["default"])({
        context: context,
        weaponTypeAtlas: weaponTypeAtlas.image,
        weaponType: weaponType
      });
    }

    if (moveTypeAtlas.loaded) {
      Object(_MoveType_draw__WEBPACK_IMPORTED_MODULE_17__["default"])({
        context: context,
        moveTypeAtlas: moveTypeAtlas.image,
        moveType: moveType
      });
    }

    if (dragonflowerAtlas.loaded && numberAtlas.loaded) {
      Object(_DragonFlower_draw__WEBPACK_IMPORTED_MODULE_18__["default"])({
        context: context,
        dragonflowerAtlas: dragonflowerAtlas.image,
        numberAtlas: numberAtlas.image,
        moveType: moveType,
        dragonflower: dragonflowerRef.current
      });
    }

    if (supportAtlas.loaded) {
      Object(_Support_draw__WEBPACK_IMPORTED_MODULE_19__["default"])({
        context: context,
        supportAtlas: supportAtlas.image,
        support: supportRef.current,
        hasBlessing: hasBlessing
      });
    }

    if (blessingAtlas.loaded) {
      Object(_Blessing_draw__WEBPACK_IMPORTED_MODULE_20__["default"])({
        context: context,
        blessingAtlas: blessingAtlas.image
      });
    }

    if (numberAtlas.loaded) {
      Object(_Level_draw__WEBPACK_IMPORTED_MODULE_22__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        lv1: lv1Ref.current
      });
      Object(_Merge_draw__WEBPACK_IMPORTED_MODULE_23__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        merge: mergeRef.current
      });
      Object(_StatNumber_draw__WEBPACK_IMPORTED_MODULE_24__["default"])(_objectSpread({
        context: context,
        numberAtlas: numberAtlas.image,
        score: scoreRef.current,
        sbst: Math.max(skillInfosRef.current.bst, heroRef.current.bst)
      }, statsInfosRef.current));
      Object(_SpecialNumber_draw__WEBPACK_IMPORTED_MODULE_25__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        accelerate: skillInfosRef.current.accelerate,
        specialCD: skillInfosRef.current.specialCD
      });
    }

    Object(_SkillIcon_draw__WEBPACK_IMPORTED_MODULE_21__["default"])({
      context: context,
      weaponIcon: weaponIcon,
      assistIcon: assistIcon,
      specialIcon: specialIcon,
      textA: textA,
      textB: textB,
      textC: textC,
      textS: textS,
      skillAIcon: skillAIcon,
      skillBIcon: skillBIcon,
      skillCIcon: skillCIcon,
      sealIcon: sealIcon
    });
    var textContext = textCanvas.current.getContext('2d');
    textContext.clearRect(0, 0, 1080, 1920);
    Object(_StatText_draw__WEBPACK_IMPORTED_MODULE_26__["default"])({
      canvas: textCanvas.current,
      iv: ivRef.current,
      merge: mergeRef.current
    });
    Object(_SkillText_draw__WEBPACK_IMPORTED_MODULE_27__["default"])(_objectSpread({
      canvas: textCanvas.current,
      refine: refineRef.current
    }, skillInfosRef.current.names));
    Object(_DescriptionText_draw__WEBPACK_IMPORTED_MODULE_28__["default"])({
      canvas: textCanvas.current,
      title: title,
      name: name
    });

    if (arenaRef.current && arenaIcon) {
      Object(_ArenaIcon_draw__WEBPACK_IMPORTED_MODULE_29__["default"])({
        context: context,
        arenaIcon: arenaIcon.image
      });
    }

    if (resplendentRef.current && resplendentIcon) {
      Object(_ResplendentIcon_draw__WEBPACK_IMPORTED_MODULE_30__["default"])({
        context: context,
        resplendentIcon: resplendentIcon.image
      });
    }

    context.drawImage(textCanvas.current, 0, 0, 540, 960);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    textCanvas.current = document.createElement('canvas');
    textCanvas.current.width = 1080;
    textCanvas.current.height = 1920;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    imageIdAndSrc.forEach(function (_ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          imageId = _ref3[0],
          imgSrc = _ref3[1];

      loaders.current[imageId] = new _ImageLoader__WEBPACK_IMPORTED_MODULE_10__["ImageLoader"](draw);
      loaders.current[imageId].load("".concat(basePath).concat(imgSrc));
    });
  }, [basePath, loaders, draw]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var portrait = Object(_app_utils_resplendent__WEBPACK_IMPORTED_MODULE_7__["toResplendent"])(hero.id, resplendent);
    loaders.current.portrait.load("/portraits/".concat(portrait, ".png"));
    var icons = Object(_app_utils_data_utils__WEBPACK_IMPORTED_MODULE_4__["getSkillIcons"])({
      heroDB: db.heroDB,
      weaponDB: db.weaponDB,
      assistDB: db.assistDB,
      specialDB: db.specialDB,
      skillADB: db.skillADB,
      skillBDB: db.skillBDB,
      skillCDB: db.skillCDB,
      sealDB: db.sealDB,
      skills: skills,
      heroId: hero.id,
      refine: refine
    });
    defaultSkillIcons.forEach(function (_ref4) {
      var skillName = _ref4.skillName,
          empty = _ref4.empty;
      loaders.current["".concat(skillName, "Icon")].load(icons[skillName] || empty);
    });
    var hasBlessing = hero.blessing !== '-' && !!hero.blessing || !!blessing;
    loaders.current.blessingAtlas.load(hasBlessing ? "assets/blessing-".concat(hero.blessing || blessing, ".png") : '');
  }, [hero, resplendent, skills, refine, blessing, statsInfos, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    heroRef.current = hero;
    rarityRef.current = rarity;
    ivRef.current = iv;
    mergeRef.current = merge;
    dragonflowerRef.current = dragonflower;
    blessingRef.current = blessing;
    supportRef.current = support;
    arenaRef.current = arena;
    resplendentRef.current = resplendent;
    refineRef.current = refine;
    lv1Ref.current = lv1;
    scoreRef.current = score;
    skillInfosRef.current = skillInfos;
    statsInfosRef.current = statsInfos;
    draw();
  }, [hero, rarity, iv, merge, dragonflower, blessing, support, arena, resplendent, refine, lv1, score, skillInfos, statsInfos, draw]);
  var triggerDownload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var dataURL = canvasRef.current.toDataURL('image/png');
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = "".concat(hero === null || hero === void 0 ? void 0 : hero.name, "-").concat(hero === null || hero === void 0 ? void 0 : hero.title, ".png");
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [hero === null || hero === void 0 ? void 0 : hero.name, hero === null || hero === void 0 ? void 0 : hero.title]);
  return {
    canvasRef: canvasRef,
    triggerDownload: triggerDownload
  };
}

_s(useHooks, "yBmo3muYQp7QBmlZivlZDz4wGhs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__["useFehDB"]];
});

/* harmony default export */ __webpack_exports__["default"] = (useHooks);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJ1c2VSb3V0ZXIiLCJiYXNlUGF0aCIsImRiIiwidXNlRmVoREIiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ0ZXh0Q2FudmFzIiwiaGVyb1JlZiIsInNraWxsSW5mb3NSZWYiLCJzdGF0c0luZm9zUmVmIiwicmFyaXR5UmVmIiwiaXZSZWYiLCJtZXJnZVJlZiIsImRyYWdvbmZsb3dlclJlZiIsImJsZXNzaW5nUmVmIiwic3VwcG9ydFJlZiIsImFyZW5hUmVmIiwicmVzcGxlbmRlbnRSZWYiLCJyZWZpbmVSZWYiLCJsdjFSZWYiLCJzY29yZVJlZiIsImhlcm8iLCJ1c2VNZW1vIiwiZ2V0SGVybyIsImhlcm9EQiIsInNraWxscyIsInN0YXRzIiwic2tpbGxJbmZvcyIsImdldFNraWxsSW5mb3MiLCJ3ZWFwb25EQiIsImFzc2lzdERCIiwic3BlY2lhbERCIiwic2tpbGxBREIiLCJza2lsbEJEQiIsInNraWxsQ0RCIiwic2VhbERCIiwic3RhdHNJbmZvcyIsImdldFN0YXRzIiwic2NvcmUiLCJhcmVuYVNjb3JlIiwiYnN0IiwiTWF0aCIsIm1heCIsInNwdCIsImxvYWRlcnMiLCJkcmF3IiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiYmFja2dyb3VuZCIsImZvcmVncm91bmQiLCJmb3JlZ3JvdW5kMiIsInBvcnRyYWl0IiwicmFyaXR5QXRsYXMiLCJ3ZWFwb25UeXBlQXRsYXMiLCJtb3ZlVHlwZUF0bGFzIiwiZHJhZ29uZmxvd2VyQXRsYXMiLCJzdXBwb3J0QXRsYXMiLCJibGVzc2luZ0F0bGFzIiwibnVtYmVyQXRsYXMiLCJ3ZWFwb25JY29uIiwiYXNzaXN0SWNvbiIsInNwZWNpYWxJY29uIiwidGV4dEEiLCJ0ZXh0QiIsInRleHRDIiwidGV4dFMiLCJhcmVuYUljb24iLCJza2lsbEFJY29uIiwic2tpbGxCSWNvbiIsInNraWxsQ0ljb24iLCJzZWFsSWNvbiIsInJlc3BsZW5kZW50SWNvbiIsInRpdGxlIiwibmFtZSIsIndlYXBvblR5cGUiLCJtb3ZlVHlwZSIsImhhc0JsZXNzaW5nIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJsb2FkZWQiLCJkcmF3QmFja2dyb3VuZCIsImltYWdlIiwiZHJhd1BvcnRyYWl0IiwiZHJhd0ZvcmVncm91bmQiLCJkcmF3Rm9yZWdyb3VuZDIiLCJkcmF3UmFyaXR5IiwiZHJhd1dlYXBvblR5cGUiLCJkcmF3TW92ZVR5cGUiLCJkcmF3RHJhZ29uZmxvd2VyIiwiZHJhd1N1cHBvcnQiLCJkcmF3Qmxlc3NpbmciLCJkcmF3TGV2ZWwiLCJkcmF3TWVyZ2UiLCJkcmF3U3RhdE51bWJlciIsInNic3QiLCJkcmF3U3BlY2lhbE51bWJlciIsImFjY2VsZXJhdGUiLCJzcGVjaWFsQ0QiLCJkcmF3U2tpbGxJY29uIiwidGV4dENvbnRleHQiLCJkcmF3U3RhdFRleHQiLCJjYW52YXMiLCJkcmF3U2tpbGxUZXh0IiwibmFtZXMiLCJkcmF3RGVzY3JpcHRpb24iLCJkcmF3QXJlbmFJY29uIiwiZHJhd1Jlc3BsZW5kZW50SWNvbiIsImRyYXdJbWFnZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImltYWdlSWQiLCJpbWdTcmMiLCJJbWFnZUxvYWRlciIsImxvYWQiLCJ0b1Jlc3BsZW5kZW50IiwiaWQiLCJpY29ucyIsImdldFNraWxsSWNvbnMiLCJ0cmlnZ2VyRG93bmxvYWQiLCJkYXRhVVJMIiwidG9EYXRhVVJMIiwibGluayIsImhyZWYiLCJkb3dubG9hZCIsInRhcmdldCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQURvQixFQUVwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQUZvQixFQUdwQixDQUFDLGFBQUQsRUFBZ0IseUJBQWhCLENBSG9CLEVBSXBCLENBQUMsVUFBRCxFQUFhLEVBQWIsQ0FKb0IsRUFLcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQUxvQixFQU1wQixDQUFDLGlCQUFELEVBQW9CLHlCQUFwQixDQU5vQixFQU9wQixDQUFDLGVBQUQsRUFBa0IsdUJBQWxCLENBUG9CLEVBUXBCLENBQUMsbUJBQUQsRUFBc0IsMEJBQXRCLENBUm9CLEVBU3BCLENBQUMsY0FBRCxFQUFpQixxQkFBakIsQ0FUb0IsRUFVcEIsQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBVm9CLEVBV3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0FYb0IsRUFZcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fab0IsRUFhcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fib0IsRUFjcEIsQ0FBQyxhQUFELEVBQWdCLHFCQUFoQixDQWRvQixFQWVwQixDQUFDLE9BQUQsRUFBVSxxQkFBVixDQWZvQixFQWdCcEIsQ0FBQyxPQUFELEVBQVUscUJB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LENBQUNHLE1BQUwsR0FBYyxRQUFkO0FBQ0FuQixZQUFRLENBQUNvQixJQUFULENBQWNDLFdBQWQsQ0FBMEJMLElBQTFCO0FBQ0FBLFFBQUksQ0FBQ00sS0FBTDtBQUNBdEIsWUFBUSxDQUFDb0IsSUFBVCxDQUFjRyxXQUFkLENBQTBCUCxJQUExQjtBQUNELEdBVGtDLEVBU2hDLENBQUN6RyxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRW9ELElBQVAsRUFBYXBELElBQWIsYUFBYUEsSUFBYix1QkFBYUEsSUFBSSxDQUFFbUQsS0FBbkIsQ0FUZ0MsQ0FBbkM7QUFXQSxTQUFPO0FBQ0xwRSxhQUFTLEVBQVRBLFNBREs7QUFFTHVILG1CQUFlLEVBQWZBO0FBRkssR0FBUDtBQUlEOztHQWpaUTlJLFE7VUFzQmNtQixxRCxFQUVWRyx3RDs7O0FBMlhFdEIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci43NjJhZTM1YTZjZDI3MDdlZWQ0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgVEhlcm8sIFRTa2lsbElkcyB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IGdldFNraWxsSWNvbnMsIGdldFNraWxsSW5mb3MgfSBmcm9tICdAL2FwcC91dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCB7IGdldFN0YXRzIH0gZnJvbSAnQC9hcHAvdXRpbHMvc3RhdHMnO1xuaW1wb3J0IGFyZW5hU2NvcmUgZnJvbSAnQC9hcHAvdXRpbHMvYXJlbmFzY29yZSc7XG5pbXBvcnQgeyB0b1Jlc3BsZW5kZW50IH0gZnJvbSAnQC9hcHAvdXRpbHMvcmVzcGxlbmRlbnQnO1xuaW1wb3J0IHsgZ2V0SGVybyB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgeyB1c2VGZWhEQiB9IGZyb20gJ0AvYXBwL3BhZ2UvRkVIREInO1xuaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyJztcbmltcG9ydCBkcmF3QmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQvZHJhdyc7XG5pbXBvcnQgZHJhd1BvcnRyYWl0IGZyb20gJy4vUG9ydHJhaXQvZHJhdyc7XG5pbXBvcnQgZHJhd0ZvcmVncm91bmQgZnJvbSAnLi9Gb3JlZ3JvdW5kL2RyYXcnO1xuaW1wb3J0IGRyYXdGb3JlZ3JvdW5kMiBmcm9tICcuL0ZvcmVncm91bmQyL2RyYXcnO1xuaW1wb3J0IGRyYXdSYXJpdHkgZnJvbSAnLi9SYXJpdHkvZHJhdyc7XG5pbXBvcnQgZHJhd1dlYXBvblR5cGUgZnJvbSAnLi9XZWFwb25UeXBlL2RyYXcnO1xuaW1wb3J0IGRyYXdNb3ZlVHlwZSBmcm9tICcuL01vdmVUeXBlL2RyYXcnO1xuaW1wb3J0IGRyYXdEcmFnb25mbG93ZXIgZnJvbSAnLi9EcmFnb25GbG93ZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1N1cHBvcnQgZnJvbSAnLi9TdXBwb3J0L2RyYXcnO1xuaW1wb3J0IGRyYXdCbGVzc2luZyBmcm9tICcuL0JsZXNzaW5nL2RyYXcnO1xuaW1wb3J0IGRyYXdTa2lsbEljb24gZnJvbSAnLi9Ta2lsbEljb24vZHJhdyc7XG5pbXBvcnQgZHJhd0xldmVsIGZyb20gJy4vTGV2ZWwvZHJhdyc7XG5pbXBvcnQgZHJhd01lcmdlIGZyb20gJy4vTWVyZ2UvZHJhdyc7XG5pbXBvcnQgZHJhd1N0YXROdW1iZXIgZnJvbSAnLi9TdGF0TnVtYmVyL2RyYXcnO1xuaW1wb3J0IGRyYXdTcGVjaWFsTnVtYmVyIGZyb20gJy4vU3BlY2lhbE51bWJlci9kcmF3JztcbmltcG9ydCBkcmF3U3RhdFRleHQgZnJvbSAnLi9TdGF0VGV4dC9kcmF3JztcbmltcG9ydCBkcmF3U2tpbGxUZXh0IGZyb20gJy4vU2tpbGxUZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uVGV4dC9kcmF3JztcbmltcG9ydCBkcmF3QXJlbmFJY29uIGZyb20gJy4vQXJlbmFJY29uL2RyYXcnO1xuaW1wb3J0IGRyYXdSZXNwbGVuZGVudEljb24gZnJvbSAnLi9SZXNwbGVuZGVudEljb24vZHJhdyc7XG5cbmNvbnN0IGltYWdlSWRBbmRTcmMgPSBbXG4gIFsnYmFja2dyb3VuZCcsICcvYXNzZXRzL2JhY2tncm91bmQuanBnJ10sXG4gIFsnZm9yZWdyb3VuZCcsICcvYXNzZXRzL2ZvcmVncm91bmQucG5nJ10sXG4gIFsnZm9yZWdyb3VuZDInLCAnL2Fzc2V0cy9mb3JlZ3JvdW5kMi5wbmcnXSxcbiAgWydwb3J0cmFpdCcsICcnXSxcbiAgWydyYXJpdHlBdGxhcycsICcvYXNzZXRzL3Jhcml0eS5wbmcnXSxcbiAgWyd3ZWFwb25UeXBlQXRsYXMnLCAnL2Fzc2V0cy93ZWFwb24tdHlwZS5wbmcnXSxcbiAgWydtb3ZlVHlwZUF0bGFzJywgJy9hc3NldHMvbW92ZS10eXBlLnBuZyddLFxuICBbJ2RyYWdvbmZsb3dlckF0bGFzJywgJy9hc3NldHMvZHJhZ29uZmxvd2VyLnBuZyddLFxuICBbJ3N1cHBvcnRBdGxhcycsICcvYXNzZXRzL3N1cHBvcnQucG5nJ10sXG4gIFsnYmxlc3NpbmdBdGxhcycsICcnXSxcbiAgWydudW1iZXJBdGxhcycsICcvYXNzZXRzL251bWJlci5wbmcnXSxcbiAgWyd3ZWFwb25JY29uJywgJy9za2lsbHMvd2VhcG9uLnBuZyddLFxuICBbJ2Fzc2lzdEljb24nLCAnL3NraWxscy9hc3Npc3QucG5nJ10sXG4gIFsnc3BlY2lhbEljb24nLCAnL3NraWxscy9zcGVjaWFsLnBuZyddLFxuICBbJ3RleHRBJywgJy9hc3NldHMvc2tpbGwtYS5wbmcnXSxcbiAgWyd0ZXh0QicsICcvYXNzZXRzL3NraWxsLWIucG5nJ10sXG4gIFsndGV4dEMnLCAnL2Fzc2V0cy9za2lsbC1jLnBuZyddLFxuICBbJ3RleHRTJywgJy9hc3NldHMvc2tpbGwtcy5wbmcnXSxcbiAgWydhcmVuYUljb24nLCAnL2Fzc2V0cy9BcmVuYV9Dcm93bi5wbmcnXSxcbiAgWydza2lsbEFJY29uJywgJyddLFxuICBbJ3NraWxsQkljb24nLCAnJ10sXG4gIFsnc2tpbGxDSWNvbicsICcnXSxcbiAgWydzZWFsSWNvbicsICcnXSxcbiAgWydyZXNwbGVuZGVudEljb24nLCAnL2Fzc2V0cy9nb2Qtd2Vhci1sLnBuZyddLFxuXTtcblxuY29uc3QgZGVmYXVsdFNraWxsSWNvbnMgPSBbXG4gIHtcbiAgICBza2lsbE5hbWU6ICd3ZWFwb24nLFxuICAgIGVtcHR5OiAnL3NraWxscy93ZWFwb24ucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQScsXG4gICAgZW1wdHk6ICcvc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEInLFxuICAgIGVtcHR5OiAnL3NraWxscy9lbXB0eS5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2tpbGxDJyxcbiAgICBlbXB0eTogJy9za2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NlYWwnLFxuICAgIGVtcHR5OiAnL3NraWxscy9zZWFsLWVtcHR5LnBuZycsXG4gIH0sXG5dO1xuZXhwb3J0IHR5cGUgVEhvb2tQcm9wcyA9IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHJhcml0eTogNSB8IDQ7XG4gIGl2OiBzdHJpbmc7XG4gIG1lcmdlOiBudW1iZXI7XG4gIGRyYWdvbmZsb3dlcjogbnVtYmVyO1xuICBibGVzc2luZzogc3RyaW5nO1xuICBzdXBwb3J0OiBib29sZWFuO1xuICBhcmVuYTogYm9vbGVhbjtcbiAgcmVzcGxlbmRlbnQ6IGJvb2xlYW47XG4gIC8qKiBza2lsbHMgKi9cbiAgd2VhcG9uOiBzdHJpbmc7XG4gIHJlZmluZTogc3RyaW5nO1xuICBhc3Npc3Q6IHN0cmluZztcbiAgc3BlY2lhbDogc3RyaW5nO1xuICBza2lsbEE6IHN0cmluZztcbiAgc2tpbGxCOiBzdHJpbmc7XG4gIHNraWxsQzogc3RyaW5nO1xuICBzZWFsOiBzdHJpbmc7XG4gIC8qKiBlZGl0b3IgKi9cbiAgbHYxOiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gdXNlSG9va3Moe1xuICBoZXJvSWQsXG4gIHJhcml0eSxcbiAgaXYsXG4gIG1lcmdlLFxuICBkcmFnb25mbG93ZXIsXG4gIGJsZXNzaW5nLFxuICBzdXBwb3J0LFxuICBhcmVuYSxcbiAgcmVzcGxlbmRlbnQsXG4gIC8qKiBza2lsbHMgKi9cbiAgd2VhcG9uLFxuICByZWZpbmUsXG4gIGFzc2lzdCxcbiAgc3BlY2lhbCxcbiAgc2tpbGxBLFxuICBza2lsbEIsXG4gIHNraWxsQyxcbiAgc2VhbCxcbiAgLyoqIGVkaXRvciAqL1xuICBsdjEsXG59OiBUSG9va1Byb3BzKSB7XG4gIGNvbnN0IHsgYmFzZVBhdGggfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGRiID0gdXNlRmVoREIoKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB0ZXh0Q2FudmFzID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaGVyb1JlZiA9IHVzZVJlZjxUSGVybz4oKTtcbiAgY29uc3Qgc2tpbGxJbmZvc1JlZiA9IHVzZVJlZjx7XG4gICAgbmFtZXM6IFRTa2lsbElkcztcbiAgICBzdGF0czoge1xuICAgICAgaHA6IG51bWJlcjtcbiAgICAgIGF0azogbnVtYmVyO1xuICAgICAgc3BkOiBudW1iZXI7XG4gICAgICBkZWY6IG51bWJlcjtcbiAgICAgIHJlczogbnVtYmVyO1xuICAgIH07XG4gICAgYWNjZWxlcmF0ZTogbnVtYmVyO1xuICAgIHNwZWNpYWxDRDogbnVtYmVyO1xuICAgIHNwdDogbnVtYmVyO1xuICAgIGJzdDogbnVtYmVyO1xuICB9PigpO1xuICBjb25zdCBzdGF0c0luZm9zUmVmID0gdXNlUmVmPHtcbiAgICBzdGF0czogeyBbc3RhdEtleTogc3RyaW5nXTogbnVtYmVyIH07XG4gICAgYnN0OiBudW1iZXI7XG4gIH0+KCk7XG4gIGNvbnN0IHJhcml0eVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGl2UmVmID0gdXNlUmVmPHN0cmluZz4oKTtcbiAgY29uc3QgbWVyZ2VSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBkcmFnb25mbG93ZXJSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBibGVzc2luZ1JlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IHN1cHBvcnRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3QgYXJlbmFSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3QgcmVzcGxlbmRlbnRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3QgcmVmaW5lUmVmID0gdXNlUmVmPHN0cmluZz4oKTtcbiAgY29uc3QgbHYxUmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHNjb3JlUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcblxuICBjb25zdCBoZXJvID0gdXNlTWVtbygoKSA9PiBnZXRIZXJvKGRiLmhlcm9EQiwgaGVyb0lkKSwgW2RiLmhlcm9EQiwgaGVyb0lkXSk7XG5cbiAgY29uc3Qgc2tpbGxzID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoeyB3ZWFwb24sIGFzc2lzdCwgc3BlY2lhbCwgc2tpbGxBLCBza2lsbEIsIHNraWxsQywgc2VhbCB9KSxcbiAgICBbd2VhcG9uLCBhc3Npc3QsIHNwZWNpYWwsIHNraWxsQSwgc2tpbGxCLCBza2lsbEMsIHNlYWxdXG4gICk7XG4gIGNvbnN0IHN0YXRzID0gaGVyby5zdGF0cztcbiAgY29uc3Qgc2tpbGxJbmZvcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGdldFNraWxsSW5mb3Moe1xuICAgICAgICBoZXJvREI6IGRiLmhlcm9EQixcbiAgICAgICAgd2VhcG9uREI6IGRiLndlYXBvbkRCLFxuICAgICAgICBhc3Npc3REQjogZGIuYXNzaXN0REIsXG4gICAgICAgIHNwZWNpYWxEQjogZGIuc3BlY2lhbERCLFxuICAgICAgICBza2lsbEFEQjogZGIuc2tpbGxBREIsXG4gICAgICAgIHNraWxsQkRCOiBkYi5za2lsbEJEQixcbiAgICAgICAgc2tpbGxDREI6IGRiLnNraWxsQ0RCLFxuICAgICAgICBzZWFsREI6IGRiLnNlYWxEQixcbiAgICAgICAgc2tpbGxzLFxuICAgICAgICBoZXJvSWQsXG4gICAgICAgIHJlZmluZSxcbiAgICAgICAgcmFyaXR5LFxuICAgICAgfSksXG4gICAgW1xuICAgICAgc2tpbGxzLFxuICAgICAgaGVyb0lkLFxuICAgICAgcmVmaW5lLFxuICAgICAgcmFyaXR5LFxuICAgICAgZGIuaGVyb0RCLFxuICAgICAgZGIud2VhcG9uREIsXG4gICAgICBkYi5hc3Npc3REQixcbiAgICAgIGRiLnNwZWNpYWxEQixcbiAgICAgIGRiLnNraWxsQURCLFxuICAgICAgZGIuc2tpbGxCREIsXG4gICAgICBkYi5za2lsbENEQixcbiAgICAgIGRiLnNlYWxEQixcbiAgICBdXG4gICk7XG5cbiAgY29uc3Qgc3RhdHNJbmZvcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGdldFN0YXRzKFxuICAgICAgICByYXJpdHksXG4gICAgICAgIHN0YXRzLFxuICAgICAgICBpdixcbiAgICAgICAgbWVyZ2UsXG4gICAgICAgIHN1cHBvcnQsXG4gICAgICAgIHNraWxsSW5mb3Muc3RhdHMsXG4gICAgICAgIGx2MSxcbiAgICAgICAgYXJlbmEsXG4gICAgICAgIGRyYWdvbmZsb3dlcixcbiAgICAgICAgcmVzcGxlbmRlbnRcbiAgICAgICksXG4gICAgW1xuICAgICAgcmFyaXR5LFxuICAgICAgc3RhdHMsXG4gICAgICBpdixcbiAgICAgIG1lcmdlLFxuICAgICAgc3VwcG9ydCxcbiAgICAgIHNraWxsSW5mb3MsXG4gICAgICBsdjEsXG4gICAgICBhcmVuYSxcbiAgICAgIGRyYWdvbmZsb3dlcixcbiAgICAgIHJlc3BsZW5kZW50LFxuICAgIF1cbiAgKTtcbiAgY29uc3Qgc2NvcmUgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBhcmVuYVNjb3JlKHtcbiAgICAgICAgcmFyaXR5LFxuICAgICAgICBtZXJnZSxcbiAgICAgICAgYnN0OiBNYXRoLm1heChzdGF0c0luZm9zLmJzdCwgc2tpbGxJbmZvcy5ic3QsIGhlcm8uYnN0IHx8IDApLFxuICAgICAgICBzcHQ6IHNraWxsSW5mb3Muc3B0LFxuICAgICAgfSksXG4gICAgW3Jhcml0eSwgbWVyZ2UsIHN0YXRzSW5mb3MuYnN0LCBza2lsbEluZm9zLmJzdCwgc2tpbGxJbmZvcy5zcHQsIGhlcm9dXG4gICk7XG5cbiAgY29uc3QgbG9hZGVycyA9IHVzZVJlZjx7IFtpbWFnZUlkOiBzdHJpbmddOiBJbWFnZUxvYWRlciB9Pih7fSk7XG5cbiAgY29uc3QgZHJhdyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWNhbnZhc1JlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGJhY2tncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZDIsXG4gICAgICBwb3J0cmFpdCxcbiAgICAgIHJhcml0eUF0bGFzLFxuICAgICAgd2VhcG9uVHlwZUF0bGFzLFxuICAgICAgbW92ZVR5cGVBdGxhcyxcbiAgICAgIGRyYWdvbmZsb3dlckF0bGFzLFxuICAgICAgc3VwcG9ydEF0bGFzLFxuICAgICAgYmxlc3NpbmdBdGxhcyxcbiAgICAgIG51bWJlckF0bGFzLFxuICAgICAgd2VhcG9uSWNvbixcbiAgICAgIGFzc2lzdEljb24sXG4gICAgICBzcGVjaWFsSWNvbixcbiAgICAgIHRleHRBLFxuICAgICAgdGV4dEIsXG4gICAgICB0ZXh0QyxcbiAgICAgIHRleHRTLFxuICAgICAgYXJlbmFJY29uLFxuICAgICAgc2tpbGxBSWNvbixcbiAgICAgIHNraWxsQkljb24sXG4gICAgICBza2lsbENJY29uLFxuICAgICAgc2VhbEljb24sXG4gICAgICByZXNwbGVuZGVudEljb24sXG4gICAgfSA9IGxvYWRlcnMuY3VycmVudDtcbiAgICBjb25zdCB7IHRpdGxlLCBuYW1lLCB3ZWFwb25UeXBlLCBtb3ZlVHlwZSB9ID0gaGVyb1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IGhhc0JsZXNzaW5nID0gISFoZXJvUmVmLmN1cnJlbnQuYmxlc3NpbmcgfHwgISFibGVzc2luZ1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDU0MCwgOTYwKTtcblxuICAgIGlmIChiYWNrZ3JvdW5kLmxvYWRlZCkge1xuICAgICAgZHJhd0JhY2tncm91bmQoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLmltYWdlLFxuICAgICAgICBzdXBwb3J0OiBzdXBwb3J0UmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHBvcnRyYWl0LmxvYWRlZCkge1xuICAgICAgZHJhd1BvcnRyYWl0KHsgY29udGV4dCwgcG9ydHJhaXQ6IHBvcnRyYWl0LmltYWdlIH0pO1xuICAgIH1cbiAgICBpZiAoZm9yZWdyb3VuZC5sb2FkZWQpIHtcbiAgICAgIGRyYXdGb3JlZ3JvdW5kKHsgY29udGV4dCwgZm9yZWdyb3VuZDogZm9yZWdyb3VuZC5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKGZvcmVncm91bmQyLmxvYWRlZCkge1xuICAgICAgZHJhd0ZvcmVncm91bmQyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZm9yZWdyb3VuZDI6IGZvcmVncm91bmQyLmltYWdlLFxuICAgICAgICBkcmFnb25mbG93ZXI6IGRyYWdvbmZsb3dlclJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChyYXJpdHlBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdSYXJpdHkoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICByYXJpdHlBdGxhczogcmFyaXR5QXRsYXMuaW1hZ2UsXG4gICAgICAgIHJhcml0eTogcmFyaXR5UmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHdlYXBvblR5cGVBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdXZWFwb25UeXBlKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgd2VhcG9uVHlwZUF0bGFzOiB3ZWFwb25UeXBlQXRsYXMuaW1hZ2UsXG4gICAgICAgIHdlYXBvblR5cGUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1vdmVUeXBlQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3TW92ZVR5cGUoeyBjb250ZXh0LCBtb3ZlVHlwZUF0bGFzOiBtb3ZlVHlwZUF0bGFzLmltYWdlLCBtb3ZlVHlwZSB9KTtcbiAgICB9XG4gICAgaWYgKGRyYWdvbmZsb3dlckF0bGFzLmxvYWRlZCAmJiBudW1iZXJBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdEcmFnb25mbG93ZXIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBkcmFnb25mbG93ZXJBdGxhczogZHJhZ29uZmxvd2VyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbW92ZVR5cGUsXG4gICAgICAgIGRyYWdvbmZsb3dlcjogZHJhZ29uZmxvd2VyUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN1cHBvcnRBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdTdXBwb3J0KHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgc3VwcG9ydEF0bGFzOiBzdXBwb3J0QXRsYXMuaW1hZ2UsXG4gICAgICAgIHN1cHBvcnQ6IHN1cHBvcnRSZWYuY3VycmVudCxcbiAgICAgICAgaGFzQmxlc3NpbmcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsZXNzaW5nQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3Qmxlc3NpbmcoeyBjb250ZXh0LCBibGVzc2luZ0F0bGFzOiBibGVzc2luZ0F0bGFzLmltYWdlIH0pO1xuICAgIH1cbiAgICBpZiAobnVtYmVyQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3TGV2ZWwoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIGx2MTogbHYxUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICAgIGRyYXdNZXJnZSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbWVyZ2U6IG1lcmdlUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICAgIGRyYXdTdGF0TnVtYmVyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBzY29yZTogc2NvcmVSZWYuY3VycmVudCxcbiAgICAgICAgc2JzdDogTWF0aC5tYXgoc2tpbGxJbmZvc1JlZi5jdXJyZW50LmJzdCwgaGVyb1JlZi5jdXJyZW50LmJzdCksXG4gICAgICAgIC4uLnN0YXRzSW5mb3NSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd1NwZWNpYWxOdW1iZXIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIGFjY2VsZXJhdGU6IHNraWxsSW5mb3NSZWYuY3VycmVudC5hY2NlbGVyYXRlLFxuICAgICAgICBzcGVjaWFsQ0Q6IHNraWxsSW5mb3NSZWYuY3VycmVudC5zcGVjaWFsQ0QsXG4gICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1NraWxsSWNvbih7XG4gICAgICBjb250ZXh0LFxuICAgICAgd2VhcG9uSWNvbixcbiAgICAgIGFzc2lzdEljb24sXG4gICAgICBzcGVjaWFsSWNvbixcbiAgICAgIHRleHRBLFxuICAgICAgdGV4dEIsXG4gICAgICB0ZXh0QyxcbiAgICAgIHRleHRTLFxuICAgICAgc2tpbGxBSWNvbixcbiAgICAgIHNraWxsQkljb24sXG4gICAgICBza2lsbENJY29uLFxuICAgICAgc2VhbEljb24sXG4gICAgfSk7XG4gICAgY29uc3QgdGV4dENvbnRleHQgPSB0ZXh0Q2FudmFzLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0ZXh0Q29udGV4dC5jbGVhclJlY3QoMCwgMCwgMTA4MCwgMTkyMCk7XG4gICAgZHJhd1N0YXRUZXh0KHtcbiAgICAgIGNhbnZhczogdGV4dENhbnZhcy5jdXJyZW50LFxuICAgICAgaXY6IGl2UmVmLmN1cnJlbnQsXG4gICAgICBtZXJnZTogbWVyZ2VSZWYuY3VycmVudCxcbiAgICB9KTtcbiAgICBkcmF3U2tpbGxUZXh0KHtcbiAgICAgIGNhbnZhczogdGV4dENhbnZhcy5jdXJyZW50LFxuICAgICAgcmVmaW5lOiByZWZpbmVSZWYuY3VycmVudCxcbiAgICAgIC4uLnNraWxsSW5mb3NSZWYuY3VycmVudC5uYW1lcyxcbiAgICB9KTtcbiAgICBkcmF3RGVzY3JpcHRpb24oe1xuICAgICAgY2FudmFzOiB0ZXh0Q2FudmFzLmN1cnJlbnQsXG4gICAgICB0aXRsZSxcbiAgICAgIG5hbWUsXG4gICAgfSk7XG4gICAgaWYgKGFyZW5hUmVmLmN1cnJlbnQgJiYgYXJlbmFJY29uKSB7XG4gICAgICBkcmF3QXJlbmFJY29uKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgYXJlbmFJY29uOiBhcmVuYUljb24uaW1hZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJlc3BsZW5kZW50UmVmLmN1cnJlbnQgJiYgcmVzcGxlbmRlbnRJY29uKSB7XG4gICAgICBkcmF3UmVzcGxlbmRlbnRJY29uKHsgY29udGV4dCwgcmVzcGxlbmRlbnRJY29uOiByZXNwbGVuZGVudEljb24uaW1hZ2UgfSk7XG4gICAgfVxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRleHRDYW52YXMuY3VycmVudCwgMCwgMCwgNTQwLCA5NjApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0ZXh0Q2FudmFzLmN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0ZXh0Q2FudmFzLmN1cnJlbnQud2lkdGggPSAxMDgwO1xuICAgIHRleHRDYW52YXMuY3VycmVudC5oZWlnaHQgPSAxOTIwO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbWFnZUlkQW5kU3JjLmZvckVhY2goKFtpbWFnZUlkLCBpbWdTcmNdKSA9PiB7XG4gICAgICBsb2FkZXJzLmN1cnJlbnRbaW1hZ2VJZF0gPSBuZXcgSW1hZ2VMb2FkZXIoZHJhdyk7XG4gICAgICBsb2FkZXJzLmN1cnJlbnRbaW1hZ2VJZF0ubG9hZChgJHtiYXNlUGF0aH0ke2ltZ1NyY31gKTtcbiAgICB9KTtcbiAgfSwgW2Jhc2VQYXRoLCBsb2FkZXJzLCBkcmF3XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwb3J0cmFpdCA9IHRvUmVzcGxlbmRlbnQoaGVyby5pZCwgcmVzcGxlbmRlbnQpO1xuICAgIGxvYWRlcnMuY3VycmVudC5wb3J0cmFpdC5sb2FkKGAvcG9ydHJhaXRzLyR7cG9ydHJhaXR9LnBuZ2ApO1xuICAgIGNvbnN0IGljb25zID0gZ2V0U2tpbGxJY29ucyh7XG4gICAgICBoZXJvREI6IGRiLmhlcm9EQixcbiAgICAgIHdlYXBvbkRCOiBkYi53ZWFwb25EQixcbiAgICAgIGFzc2lzdERCOiBkYi5hc3Npc3REQixcbiAgICAgIHNwZWNpYWxEQjogZGIuc3BlY2lhbERCLFxuICAgICAgc2tpbGxBREI6IGRiLnNraWxsQURCLFxuICAgICAgc2tpbGxCREI6IGRiLnNraWxsQkRCLFxuICAgICAgc2tpbGxDREI6IGRiLnNraWxsQ0RCLFxuICAgICAgc2VhbERCOiBkYi5zZWFsREIsXG4gICAgICBza2lsbHMsXG4gICAgICBoZXJvSWQ6IGhlcm8uaWQsXG4gICAgICByZWZpbmUsXG4gICAgfSk7XG5cbiAgICBkZWZhdWx0U2tpbGxJY29ucy5mb3JFYWNoKCh7IHNraWxsTmFtZSwgZW1wdHkgfSkgPT4ge1xuICAgICAgbG9hZGVycy5jdXJyZW50W2Ake3NraWxsTmFtZX1JY29uYF0ubG9hZChpY29uc1tza2lsbE5hbWVdIHx8IGVtcHR5KTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9XG4gICAgICAoaGVyby5ibGVzc2luZyAhPT0gJy0nICYmICEhaGVyby5ibGVzc2luZykgfHwgISFibGVzc2luZztcbiAgICBsb2FkZXJzLmN1cnJlbnQuYmxlc3NpbmdBdGxhcy5sb2FkKFxuICAgICAgaGFzQmxlc3NpbmcgPyBgYXNzZXRzL2JsZXNzaW5nLSR7aGVyby5ibGVzc2luZyB8fCBibGVzc2luZ30ucG5nYCA6ICcnXG4gICAgKTtcbiAgfSwgW1xuICAgIGhlcm8sXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgc2tpbGxzLFxuICAgIHJlZmluZSxcbiAgICBibGVzc2luZyxcbiAgICBzdGF0c0luZm9zLFxuICAgIGRiLmhlcm9EQixcbiAgICBkYi53ZWFwb25EQixcbiAgICBkYi5hc3Npc3REQixcbiAgICBkYi5zcGVjaWFsREIsXG4gICAgZGIuc2tpbGxBREIsXG4gICAgZGIuc2tpbGxCREIsXG4gICAgZGIuc2tpbGxDREIsXG4gICAgZGIuc2VhbERCLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhlcm9SZWYuY3VycmVudCA9IGhlcm87XG4gICAgcmFyaXR5UmVmLmN1cnJlbnQgPSByYXJpdHk7XG4gICAgaXZSZWYuY3VycmVudCA9IGl2O1xuICAgIG1lcmdlUmVmLmN1cnJlbnQgPSBtZXJnZTtcbiAgICBkcmFnb25mbG93ZXJSZWYuY3VycmVudCA9IGRyYWdvbmZsb3dlcjtcbiAgICBibGVzc2luZ1JlZi5jdXJyZW50ID0gYmxlc3Npbmc7XG4gICAgc3VwcG9ydFJlZi5jdXJyZW50ID0gc3VwcG9ydDtcbiAgICBhcmVuYVJlZi5jdXJyZW50ID0gYXJlbmE7XG4gICAgcmVzcGxlbmRlbnRSZWYuY3VycmVudCA9IHJlc3BsZW5kZW50O1xuICAgIHJlZmluZVJlZi5jdXJyZW50ID0gcmVmaW5lO1xuICAgIGx2MVJlZi5jdXJyZW50ID0gbHYxO1xuICAgIHNjb3JlUmVmLmN1cnJlbnQgPSBzY29yZTtcbiAgICBza2lsbEluZm9zUmVmLmN1cnJlbnQgPSBza2lsbEluZm9zO1xuICAgIHN0YXRzSW5mb3NSZWYuY3VycmVudCA9IHN0YXRzSW5mb3M7XG4gICAgZHJhdygpO1xuICB9LCBbXG4gICAgaGVybyxcbiAgICByYXJpdHksXG4gICAgaXYsXG4gICAgbWVyZ2UsXG4gICAgZHJhZ29uZmxvd2VyLFxuICAgIGJsZXNzaW5nLFxuICAgIHN1cHBvcnQsXG4gICAgYXJlbmEsXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgcmVmaW5lLFxuICAgIGx2MSxcbiAgICBzY29yZSxcbiAgICBza2lsbEluZm9zLFxuICAgIHN0YXRzSW5mb3MsXG4gICAgZHJhdyxcbiAgXSk7XG5cbiAgY29uc3QgdHJpZ2dlckRvd25sb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFVUkwgPSBjYW52YXNSZWYuY3VycmVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gZGF0YVVSTDtcbiAgICBsaW5rLmRvd25sb2FkID0gYCR7aGVybz8ubmFtZX0tJHtoZXJvPy50aXRsZX0ucG5nYDtcbiAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgbGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gIH0sIFtoZXJvPy5uYW1lLCBoZXJvPy50aXRsZV0pO1xuXG4gIHJldHVybiB7XG4gICAgY2FudmFzUmVmLFxuICAgIHRyaWdnZXJEb3dubG9hZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSG9va3M7XG4iXSwic291cmNlUm9vdCI6IiJ9