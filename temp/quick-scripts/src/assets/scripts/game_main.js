"use strict";
cc._RF.push(module, '599belSsZ1Ix5PGw4LIIHYf', 'game_main');
// scripts/game_main.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TileBlock_1 = require("./TileBlock");
var game_config_dyn_1 = require("./game_config_dyn");
var game_helpers_1 = require("./game_helpers");
var global_model_1 = require("./global_model");
var game_core_1 = require("./game_core");
var game_constants_1 = require("./game_constants");
var adMgr_1 = require("./adMgr");
var level_mgr_1 = require("./level_mgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TILE_WIDTH = 88;
var TILE_HEIGHT = 88;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Levels = null;
        _this.tileContainer = null;
        _this.targetNode = null;
        _this.tileList = [];
        _this.matchList = [];
        _this.recordList = [];
        _this.lock = false; //做动画用防止误点
        _this.level_txt = null;
        _this.txt_undo = null;
        _this.txt_shuffle = null;
        _this.txt_hint = null;
        _this.txt_put3 = null;
        //分数计算
        _this.node_progress = null;
        _this.node_star1 = null;
        _this.node_star2 = null;
        _this.node_star3 = null;
        _this.countDown = false;
        _this.node_warning = null;
        _this.result_view = null;
        _this.result_view_win = null;
        _this.result_view_lose = null;
        _this.help_view = null;
        _this.levels_view = null;
        //minzindex
        _this.minZindex = 10000;
        _this.progress_levelBase = 0.001;
        _this.progress_levelBase_org = 0.0002;
        _this.removeList = [];
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        if (cc.sys.platform == cc.sys.IPAD) {
            cc.find("Canvas").getComponent(cc.Canvas).fitHeight = true;
            cc.find("Canvas").getComponent(cc.Canvas).fitWidth = true;
        }
        cc.systemEvent.on(game_constants_1.default.select_level_clicked, this.select_level_clicked, this);
    };
    NewClass.prototype.playSFX = function (audio) {
    };
    NewClass.prototype.playGamePass = function () {
    };
    NewClass.prototype.playGameFailed = function () {
    };
    NewClass.prototype.select_level_clicked = function (lv) {
        // //this.playSFX(this.btn_click)   
        global_model_1.default.game.selectedLevel = lv;
        // console.log("select_level_clicked ",global_model.game.selectedLevel,lv)
        this.go_game_reinit();
    };
    NewClass.prototype.start = function () {
        this.help_view.active = true;
        this.game_reinit();
    };
    NewClass.prototype.game_reinit = function () {
        this.recycle();
        this.node_warning.active = false;
        this.unscheduleAllCallbacks();
        this.tileList = [];
        this.matchList = [];
        this.recordList = [];
        this.lvData = null;
        this.lock = false;
        this.countDown = false;
        this.load_levels_data();
        this.progress_levelBase = this.progress_levelBase_org * global_model_1.default.game.selectedLevel;
        this.progress_levelBase = Math.max(this.progress_levelBase, 0.004);
    };
    NewClass.prototype.load_levels_data = function () {
        this.lvData = game_config_dyn_1.default.level.getLevelData(global_model_1.default.game.selectedLevel);
        this.level_txt.string = "" + global_model_1.default.game.selectedLevel;
        this.node_progress.progress = 1;
        this.node_star1.active = this.node_star2.active = this.node_star3.active = true;
        this.updateItemView();
        this.create_tiles_block();
    };
    NewClass.prototype.recycle = function () {
        for (var _i = 0, _a = this.tileList; _i < _a.length; _i++) {
            var temp = _a[_i];
            temp.recycle();
        }
        for (var _b = 0, _c = this.matchList; _b < _c.length; _b++) {
            var temp = _c[_b];
            temp.recycle();
        }
    };
    NewClass.prototype.create_tiles_block = function () {
        var _this = this;
        this.tileContainer.destroyAllChildren();
        var aniPos = [cc.v2(0, 1201), cc.v2(701, 0), cc.v2(0, -1201), cc.v2(-701, 0)];
        var types = game_config_dyn_1.default.level.getTypes(this.lvData.count, this.lvData.typeCount);
        types = game_helpers_1.default.randomArray(types);
        var c = 0;
        var minX = 999999;
        var minY = 999999;
        var maxX = 0;
        var maxY = 0;
        for (var i = 0; i < this.lvData.floorIds.length; i++) {
            var floorData = game_config_dyn_1.default.level.getFloorData(Number(this.lvData.floorIds[i]));
            var tiles = floorData.layouts;
            var _loop_1 = function (info) {
                var pos = info.split(',');
                var row = Number(pos[0]);
                var col = Number(pos[1]);
                var tile = game_core_1.default.pool.get('TileBlock');
                var node = tile.node;
                node.parent = this_1.tileContainer;
                node.scale = 1;
                this_1.tileList.push(tile);
                var offset = cc.v2(TILE_WIDTH * 0.5 * i, -TILE_HEIGHT * 0.5 * i);
                tile.layer = i;
                tile.row = row;
                tile.col = col;
                tile.node.zIndex = this_1.get___Zindex(row, col, tile.layer);
                var targetPos = this_1.getTilePos(row, col, offset);
                node.position = targetPos;
                tile.type = types[c];
                node.off(cc.Node.EventType.TOUCH_START);
                node.on(cc.Node.EventType.TOUCH_START, function () {
                    if (!_this.lock && !tile.dark) {
                        _this.addToMatchList(tile);
                        // //this.playSFX(this.block_click)
                        // //game_core.soundManager.playSFX('clickcube')
                        //有了操作之后，开始倒计时
                        _this.countDown = true;
                        // if (//game_core.soundManager.vibrate == 1)
                        //     WXTTgame_helpers.vibrateShort()
                    }
                });
                if (node.x > maxX)
                    maxX = node.x;
                if (node.y > maxY)
                    maxY = node.y;
                if (node.x < minX)
                    minX = node.x;
                if (node.y < minY)
                    minY = node.y;
                c++;
            };
            var this_1 = this;
            for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
                var info = tiles_1[_i];
                _loop_1(info);
            }
        }
        var w = maxX - minX;
        var h = maxY - minY;
        // let t = this.levelData.layouts[maxIndex].alignW == 5 ? 35 : 0
        this.tileContainer.x = -w * 0.5 - minX;
        this.tileContainer.y = (h >> 1) - maxY + 150;
        this.check_All_Block();
        //做动画
        var all = this.tileContainer.children;
        for (var _a = 0, all_1 = all; _a < all_1.length; _a++) {
            var node = all_1[_a];
            var tile = node.getComponent(TileBlock_1.default);
            var i = tile.layer;
            var offset = cc.v2(TILE_WIDTH * 0.5 * i, -TILE_HEIGHT * 0.5 * i);
            var targetPos = this.getTilePos(tile.row, tile.col, offset);
            node.position = targetPos;
            node.position = cc.v3(targetPos.x + aniPos[i % 4].x, targetPos.y + aniPos[i % 4].y);
            cc.tween(node).delay(i * 0.2 + 0.1).call(function () {
                //game_core.soundManager.playSFX('swtich', 10)
                //this.playSFX(this.block_switch)
            }).to(0.25, { position: targetPos }, { easing: 'sineOut' }).start();
        }
    };
    NewClass.prototype.get___Zindex = function (row, col, layer) {
        return row * 20 + col + layer * 200;
    };
    NewClass.prototype.check_All_Block = function (ani) {
        if (ani === void 0) { ani = false; }
        for (var _i = 0, _a = this.tileList; _i < _a.length; _i++) {
            var tile = _a[_i];
            if (tile.node.zIndex < 10000) {
                if (this._has_Block(tile)) {
                    tile.setDark(true, ani);
                }
                else {
                    tile.setDark(false, ani);
                }
            }
        }
    };
    NewClass.prototype._has_Block = function (tile) {
        var tileRec = tile.node.getBoundingBox();
        for (var _i = 0, _a = this.tileList; _i < _a.length; _i++) {
            var tempTile = _a[_i];
            if (tempTile == tile)
                continue;
            if (tempTile.layer > tile.layer) {
                if (tempTile.node.getBoundingBox().intersects(tileRec)) {
                    return true;
                }
            }
        }
        return false;
    };
    NewClass.prototype.getTilePos = function (row, col, offset) {
        return cc.v3(col * TILE_WIDTH + offset.x, -row * TILE_HEIGHT + offset.y, 0);
    };
    //添加到列表
    NewClass.prototype.addToMatchList = function (tile) {
        if (this.matchList.length < 7) {
            if (this.matchList.indexOf(tile) != -1)
                return;
            tile.setDark(false, false);
            game_helpers_1.default.removeElementFromArray(tile, this.tileList);
            this.recordList.push(tile);
            tile.node.zIndex = 999;
            var bol = false;
            for (var i = this.matchList.length - 1; i >= 0; i--) {
                if (this.matchList[i].type == tile.type) {
                    bol = true;
                    this.matchList.splice(i + 1, 0, tile);
                    break;
                }
            }
            if (!bol)
                this.matchList.push(tile);
            this.setMatchDepth();
            this.moveToRightPos();
            this.checkRemove();
            this.check_All_Block(true);
            this.checkWarning();
            this.checkGameResult();
        }
    };
    NewClass.prototype.setMatchDepth = function () {
        for (var i = this.matchList.length - 1; i >= 0; i--) {
            this.matchList[i].node.zIndex = i + 999;
        }
    };
    NewClass.prototype.moveToRightPos = function () {
        var _this = this;
        for (var i = 0; i < this.matchList.length; i++) {
            var pos = game_helpers_1.default.convetOtherNodeSpaceAR(this.targetNode, this.tileContainer);
            var targetX = i * 82 + pos.x - 246;
            var targetY = pos.y + 2;
            cc.Tween.stopAllByTarget(this.matchList[i].node);
            cc.tween(this.matchList[i].node).to(0.3, { x: targetX, y: targetY }, { easing: 'sineOut' }).call(function (targetNode) {
                var targetTile = targetNode.getComponent(TileBlock_1.default);
                if (targetTile.remove) {
                    targetTile.recycle(true);
                    //targetNode.destroy()
                    _this.moveToRightPos();
                    _this.checkGameResult();
                    //game_core.soundManager.playSFX('tileclean')
                    //this.playSFX(Math.random()>0.5?this.block_clean:this.block_clean2)
                    _this.updateProgress(0.01);
                }
            }).start();
        }
    };
    NewClass.prototype.checkRemove = function () {
        var obj = {};
        for (var _i = 0, _a = this.matchList; _i < _a.length; _i++) {
            var tile = _a[_i];
            obj[tile.type] = obj[tile.type] || 0;
            obj[tile.type]++;
        }
        for (var key in obj) {
            if (obj[key] >= 3) {
                for (var i = 0; i < this.matchList.length; i++) {
                    var tile = this.matchList[i];
                    if (tile.type == Number(key)) {
                        game_helpers_1.default.removeElementFromArray(tile, this.recordList);
                        tile.remove = true;
                        this.matchList.splice(i, 1);
                        i--;
                    }
                }
                break;
            }
        }
    };
    NewClass.prototype.searchRemoveable = function () {
        var arrDark = [];
        var objLight = {};
        for (var i = this.tileList.length - 1; i >= 0; i--) {
            var tile = this.tileList[i];
            if (!tile.dark) {
                objLight[tile.type] = objLight[tile.type] || [];
                objLight[tile.type].push(tile);
            }
            else {
                arrDark.push(tile);
            }
        }
        //底部tiles
        if (this.matchList.length > 0) {
            var bottomObj = {};
            for (var _i = 0, _a = this.matchList; _i < _a.length; _i++) {
                var bottom = _a[_i];
                bottomObj[bottom.type] = bottomObj[bottom.type] || [];
                bottomObj[bottom.type].push(bottom);
            }
            var bottomArr = [];
            for (var key in bottomObj) {
                bottomArr.push({ type: Number(key), tiles: bottomObj[key], count: bottomObj[key].length });
            }
            bottomArr.sort(function (a, b) {
                return b.count - a.count;
            });
            var first = bottomArr[0];
            var needCount = 3 - first.count;
            var needType = first.type;
            for (var i = 0; i < this.tileList.length; i++) {
                if (this.tileList[i].type == needType) {
                    this.addToMatchList(this.tileList[i]);
                    needCount--;
                    if (needCount == 0)
                        break;
                }
            }
        }
        else {
            var lightArr = [];
            for (var key in objLight) {
                lightArr.push({ type: Number(key), tiles: objLight[key], count: objLight[key].length });
            }
            lightArr.sort(function (a, b) {
                return b.count - a.count;
            });
            var first = lightArr[0];
            var ownCount = Math.min(3, first.tiles.length);
            for (var i = 0; i < ownCount; i++) {
                this.addToMatchList(first.tiles[i]);
            }
            var leftCount = Math.max(0, 3 - first.count);
            var needType = first.type;
            if (leftCount > 0) {
                for (var _b = 0, arrDark_1 = arrDark; _b < arrDark_1.length; _b++) {
                    var temp = arrDark_1[_b];
                    if (temp.type == needType) {
                        this.addToMatchList(temp);
                        leftCount--;
                        if (leftCount == 0)
                            break;
                    }
                }
            }
        }
    };
    NewClass.prototype.checkGameResult = function () {
        if (this.matchList.length >= 7) {
            this.lock = true;
            this.result_view.active = true;
            this.result_view_win.active = false;
            this.result_view_lose.active = true;
            this.playGameFailed();
        }
        else if (this.tileList.length == 0) { //success...
            this.playGamePass();
            this.lock = true;
            var hasAward = false;
            if (global_model_1.default.game.selectedLevel == global_model_1.default.game.level) {
                if (global_model_1.default.game.level >= 8 && global_model_1.default.game.level % 4 == 0) {
                    hasAward = true;
                }
                global_model_1.default.game.level++;
                var star = 0;
                if (this.node_progress.progress >= 0.8)
                    star = 3;
                else if (this.node_progress.progress >= 0.5)
                    star = 2;
                else if (this.node_progress.progress > 0.1)
                    star = 1;
                global_model_1.default.game.level_star[global_model_1.default.game.selectedLevel] = star;
                global_model_1.default.save();
            }
            this.result_view.active = true;
            this.result_view_win.active = true;
            this.result_view_lose.active = false;
        }
    };
    NewClass.prototype.playFailAni = function (callback) {
        for (var _i = 0, _a = this.tileList; _i < _a.length; _i++) {
            var temp = _a[_i];
            var delay = temp.row * 0.05 + temp.col * 0.05;
            cc.tween(temp.node).delay(delay).by(0.5, { y: -1400 }, { easing: 'backInOut' }).start();
        }
        this.scheduleOnce(function () {
            callback && callback();
        }, 1);
    };
    NewClass.prototype.checkWarning = function () {
        if (this.matchList.length < 5) {
            cc.Tween.stopAllByTarget(this.node_warning);
            this.node_warning.active = false;
        }
        else {
            this.node_warning.active = true;
            cc.Tween.stopAllByTarget(this.node_warning);
            cc.tween(this.node_warning).to(1, { opacity: 0 }).to(1, { opacity: 255 }).union().repeatForever().start();
        }
    };
    NewClass.prototype.click_prev = function () {
    };
    NewClass.prototype.click_shuffle = function () {
        var _this = this;
        //this.playSFX(this.btn_click)
        if (global_model_1.default.game.shuffle_counter > 0) {
            global_model_1.default.game.shuffle_counter--;
            global_model_1.default.save();
            this.updateItemView();
            this.shuffle();
        }
        else {
            if (this.lock)
                return;
            adMgr_1.admgr.showVideo(function () {
                global_model_1.default.game.shuffle_counter++;
                global_model_1.default.save();
                _this.updateItemView();
            });
            // this.lock = true
        }
    };
    NewClass.prototype.shuffle = function () {
        var _this = this;
        for (var i = 0; i < 500; i++) {
            var rndA = Math.floor(Math.random() * this.tileList.length);
            var rndB = Math.floor(Math.random() * this.tileList.length);
            if (rndA != rndB) {
                var nodeA = this.tileList[rndA];
                var nodeB = this.tileList[rndB];
                this.swapTile(nodeA, nodeB);
            }
        }
        for (var _i = 0, _a = this.tileList; _i < _a.length; _i++) {
            var tile = _a[_i];
            var offset = cc.v2(tile.layer * TILE_WIDTH * 0.5, -tile.layer * TILE_HEIGHT * 0.5);
            var pos = this.getTilePos(tile.row, tile.col, offset);
            cc.Tween.stopAllByTarget(tile.node);
            cc.tween(tile.node).to(0.25, { position: pos }).call(function () {
                _this.check_All_Block(true);
            }).start();
        }
    };
    NewClass.prototype.swapTile = function (tileA, tileB) {
        var tempRow = tileA.row;
        tileA.row = tileB.row;
        tileB.row = tempRow;
        var tempCol = tileA.col;
        tileA.col = tileB.col;
        tileB.col = tempCol;
        var tempLayer = tileA.layer;
        tileA.layer = tileB.layer;
        tileB.layer = tempLayer;
        var tempZindex = tileA.node.zIndex;
        tileA.node.zIndex = tileB.node.zIndex;
        tileB.node.zIndex = tempZindex;
    };
    NewClass.prototype.click_undo = function () {
        var _this = this;
        //this.playSFX(this.btn_click)
        if (this.recordList.length == 0) {
            // MsgHints.show('没有操作的记录?')
            // MsgHints.show('No operation record!')
            adMgr_1.admgr.showToast("No operation record!");
            return;
        }
        if (global_model_1.default.game.undo_counter > 0) {
            global_model_1.default.game.undo_counter--;
            global_model_1.default.save();
            this.updateItemView();
            this.undo_operator();
        }
        else {
            if (this.lock)
                return;
            adMgr_1.admgr.showVideo(function () {
                global_model_1.default.game.undo_counter++;
                global_model_1.default.save();
                _this.updateItemView();
            });
            // this.lock = true
        }
    };
    NewClass.prototype.undo_operator = function () {
        var _this = this;
        if (this.recordList.length > 0) {
            var tile = this.recordList.pop();
            var offset = cc.v2(tile.layer * TILE_WIDTH * 0.5, -tile.layer * TILE_HEIGHT * 0.5);
            var pos = this.getTilePos(tile.row, tile.col, offset);
            tile.node.zIndex = this.get___Zindex(tile.row, tile.col, tile.layer);
            game_helpers_1.default.removeElementFromArray(tile, this.matchList);
            this.tileList.push(tile);
            cc.tween(tile.node).to(0.25, { position: pos }, { easing: 'sineOut' }).call(function () {
                _this.check_All_Block(true);
                _this.moveToRightPos();
            }).start();
        }
    };
    NewClass.prototype.click_hint = function () {
        var _this = this;
        //this.playSFX(this.btn_click)
        if (global_model_1.default.game.hint_tip_counter > 0) {
            global_model_1.default.game.hint_tip_counter--;
            global_model_1.default.save();
            this.updateItemView();
            this.searchRemoveable();
        }
        else {
            if (this.lock)
                return;
            adMgr_1.admgr.showVideo(function () {
                global_model_1.default.game.hint_tip_counter++;
                global_model_1.default.save();
                _this.updateItemView();
            });
            // console.log('数量不足，弹出购买')
            // this.lock = true
        }
    };
    NewClass.prototype.click_moveup = function () {
        var _this = this;
        //this.playSFX(this.btn_click)
        if (this.recordList.length < 3) {
            // MsgHints.show('至少有3个才能一起推上去')
            // MsgHints.show('No operation record!')
            adMgr_1.admgr.showToast("No operation record!");
            return;
        }
        if (global_model_1.default.game.move_up_counter > 0) {
            global_model_1.default.game.move_up_counter--;
            global_model_1.default.save();
            this.updateItemView();
            //放三个 块上去最左边的三个块放上去
            this.moveup3_elements();
        }
        else {
            if (this.lock)
                return;
            adMgr_1.admgr.showVideo(function () {
                global_model_1.default.game.move_up_counter++;
                global_model_1.default.save();
                _this.updateItemView();
            });
            // console.log('数量不足，弹出购买')
            // this.lock = true
        }
    };
    NewClass.prototype.moveup3_elements = function () {
        var pos1 = game_helpers_1.default.convetOtherNodeSpaceAR(this.targetNode, this.tileContainer);
        for (var index = 0; index < 3; index++) {
            if (this.matchList.length > 0) {
                var tile = this.matchList.shift();
                // let offset = cc.v2(tile.layer * TILE_WIDTH*0.5, -tile.layer * TILE_HEIGHT*0.5)
                // let pos = this.getTilePos(tile.row, tile.col, offset)
                var targetX = pos1.x - TILE_WIDTH + index * TILE_WIDTH;
                var targetY = pos1.y + 130;
                this.minZindex++;
                var pos = cc.v3(targetX, targetY, 0);
                tile.node.zIndex = this.minZindex; //固定一下 直接压着
                // console.log('-------zindex',cc.macro.MAX_ZINDEX)
                // game_helpers.removeElementFromArray(tile, this.matchList)
                game_helpers_1.default.removeElementFromArray(tile, this.recordList);
                this.tileList.push(tile);
                cc.tween(tile.node).to(0.25, { position: pos }, { easing: 'sineOut' }).call(function () {
                }).start();
            }
        }
        var self = this;
        setTimeout(function () {
            self.check_All_Block(true);
            self.moveToRightPos();
        }, 250);
    };
    NewClass.prototype.click_help = function () {
        // game_core.win.open(GameConst.winPath.HelpWin)
    };
    NewClass.prototype.updateItemView = function () {
        this.txt_hint.string = global_model_1.default.game.hint_tip_counter == 0 ? '0' : global_model_1.default.game.hint_tip_counter + '';
        this.txt_shuffle.string = global_model_1.default.game.shuffle_counter == 0 ? '0' : global_model_1.default.game.shuffle_counter + '';
        this.txt_undo.string = global_model_1.default.game.undo_counter == 0 ? '0' : global_model_1.default.game.undo_counter + '';
        this.txt_put3.string = global_model_1.default.game.move_up_counter == 0 ? '0' : global_model_1.default.game.move_up_counter + '';
        if (parseInt(this.txt_undo.string) <= 0) {
            this.txt_undo.node.parent.getChildByName("adicon").active = true;
        }
        else {
            this.txt_undo.node.parent.getChildByName("adicon").active = false;
        }
        if (parseInt(this.txt_hint.string) <= 0) {
            this.txt_hint.node.parent.getChildByName("adicon").active = true;
        }
        else {
            this.txt_hint.node.parent.getChildByName("adicon").active = false;
        }
        if (parseInt(this.txt_shuffle.string) <= 0) {
            this.txt_shuffle.node.parent.getChildByName("adicon").active = true;
        }
        else {
            this.txt_shuffle.node.parent.getChildByName("adicon").active = false;
        }
        if (parseInt(this.txt_put3.string) <= 0) {
            this.txt_put3.node.parent.getChildByName("adicon").active = true;
        }
        else {
            this.txt_put3.node.parent.getChildByName("adicon").active = false;
        }
    };
    NewClass.prototype.close = function () {
        // super.close()
    };
    NewClass.prototype.panelDataUpdate = function (data) {
        this.game_reinit();
    };
    NewClass.prototype.updateProgress = function (offset) {
        this.node_progress.progress += offset;
        if (this.node_progress.progress <= 0) {
            this.node_progress.progress = 0;
            this.lock = true;
            this.result_view.active = true;
            this.result_view_win.active = false;
            this.result_view_lose.active = true;
        }
        else if (this.node_progress.progress > 1)
            this.node_progress.progress = 1;
        this.node_star1.active = this.node_progress.progress >= 0.1;
        this.node_star2.active = this.node_progress.progress >= 0.5;
        this.node_star3.active = this.node_progress.progress >= 0.8;
    };
    NewClass.prototype.update = function (dt) {
        if (this.lock)
            return;
        if (this.countDown) {
            this.updateProgress(-dt * this.progress_levelBase);
        }
    };
    NewClass.prototype.go_home = function () {
        //this.playSFX(this.btn_click)
        cc.director.loadScene("game_home");
    };
    NewClass.prototype.go_nextLv = function () {
        //this.playSFX(this.btn_click)
        global_model_1.default.game.selectedLevel++;
        this.result_view.active = false;
        this.game_reinit();
        this.Levels.getComponent(level_mgr_1.default).updataData();
    };
    NewClass.prototype.go_game_reinit = function () {
        //this.playSFX(this.btn_click)
        this.result_view.active = false;
        this.game_reinit();
        this.Levels.getComponent(level_mgr_1.default).updataData();
    };
    NewClass.prototype.hideshow_settingView = function () {
        //this.playSFX(this.btn_click)
    };
    NewClass.prototype.toggleMusic = function (evt) {
        // global_model.game.music_flag=evt.isChecked?1:0
        global_model_1.default.save();
    };
    NewClass.prototype.toggleSFX = function (evt) {
        //this.playSFX(this.btn_click)
        // global_model.game.sfx_flag=evt.isChecked?1:0
        global_model_1.default.save();
    };
    NewClass.prototype.hideshow_LevelView = function () {
        //this.playSFX(this.btn_click)
        this.levels_view.active = !this.levels_view.active;
    };
    NewClass.prototype.openFbToshare = function () {
        cc.sys.openURL("fb://");
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Levels", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tileContainer", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "targetNode", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "level_txt", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "txt_undo", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "txt_shuffle", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "txt_hint", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "txt_put3", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], NewClass.prototype, "node_progress", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "node_star1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "node_star2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "node_star3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "node_warning", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "result_view", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "result_view_win", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "result_view_lose", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "help_view", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "levels_view", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();