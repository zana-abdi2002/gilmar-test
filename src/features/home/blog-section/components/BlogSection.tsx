import BackgroundVector from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import BlogCardList from "./BlogCardList";
import BlogSectionHeader from "./BlogSectionHeader";

function BlogSection() {
  return (
    <div className="relative isolate mx-auto flex w-full max-w-360 flex-col items-center justify-between gap-10 px-[5.5vw]">
      <BlogSectionHeader />
      <BlogCardList />

      {/* background vector */}
      <Image
        src={BackgroundVector}
        alt=""
        className="pointer-events-none absolute inset-e-0 top-0 -z-10"
      />
    </div>
  );
}

export default BlogSection;
