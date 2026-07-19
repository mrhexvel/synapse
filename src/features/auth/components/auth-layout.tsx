import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-bold"
        >
          <Image src="/logos/logo.svg" alt="Synapse" width={30} height={30} />
          Synapse
        </Link>
        {children}
      </div>
    </div>
  );
}
