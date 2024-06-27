
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBbUM7QUFFbkMscURBQStDO0FBQy9DLCtDQUF5QztBQUN6QywrQ0FBeUM7QUFDekMseUNBQW1DO0FBQ25DLG1EQUE2QztBQUM3QyxpQ0FBK0I7QUFDL0IseUNBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQU0sVUFBVSxHQUFXLEVBQUUsQ0FBQTtBQUM3QixJQUFNLFdBQVcsR0FBVyxFQUFFLENBQUE7QUFHOUI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2dUJDO1FBMXVCRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBSTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBZ0IsRUFBRSxDQUFBO1FBQzFCLGVBQVMsR0FBZ0IsRUFBRSxDQUFBO1FBQzNCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQTtRQUU1QixVQUFJLEdBQVksS0FBSyxDQUFBLENBQUEsVUFBVTtRQUcvQixlQUFTLEdBQVcsSUFBSSxDQUFBO1FBRXhCLGNBQVEsR0FBVyxJQUFJLENBQUE7UUFFdkIsaUJBQVcsR0FBVyxJQUFJLENBQUE7UUFFMUIsY0FBUSxHQUFXLElBQUksQ0FBQTtRQUV2QixjQUFRLEdBQVcsSUFBSSxDQUFBO1FBRXZCLE1BQU07UUFFTixtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBVSxJQUFJLENBQUE7UUFFeEIsZ0JBQVUsR0FBVSxJQUFJLENBQUE7UUFFeEIsZ0JBQVUsR0FBVSxJQUFJLENBQUE7UUFDeEIsZUFBUyxHQUFZLEtBQUssQ0FBQTtRQUcxQixrQkFBWSxHQUFVLElBQUksQ0FBQTtRQUkxQixpQkFBVyxH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QUFFLENBQUMsU0FBUyxHQTZ1QmpEO2tCQTd1Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGlsZUJsb2NrIGZyb20gXCIuL1RpbGVCbG9ja1wiXG5pbXBvcnQgZ2FtZV9sZXZlbF9jZmcgLHtMZXZlbERhdGF9IGZyb20gXCIuL2dhbWVfbGV2ZWxfY2ZnXCJcbmltcG9ydCBnYW1lX2NvbmZpZ19keW4gZnJvbSBcIi4vZ2FtZV9jb25maWdfZHluXCJcbmltcG9ydCBnYW1lX2hlbHBlcnMgZnJvbSBcIi4vZ2FtZV9oZWxwZXJzXCJcbmltcG9ydCBnbG9iYWxfbW9kZWwgZnJvbSBcIi4vZ2xvYmFsX21vZGVsXCJcbmltcG9ydCBnYW1lX2NvcmUgZnJvbSBcIi4vZ2FtZV9jb3JlXCJcbmltcG9ydCBnYW1lX2NvbnN0YW50cyBmcm9tIFwiLi9nYW1lX2NvbnN0YW50c1wiXG5pbXBvcnQgeyBhZG1nciB9IGZyb20gXCIuL2FkTWdyXCJcbmltcG9ydCBsZXZlbF9tZ3IgZnJvbSBcIi4vbGV2ZWxfbWdyXCJcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5jb25zdCBUSUxFX1dJRFRIOiBudW1iZXIgPSA4OFxuY29uc3QgVElMRV9IRUlHSFQ6IG51bWJlciA9IDg4XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBMZXZlbHM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlsZUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICB0aWxlTGlzdDogVGlsZUJsb2NrW10gPSBbXVxuICAgIG1hdGNoTGlzdDogVGlsZUJsb2NrW10gPSBbXVxuICAgIHJlY29yZExpc3Q6IFRpbGVCbG9ja1tdID0gW11cbiAgICBsdkRhdGE6IExldmVsRGF0YVxuICAgIGxvY2s6IGJvb2xlYW4gPSBmYWxzZS8v5YGa5Yqo55S755So6Ziy5q2i6K+v54K5XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWxfdHh0OiBjYy5MYWJlbD1udWxsXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dF91bmRvOiBjYy5MYWJlbD1udWxsXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dF9zaHVmZmxlOiBjYy5MYWJlbD1udWxsXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dF9oaW50OiBjYy5MYWJlbD1udWxsXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dF9wdXQzOiBjYy5MYWJlbD1udWxsXG5cbiAgICAvL+WIhuaVsOiuoeeul1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBub2RlX3Byb2dyZXNzOiBjYy5Qcm9ncmVzc0Jhcj1udWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZV9zdGFyMTogY2MuTm9kZT1udWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZV9zdGFyMjogY2MuTm9kZT1udWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZV9zdGFyMzogY2MuTm9kZT1udWxsXG4gICAgY291bnREb3duOiBib29sZWFuID0gZmFsc2VcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVfd2FybmluZzogY2MuTm9kZT1udWxsXG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlc3VsdF92aWV3OiBjYy5Ob2RlPW51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByZXN1bHRfdmlld193aW46IGNjLk5vZGU9bnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlc3VsdF92aWV3X2xvc2U6IGNjLk5vZGU9bnVsbFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGVscF92aWV3OiBjYy5Ob2RlPW51bGxcblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGV2ZWxzX3ZpZXc6IGNjLk5vZGU9bnVsbFxuIFxuXG4gICAgLy9taW56aW5kZXhcbiAgICBtaW5aaW5kZXg6bnVtYmVyID0gMTAwMDBcbiAgICBwcm9ncmVzc19sZXZlbEJhc2U9MC4wMDFcbiAgICBwcm9ncmVzc19sZXZlbEJhc2Vfb3JnPTAuMDAwMlxuXG4gICBcblxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtPT1jYy5zeXMuSVBBRClcbiAgICAgICAge1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSB0cnVlXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGdhbWVfY29uc3RhbnRzLnNlbGVjdF9sZXZlbF9jbGlja2VkLHRoaXMuc2VsZWN0X2xldmVsX2NsaWNrZWQsdGhpcylcbiAgICAgICBcbiAgICB9XG4gICAgcGxheVNGWChhdWRpbzpjYy5BdWRpb0NsaXApXG4gICAge1xuICAgICAgICBcbiAgICB9XG4gICAgcGxheUdhbWVQYXNzKClcbiAgICB7IFxuICAgICAgICBcbiAgICB9XG4gICAgcGxheUdhbWVGYWlsZWQoKVxuICAgIHsgXG4gICAgICAgICBcbiAgICB9XG4gICAgc2VsZWN0X2xldmVsX2NsaWNrZWQobHYpXG4gICAge1xuICAgICAgICAvLyAvL3RoaXMucGxheVNGWCh0aGlzLmJ0bl9jbGljaykgICBcbiAgICAgICAgZ2xvYmFsX21vZGVsLmdhbWUuc2VsZWN0ZWRMZXZlbD1sdlxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdF9sZXZlbF9jbGlja2VkIFwiLGdsb2JhbF9tb2RlbC5nYW1lLnNlbGVjdGVkTGV2ZWwsbHYpXG4gICAgICAgIHRoaXMuZ29fZ2FtZV9yZWluaXQoKVxuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5oZWxwX3ZpZXcuYWN0aXZlPXRydWVcbiAgICAgICAgdGhpcy5nYW1lX3JlaW5pdCgpXG4gICAgfVxuICAgIGdhbWVfcmVpbml0KCkge1xuICAgICAgICB0aGlzLnJlY3ljbGUoKVxuICAgICAgICB0aGlzLm5vZGVfd2FybmluZy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxuICAgICAgICB0aGlzLnRpbGVMaXN0ID0gW11cbiAgICAgICAgdGhpcy5tYXRjaExpc3QgPSBbXVxuICAgICAgICB0aGlzLnJlY29yZExpc3QgPSBbXVxuICAgICAgICB0aGlzLmx2RGF0YSA9IG51bGxcbiAgICAgICAgdGhpcy5sb2NrID0gZmFsc2VcbiAgICAgICAgdGhpcy5jb3VudERvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLmxvYWRfbGV2ZWxzX2RhdGEoKVxuICAgICAgICB0aGlzLnByb2dyZXNzX2xldmVsQmFzZT10aGlzLnByb2dyZXNzX2xldmVsQmFzZV9vcmcqZ2xvYmFsX21vZGVsLmdhbWUuc2VsZWN0ZWRMZXZlbFxuICAgICAgICB0aGlzLnByb2dyZXNzX2xldmVsQmFzZT1NYXRoLm1heCh0aGlzLnByb2dyZXNzX2xldmVsQmFzZSwwLjAwNClcbiAgICB9XG4gICAgbG9hZF9sZXZlbHNfZGF0YSgpIHtcbiAgICAgICAgdGhpcy5sdkRhdGEgPSBnYW1lX2NvbmZpZ19keW4ubGV2ZWwuZ2V0TGV2ZWxEYXRhKGdsb2JhbF9tb2RlbC5nYW1lLnNlbGVjdGVkTGV2ZWwpXG4gICAgICAgIHRoaXMubGV2ZWxfdHh0LnN0cmluZyA9IFwiXCIrZ2xvYmFsX21vZGVsLmdhbWUuc2VsZWN0ZWRMZXZlbFxuICAgICAgICB0aGlzLm5vZGVfcHJvZ3Jlc3MucHJvZ3Jlc3MgPSAxXG4gICAgICAgIHRoaXMubm9kZV9zdGFyMS5hY3RpdmUgPSB0aGlzLm5vZGVfc3RhcjIuYWN0aXZlID0gdGhpcy5ub2RlX3N0YXIzLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtVmlldygpXG4gICAgICAgIHRoaXMuY3JlYXRlX3RpbGVzX2Jsb2NrKClcbiAgICB9XG4gICAgcmVjeWNsZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCB0ZW1wIG9mIHRoaXMudGlsZUxpc3QpIHtcbiAgICAgICAgICAgIHRlbXAucmVjeWNsZSgpXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0ZW1wIG9mIHRoaXMubWF0Y2hMaXN0KSB7XG4gICAgICAgICAgICB0ZW1wLnJlY3ljbGUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZV90aWxlc19ibG9jaygpIHtcbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyLmRlc3Ryb3lBbGxDaGlsZHJlbigpXG4gICAgICAgIGxldCBhbmlQb3MgPSBbY2MudjIoMCwgMTIwMSksIGNjLnYyKDcwMSwgMCksIGNjLnYyKDAsIC0xMjAxKSwgY2MudjIoLTcwMSwgMCldXG5cbiAgICAgICAgbGV0IHR5cGVzID0gZ2FtZV9jb25maWdfZHluLmxldmVsLmdldFR5cGVzKHRoaXMubHZEYXRhLmNvdW50LCB0aGlzLmx2RGF0YS50eXBlQ291bnQpXG4gICAgICAgIHR5cGVzID0gZ2FtZV9oZWxwZXJzLnJhbmRvbUFycmF5KHR5cGVzKVxuICAgICAgICBsZXQgYyA9IDBcbiAgICAgICAgbGV0IG1pblggPSA5OTk5OTlcbiAgICAgICAgbGV0IG1pblkgPSA5OTk5OTlcbiAgICAgICAgbGV0IG1heFggPSAwXG4gICAgICAgIGxldCBtYXhZID0gMFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubHZEYXRhLmZsb29ySWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBmbG9vckRhdGEgPSBnYW1lX2NvbmZpZ19keW4ubGV2ZWwuZ2V0Rmxvb3JEYXRhKE51bWJlcih0aGlzLmx2RGF0YS5mbG9vcklkc1tpXSkpXG4gICAgICAgICAgICBsZXQgdGlsZXMgPSBmbG9vckRhdGEubGF5b3V0c1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbmZvIG9mIHRpbGVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IGluZm8uc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBOdW1iZXIocG9zWzBdKVxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBOdW1iZXIocG9zWzFdKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBnYW1lX2NvcmUucG9vbC5nZXQoJ1RpbGVCbG9jaycpXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aWxlLm5vZGVcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMudGlsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAxXG5cbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVMaXN0LnB1c2godGlsZSlcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gY2MudjIoVElMRV9XSURUSCowLjUgKiBpLCAtVElMRV9IRUlHSFQqMC41ICogaSlcbiAgICAgICAgICAgICAgICB0aWxlLmxheWVyID0gaVxuICAgICAgICAgICAgICAgIHRpbGUucm93ID0gcm93XG4gICAgICAgICAgICAgICAgdGlsZS5jb2wgPSBjb2xcbiAgICAgICAgICAgICAgICB0aWxlLm5vZGUuekluZGV4ID0gdGhpcy5nZXRfX19aaW5kZXgocm93LCBjb2wsIHRpbGUubGF5ZXIpXG5cbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5nZXRUaWxlUG9zKHJvdywgY29sLCBvZmZzZXQpXG4gICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvc1xuXG4gICAgICAgICAgICAgICAgdGlsZS50eXBlID0gdHlwZXNbY11cbiAgICAgICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVClcbiAgICAgICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5sb2NrICYmICF0aWxlLmRhcmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9NYXRjaExpc3QodGlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vdGhpcy5wbGF5U0ZYKHRoaXMuYmxvY2tfY2xpY2spXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvL2dhbWVfY29yZS5zb3VuZE1hbmFnZXIucGxheVNGWCgnY2xpY2tjdWJlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5pyJ5LqG5pON5L2c5LmL5ZCO77yM5byA5aeL5YCS6K6h5pe2XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93biA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICgvL2dhbWVfY29yZS5zb3VuZE1hbmFnZXIudmlicmF0ZSA9PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFdYVFRnYW1lX2hlbHBlcnMudmlicmF0ZVNob3J0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGlmIChub2RlLnggPiBtYXhYKVxuICAgICAgICAgICAgICAgICAgICBtYXhYID0gbm9kZS54XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUueSA+IG1heFkpXG4gICAgICAgICAgICAgICAgICAgIG1heFkgPSBub2RlLnlcblxuICAgICAgICAgICAgICAgIGlmIChub2RlLnggPCBtaW5YKVxuICAgICAgICAgICAgICAgICAgICBtaW5YID0gbm9kZS54XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUueSA8IG1pblkpXG4gICAgICAgICAgICAgICAgICAgIG1pblkgPSBub2RlLnlcblxuICAgICAgICAgICAgICAgIGMrK1xuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdyA9IG1heFggLSBtaW5YXG4gICAgICAgIGxldCBoID0gbWF4WSAtIG1pbllcbiAgICAgICAgLy8gbGV0IHQgPSB0aGlzLmxldmVsRGF0YS5sYXlvdXRzW21heEluZGV4XS5hbGlnblcgPT0gNSA/IDM1IDogMFxuICAgICAgICB0aGlzLnRpbGVDb250YWluZXIueCA9IC13ICogMC41IC0gbWluWFxuICAgICAgICB0aGlzLnRpbGVDb250YWluZXIueSA9IChoID4+IDEpIC0gbWF4WSArIDE1MFxuICAgICAgICB0aGlzLmNoZWNrX0FsbF9CbG9jaygpXG5cbiAgICAgICAgLy/lgZrliqjnlLtcbiAgICAgICAgbGV0IGFsbCA9IHRoaXMudGlsZUNvbnRhaW5lci5jaGlsZHJlblxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWxsKSB7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IG5vZGUuZ2V0Q29tcG9uZW50KFRpbGVCbG9jaylcbiAgICAgICAgICAgIGxldCBpID0gdGlsZS5sYXllclxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IGNjLnYyKFRJTEVfV0lEVEgqMC41ICogaSwgLVRJTEVfSEVJR0hUKjAuNSogaSlcbiAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLmdldFRpbGVQb3ModGlsZS5yb3csIHRpbGUuY29sLCBvZmZzZXQpXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gdGFyZ2V0UG9zXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MudjModGFyZ2V0UG9zLnggKyBhbmlQb3NbaSAlIDRdLngsIHRhcmdldFBvcy55ICsgYW5pUG9zW2kgJSA0XS55KVxuICAgICAgICAgICAgY2MudHdlZW4obm9kZSkuZGVsYXkoaSAqIDAuMiArIDAuMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9nYW1lX2NvcmUuc291bmRNYW5hZ2VyLnBsYXlTRlgoJ3N3dGljaCcsIDEwKVxuICAgICAgICAgICAgICAgIC8vdGhpcy5wbGF5U0ZYKHRoaXMuYmxvY2tfc3dpdGNoKVxuICAgICAgICAgICAgfSkudG8oMC4yNSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSkuc3RhcnQoKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRfX19aaW5kZXgocm93LCBjb2wsIGxheWVyKSB7XG4gICAgICAgIHJldHVybiByb3cgKiAyMCArIGNvbCArIGxheWVyICogMjAwXG4gICAgfVxuICAgIGNoZWNrX0FsbF9CbG9jayhhbmk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgdGhpcy50aWxlTGlzdCkge1xuICAgICAgICAgICAgaWYodGlsZS5ub2RlLnpJbmRleCA8IDEwMDAwKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzX0Jsb2NrKHRpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUuc2V0RGFyayh0cnVlLCBhbmkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5zZXREYXJrKGZhbHNlLCBhbmkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9oYXNfQmxvY2sodGlsZTogVGlsZUJsb2NrKSB7XG4gICAgICAgIGxldCB0aWxlUmVjID0gdGlsZS5ub2RlLmdldEJvdW5kaW5nQm94KClcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgdGVtcFRpbGUgb2YgdGhpcy50aWxlTGlzdCkge1xuICAgICAgICAgICAgaWYgKHRlbXBUaWxlID09IHRpbGUpIGNvbnRpbnVlXG4gICAgICAgICAgICBpZiAodGVtcFRpbGUubGF5ZXIgPiB0aWxlLmxheWVyKSB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0ZW1wVGlsZS5ub2RlLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyh0aWxlUmVjKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZ2V0VGlsZVBvcyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIG9mZnNldDogY2MuVmVjMikge1xuICAgICAgICByZXR1cm4gY2MudjMoY29sICogVElMRV9XSURUSCArIG9mZnNldC54LCAtcm93ICogVElMRV9IRUlHSFQgKyBvZmZzZXQueSwgMClcbiAgICB9XG4gICAgLy/mt7vliqDliLDliJfooahcbiAgICBhZGRUb01hdGNoTGlzdCh0aWxlOiBUaWxlQmxvY2spIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hMaXN0Lmxlbmd0aCA8IDcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoTGlzdC5pbmRleE9mKHRpbGUpICE9IC0xKSByZXR1cm5cbiAgICAgICAgICAgIHRpbGUuc2V0RGFyayhmYWxzZSwgZmFsc2UpXG5cbiAgICAgICAgICAgIGdhbWVfaGVscGVycy5yZW1vdmVFbGVtZW50RnJvbUFycmF5KHRpbGUsIHRoaXMudGlsZUxpc3QpXG5cbiAgICAgICAgICAgIHRoaXMucmVjb3JkTGlzdC5wdXNoKHRpbGUpXG5cbiAgICAgICAgICAgIHRpbGUubm9kZS56SW5kZXggPSA5OTlcbiAgICAgICAgICAgIGxldCBib2wgPSBmYWxzZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWF0Y2hMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2hMaXN0W2ldLnR5cGUgPT0gdGlsZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaExpc3Quc3BsaWNlKGkgKyAxLCAwLCB0aWxlKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYm9sKVxuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hMaXN0LnB1c2godGlsZSlcbiAgICAgICAgICAgIHRoaXMuc2V0TWF0Y2hEZXB0aCgpXG4gICAgICAgICAgICB0aGlzLm1vdmVUb1JpZ2h0UG9zKClcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSZW1vdmUoKVxuICAgICAgICAgICAgdGhpcy5jaGVja19BbGxfQmxvY2sodHJ1ZSlcbiAgICAgICAgICAgIHRoaXMuY2hlY2tXYXJuaW5nKClcbiAgICAgICAgICAgIHRoaXMuY2hlY2tHYW1lUmVzdWx0KClcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNldE1hdGNoRGVwdGgoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1hdGNoTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5tYXRjaExpc3RbaV0ubm9kZS56SW5kZXggPSBpICsgOTk5XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW92ZVRvUmlnaHRQb3MoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXRjaExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBnYW1lX2hlbHBlcnMuY29udmV0T3RoZXJOb2RlU3BhY2VBUih0aGlzLnRhcmdldE5vZGUsIHRoaXMudGlsZUNvbnRhaW5lcilcbiAgICAgICAgICAgIGxldCB0YXJnZXRYID0gaSAqIDgyICsgcG9zLnggLSAyNDZcbiAgICAgICAgICAgIGxldCB0YXJnZXRZID0gcG9zLnkgKyAyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5tYXRjaExpc3RbaV0ubm9kZSlcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWF0Y2hMaXN0W2ldLm5vZGUpLnRvKDAuMywgeyB4OiB0YXJnZXRYLCB5OiB0YXJnZXRZIH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSkuY2FsbCgodGFyZ2V0Tm9kZTogY2MuTm9kZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFRpbGUgPSB0YXJnZXROb2RlLmdldENvbXBvbmVudChUaWxlQmxvY2spXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFRpbGUucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFRpbGUucmVjeWNsZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAvL3RhcmdldE5vZGUuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvUmlnaHRQb3MoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR2FtZVJlc3VsdCgpXG4gICAgICAgICAgICAgICAgICAgIC8vZ2FtZV9jb3JlLnNvdW5kTWFuYWdlci5wbGF5U0ZYKCd0aWxlY2xlYW4nKVxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGxheVNGWChNYXRoLnJhbmRvbSgpPjAuNT90aGlzLmJsb2NrX2NsZWFuOnRoaXMuYmxvY2tfY2xlYW4yKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKDAuMDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmVtb3ZlTGlzdDogVGlsZUJsb2NrW10gPSBbXVxuICAgIGNoZWNrUmVtb3ZlKCkge1xuICAgICAgICBsZXQgb2JqOiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgdGhpcy5tYXRjaExpc3QpIHtcbiAgICAgICAgICAgIG9ialt0aWxlLnR5cGVdID0gb2JqW3RpbGUudHlwZV0gfHwgMFxuICAgICAgICAgICAgb2JqW3RpbGUudHlwZV0rK1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqW2tleV0gPj0gMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXRjaExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLm1hdGNoTGlzdFtpXVxuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZS50eXBlID09IE51bWJlcihrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lX2hlbHBlcnMucmVtb3ZlRWxlbWVudEZyb21BcnJheSh0aWxlLCB0aGlzLnJlY29yZExpc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnJlbW92ZSA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaExpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpLS1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlYXJjaFJlbW92ZWFibGUoKSB7XG4gICAgICAgIGxldCBhcnJEYXJrOiBhbnkgPSBbXVxuICAgICAgICBsZXQgb2JqTGlnaHQ6IGFueSA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnRpbGVMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMudGlsZUxpc3RbaV1cbiAgICAgICAgICAgIGlmICghdGlsZS5kYXJrKSB7XG4gICAgICAgICAgICAgICAgb2JqTGlnaHRbdGlsZS50eXBlXSA9IG9iakxpZ2h0W3RpbGUudHlwZV0gfHwgW11cbiAgICAgICAgICAgICAgICBvYmpMaWdodFt0aWxlLnR5cGVdLnB1c2godGlsZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyRGFyay5wdXNoKHRpbGUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICAvL+W6lemDqHRpbGVzXG4gICAgICAgIGlmICh0aGlzLm1hdGNoTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgYm90dG9tT2JqOiBhbnkgPSB7fVxuICAgICAgICAgICAgZm9yIChjb25zdCBib3R0b20gb2YgdGhpcy5tYXRjaExpc3QpIHtcbiAgICAgICAgICAgICAgICBib3R0b21PYmpbYm90dG9tLnR5cGVdID0gYm90dG9tT2JqW2JvdHRvbS50eXBlXSB8fCBbXVxuICAgICAgICAgICAgICAgIGJvdHRvbU9ialtib3R0b20udHlwZV0ucHVzaChib3R0b20pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYm90dG9tQXJyID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGJvdHRvbU9iaikge1xuICAgICAgICAgICAgICAgIGJvdHRvbUFyci5wdXNoKHsgdHlwZTogTnVtYmVyKGtleSksIHRpbGVzOiBib3R0b21PYmpba2V5XSwgY291bnQ6IGJvdHRvbU9ialtrZXldLmxlbmd0aCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm90dG9tQXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5jb3VudCAtIGEuY291bnRcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCBmaXJzdCA9IGJvdHRvbUFyclswXVxuICAgICAgICAgICAgbGV0IG5lZWRDb3VudCA9IDMgLSBmaXJzdC5jb3VudFxuICAgICAgICAgICAgbGV0IG5lZWRUeXBlID0gZmlyc3QudHlwZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZUxpc3RbaV0udHlwZSA9PSBuZWVkVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvTWF0Y2hMaXN0KHRoaXMudGlsZUxpc3RbaV0pXG4gICAgICAgICAgICAgICAgICAgIG5lZWRDb3VudC0tXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWVkQ291bnQgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBsZXQgbGlnaHRBcnIgPSBbXVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqTGlnaHQpIHtcbiAgICAgICAgICAgICAgICBsaWdodEFyci5wdXNoKHsgdHlwZTogTnVtYmVyKGtleSksIHRpbGVzOiBvYmpMaWdodFtrZXldLCBjb3VudDogb2JqTGlnaHRba2V5XS5sZW5ndGggfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpZ2h0QXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5jb3VudCAtIGEuY291bnRcbiAgICAgICAgICAgIH0pXG5cblxuXG4gICAgICAgICAgICBsZXQgZmlyc3QgPSBsaWdodEFyclswXVxuICAgICAgICAgICAgbGV0IG93bkNvdW50ID0gTWF0aC5taW4oMywgZmlyc3QudGlsZXMubGVuZ3RoKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvd25Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb01hdGNoTGlzdChmaXJzdC50aWxlc1tpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBsZWZ0Q291bnQgPSBNYXRoLm1heCgwLCAzIC0gZmlyc3QuY291bnQpXG4gICAgICAgICAgICBsZXQgbmVlZFR5cGUgPSBmaXJzdC50eXBlXG4gICAgICAgICAgICBpZiAobGVmdENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcCBvZiBhcnJEYXJrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wLnR5cGUgPT0gbmVlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9NYXRjaExpc3QodGVtcClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRDb3VudC0tXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdENvdW50ID09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0dhbWVSZXN1bHQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoTGlzdC5sZW5ndGggPj0gNykge1xuICAgICAgICAgICAgdGhpcy5sb2NrID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRfdmlldy5hY3RpdmU9dHJ1ZVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRfdmlld193aW4uYWN0aXZlPWZhbHNlXG4gICAgICAgICAgICB0aGlzLnJlc3VsdF92aWV3X2xvc2UuYWN0aXZlPXRydWVcbiAgICAgICAgICAgIHRoaXMucGxheUdhbWVGYWlsZWQoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGlsZUxpc3QubGVuZ3RoID09IDApIHsgIC8vc3VjY2Vzcy4uLlxuICAgICAgICAgICAgdGhpcy5wbGF5R2FtZVBhc3MoKVxuICAgICAgICAgICAgdGhpcy5sb2NrID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IGhhc0F3YXJkID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChnbG9iYWxfbW9kZWwuZ2FtZS5zZWxlY3RlZExldmVsID09IGdsb2JhbF9tb2RlbC5nYW1lLmxldmVsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsX21vZGVsLmdhbWUubGV2ZWwgPj0gOCAmJiBnbG9iYWxfbW9kZWwuZ2FtZS5sZXZlbCAlIDQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNBd2FyZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2xvYmFsX21vZGVsLmdhbWUubGV2ZWwrK1xuICAgICAgICAgICAgICAgIGxldCBzdGFyID0gMFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVfcHJvZ3Jlc3MucHJvZ3Jlc3MgPj0gMC44KVxuICAgICAgICAgICAgICAgICAgICBzdGFyID0gM1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZV9wcm9ncmVzcy5wcm9ncmVzcyA+PSAwLjUpXG4gICAgICAgICAgICAgICAgICAgIHN0YXIgPSAyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlX3Byb2dyZXNzLnByb2dyZXNzID4gMC4xKVxuICAgICAgICAgICAgICAgICAgICBzdGFyID0gMVxuICAgICAgICAgICAgICAgIGdsb2JhbF9tb2RlbC5nYW1lLmxldmVsX3N0YXJbZ2xvYmFsX21vZGVsLmdhbWUuc2VsZWN0ZWRMZXZlbF0gPSBzdGFyXG4gICAgICAgICAgICAgICAgZ2xvYmFsX21vZGVsLnNhdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRfdmlldy5hY3RpdmU9dHJ1ZVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRfdmlld193aW4uYWN0aXZlPXRydWVcbiAgICAgICAgICAgIHRoaXMucmVzdWx0X3ZpZXdfbG9zZS5hY3RpdmU9ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5RmFpbEFuaShjYWxsYmFjazogRnVuY3Rpb24pIHtcblxuICAgICAgICBmb3IgKGNvbnN0IHRlbXAgb2YgdGhpcy50aWxlTGlzdCkge1xuICAgICAgICAgICAgbGV0IGRlbGF5ID0gdGVtcC5yb3cgKiAwLjA1ICsgdGVtcC5jb2wgKiAwLjA1XG4gICAgICAgICAgICBjYy50d2Vlbih0ZW1wLm5vZGUpLmRlbGF5KGRlbGF5KS5ieSgwLjUsIHsgeTogLTE0MDAgfSwgeyBlYXNpbmc6ICdiYWNrSW5PdXQnIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgICAgIH0sIDEpXG4gICAgfVxuICAgIGNoZWNrV2FybmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hMaXN0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGVfd2FybmluZylcbiAgICAgICAgICAgIHRoaXMubm9kZV93YXJuaW5nLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVfd2FybmluZy5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlX3dhcm5pbmcpXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGVfd2FybmluZykudG8oMSwgeyBvcGFjaXR5OiAwIH0pLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX3ByZXYoKSB7XG5cblxuICAgIH1cbiAgICBjbGlja19zaHVmZmxlKCkge1xuICAgICAgICAvL3RoaXMucGxheVNGWCh0aGlzLmJ0bl9jbGljaylcbiAgICAgICAgaWYgKGdsb2JhbF9tb2RlbC5nYW1lLnNodWZmbGVfY291bnRlciA+IDApIHtcbiAgICAgICAgICAgIGdsb2JhbF9tb2RlbC5nYW1lLnNodWZmbGVfY291bnRlci0tXG4gICAgICAgICAgICBnbG9iYWxfbW9kZWwuc2F2ZSgpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1WaWV3KClcbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLmxvY2spcmV0dXJuXG5cbiAgICAgICAgICAgIGFkbWdyLnNob3dWaWRlbygoKT0+e1xuICAgICAgICAgICAgICAgIGdsb2JhbF9tb2RlbC5nYW1lLnNodWZmbGVfY291bnRlcisrXG4gICAgICAgICAgICAgICAgZ2xvYmFsX21vZGVsLnNhdmUoKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVZpZXcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICBcbiAgICAgICAgICAgIC8vIHRoaXMubG9jayA9IHRydWVcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIHNodWZmbGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTAwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBybmRBID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50aWxlTGlzdC5sZW5ndGgpXG4gICAgICAgICAgICBsZXQgcm5kQiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGlsZUxpc3QubGVuZ3RoKVxuICAgICAgICAgICAgaWYgKHJuZEEgIT0gcm5kQikge1xuICAgICAgICAgICAgICAgIGxldCBub2RlQSA9IHRoaXMudGlsZUxpc3Rbcm5kQV1cbiAgICAgICAgICAgICAgICBsZXQgbm9kZUIgPSB0aGlzLnRpbGVMaXN0W3JuZEJdXG4gICAgICAgICAgICAgICAgdGhpcy5zd2FwVGlsZShub2RlQSwgbm9kZUIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHRoaXMudGlsZUxpc3QpIHtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBjYy52Mih0aWxlLmxheWVyICogVElMRV9XSURUSCowLjUsIC10aWxlLmxheWVyICogVElMRV9IRUlHSFQqMC41KVxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0VGlsZVBvcyh0aWxlLnJvdywgdGlsZS5jb2wsIG9mZnNldClcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aWxlLm5vZGUpXG4gICAgICAgICAgICBjYy50d2Vlbih0aWxlLm5vZGUpLnRvKDAuMjUsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX0FsbF9CbG9jayh0cnVlKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN3YXBUaWxlKHRpbGVBOiBUaWxlQmxvY2ssIHRpbGVCOiBUaWxlQmxvY2spIHtcblxuICAgICAgICBsZXQgdGVtcFJvdyA9IHRpbGVBLnJvd1xuICAgICAgICB0aWxlQS5yb3cgPSB0aWxlQi5yb3dcbiAgICAgICAgdGlsZUIucm93ID0gdGVtcFJvd1xuXG4gICAgICAgIGxldCB0ZW1wQ29sID0gdGlsZUEuY29sXG4gICAgICAgIHRpbGVBLmNvbCA9IHRpbGVCLmNvbFxuICAgICAgICB0aWxlQi5jb2wgPSB0ZW1wQ29sXG5cbiAgICAgICAgbGV0IHRlbXBMYXllciA9IHRpbGVBLmxheWVyXG4gICAgICAgIHRpbGVBLmxheWVyID0gdGlsZUIubGF5ZXJcbiAgICAgICAgdGlsZUIubGF5ZXIgPSB0ZW1wTGF5ZXJcblxuICAgICAgICBsZXQgdGVtcFppbmRleCA9IHRpbGVBLm5vZGUuekluZGV4XG4gICAgICAgIHRpbGVBLm5vZGUuekluZGV4ID0gdGlsZUIubm9kZS56SW5kZXhcbiAgICAgICAgdGlsZUIubm9kZS56SW5kZXggPSB0ZW1wWmluZGV4XG5cbiAgICB9XG4gICAgY2xpY2tfdW5kbygpIHtcbiAgICAgICAgLy90aGlzLnBsYXlTRlgodGhpcy5idG5fY2xpY2spXG4gICAgICAgIGlmICh0aGlzLnJlY29yZExpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8vIE1zZ0hpbnRzLnNob3coJ+ayoeacieaTjeS9nOeahOiusOW9lT8nKVxuICAgICAgICAgICAgLy8gTXNnSGludHMuc2hvdygnTm8gb3BlcmF0aW9uIHJlY29yZCEnKVxuICAgICAgICAgICAgYWRtZ3Iuc2hvd1RvYXN0KFwiTm8gb3BlcmF0aW9uIHJlY29yZCFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsX21vZGVsLmdhbWUudW5kb19jb3VudGVyID4gMCkge1xuICAgICAgICAgICAgZ2xvYmFsX21vZGVsLmdhbWUudW5kb19jb3VudGVyLS1cbiAgICAgICAgICAgIGdsb2JhbF9tb2RlbC5zYXZlKClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVZpZXcoKVxuICAgICAgICAgICAgdGhpcy51bmRvX29wZXJhdG9yKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMubG9jaylyZXR1cm5cbiAgICAgICAgICAgIGFkbWdyLnNob3dWaWRlbygoKT0+e1xuICAgICAgICAgICAgICAgIGdsb2JhbF9tb2RlbC5nYW1lLnVuZG9fY291bnRlcisrXG4gICAgICAgICAgICAgICAgZ2xvYmFsX21vZGVsLnNhdmUoKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVZpZXcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHRoaXMubG9jayA9IHRydWVcbiAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHVuZG9fb3BlcmF0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY29yZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLnJlY29yZExpc3QucG9wKClcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBjYy52Mih0aWxlLmxheWVyICogVElMRV9XSURUSCowLjUsIC10aWxlLmxheWVyICogVElMRV9IRUlHSFQqMC41KVxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0VGlsZVBvcyh0aWxlLnJvdywgdGlsZS5jb2wsIG9mZnNldClcblxuICAgICAgICAgICAgdGlsZS5ub2RlLnpJbmRleCA9IHRoaXMuZ2V0X19fWmluZGV4KHRpbGUucm93LCB0aWxlLmNvbCwgdGlsZS5sYXllcilcblxuICAgICAgICAgICAgZ2FtZV9oZWxwZXJzLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkodGlsZSwgdGhpcy5tYXRjaExpc3QpXG4gICAgICAgICAgICB0aGlzLnRpbGVMaXN0LnB1c2godGlsZSlcblxuICAgICAgICAgICAgY2MudHdlZW4odGlsZS5ub2RlKS50bygwLjI1LCB7IHBvc2l0aW9uOiBwb3MgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX0FsbF9CbG9jayh0cnVlKVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvUmlnaHRQb3MoKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsaWNrX2hpbnQoKSB7XG4gICAgICAgIC8vdGhpcy5wbGF5U0ZYKHRoaXMuYnRuX2NsaWNrKVxuICAgICAgICBpZiAoZ2xvYmFsX21vZGVsLmdhbWUuaGludF90aXBfY291bnRlciA+IDApIHtcbiAgICAgICAgICAgIGdsb2JhbF9tb2RlbC5nYW1lLmhpbnRfdGlwX2NvdW50ZXItLVxuICAgICAgICAgICAgZ2xvYmFsX21vZGVsLnNhdmUoKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtVmlldygpXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFJlbW92ZWFibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5sb2NrKXJldHVyblxuICAgICAgICAgICAgYWRtZ3Iuc2hvd1ZpZGVvKCgpPT57XG4gICAgICAgICAgICAgICAgZ2xvYmFsX21vZGVsLmdhbWUuaGludF90aXBfY291bnRlcisrXG4gICAgICAgICAgICAgICAgZ2xvYmFsX21vZGVsLnNhdmUoKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVZpZXcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmlbDph4/kuI3otrPvvIzlvLnlh7rotK3kubAnKVxuICAgICAgICAgICAgLy8gdGhpcy5sb2NrID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgY2xpY2tfbW92ZXVwKCkge1xuICAgICAgICAvL3RoaXMucGxheVNGWCh0aGlzLmJ0bl9jbGljaylcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkTGlzdC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAvLyBNc2dIaW50cy5zaG93KCfoh7PlsJHmnIkz5Liq5omN6IO95LiA6LW35o6o5LiK5Y67JylcbiAgICAgICAgICAgIC8vIE1zZ0hpbnRzLnNob3coJ05vIG9wZXJhdGlvbiByZWNvcmQhJylcbiAgICAgICAgICAgIGFkbWdyLnNob3dUb2FzdChcIk5vIG9wZXJhdGlvbiByZWNvcmQhXCIpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsX21vZGVsLmdhbWUubW92ZV91cF9jb3VudGVyID4gMCkge1xuICAgICAgICAgICAgZ2xvYmFsX21vZGVsLmdhbWUubW92ZV91cF9jb3VudGVyLS1cbiAgICAgICAgICAgIGdsb2JhbF9tb2RlbC5zYXZlKClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVZpZXcoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL+aUvuS4ieS4qiDlnZfkuIrljrvmnIDlt6bovrnnmoTkuInkuKrlnZfmlL7kuIrljrtcbiAgICAgICAgICAgIHRoaXMubW92ZXVwM19lbGVtZW50cygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLmxvY2spcmV0dXJuXG4gICAgICAgICAgICBhZG1nci5zaG93VmlkZW8oKCk9PntcbiAgICAgICAgICAgICAgICBnbG9iYWxfbW9kZWwuZ2FtZS5tb3ZlX3VwX2NvdW50ZXIrK1xuICAgICAgICAgICAgICAgIGdsb2JhbF9tb2RlbC5zYXZlKClcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1WaWV3KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5pWw6YeP5LiN6Laz77yM5by55Ye66LSt5LmwJylcbiAgICAgICAgICAgIC8vIHRoaXMubG9jayA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG1vdmV1cDNfZWxlbWVudHMoKXtcbiAgICAgICAgbGV0IHBvczEgPSBnYW1lX2hlbHBlcnMuY29udmV0T3RoZXJOb2RlU3BhY2VBUih0aGlzLnRhcmdldE5vZGUsIHRoaXMudGlsZUNvbnRhaW5lcilcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLm1hdGNoTGlzdC5zaGlmdCgpXG4gICAgICAgICAgICAgICAgLy8gbGV0IG9mZnNldCA9IGNjLnYyKHRpbGUubGF5ZXIgKiBUSUxFX1dJRFRIKjAuNSwgLXRpbGUubGF5ZXIgKiBUSUxFX0hFSUdIVCowLjUpXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBvcyA9IHRoaXMuZ2V0VGlsZVBvcyh0aWxlLnJvdywgdGlsZS5jb2wsIG9mZnNldClcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0WCA9IHBvczEueCAtIFRJTEVfV0lEVEggKyBpbmRleCAqIFRJTEVfV0lEVEhcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0WSA9IHBvczEueSArIDEzMFxuICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMubWluWmluZGV4KytcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjModGFyZ2V0WCx0YXJnZXRZLDApXG4gICAgICAgICAgICAgICAgdGlsZS5ub2RlLnpJbmRleCA9IHRoaXMubWluWmluZGV4Ly/lm7rlrprkuIDkuIsg55u05o6l5Y6L552AXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS16aW5kZXgnLGNjLm1hY3JvLk1BWF9aSU5ERVgpXG4gICAgICAgICAgICAgICAgLy8gZ2FtZV9oZWxwZXJzLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkodGlsZSwgdGhpcy5tYXRjaExpc3QpXG4gICAgICAgICAgICAgICAgZ2FtZV9oZWxwZXJzLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkodGlsZSwgdGhpcy5yZWNvcmRMaXN0KVxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUxpc3QucHVzaCh0aWxlKVxuICAgIFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRpbGUubm9kZSkudG8oMC4yNSwgeyBwb3NpdGlvbjogcG9zIH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmNoZWNrX0FsbF9CbG9jayh0cnVlKVxuICAgICAgICAgICAgc2VsZi5tb3ZlVG9SaWdodFBvcygpXG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxuICAgIGNsaWNrX2hlbHAoKSB7XG4gICAgICAgIC8vIGdhbWVfY29yZS53aW4ub3BlbihHYW1lQ29uc3Qud2luUGF0aC5IZWxwV2luKVxuICAgIH1cbiAgICB1cGRhdGVJdGVtVmlldygpIHtcbiAgICAgICAgdGhpcy50eHRfaGludC5zdHJpbmcgPSBnbG9iYWxfbW9kZWwuZ2FtZS5oaW50X3RpcF9jb3VudGVyID09IDAgPyAnMCcgOiBnbG9iYWxfbW9kZWwuZ2FtZS5oaW50X3RpcF9jb3VudGVyICsgJydcbiAgICAgICAgdGhpcy50eHRfc2h1ZmZsZS5zdHJpbmcgPSBnbG9iYWxfbW9kZWwuZ2FtZS5zaHVmZmxlX2NvdW50ZXIgPT0gMCA/ICcwJyA6IGdsb2JhbF9tb2RlbC5nYW1lLnNodWZmbGVfY291bnRlciArICcnXG4gICAgICAgIHRoaXMudHh0X3VuZG8uc3RyaW5nID0gZ2xvYmFsX21vZGVsLmdhbWUudW5kb19jb3VudGVyID09IDAgPyAnMCcgOiBnbG9iYWxfbW9kZWwuZ2FtZS51bmRvX2NvdW50ZXIgKyAnJ1xuICAgICAgICB0aGlzLnR4dF9wdXQzLnN0cmluZyA9IGdsb2JhbF9tb2RlbC5nYW1lLm1vdmVfdXBfY291bnRlciA9PSAwID8gJzAnIDogZ2xvYmFsX21vZGVsLmdhbWUubW92ZV91cF9jb3VudGVyICsgJydcblxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy50eHRfdW5kby5zdHJpbmcpIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudHh0X3VuZG8ubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGljb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnR4dF91bmRvLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRpY29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMudHh0X2hpbnQuc3RyaW5nKSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnR4dF9oaW50Lm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRpY29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy50eHRfaGludC5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImFkaWNvblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLnR4dF9zaHVmZmxlLnN0cmluZykgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy50eHRfc2h1ZmZsZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImFkaWNvblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMudHh0X3NodWZmbGUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGljb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy50eHRfcHV0My5zdHJpbmcpIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudHh0X3B1dDMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGljb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnR4dF9wdXQzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRpY29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuICAgXG4gICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIC8vIHN1cGVyLmNsb3NlKClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGFuZWxEYXRhVXBkYXRlKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVfcmVpbml0KClcbiAgICB9XG4gICAgdXBkYXRlUHJvZ3Jlc3Mob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ub2RlX3Byb2dyZXNzLnByb2dyZXNzICs9IG9mZnNldFxuICAgICAgICBpZiAodGhpcy5ub2RlX3Byb2dyZXNzLnByb2dyZXNzIDw9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubm9kZV9wcm9ncmVzcy5wcm9ncmVzcyA9IDBcbiAgICAgICAgICAgIHRoaXMubG9jayA9IHRydWVcbiAgICAgICAgICAgIHRoaXMucmVzdWx0X3ZpZXcuYWN0aXZlPXRydWVcbiAgICAgICAgICAgIHRoaXMucmVzdWx0X3ZpZXdfd2luLmFjdGl2ZT1mYWxzZVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRfdmlld19sb3NlLmFjdGl2ZT10cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlX3Byb2dyZXNzLnByb2dyZXNzID4gMSlcbiAgICAgICAgICAgIHRoaXMubm9kZV9wcm9ncmVzcy5wcm9ncmVzcyA9IDFcblxuICAgICAgICB0aGlzLm5vZGVfc3RhcjEuYWN0aXZlID0gdGhpcy5ub2RlX3Byb2dyZXNzLnByb2dyZXNzID49IDAuMVxuICAgICAgICB0aGlzLm5vZGVfc3RhcjIuYWN0aXZlID0gdGhpcy5ub2RlX3Byb2dyZXNzLnByb2dyZXNzID49IDAuNVxuICAgICAgICB0aGlzLm5vZGVfc3RhcjMuYWN0aXZlID0gdGhpcy5ub2RlX3Byb2dyZXNzLnByb2dyZXNzID49IDAuOFxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQgXG4gICAge1xuICAgICAgICBpZiAodGhpcy5sb2NrKSByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKC1kdCAqIHRoaXMucHJvZ3Jlc3NfbGV2ZWxCYXNlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdvX2hvbWUoKVxuICAgIHtcbiAgICAgICAgLy90aGlzLnBsYXlTRlgodGhpcy5idG5fY2xpY2spXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVfaG9tZVwiKVxuICAgIH1cbiAgICBnb19uZXh0THYoKVxuICAgIHtcbiAgICAgICAgLy90aGlzLnBsYXlTRlgodGhpcy5idG5fY2xpY2spXG4gICAgICAgIGdsb2JhbF9tb2RlbC5nYW1lLnNlbGVjdGVkTGV2ZWwrK1xuICAgICAgICB0aGlzLnJlc3VsdF92aWV3LmFjdGl2ZT1mYWxzZVxuICAgICAgICB0aGlzLmdhbWVfcmVpbml0KClcbiAgICAgICAgdGhpcy5MZXZlbHMuZ2V0Q29tcG9uZW50KGxldmVsX21ncikudXBkYXRhRGF0YSgpO1xuICAgIH1cbiAgICBnb19nYW1lX3JlaW5pdCgpXG4gICAge1xuICAgICAgICAvL3RoaXMucGxheVNGWCh0aGlzLmJ0bl9jbGljaylcbiAgICAgICAgdGhpcy5yZXN1bHRfdmlldy5hY3RpdmU9ZmFsc2VcbiAgICAgICAgdGhpcy5nYW1lX3JlaW5pdCgpXG4gICAgICAgIHRoaXMuTGV2ZWxzLmdldENvbXBvbmVudChsZXZlbF9tZ3IpLnVwZGF0YURhdGEoKTtcbiAgICAgICAgIFxuICAgIH1cbiAgICBoaWRlc2hvd19zZXR0aW5nVmlldygpXG4gICAge1xuICAgICAgICAvL3RoaXMucGxheVNGWCh0aGlzLmJ0bl9jbGljaylcbiAgICB9XG4gICAgdG9nZ2xlTXVzaWMoZXZ0OmNjLlRvZ2dsZSlcbiAgICB7XG4gICAgICAgIC8vIGdsb2JhbF9tb2RlbC5nYW1lLm11c2ljX2ZsYWc9ZXZ0LmlzQ2hlY2tlZD8xOjBcbiAgICAgICAgZ2xvYmFsX21vZGVsLnNhdmUoKVxuICAgIH1cbiAgICB0b2dnbGVTRlgoZXZ0OmNjLlRvZ2dsZSlcbiAgICB7XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMucGxheVNGWCh0aGlzLmJ0bl9jbGljaylcbiAgICAgICAgLy8gZ2xvYmFsX21vZGVsLmdhbWUuc2Z4X2ZsYWc9ZXZ0LmlzQ2hlY2tlZD8xOjBcbiAgICAgICAgZ2xvYmFsX21vZGVsLnNhdmUoKVxuICAgIH1cbiAgICBoaWRlc2hvd19MZXZlbFZpZXcoKVxuICAgIHtcbiAgICAgICAgLy90aGlzLnBsYXlTRlgodGhpcy5idG5fY2xpY2spXG4gICAgICAgIHRoaXMubGV2ZWxzX3ZpZXcuYWN0aXZlPSF0aGlzLmxldmVsc192aWV3LmFjdGl2ZVxuICAgIH1cbiAgICBvcGVuRmJUb3NoYXJlKClcbiAgICB7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiZmI6Ly9cIilcbiAgICB9XG59XG4iXX0=