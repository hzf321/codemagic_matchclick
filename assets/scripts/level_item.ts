import game_constants from "./game_constants";

 
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    level_text: cc.Label = null;

    @property(cc.Label)
    level_grey: cc.Label = null;

    @property(cc.Node)
    lock_node: cc.Node = null

    @property(cc.Node)
    currentLv_node: cc.Node = null

    current_level=0
    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_END,this.onLevelClick,this)
    }
    initLevelItem(lv:number,isCurrentLv:boolean,isLock:boolean)
    {
        this.current_level=lv 
        this.level_text.string=lv+""
        this.level_grey.string=lv+""
        if(isCurrentLv)
        {
            this.currentLv_node.active=true
        }
        this.lock_node.active=isLock
    }
    onLevelClick()
    {
        if(this.lock_node.active==false && this.current_level>0)
        {
                cc.systemEvent.emit(game_constants.select_level_clicked,this.current_level)
        }
    }
    

    // update (dt) {}
}
