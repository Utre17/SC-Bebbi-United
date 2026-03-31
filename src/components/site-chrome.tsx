"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LegacySiteRunner } from "@/components/legacy-site-runner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <>
        <LegacySiteRunner />
        <SiteHeader key={pathname} />
        {children}
      </>
    );
  }

  return (
    <>
      <LegacySiteRunner />
      <div className="bg-texture" />
      <SiteHeader key={pathname} />
      {children}
      <SiteFooter />
    </>
  );
}
