
import game_level_cfg from "./game_level_cfg";
export default class game_config_dyn
{
   
    public static level:game_level_cfg=new game_level_cfg()
  
    static  load(callback:Function)
    {
        game_config_dyn.level.setup()
    }
}