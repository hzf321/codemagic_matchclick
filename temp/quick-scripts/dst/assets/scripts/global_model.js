
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/global_model.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dsb2JhbF9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUU5QywyQ0FBc0M7QUFFdEM7SUFBQTtJQWdDQSxDQUFDO0lBN0JpQixpQkFBSSxHQUFsQjtRQUNJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUNiLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDbkQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRWEsd0JBQVcsR0FBekI7UUFDRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RSxPQUFPLE9BQU8sQ0FBQztJQUNsQixDQUFDO0lBSWEscUJBQVEsR0FBdEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RSxJQUFJLFNBQVMsRUFBRTtZQUNYLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7U0FFMUQ7YUFDSTtZQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7U0FDakM7SUFDTCxDQUFDO0lBQ2MscUJBQVEsR0FBdkIsVUFBd0IsSUFBSTtRQUN4QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx3QkFBYyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBN0JhLGlCQUFJLEdBQWUsSUFBSSxvQkFBVSxFQUFFLENBQUM7SUE4QnRELG1CQUFDO0NBaENELEFBZ0NDLElBQUE7a0JBaENvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVfY29uc3RhbnRzIGZyb20gXCIuL2dhbWVfY29uc3RhbnRzXCI7XG5pbXBvcnQgZ2FtZV9oZWxwZXJzIGZyb20gXCIuL2dhbWVfaGVscGVyc1wiO1xuaW1wb3J0IGdhbWVfbW9kZWwgZnJvbSBcIi4vZ2FtZV9tb2RlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbG9iYWxfbW9kZWwge1xuXG4gICAgcHVibGljIHN0YXRpYyBnYW1lOiBnYW1lX21vZGVsID0gbmV3IGdhbWVfbW9kZWwoKTtcbiAgICBwdWJsaWMgc3RhdGljIHNhdmUoKSB7XG4gICAgICAgIHZhciBvYmogPSB7fVxuICAgICAgIG9ialsnY29uZmlnX2dhbWVfb2JqJ10gPSBnbG9iYWxfbW9kZWwuZ2FtZS5nZXREYXRhKClcbiAgICAgICAgZ2xvYmFsX21vZGVsLnNhdmVkYXRhKG9iailcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEdhbWVEYXRhKCkge1xuICAgICAgIGxldCBzdHJkYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGdhbWVfY29uc3RhbnRzLmxvY2FsRGF0YUtleSk7XG4gICAgICAgcmV0dXJuIHN0cmRhdGE7XG4gICAgfVxuXG4gICBcblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZERhdGEoKSB7XG4gICAgICAgIHZhciBsb2NhbGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2FtZV9jb25zdGFudHMubG9jYWxEYXRhS2V5KTtcbiAgICAgICAgaWYgKGxvY2FsZGF0YSkge1xuICAgICAgICAgICAgbG9jYWxkYXRhID0gSlNPTi5wYXJzZShsb2NhbGRhdGEpO1xuICAgICAgICAgICAgZ2xvYmFsX21vZGVsLmdhbWUuc2V0RGF0YShsb2NhbGRhdGFbJ2NvbmZpZ19nYW1lX29iaiddKVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWxfbW9kZWwuZ2FtZS5zZXREZWZhdWx0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBzYXZlZGF0YShkYXRhKSB7XG4gICAgICAgIHZhciBzdHJkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShnYW1lX2NvbnN0YW50cy5sb2NhbERhdGFLZXksIHN0cmRhdGEpO1xuICAgICAgICBkYXRhLmdhbWUgPSB7fVxuICAgIH1cbn0iXX0=