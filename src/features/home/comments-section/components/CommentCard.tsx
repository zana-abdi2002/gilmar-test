import { useTranslations } from "next-intl";
import Image from "next/image";
import QuoteIcon from "../assets/quote-icon.svg";
import { CommentAuthorRole } from "../types";

type Props = {
  comment: string;
  fullName: string;
  role: CommentAuthorRole;
};

function CommentCard({ comment, fullName, role }: Props) {
  const t = useTranslations("general.Roles");

  return (
    <div
      className="bg-navbar-surface flex w-full flex-col items-center gap-4 rounded-2xl border border-[#EEF3F6] p-2 text-center shadow-2xl"
      dir="rtl"
    >
      {/* quote icon */}
      <Image src={QuoteIcon} alt="" />
      {/* comment */}
      <p className="text-muted-foreground text-[0.875rem] font-semibold">
        {comment}
      </p>
      {/* name and role */}
      <div className="flex flex-col gap-1">
        <p className="font-extrabold">{fullName}</p>
        <p className="text-muted-foreground font-semibold">{t(role)}</p>
      </div>
    </div>
  );
}

export default CommentCard;
