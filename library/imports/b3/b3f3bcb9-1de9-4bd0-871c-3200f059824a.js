"use strict";
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