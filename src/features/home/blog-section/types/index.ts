import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BlogCard = {
  id: string;
  title: string;
  description: string;
  imgSrc: string | StaticImport; // TODO(prod) remove static import
};
