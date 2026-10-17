import Image from "next/image";
import { Suspense } from "react";
import BackgroundVector from "../assets/comments-section-background-vector.svg";
import CommentsAvatarsBackground from "./CommentsAvatarsBackground";
import CommentsSectionCarousel from "./CommentsSectionCarousel";
import CommentsSectionHeader from "./CommentsSectionHeader";

function CommentsSection() {
  return (
    <div className="relative isolate mx-auto w-full max-w-360 px-[6.25vw]">
      <CommentsSectionHeader />

      <div className="relative isolate aspect-1196/597 w-full">
        <Suspense>
          <CommentsAvatarsBackground />
        </Suspense>

        <CommentsSectionCarousel />

        {/* map background vector */}
        <Image
          src={BackgroundVector}
          alt=""
          className="pointer-events-none absolute inset-0 -z-10 object-contain"
        />
      </div>
    </div>
  );
}

export default CommentsSection;
