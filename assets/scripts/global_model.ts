import game_constants from "./game_constants";
import game_helpers from "./game_helpers";
import game_model from "./game_model";

export default class global_model {

    public static game: game_model = new game_model();
    public static save() {
        var obj = {}
       obj['config_game_obj'] = global_model.game.getData()
        global_model.savedata(obj)
    }

    public static getGameData() {
       let strdata = cc.sys.localStorage.getItem(game_constants.localDataKey);
       return strdata;
    }

   

    public static loadData() {
        var localdata = cc.sys.localStorage.getItem(game_constants.localDataKey);
        if (localdata) {
            localdata = JSON.parse(localdata);
            global_model.game.setData(localdata['config_game_obj'])

        }
        else {
            global_model.game.setDefault()
        }
    }
    private static savedata(data) {
        var strdata = JSON.stringify(data);
        cc.sys.localStorage.setItem(game_constants.localDataKey, strdata);
        data.game = {}
    }
}