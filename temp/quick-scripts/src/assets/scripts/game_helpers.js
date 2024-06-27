"use strict";
cc._RF.push(module, '31abcTCiwtHU41uk44bj5ba', 'game_helpers');
// scripts/game_helpers.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_helpers = /** @class */ (function () {
    function game_helpers() {
    }
    game_helpers.randomItem = function (array) {
        if (array && array.length > 0) {
            return array[this.getRandomInt(0, array.length - 1)];
        }
        else {
            return null;
        }
    };
    game_helpers.Object2Array = function (obj) {
        var arr = [];
        for (var key in obj) {
            arr.push(obj[key]);
        }
        return arr;
    };
    game_helpers.getRandom = function (lower, upper) {
        return Math.random() * (upper - lower) + lower;
    };
    ;
    game_helpers.getRandomInt = function (lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };
    ;
    game_helpers.seedRandom = function () {
        return game_helpers.getRandom(0, 1);
        // this.seed = (this.seed * 9301 + 49297) % 233280;
        // return this.seed / 233280.0;
    };
    game_helpers.seedRandomInt = function (lower, upper) {
        return game_helpers.getRandomInt(lower, upper);
        // return Math.floor(game_helpers.seedRandom() * (upper - lower)) + lower;
    };
    game_helpers.rnd = function (seed) {
        seed = (seed * 9301 + 49297) % 233280; //为何使用这三个数?
        return seed / (233280.0);
    };
    ;
    game_helpers.getPowNum = function (p) {
        return Math.pow(10, p);
    };
    ;
    game_helpers.setServerTime = function (time) {
        game_helpers.timeOffset = time - new Date().getTime();
        cc.log("timeOffset:", game_helpers.timeOffset);
    };
    game_helpers.getServerTime = function () {
        return new Date().getTime() + game_helpers.timeOffset;
    };
    game_helpers.formatDate = function (t) {
        var date = new Date(t);
        var YY = date.getFullYear() + '-';
        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return YY + MM + DD + " " + hh + mm + ss;
    };
    game_helpers.cloneObj = function (obj) {
        obj = JSON.stringify(obj);
        obj = JSON.parse(obj);
        return obj;
    };
    game_helpers.getTimeStrByS = function (second) {
        second = Math.floor(second);
        if (second < 0)
            second = 0;
        var d = Math.floor(second / 3600 / 24);
        second -= d * 3600 * 24;
        var h = Math.floor(second / 3600);
        second -= h * 3600;
        var m = Math.floor(second / 60);
        second -= m * 60;
        var front = "00";
        if (h > 9) {
            front = "" + h;
        }
        else {
            front = "0" + h;
        }
        var mid = "00";
        if (m > 9) {
            mid = "" + m;
        }
        else {
            mid = "0" + m;
        }
        var back = "00";
        if (second > 9) {
            back = "" + second;
        }
        else {
            back = "0" + second;
        }
        if (d > 0) {
            return d + "天" + h + "时" + m + "分";
        }
        else {
            var longTime = h > 0;
            if (longTime) {
                return front + ":" + mid;
            }
            else {
                return mid + ":" + back; //+ '秒';
            }
        }
    };
    game_helpers.getClockStrByS = function (second, showsecond, showhour) {
        if (showsecond === void 0) { showsecond = true; }
        if (showhour === void 0) { showhour = true; }
        second = Math.floor(second);
        if (second < 0)
            second = 0;
        var h = Math.floor(second / 3600);
        second -= h * 3600;
        var m = Math.floor(second / 60);
        second -= m * 60;
        var front = "00";
        if (h > 9) {
            front = "" + h;
        }
        else {
            front = "0" + h;
        }
        var mid = "00";
        if (m > 9) {
            mid = "" + m;
        }
        else {
            mid = "0" + m;
        }
        var str = "";
        if (showhour) {
            str += front;
            str += ":";
        }
        str += mid;
        if (showsecond)
            str += ":" + (second < 10 ? "0" : "") + second;
        return str;
    };
    game_helpers.checkObjEmpty = function (obj) {
        if (obj) {
            for (var i in obj) {
                return false;
            }
            return true;
        }
        else {
            return true;
        }
    };
    game_helpers.checkOrderOver = function (orderTime) {
        var date = new Date(orderTime);
        var dateNow = new Date(game_helpers.getServerTime());
        if (date.getFullYear() == dateNow.getFullYear() &&
            date.getMonth() == dateNow.getMonth() &&
            date.getDate() == dateNow.getDate()) {
            return false;
        }
        else {
            return true;
        }
    };
    //spa 相对tp目录
    game_helpers.loadSpriteFrame = function (spa, name, callback) {
        if (callback === void 0) { callback = null; }
        this.loadRes("tp/" + spa, "texture", cc.SpriteAtlas, function (e, assets) {
            if (e) {
                console.log(spa, name);
                cc.error(e);
            }
            else {
                callback(assets.getSpriteFrame(name));
            }
        });
    };
    game_helpers.loadRes = function (path, boundle_name, type, callback) {
        if (callback === void 0) { callback = null; }
        cc.assetManager.loadBundle(boundle_name, function (error, bundle) {
            if (error) {
                cc.log(error);
                return;
            }
            bundle.load(path, type, function (e, assets) {
                if (e) {
                    cc.log(e);
                    return;
                }
                callback(e, assets);
            });
        });
    };
    game_helpers.weight = function (v) {
        var mTotalWeight = 0;
        for (var i = 0; i < v.length; ++i) {
            mTotalWeight += v[i];
        }
        if (mTotalWeight <= 0)
            return -1;
        var randnum = Math.round(Math.random() * Number.MAX_VALUE) % mTotalWeight;
        for (var i = 0; i < v.length; ++i) {
            if (randnum < v[i]) {
                return i;
            }
            else {
                randnum -= v[i];
            }
        }
        return -1;
    };
    game_helpers.shuffle = function (arr) {
        for (var i = arr.length - 1; i >= 0; i--) {
            var rIndex = Math.floor(Math.random() * (i + 1));
            var temp = arr[rIndex];
            arr[rIndex] = arr[i];
            arr[i] = temp;
        }
        return arr;
    };
    game_helpers.getDate = function (time) {
        var now = new Date(time), y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    };
    //货币进位
    game_helpers.goldCrarryBit = function (gold) {
        var array = [
            [100000000, 'N'],
            [10000000, 'T'],
            [1000000, 'G'],
            [100000, 'M'],
            [10000, 'K'],
            [1000, 'B'],
        ];
        for (var i = 0; i < array.length; i++) {
            var value = gold / array[i][0];
            if (value > 1) {
                return '' + value.toFixed(1) + array[i][1];
            }
        }
        return gold.toString();
    };
    //定点数
    game_helpers.fixFloat = function (val, count) {
        if (count === void 0) { count = 2; }
        var a = Math.pow(10, count);
        return Math.floor(val * a) / a;
    };
    //     this.initPool("basechip", ret, 10);
    //     this.initPool("dianchi", ret, 10);
    //     this.initPool("enery", ret, 10);
    //     this.initPool("gem", ret, 10);
    game_helpers.formatString = function (s) {
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < arg.length; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arg[i]);
        }
        return s;
    };
    game_helpers.count = function (obj) {
        if (!obj)
            return 0;
        var num = 0;
        for (var k in obj) {
            num++;
        }
        return num;
    };
    ;
    game_helpers.copy = function (obj) {
        var newObj = Object.create(obj);
        Object.assign(newObj, obj);
        return newObj;
    };
    game_helpers.setGray = function (icon, isGray) {
        if (isGray) {
            icon.setMaterial(0, cc.Material.getBuiltinMaterial('2d-gray-sprite'));
        }
        else {
            icon.setMaterial(0, cc.Material.getBuiltinMaterial('2d-sprite'));
        }
    };
    game_helpers.setSpriteFrame = function (sp, path, bundle, callback) {
        if (bundle === void 0) { bundle = 'resources'; }
        if (callback === void 0) { callback = null; }
        var loader = cc.assetManager.getBundle(bundle);
        loader.load(path, cc.Texture2D, function (error, assets) {
            if (error) {
                cc.log('error', path);
                return;
            }
            sp.spriteFrame = new cc.SpriteFrame(assets);
            callback && callback();
        });
    };
    game_helpers.initArray2 = function (row, col, value) {
        if (value === void 0) { value = null; }
        var arr = [];
        for (var i = 0; i < row; i++) {
            arr[i] = [];
            for (var j = 0; j < col; j++) {
                arr[i][j] = value;
            }
        }
        return arr;
    };
    game_helpers.localConvertWorldPointAR = function (node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return null;
    };
    game_helpers.convetOtherNodeSpaceAR = function (node, targetNode) {
        if (!node || !targetNode) {
            return null;
        }
        var worldPoint = game_helpers.localConvertWorldPointAR(node);
        return game_helpers.worldConvertLocalPointAR(targetNode, worldPoint);
    };
    game_helpers.worldConvertLocalPointAR = function (node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
        return null;
    };
    // 计算 |p1 p2| X |p1 p|
    game_helpers.getCross = function (p1, p2, p) {
        return (p2.x - p1.x) * (p.y - p1.y) - (p.x - p1.x) * (p2.y - p1.y);
    };
    //判断点p是否在p1p2p3p4的正方形内
    game_helpers.isPointInMatrix = function (p1, p2, p3, p4, p) {
        var isPointIn = game_helpers.getCross(p1, p2, p) * game_helpers.getCross(p3, p4, p) >= 0 && game_helpers.getCross(p2, p3, p) * game_helpers.getCross(p4, p1, p) >= 0;
        return isPointIn;
    };
    game_helpers.randomArray = function (arr) {
        var newArr = [];
        var count = arr.length;
        for (var i = 0; i < count; i++) {
            var rnd = Math.floor(Math.random() * arr.length);
            newArr.push(arr[rnd]);
            arr.splice(rnd, 1);
        }
        return newArr;
    };
    game_helpers.removeElementFromArray = function (element, arr) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == element) {
                arr.splice(i, 1);
                break;
            }
        }
    };
    game_helpers.getDayCount = function (year, month) {
        var runYear = false;
        if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
            runYear = true;
        }
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
            return 31;
        else if (month == 4 || month == 6 || month == 9 || month == 11)
            return 30;
        else
            return runYear ? 29 : 28;
    };
    game_helpers.seed = 5;
    game_helpers.timeOffset = 0;
    return game_helpers;
}());
exports.default = game_helpers;
;

cc._RF.pop();