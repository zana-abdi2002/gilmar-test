import type { HTMLAttributes, ReactNode } from "react";

type FloatingInfoPillProps = {
  label: string;
  icon: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

function FloatingInfoPill({ label, icon, className }: FloatingInfoPillProps) {
  return (
    <div
      className={`bg-floating-pill font-mid text-foreground shadow-floating-pill inline-flex h-18 w-full max-w-62.25 items-center justify-end gap-4 rounded-full py-3 ps-3 pe-3 text-sm leading-8 font-semibold backdrop-blur-md transition-transform duration-300 ease-out hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100 max-md:gap-0 max-md:text-xs max-[28rem]:text-[9px] max-[22rem]:text-[6px] ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="bg-primary-gradient text-navbar-on-gradient shadow-floating-pill-icon flex size-12 shrink-0 items-center justify-center rounded-full"
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1 text-center">{label}</span>
    </div>
  );
}

export default FloatingInfoPill;
