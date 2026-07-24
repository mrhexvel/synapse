import type { NodeStatus } from "@/components/react-flow/node-status-indicator";
import type { Realtime } from "inngest";
import { useRealtime } from "inngest/react";
import { useEffect, useState } from "react";
import { z } from "zod";

const statusDataSchema = z.object({
  nodeId: z.string(),
  status: z.enum(["loading", "success", "error"]),
});

interface UseNodeStatusOptions {
  nodeId: string;
  channel: string;
  topic: string;
  refreshToken: () => Promise<Realtime.Subscribe.ClientToken>;
}

export const useNodeStatus = ({
  nodeId,
  channel,
  topic,
  refreshToken,
}: UseNodeStatusOptions) => {
  const [status, setStatus] = useState<NodeStatus>("initial");

  const { messages } = useRealtime({
    channel,
    topics: [topic],
    token: refreshToken,
  });

  useEffect(() => {
    for (let index = messages.all.length - 1; index >= 0; index--) {
      const message = messages.all[index];

      if (message.kind === "run" || message.topic !== topic) {
        continue;
      }

      const parsed = statusDataSchema.safeParse(message.data);

      if (!parsed.success || parsed.data.nodeId !== nodeId) {
        continue;
      }

      setStatus(parsed.data.status as NodeStatus);
      return;
    }
  }, [messages.all, nodeId, topic]);

  return status;
};
