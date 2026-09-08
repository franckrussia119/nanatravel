import type { LucideIcon } from "lucide-react";

const TONES = {
  emerald: "bg-forest text-sand-light",
  gold: "bg-ochre text-sand-light",
  burgundy: "bg-clay text-sand-light",
  ivory: "bg-sand text-forest",
};

export function IllustrationTile({
  icon: Icon,
  label,
  tone = "emerald",
  className = "",
}: {
  icon: LucideIcon;
  label?: string;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${TONES[tone]} ${className}`}>
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-sand-light/10" />
      <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-sand-light/10" />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <Icon size={30} strokeWidth={1.3} />
        {label && <span className="text-xs font-medium opacity-90">{label}</span>}
      </div>
    </div>
  );
}
