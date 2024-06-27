import model_base, { save } from "./model_base";

export default class game_model extends model_base {

    
    @save 
    public level: number = 1;

    public selectedLevel: number = 1;

    //关卡星星
    @save 
    level_star = {};//key:lv value:star
    // @save 
    // public money: number = 0

    @save 
    public shuffle_counter: number = 5

    @save 
    public undo_counter: number = 5

    @save 
    public hint_tip_counter: number = 5

    @save 
    public move_up_counter: number = 5



    setDefault() {
        //新号
        //设置默认设施

    }
    public setData(data: any) {
        super.setData(data)
        console.log("Set Data... ",data)
        this.selectedLevel=this.level
    }
}
