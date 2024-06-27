"use strict";
cc._RF.push(module, '5790cn5FOBNm57t2jHfTp1H', 'level_mgr');
// scripts/level_mgr.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var game_constants_1 = require("./game_constants");
var global_model_1 = require("./global_model");
var level_item_1 = require("./level_item");
var level_mgr = /** @class */ (function (_super) {
    __extends(level_mgr, _super);
    function level_mgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page1 = null;
        _this.page2 = null;
        _this.page3 = null;
        _this.page4 = null;
        _this.page5 = null;
        _this.page6 = null;
        _this.AllLvItems = [];
        return _this;
        // update (dt) {}
    }
    level_mgr.prototype.onLoad = function () {
        var _this = this;
        this.page1.children.forEach(function (v) {
            _this.AllLvItems.push(v.getComponent(level_item_1.default));
        });
        this.page2.children.forEach(function (v) {
            _this.AllLvItems.push(v.getComponent(level_item_1.default));
        });
        this.page3.children.forEach(function (v) {
            _this.AllLvItems.push(v.getComponent(level_item_1.default));
        });
        this.page4.children.forEach(function (v) {
            _this.AllLvItems.push(v.getComponent(level_item_1.default));
        });
        this.page5.children.forEach(function (v) {
            _this.AllLvItems.push(v.getComponent(level_item_1.default));
        });
        this.page6.children.forEach(function (v) {
            _this.AllLvItems.push(v.getComponent(level_item_1.default));
        });
        var currentLv = global_model_1.default.game.level;
        this.AllLvItems.forEach(function (v, idx) {
            v.initLevelItem(idx + 1, idx + 1 == currentLv, idx + 1 > currentLv);
        });
        cc.systemEvent.on(game_constants_1.default.select_level_clicked, this.closeLvView, this);
    };
    level_mgr.prototype.updataData = function () {
        var currentLv = global_model_1.default.game.level;
        this.AllLvItems.forEach(function (v, idx) {
            v.initLevelItem(idx + 1, idx + 1 == currentLv, idx + 1 > currentLv);
        });
    };
    level_mgr.prototype.closeLvView = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Node)
    ], level_mgr.prototype, "page1", void 0);
    __decorate([
        property(cc.Node)
    ], level_mgr.prototype, "page2", void 0);
    __decorate([
        property(cc.Node)
    ], level_mgr.prototype, "page3", void 0);
    __decorate([
        property(cc.Node)
    ], level_mgr.prototype, "page4", void 0);
    __decorate([
        property(cc.Node)
    ], level_mgr.prototype, "page5", void 0);
    __decorate([
        property(cc.Node)
    ], level_mgr.prototype, "page6", void 0);
    level_mgr = __decorate([
        ccclass
    ], level_mgr);
    return level_mgr;
}(cc.Component));
exports.default = level_mgr;

cc._RF.pop();