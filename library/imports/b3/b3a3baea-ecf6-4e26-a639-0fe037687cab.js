"use strict";
cc._RF.push(module, 'b3a3brq7PZOJqY5D+A3aHyr', 'game_model');
// scripts/game_model.ts

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
var model_base_1 = require("./model_base");
var game_model = /** @class */ (function (_super) {
    __extends(game_model, _super);
    function game_model() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 1;
        _this.selectedLevel = 1;
        //关卡星星
        _this.level_star = {}; //key:lv value:star
        // @save 
        // public money: number = 0
        _this.shuffle_counter = 5;
        _this.undo_counter = 5;
        _this.hint_tip_counter = 5;
        _this.move_up_counter = 5;
        return _this;
    }
    game_model.prototype.setDefault = function () {
        //新号
        //设置默认设施
    };
    game_model.prototype.setData = function (data) {
        _super.prototype.setData.call(this, data);
        console.log("Set Data... ", data);
        this.selectedLevel = this.level;
    };
    __decorate([
        model_base_1.save
    ], game_model.prototype, "level", void 0);
    __decorate([
        model_base_1.save
    ], game_model.prototype, "level_star", void 0);
    __decorate([
        model_base_1.save
    ], game_model.prototype, "shuffle_counter", void 0);
    __decorate([
        model_base_1.save
    ], game_model.prototype, "undo_counter", void 0);
    __decorate([
        model_base_1.save
    ], game_model.prototype, "hint_tip_counter", void 0);
    __decorate([
        model_base_1.save
    ], game_model.prototype, "move_up_counter", void 0);
    return game_model;
}(model_base_1.default));
exports.default = game_model;

cc._RF.pop();