const { ccclass, property, menu } = cc._decorator;

export enum OriginCommon {
    LEFT = 0,
    RIGHT,
    UP,
    DOWN

}
@ccclass
@menu('Script/AStart/Player')
export default class Player extends cc.Component {

    public static mapArr: Array<Array<cc.Vec2>> = [];
    public static mapWidth: number = 0;
    public static mapHeight: number = 0;
    public static initMap(mapArr: Array<Array<cc.Vec2>>, w: number, h: number) {
        this.mapArr = mapArr;
        this.mapWidth = w;
        this.mapHeight = h;
    }

    posX: number = 0;
    posY: number = 0;
    onLoad() {
     
    }
    setColor(color: cc.Color, isSelf:boolean = false) {
        this.node.color = color;
        if (isSelf) {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }
    setPos(x: number, y: number) {
        this.posX = x;
        this.posY = y;
        this.updatePos();
    }
    updatePos() {
        this.node.x = Player.mapArr[this.posX][this.posY].x;
        this.node.y = Player.mapArr[this.posX][this.posY].y;
    }

    start() {
        cc.tween(this.node)
            .repeatForever(
                cc.tween().to(0.5, { opacity: 125 })
                    .to(0.5, { opacity: 255 })
            )
            .start()
    }

    moveOrigin(ori: OriginCommon) {
        switch (ori) {
            case OriginCommon.LEFT:
                if (this.posX > 0) {
                    this.posX--;
                }
                break;
            case OriginCommon.RIGHT:
                if (this.posX < Player.mapWidth - 1) {
                    this.posX++;

                }
                break;
            case OriginCommon.UP:
                if (this.posY < Player.mapHeight - 1) {
                    this.posY++;
                }
                break;
            case OriginCommon.DOWN:
                if (this.posY > 0) {
                    this.posY--;

                }
                break;
        }
        this.updatePos();
    }

    onKeyDown(event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                console.log('Press w key');
                this.moveOrigin(OriginCommon.UP);
                break;
            case cc.macro.KEY.s:
                console.log('Press s key');
                this.moveOrigin(OriginCommon.DOWN);
                break;
            case cc.macro.KEY.a:
                console.log('Press a key');
                this.moveOrigin(OriginCommon.LEFT);
                break;
            case cc.macro.KEY.d:
                console.log('Press d key');
                this.moveOrigin(OriginCommon.RIGHT);
                break;
        }
    }


    // update (dt) {}
}
