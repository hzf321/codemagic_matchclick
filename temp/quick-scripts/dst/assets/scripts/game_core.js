
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_core.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3f3by5HelL0IccMgDwWYJK', 'game_core');
// scripts/game_core.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_model_1 = require("./global_model");
var pool_manager_1 = require("./pool_manager");
//游戏核心封装
var game_core = /** @class */ (function () {
    function game_core() {
    }
    game_core.init = function (node, tileBlock) {
        game_core.pool.init(undefined, tileBlock);
        global_model_1.default.loadData();
    };
    game_core.pool = new pool_manager_1.default();
    return game_core;
}());
exports.default = game_core;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBeUM7QUFDekMsUUFBUTtBQUNSO0lBQUE7SUFTQSxDQUFDO0lBTFUsY0FBSSxHQUFYLFVBQVksSUFBWSxFQUFDLFNBQW1CO1FBRXhDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUMsQ0FBQTtRQUN4QyxzQkFBWSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFMYSxjQUFJLEdBQWMsSUFBSSxzQkFBWSxFQUFFLENBQUE7SUFNdEQsZ0JBQUM7Q0FURCxBQVNDLElBQUE7a0JBVG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2xvYmFsX21vZGVsIGZyb20gXCIuL2dsb2JhbF9tb2RlbFwiXG5pbXBvcnQgcG9vbF9tYW5hZ2VyIGZyb20gXCIuL3Bvb2xfbWFuYWdlclwiXG4vL+a4uOaIj+aguOW/g+WwgeijhVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZV9jb3JlXG57XG4gICBcbiAgICBwdWJsaWMgc3RhdGljIHBvb2w6cG9vbF9tYW5hZ2VyPW5ldyBwb29sX21hbmFnZXIoKVxuICAgIHN0YXRpYyBpbml0KG5vZGU6Y2MuTm9kZSx0aWxlQmxvY2s6Y2MuUHJlZmFiKVxuICAgIHtcbiAgICAgICAgZ2FtZV9jb3JlLnBvb2wuaW5pdCh1bmRlZmluZWQsdGlsZUJsb2NrKVxuICAgICAgICBnbG9iYWxfbW9kZWwubG9hZERhdGEoKVxuICAgIH1cbn0iXX0=