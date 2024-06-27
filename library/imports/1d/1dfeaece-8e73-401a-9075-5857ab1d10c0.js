"use strict";
cc._RF.push(module, '1dfea7OjnNAGpB1WFerHRDA', 'model_base');
// scripts/model_base.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = void 0;
function save(target, keyName) {
    var arr = model_base.classMap.get(target.constructor);
    if (arr === undefined) {
        arr = [];
        model_base.classMap.set(target.constructor, arr);
    }
    arr.push(keyName);
}
exports.save = save;
var model_base = /** @class */ (function () {
    function model_base() {
    }
    model_base.prototype.getData = function () {
        var data = {};
        var savepars = model_base.classMap.get(this.constructor);
        for (var i = 0; i < savepars.length; ++i) {
            data[savepars[i]] = this[savepars[i]];
        }
        return data;
    };
    model_base.prototype.setData = function (data) {
        //初始化下数据       
        if (!data)
            return;
        var savepars = model_base.classMap.get(this.constructor);
        for (var i = 0; i < savepars.length; ++i) {
            var element = data[savepars[i]];
            if (element != null || element != undefined) {
                if (Object.prototype.toString.call(element) == "[object Object]") {
                    for (var key in element) {
                        this[savepars[i]][key] = element[key];
                    }
                }
                else
                    this[savepars[i]] = element;
            }
        }
    };
    model_base.classMap = new Map();
    return model_base;
}());
exports.default = model_base;

cc._RF.pop();