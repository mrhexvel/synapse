import { requireAuth } from "@/lib/auth-utils";

export default async function WorkflowPage() {
  await requireAuth();

  return <div>Workflows</div>;
}
