import global_model from "./global_model"
import pool_manager from "./pool_manager"
//游戏核心封装
export default class game_core
{
   
    public static pool:pool_manager=new pool_manager()
    static init(node:cc.Node,tileBlock:cc.Prefab)
    {
        game_core.pool.init(undefined,tileBlock)
        global_model.loadData()
    }
}