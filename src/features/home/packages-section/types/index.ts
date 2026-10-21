import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type PackageCarouselItem = {
  id: string;
  imgSrc: string | StaticImport;
};
