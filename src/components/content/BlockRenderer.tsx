import Image from "next/image";
import { NicheScene } from "@/components/art/NicheScene";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { ContentBlock, NicheConfig, RegionId } from "@/config/types";
import { cn } from "@/lib/utils";

export function BlockRenderer({
  blocks,
  config,
  region,
}: {
  blocks: ContentBlock[];
  config: NicheConfig;
  region: RegionId;
}) {
  return (
    <>
      {blocks.map((block, index) => {
        const tone = index % 2 === 0 ? "default" : "muted";

        if (block.type === "richText") {
          const media = block.image ? (
            <figure className="overflow-hidden rounded-panel border border-line bg-surface-2 shadow-card">
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={block.image.width}
                height={block.image.height}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="h-full w-full object-cover"
              />
            </figure>
          ) : (
            <div className="rounded-panel border border-line bg-surface p-2 shadow-card">
              <NicheScene
                niche={config.niche}
                state={index % 2 === 0 ? "after" : "before"}
                decorative
                className="block h-auto w-full"
              />
              <div className="flex items-center gap-2 px-3 py-2.5 text-[10px] font-semibold text-muted">
                <Icon name="layers" className="h-3.5 w-3.5 text-brand" />
                Illustrative system view for this demo
              </div>
            </div>
          );

          const copy = (
            <div>
              <SectionHeading
                eyebrow={block.eyebrow}
                title={block.title}
                description={block.body[0]}
              />
              <div className="prose-lite mt-5 space-y-4 text-sm leading-relaxed sm:text-base">
                {block.body.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {block.bullets?.length ? (
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {block.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-ink-soft"
                    >
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                        <Icon name="check" className="h-2.5 w-2.5" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );

          const mediaFirst = block.imageSide === "left";
          return (
            <Section key={`rich-${index}`} tone={tone}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className={cn(mediaFirst ? "lg:order-1" : "lg:order-2")}>
                  {media}
                </div>
                <div className={cn(mediaFirst ? "lg:order-2" : "lg:order-1")}>
                  {copy}
                </div>
              </div>
            </Section>
          );
        }

        if (block.type === "featureGrid") {
          return (
            <Section key={`features-${index}`} tone={tone}>
              <SectionHeading
                eyebrow={block.eyebrow}
                title={block.title}
                description={block.intro}
                align="center"
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {block.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-card border border-line bg-surface p-5 shadow-card"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg leading-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          );
        }

        if (block.type === "process") {
          return (
            <Section key={`process-${index}`} tone={tone}>
              <SectionHeading eyebrow={block.eyebrow} title={block.title} />
              <ProcessSteps steps={block.steps} className="mt-10" />
            </Section>
          );
        }

        if (block.type === "faq") {
          return (
            <Section key={`faq-${index}`} tone={tone}>
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
                <div>
                  <SectionHeading eyebrow={block.eyebrow} title={block.title} />
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Still unsure? Send a demo request and the sample team will
                    show how the question would be handled.
                  </p>
                </div>
                <FaqList items={block.items} />
              </div>
            </Section>
          );
        }

        if (block.type === "cta") {
          return (
            <CTASection
              key={`cta-${index}`}
              config={config}
              region={region}
              title={block.title}
              description={block.description}
              primaryLabel={block.primaryLabel}
              secondaryLabel={block.secondaryLabel}
              primaryHref="/contact"
            />
          );
        }

        if (block.type === "comparison") {
          return (
            <Section key={`compare-${index}`} tone={tone}>
              <SectionHeading
                eyebrow={block.eyebrow}
                title={block.title}
                align="center"
              />
              <div className="mt-10 grid gap-4 lg:grid-cols-2">
                <div className="rounded-panel border border-line bg-surface-2 p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-muted">
                      <Icon name="alert" className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-xl text-ink">
                      {block.beforeTitle}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {block.before.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-muted/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-panel border border-brand/30 bg-brand-soft/60 p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-on-brand">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-xl text-ink">
                      {block.afterTitle}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {block.after.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
                      >
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          );
        }

        if (block.type === "checklist") {
          return (
            <Section key={`checklist-${index}`} tone={tone}>
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
                <div>
                  <SectionHeading
                    eyebrow={block.eyebrow}
                    title={block.title}
                    description={block.intro}
                  />
                  {block.note ? (
                    <p className="mt-5 rounded-xl border border-line bg-surface p-4 text-xs leading-relaxed text-muted">
                      {block.note}
                    </p>
                  ) : null}
                </div>
                <div className="rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8">
                  <Badge tone="brand">Demo checklist</Badge>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          );
        }

        return null;
      })}
    </>
  );
}
