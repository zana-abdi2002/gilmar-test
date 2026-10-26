import Link from "next/link";
import { SocialLinkProps } from "../types";

function SocialLink({ icon, url }: SocialLinkProps) {
  return (
    <div className="bg-primary-gradient flex size-10 items-center justify-center rounded-full text-white">
      <Link href={url} aria-label={`link to ${url}`} prefetch={false}>
        {icon}
      </Link>
    </div>
  );
}

export default SocialLink;
