
let onCloseFinishCb: () => void = null;
let onClosefailCb: () => void = null;
class adMgrClass {

    private static _instance: adMgrClass = null;

    public static getInstance(): adMgrClass {
        if (this._instance == null) {
            this._instance = new adMgrClass();
        }
        return this._instance;
    }


    adapterBg(bgNode: cc.Node) {
        let _bgWidthScale = cc.winSize.width / bgNode.width;
        let _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    }


    showToast(str: string) {
        cc.resources.load("toast", cc.Prefab, (err, prefab) => {
            if (err) {
                return;
            }
            let toast :any= cc.instantiate(prefab);
            let parentNode = cc.Canvas.instance.node;
            if (toast && parentNode) {
                toast.active = true;
                parentNode.addChild(toast);
                let toastLabel = toast.getChildByName("label");
                toastLabel.getComponent(cc.Label).string = str;
                cc.Tween.stopAllByTarget(toast);
                toast.opacity = 255;
                cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(() => {
                    toast.destroy();
                }).start();
            }
        })
    }


    setVideoFailCb(cb: () => void) {
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    }

    //看广告
    showVideo(finishCb: () => void) {
        console.log("android------------看广告")
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        } else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            //@ts-ignore
            jsb.reflection.callStaticMethod("UnityMgr", "loadReward");
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        } else {
            finishCb();
        }

    }

    //打开banner
    showBanner() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        } else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {

        }
    }

    //关闭banner
    closeBanner() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        } else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {

        }
    }

    //打开插屏
    showInterst() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V");
        } else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {

        }
    }

}

export let admgr = adMgrClass.getInstance();


window['onCloseFinishCb'] = () => {

}

/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = () => {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieoFinishCb-------------------------")
    window['onCloseFinishCb']()
}


/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = () => {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    console.log("onCloseVdieofailCbonCloseVdieofailCbonCloseVdieofailCb")
    window['onClosefailCb']()
}

window['onClosefailCb'] = () => {

}