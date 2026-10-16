import { useTranslations } from "next-intl";
import Image from "next/image";
import HeaderIcon from "../assets/comments-section-header-icon.svg";

function CommentsSectionHeader() {
  const t = useTranslations("Comments");

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {/* Icon */}
      <Image src={HeaderIcon} alt="" />
      {/* Title and description */}
      <div className="gap-2">
        <h2 className="text-[2rem] font-extrabold">{t("title")}</h2>
        <p className="text-muted-foreground text-[0.875rem] font-semibold">
          {t("description")}
        </p>
      </div>
    </div>
  );
}

export default CommentsSectionHeader;
