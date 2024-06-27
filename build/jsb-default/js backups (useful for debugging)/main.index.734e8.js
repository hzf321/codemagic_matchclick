window.__require = function t(o, e, l) {
function n(i, c) {
if (!e[i]) {
if (!o[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!o[s]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var a = e[i] = {
exports: {}
};
o[i][0].call(a.exports, function(t) {
return n(o[i][1][t] || t);
}, a, a.exports, t, o, e, l);
}
return e[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < l.length; i++) n(l[i]);
return n;
}({
TileBlock: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "44b21OieV9MmbV+psCsFbKY", "TileBlock");
var l, n = this && this.__extends || (l = function(t, o) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
l(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), r = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = t("./game_core"), c = cc._decorator, s = c.ccclass, u = c.property, a = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.sp_icon = null;
o.tileBg = null;
o.remove = !1;
o.aniObj = {
c: 0
};
o._dark = !1;
return o;
}
Object.defineProperty(o.prototype, "type", {
get: function() {
return this._type;
},
set: function(t) {
var o = this;
this._type = t;
cc.resources.load("ares_bndl/icons/" + t, cc.Texture2D, function(t, e) {
var l = new cc.SpriteFrame(e);
o.sp_icon.spriteFrame = l;
});
},
enumerable: !1,
configurable: !0
});
o.prototype.start = function() {};
Object.defineProperty(o.prototype, "dark", {
get: function() {
return this._dark;
},
set: function(t) {
this._dark = t;
},
enumerable: !1,
configurable: !0
});
o.prototype.setDark = function(t, o) {
var e = this;
void 0 === o && (o = !1);
if (this._dark != t) {
this._dark = t;
if (o) {
var l = 80, n = 255;
if (t) {
l = 255;
n = 80;
}
this.aniObj.c = l;
cc.Tween.stopAllByTarget(this.aniObj);
cc.tween(this.aniObj).to(.5, {
c: n
}, {
progress: function(t, o, l, n) {
var r = t + (o - t) * n;
e.sp_icon.node.color = cc.color(r, r, r);
e.tileBg.color = cc.color(r, r, r);
}
}).start();
} else {
this.sp_icon.node.color = t ? cc.color(80, 80, 80) : cc.color(255, 255, 255);
this.tileBg.color = t ? cc.color(80, 80, 80) : cc.color(255, 255, 255);
}
}
};
o.prototype.recycle = function(t) {
var o = this;
void 0 === t && (t = !1);
this.remove = !1;
this._dark = !1;
cc.Tween.stopAllByTarget(this.aniObj);
cc.Tween.stopAllByTarget(this.node);
this.sp_icon.node.color = cc.color(255, 255, 255);
this.tileBg.color = cc.color(255, 255, 255);
t ? cc.tween(this.node).delay(.06).to(.2, {
scale: 0
}).call(function() {
i.default.pool.recover("TileBlock", o.node);
}).start() : i.default.pool.recover("TileBlock", this.node);
};
r([ u(cc.Sprite) ], o.prototype, "sp_icon", void 0);
r([ u(cc.Node) ], o.prototype, "tileBg", void 0);
return r([ s ], o);
}(cc.Component);
e.default = a;
cc._RF.pop();
}, {
"./game_core": "game_core"
} ],
adMgr: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "dfc91ISjl9FK4zLCyc6nM4E", "adMgr");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.admgr = void 0;
var l = function() {
function t() {}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.adapterBg = function(t) {
var o = cc.winSize.width / t.width, e = cc.winSize.height / t.height;
t.scale = Math.max(o, e);
};
t.prototype.showToast = function(t) {
cc.resources.load("toast", cc.Prefab, function(o, e) {
if (!o) {
var l = cc.instantiate(e), n = cc.Canvas.instance.node;
if (l && n) {
l.active = !0;
n.addChild(l);
l.getChildByName("label").getComponent(cc.Label).string = t;
cc.Tween.stopAllByTarget(l);
l.opacity = 255;
cc.tween(l).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
l.destroy();
}).start();
}
}
});
};
t.prototype.setVideoFailCb = function(t) {
window.onClosefailCb = null;
window.onClosefailCb = t;
};
t.prototype.showVideo = function(t) {
console.log("android------------看广告");
if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V"); else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
jsb.reflection.callStaticMethod("UnityMgr", "loadReward");
window.onCloseFinishCb = null;
window.onCloseFinishCb = t;
} else t();
};
t.prototype.showBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V") : cc.sys.isNative && (cc.sys.OS_IOS, 
cc.sys.os);
};
t.prototype.closeBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V") : cc.sys.isNative && (cc.sys.OS_IOS, 
cc.sys.os);
};
t.prototype.showInterst = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V") : cc.sys.isNative && (cc.sys.OS_IOS, 
cc.sys.os);
};
t._instance = null;
return t;
}();
e.admgr = l.getInstance();
window.onCloseFinishCb = function() {};
window.onCloseVdieoFinishCb = function() {
console.log("onCloseVdieoFinishCb-------------------------");
window.onCloseFinishCb();
};
window.onCloseVdieofailCb = function() {
console.log("onCloseVdieofailCbonCloseVdieofailCbonCloseVdieofailCb");
window.onClosefailCb();
};
window.onClosefailCb = function() {};
cc._RF.pop();
}, {} ],
game_config_dyn: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "49afdW+1TJErbbtLDT4IQcu", "game_config_dyn");
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./game_level_cfg"), n = function() {
function t() {}
t.load = function() {
t.level.setup();
};
t.level = new l.default();
return t;
}();
e.default = n;
cc._RF.pop();
}, {
"./game_level_cfg": "game_level_cfg"
} ],
game_constants: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "12807/l9oVEA5XVhT1sq7/r", "game_constants");
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = function() {
function t() {}
t.localDataKey = "__AJYXuyGLHQrl1___";
t.select_level_clicked = "XE2aZJyvIOtcO7";
return t;
}();
e.default = l;
cc._RF.pop();
}, {} ],
game_core: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b3f3by5HelL0IccMgDwWYJK", "game_core");
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./global_model"), n = t("./pool_manager"), r = function() {
function t() {}
t.init = function(o, e) {
t.pool.init(void 0, e);
l.default.loadData();
};
t.pool = new n.default();
return t;
}();
e.default = r;
cc._RF.pop();
}, {
"./global_model": "global_model",
"./pool_manager": "pool_manager"
} ],
game_helpers: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "31abcTCiwtHU41uk44bj5ba", "game_helpers");
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = function() {
function t() {}
t.randomItem = function(t) {
return t && t.length > 0 ? t[this.getRandomInt(0, t.length - 1)] : null;
};
t.Object2Array = function(t) {
var o = [];
for (var e in t) o.push(t[e]);
return o;
};
t.getRandom = function(t, o) {
return Math.random() * (o - t) + t;
};
t.getRandomInt = function(t, o) {
return Math.floor(Math.random() * (o - t)) + t;
};
t.seedRandom = function() {
return t.getRandom(0, 1);
};
t.seedRandomInt = function(o, e) {
return t.getRandomInt(o, e);
};
t.rnd = function(t) {
return (t = (9301 * t + 49297) % 233280) / 233280;
};
t.getPowNum = function(t) {
return Math.pow(10, t);
};
t.setServerTime = function(o) {
t.timeOffset = o - new Date().getTime();
cc.log("timeOffset:", t.timeOffset);
};
t.getServerTime = function() {
return new Date().getTime() + t.timeOffset;
};
t.formatDate = function(t) {
var o = new Date(t);
return o.getFullYear() + "-" + (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "-" + (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()) + " " + (o.getHours() < 10 ? "0" + o.getHours() : o.getHours()) + ":" + (o.getMinutes() < 10 ? "0" + o.getMinutes() : o.getMinutes()) + ":" + (o.getSeconds() < 10 ? "0" + o.getSeconds() : o.getSeconds());
};
t.cloneObj = function(t) {
t = JSON.stringify(t);
return JSON.parse(t);
};
t.getTimeStrByS = function(t) {
(t = Math.floor(t)) < 0 && (t = 0);
var o = Math.floor(t / 3600 / 24);
t -= 86400 * o;
var e = Math.floor(t / 3600);
t -= 3600 * e;
var l, n = Math.floor(t / 60);
l = n > 9 ? "" + n : "0" + n;
var r;
r = (t -= 60 * n) > 9 ? "" + t : "0" + t;
return o > 0 ? o + "天" + e + "时" + n + "分" : e > 0 ? (e > 9 ? "" + e : "0" + e) + ":" + l : l + ":" + r;
};
t.getClockStrByS = function(t, o, e) {
void 0 === o && (o = !0);
void 0 === e && (e = !0);
(t = Math.floor(t)) < 0 && (t = 0);
var l = Math.floor(t / 3600);
t -= 3600 * l;
var n = Math.floor(t / 60);
t -= 60 * n;
var r = "";
if (e) {
r += l > 9 ? "" + l : "0" + l;
r += ":";
}
r += n > 9 ? "" + n : "0" + n;
o && (r += ":" + (t < 10 ? "0" : "") + t);
return r;
};
t.checkObjEmpty = function(t) {
if (t) {
for (var o in t) return !1;
return !0;
}
return !0;
};
t.checkOrderOver = function(o) {
var e = new Date(o), l = new Date(t.getServerTime());
return e.getFullYear() != l.getFullYear() || e.getMonth() != l.getMonth() || e.getDate() != l.getDate();
};
t.loadSpriteFrame = function(t, o, e) {
void 0 === e && (e = null);
this.loadRes("tp/" + t, "texture", cc.SpriteAtlas, function(l, n) {
if (l) {
console.log(t, o);
cc.error(l);
} else e(n.getSpriteFrame(o));
});
};
t.loadRes = function(t, o, e, l) {
void 0 === l && (l = null);
cc.assetManager.loadBundle(o, function(o, n) {
o ? cc.log(o) : n.load(t, e, function(t, o) {
t ? cc.log(t) : l(t, o);
});
});
};
t.weight = function(t) {
for (var o = 0, e = 0; e < t.length; ++e) o += t[e];
if (o <= 0) return -1;
var l = Math.round(Math.random() * Number.MAX_VALUE) % o;
for (e = 0; e < t.length; ++e) {
if (l < t[e]) return e;
l -= t[e];
}
return -1;
};
t.shuffle = function(t) {
for (var o = t.length - 1; o >= 0; o--) {
var e = Math.floor(Math.random() * (o + 1)), l = t[e];
t[e] = t[o];
t[o] = l;
}
return t;
};
t.getDate = function(t) {
var o = new Date(t), e = o.getFullYear(), l = o.getMonth() + 1, n = o.getDate();
return e + "-" + (l < 10 ? "0" + l : l) + "-" + (n < 10 ? "0" + n : n) + " " + o.toTimeString().substr(0, 8);
};
t.goldCrarryBit = function(t) {
for (var o = [ [ 1e8, "N" ], [ 1e7, "T" ], [ 1e6, "G" ], [ 1e5, "M" ], [ 1e4, "K" ], [ 1e3, "B" ] ], e = 0; e < o.length; e++) {
var l = t / o[e][0];
if (l > 1) return "" + l.toFixed(1) + o[e][1];
}
return t.toString();
};
t.fixFloat = function(t, o) {
void 0 === o && (o = 2);
var e = Math.pow(10, o);
return Math.floor(t * e) / e;
};
t.formatString = function(t) {
for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
for (var l = 0; l < o.length; l++) {
var n = new RegExp("\\{" + l + "\\}", "gm");
t = t.replace(n, o[l]);
}
return t;
};
t.count = function(t) {
if (!t) return 0;
var o = 0;
for (var e in t) o++;
return o;
};
t.copy = function(t) {
var o = Object.create(t);
Object.assign(o, t);
return o;
};
t.setGray = function(t, o) {
o ? t.setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite")) : t.setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite"));
};
t.setSpriteFrame = function(t, o, e, l) {
void 0 === e && (e = "resources");
void 0 === l && (l = null);
cc.assetManager.getBundle(e).load(o, cc.Texture2D, function(e, n) {
if (e) cc.log("error", o); else {
t.spriteFrame = new cc.SpriteFrame(n);
l && l();
}
});
};
t.initArray2 = function(t, o, e) {
void 0 === e && (e = null);
for (var l = [], n = 0; n < t; n++) {
l[n] = [];
for (var r = 0; r < o; r++) l[n][r] = e;
}
return l;
};
t.localConvertWorldPointAR = function(t) {
return t ? t.convertToWorldSpaceAR(cc.v2(0, 0)) : null;
};
t.convetOtherNodeSpaceAR = function(o, e) {
if (!o || !e) return null;
var l = t.localConvertWorldPointAR(o);
return t.worldConvertLocalPointAR(e, l);
};
t.worldConvertLocalPointAR = function(t, o) {
return t ? t.convertToNodeSpaceAR(o) : null;
};
t.getCross = function(t, o, e) {
return (o.x - t.x) * (e.y - t.y) - (e.x - t.x) * (o.y - t.y);
};
t.isPointInMatrix = function(o, e, l, n, r) {
return t.getCross(o, e, r) * t.getCross(l, n, r) >= 0 && t.getCross(e, l, r) * t.getCross(n, o, r) >= 0;
};
t.randomArray = function(t) {
for (var o = [], e = t.length, l = 0; l < e; l++) {
var n = Math.floor(Math.random() * t.length);
o.push(t[n]);
t.splice(n, 1);
}
return o;
};
t.removeElementFromArray = function(t, o) {
for (var e = o.length - 1; e >= 0; e--) if (o[e] == t) {
o.splice(e, 1);
break;
}
};
t.getDayCount = function(t, o) {
var e = !1;
(t % 100 != 0 && t % 4 == 0 || t % 400 == 0) && (e = !0);
return 1 == o || 3 == o || 5 == o || 7 == o || 8 == o || 10 == o || 12 == o ? 31 : 4 == o || 6 == o || 9 == o || 11 == o ? 30 : e ? 29 : 28;
};
t.seed = 5;
t.timeOffset = 0;
return t;
}();
e.default = l;
cc._RF.pop();
}, {} ],
game_level_cfg: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "1fe8bPiTDlFp7PNko27a8QQ", "game_level_cfg");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.LevelData = e.FloorData = e.LevelCO = e.LayoutData = void 0;
var l = t("./game_helpers"), n = function() {};
e.LayoutData = n;
var r = function() {};
e.LevelCO = r;
e.FloorData = function() {};
e.LevelData = function() {};
var i = function() {
function t() {}
t.prototype.setup = function() {
this.levels = [ null, {
id: 1,
level: 1,
count: 27,
floorIds: [ "266", "267" ],
typeCount: 3
}, {
id: 2,
level: 2,
count: 45,
floorIds: [ "268", "269" ],
typeCount: 7
}, {
id: 3,
level: 3,
count: 63,
floorIds: [ "270", "271" ],
typeCount: 13
}, {
id: 4,
level: 4,
count: 72,
floorIds: [ "143", "144", "145" ],
typeCount: 12
}, {
id: 5,
level: 5,
count: 57,
floorIds: [ "146", "147" ],
typeCount: 11
}, {
id: 6,
level: 6,
count: 108,
floorIds: [ "148", "149", "150" ],
typeCount: 15
}, {
id: 7,
level: 7,
count: 57,
floorIds: [ "151", "152" ],
typeCount: 12
}, {
id: 8,
level: 8,
count: 63,
floorIds: [ "57", "65", "99", "122" ],
typeCount: 12
}, {
id: 9,
level: 9,
count: 63,
floorIds: [ "60", "65", "98", "115" ],
typeCount: 12
}, {
id: 10,
level: 10,
count: 63,
floorIds: [ "60", "76", "104", "107" ],
typeCount: 12
}, {
id: 11,
level: 11,
count: 63,
floorIds: [ "50", "65", "101", "109" ],
typeCount: 12
}, {
id: 12,
level: 12,
count: 63,
floorIds: [ "58", "65", "90", "115" ],
typeCount: 12
}, {
id: 13,
level: 13,
count: 63,
floorIds: [ "50", "65", "96", "120" ],
typeCount: 12
}, {
id: 14,
level: 14,
count: 63,
floorIds: [ "49", "82", "93", "113" ],
typeCount: 13
}, {
id: 15,
level: 15,
count: 63,
floorIds: [ "59", "71", "94", "117" ],
typeCount: 13
}, {
id: 16,
level: 16,
count: 63,
floorIds: [ "45", "78", "103", "117" ],
typeCount: 14
}, {
id: 17,
level: 17,
count: 63,
floorIds: [ "62", "69", "90", "111" ],
typeCount: 14
}, {
id: 18,
level: 18,
count: 63,
floorIds: [ "60", "82", "101", "122" ],
typeCount: 15
}, {
id: 19,
level: 19,
count: 63,
floorIds: [ "53", "73", "95", "113" ],
typeCount: 15
}, {
id: 20,
level: 20,
count: 63,
floorIds: [ "56", "74", "90", "109" ],
typeCount: 15
}, {
id: 21,
level: 21,
count: 63,
floorIds: [ "58", "72", "98", "125" ],
typeCount: 15
}, {
id: 22,
level: 22,
count: 63,
floorIds: [ "56", "78", "94", "125" ],
typeCount: 15
}, {
id: 23,
level: 23,
count: 63,
floorIds: [ "49", "83", "103", "121" ],
typeCount: 15
}, {
id: 24,
level: 24,
count: 66,
floorIds: [ "53", "72", "98", "114" ],
typeCount: 15
}, {
id: 25,
level: 25,
count: 66,
floorIds: [ "63", "76", "100", "121" ],
typeCount: 15
}, {
id: 26,
level: 26,
count: 66,
floorIds: [ "45", "81", "99", "114" ],
typeCount: 15
}, {
id: 27,
level: 27,
count: 66,
floorIds: [ "45", "80", "101", "113" ],
typeCount: 15
}, {
id: 28,
level: 28,
count: 66,
floorIds: [ "47", "68", "92", "112" ],
typeCount: 15
}, {
id: 29,
level: 29,
count: 66,
floorIds: [ "58", "77", "88", "113" ],
typeCount: 15
}, {
id: 30,
level: 30,
count: 66,
floorIds: [ "46", "81", "91", "118" ],
typeCount: 15
}, {
id: 31,
level: 31,
count: 66,
floorIds: [ "49", "74", "92", "117" ],
typeCount: 15
}, {
id: 32,
level: 32,
count: 66,
floorIds: [ "59", "82", "89", "113" ],
typeCount: 15
}, {
id: 33,
level: 33,
count: 66,
floorIds: [ "46", "83", "87", "124" ],
typeCount: 15
}, {
id: 34,
level: 34,
count: 69,
floorIds: [ "52", "82", "103", "117" ],
typeCount: 15
}, {
id: 35,
level: 35,
count: 69,
floorIds: [ "46", "75", "90", "123" ],
typeCount: 15
}, {
id: 36,
level: 36,
count: 69,
floorIds: [ "53", "66", "94", "116" ],
typeCount: 15
}, {
id: 37,
level: 37,
count: 69,
floorIds: [ "57", "65", "103", "124" ],
typeCount: 15
}, {
id: 38,
level: 38,
count: 69,
floorIds: [ "55", "74", "86", "120" ],
typeCount: 15
}, {
id: 39,
level: 39,
count: 69,
floorIds: [ "51", "80", "95", "116" ],
typeCount: 15
}, {
id: 40,
level: 40,
count: 69,
floorIds: [ "61", "70", "105", "118" ],
typeCount: 15
}, {
id: 41,
level: 41,
count: 69,
floorIds: [ "46", "72", "90", "119" ],
typeCount: 15
}, {
id: 42,
level: 42,
count: 69,
floorIds: [ "53", "74", "89", "117" ],
typeCount: 15
}, {
id: 43,
level: 43,
count: 72,
floorIds: [ "59", "69", "102", "109" ],
typeCount: 15
}, {
id: 44,
level: 44,
count: 72,
floorIds: [ "57", "69", "88", "111" ],
typeCount: 15
}, {
id: 45,
level: 45,
count: 72,
floorIds: [ "44", "78", "90", "110" ],
typeCount: 15
}, {
id: 46,
level: 46,
count: 72,
floorIds: [ "47", "84", "104", "109" ],
typeCount: 15
}, {
id: 47,
level: 47,
count: 72,
floorIds: [ "47", "71", "100", "120" ],
typeCount: 15
}, {
id: 48,
level: 48,
count: 72,
floorIds: [ "57", "84", "87", "125" ],
typeCount: 15
}, {
id: 49,
level: 49,
count: 72,
floorIds: [ "49", "81", "97", "120" ],
typeCount: 15
}, {
id: 50,
level: 50,
count: 72,
floorIds: [ "53", "75", "100", "113" ],
typeCount: 15
}, {
id: 51,
level: 51,
count: 72,
floorIds: [ "27", "45", "83", "94", "108" ],
typeCount: 15
}, {
id: 52,
level: 52,
count: 72,
floorIds: [ "37", "60", "83", "93", "126" ],
typeCount: 15
}, {
id: 53,
level: 53,
count: 72,
floorIds: [ "29", "54", "78", "92", "117" ],
typeCount: 15
}, {
id: 54,
level: 54,
count: 75,
floorIds: [ "46", "80", "88", "109" ],
typeCount: 15
}, {
id: 55,
level: 55,
count: 75,
floorIds: [ "44", "71", "93", "123" ],
typeCount: 15
}, {
id: 56,
level: 56,
count: 75,
floorIds: [ "52", "67", "104", "123" ],
typeCount: 15
}, {
id: 57,
level: 57,
count: 75,
floorIds: [ "62", "79", "90", "111" ],
typeCount: 15
}, {
id: 58,
level: 58,
count: 75,
floorIds: [ "61", "74", "100", "116" ],
typeCount: 15
}, {
id: 59,
level: 59,
count: 75,
floorIds: [ "50", "81", "102", "117" ],
typeCount: 15
}, {
id: 60,
level: 60,
count: 75,
floorIds: [ "49", "67", "101", "110" ],
typeCount: 15
}, {
id: 61,
level: 61,
count: 75,
floorIds: [ "44", "66", "95", "120" ],
typeCount: 15
}, {
id: 62,
level: 62,
count: 75,
floorIds: [ "62", "75", "101", "116" ],
typeCount: 15
}, {
id: 63,
level: 63,
count: 75,
floorIds: [ "63", "65", "104", "116" ],
typeCount: 15
}, {
id: 64,
level: 64,
count: 75,
floorIds: [ "50", "68", "105", "110" ],
typeCount: 15
}, {
id: 65,
level: 65,
count: 75,
floorIds: [ "32", "55", "83", "89", "118" ],
typeCount: 15
}, {
id: 66,
level: 66,
count: 75,
floorIds: [ "25", "60", "66", "92", "107" ],
typeCount: 15
}, {
id: 67,
level: 67,
count: 75,
floorIds: [ "25", "60", "83", "102", "112" ],
typeCount: 15
}, {
id: 68,
level: 68,
count: 78,
floorIds: [ "46", "67", "104", "107" ],
typeCount: 16
}, {
id: 69,
level: 69,
count: 78,
floorIds: [ "57", "76", "86", "121" ],
typeCount: 16
}, {
id: 70,
level: 70,
count: 78,
floorIds: [ "52", "68", "87", "124" ],
typeCount: 16
}, {
id: 71,
level: 71,
count: 78,
floorIds: [ "44", "76", "90", "111" ],
typeCount: 16
}, {
id: 72,
level: 72,
count: 78,
floorIds: [ "58", "69", "88", "119" ],
typeCount: 16
}, {
id: 73,
level: 73,
count: 78,
floorIds: [ "50", "84", "86", "107" ],
typeCount: 16
}, {
id: 74,
level: 74,
count: 78,
floorIds: [ "38", "57", "77", "92", "120" ],
typeCount: 16
}, {
id: 75,
level: 75,
count: 81,
floorIds: [ "46", "82", "99", "116" ],
typeCount: 16
}, {
id: 76,
level: 76,
count: 81,
floorIds: [ "44", "81", "93", "119" ],
typeCount: 16
}, {
id: 77,
level: 77,
count: 81,
floorIds: [ "48", "80", "87", "118" ],
typeCount: 16
}, {
id: 78,
level: 78,
count: 81,
floorIds: [ "48", "69", "102", "113" ],
typeCount: 16
}, {
id: 79,
level: 79,
count: 81,
floorIds: [ "49", "77", "86", "123" ],
typeCount: 16
}, {
id: 80,
level: 80,
count: 81,
floorIds: [ "57", "68", "101", "116" ],
typeCount: 16
}, {
id: 81,
level: 81,
count: 81,
floorIds: [ "42", "53", "83", "95", "108" ],
typeCount: 16
}, {
id: 82,
level: 82,
count: 81,
floorIds: [ "38", "54", "82", "93", "116" ],
typeCount: 16
}, {
id: 83,
level: 83,
count: 84,
floorIds: [ "56", "68", "87", "119" ],
typeCount: 16
}, {
id: 84,
level: 84,
count: 84,
floorIds: [ "39", "59", "65", "95", "123" ],
typeCount: 16
}, {
id: 85,
level: 85,
count: 84,
floorIds: [ "25", "57", "74", "93", "123" ],
typeCount: 16
}, {
id: 86,
level: 86,
count: 84,
floorIds: [ "41", "54", "84", "93", "108" ],
typeCount: 16
}, {
id: 87,
level: 87,
count: 84,
floorIds: [ "38", "57", "84", "89", "108" ],
typeCount: 16
}, {
id: 88,
level: 88,
count: 84,
floorIds: [ "31", "57", "72", "95", "109" ],
typeCount: 16
}, {
id: 89,
level: 89,
count: 84,
floorIds: [ "34", "63", "74", "95", "107" ],
typeCount: 16
}, {
id: 90,
level: 90,
count: 84,
floorIds: [ "39", "51", "83", "105", "125" ],
typeCount: 16
}, {
id: 91,
level: 91,
count: 87,
floorIds: [ "62", "76", "86", "116" ],
typeCount: 16
}, {
id: 92,
level: 92,
count: 87,
floorIds: [ "25", "62", "75", "92", "124" ],
typeCount: 16
}, {
id: 93,
level: 93,
count: 87,
floorIds: [ "25", "51", "66", "100", "108" ],
typeCount: 16
}, {
id: 94,
level: 94,
count: 87,
floorIds: [ "27", "52", "83", "104", "112" ],
typeCount: 16
}, {
id: 95,
level: 95,
count: 87,
floorIds: [ "27", "63", "73", "92", "107" ],
typeCount: 16
}, {
id: 96,
level: 96,
count: 87,
floorIds: [ "39", "45", "76", "98", "124" ],
typeCount: 16
}, {
id: 97,
level: 97,
count: 87,
floorIds: [ "36", "54", "80", "99", "111" ],
typeCount: 16
}, {
id: 98,
level: 98,
count: 87,
floorIds: [ "27", "48", "83", "89", "108" ],
typeCount: 16
}, {
id: 99,
level: 99,
count: 90,
floorIds: [ "44", "69", "90", "118" ],
typeCount: 16
}, {
id: 100,
level: 100,
count: 90,
floorIds: [ "28", "56", "77", "91", "117" ],
typeCount: 16
} ];
this.floors = [ null, {
id: 1,
floor: 1,
count: 38,
layouts: [ "1,4", "1,5", "1,6", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "9,4", "9,5", "9,6" ]
}, {
id: 2,
floor: 1,
count: 33,
layouts: [ "1,3", "1,7", "2,2", "2,4", "2,5", "2,6", "2,8", "3,1", "3,9", "4,2", "4,4", "4,5", "4,6", "4,8", "5,2", "5,4", "5,5", "5,6", "5,8", "6,2", "6,4", "6,5", "6,6", "6,8", "7,1", "7,9", "8,2", "8,4", "8,5", "8,6", "8,8", "9,3", "9,7" ]
}, {
id: 3,
floor: 1,
count: 53,
layouts: [ "1,2", "1,8", "2,1", "2,3", "2,4", "2,5", "2,6", "2,7", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,3", "8,4", "8,5", "8,6", "8,7", "8,9", "9,2", "9,8" ]
}, {
id: 4,
floor: 1,
count: 49,
layouts: [ "1,3", "1,4", "1,6", "1,7", "2,3", "2,4", "2,6", "2,7", "3,2", "3,3", "3,4", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,6", "7,7", "7,8", "8,3", "8,4", "8,6", "8,7", "9,3", "9,4", "9,6", "9,7" ]
}, {
id: 5,
floor: 1,
count: 44,
layouts: [ "1,1", "1,9", "2,2", "2,3", "2,4", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,6", "4,7", "4,8", "5,3", "5,7", "6,2", "6,3", "6,4", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,6", "8,7", "8,8", "9,1", "9,9" ]
}, {
id: 6,
floor: 1,
count: 40,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,7", "5,8", "6,2", "6,3", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 7,
floor: 1,
count: 65,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9", "2,1", "2,2", "2,3", "2,4", "2,5", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,7", "3,8", "3,9", "4,1", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,5", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,9", "7,1", "7,2", "7,3", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,5", "8,6", "8,7", "8,8", "8,9", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8", "9,9" ]
}, {
id: 8,
floor: 1,
count: 46,
layouts: [ "1,1", "1,2", "1,3", "1,7", "1,8", "1,9", "2,2", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,7", "3,8", "4,1", "4,2", "4,4", "4,5", "4,7", "4,8", "5,1", "5,2", "5,4", "5,5", "6,1", "6,2", "6,4", "6,5", "6,7", "6,8", "7,2", "7,7", "7,8", "8,2", "8,4", "8,5", "8,6", "8,7", "8,8", "9,1", "9,2", "9,3", "9,7", "9,8", "9,9" ]
}, {
id: 9,
floor: 1,
count: 46,
layouts: [ "1,2", "1,3", "1,6", "1,8", "2,2", "2,3", "2,4", "2,5", "2,6", "2,8", "3,2", "3,3", "3,6", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,3", "5,4", "5,6", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,4", "7,7", "7,8", "8,2", "8,4", "8,5", "8,6", "8,7", "8,8", "9,2", "9,4", "9,7", "9,8" ]
}, {
id: 10,
floor: 1,
count: 43,
layouts: [ "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,4", "5,5", "5,6", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,3", "8,4", "8,5", "8,6", "8,7" ]
}, {
id: 11,
floor: 1,
count: 39,
layouts: [ "1,2", "1,7", "2,1", "2,2", "2,3", "2,4", "2,7", "3,2", "3,3", "3,4", "3,6", "3,7", "4,2", "4,3", "4,4", "4,6", "4,7", "4,8", "4,9", "5,5", "6,3", "6,4", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,6", "7,7", "7,8", "8,3", "8,6", "8,7", "8,8", "8,9", "9,3", "9,8" ]
}, {
id: 12,
floor: 1,
count: 57,
layouts: [ "1,1", "1,6", "1,7", "1,8", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "9,2", "9,3", "9,4", "9,9" ]
}, {
id: 13,
floor: 1,
count: 51,
layouts: [ "1,2", "1,5", "1,6", "1,7", "2,2", "2,5", "2,6", "2,7", "2,9", "3,2", "3,4", "3,5", "3,6", "3,9", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,4", "5,5", "5,6", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,4", "7,5", "7,6", "7,8", "8,1", "8,3", "8,4", "8,5", "8,8", "9,3", "9,4", "9,5", "9,8" ]
}, {
id: 14,
floor: 1,
count: 43,
layouts: [ "2,1", "2,2", "2,4", "2,6", "2,8", "2,9", "3,1", "3,2", "3,4", "3,6", "3,8", "3,9", "4,1", "4,2", "4,4", "4,6", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,4", "7,5", "7,6", "8,4", "8,5", "8,6", "9,5" ]
}, {
id: 15,
floor: 1,
count: 59,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,2", "2,5", "2,8", "3,2", "3,4", "3,5", "3,6", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,4", "5,5", "5,6", "5,8", "5,9", "6,1", "6,2", "6,5", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8" ]
}, {
id: 16,
floor: 1,
count: 53,
layouts: [ "1,4", "1,5", "1,6", "2,2", "2,3", "2,4", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,3", "5,4", "5,5", "5,6", "5,7", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,9", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,6", "8,7", "8,8", "9,4", "9,5", "9,6" ]
}, {
id: 17,
floor: 1,
count: 49,
layouts: [ "1,1", "1,2", "1,3", "1,7", "1,8", "1,9", "2,1", "2,2", "2,3", "2,5", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,7", "3,8", "3,9", "4,4", "4,5", "4,6", "5,2", "5,4", "5,5", "5,6", "5,8", "6,4", "6,5", "6,6", "7,1", "7,2", "7,3", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,5", "8,7", "8,8", "8,9", "9,1", "9,2", "9,3", "9,7", "9,8", "9,9" ]
}, {
id: 18,
floor: 1,
count: 53,
layouts: [ "1,7", "1,8", "1,9", "2,2", "2,3", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,7", "8,8", "9,1", "9,2", "9,3" ]
}, {
id: 19,
floor: 1,
count: 37,
layouts: [ "1,2", "1,3", "1,7", "1,8", "2,2", "2,3", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,7", "3,8", "4,2", "4,3", "4,7", "4,8", "5,5", "6,2", "6,3", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,7", "7,8", "8,2", "8,3", "8,7", "8,8", "9,2", "9,3", "9,7", "9,8" ]
}, {
id: 20,
floor: 1,
count: 47,
layouts: [ "1,2", "1,5", "1,8", "2,1", "2,4", "2,5", "2,6", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,4", "5,5", "5,6", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,4", "8,5", "8,6", "8,9", "9,2", "9,5", "9,8" ]
}, {
id: 21,
floor: 1,
count: 55,
layouts: [ "1,6", "1,7", "1,8", "1,9", "2,2", "2,3", "2,4", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,6", "3,7", "3,8", "3,9", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "7,1", "7,2", "7,3", "7,4", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,6", "8,7", "8,8", "9,1", "9,2", "9,3", "9,4" ]
}, {
id: 22,
floor: 1,
count: 51,
layouts: [ "1,2", "1,7", "1,8", "1,9", "2,2", "2,4", "2,5", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,5", "8,6", "8,8", "9,1", "9,2", "9,3", "9,8" ]
}, {
id: 23,
floor: 1,
count: 45,
layouts: [ "2,2", "2,3", "2,4", "2,6", "2,8", "2,9", "3,2", "3,3", "3,4", "3,6", "3,8", "3,9", "4,2", "4,3", "4,4", "4,6", "4,8", "4,9", "5,6", "5,8", "5,9", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,3", "9,4", "9,5", "9,8", "9,9" ]
}, {
id: 24,
floor: 1,
count: 57,
layouts: [ "1,2", "1,3", "1,4", "2,2", "2,3", "2,4", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,6", "8,7", "8,8", "9,6", "9,7", "9,8" ]
}, {
id: 25,
floor: 2,
count: 28,
layouts: [ "1,4", "1,5", "2,2", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,4", "4,5", "4,7", "5,2", "5,4", "5,5", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,7", "8,4", "8,5" ]
}, {
id: 26,
floor: 2,
count: 28,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,6", "6,7", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 27,
floor: 2,
count: 36,
layouts: [ "1,2", "1,7", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,4", "3,7", "3,8", "4,2", "4,4", "4,5", "4,6", "4,7", "5,2", "5,3", "5,4", "5,5", "5,7", "6,1", "6,2", "6,5", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "8,2", "8,7" ]
}, {
id: 28,
floor: 2,
count: 32,
layouts: [ "1,7", "1,8", "2,2", "2,3", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,6", "7,7", "8,1", "8,2" ]
}, {
id: 29,
floor: 2,
count: 28,
layouts: [ "1,2", "2,1", "2,2", "2,3", "2,4", "2,5", "2,7", "3,2", "3,3", "3,4", "3,6", "4,2", "4,3", "4,4", "4,7", "5,2", "5,5", "5,6", "5,7", "6,3", "6,5", "6,6", "6,7", "7,2", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 30,
floor: 2,
count: 48,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,6", "6,7", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7" ]
}, {
id: 31,
floor: 2,
count: 34,
layouts: [ "1,3", "1,4", "1,5", "1,6", "2,4", "2,5", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,3", "4,4", "4,5", "4,6", "5,1", "5,2", "5,4", "5,5", "5,7", "5,8", "6,4", "6,5", "7,1", "7,2", "7,4", "7,5", "7,7", "7,8", "8,1", "8,2", "8,7", "8,8" ]
}, {
id: 32,
floor: 2,
count: 34,
layouts: [ "1,2", "1,3", "2,2", "2,3", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,6", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,3", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,6", "7,7", "8,6", "8,7" ]
}, {
id: 33,
floor: 2,
count: 42,
layouts: [ "1,3", "1,4", "1,5", "1,6", "2,2", "2,3", "2,6", "2,7", "3,2", "3,3", "3,4", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,5", "6,6", "6,7", "7,2", "7,3", "7,6", "7,7", "8,3", "8,4", "8,5", "8,6" ]
}, {
id: 34,
floor: 2,
count: 32,
layouts: [ "1,1", "1,4", "1,5", "1,8", "2,2", "2,4", "2,7", "3,3", "3,4", "3,5", "3,6", "4,1", "4,3", "4,5", "4,6", "4,8", "5,1", "5,3", "5,4", "5,6", "5,8", "6,3", "6,4", "6,5", "6,6", "7,2", "7,5", "7,7", "8,1", "8,4", "8,5", "8,8" ]
}, {
id: 35,
floor: 2,
count: 32,
layouts: [ "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,2", "5,4", "5,5", "5,7", "6,2", "6,4", "6,5", "6,7", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 36,
floor: 2,
count: 32,
layouts: [ "1,1", "1,4", "1,5", "1,6", "1,8", "2,2", "3,2", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,8", "5,1", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,7", "7,7", "8,1", "8,3", "8,4", "8,5", "8,8" ]
}, {
id: 37,
floor: 2,
count: 28,
layouts: [ "2,2", "2,3", "2,4", "2,6", "2,7", "3,2", "3,3", "3,4", "3,6", "3,7", "4,3", "4,4", "4,5", "4,6", "5,3", "5,4", "5,5", "5,6", "6,2", "6,3", "6,5", "6,6", "6,7", "7,2", "7,3", "7,5", "7,6", "7,7" ]
}, {
id: 38,
floor: 2,
count: 27,
layouts: [ "2,2", "2,3", "2,5", "2,6", "2,7", "3,2", "3,3", "3,4", "3,6", "3,7", "4,2", "4,3", "4,5", "4,6", "4,7", "5,3", "5,4", "5,5", "5,6", "6,3", "6,4", "6,5", "6,6", "7,4", "7,5", "8,3", "8,6" ]
}, {
id: 39,
floor: 2,
count: 25,
layouts: [ "2,2", "2,4", "2,5", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,4", "4,7", "5,2", "5,5", "5,7", "6,3", "6,4", "6,6", "7,2", "7,4", "7,5", "7,7", "8,2", "8,7" ]
}, {
id: 40,
floor: 2,
count: 32,
layouts: [ "1,4", "1,5", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,6", "3,7", "4,4", "4,5", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,3", "7,6", "8,3", "8,4", "8,5", "8,6" ]
}, {
id: 41,
floor: 2,
count: 42,
layouts: [ "1,4", "1,5", "2,2", "2,3", "2,6", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,3", "7,6", "7,7", "8,1", "8,2", "8,7", "8,8" ]
}, {
id: 42,
floor: 2,
count: 38,
layouts: [ "1,2", "1,4", "1,5", "1,7", "2,2", "2,4", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,6", "4,7", "5,2", "5,3", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,5", "7,7", "8,2", "8,4", "8,5", "8,7" ]
}, {
id: 43,
floor: 2,
count: 40,
layouts: [ "1,2", "1,3", "1,6", "1,7", "2,2", "2,3", "2,6", "2,7", "3,2", "3,3", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,3", "6,4", "6,5", "6,6", "7,3", "7,4", "7,5", "7,6", "8,3", "8,4", "8,5", "8,6" ]
}, {
id: 44,
floor: 3,
count: 49,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 45,
floor: 3,
count: 25,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "3,2", "3,3", "3,4", "3,5", "3,6", "4,2", "4,3", "4,4", "4,5", "4,6", "5,2", "5,3", "5,4", "5,5", "5,6", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 46,
floor: 3,
count: 36,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 47,
floor: 3,
count: 36,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7" ]
}, {
id: 48,
floor: 3,
count: 36,
layouts: [ "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6" ]
}, {
id: 49,
floor: 3,
count: 36,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 50,
floor: 3,
count: 33,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,7", "3,1", "3,3", "3,4", "3,5", "3,7", "4,1", "4,3", "4,4", "4,5", "4,7", "5,1", "5,3", "5,4", "5,5", "5,7", "6,1", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 51,
floor: 3,
count: 29,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,7", "3,1", "3,4", "3,7", "4,1", "4,3", "4,4", "4,5", "4,7", "5,1", "5,4", "5,7", "6,1", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 52,
floor: 3,
count: 28,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,7", "3,1", "3,4", "3,7", "4,1", "4,3", "4,5", "4,7", "5,1", "5,4", "5,7", "6,1", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 53,
floor: 3,
count: 33,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,4", "2,7", "3,1", "3,4", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,4", "5,7", "6,1", "6,4", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 54,
floor: 3,
count: 19,
layouts: [ "1,1", "1,2", "1,3", "2,1", "2,2", "2,3", "3,1", "3,2", "3,3", "4,4", "5,5", "5,6", "5,7", "6,5", "6,6", "6,7", "7,5", "7,6", "7,7" ]
}, {
id: 55,
floor: 3,
count: 19,
layouts: [ "1,5", "1,6", "1,7", "2,5", "2,6", "2,7", "3,5", "3,6", "3,7", "4,4", "5,1", "5,2", "5,3", "6,1", "6,2", "6,3", "7,1", "7,2", "7,3" ]
}, {
id: 56,
floor: 3,
count: 35,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "2,2", "2,3", "2,4", "2,5", "2,6", "3,2", "3,3", "3,4", "3,5", "3,6", "4,2", "4,3", "4,4", "4,5", "4,6", "5,2", "5,3", "5,4", "5,5", "5,6", "6,2", "6,3", "6,4", "6,5", "6,6", "7,2", "7,3", "7,4", "7,5", "7,6" ]
}, {
id: 57,
floor: 3,
count: 28,
layouts: [ "1,1", "1,3", "1,5", "1,7", "2,1", "2,3", "2,5", "2,7", "3,1", "3,3", "3,5", "3,7", "4,1", "4,3", "4,5", "4,7", "5,1", "5,3", "5,5", "5,7", "6,1", "6,3", "6,5", "6,7", "7,1", "7,3", "7,5", "7,7" ]
}, {
id: 58,
floor: 3,
count: 28,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 59,
floor: 3,
count: 33,
layouts: [ "1,2", "1,4", "1,6", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,4", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,2", "5,4", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,4", "7,6" ]
}, {
id: 60,
floor: 3,
count: 27,
layouts: [ "1,2", "1,6", "2,1", "2,2", "2,3", "2,5", "2,6", "2,7", "3,2", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,2", "5,6", "6,1", "6,2", "6,3", "6,5", "6,6", "6,7", "7,2", "7,6" ]
}, {
id: 61,
floor: 3,
count: 28,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,3", "3,4", "3,5", "3,6", "3,7", "4,4", "4,5", "4,6", "4,7", "5,5", "5,6", "5,7", "6,6", "6,7", "7,7" ]
}, {
id: 62,
floor: 3,
count: 28,
layouts: [ "1,1", "2,1", "2,2", "3,1", "3,2", "3,3", "4,1", "4,2", "4,3", "4,4", "5,1", "5,2", "5,3", "5,4", "5,5", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 63,
floor: 3,
count: 28,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,1", "3,2", "3,3", "3,4", "3,5", "4,1", "4,2", "4,3", "4,4", "5,1", "5,2", "5,3", "6,1", "6,2", "7,1" ]
}, {
id: 64,
floor: 3,
count: 28,
layouts: [ "1,7", "2,6", "2,7", "3,5", "3,6", "3,7", "4,4", "4,5", "4,6", "4,7", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 65,
floor: 4,
count: 15,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "2,3", "2,4", "2,5", "2,6", "3,4", "3,5", "3,6", "4,5", "4,6", "5,6" ]
}, {
id: 66,
floor: 4,
count: 15,
layouts: [ "2,1", "3,1", "3,2", "4,1", "4,2", "4,3", "5,1", "5,2", "5,3", "5,4", "6,1", "6,2", "6,3", "6,4", "6,5" ]
}, {
id: 67,
floor: 4,
count: 24,
layouts: [ "1,1", "1,6", "2,1", "2,2", "2,5", "2,6", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,1", "5,2", "5,5", "5,6", "6,1", "6,6" ]
}, {
id: 68,
floor: 4,
count: 24,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "2,2", "2,3", "2,4", "2,5", "3,3", "3,4", "4,3", "4,4", "5,2", "5,3", "5,4", "5,5", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 69,
floor: 4,
count: 24,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "2,1", "2,6", "3,1", "3,3", "3,4", "3,6", "4,1", "4,3", "4,4", "4,6", "5,1", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 70,
floor: 4,
count: 16,
layouts: [ "2,2", "2,3", "2,4", "2,5", "3,2", "3,3", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 71,
floor: 4,
count: 16,
layouts: [ "1,1", "1,2", "2,1", "2,2", "3,2", "3,3", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5", "5,5", "5,6", "6,5", "6,6" ]
}, {
id: 72,
floor: 4,
count: 16,
layouts: [ "1,5", "1,6", "2,5", "2,6", "3,2", "3,3", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5", "5,1", "5,2", "6,1", "6,2" ]
}, {
id: 73,
floor: 4,
count: 18,
layouts: [ "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6" ]
}, {
id: 74,
floor: 4,
count: 18,
layouts: [ "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6" ]
}, {
id: 75,
floor: 4,
count: 18,
layouts: [ "1,2", "1,3", "1,4", "2,2", "2,3", "2,4", "3,2", "3,3", "3,4", "4,2", "4,3", "4,4", "5,2", "5,3", "5,4", "6,2", "6,3", "6,4" ]
}, {
id: 76,
floor: 4,
count: 18,
layouts: [ "1,3", "1,4", "1,5", "2,3", "2,4", "2,5", "3,3", "3,4", "3,5", "4,3", "4,4", "4,5", "5,3", "5,4", "5,5", "6,3", "6,4", "6,5" ]
}, {
id: 77,
floor: 4,
count: 13,
layouts: [ "2,1", "3,1", "4,1", "4,2", "4,3", "5,1", "5,2", "5,3", "6,1", "6,2", "6,3", "6,4", "6,5" ]
}, {
id: 78,
floor: 4,
count: 13,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "2,4", "2,5", "2,6", "3,4", "3,5", "3,6", "4,6", "5,6" ]
}, {
id: 79,
floor: 4,
count: 36,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 80,
floor: 4,
count: 20,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "2,1", "2,6", "3,1", "3,6", "4,1", "4,6", "5,1", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 81,
floor: 4,
count: 20,
layouts: [ "1,1", "1,6", "2,2", "2,3", "2,4", "2,5", "3,2", "3,3", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5", "5,2", "5,3", "5,4", "5,5", "6,1", "6,6" ]
}, {
id: 82,
floor: 4,
count: 16,
layouts: [ "1,1", "1,6", "2,2", "2,3", "2,4", "2,5", "3,2", "3,5", "4,2", "4,5", "5,2", "5,3", "5,4", "5,5", "6,1", "6,6" ]
}, {
id: 83,
floor: 4,
count: 4,
layouts: [ "3,3", "3,4", "4,3", "4,4" ]
}, {
id: 84,
floor: 4,
count: 18,
layouts: [ "1,1", "1,2", "1,3", "2,1", "2,2", "2,3", "3,1", "3,2", "3,3", "4,4", "4,5", "4,6", "5,4", "5,5", "5,6", "6,4", "6,5", "6,6" ]
}, {
id: 85,
floor: 4,
count: 18,
layouts: [ "1,4", "1,5", "1,6", "2,4", "2,5", "2,6", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "5,1", "5,2", "5,3", "6,1", "6,2", "6,3" ]
}, {
id: 86,
floor: 5,
count: 25,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,2", "3,3", "3,4", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5", "5,1", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 87,
floor: 5,
count: 16,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "2,1", "2,5", "3,1", "3,5", "4,1", "4,5", "5,1", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 88,
floor: 5,
count: 17,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "2,1", "2,5", "3,1", "3,3", "3,5", "4,1", "4,5", "5,1", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 89,
floor: 5,
count: 9,
layouts: [ "2,2", "2,3", "2,4", "3,2", "3,3", "3,4", "4,2", "4,3", "4,4" ]
}, {
id: 90,
floor: 5,
count: 8,
layouts: [ "2,2", "2,3", "2,4", "3,2", "3,4", "4,2", "4,3", "4,4" ]
}, {
id: 91,
floor: 5,
count: 1,
layouts: [ "3,3" ]
}, {
id: 92,
floor: 5,
count: 3,
layouts: [ "3,2", "3,3", "3,4" ]
}, {
id: 93,
floor: 5,
count: 3,
layouts: [ "2,3", "3,3", "4,3" ]
}, {
id: 94,
floor: 5,
count: 5,
layouts: [ "2,3", "3,2", "3,3", "3,4", "4,3" ]
}, {
id: 95,
floor: 5,
count: 4,
layouts: [ "2,3", "3,2", "3,4", "4,3" ]
}, {
id: 96,
floor: 5,
count: 8,
layouts: [ "1,3", "2,3", "3,1", "3,2", "3,4", "3,5", "4,3", "5,3" ]
}, {
id: 97,
floor: 5,
count: 9,
layouts: [ "1,4", "1,5", "2,4", "2,5", "3,3", "4,1", "4,2", "5,1", "5,2" ]
}, {
id: 98,
floor: 5,
count: 9,
layouts: [ "1,1", "1,2", "2,1", "2,2", "3,3", "4,4", "4,5", "5,4", "5,5" ]
}, {
id: 99,
floor: 5,
count: 13,
layouts: [ "1,1", "1,2", "2,1", "2,2", "3,1", "3,2", "3,3", "3,4", "3,5", "4,4", "4,5", "5,4", "5,5" ]
}, {
id: 100,
floor: 5,
count: 13,
layouts: [ "1,4", "1,5", "2,4", "2,5", "3,1", "3,2", "3,3", "3,4", "3,5", "4,1", "4,2", "5,1", "5,2" ]
}, {
id: 101,
floor: 5,
count: 13,
layouts: [ "1,1", "1,2", "1,3", "2,1", "2,2", "2,3", "3,3", "4,3", "4,4", "4,5", "5,3", "5,4", "5,5" ]
}, {
id: 102,
floor: 5,
count: 13,
layouts: [ "1,3", "1,4", "1,5", "2,3", "2,4", "2,5", "3,3", "4,1", "4,2", "4,3", "5,1", "5,2", "5,3" ]
}, {
id: 103,
floor: 5,
count: 16,
layouts: [ "1,2", "1,3", "1,4", "1,5", "2,2", "2,3", "2,4", "2,5", "3,2", "3,3", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5" ]
}, {
id: 104,
floor: 5,
count: 16,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,1", "2,2", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4", "4,1", "4,2", "4,3", "4,4" ]
}, {
id: 105,
floor: 5,
count: 16,
layouts: [ "2,1", "2,2", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4", "4,1", "4,2", "4,3", "4,4", "5,1", "5,2", "5,3", "5,4" ]
}, {
id: 106,
floor: 5,
count: 16,
layouts: [ "2,2", "2,3", "2,4", "2,5", "3,2", "3,3", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 107,
floor: 6,
count: 2,
layouts: [ "2,2", "2,3" ]
}, {
id: 108,
floor: 6,
count: 2,
layouts: [ "3,2", "3,3" ]
}, {
id: 109,
floor: 6,
count: 2,
layouts: [ "2,2", "3,2" ]
}, {
id: 110,
floor: 6,
count: 2,
layouts: [ "2,3", "3,3" ]
}, {
id: 111,
floor: 6,
count: 3,
layouts: [ "2,2", "2,3", "3,2" ]
}, {
id: 112,
floor: 6,
count: 3,
layouts: [ "2,3", "3,2", "3,3" ]
}, {
id: 113,
floor: 6,
count: 8,
layouts: [ "1,2", "1,3", "2,2", "2,3", "3,2", "3,3", "4,2", "4,3" ]
}, {
id: 114,
floor: 6,
count: 8,
layouts: [ "2,1", "2,2", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4" ]
}, {
id: 115,
floor: 6,
count: 12,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,1", "2,2", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4" ]
}, {
id: 116,
floor: 6,
count: 16,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,1", "2,2", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4", "4,1", "4,2", "4,3", "4,4" ]
}, {
id: 117,
floor: 6,
count: 9,
layouts: [ "1,2", "1,3", "1,4", "2,2", "2,3", "2,4", "3,2", "3,3", "3,4" ]
}, {
id: 118,
floor: 6,
count: 9,
layouts: [ "2,1", "2,2", "2,3", "3,1", "3,2", "3,3", "4,1", "4,2", "4,3" ]
}, {
id: 119,
floor: 6,
count: 9,
layouts: [ "2,2", "2,3", "2,4", "3,2", "3,3", "3,4", "4,2", "4,3", "4,4" ]
}, {
id: 120,
floor: 6,
count: 7,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,4", "3,4", "4,4" ]
}, {
id: 121,
floor: 6,
count: 7,
layouts: [ "1,1", "2,1", "3,1", "4,1", "4,2", "4,3", "4,4" ]
}, {
id: 122,
floor: 6,
count: 7,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,1", "3,1", "4,1" ]
}, {
id: 123,
floor: 6,
count: 7,
layouts: [ "1,4", "2,4", "3,4", "4,1", "4,2", "4,3", "4,4" ]
}, {
id: 124,
floor: 6,
count: 10,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,2", "2,3", "2,4", "3,3", "3,4", "4,4" ]
}, {
id: 125,
floor: 6,
count: 10,
layouts: [ "1,1", "2,1", "2,2", "3,1", "3,2", "3,3", "4,1", "4,2", "4,3", "4,4" ]
}, {
id: 126,
floor: 6,
count: 10,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,1", "2,2", "2,3", "3,1", "3,2", "4,1" ]
}, {
id: 127,
floor: 6,
count: 10,
layouts: [ "1,4", "2,3", "2,4", "3,2", "3,3", "3,4", "4,1", "4,2", "4,3", "4,4" ]
}, {
id: 128,
floor: 1,
count: 28,
layouts: [ "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,2", "5,9", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,2", "7,9", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9" ]
}, {
id: 129,
floor: 2,
count: 21,
layouts: [ "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8" ]
}, {
id: 130,
floor: 3,
count: 18,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7" ]
}, {
id: 131,
floor: 4,
count: 5,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6" ]
}, {
id: 132,
floor: 3,
count: 25,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "3,2", "3,3", "3,4", "3,5", "3,6", "4,2", "4,3", "4,4", "4,5", "4,6", "5,2", "5,3", "5,4", "5,5", "5,6", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 133,
floor: 4,
count: 16,
layouts: [ "2,2", "2,3", "2,4", "2,5", "3,2", "3,3", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 134,
floor: 5,
count: 9,
layouts: [ "2,2", "2,3", "2,4", "3,2", "3,3", "3,4", "4,2", "4,3", "4,4" ]
}, {
id: 135,
floor: 6,
count: 4,
layouts: [ "2,2", "2,3", "3,2", "3,3" ]
}, {
id: 136,
floor: 3,
count: 17,
layouts: [ "2,2", "2,3", "2,5", "2,6", "3,2", "3,3", "3,5", "3,6", "4,4", "5,2", "5,3", "5,5", "5,6", "6,2", "6,3", "6,5", "6,6" ]
}, {
id: 137,
floor: 4,
count: 12,
layouts: [ "2,2", "2,3", "2,4", "2,5", "3,2", "3,5", "4,2", "4,5", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 138,
floor: 5,
count: 9,
layouts: [ "2,2", "2,3", "2,4", "3,2", "3,3", "3,4", "4,2", "4,3", "4,4" ]
}, {
id: 139,
floor: 6,
count: 4,
layouts: [ "2,2", "2,3", "3,2", "3,3" ]
}, {
id: 140,
floor: 3,
count: 30,
layouts: [ "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7" ]
}, {
id: 141,
floor: 4,
count: 16,
layouts: [ "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,1", "3,6", "4,1", "4,6", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6" ]
}, {
id: 142,
floor: 5,
count: 14,
layouts: [ "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,2", "3,4", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5" ]
}, {
id: 143,
floor: 1,
count: 33,
layouts: [ "2,2", "2,3", "2,7", "2,8", "3,2", "3,3", "3,4", "3,6", "3,7", "3,8", "4,3", "4,4", "4,5", "4,6", "4,7", "5,4", "5,5", "5,6", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,3", "7,4", "7,6", "7,7", "7,8", "8,2", "8,3", "8,7", "8,8" ]
}, {
id: 144,
floor: 2,
count: 28,
layouts: [ "2,2", "2,3", "2,6", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,3", "4,4", "4,5", "4,6", "5,3", "5,4", "5,5", "5,6", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,3", "7,6", "7,7" ]
}, {
id: 145,
floor: 3,
count: 11,
layouts: [ "1,1", "2,2", "2,6", "3,3", "3,5", "4,4", "5,3", "5,5", "6,2", "6,6", "7,7" ]
}, {
id: 146,
floor: 1,
count: 37,
layouts: [ "1,5", "2,4", "2,5", "2,6", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,5", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,2", "6,3", "6,5", "6,7", "6,8", "7,3", "7,4", "7,5", "7,6", "7,7", "8,4", "8,5", "8,6", "9,5" ]
}, {
id: 147,
floor: 2,
count: 20,
layouts: [ "2,4", "2,5", "3,3", "3,4", "3,5", "3,6", "4,2", "4,3", "4,6", "4,7", "5,2", "5,3", "5,6", "5,7", "6,3", "6,4", "6,5", "6,6", "7,4", "7,5" ]
}, {
id: 148,
floor: 1,
count: 51,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,3", "3,4", "3,5", "3,6", "3,7", "4,4", "4,5", "4,6", "5,4", "5,5", "5,6", "6,4", "6,5", "6,6", "7,3", "7,4", "7,5", "7,6", "7,7", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8", "9,9" ]
}, {
id: 149,
floor: 2,
count: 40,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,3", "3,4", "3,5", "3,6", "4,4", "4,5", "5,4", "5,5", "6,3", "6,4", "6,5", "6,6", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 150,
floor: 3,
count: 17,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "2,4", "3,4", "4,3", "4,4", "4,5", "5,4", "6,4", "7,2", "7,3", "7,4", "7,5", "7,6" ]
}, {
id: 151,
floor: 1,
count: 33,
layouts: [ "2,4", "2,6", "3,3", "3,4", "3,6", "3,7", "4,2", "4,3", "4,4", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,2", "6,3", "6,4", "6,6", "6,7", "6,8", "7,3", "7,4", "7,6", "7,7", "8,4", "8,6" ]
}, {
id: 152,
floor: 2,
count: 24,
layouts: [ "2,3", "2,6", "3,2", "3,3", "3,6", "3,7", "4,1", "4,2", "4,3", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,6", "5,7", "5,8", "6,2", "6,3", "6,6", "6,7", "7,3", "7,6" ]
}, {
id: 153,
floor: 1,
count: 77,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8" ]
}, {
id: 154,
floor: 1,
count: 71,
layouts: [ "1,2", "1,4", "1,6", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,4", "9,6", "9,8" ]
}, {
id: 155,
floor: 1,
count: 69,
layouts: [ "1,2", "1,5", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,5", "9,8" ]
}, {
id: 156,
floor: 1,
count: 71,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8" ]
}, {
id: 157,
floor: 1,
count: 69,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8" ]
}, {
id: 158,
floor: 1,
count: 73,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "9,1", "9,3", "9,5", "9,7", "9,9" ]
}, {
id: 159,
floor: 1,
count: 72,
layouts: [ "1,2", "1,4", "1,6", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8" ]
}, {
id: 160,
floor: 1,
count: 73,
layouts: [ "1,1", "1,3", "1,5", "1,7", "1,9", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8", "9,9" ]
}, {
id: 161,
floor: 1,
count: 72,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,4", "9,6", "9,8" ]
}, {
id: 162,
floor: 1,
count: 65,
layouts: [ "1,3", "1,4", "1,6", "1,7", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "9,3", "9,4", "9,6", "9,7" ]
}, {
id: 163,
floor: 1,
count: 60,
layouts: [ "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "9,3", "9,4", "9,5", "9,6", "9,7" ]
}, {
id: 164,
floor: 1,
count: 63,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,3", "6,4", "6,5", "6,6", "6,7", "7,4", "7,5", "7,6", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8" ]
}, {
id: 165,
floor: 1,
count: 61,
layouts: [ "1,2", "1,3", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,3", "9,7", "9,8" ]
}, {
id: 166,
floor: 1,
count: 59,
layouts: [ "1,2", "1,5", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,5", "9,8" ]
}, {
id: 167,
floor: 1,
count: 66,
layouts: [ "1,1", "1,9", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8", "9,9" ]
}, {
id: 168,
floor: 1,
count: 70,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,1", "9,9" ]
}, {
id: 169,
floor: 1,
count: 71,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,3", "6,4", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8", "9,9" ]
}, {
id: 170,
floor: 1,
count: 77,
layouts: [ "1,1", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,9" ]
}, {
id: 171,
floor: 1,
count: 70,
layouts: [ "1,2", "1,3", "1,5", "1,6", "1,7", "1,8", "1,9", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,2", "9,3", "9,5", "9,6", "9,7", "9,8", "9,9" ]
}, {
id: 172,
floor: 1,
count: 72,
layouts: [ "1,4", "1,5", "1,6", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "9,1", "9,2", "9,3", "9,7", "9,8", "9,9" ]
}, {
id: 173,
floor: 2,
count: 57,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,3", "8,5", "8,7" ]
}, {
id: 174,
floor: 2,
count: 56,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "8,2", "8,4", "8,6", "8,8" ]
}, {
id: 175,
floor: 2,
count: 57,
layouts: [ "1,1", "1,3", "1,5", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 176,
floor: 2,
count: 56,
layouts: [ "1,2", "1,4", "1,6", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7" ]
}, {
id: 177,
floor: 2,
count: 57,
layouts: [ "1,2", "1,4", "1,6", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 178,
floor: 2,
count: 56,
layouts: [ "1,1", "1,3", "1,5", "1,7", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 179,
floor: 2,
count: 57,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,4", "8,6", "8,8" ]
}, {
id: 180,
floor: 2,
count: 56,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,3", "8,5", "8,7" ]
}, {
id: 181,
floor: 2,
count: 56,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 182,
floor: 2,
count: 56,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7" ]
}, {
id: 183,
floor: 2,
count: 56,
layouts: [ "1,1", "1,2", "1,3", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 184,
floor: 2,
count: 60,
layouts: [ "1,1", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,8" ]
}, {
id: 185,
floor: 2,
count: 61,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "8,1", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 186,
floor: 2,
count: 50,
layouts: [ "1,2", "1,3", "1,5", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,5", "4,6", "4,8", "5,2", "5,3", "5,5", "5,6", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,3", "8,5", "8,8" ]
}, {
id: 187,
floor: 2,
count: 33,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,1", "2,2", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,4", "5,5", "5,6", "5,7", "6,4", "6,5", "6,6", "6,7", "7,4", "7,5", "7,6", "7,7", "8,4" ]
}, {
id: 188,
floor: 2,
count: 41,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,4", "2,5", "2,6", "2,7", "2,8", "3,4", "3,5", "3,6", "3,7", "3,8", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,3", "6,4", "6,8", "7,2", "7,3", "7,4", "7,8", "8,4", "8,8" ]
}, {
id: 189,
floor: 2,
count: 50,
layouts: [ "1,1", "1,3", "1,6", "1,8", "2,1", "2,3", "2,4", "2,5", "2,6", "2,8", "3,1", "3,3", "3,4", "3,5", "3,6", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 190,
floor: 2,
count: 50,
layouts: [ "1,2", "1,4", "1,5", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,6", "7,7", "7,8", "8,1", "8,3", "8,6", "8,8" ]
}, {
id: 191,
floor: 2,
count: 52,
layouts: [ "1,1", "1,3", "1,6", "1,8", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,1", "4,2", "4,3", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,6", "5,7", "5,8", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "8,2", "8,4", "8,5", "8,7" ]
}, {
id: 192,
floor: 2,
count: 44,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "2,1", "2,2", "2,7", "2,8", "3,1", "3,3", "3,4", "3,5", "3,6", "3,8", "4,1", "4,3", "4,6", "4,8", "5,1", "5,3", "5,6", "5,8", "6,1", "6,3", "6,4", "6,5", "6,6", "6,8", "7,1", "7,2", "7,7", "7,8", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 193,
floor: 3,
count: 45,
layouts: [ "1,2", "1,3", "1,5", "1,6", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,5", "7,6" ]
}, {
id: 194,
floor: 3,
count: 36,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,6", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,6", "4,2", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,5", "6,6", "6,7", "7,2", "7,5", "7,6", "7,7" ]
}, {
id: 195,
floor: 3,
count: 25,
layouts: [ "1,2", "1,6", "2,1", "2,2", "2,3", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "4,6", "5,3", "5,4", "5,5", "6,4", "7,4" ]
}, {
id: 196,
floor: 3,
count: 37,
layouts: [ "1,2", "1,6", "2,1", "2,2", "2,3", "2,5", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,5", "6,6", "7,3", "7,4", "7,5" ]
}, {
id: 197,
floor: 3,
count: 24,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,2", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,4", "4,3", "4,4", "4,5", "5,3", "5,5", "6,3", "6,4", "6,5", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 198,
floor: 3,
count: 41,
layouts: [ "1,1", "1,4", "1,5", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,2", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,4", "7,5", "7,7" ]
}, {
id: 199,
floor: 3,
count: 30,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,4", "3,6", "4,2", "4,6", "5,2", "5,3", "5,4", "5,5", "5,6", "6,2", "6,3", "6,5", "6,6", "7,2", "7,6" ]
}, {
id: 200,
floor: 3,
count: 34,
layouts: [ "1,1", "1,5", "1,6", "1,7", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "5,1", "5,4", "5,5", "5,6", "5,7", "6,1", "6,4", "6,5", "6,6", "6,7", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 201,
floor: 3,
count: 36,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,5", "4,6", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 202,
floor: 3,
count: 32,
layouts: [ "1,1", "1,2", "1,3", "1,5", "1,6", "1,7", "2,1", "2,3", "2,5", "2,7", "3,1", "3,3", "3,5", "3,7", "4,1", "4,2", "4,3", "4,5", "4,6", "4,7", "5,2", "5,3", "5,4", "5,5", "5,6", "6,2", "6,6", "7,2", "7,3", "7,4", "7,5", "7,6" ]
}, {
id: 203,
floor: 3,
count: 30,
layouts: [ "1,2", "1,6", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,3", "3,5", "4,3", "4,4", "4,5", "5,1", "5,2", "5,3", "5,5", "5,6", "5,7", "6,1", "6,3", "6,5", "6,7", "7,1", "7,2", "7,3", "7,5", "7,6", "7,7" ]
}, {
id: 204,
floor: 3,
count: 29,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "2,1", "2,6", "2,7", "3,1", "3,3", "3,4", "3,6", "4,1", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "6,2", "6,3", "6,5", "6,6", "7,2", "7,4", "7,6" ]
}, {
id: 205,
floor: 3,
count: 42,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,2", "2,3", "2,6", "2,7", "3,1", "3,2", "3,3", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6" ]
}, {
id: 206,
floor: 3,
count: 29,
layouts: [ "1,2", "1,4", "1,6", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,6", "4,1", "4,2", "4,4", "4,6", "4,7", "5,2", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,4", "7,6" ]
}, {
id: 207,
floor: 3,
count: 35,
layouts: [ "1,1", "1,4", "1,7", "2,1", "2,2", "2,4", "2,6", "2,7", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,6", "6,7", "7,1", "7,7" ]
}, {
id: 208,
floor: 3,
count: 26,
layouts: [ "1,1", "1,5", "2,1", "2,2", "2,5", "2,6", "2,7", "3,2", "3,3", "3,5", "4,3", "4,4", "4,5", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,3", "6,5", "6,6", "7,3", "7,6", "7,7" ]
}, {
id: 209,
floor: 3,
count: 31,
layouts: [ "1,1", "1,3", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,1", "3,3", "3,6", "4,1", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,3", "5,6", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,6" ]
}, {
id: 210,
floor: 3,
count: 37,
layouts: [ "1,2", "1,4", "1,6", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,4", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,2", "6,3", "6,4", "6,6", "7,1", "7,2", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 211,
floor: 3,
count: 45,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,4", "2,5", "2,6", "2,7", "3,1", "3,4", "3,5", "3,6", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 212,
floor: 3,
count: 35,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,4", "2,5", "2,7", "3,1", "3,4", "3,5", "3,7", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,7", "6,1", "6,2", "6,7", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 213,
floor: 4,
count: 25,
layouts: [ "1,2", "1,3", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,2", "3,3", "3,4", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,2", "5,3", "5,5", "6,2", "6,3", "6,5" ]
}, {
id: 214,
floor: 4,
count: 28,
layouts: [ "1,3", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,2", "3,3", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,2", "5,3", "5,5", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 215,
floor: 4,
count: 21,
layouts: [ "1,3", "1,4", "1,5", "1,6", "2,3", "2,6", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,4", "4,5", "5,1", "5,4", "6,1", "6,4", "6,5" ]
}, {
id: 216,
floor: 4,
count: 25,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "2,1", "2,3", "2,5", "3,1", "3,3", "3,4", "3,5", "3,6", "4,1", "4,3", "4,4", "4,6", "5,1", "5,2", "5,3", "5,4", "5,6", "6,4", "6,5", "6,6" ]
}, {
id: 217,
floor: 4,
count: 23,
layouts: [ "1,2", "1,5", "2,1", "2,2", "2,3", "2,5", "2,6", "3,2", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5", "5,2", "5,5", "5,6", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 218,
floor: 4,
count: 22,
layouts: [ "1,1", "1,2", "1,3", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,1", "3,2", "3,3", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,5", "6,5" ]
}, {
id: 219,
floor: 4,
count: 23,
layouts: [ "1,4", "1,5", "2,1", "2,2", "2,3", "2,4", "2,6", "3,1", "3,2", "3,3", "3,4", "3,6", "4,1", "4,4", "4,6", "5,1", "5,4", "5,6", "6,1", "6,2", "6,3", "6,4", "6,6" ]
}, {
id: 220,
floor: 4,
count: 20,
layouts: [ "1,3", "1,5", "2,3", "2,5", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "5,1", "5,4", "5,5", "5,6", "6,4", "6,5", "6,6" ]
}, {
id: 221,
floor: 4,
count: 20,
layouts: [ "1,3", "2,4", "2,5", "2,6", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,1", "5,2", "5,3", "6,4" ]
}, {
id: 222,
floor: 4,
count: 28,
layouts: [ "1,2", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "3,1", "3,2", "3,5", "3,6", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "5,2", "5,3", "5,4", "5,5", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 223,
floor: 5,
count: 11,
layouts: [ "1,2", "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,3", "4,1", "4,3", "5,3" ]
}, {
id: 224,
floor: 5,
count: 11,
layouts: [ "2,1", "2,2", "2,3", "2,4", "3,2", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5" ]
}, {
id: 225,
floor: 5,
count: 19,
layouts: [ "1,2", "1,3", "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,2", "3,4", "3,5", "4,1", "4,2", "4,4", "4,5", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 226,
floor: 5,
count: 17,
layouts: [ "1,4", "1,5", "2,2", "2,3", "2,4", "2,5", "3,1", "3,2", "3,4", "3,5", "4,2", "4,4", "4,5", "5,1", "5,2", "5,3", "5,5" ]
}, {
id: 227,
floor: 5,
count: 17,
layouts: [ "1,2", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,4", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5", "5,3", "5,5" ]
}, {
id: 228,
floor: 5,
count: 13,
layouts: [ "1,1", "1,2", "1,3", "2,1", "3,1", "3,2", "3,3", "3,4", "3,5", "4,1", "5,1", "5,2", "5,3" ]
}, {
id: 229,
floor: 5,
count: 13,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "2,2", "3,2", "3,3", "3,4", "3,5", "4,2", "5,1", "5,2" ]
}, {
id: 230,
floor: 5,
count: 17,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "2,1", "2,3", "3,1", "3,2", "3,4", "4,1", "4,4", "4,5", "5,1", "5,2", "5,3", "5,4" ]
}, {
id: 231,
floor: 5,
count: 16,
layouts: [ "1,2", "1,4", "1,5", "2,4", "2,5", "3,1", "3,2", "3,3", "3,4", "3,5", "4,3", "4,5", "5,1", "5,3", "5,4", "5,5" ]
}, {
id: 232,
floor: 5,
count: 17,
layouts: [ "1,3", "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,2", "3,4", "3,5", "4,2", "4,3", "4,4", "5,1", "5,2", "5,4", "5,5" ]
}, {
id: 233,
floor: 6,
count: 4,
layouts: [ "1,1", "2,1", "3,1", "4,1" ]
}, {
id: 234,
floor: 6,
count: 4,
layouts: [ "1,2", "2,2", "3,2", "4,2" ]
}, {
id: 235,
floor: 6,
count: 4,
layouts: [ "1,3", "2,3", "3,3", "4,3" ]
}, {
id: 236,
floor: 6,
count: 4,
layouts: [ "1,4", "2,4", "3,4", "4,4" ]
}, {
id: 237,
floor: 6,
count: 4,
layouts: [ "1,1", "1,2", "1,3", "1,4" ]
}, {
id: 238,
floor: 6,
count: 4,
layouts: [ "2,1", "2,2", "2,3", "2,4" ]
}, {
id: 239,
floor: 6,
count: 4,
layouts: [ "3,1", "3,2", "3,3", "3,4" ]
}, {
id: 240,
floor: 6,
count: 5,
layouts: [ "1,1", "2,2", "3,2", "3,3", "4,4" ]
}, {
id: 241,
floor: 6,
count: 5,
layouts: [ "1,1", "2,2", "2,3", "3,3", "4,4" ]
}, {
id: 242,
floor: 6,
count: 5,
layouts: [ "1,1", "2,2", "2,3", "3,2", "3,3" ]
}, {
id: 243,
floor: 6,
count: 6,
layouts: [ "2,2", "2,3", "3,2", "3,3", "4,1", "4,4" ]
}, {
id: 244,
floor: 6,
count: 6,
layouts: [ "1,3", "2,2", "2,3", "3,2", "3,3", "4,2" ]
}, {
id: 245,
floor: 1,
count: 55,
layouts: [ "1,3", "1,4", "1,5", "1,6", "1,7", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,7", "3,8", "4,1", "4,2", "4,3", "4,5", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,5", "6,7", "6,8", "6,9", "7,2", "7,3", "7,7", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "9,3", "9,4", "9,5", "9,6", "9,7" ]
}, {
id: 246,
floor: 1,
count: 57,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9", "2,1", "2,2", "2,5", "2,8", "2,9", "3,1", "3,3", "3,5", "3,7", "3,9", "4,1", "4,4", "4,5", "4,6", "4,9", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,1", "6,4", "6,5", "6,6", "6,9", "7,1", "7,3", "7,5", "7,7", "7,9", "8,1", "8,2", "8,5", "8,8", "8,9", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8", "9,9" ]
}, {
id: 247,
floor: 1,
count: 49,
layouts: [ "1,1", "1,2", "1,4", "1,5", "1,6", "1,8", "1,9", "2,1", "2,2", "2,3", "2,7", "2,8", "2,9", "3,2", "3,4", "3,5", "3,6", "3,8", "4,1", "4,4", "4,5", "4,6", "4,9", "5,1", "5,4", "5,5", "5,6", "5,9", "6,2", "6,4", "6,5", "6,6", "6,8", "7,3", "7,7", "8,1", "8,2", "8,4", "8,5", "8,6", "8,8", "8,9", "9,1", "9,2", "9,4", "9,5", "9,6", "9,8", "9,9" ]
}, {
id: 248,
floor: 1,
count: 56,
layouts: [ "1,1", "1,2", "1,3", "1,4", "2,1", "2,2", "2,3", "2,4", "2,6", "2,7", "2,8", "2,9", "3,1", "3,2", "3,3", "3,4", "3,6", "3,7", "3,8", "3,9", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,4", "5,6", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "7,1", "7,2", "7,3", "7,4", "7,6", "7,7", "7,8", "7,9", "8,1", "8,2", "8,3", "8,4", "8,6", "8,7", "8,8", "8,9", "9,6", "9,7", "9,8", "9,9" ]
}, {
id: 249,
floor: 1,
count: 55,
layouts: [ "1,2", "1,3", "1,4", "1,6", "1,7", "1,8", "2,2", "2,3", "2,4", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,6", "3,7", "3,8", "4,3", "4,4", "4,5", "4,6", "4,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "6,3", "6,4", "6,5", "6,6", "6,7", "7,2", "7,3", "7,4", "7,6", "7,7", "7,8", "8,2", "8,3", "8,4", "8,6", "8,7", "8,8", "9,2", "9,3", "9,4", "9,6", "9,7", "9,8" ]
}, {
id: 250,
floor: 1,
count: 62,
layouts: [ "1,1", "1,3", "1,4", "1,6", "1,7", "1,9", "2,1", "2,2", "2,4", "2,5", "2,6", "2,8", "2,9", "3,1", "3,2", "3,3", "3,7", "3,8", "3,9", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "5,1", "5,2", "5,3", "5,7", "5,8", "5,9", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "7,1", "7,2", "7,3", "7,7", "7,8", "7,9", "8,1", "8,2", "8,4", "8,5", "8,6", "8,8", "8,9", "9,1", "9,3", "9,4", "9,6", "9,7", "9,9" ]
}, {
id: 251,
floor: 2,
count: 36,
layouts: [ "1,1", "1,5", "1,6", "1,7", "1,8", "2,2", "2,3", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "4,2", "4,3", "4,4", "4,6", "4,7", "5,2", "5,3", "5,5", "5,6", "5,7", "6,6", "6,7", "7,1", "7,2", "7,3", "7,4", "7,6", "7,7", "8,1", "8,2", "8,3", "8,4", "8,8" ]
}, {
id: 252,
floor: 2,
count: 34,
layouts: [ "1,2", "1,5", "1,6", "1,7", "2,2", "3,2", "3,4", "3,7", "3,8", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "6,2", "6,4", "6,7", "6,8", "7,2", "8,2", "8,5", "8,6", "8,7" ]
}, {
id: 253,
floor: 2,
count: 42,
layouts: [ "1,3", "1,4", "1,5", "1,6", "2,3", "2,4", "2,5", "2,6", "2,8", "3,3", "3,4", "3,5", "3,6", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "6,1", "6,3", "6,4", "6,5", "6,6", "7,1", "7,3", "7,4", "7,5", "7,6", "8,3", "8,4", "8,5", "8,6" ]
}, {
id: 254,
floor: 2,
count: 36,
layouts: [ "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,1", "2,8", "3,1", "3,3", "3,4", "3,5", "3,6", "3,8", "4,1", "4,3", "4,6", "4,8", "5,1", "5,3", "5,6", "5,8", "6,1", "6,3", "6,4", "6,5", "6,6", "6,8", "7,1", "7,8", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7" ]
}, {
id: 255,
floor: 2,
count: 35,
layouts: [ "1,1", "1,4", "1,5", "1,7", "1,8", "2,3", "2,4", "2,5", "2,8", "3,2", "3,3", "3,6", "4,1", "4,2", "4,4", "4,5", "4,7", "4,8", "5,2", "5,4", "5,5", "5,7", "5,8", "6,3", "6,6", "6,7", "7,1", "7,4", "7,5", "7,6", "8,1", "8,2", "8,4", "8,5", "8,8" ]
}, {
id: 256,
floor: 2,
count: 42,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,7", "1,8", "2,1", "2,2", "2,3", "2,6", "2,7", "2,8", "3,1", "3,2", "3,5", "3,6", "3,7", "4,1", "4,4", "4,5", "4,6", "5,3", "5,4", "5,5", "5,8", "6,2", "6,3", "6,4", "6,7", "6,8", "7,1", "7,2", "7,3", "7,6", "7,7", "7,8", "8,1", "8,2", "8,5", "8,6", "8,7", "8,8" ]
}, {
id: 257,
floor: 3,
count: 26,
layouts: [ "1,1", "1,2", "1,3", "1,7", "2,1", "2,5", "2,6", "2,7", "3,1", "3,3", "3,7", "4,1", "4,3", "4,5", "4,7", "5,1", "5,5", "5,7", "6,1", "6,2", "6,3", "6,7", "7,1", "7,5", "7,6", "7,7" ]
}, {
id: 258,
floor: 3,
count: 32,
layouts: [ "1,1", "1,2", "1,3", "1,4", "1,6", "1,7", "2,2", "2,3", "2,6", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "6,1", "6,2", "6,5", "6,6", "7,1", "7,2", "7,4", "7,5", "7,6", "7,7" ]
}, {
id: 259,
floor: 3,
count: 21,
layouts: [ "1,1", "1,7", "2,2", "2,5", "2,6", "3,2", "3,3", "3,4", "3,6", "4,2", "4,4", "4,6", "5,2", "5,4", "5,5", "5,6", "6,2", "6,3", "6,6", "7,1", "7,7" ]
}, {
id: 260,
floor: 4,
count: 25,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "3,2", "3,3", "3,4", "3,5", "3,6", "4,2", "4,3", "4,4", "4,5", "4,6", "5,2", "5,3", "5,4", "5,5", "5,6", "6,2", "6,3", "6,4", "6,5", "6,6" ]
}, {
id: 261,
floor: 5,
count: 16,
layouts: [ "2,2", "2,3", "2,4", "2,5", "3,2", "3,3", "3,4", "3,5", "4,2", "4,3", "4,4", "4,5", "5,2", "5,3", "5,4", "5,5" ]
}, {
id: 262,
floor: 6,
count: 1,
layouts: [ "2,2" ]
}, {
id: 263,
floor: 4,
count: 28,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8" ]
}, {
id: 264,
floor: 5,
count: 18,
layouts: [ "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7" ]
}, {
id: 265,
floor: 6,
count: 8,
layouts: [ "2,2", "2,3", "2,5", "2,6", "3,2", "3,3", "3,5", "3,6" ]
}, {
id: 266,
floor: 1,
count: 15,
layouts: [ "2,0", "2,1", "2,2", "2,3", "2,4", "1,0", "1,1", "1,2", "1,3", "1,4", "0,0", "0,1", "0,2", "0,3", "0,4" ]
}, {
id: 267,
floor: 2,
count: 12,
layouts: [ "2,0", "2,1", "2,2", "2,3", "1,0", "1,1", "1,2", "1,3", "0,0", "0,1", "0,2", "0,3" ]
}, {
id: 268,
floor: 1,
count: 27,
layouts: [ "3,0", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "2,0", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "1,0", "1,1", "1,2", "1,4", "1,5", "1,6", "0,0", "0,1", "0,2", "0,3", "0,4", "0,5", "0,6" ]
}, {
id: 269,
floor: 2,
count: 18,
layouts: [ "2,0", "2,1", "2,2", "2,3", "2,4", "2,5", "1,0", "1,1", "1,2", "1,3", "1,4", "1,5", "0,0", "0,1", "0,2", "0,3", "0,4", "0,5" ]
}, {
id: 270,
floor: 1,
count: 37,
layouts: [ "5,1", "5,2", "5,3", "5,4", "5,5", "4,0", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "3,0", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "2,0", "2,1", "2,2", "2,4", "2,5", "2,6", "1,0", "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "0,1", "0,2", "0,3", "0,4", "0,5" ]
}, {
id: 271,
floor: 2,
count: 26,
layouts: [ "4,1", "4,2", "4,3", "4,4", "3,0", "3,1", "3,2", "3,3", "3,4", "3,5", "2,0", "2,1", "2,2", "2,3", "2,4", "2,5", "1,0", "1,1", "1,2", "1,3", "1,4", "1,5", "0,1", "0,2", "0,3", "0,4" ]
} ];
};
t.prototype.getLevelData = function(t) {
return this.levels[t];
};
t.prototype.getFloorData = function(t) {
return this.floors[t];
};
t.prototype.getTypes = function(t, o) {
for (var e = [], l = 0; t > 0; ) {
var n = l % o;
e.push(n, n, n);
t -= 3;
l++;
}
return e;
};
t.prototype.parse = function(t) {
var o = JSON.parse(t), e = new r();
e.layouts = [];
var i = 0;
e.allTile = [];
for (var c = 0; c < o.length - 1; c++) {
var s = new n();
s.tiles = o[c][3];
s.index = o[c][0];
s.alignW = o[c][1];
s.alignH = o[c][2];
e.layouts.push(s);
e.allTile[c] = l.default.initArray2(20, 20, 0);
for (var u = 0, a = 0, d = 999, f = 999, p = 0, y = s.tiles; p < y.length; p++) {
var h = y[p];
i++;
h[0] > u && (u = h[0]);
h[0] < d && (d = h[0]);
h[1] > a && (a = h[1]);
h[1] < f && (f = h[1]);
e.allTile[c][h[0]][h[1]] = 1;
}
s.w = a - f + 1;
s.h = u - d + 1;
s.startRow = d;
s.startCol = f;
}
e.typeCount = o[o.length - 1];
e.typeCount;
for (var v = [], _ = 0; i > 0; ) {
var g = _ % e.typeCount;
v.push(g, g, g);
i -= 3;
_++;
}
e.types = v;
return e;
};
return t;
}();
e.default = i;
cc._RF.pop();
}, {
"./game_helpers": "game_helpers"
} ],
game_main: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "599belSsZ1Ix5PGw4LIIHYf", "game_main");
var l, n = this && this.__extends || (l = function(t, o) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
l(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), r = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = t("./TileBlock"), c = t("./game_config_dyn"), s = t("./game_helpers"), u = t("./global_model"), a = t("./game_core"), d = t("./game_constants"), f = t("./adMgr"), p = cc._decorator, y = p.ccclass, h = p.property, v = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.tileContainer = null;
o.targetNode = null;
o.tileList = [];
o.matchList = [];
o.recordList = [];
o.lock = !1;
o.level_txt = null;
o.txt_undo = null;
o.txt_shuffle = null;
o.txt_hint = null;
o.txt_put3 = null;
o.node_progress = null;
o.node_star1 = null;
o.node_star2 = null;
o.node_star3 = null;
o.countDown = !1;
o.node_warning = null;
o.result_view = null;
o.result_view_win = null;
o.result_view_lose = null;
o.help_view = null;
o.levels_view = null;
o.minZindex = 1e4;
o.progress_levelBase = .001;
o.progress_levelBase_org = 2e-4;
o.removeList = [];
return o;
}
o.prototype.onLoad = function() {
if (cc.sys.platform == cc.sys.IPAD) {
cc.find("Canvas").getComponent(cc.Canvas).fitHeight = !0;
cc.find("Canvas").getComponent(cc.Canvas).fitWidth = !0;
}
cc.systemEvent.on(d.default.select_level_clicked, this.select_level_clicked, this);
};
o.prototype.playSFX = function() {};
o.prototype.playGamePass = function() {};
o.prototype.playGameFailed = function() {};
o.prototype.select_level_clicked = function(t) {
u.default.game.selectedLevel = t;
this.go_game_reinit();
};
o.prototype.start = function() {
this.help_view.active = !0;
this.game_reinit();
};
o.prototype.game_reinit = function() {
this.recycle();
this.node_warning.active = !1;
this.unscheduleAllCallbacks();
this.tileList = [];
this.matchList = [];
this.recordList = [];
this.lvData = null;
this.lock = !1;
this.countDown = !1;
this.load_levels_data();
this.progress_levelBase = this.progress_levelBase_org * u.default.game.selectedLevel;
this.progress_levelBase = Math.max(this.progress_levelBase, .004);
};
o.prototype.load_levels_data = function() {
this.lvData = c.default.level.getLevelData(u.default.game.selectedLevel);
this.level_txt.string = "" + u.default.game.selectedLevel;
this.node_progress.progress = 1;
this.node_star1.active = this.node_star2.active = this.node_star3.active = !0;
this.updateItemView();
this.create_tiles_block();
};
o.prototype.recycle = function() {
for (var t = 0, o = this.tileList; t < o.length; t++) o[t].recycle();
for (var e = 0, l = this.matchList; e < l.length; e++) l[e].recycle();
};
o.prototype.create_tiles_block = function() {
var t = this;
this.tileContainer.destroyAllChildren();
var o = [ cc.v2(0, 1201), cc.v2(701, 0), cc.v2(0, -1201), cc.v2(-701, 0) ], e = c.default.level.getTypes(this.lvData.count, this.lvData.typeCount);
e = s.default.randomArray(e);
for (var l = 0, n = 999999, r = 999999, u = 0, d = 0, f = 0; f < this.lvData.floorIds.length; f++) for (var p = c.default.level.getFloorData(Number(this.lvData.floorIds[f])).layouts, y = function(o) {
var i = o.split(","), c = Number(i[0]), s = Number(i[1]), p = a.default.pool.get("TileBlock"), y = p.node;
y.parent = h.tileContainer;
y.scale = 1;
h.tileList.push(p);
var v = cc.v2(44 * f, -44 * f);
p.layer = f;
p.row = c;
p.col = s;
p.node.zIndex = h.get___Zindex(c, s, p.layer);
var _ = h.getTilePos(c, s, v);
y.position = _;
p.type = e[l];
y.off(cc.Node.EventType.TOUCH_START);
y.on(cc.Node.EventType.TOUCH_START, function() {
if (!t.lock && !p.dark) {
t.addToMatchList(p);
t.countDown = !0;
}
});
y.x > u && (u = y.x);
y.y > d && (d = y.y);
y.x < n && (n = y.x);
y.y < r && (r = y.y);
l++;
}, h = this, v = 0, _ = p; v < _.length; v++) y(_[v]);
var g = u - n, m = d - r;
this.tileContainer.x = .5 * -g - n;
this.tileContainer.y = (m >> 1) - d + 150;
this.check_All_Block();
for (var w = 0, C = this.tileContainer.children; w < C.length; w++) {
var b = C[w], I = b.getComponent(i.default), O = (f = I.layer, cc.v2(44 * f, -44 * f)), L = this.getTilePos(I.row, I.col, O);
b.position = L;
b.position = cc.v3(L.x + o[f % 4].x, L.y + o[f % 4].y);
cc.tween(b).delay(.2 * f + .1).call(function() {}).to(.25, {
position: L
}, {
easing: "sineOut"
}).start();
}
};
o.prototype.get___Zindex = function(t, o, e) {
return 20 * t + o + 200 * e;
};
o.prototype.check_All_Block = function(t) {
void 0 === t && (t = !1);
for (var o = 0, e = this.tileList; o < e.length; o++) {
var l = e[o];
l.node.zIndex < 1e4 && (this._has_Block(l) ? l.setDark(!0, t) : l.setDark(!1, t));
}
};
o.prototype._has_Block = function(t) {
for (var o = t.node.getBoundingBox(), e = 0, l = this.tileList; e < l.length; e++) {
var n = l[e];
if (n != t && n.layer > t.layer && n.node.getBoundingBox().intersects(o)) return !0;
}
return !1;
};
o.prototype.getTilePos = function(t, o, e) {
return cc.v3(88 * o + e.x, 88 * -t + e.y, 0);
};
o.prototype.addToMatchList = function(t) {
if (this.matchList.length < 7) {
if (-1 != this.matchList.indexOf(t)) return;
t.setDark(!1, !1);
s.default.removeElementFromArray(t, this.tileList);
this.recordList.push(t);
t.node.zIndex = 999;
for (var o = !1, e = this.matchList.length - 1; e >= 0; e--) if (this.matchList[e].type == t.type) {
o = !0;
this.matchList.splice(e + 1, 0, t);
break;
}
o || this.matchList.push(t);
this.setMatchDepth();
this.moveToRightPos();
this.checkRemove();
this.check_All_Block(!0);
this.checkWarning();
this.checkGameResult();
}
};
o.prototype.setMatchDepth = function() {
for (var t = this.matchList.length - 1; t >= 0; t--) this.matchList[t].node.zIndex = t + 999;
};
o.prototype.moveToRightPos = function() {
for (var t = this, o = 0; o < this.matchList.length; o++) {
var e = s.default.convetOtherNodeSpaceAR(this.targetNode, this.tileContainer), l = 82 * o + e.x - 246, n = e.y + 2;
cc.Tween.stopAllByTarget(this.matchList[o].node);
cc.tween(this.matchList[o].node).to(.3, {
x: l,
y: n
}, {
easing: "sineOut"
}).call(function(o) {
var e = o.getComponent(i.default);
if (e.remove) {
e.recycle(!0);
t.moveToRightPos();
t.checkGameResult();
t.updateProgress(.01);
}
}).start();
}
};
o.prototype.checkRemove = function() {
for (var t = {}, o = 0, e = this.matchList; o < e.length; o++) {
t[(r = e[o]).type] = t[r.type] || 0;
t[r.type]++;
}
for (var l in t) if (t[l] >= 3) {
for (var n = 0; n < this.matchList.length; n++) {
var r;
if ((r = this.matchList[n]).type == Number(l)) {
s.default.removeElementFromArray(r, this.recordList);
r.remove = !0;
this.matchList.splice(n, 1);
n--;
}
}
break;
}
};
o.prototype.searchRemoveable = function() {
for (var t = [], o = {}, e = this.tileList.length - 1; e >= 0; e--) {
var l = this.tileList[e];
if (l.dark) t.push(l); else {
o[l.type] = o[l.type] || [];
o[l.type].push(l);
}
}
if (this.matchList.length > 0) {
for (var n = {}, r = 0, i = this.matchList; r < i.length; r++) {
var c = i[r];
n[c.type] = n[c.type] || [];
n[c.type].push(c);
}
var s = [];
for (var u in n) s.push({
type: Number(u),
tiles: n[u],
count: n[u].length
});
s.sort(function(t, o) {
return o.count - t.count;
});
var a = 3 - (p = s[0]).count, d = p.type;
for (e = 0; e < this.tileList.length; e++) if (this.tileList[e].type == d) {
this.addToMatchList(this.tileList[e]);
if (0 == --a) break;
}
} else {
var f = [];
for (var u in o) f.push({
type: Number(u),
tiles: o[u],
count: o[u].length
});
f.sort(function(t, o) {
return o.count - t.count;
});
var p = f[0], y = Math.min(3, p.tiles.length);
for (e = 0; e < y; e++) this.addToMatchList(p.tiles[e]);
var h = Math.max(0, 3 - p.count);
d = p.type;
if (h > 0) for (var v = 0, _ = t; v < _.length; v++) {
var g = _[v];
if (g.type == d) {
this.addToMatchList(g);
if (0 == --h) break;
}
}
}
};
o.prototype.checkGameResult = function() {
if (this.matchList.length >= 7) {
this.lock = !0;
this.result_view.active = !0;
this.result_view_win.active = !1;
this.result_view_lose.active = !0;
this.playGameFailed();
} else if (0 == this.tileList.length) {
this.playGamePass();
this.lock = !0;
if (u.default.game.selectedLevel == u.default.game.level) {
u.default.game.level >= 8 && u.default.game.level;
u.default.game.level++;
var t = 0;
this.node_progress.progress >= .8 ? t = 3 : this.node_progress.progress >= .5 ? t = 2 : this.node_progress.progress > .1 && (t = 1);
u.default.game.level_star[u.default.game.selectedLevel] = t;
u.default.save();
}
this.result_view.active = !0;
this.result_view_win.active = !0;
this.result_view_lose.active = !1;
}
};
o.prototype.playFailAni = function(t) {
for (var o = 0, e = this.tileList; o < e.length; o++) {
var l = e[o], n = .05 * l.row + .05 * l.col;
cc.tween(l.node).delay(n).by(.5, {
y: -1400
}, {
easing: "backInOut"
}).start();
}
this.scheduleOnce(function() {
t && t();
}, 1);
};
o.prototype.checkWarning = function() {
if (this.matchList.length < 5) {
cc.Tween.stopAllByTarget(this.node_warning);
this.node_warning.active = !1;
} else {
this.node_warning.active = !0;
cc.Tween.stopAllByTarget(this.node_warning);
cc.tween(this.node_warning).to(1, {
opacity: 0
}).to(1, {
opacity: 255
}).union().repeatForever().start();
}
};
o.prototype.click_prev = function() {};
o.prototype.click_shuffle = function() {
var t = this;
if (u.default.game.shuffle_counter > 0) {
u.default.game.shuffle_counter--;
u.default.save();
this.updateItemView();
this.shuffle();
} else {
if (this.lock) return;
f.admgr.showVideo(function() {
u.default.game.shuffle_counter++;
u.default.save();
t.updateItemView();
});
}
};
o.prototype.shuffle = function() {
for (var t = this, o = 0; o < 500; o++) {
var e = Math.floor(Math.random() * this.tileList.length), l = Math.floor(Math.random() * this.tileList.length);
if (e != l) {
var n = this.tileList[e], r = this.tileList[l];
this.swapTile(n, r);
}
}
for (var i = 0, c = this.tileList; i < c.length; i++) {
var s = c[i], u = cc.v2(44 * s.layer, 44 * -s.layer), a = this.getTilePos(s.row, s.col, u);
cc.Tween.stopAllByTarget(s.node);
cc.tween(s.node).to(.25, {
position: a
}).call(function() {
t.check_All_Block(!0);
}).start();
}
};
o.prototype.swapTile = function(t, o) {
var e = t.row;
t.row = o.row;
o.row = e;
var l = t.col;
t.col = o.col;
o.col = l;
var n = t.layer;
t.layer = o.layer;
o.layer = n;
var r = t.node.zIndex;
t.node.zIndex = o.node.zIndex;
o.node.zIndex = r;
};
o.prototype.click_undo = function() {
var t = this;
if (0 != this.recordList.length) if (u.default.game.undo_counter > 0) {
u.default.game.undo_counter--;
u.default.save();
this.updateItemView();
this.undo_operator();
} else {
if (this.lock) return;
f.admgr.showVideo(function() {
u.default.game.undo_counter++;
u.default.save();
t.updateItemView();
});
} else f.admgr.showToast("No operation record!");
};
o.prototype.undo_operator = function() {
var t = this;
if (this.recordList.length > 0) {
var o = this.recordList.pop(), e = cc.v2(44 * o.layer, 44 * -o.layer), l = this.getTilePos(o.row, o.col, e);
o.node.zIndex = this.get___Zindex(o.row, o.col, o.layer);
s.default.removeElementFromArray(o, this.matchList);
this.tileList.push(o);
cc.tween(o.node).to(.25, {
position: l
}, {
easing: "sineOut"
}).call(function() {
t.check_All_Block(!0);
t.moveToRightPos();
}).start();
}
};
o.prototype.click_hint = function() {
var t = this;
if (u.default.game.hint_tip_counter > 0) {
u.default.game.hint_tip_counter--;
u.default.save();
this.updateItemView();
this.searchRemoveable();
} else {
if (this.lock) return;
f.admgr.showVideo(function() {
u.default.game.hint_tip_counter++;
u.default.save();
t.updateItemView();
});
}
};
o.prototype.click_moveup = function() {
var t = this;
if (this.recordList.length < 3) f.admgr.showToast("No operation record!"); else if (u.default.game.move_up_counter > 0) {
u.default.game.move_up_counter--;
u.default.save();
this.updateItemView();
this.moveup3_elements();
} else {
if (this.lock) return;
f.admgr.showVideo(function() {
u.default.game.move_up_counter++;
u.default.save();
t.updateItemView();
});
}
};
o.prototype.moveup3_elements = function() {
for (var t = s.default.convetOtherNodeSpaceAR(this.targetNode, this.tileContainer), o = 0; o < 3; o++) if (this.matchList.length > 0) {
var e = this.matchList.shift(), l = t.x - 88 + 88 * o, n = t.y + 130;
this.minZindex++;
var r = cc.v3(l, n, 0);
e.node.zIndex = this.minZindex;
s.default.removeElementFromArray(e, this.recordList);
this.tileList.push(e);
cc.tween(e.node).to(.25, {
position: r
}, {
easing: "sineOut"
}).call(function() {}).start();
}
var i = this;
setTimeout(function() {
i.check_All_Block(!0);
i.moveToRightPos();
}, 250);
};
o.prototype.click_help = function() {};
o.prototype.updateItemView = function() {
this.txt_hint.string = 0 == u.default.game.hint_tip_counter ? "0" : u.default.game.hint_tip_counter + "";
this.txt_shuffle.string = 0 == u.default.game.shuffle_counter ? "0" : u.default.game.shuffle_counter + "";
this.txt_undo.string = 0 == u.default.game.undo_counter ? "0" : u.default.game.undo_counter + "";
this.txt_put3.string = 0 == u.default.game.move_up_counter ? "0" : u.default.game.move_up_counter + "";
parseInt(this.txt_undo.string) <= 0 ? this.txt_undo.node.parent.getChildByName("adicon").active = !0 : this.txt_undo.node.parent.getChildByName("adicon").active = !1;
parseInt(this.txt_hint.string) <= 0 ? this.txt_hint.node.parent.getChildByName("adicon").active = !0 : this.txt_hint.node.parent.getChildByName("adicon").active = !1;
parseInt(this.txt_shuffle.string) <= 0 ? this.txt_shuffle.node.parent.getChildByName("adicon").active = !0 : this.txt_shuffle.node.parent.getChildByName("adicon").active = !1;
parseInt(this.txt_put3.string) <= 0 ? this.txt_put3.node.parent.getChildByName("adicon").active = !0 : this.txt_put3.node.parent.getChildByName("adicon").active = !1;
};
o.prototype.close = function() {};
o.prototype.panelDataUpdate = function() {
this.game_reinit();
};
o.prototype.updateProgress = function(t) {
this.node_progress.progress += t;
if (this.node_progress.progress <= 0) {
this.node_progress.progress = 0;
this.lock = !0;
this.result_view.active = !0;
this.result_view_win.active = !1;
this.result_view_lose.active = !0;
} else this.node_progress.progress > 1 && (this.node_progress.progress = 1);
this.node_star1.active = this.node_progress.progress >= .1;
this.node_star2.active = this.node_progress.progress >= .5;
this.node_star3.active = this.node_progress.progress >= .8;
};
o.prototype.update = function(t) {
this.lock || this.countDown && this.updateProgress(-t * this.progress_levelBase);
};
o.prototype.go_home = function() {
cc.director.loadScene("game_home");
};
o.prototype.go_nextLv = function() {
u.default.game.selectedLevel++;
this.result_view.active = !1;
this.game_reinit();
};
o.prototype.go_game_reinit = function() {
this.result_view.active = !1;
this.game_reinit();
};
o.prototype.hideshow_settingView = function() {};
o.prototype.toggleMusic = function() {
u.default.save();
};
o.prototype.toggleSFX = function() {
u.default.save();
};
o.prototype.hideshow_LevelView = function() {
this.levels_view.active = !this.levels_view.active;
};
o.prototype.openFbToshare = function() {
cc.sys.openURL("fb://");
};
r([ h(cc.Node) ], o.prototype, "tileContainer", void 0);
r([ h(cc.Node) ], o.prototype, "targetNode", void 0);
r([ h(cc.Label) ], o.prototype, "level_txt", void 0);
r([ h(cc.Label) ], o.prototype, "txt_undo", void 0);
r([ h(cc.Label) ], o.prototype, "txt_shuffle", void 0);
r([ h(cc.Label) ], o.prototype, "txt_hint", void 0);
r([ h(cc.Label) ], o.prototype, "txt_put3", void 0);
r([ h(cc.ProgressBar) ], o.prototype, "node_progress", void 0);
r([ h(cc.Node) ], o.prototype, "node_star1", void 0);
r([ h(cc.Node) ], o.prototype, "node_star2", void 0);
r([ h(cc.Node) ], o.prototype, "node_star3", void 0);
r([ h(cc.Node) ], o.prototype, "node_warning", void 0);
r([ h(cc.Node) ], o.prototype, "result_view", void 0);
r([ h(cc.Node) ], o.prototype, "result_view_win", void 0);
r([ h(cc.Node) ], o.prototype, "result_view_lose", void 0);
r([ h(cc.Node) ], o.prototype, "help_view", void 0);
r([ h(cc.Node) ], o.prototype, "levels_view", void 0);
return r([ y ], o);
}(cc.Component);
e.default = v;
cc._RF.pop();
}, {
"./TileBlock": "TileBlock",
"./adMgr": "adMgr",
"./game_config_dyn": "game_config_dyn",
"./game_constants": "game_constants",
"./game_core": "game_core",
"./game_helpers": "game_helpers",
"./global_model": "global_model"
} ],
game_model: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b3a3brq7PZOJqY5D+A3aHyr", "game_model");
var l, n = this && this.__extends || (l = function(t, o) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
l(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), r = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = t("./model_base"), c = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.level = 1;
o.selectedLevel = 1;
o.level_star = {};
o.shuffle_counter = 5;
o.undo_counter = 5;
o.hint_tip_counter = 5;
o.move_up_counter = 5;
return o;
}
o.prototype.setDefault = function() {};
o.prototype.setData = function(o) {
t.prototype.setData.call(this, o);
console.log("Set Data... ", o);
this.selectedLevel = this.level;
};
r([ i.save ], o.prototype, "level", void 0);
r([ i.save ], o.prototype, "level_star", void 0);
r([ i.save ], o.prototype, "shuffle_counter", void 0);
r([ i.save ], o.prototype, "undo_counter", void 0);
r([ i.save ], o.prototype, "hint_tip_counter", void 0);
r([ i.save ], o.prototype, "move_up_counter", void 0);
return o;
}(i.default);
e.default = c;
cc._RF.pop();
}, {
"./model_base": "model_base"
} ],
global_model: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "399be1YvapJequSK+8ixsJJ", "global_model");
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./game_constants"), n = t("./game_model"), r = function() {
function t() {}
t.save = function() {
var o = {};
o.config_game_obj = t.game.getData();
t.savedata(o);
};
t.getGameData = function() {
return cc.sys.localStorage.getItem(l.default.localDataKey);
};
t.loadData = function() {
var o = cc.sys.localStorage.getItem(l.default.localDataKey);
if (o) {
o = JSON.parse(o);
t.game.setData(o.config_game_obj);
} else t.game.setDefault();
};
t.savedata = function(t) {
var o = JSON.stringify(t);
cc.sys.localStorage.setItem(l.default.localDataKey, o);
t.game = {};
};
t.game = new n.default();
return t;
}();
e.default = r;
cc._RF.pop();
}, {
"./game_constants": "game_constants",
"./game_model": "game_model"
} ],
how_to_play_game: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "a0ad2hq1INDZ5WwTMjwXZ2V", "how_to_play_game");
var l, n = this && this.__extends || (l = function(t, o) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
l(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), r = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = t("./global_model"), c = cc._decorator, s = c.ccclass, u = c.property, a = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.node_box = null;
o.showTiles = [];
o.oldPos = [];
o.node_ui = null;
return o;
}
o.prototype.start = function() {
this.node_ui.scale = 1;
this.node.opacity = 255;
this.node_ui.opacity = 0;
this.oldPos[0] = this.showTiles[0].position;
this.oldPos[1] = this.showTiles[1].position;
this.oldPos[2] = this.showTiles[2].position;
if (1 == i.default.game.selectedLevel) {
cc.tween(this.node_ui).to(.25, {
scale: 1,
opacity: 255
}, {
easing: "sineOut"
}).start();
this.playHelp();
} else this.node.active = !1;
};
o.prototype.playHelp = function() {
var t = this;
this.showTiles[0].scale = 1;
this.showTiles[1].scale = 1;
this.showTiles[2].scale = 1;
this.showTiles[0].position = this.oldPos[0];
this.showTiles[1].position = this.oldPos[1];
this.showTiles[2].position = this.oldPos[2];
cc.tween(this.showTiles[0]).delay(.9).to(.5, {
x: -173.907,
y: -231
}).start();
cc.tween(this.showTiles[1]).delay(1.3).to(.5, {
x: -86.697,
y: -231
}).start();
cc.tween(this.showTiles[2]).delay(1.7).to(.5, {
x: 1.942,
y: -231
}).delay(.1).call(function() {
cc.tween(t.showTiles[0]).to(.2, {
scale: 0
}).start();
cc.tween(t.showTiles[1]).to(.2, {
scale: 0
}).start();
cc.tween(t.showTiles[2]).to(.2, {
scale: 0
}).delay(.8).call(function() {
t.playHelp();
}).start();
}).start();
};
o.prototype.close = function() {
this.node.active = !1;
};
r([ u(cc.Node) ], o.prototype, "node_box", void 0);
r([ u([ cc.Node ]) ], o.prototype, "showTiles", void 0);
r([ u(cc.Node) ], o.prototype, "node_ui", void 0);
return r([ s ], o);
}(cc.Component);
e.default = a;
cc._RF.pop();
}, {
"./global_model": "global_model"
} ],
jhsD3BQUzrckXHMC: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "64558Vbey5AaYDhAolWZCVH", "jhsD3BQUzrckXHMC");
var l, n = this && this.__extends || (l = function(t, o) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
l(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), r = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = t("./koffTaS"), c = t("./game_config_dyn"), s = t("./game_core"), u = cc._decorator, a = u.ccclass, d = u.property, f = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.tileBlock = null;
o.wxOdV3NSqeDk2e2Prog = null;
o.OBX6txtv = null;
o.OBX6txtv2 = null;
return o;
}
o.prototype.onLoad = function() {
var t = this;
c.default.load(null);
s.default.init(this.node, this.tileBlock);
this.OBX6txtv2 = cc.tween(this.node).delay(1).call(function() {
t.W1cIA6G();
}).start();
};
o.prototype.W1cIA6G = function() {
var t = this;
this.OBX6txtv = cc.tween({
progress: 0
}).to(2.85, {
progress: 100
}, {
progress: function(o, e, l, n) {
cc.isValid(t.node) && (t.wxOdV3NSqeDk2e2Prog.string = (100 * n | 0) + " %");
n >= .9999999 && cc.director.loadScene(i.Vl2h6kBYov1uNSwzL7.u_53B7V);
},
easing: "circInOut"
}).start();
};
r([ d(cc.Prefab) ], o.prototype, "tileBlock", void 0);
r([ d(cc.Label) ], o.prototype, "wxOdV3NSqeDk2e2Prog", void 0);
return r([ a ], o);
}(cc.Component);
e.default = f;
cc._RF.pop();
}, {
"./game_config_dyn": "game_config_dyn",
"./game_core": "game_core",
"./koffTaS": "koffTaS"
} ],
koffTaS: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "321b0gcKaVMjZyFJgm/VgQJ", "koffTaS");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.Vl2h6kBYov1uNSwzL7 = void 0;
e.Vl2h6kBYov1uNSwzL7 = {
AJYXuyGLHQrl1: "home_UI",
u_53B7V: "game"
};
cc._RF.pop();
}, {} ],
level_item: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "d36c1ij41xNSL9CW2UrdkNA", "level_item");
var l, n = this && this.__extends || (l = function(t, o) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
l(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), r = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = t("./game_constants"), c = cc._decorator, s = c.ccclass, u = c.property, a = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.level_text = null;
o.level_grey = null;
o.lock_node = null;
o.currentLv_node = null;
o.current_level = 0;
return o;
}
o.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_END, this.onLevelClick, this);
};
o.prototype.initLevelItem = function(t, o, e) {
this.current_level = t;
this.level_text.string = t + "";
this.level_grey.string = t + "";
o && (this.currentLv_node.active = !0);
this.lock_node.active = e;
};
o.prototype.onLevelClick = function() {
0 == this.lock_node.active && this.current_level > 0 && cc.systemEvent.emit(i.default.select_level_clicked, this.current_level);
};
r([ u(cc.Label) ], o.prototype, "level_text", void 0);
r([ u(cc.Label) ], o.prototype, "level_grey", void 0);
r([ u(cc.Node) ], o.prototype, "lock_node", void 0);
r([ u(cc.Node) ], o.prototype, "currentLv_node", void 0);
return r([ s ], o);
}(cc.Component);
e.default = a;
cc._RF.pop();
}, {
"./game_constants": "game_constants"
} ],
level_mgr: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "5790cn5FOBNm57t2jHfTp1H", "level_mgr");
var l, n = this && this.__extends || (l = function(t, o) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
l(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), r = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, u = t("./game_constants"), a = t("./global_model"), d = t("./level_item"), f = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.page1 = null;
o.page2 = null;
o.page3 = null;
o.page4 = null;
o.page5 = null;
o.page6 = null;
o.AllLvItems = [];
return o;
}
o.prototype.onLoad = function() {
var t = this;
this.page1.children.forEach(function(o) {
t.AllLvItems.push(o.getComponent(d.default));
});
this.page2.children.forEach(function(o) {
t.AllLvItems.push(o.getComponent(d.default));
});
this.page3.children.forEach(function(o) {
t.AllLvItems.push(o.getComponent(d.default));
});
this.page4.children.forEach(function(o) {
t.AllLvItems.push(o.getComponent(d.default));
});
this.page5.children.forEach(function(o) {
t.AllLvItems.push(o.getComponent(d.default));
});
this.page6.children.forEach(function(o) {
t.AllLvItems.push(o.getComponent(d.default));
});
var o = a.default.game.level;
this.AllLvItems.forEach(function(t, e) {
t.initLevelItem(e + 1, e + 1 == o, e + 1 > o);
});
cc.systemEvent.on(u.default.select_level_clicked, this.closeLvView, this);
};
o.prototype.closeLvView = function() {
this.node.active = !1;
};
r([ s(cc.Node) ], o.prototype, "page1", void 0);
r([ s(cc.Node) ], o.prototype, "page2", void 0);
r([ s(cc.Node) ], o.prototype, "page3", void 0);
r([ s(cc.Node) ], o.prototype, "page4", void 0);
r([ s(cc.Node) ], o.prototype, "page5", void 0);
r([ s(cc.Node) ], o.prototype, "page6", void 0);
return r([ c ], o);
}(cc.Component);
e.default = f;
cc._RF.pop();
}, {
"./game_constants": "game_constants",
"./global_model": "global_model",
"./level_item": "level_item"
} ],
loading: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "efcccUpCtlOR4hEi1SxD5jj", "loading");
var l, n = this && this.__extends || (l = function(t, o) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
l(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), r = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = t("./adMgr"), c = cc._decorator, s = c.ccclass, u = (c.property, function(t) {
n(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.start = function() {
i.admgr.setVideoFailCb(function() {
cc.resources.load("toast", cc.Prefab, function(t, o) {
if (!t) {
var e = cc.instantiate(o), l = cc.Canvas.instance.node;
if (e && l) {
e.active = !0;
l.addChild(e);
e.getChildByName("label").getComponent(cc.Label).string = "No ads at the moment";
cc.Tween.stopAllByTarget(e);
e.opacity = 255;
cc.tween(e).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
e.destroy();
}).start();
}
}
});
});
};
o.prototype.onClick_PrivacyPolicy_btn = function() {
cc.sys.openURL("https://sites.google.com/view/beautyunveiledprivacypolicy/home");
};
return r([ s ], o);
}(cc.Component));
e.default = u;
cc._RF.pop();
}, {
"./adMgr": "adMgr"
} ],
model_base: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "1dfea7OjnNAGpB1WFerHRDA", "model_base");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.save = void 0;
e.save = function(t, o) {
var e = l.classMap.get(t.constructor);
if (void 0 === e) {
e = [];
l.classMap.set(t.constructor, e);
}
e.push(o);
};
var l = function() {
function t() {}
t.prototype.getData = function() {
for (var o = {}, e = t.classMap.get(this.constructor), l = 0; l < e.length; ++l) o[e[l]] = this[e[l]];
return o;
};
t.prototype.setData = function(o) {
if (o) for (var e = t.classMap.get(this.constructor), l = 0; l < e.length; ++l) {
var n = o[e[l]];
if (null != n || null != n) if ("[object Object]" == Object.prototype.toString.call(n)) for (var r in n) this[e[l]][r] = n[r]; else this[e[l]] = n;
}
};
t.classMap = new Map();
return t;
}();
e.default = l;
cc._RF.pop();
}, {} ],
pool_manager: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "d5d82opG61Op6Ja+UjUB3oc", "pool_manager");
var l = this && this.__decorate || function(t, o, e, l) {
var n, r = arguments.length, i = r < 3 ? o : null === l ? l = Object.getOwnPropertyDescriptor(o, e) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, o, e, l); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (r < 3 ? n(i) : r > 3 ? n(o, e, i) : n(o, e)) || i);
return r > 3 && i && Object.defineProperty(o, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var n = cc._decorator, r = n.ccclass, i = (n.property, function() {
function t() {
this.pools = {};
this.resKey = {};
}
t.prototype.init = function(t, o) {
this.resKey.TileBlock = o;
for (var e = 0; e < 100; e++) {
var l = cc.instantiate(o);
this.recover("TileBlock", l);
}
t && t();
};
t.prototype.get = function(t) {
null == this.pools[t] && (this.pools[t] = new cc.NodePool());
if (this.pools[t].size() > 0) {
var o = this.pools[t].get();
return o.getComponent(o.name);
}
var e = cc.instantiate(this.resKey[t]);
return e.getComponent(e.name);
};
t.prototype.recover = function(t, o) {
null == this.pools[t] && (this.pools[t] = new cc.NodePool());
this.pools[t].put(o);
};
return l([ r ], t);
}());
e.default = i;
cc._RF.pop();
}, {} ]
}, {}, [ "TileBlock", "adMgr", "game_config_dyn", "game_constants", "game_core", "game_helpers", "game_level_cfg", "game_main", "game_model", "global_model", "how_to_play_game", "jhsD3BQUzrckXHMC", "koffTaS", "level_item", "level_mgr", "loading", "model_base", "pool_manager" ]);