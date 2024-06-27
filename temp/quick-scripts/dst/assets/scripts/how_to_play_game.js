
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/how_to_play_game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0ad2hq1INDZ5WwTMjwXZ2V', 'how_to_play_game');
// scripts/how_to_play_game.ts

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
var global_model_1 = require("./global_model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var how_to_play_game = /** @class */ (function (_super) {
    __extends(how_to_play_game, _super);
    function how_to_play_game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.node_box = null;
        _this.showTiles = [];
        _this.oldPos = [];
        _this.node_ui = null;
        return _this;
    }
    how_to_play_game.prototype.start = function () {
        this.node_ui.scale = 1;
        this.node.opacity = 255;
        this.node_ui.opacity = 0;
        this.oldPos[0] = this.showTiles[0].position;
        this.oldPos[1] = this.showTiles[1].position;
        this.oldPos[2] = this.showTiles[2].position;
        if (global_model_1.default.game.selectedLevel == 1) {
            cc.tween(this.node_ui).to(0.25, { scale: 1, opacity: 255 }, { easing: 'sineOut' }).start();
            this.playHelp();
        }
        else {
            this.node.active = false;
        }
    };
    how_to_play_game.prototype.playHelp = function () {
        var _this = this;
        this.showTiles[0].scale = 1;
        this.showTiles[1].scale = 1;
        this.showTiles[2].scale = 1;
        this.showTiles[0].position = this.oldPos[0];
        this.showTiles[1].position = this.oldPos[1];
        this.showTiles[2].position = this.oldPos[2];
        cc.tween(this.showTiles[0]).delay(0.9).to(0.5, { x: -173.907, y: -187.212 }).start();
        cc.tween(this.showTiles[1]).delay(1.3).to(0.5, { x: -86.697, y: -187.212 }).start();
        cc.tween(this.showTiles[2]).delay(1.7).to(0.5, { x: 1.942, y: -187.212 }).delay(0.1).call(function () {
            cc.tween(_this.showTiles[0]).to(0.2, { scale: 0 }).start();
            cc.tween(_this.showTiles[1]).to(0.2, { scale: 0 }).start();
            cc.tween(_this.showTiles[2]).to(0.2, { scale: 0 }).delay(0.8).call(function () {
                _this.playHelp();
            }).start();
        }).start();
    };
    how_to_play_game.prototype.close = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Node)
    ], how_to_play_game.prototype, "node_box", void 0);
    __decorate([
        property([cc.Node])
    ], how_to_play_game.prototype, "showTiles", void 0);
    __decorate([
        property(cc.Node)
    ], how_to_play_game.prototype, "node_ui", void 0);
    how_to_play_game = __decorate([
        ccclass
    ], how_to_play_game);
    return how_to_play_game;
}(cc.Component));
exports.default = how_to_play_game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hvd190b19wbGF5X2dhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBbURDO1FBakRHLGNBQVEsR0FBVSxJQUFJLENBQUE7UUFHdEIsZUFBUyxHQUFjLEVBQUUsQ0FBQTtRQUN6QixZQUFNLEdBQVEsRUFBRSxDQUFBO1FBRWhCLGFBQU8sR0FBUyxJQUFJLENBQUE7O0lBMkN4QixDQUFDO0lBMUNHLGdDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUV6QyxJQUFHLHNCQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBRSxDQUFDLEVBQ2pDO1lBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUss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SyxHQUFMO1FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO0lBQzNCLENBQUM7SUFoREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt1REFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNFO0lBUkgsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FtRHBDO0lBQUQsdUJBQUM7Q0FuREQsQUFtREMsQ0FuRDZDLEVBQUUsQ0FBQyxTQUFTLEdBbUR6RDtrQkFuRG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnbG9iYWxfbW9kZWwgZnJvbSBcIi4vZ2xvYmFsX21vZGVsXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob3dfdG9fcGxheV9nYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlX2JveDogY2MuTm9kZT1udWxsXG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIHNob3dUaWxlczogY2MuTm9kZVtdID0gW11cbiAgICBvbGRQb3M6IGFueSA9IFtdXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZV91aTpjYy5Ob2RlPW51bGxcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlX3VpLnNjYWxlID0gMVxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eT0yNTVcbiAgICAgICAgdGhpcy5ub2RlX3VpLm9wYWNpdHk9MFxuICAgICAgICB0aGlzLm9sZFBvc1swXT10aGlzLnNob3dUaWxlc1swXS5wb3NpdGlvblxuICAgICAgICB0aGlzLm9sZFBvc1sxXT10aGlzLnNob3dUaWxlc1sxXS5wb3NpdGlvblxuICAgICAgICB0aGlzLm9sZFBvc1syXT10aGlzLnNob3dUaWxlc1syXS5wb3NpdGlvblxuXG4gICAgICAgIGlmKGdsb2JhbF9tb2RlbC5nYW1lLnNlbGVjdGVkTGV2ZWw9PTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlX3VpKS50bygwLjI1LCB7IHNjYWxlOiAxLG9wYWNpdHk6MjU1IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIHRoaXMucGxheUhlbHAoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcGxheUhlbHAoKSB7XG4gICAgICAgIHRoaXMuc2hvd1RpbGVzWzBdLnNjYWxlPTFcbiAgICAgICAgdGhpcy5zaG93VGlsZXNbMV0uc2NhbGU9MVxuICAgICAgICB0aGlzLnNob3dUaWxlc1syXS5zY2FsZT0xXG5cbiAgICAgICAgdGhpcy5zaG93VGlsZXNbMF0ucG9zaXRpb249dGhpcy5vbGRQb3NbMF1cbiAgICAgICAgdGhpcy5zaG93VGlsZXNbMV0ucG9zaXRpb249dGhpcy5vbGRQb3NbMV1cbiAgICAgICAgdGhpcy5zaG93VGlsZXNbMl0ucG9zaXRpb249dGhpcy5vbGRQb3NbMl1cblxuICAgICAgICBjYy50d2Vlbih0aGlzLnNob3dUaWxlc1swXSkuZGVsYXkoMC45KS50bygwLjUse3g6LTE3My45MDcseTotMTg3LjIxMn0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5zaG93VGlsZXNbMV0pLmRlbGF5KDEuMykudG8oMC41LHt4Oi04Ni42OTcseTotMTg3LjIxMn0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5zaG93VGlsZXNbMl0pLmRlbGF5KDEuNykudG8oMC41LHt4OjEuOTQyLHk6LTE4Ny4yMTJ9KS5kZWxheSgwLjEpLmNhbGwoKCk9PlxuICAgICAgICB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNob3dUaWxlc1swXSkudG8oMC4yLHtzY2FsZTowfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zaG93VGlsZXNbMV0pLnRvKDAuMix7c2NhbGU6MH0pLnN0YXJ0KClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2hvd1RpbGVzWzJdKS50bygwLjIse3NjYWxlOjB9KS5kZWxheSgwLjgpLmNhbGwoKCk9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUhlbHAoKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuICAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZVxuICAgIH1cbn1cbiJdfQ==