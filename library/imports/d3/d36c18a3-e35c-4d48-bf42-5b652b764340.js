"use strict";
cc._RF.push(module, 'd36c1ij41xNSL9CW2UrdkNA', 'level_item');
// scripts/level_item.ts

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
var game_constants_1 = require("./game_constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level_text = null;
        _this.level_grey = null;
        _this.lock_node = null;
        _this.currentLv_node = null;
        _this.current_level = 0;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onLevelClick, this);
    };
    NewClass.prototype.initLevelItem = function (lv, isCurrentLv, isLock) {
        this.current_level = lv;
        this.level_text.string = lv + "";
        this.level_grey.string = lv + "";
        if (isCurrentLv) {
            this.currentLv_node.active = true;
        }
        this.lock_node.active = isLock;
    };
    NewClass.prototype.onLevelClick = function () {
        if (this.lock_node.active == false && this.current_level > 0) {
            cc.systemEvent.emit(game_constants_1.default.select_level_clicked, this.current_level);
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "level_text", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "level_grey", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lock_node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "currentLv_node", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();