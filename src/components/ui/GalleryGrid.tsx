import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { NicheScene } from "@/components/art/NicheScene";
import type { GalleryItem } from "@/config/types";
import { cn } from "@/lib/utils";

export function GalleryGrid({
  items,
  className,
}: {
  items: GalleryItem[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <figure
          key={item.id}
          className="group overflow-hidden rounded-card border border-line bg-surface shadow-card"
        >
          <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-surface-2">
            {item.image ? (
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover transition duration-500 motion-safe:group-hover:scale-[1.03]"
              />
            ) : item.scene ? (
              <NicheScene
                niche={item.scene.niche}
                state={item.scene.state}
                decorative
                className="h-full w-full"
              />
            ) : null}
            <Badge
              tone="inverse"
              className="absolute left-3 top-3 border-white/25 bg-ink/75 backdrop-blur-sm"
            >
              {item.tag}
            </Badge>
          </div>
          <figcaption className="p-5">
            <h3 className="font-display text-lg leading-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/70">
              Illustrative demo visual
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
