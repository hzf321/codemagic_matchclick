
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efcccUpCtlOR4hEi1SxD5jj', 'loading');
// scripts/loading.ts

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
var adMgr_1 = require("./adMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var loading = /** @class */ (function (_super) {
    __extends(loading, _super);
    function loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    loading.prototype.start = function () {
        adMgr_1.admgr.setVideoFailCb(function () {
            cc.resources.load("toast", cc.Prefab, function (err, prefab) {
                if (err) {
                    return;
                }
                var toast = cc.instantiate(prefab);
                var parentNode = cc.Canvas.instance.node;
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    var toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                        toast.destroy();
                    }).start();
                }
            });
        });
    };
    loading.prototype.onClick_PrivacyPolicy_btn = function () {
        cc.sys.openURL("https://sites.google.com/view/matchclickprivacypolicy/home");
    };
    loading = __decorate([
        ccclass
    ], loading);
    return loading;
}(cc.Component));
exports.default = loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBRzFCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEOztJQThCQSxDQUFDO0lBNUJHLHVCQUFLLEdBQUw7UUFDSSxhQUFLLENBQUMsY0FBYyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQzlDLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxLQUFLLEdBQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxJQUFJLEtBQUssSUFBSSxVQUFVLEVBQUU7b0JBQ3JCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNwQixVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7b0JBQ2xFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNwRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCwyQ0FBeUIsR0FBekI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUE1QmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E4QjNCO0lBQUQsY0FBQztDQTlCRCxBQThCQyxDQTlCb0MsRUFBRSxDQUFDLFNBQVMsR0E4QmhEO2tCQTlCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkbWdyIH0gZnJvbSBcIi4vYWRNZ3JcIjtcblxuIFxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2FkaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiBcbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgYWRtZ3Iuc2V0VmlkZW9GYWlsQ2IoKCk9PntcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwidG9hc3RcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHRvYXN0IDphbnk9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcbiAgICAgICAgICAgICAgICBpZiAodG9hc3QgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKHRvYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvYXN0TGFiZWwgPSB0b2FzdC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2FzdExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJObyBhZHMgYXQgdGhlIG1vbWVudFwiO1xuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodG9hc3QpO1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0b2FzdCkudG8oMC4xNSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMTUsIHsgc2NhbGU6IDEgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBcbiAgICBvbkNsaWNrX1ByaXZhY3lQb2xpY3lfYnRuKCkge1xuICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L21hdGNoY2xpY2twcml2YWN5cG9saWN5L2hvbWVcIik7XG4gICAgfVxuXG59XG4iXX0=