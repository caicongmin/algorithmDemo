/**
 * A* 寻路核心算法
 * 
 */

interface AStartNode {
    pos: cc.Vec2;
    parent: AStartNode; //当前节点的父节点 方便最后回溯路径
    startCost: number;  //起点到当前点的代价
    endCost:number;     //当前点到终点的预估代价
    totalCost:number;   //startCost + endCost
}
export default class AStartAlgorith {
    openList: Array<AStartNode> = [];   //开启列表
    closeList: Array<AStartNode> = [];  //关闭列表
    path:Array<AStartNode> = [];    //路径

    startNode:AStartNode = null;
    endNode:AStartNode = null;
    
}