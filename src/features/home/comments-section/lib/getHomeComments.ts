import { cacheLife } from "next/cache";
import { mockHomeComments } from "../mocks/mockHomeComments";
import { HomeComment } from "../types";

export async function getHomeComments(): Promise<HomeComment[]> {
  "use cache";
  cacheLife("weeks");

  return mockHomeComments;
}
