
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/TileBlock');
require('./assets/scripts/adMgr');
require('./assets/scripts/game_config_dyn');
require('./assets/scripts/game_constants');
require('./assets/scripts/game_core');
require('./assets/scripts/game_helpers');
require('./assets/scripts/game_level_cfg');
require('./assets/scripts/game_main');
require('./assets/scripts/game_model');
require('./assets/scripts/global_model');
require('./assets/scripts/how_to_play_game');
require('./assets/scripts/jhsD3BQUzrckXHMC');
require('./assets/scripts/koffTaS');
require('./assets/scripts/level_item');
require('./assets/scripts/level_mgr');
require('./assets/scripts/loading');
require('./assets/scripts/model_base');
require('./assets/scripts/pool_manager');

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