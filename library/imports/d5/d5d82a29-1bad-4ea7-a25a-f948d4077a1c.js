"use strict";
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