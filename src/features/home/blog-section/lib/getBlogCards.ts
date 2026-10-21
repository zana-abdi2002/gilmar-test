import { cacheLife } from "next/cache";
import { mockBlogCards } from "../mock/blog-cards";
import { BlogCard } from "../types";

export async function getBlogCards(): Promise<BlogCard[]> {
  "use cache";
  cacheLife("days");

  return mockBlogCards;
}
