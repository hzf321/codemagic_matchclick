"use strict";
cc._RF.push(module, '399be1YvapJequSK+8ixsJJ', 'global_model');
// scripts/global_model.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_constants_1 = require("./game_constants");
var game_model_1 = require("./game_model");
var global_model = /** @class */ (function () {
    function global_model() {
    }
    global_model.save = function () {
        var obj = {};
        obj['config_game_obj'] = global_model.game.getData();
        global_model.savedata(obj);
    };
    global_model.getGameData = function () {
        var strdata = cc.sys.localStorage.getItem(game_constants_1.default.localDataKey);
        return strdata;
    };
    global_model.loadData = function () {
        var localdata = cc.sys.localStorage.getItem(game_constants_1.default.localDataKey);
        if (localdata) {
            localdata = JSON.parse(localdata);
            global_model.game.setData(localdata['config_game_obj']);
        }
        else {
            global_model.game.setDefault();
        }
    };
    global_model.savedata = function (data) {
        var strdata = JSON.stringify(data);
        cc.sys.localStorage.setItem(game_constants_1.default.localDataKey, strdata);
        data.game = {};
    };
    global_model.game = new game_model_1.default();
    return global_model;
}());
exports.default = global_model;

cc._RF.pop();