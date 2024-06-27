"use strict";
cc._RF.push(module, '64558Vbey5AaYDhAolWZCVH', 'jhsD3BQUzrckXHMC');
// scripts/jhsD3BQUzrckXHMC.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var koffTaS_1 = require("./koffTaS");
var game_config_dyn_1 = require("./game_config_dyn");
var game_core_1 = require("./game_core");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//loading 逻辑是，首先一个白色背影加logo ，停留2s，然后一个加载进进度图标，4s， 如果此时 AB已经判断出，则进入AB，否则直接进入到A。在A 中如果判断出是B ，则跳到B
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tileBlock = null;
        _this.wxOdV3NSqeDk2e2Prog = null;
        _this.OBX6txtv = null;
        _this.OBX6txtv2 = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        game_config_dyn_1.default.load(null);
        game_core_1.default.init(this.node, this.tileBlock);
        this.OBX6txtv2 = cc.tween(this.node).delay(1).call(function () {
            _this.W1cIA6G();
        }).start();
    };
    // https://docs.cocos.com/creator/2.4/manual/zh/scripting/tween.html#%E6%94%AF%E6%8C%81%E7%BC%93%E5%8A%A8%E4%BB%BB%E6%84%8F%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BB%BB%E6%84%8F%E5%B1%9E%E6%80%A7
    // https://docs.cocos.com/creator/2.4/api/zh/classes/Easing.html#circout
    NewClass.prototype.W1cIA6G = function () {
        var _this = this;
        this.OBX6txtv = cc.tween({ progress: 0 }).to(2.85, { progress: 100 }, { progress: function (start, end, current, ratio) {
                if (cc.isValid(_this.node)) {
                    _this.wxOdV3NSqeDk2e2Prog.string = (ratio * 100 | 0) + " %";
                }
                if (ratio >= 0.9999999) {
                    cc.director.loadScene(koffTaS_1.Vl2h6kBYov1uNSwzL7.u_53B7V);
                }
            }, easing: "circInOut" }).start();
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "tileBlock", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "wxOdV3NSqeDk2e2Prog", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();