
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/jhsD3BQUzrckXHMC.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2poc0QzQlFVenJja1hITUMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMscUNBQStDO0FBQ2hELHFEQUFnRDtBQUNoRCx5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsK0ZBQStGO0FBRS9GO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0NDO1FBL0JVLGVBQVMsR0FBVyxJQUFJLENBQUE7UUFFL0IseUJBQW1CLEdBQWEsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBVSxJQUFJLENBQUE7UUFDdEIsZUFBUyxHQUFVLElBQUksQ0FBQTs7UUF5QnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBekJHLHlCQUFNLEdBQU47UUFBQSxpQkFNQztRQUxHLHlCQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLG1CQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3QyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBQ0QsMExBQTBMO0lBQzFMLHdFQUF3RTtJQUN4RSwwQkFBTyxHQUFQO1FBQUEsaUJBWUM7UUFWRyxJQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLFVBQUMsS0FBWSxFQUFFLEdBQVUsRUFBRSxPQUFjLEVBQUUsS0FBWTtnQkFDekgsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFDeEI7b0JBQ0ksS0FBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBQyxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFBO2lCQUN0RDtnQkFDRCxJQUFHLEtBQUssSUFBRSxTQUFTLEVBQ25CO29CQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDRCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUNwRDtZQUNMLENBQUMsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1c7SUFFL0I7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDaUI7SUFMcEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtDNUI7SUFBRCxlQUFDO0NBbENELEFBa0NDLENBbENxQyxFQUFFLENBQUMsU0FBUyxHQWtDakQ7a0JBbENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCB7IFZsMmg2a0JZb3YxdU5Td3pMNyB9IGZyb20gXCIuL2tvZmZUYVNcIjtcbmltcG9ydCBnYW1lX2NvbmZpZ19keW4gZnJvbSBcIi4vZ2FtZV9jb25maWdfZHluXCI7XG5pbXBvcnQgZ2FtZV9jb3JlIGZyb20gXCIuL2dhbWVfY29yZVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbi8vbG9hZGluZyDpgLvovpHmmK/vvIzpppblhYjkuIDkuKrnmb3oibLog4zlvbHliqBsb2dvIO+8jOWBnOeVmTJz77yM54S25ZCO5LiA5Liq5Yqg6L296L+b6L+b5bqm5Zu+5qCH77yMNHPvvIwg5aaC5p6c5q2k5pe2IEFC5bey57uP5Yik5pat5Ye677yM5YiZ6L+b5YWlQULvvIzlkKbliJnnm7TmjqXov5vlhaXliLBB44CC5ZyoQSDkuK3lpoLmnpzliKTmlq3lh7rmmK9CIO+8jOWImei3s+WIsEJcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHB1YmxpYyB0aWxlQmxvY2s6Y2MuUHJlZmFiPW51bGxcbiAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHd4T2RWM05TcWVEazJlMlByb2c6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIE9CWDZ0eHR2OmNjLlR3ZWVuPW51bGxcbiAgICBPQlg2dHh0djI6Y2MuVHdlZW49bnVsbFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGdhbWVfY29uZmlnX2R5bi5sb2FkKG51bGwpXG4gICAgICAgIGdhbWVfY29yZS5pbml0KHRoaXMubm9kZSx0aGlzLnRpbGVCbG9jaylcbiAgICAgICAgdGhpcy5PQlg2dHh0djI9Y2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgxKS5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLlcxY0lBNkcoKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL3poL3NjcmlwdGluZy90d2Vlbi5odG1sIyVFNiU5NCVBRiVFNiU4QyU4MSVFNyVCQyU5MyVFNSU4QSVBOCVFNCVCQiVCQiVFNiU4NCU4RiVFNSVBRiVCOSVFOCVCMSVBMSVFNyU5QSU4NCVFNCVCQiVCQiVFNiU4NCU4RiVFNSVCMSU5RSVFNiU4MCVBN1xuICAgIC8vIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvYXBpL3poL2NsYXNzZXMvRWFzaW5nLmh0bWwjY2lyY291dFxuICAgIFcxY0lBNkcoKVxuICAgIHtcbiAgICAgICAgdGhpcy5PQlg2dHh0dj1jYy50d2Vlbih7cHJvZ3Jlc3M6MH0pLnRvKDIuODUse3Byb2dyZXNzOjEwMH0se3Byb2dyZXNzOihzdGFydDpudW1iZXIsIGVuZDpudW1iZXIsIGN1cnJlbnQ6bnVtYmVyLCByYXRpbzpudW1iZXIpPT57XG4gICAgICAgICAgICBpZihjYy5pc1ZhbGlkKHRoaXMubm9kZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy53eE9kVjNOU3FlRGsyZTJQcm9nLnN0cmluZz0ocmF0aW8qMTAwfDApICtcIiAlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHJhdGlvPj0wLjk5OTk5OTkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFZsMmg2a0JZb3YxdU5Td3pMNy51XzUzQjdWKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LGVhc2luZzpcImNpcmNJbk91dFwifSkuc3RhcnQoKVxuICAgIH1cbiAgICBcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=