import { realtime } from "inngest";
import z from "zod";

export const GOOGLE_FORM_CHANNEL_NAME = "google-form-trigger-execution";

export const googleFormTriggerChannel = realtime.channel({
  name: () => GOOGLE_FORM_CHANNEL_NAME,
  topics: {
    status: {
      schema: z.object({
        nodeId: z.string(),
        status: z.enum(["loading", "success", "error"]),
      }),
    },
  },
});
