
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_config_dyn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY29uZmlnX2R5bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUE4QztBQUM5QztJQUFBO0lBU0EsQ0FBQztJQUpXLG9CQUFJLEdBQVosVUFBYSxRQUFpQjtRQUUxQixlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFMYSxxQkFBSyxHQUFnQixJQUFJLHdCQUFjLEVBQUUsQ0FBQTtJQU0zRCxzQkFBQztDQVRELEFBU0MsSUFBQTtrQkFUb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGdhbWVfbGV2ZWxfY2ZnIGZyb20gXCIuL2dhbWVfbGV2ZWxfY2ZnXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lX2NvbmZpZ19keW5cbntcbiAgIFxuICAgIHB1YmxpYyBzdGF0aWMgbGV2ZWw6Z2FtZV9sZXZlbF9jZmc9bmV3IGdhbWVfbGV2ZWxfY2ZnKClcbiAgXG4gICAgc3RhdGljICBsb2FkKGNhbGxiYWNrOkZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgZ2FtZV9jb25maWdfZHluLmxldmVsLnNldHVwKClcbiAgICB9XG59Il19