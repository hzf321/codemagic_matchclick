export default class game_helpers 
{
    public static randomItem(array: Array<any>) {
        if (array && array.length > 0) {
            return array[this.getRandomInt(0,array.length-1)];
        } else {
            return null;
        }
    }
    public static Object2Array(obj:Object):any[]
    {
        let arr = []
        for (const key in obj) {
            arr.push(obj[key])
        }
        return arr;
    }
    public static getRandom(lower, upper): number {
        return Math.random() * (upper - lower) + lower;
    };

    public static getRandomInt(lower, upper): number {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };

    public static seed: number = 5;

    public static seedRandom(): number {
        return game_helpers.getRandom(0, 1);
        // this.seed = (this.seed * 9301 + 49297) % 233280;
        // return this.seed / 233280.0;
    }
    public static seedRandomInt(lower, upper): number {
        return game_helpers.getRandomInt(lower, upper);
        // return Math.floor(game_helpers.seedRandom() * (upper - lower)) + lower;
    }

    private static rnd(seed) {
        seed = (seed * 9301 + 49297) % 233280; //为何使用这三个数?
        return seed / (233280.0);
    };
 
    public static getPowNum(p) {
        return Math.pow(10, p);
    };

    public static setServerTime(time: number) {
        game_helpers.timeOffset = time - new Date().getTime();
        cc.log("timeOffset:", game_helpers.timeOffset)
    }

    public static timeOffset: number = 0;
    public static getServerTime() {
        return new Date().getTime() + game_helpers.timeOffset;
    }
    static formatDate(t) {
        var date = new Date(t);
        var YY = date.getFullYear() + '-';
        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return YY + MM + DD + " " + hh + mm + ss;
    }

    public static cloneObj(obj: any) {
        obj = JSON.stringify(obj);
        obj = JSON.parse(obj);
        return obj;
    }

    public static getTimeStrByS(second: number) {
        second = Math.floor(second);
        if (second < 0) second = 0;
        var d = Math.floor(second / 3600 / 24);
        second -= d * 3600 * 24;
        var h = Math.floor(second / 3600);
        second -= h * 3600;
        var m = Math.floor(second / 60);
        second -= m * 60;
        var front = "00";
        if (h > 9) {
            front = "" + h;
        } else {
            front = "0" + h;
        }
        var mid = "00";
        if (m > 9) {
            mid = "" + m;
        } else {
            mid = "0" + m;
        }
        var back = "00";
        if (second > 9) {
            back = "" + second;
        } else {
            back = "0" + second;
        }

        if (d > 0) {
            return d + "天" + h + "时" + m + "分";
        }
        else {
            var longTime = h > 0;
            if (longTime) {
                return front + ":" + mid;
            } else {
                return mid + ":" + back;//+ '秒';
            }
        }
    }

    public static getClockStrByS(second: number, showsecond: boolean = true, showhour: boolean = true) {
        second = Math.floor(second);
        if (second < 0) second = 0;
        var h = Math.floor(second / 3600);
        second -= h * 3600;
        var m = Math.floor(second / 60);
        second -= m * 60;
        var front = "00";
        if (h > 9) {
            front = "" + h;
        } else {
            front = "0" + h;
        }
        var mid = "00";
        if (m > 9) {
            mid = "" + m;
        } else {
            mid = "0" + m;
        }

        let str = ""
        if (showhour) {
            str += front;
            str += ":"
        }
        str += mid;

        if (showsecond)
            str += ":" + (second < 10 ? "0" : "") + second;

        return str
    }

    public static checkObjEmpty(obj: any) {
        if (obj) {
            for (var i in obj) {
                return false;
            }
            return true;
        } else {
            return true;
        }
    }

    public static checkOrderOver(orderTime: number) {
        var date = new Date(orderTime);
        var dateNow = new Date(game_helpers.getServerTime());

        if (date.getFullYear() == dateNow.getFullYear() &&
            date.getMonth() == dateNow.getMonth() &&
            date.getDate() == dateNow.getDate()
        ) {
            return false;
        } else {
            return true;
        }
    }


    //spa 相对tp目录
    public static loadSpriteFrame(spa:string,name:string,callback:Function = null)
    {
        this.loadRes("tp/" + spa,"texture",cc.SpriteAtlas,(e,assets:cc.SpriteAtlas)=>{
            if(e)
            {
                console.log(spa,name)
                cc.error(e)
            }else
            {
                callback(assets.getSpriteFrame(name))
            }
        })
    }



    public static loadRes(path: string, boundle_name: string, type: typeof cc.Asset, callback: Function = null) {
        cc.assetManager.loadBundle(boundle_name, (error, bundle: cc.AssetManager.Bundle) => {
            if (error) {
                cc.log(error)
                return
            }
            bundle.load(path, type, (e, assets) => {
                if(e)
                {
                    cc.log(e)
                    return
                }
                callback(e,assets)
            })
        })
    }

    public static weight(v: number[]): number {
        var mTotalWeight = 0;
        for (var i = 0; i < v.length; ++i) {
            mTotalWeight += v[i];
        }
        if (mTotalWeight <= 0) return -1;
        var randnum = Math.round(Math.random() * Number.MAX_VALUE) % mTotalWeight;
        for (var i = 0; i < v.length; ++i) {
            if (randnum < v[i]) {
                return i;
            }
            else {
                randnum -= v[i];
            }
        }
        return -1;
    }

    public static shuffle(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            let rIndex = Math.floor(Math.random() * (i + 1));
            let temp = arr[rIndex];
            arr[rIndex] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    public static getDate(time: number): string {
        var now = new Date(time),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    }

    //货币进位
    public static goldCrarryBit(gold: number): string {

        var array = [
            [100000000, 'N'],
            [10000000, 'T'],
            [1000000, 'G'],
            [100000, 'M'],
            [10000, 'K'],
            [1000, 'B'],
        ];
        for (var i = 0; i < array.length; i++) {
            var value = gold / (array[i][0] as number);
            if (value > 1) {
                return '' + value.toFixed(1) + array[i][1];
            }
        }
        return gold.toString();
    }
    //定点数
    public static fixFloat(val: number, count: number = 2) {
        var a = Math.pow(10, count)
        return Math.floor(val * a) / a;
    }

    //     this.initPool("basechip", ret, 10);
    //     this.initPool("dianchi", ret, 10);
    //     this.initPool("enery", ret, 10);
    //     this.initPool("gem", ret, 10);



    static formatString(s: string, ...arg) {

        for (var i = 0; i < arg.length; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arg[i]);
        }
        return s;
    }

    static count(obj) {
        if (!obj) return 0;
        var num = 0;
        for (var k in obj) {
            num++;
        }
        return num;
    };
    static copy(obj) {
        var newObj = Object.create(obj);
        Object.assign(newObj, obj);
        return newObj;
    }
    static setGray(icon: cc.Sprite, isGray: boolean) {
        if (isGray) {
            icon.setMaterial(0, cc.Material.getBuiltinMaterial('2d-gray-sprite'));
        } else {
            icon.setMaterial(0, cc.Material.getBuiltinMaterial('2d-sprite'));
        }
    }
    static setSpriteFrame(sp: cc.Sprite, path: string, bundle: string = 'resources', callback = null): void {
        let loader = cc.assetManager.getBundle(bundle)
        loader.load(path, cc.Texture2D, (error, assets: cc.Texture2D) => {
            if (error) {
                cc.log('error', path)
                return
            }
            sp.spriteFrame =new cc.SpriteFrame(assets)
            callback && callback()
        })
    }
    public static initArray2(row: number, col: number, value: number = null) {
        let arr = []
        for (let i = 0; i < row; i++) {
            arr[i] = []
            for (let j = 0; j < col; j++) {
                arr[i][j] = value
            }
        }
        return arr
    }
    static localConvertWorldPointAR(node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        } return null;
    }
    static convetOtherNodeSpaceAR(node, targetNode): cc.Vec2 {
        if (!node || !targetNode) {
            return null;
        }
        let worldPoint = game_helpers.localConvertWorldPointAR(node);
        return game_helpers.worldConvertLocalPointAR(targetNode, worldPoint);
    }

    static worldConvertLocalPointAR(node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
        return null;
    }
    // 计算 |p1 p2| X |p1 p|
    static getCross(p1: cc.Vec2, p2: cc.Vec2, p: cc.Vec2) {
        return (p2.x - p1.x) * (p.y - p1.y) - (p.x - p1.x) * (p2.y - p1.y);
    }
    //判断点p是否在p1p2p3p4的正方形内
    static isPointInMatrix(p1: cc.Vec2, p2: cc.Vec2, p3: cc.Vec2, p4: cc.Vec2, p: cc.Vec2) {
        let isPointIn = game_helpers.getCross(p1, p2, p) * game_helpers.getCross(p3, p4, p) >= 0 && game_helpers.getCross(p2, p3, p) * game_helpers.getCross(p4, p1, p) >= 0;
        return isPointIn;
    }
    public static randomArray(arr: number[]) {
        let newArr = []
        let count = arr.length
        for (let i = 0; i < count; i++) {
            let rnd = Math.floor(Math.random() * arr.length)
            newArr.push(arr[rnd])
            arr.splice(rnd, 1)
        }
        return newArr
    }
    public static removeElementFromArray(element: any, arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == element) {
                arr.splice(i, 1)
                break
            }
        }
    }
    static getDayCount(year, month) {
        let runYear = false
        if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
            runYear = true
        }
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
            return 31
        else if (month == 4 || month == 6 || month == 9 || month == 11)
            return 30
        else
            return runYear ? 29 : 28
    }
};