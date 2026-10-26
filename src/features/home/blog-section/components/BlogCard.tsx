import Image from "next/image";
import { BlogCard as BlogCardType } from "../types";

type Props = Omit<BlogCardType, "id">;

function BlogCard({ title, description, imgSrc }: Props) {
  return (
    <div className="relative isolate aspect-408/482 w-full overflow-hidden rounded-2xl p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-102 hover:shadow-xl">
      <Image
        src={imgSrc}
        alt={title}
        fill

        className="object-cover"
      />
      {/* gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#070708] via-black/30 to-transparent" />

      {/* title and description */}
      <div className="pointer-events-none absolute inset-x-5 bottom-5 z-20">
        <h3 className="text-start text-[1rem] font-extrabold text-white">
          {title}
        </h3>
        <p className="text-start text-[0.875rem] font-semibold text-white/72">
          {description.length < 100
            ? description
            : description.slice(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
