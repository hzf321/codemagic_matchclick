import { admgr } from "./adMgr";

 
const {ccclass, property} = cc._decorator;

@ccclass
export default class loading extends cc.Component {
 
    start(): void {
        admgr.setVideoFailCb(()=>{
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
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(() => {
                        toast.destroy();
                    }).start();
                }
            })
        });
    }

    
    onClick_PrivacyPolicy_btn() {
        cc.sys.openURL("https://sites.google.com/view/matchclickprivacypolicy/home");
    }

}
