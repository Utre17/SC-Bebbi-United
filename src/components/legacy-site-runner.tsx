"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LegacySiteRunner() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      document.body.classList.remove("menu-open");
      return;
    }

    const revealAll = () => {
      document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
        element.classList.add("is-visible");
      });
    };

    revealAll();

    const frame = window.requestAnimationFrame(revealAll);
    const settleTimer = window.setTimeout(revealAll, 120);
    const lateTimer = window.setTimeout(revealAll, 400);

    const observer = new MutationObserver(() => {
      revealAll();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const existing = document.querySelector('script[data-legacy-site-runtime="true"]');
    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.src = `/legacy-site.js?ts=${Date.now()}`;
    script.async = true;
    script.dataset.legacySiteRuntime = "true";
    script.addEventListener("load", revealAll);
    document.body.appendChild(script);

    return () => {
      document.body.classList.remove("menu-open");
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.clearTimeout(lateTimer);
      script.removeEventListener("load", revealAll);
      script.remove();
    };
  }, [pathname]);

  return null;
}
