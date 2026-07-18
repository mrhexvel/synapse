"use client";

import { trpc } from "@/trpc/client";

const Page = () => {
  const { data: users } = trpc.getUsers.useQuery();

  return (
    <div className="flex h-screen items-center justify-center">
      {JSON.stringify(users)}
    </div>
  );
};

export default Page;
