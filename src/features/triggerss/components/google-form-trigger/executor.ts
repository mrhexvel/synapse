import type { NodeExecutor } from "@/features/executions/types";
import { googleFormTriggerChannel } from "@/inngest/channels/google-form-trigger";

type GoogleFormTriggerData = Record<string, unknown>;

export const googleFormTriggerExecutor: NodeExecutor<
  GoogleFormTriggerData
> = async ({ nodeId, context, step }) => {
  const ch = googleFormTriggerChannel();

  step.realtime.publish(
    `google-form-trigger-${nodeId}-status-loading`,
    ch.status,
    {
      nodeId,
      status: "loading",
    },
  );

  const result = await step.run("google-form-trigger", async () => context);

  step.realtime.publish(
    `google-form-trigger-${nodeId}-status-success`,
    ch.status,
    {
      nodeId,
      status: "success",
    },
  );

  return result;
};
