import Image from "next/image";
import { getHomeComments } from "../lib/getHomeComments";

async function CommentAvatarsBackground() {
  const comments = await getHomeComments();
  const [avatar1, avatar2, avatar3, avatar4, avatar5] = comments
    .map((comment) => comment.author.avatar)
    .slice(0, 5);

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* start */}
      <Image
        src={avatar3.src}
        alt={avatar3.alt || ""}
        width={60}
        height={60}
        className="absolute inset-s-[15%] top-[20%] w-[5.13%] rounded-full object-contain"
      />
      <Image
        src={avatar1.src}
        alt={avatar1.alt || ""}
        width={50}
        height={50}
        className="absolute inset-s-[7.5%] top-[30%] w-[4.28%] rounded-full object-cover"
      />
      <Image
        src={avatar5.src}
        alt={avatar5.alt || ""}
        width={60}
        height={60}
        className="absolute inset-s-[10%] top-[60%] w-[5.13%] rounded-full object-cover"
      />

      {/* end */}
      <Image
        src={avatar1.src}
        alt={avatar1.alt || ""}
        width={60}
        height={60}
        className="absolute inset-e-[17%] top-[10%] w-[5.13%] rounded-full object-cover"
      />
      <Image
        src={avatar2.src}
        alt={avatar2.alt || ""}
        width={50}
        height={50}
        className="absolute inset-e-[22%] top-[30%] w-[4.28%] rounded-full object-cover"
      />
      <Image
        src={avatar3.src}
        alt={avatar3.alt || ""}
        width={60}
        height={60}
        className="absolute inset-e-[10%] top-[40%] w-[5.13%] rounded-full object-cover"
      />
      <Image
        src={avatar4.src}
        alt={avatar4.alt || ""}
        width={60}
        height={60}
        className="absolute inset-e-[22%] top-[60%] w-[5.13%] rounded-full object-cover"
      />
    </div>
  );
}

export default CommentAvatarsBackground;
