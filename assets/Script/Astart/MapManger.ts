const { ccclass} = cc._decorator;
@ccclass
export default class MapManger {

    public static mapArr: Array<Array<cc.Vec2>> = [];
    public static mapWidth: number = 0;
    public static mapHeight: number = 0;
    public static playerPosArr = [];
    public static initMap(mapArr: Array<Array<cc.Vec2>>, w: number, h: number) {
        this.mapArr = mapArr;
        this.mapWidth = w;
        this.mapHeight = h;
    }
    static cleanMap() {
        this.mapArr = [];
        this.mapWidth = 0;
        this.mapHeight = 0;
        this.playerPosArr = [];    
    }
    static isHavePos(pos) {
        let res = false;
        for(let i = 0; i < this.playerPosArr.length; i++) {
            if (this.playerPosArr[i].x == pos.x && this.playerPosArr[i].y == pos.y) {
                res = true;
                break;
            }
        }
        return res;
    }


    // update (dt) {}
}
