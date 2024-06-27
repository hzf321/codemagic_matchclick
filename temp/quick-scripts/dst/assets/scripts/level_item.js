
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/level_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xldmVsX2l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBR3hDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUNDO1FBcENHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsb0JBQWMsR0FBWSxJQUFJLENBQUE7UUFFOUIsbUJBQWEsR0FBQyxDQUFDLENBQUE7O1FBd0JmLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJhLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUNELGdDQUFhLEdBQWIsVUFBYyxFQUFTLEVBQUMsV0FBbUIsRUFBQyxNQUFjO1FBRXRELElBQUksQ0FBQyxhQUFhLEdBQUMsRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQTtRQUM1QixJQUFHLFdBQVcsRUFDZDtZQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQTtTQUNsQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQTtJQUNoQyxDQUFDO0lBQ0QsK0JBQVksR0FBWjtRQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUN2RDtZQUNRLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHdCQUFjLENBQUMsb0JBQW9CLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ2xGO0lBQ0wsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNZO0lBWmIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVDNUI7SUFBRCxlQUFDO0NBdkNELEFBdUNDLENBdkNxQyxFQUFFLENBQUMsU0FBUyxHQXVDakQ7a0JBdkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVfY29uc3RhbnRzIGZyb20gXCIuL2dhbWVfY29uc3RhbnRzXCI7XG5cbiBcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxldmVsX3RleHQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbF9ncmV5OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2NrX25vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjdXJyZW50THZfbm9kZTogY2MuTm9kZSA9IG51bGxcblxuICAgIGN1cnJlbnRfbGV2ZWw9MFxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vbkxldmVsQ2xpY2ssdGhpcylcbiAgICB9XG4gICAgaW5pdExldmVsSXRlbShsdjpudW1iZXIsaXNDdXJyZW50THY6Ym9vbGVhbixpc0xvY2s6Ym9vbGVhbilcbiAgICB7XG4gICAgICAgIHRoaXMuY3VycmVudF9sZXZlbD1sdiBcbiAgICAgICAgdGhpcy5sZXZlbF90ZXh0LnN0cmluZz1sditcIlwiXG4gICAgICAgIHRoaXMubGV2ZWxfZ3JleS5zdHJpbmc9bHYrXCJcIlxuICAgICAgICBpZihpc0N1cnJlbnRMdilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50THZfbm9kZS5hY3RpdmU9dHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9ja19ub2RlLmFjdGl2ZT1pc0xvY2tcbiAgICB9XG4gICAgb25MZXZlbENsaWNrKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMubG9ja19ub2RlLmFjdGl2ZT09ZmFsc2UgJiYgdGhpcy5jdXJyZW50X2xldmVsPjApXG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KGdhbWVfY29uc3RhbnRzLnNlbGVjdF9sZXZlbF9jbGlja2VkLHRoaXMuY3VycmVudF9sZXZlbClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=