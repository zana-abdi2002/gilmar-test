import { getBlogCards } from "../lib/getBlogCards";
import BlogCard from "./BlogCard";

async function BlogCardList() {
  const blogCardsData = await getBlogCards();

  return (
    <div className="grid w-full grid-cols-1 items-center justify-between justify-items-center gap-6 sm:grid-cols-2 sm:justify-center lg:grid-cols-3">
      {blogCardsData.slice(0, 4).map((blogCard) => (
        <BlogCard
          key={blogCard.id}
          title={blogCard.title}
          description={blogCard.description}
          imgSrc={blogCard.imgSrc}
        />
      ))}
    </div>
  );
}

export default BlogCardList;
