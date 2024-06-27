import global_model from "./global_model";

const { ccclass, property } = cc._decorator;

@ccclass
export default class how_to_play_game extends cc.Component {
    @property(cc.Node)
    node_box: cc.Node=null

    @property([cc.Node])
    showTiles: cc.Node[] = []
    oldPos: any = []
    @property(cc.Node)
    node_ui:cc.Node=null
    start() {
        this.node_ui.scale = 1
        this.node.opacity=255
        this.node_ui.opacity=0
        this.oldPos[0]=this.showTiles[0].position
        this.oldPos[1]=this.showTiles[1].position
        this.oldPos[2]=this.showTiles[2].position

        if(global_model.game.selectedLevel==1)
            {
                cc.tween(this.node_ui).to(0.25, { scale: 1,opacity:255 }, { easing: 'sineOut' }).start()
                this.playHelp()
            }
            else
            {
                this.node.active=false
            }
    }
    playHelp() {
        this.showTiles[0].scale=1
        this.showTiles[1].scale=1
        this.showTiles[2].scale=1

        this.showTiles[0].position=this.oldPos[0]
        this.showTiles[1].position=this.oldPos[1]
        this.showTiles[2].position=this.oldPos[2]

        cc.tween(this.showTiles[0]).delay(0.9).to(0.5,{x:-173.907,y:-187.212}).start()
        cc.tween(this.showTiles[1]).delay(1.3).to(0.5,{x:-86.697,y:-187.212}).start()
        cc.tween(this.showTiles[2]).delay(1.7).to(0.5,{x:1.942,y:-187.212}).delay(0.1).call(()=>
        {
            cc.tween(this.showTiles[0]).to(0.2,{scale:0}).start()
            cc.tween(this.showTiles[1]).to(0.2,{scale:0}).start()
            cc.tween(this.showTiles[2]).to(0.2,{scale:0}).delay(0.8).call(()=>
            {
                this.playHelp()
            }).start()
        }).start()
    }
    close(): void {
         this.node.active=false
    }
}
