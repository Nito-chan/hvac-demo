#!/usr/bin/env node

/**
 * Verify that every niche builds cleanly with the shared codebase.
 *
 * Vercel deploys one project per niche, so production builds stay separate.
 * This script is for local verification only. It clears `.next` between
 * builds to avoid reusing a cache produced with a different NEXT_PUBLIC_NICHE.
 */

import { existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const NICHES = ["hvac", "plumbing", "roofing", "electrician", "pest"];
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const nextDir = path.join(root, ".next");

const requested = process.argv
  .slice(2)
  .map((value) => value.replace(/^--/, "").trim().toLowerCase())
  .filter(Boolean);

const niches = requested.length ? requested : NICHES;
const unknown = niches.filter((niche) => !NICHES.includes(niche));

if (unknown.length) {
  console.error(
    `Unknown niche: ${unknown.join(", ")}. Choose from ${NICHES.join(", ")}.`,
  );
  process.exit(1);
}

if (!existsSync(nextBin)) {
  console.error("Next.js is not installed. Run `npm install` first.");
  process.exit(1);
}

console.log(
  "Building niche demos. This clears .next before each build, so stop any running dev server first.",
);

const startedAt = Date.now();

for (const [index, niche] of niches.entries()) {
  console.log(
    `\n[${index + 1}/${niches.length}] Building ${niche.toUpperCase()}...`,
  );
  rmSync(nextDir, { recursive: true, force: true });

  const result = spawnSync(process.execPath, [nextBin, "build"], {
    cwd: root,
    env: {
      ...process.env,
      NEXT_PUBLIC_NICHE: niche,
      NEXT_TELEMETRY_DISABLED: "1",
    },
    stdio: "inherit",
  });

  if (result.error) {
    console.error(`Could not start the build: ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`Build failed for ${niche}.`);
    process.exit(result.status ?? 1);
  }
}

const minutes = ((Date.now() - startedAt) / 60000).toFixed(1);
console.log(`\nAll ${niches.length} niche builds passed in ${minutes} min.`);
