
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TileBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RpbGVCbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFHOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF5RkM7UUF0RkcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUkxQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxLQUFLLENBQUE7UUFNdkIsWUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFBO1FBaUJULFdBQUssR0FBWSxLQUFLLENBQUM7O1FBdUQvQixpQkFBaUI7SUFDckIsQ0FBQztJQXZFRyxzQkFBVywyQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFnQixLQUFhO1lBQTdCLGlCQU9DO1lBTkcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsVUFBQyxHQUFHLEVBQUUsT0FBcUI7Z0JBQy9FLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO1lBRWpDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQzs7O09BUkE7SUFVRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHNCQUFXLDJCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFD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O1FBRTNDLElBQUksR0FBRyxFQUFFO1lBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZELG1CQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7YUFBTTtZQUNILG1CQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2pEO0lBQ0wsQ0FBQztJQWxGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNNO0lBSTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFQTixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBeUY3QjtJQUFELGdCQUFDO0NBekZELEFBeUZDLENBekZzQyxFQUFFLENBQUMsU0FBUyxHQXlGbEQ7a0JBekZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVfY29yZSBmcm9tIFwiLi9nYW1lX2NvcmVcIjtcbmltcG9ydCBnYW1lX2hlbHBlcnMgZnJvbSBcIi4vZ2FtZV9oZWxwZXJzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlQmxvY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcF9pY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aWxlQmc6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICByZW1vdmU6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgX3R5cGU6IG51bWJlcjtcblxuICAgIHJvdzogbnVtYmVyXG4gICAgY29sOiBudW1iZXJcbiAgICBsYXllcjogbnVtYmVyXG4gICAgYW5pT2JqID0geyBjOiAwIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcImFyZXNfYm5kbC9pY29ucy9cIit2YWx1ZSxjYy5UZXh0dXJlMkQsKGVyciwgdGV4dHVyZTogY2MuVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3AgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcbiAgICAgICAgICAgIHRoaXMuc3BfaWNvbi5zcHJpdGVGcmFtZSA9IHNwXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBwcml2YXRlIF9kYXJrOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGdldCBkYXJrKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGFyaztcbiAgICB9XG4gICAgcHVibGljIHNldCBkYXJrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2RhcmsgPSB2YWx1ZTtcblxuICAgIH1cbiAgICBzZXREYXJrKHZhbHVlOiBib29sZWFuLCBhbmk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5fZGFyayAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGFyayA9IHZhbHVlXG4gICAgICAgICAgICBpZiAoYW5pKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gODBcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gMjU1XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gMjU1XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IDgwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYW5pT2JqLmMgPSBzdGFydFxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmFuaU9iailcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmFuaU9iaikudG8oMC41LCB7IGM6IGVuZCB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoc3RhcnQsIGVuZCwgY3VycmVudCwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wQ29sb3IgPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcF9pY29uLm5vZGUuY29sb3IgPSBjYy5jb2xvcih0ZW1wQ29sb3IsIHRlbXBDb2xvciwgdGVtcENvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQmcuY29sb3IgPSBjYy5jb2xvcih0ZW1wQ29sb3IsIHRlbXBDb2xvciwgdGVtcENvbG9yKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGdyYXlzZSA9IDgwXG4gICAgICAgICAgICAgICAgdGhpcy5zcF9pY29uLm5vZGUuY29sb3IgPSB2YWx1ZSA/IGNjLmNvbG9yKGdyYXlzZSwgZ3JheXNlLCBncmF5c2UpIDogY2MuY29sb3IoMjU1LCAyNTUsIDI1NSlcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVCZy5jb2xvciA9IHZhbHVlID8gY2MuY29sb3IoZ3JheXNlLCBncmF5c2UsIGdyYXlzZSkgOiBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmVjeWNsZShhbmk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJlbW92ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuX2RhcmsgPSBmYWxzZVxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5hbmlPYmopXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpXG4gICAgICAgIHRoaXMuc3BfaWNvbi5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSlcbiAgICAgICAgdGhpcy50aWxlQmcuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KVxuICAgICAgIFxuICAgICAgICBpZiAoYW5pKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDAuMDYpLnRvKDAuMiwgeyBzY2FsZTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lX2NvcmUucG9vbC5yZWNvdmVyKCdUaWxlQmxvY2snLCB0aGlzLm5vZGUpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnYW1lX2NvcmUucG9vbC5yZWNvdmVyKCdUaWxlQmxvY2snLCB0aGlzLm5vZGUpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59Il19