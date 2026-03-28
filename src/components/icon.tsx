import type { ReactElement, SVGProps } from "react";

type IconName =
  | "menu"
  | "x"
  | "arrowRight"
  | "arrowUpRight"
  | "calendar"
  | "users"
  | "shield"
  | "sparkles"
  | "mail"
  | "phone"
  | "mapPin"
  | "send"
  | "checkCircle"
  | "instagram"
  | "facebook"
  | "download"
  | "shoppingBag";

const paths: Record<IconName, ReactElement> = {
  menu: (
    <path
      d="M4 7h16M4 12h16M4 17h16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  x: (
    <path
      d="M6 6l12 12M18 6 6 18"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  arrowRight: (
    <path
      d="M5 12h14m-5-5 5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  arrowUpRight: (
    <path
      d="M7 17 17 7M9 7h8v8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  calendar: (
    <>
      <path
        d="M7 3v4M17 3v4M4 9h16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  users: (
    <>
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="10" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 10.87"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </>
  ),
  shield: (
    <path
      d="M12 3l7 3v6c0 4.97-3.03 8.88-7 10-3.97-1.12-7-5.03-7-10V6l7-3Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  sparkles: (
    <>
      <path
        d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 19l.8 1.9L8 22l-2.2.9L5 25l-.8-2.1L2 22l2.2-1.1L5 19Zm14-5 .8 1.9L22 17l-2.2.9L19 20l-.8-2.1L16 17l2.2-1.1L19 14Z"
        transform="translate(0 -1)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </>
  ),
  phone: (
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.64a2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.53-1.31a2 2 0 0 1 2.11-.45c.85.31 1.74.53 2.64.65A2 2 0 0 1 22 16.92Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  mapPin: (
    <>
      <path
        d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  send: (
    <path
      d="m22 2-7 20-4-9-9-4 20-7Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="m8.5 12 2.5 2.5 4.5-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </>
  ),
  facebook: (
    <path
      d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v5h4v-5h3.2l.8-4H13V9a1 1 0 0 1 1-1Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  download: (
    <>
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </>
  ),
  shoppingBag: (
    <>
      <path
        d="M6 8h12l-1 12H7L6 8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9 8a3 3 0 1 1 6 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </>
  ),
};

export function Icon({
  name,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
