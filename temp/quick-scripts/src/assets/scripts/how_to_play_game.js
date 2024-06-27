"use strict";
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