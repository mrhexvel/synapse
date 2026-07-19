import { AppHeader } from "@/components/app-header";
import { PropsWithChildren } from "react";

export default function RestLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
