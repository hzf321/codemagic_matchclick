
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/level_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xldmVsX21nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLDJDQUFxQztBQUVyQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXFFQztRQWxFRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixnQkFBVSxHQUFjLEVBQUUsQ0FBQTs7UUFnRDFCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0NHLDBCQUFNLEdBQU47UUFBQSxpQkErQkM7UUE3QkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUV6QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUV6QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUV6QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUV6QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUVyQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFBO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUVyQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFBO1FBQ04sSUFBSSxTQUFTLEdBQUMsc0JBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFDLEdBQUc7WUFDMUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxFQUFDLEdBQUcsR0FBQyxDQUFDLElBQUksU0FBUyxFQUFFLEdBQUcsR0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLENBQUE7UUFDOUQsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyx3QkFBYyxDQUFDLG9CQUFvQixFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEYsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDSSxJQUFJLFNBQVMsR0FBQyxzQkFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUMsR0FBRztZQUMxQixDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUMsR0FBRyxHQUFDLENBQUMsSUFBSSxTQUFTLEVBQUUsR0FBRyxHQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO0lBRTFCLENBQUM7SUEvREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFsQkwsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXFFN0I7SUFBRCxnQkFBQztDQXJFRCxBQXFFQyxDQXJFc0MsRUFBRSxDQUFDLFNBQVMsR0FxRWxEO2tCQXJFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IGdhbWVfY29uc3RhbnRzIGZyb20gXCIuL2dhbWVfY29uc3RhbnRzXCI7XG5pbXBvcnQgZ2xvYmFsX21vZGVsIGZyb20gXCIuL2dsb2JhbF9tb2RlbFwiO1xuaW1wb3J0IGxldmVsX2l0ZW0gZnJvbSBcIi4vbGV2ZWxfaXRlbVwiXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGV2ZWxfbWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhZ2UxOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhZ2UyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhZ2UzOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhZ2U0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhZ2U1OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhZ2U2OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEFsbEx2SXRlbXM6bGV2ZWxfaXRlbVtdPVtdXG5cbiAgICBvbkxvYWQgKCkgXG4gICAge1xuICAgICAgICB0aGlzLnBhZ2UxLmNoaWxkcmVuLmZvckVhY2godj0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQWxsTHZJdGVtcy5wdXNoKHYuZ2V0Q29tcG9uZW50KGxldmVsX2l0ZW0pKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBhZ2UyLmNoaWxkcmVuLmZvckVhY2godj0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQWxsTHZJdGVtcy5wdXNoKHYuZ2V0Q29tcG9uZW50KGxldmVsX2l0ZW0pKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBhZ2UzLmNoaWxkcmVuLmZvckVhY2godj0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQWxsTHZJdGVtcy5wdXNoKHYuZ2V0Q29tcG9uZW50KGxldmVsX2l0ZW0pKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBhZ2U0LmNoaWxkcmVuLmZvckVhY2godj0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQWxsTHZJdGVtcy5wdXNoKHYuZ2V0Q29tcG9uZW50KGxldmVsX2l0ZW0pKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBhZ2U1LmNoaWxkcmVuLmZvckVhY2godj0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5BbGxMdkl0ZW1zLnB1c2godi5nZXRDb21wb25lbnQobGV2ZWxfaXRlbSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB0aGlzLnBhZ2U2LmNoaWxkcmVuLmZvckVhY2godj0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5BbGxMdkl0ZW1zLnB1c2godi5nZXRDb21wb25lbnQobGV2ZWxfaXRlbSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICBsZXQgY3VycmVudEx2PWdsb2JhbF9tb2RlbC5nYW1lLmxldmVsXG4gICAgICAgIHRoaXMuQWxsTHZJdGVtcy5mb3JFYWNoKCh2LGlkeCk9PntcbiAgICAgICAgICAgIHYuaW5pdExldmVsSXRlbShpZHgrMSxpZHgrMSA9PSBjdXJyZW50THYgLGlkeCsxPmN1cnJlbnRMdilcbiAgICAgICAgfSlcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oZ2FtZV9jb25zdGFudHMuc2VsZWN0X2xldmVsX2NsaWNrZWQsdGhpcy5jbG9zZUx2Vmlldyx0aGlzKVxuICAgIH1cblxuICAgIHVwZGF0YURhdGEoKSB7XG4gICAgICAgIGxldCBjdXJyZW50THY9Z2xvYmFsX21vZGVsLmdhbWUubGV2ZWxcbiAgICAgICAgdGhpcy5BbGxMdkl0ZW1zLmZvckVhY2goKHYsaWR4KT0+e1xuICAgICAgICAgICAgdi5pbml0TGV2ZWxJdGVtKGlkeCsxLGlkeCsxID09IGN1cnJlbnRMdiAsaWR4KzE+Y3VycmVudEx2KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsb3NlTHZWaWV3KClcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2VcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=