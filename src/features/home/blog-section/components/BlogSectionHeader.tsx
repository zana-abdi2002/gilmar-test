import { useTranslations } from "next-intl";
import Image from "next/image";
import HeaderIcon from "../assets/blog-header-icon.svg";

function BlogSectionHeader() {
  const t = useTranslations("Blog");

  return (
    <div className="flex flex-col items-center justify-between gap-10">
      {/* icon */}
      <Image src={HeaderIcon} alt="" />
      {/* title and description */}
      <div>
        <h2 className="text-[2rem] font-extrabold">{t("title")}</h2>
        <p className="text-muted-foreground text-[0.875rem] font-semibold">
          {t("description")}
        </p>
      </div>
    </div>
  );
}

export default BlogSectionHeader;
