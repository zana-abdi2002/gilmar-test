import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ActionButtonSize = "large" | "medium";

type ActionButtonProps = {
  href: ComponentPropsWithoutRef<typeof Link>["href"];
  label: ReactNode;
  size?: ActionButtonSize;
  className?: string;
};

const sizeClasses: Record<ActionButtonSize, string> = {
  large: [
    "min-h-13",
    "gap-4",
    "p-1.5",
    "text-base",
    "leading-7.25",
    "[&>span:last-child]:size-10",
    "[&>span:last-child>svg]:size-6",
    "[&>span:first-child]:ps-2",
  ].join(" "),

  medium: [
    "h-[46px]",
    "w-[164px]",
    "gap-4",
    "p-1.5",
    "text-sm",
    "leading-[25px]",
    "[&>span:last-child]:size-[34px]",
    "[&>span:last-child>svg]:size-[20.4px]",
  ].join(" "),
};

function HomeActionButton({
  href,
  label,
  size = "medium",
  className,
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      className={[
        "group",
        "bg-primary-gradient",
        "font-mid",
        "text-navbar-on-gradient",
        "flex",
        "w-fit",
        "items-center",
        "justify-center",
        "rounded-full",
        "font-extrabold",
        "shadow-xs",
        "transition-transform",
        "duration-200",
        "ease-out",
        "hover:scale-105",
        "focus-visible:outline-foreground",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-4",
        "active:scale-95",
        "motion-reduce:transition-none",
        "motion-reduce:hover:scale-100",
        "motion-reduce:active:scale-100",
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="min-w-0 text-center">{label}</span>

      <span className="bg-background text-primary-start flex shrink-0 items-center justify-center rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.3),inset_-4px_-4px_6px_rgba(186,200,209,0.3)] transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transition-none">
        <ArrowBackIcon aria-hidden="true" className="ltr:-scale-x-100" />
      </span>
    </Link>
  );
}

export default HomeActionButton;
