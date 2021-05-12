import Player from './Player';
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('Script/AStart/AStartLayer')
export default class AStartLayer extends cc.Component {
    @property(cc.Prefab)
    PlayerPrefab: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:
    selfPlayer: Player = null;
    enemyPlayer: Player = null;
    pen: cc.Graphics = null;
    drawNode: cc.Node = null;

    onLoad() {
        this.drawNode = this.node.getChildByName("drawNode");
    }

    start() {
        this.drawRect(10, 10);

        this.initPlayer();
    }

    initPen(width: number = 1) {
        if (!this.pen) {
            this.pen = this.drawNode.getComponent(cc.Graphics);
        }
        this.pen.lineWidth = width;
    }

    drawRect(row: number, col: number) {
        this.initMapArr(row, col);
        let totalWidth = cc.winSize.width;
        let totalHeight = cc.winSize.height;
        this.initPen(5);
        let rowWidth = totalWidth / row;
        let colHeight = totalHeight / col;
        for (let i = 0; i < 10; i++) {
            this.pen.moveTo(-totalWidth / 2, -i * colHeight + totalHeight / 2);
            this.pen.lineTo(totalWidth / 2, -i * colHeight + totalHeight / 2);
        }
        for (let j = 0; j < 10; j++) {
            this.pen.moveTo(j * rowWidth - totalWidth / 2, totalHeight / 2);
            this.pen.lineTo(j * rowWidth - totalWidth / 2, -totalHeight / 2);
        }
        this.pen.stroke();
    }
    initMapArr(row: number, col: number) {
        let totalWidth = cc.winSize.width;
        let totalHeight = cc.winSize.height;
        let rowWidth = totalWidth / row;
        let colHeight = totalHeight / col;
        let mapArr: Array<Array<cc.Vec2>> = [];
        for (let i = 0; i < 10; i++) {
            mapArr.push([]);
            for (let j = 0; j < 10; j++) {
                mapArr[i][j] = this.drawNode.convertToNodeSpaceAR(cc.v2(rowWidth * i + rowWidth / 2, colHeight * j + colHeight / 2));
            }
        }
        Player.initMap(mapArr, row, col);
    }

    initPlayer() {
        let selfPlayer = cc.instantiate(this.PlayerPrefab);
        selfPlayer.parent = this.drawNode;
        this.selfPlayer = selfPlayer.getComponent(Player);
        this.selfPlayer.setPos(5, 8);
        this.selfPlayer.setColor(cc.color(255, 255, 0), true);
    }

    // update (dt) {}
}
