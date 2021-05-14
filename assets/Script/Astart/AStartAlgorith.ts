/**
 * A* 寻路核心算法
 * 
 */

class AStartNode {
    pos: cc.Vec2;
    parent: AStartNode; //当前节点的父节点 方便最后回溯路径
    startCost: number;  //起点到当前点的代价
    endCost: number;     //当前点到终点的预估代价
    totalCost: number;   //startCost + endCost
    isWall: boolean;     //是否是障碍物 判断是否可通过
}
export default class AStartAlgorith {
    private static _instance: AStartAlgorith = null;
    public static get Instance(): AStartAlgorith {
        if (this._instance == null) {
            this._instance = new AStartAlgorith();
        }
        return this._instance;
    }
    openList: Array<AStartNode> = [];   //开启列表
    closeList: Array<AStartNode> = [];  //关闭列表
    path: Array<AStartNode> = [];    //路径

    startNode: AStartNode = null;
    endNode: AStartNode = null;
    xCost: number = 10;
    yCost: number = 10;

    findPath(startPos, endPos) {
        this.rest();
        this.startNode = this.createAStartNode(startPos, null);
        this.endNode = this.createAStartNode(endPos, null);
        this.openList.push(this.startNode);
        this.searchPath();
    }
    searchPath() {
        let node = this.openList.shift();
        while(node != this.endNode) {
            
        }
    }
    rest() {
        this.openList = [];
        this.closeList = [];
        this.path = [];
        this.startNode = null;
        this.endNode = null;
    }

    createAStartNode(pos: cc.Vec2, parentNode: AStartNode, isWall: boolean = false): AStartNode {
        let node: AStartNode = new AStartNode();
        node.pos = pos;
        node.isWall = isWall;
        if (this.startNode) {

        }

        if (this.endNode) {
            node.endCost = this.manhattanPos(pos, this.endNode.pos);
        }
        return node;
    }

    //曼哈顿距离
    manhattanPos(pos1, pos2) {
        let h = Math.abs(pos1.x - pos2.x) * this.xCost + Math.abs(pos1.y - pos2.y) * this.yCost;
        return h;
    }

    //判断坐标是否相等
    checkPosSame(pos1, pos2) {
        if (pos1.x == pos2.x && pos1.y == pos2.y) {
            return true;
        }
        return false;
    }

}