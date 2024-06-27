import game_core from "./game_core";
import game_helpers from "./game_helpers";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TileBlock extends cc.Component {

    @property(cc.Sprite)
    sp_icon: cc.Sprite = null;


    @property(cc.Node)
    tileBg: cc.Node = null;


    remove: boolean = false
    private _type: number;

    row: number
    col: number
    layer: number
    aniObj = { c: 0 }

    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
        cc.resources.load("ares_bndl/icons/"+value,cc.Texture2D,(err, texture: cc.Texture2D) => {
            let sp = new cc.SpriteFrame(texture)
            this.sp_icon.spriteFrame = sp

        })
    }

    start() {

    }
    private _dark: boolean = false;
    public get dark(): boolean {
        return this._dark;
    }
    public set dark(value: boolean) {
        this._dark = value;

    }
    setDark(value: boolean, ani: boolean = false) {
        if (this._dark != value) {
            this._dark = value
            if (ani) {
                let start = 80
                let end = 255
                if (value) {
                    start = 255
                    end = 80
                }
                this.aniObj.c = start
                cc.Tween.stopAllByTarget(this.aniObj)
                cc.tween(this.aniObj).to(0.5, { c: end }, {
                    progress: (start, end, current, radio) => {
                        let tempColor = start + (end - start) * radio
                        this.sp_icon.node.color = cc.color(tempColor, tempColor, tempColor)
                        this.tileBg.color = cc.color(tempColor, tempColor, tempColor)

                    }
                }).start()

            } else {
                let grayse = 80
                this.sp_icon.node.color = value ? cc.color(grayse, grayse, grayse) : cc.color(255, 255, 255)
                this.tileBg.color = value ? cc.color(grayse, grayse, grayse) : cc.color(255, 255, 255)
            }
        }

    }
    recycle(ani: boolean = false) {
        this.remove = false
        this._dark = false
        cc.Tween.stopAllByTarget(this.aniObj)
        cc.Tween.stopAllByTarget(this.node)
        this.sp_icon.node.color = cc.color(255, 255, 255)
        this.tileBg.color = cc.color(255, 255, 255)
       
        if (ani) {
            cc.tween(this.node).delay(0.06).to(0.2, { scale: 0 }).call(() => {
                game_core.pool.recover('TileBlock', this.node)
            }).start()
        } else {
            game_core.pool.recover('TileBlock', this.node)
        }
    }


    // update (dt) {}
}