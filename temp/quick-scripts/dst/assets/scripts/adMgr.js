
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/adMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfc91ISjl9FK4zLCyc6nM4E', 'adMgr');
// scripts/adMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admgr = void 0;
var onCloseFinishCb = null;
var onClosefailCb = null;
var adMgrClass = /** @class */ (function () {
    function adMgrClass() {
    }
    adMgrClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new adMgrClass();
        }
        return this._instance;
    };
    adMgrClass.prototype.adapterBg = function (bgNode) {
        var _bgWidthScale = cc.winSize.width / bgNode.width;
        var _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    };
    adMgrClass.prototype.showToast = function (str) {
        cc.resources.load("toast", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var toast = cc.instantiate(prefab);
            var parentNode = cc.Canvas.instance.node;
            if (toast && parentNode) {
                toast.active = true;
                parentNode.addChild(toast);
                var toastLabel = toast.getChildByName("label");
                toastLabel.getComponent(cc.Label).string = str;
                cc.Tween.stopAllByTarget(toast);
                toast.opacity = 255;
                cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                    toast.destroy();
                }).start();
            }
        });
    };
    adMgrClass.prototype.setVideoFailCb = function (cb) {
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    };
    //看广告
    adMgrClass.prototype.showVideo = function (finishCb) {
        console.log("android------------看广告");
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            //@ts-ignore
            jsb.reflection.callStaticMethod("UnityMgr", "loadReward");
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        }
        else {
            finishCb();
        }
    };
    //打开banner
    adMgrClass.prototype.showBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    //关闭banner
    adMgrClass.prototype.closeBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    //打开插屏
    adMgrClass.prototype.showInterst = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V");
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
        }
    };
    adMgrClass._instance = null;
    return adMgrClass;
}());
exports.admgr = adMgrClass.getInstance();
window['onCloseFinishCb'] = function () {
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieoFinishCb-------------------------");
    window['onCloseFinishCb']();
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieofailCbonCloseVdieofailCbonCloseVdieofailCb");
    window['onClosefailCb']();
};
window['onClosefailCb'] = function () {
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO0lBQ3JFLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFBO0FBQzdCLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRztBQUUxQixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBvbkNsb3NlRmluaXNoQ2I6ICgpID0+IHZvaWQgPSBudWxsO1xubGV0IG9uQ2xvc2VmYWlsQ2I6ICgpID0+IHZvaWQgPSBudWxsO1xuY2xhc3MgYWRNZ3JDbGFzcyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGFkTWdyQ2xhc3MgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBhZE1nckNsYXNzIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IGFkTWdyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG5cbiAgICBhZGFwdGVyQmcoYmdOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBfYmdXaWR0aFNjYWxlID0gY2Mud2luU2l6ZS53aWR0aCAvIGJnTm9kZS53aWR0aDtcbiAgICAgICAgbGV0IF9iZ0hlaWdodFNjYWxlID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBiZ05vZGUuaGVpZ2h0O1xuICAgICAgICBiZ05vZGUuc2NhbGUgPSBNYXRoLm1heChfYmdXaWR0aFNjYWxlLCBfYmdIZWlnaHRTY2FsZSk7XG4gICAgfVxuXG5cbiAgICBzaG93VG9hc3Qoc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJ0b2FzdFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0b2FzdCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xuICAgICAgICAgICAgaWYgKHRvYXN0ICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0b2FzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQodG9hc3QpO1xuICAgICAgICAgICAgICAgIGxldCB0b2FzdExhYmVsID0gdG9hc3QuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICAgICB0b2FzdExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RyO1xuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0b2FzdCk7XG4gICAgICAgICAgICAgICAgdG9hc3Qub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0b2FzdCkudG8oMC4xNSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMTUsIHsgc2NhbGU6IDEgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBzZXRWaWRlb0ZhaWxDYihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICB3aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSA9IG51bGw7XG4gICAgICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddID0gY2I7XG4gICAgfVxuXG4gICAgLy/nnIvlub/lkYpcbiAgICBzaG93VmlkZW8oZmluaXNoQ2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmRyb2lkLS0tLS0tLS0tLS0t55yL5bm/5ZGKXCIpXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93U2hpUGluZ1wiLCBcIigpVlwiKTtcbiAgICAgICAgICAgIG9uQ2xvc2VGaW5pc2hDYiA9IG51bGw7XG4gICAgICAgICAgICBvbkNsb3NlRmluaXNoQ2IgPSBmaW5pc2hDYjtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlVuaXR5TWdyXCIsIFwibG9hZFJld2FyZFwiKTtcbiAgICAgICAgICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ10gPSBudWxsO1xuICAgICAgICAgICAgd2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9IGZpbmlzaENiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmluaXNoQ2IoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy/miZPlvIBiYW5uZXJcbiAgICBzaG93QmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd2Jhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/lhbPpl61iYW5uZXJcbiAgICBjbG9zZUJhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImhpZGViYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byA5o+S5bGPXG4gICAgc2hvd0ludGVyc3QoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93Q2hhcGluZ1wiLCBcIigpVlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBsZXQgYWRtZ3IgPSBhZE1nckNsYXNzLmdldEluc3RhbmNlKCk7XG5cblxud2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9ICgpID0+IHtcblxufVxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9GaW5pc2hDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcIm9uQ2xvc2VWZGllb0ZpbmlzaENiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ10oKVxufVxuXG5cbi8qKnNka+iwg+eUqGpz6YeM6Z2id2luZG935YWs5LyX55qE5Ye95pWwICovXG53aW5kb3dbJ29uQ2xvc2VWZGllb2ZhaWxDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcIm9uQ2xvc2VWZGllb2ZhaWxDYm9uQ2xvc2VWZGllb2ZhaWxDYm9uQ2xvc2VWZGllb2ZhaWxDYlwiKVxuICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddKClcbn1cblxud2luZG93WydvbkNsb3NlZmFpbENiJ10gPSAoKSA9PiB7XG5cbn0iXX0=