import { requireAuth } from "@/lib/auth-utils";
import { trpc } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  const data = await trpc.getUsers();

  return (
    <div className="flex h-screen items-center justify-center">
      {JSON.stringify(data)}
    </div>
  );
};

export default Page;
