import { parseRegion } from "@/lib/region";

export type PageSearchParams = Promise<
  Record<string, string | string[] | undefined>
>;

export async function regionFromSearchParams(
  searchParams?: PageSearchParams,
): Promise<"us" | "in"> {
  if (!searchParams) {
    return parseRegion(undefined);
  }

  const params = await searchParams;
  return parseRegion(params.region);
}
