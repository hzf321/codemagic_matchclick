
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pool_manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5d82opG61Op6Ja+UjUB3oc', 'pool_manager');
// scripts/pool_manager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var pool_manager = /** @class */ (function () {
    function pool_manager() {
        this.pools = {};
        this.resKey = {};
    }
    pool_manager.prototype.init = function (callback, res) {
        this.resKey['TileBlock'] = res;
        for (var i = 0; i < 100; i++) {
            var node = cc.instantiate(res);
            this.recover('TileBlock', node);
        }
        callback && callback();
    };
    pool_manager.prototype.get = function (key) {
        if (this.pools[key] == null) {
            this.pools[key] = new cc.NodePool();
        }
        if (this.pools[key].size() > 0) {
            var node_1 = this.pools[key].get();
            return node_1.getComponent(node_1.name);
        }
        var node = cc.instantiate(this.resKey[key]);
        return node.getComponent(node.name);
    };
    pool_manager.prototype.recover = function (key, node) {
        if (this.pools[key] == null) {
            this.pools[key] = new cc.NodePool();
        }
        this.pools[key].put(node);
    };
    pool_manager = __decorate([
        ccclass
    ], pool_manager);
    return pool_manager;
}());
exports.default = pool_manager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Bvb2xfbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQUE7UUFHSSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBUSxFQUFFLENBQUE7SUFpQ3BCLENBQUM7SUEvQkcsMkJBQUksR0FBSixVQUFLLFFBQVEsRUFBQyxHQUFhO1FBR3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFBO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNsQztRQUNELFFBQVEsSUFBRSxRQUFRLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRUQsMEJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDWCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDdEM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDaEMsT0FBTyxNQUFJLENBQUMsWUFBWSxDQUFDLE1BQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN0QztRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFdkMsQ0FBQztJQUNELDhCQUFPLEdBQVAsVUFBUSxHQUFXLEVBQUUsSUFBYTtRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDdEM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBbENnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcUNoQztJQUFELG1CQUFDO0NBckNELEFBcUNDLElBQUE7a0JBckNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZ2FtZV9oZWxwZXJzIGZyb20gXCIuL2dhbWVfaGVscGVyc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBvb2xfbWFuYWdlciB7XG5cblxuICAgIHBvb2xzOiBhbnkgPSB7fTtcbiAgICByZXNLZXk6IGFueSA9IHt9XG5cbiAgICBpbml0KGNhbGxiYWNrLHJlczpjYy5QcmVmYWIpIFxuICAgIHtcblxuICAgICAgICB0aGlzLnJlc0tleVsnVGlsZUJsb2NrJ10gPSByZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXMpXG4gICAgICAgICAgICB0aGlzLnJlY292ZXIoJ1RpbGVCbG9jaycsIG5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2smJmNhbGxiYWNrKClcbiAgICB9XG5cbiAgICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucG9vbHNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2xzW2tleV0gPSBuZXcgY2MuTm9kZVBvb2woKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvb2xzW2tleV0uc2l6ZSgpID4gMCkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnBvb2xzW2tleV0uZ2V0KClcbiAgICAgICAgICAgIHJldHVybiBub2RlLmdldENvbXBvbmVudChub2RlLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlc0tleVtrZXldKVxuICAgICAgICByZXR1cm4gbm9kZS5nZXRDb21wb25lbnQobm9kZS5uYW1lKVxuXG4gICAgfVxuICAgIHJlY292ZXIoa2V5OiBzdHJpbmcsIG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMucG9vbHNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2xzW2tleV0gPSBuZXcgY2MuTm9kZVBvb2woKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9vbHNba2V5XS5wdXQobm9kZSlcbiAgICB9XG5cblxufVxuXG5cbiJdfQ==