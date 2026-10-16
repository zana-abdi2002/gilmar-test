import CommentsSectionBackground from "./CommentsSectionBackground";
import CommentsSectionCarousel from "./CommentsSectionCarousel";
import CommentsSectionHeader from "./CommentsSectionHeader";

function CommentsSection() {
  return (
    <div className="mx-auto w-full max-w-360 px-[18.8%]">
      <CommentsSectionHeader />
      <CommentsSectionBackground />
      <CommentsSectionCarousel />
    </div>
  );
}

export default CommentsSection;
