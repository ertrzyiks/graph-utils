import { ClosestPathResults, NodeId } from "../types";

export function retrieveClosestPathDistance(results: ClosestPathResults, { to }: { to: NodeId }) {
  return results.data[to].distance
}
