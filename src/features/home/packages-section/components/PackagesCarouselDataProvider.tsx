import { getPackagesCarousel } from "../lib/getPackagesCarousel";
import PackagesCarousel from "./PackagesCarousel";

async function PackagesCarouselDataProvider() {
  const items = await getPackagesCarousel();

  return (
    <>
      <PackagesCarousel items={items} />
    </>
  );
}

export default PackagesCarouselDataProvider;
