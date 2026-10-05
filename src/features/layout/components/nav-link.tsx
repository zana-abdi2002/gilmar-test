"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const baseClassName =
  "font-mid text-foreground hover:text-primary-start aria-[current=page]:text-primary-start focus-ring text-sm font-semibold transition-[color,transform] duration-200 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none";

const variantClassNames = {
  desktop: "inline-flex min-h-11 items-center rounded-lg px-1 leading-8",
  mobile: "flex min-h-12 items-center rounded-xl px-3",
};

type NavLinkProps = {
  href: string;
  variant: keyof typeof variantClassNames;
  onNavigate?: () => void;
  children: ReactNode;
};

function NavLink({ href, variant, onNavigate, children }: NavLinkProps) {
  const pathname = usePathname();
  const isCurrent =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      onClick={onNavigate}
      className={`${baseClassName} ${variantClassNames[variant]}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
