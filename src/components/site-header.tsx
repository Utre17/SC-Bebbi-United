"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/site-data";
import { Icon } from "@/components/icon";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const syncScrollState = useEffectEvent(() => {
    setScrollY(window.scrollY);
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(syncScrollState);
    window.addEventListener("scroll", syncScrollState, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", syncScrollState);
    };
  }, [pathname]);

  const isScrolled = pathname !== "/" || scrollY > 80;

  const shellClass = isScrolled
    ? "border-white/10 bg-[linear-gradient(135deg,rgba(2,17,11,0.96),rgba(6,78,59,0.94))] shadow-[0_18px_60px_rgba(0,0,0,0.38)]"
    : "border-white/10 bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl";

  const linkClass = isScrolled ? "text-white/75 hover:text-[#34d399]" : "text-white/75 hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${shellClass}`}
      >
        <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#34d399] blur-xl opacity-20" />
              <Image
                src="/assets/images/logo.png"
                alt="SC Bebbi United Logo"
                width={44}
                height={44}
                className="relative h-11 w-auto object-contain drop-shadow-md"
                priority
              />
            </div>
            <div>
              <span className="block text-lg font-black leading-none tracking-tight text-white">
                SC BEBBI UNITED
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#34d399]">
                Basel 2025
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : linkClass
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="ml-3 inline-flex items-center rounded-full bg-[#10b981] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#34d399] hover:text-[#02110b]"
            >
              Mitmachen
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-2 text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Menü umschalten"
          >
            <Icon name={menuOpen ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(2,17,11,0.96)] shadow-[0_18px_50px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="mt-3 block rounded-2xl bg-[#10b981] px-4 py-3 text-center text-base font-bold text-white"
          >
            Jetzt Mitmachen
          </Link>
        </div>
      </div>
    </header>
  );
}
