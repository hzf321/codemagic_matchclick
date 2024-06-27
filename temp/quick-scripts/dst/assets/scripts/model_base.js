
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/model_base.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVsX2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBZ0IsSUFBSSxDQUFDLE1BQVcsRUFBRSxPQUFlO0lBQzdDLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7UUFDbkIsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDcEQ7SUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFQRCxvQkFPQztBQUdEO0lBQUE7SUE0QkEsQ0FBQztJQTFCVSw0QkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2IsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLElBQVM7UUFDcEIsZUFBZTtRQUNmLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDeEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFO2dCQUN6QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxpQkFBaUIsRUFBRTtvQkFDOUQsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3pDO2lCQUNKOztvQkFFRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQ25DO1NBQ0o7SUFDTCxDQUFDO0lBMUJhLG1CQUFRLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7SUEyQjdELGlCQUFDO0NBNUJELEFBNEJDLElBQUE7a0JBNUJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlKHRhcmdldDogYW55LCBrZXlOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgYXJyID0gbW9kZWxfYmFzZS5jbGFzc01hcC5nZXQodGFyZ2V0LmNvbnN0cnVjdG9yKTtcbiAgICBpZiAoYXJyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXJyID0gW107XG4gICAgICAgIG1vZGVsX2Jhc2UuY2xhc3NNYXAuc2V0KHRhcmdldC5jb25zdHJ1Y3RvciwgYXJyKTtcbiAgICB9XG4gICAgYXJyLnB1c2goa2V5TmFtZSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9kZWxfYmFzZSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc01hcDogTWFwPEZ1bmN0aW9uLCBhbnlbXT4gPSBuZXcgTWFwKCk7XG4gICAgcHVibGljIGdldERhdGEoKTogb2JqZWN0IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICBsZXQgc2F2ZXBhcnMgPSBtb2RlbF9iYXNlLmNsYXNzTWFwLmdldCh0aGlzLmNvbnN0cnVjdG9yKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVwYXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBkYXRhW3NhdmVwYXJzW2ldXSA9IHRoaXNbc2F2ZXBhcnNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IGFueSkge1xuICAgICAgICAvL+WIneWni+WMluS4i+aVsOaNriAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgICAgIGxldCBzYXZlcGFycyA9IG1vZGVsX2Jhc2UuY2xhc3NNYXAuZ2V0KHRoaXMuY29uc3RydWN0b3IpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZXBhcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW3NhdmVwYXJzW2ldXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwgfHwgZWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsZW1lbnQpID09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tzYXZlcGFyc1tpXV1ba2V5XSA9IGVsZW1lbnRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc2F2ZXBhcnNbaV1dID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==