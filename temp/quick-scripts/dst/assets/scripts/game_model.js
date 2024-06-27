
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_model.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWdEO0FBRWhEO0lBQXdDLDhCQUFVO0lBQWxEO1FBQUEscUVBc0NDO1FBbENVLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFakMsTUFBTTtRQUVOLGdCQUFVLEdBQUcsRUFBRSxDQUFDLENBQUEsbUJBQW1CO1FBQ25DLFNBQVM7UUFDVCwyQkFBMkI7UUFHcEIscUJBQWUsR0FBVyxDQUFDLENBQUE7UUFHM0Isa0JBQVksR0FBVyxDQUFDLENBQUE7UUFHeEIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFBO1FBRzVCLHFCQUFlLEdBQVcsQ0FBQyxDQUFBOztJQWN0QyxDQUFDO0lBVkcsK0JBQVUsR0FBVjtRQUNJLElBQUk7UUFDSixRQUFRO0lBRVosQ0FBQztJQUNNLDRCQUFPLEdBQWQsVUFBZSxJQUFTO1FBQ3BCLGlCQUFNLE9BQU8sWUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDakMsQ0FBQztJQWpDRDtRQURDLGlCQUFJOzZDQUNvQjtJQU16QjtRQURDLGlCQUFJO2tEQUNXO0lBS2hCO1FBREMsaUJBQUk7dURBQzZCO0lBR2xDO1FBREMsaUJBQUk7b0RBQzBCO0lBRy9CO1FBREMsaUJBQUk7d0RBQzhCO0lBR25DO1FBREMsaUJBQUk7dURBQzZCO0lBY3RDLGlCQUFDO0NBdENELEFBc0NDLENBdEN1QyxvQkFBVSxHQXNDakQ7a0JBdENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZGVsX2Jhc2UsIHsgc2F2ZSB9IGZyb20gXCIuL21vZGVsX2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZV9tb2RlbCBleHRlbmRzIG1vZGVsX2Jhc2Uge1xuXG4gICAgXG4gICAgQHNhdmUgXG4gICAgcHVibGljIGxldmVsOiBudW1iZXIgPSAxO1xuXG4gICAgcHVibGljIHNlbGVjdGVkTGV2ZWw6IG51bWJlciA9IDE7XG5cbiAgICAvL+WFs+WNoeaYn+aYn1xuICAgIEBzYXZlIFxuICAgIGxldmVsX3N0YXIgPSB7fTsvL2tleTpsdiB2YWx1ZTpzdGFyXG4gICAgLy8gQHNhdmUgXG4gICAgLy8gcHVibGljIG1vbmV5OiBudW1iZXIgPSAwXG5cbiAgICBAc2F2ZSBcbiAgICBwdWJsaWMgc2h1ZmZsZV9jb3VudGVyOiBudW1iZXIgPSA1XG5cbiAgICBAc2F2ZSBcbiAgICBwdWJsaWMgdW5kb19jb3VudGVyOiBudW1iZXIgPSA1XG5cbiAgICBAc2F2ZSBcbiAgICBwdWJsaWMgaGludF90aXBfY291bnRlcjogbnVtYmVyID0gNVxuXG4gICAgQHNhdmUgXG4gICAgcHVibGljIG1vdmVfdXBfY291bnRlcjogbnVtYmVyID0gNVxuXG5cblxuICAgIHNldERlZmF1bHQoKSB7XG4gICAgICAgIC8v5paw5Y+3XG4gICAgICAgIC8v6K6+572u6buY6K6k6K6+5pa9XG5cbiAgICB9XG4gICAgcHVibGljIHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIHN1cGVyLnNldERhdGEoZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXQgRGF0YS4uLiBcIixkYXRhKVxuICAgICAgICB0aGlzLnNlbGVjdGVkTGV2ZWw9dGhpcy5sZXZlbFxuICAgIH1cbn1cbiJdfQ==