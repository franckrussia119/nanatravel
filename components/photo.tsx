"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";

const PLACEHOLDER_GRADIENTS = [
  "from-forest to-teal",
  "from-ochre to-clay",
  "from-teal to-forest-light",
  "from-clay to-ochre-light",
];

function gradientFor(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return PLACEHOLDER_GRADIENTS[hash % PLACEHOLDER_GRADIENTS.length];
}

export function Photo({
  src,
  alt,
  className = "",
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Guards against the hydration race where a cached image finishes
  // loading before React attaches the onLoad listener.
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradientFor(
          label ?? alt
        )} text-sand-light`}
        role={loaded ? undefined : "img"}
        aria-label={loaded ? undefined : alt}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <ImageIcon size={22} strokeWidth={1.5} className="opacity-70" />
          {label && <span className="text-xs font-medium opacity-80">{label}</span>}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
