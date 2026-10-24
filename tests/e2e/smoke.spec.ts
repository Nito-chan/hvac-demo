import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PUBLIC_ROUTES = [
  "/",
  "/services",
  "/services/ac-repair",
  "/areas",
  "/areas/kansas-city",
  "/pricing",
  "/reviews",
  "/about",
  "/gallery",
  "/contact",
  "/privacy",
  "/maintenance-plans",
  "/thank-you?region=us&ref=HS-DEMO-TEST&demo=1",
];

test.describe("public routes", () => {
  for (const route of PUBLIC_ROUTES) {
    test(`${route} renders without console errors or horizontal overflow`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") {
          const text = message.text();
          // Ignore Next.js dev-server HMR noise that is not an app defect.
          if (
            text.includes("webpack-hmr") ||
            text.includes("cross-origin request") ||
            text.includes("allowedDevOrigins")
          ) {
            return;
          }
          errors.push(text);
        }
      });

      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1").first()).toBeVisible();

      const overflow = await page.evaluate(() =>
        Math.max(
          0,
          document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
        ),
      );
      expect(overflow).toBeLessThanOrEqual(1);
      expect(errors).toEqual([]);
    });
  }
});

test("unknown routes render the custom 404", async ({ page }) => {
  const response = await page.goto("/definitely-not-a-page");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "This page is not part of the demo.",
    }),
  ).toBeVisible();
});

test("region-aware links and the India business render", async ({ page }) => {
  await page.goto("/services?region=us");
  const firstServiceHref = await page
    .locator("main a[href*='/services/']")
    .first()
    .getAttribute("href");
  expect(firstServiceHref).toContain("region=us");

  await page.goto("/services?region=in");
  await expect(
    page.getByRole("link", { name: /CoolNest AC Care/i }).first(),
  ).toBeVisible();
  const indiaHref = await page
    .locator("main a[href*='/services/']")
    .first()
    .getAttribute("href");
  expect(indiaHref).toContain("region=in");
});

test("mobile menu opens and closes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-375", "mobile-only behaviour");

  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const dialog = page.getByRole("dialog", { name: "Site menu" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link", { name: "Services" })).toBeVisible();
  await page.getByRole("button", { name: "Close menu" }).click();
  await expect(dialog).toBeHidden();
});

test("lead form validates, accepts a demo request and reaches thank-you", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one form submission per run");

  await page.goto("/contact");
  await page.getByRole("button", { name: "Send demo request" }).click();
  await expect(page.getByText("Please enter your name.")).toBeVisible();

  await page.getByLabel("Your name").fill("Demo Tester");
  await page.getByLabel(/^Phone/).fill("+1 (816) 555-0142");
  await page.getByLabel("City or ZIP / PIN").fill("Kansas City");
  await page.getByLabel("What do you need?").selectOption({ label: "AC repair" });
  await page.getByLabel(/I agree to be contacted/).check();

  await page.waitForTimeout(3_200);
  await page.getByRole("button", { name: "Send demo request" }).click();

  await page.waitForURL(/\/thank-you\?/, { timeout: 20_000 });
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Thank you",
  );
  await expect(page.getByText("Demo mode", { exact: true })).toBeVisible();
});

test("home page has no serious or critical accessibility violations", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one full axe pass per run");

  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  const serious = results.violations.filter(
    (violation) =>
      violation.impact === "serious" || violation.impact === "critical",
  );

  expect(
    serious.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      nodes: violation.nodes.map((node) => node.target),
    })),
  ).toEqual([]);
});
