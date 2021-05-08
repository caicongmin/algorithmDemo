// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property, menu} = cc._decorator;

@ccclass
@menu('Script/AStart')
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    start () {
        this.drawRect();
    }

    getPen(width : number = 1) {
        let drawNode = this.node.getChildByName("drawNode");
        let pen = drawNode.getComponent(cc.Graphics);
        pen.lineWidth = width;
        return pen;
    }
    drawRect() {

        let pen = this.getPen(1);
        pen.rect(200, 0, 100, 100);
        pen.stroke();
        pen.fill();
        let pen2 = this.getPen(10);
        pen2.rect(0, 0, 100, 100);
        pen2.stroke();
        pen2.fill();
    }

    // update (dt) {}
}
