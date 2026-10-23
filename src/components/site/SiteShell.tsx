import { DemoBanner } from "@/components/site/DemoBanner";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { getSiteConfig } from "@/config/active";

export function SiteShell({
  region,
  activePath,
  children,
}: {
  region: "us" | "in";
  activePath: string;
  children: React.ReactNode;
}) {
  const config = getSiteConfig(region);

  return (
    <div id="top" data-region={region} className="flex min-h-dvh flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <DemoBanner message={config.demo.banner} />
      <Header config={config} region={region} activePath={activePath} />
      <div className="flex-1 pb-20 xl:pb-0">
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer config={config} region={region} />
      </div>
      <MobileCallBar config={config} region={region} />
    </div>
  );
}
