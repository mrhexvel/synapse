import type { NodeExecutor } from "@/features/executions/types";
import { manualTriggerChannel } from "@/inngest/channels/manual-trigger";

type ManualTriggerData = Record<string, unknown>;

export const manualTriggerExecutor: NodeExecutor<ManualTriggerData> = async ({
  nodeId,
  context,
  step,
}) => {
  const ch = manualTriggerChannel();

  step.realtime.publish(`manual-trigger-${nodeId}-status-loading`, ch.status, {
    nodeId,
    status: "loading",
  });

  const result = await step.run("manual-trigger", async () => context);

  step.realtime.publish(`manual-trigger-${nodeId}-status-success`, ch.status, {
    nodeId,
    status: "success",
  });

  return result;
};
