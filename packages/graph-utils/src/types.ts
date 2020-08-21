export type NodeId = string
export type BaseData = Record<string, any>

export type NodeType<NodeData, EdgeData> = {
  id: NodeId
  data: NodeData
  edges: {
    [index: string]: {
      data: EdgeData
    }
  }
}

export type Graph<NodeData extends BaseData = {}, EdgeData extends BaseData = {}> = {
  nodes: {
    [index: string]: NodeType<NodeData, EdgeData>
  }
}

export interface ClosestPathData {
  [index: string]: { distance: number, previousNode: NodeId | null }
}

export interface ClosestPathResults {
  from: NodeId,
  data: ClosestPathData
}
