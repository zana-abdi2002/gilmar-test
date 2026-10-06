import type { ReactNode } from "react";

type FloatingInfoPillProps = {
  label: string;
  icon: ReactNode;
  className?: string;
};

function FloatingInfoPill({
  label,
  icon,
  className = "",
}: FloatingInfoPillProps) {
  return (
    <div
      className={`bg-floating-pill font-mid text-foreground inline-flex h-full w-full items-center justify-end gap-[1.1429em] rounded-full py-[0.8571em] ps-[0.8571em] pe-[0.8571em] text-[2.4055cqw] leading-[2.2857em] font-semibold shadow-2xl backdrop-blur-[1.1429em] transition-transform duration-300 ease-out hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100 ${className}`}
    >
      <span
        aria-hidden="true"
        className="bg-primary-gradient text-navbar-on-gradient flex aspect-square h-[3.4286em] shrink-0 items-center justify-center rounded-full shadow-lg"
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1 text-center">{label}</span>
    </div>
  );
}

export default FloatingInfoPill;
