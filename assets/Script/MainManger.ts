const {ccclass, property} = cc._decorator;

@ccclass
export default class MainManger extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = '测试';

    onLoad() {

        let btn_01 = this.node.getChildByName('btn_01');
        btn_01['__flag'] = 1;
        btn_01.on('click', this.onClickToScene)
    }

    onDestroy() {

    }

    start () {
        // init logic
        this.label.string = this.text;
    }

    onClickToScene(button : cc.Button) {
        let flag = button.node['__flag'];

        console.log("############flag =>", flag);
        switch(flag) {
            case 1:
                cc.director.loadScene('AStart', () => {

                })
                break;
        }
    }
}
