export type NodeId = string
export type BaseData = {[key: string]: any}

export type ExtractNodeData<P> = P extends Graph<infer NodeData, infer EdgeData> ? NodeData : never
export type ExtractEdgeData<P> = P extends Graph<infer NodeData, infer EdgeData> ? EdgeData : never

export type NodeOf<Graph> = { id: NodeId } & ExtractNodeData<Graph>

export type NodeType<NodeData, EdgeData> = NodeData & {
  edges: {
    [index: string]: EdgeData & {
      exists: true
    }
  }
}

export type Graph<NodeData extends BaseData = {}, EdgeData extends BaseData = {}> = {
  [index: string]: NodeType<NodeData, EdgeData>
}

export interface ClosestPathData {
  [index: string]: { distance: number, previousNode: NodeId | null }
}

export interface ClosestPathResults {
  from: NodeId,
  data: ClosestPathData
}
