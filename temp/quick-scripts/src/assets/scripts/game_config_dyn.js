"use strict";
cc._RF.push(module, '49afdW+1TJErbbtLDT4IQcu', 'game_config_dyn');
// scripts/game_config_dyn.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_level_cfg_1 = require("./game_level_cfg");
var game_config_dyn = /** @class */ (function () {
    function game_config_dyn() {
    }
    game_config_dyn.load = function (callback) {
        game_config_dyn.level.setup();
    };
    game_config_dyn.level = new game_level_cfg_1.default();
    return game_config_dyn;
}());
exports.default = game_config_dyn;

cc._RF.pop();