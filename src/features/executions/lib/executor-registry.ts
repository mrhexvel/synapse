import { httpRequestExecutor } from "@/features/executions/components/http-request/executor";
import { manualTriggerExecutor } from "@/features/triggerss/components/manual-trigger/executor";
import { NodeType } from "@/generated/prisma/enums";
import { NodeExecutor } from "../types";

export const executorRegistry: Record<NodeType, NodeExecutor> = {
  [NodeType.MANUAL_TRIGGER]: manualTriggerExecutor,
  [NodeType.INITIAL]: manualTriggerExecutor,
  [NodeType.HTTP_REQUEST]: httpRequestExecutor, // TODO: fix types
};

export const getExecutor = (type: NodeType): NodeExecutor => {
  const executor = executorRegistry[type];

  if (!executor) {
    throw new Error(`No executor found for node type: ${type}`);
  }

  return executor;
};
