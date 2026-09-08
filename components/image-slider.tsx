"use client";

import { useEffect, useState } from "react";
import { Photo } from "./photo";

export function ImageSlider({
  images,
  labels,
  className = "",
  interval = 4500,
  overlay = false,
}: {
  images: string[];
  labels?: string[];
  className?: string;
  interval?: number;
  overlay?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Photo src={src} alt={labels?.[i] ?? "Cameroon"} label={labels?.[i]} className="h-full w-full" />
        </div>
      ))}
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-5 bg-sand-light" : "w-1.5 bg-sand-light/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
