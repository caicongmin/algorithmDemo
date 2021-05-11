const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('Script/AStart/Player')
export default class Player extends cc.Component {

    public static mapArr:Array<Array<cc.Vec2>> = [];
    onLoad() {
    }
    setColor(color: cc.Color) {
        this.node.color = color;
    }

    setPos(x: number, y: number) {
        this.node.x = Player.mapArr[x][y].x;
        this.node.y = Player.mapArr[x][y].y;
    }

    start() {
        cc.tween(this.node)
        .repeatForever(
            cc.tween().to(0.5, {opacity: 125})
            .to(0.5, {opacity:255})
        )
        .start()
    }


    // update (dt) {}
}
