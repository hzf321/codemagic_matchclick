const {ccclass, property} = cc._decorator;
import game_constants from "./game_constants";
import global_model from "./global_model";
import level_item from "./level_item"
@ccclass
export default class level_mgr extends cc.Component {

    @property(cc.Node)
    page1: cc.Node = null;

    @property(cc.Node)
    page2: cc.Node = null;

    @property(cc.Node)
    page3: cc.Node = null;

    @property(cc.Node)
    page4: cc.Node = null;

    @property(cc.Node)
    page5: cc.Node = null;

    @property(cc.Node)
    page6: cc.Node = null;

    AllLvItems:level_item[]=[]

    onLoad () 
    {
        this.page1.children.forEach(v=>
        {
            this.AllLvItems.push(v.getComponent(level_item))
        })
        this.page2.children.forEach(v=>
        {
            this.AllLvItems.push(v.getComponent(level_item))
        })
        this.page3.children.forEach(v=>
        {
            this.AllLvItems.push(v.getComponent(level_item))
        })
        this.page4.children.forEach(v=>
        {
            this.AllLvItems.push(v.getComponent(level_item))
        })
        this.page5.children.forEach(v=>
            {
                this.AllLvItems.push(v.getComponent(level_item))
            })
        this.page6.children.forEach(v=>
            {
                this.AllLvItems.push(v.getComponent(level_item))
            })
        let currentLv=global_model.game.level
        this.AllLvItems.forEach((v,idx)=>{
            v.initLevelItem(idx+1,idx+1 == currentLv ,idx+1>currentLv)
        })
        cc.systemEvent.on(game_constants.select_level_clicked,this.closeLvView,this)
    }

    updataData() {
        let currentLv=global_model.game.level
        this.AllLvItems.forEach((v,idx)=>{
            v.initLevelItem(idx+1,idx+1 == currentLv ,idx+1>currentLv)
        })
    }

    closeLvView()
    {
        this.node.active=false

    }

    // update (dt) {}
}
