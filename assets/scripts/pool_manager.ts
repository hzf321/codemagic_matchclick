
import game_helpers from "./game_helpers";

const { ccclass, property } = cc._decorator;
@ccclass
export default class pool_manager {


    pools: any = {};
    resKey: any = {}

    init(callback,res:cc.Prefab) 
    {

        this.resKey['TileBlock'] = res
        for (let i = 0; i < 100; i++) {
            let node = cc.instantiate(res)
            this.recover('TileBlock', node)
        }
        callback&&callback()
    }

    get(key: string) {
        if (this.pools[key] == null) {
            this.pools[key] = new cc.NodePool()
        }
        if (this.pools[key].size() > 0) {
            let node = this.pools[key].get()
            return node.getComponent(node.name)
        }
        let node = cc.instantiate(this.resKey[key])
        return node.getComponent(node.name)

    }
    recover(key: string, node: cc.Node) {
        if (this.pools[key] == null) {
            this.pools[key] = new cc.NodePool()
        }
        this.pools[key].put(node)
    }


}


