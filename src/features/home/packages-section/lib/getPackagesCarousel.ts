import { cacheLife } from "next/cache";
import { mockPackagesCarousel } from "../mocks/packagesCarousel";
import { PackageCarouselItem } from "../types";

export async function getPackagesCarousel(): Promise<PackageCarouselItem[]> {
  "use cache";
  cacheLife("weeks");

  return mockPackagesCarousel;
}
