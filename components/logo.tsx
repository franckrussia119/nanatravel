export function LogoMark({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22.5" fill="#0f3d2e" stroke="#c9a227" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="17" stroke="#c9a227" strokeWidth="0.75" opacity="0.5" />
      {/* compass star */}
      <path d="M24 9 L27.2 20.8 L39 24 L27.2 27.2 L24 39 L20.8 27.2 L9 24 L20.8 20.8 Z" fill="#c9a227" />
      <circle cx="24" cy="24" r="3.2" fill="#0f3d2e" stroke="#f4efe2" strokeWidth="0.75" />
    </svg>
  );
}

export function Logo({
  size = 34,
  textClassName = "text-2xl",
  light = false,
  className = "",
}: {
  size?: number;
  textClassName?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      <span className="flex items-baseline gap-1.5 whitespace-nowrap">
        <span className={`font-display font-semibold tracking-tight ${textClassName} ${light ? "text-sand-light" : "text-forest"}`}>
          Nana
        </span>
        <span className={`font-display italic ${textClassName} text-ochre-light`}>Travel</span>
        <span className={`font-accent text-[0.65em] uppercase tracking-[0.18em] ${light ? "text-sand-light/60" : "text-ink/45"}`}>
          Services
        </span>
      </span>
    </span>
  );
}
