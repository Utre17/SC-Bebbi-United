"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <>
        <SiteHeader />
        {children}
      </>
    );
  }

  return (
    <>
      <div className="bg-texture" />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
