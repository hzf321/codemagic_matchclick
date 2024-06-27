import TileBlock from "./TileBlock"
import game_level_cfg ,{LevelData} from "./game_level_cfg"
import game_config_dyn from "./game_config_dyn"
import game_helpers from "./game_helpers"
import global_model from "./global_model"
import game_core from "./game_core"
import game_constants from "./game_constants"
import { admgr } from "./adMgr"
import level_mgr from "./level_mgr"

const {ccclass, property} = cc._decorator;
const TILE_WIDTH: number = 88
const TILE_HEIGHT: number = 88

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    Levels: cc.Node = null;

    @property(cc.Node)
    tileContainer: cc.Node = null;


    @property(cc.Node)
    targetNode: cc.Node = null;


    tileList: TileBlock[] = []
    matchList: TileBlock[] = []
    recordList: TileBlock[] = []
    lvData: LevelData
    lock: boolean = false//做动画用防止误点

    @property(cc.Label)
    level_txt: cc.Label=null
    @property(cc.Label)
    txt_undo: cc.Label=null
    @property(cc.Label)
    txt_shuffle: cc.Label=null
    @property(cc.Label)
    txt_hint: cc.Label=null
    @property(cc.Label)
    txt_put3: cc.Label=null

    //分数计算
    @property(cc.ProgressBar)
    node_progress: cc.ProgressBar=null
    @property(cc.Node)
    node_star1: cc.Node=null
    @property(cc.Node)
    node_star2: cc.Node=null
    @property(cc.Node)
    node_star3: cc.Node=null
    countDown: boolean = false

    @property(cc.Node)
    node_warning: cc.Node=null


    @property(cc.Node)
    result_view: cc.Node=null
    @property(cc.Node)
    result_view_win: cc.Node=null
    @property(cc.Node)
    result_view_lose: cc.Node=null

    @property(cc.Node)
    help_view: cc.Node=null


    @property(cc.Node)
    levels_view: cc.Node=null
 

    //minzindex
    minZindex:number = 10000
    progress_levelBase=0.001
    progress_levelBase_org=0.0002

   


    protected onLoad(): void {
        if(cc.sys.platform==cc.sys.IPAD)
        {
            cc.find("Canvas").getComponent(cc.Canvas).fitHeight = true
            cc.find("Canvas").getComponent(cc.Canvas).fitWidth = true
        }
        cc.systemEvent.on(game_constants.select_level_clicked,this.select_level_clicked,this)
       
    }
    playSFX(audio:cc.AudioClip)
    {
        
    }
    playGamePass()
    { 
        
    }
    playGameFailed()
    { 
         
    }
    select_level_clicked(lv)
    {
        // //this.playSFX(this.btn_click)   
        global_model.game.selectedLevel=lv
        // console.log("select_level_clicked ",global_model.game.selectedLevel,lv)
        this.go_game_reinit()
    }
    start() {
        this.help_view.active=true
        this.game_reinit()
    }
    game_reinit() {
        this.recycle()
        this.node_warning.active = false
        this.unscheduleAllCallbacks()
        this.tileList = []
        this.matchList = []
        this.recordList = []
        this.lvData = null
        this.lock = false
        this.countDown = false
        this.load_levels_data()
        this.progress_levelBase=this.progress_levelBase_org*global_model.game.selectedLevel
        this.progress_levelBase=Math.max(this.progress_levelBase,0.004)
    }
    load_levels_data() {
        this.lvData = game_config_dyn.level.getLevelData(global_model.game.selectedLevel)
        this.level_txt.string = ""+global_model.game.selectedLevel
        this.node_progress.progress = 1
        this.node_star1.active = this.node_star2.active = this.node_star3.active = true
        this.updateItemView()
        this.create_tiles_block()
    }
    recycle() {
        for (const temp of this.tileList) {
            temp.recycle()
        }
        for (const temp of this.matchList) {
            temp.recycle()
        }
    }
    create_tiles_block() {
        this.tileContainer.destroyAllChildren()
        let aniPos = [cc.v2(0, 1201), cc.v2(701, 0), cc.v2(0, -1201), cc.v2(-701, 0)]

        let types = game_config_dyn.level.getTypes(this.lvData.count, this.lvData.typeCount)
        types = game_helpers.randomArray(types)
        let c = 0
        let minX = 999999
        let minY = 999999
        let maxX = 0
        let maxY = 0
        for (let i = 0; i < this.lvData.floorIds.length; i++) {
            
            let floorData = game_config_dyn.level.getFloorData(Number(this.lvData.floorIds[i]))
            let tiles = floorData.layouts
            for (const info of tiles) {
                let pos = info.split(',')
                let row = Number(pos[0])
                let col = Number(pos[1])
               
                let tile = game_core.pool.get('TileBlock')
                let node = tile.node
                node.parent = this.tileContainer
                node.scale = 1

                this.tileList.push(tile)
                let offset = cc.v2(TILE_WIDTH*0.5 * i, -TILE_HEIGHT*0.5 * i)
                tile.layer = i
                tile.row = row
                tile.col = col
                tile.node.zIndex = this.get___Zindex(row, col, tile.layer)

                let targetPos = this.getTilePos(row, col, offset)
                node.position = targetPos

                tile.type = types[c]
                node.off(cc.Node.EventType.TOUCH_START)
                node.on(cc.Node.EventType.TOUCH_START, () => {
                    if (!this.lock && !tile.dark) {
                        this.addToMatchList(tile)
                        // //this.playSFX(this.block_click)
                        // //game_core.soundManager.playSFX('clickcube')
                        //有了操作之后，开始倒计时
                        this.countDown = true
                        // if (//game_core.soundManager.vibrate == 1)
                        //     WXTTgame_helpers.vibrateShort()
                    }

                })

                if (node.x > maxX)
                    maxX = node.x
                if (node.y > maxY)
                    maxY = node.y

                if (node.x < minX)
                    minX = node.x
                if (node.y < minY)
                    minY = node.y

                c++


            }
           
        }

        let w = maxX - minX
        let h = maxY - minY
        // let t = this.levelData.layouts[maxIndex].alignW == 5 ? 35 : 0
        this.tileContainer.x = -w * 0.5 - minX
        this.tileContainer.y = (h >> 1) - maxY + 150
        this.check_All_Block()

        //做动画
        let all = this.tileContainer.children
        for (const node of all) {
            let tile = node.getComponent(TileBlock)
            let i = tile.layer
            let offset = cc.v2(TILE_WIDTH*0.5 * i, -TILE_HEIGHT*0.5* i)
            let targetPos = this.getTilePos(tile.row, tile.col, offset)
            node.position = targetPos
            node.position = cc.v3(targetPos.x + aniPos[i % 4].x, targetPos.y + aniPos[i % 4].y)
            cc.tween(node).delay(i * 0.2 + 0.1).call(() => {
                //game_core.soundManager.playSFX('swtich', 10)
                //this.playSFX(this.block_switch)
            }).to(0.25, { position: targetPos }, { easing: 'sineOut' }).start()

        }
    }

    get___Zindex(row, col, layer) {
        return row * 20 + col + layer * 200
    }
    check_All_Block(ani: boolean = false) {
        for (const tile of this.tileList) {
            if(tile.node.zIndex < 10000){
                if (this._has_Block(tile)) {
                    tile.setDark(true, ani)
                } else {
                    tile.setDark(false, ani)
                }
            }
        }
    }
    _has_Block(tile: TileBlock) {
        let tileRec = tile.node.getBoundingBox()
        
        for (const tempTile of this.tileList) {
            if (tempTile == tile) continue
            if (tempTile.layer > tile.layer) {                
                if (tempTile.node.getBoundingBox().intersects(tileRec)) {
                    return true
                }
            }
        }
        return false
    }
    getTilePos(row: number, col: number, offset: cc.Vec2) {
        return cc.v3(col * TILE_WIDTH + offset.x, -row * TILE_HEIGHT + offset.y, 0)
    }
    //添加到列表
    addToMatchList(tile: TileBlock) {
        if (this.matchList.length < 7) {
            if (this.matchList.indexOf(tile) != -1) return
            tile.setDark(false, false)

            game_helpers.removeElementFromArray(tile, this.tileList)

            this.recordList.push(tile)

            tile.node.zIndex = 999
            let bol = false
            for (let i = this.matchList.length - 1; i >= 0; i--) {
                if (this.matchList[i].type == tile.type) {
                    bol = true
                    this.matchList.splice(i + 1, 0, tile)
                    break
                }
            }
            if (!bol)
                this.matchList.push(tile)
            this.setMatchDepth()
            this.moveToRightPos()
            this.checkRemove()
            this.check_All_Block(true)
            this.checkWarning()
            this.checkGameResult()
        }

    }
    setMatchDepth() {
        for (let i = this.matchList.length - 1; i >= 0; i--) {
            this.matchList[i].node.zIndex = i + 999
        }
    }
    moveToRightPos() {
        for (let i = 0; i < this.matchList.length; i++) {
            let pos = game_helpers.convetOtherNodeSpaceAR(this.targetNode, this.tileContainer)
            let targetX = i * 82 + pos.x - 246
            let targetY = pos.y + 2
            cc.Tween.stopAllByTarget(this.matchList[i].node)
            cc.tween(this.matchList[i].node).to(0.3, { x: targetX, y: targetY }, { easing: 'sineOut' }).call((targetNode: cc.Node) => {

                let targetTile = targetNode.getComponent(TileBlock)
                if (targetTile.remove) {
                    targetTile.recycle(true)
                    //targetNode.destroy()
                    this.moveToRightPos()
                    this.checkGameResult()
                    //game_core.soundManager.playSFX('tileclean')
                    //this.playSFX(Math.random()>0.5?this.block_clean:this.block_clean2)
                    this.updateProgress(0.01)
                }
            }).start()
        }

    }
    removeList: TileBlock[] = []
    checkRemove() {
        let obj: any = {}
        for (const tile of this.matchList) {
            obj[tile.type] = obj[tile.type] || 0
            obj[tile.type]++
        }

        for (const key in obj) {
            if (obj[key] >= 3) {
                for (let i = 0; i < this.matchList.length; i++) {
                    let tile = this.matchList[i]
                    if (tile.type == Number(key)) {
                        game_helpers.removeElementFromArray(tile, this.recordList)
                        tile.remove = true

                        this.matchList.splice(i, 1)
                        i--
                    }
                }
                break
            }
        }
    }
    searchRemoveable() {
        let arrDark: any = []
        let objLight: any = {}
        for (let i = this.tileList.length - 1; i >= 0; i--) {
            let tile = this.tileList[i]
            if (!tile.dark) {
                objLight[tile.type] = objLight[tile.type] || []
                objLight[tile.type].push(tile)
            } else {
                arrDark.push(tile)
            }

        }
        //底部tiles
        if (this.matchList.length > 0) {
            let bottomObj: any = {}
            for (const bottom of this.matchList) {
                bottomObj[bottom.type] = bottomObj[bottom.type] || []
                bottomObj[bottom.type].push(bottom)
            }
            let bottomArr = []
            for (const key in bottomObj) {
                bottomArr.push({ type: Number(key), tiles: bottomObj[key], count: bottomObj[key].length })
            }
            bottomArr.sort((a, b) => {
                return b.count - a.count
            })

            let first = bottomArr[0]
            let needCount = 3 - first.count
            let needType = first.type
            for (let i = 0; i < this.tileList.length; i++) {
                if (this.tileList[i].type == needType) {
                    this.addToMatchList(this.tileList[i])
                    needCount--
                    if (needCount == 0)
                        break
                }
            }
        } else {

            let lightArr = []
            for (const key in objLight) {
                lightArr.push({ type: Number(key), tiles: objLight[key], count: objLight[key].length })
            }
            lightArr.sort((a, b) => {
                return b.count - a.count
            })



            let first = lightArr[0]
            let ownCount = Math.min(3, first.tiles.length)
            for (let i = 0; i < ownCount; i++) {
                this.addToMatchList(first.tiles[i])
            }
            let leftCount = Math.max(0, 3 - first.count)
            let needType = first.type
            if (leftCount > 0) {
                for (const temp of arrDark) {
                    if (temp.type == needType) {
                        this.addToMatchList(temp)
                        leftCount--
                        if (leftCount == 0)
                            break
                    }
                }
            }
        }
    }
    checkGameResult() {
        if (this.matchList.length >= 7) {
            this.lock = true
            this.result_view.active=true
            this.result_view_win.active=false
            this.result_view_lose.active=true
            this.playGameFailed()
        } else if (this.tileList.length == 0) {  //success...
            this.playGamePass()
            this.lock = true
            let hasAward = false
            if (global_model.game.selectedLevel == global_model.game.level) {

                if (global_model.game.level >= 8 && global_model.game.level % 4 == 0) {
                    hasAward = true
                }
                global_model.game.level++
                let star = 0
                if (this.node_progress.progress >= 0.8)
                    star = 3
                else if (this.node_progress.progress >= 0.5)
                    star = 2
                else if (this.node_progress.progress > 0.1)
                    star = 1
                global_model.game.level_star[global_model.game.selectedLevel] = star
                global_model.save()
            }
            this.result_view.active=true
            this.result_view_win.active=true
            this.result_view_lose.active=false
        }
    }
    playFailAni(callback: Function) {

        for (const temp of this.tileList) {
            let delay = temp.row * 0.05 + temp.col * 0.05
            cc.tween(temp.node).delay(delay).by(0.5, { y: -1400 }, { easing: 'backInOut' }).start()
        }
        this.scheduleOnce(() => {
            callback && callback()
        }, 1)
    }
    checkWarning() {
        if (this.matchList.length < 5) {
            cc.Tween.stopAllByTarget(this.node_warning)
            this.node_warning.active = false
        } else {
            this.node_warning.active = true
            cc.Tween.stopAllByTarget(this.node_warning)
            cc.tween(this.node_warning).to(1, { opacity: 0 }).to(1, { opacity: 255 }).union().repeatForever().start()
        }
    }

    click_prev() {


    }
    click_shuffle() {
        //this.playSFX(this.btn_click)
        if (global_model.game.shuffle_counter > 0) {
            global_model.game.shuffle_counter--
            global_model.save()
            this.updateItemView()
            this.shuffle()
        } else {
            if(this.lock)return

            admgr.showVideo(()=>{
                global_model.game.shuffle_counter++
                global_model.save()
                this.updateItemView()
            })
       
            // this.lock = true
        }  
    }
    shuffle() {
        for (let i = 0; i < 500; i++) {
            let rndA = Math.floor(Math.random() * this.tileList.length)
            let rndB = Math.floor(Math.random() * this.tileList.length)
            if (rndA != rndB) {
                let nodeA = this.tileList[rndA]
                let nodeB = this.tileList[rndB]
                this.swapTile(nodeA, nodeB)
            }
        }
        for (const tile of this.tileList) {
            let offset = cc.v2(tile.layer * TILE_WIDTH*0.5, -tile.layer * TILE_HEIGHT*0.5)
            let pos = this.getTilePos(tile.row, tile.col, offset)
            cc.Tween.stopAllByTarget(tile.node)
            cc.tween(tile.node).to(0.25, { position: pos }).call(() => {
                this.check_All_Block(true)
            }).start()
        }
    }
    swapTile(tileA: TileBlock, tileB: TileBlock) {

        let tempRow = tileA.row
        tileA.row = tileB.row
        tileB.row = tempRow

        let tempCol = tileA.col
        tileA.col = tileB.col
        tileB.col = tempCol

        let tempLayer = tileA.layer
        tileA.layer = tileB.layer
        tileB.layer = tempLayer

        let tempZindex = tileA.node.zIndex
        tileA.node.zIndex = tileB.node.zIndex
        tileB.node.zIndex = tempZindex

    }
    click_undo() {
        //this.playSFX(this.btn_click)
        if (this.recordList.length == 0) {
            // MsgHints.show('没有操作的记录?')
            // MsgHints.show('No operation record!')
            admgr.showToast("No operation record!");
            return
        }
        if (global_model.game.undo_counter > 0) {
            global_model.game.undo_counter--
            global_model.save()
            this.updateItemView()
            this.undo_operator()
        } else {
            if(this.lock)return
            admgr.showVideo(()=>{
                global_model.game.undo_counter++
                global_model.save()
                this.updateItemView()
            })
            // this.lock = true
       
        }

    }
    undo_operator() {
        if (this.recordList.length > 0) {
            let tile = this.recordList.pop()
            let offset = cc.v2(tile.layer * TILE_WIDTH*0.5, -tile.layer * TILE_HEIGHT*0.5)
            let pos = this.getTilePos(tile.row, tile.col, offset)

            tile.node.zIndex = this.get___Zindex(tile.row, tile.col, tile.layer)

            game_helpers.removeElementFromArray(tile, this.matchList)
            this.tileList.push(tile)

            cc.tween(tile.node).to(0.25, { position: pos }, { easing: 'sineOut' }).call(() => {
                this.check_All_Block(true)
                this.moveToRightPos()
            }).start()
        }
    }
    click_hint() {
        //this.playSFX(this.btn_click)
        if (global_model.game.hint_tip_counter > 0) {
            global_model.game.hint_tip_counter--
            global_model.save()
            this.updateItemView()
            this.searchRemoveable()
        } else {
            if(this.lock)return
            admgr.showVideo(()=>{
                global_model.game.hint_tip_counter++
                global_model.save()
                this.updateItemView()
            })
            // console.log('数量不足，弹出购买')
            // this.lock = true
        }

    }
    click_moveup() {
        //this.playSFX(this.btn_click)
        if (this.recordList.length < 3) {
            // MsgHints.show('至少有3个才能一起推上去')
            // MsgHints.show('No operation record!')
            admgr.showToast("No operation record!")
            return
        }
        if (global_model.game.move_up_counter > 0) {
            global_model.game.move_up_counter--
            global_model.save()
            this.updateItemView()
            
            //放三个 块上去最左边的三个块放上去
            this.moveup3_elements()
        } else {
            if(this.lock)return
            admgr.showVideo(()=>{
                global_model.game.move_up_counter++
                global_model.save()
                this.updateItemView()
            })
            // console.log('数量不足，弹出购买')
            // this.lock = true
        }

    }
    moveup3_elements(){
        let pos1 = game_helpers.convetOtherNodeSpaceAR(this.targetNode, this.tileContainer)
        for (let index = 0; index < 3; index++) {
            if (this.matchList.length > 0) {
                let tile = this.matchList.shift()
                // let offset = cc.v2(tile.layer * TILE_WIDTH*0.5, -tile.layer * TILE_HEIGHT*0.5)
                // let pos = this.getTilePos(tile.row, tile.col, offset)
                let targetX = pos1.x - TILE_WIDTH + index * TILE_WIDTH
                let targetY = pos1.y + 130
    
                
                this.minZindex++
                let pos = cc.v3(targetX,targetY,0)
                tile.node.zIndex = this.minZindex//固定一下 直接压着
                // console.log('-------zindex',cc.macro.MAX_ZINDEX)
                // game_helpers.removeElementFromArray(tile, this.matchList)
                game_helpers.removeElementFromArray(tile, this.recordList)
                this.tileList.push(tile)
    
                cc.tween(tile.node).to(0.25, { position: pos }, { easing: 'sineOut' }).call(() => {
                    
                }).start()
            }
        }
        let self = this
        setTimeout(() => {
            self.check_All_Block(true)
            self.moveToRightPos()
        }, 250);
    }
    click_help() {
        // game_core.win.open(GameConst.winPath.HelpWin)
    }
    updateItemView() {
        this.txt_hint.string = global_model.game.hint_tip_counter == 0 ? '0' : global_model.game.hint_tip_counter + ''
        this.txt_shuffle.string = global_model.game.shuffle_counter == 0 ? '0' : global_model.game.shuffle_counter + ''
        this.txt_undo.string = global_model.game.undo_counter == 0 ? '0' : global_model.game.undo_counter + ''
        this.txt_put3.string = global_model.game.move_up_counter == 0 ? '0' : global_model.game.move_up_counter + ''

        if (parseInt(this.txt_undo.string) <= 0) {
            this.txt_undo.node.parent.getChildByName("adicon").active = true;
        }else{
            this.txt_undo.node.parent.getChildByName("adicon").active = false;
        }

        if (parseInt(this.txt_hint.string) <= 0) {
            this.txt_hint.node.parent.getChildByName("adicon").active = true;
        }else{
            this.txt_hint.node.parent.getChildByName("adicon").active = false;
        }

        if (parseInt(this.txt_shuffle.string) <= 0) {
            this.txt_shuffle.node.parent.getChildByName("adicon").active = true;
        }else{
            this.txt_shuffle.node.parent.getChildByName("adicon").active = false;
        }

        if (parseInt(this.txt_put3.string) <= 0) {
            this.txt_put3.node.parent.getChildByName("adicon").active = true;
        }else{
            this.txt_put3.node.parent.getChildByName("adicon").active = false;
        }



    }
   
    close(): void {
        // super.close()
        
    }

    panelDataUpdate(data: any): void {
        this.game_reinit()
    }
    updateProgress(offset: number) {
        this.node_progress.progress += offset
        if (this.node_progress.progress <= 0)
        {
            this.node_progress.progress = 0
            this.lock = true
            this.result_view.active=true
            this.result_view_win.active=false
            this.result_view_lose.active=true
        }
        else if (this.node_progress.progress > 1)
            this.node_progress.progress = 1

        this.node_star1.active = this.node_progress.progress >= 0.1
        this.node_star2.active = this.node_progress.progress >= 0.5
        this.node_star3.active = this.node_progress.progress >= 0.8
    }
    update(dt: number): void 
    {
        if (this.lock) return
        if (this.countDown) {
            this.updateProgress(-dt * this.progress_levelBase)
        }
    }
    go_home()
    {
        //this.playSFX(this.btn_click)
        cc.director.loadScene("game_home")
    }
    go_nextLv()
    {
        //this.playSFX(this.btn_click)
        global_model.game.selectedLevel++
        this.result_view.active=false
        this.game_reinit()
        this.Levels.getComponent(level_mgr).updataData();
    }
    go_game_reinit()
    {
        //this.playSFX(this.btn_click)
        this.result_view.active=false
        this.game_reinit()
        this.Levels.getComponent(level_mgr).updataData();
         
    }
    hideshow_settingView()
    {
        //this.playSFX(this.btn_click)
    }
    toggleMusic(evt:cc.Toggle)
    {
        // global_model.game.music_flag=evt.isChecked?1:0
        global_model.save()
    }
    toggleSFX(evt:cc.Toggle)
    {
        
        //this.playSFX(this.btn_click)
        // global_model.game.sfx_flag=evt.isChecked?1:0
        global_model.save()
    }
    hideshow_LevelView()
    {
        //this.playSFX(this.btn_click)
        this.levels_view.active=!this.levels_view.active
    }
    openFbToshare()
    {
        cc.sys.openURL("fb://")
    }
}
