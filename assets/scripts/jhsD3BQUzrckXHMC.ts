 import { Vl2h6kBYov1uNSwzL7 } from "./koffTaS";
import game_config_dyn from "./game_config_dyn";
import game_core from "./game_core";

const {ccclass, property} = cc._decorator;
//loading 逻辑是，首先一个白色背影加logo ，停留2s，然后一个加载进进度图标，4s， 如果此时 AB已经判断出，则进入AB，否则直接进入到A。在A 中如果判断出是B ，则跳到B
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    public tileBlock:cc.Prefab=null
     @property(cc.Label)
    wxOdV3NSqeDk2e2Prog: cc.Label = null;

    OBX6txtv:cc.Tween=null
    OBX6txtv2:cc.Tween=null
    onLoad () {
        game_config_dyn.load(null)
        game_core.init(this.node,this.tileBlock)
        this.OBX6txtv2=cc.tween(this.node).delay(1).call(()=>{
            this.W1cIA6G()
        }).start()
    }
    // https://docs.cocos.com/creator/2.4/manual/zh/scripting/tween.html#%E6%94%AF%E6%8C%81%E7%BC%93%E5%8A%A8%E4%BB%BB%E6%84%8F%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BB%BB%E6%84%8F%E5%B1%9E%E6%80%A7
    // https://docs.cocos.com/creator/2.4/api/zh/classes/Easing.html#circout
    W1cIA6G()
    {
        this.OBX6txtv=cc.tween({progress:0}).to(2.85,{progress:100},{progress:(start:number, end:number, current:number, ratio:number)=>{
            if(cc.isValid(this.node))
            {
                this.wxOdV3NSqeDk2e2Prog.string=(ratio*100|0) +" %"
            }
            if(ratio>=0.9999999)
            {
                cc.director.loadScene(Vl2h6kBYov1uNSwzL7.u_53B7V)
            }
        },easing:"circInOut"}).start()
    }
    

    // update (dt) {}
}
