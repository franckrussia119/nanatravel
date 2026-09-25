"use client";

import * as LucideIcons from "lucide-react";
import { Reveal } from "./reveal";

export type ServicePriceItem = {
  iconName: string;
  name: string;
  price: string;
  note?: string;
};

function getIcon(name: string): any {
  return (LucideIcons as any)?.[name] ?? null;
}

export function ServicePriceGrid({
  title,
  subtitle,
  iconName,
  items,
}: {
  title: string;
  subtitle?: string;
  iconName: string;
  items: ServicePriceItem[];
}) {
  const SectionIcon = getIcon(iconName);
  return (
    <section className="mt-16">
      <Reveal>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest/10">
            {SectionIcon ? <SectionIcon size={22} strokeWidth={1.5} className="text-forest" /> : null}
          </div>
          <h2 className="font-display text-2xl text-forest sm:text-3xl">{title}</h2>
        </div>
        {subtitle ? (
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/60">{subtitle}</p>
        ) : null}
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(items ?? []).map((item: ServicePriceItem, i: number) => {
          const ItemIcon = getIcon(item?.iconName ?? "");
          return (
            <Reveal key={item?.name ?? i} delay={i * 50}>
              <div className="hover-rise group flex items-start gap-3 rounded-xl border border-ink/8 bg-sand-light p-4 shadow-sm hover:border-ochre/30 hover:shadow-md">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ochre/10">
                  {ItemIcon ? (
                    <ItemIcon size={16} strokeWidth={1.6} className="text-ochre" />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug text-ink/85">{item?.name ?? ""}</p>
                  <p className="mt-1 text-sm font-semibold text-forest">{item?.price ?? ""}</p>
                  {item?.note ? (
                    <p className="mt-0.5 text-xs text-ink/50">{item.note}</p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}