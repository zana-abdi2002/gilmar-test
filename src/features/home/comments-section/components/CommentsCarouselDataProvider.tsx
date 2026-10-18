import { getHomeComments } from "../lib/getHomeComments";
import CommentsCarousel from "./CommentsCarousel";

async function CommentsCarouselDataProvider() {
  const comments = await getHomeComments();

  return (
    <>
      <CommentsCarousel comments={comments} />
    </>
  );
}

export default CommentsCarouselDataProvider;
