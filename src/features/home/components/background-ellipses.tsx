type BackgroundEllipsesProps = {
  className?: string;
};

function BackgroundEllipses({ className = "" }: BackgroundEllipsesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <span className="bg-surface-accent absolute -inset-s-35 -top-35 size-160 rounded-full blur-[210px]" />
      <span className="bg-surface-accent absolute -inset-e-35 -top-35 size-160 rounded-full blur-[210px]" />
    </div>
  );
}

export default BackgroundEllipses;
