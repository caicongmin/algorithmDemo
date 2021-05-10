// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property, menu} = cc._decorator;

@ccclass
@menu('Script/AStart')
export default class AStartLayer extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:
    pen: cc.Graphics = null;
    drawNode: cc.Node = null;

    onLoad () {
        this.drawNode = this.node.getChildByName("drawNode");
    }

    start () {
        this.drawRect(10, 10);
    }

    initPen(width : number = 1) {
        if (!this.pen) {
            this.pen = this.drawNode.getComponent(cc.Graphics);
        }
        this.pen.lineWidth = width;
    }

    drawRect(row : number, col : number) {
        let totalWidth = cc.winSize.width;
        let totalHeight = cc.winSize.height;
        this.initPen(5);
        let rowWidth = totalWidth / row;
        let colHeight = totalHeight / col;
        for (let i = 0; i < 10; i++) {
            this.pen.moveTo(-totalWidth / 2, -i*colHeight + totalHeight / 2);
            this.pen.lineTo(totalWidth / 2,-i*colHeight + totalHeight / 2);
        }
        this.pen.stroke();
        for (let j = 0; j < 10; j++) {
            this.pen.moveTo(j*rowWidth - totalWidth / 2, totalHeight / 2);
            this.pen.lineTo(j*rowWidth - totalWidth / 2, -totalHeight / 2);
        }
        this.pen.stroke();

    }


    // update (dt) {}
}
