"use strict";
cc._RF.push(module, '44b21OieV9MmbV+psCsFbKY', 'TileBlock');
// scripts/TileBlock.ts

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
var game_core_1 = require("./game_core");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TileBlock = /** @class */ (function (_super) {
    __extends(TileBlock, _super);
    function TileBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp_icon = null;
        _this.tileBg = null;
        _this.remove = false;
        _this.aniObj = { c: 0 };
        _this._dark = false;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(TileBlock.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            var _this = this;
            this._type = value;
            cc.resources.load("ares_bndl/icons/" + value, cc.Texture2D, function (err, texture) {
                var sp = new cc.SpriteFrame(texture);
                _this.sp_icon.spriteFrame = sp;
            });
        },
        enumerable: false,
        configurable: true
    });
    TileBlock.prototype.start = function () {
    };
    Object.defineProperty(TileBlock.prototype, "dark", {
        get: function () {
            return this._dark;
        },
        set: function (value) {
            this._dark = value;
        },
        enumerable: false,
        configurable: true
    });
    TileBlock.prototype.setDark = function (value, ani) {
        var _this = this;
        if (ani === void 0) { ani = false; }
        if (this._dark != value) {
            this._dark = value;
            if (ani) {
                var start = 80;
                var end = 255;
                if (value) {
                    start = 255;
                    end = 80;
                }
                this.aniObj.c = start;
                cc.Tween.stopAllByTarget(this.aniObj);
                cc.tween(this.aniObj).to(0.5, { c: end }, {
                    progress: function (start, end, current, radio) {
                        var tempColor = start + (end - start) * radio;
                        _this.sp_icon.node.color = cc.color(tempColor, tempColor, tempColor);
                        _this.tileBg.color = cc.color(tempColor, tempColor, tempColor);
                    }
                }).start();
            }
            else {
                var grayse = 80;
                this.sp_icon.node.color = value ? cc.color(grayse, grayse, grayse) : cc.color(255, 255, 255);
                this.tileBg.color = value ? cc.color(grayse, grayse, grayse) : cc.color(255, 255, 255);
            }
        }
    };
    TileBlock.prototype.recycle = function (ani) {
        var _this = this;
        if (ani === void 0) { ani = false; }
        this.remove = false;
        this._dark = false;
        cc.Tween.stopAllByTarget(this.aniObj);
        cc.Tween.stopAllByTarget(this.node);
        this.sp_icon.node.color = cc.color(255, 255, 255);
        this.tileBg.color = cc.color(255, 255, 255);
        if (ani) {
            cc.tween(this.node).delay(0.06).to(0.2, { scale: 0 }).call(function () {
                game_core_1.default.pool.recover('TileBlock', _this.node);
            }).start();
        }
        else {
            game_core_1.default.pool.recover('TileBlock', this.node);
        }
    };
    __decorate([
        property(cc.Sprite)
    ], TileBlock.prototype, "sp_icon", void 0);
    __decorate([
        property(cc.Node)
    ], TileBlock.prototype, "tileBg", void 0);
    TileBlock = __decorate([
        ccclass
    ], TileBlock);
    return TileBlock;
}(cc.Component));
exports.default = TileBlock;

cc._RF.pop();