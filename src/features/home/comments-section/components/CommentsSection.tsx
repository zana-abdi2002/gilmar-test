import Image from "next/image";
import { Suspense } from "react";
import BackgroundVector from "../assets/comments-section-background-vector.svg";
import CommentAvatarsBackground from "./CommentAvatarsBackground";
import CommentsCarouselDataProvider from "./CommentsCarouselDataProvider";
import CommentsSectionHeader from "./CommentsSectionHeader";

function CommentsSection() {
  return (
    <div className="relative isolate mx-auto w-full max-w-360 px-[6.25vw]">
      <CommentsSectionHeader />

      <div className="relative isolate flex aspect-1260/474 w-full flex-col items-center justify-center">
        <Suspense>
          <CommentAvatarsBackground />
        </Suspense>

        <Suspense>
          <CommentsCarouselDataProvider />
        </Suspense>

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
